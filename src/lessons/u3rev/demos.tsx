import { useState, useMemo } from 'react';
import { arNum } from '../../kit/blocks';

/* =========================================================================
   1. All-in-One Full-Stack Architecture Simulator (معمل دورة الويب المتكاملة)
   ========================================================================= */

type ActionKind = 'get_books' | 'post_user' | 'not_found' | 'server_error';

export function FullWebArchitectureLab() {
  const [action, setAction] = useState<ActionKind>('get_books');
  const [useHttps, setUseHttps] = useState(true);
  const [step, setStep] = useState(0); // 0 idle, 1 js event, 2 network send, 3 backend & db, 4 response & DOM
  const [inFlight, setInFlight] = useState(false);

  const scenario = useMemo(() => {
    switch (action) {
      case 'get_books':
        return {
          title: 'استعلام وبحث عن الكتب',
          method: 'GET',
          url: 'https://api.library.edu/books?genre=ai',
          secure: useHttps,
          body: null,
          status: '200 OK',
          statusCode: 200,
          statusColor: 'var(--safe)',
          backendAction: 'SELECT * FROM books WHERE genre = "ai";',
          json: JSON.stringify([
            { id: 101, title: 'الذكاء الاصطناعي الحديث', author: 'د. أحمد', year: 2026 },
            { id: 102, title: 'أساسيات الويب وبكالوريا 2', author: 'أ. مروان', year: 2026 },
          ], null, 2),
          domOutcome: 'إضافة بطاقتي كتاب جديدتين إلى شجرة الـ DOM دون وميض إعادة التحميل.',
        };
      case 'post_user':
        return {
          title: 'تسجيل اشتراك طالب جديد',
          method: 'POST',
          url: 'https://api.library.edu/users/register',
          secure: useHttps,
          body: JSON.stringify({ name: 'سارة خالد', grade: '2nd Sec', email: 'sara@example.com' }, null, 2),
          status: '201 Created',
          statusCode: 201,
          statusColor: 'var(--safe)',
          backendAction: 'INSERT INTO users (name, grade) VALUES ("سارة خالد", "2nd Sec");',
          json: JSON.stringify({ success: true, userId: 9482, message: 'تم إنشاء الحساب وتخزينه بنجاح' }, null, 2),
          domOutcome: 'تعديل عنصر التنبيه في الـ DOM لعرض شارة خضراء: «تم تفعيل الحساب».',
        };
      case 'not_found':
        return {
          title: 'طلب رابط محذوف أو خاطئ',
          method: 'GET',
          url: 'https://api.library.edu/old-exams/2010',
          secure: useHttps,
          body: null,
          status: '404 Not Found',
          statusCode: 404,
          statusColor: 'var(--danger)',
          backendAction: 'لم يتم العثور على أي ملف في المسار المطلوب.',
          json: JSON.stringify({ error: 'NotFound', message: 'المورد المطلوب غير موجود على الخادم' }, null, 2),
          domOutcome: 'عرض رسالة تحذيرية في الـ DOM: «الصفحة غير موجودة».',
        };
      case 'server_error':
        return {
          title: 'عطل مفاجئ في كود الخادم',
          method: 'POST',
          url: 'https://api.library.edu/checkout',
          secure: useHttps,
          body: JSON.stringify({ orderId: 777 }, null, 2),
          status: '500 Internal Server Error',
          statusCode: 500,
          statusColor: 'var(--danger)',
          backendAction: 'CRASH: انقطاع الاتصال بقاعدة البيانات بسبب خطأ برمجي في السيرفر!',
          json: JSON.stringify({ error: 'InternalServerError', code: 500 }, null, 2),
          domOutcome: 'عرض إشعار خطأ في الـ DOM: «نعتذر، حدث خلل فني في الخادم».',
        };
    }
  }, [action, useHttps]);

  const runSimulation = () => {
    if (inFlight) return;
    setInFlight(true);
    setStep(1);
    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1500);
    setTimeout(() => {
      setStep(4);
      setInFlight(false);
    }, 2300);
  };

  return (
    <div className="card mt-3" style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}>
      {/* Top Controls */}
      <div className="flex gap-2 justify-between items-center border-b border-border pb-3 mb-4 flex-wrap">
        <div className="flex gap-2 flex-wrap items-center">
          <span className="text-xs font-bold text-muted">اختر سيناريو التجربة:</span>
          <button
            className={`btn text-xs ${action === 'get_books' ? 'btn-primary' : ''}`}
            onClick={() => { setAction('get_books'); setStep(0); }}
          >
            🔍 استعلام GET (قراءة)
          </button>
          <button
            className={`btn text-xs ${action === 'post_user' ? 'btn-primary' : ''}`}
            onClick={() => { setAction('post_user'); setStep(0); }}
          >
            📝 إرسال POST (كتابة)
          </button>
          <button
            className={`btn text-xs ${action === 'not_found' ? 'btn-primary' : ''}`}
            onClick={() => { setAction('not_found'); setStep(0); }}
          >
            🚫 رابط غير موجود (404)
          </button>
          <button
            className={`btn text-xs ${action === 'server_error' ? 'btn-primary' : ''}`}
            onClick={() => { setAction('server_error'); setStep(0); }}
          >
            💥 عطل خادم (500)
          </button>
        </div>

        <div className="flex gap-2 items-center">
          <label className="text-xs font-bold flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              checked={useHttps}
              onChange={e => setUseHttps(e.target.checked)}
            />
            {useHttps ? '🔒 تفعيل HTTPS (مشفر)' : '🔓 استخدام HTTP (نص صريح مكشوف)'}
          </label>
          <button
            className="btn btn-primary text-xs"
            disabled={inFlight}
            onClick={runSimulation}
          >
            {inFlight ? '⏳ جاري تنفيذ الطلب…' : '▶️ إطلاق دورة الاتصال'}
          </button>
        </div>
      </div>

      {/* 3-Column Visualizer: Frontend -> Network -> Backend */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
        {/* Column 1: Frontend (Client) */}
        <div className={`p-4 rounded-xl border transition-all ${step === 1 || step === 4 ? 'ring-2 ring-blue-500 bg-blue-50/40 dark:bg-blue-950/20' : 'bg-surface-2 border-border'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm text-blue-600">🖥️ الواجهة الأمامية (Client)</span>
            <span className="text-[11px] font-mono pill">HTML • CSS • JS</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px]">① تفاعل المستخدم (JS Event)</span>
              <p className="font-mono text-foreground mt-0.5">
                {step >= 1 ? `✅ addEventListener("click") -> fetch("${scenario.url}")` : 'في انتظار تفاعل المستخدم…'}
              </p>
            </div>

            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px]">④ شجرة الـ DOM وتحديث الشاشة</span>
              <p className="mt-0.5 text-foreground leading-relaxed">
                {step >= 4 ? `🎉 ${scenario.domOutcome}` : 'في انتظار وصول استجابة السيرفر…'}
              </p>
            </div>
          </div>
        </div>

        {/* Column 2: Network & Protocol */}
        <div className={`p-4 rounded-xl border transition-all ${step === 2 ? 'ring-2 ring-purple-500 bg-purple-50/40 dark:bg-purple-950/20' : 'bg-surface-2 border-border'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm text-purple-600">📡 شبكة الإنترنت والبروتوكول</span>
            <span className={`pill text-[10px] ${useHttps ? 'pill-safe' : 'pill-warn'}`}>
              {useHttps ? 'TLS / HTTPS' : 'HTTP صريح'}
            </span>
          </div>

          <div className="space-y-2 text-xs font-mono">
            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px] font-sans">أسلوب الطلب والمسار (Request)</span>
              <div className="mt-0.5">
                <span className={`font-bold px-1.5 py-0.5 rounded text-[10px] text-white ${scenario.method === 'GET' ? 'bg-blue-600' : 'bg-emerald-600'}`}>
                  {scenario.method}
                </span>
                <span className="ltr text-foreground mr-1 text-[11px]">{scenario.url}</span>
              </div>
            </div>

            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px] font-sans">أمان البيانات أثناء السفر (Wire Sniffer)</span>
              {useHttps ? (
                <span className="text-safe text-[11px] block mt-0.5">
                  🔐 البيانات مشفرة بالكامل عبر TLS: <br />
                  <span className="text-muted text-[10px]">9f8a3c...e81b (يستحيل فكها للمتنصت)</span>
                </span>
              ) : (
                <span className="text-danger text-[11px] block mt-0.5 font-bold">
                  ⚠️ غير مشفر! أي شخص على شبكة الـ Wi-Fi يستطيع قراءة: <br />
                  <span className="text-foreground text-[10px]">{scenario.body || 'Query: genre=ai'}</span>
                </span>
              )}
            </div>

            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px] font-sans">رمز حالة الاستجابة (Status Code)</span>
              <span className="font-bold text-sm mt-0.5 block" style={{ color: scenario.statusColor }}>
                {step >= 3 ? scenario.status : '---'}
              </span>
            </div>
          </div>
        </div>

        {/* Column 3: Backend & Database */}
        <div className={`p-4 rounded-xl border transition-all ${step === 3 ? 'ring-2 ring-orange-500 bg-orange-50/40 dark:bg-orange-950/20' : 'bg-surface-2 border-border'}`}>
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-sm text-orange-600">⚙️ الواجهة الخلفية (Backend)</span>
            <span className="text-[11px] font-mono pill">Node / Python • SQL</span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px]">② منطق السيرفر وقاعدة البيانات</span>
              <p className="font-mono text-xs text-foreground mt-0.5 ltr">
                {step >= 3 ? scenario.backendAction : 'في انتظار وصول الطلب من العميل…'}
              </p>
            </div>

            <div className="p-2 bg-surface rounded border border-border">
              <span className="font-bold text-muted block text-[10px]">③ استجابة البيانات بصيغة JSON</span>
              <pre className="ltr text-[10px] font-mono text-foreground mt-0.5 overflow-x-auto max-h-24 bg-surface-2 p-1.5 rounded">
                {step >= 3 ? scenario.json : '// JSON Response Payload'}
              </pre>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Timeline Stepper */}
      <div className="mt-4 p-3 bg-surface-2 rounded-xl border border-border flex justify-between items-center text-xs font-bold text-muted flex-wrap gap-2">
        <span className={step >= 1 ? 'text-blue-600' : ''}>① نقر الزر وتشغيل JavaScript</span>
        <span>➔</span>
        <span className={step >= 2 ? 'text-purple-600' : ''}>② سفر طلب {scenario.method} عبر {useHttps ? 'HTTPS' : 'HTTP'}</span>
        <span>➔</span>
        <span className={step >= 3 ? 'text-orange-600' : ''}>③ معالجة الـ Backend وقاعدة البيانات</span>
        <span>➔</span>
        <span className={step >= 4 ? 'text-safe' : ''}>④ وصول JSON وتحديث الـ DOM</span>
      </div>
    </div>
  );
}

