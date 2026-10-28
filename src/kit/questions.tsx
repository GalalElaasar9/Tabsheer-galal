import { useState } from 'react';
import type { ReactNode } from 'react';
import { arNum } from './blocks';

export type Question = { q: ReactNode; opts: ReactNode[]; a: number; why?: ReactNode };

/** Multiple choice: one try per question, then the right answer and a short reason appear. */
export function QuestionList({ items, onAnswer, className = 'grid gap-3' }: {
  items: Question[];
  onAnswer?(right: boolean): void;
  className?: string;
}) {
  const [picked, setPicked] = useState<Record<number, number>>({});
  return (
    <div className={className}>
      {items.map((it, qi) => {
        const p = picked[qi];
        const done = p !== undefined;
        const right = p === it.a;
        return (
          <div key={qi} className={`q-row ${done ? (right ? 'answered-right' : 'answered-wrong shake') : ''}`}>
            <div className="q-text">{arNum(qi + 1)} – {it.q}</div>
            <div className="q-opts">
              {it.opts.map((o, oi) => (
                <button
                  key={oi}
                  className={`q-opt ${done && oi === it.a ? 'right' : ''} ${done && oi === p && !right ? 'wrong' : ''}`}
                  onClick={() => {
                    if (done) return;
                    setPicked(s => ({ ...s, [qi]: oi }));
                    onAnswer?.(oi === it.a);
                  }}
                >
                  {o}
                </button>
              ))}
            </div>
            {done && it.why && <div className="q-why">{right ? '✅ ' : '💡 '}{it.why}</div>}
          </div>
        );
      })}
    </div>
  );
}

/** Question list with a running score and a reset button. */
export function ScoredQuiz({ title, items }: { title: ReactNode; items: Question[] }) {
  const [round, setRound] = useState(0);
  const [score, setScore] = useState({ right: 0, answered: 0 });
  const total = items.length;
  const reset = () => { setRound(r => r + 1); setScore({ right: 0, answered: 0 }); };
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="title">{title}</h2>
        <div className="flex gap-2 items-center">
          <span className="pill pill-safe">
            {score.answered === total ? '🏁 النتيجة: ' : ''}{arNum(score.right)} / {arNum(total)}
          </span>
          <button className="btn" onClick={reset}>↺ إعادة</button>
        </div>
      </div>
      <QuestionList key={round} className="grid gap-3 mt-4" items={items}
        onAnswer={right => setScore(s => ({ right: s.right + (right ? 1 : 0), answered: s.answered + 1 }))} />
    </>
  );
}

function shuffled<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Click the steps in the right order. */
export function OrderActivity({ steps, done }: { steps: string[]; done: ReactNode }) {
  const [round, setRound] = useState(0);
  return <OrderRound key={round} steps={steps} done={done} onReset={() => setRound(r => r + 1)} />;
}

function OrderRound({ steps, done, onReset }: { steps: string[]; done: ReactNode; onReset(): void }) {
  const [pool] = useState(() => shuffled(steps.map((s, i) => ({ s, i }))));
  const [next, setNext] = useState(0);
  const [wrong, setWrong] = useState<{ i: number; n: number } | null>(null);
  const finished = next === steps.length;
  return (
    <div>
      <div className="ord-slots">
        {steps.map((s, i) => (
          <div key={i} className={`ord-slot ${i < next ? 'filled' : ''}`}>
            <span className="num">{arNum(i + 1)}</span>{i < next ? s : ''}
          </div>
        ))}
      </div>
      <div className="chips mt-4">
        {pool.filter(p => p.i >= next).map(p => (
          <button key={`${p.i}-${wrong?.i === p.i ? wrong.n : 0}`} className={`chip ${wrong?.i === p.i ? 'shake' : ''}`}
            onClick={() => (p.i === next ? (setNext(n => n + 1), setWrong(null)) : setWrong(w => ({ i: p.i, n: (w?.n ?? 0) + 1 })))}>
            {p.s}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 mt-4">
        <span className="pill pill-primary">
          {finished ? '🎉 الترتيب صح' : wrong ? 'مش دي الخطوة اللي بعد كده 🤔' : `${arNum(next)} / ${arNum(steps.length)}`}
        </span>
        <button className="btn" onClick={onReset}>↺ إعادة</button>
      </div>
      {finished && <div className="q-why">✅ {done}</div>}
    </div>
  );
}

export function RevealCard({ q, a }: { q: ReactNode; a: ReactNode }) {
  return (
    <div className="card">
      <p className="font-extrabold text-lg">{q}</p>
      <details className="reveal mt-2">
        <summary>اكشف الإجابة</summary>
        <div className="ans">{a}</div>
      </details>
    </div>
  );
}
