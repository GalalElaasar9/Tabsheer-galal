import { useState } from 'react';

/* =========================================================================
   1. IterativePdcaSimulatorDemo: محاكي دورة التحسين التكراري PDCA
   ========================================================================= */
export function IterativePdcaSimulatorDemo() {
  const [stage, setStage] = useState<'plan' | 'do' | 'check' | 'act'>('plan');

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* PDCA Step Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <button
          className={`btn text-xs py-2 px-3 rounded-xl font-bold transition-all ${stage === 'plan' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
          onClick={() => setStage('plan')}
        >
          ١ · خطّط (Plan)
        </button>
        <button
          className={`btn text-xs py-2 px-3 rounded-xl font-bold transition-all ${stage === 'do' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
          onClick={() => setStage('do')}
        >
          ٢ · نفّذ (Do)
        </button>
        <button
          className={`btn text-xs py-2 px-3 rounded-xl font-bold transition-all ${stage === 'check' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
          onClick={() => setStage('check')}
        >
          ٣ · افحص وقِس (Check)
        </button>
        <button
          className={`btn text-xs py-2 px-3 rounded-xl font-bold transition-all ${stage === 'act' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900 text-slate-400'}`}
          onClick={() => setStage('act')}
        >
          ٤ · طبّق وعمّم (Act)
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Stage Explanation & Actions */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-3">
          <div className="text-xs font-bold text-sky-400 border-b pb-1 flex justify-between">
            <span>
              {stage === 'plan' && '📝 مرحلة التخطيط والتحليل (Plan)'}
              {stage === 'do' && '⚙️ مرحلة التنفيذ في بيئة التطوير (Do)'}
              {stage === 'check' && '📊 مرحلة الفحص والقياس العلمي (Check)'}
              {stage === 'act' && '🚀 مرحلة الاعتماد والتعميم والتوثيق (Act)'}
            </span>
            <span className="font-mono text-slate-400 uppercase">{stage}</span>
          </div>

          {stage === 'plan' && (
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed text-right">
              <p><b>المشكلة المرصودة:</b> 65% من الطلاب يغادرون صفحة التسجيل دون إتمامها بسبب تعقيد استمارة التسجيل.</p>
              <div className="p-2.5 rounded-lg bg-sky-950/40 border border-sky-800 text-sky-200">
                💡 <b>الفرضية العلمية:</b> اختصار الحقول من 12 حقلاً إلى 4 حقول أساسية فقط، وتوفير تسجيل سريع عبر حساب Google، سيرفع معدل إتمام التسجيل بنسبة لا تقل عن 30%.
              </div>
              <button onClick={() => setStage('do')} className="btn btn-primary w-full text-xs py-2 bg-sky-600 text-white font-bold rounded-xl mt-2">
                الانتقال لمرحلة التنفيذ (Do) ←
              </button>
            </div>
          )}

          {stage === 'do' && (
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed text-right">
              <p><b>إجراءات التطوير:</b> إعادة كتابة مكون الاستمارة بـ React، وإلغاء الحقول غير الضرورية في بيئة تجريبية (Staging).</p>
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800 text-amber-200">
                🛠️ <b>العمل المنجز:</b> تم تجهيز النسخة المحسنة (Variant B) وتجربتها داخلياً للتأكد من عدم وجود أي أخطاء برمجية.
              </div>
              <button onClick={() => setStage('check')} className="btn btn-primary w-full text-xs py-2 bg-amber-600 text-white font-bold rounded-xl mt-2">
                الانتقال لمرحلة الفحص والقياس (Check) ←
              </button>
            </div>
          )}

          {stage === 'check' && (
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed text-right">
              <p><b>نتائج اختبار A/B مع 2000 طالب:</b> مقارنة استمارة التسجيل القديمة بالجديدة بالأرقام الدقيقة.</p>
              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800 text-purple-200">
                📈 <b>الأرقام المحققة:</b> ارتفع معدل إتمام التسجيل من 35% إلى 82%، وانخفض زمن ملء الاستمارة من 4 دقائق إلى 45 ثانية!
              </div>
              <button onClick={() => setStage('act')} className="btn btn-primary w-full text-xs py-2 bg-purple-600 text-white font-bold rounded-xl mt-2">
                الانتقال لمرحلة التعميم (Act) ←
              </button>
            </div>
          )}

          {stage === 'act' && (
            <div className="space-y-2 text-xs text-slate-300 leading-relaxed text-right">
              <p><b>الاعتماد النهائي والتوثيق:</b> تم نشر الاستمارة المحسنة رسمياً لكافة الزوار على الخادم الرئيسي.</p>
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800 text-emerald-200">
                🎉 <b>نجاح الدورة التكرارية:</b> تم توثيق الدروس المستفادة، وتحديد الهدف التالي: تسريع تحميل صور الواجهة.
              </div>
              <button onClick={() => setStage('plan')} className="btn btn-primary w-full text-xs py-2 bg-emerald-600 text-white font-bold rounded-xl mt-2">
                بدء دورة تحسين تكرارية جديدة 🔄
              </button>
            </div>
          )}
        </div>

        {/* Live Visual Timeline */}
        <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 flex flex-col justify-center items-center min-h-[260px] text-center">
          <div className="text-5xl mb-3">
            {stage === 'plan' && '🎯'}
            {stage === 'do' && '⚡'}
            {stage === 'check' && '📊'}
            {stage === 'act' && '🏆'}
          </div>
          <h4 className="font-extrabold text-sm text-white mb-1">
            {stage === 'plan' && 'الخطوة الأولى: التخطيط وصياغة الفرضية'}
            {stage === 'do' && 'الخطوة الثانية: تطبيق الحل في بيئة آمنة'}
            {stage === 'check' && 'الخطوة الثالثة: قياس الأرقام والنتائج'}
            {stage === 'act' && 'الخطوة الرابعة: نشر الحل وبدء دورة جديدة'}
          </h4>
          <p className="text-xs text-slate-400 max-w-xs mt-1">
            دورة ديمنغ (PDCA) تجعل التطوير مبنياً على الحقائق والأرقام وليس التخمين العشوائي.
          </p>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. PerformanceOptimizationLabDemo: معمل تحسين وتسريع أداء الموقع
   ========================================================================= */
export function PerformanceOptimizationLabDemo() {
  const [optWebp, setOptWebp] = useState(false);
  const [optLazy, setOptLazy] = useState(false);
  const [optMinify, setOptMinify] = useState(false);
  const [optCache, setOptCache] = useState(false);

  // Initial unoptimized stats:
  // Size: 8.4 MB, Time: 6.2s, PageSpeed: 38/100
  let sizeMb = 8.4;
  let loadTimeSec = 6.2;
  let pageSpeedScore = 38;

  if (optWebp) {
    sizeMb -= 4.5;
    loadTimeSec -= 2.4;
    pageSpeedScore += 22;
  }
  if (optLazy) {
    sizeMb -= 2.2;
    loadTimeSec -= 1.8;
    pageSpeedScore += 18;
  }
  if (optMinify) {
    sizeMb -= 0.8;
    loadTimeSec -= 0.6;
    pageSpeedScore += 12;
  }
  if (optCache) {
    loadTimeSec -= 0.6;
    pageSpeedScore += 10;
  }

  // Ensure minimum realistic values
  sizeMb = Math.max(0.4, Number(sizeMb.toFixed(2)));
  loadTimeSec = Math.max(0.6, Number(loadTimeSec.toFixed(1)));
  pageSpeedScore = Math.min(100, pageSpeedScore);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Optimization Switches */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-2.5 text-xs">
          <div className="text-xs font-bold text-sky-400 border-b pb-1.5 flex justify-between">
            <span>⚙️ أدوات وتقنيات تسريع الموقع (Performance Tools)</span>
            <span className="text-[11px] text-slate-400">تفعيل/إلغاء</span>
          </div>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-right">
            <div>
              <span className="font-bold text-white block">🖼️ تحويل الصور لصيغة WebP الحديثة</span>
              <span className="text-[11px] text-slate-400">تقليص حجم الصور الفوتوغرافية بنسبة تزيد عن 60%.</span>
            </div>
            <input type="checkbox" checked={optWebp} onChange={e => setOptWebp(e.target.checked)} className="accent-sky-500 mr-2" />
          </label>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-right">
            <div>
              <span className="font-bold text-white block">⚡ التحميل الكسول (Lazy Loading)</span>
              <span className="text-[11px] text-slate-400">تأخير تحميل الوسائط حتى يمرر المستخدم إليها على الشاشة.</span>
            </div>
            <input type="checkbox" checked={optLazy} onChange={e => setOptLazy(e.target.checked)} className="accent-sky-500 mr-2" />
          </label>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-right">
            <div>
              <span className="font-bold text-white block">📦 تصغير الأكواد البرمجية (Minification)</span>
              <span className="text-[11px] text-slate-400">حذف المسافات والتعليقات الزائدة من ملفات CSS و JavaScript.</span>
            </div>
            <input type="checkbox" checked={optMinify} onChange={e => setOptMinify(e.target.checked)} className="accent-sky-500 mr-2" />
          </label>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950 border border-slate-800 cursor-pointer text-right">
            <div>
              <span className="font-bold text-white block">💾 التخزين المؤقت في المتصفح (Browser Caching)</span>
              <span className="text-[11px] text-slate-400">حفظ الملفات الثابتة محلياً لفتح خاطف للزائر العائد.</span>
            </div>
            <input type="checkbox" checked={optCache} onChange={e => setOptCache(e.target.checked)} className="accent-sky-500 mr-2" />
          </label>
        </div>

        {/* Live Scorecard */}
        <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 space-y-3 text-xs">
          <div className="text-xs font-bold text-amber-400 border-b pb-1.5 flex justify-between">
            <span>📊 مقاييس الأداء الفورية (Google PageSpeed):</span>
            <span className="font-mono text-slate-400">Real-time Score</span>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-1">حجم الصفحة:</span>
              <span className="text-sm font-extrabold text-sky-400 font-mono">{sizeMb} MB</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-1">زمن التحميل LCP:</span>
              <span className={`text-sm font-extrabold font-mono ${loadTimeSec <= 2.5 ? 'text-emerald-400' : 'text-rose-400'}`}>
                {loadTimeSec}s
              </span>
            </div>
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-1">تقييم السرعة:</span>
              <span className={`text-sm font-extrabold font-mono ${pageSpeedScore >= 90 ? 'text-emerald-400' : pageSpeedScore >= 50 ? 'text-amber-400' : 'text-rose-400'}`}>
                {pageSpeedScore}/100
              </span>
            </div>
          </div>

          <div className={`p-3 rounded-xl border leading-relaxed ${pageSpeedScore >= 90 ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200' : pageSpeedScore >= 70 ? 'bg-amber-950/30 border-amber-800 text-amber-200' : 'bg-rose-950/30 border-rose-800 text-rose-200'}`}>
            <span className="font-bold block mb-1">
              {pageSpeedScore >= 90 ? '🟢 أداء ممتاز فائق السرعة!' : pageSpeedScore >= 70 ? '🟡 أداء جيد وقابل للمزيد' : '🔴 الموقع بطيء ويعاني من بطء في التحميل'}
            </span>
            <p className="text-[11px]">
              {pageSpeedScore >= 90
                ? 'اجتاز الموقع كافة معايير Core Web Vitals بتفوق. سيحظى الزوار بتجربة سلسة وتتصدر صفحات الموقع نتائج محركات البحث.'
                : 'قم بتفعيل المزيد من تقنيات الضغط والتحميل الكسول لتقليص حجم الصفحة وخفض زمن الانتظار.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. TextbookGlossaryU4L4: معجم مصطلحات كتاب الوزارة المعتمدة
   ========================================================================= */
export function TextbookGlossaryU4L4() {
  const [filter, setFilter] = useState('');
  const terms = [
    {
      term: 'عملية التحسين التكراري (Iterative Optimization)',
      def: 'نهج هندسي مستمر يقوم على دورات متعاقبة من التخطيط والتنفيذ والقياس والتعميم لتحسين سرعة وكفاءة وتجربة موقع الويب باستمرار.',
      tag: 'منهجية',
    },
    {
      term: 'دورة PDCA (Plan - Do - Check - Act)',
      def: 'دورة تحسين الجودة المعتمدة عالمياً وتتكون من 4 خطوات: التخطيط وصياغة الفرضيات، التنفيذ التجريبي، فحص وقياس الأثر، وتعميم وتوثيق الحل.',
      tag: 'إدارة جودة',
    },
    {
      term: 'التحميل الكسول (Lazy Loading)',
      def: 'تقنية تؤخر تحميل الصور والوسائط غير المرئية حتى يقترب المستخدم من التمرير إليها، مما يسرع فتح الصفحة ويقلل استهلاك الباقة.',
      tag: 'أداء وسرعة',
    },
    {
      term: 'التصغير البرمجي (Minification)',
      def: 'حذف المسافات البيضاء والأسطر والتعليقات الزائدة من ملفات CSS و JavaScript لتقليص حجمها البرمجي دون تغيير طريقة عملها.',
      tag: 'كود وأداء',
    },
    {
      term: 'التخزين المؤقت في المتصفح (Browser Caching)',
      def: 'حفظ الملفات الثابتة (الصور والتنسيقات) محلياً في جهاز الزائر، لتفتح الصفحة في الزيارات التالية فورياً دون طلبها مجدداً من الخادم.',
      tag: 'شبكة وتخزين',
    },
    {
      term: 'تحسين معدل التحويل (CRO - Conversion Rate Optimization)',
      def: 'عملية تحليل وتعديل الواجهات لزيادة نسبة الزوار الذين يكملون الإجراء المطلوب بنجاح (مثل الشراء أو إتمام استمارة التسجيل).',
      tag: 'تفاعل ونتائج',
    },
    {
      term: 'البيئة التجريبية (Staging Environment)',
      def: 'نسخة طبق الأصل من الموقع تُستخدم لاختبار التعديلات البرمجية والتأكد من سلامتها التامة قبل نشرها للمستخدمين الحقيقيين.',
      tag: 'تطوير',
    },
  ];

  const filtered = terms.filter(t => t.term.includes(filter) || t.def.includes(filter) || t.tag.includes(filter));

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📖 معجم مصطلحات كتاب الوزارة لعملية التحسين التكراري</span>
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

