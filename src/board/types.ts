import type { ReactNode } from 'react';

export type ColorKey = 'ink' | 'red' | 'blue' | 'green' | 'orange' | 'purple' | 'pink' | 'yellow';
export const COLORS: ColorKey[] = ['ink', 'red', 'blue', 'green', 'orange', 'purple', 'pink', 'yellow'];
export const penColor = (c: ColorKey) => `var(--pen-${c})`;
export const noteColor = (c: ColorKey) => `var(--note-${c})`;

export type Tool =
  | 'select' | 'hand' | 'pen' | 'highlighter' | 'eraser'
  | 'rect' | 'ellipse' | 'arrow' | 'line'
  | 'text' | 'sticky' | 'laser';
export type ShapeKind = 'rect' | 'ellipse' | 'arrow' | 'line';
export const SHAPE_TOOLS: Tool[] = ['rect', 'ellipse', 'arrow', 'line'];

export type Point = [x: number, y: number, pressure: number];

export type StrokeEl = { id: string; type: 'stroke'; points: Point[]; color: ColorKey; size: number; highlight?: boolean };
export type ShapeEl = { id: string; type: 'shape'; kind: ShapeKind; x1: number; y1: number; x2: number; y2: number; color: ColorKey; size: number };
export type TextEl = { id: string; type: 'text'; x: number; y: number; text: string; color: ColorKey; fontSize: number };
export type StickyEl = { id: string; type: 'sticky'; x: number; y: number; w: number; h: number; text: string; color: ColorKey };
export type ImageEl = { id: string; type: 'image'; x: number; y: number; w: number; h: number; src: string };
export type StickerKind = 'actor' | 'pill' | 'mark';
export type StickerEl = { id: string; type: 'sticker'; x: number; y: number; kind: StickerKind; icon: string; label: string; color: ColorKey; scale: number };

export type El = StrokeEl | ShapeEl | TextEl | StickyEl | ImageEl | StickerEl;

export type Camera = { x: number; y: number; z: number };
export type Rect = { x: number; y: number; w: number; h: number };

/* ---------- Lessons ---------- */
export type FrameDef = {
  id: string;
  title: string;
  /** Frame height in board units (width is fixed). */
  h?: number;
  /** Drawn scene: content is positioned in frame pixels, no padding. */
  scene?: boolean;
  /** Teacher notes: the full explanation behind the drawing. */
  notes?: ReactNode;
  render: () => ReactNode;
};
export type SectionDef = { title: string; frames: FrameDef[] };
export type LessonDef = { id: string; title: string; subtitle: string; sections: SectionDef[] };
