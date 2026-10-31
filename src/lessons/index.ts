import type { LessonDef } from '../board/types';
import { u3l1 } from './u3l1';
import { u3l2 } from './u3l2';

/** Lessons available as whiteboards, keyed by the id used in the URL (#/lesson/<id>). */
export const LESSONS: Record<string, LessonDef> = { u3l1, u3l2 };
