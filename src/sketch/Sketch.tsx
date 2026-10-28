// Hand-drawn board primitives. Every primitive is positioned in frame pixels (1280 wide) and,
// when given `at`, is "drawn" on its turn: strokes trace themselves and words write from right to left.
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import rough from 'roughjs';
import type { Drawable, Options } from 'roughjs/bin/core';
import { R } from '../board/frame';
import type { ColorKey } from '../board/types';

const gen = rough.generator();
type Pt = [number, number];
type C = ColorKey;
const ink = (c: C) => `var(--pen-${c})`;
const soft = (c: C) => `var(--tint-${c})`;

function seedOf(...v: unknown[]) {
  let h = 17;
  for (const ch of JSON.stringify(v)) h = (h * 31 + ch.charCodeAt(0)) | 0;
  return (Math.abs(h) % 2_000_000) + 1;
}

function opts(c: C, sw: number, seed: number, extra: Options = {}): Options {
  return { stroke: ink(c), strokeWidth: sw, roughness: 1.15, bowing: 1.2, seed, ...extra };
}

/** Renders rough.js drawables as SVG paths in scene coordinates. */
function Ink({ drawables, delay = 0, dashed }: { drawables: Drawable[]; delay?: number; dashed?: boolean }) {
  const paths = useMemo(() => drawables.flatMap(d => gen.toPaths(d)), [drawables]);
  return (
    <svg className="sk-svg" width="1" height="1">
      {paths.map((p, i) => {
        const filled = p.fill && p.fill !== 'none';
        const dash = dashed && i === 0;
        return (
          <path key={i} d={p.d} pathLength={dash ? undefined : 1} className={filled ? 'fill' : dash ? 'dash' : undefined}
            style={{
              stroke: p.stroke, strokeWidth: p.strokeWidth, fill: p.fill ?? 'none',
              strokeDasharray: dash ? '12 11' : undefined, animationDelay: `${delay + i * 0.04}s`,
            }} />
        );
      })}
    </svg>
  );
}

type Base = { at?: number; delay?: number };

function Layer({ at, delay = 0, children, className = '' }: Base & { children: ReactNode; className?: string }) {
  return <R at={at} className={`sk ${className}`} style={{ '--d': `${delay}s` } as CSSProperties}>{children}</R>;
}

/* ---------- Text ---------- */
type TxtProps = Base & {
  x: number; y: number; size?: number; c?: C; w?: number;
  align?: 'center' | 'right' | 'left'; clean?: boolean; children: ReactNode; style?: CSSProperties;
};

export function Txt({ x, y, size = 34, c = 'ink', w, align = 'center', clean, at, delay, children, style }: TxtProps) {
  const tx = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return (
    <Layer at={at} delay={delay}>
      <div className={clean ? 'sk-clean' : 'hand'} style={{
        left: x, top: y, width: w, fontSize: size, color: ink(c), textAlign: align, transform: `translate(${tx}, -50%)`, ...style,
      }}>{children}</div>
    </Layer>
  );
}

/** Frame heading, top-right, with a hand-drawn underline. */
export function Heading({ children, sub, c = 'ink', u = 'blue' }: { children: ReactNode; sub?: ReactNode; c?: C; u?: C }) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useLayoutEffect(() => { if (ref.current) setW(ref.current.offsetWidth); }, [children]);
  const line = useMemo(() => (w ? [gen.curve([[1225, 104], [1225 - w * 0.5, 110], [1225 - w, 103]], opts(u, 3.5, seedOf('h', w)))] : []), [w, u]);
  return (
    <div className="sk">
      <div ref={ref} className="hand" style={{ right: 55, top: 22, fontSize: 56, color: ink(c), lineHeight: 1.3 }}>{children}</div>
      {line.length > 0 && <Ink drawables={line} />}
      {sub && <div className="hand" style={{ right: 58, top: 118, fontSize: 28, color: ink('ink'), opacity: 0.65 }}>{sub}</div>}
    </div>
  );
}

/* ---------- Shapes ---------- */
type BoxProps = Base & {
  x: number; y: number; w: number; h: number; c?: C; fill?: C; hachure?: boolean; sw?: number;
  size?: number; tc?: C; children?: ReactNode; rough?: number;
};

