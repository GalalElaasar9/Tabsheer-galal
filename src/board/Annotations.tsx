import { memo, useEffect, useLayoutEffect, useRef } from 'react';
import { arrowHead, strokeBounds, strokePath } from './geom';
import { noteColor, penColor } from './types';
import type { El, ShapeEl, StickerEl, StrokeEl } from './types';

export type LaserPoint = { x: number; y: number; t: number };

type Props = {
  els: El[];
  draft: El | null;
  selected: string | null;
  editing: string | null;
  laser: LaserPoint[];
  zoom: number;
  onText(id: string, text: string): void;
};

/** Everything the teacher adds on top of the lesson: ink, shapes, notes, images, stickers. */
export function Annotations({ els, draft, selected, editing, laser, zoom, onText }: Props) {
  const vector = els.filter(e => e.type === 'stroke' || e.type === 'shape');
  const boxes = els.filter(e => e.type !== 'stroke' && e.type !== 'shape');
  const sel = els.find(e => e.id === selected);
  const inv = 1 / zoom;

  return (
    <>
      <svg className="wb-svg" width="1" height="1">
        {vector.map(el => <VectorEl key={el.id} el={el} />)}
        {draft && (draft.type === 'stroke' || draft.type === 'shape') && <VectorEl el={draft} />}
        {sel?.type === 'stroke' && <SelBox {...strokeBounds(sel)} />}
        {sel?.type === 'shape' && (
          <>
            <SelBox x={Math.min(sel.x1, sel.x2) - 8 * inv} y={Math.min(sel.y1, sel.y2) - 8 * inv}
              w={Math.abs(sel.x2 - sel.x1) + 16 * inv} h={Math.abs(sel.y2 - sel.y1) + 16 * inv} />
            <circle className="handle" data-handle="p1" cx={sel.x1} cy={sel.y1} r={7 * inv} strokeWidth={2} vectorEffect="non-scaling-stroke" />
            <circle className="handle" data-handle="p2" cx={sel.x2} cy={sel.y2} r={7 * inv} strokeWidth={2} vectorEffect="non-scaling-stroke" />
          </>
        )}
        {laser.length > 1 && (
          <polyline className="laser" points={laser.map(p => `${p.x},${p.y}`).join(' ')}
            strokeWidth={6} vectorEffect="non-scaling-stroke" />
        )}
      </svg>
      {boxes.map(el => (
        <BoxEl key={el.id} el={el} selected={el.id === selected} editing={el.id === editing} onText={onText} />
      ))}
    </>
  );
}

function SelBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return <rect className="sel-box" x={x} y={y} width={w} height={h} strokeWidth={1.5} vectorEffect="non-scaling-stroke" />;
}

const VectorEl = memo(function VectorEl({ el }: { el: StrokeEl | ShapeEl }) {
  if (el.type === 'stroke') {
    const center = el.points.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
    return (
      <g data-el-id={el.id}>
        <path className={`stroke ${el.highlight ? 'hl' : ''}`} d={strokePath(el)} fill={penColor(el.color)} />
        <path className="hit" d={center} strokeWidth={Math.max(el.size * (el.highlight ? 3.2 : 1), 14)} strokeLinecap="round" />
      </g>
    );
  }
  const { x1, y1, x2, y2, size, kind } = el;
  const common = { fill: 'none', stroke: penColor(el.color), strokeWidth: size, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const hit = { className: 'hit', strokeWidth: Math.max(size, 14) };
  const x = Math.min(x1, x2), y = Math.min(y1, y2), w = Math.abs(x2 - x1), h = Math.abs(y2 - y1);
  let shape, hitShape;
  if (kind === 'rect') {
    shape = <rect x={x} y={y} width={w} height={h} rx={Math.min(18, w / 6, h / 6)} {...common} />;
    hitShape = <rect x={x} y={y} width={w} height={h} {...hit} />;
  } else if (kind === 'ellipse') {
    shape = <ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} {...common} />;
    hitShape = <ellipse cx={x + w / 2} cy={y + h / 2} rx={w / 2} ry={h / 2} {...hit} />;
  } else {
    const d = `M ${x1} ${y1} L ${x2} ${y2}` + (kind === 'arrow' ? ' ' + arrowHead(x1, y1, x2, y2, size) : '');
    shape = <path d={d} {...common} />;
    hitShape = <path d={`M ${x1} ${y1} L ${x2} ${y2}`} {...hit} />;
  }
  return <g data-el-id={el.id}>{shape}{hitShape}</g>;
});

