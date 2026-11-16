import { useState } from 'react';

/* =========================================================================
   0. SchoolParentUxLab: محاكي تجربة ولي الأمر في موقع المدرسة (الربط وقصة الدرس)
   ========================================================================= */
export function SchoolParentUxLab() {
  const [layoutMode, setLayoutMode] = useState<'messy' | 'organized'>('messy');
  const [searchedId, setSearchedId] = useState('');
  const [showResult, setShowResult] = useState(false);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg text-right" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Top Controller Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div>
          <span className="text-xs text-slate-400 block mb-1">
            سيناريو وقصة الدرس: ولي أمر يبحث عن درجات ابنه في موقع المدرسة 🏫
          </span>
          <h4 className="font-extrabold text-base text-white">
            قارن بين الموقع الفوضوي والموقع المصمم بتجربة مستخدم (UX) 🔍
          </h4>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">طريقة تنظيم الموقع:</span>
          <button
            onClick={() => { setLayoutMode('messy'); setShowResult(false); }}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${layoutMode === 'messy' ? 'bg-rose-700 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            ⚠️ موقع فوضوي وغير منظم
          </button>
          <button
            onClick={() => { setLayoutMode('organized'); setShowResult(false); }}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${layoutMode === 'organized' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            ✨ موقع منظم بهندسة معلومات (UX)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Mock School Website Browser (2 Columns) */}
        <div className="lg:col-span-2 rounded-xl border overflow-hidden" style={{ background: layoutMode === 'messy' ? '#18181b' : '#0a1122', borderColor: '#334155' }}>
          {/* Browser Address Bar */}
          <div className="px-3 py-2 border-b flex items-center justify-between text-xs" style={{ background: layoutMode === 'messy' ? '#27272a' : '#0f172a', borderColor: '#334155' }}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-[11px] font-mono mr-2 text-slate-400">
                https://al-amal-school.edu.eg
              </span>
            </div>
            <span
              className="font-bold text-[10px] px-2 py-0.5 rounded"
              style={{
                background: layoutMode === 'messy' ? 'rgba(244,63,94,0.2)' : 'rgba(34,197,94,0.2)',
                color: layoutMode === 'messy' ? '#fb7185' : '#4ade80',
                border: `1px solid ${layoutMode === 'messy' ? '#f43f5e' : '#22c55e'}`,
              }}
            >
              {layoutMode === 'messy' ? 'تكدس عشوائي وتشتيت' : 'تسلسل هرمي واضح ومريح'}
            </span>
          </div>

          {/* Browser Body */}
          {layoutMode === 'messy' ? (
            /* Cluttered Messy Webpage */
            <div className="p-4 space-y-3 text-right" style={{ background: '#1c1917' }}>
              {/* Chaotic Header */}
              <div className="p-2 border border-dashed border-red-500 rounded bg-red-950/30 flex flex-wrap gap-2 items-center justify-between text-[11px]">
                <span className="font-bold text-amber-300">مدرسة الأمل الثانوية المشتركة</span>
                <button className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">تجديد اشتراك الأتوبيس!</button>
                <button className="bg-purple-600 text-white px-2 py-1 rounded">احجز تذكرة المسرح</button>
                <button className="bg-blue-600 text-white px-2 py-1 rounded">قائمة وجبات الكانتين</button>
                <button className="bg-emerald-600 text-white px-2 py-1 rounded">أخبار رحلة الأهرامات</button>
              </div>

              {/* Huge distracting banner */}
              <div className="p-4 bg-gradient-to-r from-amber-700 to-rose-700 rounded-lg text-white text-center space-y-1">
                <h3 className="font-black text-sm">🎉 تهنئة خاصة لطلاب المسابقة الشعرية والموسيقية 🎉</h3>
                <p className="text-[11px] opacity-90">المدرسة تتقدم بأجمل التهاني لفريق الإذاعة المدرسية لحصولهم على المركز الأول!</p>
              </div>

              {/* Random Cluttered Elements */}
              <div className="grid grid-cols-3 gap-2 text-[10px]">
                <div className="p-2 bg-slate-800 rounded border border-slate-700">
                  <span className="font-bold text-sky-300 block mb-1">جدول حصص الأسبوع</span>
                  <p className="text-slate-400">تعديل مواعيد الفسحة الثانية يوم الثلاثاء القادم.</p>
                </div>
                <div className="p-2 bg-slate-800 rounded border border-slate-700">
                  <span className="font-bold text-amber-300 block mb-1">الزي المدرسي الموحد</span>
                  <p className="text-slate-400">يرجى الالتزام بالقميص الأبيض والبنطال الكحلي.</p>
                </div>
                <div className="p-2 bg-slate-800 rounded border border-slate-700">
                  <span className="font-bold text-emerald-300 block mb-1">اجتماع مجلس الآباء</span>
                  <p className="text-slate-400">الاجتماع يوم الخميس القادم الساعة الخامسة مساءً.</p>
                </div>
              </div>

              {/* Buried Hard-to-find grades link */}
              <div className="p-2 bg-slate-900/90 rounded border border-slate-800 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">
                  أرشيف الخدمات الإدارية والنتائج القديمة:
                </span>
                <button
                  onClick={() => setShowResult(true)}
                  className="text-[10px] text-slate-400 underline hover:text-white"
                >
                  اضغط هنا للبحث عن درجات الطلاب لشهر نوفمبر...
                </button>
              </div>

              {showResult && (
                <div className="p-3 bg-rose-950/40 border border-rose-800 rounded-lg text-xs text-rose-200">
                  ⚠️ <b>عفواً:</b> استغرقت وقتاً طويلاً جداً للوصول إلى هذا الرابط الصغير المدفون أسفل الصفحة المليئة بالإعلانات والأزرار العشوائية!
                </div>
              )}
            </div>
          ) : (
            /* Organized Clean UX Webpage */
            <div className="p-4 space-y-4 text-right" style={{ background: '#0a1020' }}>
              {/* Clean Navbar */}
              <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🏫</span>
                  <span className="font-black text-white text-sm">مدرسة الأمل الثانوية</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300 text-xs">
                  <span className="text-sky-400 font-bold border-b-2 border-sky-400 pb-0.5">بوابة أولياء الأمور</span>
                  <span className="hover:text-white cursor-pointer">الطلاب</span>
                  <span className="hover:text-white cursor-pointer">المعلمون</span>
                  <span className="hover:text-white cursor-pointer">عن المدرسة</span>
                </div>
                <span className="pill text-[10px] bg-sky-950 text-sky-300 border-sky-700">
                  العام الدراسي 2026/2027
                </span>
              </div>

              {/* Prominent High-Contrast Hero Card for Grades */}
              <div className="p-4 rounded-xl border border-sky-800 bg-gradient-to-l from-sky-950/80 to-blue-950/40 shadow-lg space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📊</span>
                    <div>
                      <h3 className="font-black text-white text-sm">استعلام درجات ونتائج اختبارات الطلاب</h3>
                      <span className="text-[11px] text-sky-200">خدمة مخصصة وسريعة لأولياء الأمور لمعرفة نتيجة امتحان الشهر فوراً</span>
                    </div>
                  </div>
                  <span className="pill text-[10px] font-bold bg-emerald-950 text-emerald-300 border-emerald-600">
                    متاحة الآن
                  </span>
                </div>

                <div className="flex gap-2 max-w-md">
                  <input
                    type="text"
                    placeholder="أدخل رقم جلوس الطالب (مثلاً: 2027)"
                    className="field flex-1 text-xs py-2 px-3 bg-slate-900 border-slate-700 text-white font-mono"
                    value={searchedId}
                    onChange={e => setSearchedId(e.target.value)}
                  />
                  <button
                    onClick={() => setShowResult(true)}
                    className="btn btn-primary text-xs py-2 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow"
                  >
                    عرض النتيجة فوراً ←
                  </button>
                </div>

                {showResult && (
                  <div className="p-3 bg-slate-900/90 border border-emerald-600 rounded-lg text-xs space-y-1.5 animate-fadeIn">
                    <div className="flex justify-between items-center text-emerald-400 font-bold border-b border-slate-800 pb-1">
                      <span>👤 الطالب: عمر أحمد مصطفى (الصف الثاني الثانوي)</span>
                      <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded">ناجح بتفوق 🌟</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-200 pt-1">
                      <div>برمجة وذكاء اصطناعي: <b className="text-emerald-400">50 / 50</b></div>
                      <div>رياضيات بحتة: <b className="text-emerald-400">48 / 50</b></div>
                      <div>فيزياء: <b className="text-emerald-400">47 / 50</b></div>
                    </div>
                  </div>
                )}
              </div>

              {/* Neatly grouped secondary links using Proximity & Alignment */}
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer">
                  <span className="font-bold text-slate-200 block mb-0.5">🚌 مواعيد حافلات المدرسة</span>
                  <span className="text-[10px] text-slate-400">خطوط السير وجداول التوصيل اليومية</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer">
                  <span className="font-bold text-slate-200 block mb-0.5">📅 جدول الحصص والامتحانات</span>
                  <span className="text-[10px] text-slate-400">مواعيد الاختبارات الدورية والإجازات</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-800 bg-slate-900/60 hover:border-slate-700 cursor-pointer">
                  <span className="font-bold text-slate-200 block mb-0.5">📞 التواصل مع إدارة المدرسة</span>
                  <span className="text-[10px] text-slate-400">أرقام الهواتف وساعات الاستقبال</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* User Reaction & Educational Takeaway Panel */}
        <div className="p-4 rounded-xl border bg-slate-900/90 border-slate-800 space-y-3 text-xs">
          <div className="border-b border-slate-800 pb-2">
            <span className="font-extrabold text-xs text-amber-400 block mb-1">
              👨‍💼 تقييم تجربة ولي الأمر (User Experience - UX):
            </span>
            <span className="text-[11px] text-slate-400">لاحظ مشاعر وسلوك الزائر بين الحالتين:</span>
          </div>

          {layoutMode === 'messy' ? (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-800 text-rose-200">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-rose-400">
                  <span className="text-xl">😫</span>
                  <span>حالة ولي الأمر: إحباط وتشتت شديد</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed italic">
                  «أنا داخل موقع المدرسة مخصوص علشان أعرف درجات ابني، لقيت الصفحة مليانة إعلانات وأزرار عشوائية ومش عارف أبدأ منين!»
                </p>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>زمن العثور على المعلومة:</span>
                  <span className="font-bold text-rose-400 font-mono">120 ثانية (مع إجهاد!)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>معدل سهولة الاستخدام (Usability):</span>
                  <span className="font-bold text-rose-400 font-mono">15% (سيئ جداً)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>التسلسل البصري (Hierarchy):</span>
                  <span className="font-bold text-rose-400">غائب تماماً</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-800 text-emerald-200">
                <div className="flex items-center gap-2 mb-1.5 font-bold text-emerald-400">
                  <span className="text-xl">😃</span>
                  <span>حالة ولي الأمر: رضا وسرعة فائقة</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed italic">
                  «أول ما فتحت الموقع لقيت قسم أولياء الأمور وزر درجات الطلاب في وجهي.. كتبت رقم الجلوس وعرفت النتيجة في أقل من 3 ثوانٍ!»
                </p>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>زمن العثور على المعلومة:</span>
                  <span className="font-bold text-emerald-400 font-mono">3 ثوانٍ فقط!</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>معدل سهولة الاستخدام (Usability):</span>
                  <span className="font-bold text-emerald-400 font-mono">100% (ممتاز)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-800">
                  <span>التسلسل البصري (Hierarchy):</span>
                  <span className="font-bold text-emerald-400">هرمي ومنطقي</span>
                </div>
              </div>
            </div>
          )}

          {/* Golden Curriculum Conclusion */}
          <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-900/60 text-amber-200 text-[11px] leading-relaxed">
            💡 <b>القاعدة الذهبية المعتمدة في المنهج:</b>
            <div className="font-extrabold text-amber-300 mt-1">
              «المشكلة هنا مش في المعلومات نفسها، لكن في طريقة تنظيمها وعرضها للمستخدم!»
            </div>
            <div className="text-slate-300 mt-1 text-[10px]">
              الدرس الأول ساعدنا نختار الوسيط المناسب (الموقع الإلكتروني)، والدرس الثاني يعلمنا كيف نصممه وننظم معلوماته ليكون سهل الاستخدام.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   1. PersonaExplorerLab: تفاعل بصري لمستكشف شخصية المستخدم (User Persona)
   ========================================================================= */
export function PersonaExplorerLab() {
  const [selectedPersona, setSelectedPersona] = useState<'school_parent' | 'amina' | 'karim'>('school_parent');
  const [activePillar, setActivePillar] = useState<'all' | 'demographics' | 'goals' | 'needs' | 'pain_points'>('all');
  const [showExamTrap, setShowExamTrap] = useState(false);

  const personas = {
    school_parent: {
      name: 'أستاذ أحمد مصطفى',
      title: 'ولي أمر طالب بالثانوية (٤٥ سنة)',
      avatar: '👨‍💼',
      tag: 'المفهوم الأول · من قصة موقع المدرسة',
      color: '#0284c7',
      bgTag: 'bg-sky-950 text-sky-300 border-sky-700',
      quote: '«أنا داخل موقع المدرسة مخصوص علشان أعرف درجات ابني في امتحان الشهر بسرعة، بدون ما أتوه في أزرار وإعلانات مشتتة!»',
      demographics: [
        { label: 'العمر والوظيفة', val: '٤٥ سنة · موظف حكومي' },
        { label: 'الخبرة التقنية', val: 'متوسطة (يستخدم الهاتف في أوقات الفراغ)' },
        { label: 'طريقة التصفح', val: 'شاشة الهاتف الذكي (Mobile First)' },
        { label: 'الهدف الرئيسي', val: 'استعلام سريع عن نتيجة ابنه الدراسية' },
      ],
      goals: [
        'معرفة درجات ابنه في اختبار شهر نوفمبر فور فتح الموقع.',
        'طباعة أو حفظ إشعار الدرجات كصورة على هاتفه.',
        'عدم إضاعة وقته في البحث داخل قوائم فرعية معقدة.',
      ],
      needs: [
        'زر مباشر وكبير في صدارة الصفحة: [استعلام درجات الطلاب].',
        'حقل بسيط لإدخال رقم جلوس الطالب فقط دون تسجيل حساب.',
        'ألوان مريحة وخطوط واضحة سهلة القراءة في ضوء النهار.',
      ],
      painPoints: [
        'الصفحات المكدسة بإعلانات الرحلات وقائمة أسعار المقصف.',
        'إخفاء رابط النتائج في أسفل الصفحة بخط باهت وصغير.',
        'طلب ملء استمارات طويلة وتأكيد البريد الإلكتروني.',
      ],
      designImpact: [
        'وضع بطاقة استعلام فورية للدرجات (Hero Section) أعلى الصفحة.',
        'إلغاء أي نوافذ منبثقة أو إعلانات تشتت ولي الأمر عند الدخول.',
        'توفير زر تحميل بنقرة واحدة لشهادة درجات الطالب بصيغة PDF.',
      ],
      mockupTitle: 'واجهة بوابة المدرسة (مخصصة لولي الأمر):',
      mockupElement: (
        <div className="p-3 rounded-lg bg-sky-950/40 border border-sky-800 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-sky-300">📊 استعلام نتائج اختبارات الطلاب</span>
            <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700 font-bold">مباشر</span>
          </div>
          <div className="flex gap-2">
            <input type="text" readOnly value="رقم الجلوس: 2027" className="field flex-1 text-[11px] py-1 px-2 bg-slate-900 border-slate-700 text-slate-300 font-mono" />
            <button className="btn btn-primary text-[11px] py-1 px-3 bg-emerald-600 text-white font-bold rounded-lg shadow">
              عرض النتيجة ←
            </button>
          </div>
        </div>
      ),
    },

    amina: {
      name: 'أمينة عبد الرحمن',
      title: 'ربة منزل وأم لطفلين (٤٢ سنة)',
      avatar: '👩‍🍳',
      tag: 'المفهوم الأول · دراسة حالة متجر الخضار',
      color: '#0284c7',
      bgTag: 'bg-amber-950 text-amber-300 border-amber-700',
      quote: '«أريد شراء خضار وفواكه طازجة أسبوعياً لعائلتي وتوصيلها للباب بدون تعقيد أو خطوات دفع مرهقة!»',
      demographics: [
        { label: 'العمر والوظيفة', val: '٤٢ سنة · ربة منزل' },
        { label: 'الخبرة التقنية', val: 'متوسطة (تستخدم الهاتف للواتساب والتسوق)' },
        { label: 'طريقة التصفح', val: 'شاشة الهاتف الذكي (Mobile First)' },
        { label: 'طريقة الدفع المفضلة', val: 'الدفع نقداً عند الاستلام (COD)' },
      ],
      goals: [
        'العثور السريع على الخضراوات العضوية الطازجة.',
        'إتمام الطلب في أقل من ٣ دقائق دون إنشاء حساب معقد.',
        'معرفة موعد وساعة وصول مندوب التوصيل بدقة.',
      ],
      needs: [
        'تصنيفات واضحة وكبيرة وصور واقعية للمنتجات الزراعية.',
        'أسعار الكيلو واضحة بتباين لوني عالي ومريح للعين.',
        'زر شراء مباشر وواضح (أضف للسلة بنقرة واحدة).',
      ],
      painPoints: [
        'النماذج الطويلة المعقدة التي تطلب بيانات غير ضرورية.',
        'غموض أسعار الشحن والتوصيل حتى اللحظة الأخيرة.',
        'الخطوط الصغيرة الباهتة غير المقروءة على شاشة الهاتف.',
      ],
      designImpact: [
        'وضع شريط تصنيفات رئيسي في أعلى الصفحة (خضار، فواكه، ورقيات).',
        'توفير خيار الشراء السريع كزائر دون تسجيل دخول إجباري.',
        'إتاحة خيار الدفع كاش عند الباب مع شارة أمان واضحة.',
      ],
      mockupTitle: 'واجهة متجر الخضار (مخصصة لربة المنزل):',
      mockupElement: (
        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-300">🍅 طماطم بلدي طازجة</span>
            <span className="font-bold text-emerald-400 text-sm">٢٥ ج / كجم</span>
          </div>
          <button className="btn btn-primary w-full text-[11px] py-1.5 bg-emerald-600 text-white font-bold rounded-lg shadow">
            شراء سريع بالدفع عند الاستلام كاش 🚚
          </button>
        </div>
      ),
    },

    karim: {
      name: 'كريم محمود',
      title: 'مهندس برمجيات ورياضي (٢٨ سنة)',
      avatar: '👨‍💻',
      tag: 'المفهوم الأول · دراسة حالة متجر الخضار',
      color: '#16a34a',
      bgTag: 'bg-emerald-950 text-emerald-300 border-emerald-700',
      quote: '«أهتم جداً بالقيمة الغذائية والمزارع المعتمدة، وأريد دفعاً إلكترونياً سريعاً وتتبعاً حياً للشحنة!»',
      demographics: [
        { label: 'العمر والوظيفة', val: '٢٨ سنة · مهندس برمجيات' },
        { label: 'الخبرة التقنية', val: 'متقدمة جداً (يتسوق يومياً عبر الإنترنت)' },
        { label: 'طريقة التصفح', val: 'الحاسوب المحمول وشاشات العمل الواسعة' },
        { label: 'طريقة الدفع المفضلة', val: 'البطاقات البنكية / المحافظ الرقمية (Apple Pay)' },
      ],
      goals: [
        'معرفة منشأ المزرعة وشهادات الجودة العضوية (Organic).',
        'جدولة اشتراك أسبوعي تلقائي لسلة الخضراوات الصحية.',
        'الحصول على فاتورة رقمية دقيقة وتتبع المندوب عبر الخريطة.',
      ],
      needs: [
        'فلاتر بحث متقدمة (عضوي، خالي من المبيدات، محلي).',
        'تفاصيل السعرات الحرارية والقيم الغذائية لكل منتج.',
        'بوابة دفع إلكتروني فائقة السرعة والأمان.',
      ],
      painPoints: [
        'غياب تفاصيل المنتج والمزرعة ومواصفات الجودة.',
        'عدم دعم الدفع الإلكتروني والاضطرار للتعامل بالنقد.',
        'بطء تحميل صفحات المنتجات على المتصفح.',
      ],
      designImpact: [
        'إضافة بطاقة معلومات للمنتج (المزرعة، شهادة العضوي، الوزن).',
        'دمج بوابات دفع بالبطاقة السريعة مع تأكيد فوري بالبريد.',
        'تصميم لوحة تحكم لإدارة الاشتراكات والتوصيل المتكرر.',
      ],
      mockupTitle: 'واجهة متجر الخضار (مخصصة للمهندس التقني):',
      mockupElement: (
        <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-800 text-xs space-y-2">
          <div className="flex justify-between items-center">
            <span className="font-bold text-emerald-300">🥑 أفوكادو عضوي معتمد (Bio)</span>
            <span className="font-bold text-emerald-400 text-sm">٩٠ ج / كجم</span>
          </div>
          <div className="flex gap-1.5 text-[10px] text-slate-300">
            <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">🌱 مزرعة وادي النطرون</span>
            <span className="px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700">⚡ 160 Kcal</span>
          </div>
          <button className="btn btn-primary w-full text-[11px] py-1.5 bg-sky-600 text-white font-bold rounded-lg shadow">
            اشتراك أسبوعي ودفع بـ Apple Pay 💳
          </button>
        </div>
      ),
    },
  };

  const current = personas[selectedPersona];

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg text-right" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Header & Persona Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="pill text-[10px] font-black bg-blue-950 text-blue-300 border-blue-700">
              المفهوم الأول من المفاهيم الستة
            </span>
            <span className="text-xs text-slate-400 font-bold">كتاب الوزارة والمنهج</span>
          </div>
          <h4 className="font-extrabold text-base text-white flex items-center gap-2">
            <span>👤 مستكشف شخصية المستخدم (User Persona): معرفة الزائر قبل التصميم</span>
          </h4>
        </div>

        {/* 3 Personas Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-300 ml-1">اختر الشخصية للمعاينة:</span>
          <button
            onClick={() => setSelectedPersona('school_parent')}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${selectedPersona === 'school_parent' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            👨‍💼 أستاذ أحمد (ولي الأمر)
          </button>
          <button
            onClick={() => setSelectedPersona('amina')}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${selectedPersona === 'amina' ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            👩‍🍳 أمينة (ربة منزل)
          </button>
          <button
            onClick={() => setSelectedPersona('karim')}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${selectedPersona === 'karim' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
          >
            👨‍💻 كريم (مهندس تقني)
          </button>
        </div>
      </div>

      {/* 4 Pillars Filter Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-2 mb-4 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-bold ml-1">تسليط الضوء على عناصر الـ Persona:</span>
          <button
            onClick={() => setActivePillar('all')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${activePillar === 'all' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            عرض الكل
          </button>
          <button
            onClick={() => setActivePillar('demographics')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${activePillar === 'demographics' ? 'bg-purple-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            📊 الديموغرافيا
          </button>
          <button
            onClick={() => setActivePillar('goals')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${activePillar === 'goals' ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            🎯 الأهداف
          </button>
          <button
            onClick={() => setActivePillar('needs')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${activePillar === 'needs' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            🛒 الاحتياجات
          </button>
          <button
            onClick={() => setActivePillar('pain_points')}
            className={`px-2.5 py-1 rounded-lg font-bold text-[11px] transition-all ${activePillar === 'pain_points' ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}`}
          >
            ⚠️ نقاط الألم
          </button>
        </div>

        {/* Exam Trap Alert Button */}
        <button
          onClick={() => setShowExamTrap(v => !v)}
          className="px-3 py-1 rounded-lg font-bold text-[11px] bg-amber-950/60 border border-amber-600 text-amber-300 hover:bg-amber-900/60 transition-all flex items-center gap-1"
        >
          <span>📌 سؤال علل والامتحان: أداء الخادم؟</span>
          <span>{showExamTrap ? '▲ إخفاء' : '▼ اكشف'}</span>
        </button>
      </div>

      {/* Interactive Exam Trap Drawer */}
      {showExamTrap && (
        <div className="mb-4 p-3.5 rounded-xl bg-amber-950/40 border border-amber-600 text-xs text-amber-200 animate-fadeIn space-y-1.5">
          <div className="flex items-center gap-2 font-black text-amber-300 text-sm">
            <span>❓ سؤال امتحان البكالوريا المعتمد:</span>
            <span>أي من الآتي لا يدخل في بناء شخصية المستخدم (User Persona)؟</span>
          </div>
          <p className="text-[12px] text-slate-200 leading-relaxed">
            <b>الإجابة الصحيحة:</b> <b>أداء خادم الموقع وسرعته التقنية (Server Performance)</b> لا يعتبر جزءاً من شخصية المستخدم!
            <br />
            <b>التعليل العلمي:</b> لأن شخصية المستخدم تمثل <b>الخصائص الإنسانية والسلوكية والنفسية</b> للزائر (عمره، وظيفته، أهدافه، ونقاط إحباطه)، بينما أداء وسرعة الخادم مواصفة فنية للأجهزة والشبكات تخص البنية التحتية للموقع.
          </p>
        </div>
      )}

      {/* Main 3-Column Persona Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
        {/* Column 1: Identity Card & Demographics */}
        <div
          className={`p-4 rounded-xl border flex flex-col justify-between transition-all ${activePillar === 'demographics' ? 'ring-2 ring-purple-500 bg-purple-950/20' : ''}`}
          style={{ background: '#0c1322', borderColor: '#1e2d48' }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-4xl p-2 rounded-2xl bg-slate-800/80 border border-slate-700">{current.avatar}</span>
              <div>
                <h3 className="font-extrabold text-base text-white">{current.name}</h3>
                <span className="text-xs text-slate-300">{current.title}</span>
              </div>
            </div>
            <span className={`pill text-[10px] font-bold py-0.5 px-2.5 mb-3 inline-block border ${current.bgTag}`}>
              {current.tag}
            </span>
            <div className="p-3 rounded-lg border bg-slate-900/80 border-slate-800 mb-3">
              <p className="text-xs text-amber-200 italic leading-relaxed">{current.quote}</p>
            </div>

            <div className="space-y-2 text-xs">
              <span className="font-bold text-purple-400 block border-b border-slate-800 pb-1 flex items-center justify-between">
                <span>📊 الخصائص الديموغرافية (Demographics):</span>
                <span className="text-[10px] text-slate-400">العنصر ١</span>
              </span>
              {current.demographics.map((d, i) => (
                <div key={i} className="flex justify-between items-center py-1 border-b border-slate-800/50 text-[11px]">
                  <span className="text-slate-400">{d.label}:</span>
                  <span className="font-bold text-slate-200">{d.val}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 p-2 rounded-lg bg-blue-950/30 border border-blue-900/50 text-[11px] text-blue-200">
            💡 <b>القاعدة:</b> شخصية المستخدم تمنع الجدل الشخصي، وتجعل الفريق يصمم بناءً على حقائق وليس تخمينات.
          </div>
        </div>

        {/* Column 2: Goals, Needs, and Pain Points */}
        <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ background: '#0c1322', borderColor: '#1e2d48' }}>
          <div className="space-y-3.5">
            {/* Goals */}
            <div className={`p-2 rounded-lg transition-all ${activePillar === 'goals' ? 'bg-sky-950/40 border border-sky-500' : ''}`}>
              <span className="font-extrabold text-xs text-sky-400 block mb-1 flex items-center justify-between">
                <span>🎯 أهداف المستخدم (Goals):</span>
                <span className="text-[10px] text-slate-400">العنصر ٢</span>
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {current.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Needs */}
            <div className={`p-2 rounded-lg transition-all ${activePillar === 'needs' ? 'bg-emerald-950/40 border border-emerald-500' : ''}`}>
              <span className="font-extrabold text-xs text-emerald-400 block mb-1 flex items-center justify-between">
                <span>🛒 الاحتياجات والتوقعات (Needs):</span>
                <span className="text-[10px] text-slate-400">العنصر ٣</span>
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {current.needs.map((n, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pain Points */}
            <div className={`p-2 rounded-lg transition-all ${activePillar === 'pain_points' ? 'bg-rose-950/40 border border-rose-500' : ''}`}>
              <span className="font-extrabold text-xs text-rose-400 block mb-1 flex items-center justify-between">
                <span>⚠️ نقاط الألم والإحباط (Pain Points):</span>
                <span className="text-[10px] text-slate-400">العنصر ٤</span>
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {current.painPoints.map((p, i) => (
                  <li key={i} className="flex items-start gap-1.5 leading-relaxed">
                    <span className="text-rose-400 font-bold">•</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-2 text-[10px] text-slate-400 border-t border-slate-800 pt-1.5">
            العناصر الأربعة تعمل معاً لتحديد معايير نجاح الموقع في اختبارات البكالوريا.
          </div>
        </div>

        {/* Column 3: Live UI Design Impact (UCD Translation) */}
        <div className="p-4 rounded-xl border flex flex-col justify-between" style={{ background: '#0a1020', borderColor: '#1e2d48' }}>
          <div>
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="font-extrabold text-xs text-amber-400">🎨 الترجمة إلى قرارات تصميم (UI Decisions):</span>
              <span className="pill text-[10px] font-bold bg-amber-950 text-amber-300 border-amber-800">UCD Translation</span>
            </div>

            <div className="space-y-2 text-xs mb-3">
              {current.designImpact.map((item, idx) => (
                <div key={idx} className="p-2 rounded-lg border bg-slate-900/80 border-slate-800 flex items-start gap-2">
                  <span className="text-emerald-400 font-bold text-xs mt-0.5">✓</span>
                  <span className="text-slate-200 leading-relaxed text-[11px]">{item}</span>
                </div>
              ))}
            </div>

            {/* Live Interactive UI Element Preview */}
            <div className="p-3 rounded-xl border border-slate-700 bg-slate-950">
              <span className="text-[10px] text-slate-400 block mb-2 font-mono">{current.mockupTitle}</span>
              {current.mockupElement}
            </div>
          </div>

          <div className="mt-3 text-[11px] text-slate-300 bg-slate-900 p-2 rounded-lg border border-slate-800 text-center">
            «نحن لا نصمم لأنفسنا ولا لأذواقنا، بل نصمم للمستخدمين وفق ما يحتاجونه!»
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. WireframeStudioLab: استوديو المخطط الهيكلي والتصميم النهائي
   ========================================================================= */
export function WireframeStudioLab() {
  const [mode, setMode] = useState<'wireframe' | 'final'>('wireframe');
  const [activeComponent, setActiveComponent] = useState<'all' | 'header' | 'hero' | 'grid' | 'cta'>('all');

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg text-right" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      {/* Studio Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">وضع العرض:</span>
          <button
            onClick={() => setMode('wireframe')}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${mode === 'wireframe' ? 'bg-slate-700 text-white shadow-md border border-slate-500' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
          >
            📐 المخطط الهيكلي (Wireframe Blueprint)
          </button>
          <button
            onClick={() => setMode('final')}
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${mode === 'final' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-900 text-slate-400 hover:text-white'}`}
          >
            🎨 التصميم البصري النهائي (Final UI)
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs">
          <span className="text-slate-400">تسليط الضوء على:</span>
          {(['all', 'header', 'hero', 'grid', 'cta'] as const).map(c => (
            <button
              key={c}
              onClick={() => setActiveComponent(c)}
              className={`px-2 py-1 rounded-lg text-[11px] font-bold transition-all ${activeComponent === c ? 'bg-sky-600 text-white' : 'bg-slate-800 text-slate-400'}`}
            >
              {c === 'all' ? 'الكل' : c === 'header' ? 'الترويسة' : c === 'hero' ? 'البانر' : c === 'grid' ? 'المنتجات' : 'الـ CTA'}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
        {/* Mockup Canvas */}
        <div className="lg:col-span-2 rounded-xl border overflow-hidden" style={{ background: mode === 'wireframe' ? '#f1f5f9' : '#0f172a', borderColor: '#334155' }}>
          {/* Browser Bar */}
          <div className="px-3 py-2 border-b flex items-center justify-between text-xs" style={{ background: mode === 'wireframe' ? '#e2e8f0' : '#1e293b', borderColor: mode === 'wireframe' ? '#cbd5e1' : '#334155' }}>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span className="text-[11px] font-mono mr-2" style={{ color: mode === 'wireframe' ? '#475569' : '#94a3b8' }}>
                https://fresh-farm-market.com
              </span>
            </div>
            <span className="font-bold text-[11px] px-2 py-0.5 rounded" style={{ background: mode === 'wireframe' ? '#cbd5e1' : '#0284c7', color: mode === 'wireframe' ? '#0f172a' : '#ffffff' }}>
              {mode === 'wireframe' ? 'مخطط هيكلي بالأبيض والأسود' : 'واجهة ملونة كاملة'}
            </span>
          </div>

          {/* Page Content */}
          <div className="p-4 space-y-3">
            {/* Header / Navbar */}
            <div
              className={`p-3 rounded-lg border transition-all flex items-center justify-between ${activeComponent === 'header' ? 'ring-2 ring-sky-500' : ''}`}
              style={{
                background: mode === 'wireframe' ? '#ffffff' : '#1e293b',
                borderColor: mode === 'wireframe' ? '#94a3b8' : '#3b82f6',
                borderStyle: mode === 'wireframe' ? 'dashed' : 'solid',
              }}
            >
              <div className="flex items-center gap-3">
                {mode === 'wireframe' ? (
                  <div className="w-8 h-8 rounded border-2 border-slate-400 bg-slate-200 flex items-center justify-center font-bold text-[10px] text-slate-700">
                    [شعار]
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 font-extrabold text-sm text-emerald-400">
                    <span className="text-xl">🥦</span>
                    <span>خيرات المزرعة</span>
                  </div>
                )}
                <div className="flex gap-2 text-xs">
                  {mode === 'wireframe' ? (
                    <>
                      <span className="px-2 py-1 bg-slate-100 border border-slate-300 text-slate-600 rounded text-[11px]">[الرئيسية]</span>
                      <span className="px-2 py-1 bg-slate-100 border border-slate-300 text-slate-600 rounded text-[11px]">[خضراوات]</span>
                      <span className="px-2 py-1 bg-slate-100 border border-slate-300 text-slate-600 rounded text-[11px]">[فواكه]</span>
                    </>
                  ) : (
                    <>
                      <span className="text-slate-200 hover:text-emerald-400 cursor-pointer font-bold">الرئيسية</span>
                      <span className="text-slate-400 hover:text-emerald-400 cursor-pointer">خضراوات طازجة</span>
                      <span className="text-slate-400 hover:text-emerald-400 cursor-pointer">سلال الفواكه</span>
                    </>
                  )}
                </div>
              </div>

              <div>
                {mode === 'wireframe' ? (
                  <span className="px-3 py-1 bg-slate-300 border border-slate-400 text-slate-800 rounded font-bold text-xs">[زر السلة]</span>
                ) : (
                  <button className="btn btn-primary text-xs py-1 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg shadow">
                    🛒 السلة (٣ عناصر)
                  </button>
                )}
              </div>
            </div>

            {/* Hero Banner */}
            <div
              className={`p-4 rounded-xl border text-center transition-all ${activeComponent === 'hero' ? 'ring-2 ring-sky-500' : ''}`}
              style={{
                background: mode === 'wireframe' ? '#e2e8f0' : 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
                borderColor: mode === 'wireframe' ? '#94a3b8' : '#059669',
                borderStyle: mode === 'wireframe' ? 'dashed' : 'solid',
                color: mode === 'wireframe' ? '#334155' : '#ffffff',
              }}
            >
              {mode === 'wireframe' ? (
                <div className="py-3 space-y-1.5">
                  <div className="font-extrabold text-sm text-slate-700">[عنوان ترويجي رئيسي H1: منتجات طازجة من المزرعة لبابك]</div>
                  <div className="text-xs text-slate-500">[نص توضيحي: توصيل خلال ساعتين وضمان استرجاع مجاني]</div>
                  <div className="pt-2">
                    <span className="px-4 py-1.5 bg-slate-400 text-slate-900 font-bold rounded text-xs inline-block">[زر إجراء CTA: تسوق العروض الآن]</span>
                  </div>
                </div>
              ) : (
                <div className="py-2 space-y-2">
                  <span className="pill text-[10px] font-bold bg-emerald-900/80 text-emerald-300 border-emerald-600">عروض موسم الحصاد 🌾</span>
                  <h2 className="font-black text-lg text-white">خضراوات وفواكه عضوية من المزرعة لباب بيتك</h2>
                  <p className="text-xs text-emerald-100 max-w-md mx-auto">توصيل سريع مبرد خلال ساعتين مع ضمان استبدال فوري للجودة الطازجة.</p>
                  <button className="btn text-xs py-1.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl shadow-lg">
                    تسوق عروض اليوم الحصرية ←
                  </button>
                </div>
              )}
            </div>

            {/* Products Grid */}
            <div
              className={`p-3 rounded-xl border transition-all ${activeComponent === 'grid' || activeComponent === 'cta' ? 'ring-2 ring-sky-500' : ''}`}
              style={{
                background: mode === 'wireframe' ? '#ffffff' : '#131e33',
                borderColor: mode === 'wireframe' ? '#cbd5e1' : '#1e293b',
              }}
            >
              <div className="text-xs font-bold mb-3" style={{ color: mode === 'wireframe' ? '#475569' : '#94a3b8' }}>
                {mode === 'wireframe' ? '[شبكة المنتجات الموصى بها - Product Cards Grid]' : 'أحدث المحاصيل المتاحة للطلب الآن:'}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { name: 'طماطم عضوية', icon: '🍅', price: '٢٥ ج', wPrice: '[25 L.E]' },
                  { name: 'خيار مزارع صغار', icon: '🥒', price: '١٨ ج', wPrice: '[18 L.E]' },
                  { name: 'جزر بلدي فاخر', icon: '🥕', price: '٢٠ ج', wPrice: '[20 L.E]' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border text-center flex flex-col justify-between"
                    style={{
                      background: mode === 'wireframe' ? '#f8fafc' : '#1e293b',
                      borderColor: mode === 'wireframe' ? '#94a3b8' : '#334155',
                      borderStyle: mode === 'wireframe' ? 'dashed' : 'solid',
                    }}
                  >
                    <div>
                      {mode === 'wireframe' ? (
                        <div className="w-16 h-14 mx-auto bg-slate-200 border border-slate-400 rounded flex items-center justify-center text-[10px] text-slate-600 mb-2">
                          [صورة المنتج]
                        </div>
                      ) : (
                        <div className="text-3xl mb-1">{item.icon}</div>
                      )}

                      <div className="font-bold text-xs" style={{ color: mode === 'wireframe' ? '#0f172a' : '#ffffff' }}>
                        {mode === 'wireframe' ? `[اسم المنتج: ${item.name}]` : item.name}
                      </div>

                      <div className="font-extrabold text-sm my-1" style={{ color: mode === 'wireframe' ? '#475569' : '#10b981' }}>
                        {mode === 'wireframe' ? item.wPrice : `${item.price} / كجم`}
                      </div>
                    </div>

                    <div className="pt-2">
                      {mode === 'wireframe' ? (
                        <div className="py-1 bg-slate-300 border border-slate-400 text-slate-800 text-[10px] font-bold rounded">
                          [زر CTA: أضف للسلة]
                        </div>
                      ) : (
                        <button className="btn btn-primary w-full text-xs py-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded shadow">
                          أضف للسلة +
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Info: Why Wireframe First? */}
        <div className="p-4 rounded-xl border bg-slate-900/90 border-slate-800 space-y-3 text-xs">
          <div className="border-b border-slate-800 pb-2">
            <span className="font-extrabold text-xs text-amber-400 block mb-1">
              {mode === 'wireframe' ? '📐 مميزات المخطط الهيكلي (Wireframe)' : '🎨 مميزات الواجهة النهائية (Final UI)'}
            </span>
            <span className="text-[11px] text-slate-400">سؤال علل في المنهج المعتمد</span>
          </div>

          <div className="space-y-2.5">
            <div className="p-2.5 rounded-lg border bg-blue-950/20 border-blue-900/50 text-blue-200">
              <span className="font-bold block mb-1">❓ علل: لماذا يصمم المخطط الهيكلي بالأبيض والأسود وبدون ألوان أو خطوط جمالية؟</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                <b>الإجابة النموذجية:</b> للتركيز على <b>هيكل الصفحة وتوزيع العناصر وأماكن الأزرار وسهولة الاستخدام</b> أولاً، وتجنب تشتيت العميل وفريق العمل بمناقشة الألوان ودرجات الخطوط والصور في مرحلة التخطيط الهيكلي الأولى.
              </p>
            </div>

            <div className="p-2.5 rounded-lg border bg-emerald-950/20 border-emerald-900/50 text-emerald-200">
              <span className="font-bold block mb-1">🏗️ تشبيه المخطط المعماري (Architectural Blueprint):</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                مثل المهندس المعماري الذي يرسم مخطط المبنى (الغرف، الأبواب، والممرات) قبل اختيار ألوان الطلاء والديكور، يصمم مبرمج الويب الـ Wireframe قبل الألوان!
              </p>
            </div>

            <div className="p-2.5 rounded-lg border bg-slate-950 border-slate-800 text-slate-300">
              <span className="font-bold block mb-1 text-sky-400">مكونات الـ Wireframe الأساسية:</span>
              <ul className="space-y-1 text-[11px]">
                <li>• صناديق نصوص ومربعات لتحديد موضع الصور.</li>
                <li>• أزرار إجراء (CTA) بأحجام مدروسة.</li>
                <li>• شريط التنقل ومسارات التصفح الأساسية.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. CrapPrinciplesLab: مختبر فحص مبادئ CRAP الأربعة
   ========================================================================= */
export function CrapPrinciplesLab() {
  const [contrastOn, setContrastOn] = useState(true);
  const [repetitionOn, setRepetitionOn] = useState(true);
  const [alignmentOn, setAlignmentOn] = useState(true);
  const [proximityOn, setProximityOn] = useState(true);

  // Compute CRAP score
  const score = (contrastOn ? 25 : 0) + (repetitionOn ? 25 : 0) + (alignmentOn ? 25 : 0) + (proximityOn ? 25 : 0);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg text-right" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Control Switches */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div>
          <span className="text-xs text-slate-400 block mb-1">مبادئ التصميم البصري الأربعة (CRAP Principles) - المنهج المعتمد:</span>
          <h4 className="font-extrabold text-base text-white">تحكم في مبادئ CRAP وشاهد التأثير المباشر على بطاقة المنتج 🔬</h4>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-300">درجة التوافق مع معايير التصميم:</span>
          <span className={`pill font-mono font-black text-xs py-1 px-3 ${score === 100 ? 'pill-safe bg-emerald-950 text-emerald-300 border-emerald-600' : score >= 50 ? 'bg-amber-950 text-amber-300 border-amber-600' : 'pill-danger bg-rose-950 text-rose-300 border-rose-600'}`}>
            {score}% {score === 100 ? 'تصميم مثالي ومريح!' : score >= 50 ? 'تصميم متوسط' : 'تصميم مشتت ومربك!'}
          </span>
        </div>
      </div>

      {/* 4 Principle Toggles */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
        {/* C - Contrast */}
        <button
          onClick={() => setContrastOn(v => !v)}
          className={`p-3 rounded-xl border text-right transition-all ${contrastOn ? 'bg-sky-950/60 border-sky-600 text-sky-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-extrabold text-xs">C · التباين (Contrast)</span>
            <span className={`w-2 h-2 rounded-full ${contrastOn ? 'bg-sky-400' : 'bg-slate-600'}`} />
          </div>
          <p className="text-[10px] leading-relaxed">
            {contrastOn ? '✓ زر الشراء بارز والنصوص مقروءة' : '⚠️ الألوان باهتة ولا تجذب العين'}
          </p>
        </button>

        {/* R - Repetition */}
        <button
          onClick={() => setRepetitionOn(v => !v)}
          className={`p-3 rounded-xl border text-right transition-all ${repetitionOn ? 'bg-purple-950/60 border-purple-600 text-purple-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-extrabold text-xs">R · التكرار (Repetition)</span>
            <span className={`w-2 h-2 rounded-full ${repetitionOn ? 'bg-purple-400' : 'bg-slate-600'}`} />
          </div>
          <p className="text-[10px] leading-relaxed">
            {repetitionOn ? '✓ هوية موحدة وخطوط وألوان متسقة' : '⚠️ أشكال وخطوط عشوائية غير متناسقة'}
          </p>
        </button>

        {/* A - Alignment */}
        <button
          onClick={() => setAlignmentOn(v => !v)}
          className={`p-3 rounded-xl border text-right transition-all ${alignmentOn ? 'bg-emerald-950/60 border-emerald-600 text-emerald-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-extrabold text-xs">A · المحاذاة (Alignment)</span>
            <span className={`w-2 h-2 rounded-full ${alignmentOn ? 'bg-emerald-400' : 'bg-slate-600'}`} />
          </div>
          <p className="text-[10px] leading-relaxed">
            {alignmentOn ? '✓ شبكة متناسقة وحواف مستقيمة' : '⚠️ عناصر متعرجة وفوضى بصرية'}
          </p>
        </button>

        {/* P - Proximity */}
        <button
          onClick={() => setProximityOn(v => !v)}
          className={`p-3 rounded-xl border text-right transition-all ${proximityOn ? 'bg-amber-950/60 border-amber-600 text-amber-200' : 'bg-slate-900 border-slate-800 text-slate-500'}`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-extrabold text-xs">P · التقارب (Proximity)</span>
            <span className={`w-2 h-2 rounded-full ${proximityOn ? 'bg-amber-400' : 'bg-slate-600'}`} />
          </div>
          <p className="text-[10px] leading-relaxed">
            {proximityOn ? '✓ تجميع السعر والصورة والزر معاً' : '⚠️ عناصر مشتتة ومتباعدة بلا رابط'}
          </p>
        </button>
      </div>

      {/* Demonstration Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
        {/* Left: Live Agricultural Product Card */}
        <div className="p-4 rounded-xl border flex flex-col items-center justify-center min-h-[360px]" style={{ background: '#070c18', borderColor: '#1e2d48' }}>
          <span className="text-[11px] text-slate-400 mb-3 block w-full text-right border-b border-slate-800 pb-1">
            🛒 كيف تظهر بطاقة المنتج للمشتري في متجر الخضار:
          </span>

          <div
            className="transition-all duration-300 w-full max-w-sm rounded-2xl border"
            style={{
              background: '#ffffff',
              borderColor: repetitionOn ? '#cbd5e1' : '#f43f5e',
              borderWidth: repetitionOn ? '1.5px' : '3px',
              padding: proximityOn ? '16px' : '8px',
              boxShadow: contrastOn ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : 'none',
              fontFamily: repetitionOn ? 'inherit' : 'cursive',
            }}
          >
            {/* Tag Badge */}
            <div style={{ textAlign: alignmentOn ? 'right' : 'center', marginBottom: proximityOn ? '8px' : '2px' }}>
              <span
                className="text-[10px] font-black px-2 py-0.5 rounded-full inline-block"
                style={{
                  background: contrastOn ? '#dcfce7' : '#f1f5f9',
                  color: contrastOn ? '#15803d' : '#94a3b8',
                }}
              >
                عضوي ١٠٠٪ · قطفة الصباح
              </span>
            </div>

            {/* Product Image */}
            <div
              className="rounded-xl flex items-center justify-center transition-all"
              style={{
                height: '110px',
                background: contrastOn ? 'linear-gradient(135deg, #fef3c7 0%, #ecfdf5 100%)' : '#f8fafc',
                border: repetitionOn ? '1px solid #e2e8f0' : '2px dashed #a855f7',
                marginBottom: proximityOn ? '12px' : '28px',
                marginLeft: alignmentOn ? '0' : '20px',
              }}
            >
              <span style={{ fontSize: contrastOn ? '56px' : '32px', filter: contrastOn ? 'none' : 'grayscale(80%) opacity(50%)' }}>
                🍓
              </span>
            </div>

            {/* Product Title */}
            <div style={{ textAlign: alignmentOn ? 'right' : 'left', marginBottom: proximityOn ? '4px' : '20px' }}>
              <h3
                className="font-black transition-all"
                style={{
                  fontSize: contrastOn ? '18px' : '12px',
                  color: contrastOn ? '#0f172a' : '#cbd5e1',
                  fontWeight: contrastOn ? 800 : 400,
                }}
              >
                فراولة سكري مزارع الإسماعيلية
              </h3>
            </div>

            {/* Description */}
            <div style={{ textAlign: alignmentOn ? 'right' : 'center', marginBottom: proximityOn ? '8px' : '24px' }}>
              <p
                style={{
                  fontSize: '11px',
                  color: contrastOn ? '#475569' : '#cbd5e1',
                  lineHeight: 1.4,
                }}
              >
                حبات منتقاة طازجة ومغسولة بعناية، غنية بمضادات الأكسدة وفيتامين C.
              </p>
            </div>

            {/* Price & Weight */}
            <div
              className="flex items-center justify-between transition-all"
              style={{
                marginBottom: proximityOn ? '12px' : '30px',
                flexDirection: alignmentOn ? 'row' : 'row-reverse',
              }}
            >
              <div style={{ textAlign: alignmentOn ? 'right' : 'left' }}>
                <span style={{ fontSize: '10px', color: '#64748b', display: 'block' }}>السعر للعلبة (٥٠٠ جم):</span>
                <span
                  style={{
                    fontSize: contrastOn ? '20px' : '12px',
                    fontWeight: 900,
                    color: contrastOn ? '#16a34a' : '#94a3b8',
                  }}
                >
                  ٣٥ جنيه
                </span>
              </div>
              <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-1 rounded">
                المتبقي ٨ علب
              </span>
            </div>

            {/* CTA Button */}
            <div style={{ textAlign: alignmentOn ? 'right' : 'center' }}>
              <button
                className="w-full font-black text-xs transition-all shadow-md"
                style={{
                  padding: proximityOn ? '10px 16px' : '4px 8px',
                  borderRadius: repetitionOn ? '12px' : '0px',
                  background: contrastOn ? '#16a34a' : '#e2e8f0',
                  color: contrastOn ? '#ffffff' : '#94a3b8',
                  border: repetitionOn ? 'none' : '3px dotted #f59e0b',
                  cursor: contrastOn ? 'pointer' : 'default',
                }}
              >
                {contrastOn ? '🛒 أضف للسلة الآن' : 'شراء (غير واضح)'}
              </button>
            </div>
          </div>
        </div>

        {/* Right: CRAP Analysis Table & Explanations */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-3 text-xs">
          <div className="border-b border-slate-800 pb-2">
            <span className="font-extrabold text-xs text-amber-400 block mb-1">
              📋 تحليل المنهج المعتمد لمبادئ CRAP في صفحة الويب:
            </span>
            <span className="text-[11px] text-slate-400">راجع كل مبدأ وكيف يؤثر على قرارات الشراء والتصفح:</span>
          </div>

          <div className="space-y-2 text-xs">
            {/* Contrast */}
            <div className={`p-2.5 rounded-lg border ${contrastOn ? 'bg-sky-950/30 border-sky-800 text-sky-200' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold">C · التباين (Contrast):</span>
                <span className="text-[10px] font-bold">{contrastOn ? 'نشط' : 'معطّل'}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                يبرز العناصر الرئيسية ويصنع تسلسلاً بصرياً فورياً. زر الشراء الأخضر المشع يوجه عين المشتري للنقر مباشرة، بينما غياب التباين يجعل البطاقة باهتة وغير قابلة للقراءة.
              </p>
            </div>

            {/* Repetition */}
            <div className={`p-2.5 rounded-lg border ${repetitionOn ? 'bg-purple-950/30 border-purple-800 text-purple-200' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold">R · التكرار (Repetition):</span>
                <span className="text-[10px] font-bold">{repetitionOn ? 'نشط' : 'معطّل'}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                يصنع اتساقاً ووحدة وهوية بصرية عبر المتجر بالكامل؛ استخدام نفس نمط الزوايا المنحنية، والخطوط، وأسلوب الأزرار يبني ألفة وثقة لدى الزائر.
              </p>
            </div>

            {/* Alignment */}
            <div className={`p-2.5 rounded-lg border ${alignmentOn ? 'bg-emerald-950/30 border-emerald-800 text-emerald-200' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold">A · المحاذاة (Alignment):</span>
                <span className="text-[10px] font-bold">{alignmentOn ? 'نشط' : 'معطّل'}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                المحاذاة للشبكة (Grid Alignment) تربط كل عنصر بخط بصري مستقيم مع باقي العناصر، مما يلغي الفوضى البصرية ويجعل التصفح مريحاً وسلساً.
              </p>
            </div>

            {/* Proximity */}
            <div className={`p-2.5 rounded-lg border ${proximityOn ? 'bg-amber-950/30 border-amber-800 text-amber-200' : 'bg-rose-950/30 border-rose-800 text-rose-300'}`}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold">P · التقارب (Proximity):</span>
                <span className="text-[10px] font-bold">{proximityOn ? 'نشط' : 'معطّل'}</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                تجميع العناصر المترابطة معاً (صورة الفراولة + الاسم + السعر + زر الشراء) مع ترك مساحات بيضاء حول البطاقة يفهم العقل تلقائياً أنها وحدة واحدة مستقلة.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
