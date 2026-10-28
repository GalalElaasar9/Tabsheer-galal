// Tabasheer brand: chalk mark (same artwork as public/brand/tabasheer-mark.svg) and the name lockup.

export function Mark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Tabasheer" className="mark">
      <rect x="1" y="1" width="62" height="62" rx="15" fill="#1d2640" stroke="#3a4670" strokeWidth="2" />
      <path d="M11 46c4-7 7-9 10.5-5.5s5.5 4 9.5-3.5 7.5-10 12-7" fill="none" stroke="#f5f1e6" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <g transform="rotate(-42 48 25)">
        <rect x="41.5" y="21" width="17" height="8" rx="1.6" fill="#ffd43b" />
        <rect x="41.5" y="21" width="17" height="2.4" rx="1.2" fill="#ffe680" />
        <path d="M44.5 21h-1.6c-1.6 1.6-1.9 6.2 0 8h1.6c-1.2-2.2-1.2-5.8 0-8z" fill="#fff3bf" />
      </g>
      <circle cx="45" cy="40" r="1.7" fill="#f5f1e6" opacity=".55" />
      <circle cx="50" cy="36.5" r="1.1" fill="#f5f1e6" opacity=".45" />
      <circle cx="40.5" cy="43" r="1" fill="#f5f1e6" opacity=".4" />
    </svg>
  );
}

/** Mark + "Tabasheer" + "طباشير". `size` is the mark size; the text scales with it. */
export function Logo({ size = 36 }: { size?: number }) {
  return (
    <span className="logo" style={{ '--s': `${size}px` } as React.CSSProperties}>
      <Mark size={size} />
      <span className="logo-txt">
        <span className="logo-en">Tabasheer</span>
        <span className="logo-ar">طباشير</span>
      </span>
    </span>
  );
}
