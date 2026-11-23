import type { ReactNode } from 'react';

/** Inline code inside Arabic text (kept left-to-right so brackets and symbols don't flip). */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit', fontWeight: 'bold' }}>
    {children}
  </span>
);

/** Hardware component badge styling */
export const HwBadge = ({ children, color = 'blue' }: { children: ReactNode; color?: 'blue' | 'purple' | 'green' | 'orange' | 'red' }) => (
  <span
    className="ltr"
    style={{
      fontFamily: 'Cairo, system-ui, sans-serif',
      fontWeight: 'bold',
      backgroundColor: `var(--tint-${color})`,
      color: `var(--pen-${color})`,
      padding: '0.15rem 0.6rem',
      borderRadius: '0.5rem',
      border: `1.5px solid var(--pen-${color})`,
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.35rem',
      fontSize: '0.9em',
    }}
  >
    {children}
  </span>
);

/** Interface port badge styling */
export const PortBadge = ({ name, type }: { name: string; type: 'usb' | 'hdmi' | 'ethernet' }) => {
  const colorMap = {
    usb: { bg: 'rgba(59, 130, 246, 0.15)', border: 'var(--pen-blue)', text: 'var(--pen-blue)' },
    hdmi: { bg: 'rgba(168, 85, 247, 0.15)', border: 'var(--pen-purple)', text: 'var(--pen-purple)' },
    ethernet: { bg: 'rgba(34, 197, 94, 0.15)', border: 'var(--pen-green)', text: 'var(--pen-green)' },
  };
  const style = colorMap[type];
  return (
    <span
      className="ltr"
      style={{
        fontFamily: 'monospace',
        fontWeight: 'bold',
        backgroundColor: style.bg,
        color: style.text,
        border: `1.5px solid ${style.border}`,
        padding: '0.15rem 0.55rem',
        borderRadius: '0.45rem',
        letterSpacing: '0.05em',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.3rem',
      }}
    >
      {name}
    </span>
  );
};

/** Key takeaway memory formula / golden rule */
export const GoldenRule = ({ title, children }: { title: string; children: ReactNode }) => (
  <div
    style={{
      backgroundColor: 'rgba(234, 179, 8, 0.12)',
      border: '2px dashed var(--pen-orange)',
      color: 'var(--pen-orange)',
      padding: '0.75rem 1.25rem',
      borderRadius: '0.85rem',
      fontSize: '1.15rem',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
      marginTop: '0.75rem',
    }}
  >
    <span style={{ fontSize: '1.6rem' }}>⚡</span>
    <div>
      <span style={{ textDecoration: 'underline', marginRight: '0.4rem' }}>{title}:</span>
      <span style={{ color: 'var(--pen-ink)' }}>{children}</span>
    </div>
  </div>
);
