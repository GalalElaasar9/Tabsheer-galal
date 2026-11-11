// Board scenes · Unit 4 · Lesson 2 · Wireframe Architecture and CRAP Principles Table
import { useState } from 'react';
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const wireframeFrames: FrameDef[] = [
  {
    id: 'wireframe-concept-intro',
    title: '١ · ما هو المخطط الهيكلي وتشبيه البناء',
    scene: true,
    notes: (
      <>
        <p><b>ثانياً: المخطط الهيكلي (Wireframe):</b></p>
        <p>بعد ما فهمنا في النقطة الأولى مين المستخدم وإيه احتياجاته باستخدام Persona، نيجي للخطوة التالية: <b>هننظم المعلومات والعناصر داخل الموقع إزاي قبل ما نبدأ التصميم النهائي؟</b></p>
        <p><b>تشبيه بناء البيت:</b> تخيّل إننا بنبني بيت: قبل ما نختار ألوان الحوائط والديكورات والأثاث، لازم الأول نحدد مكان كل غرفة ومكان الأبواب والشبابيك. نفس الفكرة في تصميم المواقع: قبل اختيار الألوان والصور والخطوط، لازم نحدد مكان كل عنصر في الصفحة.</p>
        <p><b>تعريف الكتاب:</b> مخطط أولي يساعد على تحديد أماكن العناصر وأولوياتها، وغالباً يستخدم تفاصيل بصرية قليلة حتى يركز الفريق على البنية قبل التصميم البصري النهائي.</p>
        <p><b>ببساطة للطلاب:</b> الـ Wireframe رسم مبدئي نحدد فيه: مكان الشعار، مكان القوائم، مكان العناوين، مكان الصور، مكان الأزرار، ومكان المعلومات المهمة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفهوم الثاني: تنظيم المعلومات وبنية الصفحة وتشبيه المخطط المعماري للبناء">
          ١ · المخطط الهيكلي للموقع (Wireframe): المفهوم وتشبيه البناء 📐
        </Heading>

        {/* Top Transition Banner */}
        <Box x={50} y={105} w={1180} h={80} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', opacity: 0.9 }}>
              بعد ما فهمنا مين المستخدم وإيه احتياجاته باستخدام Persona ➔ نيجي للسؤال الهندسي الحاسم:
            </span>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)', marginTop: 4 }}>
              «هننظم المعلومات والعناصر داخل الموقع إزاي قبل ما نبدأ التصميم النهائي؟»
            </div>
          </div>
        </Box>

        {/* Right Box: Architectural Analogy */}
        <Box x={660} y={195} w={570} h={410} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🏠 تشبيه رائع: مثل بناء بيت جديد!
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  المسودة المعمارية
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                🏗️ <b>تخيّل إننا بنبني بيت:</b>
                <br />
                قبل ما نختار ألوان الحوائط والديكورات وشكل الأثاث، لازم الأول نحدد:
                <b style={{ color: '#c084fc' }}> مكان كل غرفة، ومكان الأبواب والشبابيك ومسارات الحركة!</b>
              </div>

              {/* Parallel Comparison Diagram */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: 10 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28 }}>📐</div>
                  <div style={{ fontSize: 12, fontWeight: 'bold', color: '#c084fc' }}>مخطط المبنى</div>
                  <div style={{ fontSize: 10.5, color: '#94a3b8' }}>غرف · أبواب · شبابيك</div>
                </div>
                <div style={{ fontSize: 20, color: '#a855f7' }}>➔</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28 }}>🖥️</div>
                  <div style={{ fontSize: 12, fontWeight: 'bold', color: '#38bdf8' }}>مخطط الويب (Wireframe)</div>
                  <div style={{ fontSize: 10.5, color: '#94a3b8' }}>أزرار · صور · عناوين</div>
                </div>
                <div style={{ fontSize: 20, color: '#a855f7' }}>➔</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28 }}>🎨</div>
                  <div style={{ fontSize: 12, fontWeight: 'bold', color: '#4ade80' }}>التصميم النهائي</div>
                  <div style={{ fontSize: 10.5, color: '#94a3b8' }}>ألوان · خطوط · ديكور</div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-700/50" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#f3e8ff' }}>
                💡 <b>نفس الفكرة في تصميم المواقع:</b> قبل اختيار الألوان والصور والخطوط، لازم نحدد مكان كل عنصر في الصفحة أولاً.
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الأساس الهيكلي يسبق دائماً الزخرفة الجمالية!
            </div>
          </div>
        </Box>

        {/* Left Box: Definition & 6 Elements */}
        <Box x={50} y={195} w={590} h={410} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  📖 ١ · يعني إيه Wireframe؟
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  كتاب الفائز
                </span>
              </div>

              {/* Definition */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 12.5, lineHeight: 1.5, color: '#fef08a' }}>
                <b style={{ color: '#38bdf8' }}>📌 تعريف الكتاب المعتمد:</b>
                <br />
                «مخطط أولي يساعد على <b>تحديد أماكن العناصر وأولوياتها</b>، وغالباً يستخدم تفاصيل بصرية قليلة حتى يركز الفريق على <b>البنية قبل التصميم البصري النهائي</b>.»
              </div>

              {/* 6 Elements */}
              <div style={{ fontSize: 12.5, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 4 }}>
                💡 ببساطة للطلاب: رسم مبدئي نحدد فيه أماكن العناصر:
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-xs" style={{ fontSize: 12, lineHeight: 1.4, color: 'var(--pen-ink)' }}>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  🏷️ <b>مكان الشعار</b> (Logo)
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  📋 <b>مكان القوائم</b> (Menus)
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  🔤 <b>مكان العناوين</b> (Headings)
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  🖼️ <b>مكان الصور</b> (Images)
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  🔘 <b>مكان الأزرار</b> (Buttons)
                </div>
                <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800">
                  ⭐ <b>مكان المعلومات المهمة</b>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: '#ffffff', fontWeight: 'bold', background: 'rgba(234, 88, 12, 0.2)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(234, 88, 12, 0.4)' }}>
              🎯 يعني بنهتم الأول بـ: المعلومة هتكون فين؟ والعناصر هترتب إزاي؟ مش هتكون ألوانها إيه!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>الخلاصة:</b> المخطط الهيكلي (Wireframe) هو المسودة المعمارية للموقع؛ يُرسم بالرمادي ليرتب أولويات المعلومة دون تشتيت!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'wireframe-student-results-case',
    title: '٢ · مثال عملي: مخطط صفحة نتائج الطلاب',
    scene: true,
    notes: (
      <>
        <p><b>٢ · مثال عملي: تصميم صفحة نتائج الطلاب:</b></p>
        <p>خلينا نرجع لموقع المدرسة اللي اتكلمنا عنه في Persona: إحنا عرفنا إن ولي الأمر محتاج يدخل الموقع ويعرف درجات ابنه بسهولة. دلوقتي هنخطط شكل صفحة النتائج باستخدام Wireframe.</p>
        <p><b>مكونات المخطط الهيكلي:</b></p>
        <ul>
          <li>شريط علوي يضم الشعار وقائمة روابط سريعة.</li>
          <li>صندوق رئيسي لعنوان الصفحة (نتائج الطلاب).</li>
          <li>حقل إدخال رقم الجلوس وزر عرض النتيجة بشكل بارز.</li>
          <li>مساحة رمادية مخصصة لظهور تفاصيل النتيجة (اسم الطالب والمواد والمجموع).</li>
        </ul>
        <p><b>الملاحظة المنهجية:</b> لاحظ إننا استخدمنا مربعات ونصوصاً بسيطة لتوضيح أماكن العناصر فقط دون أي ألوان أو صور.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تطبيق عملي: ربط شخصية ولي الأمر بمخطط هيكلي رمادي مبسط لصفحة النتائج">
          ٢ · تطبيق عملي: المخطط الهيكلي لصفحة نتائج الطلاب 📋
        </Heading>

        {/* Top Context Banner */}
        <Box x={50} y={105} w={1180} h={75} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 17, color: 'var(--pen-ink)' }}>
              نرجع لموقع المدرسة وشخصية ولي الأمر: عرفنا إنه محتاج يدخل ويعرف درجات ابنه بسهولة ➔
            </span>
            &nbsp;
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              دلوقتي هنخطط شكل صفحة النتائج باستخدام Wireframe رمادي مبدئي!
            </span>
          </div>
        </Box>

        {/* Center: The Simulated Wireframe Browser Window */}
        <Box x={290} y={190} w={940} h={415} c="purple" fill="purple" at={2}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal' }}>
            {/* Browser Wireframe Frame */}
            <div className="rounded-lg bg-slate-950 border-2 border-slate-700 p-3 h-full flex flex-col justify-between" style={{ fontFamily: 'monospace' }}>
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b-2 border-slate-800 pb-2 mb-2">
                <div className="px-3 py-1.5 rounded bg-slate-800 border border-slate-600 text-slate-300 text-xs font-bold">
                  🏷️ شعار المدرسة
                </div>
                <div className="flex gap-2 text-xs text-slate-400">
                  <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">الرئيسية</span>
                  <span className="px-2 py-1 rounded bg-slate-800 border border-slate-600 text-white font-bold">النتائج</span>
                  <span className="px-2 py-1 rounded bg-slate-900 border border-slate-800">تواصل معنا</span>
                </div>
              </div>

              {/* Title Block */}
              <div className="p-2 rounded bg-slate-900 border border-slate-700 text-center mb-2">
                <div style={{ fontSize: 15, fontWeight: 'bold', color: '#ffffff' }}>
                  نتائج الطلاب — استعلم عن نتيجة الطالب
                </div>
              </div>

              {/* Input & Action Form Card */}
              <div className="p-3 rounded bg-slate-900/90 border border-slate-700 mb-2">
                <div style={{ fontSize: 13, color: '#cbd5e1', marginBottom: 4, fontWeight: 'bold' }}>
                  أدخل رقم الجلوس:
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-600 text-slate-500 text-xs mb-3 text-left">
                  ....................................................................................
                </div>
                <div className="p-2 rounded bg-slate-700 hover:bg-slate-600 border border-slate-500 text-center text-white font-bold text-sm shadow cursor-pointer">
                  🔘 زر عرض النتيجة
                </div>
              </div>

              {/* Results Placeholder Area */}
              <div className="p-3 rounded bg-slate-900/60 border-2 border-dashed border-slate-700 text-center mb-2">
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#94a3b8' }}>
                  📊 مكان ظهور النتيجة:
                </div>
                <div style={{ fontSize: 11, color: '#64748b', marginTop: 2 }}>
                  [اسم الطالب — المواد الدراسية — الدرجات بالتفصيل — المجموع الكلي]
                </div>
              </div>

              {/* Footer Bar */}
              <div className="text-center text-xs text-slate-500 border-t border-slate-800 pt-1">
                حقوق النشر © معلومات المدرسة
              </div>
            </div>
          </div>
        </Box>

        {/* Right Info Box */}
        <Box x={50} y={190} w={220} h={415} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 4 }}>
                💡 تحليل المخطط
              </div>
              <div className="space-y-2 text-xs" style={{ fontSize: 11.5, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div>• <b>مربعات وخطوط:</b> بدون ألوان ولا صور تشغل العين.</div>
                <div>• <b>مكان الزر واضح:</b> في صدارة الشاشة لخدمة ولي الأمر.</div>
                <div>• <b>ترتيب منطقي:</b> عنوان ➔ إدخال ➔ زر ➔ ظهور الشهادة.</div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', background: 'rgba(249, 115, 22, 0.1)', padding: '6px', borderRadius: '4px' }}>
              تصميم مبدئي (Low-Fidelity)
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={618} w={1180} h={68} c="pink" fill="pink" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            📌 <b>ملاحظة منهجية حاسمة:</b>
            &nbsp;
            «لاحظ إننا استخدمنا مربعات ونصوصاً بسيطة لتوضيح أماكن العناصر فقط، دون الالتفات لألوانها أو زخرفتها في هذه المرحلة!»
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'wireframe-why-before-design',
    title: '٣ · لماذا نعمل Wireframe قبل التصميم النهائي؟',
    scene: true,
    notes: (
      <>
        <p><b>٣ · ليه بنعمل Wireframe قبل التصميم النهائي؟</b></p>
        <p><b>السبب الجوهري:</b> لأننا عايزين نركز على تنظيم المعلومات أولاً!</p>
        <p><b>الأسئلة الأربعة التي يجيب عنها المخطط الهيكلي:</b></p>
        <ol>
          <li>هل زر عرض النتيجة واضح وبارز؟</li>
          <li>هل مكان إدخال رقم الجلوس مناسب ومريح؟</li>
          <li>هل ترتيب المعلومات منطقي ومتسلسل؟</li>
          <li>هل المستخدم يقدر يوصل للهدف بسهولة وسرعة؟</li>
        </ol>
        <p><b>سؤال علل:</b> لو بدأنا بالألوان والصور والتفاصيل من البداية، ممكن ننشغل بالشكل وننسى تنظيم المعلومات، مما يولد موقعاً جميلاً ظاهرياً لكنه فاشل ومحبط في الاستخدام!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="سؤال علل الامتحاني: لماذا نبدأ بالهيكل الرمادي ونتجنب البدء بالألوان والصور؟">
          ٣ · لماذا نعمل Wireframe قبل التصميم النهائي؟ (سؤال علل) ❓
        </Heading>

        {/* Top Core Reason Banner */}
        <Box x={50} y={105} w={1180} h={80} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              ❓ السؤال الامتحاني الهام: <b>ليه بنعمل Wireframe قبل التصميم النهائي؟</b>
            </span>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-orange)', marginTop: 4 }}>
              «لأننا عايزين نركز على تنظيم المعلومات وهيكلة الصفحة الأول!»
            </div>
          </div>
        </Box>

        {/* Right Box: 4 Core Questions */}
        <Box x={660} y={195} w={570} h={410} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🎯 ٤ أسئلة جوهرية نفحصها في المخطط
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', padding: '2px 8px', borderRadius: '6px', border: '1px solid #0284c7' }}>
                  اختبار المنطقية
                </span>
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginBottom: 8 }}>
                المخطط الهيكلي يتيح لنا الإجابة على هذه التساؤلات بوضوح:
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#38bdf8' }}>١. هل زر عرض النتيجة واضح؟</b>
                  <br />
                  التأكد من أن زر الإجراء الرئيسي يقع في بؤرة العين فور فتح الصفحة.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#4ade80' }}>٢. هل مكان إدخال رقم الجلوس مناسب؟</b>
                  <br />
                  موقع الحقل مريح ولا يجبر المستخدم على التمرير الطويل.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#fb923c' }}>٣. هل ترتيب المعلومات منطقي؟</b>
                  <br />
                  تسلسل تدفق طبيعي: العنوان ➔ الإدخال ➔ الزر ➔ النتيجة.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#c084fc' }}>٤. هل المستخدم يقدر يوصل للهدف بسهولة؟</b>
                  <br />
                  تحقيق مهمة ولي الأمر في أقل من ثانيتين ودون حيرة.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الإجابة بنعم على هذه الأسئلة تضمن نجاح تجربة المستخدم (UX)!
            </div>
          </div>
        </Box>

        {/* Left Box: Warning & Grayscale Reason */}
        <Box x={50} y={195} w={590} h={410} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  ⚠️ التحذير المنهجي (سؤال علل)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-red)' }}>
                  فخ التشتت بالألوان
                </span>
              </div>

              {/* Warning Quote from screenshot */}
              <div className="p-3 rounded-lg bg-red-950/50 border border-red-700/60 mb-3" style={{ fontSize: 14, lineHeight: 1.5, color: '#fecaca' }}>
                <b style={{ color: '#ffffff' }}>🚨 القاعدة الذهبية للتحذير:</b>
                <div style={{ fontWeight: 'bold', fontSize: 15, color: '#fef08a', marginTop: 4 }}>
                  «لو بدأنا بالألوان والصور والتفاصيل من البداية، ممكن ننشغل بالشكل وننسى تنظيم المعلومات!»
                </div>
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: 'var(--pen-red)' }}>• تشتت العميل وفريق العمل:</b>
                  <br />
                  الجدل حول درجة اللون الأزرق أو شكل الصورة بدلاً من مناقشة سهولة وصول الزائر للمعلومة.
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: 'var(--pen-red)' }}>• إهدار الوقت والتكلفة:</b>
                  <br />
                  تعديل موضع زر في مسودة رمادية يستغرق ثوانٍ، بينما تعديله في تصميم ملون ومبرمج يستغرق ساعات وأياماً!
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold', background: 'rgba(239, 68, 68, 0.1)', padding: '6px 10px', borderRadius: '6px' }}>
              الجماليات لا تعوض أبداً سوء التنظيم وضعف الهيكل!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>الخلاصة:</b> نبدأ بالمخطط الهيكلي لنتأكد أن المعلومات منظمة وسهلة التصفح أولاً، ثم ننتقل للتلوين والجماليات لاحقاً!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'wireframe-vs-final-design',
    title: '٤ · الفرق بين المخطط الهيكلي والتصميم النهائي',
    scene: true,
    notes: (
      <>
        <p><b>٤ · الفرق بين Wireframe والتصميم النهائي:</b></p>
        <p><b>المخطط الهيكلي (Wireframe):</b></p>
        <ul>
          <li>مربعات وخطوط بسيطة (بالأبيض والأسود وتدرجات الرمادي).</li>
          <li>يوضح أماكن العناصر وأحجامها النسبية.</li>
          <li>يركز على ترتيب المعلومات وتجربة الاستخدام (UX).</li>
        </ul>
        <p><b>التصميم النهائي (Final UI Design):</b></p>
        <ul>
          <li>ألوان وخطوط وصور حقيقية وهوية بصرية كاملة.</li>
          <li>تفاصيل بصرية واضحة وجذابة.</li>
          <li>الشكل النهائي الذي سيظهر للمستخدم ويتفاعل معه مباشرة.</li>
        </ul>
        <p><b>تنبيه امتحاني حاسم:</b> الـ Wireframe ليس موقعاً شغّالاً، وليس التصميم النهائي؛ هو مخطط ومسودة معمارية تُستخدم قبل تنفيذ التصميم!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مقارنة بصرية شاملة بين المسودة الهيكلية والواجهة البصرية النهائية">
          ٤ · الفرق بين المخطط الهيكلي (Wireframe) والتصميم النهائي ⚖️
        </Heading>

        {/* Top Definition Banner */}
        <Box x={50} y={105} w={1180} h={75} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              المخطط الهيكلي يضع خريطة التوزيع، والتصميم النهائي ينفذ الواجهة البصرية المتكاملة:
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 2 }}>
              لكل منهما وظيفة محددة في دورة تطوير المواقع، ولا يغني أحدهما عن الآخر!
            </div>
          </div>
        </Box>

        {/* Middle Section: Side-by-Side Comparison Cards */}
        {/* Right Card: Wireframe */}
        <Box x={660} y={190} w={570} h={415} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  📐 المخطط الهيكلي (Wireframe)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', padding: '2px 8px', borderRadius: '4px', border: '1px solid #0284c7' }}>
                  مسودة رمادية
                </span>
              </div>

              {/* Wireframe Mockup Visual */}
              <div className="rounded-lg bg-slate-950 border border-slate-700 p-2.5 mb-2.5 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-1 mb-1.5 text-slate-400">
                  <span className="px-1.5 py-0.5 border border-slate-600 bg-slate-900">LOGO</span>
                  <span className="text-[10px]">HOME | SERVICES | ABOUT | CONTACT</span>
                </div>
                <div className="p-1 border border-slate-700 bg-slate-900 text-slate-400 text-center mb-1.5">
                  [ Search Bar ]
                </div>
                <div className="p-1.5 bg-slate-800 border border-slate-600 text-center text-white font-bold mb-1.5">
                  CALL TO ACTION BUTTON
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="p-3 border border-slate-700 bg-slate-900/60 text-center text-slate-500 font-bold">
                    ☒ IMAGE
                  </div>
                  <div className="p-3 border border-slate-700 bg-slate-900/60 text-center text-slate-500 font-bold">
                    ☒ IMAGE
                  </div>
                </div>
              </div>

              {/* Textbook Points from Screenshot */}
              <div className="space-y-1.5 text-xs" style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>مربعات وخطوط بسيطة</b> (أبيض وأسود ورمادي).
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>يوضح أماكن العناصر</b> وتوزيع المساحات.
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>يركز على ترتيب المعلومات</b> وهندسة البنية.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              وظيفتها: تنظيم الهيكل والوظائف قبل الجماليات
            </div>
          </div>
        </Box>

        {/* Left Card: Final Design */}
        <Box x={50} y={190} w={590} h={415} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🎨 التصميم النهائي (Final Design)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(74, 222, 128, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '4px', border: '1px solid var(--pen-green)' }}>
                  الواجهة الحية
                </span>
              </div>

              {/* Final UI Mockup Visual */}
              <div className="rounded-lg bg-emerald-950/40 border border-emerald-600/40 p-2.5 mb-2.5 text-xs">
                <div className="flex justify-between items-center border-b border-emerald-800/60 pb-1 mb-1.5">
                  <span className="font-bold text-emerald-400">🏫 مدرسة الأوائل</span>
                  <span className="text-[10px] text-emerald-200">الرئيسية · الخدمات · اتصل بنا</span>
                </div>
                <div className="p-2 rounded bg-gradient-to-r from-emerald-900 to-teal-900 border border-emerald-500/50 text-white text-center mb-1.5 shadow">
                  <div className="font-bold text-xs">نحو مستقبل رقمي واعد لأبنائنا</div>
                  <button className="mt-1 px-3 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold text-[10px]">
                    سجل الآن
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-1.5 text-center">
                  <div className="p-2 rounded bg-slate-900/80 border border-emerald-800/40 text-emerald-300 text-[10px]">
                    📸 صورة مبنى المدرسة
                  </div>
                  <div className="p-2 rounded bg-slate-900/80 border border-emerald-800/40 text-emerald-300 text-[10px]">
                    📸 صورة المعامل الذكية
                  </div>
                </div>
              </div>

              {/* Textbook Points from Screenshot */}
              <div className="space-y-1.5 text-xs" style={{ fontSize: 13, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>ألوان وخطوط وصور حقيقية وجذابة</b>.
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>تفاصيل بصرية واضحة وهوية كاملة</b>.
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800">
                  • <b>الشكل الفعلي الذي سيظهر للمستخدم</b>.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              وظيفتها: تقديم واجهة حية مريحة ومتكاملة
            </div>
          </div>
        </Box>

        {/* Bottom Caution Banner */}
        <Box x={50} y={615} w={1180} h={68} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            🚨 <b>خلي بالك (تنبيه امتحاني حاسم):</b>
            &nbsp;
            «الـ Wireframe مش موقع شغال، ومش التصميم النهائي؛ هو مخطط ومسودة معمارية بنستخدمه قبل تنفيذ التصميم!»
          </div>
        </Box>
      </Scene>
    ),
  },
];

