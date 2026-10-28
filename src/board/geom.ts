import { getStroke } from 'perfect-freehand';
import type { El, Point, Rect, StrokeEl } from './types';

export const uid = () => Math.random().toString(36).slice(2, 10);
export const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

export function moveEl<T extends El>(el: T, dx: number, dy: number): T {
  switch (el.type) {
    case 'stroke':
      return { ...el, points: el.points.map(([x, y, p]) => [x + dx, y + dy, p] as Point) };
    case 'shape':
      return { ...el, x1: el.x1 + dx, y1: el.y1 + dy, x2: el.x2 + dx, y2: el.y2 + dy };
    default:
      return { ...el, x: el.x + dx, y: el.y + dy };
  }
}

export function strokeBounds(el: StrokeEl): Rect {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of el.points) {
    x0 = Math.min(x0, x); y0 = Math.min(y0, y); x1 = Math.max(x1, x); y1 = Math.max(y1, y);
  }
  const pad = el.size;
  return { x: x0 - pad, y: y0 - pad, w: x1 - x0 + pad * 2, h: y1 - y0 + pad * 2 };
}

/* perfect-freehand outline → SVG path */
export function strokePath(el: StrokeEl): string {
  const outline = getStroke(el.points, {
    size: el.highlight ? el.size * 3.2 : el.size,
    thinning: el.highlight ? 0 : 0.55,
    smoothing: 0.5,
    streamline: 0.45,
    simulatePressure: el.points.every(p => p[2] === 0.5),
    last: true,
  });
  if (!outline.length) return '';
  const d = outline.reduce<(string | number)[]>(
    (acc, [x0, y0], i, arr) => {
      const [x1, y1] = arr[(i + 1) % arr.length];
      acc.push(x0, y0, (x0 + x1) / 2, (y0 + y1) / 2);
      return acc;
    },
    ['M', ...outline[0], 'Q'],
  );
  d.push('Z');
  return d.map(v => (typeof v === 'number' ? v.toFixed(1) : v)).join(' ');
}

export function arrowHead(x1: number, y1: number, x2: number, y2: number, size: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const len = Math.max(14, size * 4.5);
  const p = (d: number) => `${x2 - len * Math.cos(a + d)} ${y2 - len * Math.sin(a + d)}`;
  return `M ${p(0.45)} L ${x2} ${y2} L ${p(-0.45)}`;
}

/** Downscale an image file to keep saved boards small. */
export function readImage(file: Blob, max = 1600): Promise<{ src: string; w: number; h: number }> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      const k = Math.min(1, max / Math.max(img.width, img.height));
      const w = Math.round(img.width * k), h = Math.round(img.height * k);
      const c = document.createElement('canvas');
      c.width = w; c.height = h;
      c.getContext('2d')!.drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve({ src: c.toDataURL(file.type === 'image/png' ? 'image/png' : 'image/jpeg', 0.88), w, h });
    };
    img.onerror = reject;
    img.src = url;
  });
}
