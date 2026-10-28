import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
const KEY = 'shell-theme';

function initial(): Theme {
  try {
    const t = localStorage.getItem(KEY);
    if (t === 'light' || t === 'dark') return t;
  } catch { /* storage unavailable */ }
  return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

let current: Theme = initial();
const listeners = new Set<(t: Theme) => void>();
document.documentElement.classList.toggle('dark', current === 'dark');

function setTheme(t: Theme) {
  current = t;
  document.documentElement.classList.toggle('dark', t === 'dark');
  try { localStorage.setItem(KEY, t); } catch { /* ignore */ }
  listeners.forEach(l => l(t));
}

export function useTheme(): [Theme, () => void] {
  const [theme, set] = useState(current);
  useEffect(() => {
    listeners.add(set);
    return () => { listeners.delete(set); };
  }, []);
  const toggle = useCallback(() => setTheme(current === 'dark' ? 'light' : 'dark'), []);
  return [theme, toggle];
}
