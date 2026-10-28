import type { LessonDef } from '../board/types';
import { u3l1 } from './u3l1';

/** Lessons available as whiteboards, keyed by the id used in the URL (#/lesson/<id>). */
export const LESSONS: Record<string, LessonDef> = { u3l1 };
