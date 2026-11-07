import { useEffect, useRef, useState } from 'react';

const STUDENTS = {
  2401: { name: 'أحمد سامي', math: 88, physics: 91, prog: 95 },
  2402: { name: 'مريم خالد', math: 97, physics: 85, prog: 99 },
  2403: { name: 'يوسف عادل', math: 74, physics: 80, prog: 86 },
  2404: { name: 'سارة محمود', math: 92, physics: 89, prog: 90 },
  2405: { name: 'عمر حسن', math: 65, physics: 71, prog: 78 },
  2406: { name: 'مريم عادل', math: 81, physics: 94, prog: 87 },
} as const;

export type ApiPhase = 'idle' | 'pending' | 'processing' | 'response';
export type ResponseType = 'success' | 'not_found' | 'server_error' | 'network_error';

type StudentId = keyof typeof STUDENTS;
const KNOWN_IDS = Object.keys(STUDENTS).map(Number) as StudentId[];

export function ApiStatesDemo() {
  const [studentId, setStudentId] = useState<string>('2402');
  const [forcedScenario, setForcedScenario] = useState<ResponseType | 'custom'>('success');
  const [slowMode, setSlowMode] = useState<boolean>(false);

  // Lifecycle state
  const [phase, setPhase] = useState<ApiPhase>('idle');
  const [result, setResult] = useState<{
    type: ResponseType;
    status: number;
    statusText: string;
    data: unknown;
    latency: number;
    requestedId: string;
  } | null>(null);

  const timers = useRef<number[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const triggerRequest = (overrideType?: ResponseType, overrideId?: string) => {
    // Clear ongoing timers
    timers.current.forEach(clearTimeout);

    const idToUse = overrideId !== undefined ? overrideId : studentId.trim();
    const typeToUse = overrideType || (
      forcedScenario !== 'custom'
        ? forcedScenario
        : idToUse === '9999' || !KNOWN_IDS.includes(Number(idToUse) as StudentId)
        ? 'not_found'
        : 'success'
    );

    const totalDuration = slowMode ? 2400 : 900;
    const pendingDuration = Math.round(totalDuration * 0.45);
    const processingDuration = Math.round(totalDuration * 0.45);

    setPhase('pending');
    setResult(null);

    // Phase 1 -> Phase 2 (Processing on server)
    const t1 = window.setTimeout(() => {
      if (typeToUse === 'network_error') {
        // Network error fails before or at timeout
        setPhase('response');
        setResult({
          type: 'network_error',
          status: 0,
          statusText: 'Failed to fetch (Network Timeout)',
          data: {
            error: 'NetworkError',
            message: 'تعذر الاتصال بالسيرفر. تحقق من اتصال الإنترنت أو عنوان الـ API.',
            code: 'ECONNREFUSED',
          },
          latency: totalDuration,
          requestedId: idToUse,
        });
        return;
      }

      setPhase('processing');

      // Phase 2 -> Phase 3 (Response back to client)
      const t2 = window.setTimeout(() => {
        setPhase('response');

        if (typeToUse === 'server_error') {
          setResult({
            type: 'server_error',
            status: 500,
            statusText: 'Internal Server Error',
            data: {
              status: 500,
              error: 'DatabaseConnectionLost',
              message: 'فشل الاتصال بقاعدة بيانات الطلاب داخل السيرفر.',
              timestamp: new Date().toISOString(),
            },
            latency: totalDuration,
            requestedId: idToUse,
          });
        } else if (typeToUse === 'not_found' || !KNOWN_IDS.includes(Number(idToUse) as StudentId)) {
          setResult({
            type: 'not_found',
            status: 404,
            statusText: 'Not Found',
            data: {
              status: 404,
              error: 'StudentNotFound',
              message: `لم يتم العثور على أي طالب مسجل بالرقم (${idToUse}).`,
              requestedId: idToUse,
            },
            latency: totalDuration,
            requestedId: idToUse,
          });
        } else {
          const s = STUDENTS[Number(idToUse) as StudentId];
          const avg = Math.round((s.math + s.physics + s.prog) / 3);
          setResult({
            type: 'success',
            status: 200,
            statusText: 'OK',
            data: {
              status: 200,
              data: {
                id: Number(idToUse),
                name: s.name,
                grades: {
                  math: s.math,
                  physics: s.physics,
                  prog: s.prog,
                },
                average: `${avg}%`,
                passed: avg >= 50,
              },
            },
            latency: totalDuration,
            requestedId: idToUse,
          });
        }
      }, processingDuration);

      timers.current.push(t2);
    }, pendingDuration);

    timers.current.push(t1);
  };

  const resetAll = () => {
    timers.current.forEach(clearTimeout);
    setPhase('idle');
    setResult(null);
  };

  const isLoading = phase === 'pending' || phase === 'processing';

  return (
    <div className="mt-4">
      {/* Scenario presets bar */}
      <div className="flex flex-wrap gap-2 items-center mb-3">
        <span className="font-extrabold text-sm muted">جرّب سيناريو مباشر:</span>
        <button
          className={`btn ${result?.type === 'success' && phase === 'response' ? 'btn-primary' : ''}`}
          disabled={isLoading}
          onClick={() => {
            setStudentId('2402');
            setForcedScenario('success');
            triggerRequest('success', '2402');
          }}
        >
          🟢 طلب ناجح (200 OK)
        </button>
        <button
          className={`btn ${result?.type === 'not_found' && phase === 'response' ? 'btn-primary' : ''}`}
          disabled={isLoading}
          onClick={() => {
            setStudentId('9999');
            setForcedScenario('not_found');
            triggerRequest('not_found', '9999');
          }}
        >
          🟡 غير موجود (404 Not Found)
        </button>
        <button
          className={`btn ${result?.type === 'server_error' && phase === 'response' ? 'btn-primary' : ''}`}
          disabled={isLoading}
          onClick={() => {
            setStudentId('2402');
            setForcedScenario('server_error');
            triggerRequest('server_error', '2402');
          }}
        >
          🔴 عطل بالسيرفر (500 Error)
        </button>
        <button
          className={`btn ${result?.type === 'network_error' && phase === 'response' ? 'btn-primary' : ''}`}
          disabled={isLoading}
          onClick={() => {
            setStudentId('2402');
            setForcedScenario('network_error');
            triggerRequest('network_error', '2402');
          }}
        >
          📡 انقطاع شبكة (Network Timeout)
        </button>
        <div className="flex-1" />
        <label className="flex items-center gap-1.5 cursor-pointer text-sm font-bold select-none">
          <input
            type="checkbox"
            checked={slowMode}
            onChange={e => setSlowMode(e.target.checked)}
            disabled={isLoading}
          />
          <span>⏱️ شبكة بطيئة (Slow 3G)</span>
        </label>
        <button className="btn text-sm" onClick={resetAll} title="إعادة ضبط المحاكاة">
          ↺ ريست
        </button>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-2 gap-4 items-start">
        {/* Right column: The Frontend / Browser UI */}
        <div>
          <div className="browser">
            <div className="browser-top">
              <div className="browser-dots"><i /><i /><i /></div>
              <div className="addr">
                <bdi dir="ltr">https://univ.example/results</bdi>
              </div>
            </div>

            <div className="site-head">
              <span>🎓 بوابة النتائج · استعلام بالـ API</span>
              <span className="text-xs">
                الحالة في الواجهة:{' '}
                <b className={isLoading ? 'hl-warn' : phase === 'response' ? (result?.type === 'success' ? 'hl-safe' : 'hl-danger') : 'muted'}>
                  {phase === 'idle' && 'خامل (Idle)'}
                  {isLoading && 'جاري التحميل (Loading…)'}
                  {phase === 'response' && (result?.type === 'success' ? 'نجاح (Success)' : 'خطأ (Error)')}
                </b>
              </span>
            </div>

            {/* Browser form */}
            <form
              className="flex gap-2 p-3 border-b border-dashed"
              style={{ borderColor: 'var(--border)' }}
              onSubmit={e => {
                e.preventDefault();
                setForcedScenario('custom');
                triggerRequest();
              }}
            >
              <input
                className="field flex-1"
                placeholder="رقم الطالب (مثل 2402 أو 9999)"
                value={studentId}
                onChange={e => setStudentId(e.target.value)}
                disabled={isLoading}
                aria-label="رقم الطالب"
              />
              <button
                type="submit"
                className={`btn btn-primary ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="inline-flex items-center gap-1">
                    <span className="animate-spin inline-block">⏳</span> جاري الطلب…
                  </span>
                ) : (
                  '⚡ إرسال للـ API'
                )}
              </button>
            </form>

            {/* Dynamic UI content area according to API states */}
            <div className="portal-page" style={{ minHeight: '19.5rem' }}>
              {/* STATE 1: IDLE */}
              {phase === 'idle' && (
                <div className="text-center py-8">
                  <div className="text-4xl mb-2">📡</div>
                  <h4 className="font-extrabold text-lg mb-1">الواجهة جاهزة في انتظار طلبك</h4>
                  <p className="muted text-sm max-w-sm mx-auto">
                    الصفحة لم ترسل أي طلب بعد (حالة <b className="hl">Idle</b>). اضغط على «إرسال للـ API» أو اختر سيناريو من الأعلى لمتابعة دورة حياة الطلب.
                  </p>
                </div>
              )}

              {/* STATE 2: LOADING / PENDING */}
              {isLoading && (
                <div className="py-2 fade-up">
                  <div className="flex items-center justify-between mb-3 text-sm font-bold">
                    <span className="hl-warn flex items-center gap-1.5">
                      <span className="animate-pulse">⏳</span> جاري جلب البيانات من السيرفر…
                    </span>
                    <span className="pill pill-warn text-xs">زر الإرسال مُعطّل</span>
                  </div>

                  {/* Skeleton placeholder cards */}
                  <div className="site-box" style={{ background: 'var(--surface-2)' }}>
                    <div className="api-skeleton-bar" style={{ width: '45%', height: '1.2rem', marginBottom: '.8rem' }} />
                    <div className="api-skeleton-bar" style={{ width: '85%', height: '.9rem', marginBottom: '.5rem' }} />
                    <div className="api-skeleton-bar" style={{ width: '70%', height: '.9rem', marginBottom: '.5rem' }} />
                    <div className="api-skeleton-bar" style={{ width: '60%', height: '.9rem' }} />
                  </div>
                  <p className="muted text-xs mt-3 text-center">
                    💡 <b>ملاحظة للمبرمج:</b> الواجهة لم تتجمد! المستخدم يستطيع التصفح، والـ Skeleton يعطيه شعوراً بالسرعة.
                  </p>
                </div>
              )}

              {/* STATE 3: RESPONSE ARRIVED */}
              {phase === 'response' && result && (
                <div className="fade-up">
                  {/* SUCCESS (200 OK) */}
                  {result.type === 'success' && (
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="portal-title mb-0">
                          نتيجة الطالب: {((result.data as { data: { name: string } }).data.name)}
                        </h4>
                        <span className="pill pill-safe">✅ 200 OK</span>
                      </div>

                      <div className="portal-row">
                        <span>رقم الجلوس</span>
                        <b>{result.requestedId}</b>
                      </div>
                      <div className="portal-row">
                        <span>رياضيات</span>
                        <b>{((result.data as { data: { grades: { math: number } } }).data.grades.math)} / 100</b>
                      </div>
                      <div className="portal-row">
                        <span>فيزياء</span>
                        <b>{((result.data as { data: { grades: { physics: number } } }).data.grades.physics)} / 100</b>
                      </div>
                      <div className="portal-row">
                        <span>برمجة</span>
                        <b>{((result.data as { data: { grades: { prog: number } } }).data.grades.prog)} / 100</b>
                      </div>
                      <div className="portal-row total">
                        <span>النسبة العامة</span>
                        <b className="hl-safe">{((result.data as { data: { average: string } }).data.average)} (ناجح)</b>
                      </div>

                      <div className="callout c-safe mt-3 py-1.5 px-3 text-xs">
                        <span className="ico text-base">⚡</span>
                        <div>
                          <b>تحديث موضعي:</b> JavaScript استلمت JSON وحدّثت هذا المربع فقط، دون وميض أو رفرش للصفحة!
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NOT FOUND (404) */}
                  {result.type === 'not_found' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="portal-title hl-warn mb-0">⚠️ الطالب غير مسجل</h4>
                        <span className="pill pill-warn">404 Not Found</span>
                      </div>

                      <div className="site-box" style={{ border: '1px solid var(--warn)' }}>
                        <p className="font-bold text-sm mb-1">
                          لم يتم العثور على أي طالب برقم الجلوس: <b className="hl-danger">{result.requestedId}</b>
                        </p>
                        <p className="muted text-xs">
                          تأكد من كتابة الرقم بشكل صحيح (أرقام صحيحة مثل 2401، 2402، 2404).
                        </p>
                      </div>

                      <div className="callout c-warn mt-3 py-1.5 px-3 text-xs">
                        <span className="ico text-base">💡</span>
                        <div>
                          <b>تعامل ذكي:</b> السيرفر رد بكود 404، والـ Frontend أظهر رسالة مساعدة واضحة بدلاً من ترك الشاشة بيضاء!
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SERVER ERROR (500) */}
                  {result.type === 'server_error' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="portal-title hl-danger mb-0">🚨 عطل مؤقت في السيرفر</h4>
                        <span className="pill" style={{ background: 'var(--danger-soft)', color: 'var(--danger)' }}>
                          500 Server Error
                        </span>
                      </div>

                      <div className="site-box" style={{ border: '1px solid var(--danger)' }}>
                        <p className="font-bold text-sm mb-1 hl-danger">
                          عفواً، خوادم الكلية تواجه مشكلة داخلية حالياً.
                        </p>
                        <p className="muted text-xs">
                          قاعدة البيانات لا تستجيب للـ Backend. الخطأ ليس من جانبك.
                        </p>
                        <button
                          className="btn btn-primary mt-2 text-xs py-1 px-3"
                          onClick={() => triggerRequest('server_error')}
                        >
                          🔄 إعادة المحاولة (Retry)
                        </button>
                      </div>

                      <div className="callout c-danger mt-3 py-1.5 px-3 text-xs">
                        <span className="ico text-base">⚠️</span>
                        <div>
                          <b>أخطاء 5xx:</b> الخطأ في السيرفر ورا الكواليس. الواجهة تعرض اعتذاراً وزر إعادة محاولة.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* NETWORK ERROR */}
                  {result.type === 'network_error' && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="portal-title hl-pink mb-0">📡 انقطاع في الاتصال بالشبكة</h4>
                        <span className="pill" style={{ background: 'var(--pink-soft)', color: 'var(--pink)' }}>
                          Network Error
                        </span>
                      </div>

                      <div className="site-box" style={{ border: '1px solid var(--pink)' }}>
                        <p className="font-bold text-sm mb-1">
                          تعذر إرسال الطلب إلى السيرفر تماماً.
                        </p>
                        <p className="muted text-xs">
                          الإنترنت مقطوع، أو عنوان السيرفر لا يستجيب في المهلة المحددة (Timeout).
                        </p>
                        <button
                          className="btn btn-primary mt-2 text-xs py-1 px-3"
                          onClick={() => triggerRequest('network_error')}
                        >
                          🔄 حاول مرة أخرى
                        </button>
                      </div>

                      <div className="callout c-info mt-3 py-1.5 px-3 text-xs">
                        <span className="ico text-base">🧠</span>
                        <div>
                          <b>في كود JavaScript:</b> هذا الخطأ يلتقطه بلوك <code className="code-inline">catch(err)</code> لأن السيرفر لم يرجع أي كود HTTP أصلاً!
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Left column: Behind the scenes & Network inspector */}
        <div className="backstage" style={{ minHeight: '27.5rem' }}>
          <div className="flex items-center justify-between pb-2 border-b border-dashed" style={{ borderColor: 'var(--border)' }}>
            <span className="font-extrabold text-sm">⚙️ مراقب الشبكة وورا الكواليس (Network Inspector)</span>
            {result && (
              <span className="text-xs font-mono muted">
                زمن الاستجابة: <b className="hl">{result.latency}ms</b>
              </span>
            )}
          </div>

          {/* Lifecycle state machine pipeline */}
          <div className="my-3 p-2 rounded-xl" style={{ background: 'var(--surface-2)' }}>
            <p className="text-xs font-extrabold muted mb-2">🚦 دورة حياة طلب الـ API (State Machine):</p>
            <div className="grid grid-cols-4 gap-1.5 text-center text-xs font-extrabold">
              <div
                className={`p-1.5 rounded-lg border transition-all ${
                  phase === 'idle'
                    ? 'border-blue-500 bg-blue-100 text-blue-900 shadow-sm'
                    : 'border-transparent text-gray-400 opacity-60'
                }`}
                style={phase === 'idle' ? { background: 'var(--primary-soft)', borderColor: 'var(--primary)', color: 'var(--primary)' } : undefined}
              >
                ① الخامل<br /><span className="text-[10px] font-mono">IDLE</span>
              </div>
              <div
                className={`p-1.5 rounded-lg border transition-all ${
                  phase === 'pending'
                    ? 'border-amber-500 bg-amber-100 text-amber-900 animate-pulse shadow-sm'
                    : 'border-transparent text-gray-400 opacity-60'
                }`}
                style={phase === 'pending' ? { background: 'var(--warn-soft)', borderColor: 'var(--warn)', color: 'var(--warn)' } : undefined}
              >
                ② في الشبكة<br /><span className="text-[10px] font-mono">PENDING</span>
              </div>
              <div
                className={`p-1.5 rounded-lg border transition-all ${
                  phase === 'processing'
                    ? 'border-purple-500 bg-purple-100 text-purple-900 animate-pulse shadow-sm'
                    : 'border-transparent text-gray-400 opacity-60'
                }`}
                style={phase === 'processing' ? { background: 'var(--pink-soft)', borderColor: 'var(--pink)', color: 'var(--pink)' } : undefined}
              >
                ③ معالجة السيرفر<br /><span className="text-[10px] font-mono">PROCESSING</span>
              </div>
              <div
                className={`p-1.5 rounded-lg border transition-all ${
                  phase === 'response'
                    ? (result?.type === 'success'
                        ? 'border-emerald-500 bg-emerald-100 text-emerald-900 shadow-sm'
                        : 'border-rose-500 bg-rose-100 text-rose-900 shadow-sm')
                    : 'border-transparent text-gray-400 opacity-60'
                }`}
                style={
                  phase === 'response'
                    ? result?.type === 'success'
                      ? { background: 'var(--safe-soft)', borderColor: 'var(--safe)', color: 'var(--safe)' }
                      : { background: 'var(--danger-soft)', borderColor: 'var(--danger)', color: 'var(--danger)' }
                    : undefined
                }
              >
                ④ وصول الرد<br /><span className="text-[10px] font-mono">{result ? (result.status ? `${result.status}` : 'ERR') : 'RESPONSE'}</span>
              </div>
            </div>
          </div>

          {/* Request details */}
          <div className="mb-2 text-xs font-mono">
            <span className="muted font-bold">الطلب (Request): </span>
            <span className="pill pill-primary text-[11px] py-0 px-1.5 font-bold">GET</span>{' '}
            <span className="code-inline">/api/v1/students?id={studentId || '2402'}</span>
          </div>

          {/* Response HTTP Status */}
          <div className="mb-2 text-xs font-mono flex items-center gap-2">
            <span className="muted font-bold">كود الرد (Status): </span>
            {phase === 'idle' && <span className="muted">— في الانتظار —</span>}
            {isLoading && <span className="hl-warn animate-pulse">⏳ في انتظار استجابة السيرفر…</span>}
            {phase === 'response' && result && (
              <span
                className={`pill font-bold ${
                  result.status === 200
                    ? 'pill-safe'
                    : result.status === 404
                    ? 'pill-warn'
                    : 'pill-danger'
                }`}
                style={result.status === 0 ? { background: 'var(--pink-soft)', color: 'var(--pink)' } : undefined}
              >
                {result.status > 0 ? `${result.status} ${result.statusText}` : result.statusText}
              </span>
            )}
          </div>

          {/* JSON Payload Viewer */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-extrabold muted">حزمة البيانات المستلمة (JSON Body):</span>
              <span className="text-[10px] font-mono muted">application/json</span>
            </div>
            <pre
              className="p-2.5 rounded-lg font-mono text-xs overflow-x-auto ltr"
              style={{
                background: 'var(--surface-2)',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                maxHeight: '8.5rem',
                lineHeight: 1.5,
              }}
            >
              {phase === 'idle' && '// لم يتم إرسال طلب بعد...'}
              {isLoading && '// ⏳ جاري نقل حزم البيانات عبر بروتوكول HTTP...'}
              {phase === 'response' && result && JSON.stringify(result.data, null, 2)}
            </pre>
          </div>

          {/* Pedagogical takeaway card */}
          <div className="mt-3 p-2.5 rounded-xl border text-xs leading-relaxed" style={{ background: 'var(--surface)', borderColor: 'var(--border)' }}>
            <div className="mb-2 p-2 rounded-lg border flex items-center justify-between" style={{ background: 'rgba(59, 130, 246, 0.08)', borderColor: 'rgba(59, 130, 246, 0.3)' }}>
              <div>
                <span className="font-extrabold text-sky-400 block mb-0.5">📖 تعريف واجهة برمجة التطبيقات API (كتاب المدرسة):</span>
                <span className="font-bold text-slate-200">«مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.»</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">API</span>
            </div>
            <p className="font-extrabold mb-1 flex items-center gap-1">
              <span>💡</span> <b>حالات الطلب التفاعلي (Lifecycle States):</b>
            </p>
            {phase === 'idle' && (
              <p className="muted">
                في أي تطبيق ويب، تبدأ الشاشة في حالة <b>Idle</b> دون استهلاك موارد أو شبكة.
              </p>
            )}
            {isLoading && (
              <p className="muted">
                المبرمج المحترف <b>يُعطّل الزرار</b> ويُظهر مؤشر انتظار (Skeleton أو Spinner) حتى يعرف المستخدم أن طلبه يُعالج ولا يضغط مراراً.
              </p>
            )}
            {phase === 'response' && result?.type === 'success' && (
              <p className="muted">
                وصل كود <b className="hl-safe">200 OK</b> مصحوباً ببيانات JSON فقط (بدون HTML كامل). كود JavaScript فكك الـ JSON وبنى العناصر في الصفحة محلياً (CSR).
              </p>
            )}
            {phase === 'response' && result?.type === 'not_found' && (
              <p className="muted">
                كود <b className="hl-warn">404 Not Found</b>: السيرفر يعمل سليم، لكن السجل المطلوب غير موجود. المبرمج يفحص <code className="code-inline">response.ok</code> ويُخبر المستخدم بلباقة.
              </p>
            )}
            {phase === 'response' && result?.type === 'server_error' && (
              <p className="muted">
                كود <b className="hl-danger">500 Server Error</b>: عطل مفاجئ في كود السيرفر أو قاعدة البيانات. التطبيق يعتذر للمستخدم ويوفر له زر إعادة المحاولة.
              </p>
            )}
            {phase === 'response' && result?.type === 'network_error' && (
              <p className="muted">
                انقطاع الشبكة يُطلق خطأ يُلتقط في <code className="code-inline">catch(error)</code>. يجب تنبيه المستخدم بأن اتصاله بالإنترنت مفصول.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
