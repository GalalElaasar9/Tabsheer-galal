import type { FormEvent } from 'react';
import { useEffect, useRef, useState } from 'react';

/* =========================================================================
   1. HttpVsHttpsDemo: Man-in-the-Middle & Encryption Simulator
   ========================================================================= */
export function HttpVsHttpsDemo() {
  const [protocol, setProtocol] = useState<'http' | 'https'>('http');
  const [username, setUsername] = useState('tarek_2026');
  const [password, setPassword] = useState('pass@1234');
  const [inTransit, setInTransit] = useState(false);
  const [intercepted, setIntercepted] = useState<{
    time: string;
    protocol: 'http' | 'https';
    raw: string;
    decoded: string;
  } | null>(null);

  const timer = useRef<number | null>(null);
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const sendPacket = () => {
    if (inTransit) return;
    setInTransit(true);
    setIntercepted(null);

    timer.current = window.setTimeout(() => {
      setInTransit(false);
      setIntercepted({
        time: new Date().toLocaleTimeString('ar-EG'),
        protocol,
        raw: protocol === 'http'
          ? `username=${username}&password=${password}`
          : 'e7a1#89!fd@90c9b0e7a123f1a0c8b9d8e7f12a34c56e789a0b1c2d3e4f5',
        decoded: protocol === 'http'
          ? `اسم المستخدم: ${username} · كلمة السر: ${password}`
          : '🔒 [بيانات مشفرة بتشفير TLS/SSL لا يمكن فكها أو قراءتها]',
      });
    }, 1100);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-3 items-start">
      {/* Client & Form side */}
      <div>
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="addr flex items-center justify-between">
              <span className={`inline-flex items-center gap-1 font-mono text-xs ${protocol === 'https' ? 'hl-safe font-extrabold' : 'hl-danger font-extrabold'}`}>
                {protocol === 'https' ? '🔒 https://' : '🔓 http://'}univ.example/login
              </span>
              <span className={`pill text-[11px] py-0 px-2 ${protocol === 'https' ? 'pill-safe' : 'pill-danger'}`}>
                {protocol === 'https' ? 'اتصال مشفر وآمن' : 'اتصال غير مشفر وغير آمن'}
              </span>
            </div>
          </div>

          <div className="p-4" style={{ background: 'var(--surface)' }}>
            <h4 className="font-extrabold text-base mb-3 flex items-center gap-2">
              <span>👤 صفحة تسجيل الدخول الجامعية</span>
            </h4>

            {/* Protocol selector toggle */}
            <div className="flex items-center gap-2 mb-3 p-1.5 rounded-xl border" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
              <span className="text-xs font-bold muted">اختر البروتوكول:</span>
              <button
                className={`btn text-xs py-1 px-3 ${protocol === 'http' ? 'btn-primary' : ''}`}
                style={protocol === 'http' ? { background: 'var(--danger)', color: '#fff' } : undefined}
                onClick={() => setProtocol('http')}
                disabled={inTransit}
              >
                🔓 HTTP (بدون تشفير)
              </button>
              <button
                className={`btn text-xs py-1 px-3 ${protocol === 'https' ? 'btn-primary' : ''}`}
                style={protocol === 'https' ? { background: 'var(--safe)', color: '#fff' } : undefined}
                onClick={() => setProtocol('https')}
                disabled={inTransit}
              >
                🔒 HTTPS (مشفر بـ TLS)
              </button>
            </div>

            <div className="space-y-2.5">
              <div>
                <label className="block text-xs font-bold mb-1 muted">اسم المستخدم:</label>
                <input
                  className="field w-full text-sm font-mono"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  disabled={inTransit}
                />
              </div>
              <div>
                <label className="block text-xs font-bold mb-1 muted">كلمة المرور:</label>
                <input
                  type="text"
                  className="field w-full text-sm font-mono"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  disabled={inTransit}
                />
              </div>
              <button
                className="btn btn-primary w-full mt-2 text-sm"
                onClick={sendPacket}
                disabled={inTransit}
              >
                {inTransit ? '⏳ جاري إرسال حزمة البيانات عبر الشبكة…' : '🚀 إرسال البيانات إلى السيرفر'}
              </button>
            </div>
          </div>
        </div>

        <div className="callout c-info mt-3 py-2 px-3 text-xs leading-relaxed">
          <span className="ico text-base">💡</span>
          <div>
            <b>في امتحانات البكالوريا:</b> يُسأل دائماً: لماذا تُجبر مواقع تسجيل الدخول استخدام <b>HTTPS</b>؟ الإجابة: لأن بيانات الدخول الحساسة تُشفر تماماً بطبقة <b>TLS</b> قبل إرسالها في الشبكة، فيستحيل التجسس عليها.
          </div>
        </div>
      </div>

      {/* Network wire & Sniffer side */}
      <div className="backstage" style={{ minHeight: '26rem' }}>
        <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
          <span className="font-extrabold text-sm">🕵️ ماذا يرى المتنصت على نفس الشبكة؟ (Packet Sniffer)</span>
          <span className="pill text-[11px]">{inTransit ? '⚡ حزمة تسير الآن' : 'في الانتظار'}</span>
        </div>

        {/* Network cable animation */}
        <div className="my-4 p-3 rounded-xl text-center relative overflow-hidden" style={{ background: 'var(--surface-2)', border: '1px solid var(--border)' }}>
          <div className="flex justify-between items-center text-xs font-bold mb-2">
            <span>💻 جهاز الطالب</span>
            <span className="muted font-mono">──── سلك الشبكة / Wi-Fi ────</span>
            <span>🗄️ سيرفر الجامعة</span>
          </div>

          <div
            className={`py-2 px-4 rounded-lg font-mono text-xs transition-all flex items-center justify-center gap-2 ${
              inTransit
                ? (protocol === 'https' ? 'bg-emerald-100 text-emerald-900 border border-emerald-400 animate-pulse' : 'bg-red-100 text-red-900 border border-red-400 animate-pulse')
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            {inTransit ? (
              protocol === 'https' ? (
                <>🔒 حزمة مشفرة بواسطة TLS تُنقل بأمان… [8f#@1x!99q&L%z]</>
              ) : (
                <>🔓 حزمة نص صريح مكشوفة بالكامل! [{username} : {password}]</>
              )
            ) : (
              'اضغط «إرسال البيانات» لتشاهد مرور الحزمة أمام المتنصت'
            )}
          </div>
        </div>

        {/* Sniffer's Catch Terminal */}
        <div className="rounded-xl border p-3 font-mono text-xs" style={{ background: '#0e1320', color: '#c9d1d9', borderColor: '#30363d' }}>
          <div className="flex justify-between items-center mb-2 text-gray-400 border-b border-gray-800 pb-1 text-[11px]">
            <span>TERMINAL · PACKET CAPTURE</span>
            <span>PORT: {protocol === 'https' ? '443 (HTTPS)' : '80 (HTTP)'}</span>
          </div>

          {!intercepted && !inTransit && (
            <p className="text-gray-500 py-6 text-center">
              // بانتظار إرسال أي طلب على الشبكة لالتقاطه...
            </p>
          )}

          {inTransit && (
            <p className="text-amber-400 py-6 text-center animate-pulse">
              ⚡ جاري التقاط الحزمة المارة عبر الموزع (Switch/Router)...
            </p>
          )}

          {intercepted && (
            <div className="space-y-2 fade-up">
              <div className="text-gray-400 text-[11px]">
                تم الالتقاط الساعة {intercepted.time} عبر المنفذ {intercepted.protocol === 'https' ? '443' : '80'}
              </div>
              <div>
                <span className="text-gray-400">الحزمة الخام (Raw Data):</span>
                <pre className="p-2 rounded bg-black/50 text-[11px] overflow-x-auto text-yellow-300 mt-1 whitespace-pre-wrap break-all">
                  {intercepted.raw}
                </pre>
              </div>

              <div className={`p-2 rounded text-xs font-sans font-bold ${intercepted.protocol === 'http' ? 'bg-red-950/80 text-red-200 border border-red-800' : 'bg-emerald-950/80 text-emerald-200 border border-emerald-800'}`}>
                {intercepted.protocol === 'http' ? (
                  <>
                    🚨 <b>كارثة أمنية:</b> تمكن المتنصت من قراءة اسم المستخدم وكلمة السر بنجاح لأن بروتوكول HTTP لا يوفر أي حماية!
                  </>
                ) : (
                  <>
                    🛡️ <b>فشل التجسس:</b> البيانات ظهرت كرموز عشوائية مشفرة رياضياً بخوارزميات TLS، ولا يمكن لأحد قراءتها غير السيرفر صاحب المفتاح الخاص!
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. GetInteractiveDemo: Real Search Returning Real Data via GET
   ========================================================================= */
const INITIAL_STUDENTS = [
  { id: 2401, name: 'أحمد سامي', subject: 'برمجة وذكاء اصطناعي', grade: 95, city: 'دمشق' },
  { id: 2402, name: 'مريم خالد', subject: 'أمن شبكات', grade: 99, city: 'حلب' },
  { id: 2403, name: 'يوسف عادل', subject: 'برمجة وذكاء اصطناعي', grade: 86, city: 'اللاذقية' },
  { id: 2404, name: 'سارة محمود', subject: 'تصميم ويب ووسائط', grade: 92, city: 'حمص' },
  { id: 2405, name: 'عمر حسن', subject: 'أمن شبكات', grade: 78, city: 'دمشق' },
  { id: 2406, name: 'مريم عادل', subject: 'تصميم ويب ووسائط', grade: 88, city: 'طرطوس' },
];

export function GetInteractiveDemo() {
  const [searchTerm, setSearchTerm] = useState('مريم');
  const [activeQuery, setActiveQuery] = useState('مريم');
  const [subjectFilter, setSubjectFilter] = useState('الكل');
  const [isSearching, setIsSearching] = useState(false);

  const doSearch = (q: string, filter?: string) => {
    setIsSearching(true);
    setActiveQuery(q);
    if (filter) setSubjectFilter(filter);
    setTimeout(() => {
      setIsSearching(false);
    }, 450);
  };

  const results = INITIAL_STUDENTS.filter(s => {
    const matchText = s.name.includes(activeQuery) || String(s.id).includes(activeQuery);
    const matchFilter = subjectFilter === 'الكل' || s.subject === subjectFilter;
    return matchText && matchFilter;
  });

  const fullUrl = 'https://univ.example/students';

  return (
    <div className="grid grid-cols-2 gap-4 mt-3 items-start">
      {/* Browser Window with Search & Results */}
      <div>
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="addr">
              <bdi dir="ltr" className="font-mono text-xs text-blue-700 font-bold">{fullUrl}</bdi>
            </div>
          </div>

          <div className="p-3" style={{ background: 'var(--surface)' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-extrabold text-sm">🔍 دليل نتائج الطلاب (GET Request)</h4>
              <span className="pill pill-info text-xs font-mono font-bold">METHOD: GET</span>
            </div>

            {/* Search form */}
            <form
              className="flex gap-2 mb-3"
              onSubmit={e => {
                e.preventDefault();
                doSearch(searchTerm, subjectFilter);
              }}
            >
              <input
                className="field flex-1 text-xs"
                placeholder="ابحث باسم الطالب أو رقمه (مثلاً: مريم، سارة، 2401)..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
              <select
                className="field text-xs"
                value={subjectFilter}
                onChange={e => {
                  setSubjectFilter(e.target.value);
                  doSearch(searchTerm, e.target.value);
                }}
              >
                <option value="الكل">كل المواد</option>
                <option value="برمجة وذكاء اصطناعي">برمجة</option>
                <option value="أمن شبكات">أمن شبكات</option>
                <option value="تصميم ويب ووسائط">تصميم ويب</option>
              </select>
              <button type="submit" className="btn btn-primary text-xs">
                {isSearching ? '⏳' : 'بحث بالـ GET'}
              </button>
            </form>

            {/* Quick search chips */}
            <div className="flex flex-wrap gap-1.5 items-center mb-3 text-xs">
              <span className="muted font-bold text-[11px]">جرّب بسرعة:</span>
              {['مريم', 'سارة', '2401', 'أحمد', '9999'].map(chip => (
                <button
                  key={chip}
                  type="button"
                  className="pill text-xs py-0.5 px-2 hover:border-blue-500 cursor-pointer"
                  onClick={() => {
                    setSearchTerm(chip);
                    doSearch(chip, subjectFilter);
                  }}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Real Search Results */}
            <div className="border rounded-xl p-2.5 max-h-64 overflow-y-auto" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
              <div className="flex justify-between items-center text-xs font-bold mb-2 pb-1 border-b" style={{ borderColor: 'var(--border)' }}>
                <span>نتائج البحث للعبارة «{activeQuery}»:</span>
                <span className="pill text-[11px]">{results.length} طلاب مطابقين</span>
              </div>

              {results.length > 0 ? (
                <div className="space-y-2">
                  {results.map(s => (
                    <div key={s.id} className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm text-xs flex justify-between items-center">
                      <div>
                        <div className="font-extrabold text-sm text-blue-900">{s.name}</div>
                        <div className="muted text-[11px]">رقم الجلوس: {s.id} · المادة: {s.subject} · {s.city}</div>
                      </div>
                      <div className="text-right">
                        <span className="pill pill-safe font-mono font-bold text-xs">{s.grade} / 100</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="text-2xl mb-1">😕</div>
                  <p className="font-bold text-xs hl-danger">لم يتم العثور على أي طالب بالاسم أو الرقم «{activeQuery}»</p>
                  <p className="muted text-[11px] mt-1">السيرفر رد بنجاح لكن مصفوفة النتائج فارغة (Empty Results).</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Inspector / Under the hood for GET */}
      <div className="backstage" style={{ minHeight: '27rem' }}>
        <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
          <span className="font-extrabold text-sm">📡 كواليس طلب الـ GET على الشبكة</span>
          <span className="pill pill-safe text-xs font-mono font-bold">200 OK</span>
        </div>

        {/* Live HTTP Packet */}
        <div className="my-3 font-mono text-xs rounded-xl p-3 border ltr overflow-x-auto" style={{ background: '#0e1320', color: '#c9d1d9', borderColor: '#30363d' }}>
          <div className="text-gray-400 mb-1 border-b border-gray-800 pb-1 text-[11px]">
            // حزمة طلب استرجاع البيانات (GET Request):
          </div>
          <div className="text-emerald-400 font-bold">
            GET /students HTTP/1.1
          </div>
          <div className="text-blue-300">Host: univ.example</div>
          <div className="text-blue-300">Accept: application/json</div>
          <div className="text-gray-500 my-1.5">// طبيعة طلب GET:</div>
          <div className="text-emerald-300 bg-emerald-950/30 p-1.5 rounded border border-emerald-800 text-[11px]">
            [طلب قراءة واستعلام آمن: الخادم يقرأ البيانات من قاعدة البيانات ويرجعها دون تعديل]
          </div>
        </div>

        {/* Pedagogical Note */}
        <div className="p-3 rounded-xl border text-xs leading-relaxed space-y-2" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <p className="font-extrabold text-blue-700">💡 ماذا نستنتج للطلاب وفقاً لمنهاج كتاب المدرسة؟</p>
          <ul className="list-disc list-inside space-y-1.5 muted text-xs">
            <li>
              <b>الهدف الأساسي لأسلوب GET:</b> جلب وقراءة واسترجاع البيانات المتاحة على الخادم (مثل استعراض صفحة أو نتائج الاختبار).
            </li>
            <li>
              <b>طلب آمن للقراءة فقط:</b> الخادم يقرأ من قاعدة البيانات فقط ولا يضيف أو يحذف أي طالب.
            </li>
            <li>
              <b>سرعة العرض:</b> استجابة الخادم تُعيد البيانات المطلوبة فوراً ليقوم المتصفح بعرضها للمستخدم.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. PostInteractiveDemo: Real Form Posting Data inside Request Body
   ========================================================================= */
export function PostInteractiveDemo() {
  const [studentsList, setStudentsList] = useState(INITIAL_STUDENTS);
  const [name, setName] = useState('كريم علي');
  const [subject, setSubject] = useState('برمجة وذكاء اصطناعي');
  const [grade, setGrade] = useState('98');
  const [secretPin, setSecretPin] = useState('pass@2026');
  const [isPosting, setIsPosting] = useState(false);
  const [lastPostedPayload, setLastPostedPayload] = useState<Record<string, unknown> | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setIsPosting(true);
    const newStudent = {
      id: 2400 + studentsList.length + 1,
      name: name.trim(),
      subject,
      grade: Number(grade) || 85,
      city: 'دمشق',
    };

    const payload = {
      name: newStudent.name,
      subject: newStudent.subject,
      grade: newStudent.grade,
      pin: secretPin,
      timestamp: new Date().toISOString(),
    };

    setTimeout(() => {
      setStudentsList(prev => [newStudent, ...prev]);
      setLastPostedPayload(payload);
      setIsPosting(false);
      setName('');
      setGrade('90');
    }, 700);
  };

  return (
    <div className="grid grid-cols-2 gap-4 mt-3 items-start">
      {/* Form to submit data via POST */}
      <div>
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="addr">
              <bdi dir="ltr" className="font-mono text-xs text-purple-700 font-bold">
                https://univ.example/students/new
              </bdi>
            </div>
          </div>

          <div className="p-3" style={{ background: 'var(--surface)' }}>
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-extrabold text-sm">📝 تسجيل طالب جديد وحفظ بياناته (POST Request)</h4>
              <span className="pill pill-primary text-xs font-mono font-bold">METHOD: POST</span>
            </div>

            <p className="text-[11px] muted mb-2.5">
              عند إرسال بيانات جديدة، يقوم أسلوب POST بتمرير البيانات إلى الخادم لمعالجتها وحفظها في قاعدة البيانات.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2 border p-3 rounded-xl" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
              <div>
                <label className="block text-[11px] font-bold mb-1 muted">اسم الطالب الجديد:</label>
                <input
                  className="field w-full text-xs"
                  placeholder="مثال: كريم علي..."
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold mb-1 muted">المادة الدراسية:</label>
                  <select
                    className="field w-full text-xs"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                  >
                    <option value="برمجة وذكاء اصطناعي">برمجة وذكاء اصطناعي</option>
                    <option value="أمن شبكات">أمن شبكات</option>
                    <option value="تصميم ويب ووسائط">تصميم ويب ووسائط</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold mb-1 muted">الدرجة المكتسبة (0 - 100):</label>
                  <input
                    type="number"
                    className="field w-full text-xs font-mono"
                    value={grade}
                    onChange={e => setGrade(e.target.value)}
                    max={100}
                    min={0}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold mb-1 muted">الرقم السري للحساب (بيانات الطالب):</label>
                <input
                  type="password"
                  className="field w-full text-xs font-mono"
                  value={secretPin}
                  onChange={e => setSecretPin(e.target.value)}
                />
              </div>

              <button
                type="submit"
                disabled={isPosting}
                className="btn btn-primary w-full text-xs py-2 mt-1"
                style={{ background: 'var(--purple, #7c3aed)' }}
              >
                {isPosting ? '⏳ جاري إرسال البيانات ومعالجتها في الخادم…' : '🚀 إرسال وحفظ الطالب في السيرفر (POST)'}
              </button>
            </form>
          </div>
        </div>

        {/* Live confirmation of saved data */}
        {lastPostedPayload && (
          <div className="callout c-safe mt-2 py-2 px-3 text-xs leading-relaxed fade-up">
            <span className="ico text-base">✅</span>
            <div>
              <b>تم الاستلام والتخزين بنجاح (200 OK):</b> أرسل الخادم استجابة تؤكد معالجة وحفظ بيانات الطالب «{String(lastPostedPayload.name)}» في قاعدة البيانات!
            </div>
          </div>
        )}
      </div>

      {/* Inspector showing the POST Body */}
      <div className="backstage" style={{ minHeight: '27rem' }}>
        <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
          <span className="font-extrabold text-sm">📦 فحص حزمة طلب الـ POST وحفظ البيانات</span>
          <span className="pill pill-primary text-xs font-mono font-bold">INSPECTOR</span>
        </div>

        {/* Raw POST Packet Display */}
        <div className="my-2.5 font-mono text-xs rounded-xl p-3 border ltr overflow-x-auto" style={{ background: '#0e1320', color: '#c9d1d9', borderColor: '#30363d' }}>
          <div className="text-gray-400 mb-1 border-b border-gray-800 pb-1 text-[11px]">
            // حزمة طلب إرسال وحفظ البيانات (POST Request):
          </div>
          <div className="text-purple-400 font-bold">
            POST /students HTTP/1.1
          </div>
          <div className="text-blue-300">Host: univ.example</div>
          <div className="text-blue-300">Content-Type: application/json</div>
          <div className="text-blue-300">Content-Length: {JSON.stringify(lastPostedPayload || { name, subject, grade, pin: secretPin }).length}</div>
          <div className="text-gray-500 my-1">// [البيانات المُرسلة للخادم للحفظ والمعالجة]:</div>
          <pre className="text-yellow-300 bg-yellow-950/40 p-2 rounded border border-yellow-800 text-[11px] whitespace-pre-wrap">
            {JSON.stringify(lastPostedPayload || { name, subject, grade: Number(grade), pin: '••••••••' }, null, 2)}
          </pre>
        </div>

        {/* Live database preview */}
        <div className="mt-2.5">
          <div className="flex justify-between items-center mb-1 text-xs">
            <span className="font-bold muted">قاعدة بيانات الطلاب على السيرفر (محدثة حياً):</span>
            <span className="pill text-[10px]">{studentsList.length} طلاب</span>
          </div>
          <div className="max-h-36 overflow-y-auto border rounded-lg text-[11px]" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="border-b" style={{ borderColor: 'var(--border)', background: 'var(--surface)' }}>
                  <th className="p-1.5">الرقم</th>
                  <th className="p-1.5">الاسم</th>
                  <th className="p-1.5">المادة</th>
                  <th className="p-1.5">الدرجة</th>
                </tr>
              </thead>
              <tbody>
                {studentsList.map((s, idx) => (
                  <tr key={s.id} className={`border-b ${idx === 0 && lastPostedPayload ? 'bg-purple-100 font-bold' : ''}`} style={{ borderColor: 'var(--border)' }}>
                    <td className="p-1 font-mono">{s.id}</td>
                    <td className="p-1">{s.name}</td>
                    <td className="p-1">{s.subject}</td>
                    <td className="p-1 font-mono hl-safe">{s.grade}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. StatusCodesExplorer: Only 200, 404, and 500 (Curriculum Exact Scope)
   ========================================================================= */
const CURRICULUM_STATUS_CODES = [
  {
    code: 200,
    text: 'OK',
    family: '2xx (النجاح)',
    badge: '🟢 200 OK',
    tone: 'safe',
    desc: 'الطلب نجح بنجاح تام، والخادم قام بمعالجة المطلوب وأعاد البيانات المطلوبة للعميل.',
    meaning: 'كل شيء سليم: السيرفر شغال، والصفحة أو النتيجة موجودة ورجعت للمتصفح.',
    json: {
      status: 200,
      ok: true,
      message: 'تم جلب درجات الطالب بنجاح',
      data: { id: 2402, name: 'مريم خالد', grade: 99, status: 'ناجحة بتفوق' },
    },
    uiAction: 'الواجهة تعرض بطاقة النتيجة الخضراء والدرجات مباشرة دون أي رسائل تحذيرية.',
  },
  {
    code: 404,
    text: 'Not Found',
    family: '4xx (خطأ من العميل)',
    badge: '🟡 404 Not Found',
    tone: 'warn',
    desc: 'المورد أو الصفحة المطلوبة غير موجودة بهذا العنوان على السيرفر.',
    meaning: 'السيرفر شغال وزي الفل ومفهوش أي عطل! بس العنوان أو رقم الطالب اللي انكتب غلط ومش متسجل عنده.',
    json: {
      status: 404,
      ok: false,
      error: 'NotFound',
      message: 'لم يتم العثور على أي طالب مسجل برقم الجلوس المطلوب',
      requestedUrl: '/students/9999',
    },
    uiAction: 'الواجهة تعرض صفحة تنبيه توضح أن العنوان خطأ وتطلب من المستخدم مراجعة الرقم.',
  },
  {
    code: 500,
    text: 'Internal Server Error',
    family: '5xx (عطل في الخادم)',
    badge: '🔴 500 Server Error',
    tone: 'danger',
    desc: 'حدث خطأ تقني داخلي مفاجئ في جانب الخادم منعه من إكمال الطلب وتنفيذه.',
    meaning: 'المشكلة هنا مش من المستخدم ولا من الرابط! المشكلة في كود السيرفر نفسه انهار، أو قاعدة البيانات مفصولة.',
    json: {
      status: 500,
      ok: false,
      error: 'DatabaseConnectionFailed',
      message: 'حدث عطل تقني داخلي في خوادم الكلية، يرجى المحاولة لاحقاً',
    },
    uiAction: 'الواجهة تعتذر للمستخدم وتوضح أن العطل في السيرفر وتضع زراً لـ «إعادة المحاولة».',
  },
] as const;

export function StatusCodesExplorer() {
  const [selected, setSelected] = useState<number>(200);
  const current = CURRICULUM_STATUS_CODES.find(s => s.code === selected) ?? CURRICULUM_STATUS_CODES[0];

  return (
    <div className="mt-3">
      {/* Exactly the 3 curriculum codes */}
      <div className="flex flex-wrap gap-3 items-center justify-center mb-4">
        <span className="text-sm font-extrabold muted">رموز الحالة المقررة في المنهج:</span>
        {CURRICULUM_STATUS_CODES.map(s => (
          <button
            key={s.code}
            className={`btn px-4 py-1.5 font-bold text-sm ${selected === s.code ? 'btn-primary' : ''}`}
            onClick={() => setSelected(s.code)}
          >
            {s.badge}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 items-start">
        {/* Left: Deep Explanation */}
        <div className="browser">
          <div className="browser-top">
            <div className="browser-dots"><i /><i /><i /></div>
            <div className="addr">
              <bdi dir="ltr">https://univ.example/api/status/{current.code}</bdi>
            </div>
          </div>
          <div className="p-4" style={{ background: 'var(--surface)' }}>
            <div className="flex justify-between items-center mb-3">
              <span className={`pill font-mono font-black text-sm ${current.tone === 'safe' ? 'pill-safe' : current.tone === 'warn' ? 'pill-warn' : 'pill-danger'}`}>
                {current.code} {current.text}
              </span>
              <span className="pill text-xs font-bold">{current.family}</span>
            </div>

            <h4 className="font-extrabold text-base mb-2">{current.desc}</h4>
            <div className="p-3 rounded-xl border text-xs leading-relaxed mb-3" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
              <p className="font-extrabold text-blue-900 mb-1">🔍 المعنى الحقيقي للرمز:</p>
              <p className="muted">{current.meaning}</p>
            </div>

            <div className="callout c-info py-2 px-3 text-xs leading-relaxed">
              <span className="ico text-base">💻</span>
              <div>
                <b>تصرف الواجهة البرمجية (Frontend):</b> {current.uiAction}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Real JSON body */}
        <div className="backstage" style={{ minHeight: '23rem' }}>
          <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
            <span className="font-extrabold text-sm">📄 استجابة السيرفر المرافقة للرمز (JSON Response)</span>
            <span className="pill text-xs font-mono font-bold">{current.code} {current.text}</span>
          </div>

          <pre
            className="my-3 p-3 rounded-xl font-mono text-xs ltr overflow-x-auto"
            style={{ background: '#0e1320', color: '#c9d1d9', borderColor: '#30363d', minHeight: '13rem', lineHeight: 1.6 }}
          >
            {JSON.stringify(current.json, null, 2)}
          </pre>

          <div className="p-2.5 rounded-xl border text-xs leading-relaxed" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <p className="font-bold text-amber-800 mb-0.5">⚠️ سؤال الامتحان الأهم:</p>
            <p className="muted text-[11px]">
              لو ظهر <b>404</b> فالسيرفر يعمل بشكل سليم والخطأ من إدخال العميل. أما لو ظهر <b>500</b> فالخلل في كود السيرفر نفسه داخلياً.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. TextbookGlossary: All official curriculum definitions in interactive cards
   ========================================================================= */
export interface GlossaryTerm {
  id: string;
  term: string;
  en: string;
  category: 'الأساسيات' | 'بروتوكولات الأمان' | 'أساليب الطلب' | 'رموز الحالة' | 'تبادل البيانات';
  icon: string;
  definition: string;
  details: string;
  examNote: string;
}

export const TEXTBOOK_DEFINITIONS: GlossaryTerm[] = [
  {
    id: 'client',
    term: 'العميل',
    en: 'Client',
    category: 'الأساسيات',
    icon: '💻',
    definition: 'الجهاز أو البرنامج (مثل متصفح الويب أو تطبيق الهاتف) الذي يبدأ بطلب الخدمة أو المورد من الخادم ويرسل طلبات HTTP Request.',
    details: 'هو الطرف المبادر بالاتصال دائماً في معمارية الويب التقليدية، ولا يستقبل استجابة إلا بعد إرسال طلب.',
    examNote: 'في أسئلة الصح والخطأ: العميل هو الطرف الذي يبدأ دورة الاتصال دائماً، ولا يرسل الخادم بيانات دون طلب مسبق منه.',
  },
  {
    id: 'server',
    term: 'الخادم',
    en: 'Server',
    category: 'الأساسيات',
    icon: '🗄️',
    definition: 'جهاز حاسوب مركزي متصل دائماً بالشبكة، يمتلك موارد وخدمات، يستقبل طلبات العملاء ويعالجها ويرسل الرد المناسب (HTTP Response).',
    details: 'يحتوي على المنطق البرمجي الخلفي (Backend) وقواعد البيانات ومستندات الموقع.',
    examNote: 'الخادم يعمل باستمرار (24/7) ويستمع للطلبات على منافذ محددة (مثل 80 للـ HTTP و 443 للـ HTTPS).',
  },
  {
    id: 'cycle',
    term: 'دورة الطلب والاستجابة',
    en: 'Request-Response Cycle',
    category: 'الأساسيات',
    icon: '🔄',
    definition: 'آلية الاتصال الأساسية في بروتوكول الويب؛ حيث يبدأ العميل بإرسال طلب (Request)، فيقوم الخادم بمعالجة الطلب وإرجاع الرد (Response).',
    details: 'اتصال متزامن مبني على مبدأ تبادل الرسائل القياسية ولا يستمر الاتصال مفتوحاً بعد اكتمال الرد في النموذج البسيط.',
    examNote: 'ترتيب الدورة للامتحان: ١. إنشاء الطلب من العميل ← ٢. إرسال عبر الشبكة ← ٣. معالجة في الخادم ← ٤. إرجاع الاستجابة ← ٥. عرض في المتصفح.',
  },
  {
    id: 'http',
    term: 'بروتوكول HTTP',
    en: 'HyperText Transfer Protocol',
    category: 'بروتوكولات الأمان',
    icon: '🔓',
    definition: 'بروتوكول اتصال قياسي على طبقة التطبيقات يُستخدم لنقل وتداول صفحات الويب ومواردها عبر الإنترنت كنص صريح (Plaintext) غير مشفر.',
    details: 'صُمم عام 1991 للأبحاث العامة ولا يوفر أي حماية للبيانات المتداولة ضد التنصت أو التعديل.',
    examNote: 'عيبه الأساسي في الامتحان: نقل البيانات كنص واضح صريح (Plaintext)، مما يسهل اعتراضها وسرقتها ببرامج الـ Sniffer.',
  },
  {
    id: 'https',
    term: 'بروتوكول HTTPS',
    en: 'HyperText Transfer Protocol Secure',
    category: 'بروتوكولات الأمان',
    icon: '🔒',
    definition: 'النسخة الآمنة من بروتوكول HTTP، مضاف إليها طبقة تشفير TLS/SSL لتأمين نقل البيانات ومنع التنصت والتلاعب والتأكد من هوية الخادم.',
    details: 'يستخدم المنفذ الافتراضي 443 ويتطلب تثبيت شهادة أمان رقمية (SSL/TLS Certificate) على الخادم.',
    examNote: 'يحقق ثلاثة مبادئ للأمان: السرية والتشفير (Confidentiality)، وسلامة البيانات (Integrity)، والمصادقة (Authentication).',
  },
  {
    id: 'tls',
    term: 'طبقة النقل الآمن (TLS)',
    en: 'Transport Layer Security',
    category: 'بروتوكولات الأمان',
    icon: '🛡️',
    definition: 'بروتوكول تشفير قياسي يوفر السرية وسلامة البيانات والمصادقة للاتصالات عبر الشبكة بين العميل والخادم (وهو الوريث المحدث لـ SSL).',
    details: 'يعتمد على تشفير المفتاح العام والمفتاح الخاص ومصافحة أمان (TLS Handshake) لتبادل مفاتيح الجلسة.',
    examNote: 'سؤال تعليل: لماذا تُشفر البيانات بـ TLS؟ لمنع أي طرف ثالث متنصت من قراءة الرسائل أو العبث بمحتواها أثناء النقل.',
  },
  {
    id: 'methods',
    term: 'أسلوب الطلب (HTTP Method)',
    en: 'HTTP Request Method',
    category: 'أساليب الطلب',
    icon: '⚙️',
    definition: 'وسيلة لتحديد نوع العملية أو الإجراء المطلوب تنفيذه على الخادم بواسطة العميل (مثل الاسترجاع GET أو الإرسال والتخزين POST).',
    details: 'يكتب في السطر الأول من طلب الـ HTTP لتوجيه السيرفر إلى المسار البرمجي المناسب.',
    examNote: 'الأسلوبان الأساسيان في المنهج هما: GET (للقراءة والاسترجاع) و POST (للإرسال والتخزين وإنشاء سجلات جديدة).',
  },
  {
    id: 'get',
    term: 'أسلوب GET',
    en: 'GET Method',
    category: 'أساليب الطلب',
    icon: '🔍',
    definition: 'أسلوب طلب يُستخدم لجلب واسترجاع (قراءة) البيانات والموارد من الخادم دون إجراء أي تعديل عليها.',
    details: 'طلب مخصص للقراءة والاستعلام من الخادم، ولا يؤدي تنفيذه إلى أي تغيير أو حذف أو إضافة في بيانات الخادم.',
    examNote: 'في امتحانات البكالوريا: أسلوب GET يُستخدم للقراءة وجلب البيانات فقط دون تعديلها على الخادم.',
  },
  {
    id: 'post',
    term: 'أسلوب POST',
    en: 'POST Method',
    category: 'أساليب الطلب',
    icon: '📤',
    definition: 'أسلوب طلب يُستخدم لإرسال بيانات جديدة إلى الخادم لمعالجتها وتخزينها (مثل استمارات التسجيل والبيانات الحساسة).',
    details: 'مخصص لتسجيل الحسابات، حفظ السجلات الجديدة، وتمرير البيانات للخادم لتنفيذ العمليات عليها.',
    examNote: 'مقارنة هامة للامتحان: GET لجلب وقراءة واسترجاع البيانات، بينما POST لإرسال ومعالجة وتخزين بيانات جديدة.',
  },
  {
    id: 'status-codes',
    term: 'رموز حالة الخادم (Status Codes)',
    en: 'HTTP Status Codes',
    category: 'رموز الحالة',
    icon: '🚦',
    definition: 'رموز رقمية قياسية ثلاثية الخانات يُرجعها الخادم في سطر الحالة لبيان نتيجة معالجة الطلب للمتصفح والتطبيق.',
    details: 'تتكون من ٣ خانات مقسمة لفئات (2xx نجاح، 4xx خطأ عميل، 5xx عطل خادم).',
    examNote: 'الرموز المقررة حفظاً في المنهج هي: 200 OK، و 404 Not Found، و 500 Internal Server Error.',
  },
  {
    id: 'code-200',
    term: 'رمز 200 OK',
    en: '200 OK',
    category: 'رموز الحالة',
    icon: '🟢',
    definition: 'رمز النجاح التام؛ يفيد بأن الخادم استلم الطلب وعالجه بنجاح وأعاد البيانات أو الصفحة المطلوبة.',
    details: 'يرفقه السيرفر عندما يجد المورد وينفذ العملية دون أي أخطاء برمجية أو شبكية.',
    examNote: 'يعني أن دورة الطلب والرد تمت بنجاح كامل والخادم جاهز.',
  },
  {
    id: 'code-404',
    term: 'رمز 404 Not Found',
    en: '404 Not Found',
    category: 'رموز الحالة',
    icon: '🟡',
    definition: 'رمز خطأ من جانب العميل؛ يفيد بأن الخادم متصل وسليم تماماً ولكنه لم يعثر على الصفحة أو المورد المطلوب (رابط خاطئ أو محذوف).',
    details: 'الخادم ليس به أي عطل داخلي، والسبب إما خطأ إملائي في الرابط أو طلب معرّف غير مسجل بقاعدة البيانات.',
    examNote: 'سؤال امتحاني متكرر: هل رمز 404 يعني عطلاً في الخادم؟ لا، الخادم سليم ومتصل، والخطأ ناتج عن طلب العميل لمورد غير موجود.',
  },
  {
    id: 'code-500',
    term: 'رمز 500 Internal Server Error',
    en: '500 Server Error',
    category: 'رموز الحالة',
    icon: '🔴',
    definition: 'رمز عطل من جانب الخادم؛ يفيد بحدوث خلل تقني داخلي أو انهيار برمجي أو فشل بالاتصال بقاعدة البيانات لدى الخادم منعه من معالجة الطلب.',
    details: 'العميل أرسل طلباً صحيحاً ولكن السيرفر عجز عن استكماله بسبب كراش في الكود الخلفي.',
    examNote: 'الفرق الجوهري: 404 السيرفر سليم والعنوان غير موجود · 500 السيرفر نفسه معطل داخلياً.',
  },
  {
    id: 'api',
    term: 'واجهة برمجة التطبيقات (API)',
    en: 'Application Programming Interface',
    category: 'تبادل البيانات',
    icon: '🔌',
    definition: 'مجموعة من القواعد والبروتوكولات البرمجية التي تتيح للأنظمة والتطبيقات المختلفة التواصل وتبادل البيانات والخدمات فيما بينها بشكل آمن وموحد.',
    details: 'تفصل الواجهة الأمامية (Frontend) عن المنطق الخلفي وقواعد البيانات لحماية السيرفر وتوحيد البيانات.',
    examNote: 'وظيفة الـ API: توفير نقطة وصول وسيطة آمنة تمكّن المتصفح وتطبيق الموبايل من مشاركة نفس قاعدة البيانات دون المساس بأمن الخادم.',
  },
  {
    id: 'json',
    term: 'صيغة JSON',
    en: 'JavaScript Object Notation',
    category: 'تبادل البيانات',
    icon: '📦',
    definition: 'صيغة نصية قياسية خفيفة الوزن وسهلة القراءة ومستقلة عن لغات البرمجة تُستخدم لتخزين وتبادل البيانات المهيكلة بالاعتماد على أزواج المفاتيح والقيم { } والمصفوفات [ ].',
    details: 'تعتمد على كائنات برمجية { key: value } ومصفوفات [ items ] ومدعومة في كافة لغات البرمجة كبايثون وجافاسكريبت وPHP.',
    examNote: 'علل: تفوقت صيغة JSON على XML في تطبيقات الويب الحديثة؟ لخفة حجمها وسرعة نقلها وسهولة قراءتها وتحويلها لكائنات برمجية مباشرة.',
  },
];

export function TextbookGlossary() {
  const [selectedCat, setSelectedCat] = useState<string>('الكل');
  const [query, setQuery] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ['الكل', 'الأساسيات', 'بروتوكولات الأمان', 'أساليب الطلب', 'رموز الحالة', 'تبادل البيانات'];

  const filtered = TEXTBOOK_DEFINITIONS.filter(item => {
    const matchesCat = selectedCat === 'الكل' || item.category === selectedCat;
    const matchesQuery = query.trim() === '' ||
      item.term.includes(query.trim()) ||
      item.en.toLowerCase().includes(query.toLowerCase()) ||
      item.definition.includes(query.trim()) ||
      item.examNote.includes(query.trim());
    return matchesCat && matchesQuery;
  });

  const handleCopy = (term: GlossaryTerm) => {
    const text = `${term.term} (${term.en}): ${term.definition}\n[ملاحظة الامتحان: ${term.examNote}]`;
    navigator.clipboard.writeText(text);
    setCopiedId(term.id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  return (
    <div className="mt-4">
      {/* Header banner */}
      <div className="p-4 rounded-2xl mb-4 border" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08), rgba(168,85,247,0.08))', borderColor: 'var(--border)' }}>
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-3">
            <span className="text-3xl">📖</span>
            <div>
              <h3 className="font-extrabold text-lg text-indigo-900 dark:text-indigo-200">
                معجم تعريفات كتاب المدرسة المعتمد (البكالوريا · الجزء الأول)
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                جميع التعريفات الرسمية المقررة وزارياً لدرس طرق الاتصال مع دلالات الامتحانات والأسئلة الشائعة
              </p>
            </div>
          </div>
          <span className="pill text-xs font-bold py-1 px-3" style={{ background: 'var(--accent)', color: '#fff' }}>
            {filtered.length} من {TEXTBOOK_DEFINITIONS.length} مصطلحاً
          </span>
        </div>
      </div>

      {/* Filter and search bar */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
        {/* Category buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCat(cat)}
              className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all border ${
                selectedCat === cat
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-indigo-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative min-w-[220px]">
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="🔍 ابحث في التعريفات أو المصطلحات..."
            className="w-full text-xs px-3 py-2 rounded-xl border bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="absolute left-2.5 top-2 text-xs text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Definitions grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {filtered.map(item => (
          <div
            key={item.id}
            className="p-4 rounded-2xl border transition-all hover:shadow-md relative flex flex-col justify-between"
            style={{
              background: 'var(--surface)',
              borderColor: 'var(--border)',
            }}
          >
            <div>
              {/* Card top */}
              <div className="flex items-start justify-between gap-2 mb-2 pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl p-1.5 rounded-xl bg-slate-100 dark:bg-slate-800">{item.icon}</span>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white leading-tight">
                      {item.term}
                    </h4>
                    <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-bold" dir="ltr">
                      {item.en}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="pill text-[11px] py-0.5 px-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    {item.category}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item)}
                    title="نسخ نص التعريف"
                    className="p-1 rounded-lg text-slate-400 hover:text-indigo-600 transition-colors"
                  >
                    {copiedId === item.id ? '✅' : '📋'}
                  </button>
                </div>
              </div>

              {/* Official Definition Box */}
              <div className="p-3 rounded-xl mb-2.5 border" style={{ background: 'rgba(99, 102, 241, 0.05)', borderColor: 'rgba(99, 102, 241, 0.2)' }}>
                <div className="text-[11px] font-bold text-indigo-700 dark:text-indigo-300 mb-1 flex items-center gap-1">
                  <span>📖</span> نص كتاب المدرسة الوزاري المعتمد:
                </div>
                <p className="text-xs leading-relaxed text-slate-800 dark:text-slate-100 font-semibold">
                  {item.definition}
                </p>
              </div>

              {/* Additional Details */}
              <p className="text-[11px] text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                • {item.details}
              </p>
            </div>

            {/* Exam Note Box */}
            <div className="p-2.5 rounded-xl border text-[11px] leading-relaxed mt-1" style={{ background: 'rgba(245, 158, 11, 0.07)', borderColor: 'rgba(245, 158, 11, 0.3)' }}>
              <span className="font-bold text-amber-900 dark:text-amber-200 block mb-0.5">
                🎯 ملاحظة الامتحان الوزاري:
              </span>
              <span className="text-amber-950 dark:text-amber-100">
                {item.examNote}
              </span>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 p-6 rounded-2xl border" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
          <p className="text-3xl mb-2">🔍</p>
          <p className="text-sm font-bold text-slate-600">لم يتم العثور على مصطلح يطابق بحثك «{query}»</p>
          <button
            type="button"
            onClick={() => { setQuery(''); setSelectedCat('الكل'); }}
            className="mt-3 text-xs text-indigo-600 underline font-bold"
          >
            إعادة تعيين البحث
          </button>
        </div>
      )}
    </div>
  );
}


export { ApiRestaurantDemo } from './apiRestaurantDemo';
