import { useState } from 'react';

/* =========================================================================
   1. UxHierarchyLabDemo: محاكي التسلسل الهرمي البصري والتباين والوصول
   ========================================================================= */
export function UxHierarchyLabDemo() {
  const [contrast, setContrast] = useState<'high' | 'low'>('high');
  const [spacing, setSpacing] = useState<'comfortable' | 'crowded'>('comfortable');
  const [hierarchy, setHierarchy] = useState<'structured' | 'flat'>('structured');

  const getScore = () => {
    let score = 100;
    if (contrast === 'low') score -= 40;
    if (spacing === 'crowded') score -= 30;
    if (hierarchy === 'flat') score -= 25;
    return score;
  };

  const score = getScore();

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Control Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-300">تحكم بمبادئ التصميم:</span>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${contrast === 'high' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setContrast(c => c === 'high' ? 'low' : 'high')}
          >
            🎨 التباين اللوني: {contrast === 'high' ? 'عالي ومريح (WCAG)' : 'ضعيف ومجهد'}
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${spacing === 'comfortable' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setSpacing(s => s === 'comfortable' ? 'crowded' : 'comfortable')}
          >
            📐 المساحات البيضاء: {spacing === 'comfortable' ? 'مريحة للتنفس' : 'مكدسة ومزدحمة'}
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${hierarchy === 'structured' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setHierarchy(h => h === 'structured' ? 'flat' : 'structured')}
          >
            📊 التسلسل البصري: {hierarchy === 'structured' ? 'هرمي وواضح' : 'مسطح ومربك'}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-400">معدل سهولة القراءة (a11y):</span>
          <span className={`pill font-mono font-extrabold text-xs py-0.5 px-2.5 ${score >= 80 ? 'pill-safe bg-emerald-950 text-emerald-300 border-emerald-600' : score >= 50 ? 'bg-amber-950 text-amber-300 border-amber-600' : 'pill-danger bg-rose-950 text-rose-300 border-rose-600'}`}>
            {score}/100
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Live Article Mockup */}
        <div className="p-4 rounded-xl border flex flex-col justify-between min-h-[300px]" style={{ background: '#0a1020', borderColor: '#1e2d48' }}>
          <div>
            <div className="text-[11px] text-slate-400 mb-2 border-b pb-1 flex justify-between">
              <span>🖥️ كيف يرى المستخدم المقال في الصفحة:</span>
              <span className="font-mono text-sky-400">Live Preview</span>
            </div>

            <div
              className={`rounded-xl border transition-all ${spacing === 'comfortable' ? 'p-5 space-y-4' : 'p-2 space-y-1'}`}
              style={{
                background: '#ffffff',
                borderColor: '#cbd5e1',
                color: contrast === 'high' ? '#0f172a' : '#94a3b8',
              }}
            >
              {/* Category tag */}
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full inline-block"
                style={{
                  background: contrast === 'high' ? '#e0f2fe' : '#f1f5f9',
                  color: contrast === 'high' ? '#0284c7' : '#cbd5e1',
                }}
              >
                علوم الحاسوب · بكالوريا 2027
              </span>

              {/* Title */}
              <h3
                className="font-extrabold transition-all text-right"
                style={{
                  fontSize: hierarchy === 'structured' ? '20px' : '13px',
                  fontWeight: hierarchy === 'structured' ? 800 : 400,
                  color: contrast === 'high' ? '#0f172a' : '#94a3b8',
                }}
              >
                مبادئ تصميم تجربة المستخدم وتأثيرها على نجاح المواقع
              </h3>

              {/* Subtitle */}
              <h4
                className="font-bold text-right"
                style={{
                  fontSize: hierarchy === 'structured' ? '14px' : '13px',
                  color: contrast === 'high' ? '#334155' : '#cbd5e1',
                }}
              >
                كيف تضمن أن يجد الزائر مبتغاه في أقل من ثلاث ثوانٍ؟
              </h4>

              {/* Paragraph */}
              <p
                className="text-right leading-relaxed"
                style={{
                  fontSize: '12px',
                  lineHeight: spacing === 'comfortable' ? '1.7' : '1.2',
                  color: contrast === 'high' ? '#475569' : '#cbd5e1',
                }}
              >
                التصميم الناجح لا يقتصر على اختيار ألوان جذابة، بل يقوم على هندسة معلومات واضحة وتوفير مساحات بيضاء تريح العين وتبرز أهم أزرار الصفحة دون تشتيت.
              </p>

              {/* CTA Button */}
              <div className="pt-2 text-right">
                <button
                  className="font-bold rounded-lg text-xs transition-all shadow-md"
                  style={{
                    padding: spacing === 'comfortable' ? '8px 16px' : '4px 8px',
                    background: contrast === 'high' ? '#2563eb' : '#e2e8f0',
                    color: contrast === 'high' ? '#ffffff' : '#94a3b8',
                  }}
                >
                  اقرأ الدليل التفاعلي كاملاً ←
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Real-time UX Feedback Panel */}
        <div className="p-4 rounded-xl border bg-slate-900/70 border-slate-800 space-y-3 text-xs">
          <div className="text-xs font-bold text-amber-400 border-b pb-1.5 flex justify-between">
            <span>🔍 تقرير فحص تجربة المستخدم وقابلية الوصول:</span>
            <span className="font-mono text-slate-400">Audit Status</span>
          </div>

          <div className="space-y-2">
            <div className={`p-2.5 rounded-lg border text-right ${contrast === 'high' ? 'bg-emerald-950/30 border-emerald-800 text-emerald-300' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <span className="font-bold block mb-0.5">
                {contrast === 'high' ? '✓ التباين اللوني مطابق لمعايير WCAG AA' : '⚠️ تباين لوني ضعيف وغير مقروء'}
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {contrast === 'high'
                  ? 'النصوص واضحة ومتباينة بنسبة تزيد عن 7:1، مما يضمن قراءتها بسهولة في ضوء النهار وعلى جميع الشاشات.'
                  : 'النص باهت والتباين يقل عن 2:1، مما يسبب إجهاداً بصرياً شديداً ويمنع ضعاف البصر وكبار السن من القراءة.'}
              </p>
            </div>

            <div className={`p-2.5 rounded-lg border text-right ${spacing === 'comfortable' ? 'bg-emerald-950/30 border-emerald-800 text-emerald-300' : 'bg-amber-950/30 border-amber-800 text-amber-300'}`}>
              <span className="font-bold block mb-0.5">
                {spacing === 'comfortable' ? '✓ مساحات بيضاء كافية (White Space)' : '⚠️ الصفحة مكدسة ومزدحمة'}
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {spacing === 'comfortable'
                  ? 'المسافات بين الفقرات والأزرار مريحة، مما يسمح للعين بالتنفس والتركيز على الرسالة الرئيسية.'
                  : 'العناصر متلاصقة بدون هوامش مريحة، مما يصنع شعوراً بالفوضى والتشتت للمستخدم.'}
              </p>
            </div>

            <div className={`p-2.5 rounded-lg border text-right ${hierarchy === 'structured' ? 'bg-emerald-950/30 border-emerald-800 text-emerald-300' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <span className="font-bold block mb-0.5">
                {hierarchy === 'structured' ? '✓ تسلسل هرمي بصري واضح (Visual Hierarchy)' : '⚠️ غياب التسلسل البصري (Flat Content)'}
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {hierarchy === 'structured'
                  ? 'العنوان الرئيسي كبير وبارز يليه الفرعي، فيعرف الزائر موضوع الصفحة في لمحة بصرية خاطفة.'
                  : 'العناوين والنصوص بنفس الحجم والوزن، فلا يعرف المستخدم أين ينظر وما هو الأهم.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. NavigationFlowDemo: محاكي أنظمة التنقل ومسار الـ Breadcrumbs
   ========================================================================= */
export function NavigationFlowDemo() {
  const [currentSection, setCurrentSection] = useState<'home' | 'engineering' | 'ai' | 'register'>('ai');

  const breadcrumbSteps = {
    home: [{ id: 'home', label: 'الرئيسية' }],
    engineering: [{ id: 'home', label: 'الرئيسية' }, { id: 'engineering', label: 'كليات العلوم والتقنية' }],
    ai: [{ id: 'home', label: 'الرئيسية' }, { id: 'engineering', label: 'كليات العلوم والتقنية' }, { id: 'ai', label: 'قسم الذكاء الاصطناعي' }],
    register: [{ id: 'home', label: 'الرئيسية' }, { id: 'engineering', label: 'كليات العلوم والتقنية' }, { id: 'ai', label: 'قسم الذكاء الاصطناعي' }, { id: 'register', label: 'استمارة التسجيل الجامعي' }],
  };

  const steps = breadcrumbSteps[currentSection];

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      {/* Mock University Portal Browser */}
      <div className="browser rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
        {/* Top Navbar */}
        <div className="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-sky-400 text-sm">🏛️ بوابة جامعة البكالوريا</span>
            <div className="hidden sm:flex items-center gap-2 text-slate-300">
              <button onClick={() => setCurrentSection('home')} className={`hover:text-white px-2 py-0.5 rounded ${currentSection === 'home' ? 'text-sky-400 font-bold' : ''}`}>الرئيسية</button>
              <button onClick={() => setCurrentSection('engineering')} className={`hover:text-white px-2 py-0.5 rounded ${currentSection === 'engineering' ? 'text-sky-400 font-bold' : ''}`}>الكليات</button>
              <button onClick={() => setCurrentSection('ai')} className={`hover:text-white px-2 py-0.5 rounded ${currentSection === 'ai' ? 'text-sky-400 font-bold' : ''}`}>الأقسام العلمية</button>
            </div>
          </div>
          <button
            onClick={() => setCurrentSection('register')}
            className="btn btn-primary text-xs py-1 px-3 bg-emerald-600 text-white font-bold rounded-lg shadow-md"
          >
            🎯 زر الـ CTA: سجّل الآن
          </button>
        </div>

        {/* Breadcrumb Path Banner */}
        <div className="px-4 py-2 bg-slate-900/60 border-b border-slate-800 text-[11px] flex items-center gap-1.5 flex-wrap">
          <span className="font-bold text-slate-400">مسار التنقل (Breadcrumbs):</span>
          {steps.map((s, idx) => (
            <span key={s.id} className="inline-flex items-center gap-1.5">
              {idx > 0 && <span className="text-slate-600">&gt;</span>}
              <button
                onClick={() => setCurrentSection(s.id as any)}
                className={`hover:underline font-bold ${idx === steps.length - 1 ? 'text-sky-400 cursor-default' : 'text-slate-400'}`}
              >
                {s.label}
              </button>
            </span>
          ))}
        </div>

        {/* Section Body */}
        <div className="p-5 text-right space-y-3">
          {currentSection === 'home' && (
            <div>
              <h3 className="text-base font-extrabold text-white mb-2">أهلاً بكم في بوابة الجامعة الإلكترونية</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                هيكل معلومات منظم يتيح لك الوصول للخدمات الطلابية، التقديم، ومعرفة شروط القبول بنقرة واحدة.
              </p>
              <button onClick={() => setCurrentSection('engineering')} className="btn text-xs py-1.5 px-4 bg-sky-600 text-white font-bold rounded-xl">
                استعرض الكليات المتاحة ←
              </button>
            </div>
          )}

          {currentSection === 'engineering' && (
            <div>
              <h3 className="text-base font-extrabold text-white mb-2">كليات العلوم والتقنية</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                تضم الكلية تخصصات هندسة البرمجيات، الذكاء الاصطناعي، وشبكات الحوسبة السحابية.
              </p>
              <button onClick={() => setCurrentSection('ai')} className="btn text-xs py-1.5 px-4 bg-sky-600 text-white font-bold rounded-xl">
                الدخول لقسم الذكاء الاصطناعي ←
              </button>
            </div>
          )}

          {currentSection === 'ai' && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-base font-extrabold text-white">قسم الذكاء الاصطناعي وعلوم البيانات</h3>
                <span className="pill text-[10px] font-bold bg-sky-950 text-sky-300 border-sky-800">برنامج بكالوريا 2027</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                برنامج أكاديمي متطور يغطي تعلم الآلة، الرؤية الحاسوبية، والواجهات البرمجية وتطبيقات الويب.
              </p>
              <div className="p-3 rounded-xl border border-emerald-800 bg-emerald-950/20 flex items-center justify-between">
                <div>
                  <span className="font-bold text-xs text-emerald-300 block">باب التسجيل مفتوح للفصل القادم</span>
                  <span className="text-[11px] text-slate-400">آخر موعد لتقديم استمارة الالتحاق هو نهاية الأسبوع.</span>
                </div>
                <button onClick={() => setCurrentSection('register')} className="btn text-xs py-1.5 px-4 bg-emerald-600 text-white font-bold rounded-xl shadow-md">
                  الذهاب لاستمارة التسجيل ←
                </button>
              </div>
            </div>
          )}

          {currentSection === 'register' && (
            <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 max-w-md mx-auto space-y-3">
              <h4 className="font-extrabold text-sm text-sky-400">📝 استمارة الالتحاق السريع (Sequential Flow)</h4>
              <p className="text-[11px] text-slate-400">
                لاحظ كيف أن مسار الـ Breadcrumbs بالأعلى يتيح لك العودة لأي خطوة سابقة بنقرة زر واحدة دون فقدان اتجاهك!
              </p>
              <div className="space-y-2">
                <input type="text" placeholder="اسم الطالب الكامل" className="field w-full text-xs" />
                <input type="text" placeholder="رقم الجلوس في البكالوريا" className="field w-full text-xs font-mono" />
                <button onClick={() => alert('تم إرسال الطلب بنجاح!')} className="btn btn-primary w-full text-xs py-2 bg-emerald-600 text-white font-bold rounded-xl">
                  تأكيد وإرسال الاستمارة
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. TextbookGlossaryU4L2: معجم مصطلحات كتاب الوزارة المعتمدة
   ========================================================================= */
export function TextbookGlossaryU4L2() {
  const [filter, setFilter] = useState('');
  const terms = [
    {
      term: 'تصميم المعلومات (Information Architecture - IA)',
      def: 'التنظيم الهيكلي والتصنيفي لمحتوى وبيانات موقع الويب بطريقة منطقية تسهل على المستخدم العثور على المعلومات وفهم مسارات الموقع.',
      tag: 'هندسة محتوى',
    },
    {
      term: 'تجربة المستخدم (User Experience - UX)',
      def: 'إجمالي المشاعر والانطباعات وسهولة الاستخدام والكفاءة التي يشعر بها المستخدم أثناء تفاعله مع موقع الويب لإنجاز مهامه.',
      tag: 'UX',
    },
    {
      term: 'واجهة المستخدم (User Interface - UI)',
      def: 'العناصر البصرية والرسومية التي يراها المستخدم على الشاشة ويتفاعل معها مباشرة، كالأزرار، الألوان، الخطوط، والتخطيط.',
      tag: 'UI',
    },
    {
      term: 'التسلسل الهرمي البصري (Visual Hierarchy)',
      def: 'ترتيب وتنظيم العناصر على الشاشة باستخدام التباين في الأحجام والأوزان والألوان لتوجيه عين القارئ تلقائياً نحو الأهم فالمهم.',
      tag: 'تصميم بصري',
    },
    {
      term: 'مسار التنقل المتسلسل (Breadcrumbs)',
      def: 'عنصر تنقل يعرض مسار الصفحات الهرمي الذي سلكه المستخدم وصولاً لصفحته الحالية، ويتيح الرجوع لأي مستوى سابق بنقرة واحدة.',
      tag: 'تنقل',
    },
    {
      term: 'زر الدعوة للإجراء (Call to Action - CTA)',
      def: 'عنصر تفاعلي بارز ومحفز بصرياً يدعو المستخدم لاتخاذ الخطوة والقرار الرئيسي المستهدف في الصفحة (مثل الشراء أو التسجيل).',
      tag: 'تفاعل',
    },
    {
      term: 'المساحات البيضاء السلبية (Negative / White Space)',
      def: 'المساحات الفارغة المتروكة عمداً بين العناصر والنصوص لإراحة عين القارئ وزيادة التركيز وقابلية القراءة ومنع التشتيت.',
      tag: 'مبادئ تصميم',
    },
    {
      term: 'إمكانية وسهولة الوصول (Accessibility - a11y)',
      def: 'تصميم وبرمجة المواقع لتكون قابلة للاستخدام السلس من قِبل جميع الأشخاص بمن فيهم ذوو الإعاقات وكبار السن.',
      tag: 'شمولية',
    },
  ];

  const filtered = terms.filter(t => t.term.includes(filter) || t.def.includes(filter) || t.tag.includes(filter));

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📖 معجم مصطلحات كتاب الوزارة لتصميم المعلومات وتجربة المستخدم</span>
        </h4>
        <input
          type="text"
          placeholder="ابحث عن مصطلح..."
          className="field text-xs py-1 px-3 w-48 font-bold"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto">
        {filtered.map((t, i) => (
          <div key={i} className="p-3 rounded-xl border bg-slate-900/90 border-slate-800 text-right">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-extrabold text-xs text-white">{t.term}</span>
              <span className="pill text-[10px] font-bold py-0.5 px-2 bg-sky-950 text-sky-300 border-sky-800">
                {t.tag}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

