// Pieces shared by several scenes of this lesson.
import type { ReactNode } from 'react';

/** A few lines of HTML in handwriting: [opening tag, content, closing tag]. */
export const Code = ({ lines, size = 26 }: { lines: [string, string, string][]; size?: number }) => (
  <div className="sk-code" style={{ fontSize: size }}>
    {lines.map(([t, body, close], i) => (
      <div key={i}><span className="tag">{t}</span><bdi>{body}</bdi><span className="tag">{close}</span></div>
    ))}
  </div>
);

export const ABOUT: [string, string, string][] = [
  ['<h1>', 'جامعة المستقبل', '</h1>'],
  ['<p>', 'تأسست سنة 2005', '</p>'],
  ['<a href="contact.html">', 'تواصل معنا', '</a>'],
];

/** The about page as the browser draws it. */
export const AboutRendered = ({ big = 34 }: { big?: number }) => (
  <>
    <div style={{ fontSize: big }}>جامعة المستقبل</div>
    <div style={{ fontSize: big * 0.65, opacity: .75 }}>تأسست سنة 2005</div>
    <div style={{ fontSize: big * 0.65, color: 'var(--pen-blue)', textDecoration: 'underline' }}>تواصل معنا</div>
  </>
);

/** Inline code inside Arabic text (kept left-to-right so brackets don't flip). */
export const C = ({ children }: { children: ReactNode }) => <span className="ltr sk-code" style={{ fontSize: 'inherit' }}>{children}</span>;
