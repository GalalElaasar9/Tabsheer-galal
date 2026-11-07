// Shared helpers for Unit 3 Lesson 3 — Front-end Technology Fundamentals
import type { ReactNode } from 'react';

/** Inline code inside Arabic text (kept left-to-right so brackets and symbols don't flip). */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>
    {children}
  </span>
);

/** Code block snippet renderer with syntax highlighting style */
export const CodeSnippet = ({ code, lang = 'html' }: { code: string; lang?: string }) => (
  <pre
    className="ltr font-mono text-xs sm:text-sm p-3.5 rounded-xl border leading-relaxed overflow-x-auto text-left"
    style={{ background: '#0b101e', borderColor: '#26304a', color: '#e2e8f0' }}
  >
    <div className="flex items-center justify-between mb-2 pb-1.5 border-b text-[11px] font-bold uppercase tracking-wider text-slate-400" style={{ borderColor: '#1e293b' }}>
      <span>💻 {lang}</span>
      <span className="text-sky-400">Front-end Code</span>
    </div>
    <code>{code}</code>
  </pre>
);

/** Badge helper */
export const Badge = ({ children, color = 'blue' }: { children: ReactNode; color?: string }) => (
  <span
    className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold border"
    style={{
      background: `var(--${color}-soft, rgba(59, 130, 246, 0.1))`,
      borderColor: `var(--${color}, #3b82f6)`,
      color: `var(--pen-${color}, #60a5fa)`,
    }}
  >
    {children}
  </span>
);

