import { useState } from 'react';

/* =========================================================================
   1. AbTestingSimulatorDemo: محاكي اختبارات A/B وتقييم التحويل
   ========================================================================= */
export function AbTestingSimulatorDemo() {
  const [activeVariant, setActiveVariant] = useState<'A' | 'B'>('B');
  const [simulatedCount, setSimulatedCount] = useState<number>(1000);

  // Metrics for Variant A vs Variant B
  const stats = {
    A: {
      conversions: Math.round(simulatedCount * 0.038), // 3.8%
      bounces: Math.round(simulatedCount * 0.62),      // 62%
      conversionRate: '3.8%',
      bounceRate: '62%',
      label: 'النسخة الأصلية (A) - زر رمادي ونص طويل',
    },
    B: {
      conversions: Math.round(simulatedCount * 0.142), // 14.2%
      bounces: Math.round(simulatedCount * 0.28),      // 28%
      conversionRate: '14.2%',
      bounceRate: '28%',
      label: 'النسخة المحسنة (B) - زر CTA برتقالي بارز وعنوان مباشر',
    },
  };

  const current = stats[activeVariant];

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Switcher & Sample Size */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">اختر النسخة للمعاينة:</span>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${activeVariant === 'A' ? 'bg-slate-700 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
            onClick={() => setActiveVariant('A')}
          >
            📄 النسخة (A) الأصلية
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${activeVariant === 'B' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
            onClick={() => setActiveVariant('B')}
          >
            🔥 النسخة (B) المحسنة (الأعلى تحويلاً)
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-slate-400">حجم العينة:</span>
          <button
            onClick={() => setSimulatedCount(c => c === 1000 ? 5000 : 1000)}
            className="pill text-xs font-mono font-bold bg-sky-950 text-sky-300 border-sky-700"
          >
            {simulatedCount.toLocaleString('ar-EG')} زائر (تبديل)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Mock Landing Page */}
        <div className="p-4 rounded-xl border bg-slate-950 border-slate-800 flex flex-col justify-between min-h-[300px]">
          <div>
            <div className="text-[11px] text-slate-400 mb-2 border-b pb-1 flex justify-between">
              <span>🖥️ صفحة التسجيل في النشاط المدرسي:</span>
              <span className="font-mono text-amber-400">Variant {activeVariant}</span>
            </div>

            {activeVariant === 'A' ? (
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 text-right space-y-2">
                <span className="text-[10px] text-slate-500">نشاط مدرسي</span>
                <h4 className="text-sm font-bold text-slate-300">
                  التسجيل في النشاط الرياضي والأنشطة الإضافية
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  يحتوي هذا النشاط على عدة خيارات متعددة يجب قراءتها بالكامل قبل التسجيل في الفصل الدراسي.
                </p>
                <div className="pt-2">
                  <button className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded border border-slate-700">
                    اضغط هنا للتسجيل
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-4 rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-950/20 to-slate-900 text-right space-y-3">
                <span className="pill text-[10px] font-bold bg-amber-500/20 text-amber-300 border-amber-500">
                  🏆 النشاط الرياضي · بكالوريا 2027
                </span>
                <h4 className="text-base font-extrabold text-white">
                  اشترك الآن في دوري المدرسة واحجز مكانك! ⚽🥇
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  تسجيل مباشر بضغطة زر واحدة واختيار فريقك الرياضي المفضل فوراً وبدون تعقيد.
                </p>
                <div className="pt-1">
                  <button className="btn text-xs py-2 px-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold rounded-xl shadow-lg hover:scale-105 transition-all">
                    🎯 سجّل في النشاط الآن مجاناً ←
                  </button>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold">
                  ✓ زر واضح ولون بارز ومحفز للتحويل المباشر
                </div>
              </div>
            )}
          </div>

          <div className="mt-3 text-[11px] text-slate-400 border-t border-slate-800 pt-2 flex justify-between">
            <span>{current.label}</span>
          </div>
        </div>

        {/* Analytics KPIs Output */}
        <div className="space-y-3">
          <div className="p-4 rounded-xl border bg-slate-950 border-slate-800">
            <h5 className="text-xs font-bold text-slate-300 mb-3 border-b border-slate-800 pb-1 flex justify-between">
              <span>📊 نتائج التقييم الكمي (Analytics):</span>
              <span className="text-[10px] text-sky-400">بيانات عددية</span>
            </h5>

            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">معدل التحويل (CVR)</span>
                <span className={`text-xl font-black ${activeVariant === 'B' ? 'text-emerald-400' : 'text-slate-400'}`}>
                  {current.conversionRate}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  ({current.conversions.toLocaleString('ar-EG')} مسجّل)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[11px] text-slate-400 block mb-1">معدل الارتداد (Bounce)</span>
                <span className={`text-xl font-black ${activeVariant === 'B' ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {current.bounceRate}
                </span>
                <span className="text-[10px] text-slate-500 block mt-1">
                  ({current.bounces.toLocaleString('ar-EG')} غادروا فوراً)
                </span>
              </div>
            </div>
          </div>

          <div className="p-3.5 rounded-xl border border-sky-900/60 bg-sky-950/20 text-right text-xs leading-relaxed text-sky-200">
            💡 <b>القاعدة الأساسية في اختبارات A/B:</b>
            <p className="mt-1">
              مقارنة خيارين (A و B) لتحديد أيهما أفضل في تحقيق الهدف بالبيانات الرقمية القاطعة، خيار (B) خفّض الارتداد ورفع التحويل بنسبة تفوق 3 أضعاف!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. HeuristicAuditLabDemo: مدقق القواعد الإرشادية لقابلية الاستخدام
   ========================================================================= */
export function HeuristicAuditLabDemo() {
  const [checks, setChecks] = useState<Record<string, boolean>>({
    consistency: true,
    errorPrev: true,
    status: true,
    feedback: false,
  });

  const toggle = (key: string) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const trueCount = Object.values(checks).filter(Boolean).length;
  const usabilityIndex = Math.round((trueCount / 4) * 100);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📋 مدقق القواعد الإرشادية لتقييم واجهة المستخدم</span>
        </h4>
        <div className="text-xs font-mono">
          مؤشر الامتثال الإرشادي: <span className="font-extrabold text-emerald-400">{usabilityIndex}%</span>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">١ · الاتساق (Consistency)</span>
            <span className="text-[11px] text-slate-400">توحيد أشكال الأزرار والألوان والقوائم وطريقة العمل عبر كافة صفحات الموقع.</span>
          </div>
          <input type="checkbox" checked={checks.consistency} onChange={() => toggle('consistency')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٢ · منع الأخطاء (Error Prevention)</span>
            <span className="text-[11px] text-slate-400">جعل ارتكاب الأخطاء صعباً على المستخدم (مثل منع كتابة حروف في حقل العمر بدلاً من الأرقام).</span>
          </div>
          <input type="checkbox" checked={checks.errorPrev} onChange={() => toggle('errorPrev')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٣ · وضوح حالة النظام (Visibility of System Status)</span>
            <span className="text-[11px] text-slate-400">إخبار المستخدم بما يحدث الآن في الوقت المناسب (رسائل أخطاء الإدخال وظهور مؤشر تحميل ملف).</span>
          </div>
          <input type="checkbox" checked={checks.status} onChange={() => toggle('status')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٤ · أزرار الطوارئ والتراجع (Emergency Exit & Undo)</span>
            <span className="text-[11px] text-slate-400">توفير خيار إلغاء واضح وزر تراجع فوري عند الضغط بالخطأ دون إحراج المستخدم.</span>
          </div>
          <input type="checkbox" checked={checks.feedback} onChange={() => toggle('feedback')} className="accent-sky-500 mr-3" />
        </label>
      </div>
    </div>
  );
}

/* =========================================================================
   3. TextbookGlossaryU4L3: معجم المصطلحات المعتمدة بنصوصها الدقيقة
   ========================================================================= */
export function TextbookGlossaryU4L3() {
  const [filter, setFilter] = useState('');
  const terms = [
    {
      term: 'التقييم النوعي (Qualitative Evaluation)',
      source: 'المنهج المعتمد',
      def: 'يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة. (يهتم بسؤال: لماذا تحدث المشكلة؟ وكيف كانت التجربة؟).',
      tag: 'نوعي',
    },
    {
      term: 'التقييم الكمي (Quantitative Evaluation)',
      source: 'المنهج المعتمد',
      def: 'يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج. (يهتم بسؤال: كم تحدث المشكلة؟ وما حجمها بالأرقام؟).',
      tag: 'كمي',
    },
    {
      term: 'اختبار قابلية الاستخدام (Usability Testing)',
      source: 'المنهج المعتمد',
      def: 'مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها (مراقبة مستخدم حقيقي وهو ينجز مهمة محددة مثل البحث عن نتيجة الطالب أحمد).',
      tag: 'تقييم نوعي',
    },
    {
      term: 'المقابلات الشخصية (Interviews)',
      source: 'المنهج المعتمد',
      def: 'الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم وسماع صوتهم ومشاعرهم المباشرة بعد تجربة الموقع.',
      tag: 'تقييم نوعي',
    },
    {
      term: 'التقييم الإرشادي (Heuristic Evaluation)',
      source: 'المنهج المعتمد',
      def: 'عبارة عن مراجعة يجريها خبراء لواجهة المستخدم (UI) لاكتشاف ما بها من مشكلات، استنادًا إلى قواعد مبادئ إرشادية عملية (heuristics).',
      tag: 'خبراء (نوعي)',
    },
    {
      term: 'الاتساق (Consistency)',
      source: 'المنهج المعتمد',
      def: 'قاعدة إرشادية تعني ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء عبر الموقع.',
      tag: 'قاعدة إرشادية',
    },
    {
      term: 'منع الأخطاء (Error Prevention)',
      source: 'المنهج المعتمد',
      def: 'قاعدة إرشادية تعني ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء (مثل منع كتابة حروف في حقل العمر بدلاً من الأرقام).',
      tag: 'قاعدة إرشادية',
    },
    {
      term: 'وضوح حالة النظام (Visibility of System Status)',
      source: 'المنهج المعتمد',
      def: 'قاعدة إرشادية تعني ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين، يعني أن الموقع يجب أن يخبر المستخدم بوضوح بما يحدث الآن (مثل رسائل أخطاء الإدخال وظهور مؤشر تحميل ملف).',
      tag: 'قاعدة إرشادية',
    },
    {
      term: 'تحليلات الويب (Web Analytics)',
      source: 'المنهج المعتمد',
      def: 'جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج. وهي إحدى أدوات التقييم الكمي، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.',
      tag: 'تقييم كمي',
    },
    {
      term: 'مشاهدات الصفحة (PV - Page Views)',
      source: 'المنهج المعتمد',
      def: 'هو إجمالي عدد مرات مشاهدة صفحة معينة. يحسب إجمالي مرات المشاهدة، ويشمل المشاهدات المتكررة، وليس عدد الأشخاص الزائرين (زائر واحد تصفح الموقع 4 مرات = 4 PVs).',
      tag: 'مؤشر كمي',
    },
    {
      term: 'معدل الارتداد (Bounce Rate)',
      source: 'المنهج المعتمد',
      def: 'نسبة الزوار الذين يدخلون الموقع ثم يغادرونه بعد مشاهدة صفحة واحدة دون التفاعل أو الانتقال لصفحات أخرى. يساعد على ملاحظة ضعف التفاعل لكنه لا يفسر السبب وحده!',
      tag: 'مؤشر كمي',
    },
    {
      term: 'معدل التحويل (CVR - Conversion Rate)',
      source: 'المنهج المعتمد',
      def: 'نسبة المستخدمين أو الجلسات التي حققت هدفاً محدداً (مثل التسجيل أو الشراء)، مع تحديد المقام وطريقة الحساب (مثال: 200 زائر ➔ 40 سجلوا ➔ CVR = 20%).',
      tag: 'مؤشر كمي',
    },
    {
      term: 'اختبار A/B (A/B Testing)',
      source: 'المنهج المعتمد',
      def: 'مقارنة خيارين من نفس الشيء لمعرفة أيهما أفضل في تحقيق الهدف بالأدلة الإحصائية القاطعة.',
      tag: 'تجربة كمية',
    },
    {
      term: 'الجمع بين النوعي والكمي',
      source: 'المنهج المعتمد',
      def: 'التقييم الكمي يقول ماذا يحدث؟ وكم يحدث؟ والتقييم النوعي يوضح لماذا يحدث ذلك؟ وكيف يشعر المستخدم؟ ومراجعة الخبراء تكتشف مشكلات قد لا تظهر في الأرقام.',
      tag: 'الفكرة الرئيسة',
    },
  ];

  const filtered = terms.filter(t => t.term.includes(filter) || t.def.includes(filter) || t.tag.includes(filter));

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-amber-400 flex items-center gap-2">
          <span>📖 معجم المصطلحات المعتمدة: طُرق تقييم المواقع الإلكترونية (بكالوريا 2027)</span>
        </h4>
        <input
          type="text"
          placeholder="ابحث عن مصطلح..."
          className="field text-xs py-1 px-3 w-48 font-bold"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[380px] overflow-y-auto">
        {filtered.map((t, i) => (
          <div key={i} className="p-3 rounded-xl border bg-slate-900/90 border-slate-800 text-right">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-extrabold text-xs text-white">{t.term}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-amber-400 font-bold">{t.source}</span>
                <span className="pill text-[9px] font-bold py-0.5 px-1.5 bg-amber-950 text-amber-300 border-amber-800">
                  {t.tag}
                </span>
              </div>
            </div>
            <p className="text-[11.5px] text-slate-300 leading-relaxed">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   4. UsabilityTestingInterviewLab: محاكي اختبار قابلية الاستخدام والمقابلات
   ========================================================================= */
export function UsabilityTestingInterviewLab() {
  const [mode, setMode] = useState<'bad' | 'good'>('good');
  const [searchQuery, setSearchQuery] = useState('');
  const [foundResult, setFoundResult] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [interviewOpen, setInterviewOpen] = useState(false);

  const reset = (m: 'bad' | 'good') => {
    setMode(m);
    setSearchQuery('');
    setFoundResult(false);
    setClickCount(0);
    setInterviewOpen(false);
  };

  const handleSearch = () => {
    setClickCount(c => c + 1);
    if (searchQuery.includes('أحمد') || searchQuery.includes('احمد') || searchQuery.trim().length > 0) {
      setFoundResult(true);
    }
  };

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      {/* Top Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">اختر سيناريو الاختبار للمعاينة:</span>
          <button
            onClick={() => reset('bad')}
            className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              mode === 'bad' ? 'bg-rose-700 text-white shadow-md' : 'bg-slate-900 text-slate-400'
            }`}
          >
            ❌ الواجهة (أ): تصميم مربك (خلل استخدام)
          </button>
          <button
            onClick={() => reset('good')}
            className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all ${
              mode === 'good' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'
            }`}
          >
            ✅ الواجهة (ب): تصميم مباشر (استخدام سلس)
          </button>
        </div>

        <div className="text-xs font-mono text-slate-300 flex items-center gap-3">
          <span>عدد النقرات: <b className={clickCount > 3 ? 'text-rose-400' : 'text-emerald-400'}>{clickCount}</b></span>
          <button
            onClick={() => setInterviewOpen(o => !o)}
            className="py-1 px-3 rounded-lg bg-purple-900/60 border border-purple-500 text-purple-200 font-bold hover:bg-purple-800"
          >
            🎤 {interviewOpen ? 'إخفاء المقابلة' : 'عرض مقابلة الطالب أحمد'}
          </button>
        </div>
      </div>

      {/* Main Simulation Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Left 2 Cols: The Simulated Website */}
        <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-slate-950 p-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3 text-xs">
            <span className="font-bold text-sky-400 flex items-center gap-1.5">
              <span>🏫</span>
              <span>بوابة مدرسة المستقبل - المهمة: «ابحث عن نتيجة الطالب أحمد»</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Live Usability Task</span>
          </div>

          {mode === 'bad' ? (
            /* Bad Usability Website */
            <div className="space-y-3">
              <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="hover:text-white cursor-pointer" onClick={() => setClickCount(c => c + 1)}>الرئيسية</span>
                <span className="hover:text-white cursor-pointer" onClick={() => setClickCount(c => c + 1)}>أخبار الأنشطة</span>
                <span className="hover:text-white cursor-pointer" onClick={() => setClickCount(c => c + 1)}>جداول الحصص</span>
                <span className="hover:text-white cursor-pointer text-slate-600 text-[10px]" onClick={() => setClickCount(c => c + 1)}>قوائم فرعية 1</span>
                <span className="hover:text-white cursor-pointer text-slate-600 text-[10px]" onClick={() => setClickCount(c => c + 1)}>أرشيف قديم</span>
              </div>

              <div className="p-6 bg-slate-900/40 rounded-xl border border-dashed border-slate-800 text-center text-xs space-y-3">
                <p className="text-slate-400">مرحباً بكم في بوابة المدرسة! لا يوجد زر نتائج واضح في الصفحة الرئيسية...</p>
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => { setClickCount(c => c + 1); alert('هذا الرابط لأرشيف العام الماضي!'); }}
                    className="p-2 rounded bg-slate-800 text-slate-400 text-xs"
                  >
                    أرشيف عام 2022
                  </button>
                  <button
                    onClick={() => { setClickCount(c => c + 1); setFoundResult(true); }}
                    className="p-1 px-2 rounded bg-slate-900 border border-slate-800 text-[10px] text-slate-600 hover:text-slate-300"
                    title="زر صغير متداري!"
                  >
                    نتائج الطلاب (مخفي!)
                  </button>
                </div>
                <div className="text-[11px] text-rose-400 font-bold">
                  ⚠️ الملاحظة الميدانية: الطالب تاه وفتح قوائم كتير ورجع وسأل: «أجيب النتيجة منين؟»
                </div>
              </div>
            </div>
          ) : (
            /* Good Usability Website */
            <div className="space-y-4">
              <div className="p-3 bg-slate-900 rounded-lg border border-slate-800 flex items-center justify-between text-xs font-bold">
                <div className="flex gap-4">
                  <span className="text-white">الرئيسية</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span>🏆</span>
                    <span>نتائج الطلاب (بارز ومباشر)</span>
                  </span>
                </div>
                <span className="text-sky-400">الصف الثاني الثانوي</span>
              </div>

              <div className="p-4 bg-emerald-950/20 rounded-xl border border-emerald-800/60 text-right space-y-3">
                <label className="text-xs font-bold text-white block">ادخل اسم الطالب أو رقم الجلوس:</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    placeholder="مثال: أحمد محمود"
                    className="flex-1 p-2 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold"
                  />
                  <button
                    onClick={handleSearch}
                    className="py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                  >
                    بحث فوري 🔍
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Search Result Box */}
          {foundResult && (
            <div className="mt-4 p-3.5 rounded-xl border border-emerald-600 bg-emerald-950/50 flex items-center justify-between text-xs animate-fadeIn">
              <div>
                <span className="text-emerald-300 font-bold block text-sm">🎉 نتيجة الطالب: أحمد محمود</span>
                <span className="text-slate-300">التقدير: ممتاز (98%) · الترتيب: الثاني على الدفعة</span>
              </div>
              <button className="p-2 px-3 rounded-lg bg-emerald-600 text-white font-bold text-xs hover:bg-emerald-500">
                📥 تحميل الشهادة PDF
              </button>
            </div>
          )}
        </div>

        {/* Right Col: Observation Log & Interview Output */}
        <div className="space-y-3">
          {/* Observation Note */}
          <div className="p-3.5 rounded-xl border border-slate-800 bg-slate-900/90 text-right text-xs">
            <span className="font-extrabold text-sky-400 block mb-1 border-b border-slate-800 pb-1">
              👀 تقرير مراقبة الباحث (Usability Log):
            </span>
            {mode === 'bad' ? (
              <p className="text-rose-300 leading-relaxed text-[11.5px]">
                ❌ <b>المسار المتعثر:</b> الطالب نقر {clickCount} مرات، تشتت بين الروابط غير المفيدة، ولم يعثر على زر النتائج بسهولة.
                <br />
                <span className="text-slate-400 font-bold mt-1 block">الحكم: مشكلة صريحة في قابلية الاستخدام!</span>
              </p>
            ) : (
              <p className="text-emerald-300 leading-relaxed text-[11.5px]">
                ✅ <b>المسار السلس:</b> الطالب توجه فوراً لزر النتائج الأخضر، وكتب الاسم، ووصل للنتيجة في ثوانٍ دون أي تردد.
                <br />
                <span className="text-slate-400 font-bold mt-1 block">الحكم: قابلية استخدام ممتازة وتصميم مباشر!</span>
              </p>
            )}
          </div>

          {/* Interview Box (Exact Quote from Kitab El-Faez) */}
          <div className="p-3.5 rounded-xl border border-purple-800/80 bg-purple-950/40 text-right text-xs">
            <span className="font-extrabold text-purple-300 block mb-1 border-b border-purple-800/60 pb-1 flex items-center justify-between">
              <span>🎤 ما قاله الطالب في المقابلة:</span>
              <span className="text-[10px] text-purple-400">سؤال مباشر</span>
            </span>

            {mode === 'bad' ? (
              <div className="space-y-1.5 text-[11px] text-purple-200">
                <p className="italic font-bold">
                  «الموقع شكله كويس وألوانه حلوة، بس زر تحميل النتيجة مش واضح ومكانه متداري وقعدت أدور كتير!»
                </p>
                <div className="p-1.5 rounded bg-purple-900/40 text-purple-300 text-[10px] font-bold">
                  💡 قرار المصمم: سأقوم فوراً بتكبير الزر ووضعه في الصفحة الرئيسية بلون بارز!
                </div>
              </div>
            ) : (
              <div className="space-y-1.5 text-[11px] text-emerald-200">
                <p className="italic font-bold">
                  «الموقع منظم جداً ومريح.. بمجرد ما فتحت لقيت زر النتائج في وشي ووصلت لشهادة أحمد في ثانية!»
                </p>
                <div className="p-1.5 rounded bg-emerald-900/40 text-emerald-300 text-[10px] font-bold">
                  ✓ قرار المصمم: الحفاظ على هذا التخطيط المريح لأنه يلبي رغبة المستخدمين.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
