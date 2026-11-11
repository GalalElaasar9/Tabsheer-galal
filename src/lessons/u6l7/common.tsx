import type { ReactNode } from 'react';

/** Inline code inside Arabic text */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr sk-code" style={{ fontSize: 'inherit', fontWeight: 'bold' }}>
    {children}
  </span>
);

/** Pixel / DPI badge styling */
export const DpiBadge = ({ children }: { children: ReactNode }) => (
  <span
    className="ltr"
    style={{
      fontFamily: 'monospace',
      fontWeight: 'bold',
      background: 'rgba(56, 189, 248, 0.15)',
      color: '#38bdf8',
      padding: '0.15rem 0.55rem',
      borderRadius: '0.45rem',
      border: '1px solid rgba(56, 189, 248, 0.4)',
    }}
  >
    {children}
  </span>
);

/** Bit / Binary badge styling */
export const BitBadge = ({ children }: { children: ReactNode }) => (
  <span
    className="ltr"
    style={{
      fontFamily: 'monospace',
      fontWeight: 'bold',
      background: 'rgba(34, 197, 94, 0.15)',
      color: '#22c55e',
      padding: '0.15rem 0.55rem',
      borderRadius: '0.45rem',
      letterSpacing: '0.05em',
      border: '1px solid rgba(34, 197, 94, 0.4)',
    }}
  >
    {children}
  </span>
);

/** RGB Color Swatch Badge */
export const ColorPill = ({ label, color, bg }: { label: string; color: string; bg: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.4rem',
      padding: '0.2rem 0.7rem',
      borderRadius: '999px',
      fontSize: '0.88rem',
      fontWeight: 'bold',
      backgroundColor: bg,
      color: color,
      border: `1.5px solid ${color}55`,
      boxShadow: `0 2px 6px ${color}22`,
    }}
  >
    <span
      style={{
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        backgroundColor: color,
        display: 'inline-block',
        boxShadow: `0 0 6px ${color}`,
      }}
    />
    {label}
  </span>
);

/** Unit 6 Lesson 7 Brand Ribbon */
export const IdentityHeader = ({ step, title }: { step?: string; title: string }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '6px 14px',
      background: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      border: '1px solid rgba(56, 189, 248, 0.3)',
      borderRadius: '12px',
      marginBottom: '10px',
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ fontSize: '16px' }}>📷</span>
      <span style={{ fontSize: '13px', fontWeight: 'bold', color: '#38bdf8' }}>
        الوحدة السادسة · رقمنة الصور
      </span>
      {step && (
        <span
          style={{
            fontSize: '11px',
            background: 'rgba(168, 85, 247, 0.2)',
            color: '#c084fc',
            border: '1px solid rgba(168, 85, 247, 0.4)',
            padding: '2px 8px',
            borderRadius: '6px',
            fontWeight: 'bold',
          }}
        >
          {step}
        </span>
      )}
    </div>
    <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: 'bold' }}>{title}</span>
  </div>
);
