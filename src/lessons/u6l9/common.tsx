import type { ReactNode } from 'react';

/** Inline badge for key terms */
export const TermBadge = ({ en, children, color = 'blue' }: { en?: string; children: ReactNode; color?: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      backgroundColor: `var(--tint-${color})`,
      border: `1.5px solid var(--pen-${color})`,
      color: `var(--pen-${color})`,
      padding: '0.15rem 0.6rem',
      borderRadius: '0.5rem',
      fontWeight: 'bold',
      fontSize: '0.9em',
    }}
  >
    <span>{children}</span>
    {en && <span className="ltr text-xs opacity-75 font-mono">({en})</span>}
  </span>
);

/** Golden takeaway memory pill */
export const MnemonicPill = ({ formula }: { formula: string }) => (
  <div
    style={{
      backgroundColor: 'rgba(234, 179, 8, 0.15)',
      border: '2px dashed var(--pen-orange)',
      color: 'var(--pen-orange)',
      padding: '0.6rem 1.2rem',
      borderRadius: '0.8rem',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.6rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    }}
  >
    <span style={{ fontSize: '1.5rem' }}>💡</span>
    <span>{formula}</span>
  </div>
);