/* =========================================================================
   2. HTTP Status Code Trainer Game (لعبة تدريب أكواد الحالة للامتحانات)
   ========================================================================= */

type Challenge = {
  scenario: string;
  expected: number;
  why: string;
};

const CHALLENGES: Challenge[] = [
  {
    scenario: 'طالب ملأ استمارة إنشاء حساب جديد في موقع الوزارة، ونجح السيرفر في تخزين السجل بقاعدة البيانات.',
    expected: 201,
    why: 'كود 201 Created مخصص لحالات إنشاء مورد وسجل جديد بنجاح بعد طلب POST.',
  },
  {
    scenario: 'قمت بطلب صفحة نتائج الامتحانات لعام 2005 المحذوفة تماماً من السيرفر، أو كتبت الرابط خطأ.',
    expected: 404,
    why: 'كود 404 Not Found يشير إلى أن السيرفر متصل ولكن المورد المحدد غير موجود.',
  },
  {
    scenario: 'حاول زائر الدخول إلى لوحة تحكم درجات الكنترول دون أن يقوم بتسجيل الدخول كمعلم.',
    expected: 401,
    why: 'كود 401 Unauthorized يعني أن المورد محمي ويتطلب مصادقة وهوية مستخدم معتمدة.',
  },
  {
    scenario: 'حدث انقطاع مفاجئ في التيار الكهربائي عن خادم قاعدة البيانات، مما أدى لانهيار كود السيرفر.',
    expected: 500,
    why: 'كود 500 Internal Server Error يعبر عن عطل برمجي أو انهيار داخلي في الخادم.',
  },
  {
    scenario: 'قمت بالبحث عن اسمك في كشوف المقبولين، وعاد السيرفر ببياناتك كاملة وصحيحة.',
    expected: 200,
    why: 'كود 200 OK هو الرمز القياسي للنجاح العام لطلبات GET واسترجاع الموارد.',
  },
  {
    scenario: 'أرسل المتصفح طلباً يحتوي على أخطاء تنسيقية في بيانات JSON يرفضها الخادم.',
    expected: 400,
    why: 'كود 400 Bad Request يعني أن الطلب غير منسق بشكل سليم ومفهوم للخادم.',
  },
];

