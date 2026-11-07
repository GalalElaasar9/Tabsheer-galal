// Shared helpers for Unit 4 Lesson 2 — Information Design & Website UX
import type { ReactNode } from 'react';

export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>
    {children}
  </span>
);

