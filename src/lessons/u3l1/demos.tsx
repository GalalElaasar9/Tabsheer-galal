import { useEffect, useRef, useState } from 'react';
import { arNum } from '../../kit/blocks';

export const STUDENTS = {
  2401: { name: 'أحمد سامي', math: 88, physics: 91, prog: 95 },
  2402: { name: 'مريم خالد', math: 97, physics: 85, prog: 99 },
  2403: { name: 'يوسف عادل', math: 74, physics: 80, prog: 86 },
  2404: { name: 'سارة محمود', math: 92, physics: 89, prog: 90 },
  2405: { name: 'عمر حسن', math: 65, physics: 71, prog: 78 },
  2406: { name: 'مريم عادل', math: 81, physics: 94, prog: 87 },
} as const;
type StudentId = keyof typeof STUDENTS;
const IDS = Object.keys(STUDENTS).map(Number) as StudentId[];

/* ---------- Results portal: search → Backend → Database → template → page ---------- */
const find = (q: string): StudentId[] =>
  /^\d+$/.test(q) ? IDS.filter(id => String(id) === q) : IDS.filter(id => STUDENTS[id].name.includes(q));
const avg = (id: StudentId) => { const s = STUDENTS[id]; return Math.round((s.math + s.physics + s.prog) / 3); };
const TRY = ['2402', 'سارة', 'مريم', '9999'];
const STEP_MS = 700;

