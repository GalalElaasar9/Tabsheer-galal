// Shared helpers for Unit 3 Lesson 2
import type { ReactNode } from 'react';

/** Inline code inside Arabic text (kept left-to-right so brackets don't flip). */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>
    {children}
  </span>
);

/** JSON snippet renderer with colored keys and values */
export const JsonCode = ({ code }: { code: string }) => (
  <pre
    className="ltr font-mono text-sm p-3 rounded-xl border leading-relaxed overflow-x-auto"
    style={{ background: 'var(--surface-2)', borderColor: 'var(--border)', color: 'var(--text)' }}
  >
    {code}
  </pre>
);