export function Box({ x, y, w, h, c = 'ink', fill, hachure, sw = 2.6, size = 32, tc, children, at, delay, rough: r }: BoxProps) {
  const d = useMemo(() => [gen.rectangle(x, y, w, h, opts(c, sw, seedOf('b', x, y, w, h), {
    roughness: r ?? 1.15,
    ...(fill ? { fill: hachure ? ink(fill) : soft(fill), fillStyle: hachure ? 'hachure' : 'solid', hachureGap: 9, fillWeight: 1.4 } : {}),
  }))], [x, y, w, h, c, fill, hachure, sw, r]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {children !== undefined && (
        <div className="hand sk-center" style={{ left: x, top: y, width: w, height: h, fontSize: size, color: ink(tc ?? c) }}><div>{children}</div></div>
      )}
    </Layer>
  );
}

export function Ellipse({ x, y, w, h, c = 'ink', fill, sw = 2.6, size = 32, tc, children, at, delay }: BoxProps) {
  const d = useMemo(() => [gen.ellipse(x + w / 2, y + h / 2, w, h, opts(c, sw, seedOf('e', x, y, w, h),
    fill ? { fill: soft(fill), fillStyle: 'solid' } : {}))], [x, y, w, h, c, fill, sw]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {children !== undefined && (
        <div className="hand sk-center" style={{ left: x, top: y, width: w, height: h, fontSize: size, color: ink(tc ?? c) }}><div>{children}</div></div>
      )}
    </Layer>
  );
}

/** Rough emphasis loop around an area (teacher circling something). */
export function Mark({ x, y, w, h, c = 'red', at, delay }: Base & { x: number; y: number; w: number; h: number; c?: C }) {
  const d = useMemo(() => [gen.ellipse(x + w / 2, y + h / 2, w, h, opts(c, 3.2, seedOf('m', x, y, w, h), { roughness: 2.2, bowing: 2 }))], [x, y, w, h, c]);
  return <Layer at={at} delay={delay}><Ink drawables={d} delay={delay} /></Layer>;
}

export function Line({ pts, c = 'ink', sw = 2.6, dashed, at, delay }: Base & { pts: Pt[]; c?: C; sw?: number; dashed?: boolean }) {
  const d = useMemo(() => [pts.length > 2 ? gen.curve(pts, opts(c, sw, seedOf('l', pts), dashed ? { roughness: 0.5 } : {}))
    : gen.line(pts[0][0], pts[0][1], pts[1][0], pts[1][1], opts(c, sw, seedOf('l', pts), dashed ? { roughness: 0.5 } : {}))], [pts, c, sw, dashed]);
  return <Layer at={at} delay={delay}><Ink drawables={d} delay={delay} dashed={dashed} /></Layer>;
}

export function Underline({ x, y, w, c = 'red', at, delay }: Base & { x: number; y: number; w: number; c?: C }) {
  return <Line pts={[[x, y], [x + w * 0.5, y + 5], [x + w, y - 1]]} c={c} sw={3.4} at={at} delay={delay} />;
}

/** Red strike through a word or a wrong statement. */
export function Strike({ x, y, w, c = 'red', at, delay }: Base & { x: number; y: number; w: number; c?: C }) {
  return <Line pts={[[x, y + 4], [x + w * 0.5, y - 2], [x + w, y + 3]]} c={c} sw={4} at={at} delay={delay} />;
}

/** Arrow from → to. `bend` curves it (px, + bends to the right of travel). */
export function Arrow({ from, to, c = 'ink', bend = 0, sw = 2.8, dashed, both, label, lsize = 28, loff = -26, lc, at, delay }: Base & {
  from: Pt; to: Pt; c?: C; bend?: number; sw?: number; dashed?: boolean; both?: boolean;
  label?: ReactNode; lsize?: number; loff?: number; lc?: C;
}) {
  const [x1, y1] = from, [x2, y2] = to;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const nx = -(y2 - y1) / len, ny = (x2 - x1) / len;
  const mx = (x1 + x2) / 2 + nx * bend, my = (y1 + y2) / 2 + ny * bend;
  const d = useMemo(() => {
    const o = opts(c, sw, seedOf('a', from, to, bend), dashed ? { roughness: 0.5 } : {});
    const body = bend ? gen.curve([[x1, y1], [mx, my], [x2, y2]], o) : gen.line(x1, y1, x2, y2, o);
    const head = (tip: Pt, tail: Pt) => {
      const a = Math.atan2(tip[1] - tail[1], tip[0] - tail[0]), k = 18 + sw * 2;
      return gen.linearPath([
        [tip[0] - k * Math.cos(a - 0.45), tip[1] - k * Math.sin(a - 0.45)], tip,
        [tip[0] - k * Math.cos(a + 0.45), tip[1] - k * Math.sin(a + 0.45)],
      ], opts(c, sw, seedOf('ah', tip)));
    };
    const list = [body, head([x2, y2], bend ? [mx, my] : [x1, y1])];
    if (both) list.push(head([x1, y1], bend ? [mx, my] : [x2, y2]));
    return list;
  }, [x1, y1, x2, y2, mx, my, c, sw, dashed, both, bend, from, to]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} dashed={dashed} />
      {label && (
        <div className="hand" style={{
          left: mx + nx * loff * Math.sign(bend || 1), top: my + ny * loff * Math.sign(bend || 1),
          fontSize: lsize, color: ink(lc ?? c), transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap',
        }}>{label}</div>
      )}
    </Layer>
  );
}

