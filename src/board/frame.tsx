import { createContext, useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { ElementType, ReactNode } from 'react';

export type StepperApi = { next(): boolean; prev(): boolean };

type FrameCtx = {
  /** True only for the current frame while teaching (fragments reveal one by one). */
  revealing: boolean;
  fragStep: number;
  registerFrag(at: number): void;
  registerStepper(api: StepperApi): () => void;
};

export const FrameContext = createContext<FrameCtx>({
  revealing: false,
  fragStep: 0,
  registerFrag() {},
  registerStepper: () => () => {},
});

export const useFrame = () => useContext(FrameContext);

type RProps = {
  /** Reveal order inside the frame (1, 2, 3…). Omit to always show. */
  at?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
};

/** A block that appears on its turn when the teacher presses "next". */
export function R({ at, as: Tag = 'div', className = '', style, children }: RProps) {
  const f = useFrame();
  useLayoutEffect(() => { if (at) f.registerFrag(at); }, [at, f]);
  if (!at) return <Tag className={className || undefined} style={style}>{children}</Tag>;
  const shown = !f.revealing || f.fragStep >= at;
  const current = f.revealing && f.fragStep === at;
  return (
    <Tag className={`frag ${shown ? 'shown' : ''} ${current ? 'current-frag' : ''} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/** Step-by-step animation. The board's "next" key drives it too. */
export function Stepper({ steps, label = 'الخطوة', className = '', children }: {
  steps: number;
  label?: string;
  className?: string;
  children: (step: number) => ReactNode;
}) {
  const [step, setStep] = useState(0);
  const ref = useRef(0);
  const f = useFrame();
  const go = (s: number) => { ref.current = s; setStep(s); };

  useEffect(() => f.registerStepper({
    next: () => (ref.current < steps ? (go(ref.current + 1), true) : false),
    prev: () => (ref.current > 0 ? (go(ref.current - 1), true) : false),
  }), [f, steps]);

  return (
    <div className={className}>
      {children(step)}
      <div className="st-ctrl">
        <button className="btn" onClick={() => go(0)} title="من البداية">↺</button>
        <button className="btn" disabled={step === 0} onClick={() => go(step - 1)}>→ السابق</button>
        <span className="st-count">{label} {step} من {steps}</span>
        <button className="btn btn-primary" disabled={step === steps} onClick={() => go(step + 1)}>التالي ←</button>
        <div className="st-dots">
          {Array.from({ length: steps + 1 }, (_, i) => <i key={i} className={`${i <= step ? 'on' : ''} ${i === step ? 'cur' : ''}`} />)}
        </div>
      </div>
    </div>
  );
}

/** Picks a value by step thresholds: pick(step, {0: 'off', 1: 'on', 3: 'off'}). */
export function pick<T>(step: number, map: Record<number, T>): T {
  let v = map[0];
  for (const k of Object.keys(map).map(Number).sort((a, b) => a - b)) if (step >= k) v = map[k];
  return v;
}
