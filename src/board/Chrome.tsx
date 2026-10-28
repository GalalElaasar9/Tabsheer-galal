import {
  ArrowUpRight, BrushCleaning, ChevronDown, Circle, Eraser, GripHorizontal, GripVertical, Hand, Highlighter, ImagePlus,
  LocateFixed, Minus, MousePointer2,
  Pencil, Shapes, Square, StickyNote, Type, X,
} from 'lucide-react';
import { useRef } from 'react';
import type { ReactNode } from 'react';
import { COLORS, noteColor, penColor } from './types';
import type { ColorKey, StickerKind, Tool } from './types';

export const TOOLS: { id: Tool; icon: ReactNode; name: string; key: string }[] = [
  { id: 'select', icon: <MousePointer2 size={19} />, name: 'تحديد وتحريك', key: 'V' },
  { id: 'hand', icon: <Hand size={19} />, name: 'تحريك السبورة', key: 'H' },
  { id: 'pen', icon: <Pencil size={19} />, name: 'قلم', key: 'P' },
  { id: 'highlighter', icon: <Highlighter size={19} />, name: 'قلم تظليل', key: 'M' },
  { id: 'eraser', icon: <Eraser size={19} />, name: 'ممحاة', key: 'E' },
  { id: 'laser', icon: <LocateFixed size={19} />, name: 'مؤشر ليزر', key: 'K' },
  { id: 'rect', icon: <Square size={19} />, name: 'مستطيل', key: 'R' },
  { id: 'ellipse', icon: <Circle size={19} />, name: 'دائرة', key: 'O' },
  { id: 'arrow', icon: <ArrowUpRight size={19} />, name: 'سهم', key: 'A' },
  { id: 'line', icon: <Minus size={19} />, name: 'خط', key: 'L' },
  { id: 'text', icon: <Type size={19} />, name: 'نص', key: 'T' },
  { id: 'sticky', icon: <StickyNote size={19} />, name: 'ملاحظة لاصقة', key: 'N' },
];

/** Where the toolbar lives: docked to the top / a side edge (sides are vertical), or left where it was dropped. */
export type ToolbarPlace = { dock: 'top' | 'left' | 'right' } | { dock: 'free'; x: number; y: number };
const SNAP = 90;