export function StatusCodeTrainerDemo() {
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);

  const cur = CHALLENGES[index];
  const isAnswered = picked !== null;
  const isRight = picked === cur.expected;

  const codes = [200, 201, 400, 401, 403, 404, 500];

  const handlePick = (code: number) => {
    if (isAnswered) return;
    setPicked(code);
    if (code === cur.expected) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    setPicked(null);
    setIndex(i => (i + 1) % CHALLENGES.length);
  };

  return (
    <div className="card mt-3" style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}>
      <div className="flex justify-between items-center mb-3">
        <span className="font-bold text-sm text-primary">
          🎯 تدريب أكواد الحالة (السؤال {arNum(index + 1)} من {arNum(CHALLENGES.length)})
        </span>
        <span className="pill pill-safe text-xs font-bold">
          النقاط: {arNum(score)} / {arNum(CHALLENGES.length)}
        </span>
      </div>

      {/* Scenario Box */}
      <div className="p-4 bg-surface-2 rounded-xl border border-border mb-4">
        <span className="text-xs text-muted font-bold block mb-1">الموقف الواقعي:</span>
        <p className="text-base font-bold text-foreground leading-relaxed">{cur.scenario}</p>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4">
        {codes.map(code => {
          let btnStyle = 'bg-surface hover:bg-surface-3 border-border';
          if (isAnswered) {
            if (code === cur.expected) {
              btnStyle = 'bg-safe text-white border-safe font-black scale-105 shadow';
            } else if (code === picked) {
              btnStyle = 'bg-danger text-white border-danger';
            } else {
              btnStyle = 'opacity-40 border-border';
            }
          }
          return (
            <button
              key={code}
              disabled={isAnswered}
              onClick={() => handlePick(code)}
              className={`p-3 rounded-xl border text-center font-mono font-bold text-lg transition-all ${btnStyle}`}
            >
              {code}
              <span className="block text-[10px] font-sans font-normal opacity-80">
                {code === 200 && 'OK'}
                {code === 201 && 'Created'}
                {code === 400 && 'Bad Request'}
                {code === 401 && 'Unauthorized'}
                {code === 403 && 'Forbidden'}
                {code === 404 && 'Not Found'}
                {code === 500 && 'Server Error'}
              </span>
            </button>
          );
        })}
      </div>

      {/* Feedback Panel */}
      {isAnswered && (
        <div className={`p-3 rounded-xl border mb-3 text-xs leading-relaxed ${isRight ? 'bg-safe-soft border-safe/40 text-safe' : 'bg-danger-soft border-danger/40 text-danger'}`}>
          <div className="font-bold text-sm mb-1">
            {isRight ? '✅ إجابة نموذجية وصحيحة!' : `❌ خطأ! الرمز الصحيح هو ${cur.expected}`}
          </div>
          <p className="text-foreground">{cur.why}</p>
          <div className="mt-2 text-left">
            <button className="btn btn-primary text-xs" onClick={nextQuestion}>
              الموقف التالي ➔
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   3. Front-End Trio Live Playground (معمل الثلاثي: HTML و CSS و JavaScript)
   ========================================================================= */

export function FrontEndTrioPlayground() {
  const [showHtml, setShowHtml] = useState(true);
  const [showCss, setShowCss] = useState(true);
  const [showJs, setShowJs] = useState(true);

  const [counter, setCounter] = useState(5);
  const [liked, setLiked] = useState(false);

  return (
    <div className="card mt-3" style={{ fontFamily: "'Cairo', system-ui, sans-serif" }}>
      {/* Trio Layers Toggles */}
      <div className="flex gap-2 mb-4 border-b border-border pb-3 flex-wrap">
        <button
          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
            showHtml ? 'bg-orange-600 text-white border-orange-600 shadow-sm' : 'bg-surface-2 text-muted'
          }`}
          onClick={() => setShowHtml(!showHtml)}
        >
          🧱 HTML (الهيكل والعظام): {showHtml ? 'مفعّل' : 'مخفي'}
        </button>

        <button
          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
            showCss ? 'bg-blue-600 text-white border-blue-600 shadow-sm' : 'bg-surface-2 text-muted'
          }`}
          onClick={() => setShowCss(!showCss)}
        >
          🎨 CSS (المظهر والألوان): {showCss ? 'مفعّل' : 'معطّل'}
        </button>

        <button
          className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
            showJs ? 'bg-amber-500 text-black border-amber-500 shadow-sm' : 'bg-surface-2 text-muted'
          }`}
          onClick={() => setShowJs(!showJs)}
        >
          ⚡ JavaScript (التفاعل والحركة): {showJs ? 'مفعّل' : 'معطّل'}
        </button>
      </div>

      {/* Live Preview Window */}
      <div className="p-6 rounded-2xl bg-surface-2 border border-border min-h-[220px] flex items-center justify-center">
        {!showHtml ? (
          <p className="text-muted text-sm font-bold">⚠️ تم إخفاء HTML بالكامل؛ لا توجد عناصر أو مستند لعرضه!</p>
        ) : (
          <div
            style={
              showCss
                ? {
                    background: 'var(--surface)',
                    border: '2px solid var(--primary)',
                    borderRadius: '1.25rem',
                    padding: '1.5rem',
                    boxShadow: 'var(--shadow)',
                    maxWidth: '380px',
                    width: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                  }
                : {
                    background: 'transparent',
                    border: '1px solid black',
                    padding: '10px',
                    width: '100%',
                    maxWidth: '380px',
                  }
            }
          >
            <h3 style={showCss ? { fontSize: '1.4rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '0.5rem' } : {}}>
              📚 كتاب المراجعة النهائية
            </h3>
            <p style={showCss ? { color: 'var(--muted)', fontSize: '0.85rem', marginBottom: '1rem' } : {}}>
              تطوير تطبيقات الويب الحديثة · بكالوريا
            </p>

            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', alignItems: 'center' }}>
              <button
                style={
                  showCss
                    ? {
                        background: liked ? 'var(--pink)' : 'var(--surface-2)',
                        color: liked ? 'white' : 'var(--foreground)',
                        border: '1px solid var(--border)',
                        padding: '0.4rem 1rem',
                        borderRadius: '999px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '0.85rem',
                      }
                    : {}
                }
                onClick={() => {
                  if (showJs) {
                    setLiked(!liked);
                    setCounter(c => c + (liked ? -1 : 1));
                  } else {
                    alert('⚠️ JavaScript معطّل! لا يمكن الاستجابة للضغط أو تحديث الشاشة.');
                  }
                }}
              >
                {liked ? '❤️ تم الإعجاب' : '🤍 إعجاب'} ({arNum(counter)})
              </button>
            </div>
            {!showJs && (
              <p className="text-[10px] text-danger mt-2 font-bold">
                (بدون JavaScript: الزر موجود ومصمم لكنه ميت لا يستجيب للنقر)
              </p>
            )}
          </div>
        )}
      </div>

      <div className="p-3 bg-surface rounded-xl border border-border mt-3 text-xs leading-relaxed">
        <b>💡 خلاصة التجربة:</b><br />
        • <b>HTML:</b> تضع العنوان والزر في الصفحة.<br />
        • <b>CSS:</b> تمنحه الإطار المستدير والظلال والألوان المريحة للعين.<br />
        • <b>JavaScript:</b> تلتقط نقرة الزر، تزيد العداد، وتغير القلب الأحمر وتحدث الـ DOM دون إعادة تحميل الصفحة!
      </div>
    </div>
  );
}