export function SearchDemo() {
  const [text, setText] = useState('');
  const [req, setReq] = useState<{ q: string; hits: StudentId[]; n: number } | null>(null);
  const [step, setStep] = useState(0); // 1 request · 2 database · 3 template · 4 page arrived
  const [shake, setShake] = useState(0);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const search = (raw: string) => {
    const q = raw.trim();
    if (!q) { setShake(k => k + 1); return; }
    timers.current.forEach(clearTimeout);
    timers.current = [2, 3, 4].map((s, i) => window.setTimeout(() => setStep(s), (i + 1) * STEP_MS));
    setText(q);
    setReq(r => ({ q, hits: find(q), n: (r?.n ?? 0) + 1 }));
    setStep(1);
  };

  const hits = req?.hits ?? [];
  const one = hits.length === 1 ? hits[0] : null;
  const s = one ? STUDENTS[one] : null;

  return (
    <div className="grid grid-cols-2 gap-4 mt-3 items-start">
      {/* The student's side: a real-looking results portal */}
      <div>
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="addr"><bdi dir="ltr">univ.example/results{req ? `?q=${req.q}` : ''}</bdi></div>
          </div>
          <div className="site-head"><span>🎓 جامعة المستقبل · بوابة النتائج</span></div>
          <form className="flex gap-2 p-3" onSubmit={e => { e.preventDefault(); search(text); }}>
            <input key={shake} className={`field flex-1 ${shake ? 'shake' : ''}`} value={text} placeholder="رقم الطالب أو الاسم"
              onChange={e => setText(e.target.value)} aria-label="بحث عن طالب" />
            <button className="btn btn-primary">🔍 بحث</button>
          </form>
          <div className="portal-page">
            {!req && <p className="muted">اكتب رقم أو اسم واضغط بحث.</p>}
            {req && step < 4 && <p className="muted">⏳ بيحمّل الصفحة…</p>}
            {req && step >= 4 && (
              <div key={req.n} className="fade-up">
                {s && one && (
                  <>
                    <h4 className="portal-title">نتيجة: {s.name}</h4>
                    <div className="portal-row"><span>رقم الطالب</span><b>{one}</b></div>
                    <div className="portal-row"><span>رياضيات</span><b>{s.math}</b></div>
                    <div className="portal-row"><span>فيزياء</span><b>{s.physics}</b></div>
                    <div className="portal-row"><span>برمجة</span><b>{s.prog}</b></div>
                    <div className="portal-row total"><span>المتوسط</span><b>{avg(one)}%</b></div>
                  </>
                )}
                {hits.length > 1 && (
                  <>
                    <h4 className="portal-title">لقينا {arNum(hits.length)} طلاب باسم «{req.q}»</h4>
                    {hits.map(id => (
                      <button key={id} className="portal-link" onClick={() => search(String(id))}>
                        {STUDENTS[id].name} · {id} ←
                      </button>
                    ))}
                  </>
                )}
                {!hits.length && <p className="hl-danger">😕 مفيش طالب بالرقم أو الاسم ده.</p>}
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2 items-center mt-2">
          <span className="muted text-sm">جرّب:</span>
          {TRY.map(t => <button key={t} className="btn" onClick={() => search(t)}>{t}</button>)}
        </div>
      </div>

      {/* Behind the scenes on the server */}
      <div className="backstage">
        <p className="font-extrabold">⚙️ ورا الكواليس على السيرفر</p>
        {!req && <p className="muted text-sm mt-2">أول ما تدوس بحث، هتشوف هنا كل خطوة بتحصل.</p>}
        {req && (
          <ol key={req.n}>
            <li className="fade-up">📨 الطلب وصل للـ Backend: <bdi className="code-inline" dir="ltr">GET /results?q={req.q}</bdi></li>
            {step >= 2 && (
              <li className="fade-up">
                🗃️ بيدوّر في قاعدة البيانات… {hits.length ? <b className="hl-safe">لقى {arNum(hits.length)}</b> : <b className="hl-danger">ملقاش حاجة</b>}
                <table className="db-mini">
                  <tbody>
                    {IDS.map(id => (
                      <tr key={id} className={hits.includes(id) ? 'hit' : ''}>
                        <td>{id}</td><td>{STUDENTS[id].name}</td><td>{STUDENTS[id].math}</td><td>{STUDENTS[id].physics}</td><td>{STUDENTS[id].prog}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </li>
            )}
            {step >= 3 && (
              <li className="fade-up">
                🧩 {one ? 'يملا قالب النتيجة:' : hits.length ? 'يكرر سطر في قالب القائمة لكل طالب لقاه' : 'يختار قالب «مش لاقي»'}
                {s && one && (
                  <div className="code mt-1">
                    <div><span className="ph">{'{{ name }}'}</span> ← {s.name}</div>
                    <div><span className="ph">{'{{ math }}'}</span> ← {s.math}</div>
                    <div><span className="ph">{'{{ avg }}'}</span> ← {avg(one)} <span className="cm">(الـ Backend حسبه)</span></div>
                  </div>
                )}
              </li>
            )}
            {step >= 4 && <li className="fade-up">📤 بعت <b>صفحة HTML كاملة</b> للمتصفح</li>}
          </ol>
        )}
      </div>
    </div>
  );
}

/* ---------- HTML / CSS / JavaScript layers ---------- */
export function LayersDemo() {
  const [css, setCss] = useState(false);
  const [js, setJs] = useState(false);
  const [value, setValue] = useState('');
  const [msg, setMsg] = useState<{ text: string; cls: string } | null>(null);
  const submit = () => {
    if (!js) return setMsg({ text: '(الزرار موجود، بس مفيش كود يحدد يعمل إيه لما تضغطه)', cls: '' });
    const v = value.trim();
    if (!v) return setMsg({ text: '⚠️ اكتب رقم الطالب الأول', cls: 'bad' });
    if (!/^\d+$/.test(v)) return setMsg({ text: '⚠️ رقم الطالب لازم يكون أرقام بس', cls: 'bad' });
    setMsg({ text: '✓ الرقم مكتوب صح. هنا الطلب يتبعت للسيرفر.', cls: 'good' });
  };
  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <button className="btn on" title="HTML موجود دايمًا: هو أساس الصفحة">✓ HTML</button>
        <button className={`btn ${css ? 'on' : ''}`} onClick={() => setCss(c => !c)}>{css ? '✓ ' : ''}CSS</button>
        <button className={`btn ${js ? 'on' : ''}`} onClick={() => { setJs(j => !j); setMsg(null); }}>{js ? '✓ ' : ''}JavaScript</button>
      </div>
      <div className={`layer-demo mt-3 ${css ? 'css' : ''}`}>
        <p className="ld-title">استعلام عن النتيجة</p>
        <label>رقم الطالب: <input value={value} placeholder="مثلًا 2402"
          onChange={e => { setValue(e.target.value); if (js) setMsg(null); }} /></label>
        <button onClick={submit}>عرض</button>
        <p className={`ld-msg ${msg?.cls ?? ''}`}>{msg?.text}</p>
      </div>
      <p className="muted text-sm mt-2">شغّل وطفّي CSS و JavaScript، وجرّب تكتب حروف بدل أرقام.</p>
    </div>
  );
}

/* ---------- Full page reload vs background request ---------- */
export function ReloadDemo() {
  const [id, setId] = useState<StudentId>(2401);
  const [count, setCount] = useState(1);
  const [notes, setNotes] = useState('');
  const [box, setBox] = useState<'empty' | 'loading' | StudentId>('empty');
  const [flashed, setFlashed] = useState(false);
  const [reloading, setReloading] = useState(0);
  const [note, setNote] = useState<'start' | 'full' | 'bg'>('start');
  const busy = useRef(false);
  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);
  const later = (fn: () => void, ms: number) => { timers.current.push(window.setTimeout(fn, ms)); };

  const full = () => {
    if (busy.current) return;
    busy.current = true;
    setReloading(r => r + 1);
    later(() => {
      setCount(c => c + 1);
      setNotes('');
      setFlashed(false);
      setBox(id);
      setNote('full');
    }, 250);
    later(() => { busy.current = false; }, 700);
  };

  const bg = () => {
    if (busy.current) return;
    busy.current = true;
    setFlashed(false);
    setBox('loading');
    later(() => {
      setBox(id);
      setFlashed(true);
      setNote('bg');
      busy.current = false;
    }, 900);
  };

  const s = typeof box === 'number' ? STUDENTS[box] : null;
  return (
    <>
      <div className="flex flex-wrap gap-2 items-center mt-3">
        <span className="font-extrabold">ابحث عن طالب:</span>
        <select className="field" value={id} onChange={e => setId(Number(e.target.value) as StudentId)}>
          {IDS.map(n => <option key={n} value={n}>{n}</option>)}
        </select>
        <button className="btn" onClick={full}>📄 طلب صفحة كاملة</button>
        <button className="btn btn-primary" onClick={bg}>⚡ طلب في الخلفية</button>
      </div>
      <div key={reloading} className={`site mt-4 ${reloading ? 'reloading' : ''}`}>
        <div className="site-head">
          <span>🎓 بوابة الطلاب</span>
          <span>مرات تحميل الصفحة كلها: <b className="hl-danger">{arNum(count)}</b></span>
        </div>
        <div className="site-body">
          <div className="flex gap-2 items-center flex-wrap">
            📝 ملاحظاتك:
            <input className="field" style={{ width: '18rem' }} value={notes} onChange={e => setNotes(e.target.value)}
              placeholder="اكتب هنا وبعدين جرّب الزرارين" />
          </div>
          <div className={`site-box ${flashed ? 'flashed' : ''}`}>
            {box === 'empty' && 'النتيجة هتظهر هنا'}
            {box === 'loading' && <span className="muted">⏳ بندوّر… (جرّب تكتب في الملاحظات، الصفحة شغالة)</span>}
            {s && <><b>{s.name}</b> · رياضيات {s.math} · فيزياء {s.physics} · برمجة {s.prog}</>}
          </div>
        </div>
      </div>
      <p className="mt-3 text-lg font-bold">
        {note === 'start' && 'اكتب ملاحظة، وبعدين جرّب كل زرار ولاحظ إيه اللي بيحصل للملاحظة وللعدّاد.'}
        {note === 'full' && <>📄 الصفحة <b className="hl-danger">كلها</b> اتشالت واتحمّلت من جديد، والملاحظة اللي كتبتها ضاعت.</>}
        {note === 'bg' && <>⚡ <b className="hl-safe">مربع النتيجة بس</b> اتغيّر. الملاحظة لسه موجودة، والعدّاد ما زادش.</>}
      </p>
    </>
  );
}

/* ---------- HTML playground: type HTML, see how the browser shows it ---------- */
const START_HTML = `<h1>جامعة المستقبل</h1>
<p>تأسست سنة 2005 وفيها 6 كليات.</p>
<a href="#">تواصل معنا</a>`;

const SNIPPETS: [string, string][] = [
  ['+ عنوان', '<h1>عنوان جديد</h1>'],
  ['+ عنوان فرعي', '<h2>عنوان فرعي</h2>'],
  ['+ فقرة', '<p>دي فقرة كلام عادي.</p>'],
  ['+ رابط', '<a href="#">رابط</a>'],
  ['+ قائمة', '<ul>\n  <li>عنصر أول</li>\n  <li>عنصر تاني</li>\n</ul>'],
  ['+ كلمة عريضة', '<p>كلمة <b>مهمة</b> جوه جملة</p>'],
];

export function HtmlPlayground() {
  const [code, setCode] = useState(START_HTML);
  // Sandboxed preview: no scripts run, links stay inside it.
  const doc = `<!doctype html><html dir="rtl"><head><meta charset="utf-8"><style>
    body { font-family: system-ui, sans-serif; padding: 14px 18px; line-height: 1.7; color: #141a2e; background: #fff; }
    a { color: #1971c2; }
  </style></head><body>${code}</body></html>`;
  return (
    <div className="grid grid-cols-2 gap-4 mt-4" style={{ height: 440 }}>
      <div className="flex flex-col min-h-0">
        <div className="flex flex-wrap gap-2 mb-2">
          {SNIPPETS.map(([label, s]) => (
            <button key={label} className="btn" onClick={() => setCode(c => `${c.trimEnd()}\n${s}`)}>{label}</button>
          ))}
          <button className="btn" title="رجّع الكود الأصلي" onClick={() => setCode(START_HTML)}>↺</button>
        </div>
        <textarea className="code-editor" dir="ltr" spellCheck={false} value={code}
          onChange={e => setCode(e.target.value)} aria-label="كود HTML" />
        <p className="muted text-sm mt-1">📝 الكود (HTML)</p>
      </div>
      <div className="flex flex-col min-h-0">
        <div className="browser flex flex-col flex-1 min-h-0">
          <div className="browser-top"><div className="browser-dots"><i /><i /><i /></div><div className="addr">my-page.html</div></div>
          <iframe title="معاينة الصفحة" sandbox="" srcDoc={doc} style={{ flex: 1, width: '100%', border: 0, background: '#fff' }} />
        </div>
        <p className="muted text-sm mt-1">🖥️ المتصفح بيعرضه كده</p>
      </div>
    </div>
  );
}
