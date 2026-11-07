// Shared helpers for Unit 4 Lesson 1 — Media Types & Characteristics
import type { ReactNode } from 'react';

export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>
    {children}
  </span>
);

export const CodeSnippet = ({ code, lang = 'html' }: { code: string; lang?: string }) => (
  <pre
    className="ltr font-mono text-xs sm:text-sm p-3.5 rounded-xl border leading-relaxed overflow-x-auto text-left"
    style={{ background: '#0b101e', borderColor: '#26304a', color: '#e2e8f0' }}
  >
    <div className="flex items-center justify-between mb-2 pb-1.5 border-b text-[11px] font-bold uppercase tracking-wider text-slate-400" style={{ borderColor: '#1e293b' }}>
      <span>🎥 {lang}</span>
      <span className="text-sky-400">Media Tag</span>
    </div>
    <code>{code}</code>
  </pre>
);

