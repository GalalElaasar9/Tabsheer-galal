import type { LessonDef } from '../board/types';
import { u3l1 } from './u3l1';
import { u3l2 } from './u3l2';
import { u3l3 } from './u3l3';
import { u4l1 } from './u4l1';
import { u4l2 } from './u4l2';
import { u4l3 } from './u4l3';
import { u4l4 } from './u4l4';
import { u6l3 } from './u6l3';
import { u6l7 } from './u6l7';
import { u6l9 } from './u6l9';
import { u7l1 } from './u7l1';
import { u7l2 } from './u7l2';
import { u3rev } from './u3rev';
import { u3qa } from './u3qa';

/** Lessons available as whiteboards, keyed by the id used in the URL (#/lesson/<id>). */
export const LESSONS: Record<string, LessonDef> = {
  u3l1,
  u3l2,
  u3l3,
  u3rev,
  u3qa,
  u4l1,
  u4l2,
  u4l3,
  u4l4,
  u6l3,
  u6l7,
  u6l9,
  u7l1,
  u7l2,
};
