import type { CSSProperties, ReactNode } from 'react';

/** Inline code inside Arabic text (kept left-to-right so brackets don't flip). */
export const C = ({ children }: { children: ReactNode }) => (
  <span className="ltr" style={{
    fontFamily: 'ui-monospace, "Cascadia Code", Consolas, monospace',
    fontSize: '0.92em',
    fontWeight: 800,
    padding: '1px 5px',
    borderRadius: '4px',
    background: 'var(--surface-2)',
    border: '1px solid var(--border)',
    color: 'var(--primary)',
    display: 'inline-block',
  }}>
    {children}
  </span>
);

export const Badge = ({ children, color = 'blue' }: { children: ReactNode; color?: string }) => (
  <span style={{
    fontFamily: "'Cairo', system-ui, sans-serif",
    fontWeight: 800,
    fontSize: '0.8rem',
    background: `var(--${color}-soft, var(--surface-2))`,
    color: `var(--pen-${color}, var(--text))`,
    padding: '0.2rem 0.65rem',
    borderRadius: '999px',
    border: '1px solid var(--border)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.35rem',
  }}>
    {children}
  </span>
);

export const BoardCard = ({
  children,
  c = 'blue',
  title,
  subtitle,
  badge,
  icon,
  style = {},
}: {
  children: ReactNode;
  c?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'pink';
  title?: ReactNode;
  subtitle?: ReactNode;
  badge?: ReactNode;
  icon?: string;
  style?: CSSProperties;
}) => (
  <div style={{
    fontFamily: "'Cairo', system-ui, sans-serif",
    background: 'var(--surface)',
    border: `2px solid var(--pen-${c})`,
    borderRadius: '18px',
    padding: '16px 20px',
    boxShadow: 'var(--shadow-ui)',
    color: 'var(--pen-ink)',
    textAlign: 'right',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    boxSizing: 'border-box',
    ...style,
  }}>
    {(title || badge || icon) && (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid var(--border)', paddingBottom: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon && <span style={{ fontSize: 26 }}>{icon}</span>}
          <div>
            <div style={{ fontSize: 21, fontWeight: 900, color: `var(--pen-${c})`, lineHeight: 1.25 }}>
              {title}
            </div>
            {subtitle && (
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', marginTop: 2 }}>
                {subtitle}
              </div>
            )}
          </div>
        </div>
        {badge && (
          <span style={{
            fontSize: 12,
            fontWeight: 800,
            background: `var(--${c}-soft, var(--surface-2))`,
            color: `var(--pen-${c})`,
            padding: '3px 10px',
            borderRadius: 999,
            border: '1px solid var(--border)',
          }}>
            {badge}
          </span>
        )}
      </div>
    )}
    <div style={{ flex: 1, lineHeight: 1.6, fontSize: 16 }}>
      {children}
    </div>
  </div>
);

export const Callout = ({
  children,
  c = 'blue',
  icon = '💡',
  title,
}: {
  children: ReactNode;
  c?: 'blue' | 'purple' | 'green' | 'orange' | 'red' | 'pink';
  icon?: string;
  title?: string;
}) => (
  <div style={{
    fontFamily: "'Cairo', system-ui, sans-serif",
    background: `var(--${c}-soft, var(--surface-2))`,
    borderRight: `4px solid var(--pen-${c})`,
    borderRadius: '10px',
    padding: '8px 12px',
    marginTop: 8,
    marginBottom: 8,
    color: 'var(--pen-ink)',
    fontSize: 14.5,
    lineHeight: 1.5,
  }}>
    {title && (
      <div style={{ fontWeight: 900, color: `var(--pen-${c})`, marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    )}
    <div>{children}</div>
  </div>
);
