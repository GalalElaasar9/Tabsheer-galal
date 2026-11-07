import type { LessonDef } from '../board/types';
import { u3l1 } from './u3l1';
import { u3l2 } from './u3l2';
import { u3l3 } from './u3l3';
import { u4l1 } from './u4l1';
import { u4l2 } from './u4l2';
import { u4l3 } from './u4l3';
import { u4l4 } from './u4l4';
import { u6l3 } from './u6l3';
import { u3rev } from './u3rev';

/** Lessons available as whiteboards, keyed by the id used in the URL (#/lesson/<id>). */
export const LESSONS: Record<string, LessonDef> = {
  u3l1,
  u3l2,
  u3l3,
  u3rev,
  u4l1,
  u4l2,
  u4l3,
  u4l4,
  u6l3,
};