// Interactive Components for CRAP Principles
function ContrastInteractiveCard() {
  const [activeTab, setActiveTab] = useState<'both' | 'bad' | 'good'>('both');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        <button
          onClick={() => setActiveTab('both')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'both' ? 'var(--pen-blue)' : 'rgba(255,255,255,0.08)',
            color: activeTab === 'both' ? '#ffffff' : 'var(--pen-ink)',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          👁️ عرض المقارنة جنباً لجنب
        </button>
        <button
          onClick={() => setActiveTab('bad')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'bad' ? '#ef4444' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ❌ فحص التباين الضعيف
        </button>
        <button
          onClick={() => setActiveTab('good')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'good' ? '#22c55e' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ✅ فحص التباين الأفضل
        </button>
      </div>

      {/* Visual Containers */}
      <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'both' ? '1fr 1fr' : '1fr', gap: 14, flex: 1 }}>
        {/* Bad Contrast */}
        {(activeTab === 'both' || activeTab === 'bad') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#f87171', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>❌ تباين ضعيف (غير واضح)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: 4 }}>بهتان ورتابة</span>
            </div>

            {/* Simulated Washed Out Box */}
            <div style={{ background: '#334155', padding: '16px', borderRadius: 8, border: '1px solid #475569', margin: 'auto 0' }}>
              <div style={{ fontSize: 13, color: '#64748b', fontWeight: 'normal', marginBottom: 12 }}>
                نتائج الطلاب
              </div>
              <div style={{ background: '#475569', color: '#94a3b8', padding: '8px', borderRadius: 6, fontSize: 11 }}>
                عرض النتيجة
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#fca5a5', marginTop: 8 }}>
              ⚠️ العنوان والزر مش واضحين بشكل كافي؛ المستخدم يتشتت ولا يعرف أين يضغط!
            </div>
          </div>
        )}

        {/* Good Contrast */}
        {(activeTab === 'both' || activeTab === 'good') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(56, 189, 248, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#38bdf8', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>✅ تباين أفضل (واضح وبارز)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(56, 189, 248, 0.2)', borderRadius: 4 }}>جذب فوري للعين</span>
            </div>

            {/* Simulated High Contrast Box */}
            <div style={{ background: '#ffffff', padding: '16px', borderRadius: 8, border: '2px solid #2563eb', margin: 'auto 0', boxShadow: '0 4px 14px rgba(37,99,235,0.25)' }}>
              <div style={{ fontSize: 16, color: '#0f172a', fontWeight: 'black', marginBottom: 12 }}>
                نتائج الطلاب
              </div>
              <div style={{ background: '#2563eb', color: '#ffffff', padding: '10px', borderRadius: 6, fontSize: 13, fontWeight: 'bold', letterSpacing: 0.5, boxShadow: '0 2px 6px rgba(0,0,0,0.2)' }}>
                عرض النتيجة ➔
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#7dd3fc', marginTop: 8 }}>
              🌟 العنوان والزر أصبحا واضحين في أجزاء من الثانية؛ توجيه فوري للمستخدم!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function RepetitionInteractiveCard() {
  const [activeTab, setActiveTab] = useState<'both' | 'inconsistent' | 'consistent'>('both');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        <button
          onClick={() => setActiveTab('both')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'both' ? 'var(--pen-green)' : 'rgba(255,255,255,0.08)',
            color: activeTab === 'both' ? '#ffffff' : 'var(--pen-ink)',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          👁️ عرض المقارنة جنباً لجنب
        </button>
        <button
          onClick={() => setActiveTab('inconsistent')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'inconsistent' ? '#ef4444' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ❌ بدون اتساق (عشوائي)
        </button>
        <button
          onClick={() => setActiveTab('consistent')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'consistent' ? '#22c55e' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ✅ مع التكرار والاتساق
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'both' ? '1fr 1fr' : '1fr', gap: 14, flex: 1 }}>
        {/* Inconsistent */}
        {(activeTab === 'both' || activeTab === 'inconsistent') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#f87171', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>❌ بدون اتساق (تضارب عشوائي)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: 4 }}>كأنها مواقع مختلفة</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 'auto 0' }}>
              <div style={{ background: '#2563eb', color: '#ffffff', padding: '8px', borderRadius: '4px', fontSize: 13, fontWeight: 'bold' }}>
                عرض
              </div>
              <div style={{ background: '#16a34a', color: '#ffffff', padding: '10px', borderRadius: '14px', fontSize: 14, fontWeight: 'normal', border: '2px dashed #4ade80' }}>
                إرسال
              </div>
              <div style={{ background: '#9333ea', color: '#ffffff', padding: '6px', borderRadius: '24px', fontSize: 12, fontStyle: 'italic' }}>
                دخول
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#fca5a5', marginTop: 8 }}>
              ⚠️ اختلاف الألوان والأشكال يشعر المستخدم بأن كل صفحة تابعة لجهة مختلفة!
            </div>
          </div>
        )}

        {/* Consistent */}
        {(activeTab === 'both' || activeTab === 'consistent') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(74, 222, 128, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#4ade80', marginBottom: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>✅ مع التكرار (هوية بصرية موحدة)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(74, 222, 128, 0.2)', borderRadius: 4 }}>اتساق وألفة</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: 'auto 0' }}>
              <div style={{ background: '#2563eb', color: '#ffffff', padding: '8px', borderRadius: '6px', fontSize: 13, fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}>
                عرض
              </div>
              <div style={{ background: '#2563eb', color: '#ffffff', padding: '8px', borderRadius: '6px', fontSize: 13, fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}>
                إرسال
              </div>
              <div style={{ background: '#2563eb', color: '#ffffff', padding: '8px', borderRadius: '6px', fontSize: 13, fontWeight: 'bold', border: '1px solid rgba(255,255,255,0.2)' }}>
                دخول
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#86efac', marginTop: 8 }}>
              🌟 توحيد شكل ولون الأزرار مع اختلاف النص حسب الوظيفة يعزز الثقة والراحة البصرية!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function AlignmentInteractiveCard() {
  const [showGuide, setShowGuide] = useState(true);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        <button
          onClick={() => setShowGuide(!showGuide)}
          style={{
            padding: '4px 14px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: showGuide ? 'var(--pen-orange)' : 'rgba(255,255,255,0.1)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.2)',
            cursor: 'pointer',
          }}
        >
          {showGuide ? '📏 إخفاء خط شبكة المحاذاة' : '📐 إظهار خط شبكة المحاذاة (Grid Line)'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, flex: 1 }}>
        {/* Misaligned */}
        <div
          style={{
            padding: '14px',
            borderRadius: 10,
            background: 'rgba(15, 23, 42, 0.7)',
            border: '2px solid rgba(239, 68, 68, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'right',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 'bold', color: '#f87171', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>❌ محاذاة غير منظمة</span>
            <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: 4 }}>فوضى وتشتت</span>
          </div>

          <div style={{ background: '#090d16', padding: '12px', borderRadius: 8, border: '1px solid #334155', margin: 'auto 0' }}>
            <div style={{ fontSize: 12, color: '#e2e8f0', marginRight: 40, marginBottom: 8 }}>
              البحث عن كتاب
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #475569', color: '#94a3b8', padding: '6px 10px', borderRadius: 4, width: '70%', marginRight: 25, marginBottom: 8, fontSize: 11 }}>
              اسم الكتاب
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #475569', color: '#94a3b8', padding: '6px 10px', borderRadius: 4, width: '90%', marginRight: 0, marginBottom: 8, fontSize: 11 }}>
              اسم المؤلف
            </div>
            <div style={{ background: '#2563eb', color: '#ffffff', padding: '6px 14px', borderRadius: 4, width: '40%', marginRight: 60, textAlign: 'center', fontSize: 11, fontWeight: 'bold' }}>
              بحث
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: '#fca5a5', marginTop: 8 }}>
            ⚠️ كل عنصر يبدأ من مكان عشوائي متعرج، مما يربك حركة العين أثناء القراءة!
          </div>
        </div>

        {/* Aligned */}
        <div
          style={{
            padding: '14px',
            borderRadius: 10,
            background: 'rgba(15, 23, 42, 0.7)',
            border: '2px solid rgba(251, 146, 60, 0.6)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            textAlign: 'right',
            position: 'relative',
          }}
        >
          <div style={{ fontSize: 14, fontWeight: 'bold', color: '#fb923c', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span>✅ محاذاة منظمة (شبكة متسقة)</span>
            <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(251, 146, 60, 0.2)', borderRadius: 4 }}>نظام وراحة</span>
          </div>

          <div style={{ background: '#090d16', padding: '12px', borderRadius: 8, border: '1px solid #334155', margin: 'auto 0', position: 'relative' }}>
            {/* Alignment Guide Line */}
            {showGuide && (
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  bottom: 8,
                  right: 12,
                  width: 2,
                  background: '#f97316',
                  zIndex: 10,
                  boxShadow: '0 0 8px #f97316',
                }}
              />
            )}

            <div style={{ fontSize: 12, color: '#e2e8f0', fontWeight: 'bold', marginBottom: 8 }}>
              البحث عن كتاب
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #475569', color: '#94a3b8', padding: '6px 10px', borderRadius: 4, width: '100%', marginBottom: 8, fontSize: 11, boxSizing: 'border-box' }}>
              اسم الكتاب
            </div>
            <div style={{ background: '#1e293b', border: '1px solid #475569', color: '#94a3b8', padding: '6px 10px', borderRadius: 4, width: '100%', marginBottom: 8, fontSize: 11, boxSizing: 'border-box' }}>
              اسم المؤلف
            </div>
            <div style={{ background: '#2563eb', color: '#ffffff', padding: '8px', borderRadius: 4, width: '100%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', boxSizing: 'border-box' }}>
              بحث 🔍
            </div>
          </div>

          <div style={{ fontSize: 11.5, color: '#fed7aa', marginTop: 8 }}>
            🌟 كل العناصر تبدأ من نفس الخط العمودي الأيمن متوافقة مع اتجاه اللغة العربية!
          </div>
        </div>
      </div>
    </div>
  );
}

function ProximityInteractiveCard() {
  const [activeTab, setActiveTab] = useState<'both' | 'bad' | 'good'>('both');

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      {/* Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 8 }}>
        <button
          onClick={() => setActiveTab('both')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'both' ? 'var(--pen-purple)' : 'rgba(255,255,255,0.08)',
            color: activeTab === 'both' ? '#ffffff' : 'var(--pen-ink)',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          👁️ عرض المقارنة جنباً لجنب
        </button>
        <button
          onClick={() => setActiveTab('bad')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'bad' ? '#ef4444' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ❌ تقارب غير مناسب (مشتت)
        </button>
        <button
          onClick={() => setActiveTab('good')}
          style={{
            padding: '4px 12px',
            borderRadius: 6,
            fontSize: 12,
            fontWeight: 'bold',
            background: activeTab === 'good' ? '#a855f7' : 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            border: '1px solid rgba(255,255,255,0.15)',
            cursor: 'pointer',
          }}
        >
          ✅ تقارب مناسب (وحدة واحدة)
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: activeTab === 'both' ? '1fr 1fr' : '1fr', gap: 14, flex: 1 }}>
        {/* Scattered */}
        {(activeTab === 'both' || activeTab === 'bad') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(239, 68, 68, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#f87171', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>❌ تقارب غير مناسب (عناصر متباعدة)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(239, 68, 68, 0.2)', borderRadius: 4 }}>تشتت ذهني</span>
            </div>

            <div style={{ background: '#090d16', padding: '12px', borderRadius: 8, border: '1px solid #334155', margin: 'auto 0', display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ background: '#1e293b', padding: '12px', borderRadius: 6, color: '#94a3b8', fontSize: 13, border: '1px dashed #475569' }}>
                📖 صورة الكتاب
              </div>
              <div style={{ fontSize: 12, color: '#4ade80', textAlign: 'right', fontWeight: 'bold' }}>
                سعر: 150 جنيه
              </div>
              <div style={{ fontSize: 12, color: '#cbd5e1', textAlign: 'center', background: '#1e293b', padding: '6px', borderRadius: 4 }}>
                كتاب البرمجة للمبتدئين
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#fca5a5', marginTop: 8 }}>
              ⚠️ المعلومات المرتبطة بنفس المنتج متباعدة ولا يفهم المستخدم هل السعر يخص هذا الكتاب أم لا!
            </div>
          </div>
        )}

        {/* Grouped */}
        {(activeTab === 'both' || activeTab === 'good') && (
          <div
            style={{
              padding: '14px',
              borderRadius: 10,
              background: 'rgba(15, 23, 42, 0.7)',
              border: '2px solid rgba(192, 132, 252, 0.6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 'bold', color: '#c084fc', marginBottom: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>✅ تقارب مناسب (مجموعة واحدة متكاملة)</span>
              <span style={{ fontSize: 10, padding: '2px 6px', background: 'rgba(192, 132, 252, 0.2)', borderRadius: 4 }}>ترابط بصري</span>
            </div>

            <div style={{ background: '#090d16', padding: '12px', borderRadius: 8, border: '2px solid #9333ea', margin: 'auto 0', display: 'flex', flexDirection: 'column', gap: 6, boxShadow: '0 4px 12px rgba(147, 51, 234, 0.2)' }}>
              <div style={{ background: '#1e293b', padding: '14px', borderRadius: 6, color: '#e9d5ff', fontSize: 14, fontWeight: 'bold' }}>
                📖 صورة الكتاب
              </div>
              <div style={{ fontSize: 13, fontWeight: 'bold', color: '#ffffff', marginTop: 4 }}>
                كتاب البرمجة للمبتدئين
              </div>
              <div style={{ fontSize: 13, color: '#4ade80', fontWeight: 'bold' }}>
                150 جنيه
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: '#e9d5ff', marginTop: 8 }}>
              🌟 الصورة والاسم والسعر في بطاقة واحدة؛ يدرك العقل مباشرة أنها تخص نفس المنتج!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export const crapDetailFrames: FrameDef[] = [
  {
    id: 'crap-concept-intro',
    title: '١ · ما هي مبادئ CRAP الأربعة؟',
    scene: true,
    notes: (
      <>
        <p><b>ثالثاً: مبادئ CRAP في تصميم المواقع الإلكترونية:</b></p>
        <p><b>الربط بما سبق:</b></p>
        <ul>
          <li><b>Persona:</b> نفهم مين المستخدم وإيه احتياجاته.</li>
          <li><b>Wireframe:</b> نحدد أماكن العناصر والمعلومات في الصفحة.</li>
        </ul>
        <p><b>السؤال الجوهري:</b> بعد ما حددنا أماكن العناصر، إزاي نخلي شكل الصفحة منظم وواضح وسهل الفهم؟ ➔ هنا يأتي دور <b>مبادئ CRAP</b>.</p>
        <p><b>التعريف المعتمد:</b> أربعة مبادئ بصرية نستخدمها لتنظيم شكل الصفحة ومساعدة المستخدم على فهم المعلومات بسهولة.</p>
        <p><b>اختصار CRAP:</b></p>
        <ul>
          <li><b>C - Contrast:</b> التباين</li>
          <li><b>R - Repetition:</b> التكرار</li>
          <li><b>A - Alignment:</b> المحاذاة</li>
          <li><b>P - Proximity:</b> التقارب</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفهوم الثالث: القواعد البصرية الأربع لتحويل الهيكل إلى واجهة جذابة ومريحة">
          ثالثاً: مبادئ CRAP في تصميم المواقع الإلكترونية 🎨
        </Heading>

        {/* Top Transition Banner */}
        <Box x={50} y={105} w={1180} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 17, color: 'var(--pen-ink)' }}>
              في الخطوتين السابقتين اتعلمنا: <b>(1) Persona</b> لنفهم المستخدم، و <b>(2) Wireframe</b> لنحدد أماكن العناصر ➔
            </span>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)', marginTop: 4 }}>
              «إزاي نخلي شكل الصفحة منظم وواضح وسهل الفهم؟ هنا بييجي دور مبادئ CRAP!»
            </div>
          </div>
        </Box>

        {/* Center Grid: The 4 CRAP Letters */}
        <Box x={50} y={200} w={1180} h={405} c="purple" fill="purple" at={2}>
          <div style={{ padding: '16px 20px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 6 }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  📖 يعني إيه مبادئ CRAP؟
                </span>
                <span style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '3px 10px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  كتاب الفائز
                </span>
              </div>

              <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55, marginBottom: 14 }}>
                هي <b>أربعة مبادئ بصرية</b> بنستخدمها لتنظيم شكل الصفحة ومساعدة المستخدم على فهم المعلومات بسهولة وسرعة دون إرهاق ذهني.
              </div>

              {/* 4 Cards Grid */}
              <div className="grid grid-cols-4 gap-3 text-center">
                {/* C */}
                <div className="p-3 rounded-lg bg-slate-900 border-2 border-blue-500/50 flex flex-col justify-between">
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 'black', color: '#38bdf8' }}>C</div>
                    <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginTop: 2 }}>Contrast</div>
                    <div style={{ fontSize: 15, color: '#38bdf8', fontWeight: 'bold' }}>التباين</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 8, lineHeight: 1.4 }}>
                    إظهار الاختلاف لإبراز العناصر الهامة وأزرار الإجراء.
                  </div>
                </div>

                {/* R */}
                <div className="p-3 rounded-lg bg-slate-900 border-2 border-green-500/50 flex flex-col justify-between">
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 'black', color: '#4ade80' }}>R</div>
                    <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginTop: 2 }}>Repetition</div>
                    <div style={{ fontSize: 15, color: '#4ade80', fontWeight: 'bold' }}>التكرار</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 8, lineHeight: 1.4 }}>
                    تكرار الخصائص البصرية لتوحيد الهوية والاتساق عبر الموقع.
                  </div>
                </div>

                {/* A */}
                <div className="p-3 rounded-lg bg-slate-900 border-2 border-orange-500/50 flex flex-col justify-between">
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 'black', color: '#fb923c' }}>A</div>
                    <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginTop: 2 }}>Alignment</div>
                    <div style={{ fontSize: 15, color: '#fb923c', fontWeight: 'bold' }}>المحاذاة</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 8, lineHeight: 1.4 }}>
                    ترتيب العناصر على شبكة مشتركة متوافقة مع اتجاه اللغة.
                  </div>
                </div>

                {/* P */}
                <div className="p-3 rounded-lg bg-slate-900 border-2 border-purple-500/50 flex flex-col justify-between">
                  <div>
                    <div style={{ fontSize: 32, fontWeight: 'black', color: '#c084fc' }}>P</div>
                    <div style={{ fontSize: 16, fontWeight: 'bold', color: '#ffffff', marginTop: 2 }}>Proximity</div>
                    <div style={{ fontSize: 15, color: '#c084fc', fontWeight: 'bold' }}>التقارب</div>
                  </div>
                  <div style={{ fontSize: 11.5, color: '#94a3b8', marginTop: 8, lineHeight: 1.4 }}>
                    تجميع العناصر المرتبطة ببعض في كتلة مكانية واحدة.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-purple)', fontWeight: 'bold', textAlign: 'center', background: 'rgba(168, 85, 247, 0.1)', padding: '8px', borderRadius: '6px' }}>
              🌟 دعنا نستكشف كل مبدأ في شريحة تفاعلية مفصلة بمثال عملي وتطبيق مباشر!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="green" fill="green" size={17} tc="ink" at={3}>
          🌟 <b>الخلاصة:</b> كلمة CRAP اختصار ذهبي لأربع قواعد بصرية تحول المخطط الهيكلي إلى واجهة جذابة وسهلة ومريحة!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-contrast-slide',
    title: '٢ · المبدأ الأول: التباين (Contrast)',
    scene: true,
    notes: (
      <>
        <p><b>المبدأ الأول: التباين (Contrast):</b></p>
        <p><b>معناه:</b> إظهار الاختلاف بين العناصر علشان نوضح أهمية المعلومات ونلفت انتباه المستخدم للحاجات المهمة.</p>
        <p><b>ببساطة:</b> مش كل حاجة في الصفحة لازم تكون بنفس الشكل والحجم؛ فيه معلومات أهم من غيرها، ولازم تظهر بشكل مميز.</p>
        <p><b>مثال في صفحة نتائج الطلاب:</b></p>
        <ul>
          <li>عنوان "نتائج الطلاب" يكون أكبر من النص العادي.</li>
          <li>زر "عرض النتيجة" يكون واضحاً ومميزاً بلون ساطع (CTA).</li>
          <li>المعلومات المهمة تكون سهلة الملاحظة فوراً.</li>
        </ul>
        <p><b>تنبيه كتاب الفائز:</b> التباين لا يعني اختلاف الألوان فقط، بل اختلاف الحجم أو سمك الخط أو شكل العنصر، مع الحفاظ على سهولة القراءة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المبدأ الأول: إظهار الاختلاف ولفت انتباه المستخدم للمعلومات الهامة فوراً">
          المبدأ الأول: التباين (Contrast) 🌓
        </Heading>

        {/* Top Definition Banner */}
        <Box x={50} y={105} w={1180} h={80} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              🎯 المفهوم: إظهار الاختلاف بين العناصر لتوضيح أهمية المعلومات ولفت انتباه المستخدم للمهم.
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 2 }}>
              ببساطة: مش كل حاجة في الصفحة بنفس الحجم واللون؛ فيه معلومات أهم من غيرها، ولازم تظهر بشكل مميز!
            </div>
          </div>
        </Box>

        {/* Right Info Box: Theory & Student Results Example */}
        <Box x={660} y={195} w={570} h={410} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 4 }}>
                📋 مثال عملي: في صفحة نتائج الطلاب
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>عنوان "نتائج الطلاب":</b> يكون أكبر حجماً وأكثر سمكاً من النص العادي ليدرك الزائر أين هو فوراً.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>زر "عرض النتيجة":</b> يكون بلون ساطع ومميز (مثل الأزرق الملكي) ليجذب عين ولي الأمر.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>المعلومات المهمة:</b> تظهر بألوان وخطوط يسهل ملاحظتها دون بحث شاق.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', background: 'rgba(168, 85, 247, 0.1)', padding: '6px 10px', borderRadius: '6px' }}>
              التباين يوجه عين الزائر إلى الخطوة التالية تلقائياً!
            </div>
          </div>
        </Box>

        {/* Left Interactive Mockup Box */}
        <Box x={50} y={195} w={590} h={410} c="blue" fill="blue" at={3}>
          <div style={{ padding: '12px 14px', height: '100%', boxSizing: 'border-box' }}>
            <ContrastInteractiveCard />
          </div>
        </Box>

        {/* Bottom Alert Banner */}
        <Box x={50} y={615} w={1180} h={65} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 14.5, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            💡 <b>خلي بالك (نصيحة كتاب الفائز):</b>
            &nbsp;
            «التباين مش معناه اختلاف الألوان بس؛ ممكن يكون اختلاف في الحجم، أو سمك الخط، أو شكل العنصر.. ولازم نحافظ على وضوح النص وسهولة قراءته!»
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-repetition-slide',
    title: '٣ · المبدأ الثاني: التكرار (Repetition)',
    scene: true,
    notes: (
      <>
        <p><b>المبدأ الثاني: التكرار (Repetition):</b></p>
        <p><b>معناه:</b> تكرار خصائص بصرية معينة في أجزاء الموقع علشان نحافظ على الاتساق (Consistency).</p>
        <p><b>ببساطة:</b> لو استخدمنا شكل معين للعناوين أو الأزرار، نحافظ على نفس الشكل في باقي صفحات الموقع.</p>
        <p><b>مثال عملي:</b> تخيل موقع مدرسة فيه 3 صفحات (الأخبار، النتائج، الواجبات). لو كل صفحة استخدمت شكلاً مختلفاً، المستخدم هيحس إن كل صفحة تابعة لموقع مختلف!</p>
        <p><b>العناصر المكررة:</b> لون العناوين، حجم الخطوط، شكل الأزرار، وطريقة عرض القوائم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المبدأ الثاني: الحفاظ على الاتساق ووحدة الهوية البصرية عبر جميع صفحات الموقع">
          المبدأ الثاني: التكرار (Repetition) 🔁
        </Heading>

        {/* Top Definition Banner */}
        <Box x={50} y={105} w={1180} h={80} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              🎯 المفهوم: تكرار خصائص بصرية معينة في أجزاء الموقع علشان نحافظ على الاتساق (Consistency).
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 2 }}>
              ببساطة: لو استخدمنا تصميماً معيناً للعناوين أو الأزرار، نحافظ على نفس النمط في باقي صفحات الموقع!
            </div>
          </div>
        </Box>

        {/* Right Info Box: School 3 Pages Story */}
        <Box x={660} y={195} w={570} h={410} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 4 }}>
                🏫 مثال عملي: موقع مدرسة فيه ٣ صفحات
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginBottom: 8, lineHeight: 1.5 }}>
                تخيل موقع المدرسة فيه: <b>صفحة الأخبار · صفحة النتائج · صفحة الواجبات</b>.
              </div>

              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-700/50 mb-2.5 text-xs" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#fecaca' }}>
                ❌ <b>لو غاب التكرار:</b> كل صفحة استخدمت خطاً ولوناً وأزراراً مختلفة، فيشعر الزائر كأنه انتقل لموقع مختلف تماماً ويفقد الثقة!
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/50 text-xs" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#bbf7d0' }}>
                ✅ <b>لما نكرر نفس:</b>
                <div className="grid grid-cols-2 gap-1 mt-1 text-[11.5px]">
                  <span>• لون العناوين الرئيسي.</span>
                  <span>• أحجام الخطوط ونوعها.</span>
                  <span>• شكل واستدارة الأزرار.</span>
                  <span>• طريقة عرض القوائم.</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold', background: 'rgba(74, 222, 128, 0.1)', padding: '6px 10px', borderRadius: '6px' }}>
              الموقع يصبح أكثر اتساقاً واحترافية وتوليداً للألفة والثقة!
            </div>
          </div>
        </Box>

        {/* Left Interactive Buttons Box */}
        <Box x={50} y={195} w={590} h={410} c="green" fill="green" at={3}>
          <div style={{ padding: '12px 14px', height: '100%', boxSizing: 'border-box' }}>
            <RepetitionInteractiveCard />
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="purple" fill="purple" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 14.5, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            🌟 <b>الخلاصة:</b> التكرار لا يعني الملل، بل يعني الاتساق ووحدة الهوية البصرية التي تجعل المستخدم يشعر بالراحة والسهولة!
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-alignment-slide',
    title: '٤ · المبدأ الثالث: المحاذاة (Alignment)',
    scene: true,
    notes: (
      <>
        <p><b>المبدأ الثالث: المحاذاة (Alignment):</b></p>
        <p><b>معناه:</b> ترتيب العناصر ومحاذاتها وفق خط أو شبكة مشتركة علشان الصفحة تكون منظمة.</p>
        <p><b>ببساطة:</b> نخلي العناصر ماشية على نظام وخط واحد، بدل ما كل عنصر يكون في مكان عشوائي متعرج.</p>
        <p><b>مثال عملي:</b> لو عندنا صفحة فيها (عنوان، وصف، مربع إدخال، زر بحث)، ينبغي محاذاة كافة الحقول والزر وفق خط شبكي عمودي مستقيم.</p>
        <p><b>ملحوظة هامة من الكتاب:</b> لازم نراعي اتجاه اللغة عند المحاذاة؛ في المواقع العربية غالباً يكون اتجاه النص والمحاذاة من اليمين إلى اليسار (RTL).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المبدأ الثالث: ترتيب العناصر وفق شبكة مشتركة ومراعاة اتجاه اللغة العربية">
          المبدأ الثالث: المحاذاة (Alignment) 📐
        </Heading>

        {/* Top Definition Banner */}
        <Box x={50} y={105} w={1180} h={80} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              🎯 المفهوم: ترتيب العناصر ومحاذاتها وفق خط أو شبكة مشتركة (Grid) علشان الصفحة تكون منظمة.
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 2 }}>
              ببساطة: نخلي العناصر ماشية على نظام وخط واحد، بدل ما كل عنصر يكون في مكان عشوائي يشتت العين!
            </div>
          </div>
        </Box>

        {/* Right Info Box */}
        <Box x={660} y={195} w={570} h={410} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 4 }}>
                🔍 مثال عملي: نموذج البحث في الموقع
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5, marginBottom: 8 }}>
                لو عندنا صفحة تضم: <b>عنوان، وصف، حقول إدخال، وزر بحث</b>:
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 text-xs" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                • <b>المحاذاة الشبكية (Grid Alignment):</b> تربط كل عنصر في الصفحة بخط بصري مستقيم مع بقية العناصر.<br />
                • <b>مسار حركة العين:</b> القارئ يمسح الصفحة في خط مستقيم مريح دون قفزات عشوائية تسبب الإجهاد.
              </div>

              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/50 text-xs" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#fef08a' }}>
                📌 <b>ملحوظة الكتاب:</b> في المواقع العربية، خط المحاذاة الأساسي يبدأ من اليمين (RTL) اتساقاً مع اتجاه القراءة الطبيعي.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold', background: 'rgba(234, 88, 12, 0.1)', padding: '6px 10px', borderRadius: '6px' }}>
              المحاذاة تقضي على التعرج والفوضى البصرية تماماً!
            </div>
          </div>
        </Box>

        {/* Left Interactive Alignment Box */}
        <Box x={50} y={195} w={590} h={410} c="orange" fill="orange" at={3}>
          <div style={{ padding: '12px 14px', height: '100%', boxSizing: 'border-box' }}>
            <AlignmentInteractiveCard />
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="blue" fill="blue" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 14.5, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            📌 <b>تنبيه من كتاب الوزارة:</b>
            &nbsp;
            «لازم نراعي اتجاه اللغة عند المحاذاة؛ ففي المواقع العربية يكون اتجاه النص والمحاذاة دائماً من اليمين إلى اليسار!»
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-proximity-slide',
    title: '٥ · المبدأ الرابع: التقارب (Proximity)',
    scene: true,
    notes: (
      <>
        <p><b>المبدأ الرابع: التقارب (Proximity):</b></p>
        <p><b>معناه:</b> وضع المعلومات والعناصر المرتبطة ببعض بالقرب من بعضها؛ علشان المستخدم يفهم إنها بتكوّن مجموعة واحدة.</p>
        <p><b>ببساطة:</b> الحاجة اللي ليها علاقة ببعض نحطها جنب بعض.</p>
        <p><b>مثال عملي:</b> في متجر إلكتروني، عند عرض كتاب لازم نضع (صورة الكتاب، اسم الكتاب، سعر الكتاب) قريبين من بعض؛ لأنهم كلهم معلومات تخص نفس المنتج.</p>
        <p><b>القاعدة:</b> العناصر المتقاربة يدركها الدماغ كوحدة مكانية ومعنوية واحدة، وتفصلها مساحات بيضاء عن بقية المنتجات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المبدأ الرابع: تجميع العناصر المترابطة معاً في وحدة مكانية ومعنوية واحدة">
          المبدأ الرابع: التقارب (Proximity) 🧲
        </Heading>

        {/* Top Definition Banner */}
        <Box x={50} y={105} w={1180} h={80} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🎯 المفهوم: وضع المعلومات والعناصر المرتبطة ببعض بالقرب من بعضها؛ علشان المستخدم يفهم إنها مجموعة واحدة.
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 2 }}>
              ببساطة: الحاجة اللي ليها علاقة ببعض نحطها جنب بعض في كتلة مكانية متماسكة!
            </div>
          </div>
        </Box>

        {/* Right Info Box */}
        <Box x={660} y={195} w={570} h={410} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: 4 }}>
                🛒 مثال عملي: في متجر إلكتروني عند عرض كتاب
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5, marginBottom: 8 }}>
                عند عرض منتج في المتجر، يلزم تجميع بياناته الأساسية معاً:
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>صورة الكتاب:</b> المعبر البصري عن المنتج.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>اسم الكتاب وعنوانه:</b> يوضع تحته مباشرة دون فواصل واسعة.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  • <b>سعر الكتاب وزر الشراء:</b> يلتصقان بالاسم ليدرك المشتري مباشرة التكلفة.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', background: 'rgba(168, 85, 247, 0.1)', padding: '6px 10px', borderRadius: '6px' }}>
              التقارب ينظم العلاقة الذهنية بين العناصر دون حاجة لكلمات إضافية!
            </div>
          </div>
        </Box>

        {/* Left Interactive Proximity Box */}
        <Box x={50} y={195} w={590} h={410} c="purple" fill="purple" at={3}>
          <div style={{ padding: '12px 14px', height: '100%', boxSizing: 'border-box' }}>
            <ProximityInteractiveCard />
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 14.5, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            🌟 <b>الخلاصة:</b> المسافات البيضاء ليست فراغاً ضائعاً؛ التقارب يجمع المتشابهات، والمساحات تفصل المجموعات المستقلة!
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-synthesis-slide',
    title: '٦ · ربط المبادئ الأربعة وتنبيه الوصول الشامل',
    scene: true,
    notes: (
      <>
        <p><b>٦ · ربط المبادئ الأربعة ببعض وتنبيه الوصول الشامل:</b></p>
        <p><b>تطبيق متجر إلكتروني:</b></p>
        <ul>
          <li><b>التباين:</b> نميز زر الشراء عن باقي النصوص بلون مشع.</li>
          <li><b>التكرار:</b> نوحد شكل أزرار الشراء في كل المنتجات.</li>
          <li><b>المحاذاة:</b> نرتب المنتجات على خطوط وأعمدة شبكية منتظمة.</li>
          <li><b>التقارب:</b> نضع صورة المنتج واسمه وسعره معاً في بطاقة واحدة.</li>
        </ul>
        <p><b>تنبيه امتحاني حاسم جداً من الكتاب:</b></p>
        <p>مبادئ CRAP تساعدنا على تنظيم الشكل البصري وتجعل الصفحة أسهل في الفهم، لكنها <b>لا تغني عن معايير قابلية الاستخدام (Usability) وإمكانية الوصول الرقمي (Accessibility)</b>!</p>
        <p>يعني ممكن الموقع يكون شكله جميلاً ومنظماً، لكن المستخدم مش عارف يوصل للمعلومة، أو شخص من ذوي الإعاقة مش قادر يتفاعل معاه!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تكامل المبادئ الأربعة والتنبيه الامتحاني الحاسم حول إمكانية الوصول وقابلية الاستخدام">
          ربط مبادئ CRAP الأربعة وتنبيه الوصول الشامل 💡
        </Heading>

        {/* Top Context Banner */}
        <Box x={50} y={105} w={1180} h={70} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              تخيل إننا بنصمم صفحة لمتجر إلكتروني ➔ كيف تتكامل المبادئ الأربعة في صفحة واحدة؟
            </span>
          </div>
        </Box>

        {/* Middle: 4 Integrated Cards */}
        <Box x={50} y={185} w={1180} h={240} c="purple" fill="purple" at={2}>
          <div style={{ padding: '12px 16px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal' }}>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-blue-500/40">
                <div style={{ fontSize: 24 }}>🌓</div>
                <div style={{ fontSize: 15, fontWeight: 'bold', color: '#38bdf8' }}>التباين</div>
                <div style={{ fontSize: 11, color: '#e2e8f0', marginTop: 4, lineHeight: 1.4 }}>
                  نميز زر الشراء عن باقي النصوص بلون مشع ساطع.
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-green-500/40">
                <div style={{ fontSize: 24 }}>🔁</div>
                <div style={{ fontSize: 15, fontWeight: 'bold', color: '#4ade80' }}>التكرار</div>
                <div style={{ fontSize: 11, color: '#e2e8f0', marginTop: 4, lineHeight: 1.4 }}>
                  نوحد شكل ولون أزرار الشراء في كل بطاقات المنتجات.
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-orange-500/40">
                <div style={{ fontSize: 24 }}>📐</div>
                <div style={{ fontSize: 15, fontWeight: 'bold', color: '#fb923c' }}>المحاذاة</div>
                <div style={{ fontSize: 11, color: '#e2e8f0', marginTop: 4, lineHeight: 1.4 }}>
                  نرتب المنتجات على خطوط وأعمدة شبكية منتظمة لليمين.
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-purple-500/40">
                <div style={{ fontSize: 24 }}>🧲</div>
                <div style={{ fontSize: 15, fontWeight: 'bold', color: '#c084fc' }}>التقارب</div>
                <div style={{ fontSize: 11, color: '#e2e8f0', marginTop: 4, lineHeight: 1.4 }}>
                  نضع صورة المنتج واسمه وسعره وزره في بطاقة واحدة.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', textAlign: 'center' }}>
              المبادئ الأربعة تعمل كفريق متكامل لإخراج الصفحة بأعلى احترافية بصرية!
            </div>
          </div>
        </Box>

        {/* Bottom Red Warning Box */}
        <Box x={50} y={435} w={1180} h={245} c="red" fill="red" at={3}>
          <div style={{ padding: '14px 20px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: 4 }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: '#f87171' }}>
                  🚨 نقطة مهمة جداً من الكتاب (سؤال امتحان حاسم)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.3)', color: '#ffffff', padding: '2px 8px', borderRadius: 4 }}>
                  تنبيه امتحاني
                </span>
              </div>

              <div style={{ fontSize: 16, fontWeight: 'bold', color: '#fef08a', lineHeight: 1.5, marginBottom: 8 }}>
                «مبادئ CRAP بتساعدنا ننظم الشكل البصري ونخلي الصفحة أسهل في الفهم، لكنها لا تغني عن معايير قابلية الاستخدام (Usability) وإمكانية الوصول (Accessibility)!»
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 13, lineHeight: 1.5, color: '#ffffff' }}>
                <div>• <b>يعني إيه؟</b> ممكن الموقع يكون شكله جميل ومنظم جداً، لكن المستخدم مش عارف يوصل للمعلومة اللي عايزها (خلل في سهولة الاستخدام)!</div>
                <div>• <b>الوصول الشامل:</b> أو يكون شخص من ذوي الإعاقة أو كبار السن مش قادر يتفاعل معاه أو يقرأه بقارئ الشاشة (غياب إمكانية الوصول)!</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: '#fecaca', fontWeight: 'bold', background: 'rgba(239, 68, 68, 0.2)', padding: '6px 10px', borderRadius: 6, border: '1px solid rgba(239, 68, 68, 0.4)' }}>
              🎯 الجمال البصري خطوة أولى، والهدف الأسمى هو تمكين الجميع من إنجاز مهامهم بسهولة وسرعة!
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },
];

