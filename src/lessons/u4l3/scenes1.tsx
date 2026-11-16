// Board scenes · Unit 4 · Lesson 3 · Cover, Journey, Sports Case Study, Tripartite Synthesis, Qualitative vs Quantitative, Usability Testing, and Interviews
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'فكرة التقييم والنشاط الرياضي',
  'أرقام الحالة وتكامل الأدلة',
  'النوعي (فهم) والكمي (أرقام)',
  'اختبار قابلية الاستخدام',
  'المقابلات (Interviews)',
  'تحليلات الويب ومؤشراتها',
  'اختبارات A/B ومعدل التحويل',
  'التقييم الإرشادي (الخبراء)',
  'مؤشرات Core Web Vitals',
  'بنك أسئلة الامتحانات 🏆',
];

const STOP_PTS: [number, number][] = [
  [1060, 340], [830, 340], [600, 340], [370, 340], [140, 340],
  [140, 560], [370, 560], [600, 560], [830, 560], [1060, 560],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف الرسمي للدرس',
    scene: true,
    notes: (
      <>
        <p><b>الدرس الثالث من الوحدة الرابعة: طُرق تقييم المواقع الإلكترونية (بكالوريا 2027).</b></p>
        <p><b>الأهداف المعتمدة للدرس:</b></p>
        <ol>
          <li>التمييز بين التقييم النوعي والتقييم الكمي، واختيار الطريقة المناسبة لكل سؤال تقييم محدد.</li>
          <li>تفسير مؤشرات تحليلات الويب مثل مشاهدات الصفحة (PV)، ومعدل الارتداد (Bounce Rate)، ومعدل التحويل (CVR) مع مراعاة حدود وطريقة حساب كل مؤشر.</li>
          <li>استخدام التقييم الإرشادي (Heuristic Evaluation) وقواعده الثلاث لتحديد مشكلات واجهة المستخدم.</li>
          <li>إتقان اختبارات A/B للمقارنة بين خيارات التصميم بالأدلة الإحصائية.</li>
          <li>الجمع بين الأدلة النوعية والكمية لتبرير قرارات تحسين وتطوير الموقع الإلكتروني.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={28} c="purple">الصف الثاني الثانوي · بكالوريا 2027 · الوحدة الرابعة · الدرس (3)</Txt>
        <Txt x={640} y={220} size={50}>طُرق تقييم المواقع الإلكترونية</Txt>
        <Underline x={230} y={270} w={820} c="green" />
        <Txt x={640} y={335} size={26} c="blue">Website Evaluation Methods · التقييم النوعي والكمي ومؤشرات الأداء</Txt>

        {[
          ['🧪', 'اختبار الاستخدام'],
          ['🎤', 'المقابلات الشخصية'],
          ['📊', 'تحليلات الويب'],
          ['🅰️', 'اختبارات A/B'],
          ['📋', 'التقييم الإرشادي'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1080 - i * 220}
            y={505}
            icon={icon}
            size={85}
            label={label}
            lsize={17}
            lc="blue"
            at={1}
            delay={i * 0.18}
          />
        ))}
      </Scene>
    ),
  },

  {
    id: 'journey',
    title: 'خريطة رحلة الدرس',
    scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في تقييم المواقع:</b> عشر محطات تعليمية معتمدة تربط المفاهيم المقررة بالنص الدقيق والتطبيق العملي في الامتحانات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المحطات التعليمية المعتمدة لدرس طُرق تقييم المواقع الإلكترونية">
          خريطة رحلة الدرس: من جمع الأدلة إلى مؤشرات الأداء والامتحانات 🗺️
        </Heading>

        {/* Top Question Banner */}
        <Box x={60} y={115} w={1160} h={85} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              ❓ السؤال المحوري للدرس:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              كيف يمكن تقييم موقع إلكتروني، ولماذا من المفيد الجمع بين الأرقام وآراء المستخدمين؟
            </span>
          </div>
        </Box>

        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 5), [70, 450], ...STOP_PTS.slice(5)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.1} x={x} y={y} n={i + 1} c={i < 5 ? 'blue' : 'purple'} />
            <Txt at={1} delay={i * 0.1} x={x} y={y + 48} size={16}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  // -------------------------------------------------------------------------
  // SLIDE 3: Need for Evidence + Sports Activity Registration Case Study + 2 Core Evaluation Paths
  // -------------------------------------------------------------------------
  {
    id: 'bridge-and-eval',
    title: '١ · فكرة التقييم: هل يعمل التصميم فعلاً؟ ودراسة صفحة النشاط الرياضي 🏃‍♂️',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: الدرس بيتكلم عن إيه؟:</b></p>
        <p>في الدرس الماضي تعلمنا خطوات تصميم الموقع من منظور المستخدم: فهم احتياجات المستخدم ➔ تنظيم المعلومات ➔ المخطط الهيكلي (Wireframe) ➔ مبادئ CRAP ➔ سهولة الوصول (Accessibility).</p>
        <p><b>سؤال جوهري: بعد ما صممنا الموقع، هل نفترض أنه ناجح لمجرد أننا صممناه بشكل جيد؟</b></p>
        <p><b>النص المعتمد:</b> «بعد تخطيط الموقع من منظور المستخدم، نحتاج إلى أدلة لمعرفة ما إذا كان التصميم يعمل فعلًا. يعني لا نفترض أن التصميم ناجح لمجرد أننا صممناه بشكل جيد، بل نحتاج إلى أدلة وبيانات تثبت أن المستخدمين يستطيعون استخدام الموقع بسهولة.»</p>
        <p><b>دراسة الحالة:</b> صممنا صفحة للتسجيل في نشاط رياضي، ونريد أن نعرف: هل يستطيع الطلاب التسجيل بسهولة أم يواجهون صعوبات؟</p>
        <p><b>كيف تعرف ما إذا كان الموقع يعمل جيداً لمستخدميه؟</b> نستخدم طرق التقييم لمعرفة ذلك. وهنا توجد طريقان أساسيتان: نوعية ⬅️ لماذا؟ | كمية ⬅️ كم؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الربط التأسيسي ودراسة الحالة الرسمية لصفحة النشاط الرياضي المدرسية">
          ١ · فكرة التقييم: هل يعمل التصميم فعلاً؟ ودراسة صفحة النشاط الرياضي 🏃‍♂️
        </Heading>

        {/* Top Principle Strip */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              🤔 بعد تخطيط الموقع من منظور المستخدم: هل نفترض أنه ناجح تلقائياً؟
            </span>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 4 }}>
              «لا نفترض أن التصميم ناجح لمجرد أننا صممناه بشكل جيد.. بل نحتاج إلى أدلة وبيانات تثبت أن المستخدمين يستطيعون استخدامه بسهولة!»
            </div>
          </div>
        </Box>

        {/* Right: Interactive-style Device Mockup for Sports Registration */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  📱 محاكاة الشاشة: استمارة النشاط الرياضي
                </span>
                <span className="text-[11px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  دراسة حالة معتمدة
                </span>
              </div>

              {/* Tablet Device Frame */}
              <div className="rounded-xl bg-slate-950 border-2 border-slate-700 p-3 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="font-mono text-slate-300 mr-2">school.edu.eg/sports</span>
                  </div>
                  <span className="text-emerald-400 font-bold">🟢 استقبال الطلبات</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800 flex justify-between items-center">
                    <span className="text-slate-300">اسم الطالب:</span>
                    <span className="text-sky-300 font-bold bg-slate-800 px-2 py-0.5 rounded">أحمد محمد علي</span>
                  </div>

                  <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
                    <div className="text-slate-300 mb-1.5">اختر النشاط الرياضي:</div>
                    <div className="flex gap-1.5">
                      <span className="px-2 py-1 rounded bg-blue-600 text-white font-bold text-[11px] flex-1 text-center border border-blue-400 shadow">
                        ⚽ كرة القدم
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[11px] flex-1 text-center border border-slate-700">
                        🏊 السباحة
                      </span>
                      <span className="px-2 py-1 rounded bg-slate-800 text-slate-400 text-[11px] flex-1 text-center border border-slate-700">
                        🏀 السلة
                      </span>
                    </div>
                  </div>

                  <button className="w-full py-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold rounded-lg text-xs shadow-lg transition">
                    ✓ تأكيد التسجيل في النشاط الرياضي
                  </button>
                </div>
              </div>

              {/* Research Question */}
              <div className="mt-2.5 p-2 rounded bg-blue-950/40 border border-blue-500/50 text-[11.5px] text-sky-200">
                ❓ <b>سؤال المصمم الحاسم:</b> هل يسجل الطلاب بسهولة أم يواجهون عوائق؟ لا نخمن، بل نجمع الأدلة!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>أدلة واقعية من استخدام الطلاب الفعلي</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">واجهة واقعية 🔍</span>
            </div>
          </div>
        </Box>

        {/* Left: Dual Pathways Portal (Qualitative vs Quantitative) */}
        <Box x={60} y={215} w={580} h={365} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🧭 طريقان أساسيان لجمع أدلة التقييم
                </span>
                <span className="text-[11px] font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  المساران المعتمدان
                </span>
              </div>

              {/* Pathway 1: Qualitative Portal */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-purple-950/80 to-slate-900 border-2 border-purple-500/60 mb-2.5 shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-purple-200 flex items-center gap-1.5">
                    <span>🟣 ١ · المسار النوعي (Qualitative)</span>
                  </span>
                  <span className="text-xs bg-purple-900 text-purple-200 px-2.5 py-0.5 rounded-full font-bold border border-purple-400">
                    لماذا؟ (Why)
                  </span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  مراقبة المستخدمين وسؤالهم بعد الاستخدام لفهم المشكلات والتجربة:
                </div>
                <div className="mt-2 flex gap-1.5 text-[11px] flex-wrap">
                  <span className="bg-purple-900/60 border border-purple-600 px-2 py-0.5 rounded text-purple-200">💬 هل وجدت التسجيل سهلاً؟</span>
                  <span className="bg-purple-900/60 border border-purple-600 px-2 py-0.5 rounded text-purple-200">⚠️ ما الذي أزعجك؟</span>
                  <span className="bg-purple-900/60 border border-purple-600 px-2 py-0.5 rounded text-purple-200">❓ ما الذي كان غير واضح؟</span>
                </div>
              </div>

              {/* Pathway 2: Quantitative Portal */}
              <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-950/80 to-slate-900 border-2 border-emerald-500/60 shadow">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-sm text-emerald-200 flex items-center gap-1.5">
                    <span>🟢 ٢ · المسار الكمي (Quantitative)</span>
                  </span>
                  <span className="text-xs bg-emerald-900 text-emerald-200 px-2.5 py-0.5 rounded-full font-bold border border-emerald-400">
                    كم؟ (How much)
                  </span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  قياس السلوك والنتائج بالأرقام والإحصاءات دون سؤال المستخدم:
                </div>
                <div className="mt-2 grid grid-cols-3 gap-1.5 text-[11px] text-center font-mono">
                  <span className="bg-emerald-900/60 border border-emerald-600 p-1 rounded text-emerald-200">👥 كم زائر دخل؟</span>
                  <span className="bg-emerald-900/60 border border-emerald-600 p-1 rounded text-emerald-200">📄 كم شاهد الاستمارة؟</span>
                  <span className="bg-emerald-900/60 border border-emerald-600 p-1 rounded text-emerald-200">✅ كم أتم التسجيل؟</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>النوعي يفهم الأسباب · والكمي يقيس الظاهرة!</span>
              <span className="p-1 px-3 rounded bg-purple-500/20 text-purple-300 font-bold text-xs">تكامل ثنائي 🔄</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>القاعدة الأساسية:</b> كيف تعرف ما إذا كان الموقع يعمل جيداً لمستخدميه؟ نوعية ⬅️ لماذا؟ (لفهم الأسباب) | كمية ⬅️ كم؟ (لقياس الأرقام والنتائج)!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 4: Conversion Funnel & Tripartite Synergy Graphic
  // -------------------------------------------------------------------------
  {
    id: 'sports-case-numbers-and-synthesis',
    title: '٢ · أرقام صفحة النشاط وقوة تكامل الأدلة الثلاثة 📊',
    scene: true,
    notes: (
      <>
        <p><b>الأرقام والإحصاءات الكمية لدراسة الحالة:</b></p>
        <p>ويمكن قياس السلوك والنتائج بالأرقام للحصول على معلومات كمية. هنا لا نسأل المستخدم عن رأيه، بل ننظر إلى الأرقام:</p>
        <ul>
          <li><b>عدد زوار الموقع = 100 زائر.</b></li>
          <li><b>عدد مرات مشاهدة صفحة التسجيل = 80 مشاهدة.</b></li>
          <li><b>عدد من أكملوا التسجيل = 50 طالباً.</b></li>
          <li><b>معدل الارتداد = 30%.</b></li>
        </ul>
        <p><b>السؤال الرئيسي للدرس:</b> «كيف يمكن تقييم موقع إلكتروني، ولماذا من المفيد الجمع بين الأرقام وآراء المستخدمين؟»</p>
        <p><b>مبدأ تكامل الأدلة:</b> «تساعد الأرقام على وصف ما يحدث، وتساعد الطرق النوعية على فهم التجربة والأسباب المحتملة. وغالباً يكون الجمع بين أكثر من نوع من الأدلة، مع مراجعة الخبراء، أكثر فائدة.. أي أن الأفضل ألا نعتمد على طريقة واحدة فقط!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الأرقام الكمية المعتمدة لصفحة النشاط وتكامل الأدلة الثلاثة">
          ٢ · أرقام صفحة النشاط وقوة تكامل الأدلة الثلاثة 📊
        </Heading>

        {/* Top Banner: Central Question of the Lesson */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ❓ السؤال الرئيسي للدرس:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              كيف يمكن تقييم موقع إلكتروني، ولماذا من المفيد الجمع بين الأرقام وآراء المستخدمين؟
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 3 }}>
              «الأرقام تصف ما يحدث.. والطرق النوعية تفهم التجربة والأسباب.. ومراجعة الخبير تكشف العيوب المنهجية!»
            </div>
          </div>
        </Box>

        {/* Right Card: Visual Step-Down Conversion Funnel */}
        <Box x={660} y={215} w={560} h={365} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🔻 قمع الأرقام الكمية: صفحة النشاط
                </span>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  قمع التحويل (Funnel)
                </span>
              </div>

              {/* Graphic Funnel Bars */}
              <div className="space-y-2 mb-2">
                {/* Stage 1: All Visitors */}
                <div className="rounded-lg bg-sky-950/70 border border-sky-500 p-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[11px]">1</span>
                    <div>
                      <b className="text-sky-300">زوار الموقع بالكامل</b>
                      <div className="text-[10px] text-slate-400">إجمالي الطلاب الوافدين للموقع</div>
                    </div>
                  </div>
                  <span className="text-xl font-black text-sky-400 font-mono">100 زائر</span>
                </div>

                {/* Stage 2: Page Views */}
                <div className="rounded-lg bg-amber-950/70 border border-amber-500 p-2 flex items-center justify-between text-xs mr-4">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-[11px]">2</span>
                    <div>
                      <b className="text-amber-300">مشاهدة صفحة التسجيل (PV)</b>
                      <div className="text-[10px] text-slate-400">فتحوا استمارة النشاط الرياضي</div>
                    </div>
                  </div>
                  <span className="text-xl font-black text-amber-400 font-mono">80 مشاهدة</span>
                </div>

                {/* Stage 3: Completed Conversions */}
                <div className="rounded-lg bg-emerald-950/70 border border-emerald-500 p-2 flex items-center justify-between text-xs mr-8">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-[11px]">3</span>
                    <div>
                      <b className="text-emerald-300">أكملوا التسجيل بنجاح</b>
                      <div className="text-[10px] text-emerald-300/80">أرسلوا النموذج ووصلوا للهدف</div>
                    </div>
                  </div>
                  <span className="text-xl font-black text-emerald-400 font-mono">50 مسجلاً</span>
                </div>
              </div>

              {/* Drop-off & Bounce Highlight */}
              <div className="p-2 rounded bg-rose-950/40 border border-rose-500/60 flex items-center justify-between text-xs text-rose-200">
                <span>🏃‍♂️ <b>معدل الارتداد (Bounce Rate):</b> غادروا دون تفاعل</span>
                <span className="text-base font-black text-rose-400 font-mono">30%</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>30 طالباً شاهدوا الاستمارة ولم يكملوا التسجيل!</span>
              <span className="p-1 px-3 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">إحصاء دقيق 🔢</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Tripartite Synergy Graphic */}
        <Box x={60} y={215} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  🔺 مثلث التكامل الذهبي للأدلة الثلاثة
                </span>
                <span className="text-[11px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/40">
                  قوة الجمع
                </span>
              </div>

              {/* 3 Connected Synergy Nodes */}
              <div className="space-y-2 mb-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border-2 border-emerald-500/80 flex items-center justify-between text-xs shadow">
                  <div>
                    <span className="font-bold text-emerald-300 text-sm">📊 ١ · تحليلات وأرقام:</span>
                    <div className="text-slate-300 text-[11.5px]">تصف ما حدث بدقة كمية (50 سجلوا، 30 ارتداد).</div>
                  </div>
                  <span className="text-[10.5px] bg-emerald-950 text-emerald-300 px-2 py-1 rounded font-bold border border-emerald-700">تصف الظاهرة</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-2 border-purple-500/80 flex items-center justify-between text-xs shadow">
                  <div>
                    <span className="font-bold text-purple-300 text-sm">👥 ٢ · مراقبة ومقابلات:</span>
                    <div className="text-slate-300 text-[11.5px]">تفسر الأسباب المحتملة لتعطل الطلاب ومشاعرهم.</div>
                  </div>
                  <span className="text-[10.5px] bg-purple-950 text-purple-300 px-2 py-1 rounded font-bold border border-purple-700">تشرح السبب</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-2 border-amber-500/80 flex items-center justify-between text-xs shadow">
                  <div>
                    <span className="font-bold text-amber-300 text-sm">🧑‍🏫 ٣ · مراجعة خبير للموقع:</span>
                    <div className="text-slate-300 text-[11.5px]">فحص إرشادي منهجي للواجهة لكشف أخطاء التصميم.</div>
                  </div>
                  <span className="text-[10.5px] bg-amber-950 text-amber-300 px-2 py-1 rounded font-bold border border-amber-700">ترشد للحل</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>أرقام + مقابلات + مراجعة خبير = وضوح كامل!</span>
              <span className="p-1 px-3 rounded bg-orange-500/20 text-orange-300 font-bold text-xs">تكامل شامل 🏆</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={4}>
          🌟 <b>القاعدة الذهبية:</b> لا نعتمد على طريقة واحدة فقط! الأرقام تصف الظاهرة، والمقابلات تشرح أسبابها، ومراجعة الخبراء تضمن تصحيحها!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 5: Dual Orbital Circles & 4-Device Showcase
  // -------------------------------------------------------------------------
  {
    id: 'qual-quant-master-divide',
    title: '٣ · الفئتان الرئيسيتان للتقييم: فهم تفصيلي 🧠 مقابل قياس بالأرقام 📊',
    scene: true,
    notes: (
      <>
        <p><b>ملحوظة مهمة:</b></p>
        <p>تنقسم طرق التقييم عموماً إلى فئتين رئيسيتين: <b>التقييم النوعي</b> و<b>التقييم الكمي</b>.</p>
        <ul>
          <li><b>التقييم النوعي:</b> يهتم بفهم <b>لماذا تحدث المشكلة وكيف كانت تجربة المستخدم؟</b> ويركز على <b>الفهم التفصيلي</b> (تعريفه: يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة).</li>
          <li><b>التقييم الكمي:</b> يهتم بالأرقام لمعرفة <b>كم تحدث المشكلة وما حجمها؟</b> ويركز على <b>القياس بالأرقام</b> (تعريفه: يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج).</li>
        </ul>
        <p><b>طرق التقييم ليست خاصة بالمواقع الإلكترونية فقط!</b></p>
        <p><b>النص المعتمد:</b> «طرق التقييم النوعي والكمي ليست خاصة بتقييم المواقع الإلكترونية فقط، بل يمكن استخدامها في مجالات وتطبيقات كثيرة، مثل: تقييم التطبيقات والبرامج والخدمات والمنتجات.»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفئتان الرئيسيتان للتقييم والدائرتان البصريتان وامتداد المنهج">
          ٣ · الفئتان الرئيسيتان للتقييم: فهم تفصيلي 🧠 مقابل قياس بالأرقام 📊
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              📌 ملحوظة مهمة: تنقسم طرق التقييم عموماً إلى فئتين رئيسيتين
            </span>
            <div style={{ fontSize: 15, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 4 }}>
              التقييم النوعي: يهتم بفهم <span style={{ color: '#c084fc' }}>لماذا تحدث المشكلة وكيف كانت تجربة المستخدم؟</span>
              &nbsp;·&nbsp;
              التقييم الكمي: يهتم بالأرقام لمعرفة <span style={{ color: '#86efac' }}>كم تحدث المشكلة وما حجمها؟</span>
            </div>
          </div>
        </Box>

        {/* Right Card: Dual Glowing Orbital Circles */}
        <Box x={660} y={215} w={560} h={365} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🎯 الدائرتان البصريتان: جوهر التقييم
                </span>
                <span className="text-[11px] font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  رسم توضيحي معتمد
                </span>
              </div>

              {/* Dual Graphic Discs */}
              <div className="grid grid-cols-2 gap-3 mb-2.5">
                {/* Circle 1: Qualitative */}
                <div className="p-3 rounded-2xl bg-gradient-to-b from-purple-950 to-slate-950 border-2 border-purple-500 text-center flex flex-col items-center justify-between shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-700 to-pink-600 flex items-center justify-center text-3xl shadow-lg border-2 border-purple-300 mb-1">
                    🧠
                  </div>
                  <div className="text-xs font-black text-purple-200">التقييم النوعي</div>
                  <div className="text-[11px] font-bold text-amber-300 bg-purple-900/90 px-2 py-1 rounded w-full my-1">
                    يركز على الفهم التفصيلي
                  </div>
                  <div className="text-[10px] text-slate-300">ملاحظة ومقابلات وأدلة وصفية</div>
                </div>

                {/* Circle 2: Quantitative */}
                <div className="p-3 rounded-2xl bg-gradient-to-b from-emerald-950 to-slate-950 border-2 border-emerald-500 text-center flex flex-col items-center justify-between shadow-xl">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-emerald-700 to-teal-500 flex items-center justify-center text-3xl shadow-lg border-2 border-emerald-300 mb-1">
                    📊
                  </div>
                  <div className="text-xs font-black text-emerald-200">التقييم الكمي</div>
                  <div className="text-[11px] font-bold text-emerald-300 bg-emerald-900/90 px-2 py-1 rounded w-full my-1">
                    يركز على القياس بالأرقام
                  </div>
                  <div className="text-[10px] text-slate-300">بيانات عددية ومقاييس محددة</div>
                </div>
              </div>

              {/* Exact Definitions */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-[11px] space-y-1 text-slate-200">
                <div>📌 <b>النوعي:</b> يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم التجربة والأسباب.</div>
                <div>📌 <b>الكمي:</b> يستخدم البيانات العددية والمقاييس المحددة لقياس السلوك والنتائج.</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>فهم تفصيلي عميق ⬅️ مقابل قياس رقمي دقيق!</span>
              <span className="p-1 px-3 rounded bg-purple-500/20 text-purple-300 font-bold text-xs">تعريفان رسميان 📚</span>
            </div>
          </div>
        </Box>

        {/* Left Card: 4-Device Digital & Physical Showcase */}
        <Box x={60} y={215} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🌐 نطاق التقييم: مجالات تمتد خارج المواقع
                </span>
                <span className="text-[11px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  شمولية المنهج
                </span>
              </div>

              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-600/50 text-xs text-emerald-200 mb-2 leading-relaxed">
                «طرق التقييم النوعي والكمي ليست خاصة بتقييم المواقع الإلكترونية فقط، بل يمكن استخدامها في مجالات وتطبيقات كثيرة!»
              </div>

              {/* 4 Application Cards with Distinct Icons */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-sky-600/50 shadow">
                  <div className="font-bold text-sky-400 mb-1 flex items-center gap-1.5">
                    <span className="text-base">📱</span>
                    <span>١ · التطبيقات (Apps)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    تطبيقات الهواتف الذكية وسهولة تفاعل اللمس والإيماءات.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-purple-600/50 shadow">
                  <div className="font-bold text-purple-400 mb-1 flex items-center gap-1.5">
                    <span className="text-base">💻</span>
                    <span>٢ · البرامج (Software)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    برمجيات المحاسبة، ومنظومات المستشفيات والمدارس.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-amber-600/50 shadow">
                  <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                    <span className="text-base">🏛️</span>
                    <span>٣ · الخدمات (Services)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    الخدمات الرقمية الحكومية وبوابات الدفع الإلكتروني.
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-emerald-600/50 shadow">
                  <div className="font-bold text-emerald-400 mb-1 flex items-center gap-1.5">
                    <span className="text-base">📦</span>
                    <span>٤ · المنتجات (Products)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 leading-snug">
                    الأجهزة المادية الذكية وسهولة الأزرار والتجربة الفيزيائية.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>منهجية التقييم عالمية لكل ما يصممه الإنسان!</span>
              <span className="p-1 px-3 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">تطبيقات واسعة 🌍</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>القاعدة المعتمدة:</b> التقييم النوعي يركز على الفهم التفصيلي، والتقييم الكمي يركز على القياس بالأرقام، وقواعدهما تطبق على المواقع، التطبيقات، البرامج، الخدمات، والمنتجات!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 6: Usability Testing CCTV / Observation Lab
  // -------------------------------------------------------------------------
  {
    id: 'usability-testing-method',
    title: '٤ · طرق التقييم النوعي: اختبار قابلية الاستخدام (Usability Testing) 🧪',
    scene: true,
    notes: (
      <>
        <p><b>طرق التقييم النوعي: 1. اختبار قابلية الاستخدام (Usability Testing):</b></p>
        <p><b>نص التعريف المعتمد الرسمي:</b> «مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.»</p>
        <p><b>كيف يتم الاختبار في الواقع؟</b> بنخلي مستخدم حقيقي يستخدم الموقع ونراقبه: هل قدر ينفذ المهمة بسهولة؟ ولا واجه مشاكل؟</p>
        <p><b>المثال العملي المعتمد:</b></p>
        <p>نقول لطالب في المدرسة: <b>«ادخل الموقع وابحث عن نتيجة الطالب أحمد»</b> ونراقبه بدقة دون توجيه:</p>
        <ul>
          <li><b>لو الطالب:</b> دخل ➔ ضغط زر النتائج ➔ بحث عن الاسم ➔ وصل للنتيجة بسهولة ➔ <b>يبقى الاستخدام جيد ✅</b>.</li>
          <li><b>لكن لو:</b> دخل ➔ تاه بين الصفحات ➔ فتح قوائم كتير ➔ رجع ➔ سأل: أجيب النتيجة منين؟ ➔ <b>يبقى عندنا مشكلة في قابلية الاستخدام ❌</b>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقنية النوعية الأولى · مراقبة مستخدم حقيقي لتحديد صعوبات الاستخدام">
          ٤ · التقييم النوعي: اختبار قابلية الاستخدام (Usability Testing) 🧪
        </Heading>

        {/* Top Banner: Verbatim Definition */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              📌 نص التعريف المعتمد لاختبار قابلية الاستخدام:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.»
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 3 }}>
              بنخلي مستخدم حقيقي يستخدم الموقع ونراقب: هل قدر ينفذ المهمة بسهولة؟ ولا واجه مشاكل؟
            </div>
          </div>
        </Box>

        {/* Right Card: CCTV Success Feed (Scenario A) */}
        <Box x={660} y={215} w={560} h={365} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span className="font-bold text-emerald-300 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  🔴 بث المراقبة المباشر: مسار الاستخدام السلس
                </span>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                  ⏱️ 8 ثوانٍ فقط
                </span>
              </div>

              {/* Task Header */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 mb-2 text-xs text-slate-300">
                🎯 <b>مهمة الطالب المحددة:</b> «ادخل الموقع وابحث عن نتيجة الطالب أحمد»
              </div>

              {/* Step Flow Ribbon */}
              <div className="p-2.5 rounded-xl bg-emerald-950/60 border-2 border-emerald-500/70 mb-2">
                <div className="text-[11px] text-emerald-300 font-bold mb-1">خطوات الطالب أحمد أثناء المراقبة:</div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white flex-wrap">
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">1️⃣ دخل الموقع</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">2️⃣ زر النتائج بارز</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">3️⃣ بحث بالاسم</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-600 px-2.5 py-0.5 rounded shadow">4️⃣ طبع الشهادة!</span>
                </div>
              </div>

              {/* Visual Observation Log */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs text-emerald-200">
                👁️ <b>ملاحظة الباحث:</b> الطالب لم يسأل أحداً، وتوجه مباشرة للزر في منتصف الشاشة، وظهرت النتيجة في ثوانٍ معدودة.
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              الاستنتاج: الواجهة واضحة ➔ يبقى الاستخدام جيد وتجربة مريحة!
            </div>
          </div>
        </Box>

        {/* Left Card: CCTV Failure Feed (Scenario B) */}
        <Box x={60} y={215} w={580} h={365} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span className="font-bold text-rose-300 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                  ⚠️ بث المراقبة: رصد عائق تصميمي
                </span>
                <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">
                  ⏱️ +120 ثانية (تعثر!)
                </span>
              </div>

              {/* Task Header */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 mb-2 text-xs text-slate-300">
                🎯 <b>نفس المهمة:</b> مراقبة الطالب في موقع ذي تصميم عشوائي وغير منظم
              </div>

              {/* Step Flow Ribbon */}
              <div className="p-2.5 rounded-xl bg-rose-950/60 border-2 border-rose-500/70 mb-2">
                <div className="text-[11px] text-rose-300 font-bold mb-1">خطوات الطالب أحمد أثناء المراقبة:</div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white flex-wrap">
                  <span className="bg-rose-900 px-2 py-0.5 rounded">1️⃣ دخل الموقع</span>
                  <span className="text-rose-400">➔</span>
                  <span className="bg-rose-900 px-2 py-0.5 rounded">2️⃣ تاه في القوائم</span>
                  <span className="text-rose-400">➔</span>
                  <span className="bg-rose-900 px-2 py-0.5 rounded">3️⃣ رجع للخلف</span>
                  <span className="text-rose-400">➔</span>
                  <span className="bg-rose-700 px-2 py-0.5 rounded shadow">4️⃣ «أجيب النتيجة منين؟»</span>
                </div>
              </div>

              {/* Visual Observation Log */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs text-rose-200">
                👁️ <b>ملاحظة الباحث:</b> زر النتائج مخفي تحت قائمة إعلانات فرعية، الطالب شعر بالإحباط واستسلم!
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-red)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              الاستنتاج: وجود عائق صريح في قابلية الاستخدام يجب معالجته فوراً!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>احفظها للامتحان:</b> اختبار قابلية الاستخدام = أشوف المستخدم وهو بيستخدم الموقع وأحدد الصعوبات!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 7: Audio Interview Studio
  // -------------------------------------------------------------------------
  {
    id: 'interviews-method',
    title: '٥ · طرق التقييم النوعي: أسلوب المقابلات الشخصية (Interviews) 🎤',
    scene: true,
    notes: (
      <>
        <p><b>طرق التقييم النوعي: 2. المقابلات (Interviews):</b></p>
        <p><b>نص التعريف المعتمد الرسمي:</b> «الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.»</p>
        <p><b>الأسئلة الخمسة الذهبية:</b> (1) إيه اللي عجبك؟ (2) إيه اللي كان صعب؟ (3) إيه اللي مش واضح؟ (4) كنت تتوقع الزر ده يعمل إيه؟ (5) إيه اللي تحب يتغير؟</p>
        <p><b>مثال تطبيقي واقعي:</b> طالب يقول في المقابلة: «الموقع شكله كويس، بس زر تحميل النتيجة مش واضح وقعدت أدور كتير عليه.»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقنية النوعية الثانية · حوار مباشر لفهم احتياجات الزوار واستيائهم">
          ٥ · التقييم النوعي: أسلوب المقابلات الشخصية (Interviews) 🎤
        </Heading>

        {/* Top Banner: Verbatim Definition */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              📌 نص التعريف المعتمد للمقابلات:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.»
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 3 }}>
              هنا بدل ما نراقب المستخدم فقط.. نسأله مباشرة لنسمع صوته ونفهم احتياجاته ومشكلاته بدقة!
            </div>
          </div>
        </Box>

        {/* Right Card: 5 Golden Questions Accordion */}
        <Box x={660} y={215} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  🎙️ الأسئلة الخمسة الذهبية في المقابلة
                </span>
                <span className="text-[10px] font-bold bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded border border-orange-500/40">
                  دليل المقابلة
                </span>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-emerald-500 flex justify-between items-center text-slate-200">
                  <span>👍 <b>١ · إيه اللي عجبك؟</b></span>
                  <span className="text-[10px] text-emerald-400">تحديد نقاط القوة</span>
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 flex justify-between items-center text-slate-200">
                  <span>😓 <b>٢ · إيه اللي كان صعب عليك؟</b></span>
                  <span className="text-[10px] text-rose-400">اكتشاف العوائق</span>
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-amber-500 flex justify-between items-center text-slate-200">
                  <span>❓ <b>٣ · إيه اللي مش واضح؟</b></span>
                  <span className="text-[10px] text-amber-400">رصد الغموض</span>
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-sky-500 flex justify-between items-center text-slate-200">
                  <span>🔘 <b>٤ · كنت تتوقع الزر ده يعمل إيه؟</b></span>
                  <span className="text-[10px] text-sky-400">النموذج العقلي</span>
                </div>
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-purple-500 flex justify-between items-center text-slate-200">
                  <span>💡 <b>٥ · إيه اللي تحب يتغير؟</b></span>
                  <span className="text-[10px] text-purple-400">مقترحات التطوير</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              الحوار المباشر يكشف مشاعر الزائر التي تعجز الكاميرا عن تفسيرها!
            </div>
          </div>
        </Box>

        {/* Left Card: Graphic Audio Wave & Before/After Button Transformation */}
        <Box x={60} y={215} w={580} h={365} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  💬 أثر كلام الطالب: من الشكوى إلى قرار التصميم
                </span>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  دراسة حالة
                </span>
              </div>

              {/* Student Voice Quote */}
              <div className="p-2.5 rounded-xl bg-blue-950/70 border-2 border-blue-500 mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🧑‍🎓</span>
                  <b className="text-sky-300 text-xs">صوت الطالب أحمد في المقابلة:</b>
                </div>
                <div className="text-xs text-amber-300 italic font-bold pr-2 border-r-2 border-amber-400 leading-relaxed">
                  «الموقع شكله كويس وألوانه حلوة، بس زر تحميل النتيجة مش واضح ومكانه متداري وقعدت أدور كتير!»
                </div>
              </div>

              {/* Before vs After Button Showcase */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-900 border border-rose-800 text-center">
                  <div className="text-[10px] text-rose-400 font-bold mb-1">قبل المقابلة (تصميم مربك ❌)</div>
                  <div className="py-1 px-2 rounded bg-slate-800 text-slate-500 text-[10px] inline-block border border-slate-700">
                    رابط تحميل صغير مخفي
                  </div>
                </div>

                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-500 text-center">
                  <div className="text-[10px] text-emerald-400 font-bold mb-1">بعد المقابلة (قرار فوري ✅)</div>
                  <button className="py-1 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-[11px] shadow">
                    ⬇️ اضغط هنا لتحميل النتيجة
                  </button>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              المعلومة النوعية من المقابلة حولت الزر من عائق خفي إلى عنصر بارز وناجح!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="purple" fill="purple" size={17} tc="ink" at={4}>
          📌 <b>احفظها للامتحان:</b> المقابلات = نسمع رأي المستخدم مباشرة علشان نفهم احتياجاته ومشكلاته!
        </Box>
      </Scene>
    ),
  },
];
