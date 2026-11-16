// Board scenes · Unit 4 · Lesson 3 · Web Analytics & Metrics (PV, Bounce, CVR), Heuristic Evaluation & 3 Golden Rules
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  // -------------------------------------------------------------------------
  // FRAME 1 of part2: Web Analytics & 3 Key Metrics (PV, Bounce Rate, CVR)
  // -------------------------------------------------------------------------
  {
    id: 'analytics-and-heatmaps',
    title: 'تحليلات الويب والمؤشرات الثلاثة: PV والارتداد والتحويل',
    scene: true,
    notes: (
      <>
        <p><b>المؤشرات الرئيسية في تحليلات الويب - المنهج المعتمد:</b></p>
        <p><b>نص التعريف المعتمد الرسمي لتحليلات الويب:</b> «جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج. وهي إحدى أدوات التقييم الكمي، وتختلف أسماء المقاييس وطرق حسابها باختلاف الأداة وإعداداتها.»</p>
        <p><b>ثلاثية تحليلات الويب:</b></p>
        <ul>
          <li><b>الوصول (Reach):</b> كم شخصاً وصل إلى الموقع؟</li>
          <li><b>التفاعل (Engagement):</b> ماذا فعل الزوار داخل الموقع؟</li>
          <li><b>النتائج (Results):</b> هل حقق الموقع الهدف المطلوب، مثل التسجيل أو الشراء؟</li>
        </ul>
        <p><b>جدول المؤشرات الثلاثة المعتمدة:</b></p>
        <ol>
          <li><b>مشاهدات الصفحة (PV - Page Views):</b> هو إجمالي عدد مرات مشاهدة صفحة معينة. يحسب إجمالي مرات المشاهدة، ويشمل المشاهدات المتكررة، وليس عدد الأشخاص الزائرين. يمكن لزائر واحد أن يشاهد مرات عديدة (مثال: زائر واحد تصفح الموقع 4 مرات = 4 PVs).</li>
          <li><b>معدل الارتداد (Bounce Rate):</b> نسبة الزوار الذين يدخلون الموقع ثم يغادرونه بعد مشاهدة صفحة واحدة دون التفاعل أو الانتقال لصفحات أخرى. مؤشر تختلف طريقة حسابه بين الأدوات لذلك يرجع لتعريف الأداة؛ يساعد على ملاحظة ضعف التفاعل لكنه لا يفسر السبب وحده!</li>
          <li><b>معدل التحويل (CVR - Conversion Rate):</b> نسبة المستخدمين أو الجلسات التي حققت هدفاً محدداً (تسجيل/شراء)، مع تحديد المقام وطريقة الحساب (المقام: هل نقسم على إجمالي الزوار أم إجمالي الجلسات؟ مثال: 200 زائر ➔ 40 سجلوا ➔ CVR = 20%).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="طرق التقييم الكمي بالأرقام الدقيقة · ثلاثية التحليلات والمقاييس الثلاثة المعتمدة">
          تحليلات الويب: المؤشرات الثلاثة الرئيسية (PV · الارتداد · التحويل CVR) 📊
        </Heading>

        {/* Top Banner: Web Analytics Definition & Reach-Engagement-Results */}
        <Box x={60} y={115} w={1160} h={85} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              📌 نص التعريف المعتمد لتحليلات الويب:
            </span>
            &nbsp;
            <span style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.»
            </span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: 4, fontSize: 13, color: 'var(--pen-ink)' }}>
              <span>🌐 <b>الوصول:</b> كم شخصاً وصل للموقع؟</span>
              <span>•</span>
              <span>🖱️ <b>التفاعل:</b> ماذا فعل الزوار في الموقع؟</span>
              <span>•</span>
              <span>🎯 <b>النتائج:</b> هل تحقق الهدف المطلوب (تسجيل/شراء)؟</span>
            </div>
          </div>
        </Box>

        {/* 3 Columns: PV, Bounce Rate, and CVR with Visual Math Diagrams */}
        {/* Metric 1: PV */}
        <Box x={860} y={215} w={360} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  👁️ ١ · مشاهدات الصفحة (PV)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 6px', borderRadius: '4px' }}>
                  Page Views
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-sky-300 block mb-0.5">📌 النص المعتمد:</b>
                «هو إجمالي عدد مرات مشاهدة صفحة معينة. يشمل المشاهدات المتكررة وليس عدد الأشخاص.»
              </div>

              {/* Visual Math Card */}
              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-sky-300 font-bold">
                  🎯 مثال توضيحي:
                </div>
                <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] space-y-1">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>عدد الزوار الفعليين:</span>
                    <b className="text-sky-300">١ زائر فقط</b>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>شاهد الصفحة ٤ مرات:</span>
                    <b className="text-emerald-400 font-bold">PV = 4</b>
                  </div>
                  <div className="text-[10px] text-amber-300 font-bold border-t border-slate-800 pt-1">
                    ⚠️ تذكّر: PV لا يساوي عدد الأشخاص الفريدين!
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              يحسب كل فتح للصفحة حتى لو من نفس الشخص!
            </div>
          </div>
        </Box>

        {/* Metric 2: Bounce Rate */}
        <Box x={460} y={215} w={360} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ↩️ ٢ · معدل الارتداد (Bounce)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 6px', borderRadius: '4px' }}>
                  Bounce Rate
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-amber-300 block mb-0.5">📌 النص المعتمد:</b>
                «نسبة الزوار الذين يدخلون الموقع ثم يغادرونه بعد صفحة واحدة دون التفاعل أو الانتقال لأخرى.»
              </div>

              {/* Visual Math Card */}
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-amber-300 font-bold">
                  🎯 مثال عددي:
                </div>
                <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] space-y-1">
                  <div className="flex justify-between text-slate-300">
                    <span>زار الموقع: <b>10 أشخاص</b></span>
                    <span>غادر فوراً: <b>5 أشخاص</b></span>
                  </div>
                  <div className="p-1 rounded bg-amber-900/60 text-center font-bold text-amber-200 text-xs">
                    معدل الارتداد = 50%
                  </div>
                  <div className="text-[10px] text-rose-300 font-bold">
                    ⚠️ تحذير الامتحان: يرصد ضعف التفاعل لكنه لا يفسر السبب بمفرده!
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              نحتاج للمقابلات لنفهم لماذا هرب الزائر!
            </div>
          </div>
        </Box>

        {/* Metric 3: Conversion Rate CVR */}
        <Box x={60} y={215} w={360} h={365} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🎯 ٣ · معدل التحويل (CVR)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 6px', borderRadius: '4px' }}>
                  Conversion
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-emerald-300 block mb-0.5">📌 النص المعتمد:</b>
                «نسبة المستخدمين أو الجلسات التي حققت هدفاً محدداً، مع تحديد المقام وطريقة الحساب.»
              </div>

              {/* Visual Math Card */}
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-emerald-300 font-bold">
                  🎯 المثال العملي وتحديد المقام:
                </div>
                <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] space-y-1">
                  <div className="text-[10px] text-slate-400">
                    المقام: هل نحسب من إجمالي الزوار أم الجلسات؟
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>دخل: <b>200 زائر</b></span>
                    <span>سجلوا: <b>40 طالباً</b></span>
                  </div>
                  <div className="p-1 rounded bg-emerald-900/60 text-center font-bold text-emerald-200 text-xs">
                    CVR = (40 ÷ 200) = 20%
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              المقياس الأول لنجاح الموقع في تحقيق غايته!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={5}>
          📌 <b>تنبيه هام للامتحان:</b> تختلف أسماء المقاييس وطريقة حسابها باختلاف أداة التحليلات وإعداداتها!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // FRAME 2 of part2: Heuristic Evaluation & The 3 Golden Rules
  // -------------------------------------------------------------------------
  {
    id: 'heuristics-nielsen',
    title: 'التقييم الإرشادي: مراجعة الخبراء والقواعد الثلاث (Heuristic Evaluation)',
    scene: true,
    notes: (
      <>
        <p><b>التقييم الإرشادي (Heuristic Evaluation) - المنهج المعتمد:</b></p>
        <p><b>نص التعريف المعتمد الرسمي:</b> «عبارة عن مراجعة يجريها خبراء لواجهة المستخدم (UI) لاكتشاف ما بها من مشكلات، استنادًا إلى قواعد مبادئ إرشادية عملية (heuristics).»</p>
        <p><b>لماذا يُعد تقييماً نوعياً؟</b> لأنه لا يعتمد أساساً على الأرقام، بل يحاول معرفة ما المشكلة؟ ويُستخدم إلى جانب اختبار قابلية الاستخدام وطرق أخرى لبحث أسباب مشكلات الاستخدام.</p>
        <p><b>القواعد الإرشادية الثلاث المعتمدة:</b></p>
        <ol>
          <li><b>الاتساق:</b> ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء عبر الموقع.</li>
          <li><b>منع الأخطاء:</b> ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء (مثال: في نموذج إدخال العمر، يمكن للموقع أن يمنع إدخال حروف بدلاً من الأرقام).</li>
          <li><b>وضوح حالة النظام:</b> ما إذا كانت حالة النظام موضحة بوضوح للمستخدمين، يعني أن الموقع يجب أن يخبر المستخدم بوضوح بما يحدث الآن، مثل: رسائل أخطاء الإدخال - ظهور مؤشر تحميل ملف.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مراجعة الخبراء لواجهة UI وفق القواعد الإرشادية المعتمدة في المنهج المعتمد">
          التقييم الإرشادي: القواعد العملية الثلاث لفحص واجهة المستخدم 📋🔍
        </Heading>

        {/* Top Banner: Verbatim Definition */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              📌 نص التعريف المعتمد للتقييم الإرشادي:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «مراجعة يجريها خبراء لواجهة المستخدم (UI) لاكتشاف ما بها من مشكلات، استنادًا إلى قواعد مبادئ إرشادية عملية.»
            </span>
            <div style={{ fontSize: 13.5, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 3 }}>
              تقييم نوعي يقوم به خبراء متخصصون ➔ لا يعتمد أساساً على الأرقام، بل يبحث أسباب المشكلات بعين خبيرة!
            </div>
          </div>
        </Box>

        {/* 3 Columns: The 3 Heuristic Rules with Concrete Visual UI Mockups */}
        {/* Rule 1: Consistency */}
        <Box x={860} y={215} w={360} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🎯 ١ · الاتساق (Consistency)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 6px', borderRadius: '4px' }}>
                  قاعدة ١
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-sky-300 block mb-0.5">📌 النص المعتمد:</b>
                «ما إذا كان التصميم وطريقة العمل متشابهين وموحدين في جميع أجزاء عبر الموقع.»
              </div>

              {/* Visual UI Mockup */}
              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-sky-300 font-bold flex items-center justify-between">
                  <span>🖥️ واجهة بصرية: أزرار موحدة</span>
                  <span className="text-[10px] text-emerald-400">✓ متسق</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/90 p-1.5 rounded border border-slate-800 text-[11px]">
                  <span>واجهة الرئيسية:</span>
                  <button className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold text-[10px]">حفظ التغييرات</button>
                </div>
                <div className="flex justify-between items-center bg-slate-900/90 p-1.5 rounded border border-slate-800 text-[11px]">
                  <span>واجهة المواد:</span>
                  <button className="px-2 py-0.5 rounded bg-sky-600 text-white font-bold text-[10px]">حفظ التغييرات</button>
                </div>
                <div className="text-[10.5px] text-slate-400">
                  ⚠️ الخطأ: تغيير لون أو مكان الزر بين الصفحات يربك المستخدم!
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              توحيد الألوان والأزرار يمنح راحة وثقة تامة!
            </div>
          </div>
        </Box>

        {/* Rule 2: Error Prevention */}
        <Box x={460} y={215} w={360} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  🛡️ ٢ · منع الأخطاء (Error Prev.)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 6px', borderRadius: '4px' }}>
                  قاعدة ٢
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-amber-300 block mb-0.5">📌 النص المعتمد:</b>
                «ما إذا كان التصميم يجعل من الصعب على المستخدمين ارتكاب الأخطاء.»
              </div>

              {/* Visual UI Mockup (Age Field Example from Curriculum) */}
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-amber-300 font-bold flex items-center justify-between">
                  <span>🎯 مثال المنهج المعتمد: نموذج إدخال العمر</span>
                  <span className="text-[10px] text-rose-400">حماية ذكية</span>
                </div>
                <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] space-y-1">
                  <div className="text-slate-300">حقل العمر:</div>
                  <div className="flex items-center gap-1">
                    <span className="px-2 py-1 rounded bg-slate-800 border border-rose-500 text-rose-300 font-bold flex-1">
                      عشرين سنة ❌
                    </span>
                  </div>
                  <div className="text-[10px] text-rose-400 font-bold">
                    ⚠️ النظام يمنع الحروف: "يُسمح بالأرقام فقط (17-99)"
                  </div>
                </div>
                <div className="text-[10.5px] text-slate-400">
                  الوقاية من الخطأ أفضل من إظهار رسالة خطأ بعد الإرسال!
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              التصميم الذكي يمنع وقوع الخطأ من الأساس!
            </div>
          </div>
        </Box>

        {/* Rule 3: Visibility of System Status */}
        <Box x={60} y={215} w={360} h={365} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  📢 ٣ · وضوح حالة النظام
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 6px', borderRadius: '4px' }}>
                  قاعدة ٣
                </span>
              </div>

              {/* Exact Verbatim Definition */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11.5px] mb-2 text-slate-200">
                <b className="text-emerald-300 block mb-0.5">📌 النص المعتمد:</b>
                «ما إذا كانت حالة النظام موضحة بوضوح، يخبر المستخدم بما يحدث الآن.»
              </div>

              {/* Visual UI Mockup (Upload Progress Bar) */}
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-600/60 text-xs space-y-1.5">
                <div className="text-[11px] text-emerald-300 font-bold flex items-center justify-between">
                  <span>🎯 مثال المنهج المعتمد: رفع ملف الطالب</span>
                  <span className="text-[10px] text-emerald-400">تغذية راجعة</span>
                </div>
                <div className="bg-slate-900/90 p-2 rounded border border-slate-800 text-[11px] space-y-1.5">
                  <div className="flex justify-between text-[10.5px] text-slate-300">
                    <span>جاري رفع استمارة الطالب...</span>
                    <span className="text-emerald-400 font-bold">78%</span>
                  </div>
                  {/* Progress Bar Mockup */}
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden border border-slate-700">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                  <div className="text-[10px] text-slate-400">
                    ⏳ يتبقى 3 ثوانٍ تقريباً · لا تترك المستخدم أمام شاشة صامتة!
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              الموقع يجب أن يخبر المستخدم دائماً بما يجري الآن!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="purple" fill="purple" size={17} tc="ink" at={5}>
          📌 <b>سؤال امتحان البكالوريا (المنهج المعتمد):</b> القواعد الإرشادية الثلاث المعتمدة هي: الاتساق، ومنع الأخطاء، ووضوح حالة النظام!
        </Box>
      </Scene>
    ),
  },
];
