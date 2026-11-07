import type { ReactNode } from 'react';

/** Inline code inside Arabic text (kept left-to-right so brackets and symbols don't flip). */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit', fontWeight: 'bold' }}>
    {children}
  </span>
);

/** Hex badge styling */
export const HexBadge = ({ children }: { children: ReactNode }) => (
  <span className="ltr" style={{
    fontFamily: 'monospace',
    fontWeight: 'bold',
    background: 'var(--primary-soft)',
    color: 'var(--primary)',
    padding: '0.15rem 0.5rem',
    borderRadius: '0.4rem',
    border: '1px solid var(--border)',
  }}>
    {children}
  </span>
);

/** Binary badge styling */
export const BinBadge = ({ children }: { children: ReactNode }) => (
  <span className="ltr" style={{
    fontFamily: 'monospace',
    fontWeight: 'bold',
    background: 'var(--safe-soft)',
    color: 'var(--safe)',
    padding: '0.15rem 0.5rem',
    borderRadius: '0.4rem',
    letterSpacing: '0.05em',
  }}>
    {children}
  </span>
);

