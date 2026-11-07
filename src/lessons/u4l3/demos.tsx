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
            🔥 النسخة (B) المحسنة (الفائزة)
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
              <span>🖥️ صفحة هبوط كورس الذكاء الاصطناعي:</span>
              <span className="font-mono text-amber-400">Variant {activeVariant}</span>
            </div>

            {activeVariant === 'A' ? (
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900 text-right space-y-2">
                <span className="text-[10px] text-slate-500">كورس ثانوي</span>
                <h4 className="text-sm font-bold text-slate-300">
                  شرح منهاج البرمجة والذكاء الاصطناعي للبكالوريا بالتفصيل
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  يحتوي هذا الكورس على شروحات مفصلة ونصوص طويلة حول الوحدات الأربعة وموضوعات الويب والوسائط المتعددة.
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
                  🏆 الأعلى تقييماً · بكالوريا 2027
                </span>
                <h4 className="text-base font-extrabold text-white">
                  احترف منهج الذكاء الاصطناعي واضمن الدرجة النهائية! 🚀
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  معامل تفاعلية، شاشات سبورة ذكية، وبنك أسئلة يحاكي امتحانات البكالوريا الرسمية بنسبة 100%.
                </p>
                <div className="pt-1">
                  <button className="btn text-xs py-2 px-5 bg-gradient-to-r from-amber-500 to-orange-600 text-black font-extrabold rounded-xl shadow-lg hover:scale-105 transition-all">
                    🎯 ابدأ المذاكرة مجاناً الآن ←
                  </button>
                </div>
                <div className="text-[11px] text-emerald-400 font-bold">
                  ✓ ضمان الفهم الكامل أو استرداد الرسوم
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-3 text-xs">
          <div className="text-xs font-bold text-sky-400 border-b pb-1.5 flex justify-between">
            <span>📊 النتائج الإحصائية لاختبار A/B:</span>
            <span className="font-mono text-slate-400">Live Metrics</span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-1">معدل التحويل (Conversion):</span>
              <span className={`text-base font-extrabold font-mono ${activeVariant === 'B' ? 'text-emerald-400' : 'text-slate-400'}`}>
                {current.conversionRate}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">({current.conversions} مشترك)</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-1">معدل الارتداد (Bounce Rate):</span>
              <span className={`text-base font-extrabold font-mono ${activeVariant === 'B' ? 'text-emerald-400' : 'text-rose-400'}`}>
                {current.bounceRate}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">({current.bounces} غادروا فوراً)</span>
            </div>
          </div>

          <div className={`p-3 rounded-xl border leading-relaxed ${activeVariant === 'B' ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200' : 'bg-slate-950 border-slate-800 text-slate-300'}`}>
            <span className="font-bold block mb-1">
              {activeVariant === 'B' ? '🎉 استنتاج الاختبار العلمي:' : '⚠️ ملاحظات النسخة الأصلية:'}
            </span>
            <p className="text-[11px]">
              {activeVariant === 'B'
                ? 'النسخة B تفوقت بزيادة قدرها +273% في عدد المشتركين مع خفض معدل الهروب للنصف، وذلك بفضل زر الـ CTA البارز والعنوان المحفز.'
                : 'النسخة A تسببت في هروب 62% من الزوار بسبب غياب التسلسل البصري وزر التسجيل الباهت الذي لا يلفت الانتباه.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. HeuristicAuditLabDemo: مدقق معايير نيلسن لقابلية الاستخدام
   ========================================================================= */
export function HeuristicAuditLabDemo() {
  const [checks, setChecks] = useState<Record<string, boolean>>({
    status: true,
    realWorld: true,
    undo: true,
    consistency: true,
    errorPrev: false,
  });

  const toggle = (key: string) => {
    setChecks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const trueCount = Object.values(checks).filter(Boolean).length;
  const usabilityIndex = Math.round((trueCount / 5) * 100);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📋 قائمة مراجعة التقييم الاستكشافي (Nielsen Usability Heuristics)</span>
        </h4>
        <div className="text-xs font-mono">
          مؤشر قابلية الاستخدام: <span className="font-extrabold text-emerald-400">{usabilityIndex}%</span>
        </div>
      </div>

      <div className="space-y-2 text-xs">
        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">١ · وضوح حالة النظام (Visibility of System Status)</span>
            <span className="text-[11px] text-slate-400">إظهار مؤشرات تحميل ونسب مئوية تطمئن الزائر أن طلبه قيد المعالجة.</span>
          </div>
          <input type="checkbox" checked={checks.status} onChange={() => toggle('status')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٢ · مطابقة النظام للواقع (Match between System & Real World)</span>
            <span className="text-[11px] text-slate-400">استخدام لغة ومصطلحات وأيقونات مألوفة للمستخدم (مثل أيقونة سلة المشتريات 🛒).</span>
          </div>
          <input type="checkbox" checked={checks.realWorld} onChange={() => toggle('realWorld')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٣ · حرية وتحكم المستخدم (User Control & Freedom)</span>
            <span className="text-[11px] text-slate-400">توفير مخرج طوارئ واضح وزر تراجع (Undo) وإلغاء عند ارتكاب خطأ.</span>
          </div>
          <input type="checkbox" checked={checks.undo} onChange={() => toggle('undo')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٤ · التناسق والمعايير (Consistency & Standards)</span>
            <span className="text-[11px] text-slate-400">توحيد أشكال الأزرار والألوان ومواضع القوائم عبر كافة صفحات الموقع.</span>
          </div>
          <input type="checkbox" checked={checks.consistency} onChange={() => toggle('consistency')} className="accent-sky-500 mr-3" />
        </label>

        <label className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 cursor-pointer text-right">
          <div>
            <span className="font-bold text-white block">٥ · منع الأخطاء قبل وقوعها (Error Prevention)</span>
            <span className="text-[11px] text-slate-400">تعطيل الأزرار حتى تكتمل الشروط، ورسائل تأكيد قبل الحذف أو الدفع.</span>
          </div>
          <input type="checkbox" checked={checks.errorPrev} onChange={() => toggle('errorPrev')} className="accent-sky-500 mr-3" />
        </label>
      </div>
    </div>
  );
}

/* =========================================================================
   3. TextbookGlossaryU4L3: معجم مصطلحات كتاب الوزارة المعتمدة
   ========================================================================= */
export function TextbookGlossaryU4L3() {
  const [filter, setFilter] = useState('');
  const terms = [
    {
      term: 'تقييم المواقع الإلكترونية (Website Evaluation)',
      def: 'عملية منهجية لقياس أداء الموقع وقابليته للاستخدام وسرعته ومدى تحقيقه لأهداف الزوار وأصحاب العمل لاكتشاف فرص التطوير.',
      tag: 'مفهوم أساسي',
    },
    {
      term: 'اختبار قابلية الاستخدام (Usability Testing)',
      def: 'أسلوب تقييم عملي يقوم على مراقبة وتسجيل أداء مستخدمين حقيقيين أثناء قيامهم بمهام محددة داخل الموقع لرصد صعوباتهم وتعثراتهم.',
      tag: 'اختبارات',
    },
    {
      term: 'التقييم الاستكشافي (Heuristic Evaluation)',
      def: 'مراجعة خبيرة يقوم بها متخصصو تجربة المستخدم لفحص صفحات الموقع ومقارنتها بقواعد ومبادئ التصميم المعتمدة (مبادئ نيلسن).',
      tag: 'خبراء',
    },
    {
      term: 'اختبارات A/B (A/B Testing)',
      def: 'تجربة إحصائية تقارن بين نسختين من الصفحة (نسخة A ونسخة B) عبر توجيه الزوار بالتساوي لمعرفة أيهما تحقق معدل تحويل وتفاعل أعلى.',
      tag: 'إحصاء وتجربة',
    },
    {
      term: 'معدل الارتداد (Bounce Rate)',
      def: 'النسبة المئوية للزوار الذين يفتحون صفحة واحدة في الموقع ويغادرون فوراً دون النقر على أي رابط أو التفاعل مع الصفحة.',
      tag: 'تحليلات',
    },
    {
      term: 'معدل التحويل (Conversion Rate)',
      def: 'نسبة الزوار الذين أتموا بنجاح الهدف الأساسي المستهدف من الموقع، كالشراء أو التسجيل أو الاشتراك.',
      tag: 'تحليلات',
    },
    {
      term: 'الخرائط الحرارية (Heatmaps)',
      def: 'تمثيل بصري بالألوان يوضح كثافة نقرات وحركات الفأرة وأماكن التمرير للزوار لتحديد المناطق الأكثر جذباً على الشاشة.',
      tag: 'أدوات سلوك',
    },
    {
      term: 'مؤشر LCP (Largest Contentful Paint)',
      def: 'أحد مؤشرات الويب الحيوية الأساسية، يقيس زمن تحميل وظهور أكبر كتلة محتوى مرئية في شاشة المستخدم بالثواني.',
      tag: 'أداء وسرعة',
    },
  ];

  const filtered = terms.filter(t => t.term.includes(filter) || t.def.includes(filter) || t.tag.includes(filter));

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📖 معجم مصطلحات كتاب الوزارة لتقييم المواقع الإلكترونية</span>
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

