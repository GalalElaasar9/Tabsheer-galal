import { useCallback, useEffect, useRef, useState } from 'react';
import { kvGet, kvSet } from '../lib/storage';
import type { El } from './types';

type Updater = El[] | ((prev: El[]) => El[]);

/** Annotation elements of one lesson board, with undo/redo and autosave. */
export function useAnnotations(boardKey: string) {
  const [els, setEls] = useState<El[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [, setVersion] = useState(0);
  const cur = useRef<El[]>([]);
  const past = useRef<El[][]>([]);
  const future = useRef<El[][]>([]);

  const apply = useCallback((next: Updater) => {
    cur.current = typeof next === 'function' ? next(cur.current) : next;
    setEls(cur.current);
  }, []);

  /** Save the current state as an undo point (call once at the start of a gesture). */
  const checkpoint = useCallback(() => {
    past.current.push(cur.current);
    if (past.current.length > 150) past.current.shift();
    future.current = [];
    setVersion(v => v + 1);
  }, []);

  /** One-shot change with its own undo point. */
  const commit = useCallback((next: Updater) => { checkpoint(); apply(next); }, [checkpoint, apply]);

  const undo = useCallback(() => {
    const prev = past.current.pop();
    if (!prev) return;
    future.current.push(cur.current);
    apply(prev);
    setVersion(v => v + 1);
  }, [apply]);

  const redo = useCallback(() => {
    const next = future.current.pop();
    if (!next) return;
    past.current.push(cur.current);
    apply(next);
    setVersion(v => v + 1);
  }, [apply]);

  useEffect(() => {
    let alive = true;
    kvGet<El[]>(boardKey)
      .then(saved => { if (alive && Array.isArray(saved)) apply(saved); })
      .catch(() => { /* storage unavailable: start empty */ })
      .finally(() => { if (alive) setLoaded(true); });
    return () => { alive = false; };
  }, [boardKey, apply]);

  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => { kvSet(boardKey, els).catch(() => {}); }, 400);
    return () => clearTimeout(t);
  }, [els, loaded, boardKey]);

  return {
    els,
    apply,
    checkpoint,
    commit,
    undo,
    redo,
    canUndo: past.current.length > 0,
    canRedo: future.current.length > 0,
  };
}