/** Emoji doodle inside a sketched circle, with an optional handwritten caption. */
export function Doodle({ x, y, icon, size = 96, c = 'ink', ring = true, fill, label, lsize = 30, lc, at, delay }: Base & {
  x: number; y: number; icon: string; size?: number; c?: C; ring?: boolean; fill?: C;
  label?: ReactNode; lsize?: number; lc?: C;
}) {
  const d = useMemo(() => (ring ? [gen.ellipse(x, y, size, size, opts(c, 2.6, seedOf('d', x, y, size),
    fill ? { fill: soft(fill), fillStyle: 'solid' } : {}))] : []), [x, y, size, c, ring, fill]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      <div className="sk-emoji" style={{ left: x, top: y, fontSize: size * 0.5 }}>{icon}</div>
      {label && <div className="hand" style={{ left: x, top: y + size / 2 + lsize * 0.75, fontSize: lsize, color: ink(lc ?? c), transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}>{label}</div>}
    </Layer>
  );
}

/** Circled step number. */
export function Num({ x, y, n, c = 'red', at, delay }: Base & { x: number; y: number; n: number; c?: C }) {
  const d = useMemo(() => [gen.ellipse(x, y, 46, 46, opts(c, 2.6, seedOf('n', x, y, n), { fill: soft(c), fillStyle: 'solid' }))], [x, y, n, c]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      <div className="hand sk-num" style={{ left: x, top: y, color: ink(c) }}>{n.toLocaleString('ar-EG')}</div>
    </Layer>
  );
}

/** Sticky note, slightly tilted. */
export function Note({ x, y, w, h, color = 'yellow', rot = -2, size = 30, at, delay, children }: Base & {
  x: number; y: number; w: number; h: number; color?: C; rot?: number; size?: number; children: ReactNode;
}) {
  return (
    <Layer at={at} delay={delay}>
      <div className="hand sk-note" style={{ left: x, top: y, width: w, height: h, fontSize: size, background: `var(--note-${color})`, transform: `rotate(${rot}deg)` }}>
        <div>{children}</div>
      </div>
    </Layer>
  );
}

/** A sheet of paper (file) with a folded corner. */
export function Paper({ x, y, w, h, c = 'ink', label, children, at, delay, size = 24 }: Base & {
  x: number; y: number; w: number; h: number; c?: C; label?: ReactNode; children?: ReactNode; size?: number;
}) {
  const d = useMemo(() => {
    const k = Math.min(36, w * 0.2), o = opts(c, 2.4, seedOf('p', x, y, w, h), { fill: 'var(--surface)', fillStyle: 'solid' });
    return [
      gen.polygon([[x, y], [x + w - k, y], [x + w, y + k], [x + w, y + h], [x, y + h]], o),
      gen.linearPath([[x + w - k, y], [x + w - k, y + k], [x + w, y + k]], opts(c, 2, seedOf('pc', x, y))),
    ];
  }, [x, y, w, h, c]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {label && <div className="hand" style={{ left: x + w / 2, top: y - 24, fontSize: 26, color: ink(c), transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}>{label}</div>}
      {children && <div className="sk-in" style={{ left: x + 14, top: y + 14, width: w - 28, height: h - 28, fontSize: size, paddingTop: Math.min(36, w * 0.2) * 0.6 }}>{children}</div>}
    </Layer>
  );
}

/** Sketched browser window. */
export function Browser({ x, y, w, h, url, c = 'blue', children, at, delay, size = 26 }: Base & {
  x: number; y: number; w: number; h: number; url?: string; c?: C; children?: ReactNode; size?: number;
}) {
  const d = useMemo(() => [
    gen.rectangle(x, y, w, h, opts(c, 2.6, seedOf('w', x, y, w, h), { fill: 'var(--surface)', fillStyle: 'solid' })),
    gen.line(x, y + 44, x + w, y + 44, opts(c, 2.2, seedOf('wl', x, y))),
    ...[0, 1, 2].map(i => gen.circle(x + 22 + i * 20, y + 22, 11, opts(c, 1.8, seedOf('wd', x, i)))),
    gen.rectangle(x + 84, y + 10, w - 100, 24, opts(c, 1.6, seedOf('wa', x, y, w))),
  ], [x, y, w, h, c]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {url && <div className="sk-url" style={{ left: x + 94, top: y + 22, maxWidth: w - 116 }}>{url}</div>}
      {children && <div className="sk-in" style={{ left: x + 16, top: y + 56, width: w - 32, height: h - 68, fontSize: size }}>{children}</div>}
    </Layer>
  );
}

/** Database cylinder. */
export function Cylinder({ x, y, w, h, c = 'green', label, size = 30, at, delay }: Base & {
  x: number; y: number; w: number; h: number; c?: C; label?: ReactNode; size?: number;
}) {
  const e = Math.min(36, h * 0.22);
  const d = useMemo(() => {
    const o = (k: string) => opts(c, 2.6, seedOf('cy', k, x, y, w, h));
    return [
      gen.path(`M ${x} ${y + e / 2} L ${x} ${y + h - e / 2} A ${w / 2} ${e / 2} 0 0 0 ${x + w} ${y + h - e / 2} L ${x + w} ${y + e / 2} Z`,
        { ...o('body'), fill: soft(c), fillStyle: 'solid' }),
      gen.ellipse(x + w / 2, y + e / 2, w, e, { ...o('top'), fill: 'var(--surface)', fillStyle: 'solid' }),
      gen.arc(x + w / 2, y + h * 0.42, w, e, 0, Math.PI, false, o('m1')),
    ];
  }, [x, y, w, h, c, e]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {label && <div className="hand sk-center" style={{ left: x, top: y + e, width: w, height: h - e, fontSize: size, color: ink(c) }}>{label}</div>}
    </Layer>
  );
}

/** Hand-drawn table. cols are widths (right → left), rows are cell texts. */
export function Table({ x, y, cols, rowH = 56, rows, c = 'ink', size = 28, head = 'blue', at, delay }: Base & {
  x: number; y: number; cols: number[]; rowH?: number; rows: ReactNode[][]; c?: C; size?: number; head?: C;
}) {
  const W = cols.reduce((a, b) => a + b, 0), H = rows.length * rowH;
  const d = useMemo(() => {
    const list = [gen.rectangle(x, y, W, H, opts(c, 2.4, seedOf('t', x, y, W, H)))];
    list.push(gen.rectangle(x, y, W, rowH, opts(head, 1, seedOf('th', x, y), { fill: soft(head), fillStyle: 'solid', stroke: 'none' })));
    for (let r = 1; r < rows.length; r++) list.push(gen.line(x, y + r * rowH, x + W, y + r * rowH, opts(c, 1.8, seedOf('tr', r, x, y))));
    let cx = x + W;
    for (let i = 0; i < cols.length - 1; i++) { cx -= cols[i]; list.push(gen.line(cx, y, cx, y + H, opts(c, 1.8, seedOf('tc', i, x, y)))); }
    return list;
  }, [x, y, W, H, rows.length, rowH, c, head, cols]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {rows.map((row, r) => {
        let right = x + W;
        return row.map((cell, i) => {
          const cw = cols[i];
          right -= cw;
          return (
            <div key={`${r}-${i}`} className="hand sk-center" style={{
              left: right, top: y + r * rowH, width: cw, height: rowH, fontSize: size,
              color: ink(r === 0 ? head : c), fontWeight: r === 0 ? 700 : 400,
            }}>{cell}</div>
          );
        });
      })}
    </Layer>
  );
}

/** Curly brace under a span (x1 → x2) with a label below. */
export function Brace({ x1, x2, y, c = 'ink', label, size = 26, at, delay }: Base & {
  x1: number; x2: number; y: number; c?: C; label?: ReactNode; size?: number;
}) {
  const m = (x1 + x2) / 2;
  const d = useMemo(() => [gen.curve([[x1, y], [x1 + 8, y + 12], [m - 12, y + 14], [m, y + 26], [m + 12, y + 14], [x2 - 8, y + 12], [x2, y]],
    opts(c, 2.4, seedOf('br', x1, x2, y), { roughness: 0.6 }))], [x1, x2, y, m, c]);
  return (
    <Layer at={at} delay={delay}>
      <Ink drawables={d} delay={delay} />
      {label && <div className="hand" style={{ left: m, top: y + 52, fontSize: size, color: ink(c), transform: 'translate(-50%, -50%)', whiteSpace: 'nowrap' }}>{label}</div>}
    </Layer>
  );
}

/** Words in a row (centered at y) with a labeled brace under each part, e.g. the parts of a URL. */
export function Parts({ y, size = 80, parts, at }: Base & {
  y: number; size?: number; parts: { t: string; c: C; label?: ReactNode; at?: number }[];
}) {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);
  const [boxes, setBoxes] = useState<[number, number][]>([]);
  useLayoutEffect(() => {
    const measure = () => setBoxes(refs.current.map(s => (s ? [s.offsetLeft + s.offsetParent!.clientLeft, s.offsetWidth] : [0, 0])));
    measure();
    document.fonts?.ready.then(measure);
  }, [parts]);
  return (
    <>
      <Layer at={at}>
        <div className="hand sk-row" style={{ top: y, fontSize: size }}>
          {parts.map((p, i) => <span key={i} ref={el => { refs.current[i] = el; }} style={{ color: ink(p.c) }}>{p.t}</span>)}
        </div>
      </Layer>
      {boxes.length === parts.length && parts.map((p, i) => p.label && (
        <Brace key={i} x1={boxes[i][0] + 6} x2={boxes[i][0] + boxes[i][1] - 6} y={y + size * 0.55} c={p.c} label={p.label} at={p.at} />
      ))}
    </>
  );
}

/** Handwritten statement with a red strike drawn through it (a wrong idea). */
export function Struck({ x, y, size = 36, c = 'ink', align = 'right', at, strikeAt, children }: Base & {
  x: number; y: number; size?: number; c?: C; align?: 'right' | 'left'; strikeAt?: number; children: ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [w, setW] = useState(0);
  useLayoutEffect(() => {
    const m = () => ref.current && setW(ref.current.offsetWidth);
    m();
    document.fonts?.ready.then(m);
  }, [children]);
  const x0 = align === 'right' ? x - w : x;
  return (
    <>
      <Layer at={at}>
        <div ref={ref} className="hand" style={{ left: x, top: y, fontSize: size, color: ink(c), transform: `translate(${align === 'right' ? '-100%' : '0'}, -50%)` }}>{children}</div>
      </Layer>
      {w > 0 && <Strike x={x0 - 8} y={y} w={w + 16} at={strikeAt ?? at} delay={strikeAt ? 0 : 0.6} />}
    </>
  );
}

const TAGS = {
  problem: ['⚠️ المشكلة', 'red'],
  solution: ['💡 الحل', 'green'],
  answer: ['💡 الإجابة', 'green'],
  question: ['❓ سؤال', 'orange'],
  term: ['📌 مصطلح', 'purple'],
  how: ['⚙️ إزاي؟', 'blue'],
  parts: ['🧩 المكونات', 'purple'],
  detail: ['🔍 بالتفصيل', 'blue'],
  example: ['🔎 مثال', 'blue'],
  compare: ['⚖️ مقارنة', 'blue'],
  careful: ['⚠️ خلّي بالك', 'orange'],
  summary: ['🧩 الخلاصة', 'purple'],
  journey: ['🗺️ الرحلة', 'blue'],
  story: ['📖 الحكاية', 'pink'],
  review: ['🔄 مراجعة', 'orange'],
} as const satisfies Record<string, readonly [string, C]>;
export type TagKind = keyof typeof TAGS;

/** Where we are in the story (problem, solution, term…), top-left of the scene. */
export function Tag({ kind }: { kind: TagKind }) {
  const [label, c] = TAGS[kind];
  return <Box x={46} y={30} w={196} h={56} c={c} fill={c} tc={c} size={27}>{label}</Box>;
}

/** Free HTML block placed on the board (for small interactive bits). */
export function Place({ x, y, w, h, at, delay, children, className = '' }: Base & {
  x: number; y: number; w?: number; h?: number; children: ReactNode; className?: string;
}) {
  return (
    <Layer at={at} delay={delay}>
      <div className={`sk-place ${className}`} style={{ left: x, top: y, width: w, height: h }}>{children}</div>
    </Layer>
  );
}

/** Full-frame drawing surface. */
export function Scene({ children }: { children: ReactNode }) {
  return <div className="scene">{children}</div>;
}
