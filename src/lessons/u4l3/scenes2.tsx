// Board scenes · Unit 4 · Lesson 3 · Web Analytics & Metrics (PV, Bounce, CVR), Heuristic Evaluation & 3 Golden Rules
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  // -------------------------------------------------------------------------
  // SLIDE 13 (part2[0]): Web Analytics Core Concept, Question, Tripartite Synergy, and E-Commerce Example
  // -------------------------------------------------------------------------
  {
    id: 'analytics-concept',
    title: '١ · مفهوم تحليلات الويب: قياس الأداء بالأرقام وثلاثية الوصول والتفاعل والنتائج 📊',
    scene: true,
    notes: (
      <>
        <p><b>الجزء الثاني: المؤشرات الرئيسية في تحليلات الويب</b></p>
        <p><b>سؤال مهم:</b> لو عندنا موقع إلكتروني، إزاي نقيس أداءه بالأرقام؟</p>
        <p><b>الإجابة:</b> باستخدام تحليلات الويب (Web Analytics).</p>
        <hr />
        <p><b>1. تحليلات الويب Web Analytics (تعريف الكتاب):</b></p>
        <p>جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج. وهي إحدى أدوات التقييم الكمي، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.</p>
        <p><b>توضيح:</b> يعني بنجمع بيانات عن استخدام الناس للموقع ونحللها علشان نعرف الموقع بيؤدي وظيفته ولا لأ.</p>
        <ul>
          <li><b>الوصول:</b> كم شخصًا وصل إلى الموقع؟</li>
          <li><b>التفاعل:</b> ماذا فعل الزوار داخل الموقع؟</li>
          <li><b>النتائج:</b> هل حقق الموقع الهدف المطلوب، مثل التسجيل أو الشراء؟</li>
        </ul>
        <hr />
        <p><b>لماذا تُعد تحليلات الويب تقييمًا كميًا؟</b></p>
        <p>لأنها تعتمد على الأرقام والبيانات، مثل: عدد الزيارات، عدد مشاهدات الصفحات، معدل الارتداد، معدل التحويل. لذلك نقول: تحليلات الويب ⬅️ تقييم كمي ⬅️ يعتمد على الأرقام.</p>
        <hr />
        <p><b>مثال عملي: متجر إلكتروني:</b></p>
        <p>لو عندنا متجر إلكتروني، نقدر نعرف:</p>
        <ul>
          <li>عدد الأشخاص الذين زاروا المتجر.</li>
          <li>عدد مرات مشاهدة المنتجات.</li>
          <li>عدد الأشخاص الذين اشتروا.</li>
          <li>عدد الأشخاص الذين غادروا الموقع.</li>
        </ul>
        <hr />
        <p><b>ملاحظة مهمة:</b> ليس بالضرورة أن تكون أسماء المقاييس أو طريقة حسابها متطابقة في كل أدوات التحليل؛ فقد تختلف حسب الأداة وإعداداتها.</p>
        <p><b>المعادلة:</b> تحليلات الويب = جمع + قياس + تحليل بيانات استخدام الموقع؛ لفهم الوصول والتفاعل والنتائج. وهي إحدى أدوات التقييم الكمي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الجزء الثاني: المؤشرات الرئيسية في تحليلات الويب · قياس أداء الموقع بالأرقام وثلاثية الوصول والتفاعل والنتائج">
          ١ · مفهوم تحليلات الويب: قياس أداء الموقع بالأرقام 📊
        </Heading>

        {/* Top: Question & Book Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 3 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                  الجزء الثاني: المؤشرات الرئيسية في تحليلات الويب
                </span>
                <span style={{ fontSize: 16.5, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ❓ لو عندنا موقع إلكتروني، إزاي نقيس أداءه بالأرقام؟
                </span>
              </div>
              <span className="text-emerald-300 font-bold text-xs bg-slate-900 px-2.5 py-0.5 rounded border border-emerald-500/50">
                الإجابة: تحليلات الويب (Web Analytics)
              </span>
            </div>

            <div style={{ fontSize: 16.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج. وهي إحدى أدوات التقييم الكمي، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.»
            </div>
          </div>
        </Box>

        {/* Right Card: Understanding Web Analytics & Dimensions */}
        <Box x={660} y={225} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  1. تحليلات الويب Web Analytics
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  المفهوم والأبعاد 📈
                </span>
              </div>

              {/* Exact Clarification Quote */}
              <div className="p-2.5 rounded-xl bg-amber-950/70 border border-amber-500/60 mb-2 text-xs text-amber-100 font-bold leading-relaxed">
                «يعني بنجمع بيانات عن استخدام الناس للموقع ونحللها علشان نعرف الموقع بيؤدي وظيفته ولا لأ.»
              </div>

              {/* 3 Core Dimensions */}
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 space-y-1 text-xs mb-2 shadow">
                <div className="text-[11px] font-bold text-slate-300 mb-0.5">المقصود بتحليلات الويب، أننا نجمع بيانات وأرقام لنعرف:</div>
                <div className="flex items-center justify-between p-1 px-2 rounded bg-slate-950 border-r-4 border-sky-500">
                  <span className="font-bold text-sky-300">🌐 الوصول:</span>
                  <span className="text-slate-200">كم شخصًا وصل إلى الموقع؟</span>
                </div>
                <div className="flex items-center justify-between p-1 px-2 rounded bg-slate-950 border-r-4 border-amber-500">
                  <span className="font-bold text-amber-300">🖱️ التفاعل:</span>
                  <span className="text-slate-200">ماذا فعل الزوار داخل الموقع؟</span>
                </div>
                <div className="flex items-center justify-between p-1 px-2 rounded bg-slate-950 border-r-4 border-emerald-500">
                  <span className="font-bold text-emerald-300">🎯 النتائج:</span>
                  <span className="text-slate-200">هل حقق الموقع الهدف المطلوب، مثل التسجيل أو الشراء؟</span>
                </div>
              </div>

              {/* Why Quantitative */}
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] leading-relaxed">
                <b className="text-amber-300">لماذا تُعد تقييمًا كميًا؟</b> لأنها تعتمد على الأرقام والبيانات (زيارات، مشاهدات، ارتداد، تحويل).
                <div className="text-emerald-400 font-bold text-center mt-0.5 font-mono">
                  تحليلات الويب ⬅️ تقييم كمي ⬅️ يعتمد على الأرقام
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>رصد الوصول والتفاعل والنتائج بدقة رقمية!</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">ثلاثية الأبعاد 🎯</span>
            </div>
          </div>
        </Box>

        {/* Left Card: E-Commerce Practical Example (4 Points) & Important Note */}
        <Box x={60} y={225} w={580} h={365} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مثال: متجر إلكتروني 🛒
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  تطبيق عملي
                </span>
              </div>

              <div className="p-2 rounded-lg bg-blue-950/70 border border-blue-500/60 text-xs text-sky-200 mb-2 leading-relaxed">
                لو عندنا متجر إلكتروني، نقدر نعرف:
              </div>

              {/* The 4 Exact Points from Image 2 */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-sky-500 shadow flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">الوصول</div>
                    <div className="font-bold text-slate-100 text-xs">• عدد الأشخاص الذين زاروا المتجر.</div>
                  </div>
                  <span className="text-base mr-1">👥</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-purple-500 shadow flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">التفاعل</div>
                    <div className="font-bold text-slate-100 text-xs">• عدد مرات مشاهدة المنتجات.</div>
                  </div>
                  <span className="text-base mr-1">👀</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">النتائج</div>
                    <div className="font-bold text-slate-100 text-xs">• عدد الأشخاص الذين اشتروا.</div>
                  </div>
                  <span className="text-base mr-1">🛍️</span>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-rose-500 shadow flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-400">الارتداد</div>
                    <div className="font-bold text-slate-100 text-xs">• عدد الأشخاص الذين غادروا الموقع.</div>
                  </div>
                  <span className="text-base mr-1">🏃‍♂️</span>
                </div>
              </div>

              {/* Important Note from Image 1 */}
              <div className="p-2 rounded-xl bg-slate-950 border border-amber-600/50 text-[11px] text-slate-300 leading-snug">
                📌 <b className="text-amber-300">ملاحظة مهمة:</b> ليس بالضرورة أن تكون أسماء المقاييس أو طريقة حسابها متطابقة في كل أدوات التحليل؛ فقد تختلف حسب الأداة وإعداداتها.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>تحليل الأرقام يكشف هل الموقع يؤدي وظيفته بنجاح!</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">تطبيق المتجر</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner: The Golden Formula from Image 1 */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>تحليلات الويب = جمع + قياس + تحليل بيانات استخدام الموقع؛ لفهم الوصول والتفاعل والنتائج، وهي إحدى أدوات التقييم الكمي!</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 14 (part2[1]): Metric 1: PV - Page Views (مشاهدات الصفحة)
  // -------------------------------------------------------------------------
  {
    id: 'metric-pv',
    title: '٢ · مؤشر PV - مشاهدات الصفحة (Page Views) 👁️',
    scene: true,
    notes: (
      <>
        <p><b>2. مؤشر PV – مشاهدات الصفحة:</b></p>
        <p><b>PV:</b> اختصار Page Views.</p>
        <p><b>التعريف المعتمد:</b> هو إجمالي عدد مرات مشاهدة صفحة معينة.</p>
        <p><b>نص الكتاب المعتمد:</b> «يحسب إجمالي مرات المشاهدة، ويشمل المشاهدات المتكررة، وليس عدد الأشخاص الزائرين. يمكن لزائر واحد أن يشاهد مرات عديدة.»</p>
        <hr />
        <p><b>مثال 1:</b> لو شخص واحد دخل صفحة المنتج 4 مرات، يتم احتساب 4 مشاهدات للصفحة.</p>
        <p><b>مثال توضيحي (صفحة منتج في متجر إلكتروني):</b></p>
        <p>عدد مرات المشاهدة: 100.</p>
        <p>قد يكون عدد الزوار أقل من 100؛ لأن الزائر الواحد يستطيع مشاهدة الصفحة أكثر من مرة.</p>
        <hr />
        <p><b>ركز في الفرق:</b></p>
        <ul>
          <li>PV يحسب مرات المشاهدة.</li>
          <li>مش عدد الأشخاص الذين زاروا الصفحة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · إجمالي عدد مرات مشاهدة صفحة معينة ورصد التكرار">
          ٢ · مؤشر PV – مشاهدات الصفحة (Page Views) 👁️
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={102} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 3 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-bold border border-blue-400">
                👁️ 2. مؤشر PV
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                Page Views – مشاهدات الصفحة (PV اختصار Page Views)
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «هو إجمالي عدد مرات مشاهدة صفحة معينة.»
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 4 }}>
              «يحسب إجمالي مرات المشاهدة، ويشمل المشاهدات المتكررة، وليس عدد الأشخاص الزائرين. يمكن لزائر واحد أن يشاهد مرات عديدة.»
            </div>
          </div>
        </Box>

        {/* Right Card: Concept, Meaning & The Golden Distinction */}
        <Box x={660} y={222} w={560} h={368} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  المفهوم وطريقة الحساب
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  إجمالي المشاهدات 📊
                </span>
              </div>

              {/* Exact Text from Image 2 */}
              <div className="p-3 rounded-xl bg-blue-950/70 border border-blue-500/60 mb-2.5 text-xs text-sky-100 font-bold leading-relaxed">
                يعني إجمالي عدد مرات مشاهدة صفحة معينة.
              </div>

              {/* Exact Example from Image 1 */}
              <div className="p-3 rounded-xl bg-slate-900 border-2 border-slate-700 mb-2.5 text-xs text-slate-200">
                <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>مثال عملي:</span>
                </div>
                <div className="text-slate-100 leading-relaxed font-bold">
                  لو شخص واحد دخل صفحة المنتج 4 مرات، يتم احتساب <span className="text-sky-300 font-mono text-sm">4 مشاهدات</span> للصفحة.
                </div>
              </div>

              {/* Exact Distinction Box from Image 2 */}
              <div className="p-3 rounded-xl bg-slate-950 border-2 border-sky-500/70 text-xs shadow-lg">
                <div className="font-black text-amber-300 mb-1.5 text-sm flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>ركز في الفرق:</span>
                </div>
                <div className="space-y-1.5 text-xs font-bold">
                  <div className="flex items-center gap-2 text-emerald-300">
                    <span>•</span>
                    <span>PV يحسب مرات المشاهدة.</span>
                  </div>
                  <div className="flex items-center gap-2 text-rose-300">
                    <span>•</span>
                    <span>مش عدد الأشخاص الذين زاروا الصفحة.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>يحسب التكرار ولا يساوي عدد الأشخاص الزائرين!</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">قاعدة PV</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Visual Progress Bar & 100 PVs Demonstration (from Image 2) */}
        <Box x={60} y={222} w={580} h={368} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مثال توضيحي
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  متجر إلكتروني 🛒
                </span>
              </div>

              {/* Exact Visual Container matching Image 2 */}
              <div className="p-4 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-2xl mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-white text-sm">صفحة منتج في متجر إلكتروني</span>
                  <span className="text-xs text-slate-400 font-mono">store.com/item</span>
                </div>

                <div className="text-xs text-slate-300 mb-2 font-bold">
                  عدد مرات المشاهدة
                </div>

                {/* Progress Bar with Number 100 */}
                <div className="flex items-center gap-3 my-2">
                  <span className="text-2xl font-black text-sky-400 font-mono">100</span>
                  <div className="flex-1 bg-slate-800 rounded-full h-4 p-0.5 border border-slate-700 overflow-hidden shadow-inner">
                    <div
                      className="bg-gradient-to-r from-sky-500 via-sky-400 to-cyan-300 h-full rounded-full shadow-lg"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>

                {/* Exact Text Under Bar from Image 2 */}
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-amber-300 font-bold leading-relaxed mt-2.5">
                  «قد يكون عدد الزوار أقل من 100؛ لأن الزائر الواحد يستطيع مشاهدة الصفحة أكثر من مرة.»
                </div>
              </div>

              {/* Numerical Breakdown Scenario */}
              <div className="p-2.5 rounded-xl bg-blue-950/60 border border-blue-500/50 text-xs text-sky-200">
                <div className="flex justify-between items-center font-bold">
                  <span>💡 سيناريو واقعي:</span>
                  <span className="text-amber-300 font-mono">25 زائراً × 4 مشاهدات = 100 PVs</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  الموقع رصد 100 مشاهدة كاملة بالرغم من أن الزوار الفعليين هم 25 شخصاً فقط!
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>عدد مرات فتح الصفحة قد يعود لعدد زوار أقل بكثير!</span>
              <span className="p-1 px-3 rounded bg-sky-500/20 text-sky-300 font-bold text-xs">100 PVs 📈</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>قاعدة PV:</b> مؤشر PV يحسب إجمالي مرات مشاهدة وفتح الصفحة بما يشمل التكرار، ولا يساوي أبداً عدد الأشخاص الذين زاروا الصفحة!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 15 (part2[2]): Metric 2: Bounce Rate (أولاً: المفهوم والمثال العملي)
  // -------------------------------------------------------------------------
  {
    id: 'metric-bounce-rate-concept',
    title: '٣ · مؤشر معدل الارتداد (Bounce Rate): أولاً · المفهوم والمثال العملي ↩️',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: يعني إيه معدل الارتداد؟</b></p>
        <p><b>التعريف المعتمد:</b> معدل الارتداد هو مؤشر بيقيس نسبة الزوار الذين يدخلون إلى صفحة في الموقع، ثم يغادرون دون تحقيق تفاعل يُعتبر تفاعلاً مهماً وفقاً لطريقة قياس الأداة المستخدمة.</p>
        <p><b>بمعنى أبسط:</b> الزائر دخل الموقع وخرج منه دون أن يتفاعل بالشكل الذي يعتبره الموقع تفاعلاً مهماً.</p>
        <hr />
        <p><b>مثال عملي:</b> تخيل إن عندنا موقع تعليمي، وعليه درس بعنوان «مقدمة في البرمجة».</p>
        <p>دخل الموقع 100 زائر، وكانت النتائج كالتالي:</p>
        <ul>
          <li>40 زائر دخلوا صفحة الدرس وغادروا دون تفاعل مهم.</li>
          <li>60 زائر تفاعلوا مع الموقع، مثل الانتقال لصفحة أخرى أو تنفيذ تفاعل يُحتسب في التحليل.</li>
        </ul>
        <p><b>إذن معدل الارتداد في هذا المثال:</b> (40 / 100) × 100 = 40%.</p>
        <p>يعني معدل الارتداد = 40%.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · أولاً: مفهوم معدل الارتداد ومثال الموقع التعليمي بالأرقام">
          ٣ · مؤشر معدل الارتداد (Bounce Rate): أولاً · المفهوم والمثال العملي ↩️
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                ↩️ أولاً: يعني إيه معدل الارتداد؟
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                Bounce Rate – معدل الارتداد
              </span>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «هو مؤشر بيقيس نسبة الزوار الذين يدخلون إلى صفحة في الموقع، ثم يغادرون دون تحقيق تفاعل يُعتبر تفاعلاً مهماً وفقاً لطريقة قياس الأداة المستخدمة.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              «بمعنى أبسط: الزائر دخل الموقع وخرج منه دون أن يتفاعل بالشكل الذي يعتبره الموقع تفاعلاً مهماً.»
            </div>
          </div>
        </Box>

        {/* Right Card: Educational Website Case */}
        <Box x={660} y={220} w={560} h={370} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  مثال عملي: موقع تعليمي 💻
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  درس برمجة
                </span>
              </div>

              {/* Exact Text from Image 1 */}
              <div className="p-2 rounded-lg bg-amber-950/70 border border-amber-500/60 mb-2.5 text-xs text-amber-100 font-bold leading-relaxed">
                تخيل إن عندنا موقع تعليمي، وعليه درس بعنوان «مقدمة في البرمجة».
              </div>

              {/* Website Browser Mockup */}
              <div className="p-3 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-xl">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">edu-academy.com/coding-intro</span>
                  <span className="text-[10px] bg-slate-800 text-sky-300 px-2 py-0.5 rounded">درس مجاني</span>
                </div>

                <div className="p-3 rounded-xl bg-gradient-to-br from-slate-900 to-indigo-950 border border-indigo-500/30 text-center">
                  <div className="text-xs font-mono text-sky-400 font-bold mb-1">Learn to Code for Free</div>
                  <div className="text-base font-black text-white mb-1.5">مقدمة في البرمجة للمبتدئين 👨‍💻</div>
                  <div className="inline-flex items-center gap-2 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700 text-[11px] text-slate-300">
                    <span>إجمالي من فتحوا الصفحة:</span>
                    <span className="font-bold font-mono text-sky-300 text-xs">100 زائر</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>تطبيق عملي لموقع تعليمي يوضح سلوك الزوار بالأرقام</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">الموقع التعليمي</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Results & Mathematical Calculation */}
        <Box x={60} y={220} w={580} h={370} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  النتائج وطريقة الحساب 📐
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  100 زائر
                </span>
              </div>

              <div className="text-xs font-bold text-amber-300 mb-2">
                دخل الموقع 100 زائر، وكانت النتائج كالتالي:
              </div>

              {/* Two Breakdown Cards from Image 1 */}
              <div className="space-y-2 mb-3">
                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-rose-500 shadow flex items-center justify-between">
                  <div className="text-xs text-slate-100 font-bold leading-relaxed">
                    • 40 زائر دخلوا صفحة الدرس وغادروا دون تفاعل مهم.
                  </div>
                  <span className="text-xs font-mono font-black text-rose-400 bg-slate-950 px-2 py-0.5 rounded border border-rose-900 mr-2 shrink-0">
                    40 غادروا 🏃‍♂️
                  </span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow flex items-center justify-between">
                  <div className="text-xs text-slate-100 font-bold leading-relaxed">
                    • 60 زائر تفاعلوا مع الموقع، مثل الانتقال لصفحة أخرى أو تنفيذ تفاعل يُحتسب في التحليل.
                  </div>
                  <span className="text-xs font-mono font-black text-emerald-400 bg-slate-950 px-2 py-0.5 rounded border border-emerald-900 mr-2 shrink-0">
                    60 تفاعلوا 🖱️
                  </span>
                </div>
              </div>

              {/* Math Formula Tile from Image 1 */}
              <div className="p-3 rounded-xl bg-amber-950/80 border-2 border-amber-500/70 text-center shadow">
                <div className="text-xs text-amber-200 font-bold mb-1">
                  إذن معدل الارتداد في هذا المثال:
                </div>
                <div className="font-mono text-base font-black text-white flex items-center justify-center gap-2">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-rose-300 border-b-2 border-amber-400 px-2 font-bold">40</span>
                    <span className="text-sky-300 px-2 font-bold">100</span>
                  </div>
                  <span className="text-amber-300 font-bold">× 100 =</span>
                  <span className="text-2xl text-amber-400 font-black">40%</span>
                </div>
                <div className="text-xs text-emerald-300 font-black mt-1">
                  يعني معدل الارتداد = 40%.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>معدل الارتداد = (الذين غادروا دون تفاعل ÷ إجمالي الزوار) × 100</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">المعادلة 📐</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>القاعدة:</b> الزائر دخل الموقع وخرج منه دون أن يتفاعل بالشكل الذي يعتبره الموقع تفاعلاً مهماً!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 16 (part2[3]): Metric 2: Bounce Rate (ثانيًا: اختلاف طريقة الحساب ومعايير GA4)
  // -------------------------------------------------------------------------
  {
    id: 'metric-bounce-rate-tools',
    title: '٣ · مؤشر معدل الارتداد: ثانيًا · نفهم كلام الكتاب في الجزئية الأولى 🔍',
    scene: true,
    notes: (
      <>
        <p><b>ثانيًا: نفهم كلام الكتاب في الجزئية الأولى</b></p>
        <p><b>نص الكتاب المعتمد:</b> «مؤشر تختلف طريقة حسابه بين أدوات التحليلات، لذلك يجب الرجوع إلى تعريف الأداة المستخدمة.»</p>
        <p><b>المقصود:</b> المقصود هنا إن مش كل أدوات تحليل المواقع بتحسب معدل الارتداد بنفس الطريقة.</p>
        <hr />
        <p><b>خلينا نفهم ده بمثال:</b> تخيل إن طالب دخل موقعك التعليمي وفتح صفحة شرح درس، وقعد يقرأ فيها لمدة 10 دقائق، وبعد كده قفل الموقع.</p>
        <p><b>هل نعتبر الطالب ده زائر ارتد؟</b> الإجابة تعتمد على أداة التحليل المستخدمة وطريقة تعريفها للارتداد.</p>
        <hr />
        <p><b>في Google Analytics 4 (GA4) مثلاً:</b></p>
        <p>معدل الارتداد هو عكس معدل التفاعل.</p>
        <p>يعني لو الزيارة لم تُعتبر زيارة متفاعلة وفقاً لشروط GA4، تُحسب ضمن الزيارات المرتدة.</p>
        <p><b>ومن شروط اعتبار الزيارة متفاعلة:</b></p>
        <ul>
          <li>أن تستمر لأكثر من 10 ثوان.</li>
          <li>أو أن ينتقل الزائر إلى صفحة أو شاشة أخرى.</li>
          <li>أو أن يحدث حدث مهم (Key Event).</li>
        </ul>
        <p>لذلك لازم نعرف الأداة اللي بنستخدمها قبل ما نفسر الرقم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · ثانيًا: اختلاف طريقة الحساب بين أدوات التحليلات ومعايير GA4">
          ٣ · مؤشر معدل الارتداد: ثانيًا · نفهم كلام الكتاب في الجزئية الأولى 🔍
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-bold border border-blue-400">
                🔍 ثانيًا: نفهم كلام الكتاب في الجزئية الأولى
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                اختلاف طريقة الحساب بين الأدوات
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «مؤشر تختلف طريقة حسابه بين أدوات التحليلات، لذلك يجب الرجوع إلى تعريف الأداة المستخدمة.»
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              المقصود هنا إن مش كل أدوات تحليل المواقع بتحسب معدل الارتداد بنفس الطريقة.
            </div>
          </div>
        </Box>

        {/* Right Card: The 10-Minute Reading Dilemma */}
        <Box x={660} y={220} w={560} h={370} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  خلينا نفهم ده بمثال ⏱️
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  حالة عملية
                </span>
              </div>

              {/* Exact Text from Image 2 */}
              <div className="p-3 rounded-xl bg-slate-900 border-2 border-slate-700 mb-3 text-xs leading-relaxed text-slate-200">
                <div className="font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <span>📖</span>
                  <span>الموقف العملي:</span>
                </div>
                تخيل إن طالب دخل موقعك التعليمي وفتح صفحة شرح درس، وقعد يقرأ فيها لمدة <span className="text-sky-300 font-bold font-mono">10 دقائق</span>، وبعد كده قفل الموقع.
              </div>

              {/* The Core Question Box */}
              <div className="p-3 rounded-xl bg-blue-950 border-2 border-sky-500/60 shadow-lg text-center mb-2.5">
                <div className="text-sm font-black text-amber-300 mb-1">
                  هل نعتبر الطالب ده زائر ارتد؟ 🤔
                </div>
                <div className="text-xs text-sky-100 font-bold leading-relaxed">
                  الإجابة تعتمد على أداة التحليل المستخدمة وطريقة تعريفها للارتداد.
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11px] text-slate-300 leading-snug">
                💡 في بعض الأدوات الكلاسيكية يُحسب مرتداً لأنه فتح صفحة واحدة، بينما في الأدوات الحديثة يُحسب متفاعلاً لأنه قضى وقتاً كافياً!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>الحكم على الزيارة يتوقف تماماً على تعريف الأداة المستخدمة!</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">تعريف الأداة</span>
            </div>
          </div>
        </Box>

        {/* Left Card: GA4 Engagement Standards */}
        <Box x={60} y={220} w={580} h={370} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  في Google Analytics 4 (GA4) مثلاً 📊
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  GA4 Rules
                </span>
              </div>

              {/* Exact Text from Image 2 */}
              <div className="p-2.5 rounded-xl bg-blue-950/70 border border-blue-500/60 mb-2 text-xs font-bold leading-relaxed text-sky-100">
                <div className="text-emerald-300 text-sm mb-0.5">معدل الارتداد هو عكس معدل التفاعل.</div>
                <div>يعني لو الزيارة لم تُعتبر زيارة متفاعلة وفقاً لشروط GA4، تُحسب ضمن الزيارات المرتدة.</div>
              </div>

              {/* Conditions Box from Image 2 */}
              <div className="p-2.5 rounded-xl bg-slate-950 border-2 border-slate-700 mb-2">
                <div className="text-xs font-black text-amber-300 mb-1.5 flex items-center gap-1.5">
                  <span>✅</span>
                  <span>ومن شروط اعتبار الزيارة متفاعلة:</span>
                </div>
                <div className="space-y-1 text-xs text-slate-200 font-bold">
                  <div className="p-1 px-2 rounded bg-slate-900 border-r-2 border-emerald-400">
                    • أن تستمر لأكثر من 10 ثوان.
                  </div>
                  <div className="p-1 px-2 rounded bg-slate-900 border-r-2 border-sky-400">
                    • أو أن ينتقل الزائر إلى صفحة أو شاشة أخرى.
                  </div>
                  <div className="p-1 px-2 rounded bg-slate-900 border-r-2 border-purple-400">
                    • أو أن يحدث حدث مهم (Key Event).
                  </div>
                </div>
              </div>

              {/* Exact Golden Note from Image 2 */}
              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500/50 text-[11.5px] text-emerald-200 font-bold text-center">
                لذلك لازم نعرف الأداة اللي بنستخدمها قبل ما نفسر الرقم.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>معرفة الأداة شرط علمي لفهم وتفسير نسبة الارتداد بدقة</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">قاعدة GA4</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>قاعدة مهمة:</b> معدل الارتداد هو عكس معدل التفاعل في GA4، ولازم نعرف تعريف الأداة المستخدمة قبل ما نفسر الرقم!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 17 (part2[4]): Metric 2: Bounce Rate (ثالثًا: رصد الضعف ومثالا 404 ووجد ما يبحث عنه)
  // -------------------------------------------------------------------------
  {
    id: 'metric-bounce-rate-causes',
    title: '٣ · مؤشر معدل الارتداد: ثالثًا · نفهم كلام الكتاب في الجزئية الثانية 💡',
    scene: true,
    notes: (
      <>
        <p><b>ثالثًا: نفهم كلام الكتاب في الجزئية الثانية</b></p>
        <p><b>نص الكتاب المعتمد:</b> «يساعد مع مؤشرات أخرى على ملاحظة مدى ضعف تفاعل الزوار مع الموقع، لكنه لا يفسر السبب وحده.»</p>
        <p><b>دي نقطة مهمة جدًا:</b> معدل الارتداد بيساعدنا نعرف إن فيه احتمال إن تفاعل الزوار مع الموقع ضعيف، لكنه مش بيقولنا السبب الحقيقي وراء ده.</p>
        <hr />
        <p><b>مثال 1: مشكلة في الموقع:</b></p>
        <p>زائر دخل موقعك علشان يشوف درس، لكنه لقى الصفحة مش بتفتح أو فيها مشكلة، فخرج فورًا. هنا ممكن يكون معدل الارتداد مرتفع بسبب مشكلة تقنية.</p>
        <hr />
        <p><b>مثال 2: الزائر وجد ما يبحث عنه:</b></p>
        <p>زائر دخل صفحة فيها تعريف لمفهوم معين، قرأ التعريف، وفهم المعلومة، ثم خرج. هنا خروج الزائر مش بالضرورة معناه إن الموقع سيئ أو إن الزائر غير راض.</p>
        <hr />
        <p><b>إذن ارتفاع معدل الارتداد مش دليل قاطع على وجود مشكلة.</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · ثالثًا: رصد ضعف التفاعل والتمييز بين الخلل التقني ورضا الزائر">
          ٣ · مؤشر معدل الارتداد: ثالثًا · نفهم كلام الكتاب في الجزئية الثانية 💡
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                💡 ثالثًا: نفهم كلام الكتاب في الجزئية الثانية
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                رصد ضعف التفاعل وعدم تفسير السبب وحده
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «يساعد مع مؤشرات أخرى على ملاحظة مدى ضعف تفاعل الزوار مع الموقع، لكنه لا يفسر السبب وحده.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              دي نقطة مهمة جدًا: معدل الارتداد بيساعدنا نعرف إن فيه احتمال إن تفاعل الزوار مع الموقع ضعيف، لكنه مش بيقولنا السبب الحقيقي وراء ده.
            </div>
          </div>
        </Box>

        {/* Right Card: Example 1 - Technical Problem (404 Error) */}
        <Box x={660} y={225} w={560} h={365} c="red" fill="red" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  مثال 1: مشكلة في الموقع ⚠️
                </span>
                <span className="text-xs font-bold bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded border border-rose-500/40">
                  خلل تقني
                </span>
              </div>

              {/* 404 Mockup Screen */}
              <div className="p-3 rounded-2xl bg-slate-950 border-2 border-rose-600/50 shadow-xl mb-3 text-center">
                <div className="text-3xl font-black font-mono text-rose-400 mb-1">404</div>
                <div className="text-xs font-bold text-slate-300 mb-0.5">Page Not Found / الصفحة غير موجودة</div>
                <div className="text-[10px] text-slate-500 font-mono">ERR_CONNECTION_FAILED</div>
              </div>

              {/* Exact Text from Image 4 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 leading-relaxed mb-2.5">
                زائر دخل موقعك علشان يشوف درس، لكنه لقى الصفحة مش بتفتح أو فيها مشكلة، فخرج فورًا.
              </div>

              <div className="p-2 rounded-xl bg-rose-950/70 border border-rose-500/60 text-xs text-rose-200 font-bold leading-relaxed">
                هنا ممكن يكون معدل الارتداد مرتفع بسبب مشكلة تقنية.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-red)', fontWeight: 'bold' }}>عطل تقني أو صفحة لا تفتح تجبر الزائر على المغادرة الفورية</span>
              <span className="p-0.5 px-2 rounded bg-rose-500/20 text-rose-300 font-bold text-[10.5px]">مشكلة تقنية</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Example 2 - Found What He Looked For */}
        <Box x={60} y={225} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  مثال 2: الزائر وجد ما يبحث عنه 💡
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  تجربة ناجحة
                </span>
              </div>

              {/* Clear Content Mockup */}
              <div className="p-3 rounded-2xl bg-slate-950 border-2 border-emerald-600/50 shadow-xl mb-2.5 text-center">
                <div className="text-xs font-bold text-emerald-400 mb-0.5">صفحة تعريف المصطلح 📖</div>
                <div className="text-xs text-slate-200 font-bold mb-1">قرأ الطالب التعريف وفهم المعلومة تماماً ✅</div>
                <span className="text-[10px] bg-emerald-950 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-600/50">
                  إنجاز الهدف بنجاح من أول صفحة
                </span>
              </div>

              {/* Exact Text from Image 4 */}
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 leading-relaxed mb-2">
                زائر دخل صفحة فيها تعريف لمفهوم معين، قرأ التعريف، وفهم المعلومة، ثم خرج.
              </div>

              <div className="p-2 rounded-xl bg-emerald-950/60 border border-emerald-500/50 text-xs text-emerald-100 font-bold leading-relaxed mb-2">
                هنا خروج الزائر مش بالضرورة معناه إن الموقع سيئ أو إن الزائر غير راض.
              </div>

              {/* Exact Golden Verdict from Image 4 */}
              <div className="p-2 rounded-xl bg-slate-950 border-2 border-amber-500/80 text-xs font-black text-amber-300 text-center shadow">
                🎯 إذن ارتفاع معدل الارتداد مش دليل قاطع على وجود مشكلة.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>خروج الزائر بعد فهم المعلومة لا يعني أبداً أن الموقع سيئ!</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">نجاح الزائر</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>النتيجة الحاسمة:</b> ارتفاع معدل الارتداد مش دليل قاطع على وجود مشكلة؛ قد يكون بسبب خلل تقني أو لأن الزائر وجد ما يبحث عنه فوراً!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 18 (part2[5]): Metric 2: Bounce Rate (رابعًا: جدول المؤشرات وتطبيق المتجر)
  // -------------------------------------------------------------------------
  {
    id: 'metric-bounce-rate-interpretation',
    title: '٣ · مؤشر معدل الارتداد: رابعًا · إزاي نفسر معدل الارتداد بشكل صحيح؟ 📊',
    scene: true,
    notes: (
      <>
        <p><b>رابعًا: إزاي نفسر معدل الارتداد بشكل صحيح؟</b></p>
        <p><b>القاعدة الأساسية:</b> لازم نربطه بمؤشرات أخرى علشان نفهم الصورة كاملة.</p>
        <hr />
        <p><b>جدول المؤشرات الأساسية الأربعة:</b></p>
        <ul>
          <li><b>معدل الارتداد:</b> نسبة الزيارات التي لم تحقق تفاعلاً وفق تعريف الأداة.</li>
          <li><b>مدة التفاعل:</b> الوقت الذي قضاه الزائر في التفاعل مع الموقع.</li>
          <li><b>عدد الصفحات المشاهدة:</b> عدد الصفحات التي تصفحها الزائر.</li>
          <li><b>معدل التحويل:</b> نسبة الزوار الذين نفذوا الهدف المطلوب.</li>
        </ul>
        <hr />
        <p><b>مثال تطبيقي شامل:</b> تخيل إن عندك موقع لبيع المنتجات، وجدت النتائج التالية:</p>
        <ul>
          <li>معدل الارتداد = 80%.</li>
          <li>مدة التفاعل منخفضة.</li>
          <li>عدد الصفحات المشاهدة قليل.</li>
          <li>عدد عمليات الشراء منخفض.</li>
        </ul>
        <p>هنا المؤشرات مجتمعة بتدينا سببًا للاشتباه في وجود مشكلة في الموقع، ونحتاج نبحث عنها.</p>
        <p>لكن لو معدل الارتداد مرتفع، وفي نفس الوقت مدة التفاعل جيدة، والهدف المطلوب بيتحقق، فقد لا تكون هناك مشكلة فعلية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · رابعًا: ربط الارتداد بالمؤشرات الأخرى وتطبيق المتجر الإلكتروني">
          ٣ · مؤشر معدل الارتداد: رابعًا · إزاي نفسر معدل الارتداد بشكل صحيح؟ 📊
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={95} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-xs font-bold border border-purple-400">
                📊 رابعًا: إزاي نفسر معدل الارتداد بشكل صحيح؟
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                الربط بالمؤشرات الأخرى لرؤية الصورة الكاملة
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «لازم نربطه بمؤشرات أخرى علشان نفهم الصورة كاملة.»
            </div>
          </div>
        </Box>

        {/* Right Card: Table of 4 Key Metrics */}
        <Box x={660} y={215} w={560} h={375} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  المؤشرات التي نربطها بالارتداد 🔗
                </span>
                <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  جدول المقاييس
                </span>
              </div>

              {/* Exact Table from Image 5 */}
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-xs">
                <div className="grid grid-cols-12 bg-slate-900 font-bold text-amber-300 p-2 border-b border-slate-800">
                  <div className="col-span-5 text-right font-black">المؤشر</div>
                  <div className="col-span-7 text-right font-black">بيساعدنا نعرف إيه؟</div>
                </div>

                <div className="divide-y divide-slate-800/80">
                  <div className="grid grid-cols-12 p-2 hover:bg-slate-900/50 items-center">
                    <div className="col-span-5 font-bold text-rose-300 flex items-center gap-1">
                      <span>•</span>
                      <span>معدل الارتداد</span>
                    </div>
                    <div className="col-span-7 text-slate-200 text-[11px] leading-tight">
                      نسبة الزيارات التي لم تحقق تفاعلاً وفق تعريف الأداة
                    </div>
                  </div>

                  <div className="grid grid-cols-12 p-2 hover:bg-slate-900/50 items-center">
                    <div className="col-span-5 font-bold text-sky-300 flex items-center gap-1">
                      <span>•</span>
                      <span>مدة التفاعل</span>
                    </div>
                    <div className="col-span-7 text-slate-200 text-[11px] leading-tight">
                      الوقت الذي قضاه الزائر في التفاعل مع الموقع
                    </div>
                  </div>

                  <div className="grid grid-cols-12 p-2 hover:bg-slate-900/50 items-center">
                    <div className="col-span-5 font-bold text-amber-300 flex items-center gap-1">
                      <span>•</span>
                      <span>عدد الصفحات المشاهدة</span>
                    </div>
                    <div className="col-span-7 text-slate-200 text-[11px] leading-tight">
                      عدد الصفحات التي تصفحها الزائر
                    </div>
                  </div>

                  <div className="grid grid-cols-12 p-2 hover:bg-slate-900/50 items-center">
                    <div className="col-span-5 font-bold text-emerald-300 flex items-center gap-1">
                      <span>•</span>
                      <span>معدل التحويل</span>
                    </div>
                    <div className="col-span-7 text-slate-200 text-[11px] leading-tight">
                      نسبة الزوار الذين نفذوا الهدف المطلوب
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>التكامل بين المؤشرات الأربعة يكشف الحقيقة الكاملة للموقع</span>
              <span className="p-0.5 px-2 rounded bg-purple-500/20 text-purple-300 font-bold text-[10.5px]">المؤشرات الأربعة</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Comprehensive E-Commerce Example */}
        <Box x={60} y={215} w={580} h={375} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  مثال تطبيقي شامل: متجر بيع المنتجات 🛍️
                </span>
                <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  متجر إلكتروني
                </span>
              </div>

              {/* Exact Text from Image 5 */}
              <div className="text-xs text-slate-200 font-bold mb-2">
                تخيل إن عندك موقع لبيع المنتجات: وجدت النتائج التالية:
              </div>

              {/* Four Results Grid */}
              <div className="grid grid-cols-2 gap-1.5 mb-2 text-xs">
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 text-slate-200 font-bold">
                  • معدل الارتداد = 80%.
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 text-slate-200 font-bold">
                  • مدة التفاعل منخفضة.
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 text-slate-200 font-bold">
                  • عدد الصفحات المشاهدة قليل.
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 text-slate-200 font-bold">
                  • عدد عمليات الشراء منخفض.
                </div>
              </div>

              {/* Exact Interpretation from Image 5 */}
              <div className="p-2 rounded-xl bg-rose-950/70 border border-rose-500/60 text-xs text-rose-100 font-bold leading-relaxed mb-2">
                هنا المؤشرات مجتمعة بتدينا سببًا للاشتباه في وجود مشكلة في الموقع، ونحتاج نبحث عنها.
              </div>

              <div className="p-2 rounded-xl bg-emerald-950/70 border border-emerald-500/60 text-xs text-emerald-100 font-bold leading-relaxed">
                لكن لو معدل الارتداد مرتفع، وفي نفس الوقت مدة التفاعل جيدة، والهدف المطلوب بيتحقق، فقد لا تكون هناك مشكلة فعلية.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>المؤشرات مجتمعة هي التي تؤكد أو تنفي وجود مشكلة!</span>
              <span className="p-0.5 px-2 rounded bg-purple-500/20 text-purple-300 font-bold text-[10.5px]">تفسير النتيجة</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="purple" fill="purple" size={17} tc="ink" at={4}>
          📌 <b>قاعدة التحليل:</b> المؤشرات مجتمعة بتدينا الصورة الكاملة؛ الارتداد وحده لا يكفي ويجب ربطه بمدة التفاعل والصفحات والتحويل!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 19 (part2[6]): Metric 2: Bounce Rate (خامسًا: اختصار الفكرة وشجرة القرار)
  // -------------------------------------------------------------------------
  {
    id: 'metric-bounce-rate-summary',
    title: '٣ · مؤشر معدل الارتداد: خامسًا · اختصار الفكرة التي يريد الكتاب توصيلها 🧭',
    scene: true,
    notes: (
      <>
        <p><b>خامسًا: اختصار الفكرة التي يريد الكتاب توصيلها</b></p>
        <p><b>المخطط التسلسلي الشامل:</b></p>
        <ol>
          <li>معدل الارتداد لا يعني بالضرورة أن الموقع سيئ.</li>
          <li>ارتفاع معدل الارتداد ⬅️ ملاحظة تحتاج إلى تحليل.</li>
          <li>مراجعة مؤشرات أخرى ⬅️ مدة التفاعل - الصفحات المشاهدة - التحويلات.</li>
          <li>تحديد السبب المحتمل ⬅️ مشكلة تقنية؟ محتوى غير مناسب؟ أم أن الزائر وجد ما يبحث عنه؟</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · خامسًا: المخطط التسلسلي وشجرة القرار المنهجية">
          ٣ · مؤشر معدل الارتداد: خامسًا · اختصار الفكرة التي يريد الكتاب توصيلها 🧭
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={85} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-bold border border-emerald-400">
                🧭 خامسًا: اختصار الفكرة التي يريد الكتاب توصيلها
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                شجرة اتخاذ القرار وقراءة مؤشر الارتداد خطوة بخطوة
              </span>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              المخطط المنهجي الشامل للتعامل مع مؤشر الارتداد وتحديد أسبابه بدقة:
            </div>
          </div>
        </Box>

        {/* Center Flowchart - Step 1: Golden Principle */}
        <Box x={180} y={205} w={920} h={75} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'center', padding: '10px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 19, fontWeight: '900', color: 'var(--pen-orange)' }}>
              🌟 معدل الارتداد لا يعني بالضرورة أن الموقع سيئ.
            </div>
          </div>
        </Box>

        {/* Step 2: Observation & Analysis */}
        <Box x={240} y={300} w={800} h={75} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'center', padding: '8px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ⬇️ ارتفاع معدل الارتداد
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95 }}>
              ملاحظة تحتاج إلى تحليل
            </div>
          </div>
        </Box>

        {/* Step 3: Check Other Metrics */}
        <Box x={240} y={395} w={800} h={75} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'center', padding: '8px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ⬇️ مراجعة مؤشرات أخرى
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95 }}>
              مدة التفاعل – الصفحات المشاهدة – التحويلات
            </div>
          </div>
        </Box>

        {/* Step 4: Determine Probable Cause (Highlighted Container matching Image 6) */}
        <Box x={180} y={490} w={920} h={95} c="ink" fill="ink" at={3}>
          <div style={{ textAlign: 'center', padding: '10px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 18, fontWeight: '900', color: 'var(--pen-ink)', marginBottom: 3 }}>
              🎯 تحديد السبب المحتمل
            </div>
            <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-ink)', opacity: 0.95 }}>
              مشكلة تقنية؟ محتوى غير مناسب؟ أم أن الزائر وجد ما يبحث عنه؟
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          📌 <b>خلاصة شجرة القرار:</b> معدل الارتداد لا يعني بالضرورة أن الموقع سيئ، بل هو ملاحظة تحتاج مراجعة مؤشرات أخرى لتحديد السبب المحتمل!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 20 (part2[7]): Metric 3: CVR (أولاً: المفهوم وأمثلة الأهداف)
  // -------------------------------------------------------------------------
  {
    id: 'metric-cvr-concept',
    title: '٤ · مؤشر معدل التحويل (CVR): أولاً · المفهوم وأمثلة الأهداف 🎯',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: يعني إيه معدل التحويل CVR؟</b></p>
        <p>الجزئية دي بتشرح مؤشر مهم جدًا في تحليل أداء المواقع الإلكترونية، اسمه معدل التحويل (Conversion Rate - CVR).</p>
        <p><b>التعريف المعتمد:</b> معدل التحويل هو مؤشر بيقيس نسبة الأشخاص الذين حققوا هدفاً محدداً من إجمالي العدد الذي نقيس بالنسبة إليه.</p>
        <hr />
        <p><b>يعني ببساطة:</b> مش كل شخص يدخل الموقع بيكون هدفه مجرد التصفح، إحنا ممكن نكون عايزينه يعمل حاجة معينة، زي:</p>
        <ul>
          <li>يسجل في الموقع.</li>
          <li>يشتري منتج.</li>
          <li>يشترك في خدمة.</li>
          <li>يحجز موعدًا.</li>
          <li>يملأ نموذج تسجيل.</li>
        </ul>
        <hr />
        <p><b>التحويل (Conversion):</b> الشخص اللي ينفذ الهدف المطلوب بنسميه حقق تحويل (Conversion).</p>
        <p><b>معدل التحويل:</b> أما معدل التحويل فهو النسبة المئوية للأشخاص اللي حققوا الهدف.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · أولاً: مفهوم معدل التحويل وأمثلة الأهداف المستهدفة">
          ٤ · مؤشر معدل التحويل (CVR): أولاً · المفهوم وأمثلة الأهداف 🎯
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-bold border border-emerald-400">
                🎯 أولاً: يعني إيه معدل التحويل CVR؟
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                Conversion Rate – معدل التحويل
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «معدل التحويل هو مؤشر بيقيس نسبة الأشخاص الذين حققوا هدفاً محدداً من إجمالي العدد الذي نقيس بالنسبة إليه.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              الجزئية دي بتشرح مؤشر مهم جدًا في تحليل أداء المواقع الإلكترونية، وبأمثلة عملية تقدر توصلها للطلاب بسهولة.
            </div>
          </div>
        </Box>

        {/* Right Card: 5 Goals List */}
        <Box x={660} y={220} w={560} h={370} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  بمعنى ببساطة: أهداف نريد تحقيقها 🎯
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  أمثلة الأهداف
                </span>
              </div>

              {/* Exact Text from Image 1 */}
              <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/60 mb-2.5 text-xs text-emerald-100 font-bold leading-relaxed">
                مش كل شخص يدخل الموقع بيكون هدفه مجرد التصفح، إحنا ممكن نكون عايزينه يعمل حاجة معينة، زي:
              </div>

              {/* 5 Goals from Image 1 */}
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-emerald-500 font-bold flex items-center justify-between">
                  <span>• يسجل في الموقع.</span>
                  <span className="text-[10px] text-emerald-400 font-mono">تسجيل حساب 📝</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-sky-500 font-bold flex items-center justify-between">
                  <span>• يشتري منتج.</span>
                  <span className="text-[10px] text-sky-400 font-mono">شراء متجر 🛍️</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-amber-500 font-bold flex items-center justify-between">
                  <span>• يشترك في خدمة.</span>
                  <span className="text-[10px] text-amber-400 font-mono">اشتراك سنوي ⭐</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-purple-500 font-bold flex items-center justify-between">
                  <span>• يحجز موعدًا.</span>
                  <span className="text-[10px] text-purple-400 font-mono">حجز موعد 📅</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-rose-500 font-bold flex items-center justify-between">
                  <span>• يملأ نموذج تسجيل.</span>
                  <span className="text-[10px] text-rose-400 font-mono">استمارة بيانات 📋</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>كل موقع يحدد الهدف الذي يرغب في أن يحققه الزوار</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">أهداف الموقع</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Conversion & Conversion Rate Definition */}
        <Box x={60} y={220} w={580} h={370} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  تعريف التحويل ومعدل التحويل ✨
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  المفهوم
                </span>
              </div>

              {/* Exact Conversion Meaning from Image 1 */}
              <div className="p-3 rounded-xl bg-slate-900 border-2 border-slate-700 mb-3 shadow">
                <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <span>👤</span>
                  <span>التحويل (Conversion):</span>
                </div>
                <div className="text-xs text-slate-100 font-bold leading-relaxed">
                  الشخص اللي ينفذ الهدف المطلوب بنسميه <span className="text-emerald-400 font-black">حقق تحويل (Conversion)</span>.
                </div>
              </div>

              {/* Exact CVR Meaning from Image 1 */}
              <div className="p-3 rounded-xl bg-emerald-950 border-2 border-emerald-500/70 mb-3 shadow-lg">
                <div className="text-xs font-bold text-emerald-300 mb-1 flex items-center gap-1.5">
                  <span>📊</span>
                  <span>معدل التحويل (CVR):</span>
                </div>
                <div className="text-xs text-white font-bold leading-relaxed">
                  أما معدل التحويل فهو <span className="text-amber-300 font-black">النسبة المئوية للأشخاص اللي حققوا الهدف</span>.
                </div>
              </div>

              {/* Summary Pill */}
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[11.5px] text-slate-300 text-center leading-snug">
                💡 التحويل = تنفيذ الإجراء المطلوب · معدل التحويل = النسبة المئوية للناجحين في تحقيقه!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>CVR يقيس مدى كفاءة الموقع في تحويل الزوار لفاعلين</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">قاعدة CVR</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          📌 <b>القاعدة:</b> الشخص الذي ينفذ الهدف المطلوب حقق تحويلاً (Conversion)، ومعدل التحويل هو النسبة المئوية لمن حققوا الهدف!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 21 (part2[8]): Metric 3: CVR (ثانيًا: معنى كلمة تحويل ونوعا الزوار)
  // -------------------------------------------------------------------------
  {
    id: 'metric-cvr-meaning',
    title: '٤ · مؤشر معدل التحويل: ثانيًا · نفهم معنى كلمة تحويل (Conversion) 💡',
    scene: true,
    notes: (
      <>
        <p><b>ثانيًا: نفهم معنى كلمة تحويل (Conversion)</b></p>
        <p>تخيل إن عندك موقع تعليمي بتقدم عليه كورسات برمجة.</p>
        <p>أنت مش مجرد عايز الناس تدخل الموقع وتتفرج على الكورسات، أنت عايزهم يسجلوا في الكورس.</p>
        <hr />
        <p><b>هنا عندنا نوعين من الزوار:</b></p>
        <ul>
          <li><b>النوع الأول: زائر لم يحقق الهدف:</b> دخل الموقع وشاهد الكورس، لكنه لم يسجل فيه.</li>
          <li><b>النوع الثاني: زائر حقق التحويل:</b> دخل الموقع وشاهد الكورس وضغط على التسجيل وأكمل عملية التسجيل بنجاح.</li>
        </ul>
        <hr />
        <p><b>إذن في المثال ده:</b> التحويل (Conversion) = إتمام التسجيل في الكورس.</p>
        <p><b>وخلي بالك:</b> مجرد الضغط على زر التسجيل مش بالضرورة يُعتبر تحويلاً؛ لازم نحدد الهدف بدقة، هل هو الضغط على الزر أم إتمام التسجيل؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · ثانيًا: معنى كلمة تحويل ونوعا الزوار والتمييز الدقيق للهدف">
          ٤ · مؤشر معدل التحويل: ثانيًا · نفهم معنى كلمة تحويل (Conversion) 💡
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                💡 ثانيًا: نفهم معنى كلمة تحويل (Conversion)
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                تطبيق الموقع التعليمي لكورسات البرمجة
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «تخيل إن عندك موقع تعليمي بتقدم عليه كورسات برمجة.»
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              أنت مش مجرد عايز الناس تدخل الموقع وتتفرج على الكورسات، أنت عايزهم يسجلوا في الكورس.
            </div>
          </div>
        </Box>

        {/* Right Card: The Two Types of Visitors */}
        <Box x={660} y={220} w={560} h={370} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  هنا عندنا نوعين من الزوار 👥
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  نوعا الزوار
                </span>
              </div>

              {/* Website Mockup Header */}
              <div className="p-2 rounded-xl bg-slate-950 border border-slate-700 mb-2 flex items-center justify-between text-xs">
                <span className="font-bold text-white">Online Courses Enroll Now 🎓</span>
                <span className="text-[10px] text-sky-400 font-mono">edu-courses.com</span>
              </div>

              {/* Type 1 from Image 2 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-amber-500 mb-2 shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-amber-400 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-600/50">
                    النوع الأول: زائر لم يحقق الهدف
                  </span>
                  <span className="text-xs">❌</span>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-bold">
                  دخل الموقع وشاهد الكورس، لكنه لم يسجل فيه.
                </div>
              </div>

              {/* Type 2 from Image 2 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-600/50">
                    النوع الثاني: زائر حقق التحويل
                  </span>
                  <span className="text-xs">✅</span>
                </div>
                <div className="text-xs text-slate-200 leading-relaxed font-bold">
                  دخل الموقع وشاهد الكورس وضغط على التسجيل وأكمل عملية التسجيل بنجاح.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>التحويل يرتبط باكتمال الهدف المخطط له بنجاح</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">إتمام الهدف</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Precise Goal & The Golden Warning */}
        <Box x={60} y={220} w={580} h={370} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  تحديد الهدف بدقة 🎯
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  تنبيه حاسم
                </span>
              </div>

              {/* Exact Text from Image 3 */}
              <div className="p-3 rounded-xl bg-amber-950/70 border-2 border-amber-500/70 mb-3 shadow">
                <div className="text-xs font-bold text-amber-200 mb-1">إذن في المثال ده:</div>
                <div className="text-sm font-black text-white">
                  التحويل (Conversion) = <span className="text-emerald-400">إتمام التسجيل في الكورس</span>.
                </div>
              </div>

              {/* Exact Warning from Image 3 */}
              <div className="p-3.5 rounded-2xl bg-slate-950 border-2 border-rose-500/70 shadow-xl mb-2 text-xs leading-relaxed">
                <div className="font-black text-rose-400 text-sm mb-1.5 flex items-center gap-1.5">
                  <span>⚠️</span>
                  <span>وخلي بالك:</span>
                </div>
                <div className="text-slate-200 font-bold text-xs leading-relaxed">
                  مجرد الضغط على زر التسجيل مش بالضرورة يُعتبر تحويلاً؛ لازم نحدد الهدف بدقة، هل هو الضغط على الزر أم إتمام التسجيل؟
                </div>
              </div>

              <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-300 text-center">
                💡 التحديد الدقيق للهدف هو الضمان لعدم الوقوع في قياسات مضللة!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>تحديد الهدف (الضغط أم الإتمام) يحدد طريقة القياس</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">دقة الهدف</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>تنبيه جوهري:</b> مجرد الضغط على زر التسجيل ليس بالضرورة تحويلاً؛ يجب تحديد الهدف بدقة (الضغط أم إتمام التسجيل)!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 22 (part2[9]): Metric 3: CVR (ثالثًا: شرح مثال الكتاب والتصور البصري)
  // -------------------------------------------------------------------------
  {
    id: 'metric-cvr-math',
    title: '٤ · مؤشر معدل التحويل: ثالثًا · شرح مثال الكتاب (200 زائر – 40 سجلوا) 📐',
    scene: true,
    notes: (
      <>
        <p><b>ثالثًا: نشرح مثال الكتاب (200 زائر – 40 سجلوا)</b></p>
        <p><b>الكتاب بيقول:</b></p>
        <ul>
          <li>إجمالي الزوار = 200 زائر.</li>
          <li>عدد الذين حققوا الهدف (سجلوا) = 40 زائرًا.</li>
        </ul>
        <p><b>عايزين نعرف نسبة الزوار اللي سجلوا. نحسبها إزاي؟</b></p>
        <p>CVR = (عدد من حققوا الهدف ÷ إجمالي العدد الذي نقيس بالنسبة إليه) × 100.</p>
        <p><b>نعوض بالأرقام:</b> CVR = (40 / 200) × 100 = 20%.</p>
        <hr />
        <p><b>إذن معدل التحويل = 20%.</b></p>
        <p>يعني من كل 100 زائر، في المتوسط 20 زائرًا حققوا الهدف المحدد.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · ثالثًا: شرح مثال الكتاب الحسابي والتصور البصري للشريط المئوي">
          ٤ · مؤشر معدل التحويل: ثالثًا · شرح مثال الكتاب (200 زائر – 40 سجلوا) 📐
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-bold border border-blue-400">
                📐 ثالثًا: نشرح مثال الكتاب (200 زائر – 40 سجلوا)
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                القانون الرياضي والتعويض
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              الكتاب بيقول: • إجمالي الزوار = 200 زائر. • عدد الذين حققوا الهدف (سجلوا) = 40 زائرًا.
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              عايزين نعرف نسبة الزوار اللي سجلوا. نحسبها إزاي؟
            </div>
          </div>
        </Box>

        {/* Right Card: Math Formula & Substitution */}
        <Box x={660} y={220} w={560} h={370} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  القانون والتعويض بالأرقام 🧮
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  الحساب
                </span>
              </div>

              {/* Exact Formula from Image 4 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border-2 border-slate-700 mb-2.5 text-center shadow">
                <div className="font-mono text-xs text-white flex items-center justify-center gap-2">
                  <span className="text-sky-300 font-bold">CVR =</span>
                  <div className="inline-flex flex-col items-center">
                    <span className="text-emerald-300 border-b-2 border-sky-400 px-2 font-bold text-xs">عدد من حققوا الهدف</span>
                    <span className="text-sky-200 px-2 font-bold text-[11px]">إجمالي العدد الذي نقيس بالنسبة إليه</span>
                  </div>
                  <span className="text-sky-300 font-bold">× 100</span>
                </div>
              </div>

              {/* Substitution from Image 4 */}
              <div className="p-3 rounded-xl bg-blue-950/80 border-2 border-sky-500/70 text-center mb-2.5 shadow-lg">
                <div className="text-[11px] text-sky-200 font-bold mb-1">نعوض بالأرقام:</div>
                <div className="font-mono text-base font-black text-white flex items-center justify-center gap-2">
                  <span className="text-sky-300 text-xs font-bold">CVR =</span>
                  <div className="inline-flex flex-col items-center">
                    <span className="text-emerald-300 border-b-2 border-sky-400 px-2 font-bold">40</span>
                    <span className="text-sky-300 px-2 font-bold">200</span>
                  </div>
                  <span className="text-sky-300">× 100 =</span>
                  <span className="text-2xl text-emerald-400 font-black">20%</span>
                </div>
              </div>

              {/* Interpretation from Image 5 */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-emerald-500/60 text-xs text-slate-200 font-bold leading-relaxed">
                <div className="text-emerald-300 mb-0.5">إذن معدل التحويل = 20%.</div>
                <div>يعني من كل 100 زائر، في المتوسط 20 زائرًا حققوا الهدف المحدد.</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>CVR = (عدد من حققوا الهدف ÷ إجمالي المقاس إليه) × 100</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">المعادلة 📐</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Visual Representation Matching Image 5 */}
        <Box x={60} y={220} w={580} h={370} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  تصور بصري للمثال (Visual Bar) 📊
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  شريط بصري
                </span>
              </div>

              {/* Visual Container Exactly Matching Image 5 */}
              <div className="p-4 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-2xl mb-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400">تصور بصري للمثال</span>
                  <span className="text-sm font-black text-white font-mono">إجمالي الزوار: 200</span>
                </div>

                {/* Badge 40 سجلوا */}
                <div className="flex justify-end mb-1">
                  <span className="text-[11px] font-bold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-600/50">
                    40 سجلوا
                  </span>
                </div>

                {/* The Visual Bar matching Image 5 */}
                <div className="h-6 w-full rounded-lg bg-slate-800 p-0.5 flex overflow-hidden border border-slate-700 shadow-inner my-2">
                  <div style={{ width: '80%' }} className="bg-slate-500/80 h-full rounded-r-md"></div>
                  <div style={{ width: '20%' }} className="bg-emerald-500 h-full rounded-l-md shadow"></div>
                </div>

                <div className="flex justify-between items-center text-xs font-bold mt-1">
                  <span className="text-slate-400">80% لم يحققوه</span>
                  <span className="text-emerald-400">20% حققوا الهدف</span>
                </div>

                {/* Big Metric Display matching Image 5 */}
                <div className="mt-4 pt-3 border-t border-slate-800 text-center">
                  <div className="text-3xl font-black text-emerald-400 font-mono">20%</div>
                  <div className="text-xs text-slate-300 font-bold mt-1">معدل التحويل CVR</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>من كل 100 زائر، 20 زائرًا في المتوسط حققوا الهدف</span>
              <span className="p-0.5 px-2 rounded bg-sky-500/20 text-sky-300 font-bold text-[10.5px]">20% CVR</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>المعادلة:</b> CVR = (من حققوا الهدف ÷ إجمالي العدد المقاس بالنسبة إليه) × 100 = 20% (من كل 100 زائر 20 حققوا الهدف)!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 23 (part2[10]): Metric 3: CVR (الفرق بين إجمالي المستخدمين وإجمالي الجلسات)
  // -------------------------------------------------------------------------
  {
    id: 'metric-cvr-users-vs-sessions',
    title: '٤ · مؤشر معدل التحويل: الفرق بين إجمالي المستخدمين وإجمالي الجلسات 👥',
    scene: true,
    notes: (
      <>
        <p><b>اي الفرق بين إجمالي المستخدمين وإجمالي الجلسات</b></p>
        <p>الفرق بينهم بسيط جدًا، وخلينا نفهمه بمثال من موقعك التعليمي.</p>
        <hr />
        <p><b>أولاً: إجمالي المستخدمين (Users):</b></p>
        <p>المستخدم هو الشخص الذي يدخل الموقع، وبيتم التعرف عليه كمستخدم واحد بواسطة أداة التحليل.</p>
        <p>يعني لو أحمد دخل الموقع 5 مرات في أيام مختلفة، فغالبًا هيتحسب مستخدمًا واحدًا، مش 5 مستخدمين.</p>
        <hr />
        <p><b>ثانيًا: إجمالي الجلسات (Sessions):</b></p>
        <p>الجلسة هي فترة من النشاط والتفاعل داخل الموقع.</p>
        <p>يعني كل مرة يدخل فيها الشخص في زيارة جديدة للموقع، ممكن تبدأ جلسة جديدة.</p>
        <hr />
        <p><b>لو أحمد دخل الموقع:</b></p>
        <ul>
          <li>الساعة 9 صباحًا وتصفح درسًا.</li>
          <li>الساعة 2 ظهرًا ورجع تاني.</li>
          <li>اليوم التالي دخل مرة أخرى.</li>
        </ul>
        <p><b>هنا عندنا:</b> مستخدم واحد (أحمد) · 3 جلسات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · الفرق الجوهري بين إجمالي المستخدمين (Users) وإجمالي الجلسات (Sessions)">
          ٤ · مؤشر معدل التحويل: الفرق بين إجمالي المستخدمين وإجمالي الجلسات 👥
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={95} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-xs font-bold border border-purple-400">
                👥 اي الفرق بين إجمالي المستخدمين وإجمالي الجلسات
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                Users vs Sessions
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «الفرق بينهم بسيط جدًا، وخلينا نفهمه بمثال من موقعك التعليمي.»
            </div>
          </div>
        </Box>

        {/* Right Card: Users Definition & Concept */}
        <Box x={660} y={215} w={560} h={375} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  أولاً: إجمالي المستخدمين (Users) 👤
                </span>
                <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  شخص واحد
                </span>
              </div>

              {/* Exact Text from Image 8 */}
              <div className="p-3 rounded-xl bg-purple-950/70 border border-purple-500/60 mb-3 text-xs text-purple-100 font-bold leading-relaxed">
                المستخدم هو الشخص الذي يدخل الموقع، وبيتم التعرف عليه كمستخدم واحد بواسطة أداة التحليل.
              </div>

              <div className="p-3 rounded-2xl bg-slate-900 border-2 border-slate-700 shadow-md">
                <div className="text-xs font-bold text-amber-300 mb-1 flex items-center gap-1.5">
                  <span>💡</span>
                  <span>مثال عملي:</span>
                </div>
                <div className="text-xs text-slate-100 font-bold leading-relaxed">
                  يعني لو أحمد دخل الموقع <span className="text-sky-300 font-mono">5 مرات</span> في أيام مختلفة، فغالبًا هيتحسب <span className="text-emerald-400 font-black">مستخدمًا واحدًا</span>، مش 5 مستخدمين.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>المستخدم يمثل الهوية الفردية للشخص مهما تكررت زياراته</span>
              <span className="p-0.5 px-2 rounded bg-purple-500/20 text-purple-300 font-bold text-[10.5px]">المستخدمين (Users)</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Sessions Concept & Ahmed Scenario */}
        <Box x={60} y={215} w={580} h={375} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  ثانيًا: إجمالي الجلسات (Sessions) ⏱️
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  فترات النشاط
                </span>
              </div>

              {/* Exact Text from Image 8 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 mb-2.5 text-xs text-slate-200 leading-relaxed font-bold">
                <div>الجلسة هي فترة من النشاط والتفاعل داخل الموقع.</div>
                <div className="text-sky-300 mt-1">يعني كل مرة يدخل فيها الشخص في زيارة جديدة للموقع، ممكن تبدأ جلسة جديدة.</div>
              </div>

              {/* Scenario from Image 8 */}
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 mb-2.5 text-xs">
                <div className="text-amber-300 font-bold mb-1">لو أحمد دخل الموقع:</div>
                <div className="space-y-1 text-slate-200 text-xs font-bold pr-2">
                  <div>• الساعة 9 صباحًا وتصفح درسًا.</div>
                  <div>• الساعة 2 ظهرًا ورجع تاني.</div>
                  <div>• اليوم التالي دخل مرة أخرى.</div>
                </div>
              </div>

              {/* Verdict Box from Image 8 */}
              <div className="p-2.5 rounded-xl bg-purple-950/80 border-2 border-purple-500/70 text-center shadow">
                <div className="text-xs text-amber-300 font-bold mb-1">هنا عندنا:</div>
                <div className="flex justify-center items-center gap-6 text-sm font-black">
                  <span className="text-emerald-300 bg-slate-900 px-3 py-1 rounded-lg border border-emerald-500/50">• مستخدم واحد (أحمد).</span>
                  <span className="text-sky-300 bg-slate-900 px-3 py-1 rounded-lg border border-sky-500/50">• 3 جلسات.</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>أحمد = مستخدم واحد (1 User) ولكنه أجرى 3 جلسات (3 Sessions)!</span>
              <span className="p-0.5 px-2 rounded bg-purple-500/20 text-purple-300 font-bold text-[10.5px]">الجلسات (Sessions)</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="purple" fill="purple" size={17} tc="ink" at={4}>
          📌 <b>القاعدة:</b> أحمد دخل 3 مرات في أوقات مختلفة ⬅️ مستخدم واحد (1 User) لكن 3 جلسات (3 Sessions)!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 24 (part2[11]): Metric 3: CVR (رابعًا: تحديد المقام وطريقة الحساب)
  // -------------------------------------------------------------------------
  {
    id: 'metric-cvr-denominator',
    title: '٤ · مؤشر معدل التحويل: رابعًا · نفهم أهم نقطة في الكتاب (تحديد المقام وطريقة الحساب) ⚖️',
    scene: true,
    notes: (
      <>
        <p><b>رابعًا: نفهم أهم نقطة في الكتاب: تحديد المقام وطريقة الحساب</b></p>
        <p>دي أهم جزئية محتاجة تركيز.</p>
        <p><b>الكتاب بيقول:</b> «نسبة المستخدمين أو الجلسات التي حققت هدفًا محددًا، مع تحديد المقام وطريقة الحساب.»</p>
        <hr />
        <p><b>طيب يعني إيه تحديد المقام؟</b></p>
        <p>المقام هو الرقم الموجود أسفل خط الكسر، وهو العدد اللي هنحسب النسبة بالنسبة إليه. وهنا ممكن نستخدم أكثر من طريقة للحساب حسب الهدف وأداة التحليل.</p>
        <hr />
        <p><b>خلينا نفترض إن عندنا موقعًا تعليميًا:</b></p>
        <ul>
          <li>دخل الموقع 200 مستخدم مختلف.</li>
          <li>المستخدمون دول عملوا 300 جلسة زيارة.</li>
          <li>تم تسجيل 40 عملية تسجيل مكتملة.</li>
        </ul>
        <p><b>هنا عندنا سؤال مهم:</b> هل هنحسب نسبة التسجيل من إجمالي المستخدمين؟ ولا من إجمالي الجلسات؟</p>
        <hr />
        <p><b>الطريقة الأولى: الحساب من إجمالي المستخدمين:</b> (40 / 200) × 100 = 20% (يعني معدل التحويل = 20%).</p>
        <p><b>الطريقة الثانية: الحساب من إجمالي الجلسات:</b> (40 / 300) × 100 = 13.33% (يعني معدل التحويل = 13.33%).</p>
        <hr />
        <p><b>لاحظ الفرق!</b> نفس عدد عمليات التسجيل (40)، لكن النتيجة اختلفت لأننا غيرنا المقام: من المستخدمين 20%، ومن الجلسات 13.33%. لذلك لازم نحدد هنحسب النسبة بالنسبة لإيه.</p>
        <p><b>ملحوظة مهمة:</b> المثال ده للتوضيح، ويفترض فيه أن الـ 40 تمثل أحداث تسجيل مكتملة حدثت في 40 جلسة مختلفة. في أدوات التحليل الفعلية، طريقة احتساب التحويل قد تختلف حسب إعداد الحدث، وهل بنقيس المستخدمين أم الجلسات أم عدد مرات وقوع الحدث.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المؤشرات الرئيسية في تحليلات الويب · رابعًا: تحديد المقام وطريقة الحساب ومقارنة المستخدمين مقابل الجلسات">
          ٤ · مؤشر معدل التحويل: رابعًا · نفهم أهم نقطة في الكتاب (تحديد المقام وطريقة الحساب) ⚖️
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-bold border border-emerald-400">
                ⚖️ رابعًا: نفهم أهم نقطة في الكتاب: تحديد المقام وطريقة الحساب
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                دي أهم جزئية محتاجة تركيز
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              الكتاب بيقول: «نسبة المستخدمين أو الجلسات التي حققت هدفًا محددًا، مع تحديد المقام وطريقة الحساب.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              المقام هو الرقم الموجود أسفل خط الكسر، وهو العدد اللي هنحسب النسبة بالنسبة إليه (مستخدمين أم جلسات).
            </div>
          </div>
        </Box>

        {/* Right Card: Educational Site Case & Method 1 */}
        <Box x={660} y={225} w={560} h={365} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  بيانات الموقع التعليمي 🎓
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  سؤال المقام
                </span>
              </div>

              {/* Exact Stats from Image 6 */}
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-700 mb-2 text-xs">
                <div className="font-bold text-amber-300 mb-1">خلينا نفترض إن عندنا موقعًا تعليميًا:</div>
                <div className="space-y-1 text-slate-200 font-bold">
                  <div>• دخل الموقع 200 مستخدم مختلف.</div>
                  <div>• المستخدمون دول عملوا 300 جلسة زيارة.</div>
                  <div>• تم تسجيل 40 عملية تسجيل مكتملة.</div>
                </div>
              </div>

              <div className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/50 mb-2 text-[11.5px] text-emerald-200 font-bold text-center">
                سؤال مهم: هل هنحسب نسبة التسجيل من إجمالي المستخدمين؟ ولا من إجمالي الجلسات؟
              </div>

              {/* Method 1 from Image 6 */}
              <div className="p-2.5 rounded-xl bg-slate-950 border-2 border-emerald-500/70 text-center shadow">
                <div className="text-[11px] text-amber-300 font-bold mb-0.5">الطريقة الأولى: الحساب من إجمالي المستخدمين</div>
                <div className="text-[10px] text-slate-400 mb-1">(لو هدفنا قياس نسبة المستخدمين الذين سجلوا)</div>
                <div className="font-mono text-sm font-black text-white flex items-center justify-center gap-2">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-emerald-300 border-b border-emerald-400 px-2 font-bold">40</span>
                    <span className="text-sky-300 px-2 font-bold">200</span>
                  </div>
                  <span className="text-emerald-300">× 100 =</span>
                  <span className="text-xl text-emerald-400 font-black">20%</span>
                </div>
                <div className="text-[10.5px] text-emerald-300 font-bold mt-0.5">يعني معدل التحويل = 20%.</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>المستخدمون = 200 ⬅️ معدل التحويل = 20%</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">المستخدمين</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Method 2 & The Golden Contrast */}
        <Box x={60} y={225} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  الطريقة الثانية وملاحظة الفارق 🔍
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  الجلسات
                </span>
              </div>

              {/* Method 2 from Image 7 */}
              <div className="p-2.5 rounded-xl bg-slate-950 border-2 border-sky-500/70 text-center mb-2 shadow">
                <div className="text-[11px] text-amber-300 font-bold mb-0.5">الطريقة الثانية: الحساب من إجمالي الجلسات</div>
                <div className="text-[10px] text-slate-400 mb-1">(لو هدفنا قياس نسبة الجلسات التي حدث خلالها تسجيل)</div>
                <div className="font-mono text-sm font-black text-white flex items-center justify-center gap-2">
                  <div className="inline-flex flex-col items-center">
                    <span className="text-emerald-300 border-b border-sky-400 px-2 font-bold">40</span>
                    <span className="text-sky-300 px-2 font-bold">300</span>
                  </div>
                  <span className="text-sky-300">× 100 =</span>
                  <span className="text-xl text-sky-400 font-black">13.33%</span>
                </div>
                <div className="text-[10.5px] text-sky-300 font-bold mt-0.5">يعني معدل التحويل = 13.33%.</div>
              </div>

              {/* Notice Difference Box from Image 7 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border-2 border-amber-500/70 text-xs mb-2">
                <div className="font-black text-amber-300 mb-1 flex items-center gap-1">
                  <span>🎯</span>
                  <span>لاحظ الفرق!</span>
                </div>
                <div className="text-slate-200 text-[11px] leading-tight mb-1">
                  نفس عدد عمليات التسجيل (40)، لكن النتيجة اختلفت لأننا غيرنا المقام:
                </div>
                <div className="flex justify-around items-center font-bold text-xs">
                  <span className="text-emerald-300">• من المستخدمين: 20%.</span>
                  <span className="text-sky-300">• من الجلسات: 13.33%.</span>
                </div>
                <div className="text-amber-200 font-bold text-[10.5px] mt-1 text-center">
                  لذلك لازم نحدد هنحسب النسبة بالنسبة لإيه.
                </div>
              </div>

              {/* Exact Note from Image 7 */}
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-[10px] text-slate-400 leading-tight">
                📌 <b className="text-slate-300">ملحوظة مهمة:</b> المثال ده للتوضيح، ويفترض فيه أن الـ 40 تمثل أحداث تسجيل مكتملة حدثت في 40 جلسة مختلفة. في أدوات التحليل الفعلية، طريقة احتساب التحويل قد تختلف حسب إعداد الحدث وهل بنقيس المستخدمين أم الجلسات.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>تغيير المقام يغير النسبة؛ لذلك تحديد المقام شرط أساسي!</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">تحديد المقام ⚖️</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          📌 <b>الخلاصة:</b> نفس الـ 40 تحويل تعطي 20% مع المستخدمين و 13.33% مع الجلسات؛ لذلك تحديد المقام شرط أساسي لتكون النسبة واضحة وصحيحة!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 25 (part2[12]): Heuristic Evaluation: أولاً · المفهوم وتفكيك واجهة المستخدم
  // -------------------------------------------------------------------------
  {
    id: 'heuristic-concept-ui',
    title: 'التقييم الإرشادي: أولاً · المفهوم وتفكيك واجهة المستخدم (UI) 🔍',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: يعني إيه التقييم الإرشادي (Heuristic Evaluation)؟</b></p>
        <p><b>التعريف المعتمد:</b> هو عملية مراجعة واجهة المستخدم (UI) بواسطة خبراء، بهدف اكتشاف المشكلات الموجودة في تصميم الموقع أو التطبيق، بالاعتماد على مجموعة من القواعد والمبادئ الإرشادية (Heuristics).</p>
        <hr />
        <p><b>تفكيك التعريف:</b></p>
        <p><b>1. واجهة المستخدم (UI):</b> هي الجزء اللي المستخدم بيشوفه ويتعامل معاه في الموقع أو التطبيق (الأزرار، القوائم، مربعات إدخال البيانات، الرسائل، شكل الصفحات وطريقة ترتيب العناصر).</p>
        <p><b>2. مراجعة يجريها خبراء:</b> مش لازم نستنى المستخدمين يجربوا ويشتكوا، لكن خبراء واجهات المستخدم بيفحصوا كل جزء لمعرفة هل فيه حاجة تربك المستخدم أو تصعب عليه الاستخدام.</p>
        <p><b>3. اكتشاف المشكلات:</b> زر تسجيل مش واضح، مش عارف أنهي صفحة، رسالة الخطأ مش بتوضح، طريقة تنقل مختلفة بدون سبب.</p>
        <p><b>4. بالاعتماد على مبادئ إرشادية:</b> الخبير مش بيحكم بذوقه الشخصي، بل بقواعد معروفة تقيس جودة التصميم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقييم الإرشادي · أولاً: تعريف المراجعة وتفكيك مكونات واجهة المستخدم (UI) وعناصر الفحص">
          التقييم الإرشادي: أولاً · المفهوم وتفكيك واجهة المستخدم (UI) 🔍
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={100} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-bold border border-blue-400">
                🔍 أولاً: يعني إيه التقييم الإرشادي (Heuristic Evaluation)؟
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                مراجعة الخبراء لواجهة المستخدم
              </span>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «هو عملية مراجعة واجهة المستخدم (UI) بواسطة خبراء، بهدف اكتشاف المشكلات الموجودة في تصميم الموقع أو التطبيق، بالاعتماد على مجموعة من القواعد والمبادئ الإرشادية (Heuristics).»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              خلينا نفك التعريف جزء جزء: واجهة المستخدم · مراجعة الخبراء · اكتشاف المشكلات · المبادئ الإرشادية.
            </div>
          </div>
        </Box>

        {/* Right Card: 1. UI Definition & Components */}
        <Box x={660} y={220} w={560} h={370} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  1. واجهة المستخدم (UI) 📱
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  User Interface
                </span>
              </div>

              {/* Exact Text from Image 1 */}
              <div className="p-2 rounded-lg bg-blue-950/70 border border-blue-500/60 mb-2.5 text-xs text-sky-100 font-bold leading-relaxed">
                هي الجزء اللي المستخدم بيشوفه ويتعامل معاه في الموقع أو التطبيق.
              </div>

              {/* 5 UI Elements from Image 1 */}
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 mb-2.5 text-xs">
                <div className="font-bold text-amber-300 mb-1.5">مثلاً:</div>
                <div className="space-y-1 text-slate-200 font-bold pr-1">
                  <div>• الأزرار اللي بتضغط عليها.</div>
                  <div>• القوائم اللي بتتنقل من خلالها.</div>
                  <div>• مربعات إدخال البيانات.</div>
                  <div>• الرسائل اللي بتظهرلك.</div>
                  <div>• شكل الصفحات وطريقة ترتيب العناصر.</div>
                </div>
              </div>

              {/* 3 UI Mockup Tags from Image 1 */}
              <div className="grid grid-cols-3 gap-1.5 text-center text-[10.5px] font-bold">
                <div className="p-1 rounded bg-slate-950 border border-slate-800 text-sky-300">تسجيل دخول Login</div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 text-emerald-300">تطبيق جوال Mobile</div>
                <div className="p-1 rounded bg-slate-950 border border-slate-800 text-purple-300">نموذج Sign In</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>واجهة المستخدم هي كل ما يراه ويتفاعل معه الزائر</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">عناصر UI</span>
            </div>
          </div>
        </Box>

        {/* Left Card: 2, 3, 4 (Experts, Problems, Heuristics) */}
        <Box x={60} y={220} w={580} h={370} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  الخبراء واكتشاف المشكلات والمبادئ 🕵️‍♂️
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  فحص علمي
                </span>
              </div>

              {/* 2. Experts from Image 2 */}
              <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 mb-2 text-xs text-slate-200 leading-snug">
                <span className="text-amber-300 font-bold">2. مراجعة يجريها خبراء: </span>
                مش لازم نستنى المستخدمين يجربوا ويشتكوا؛ أشخاص عندهم خبرة في التصميم يفحصون كل جزء ليكتشفوا هل فيه حاجة تربك المستخدم أو تصعب عليه الاستخدام.
              </div>

              {/* 3. Problems from Image 2 */}
              <div className="p-2 rounded-lg bg-rose-950/40 border border-rose-500/50 mb-2 text-xs">
                <div className="font-bold text-rose-300 mb-1">3. اكتشاف المشكلات (مثلاً):</div>
                <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-200 font-bold">
                  <div>• زر تسجيل الدخول مش واضح.</div>
                  <div>• المستخدم مش عارف أنهي صفحة.</div>
                  <div>• رسالة الخطأ مش بتوضح السبب.</div>
                  <div>• طريقة التنقل مختلفة بدون سبب.</div>
                </div>
              </div>

              {/* 4. Heuristics from Image 2 */}
              <div className="p-2 rounded-xl bg-slate-950 border-2 border-emerald-500/70 text-xs shadow">
                <div className="font-bold text-emerald-300 mb-0.5">4. بالاعتماد على مبادئ إرشادية (Heuristics):</div>
                <div className="text-[11px] text-slate-200 leading-snug font-bold">
                  المقصود إن الخبير مش بيحكم على الموقع حسب ذوقه الشخصي، بل بيستخدم مجموعة من القواعد المعروفة اللي بتقيس جودة وسهولة التصميم.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>الحكم بقواعد علمية معتمدة وليس بالانطباع أو الذوق الشخصي!</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">قواعد إرشادية</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>القاعدة:</b> التقييم الإرشادي يفحص واجهة المستخدم عبر خبراء استناداً لقواعد عملية معتمدة لاكتشاف المشكلات استباقياً!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 26 (part2[13]): Heuristic Evaluation: ثالثًا · لماذا يعد تقييمًا نوعيًا؟
  // -------------------------------------------------------------------------
  {
    id: 'heuristic-qualitative-nature',
    title: 'التقييم الإرشادي: ثالثًا · لماذا يعد تقييمًا نوعيًا؟ والعلاقة باختبار الاستخدام 💡',
    scene: true,
    notes: (
      <>
        <p><b>ثالثًا: ليه التقييم الإرشادي اسمه تقييم نوعي؟</b></p>
        <p><b>الكتاب بيقول:</b> «وهذه المراجعة هي شكل من أشكال التقييم النوعي، لأنه لا يعتمد أساساً على الأرقام، بل يحاول معرفة ما المشكلة؟ ويُستخدم إلى جانب اختبار قابلية الاستخدام وطرق أخرى للبحث عن أسباب مشكلات قابلية الاستخدام.»</p>
        <hr />
        <p><b>مثال عملي: موقع للتقديم على وظيفة:</b></p>
        <p>الخبير مش هيكتفي بأنه يقول إن الموقع حصل فيه 10 أخطاء، لكنه هيحاول يعرف:</p>
        <ul>
          <li>إيه المشكلة اللي بتواجه المستخدم؟</li>
          <li>فين المشكلة بالضبط؟</li>
          <li>ليه التصميم سبب المشكلة دي؟</li>
          <li>إزاي ممكن نصلحها؟</li>
        </ul>
        <hr />
        <p><b>ملحوظة مهمة: التقييم الإرشادي مش بديل لاختبار قابلية الاستخدام، لكنه يُستخدم بجانبه:</b></p>
        <ol>
          <li><b>التقييم الإرشادي:</b> الخبير بنفسه يراجع التصميم ويبحث عن المشكلات باستخدام قواعد إرشادية.</li>
          <li><b>اختبار قابلية الاستخدام:</b> مستخدمون حقيقيون يجربون الموقع وينفذون مهام معينة، وبنراقب الصعوبات.</li>
        </ol>
        <p>وبالتالي الجمع بين الطريقتين بيساعدنا نفهم مشكلات الموقع بصورة أفضل.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقييم الإرشادي · ثالثًا: سبب تصنيفه تقييماً نوعياً وأسئلة الخبير والتكامل مع اختبار الاستخدام">
          التقييم الإرشادي: ثالثًا · لماذا يعد تقييمًا نوعيًا؟ والعلاقة باختبار الاستخدام 💡
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                💡 ثالثًا: ليه التقييم الإرشادي اسمه تقييم نوعي؟
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                البحث عن أسباب المشكلات لا مجرد حصر الأرقام
              </span>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              الكتاب بيقول: «وهذه المراجعة هي شكل من أشكال التقييم النوعي، لأنه لا يعتمد أساساً على الأرقام، بل يحاول معرفة ما المشكلة؟ ويُستخدم إلى جانب اختبار قابلية الاستخدام وطرق أخرى للبحث عن أسباب مشكلات قابلية الاستخدام.»
            </div>
          </div>
        </Box>

        {/* Right Card: Job Application Site Case & The 4 Expert Questions */}
        <Box x={660} y={225} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  مثال عملي: موقع التقديم على وظيفة 💼
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  أسئلة الخبير
                </span>
              </div>

              {/* Exact Text from Image 3 */}
              <div className="p-2 rounded-lg bg-amber-950/70 border border-amber-500/60 mb-2 text-xs text-amber-100 font-bold leading-relaxed">
                تخيل إن عندنا موقع للتقديم على وظيفة، والمستخدم بيواجه صعوبة أثناء التسجيل.
              </div>

              <div className="text-xs text-slate-200 mb-2 font-bold">
                الخبير مش هيكتفي بأنه يقول إن الموقع حصل فيه 10 أخطاء، لكنه هيحاول يعرف:
              </div>

              {/* 4 Expert Questions from Image 3 */}
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-sky-500 font-bold flex items-center justify-between">
                  <span>• إيه المشكلة اللي بتواجه المستخدم؟</span>
                  <span className="text-[10px] text-sky-400">تحديد العيب 🔍</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-amber-500 font-bold flex items-center justify-between">
                  <span>• فين المشكلة بالضبط؟</span>
                  <span className="text-[10px] text-amber-400">مكان الخلل 📍</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-rose-500 font-bold flex items-center justify-between">
                  <span>• ليه التصميم سبب المشكلة دي؟</span>
                  <span className="text-[10px] text-rose-400">السبب الحقيقي ❓</span>
                </div>
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-emerald-500 font-bold flex items-center justify-between">
                  <span>• إزاي ممكن نصلحها؟</span>
                  <span className="text-[10px] text-emerald-400">طريقة الحل 🛠️</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>التقييم النوعي يفسر المشكلة ويقدم الحل الهندسي المباشر</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">تفسير المشكلة</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Important Note & Dual Methodology Synergy */}
        <Box x={60} y={225} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ملحوظة مهمة: التكامل بين الطريقتين 🤝
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  تكامل نوعي
                </span>
              </div>

              {/* Exact Text from Image 3 */}
              <div className="p-2 rounded-lg bg-slate-950 border border-amber-500/60 mb-2 text-xs text-amber-300 font-bold leading-relaxed">
                التقييم الإرشادي مش بديل لاختبار قابلية الاستخدام (Usability Testing)، لكنه ممكن يُستخدم بجانبه.
              </div>

              <div className="text-xs text-slate-200 mb-1.5 font-bold">يعني عندنا طريقتين ممكن نستخدمهم:</div>

              {/* The Two Methods from Image 3 */}
              <div className="space-y-2 mb-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-blue-500 shadow">
                  <div className="font-black text-sky-300 text-xs mb-0.5">1. التقييم الإرشادي:</div>
                  <div className="text-slate-200 text-[11px] leading-tight font-bold">
                    الخبير بنفسه بيراجع التصميم ويبحث عن المشكلات باستخدام قواعد إرشادية.
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow">
                  <div className="font-black text-emerald-300 text-xs mb-0.5">2. اختبار قابلية الاستخدام:</div>
                  <div className="text-slate-200 text-[11px] leading-tight font-bold">
                    بنخلي مستخدمين حقيقيين يجربوا الموقع وينفذوا مهام معينة، وبنراقب الصعوبات اللي بتواجههم.
                  </div>
                </div>
              </div>

              {/* Exact Golden Conclusion from Image 3 */}
              <div className="p-1.5 rounded-lg bg-emerald-950/70 border border-emerald-500/60 text-center text-xs font-black text-emerald-200">
                وبالتالي الجمع بين الطريقتين بيساعدنا نفهم مشكلات الموقع بصورة أفضل.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>الجمع بين فحص الخبير وتجربة المستخدمين يعطي الفهم الأكمل</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">تكامل الطريقتين</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>الخلاصة:</b> التقييم الإرشادي تقييم نوعي يبحث في أسباب المشكلات وطرق حلها، والجمع بينه وبين اختبار الاستخدام يعطي فهماً أفضل!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 27 (part2[14]): Heuristic Evaluation: رابعًا · القواعد الثلاث (1) الاتساق
  // -------------------------------------------------------------------------
  {
    id: 'heuristic-rule-consistency',
    title: 'التقييم الإرشادي: رابعًا · القواعد الثلاث (1) الاتساق (Consistency) 🎯',
    scene: true,
    notes: (
      <>
        <p><b>رابعًا: القواعد الإرشادية الثلاثة (Heuristics)</b></p>
        <p>الكتاب بيذكر ثلاث قواعد إرشادية بيستخدمها الخبير عند فحص الموقع.</p>
        <hr />
        <p><b>1. الاتساق (Consistency):</b></p>
        <p><b>تعريف الكتاب:</b> «ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء الموقع.»</p>
        <p><b>يعني إيه الكلام ده؟</b></p>
        <p>يعني المفروض الموقع يكون ليه أسلوب موحد في التصميم وطريقة التعامل، بحيث لما المستخدم يتعلم استخدام جزء من الموقع يقدر يتعامل مع باقي الأجزاء بسهولة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقييم الإرشادي · رابعًا: القاعدة الأولى (الاتساق Consistency) وتوحيد التصميم وطريقة العمل">
          التقييم الإرشادي: رابعًا · القواعد الثلاث (1) الاتساق (Consistency) 🎯
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-blue-200 text-xs font-bold border border-blue-400">
                🎯 رابعًا: القواعد الإرشادية الثلاثة · 1. الاتساق (Consistency)
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                توحيد التصميم وطريقة العمل
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تعريف الكتاب: «ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء الموقع.»
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              الكتاب بيذكر ثلاث قواعد إرشادية بيستخدمها الخبير عند فحص الموقع، وأولها قاعدة الاتساق.
            </div>
          </div>
        </Box>

        {/* Right Card: What Does It Mean? */}
        <Box x={660} y={225} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  يعني إيه الكلام ده؟ 🤔
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  شرح المفهوم
                </span>
              </div>

              {/* Exact Meaning from Image 4 */}
              <div className="p-3 rounded-2xl bg-blue-950/80 border-2 border-blue-500/70 mb-3 shadow">
                <div className="text-xs text-sky-100 font-bold leading-relaxed">
                  يعني المفروض الموقع يكون ليه <span className="text-amber-300 font-black">أسلوب موحد في التصميم وطريقة التعامل</span>، بحيث لما المستخدم يتعلم استخدام جزء من الموقع يقدر يتعامل مع باقي الأجزاء بسهولة.
                </div>
              </div>

              {/* Elements of Consistency */}
              <div className="space-y-1.5 text-xs text-slate-200">
                <div className="p-2 rounded-lg bg-slate-900 border-r-4 border-sky-500 font-bold">
                  • توحيد ألوان ووظائف الأزرار في كل الصفحات.
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border-r-4 border-emerald-500 font-bold">
                  • تثبيت مكان القوائم وشريط التنقل عبر كل الشاشات.
                </div>
                <div className="p-2 rounded-lg bg-slate-900 border-r-4 border-amber-500 font-bold">
                  • تطابق أحجام الخطوط والمصطلحات المستخدمة.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>تعلم جزء واحد يمكن المستخدم من فهم باقي الموقع فوراً</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">سهولة الاستخدام</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Visual Demonstration (Inconsistent vs Consistent) */}
        <Box x={60} y={225} w={580} h={365} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مقارنة بصرية عملية ⚖️
                </span>
                <span className="text-xs font-bold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded border border-sky-500/40">
                  فحص الخبير
                </span>
              </div>

              {/* Inconsistent Example */}
              <div className="p-2.5 rounded-xl bg-rose-950/40 border-2 border-rose-500/60 mb-2.5 shadow">
                <div className="flex items-center justify-between text-xs font-bold text-rose-300 mb-1">
                  <span>❌ عيب عدم الاتساق (يربك المستخدم):</span>
                  <span className="text-[10px] bg-rose-900 px-2 py-0.5 rounded">غير موحد</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg text-xs text-slate-300 space-y-1">
                  <div>• الصفحة الأولى: زر الحفظ أزرق مستطيل.</div>
                  <div>• الصفحة الثانية: زر الحفظ أخضر بيضاوي في مكان مختلف تماماً.</div>
                </div>
              </div>

              {/* Consistent Example */}
              <div className="p-2.5 rounded-xl bg-emerald-950/40 border-2 border-emerald-500/60 shadow">
                <div className="flex items-center justify-between text-xs font-bold text-emerald-300 mb-1">
                  <span>✅ التصميم المتسق الموحد (يوفر الراحة):</span>
                  <span className="text-[10px] bg-emerald-900 px-2 py-0.5 rounded">موحد ومعتمد</span>
                </div>
                <div className="bg-slate-950 p-2 rounded-lg text-xs text-slate-300 space-y-1">
                  <div>• جميع أزرار الإجراءات الأساسية موحدة الشكل واللون والمكان.</div>
                  <div className="text-emerald-300 font-bold">• المستخدم لا يحتاج لإعادة التفكير في كل صفحة جديدة!</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>الاتساق يلغي الحيرة ويجعل تصفح الموقع سهلاً وبديهياً</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">قاعدة الاتساق</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>قاعدة الاتساق (Consistency):</b> ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء الموقع!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 28 (part2[15]): Heuristic Evaluation: رابعًا · القواعد الثلاث (2) منع الأخطاء
  // -------------------------------------------------------------------------
  {
    id: 'heuristic-rule-error-prevention',
    title: 'التقييم الإرشادي: رابعًا · القواعد الثلاث (2) منع الأخطاء (Error Prevention) 🛡️',
    scene: true,
    notes: (
      <>
        <p><b>2. منع الأخطاء (Error Prevention):</b></p>
        <p><b>تعريف الكتاب:</b> «ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء.»</p>
        <p><b>ركز في كلمة «منع»:</b> لأن الهدف هنا مش إننا نستنى المستخدم يغلط وبعدين نظهرله رسالة خطأ، لكن نحاول نصمم الموقع من البداية بطريقة تقلل احتمالية حدوث الخطأ.</p>
        <hr />
        <p><b>مثال الكتاب نفسه: نموذج إدخال العمر:</b></p>
        <p>الكتاب بيقول إن الموقع ممكن يمنع إدخال حروف بدلاً من الأرقام. يعني لو المستخدم حاول يكتب كلمة (عشرين) بدل الرقم (20)، الموقع يمنعه من إدخال الحروف.</p>
        <p><b>ليه ده اسمه منع الأخطاء؟</b> لأننا صممنا خانة العمر بحيث تقبل الأرقام فقط، وبالتالي قللنا فرصة إدخال بيانات غير صحيحة من البداية.</p>
        <hr />
        <p><b>الفرق بين منع الخطأ والتعامل مع الخطأ:</b></p>
        <ul>
          <li><b>منع الخطأ:</b> منع حدوث المشكلة من البداية (منع إدخال حروف في خانة العمر).</li>
          <li><b>التعامل مع الخطأ:</b> إخبار المستخدم بالمشكلة بعد حدوثها (ظهور رسالة تخبره أن العمر غير صحيح).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقييم الإرشادي · رابعًا: القاعدة الثانية (منع الأخطاء Error Prevention) ومثال نموذج إدخال العمر">
          التقييم الإرشادي: رابعًا · القواعد الثلاث (2) منع الأخطاء (Error Prevention) 🛡️
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                🛡️ رابعًا: القواعد الإرشادية الثلاثة · 2. منع الأخطاء (Error Prevention)
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                الحماية الاستباقية
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تعريف الكتاب: «ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              ركز في كلمة «منع»؛ لأن الهدف مش إننا نستنى المستخدم يغلط ونظهرله رسالة، بل نصمم الموقع من البداية بطريقة تقلل حدوث الخطأ.
            </div>
          </div>
        </Box>

        {/* Right Card: Age Field Example from Image 5 */}
        <Box x={660} y={225} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  مثال الكتاب: نموذج إدخال العمر 🔢
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  نموذج تسجيل
                </span>
              </div>

              {/* Form Mockup Matching Image 5 */}
              <div className="p-3 rounded-2xl bg-slate-950 border-2 border-slate-700 shadow-xl mb-2 text-xs">
                <div className="font-bold text-white mb-2 text-center text-xs">نموذج تسجيل مستخدم</div>
                
                <div className="mb-2">
                  <div className="text-[11px] text-slate-300 mb-0.5">اسم المستخدم</div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 text-[11px]">
                    أدخل اسمك
                  </div>
                </div>

                <div className="mb-1.5">
                  <div className="text-[11px] text-slate-300 mb-0.5">العمر</div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border-2 border-emerald-500/70 text-emerald-300 font-mono font-bold text-xs flex justify-between items-center">
                    <span>17</span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">يقبل أرقام فقط 🔒</span>
                  </div>
                </div>

                <div className="text-[10px] text-emerald-400 font-bold text-center mt-1">
                  هذه الخانة مخصصة للأرقام فقط. مثال توضيحي لكيفية منع إدخال الحروف في خانة العمر.
                </div>
              </div>

              {/* Exact Explanation from Images 5 & 6 */}
              <div className="p-2 rounded-lg bg-amber-950/70 border border-amber-500/60 text-xs text-amber-100 font-bold leading-relaxed">
                لو المستخدم حاول يكتب كلمة (عشرين) بدل الرقم (20)، الموقع يمنعه من إدخال الحروف ⬅️ وبالتالي قللنا فرصة إدخال بيانات غير صحيحة من البداية.
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>منع كتابة الحروف في خانة العمر هو تطبيق مثالي لمنع الخطأ</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">قفل الحروف 🔒</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Additional Examples & Contrast Table from Image 6 */}
        <Box x={60} y={225} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  الفرق بين منع الخطأ والتعامل مع الخطأ ⚖️
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  مقارنة حاسمة
                </span>
              </div>

              {/* Exact Table from Image 6 */}
              <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-950 text-xs mb-2 shadow">
                <div className="grid grid-cols-2 bg-slate-900 font-bold text-center p-1.5 border-b border-slate-800">
                  <div className="text-emerald-300 font-black">منع الخطأ 🛡️</div>
                  <div className="text-amber-300 font-black">التعامل مع الخطأ ⚠️</div>
                </div>
                <div className="grid grid-cols-2 p-1.5 text-[11px] font-bold border-b border-slate-800/80">
                  <div className="text-slate-200 pr-1">منع حدوث المشكلة من البداية</div>
                  <div className="text-slate-300 pr-1">إخبار المستخدم بالمشكلة بعد حدوثها</div>
                </div>
                <div className="grid grid-cols-2 p-1.5 text-[11px] font-bold">
                  <div className="text-emerald-300 pr-1">منع إدخال حروف في خانة العمر</div>
                  <div className="text-amber-300 pr-1">ظهور رسالة تخبره أن العمر غير صحيح</div>
                </div>
              </div>

              {/* 4 Additional Examples from Image 6 */}
              <div className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-200">
                <div className="font-bold text-amber-300 mb-1">أمثلة إضافية لمنع الخطأ:</div>
                <div className="grid grid-cols-2 gap-1 text-[10.5px]">
                  <div>• التحقق من صيغة البريد قبل الإرسال.</div>
                  <div>• تحديد عدد أرقام الهاتف المسموح بها.</div>
                  <div>• رسالة تأكيد قبل حذف ملف مهم.</div>
                  <div>• توضيح شروط كلمة المرور قبل الحساب.</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>منعك من كتابة الحروف منع خطأ، أما إخبارك بعد الإرسال فهو تعامل معه!</span>
              <span className="p-0.5 px-2 rounded bg-amber-500/20 text-amber-300 font-bold text-[10.5px]">الفرق الحاسم</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>قاعدة منع الأخطاء:</b> ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء (حماية استباقية من البداية)!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 29 (part2[16]): Heuristic Evaluation: رابعًا · القواعد الثلاث (3) وضوح حالة النظام
  // -------------------------------------------------------------------------
  {
    id: 'heuristic-rule-system-status',
    title: 'التقييم الإرشادي: رابعًا · القواعد الثلاث (3) وضوح حالة النظام (Visibility) 📢',
    scene: true,
    notes: (
      <>
        <p><b>3. وضوح حالة النظام (Visibility of System Status):</b></p>
        <p><b>تعريف الكتاب:</b> «ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين، يعني أن الموقع يجب أن يخبر المستخدم بوضوح بما يحدث الآن.»</p>
        <p><b>تساؤلات عند غياب الحالة:</b> هل الملف بدأ يترفع؟ هل استقبل ضغطة الزر؟ هل حصل خطأ؟ هل أضغط تانية؟</p>
        <hr />
        <p><b>أمثلة على توضيح حالة النظام:</b></p>
        <ol>
          <li>أثناء تحميل ملف: ظهور مؤشر يوضح نسبة تقدم تحميل الملف (Progress Bar).</li>
          <li>عند حدوث خطأ في الإدخال: ظهور رسالة توضح الخطأ الذي حدث للمستخدم.</li>
          <li>بعد نجاح عملية التسجيل: ظهور رسالة تؤكد نجاح إنشاء الحساب.</li>
        </ol>
        <hr />
        <p><b>أمثلة الكتاب المباشرة:</b> رسائل أخطاء الإدخال · ظهور مؤشر تحميل ملف.</p>
        <p><b>الخلاصة:</b> المستخدم لازم يعرف إيه اللي بيحصل دلوقتي، وهل العملية نجحت أو فشلت أو لسه مستمرة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقييم الإرشادي · رابعًا: القاعدة الثالثة (وضوح حالة النظام Visibility of System Status) وأمثلتها الثلاثة">
          التقييم الإرشادي: رابعًا · القواعد الثلاث (3) وضوح حالة النظام (Visibility) 📢
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={105} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-bold border border-emerald-400">
                📢 رابعًا: القواعد الإرشادية الثلاثة · 3. وضوح حالة النظام (Visibility)
              </span>
              <span style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                إخبار المستخدم بما يحدث الآن
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تعريف الكتاب: «ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين، يعني أن الموقع يجب أن يخبر المستخدم بوضوح بما يحدث الآن.»
            </div>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 3 }}>
              دي قاعدة مهمة جداً؛ لأن المستخدم لازم يكون عارف الموقع بيعمل إيه في الوقت الحالي.
            </div>
          </div>
        </Box>

        {/* Right Card: File Upload Scenario & User Questions (Image 7) */}
        <Box x={660} y={225} w={560} h={365} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  موقف واقعي: رفع ملف دون استجابة 📁
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  حيرة المستخدم
                </span>
              </div>

              {/* Exact Text from Image 7 */}
              <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/60 mb-2 text-xs text-emerald-100 font-bold leading-relaxed">
                تخيل إنك رفعت ملف على موقع، وضغطت على زر رفع الملف، وبعدها مفيش أي تغيير ظاهر على الشاشة. هتبدأ تسأل نفسك:
              </div>

              {/* 4 Questions from Image 7 */}
              <div className="space-y-1.5 text-xs text-slate-200 mb-2">
                <div className="p-1.5 px-2 rounded bg-slate-900 border-r-4 border-rose-500 font-bold">• هل الملف بدأ يترفع؟</div>
                <div className="p-1.5 px-2 rounded bg-slate-900 border-r-4 border-amber-500 font-bold">• هل الموقع استقبل ضغطة الزر؟</div>
                <div className="p-1.5 px-2 rounded bg-slate-900 border-r-4 border-purple-500 font-bold">• هل حصل خطأ؟</div>
                <div className="p-1.5 px-2 rounded bg-slate-900 border-r-4 border-sky-500 font-bold">• هل أضغط مرة تانية؟</div>
              </div>

              {/* Golden Solution from Image 7 */}
              <div className="p-2 rounded-xl bg-slate-950 border border-emerald-500/70 text-xs text-emerald-300 font-bold leading-snug">
                المشكلة هنا إن الموقع مش بيوضح حالة النظام. لكن لو ظهر مؤشر تحميل ونسبة الرفع، المستخدم هيكون عارف إيه اللي بيحصل!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>عدم إظهار الحالة يسبب حيرة المستخدم وتكرار الضغط بالخطأ</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">تجنب الحيرة</span>
            </div>
          </div>
        </Box>

        {/* Left Card: 3 Examples & Textbook Direct Notes (Images 8 & 9) */}
        <Box x={60} y={225} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  أمثلة على توضيح حالة النظام 📊
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  أمثلة الكتاب
                </span>
              </div>

              {/* 3 Visual Examples from Image 8 */}
              <div className="space-y-1.5 mb-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="flex justify-between items-center font-bold text-sky-300 mb-0.5">
                    <span>1. أثناء تحميل ملف:</span>
                    <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 rounded border border-sky-500">75% جاري الرفع</span>
                  </div>
                  <div className="text-[11px] text-slate-200">ظهور مؤشر يوضح نسبة تقدم تحميل الملف (Progress Bar).</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="flex justify-between items-center font-bold text-rose-300 mb-0.5">
                    <span>2. عند حدوث خطأ في الإدخال:</span>
                    <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 rounded border border-rose-500">تنبيه بالخطأ</span>
                  </div>
                  <div className="text-[11px] text-slate-200">ظهور رسالة توضح الخطأ الذي حدث للمستخدم.</div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700">
                  <div className="flex justify-between items-center font-bold text-emerald-300 mb-0.5">
                    <span>3. بعد نجاح عملية التسجيل:</span>
                    <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 rounded border border-emerald-500">Profile saved ✅</span>
                  </div>
                  <div className="text-[11px] text-slate-200">ظهور رسالة تؤكد نجاح إنشاء الحساب.</div>
                </div>
              </div>

              {/* Direct Note from Image 9 */}
              <div className="p-2 rounded-lg bg-emerald-950/70 border border-emerald-500/60 text-xs text-emerald-100 font-bold leading-tight">
                مش كفاية إن النظام ينفذ العمليات في الخلفية، لازم كمان يوضح للمستخدم حالة العملية!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>المستخدم لازم يعرف إيه اللي بيحصل: نجحت أو فشلت أو مستمرة!</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">حالة فورية</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner from Image 9 */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          📌 <b>الخلاصة:</b> المستخدم لازم يعرف إيه اللي بيحصل دلوقتي، وهل العملية نجحت أو فشلت أو لسه مستمرة!
        </Box>
      </Scene>
    ),
  },
];
