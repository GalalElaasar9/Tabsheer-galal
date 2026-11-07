import { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import {
  ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Keyboard, BrushCleaning, ListTree, Map as MapIcon, Maximize, Minimize, Moon, NotebookPen, Pencil,
  MonitorPlay, PanelsTopLeft, Presentation, Redo2, Scan, Sun, Undo2, ZoomIn, ZoomOut,
} from 'lucide-react';
import { Annotations, type LaserPoint } from './Annotations';
import { ElementsPanel, HelpModal, NotesPanel, OutlinePanel, STYLED_TOOLS, StyleBar, Toolbar, type LibItem, type ToolbarPlace } from './Chrome';
import { FrameContext, type StepperApi } from './frame';
import { clamp, moveEl, readImage, uid } from './geom';
import type { Camera, ColorKey, El, FrameDef, LessonDef, Point, Rect, ShapeKind, Tool } from './types';
import { useAnnotations } from './useAnnotations';
import { useTheme } from '../lib/theme';
import { Mark } from '../brand/Logo';

const FRAME_W = 1280;
const FRAME_H = 720;
const GAP_X = 170;
const GAP_Y = 230;
const HEAD_H = 150;
const LABEL_H = 48;
const PEN_SIZES = [3, 6, 11];
const TEXT_SIZES = [24, 34, 50];
const INTERACTIVE = 'button, a, input, textarea, select, label, summary, details, [contenteditable="true"], [data-interactive]';

type Placed = FrameDef & { x: number; y: number; w: number; h: number; index: number };

function layout(lesson: LessonDef) {
  const cols = Math.max(...lesson.sections.map(s => s.frames.length));
  const rowW = cols * (FRAME_W + GAP_X) - GAP_X;
  const frames: Placed[] = [];
  const heads: { title: string; x: number; y: number }[] = [];
  let y = 0;
  lesson.sections.forEach(s => {
    heads.push({ title: s.title, x: rowW, y });
    y += HEAD_H;
    let rowH = 0;
    s.frames.forEach((f, i) => {
      const h = f.h ?? FRAME_H;
      frames.push({ ...f, x: (cols - 1 - i) * (FRAME_W + GAP_X), y, w: FRAME_W, h, index: frames.length });
      rowH = Math.max(rowH, h);
    });
    y += rowH + GAP_Y;
  });
  return { frames, heads, bounds: { x: 0, y: -LABEL_H, w: rowW, h: y - GAP_Y + LABEL_H } };
}

type Gesture =
  | { kind: 'pan'; sx: number; sy: number; cx: number; cy: number; moved: boolean }
  | { kind: 'pinch'; d0: number; mx: number; my: number; cam: Camera }
  | { kind: 'draw' | 'shape' | 'erase' | 'laser' }
  | { kind: 'drag'; id: string; wx: number; wy: number; orig: El; moved: boolean }
  | { kind: 'resize'; id: string; handle: string; wx: number; wy: number; orig: El };

export function Whiteboard({ lesson, onHome }: { lesson: LessonDef; onHome(): void }) {
  const { frames, heads, bounds } = useMemo(() => layout(lesson), [lesson]);
  const ann = useAnnotations(`board:${lesson.id}`);
  const { els, apply, checkpoint, commit } = ann;
  const [theme, toggleTheme] = useTheme();

  const [tool, setToolState] = useState<Tool>('select');
  const [color, setColor] = useState<ColorKey>('red');
  const [hlColor, setHlColor] = useState<ColorKey>('yellow');
  const [noteColor, setNoteColor] = useState<ColorKey>('yellow');
  const [sizeIdx, setSizeIdx] = useState(1);
  const [selected, setSelected] = useState<string | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [draft, setDraftState] = useState<El | null>(null);
  const draftRef = useRef<El | null>(null);
  const setDraft = (d: El | null) => { draftRef.current = d; setDraftState(d); };
  const [laser, setLaser] = useState<LaserPoint[]>([]);
  const posKey = `board-pos:${lesson.id}`;
  const [cur, setCur] = useState(() => clamp(Number(localStorage.getItem(posKey)) || 0, 0, frames.length - 1));
  const [present, setPresent] = useState(true);
  const [slides, setSlides] = useState(() => localStorage.getItem('board-slides') === '1');
  const slidesRef = useRef(slides);
  slidesRef.current = slides;
  const [toolsOpen, setToolsOpen] = useState(false);
  const [styleOpen, setStyleOpen] = useState(false);
  const [tbPlace, setTbPlace] = useState<ToolbarPlace>(() => {
    try { return JSON.parse(localStorage.getItem('board-toolbar') ?? '') as ToolbarPlace; } catch { return { dock: 'top' }; }
  });
  const tbPlaceRef = useRef(tbPlace);
  tbPlaceRef.current = tbPlace;
  const tbShownRef = useRef(true);
  const [idle, setIdle] = useState(false);
  const idleRef = useRef(false);
  const idleTimer = useRef(0);
  const [fragSteps, setFragSteps] = useState<Record<string, number>>({});
  const [panel, setPanel] = useState<'outline' | 'elements' | 'notes' | null>(null);
  const [help, setHelp] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [panning, setPanning] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const worldRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<SVGPatternElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cam = useRef<Camera>({ x: 0, y: 0, z: 1 });
  const anim = useRef(0);
  const gesture = useRef<Gesture | null>(null);
  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const space = useRef({ down: false, used: false });
  const fragMax = useRef(new Map<string, number>());
  const steppers = useRef(new Map<string, Set<StepperApi>>());

  /* ---------- Camera ---------- */
  const applyCam = useCallback(() => {
    const { x, y, z } = cam.current;
    const w = worldRef.current, p = patternRef.current;
    if (w) {
      w.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${z})`;
      w.style.setProperty('--inv', String(1 / z));
    }
    if (p) {
      let step = 34 * z;
      while (step < 16) step *= 4;
      p.setAttribute('width', String(step));
      p.setAttribute('height', String(step));
      p.setAttribute('x', String(((x % step) + step) % step));
      p.setAttribute('y', String(((y % step) + step) % step));
    }
    setZoom(prev => (Math.abs(prev - z) > 0.001 ? z : prev));
  }, []);

  const view = () => {
    const el = wrapRef.current!;
    return { w: el.clientWidth, h: el.clientHeight };
  };

  const toWorld = useCallback((clientX: number, clientY: number): [number, number] => {
    const r = wrapRef.current!.getBoundingClientRect();
    const { x, y, z } = cam.current;
    return [(clientX - r.left - x) / z, (clientY - r.top - y) / z];
  }, []);

  /** Camera that fits a rect between the docks. Slides mode: no frame label, tighter margins. */
  const fit = useCallback((r: Rect, panelOpen = panel, slideMode = slidesRef.current): Camera => {
    const { w, h } = view();
    let top = slideMode ? 0 : 70, left = slideMode ? 0 : 28, right = left;
    const bottom = slideMode ? 0 : 74;
    // Keep the docked toolbar in empty space, never over the lesson.
    if (tbShownRef.current) {
      const d = tbPlaceRef.current.dock;
      if (d === 'top') top = Math.max(top, 70);
      if (d === 'left') left += 62;
      if (d === 'right') right += 62;
    }
    if (panelOpen === 'elements') left += 310;
    else if (panelOpen) right += 310;
    const aw = w - left - right, ah = h - top - bottom;
    const label = slideMode ? 0 : LABEL_H;
    const rr = { x: r.x, y: r.y - label, w: r.w, h: r.h + label };
    const z = clamp(Math.min(aw / rr.w, ah / rr.h), 0.04, 2.5);
    return { z, x: left + aw / 2 - (rr.x + rr.w / 2) * z, y: top + ah / 2 - (rr.y + rr.h / 2) * z };
  }, [panel]);

  const flyTo = useCallback((to: Camera, ms = 520) => {
    cancelAnimationFrame(anim.current);
    const { w, h } = view();
    const from = { ...cam.current };
    const c0 = { x: (w / 2 - from.x) / from.z, y: (h / 2 - from.y) / from.z };
    const c1 = { x: (w / 2 - to.x) / to.z, y: (h / 2 - to.y) / to.z };
    const t0 = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - t0) / ms);
      const k = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const z = from.z * Math.pow(to.z / from.z, k);
      const cx = c0.x + (c1.x - c0.x) * k, cy = c0.y + (c1.y - c0.y) * k;
      cam.current = { z, x: w / 2 - cx * z, y: h / 2 - cy * z };
      applyCam();
      if (t < 1) anim.current = requestAnimationFrame(tick);
    };
    anim.current = requestAnimationFrame(tick);
  }, [applyCam]);

  const zoomAt = useCallback((sx: number, sy: number, z: number) => {
    cancelAnimationFrame(anim.current);
    const c = cam.current;
    const nz = clamp(z, 0.04, 4);
    const wx = (sx - c.x) / c.z, wy = (sy - c.y) / c.z;
    cam.current = { z: nz, x: sx - wx * nz, y: sy - wy * nz };
    applyCam();
  }, [applyCam]);

  const zoomBy = (k: number) => { const { w, h } = view(); zoomAt(w / 2, h / 2, cam.current.z * k); };

  /* ---------- Frames & teaching flow ---------- */
  const goTo = useCallback((i: number, dir = 1) => {
    const f = frames[clamp(i, 0, frames.length - 1)];
    setCur(f.index);
    setFragSteps(s => ({ ...s, [f.id]: dir >= 0 ? 0 : fragMax.current.get(f.id) ?? 0 }));
    wrapRef.current?.querySelectorAll<HTMLElement>('.frame-body').forEach(b => { b.scrollTop = 0; });
    if (slidesRef.current) showSlide(f);
    else flyTo(fit(f));
  }, [frames, fit, flyTo]);

  /** Slides mode: jump straight to the frame (no flight across the board) and fade it in. */
  function showSlide(f: Placed) {
    cancelAnimationFrame(anim.current);
    cam.current = fit(f, panel, true);
    applyCam();
    worldRef.current?.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 260, easing: 'ease-out' });
  }

  /** Jump to the next/previous slide, skipping any steps not yet revealed. */
  const skip = (dir: 1 | -1) => {
    const i = cur + dir;
    if (i >= 0 && i < frames.length) goTo(i, dir);
  };

  /** Slides = focus mode: fullscreen, the slide fills the screen, bars tuck away. */
  const setSlidesMode = (on: boolean, fromFullscreen = false) => {
    if (slidesRef.current === on) return;
    slidesRef.current = on;
    setSlides(on);
    setToolsOpen(false);
    try { localStorage.setItem('board-slides', on ? '1' : '0'); } catch { /* ignore */ }
    const f = frames[curRef.current];
    if (on) {
      if (!fromFullscreen && !document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {});
      showSlide(f);
      poke();
    } else {
      if (!fromFullscreen && document.fullscreenElement) document.exitFullscreen().catch(() => {});
      flyTo(fit(f, panel, false));
    }
    flash(on ? 'وضع التركيز · Esc للخروج' : 'السبورة: كل الدرس قدامك');
  };
  const toggleSlides = () => setSlidesMode(!slidesRef.current);
  const slidesModeRef = useRef(setSlidesMode);
  slidesModeRef.current = setSlidesMode;

  /** Show the focus-mode controls; they fade out again after a moment without the mouse. */
  function poke() {
    if (idleRef.current) { idleRef.current = false; setIdle(false); }
    clearTimeout(idleTimer.current);
    idleTimer.current = window.setTimeout(() => { idleRef.current = true; setIdle(true); }, 2500);
  }

  /* Leaving fullscreen (Esc, F11…) leaves focus mode too. */
  useEffect(() => {
    const onFs = () => { if (!document.fullscreenElement && slidesRef.current) slidesModeRef.current(false, true); };
    document.addEventListener('fullscreenchange', onFs);
    return () => { document.removeEventListener('fullscreenchange', onFs); clearTimeout(idleTimer.current); };
  }, []);

  const frameOnScreen = (f: Placed) => {
    const { w, h } = view();
    const { x, y, z } = cam.current;
    const cx = x + (f.x + f.w / 2) * z, cy = y + (f.y + f.h / 2) * z;
    return cx > 0 && cx < w && cy > 0 && cy < h && f.w * z > w * 0.35;
  };

  const next = () => {
    const f = frames[cur];
    if (!frameOnScreen(f)) { flyTo(fit(f)); return; }
    const max = fragMax.current.get(f.id) ?? 0;
    const s = fragSteps[f.id] ?? 0;
    if (present && s < max) { setFragSteps(p => ({ ...p, [f.id]: s + 1 })); return; }
    for (const st of steppers.current.get(f.id) ?? []) if (st.next()) return;
    if (cur < frames.length - 1) goTo(cur + 1, 1);
  };

  const prev = () => {
    const f = frames[cur];
    if (!frameOnScreen(f)) { flyTo(fit(f)); return; }
    const s = fragSteps[f.id] ?? 0;
    if (present && s > 0 && s <= (fragMax.current.get(f.id) ?? 0)) { setFragSteps(p => ({ ...p, [f.id]: s - 1 })); return; }
    for (const st of [...(steppers.current.get(f.id) ?? [])].reverse()) if (st.prev()) return;
    if (cur > 0) goTo(cur - 1, -1);
  };

  const togglePresent = () => {
    const f = frames[cur];
    setFragSteps(s => ({ ...s, [f.id]: fragMax.current.get(f.id) ?? 0 }));
    setPresent(p => !p);
    flash(present ? 'استكشاف حر: كل المحتوى ظاهر' : 'وضع الشرح: المحتوى بيظهر خطوة بخطوة');
  };

  const registerFrag = useCallback((id: string, at: number) => {
    fragMax.current.set(id, Math.max(fragMax.current.get(id) ?? 0, at));
  }, []);
  const registerStepper = useCallback((id: string, api: StepperApi) => {
    const set = steppers.current.get(id) ?? new Set();
    set.add(api);
    steppers.current.set(id, set);
    return () => { set.delete(api); };
  }, []);

  const curRef = useRef(cur);
  curRef.current = cur;
  const fitRef = useRef(fit);
  fitRef.current = fit;
  useLayoutEffect(() => {
    cam.current = fitRef.current(frames[curRef.current], null);
    applyCam();
    const onResize = () => { cam.current = fitRef.current(frames[curRef.current]); applyCam(); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [frames, applyCam]);

  useEffect(() => {
    try { localStorage.setItem(posKey, String(cur)); } catch { /* ignore */ }
  }, [cur, posKey]);

  /* Slides mode: clip the whole board (lesson + drawings) to the current frame. */
  useLayoutEffect(() => {
    const w = worldRef.current;
    if (!w) return;
    const f = frames[cur];
    w.style.clipPath = slides
      ? `inset(${f.y}px ${-(f.x + f.w)}px ${-(f.y + f.h)}px ${f.x}px)`
      : '';
  }, [slides, cur, frames]);

  /* Re-fit when a side panel opens or closes while showing slides. */
  useEffect(() => {
    if (slidesRef.current) { cam.current = fit(frames[curRef.current], panel, true); applyCam(); }
  }, [panel, fit, frames, applyCam]);

  /* ---------- Element helpers ---------- */
  const toastTimer = useRef(0);
  const flash = (msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 1800);
  };

  const setTool = useCallback((t: Tool) => {
    setToolState(t);
    setSelected(null);
    setEditing(null);
  }, []);

  const viewCenter = (): [number, number] => {
    const r = wrapRef.current!.getBoundingClientRect();
    return toWorld(r.left + r.width / 2, r.top + r.height / 2);
  };

  const insert = (el: El, edit = false) => {
    commit(list => [...list, el]);
    setToolState('select');
    setSelected(el.id);
    setEditing(edit ? el.id : null);
  };

  const insertLib = (item: LibItem, at?: [number, number]) => {
    const [x, y] = at ?? viewCenter();
    const z = cam.current.z;
    const scale = clamp(1 / z, 0.4, 6);
    if (item.kind === 'note') {
      const s = 230 / Math.max(z, 0.25);
      insert({ id: uid(), type: 'sticky', x: x - s / 2, y: y - s / 2, w: s, h: s, text: '', color: item.color }, true);
    } else {
      insert({ id: uid(), type: 'sticker', kind: item.kind, icon: item.icon, label: item.label, color: item.color, x: x - 50 * scale, y: y - 50 * scale, scale });
    }
  };

  const insertImage = async (file: Blob, at?: [number, number]) => {
    try {
      const img = await readImage(file);
      const [x, y] = at ?? viewCenter();
      const w = Math.min(img.w, 640 / cam.current.z);
      const h = w * (img.h / img.w);
      insert({ id: uid(), type: 'image', x: x - w / 2, y: y - h / 2, w, h, src: img.src });
    } catch {
      flash('تعذر فتح الصورة');
    }
  };

  const onText = useCallback((id: string, text: string) => {
    setEditing(null);
    const t = text.trim();
    commit(list => list.flatMap(el => {
      if (el.id !== id) return [el];
      if (el.type === 'text' && !t) return [];
      if (el.type === 'text' || el.type === 'sticky') return [{ ...el, text }];
      if (el.type === 'sticker') return [{ ...el, label: t }];
      return [el];
    }));
  }, [commit]);

  const removeSelected = () => {
    if (!selected) return;
    commit(list => list.filter(e => e.id !== selected));
    setSelected(null);
  };

  const duplicateSelected = () => {
    const el = els.find(e => e.id === selected);
    if (!el) return;
    const d = 28 / cam.current.z;
    const copy = { ...moveEl(el, d, d), id: uid() };
    commit(list => [...list, copy]);
    setSelected(copy.id);
  };

  /** Erase every drawing visible on screen right now (no confirmation: Ctrl+Z brings it back). */
  const clearScreen = () => {
    let r = wrapRef.current!.getBoundingClientRect();
    const slide = slidesRef.current ? document.querySelector('.frame.active')?.getBoundingClientRect() : null;
    if (slide) r = new DOMRect(Math.max(r.left, slide.left), Math.max(r.top, slide.top),
      Math.min(r.right, slide.right) - Math.max(r.left, slide.left), Math.min(r.bottom, slide.bottom) - Math.max(r.top, slide.top));
    const ids = new Set<string>();
    wrapRef.current!.querySelectorAll('.wb-world [data-el-id]').forEach(n => {
      const b = n.getBoundingClientRect();
      if (b.right > r.left && b.left < r.right && b.bottom > r.top && b.top < r.bottom) ids.add(n.getAttribute('data-el-id')!);
    });
    if (!ids.size) { flash('مفيش رسم على الشاشة'); return; }
    commit(list => list.filter(e => !ids.has(e.id)));
    setSelected(null);
    setEditing(null);
    flash('اتمسح الرسم اللي على الشاشة · Ctrl+Z للرجوع');
  };

  /** Erase all drawings on the whole board (also undoable). */
  const clearBoard = () => {
    if (!els.length) { flash('مفيش رسم على السبورة'); return; }
    commit([]);
    setSelected(null);
    setEditing(null);
    flash('اتمسح كل الرسم · Ctrl+Z للرجوع');
  };

  const eraseAt = (clientX: number, clientY: number) => {
    const r = 10;
    const ids = new Set<string>();
    for (const [dx, dy] of [[0, 0], [r, 0], [-r, 0], [0, r], [0, -r]]) {
      for (const n of document.elementsFromPoint(clientX + dx, clientY + dy)) {
        const id = (n as HTMLElement).closest?.('[data-el-id]')?.getAttribute('data-el-id');
        if (id) ids.add(id);
      }
    }
    if (ids.size) apply(list => list.filter(e => !ids.has(e.id)));
  };

  /* ---------- Pointer input ---------- */
  const capture = (e: React.PointerEvent) => wrapRef.current?.setPointerCapture(e.pointerId);
  const sizeWorld = (base: number) => base / cam.current.z;

  const startPan = (e: React.PointerEvent) => {
    if (slidesRef.current) return;
    cancelAnimationFrame(anim.current);
    gesture.current = { kind: 'pan', sx: e.clientX, sy: e.clientY, cx: cam.current.x, cy: cam.current.y, moved: false };
    setPanning(true);
    capture(e);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const target = e.target as HTMLElement;
    if (slidesRef.current) poke();
    if (styleOpen && !target.closest('.dock-style, .style-btn')) setStyleOpen(false);
    if (target.closest('.dock, .panel, .modal-back, .focus-ui')) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2) {
      if (slidesRef.current) return;
      const [a, b] = [...pointers.current.values()];
      gesture.current = { kind: 'pinch', d0: Math.hypot(a.x - b.x, a.y - b.y), mx: (a.x + b.x) / 2, my: (a.y + b.y) / 2, cam: { ...cam.current } };
      setDraft(null);
      capture(e);
      return;
    }
    if (pointers.current.size > 2) return;

    if (editing && !target.closest(`[data-el-id="${editing}"]`)) (document.activeElement as HTMLElement | null)?.blur();

    if (e.button === 1 || space.current.down || tool === 'hand') {
      e.preventDefault();
      startPan(e);
      return;
    }
    if (e.button !== 0) return;
    const [wx, wy] = toWorld(e.clientX, e.clientY);

    if (tool === 'select') {
      const handle = target.closest('[data-handle]');
      const sel = els.find(x => x.id === selected);
      if (handle && sel) {
        checkpoint();
        gesture.current = { kind: 'resize', id: sel.id, handle: handle.getAttribute('data-handle')!, wx, wy, orig: sel };
        capture(e);
        return;
      }
      const node = target.closest('[data-el-id]');
      if (node) {
        const id = node.getAttribute('data-el-id')!;
        if (id === editing) return;
        const el = els.find(x => x.id === id);
        if (!el) return;
        setSelected(id);
        gesture.current = { kind: 'drag', id, wx, wy, orig: el, moved: false };
        capture(e);
        return;
      }
      setSelected(null);
      if (target.closest(INTERACTIVE)) return;
      startPan(e);
      return;
    }

    capture(e);
    const pressure = e.pointerType === 'pen' ? e.pressure : 0.5;
    switch (tool) {
      case 'pen':
      case 'highlighter':
        gesture.current = { kind: 'draw' };
        setDraft({
          id: uid(), type: 'stroke', points: [[wx, wy, pressure]],
          color: tool === 'highlighter' ? hlColor : color,
          size: sizeWorld(PEN_SIZES[sizeIdx]), highlight: tool === 'highlighter',
        });
        break;
      case 'rect': case 'ellipse': case 'arrow': case 'line':
        gesture.current = { kind: 'shape' };
        setDraft({ id: uid(), type: 'shape', kind: tool as ShapeKind, x1: wx, y1: wy, x2: wx, y2: wy, color, size: sizeWorld(PEN_SIZES[sizeIdx]) });
        break;
      case 'eraser':
        checkpoint();
        gesture.current = { kind: 'erase' };
        eraseAt(e.clientX, e.clientY);
        break;
      case 'laser':
        gesture.current = { kind: 'laser' };
        setLaser(l => [...l, { x: wx, y: wy, t: performance.now() }]);
        break;
      case 'text':
        e.preventDefault();
        insert({ id: uid(), type: 'text', x: wx, y: wy - sizeWorld(TEXT_SIZES[sizeIdx]) * 0.8, text: '', color, fontSize: sizeWorld(TEXT_SIZES[sizeIdx]) }, true);
        break;
      case 'sticky': {
        e.preventDefault();
        const s = sizeWorld(230);
        insert({ id: uid(), type: 'sticky', x: wx - s / 2, y: wy - s / 2, w: s, h: s, text: '', color: noteColor }, true);
        break;
      }
    }
  };

  const moveCursor = (e: React.PointerEvent) => {
    const c = cursorRef.current;
    if (!c) return;
    const r = wrapRef.current!.getBoundingClientRect();
    c.style.left = `${e.clientX - r.left}px`;
    c.style.top = `${e.clientY - r.top}px`;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    moveCursor(e);
    if (slidesRef.current && e.pointerType === 'mouse') poke();
    if (pointers.current.has(e.pointerId)) pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const g = gesture.current;
    if (!g) return;
    const [wx, wy] = toWorld(e.clientX, e.clientY);

    switch (g.kind) {
      case 'pinch': {
        if (pointers.current.size < 2) return;
        const [a, b] = [...pointers.current.values()];
        const d = Math.hypot(a.x - b.x, a.y - b.y), mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
        const z = clamp(g.cam.z * (d / g.d0), 0.04, 4);
        const r = wrapRef.current!.getBoundingClientRect();
        const wmx = (g.mx - r.left - g.cam.x) / g.cam.z, wmy = (g.my - r.top - g.cam.y) / g.cam.z;
        cam.current = { z, x: mx - r.left - wmx * z, y: my - r.top - wmy * z };
        applyCam();
        break;
      }
      case 'pan':
        if (Math.abs(e.clientX - g.sx) + Math.abs(e.clientY - g.sy) > 3) { g.moved = true; space.current.used = true; }
        cam.current = { ...cam.current, x: g.cx + e.clientX - g.sx, y: g.cy + e.clientY - g.sy };
        applyCam();
        break;
      case 'draw': {
        const evs = e.nativeEvent.getCoalescedEvents?.() ?? [e.nativeEvent];
        const pts = (evs.length ? evs : [e.nativeEvent]).map(ev => {
          const [x, y] = toWorld(ev.clientX, ev.clientY);
          return [x, y, ev.pointerType === 'pen' ? ev.pressure : 0.5] as Point;
        });
        const d = draftRef.current;
        if (d?.type === 'stroke') setDraft({ ...d, points: [...d.points, ...pts] });
        break;
      }
      case 'shape':
      {
        const d = draftRef.current;
        if (d?.type !== 'shape') break;
        let x2 = wx, y2 = wy;
        if (e.shiftKey) {
          if (d.kind === 'rect' || d.kind === 'ellipse') {
            const s = Math.max(Math.abs(wx - d.x1), Math.abs(wy - d.y1));
            x2 = d.x1 + Math.sign(wx - d.x1) * s; y2 = d.y1 + Math.sign(wy - d.y1) * s;
          } else if (Math.abs(wx - d.x1) > Math.abs(wy - d.y1)) y2 = d.y1; else x2 = d.x1;
        }
        setDraft({ ...d, x2, y2 });
        break;
      }
      case 'erase':
        eraseAt(e.clientX, e.clientY);
        break;
      case 'laser':
        setLaser(l => [...l, { x: wx, y: wy, t: performance.now() }]);
        break;
      case 'drag': {
        const dx = wx - g.wx, dy = wy - g.wy;
        if (!g.moved) {
          if (Math.hypot(dx, dy) * cam.current.z < 3) return;
          g.moved = true;
          checkpoint();
        }
        apply(list => list.map(el => (el.id === g.id ? moveEl(g.orig, dx, dy) : el)));
        break;
      }
      case 'resize': {
        const dx = wx - g.wx, dy = wy - g.wy, o = g.orig;
        let n: El = o;
        if (o.type === 'shape') n = g.handle === 'p1' ? { ...o, x1: o.x1 + dx, y1: o.y1 + dy } : { ...o, x2: o.x2 + dx, y2: o.y2 + dy };
        else if (o.type === 'image') { const w = Math.max(30, o.w + dx); n = { ...o, w, h: w * (o.h / o.w) }; }
        else if (o.type === 'sticky') n = { ...o, w: Math.max(80, o.w + dx), h: Math.max(80, o.h + dy) };
        else if (o.type === 'sticker') n = { ...o, scale: clamp(o.scale * (1 + dx / (110 * o.scale)), 0.2, 12) };
        else if (o.type === 'text') n = { ...o, fontSize: clamp(o.fontSize * (1 + dy / Math.max(o.fontSize * 1.5, 1)), 6, 600) };
        apply(list => list.map(el => (el.id === g.id ? n : el)));
        break;
      }
    }
  };

  const onPointerUp = (e: React.PointerEvent) => {
    pointers.current.delete(e.pointerId);
    const g = gesture.current;
    if (g?.kind === 'pinch') {
      if (pointers.current.size === 0) gesture.current = null;
      return;
    }
    gesture.current = null;
    if (!g) return;
    if (g.kind === 'pan') setPanning(false);
    if (g.kind === 'draw' || g.kind === 'shape') {
      const d = draftRef.current;
      setDraft(null);
      const tiny = d?.type === 'shape' && Math.hypot(d.x2 - d.x1, d.y2 - d.y1) * cam.current.z < 6;
      if (d && !tiny) commit(list => [...list, d]);
    }
  };

  const onDoubleClick = (e: React.MouseEvent) => {
    if (tool !== 'select') return;
    const target = e.target as HTMLElement;
    const node = target.closest('[data-el-id]');
    if (node) {
      const el = els.find(x => x.id === node.getAttribute('data-el-id'));
      if (el && (el.type === 'text' || el.type === 'sticky' || (el.type === 'sticker' && el.kind !== 'mark'))) {
        setSelected(el.id);
        setEditing(el.id);
      }
      return;
    }
    if (target.closest(INTERACTIVE)) return;
    const frame = target.closest('[data-frame]');
    if (frame) goTo(Number(frame.getAttribute('data-frame')), 1);
  };

  /* Wheel: pan, Ctrl/pinch: zoom (needs a non-passive listener) */
  useEffect(() => {
    const el = wrapRef.current!;
    const onWheel = (e: WheelEvent) => {
      if ((e.target as HTMLElement).closest('.panel, .modal-back')) return;

      // In slides mode: wheel scrolls the active slide's body if it has scrollable content
      if (slidesRef.current) {
        const activeBody = el.querySelector<HTMLElement>('.frame.active .frame-body:not(.bare)');
        if (activeBody && activeBody.scrollHeight > activeBody.clientHeight) {
          const unit = e.deltaMode === 1 ? 28 : 1;
          activeBody.scrollTop += e.deltaY * unit;
          e.preventDefault();
          return;
        }
        return;
      }

      // In whiteboard mode: if hovering over an overflowing frame body, scroll it instead of board pan
      const frameBody = (e.target as HTMLElement).closest<HTMLElement>('.frame-body:not(.bare)');
      if (frameBody && frameBody.scrollHeight > frameBody.clientHeight && !e.ctrlKey && !e.metaKey) {
        const unit = e.deltaMode === 1 ? 28 : 1;
        const atTop = frameBody.scrollTop <= 0 && e.deltaY < 0;
        const atBottom = frameBody.scrollTop + frameBody.clientHeight >= frameBody.scrollHeight && e.deltaY > 0;
        if (!atTop && !atBottom) {
          frameBody.scrollTop += e.deltaY * unit;
          e.preventDefault();
          return;
        }
      }

      e.preventDefault();
      cancelAnimationFrame(anim.current);
      const unit = e.deltaMode === 1 ? 16 : 1;
      if (e.ctrlKey || e.metaKey) {
        const r = el.getBoundingClientRect();
        zoomAt(e.clientX - r.left, e.clientY - r.top, cam.current.z * Math.exp(-e.deltaY * unit * 0.0022));
      } else {
        const dx = (e.shiftKey ? e.deltaY : e.deltaX) * unit, dy = (e.shiftKey ? 0 : e.deltaY) * unit;
        cam.current = { ...cam.current, x: cam.current.x - dx, y: cam.current.y - dy };
        applyCam();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, [applyCam, zoomAt]);

  /* Laser trail fades out */
  useEffect(() => {
    if (!laser.length) return;
    const id = requestAnimationFrame(() => {
      const now = performance.now();
      setLaser(l => l.filter(p => now - p.t < 850));
    });
    return () => cancelAnimationFrame(id);
  }, [laser]);

  /* ---------- Keyboard, paste, drop ---------- */
  const keys = useRef<(e: KeyboardEvent) => void>(() => {});
  keys.current = (e: KeyboardEvent) => {
    const t = e.target as HTMLElement;
    if (t.closest?.('input, textarea, select, [contenteditable="true"]')) return;
    const mod = e.ctrlKey || e.metaKey;
    if (mod && e.code === 'KeyZ') { e.preventDefault(); if (e.shiftKey) ann.redo(); else ann.undo(); return; }
    if (mod && e.code === 'KeyY') { e.preventDefault(); ann.redo(); return; }
    if (mod && e.code === 'KeyD') { e.preventDefault(); duplicateSelected(); return; }
    if (mod || e.altKey) return;

    switch (e.key) {
      case 'ArrowDown': {
        const activeBody = wrapRef.current?.querySelector<HTMLElement>('.frame.active .frame-body:not(.bare)');
        if (activeBody && activeBody.scrollHeight > activeBody.clientHeight) {
          e.preventDefault();
          activeBody.scrollBy({ top: 90, behavior: 'smooth' });
          return;
        }
        break;
      }
      case 'ArrowUp': {
        const activeBody = wrapRef.current?.querySelector<HTMLElement>('.frame.active .frame-body:not(.bare)');
        if (activeBody && activeBody.scrollHeight > activeBody.clientHeight) {
          e.preventDefault();
          activeBody.scrollBy({ top: -90, behavior: 'smooth' });
          return;
        }
        break;
      }
      case 'ArrowLeft': case 'PageDown': e.preventDefault(); if (e.shiftKey) skip(1); else next(); return;
      case 'ArrowRight': case 'PageUp': e.preventDefault(); if (e.shiftKey) skip(-1); else prev(); return;
      case 'Home': goTo(0, 1); return;
      case 'End': goTo(frames.length - 1, -1); return;
      case 'Delete': case 'Backspace': removeSelected(); return;
      case 'Escape':
        setHelp(false);
        if (slides && tool === 'select' && !toolsOpen) setSlidesMode(false);
        else { setTool('select'); setToolsOpen(false); }
        return;
      case '+': case '=': if (!slides) zoomBy(1.2); return;
      case '-': case '_': if (!slides) zoomBy(1 / 1.2); return;
      case '?': setHelp(h => !h); return;
      case ' ':
        e.preventDefault();
        if (!e.repeat) space.current = { down: true, used: false };
        return;
    }
    if (e.shiftKey && e.code === 'Digit1') { if (!slides) flyTo(fit(bounds)); return; }
    const map: Record<string, Tool> = {
      KeyV: 'select', KeyH: 'hand', KeyP: 'pen', KeyM: 'highlighter', KeyE: 'eraser', KeyK: 'laser',
      KeyR: 'rect', KeyO: 'ellipse', KeyA: 'arrow', KeyL: 'line', KeyT: 'text', KeyN: 'sticky',
    };
    if (map[e.code]) { setTool(map[e.code]); return; }
    if (e.code === 'Digit0') { if (slides) showSlide(frames[cur]); else flyTo(fit(frames[cur])); }
    if (e.code === 'KeyI') fileRef.current?.click();
    if (e.code === 'KeyB') setPanel(p => (p === 'elements' ? null : 'elements'));
    if (e.code === 'KeyG') setPanel(p => (p === 'outline' ? null : 'outline'));
    if (e.code === 'KeyJ') setPanel(p => (p === 'notes' ? null : 'notes'));
    if (e.code === 'KeyF') toggleFullscreen();
    if (e.code === 'KeyS') togglePresent();
    if (e.code === 'KeyC') { if (e.shiftKey) clearBoard(); else clearScreen(); }
    if (e.code === 'KeyW') toggleSlides();
  };

  useEffect(() => {
    const down = (e: KeyboardEvent) => keys.current(e);
    const up = (e: KeyboardEvent) => {
      if (e.key !== ' ') return;
      const s = space.current;
      space.current = { down: false, used: false };
      const t = e.target as HTMLElement;
      if (!s.used && s.down && !t.closest?.('input, textarea, select, button, [contenteditable="true"]')) nextRef.current();
    };
    const paste = (e: ClipboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest?.('input, textarea, [contenteditable="true"]')) return;
      const file = [...(e.clipboardData?.files ?? [])].find(f => f.type.startsWith('image/'));
      if (file) { e.preventDefault(); insertImageRef.current(file); return; }
      const text = e.clipboardData?.getData('text/plain')?.trim();
      if (text) { e.preventDefault(); pasteTextRef.current(text); }
    };
    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('paste', paste);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('paste', paste);
    };
  }, []);
  const nextRef = useRef(next);
  nextRef.current = next;
  const insertImageRef = useRef(insertImage);
  insertImageRef.current = insertImage;
  const pasteTextRef = useRef((_text: string) => {});
  pasteTextRef.current = (text: string) => {
    const [x, y] = viewCenter();
    const fs = sizeWorld(TEXT_SIZES[1]);
    insert({ id: uid(), type: 'text', x, y, text, color, fontSize: fs });
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const at = toWorld(e.clientX, e.clientY);
    const item = e.dataTransfer.getData('application/x-wb-item');
    if (item) { insertLib(JSON.parse(item) as LibItem, at); return; }
    const file = [...e.dataTransfer.files].find(f => f.type.startsWith('image/'));
    if (file) insertImage(file, at);
  };

  const toggleFullscreen = () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.().catch(() => {});
  };

  const togglePanel = (p: 'outline' | 'elements' | 'notes') => setPanel(cur => (cur === p ? null : p));

  /* Toolbar moved, or shown/hidden in focus mode: re-fit so it never covers the slide. */
  const toolbarShown = !slides || toolsOpen || tool !== 'select';
  tbShownRef.current = toolbarShown;
  const tbFirst = useRef(true);
  useEffect(() => {
    if (tbFirst.current) { tbFirst.current = false; return; }
    const f = frames[curRef.current];
    if (slidesRef.current) { cancelAnimationFrame(anim.current); cam.current = fit(f, panel, true); applyCam(); }
    else flyTo(fit(f));
  }, [tbPlace, toolbarShown]);

  const placeToolbar = (p: ToolbarPlace) => {
    tbShownRef.current = toolbarShown;
    setTbPlace(p);
    try { localStorage.setItem('board-toolbar', JSON.stringify(p)); } catch { /* ignore */ }
  };

  /* ---------- Render ---------- */
  const swatch = !STYLED_TOOLS.includes(tool) ? null
    : tool === 'highlighter' ? `var(--pen-${hlColor})` : tool === 'sticky' ? `var(--note-${noteColor})` : `var(--pen-${color})`;
  const f = frames[cur];
  const drawing = tool !== 'select';
  const outline = useMemo(() => {
    let i = 0;
    return lesson.sections.map(s => ({ title: s.title, frames: s.frames.map(fr => ({ index: i++, title: fr.title })) }));
  }, [lesson]);

  return (
    <div
      ref={wrapRef}
      className={[
        'wb', `tool-${tool}`, panning && 'panning', slides && 'slides', slides && idle && 'idle',
        (toolsOpen || tool !== 'select') && 'tools-open',
      ].filter(Boolean).join(' ')}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDoubleClick={onDoubleClick}
      onDragOver={e => e.preventDefault()}
      onDrop={onDrop}
      onContextMenu={e => { if (!(e.target as HTMLElement).closest(INTERACTIVE)) e.preventDefault(); }}
    >
      <svg className="wb-grid" aria-hidden>
        <defs>
          <pattern id="wb-dots" ref={patternRef} patternUnits="userSpaceOnUse" width="34" height="34">
            <circle cx="1.6" cy="1.6" r="1.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wb-dots)" />
      </svg>

      <div ref={worldRef} className="wb-world">
        {heads.map(h => (
          <div key={h.title} className="wb-section" style={{ left: h.x, top: h.y }}>{h.title}</div>
        ))}
        <FramesLayer frames={frames} cur={cur} present={present} fragSteps={fragSteps}
          registerFrag={registerFrag} registerStepper={registerStepper} />
        <Annotations els={els} draft={draft} selected={selected} editing={editing} laser={laser} zoom={zoom} onText={onText} />
      </div>

      {drawing && <div className="wb-capture" />}
      {(tool === 'eraser' || tool === 'laser') && (
        <div ref={cursorRef} className={`wb-cursor ${tool}`} style={tool === 'eraser' ? { width: 24, height: 24 } : undefined} />
      )}

      {/* ---------- Chrome ---------- */}
      <div className="dock dock-tr">
        <button className="tb tb-wide" onClick={onHome} title="Tabasheer · كل الدروس">
          <Mark size={26} /> الدروس
        </button>
        <span className="dock-sep" />
        <div className="nav-title" style={{ minWidth: 0, maxWidth: 380, textAlign: 'right' }}>
          <span>{lesson.title}</span>
          <small>{lesson.subtitle}</small>
        </div>
        <button className={`tb ${panel === 'notes' ? 'on' : ''}`} title="سكريبت الشرح (J)" onClick={() => togglePanel('notes')}>
          <NotebookPen size={19} />
        </button>
        <button className={`tb ${panel === 'outline' ? 'on' : ''}`} title="محتوى الدرس (G)" onClick={() => togglePanel('outline')}>
          <ListTree size={19} />
        </button>
      </div>

      <Toolbar tool={tool} setTool={setTool} onImage={() => fileRef.current?.click()}
        elementsOpen={panel === 'elements'} toggleElements={() => togglePanel('elements')}
        swatch={swatch} styleOpen={styleOpen && !!swatch} toggleStyle={() => setStyleOpen(o => !o)} onClear={clearScreen}
        place={tbPlace} onPlace={placeToolbar}>
        {styleOpen && swatch && (
          <StyleBar tool={tool} color={color} setColor={setColor} hlColor={hlColor} setHlColor={setHlColor}
            noteColor={noteColor} setNoteColor={setNoteColor} size={sizeIdx} setSize={setSizeIdx} onPicked={() => setStyleOpen(false)} />
        )}
      </Toolbar>

      <div className="dock dock-tl">
        <button className="tb" title="تراجع (Ctrl+Z)" disabled={!ann.canUndo} onClick={ann.undo}><Undo2 size={19} /></button>
        <button className="tb" title="إعادة (Ctrl+Y)" disabled={!ann.canRedo} onClick={ann.redo}><Redo2 size={19} /></button>
        <span className="dock-sep" />
        <button className="tb" title="الوضع الليلي / النهاري" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</button>
        <button className="tb" title="ملء الشاشة (F)" onClick={toggleFullscreen}><Maximize size={19} /></button>
        <button className="tb" title="الاختصارات (?)" onClick={() => setHelp(true)}><Keyboard size={19} /></button>
      </div>

      <div className="dock dock-bottom">
        <button className={`tb tb-wide ${present ? 'on' : ''}`} onClick={togglePresent}
          title={present ? 'وضع الشرح: المحتوى بيظهر خطوة بخطوة (S)' : 'استكشاف حر: كل المحتوى ظاهر (S)'}>
          <Presentation size={18} /> {present ? 'وضع الشرح' : 'استكشاف حر'}
        </button>
        <span className="dock-sep" />
        <button className="tb" title="الشريحة السابقة على طول (Shift + →)" disabled={cur === 0} onClick={() => skip(-1)}><ChevronsRight size={21} /></button>
        <button className="tb" title="السابق (→)" onClick={prev}><ChevronRight size={22} /></button>
        <div className="nav-title">
          {f.title}
          <small>{cur + 1} / {frames.length}</small>
        </div>
        <button className="tb" title="التالي: الخطوة الجاية (←)" onClick={next} style={{ background: 'var(--primary)', color: 'var(--surface)' }}>
          <ChevronLeft size={22} />
        </button>
        <button className="tb" title="الشريحة الجاية على طول (Shift + ←)" disabled={cur === frames.length - 1} onClick={() => skip(1)}><ChevronsLeft size={21} /></button>
      </div>

      <div className="dock dock-bl">
        <div className="seg" role="group" aria-label="طريقة العرض">
          <button className={`tb tb-wide ${!slides ? 'on' : ''}`} title="السبورة: الدرس كله قدامك (W)" onClick={() => slides && toggleSlides()}>
            <PanelsTopLeft size={17} /> سبورة
          </button>
          <button className={`tb tb-wide ${slides ? 'on' : ''}`} title="شرائح: الشريحة الحالية بس (W)" onClick={() => !slides && toggleSlides()}>
            <MonitorPlay size={17} /> شرائح
          </button>
        </div>
        {!slides && (
          <>
            <span className="dock-sep" />
            <button className="tb" title="تصغير (−)" onClick={() => zoomBy(1 / 1.2)}><ZoomOut size={18} /></button>
            <button className="zoom-label" title="ملاءمة الإطار الحالي (0)" onClick={() => flyTo(fit(f))}>{Math.round(zoom * 100)}%</button>
            <button className="tb" title="تكبير (+)" onClick={() => zoomBy(1.2)}><ZoomIn size={18} /></button>
            <span className="dock-sep" />
            <button className="tb" title="ملاءمة الإطار الحالي (0)" onClick={() => flyTo(fit(f))}><Scan size={18} /></button>
            <button className="tb" title="نظرة عامة على الدرس (Shift+1)" onClick={() => flyTo(fit(bounds))}><MapIcon size={18} /></button>
          </>
        )}
      </div>

      {panel === 'outline' && <OutlinePanel sections={outline} cur={cur} onGo={i => goTo(i, 1)} onClose={() => setPanel(null)} />}
      {panel === 'notes' && (
        <NotesPanel index={cur} title={f.title} notes={f.notes} script={f.script}
          step={present ? fragSteps[f.id] ?? 0 : null} onClose={() => setPanel(null)} />
      )}
      {panel === 'elements' && <ElementsPanel onInsert={it => insertLib(it)} onClose={() => setPanel(null)} />}
      {help && <HelpModal onClose={() => setHelp(false)} />}

      {slides && (
        <>
          <div className="focus-ui focus-nav">
            <button title="الشريحة السابقة على طول (Shift + →)" disabled={cur === 0} onClick={() => skip(-1)}><ChevronsRight size={18} /></button>
            <button title="السابق (→)" onClick={prev}><ChevronRight size={20} /></button>
            <span className="focus-count">{cur + 1} / {frames.length}</span>
            <button title="التالي (←)" onClick={next}><ChevronLeft size={20} /></button>
            <button title="الشريحة الجاية على طول (Shift + ←)" disabled={cur === frames.length - 1} onClick={() => skip(1)}><ChevronsLeft size={18} /></button>
          </div>
          <div className="focus-ui focus-menu">
            <button className={toolsOpen || tool !== 'select' ? 'on' : ''} title="أدوات الرسم"
              onClick={() => { if (toolsOpen || tool !== 'select') { setToolsOpen(false); setTool('select'); } else setToolsOpen(true); }}>
              <Pencil size={17} />
            </button>
            <button title="امسح الرسم اللي على الشاشة (C)" onClick={clearScreen}><BrushCleaning size={17} /></button>
            <button className={panel === 'notes' ? 'on' : ''} title="سكريبت الشرح (J)" onClick={() => togglePanel('notes')}><NotebookPen size={17} /></button>
            <button className={panel === 'outline' ? 'on' : ''} title="محتوى الدرس (G)" onClick={() => togglePanel('outline')}><ListTree size={17} /></button>
            <button title="الوضع الليلي / النهاري" onClick={toggleTheme}>{theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}</button>
            <button title="خروج من وضع التركيز (Esc)" onClick={() => setSlidesMode(false)}><Minimize size={17} /></button>
          </div>
        </>
      )}
      {toast && <div className="toast">{toast}</div>}

      <input ref={fileRef} type="file" accept="image/*" hidden
        onChange={e => { const file = e.target.files?.[0]; if (file) insertImage(file); e.target.value = ''; }} />
    </div>
  );
}

/* ---------- Lesson frames ---------- */
const FramesLayer = memo(function FramesLayer({ frames, cur, present, fragSteps, registerFrag, registerStepper }: {
  frames: Placed[];
  cur: number;
  present: boolean;
  fragSteps: Record<string, number>;
  registerFrag(id: string, at: number): void;
  registerStepper(id: string, api: StepperApi): () => void;
}) {
  return (
    <>
      {frames.map(f => (
        <FrameView key={f.id} f={f} active={f.index === cur} revealing={present && f.index === cur}
          fragStep={fragSteps[f.id] ?? 0} registerFrag={registerFrag} registerStepper={registerStepper} />
      ))}
    </>
  );
});

const FrameView = memo(function FrameView({ f, active, revealing, fragStep, registerFrag, registerStepper }: {
  f: Placed;
  active: boolean;
  revealing: boolean;
  fragStep: number;
  registerFrag(id: string, at: number): void;
  registerStepper(id: string, api: StepperApi): () => void;
}) {
  const ctx = useMemo(() => ({
    revealing,
    fragStep,
    registerFrag: (at: number) => registerFrag(f.id, at),
    registerStepper: (api: StepperApi) => registerStepper(f.id, api),
  }), [revealing, fragStep, f.id, registerFrag, registerStepper]);
  const content = useMemo(() => f.render(), [f]);
  return (
    <section className={`frame ${active ? 'active' : ''}`} data-frame={f.index}
      style={{ left: f.x, top: f.y, width: f.w, height: f.h }} aria-label={f.title}>
      <div className="frame-label"><b>{f.index + 1}</b>{f.title}</div>
      {f.scene ? (
        <div className="frame-body bare">
          <FrameContext.Provider value={ctx}>{content}</FrameContext.Provider>
        </div>
      ) : (
        <div className="frame-body">
          <div className="frame-inner">
            <FrameContext.Provider value={ctx}>{content}</FrameContext.Provider>
          </div>
        </div>
      )}
    </section>
  );
});