export function Toolbar({ tool, setTool, onImage, elementsOpen, toggleElements, swatch, styleOpen, toggleStyle, onClear, place, onPlace, children }: {
  tool: Tool; setTool(t: Tool): void; onImage(): void; elementsOpen: boolean; toggleElements(): void;
  /** Current color of the active tool, or null when the tool has no style options. */
  swatch: string | null; styleOpen: boolean; toggleStyle(): void; onClear(): void;
  place: ToolbarPlace; onPlace(p: ToolbarPlace): void;
  /** The color/size dropdown, positioned next to the bar. */
  children?: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const drag = useRef<{ dx: number; dy: number } | null>(null);
  const vertical = place.dock === 'left' || place.dock === 'right';

  // While dragging, the bar is moved directly (horizontal, under the pointer); on drop it snaps or stays.
  const onGripDown = (e: React.PointerEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const el = ref.current!;
    const r = el.getBoundingClientRect();
    drag.current = { dx: Math.min(e.clientX - r.left, 30), dy: Math.min(e.clientY - r.top, 24) };
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    el.classList.add('dragging');
    Object.assign(el.style, { left: `${e.clientX - drag.current.dx}px`, top: `${e.clientY - drag.current.dy}px`, right: 'auto', transform: 'none', flexDirection: 'row' });
  };
  const onGripMove = (e: React.PointerEvent) => {
    e.stopPropagation();
    if (!drag.current) return;
    Object.assign(ref.current!.style, { left: `${e.clientX - drag.current.dx}px`, top: `${e.clientY - drag.current.dy}px` });
  };
  const onGripUp = (e: React.PointerEvent) => {
    e.stopPropagation();
    if (!drag.current) return;
    drag.current = null;
    const el = ref.current!;
    const box = el.getBoundingClientRect();
    const W = el.parentElement!.clientWidth, H = el.parentElement!.clientHeight;
    el.classList.remove('dragging');
    el.removeAttribute('style');
    if (e.clientX < SNAP) onPlace({ dock: 'left' });
    else if (e.clientX > W - SNAP) onPlace({ dock: 'right' });
    else if (e.clientY < SNAP) onPlace({ dock: 'top' });
    else onPlace({
      dock: 'free',
      x: Math.round(Math.min(Math.max(box.left, 6), W - box.width - 6)),
      y: Math.round(Math.min(Math.max(box.top, 6), H - box.height - 6)),
    });
  };

  return (
    <div ref={ref} className={`dock dock-top toolbar place-${place.dock} ${vertical ? 'vertical' : ''}`}
      style={place.dock === 'free' ? { left: place.x, top: place.y } : undefined} role="toolbar" aria-label="أدوات السبورة">
      <button className="tb grip" title="اسحب لتحريك الشريط · على الجنب بيبقى بالطول" aria-label="تحريك شريط الأدوات"
        onPointerDown={onGripDown} onPointerMove={onGripMove} onPointerUp={onGripUp} onPointerCancel={onGripUp}>
        {vertical ? <GripHorizontal size={16} /> : <GripVertical size={16} />}
      </button>
      {TOOLS.map((t, i) => (
        <span key={t.id} className="contents">
          {(i === 2 || i === 6 || i === 10) && <span className="dock-sep" />}
          <button className={`tb ${tool === t.id ? 'on' : ''}`} title={`${t.name} (${t.key})`} aria-label={t.name}
            aria-pressed={tool === t.id} onClick={() => setTool(t.id)}>
            {t.icon}<span className="key">{t.key}</span>
          </button>
        </span>
      ))}
      <span className="dock-sep" />
      <button className={`tb style-btn ${styleOpen ? 'on' : ''}`} title="اللون والسُمك" aria-label="اللون والسُمك" aria-expanded={styleOpen}
        disabled={!swatch} onClick={toggleStyle}>
        <i className="dot" style={{ background: swatch ?? 'var(--border)' }} /><ChevronDown size={13} />
      </button>
      <button className="tb" title="امسح الرسم اللي على الشاشة (C) · Ctrl+Z للرجوع" aria-label="امسح الرسم اللي على الشاشة" onClick={onClear}>
        <BrushCleaning size={19} /><span className="key">C</span>
      </button>
      <span className="dock-sep" />
      <button className="tb" title="إدراج صورة (I)" aria-label="إدراج صورة" onClick={onImage}><ImagePlus size={19} /><span className="key">I</span></button>
      <button className={`tb ${elementsOpen ? 'on' : ''}`} title="مكتبة العناصر (B)" aria-label="مكتبة العناصر" onClick={toggleElements}>
        <Shapes size={19} /><span className="key">B</span>
      </button>
      {children}
    </div>
  );
}

const SIZES = [0, 1, 2];
export const STYLED_TOOLS: Tool[] = ['pen', 'highlighter', 'rect', 'ellipse', 'arrow', 'line', 'text', 'sticky'];
const HL_COLORS: ColorKey[] = ['yellow', 'green', 'blue', 'pink'];
const NOTE_COLORS: ColorKey[] = ['yellow', 'blue', 'green', 'pink', 'orange', 'purple'];

/** Color and thickness dropdown under the toolbar. Picking a color closes it. */
export function StyleBar({ tool, color, setColor, hlColor, setHlColor, noteColor: nc, setNoteColor, size, setSize, onPicked }: {
  tool: Tool; onPicked(): void;
  color: ColorKey; setColor(c: ColorKey): void;
  hlColor: ColorKey; setHlColor(c: ColorKey): void;
  noteColor: ColorKey; setNoteColor(c: ColorKey): void;
  size: number; setSize(s: number): void;
}) {
  if (!STYLED_TOOLS.includes(tool)) return null;
  const isHl = tool === 'highlighter', isNote = tool === 'sticky';
  const list = isHl ? HL_COLORS : isNote ? NOTE_COLORS : COLORS.filter(c => c !== 'yellow');
  const active = isHl ? hlColor : isNote ? nc : color;
  const set = isHl ? setHlColor : isNote ? setNoteColor : setColor;
  return (
    <div className="dock dock-style" role="dialog" aria-label="اللون والسُمك">
      <div className="style-row">
        {list.map(c => (
          <button key={c} className={`swatch ${active === c ? 'on' : ''}`} aria-label={c}
            style={{ background: isNote ? noteColor(c) : penColor(c) }} onClick={() => { set(c); onPicked(); }} />
        ))}
      </div>
      {!isNote && (
        <div className="style-row">
          {SIZES.map(s => (
            <button key={s} className={`size-dot ${size === s ? 'on' : ''}`} title={['رفيع', 'متوسط', 'عريض'][s]} onClick={() => setSize(s)}>
              <i style={{ width: 5 + s * 5, height: 5 + s * 5 }} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ---------- Elements library ---------- */
export type LibItem =
  | { kind: StickerKind; icon: string; label: string; color: ColorKey }
  | { kind: 'note'; color: ColorKey };

export const LIBRARY: { title: string; items: LibItem[] }[] = [
  {
    title: 'مكونات الويب',
    items: [
      { kind: 'actor', icon: '👤', label: 'المستخدم', color: 'ink' },
      { kind: 'actor', icon: '🖥️', label: 'Browser', color: 'blue' },
      { kind: 'actor', icon: '🗄️', label: 'Web Server', color: 'orange' },
      { kind: 'actor', icon: '⚙️', label: 'Backend', color: 'orange' },
      { kind: 'actor', icon: '🗃️', label: 'Database', color: 'green' },
      { kind: 'actor', icon: '🔌', label: 'API', color: 'pink' },
      { kind: 'actor', icon: '🌐', label: 'الإنترنت', color: 'blue' },
      { kind: 'actor', icon: '📱', label: 'تطبيق موبايل', color: 'purple' },
      { kind: 'actor', icon: '☁️', label: 'Cloud', color: 'blue' },
    ],
  },
  {
    title: 'لغات وملفات',
    items: [
      { kind: 'actor', icon: '📄', label: 'HTML', color: 'orange' },
      { kind: 'actor', icon: '🎨', label: 'CSS', color: 'blue' },
      { kind: 'actor', icon: '⚡', label: 'JavaScript', color: 'yellow' },
    ],
  },
  {
    title: 'رسائل',
    items: [
      { kind: 'pill', icon: '', label: 'طلب HTTP', color: 'blue' },
      { kind: 'pill', icon: '', label: 'رد HTTP', color: 'green' },
      { kind: 'pill', icon: '', label: 'بيانات', color: 'pink' },
      { kind: 'pill', icon: '', label: 'URL', color: 'purple' },
      { kind: 'pill', icon: '', label: 'صفحة HTML', color: 'orange' },
      { kind: 'pill', icon: '', label: 'اكتب هنا', color: 'ink' },
    ],
  },
  {
    title: 'علامات',
    items: ['✅', '❌', '❓', '💡', '⚠️', '⭐', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '🔐'].map(icon => ({ kind: 'mark' as const, icon, label: '', color: 'ink' as const })),
  },
  {
    title: 'ملاحظات لاصقة',
    items: NOTE_COLORS.map(color => ({ kind: 'note' as const, color })),
  },
];

export function ElementsPanel({ onInsert, onClose }: { onInsert(item: LibItem): void; onClose(): void }) {
  return (
    <div className="panel panel-left">
      <div className="panel-head">
        <span>🧩 مكتبة العناصر</span>
        <button className="tb" onClick={onClose} aria-label="إغلاق"><X size={18} /></button>
      </div>
      <div className="panel-body">
        <p className="muted" style={{ fontSize: 12.5, fontWeight: 700, margin: '4px 4px 0' }}>اضغط على العنصر أو اسحبه للسبورة. دبل كليك على العنصر لتعديل اسمه.</p>
        {LIBRARY.map(g => (
          <div key={g.title}>
            <h4>{g.title}</h4>
            <div className="lib-grid">
              {g.items.map((it, i) => (
                <button
                  key={i}
                  className={it.kind === 'note' ? 'lib-note' : 'lib-item'}
                  style={it.kind === 'note' ? { background: noteColor(it.color) } : undefined}
                  draggable
                  onDragStart={e => e.dataTransfer.setData('application/x-wb-item', JSON.stringify(it))}
                  onClick={() => onInsert(it)}
                  title={it.kind === 'note' ? 'ملاحظة لاصقة' : it.label || it.icon}
                >
                  {it.kind === 'actor' && <><span>{it.icon}</span>{it.label}</>}
                  {it.kind === 'pill' && <b style={{ color: penColor(it.color), fontSize: 13 }}>{it.label}</b>}
                  {it.kind === 'mark' && <span>{it.icon}</span>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Lesson outline ---------- */
export function OutlinePanel({ sections, cur, onGo, onClose }: {
  sections: { title: string; frames: { index: number; title: string }[] }[];
  cur: number;
  onGo(i: number): void;
  onClose(): void;
}) {
  return (
    <div className="panel panel-right">
      <div className="panel-head">
        <span>🗂️ محتوى الدرس</span>
        <button className="tb" onClick={onClose} aria-label="إغلاق"><X size={18} /></button>
      </div>
      <div className="panel-body">
        {sections.map(s => (
          <div key={s.title}>
            <h4>{s.title}</h4>
            {s.frames.map(f => (
              <button key={f.index} className={`ol-item ${f.index === cur ? 'cur' : ''}`} onClick={() => onGo(f.index)}>
                <b>{f.index + 1}</b><span>{f.title}</span>
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Teacher notes ---------- */
export function NotesPanel({ index, title, notes, onClose }: { index: number; title: string; notes?: ReactNode; onClose(): void }) {
  return (
    <div className="panel panel-right">
      <div className="panel-head">
        <span>📝 ملاحظات المدرس</span>
        <button className="tb" onClick={onClose} aria-label="إغلاق"><X size={18} /></button>
      </div>
      <div className="panel-body notes-body">
        <h4>{index + 1} · {title}</h4>
        {notes ?? <p className="muted">مفيش ملاحظات للإطار ده.</p>}
      </div>
    </div>
  );
}

/* ---------- Shortcuts ---------- */
const KEYS: [string, string][] = [
  ['الإطار / الخطوة التالية', '← أو PageDown أو Space'],
  ['الإطار / الخطوة السابقة', '→ أو PageUp'],
  ['الشريحة الجاية / السابقة على طول', 'Shift + ← / →'],
  ['وضع التركيز (شرائح · ملء الشاشة)', 'W · Esc للخروج'],
  ['تحريك السبورة', 'اسحب الخلفية · Space + سحب · H'],
  ['تكبير وتصغير', 'Ctrl + عجلة الماوس · + / −'],
  ['ملاءمة الإطار الحالي', '0'],
  ['نظرة عامة على الدرس', 'Shift + 1'],
  ['تراجع / إعادة', 'Ctrl+Z / Ctrl+Y'],
  ['حذف العنصر المحدد', 'Delete'],
  ['مسح الرسم اللي على الشاشة', 'C'],
  ['مسح كل الرسم من السبورة', 'Shift + C'],
  ['تكرار العنصر المحدد', 'Ctrl + D'],
  ['تعديل نص / ملاحظة', 'دبل كليك'],
  ['لصق صورة أو نص', 'Ctrl + V'],
  ['رجوع لأداة التحديد', 'Esc'],
  ['ملء الشاشة', 'F'],
  ['محتوى الدرس', 'G'],
  ['ملاحظات المدرس', 'J'],
  ['وضع الشرح (إظهار تدريجي)', 'S'],
  ['هذه القائمة', '?'],
];

export function HelpModal({ onClose }: { onClose(): void }) {
  return (
    <div className="modal-back" onPointerDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="modal" role="dialog" aria-label="اختصارات لوحة المفاتيح">
        <div className="flex items-center justify-between">
          <p className="text-xl font-black">⌨️ الاختصارات</p>
          <button className="tb" onClick={onClose} aria-label="إغلاق"><X size={18} /></button>
        </div>
        <div className="keys">
          {KEYS.map(([a, k]) => <div key={a}><span>{a}</span><kbd>{k}</kbd></div>)}
        </div>
        <p className="muted mt-3 text-sm font-bold">
          الأدوات: {TOOLS.map(t => `${t.name} (${t.key})`).join(' · ')} · صورة (I) · العناصر (B)
        </p>
        <p className="muted mt-2 text-sm font-bold">كل اللي بترسمه بيتحفظ تلقائيًا على الجهاز ده لكل درس لوحده.</p>
      </div>
    </div>
  );
}
