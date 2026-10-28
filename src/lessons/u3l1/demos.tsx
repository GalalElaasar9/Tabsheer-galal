import { useEffect, useRef, useState } from 'react';
import { arNum, BrowserMock, Code, Ph, Tg } from '../../kit/blocks';

export const STUDENTS = {
  2401: { name: 'أحمد سامي', math: 88, physics: 91, prog: 95 },
  2402: { name: 'مريم خالد', math: 97, physics: 85, prog: 99 },
  2403: { name: 'يوسف عادل', math: 74, physics: 80, prog: 86 },
} as const;
type StudentId = keyof typeof STUDENTS;
const IDS = Object.keys(STUDENTS).map(Number) as StudentId[];

/* ---------- One template + different data ---------- */
export function TemplateDemo() {
  const [id, setId] = useState<StudentId>(2401);
  const [tick, setTick] = useState(0);
  const s = STUDENTS[id];
  const pickId = (n: StudentId) => { setId(n); setTick(t => t + 1); };
  return (
    <>
      <div className="flex flex-wrap items-center gap-2 mt-3">
        <span className="font-extrabold">الطلب جاي من طالب رقم:</span>
        {IDS.map(n => <button key={n} className={`btn ${n === id ? 'on' : ''}`} onClick={() => pickId(n)}>{n}</button>)}
      </div>
      <div className="eq mt-4">
        <div>
          <p className="font-extrabold mb-1">📄 القالب (واحد بس)</p>
          <Code>
            <Tg n="h4">Result: <Ph>{'{{ name }}'}</Ph></Tg>
            <Tg n="p">ID: <Ph>{'{{ id }}'}</Ph></Tg>
            <Tg n="p">Math: <Ph>{'{{ math }}'}</Ph></Tg>
            <Tg n="p">Physics: <Ph>{'{{ physics }}'}</Ph></Tg>
            <Tg n="p">Programming: <Ph>{'{{ prog }}'}</Ph></Tg>
          </Code>
        </div>
        <div className="op">+</div>
        <div>
          <p className="font-extrabold mb-1">🗃️ الصف من قاعدة البيانات</p>
          <Code>
            <><span className="cm">id:</span> <Ph>{id}</Ph></>
            <><span className="cm">name:</span> <Ph>{s.name}</Ph></>
            <><span className="cm">math:</span> <Ph>{s.math}</Ph></>
            <><span className="cm">physics:</span> <Ph>{s.physics}</Ph></>
            <><span className="cm">prog:</span> <Ph>{s.prog}</Ph></>
          </Code>
        </div>
        <div className="op">=</div>
        <div>
          <p className="font-extrabold mb-1">🖥️ الصفحة اللي وصلت</p>
          <BrowserMock ltr className={tick ? 'shake' : ''} key={tick}>
            <h4>Result: {s.name}</h4>
            <div className="row"><span>ID</span><b>{id}</b></div>
            <div className="row"><span>Math</span><b>{s.math}</b></div>
            <div className="row"><span>Physics</span><b>{s.physics}</b></div>
            <div className="row"><span>Programming</span><b>{s.prog}</b></div>
          </BrowserMock>
        </div>
      </div>
    </>
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
