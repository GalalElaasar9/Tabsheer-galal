// Board scenes · Unit 4 · Lesson 3 · Core Web Vitals, Concept Map, and Master Summary (Kitab El-Faez)
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  // -------------------------------------------------------------------------
  // FRAME 1 of part3: Google Lighthouse Core Web Vitals Performance Lab
  // -------------------------------------------------------------------------
  {
    id: 'core-web-vitals',
    title: 'مؤشرات أداء الويب الأساسية (Core Web Vitals)',
    scene: true,
    notes: (
      <>
        <p><b>مؤشرات أداء الويب الأساسية من Google (Core Web Vitals):</b></p>
        <p>ثلاثة معايير قياسية تعتمدها محركات البحث والمتصفحات لقياس سرعة واستقرار تجربة التصفح:</p>
        <ol>
          <li><b>LCP (Largest Contentful Paint):</b> زمن تحميل أكبر صورة أو نص يراه المستخدم (المثالي أقل من 2.5 ثانية).</li>
          <li><b>INP / FID (Interaction to Next Paint):</b> زمن استجابة الصفحة لنقرة وتفاعل المستخدم (المثالي أقل من 200 مللي ثانية).</li>
          <li><b>CLS (Cumulative Layout Shift):</b> استقرار العناصر على الشاشة ومنع قفز الأزرار فجأة (المثالي أقل من 0.1).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مختبر أداء جوجل · المعايير القياسية الثلاثة لتقييم سرعة واستقرار تجربة التصفح">
          مؤشرات أداء الويب الأساسية (Google Core Web Vitals) ⏱️⚡
        </Heading>

        {/* Lighthouse Audit Header HUD */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '10px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 font-black flex items-center justify-center border border-emerald-400 font-mono text-xs">
                  98
                </span>
                <span className="font-mono text-emerald-300 font-bold text-xs bg-slate-900/90 px-2 py-0.5 rounded border border-emerald-500/40">
                  LIGHTHOUSE PERFORMANCE: GOOD
                </span>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  معايير جوجل الثلاثة:
                </span>
                <span className="text-white text-sm font-bold">
                  «قياس هندسي دقيق لسرعة التحميل، والاستجابة اللحظية، والثبات البصري»
                </span>
              </div>
            </div>
            <span className="bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs px-3 py-1 rounded-full font-bold">
              تحدد ترتيب الموقع في محركات البحث SEO 🚀
            </span>
          </div>
        </Box>

        {/* 3 Lighthouse Speed Modules */}
        {/* Module 1: LCP */}
        <Box x={860} y={215} w={360} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  ⏱️ ١ · سرعة التحميل (LCP)
                </span>
                <span className="text-[10px] font-mono bg-blue-900/80 text-blue-200 px-2 py-0.5 rounded border border-blue-400">
                  Loading
                </span>
              </div>

              {/* Speed Gauge Meter */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-sky-500/40 mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] text-slate-400">زمن ظهور أكبر عنصر:</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">1.2s</span>
                </div>
                {/* Horizontal Performance Gauge */}
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '48%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span className="text-emerald-400 font-bold">المثالي: &lt; 2.5 ثانية</span>
                  <span className="text-rose-400">بطيء: &gt; 4.0 ثانية</span>
                </div>
              </div>

              {/* Exact Concept Rule Box */}
              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-600/60 text-xs space-y-1">
                <b className="text-sky-300 block">📌 Largest Contentful Paint:</b>
                <div className="text-slate-300 leading-snug">
                  يقيس زمن ظهور أكبر صورة أو كتلة نصية رئيسية يراها الزائر في الصفحة.
                </div>
                <div className="text-[10.5px] text-sky-200 font-bold pt-1 border-t border-blue-900">
                  💡 يتأثر بضغط حجم الصور وسرعة استجابة السيرفر.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              المحتوى الأهم يظهر أمام الزائر فوراً وبدون ملل!
            </div>
          </div>
        </Box>

        {/* Module 2: INP */}
        <Box x={460} y={215} w={360} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  ⚡ ٢ · سرعة الاستجابة (INP)
                </span>
                <span className="text-[10px] font-mono bg-emerald-900/80 text-emerald-200 px-2 py-0.5 rounded border border-emerald-400">
                  Interactivity
                </span>
              </div>

              {/* Latency Meter */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/40 mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] text-slate-400">زمن التفاعل مع النقرة:</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">45ms</span>
                </div>
                {/* Horizontal Performance Gauge */}
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '22%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span className="text-emerald-400 font-bold">المثالي: &lt; 200ms</span>
                  <span className="text-rose-400">بطيء: &gt; 500ms</span>
                </div>
              </div>

              {/* Exact Concept Rule Box */}
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-600/60 text-xs space-y-1">
                <b className="text-emerald-300 block">📌 Interaction to Next Paint:</b>
                <div className="text-slate-300 leading-snug">
                  يقيس التأخير الزمني بين ضغط الزائر على زر أو قائمة واستجابة الصفحة بصرياً.
                </div>
                <div className="text-[10.5px] text-emerald-200 font-bold pt-1 border-t border-emerald-900">
                  💡 يمنع تهنيج الموقع ويجعله خفيفاً وسلساً تحت اليد!
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              تفاعل لحظي يطمئن الزائر بأن الموقع يسمع نقراته!
            </div>
          </div>
        </Box>

        {/* Module 3: CLS */}
        <Box x={60} y={215} w={360} h={365} c="purple" fill="purple" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🛡️ ٣ · ثبات التخطيط (CLS)
                </span>
                <span className="text-[10px] font-mono bg-purple-900/80 text-purple-200 px-2 py-0.5 rounded border border-purple-400">
                  Stability
                </span>
              </div>

              {/* Layout Stability Meter */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-purple-500/40 mb-2">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-[11px] text-slate-400">معدل قفز العناصر:</span>
                  <span className="text-2xl font-black text-emerald-400 font-mono">0.02</span>
                </div>
                {/* Horizontal Performance Gauge */}
                <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden p-0.5 border border-slate-700">
                  <div className="bg-emerald-500 h-full rounded-full" style={{ width: '20%' }}></div>
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
                  <span className="text-emerald-400 font-bold">المثالي: &lt; 0.1 (ثابت)</span>
                  <span className="text-rose-400">سيئ: &gt; 0.25 (يقفز)</span>
                </div>
              </div>

              {/* Exact Concept Rule Box */}
              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-600/60 text-xs space-y-1">
                <b className="text-purple-300 block">📌 Cumulative Layout Shift:</b>
                <div className="text-slate-300 leading-snug">
                  يقيس الحركات المفاجئة للعناصر أثناء التحميل، مثل هبوط الزر لأسفل بسبب ظهور إعلان.
                </div>
                <div className="text-[10.5px] text-purple-200 font-bold pt-1 border-t border-purple-900">
                  💡 يمنع النقرات الخاطئة ويضمن راحة بصرية وثباتاً كاملاً!
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-purple)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              لا مفاجآت بصرية ولا أزرار تهرب من تحت يد الزائر!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={5}>
          🌐 <b>أهميتها لمحركات البحث (SEO):</b> المواقع التي تحقق اللون الأخضر في هذه المؤشرات الثلاثة ترقيها Google تلقائياً لقمة نتائج البحث!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // FRAME 2 of part3: Concept Map Tree
  // -------------------------------------------------------------------------
  {
    id: 'concept-map-u4l3',
    title: 'الخريطة الذهنية الشاملة لتقييم المواقع الإلكترونية',
    scene: true,
    notes: (
      <>
        <p><b>الخريطة الذهنية الشاملة لدرس طُرق تقييم المواقع:</b></p>
        <p>ملخص بصري متكامل يربط بين:</p>
        <ul>
          <li><b>التقييم النوعي (لماذا حدث السلوك؟):</b> اختبار قابلية الاستخدام (مراقبة العمليات الفعلية) · المقابلات (الاستماع المباشر) · التقييم الإرشادي (مراجعة الخبراء بالقواعد الثلاث: الاتساق، منع الأخطاء، وضوح حالة النظام).</li>
          <li><b>التقييم الكمي (ماذا وكم حدث بالأرقام؟):</b> تحليلات الويب (الوصول، التفاعل، النتائج) ومؤشراتها (PV، معدل الارتداد، CVR وتحديد المقام) · واختبارات A/B.</li>
          <li><b>الجمع بينهما:</b> الأرقام تكشف ما يحدث، والمستخدمون والخبراء يكشفون الأسباب!</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخريطة البصرية المتكاملة لكامل مفاهيم ومصطلحات الوحدة الرابعة - الدرس 3">
          الخريطة الذهنية الشاملة: طُرق تقييم المواقع الإلكترونية 🗺️
        </Heading>

        {/* Tree Container Box */}
        <Box x={60} y={115} w={1160} h={465} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, borderBottom: '2px solid rgba(255,255,255,0.2)', paddingBottom: '8px' }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🔍 طُرق تقييم المواقع الإلكترونية المعتمدة:
                </span>
                <span className="text-xs bg-blue-500/30 text-sky-200 px-3 py-1 rounded-full font-bold border border-blue-400">
                  خريطة المفاهيم المقررة
                </span>
              </div>

              {/* 2 Big Branches: Qualitative vs Quantitative */}
              <div className="grid grid-cols-2 gap-4">
                {/* Branch 1: Qualitative */}
                <div className="p-3.5 rounded-xl bg-purple-950/70 border-2 border-purple-500 space-y-2">
                  <div className="flex items-center justify-between border-b border-purple-700/60 pb-1.5">
                    <span className="font-bold text-base text-purple-200 flex items-center gap-1.5">
                      <span>🧠</span>
                      <span>التقييم النوعي (لماذا؟)</span>
                    </span>
                    <span className="text-[11px] bg-purple-900 px-2 py-0.5 rounded text-purple-300 font-bold">
                      فهم تفصيلي وملاحظة
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-200">
                    <div className="p-1.5 rounded bg-slate-900 border border-purple-800">
                      <b>١ · اختبار قابلية الاستخدام:</b> مراقبة حية للمستخدمين أثناء أداء مهام محددة.
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-purple-800">
                      <b>٢ · المقابلات الشخصية:</b> الاستماع المباشر لآراء ومشاعر المستخدمين (5 أسئلة).
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-purple-800">
                      <b>٣ · التقييم الإرشادي:</b> فحص الخبراء بالقواعد الثلاث (الاتساق، منع الخطأ، وضوح الحالة).
                    </div>
                  </div>
                </div>

                {/* Branch 2: Quantitative */}
                <div className="p-3.5 rounded-xl bg-emerald-950/70 border-2 border-emerald-500 space-y-2">
                  <div className="flex items-center justify-between border-b border-emerald-700/60 pb-1.5">
                    <span className="font-bold text-base text-emerald-200 flex items-center gap-1.5">
                      <span>📊</span>
                      <span>التقييم الكمي (كم؟)</span>
                    </span>
                    <span className="text-[11px] bg-emerald-900 px-2 py-0.5 rounded text-emerald-300 font-bold">
                      قياس بالأرقام والنتائج
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-200">
                    <div className="p-1.5 rounded bg-slate-900 border border-emerald-800">
                      <b>١ · تحليلات الويب:</b> قياس الوصول والتفاعل والنتائج (PV، الارتداد، CVR).
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-emerald-800">
                      <b>٢ · اختبارات A/B:</b> مقارنة نسختين بالأدلة الإحصائية لتحديد الأفضل تحويلاً.
                    </div>
                    <div className="p-1.5 rounded bg-slate-900 border border-emerald-800">
                      <b>٣ · مؤشرات أداء الويب:</b> قياس هندسي لسرعة التحميل والاستجابة (LCP, INP, CLS).
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Synergy Connector */}
            <div className="mt-3 p-2.5 rounded-xl bg-gradient-to-r from-purple-900/40 via-slate-900 to-emerald-900/40 border border-slate-700 text-center text-xs">
              <span className="text-amber-300 font-bold">✨ قوة التكامل: </span>
              <span className="text-white">الأرقام تصف الظاهرة وتحدد أين المشكلة، والمقابلات ومراجعة الخبراء تكشف أسبابها وتقدم الحل!</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={2}>
          🌟 <b>القاعدة الذهبية:</b> التقييم الكمي يقول ماذا يحدث؟ وكم يحدث؟ والتقييم النوعي يوضح لماذا يحدث ذلك؟ وكيف يشعر المستخدم!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // FRAME 3 of part3: Celebration & Mastery Summary
  // -------------------------------------------------------------------------
  {
    id: 'ending-u4l3',
    title: 'خاتمة الدرس وشهادة إتقان تقييم المواقع الإلكترونية',
    scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الثالث من الوحدة الرابعة: طُرق تقييم المواقع الإلكترونية (بكالوريا 2027).</b></p>
        <p><b>أهم ما أتقنتموه في هذا الدرس:</b></p>
        <ul>
          <li>التفرقة الحاسمة بين التقييم النوعي (لماذا؟) والتقييم الكمي (كم؟).</li>
          <li>تفسير مؤشرات تحليلات الويب (PV، ومعدل الارتداد، ومعدل التحويل مع تحديد المقام).</li>
          <li>تطبيق القواعد الإرشادية الثلاث (الاتساق، منع الأخطاء، وضوح حالة النظام).</li>
          <li>فهم اختبارات A/B ومؤشرات سرعة التصفح Core Web Vitals.</li>
          <li>اتخاذ قرارات تطوير واعية بالجمع بين لغة الأرقام وأصوات المستخدمين.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تهانينا! أتقنتم جميع المفاهيم والمهارات المقررة لتقييم واجهات ومواقع الويب">
          شهادة إتقان: طُرق تقييم المواقع الإلكترونية 🎓🏆
        </Heading>

        {/* Big Certificate Container */}
        <Box x={60} y={115} w={1160} h={465} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '24px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div className="text-4xl mb-2">🎉 🏆 🌟</div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 8 }}>
                مبروك يا بطل! أتقنت بنجاح درس طُرق تقييم المواقع الإلكترونية
              </div>
              <div style={{ fontSize: 16, color: 'var(--pen-ink)', opacity: 0.9, marginBottom: 16 }}>
                الصف الثاني الثانوي · بكالوريا 2027 · الوحدة الرابعة: تصميم وتطوير المواقع الإلكترونية
              </div>

              {/* 5 Badges of Mastery */}
              <div className="grid grid-cols-5 gap-3 max-w-4xl mx-auto">
                <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/50 shadow">
                  <div className="text-2xl mb-1">🧠</div>
                  <b className="text-purple-300 text-xs block">النوعي والكمي</b>
                  <span className="text-[10px] text-slate-400">التفرقة والتكامل</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/50 shadow">
                  <div className="text-2xl mb-1">📊</div>
                  <b className="text-emerald-300 text-xs block">تحليلات الويب</b>
                  <span className="text-[10px] text-slate-400">PV · ارتداد · CVR</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-blue-500/50 shadow">
                  <div className="text-2xl mb-1">📋</div>
                  <b className="text-blue-300 text-xs block">التقييم الإرشادي</b>
                  <span className="text-[10px] text-slate-400">القواعد الثلاث</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-amber-500/50 shadow">
                  <div className="text-2xl mb-1">🅰️</div>
                  <b className="text-amber-300 text-xs block">اختبارات A/B</b>
                  <span className="text-[10px] text-slate-400">حسم التصميم رقمياً</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900 border border-rose-500/50 shadow">
                  <div className="text-2xl mb-1">⚡</div>
                  <b className="text-rose-300 text-xs block">سرعة التصفح</b>
                  <span className="text-[10px] text-slate-400">Core Web Vitals</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 14, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 10 }}>
              جاهزون الآن لخوض بنك أسئلة الامتحانات والتقييم النهائي بأعلى درجات الثقة والتميز! ✨
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="purple" fill="purple" size={17} tc="ink" at={2}>
          🚀 <b>الخطوة القادمة:</b> اضغط الزر التالي للانتقال إلى بنك أسئلة الامتحانات والأنشطة التطبيقية المقيّمة!
        </Box>
      </Scene>
    ),
  },
];
