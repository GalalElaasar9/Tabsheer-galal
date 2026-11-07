// Shared helpers for Unit 4 Lesson 4 — Iterative Website Optimization Process
import type { ReactNode } from 'react';

export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>
    {children}
  </span>
);

