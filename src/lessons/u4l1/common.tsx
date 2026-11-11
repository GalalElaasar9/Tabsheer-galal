// Shared UI primitives and visual identity palette for Unit 4 · Lesson 1
import type { CSSProperties, ReactNode } from 'react';
import type { ColorKey } from '../../board/types';
import { Box, Heading, Place, Scene } from '../../sketch/Sketch';

export type IdentityTheme = {
  accent: string;
  softBg: string;
  border: string;
  badgeText: string;
  boardColor: ColorKey;
};

export const THEMES: Record<'blue' | 'orange' | 'gold' | 'green' | 'purple' | 'pink' | 'red', IdentityTheme> = {
  blue: {
    accent: '#38bdf8',
    softBg: 'rgba(56, 189, 248, 0.14)',
    border: 'rgba(56, 189, 248, 0.45)',
    badgeText: '#e0f2fe',
    boardColor: 'blue',
  },
  orange: {
    accent: '#fb923c',
    softBg: 'rgba(251, 146, 60, 0.14)',
    border: 'rgba(251, 146, 60, 0.45)',
    badgeText: '#ffedd5',
    boardColor: 'orange',
  },
  gold: {
    accent: '#facc15',
    softBg: 'rgba(250, 204, 21, 0.13)',
    border: 'rgba(250, 204, 21, 0.45)',
    badgeText: '#fef9c3',
    boardColor: 'yellow',
  },
  green: {
    accent: '#4ade80',
    softBg: 'rgba(74, 222, 128, 0.14)',
    border: 'rgba(74, 222, 128, 0.45)',
    badgeText: '#dcfce7',
    boardColor: 'green',
  },
  purple: {
    accent: '#c084fc',
    softBg: 'rgba(192, 132, 252, 0.14)',
    border: 'rgba(192, 132, 252, 0.45)',
    badgeText: '#f3e8ff',
    boardColor: 'purple',
  },
  pink: {
    accent: '#f472b6',
    softBg: 'rgba(244, 114, 182, 0.14)',
    border: 'rgba(244, 114, 182, 0.45)',
    badgeText: '#fce7f3',
    boardColor: 'pink',
  },
  red: {
    accent: '#f87171',
    softBg: 'rgba(248, 113, 113, 0.14)',
    border: 'rgba(248, 113, 113, 0.45)',
    badgeText: '#fee2e2',
    boardColor: 'red',
  },
};

export const FONT_RTL: CSSProperties = {
  direction: 'rtl',
  textAlign: 'right',
  fontFamily: "'Cairo', system-ui, sans-serif",
  whiteSpace: 'normal',
  boxSizing: 'border-box',
};

/** Standard full-board frame container keeping clean margins below Heading and beside Tag. */
export function LessonSceneShell({
  title,
  sub,
  color = 'blue',
  children,
}: {
  title: ReactNode;
  sub: ReactNode;
  color?: ColorKey;
  children: ReactNode;
}) {
  return (
    <Scene>
      <Heading u={color} sub={sub}>{title}</Heading>
      <Box x={46} y={122} w={1188} h={566} c={color} fill={color} at={1} />
      <Place x={46} y={122} w={1188} h={566} at={1}>
        <div
          style={{
            ...FONT_RTL,
            width: '100%',
            height: '100%',
            padding: '14px 18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {children}
        </div>
      </Place>
    </Scene>
  );
}

/** Colored header pill representing a concept's visual identity for students. */
export function IdentityHeader({
  icon,
  title,
  enTitle,
  badge,
  theme,
  rightSlot,
}: {
  icon: string;
  title: string;
  enTitle?: string;
  badge: string;
  theme: IdentityTheme;
  rightSlot?: ReactNode;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: '8px 14px',
        borderRadius: 12,
        background: theme.softBg,
        border: `1.5px solid ${theme.border}`,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 24, lineHeight: 1 }}>{icon}</span>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <span style={{ fontSize: 17, fontWeight: 900, color: theme.accent }}>{title}</span>
            {enTitle && (
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#cbd5e1',
                  direction: 'ltr',
                  background: 'rgba(15, 23, 42, 0.7)',
                  padding: '2px 8px',
                  borderRadius: 6,
                }}
              >
                {enTitle}
              </span>
            )}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {rightSlot}
        <span
          style={{
            fontSize: 12,
            fontWeight: 800,
            color: theme.badgeText,
            background: 'rgba(15, 23, 42, 0.85)',
            border: `1px solid ${theme.accent}`,
            padding: '3px 10px',
            borderRadius: 999,
          }}
        >
          {badge}
        </span>
      </div>
    </div>
  );
}