const BoxEl = memo(function BoxEl({ el, selected, editing, onText }: {
  el: El; selected: boolean; editing: boolean; onText(id: string, text: string): void;
}) {
  const cls = `el ${selected && !editing ? 'sel' : ''}`;
  const handle = selected && !editing ? <div className="el-handle" data-handle="br" /> : null;
  const commit = (t: string) => onText(el.id, t);

  switch (el.type) {
    case 'text':
      return (
        <div className={`${cls} el-text`} data-el-id={el.id}
          style={{ left: el.x, top: el.y, transform: 'translateX(-100%)', fontSize: el.fontSize, color: penColor(el.color) }}>
          <Editable text={el.text} editing={editing} onCommit={commit} />
          {handle}
        </div>
      );
    case 'sticky':
      return (
        <div className={`${cls} el-sticky`} data-el-id={el.id}
          style={{ left: el.x, top: el.y, width: el.w, height: el.h, background: noteColor(el.color) }}>
          <Editable text={el.text} editing={editing} onCommit={commit} />
          {handle}
        </div>
      );
    case 'image':
      return (
        <div className={`${cls} el-image`} data-el-id={el.id} style={{ left: el.x, top: el.y, width: el.w, height: el.h }}>
          <img src={el.src} alt="" draggable={false} />
          {handle}
        </div>
      );
    case 'sticker':
      return <Sticker el={el} cls={cls} editing={editing} onCommit={commit} handle={handle} />;
    default:
      return null;
  }
});

function Sticker({ el, cls, editing, onCommit, handle }: {
  el: StickerEl; cls: string; editing: boolean; onCommit(t: string): void; handle: React.ReactNode;
}) {
  const style = { left: el.x, top: el.y, transform: `scale(${el.scale})`, '--stk': penColor(el.color) } as React.CSSProperties;
  return (
    <div className={`${cls} el-sticker`} data-el-id={el.id} style={style}>
      {el.kind === 'actor' && (
        <div className="stk-actor"><div className="ico">{el.icon}</div><Editable text={el.label} editing={editing} onCommit={onCommit} /></div>
      )}
      {el.kind === 'pill' && <div className="stk-pill"><Editable text={el.label} editing={editing} onCommit={onCommit} /></div>}
      {el.kind === 'mark' && <div className="stk-mark">{el.icon}</div>}
      {handle}
    </div>
  );
}

/** contentEditable text that React never re-renders while the user types. */
function Editable({ text, editing, onCommit }: { text: string; editing: boolean; onCommit(t: string): void }) {
  const ref = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (ref.current && !editing) ref.current.innerText = text;
  }, [text, editing]);
  useEffect(() => {
    const n = ref.current;
    if (!editing || !n) return;
    // Wait a frame: the click that created the element would otherwise steal focus right back.
    const id = requestAnimationFrame(() => {
      n.focus();
      const r = document.createRange();
      r.selectNodeContents(n);
      const s = getSelection();
      s?.removeAllRanges();
      s?.addRange(r);
    });
    return () => cancelAnimationFrame(id);
  }, [editing]);
  return (
    <div
      ref={ref}
      dir="auto"
      contentEditable={editing}
      suppressContentEditableWarning
      onBlur={e => { if (editing) onCommit(e.currentTarget.innerText.replace(/\n$/, '')); }}
      onKeyDown={e => { if (e.key === 'Escape') e.currentTarget.blur(); }}
    />
  );
}
