import { Children } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { R } from '../board/frame';

type Box = { at?: number; className?: string; style?: CSSProperties; children?: ReactNode };
export type Tone = 'info' | 'warn' | 'safe' | 'danger' | 'primary';

export const arNum = (n: number) => n.toLocaleString('ar-EG');

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function Goal({ children }: { children: ReactNode }) {
  return <span className="goal">🎯 {children}</span>;
}

export function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h2 className={`title ${className}`}>{children}</h2>;
}

export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`lead ${className}`}>{children}</p>;
}

export function En({ children }: { children: ReactNode }) {
  return <span className="en">{children}</span>;
}

export function Card({ at, className = '', style, children }: Box) {
  return <R at={at} className={`card ${className}`} style={style}>{children}</R>;
}

/** Card with a colored top edge. */
export function TopCard({ color, ...p }: Box & { color: string }) {
  return <Card {...p} style={{ borderTop: `.3rem solid var(--${color})`, ...p.style }} />;
}

export function Def({ label, color, at, className = '', children }: Box & { label: ReactNode; color?: string }) {
  const style = color ? ({ '--c': `var(--${color})` } as CSSProperties) : undefined;
  return (
    <R at={at} className={`def ${className}`} style={style}>
      <span className="def-label">{label}</span>
      {children}
    </R>
  );
}

export function Callout({ icon, tone = 'info', at, className = '', children }: Box & { icon: ReactNode; tone?: Tone }) {
  return (
    <R at={at} className={`callout c-${tone} ${className}`}>
      <span className="ico">{icon}</span>
      <div>{children}</div>
    </R>
  );
}

export function Num({ children, color }: { children: ReactNode; color?: string }) {
  return <span className="num" style={color ? { background: `var(--${color})` } : undefined}>{children}</span>;
}

export function Actor({ icon, label, on = false }: { icon: string; label: ReactNode; on?: boolean }) {
  return (
    <div className={`actor ${on ? 'on' : ''}`}>
      <div className="avatar">{icon}</div>
      {label}
    </div>
  );
}

export function BrowserMock({ url, children, className = '', ltr = false }: {
  url?: ReactNode; children: ReactNode; className?: string; ltr?: boolean;
}) {
  return (
    <div className={`browser ${className}`}>
      {url !== undefined && (
        <div className="browser-top">
          <div className="browser-dots"><i /><i /><i /></div>
          <div className="addr">{url}</div>
        </div>
      )}
      <div className={`browser-body mini-page ${ltr ? 'text-left' : ''}`} dir={ltr ? 'ltr' : undefined}>{children}</div>
    </div>
  );
}

/** Code box: one child per line. */
export function Code({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`code ${className}`}>
      {Children.toArray(children).map((line, i) => <div key={i}>{line}</div>)}
    </div>
  );
}

/** <tag attrs>content</tag> with the tag names colored. */
export function Tg({ n, a = '', children }: { n: string; a?: string; children?: ReactNode }) {
  return (
    <>
      <span className="tag">{`<${n}${a}>`}</span>
      {children}
      <span className="tag">{`</${n}>`}</span>
    </>
  );
}

export function Ph({ children }: { children: ReactNode }) {
  return <span className="ph">{children}</span>;
}