export const part2: FrameDef[] = [
  {
    id: 'wireframe-blueprint',
    title: '٣ · المخطط الهيكلي للموقع (Wireframe)',
    scene: true,
    notes: (
      <>
        <p><b>٣ · المخطط الهيكلي للموقع (Wireframe) طبقاً لكتاب الفائز:</b></p>
        <p><b>التعريف المعتمد:</b> رسم تخطيطي أولي مبسط يوضح <b>الهيكل البنائي للموقع وترتيب العناصر وأماكن الأزرار والنصوص</b> دون تفاصيل بصرية معقدة.</p>
        <p><b>تشبيه المخطط المعماري (Architectural Blueprint):</b></p>
        <p>مثل المهندس المعماري الذي يرسم مخطط المبنى (الغرف، الجدران، الأبواب، والممرات) قبل اختيار ألوان الطلاء أو شراء الأثاث والديكور.</p>
        <p><b>سؤال علل في امتحانات البكالوريا:</b></p>
        <p><b>علل: لماذا يُرسم المخطط الهيكلي بالأبيض والأسود وتدرجات الرمادي فقط؟</b></p>
        <ol>
          <li>للتركيز الكامل على <b>وظائف الصفحة وتوزيع المساحات وسهولة التصفح</b> دون تشتيت.</li>
          <li>منع جدل العميل وفريق العمل حول تفضيلات الألوان والخطوط والصور في مرحلة التخطيط المبدئي.</li>
          <li>سرعة وسهولة التعديل وإعادة الترتيب بأقل جهد وتكلفة.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المسودة المعمارية لتوزيع عناصر الصفحة وسؤال علل المعتمد في كتاب الفائز">
          ٣ · المخطط الهيكلي للموقع (Wireframe): المسودة المعمارية 📐
        </Heading>

        {/* Top Definition Banner */}
        <Box x={60} y={115} w={1160} h={105} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 22px', whiteSpace: 'normal', lineHeight: 1.5 }}>
            <span style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              المخطط الهيكلي (Wireframe):
            </span>
            &nbsp;
            <span style={{ fontSize: 21, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              رسم تخطيطي مبدئي يحدد الهيكل البنائي لصفحة الويب وتوزيع مكوناتها وأماكن أزرارها ومحتواها.
            </span>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 4 }}>
              يشبه المسودة المعمارية للبناء: يركز على «أين يوضع كل شيء وكيف يعمل» قبل التفكير في «كيف يبدو لونه وشكله».
            </div>
          </div>
        </Box>

        {/* 2 Big Comparison Cards: Architectural Analogy vs Grayscale Reason */}
        {/* Right: Architectural Analogy */}
        <Box x={660} y={235} w={560} h={345} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                🏛️ تشبيه المخطط المعماري (Blueprint)
              </div>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                كتاب الفائز
              </span>
            </div>

            {/* Architectural Diagram Visual */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px 14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32 }}>📐</div>
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#c084fc' }}>مخطط المهندس</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>أبواب · جدران · غرف</div>
              </div>
              <div style={{ fontSize: 24, color: '#a855f7' }}>➔</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32 }}>🖥️</div>
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#38bdf8' }}>مخطط الويب (Wireframe)</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>شعار · قوائم · أزرار</div>
              </div>
              <div style={{ fontSize: 24, color: '#a855f7' }}>➔</div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 32 }}>🎨</div>
                <div style={{ fontSize: 13, fontWeight: 'bold', color: '#4ade80' }}>الواجهة الملونة النهائية</div>
                <div style={{ fontSize: 11, color: '#94a3b8' }}>ألوان · خطوط · صور</div>
              </div>
            </div>

            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • المهندس لا يشتري ألوان الطلاء قبل بناء الأعمدة والجدران!<br />
              • ومصمم الويب لا يختار الألوان والخطوط قبل التأكد من ترتيب الأزرار وسهولة وصول المستخدم للهدف.
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الأساس الهيكلي يسبق دائماً الزخرفة الجمالية!
            </div>
          </div>
        </Box>

        {/* Left: Exam Reasoning Question (علل) */}
        <Box x={60} y={235} w={580} h={345} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                ❓ علل: لماذا يُصمم بالأبيض والأسود؟
              </div>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                سؤال امتحاني
              </span>
            </div>

            <div className="space-y-2 text-xs" style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: 'var(--pen-orange)' }}>١. تركيز الانتباه على البنية:</b>
                <br />
                التأكد من موضع زر الشراء، وشريط البحث، والتنقل قبل الانشغال بالجماليات.
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: 'var(--pen-orange)' }}>٢. تجنب الجدل الذوقي المبكر:</b>
                <br />
                منع تشتيت العميل بالاعتراض على درجة اللون الأخضر أو نوع الخط بدلاً من مناقشة سهولة الشراء!
              </div>
              <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                <b style={{ color: 'var(--pen-orange)' }}>٣. سرعة التعديل والتوفير:</b>
                <br />
                تغيير موضع زر في مسودة رمادية يستغرق ثوانٍ، مقارنة بإعادة تصميم واجهة ملونة بالكامل.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              النتيجة: توفير الوقت والمال وضمان أفضل تجربة مستخدم (UX).
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={19} tc="ink" at={4}>
          🎨 <b>الانتقال للخطوة التالية:</b> بمجرد اعتماد المخطط الهيكلي (Wireframe)، ننتقل لتطبيق <b>مبادئ التصميم البصري الأربعة (CRAP Principles)</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'crap-principles-table',
    title: '٤ · مبادئ التصميم البصري الأربعة (CRAP)',
    scene: true,
    notes: (
      <>
        <p><b>٤ · مبادئ التصميم البصري الأربعة (CRAP Principles) طبقاً لكتاب الفائز:</b></p>
        <p>مجموعة القواعد الذهبية التي تحول المخطط الهيكلي الرمادي إلى واجهة مستخدم (UI) احترافية ومريحة وجذابة:</p>
        <ol>
          <li>
            <b>C - التباين (Contrast):</b>
            جعل العناصر المهمة تبرز بصرياً بوضوح عن بقية الصفحة. استخدام خطوط عريضة وكبيرة للعناوين، وألوان مشعة ومتباينة لأزرار الشراء (CTA).
          </li>
          <li>
            <b>R - التكرار (Repetition):</b>
            تكرار الأنماط البصرية (الخطوط، الألوان، أشكال الأزرار، أنماط الأيقونات) عبر كافة صفحات الموقع لصنع <b>هوية بصرية موحدة</b> وتوليد الألفة والثقة لدى الزائر.
          </li>
          <li>
            <b>A - المحاذاة (Alignment):</b>
            ربط كل عنصر في الصفحة بخط بصري مستقيم مع العناصر الأخرى (المحاذاة للشبكة Grid Alignment)؛ لا شيء يوضع عشوائياً، مما يقضي على الفوضى البصرية.
          </li>
          <li>
            <b>P - التقارب (Proximity):</b>
            تجميع العناصر المترابطة معاً في كتلة مكانية واحدة (مثل: صورة المنتج + اسمه + سعره + زر إضافته للسلة) مع ترك مساحات بيضاء تفصلها عن بقية المنتجات.
          </li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="القواعد الذهبية لتحويل الهيكل إلى واجهة جذابة ومريحة في كتاب الفائز">
          ٤ · مبادئ التصميم البصري الأربعة (CRAP Principles) 🎨
        </Heading>

        {/* 4 Pillars Side-by-Side (RTL) */}
        {/* Pillar 1: Contrast (Right) */}
        <Box x={930} y={120} w={290} h={460} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>🎨</div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                C · التباين
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-blue)', fontWeight: 'bold' }}>Contrast</div>
            </div>

            {/* Visual Mini Mockup */}
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ fontSize: 18, fontWeight: 'black', color: '#ffffff', marginBottom: 4 }}>
                عنوان رئيسي بارز
              </div>
              <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 8 }}>
                نص فرعي بتباين متزن ومقروء
              </div>
              <div style={{ backgroundColor: '#2563eb', color: '#ffffff', padding: '6px', borderRadius: '6px', fontSize: 12, fontWeight: 'bold' }}>
                زر CTA بلون ساطع مشع
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • إبراز العناصر الهامة لتلتقطها عين الزائر أولاً.<br />
              • تباين قوي بين النص والخلفية.<br />
              • أزرار إجراء (CTA) واضحة المعالم.
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold', textAlign: 'center' }}>
              يمنع بهتان الصفحة ورتابتها
            </div>
          </div>
        </Box>

        {/* Pillar 2: Repetition */}
        <Box x={640} y={120} w={270} h={460} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>🔄</div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                R · التكرار
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-purple)', fontWeight: 'bold' }}>Repetition</div>
            </div>

            {/* Visual Mini Mockup */}
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ border: '1px solid #a855f7', borderRadius: '6px', padding: '4px', fontSize: 11, color: '#e9d5ff' }}>
                بطاقة ١: نفس الخط والحواف
              </div>
              <div style={{ border: '1px solid #a855f7', borderRadius: '6px', padding: '4px', fontSize: 11, color: '#e9d5ff' }}>
                بطاقة ٢: نفس النمط والألوان
              </div>
              <div style={{ border: '1px solid #a855f7', borderRadius: '6px', padding: '4px', fontSize: 11, color: '#e9d5ff' }}>
                بطاقة ٣: نفس أسلوب الأزرار
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • تكرار نفس أنماط الخطوط والألوان.<br />
              • توحيد أشكال الأزرار والأيقونات عبر الموقع.<br />
              • بناء هوية بصرية مألوفة تعزز ثقة العميل.
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', textAlign: 'center' }}>
              يخلق الاتساق والوحدة البصرية
            </div>
          </div>
        </Box>

        {/* Pillar 3: Alignment */}
        <Box x={350} y={120} w={270} h={460} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>📏</div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                A · المحاذاة
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-green)', fontWeight: 'bold' }}>Alignment</div>
            </div>

            {/* Visual Mini Mockup */}
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'right' }}>
              <div style={{ borderRight: '2px solid #22c55e', paddingRight: '6px', marginBottom: '4px', fontSize: 11, color: '#86efac' }}>
                | محاذاة لليمين متسقة
              </div>
              <div style={{ borderRight: '2px solid #22c55e', paddingRight: '6px', marginBottom: '4px', fontSize: 11, color: '#86efac' }}>
                | كل عنصر يبدأ من نفس الخط
              </div>
              <div style={{ borderRight: '2px solid #22c55e', paddingRight: '6px', fontSize: 11, color: '#86efac' }}>
                | شبكة منتظمة تلغي التعرجات
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • ترتيب العناصر على شبكة وهمية مستقيمة.<br />
              • لا يوضع أي عنصر عشوائياً في الصفحة.<br />
              • توجيه عين المستخدم بسلاسة أفقياً ورأسياً.
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold', textAlign: 'center' }}>
              يقضي على الفوضى البصرية
            </div>
          </div>
        </Box>

        {/* Pillar 4: Proximity */}
        <Box x={60} y={120} w={270} h={460} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>🧲</div>
              <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                P · التقارب
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-orange)', fontWeight: 'bold' }}>Proximity</div>
            </div>

            {/* Visual Mini Mockup */}
            <div style={{ backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
              <div style={{ backgroundColor: 'rgba(249, 115, 22, 0.2)', padding: '6px', borderRadius: '6px', border: '1px dashed #f97316' }}>
                <span style={{ fontSize: 10, color: '#fdba74', display: 'block', fontWeight: 'bold' }}>مجموعة متقاربة (منتج واحد):</span>
                <span style={{ fontSize: 11, color: '#ffffff' }}>صورة + اسم + سعر + زر شراء</span>
              </div>
              <div style={{ fontSize: 10, color: '#94a3b8', marginTop: 4 }}>
                مفصولة بمساحة بيضاء عن غيرها
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • تجميع العناصر المترابطة في وحدة واحدة.<br />
              • ترك فراغات بيضاء تفصل الكتل عن بعضها.<br />
              • يدرك العقل مباشرة أن هذه البيانات تخص هذا المنتج.
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold', textAlign: 'center' }}>
              ينظم العلاقة الذهنية بين العناصر
            </div>
          </div>
        </Box>

        {/* Bottom Golden Law */}
        <Box x={60} y={595} w={1160} h={75} c="pink" fill="pink" size={19} tc="ink" at={5}>
          ✨ <b>قاعدة كتاب الفائز:</b> تطبيق مبادئ CRAP الأربعة يضمن تجربة مستخدم (UX) ممتازة، ويزيد معدل بقاء الزوار وإتمام عمليات الشراء بنجاح!
        </Box>
      </Scene>
    ),
  },
];
