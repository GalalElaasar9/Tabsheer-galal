// Board scenes · Unit 4 · Lesson 3 · School Case Practical Intro, Sports Registration Case, Tripartite Synergy, Qualitative vs Quantitative, Usability Testing, and Interviews
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'فكرة الدرس وموقع المدرسة',
  'التقييم النوعي (تعريف وشرح)',
  'اختبار قابلية الاستخدام',
  'المقابلات الشخصية',
  'التقييم الكمي وأرقام المدرسة',
  'تحليلات الويب ومؤشراتها',
  'اختبارات A/B وتجربة الزرين',
  'المقارنة وتطبيقات التقييم',
  'التقييم الإرشادي (الخبراء)',
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
  // SLIDE 3: Practical Opening Case — School Website & The 5 Hidden Failure Problems
  // -------------------------------------------------------------------------
  {
    id: 'school-website-case',
    title: '١ · فكرة الدرس: إحنا بندرس إيه؟ وموقف عملي لموقع المدرسة 🏫',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: فكرة الدرس – إحنا بندرس إيه؟</b></p>
        <p><b>خلينا نبدأ بموقف عملي:</b></p>
        <p>تخيل إننا صممنا موقعاً إلكترونياً لمدرسة، وفيه: تسجيل الطلاب · عرض النتائج · جدول الحصص · أخبار المدرسة.</p>
        <p><b>هل بمجرد إن الموقع شكله جميل يبقى كده ناجح؟</b> طبعاً لأ!</p>
        <p>ممكن الموقع يكون شكله ممتاز، لكن:</p>
        <ul>
          <li>الطالب مش عارف يسجل بسهولة.</li>
          <li>زر تسجيل الدخول مش واضح.</li>
          <li>الصفحة بطيئة.</li>
          <li>الطالب بيخرج قبل ما يكمل التسجيل.</li>
          <li>المستخدم مش عارف يتصرف لما تظهر له رسالة خطأ.</li>
        </ul>
        <p><b>إذن إحنا محتاجين نقيّم الموقع علشان نعرف:</b></p>
        <ol>
          <li>هل المستخدم قادر يستخدم الموقع بسهولة؟</li>
          <li>إيه المشكلات اللي بتواجهه؟</li>
          <li>كام شخص استخدم الموقع؟</li>
          <li>كام شخص حقق الهدف المطلوب؟</li>
          <li>إيه التعديلات اللي محتاجين نعملها؟</li>
        </ol>
        <p><b>الفكرة الأساسية للدرس:</b></p>
        <p>«تقييم الموقع الإلكتروني لا يعتمد على طريقة واحدة، وإنما نجمع بين نوعين من التقييم: التقييم النوعي والتقييم الكمي، بالإضافة إلى مراجعة الخبراء، للحصول على صورة واضحة عن جودة الموقع وتجربة المستخدم.»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="موقف عملي واقعي · المظهر الجمالي لا يعني نجاح الموقع بل نحتاج إلى تقييم حقيقي">
          ١ · فكرة الدرس: إحنا بندرس إيه؟ وموقف عملي لموقع المدرسة 🏫
        </Heading>

        {/* Top Principle Strip */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              💡 أولاً: فكرة الدرس – إحنا بندرس إيه؟ خلينا نبدأ بموقف عملي:
            </span>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 4 }}>
              «تخيل صممنا موقعاً لمدرسة بكل الخدمات وشكله جميل جداً.. هل بمجرد جمال الشكل يبقى ناجح؟ ❌ طبعاً لأ!»
            </div>
          </div>
        </Box>

        {/* Right Side: The Attractive School Website UI Mockup */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🏫 واجهة موقع المدرسة: تصميم متكامل وجذاب
                </span>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  المظهر الخارجي ✨
                </span>
              </div>

              {/* Browser Mockup */}
              <div className="rounded-xl bg-slate-950 border border-slate-700 p-2.5 shadow-xl space-y-2 text-xs">
                <div className="flex items-center justify-between pb-1.5 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="font-mono text-slate-300 mr-1.5">school-portal.edu.eg</span>
                  </div>
                  <span className="text-emerald-400 text-[10px] font-bold">✓ تصميم حديث</span>
                </div>

                {/* 4 Core Features Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900 border border-sky-600/50">
                    <div className="font-bold text-sky-400 flex items-center gap-1">
                      <span>📝</span>
                      <span>١ · تسجيل الطلاب</span>
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">استمارات القبول والأنشطة</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900 border border-emerald-600/50">
                    <div className="font-bold text-emerald-400 flex items-center gap-1">
                      <span>📊</span>
                      <span>٢ · عرض النتائج</span>
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">شهادات الدرجات والامتحانات</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900 border border-amber-600/50">
                    <div className="font-bold text-amber-400 flex items-center gap-1">
                      <span>📅</span>
                      <span>٣ · جدول الحصص</span>
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">التوزيع الأسبوعي للمواد</div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-900 border border-purple-600/50">
                    <div className="font-bold text-purple-400 flex items-center gap-1">
                      <span>📰</span>
                      <span>٤ · أخبار المدرسة</span>
                    </div>
                    <div className="text-[10.5px] text-slate-400 mt-0.5">الفعاليات والتكريمات اليومية</div>
                  </div>
                </div>

                <div className="p-1.5 rounded bg-blue-950/40 text-[11px] text-sky-200 border border-blue-900 text-center font-bold">
                  🎨 الشكل ممتاز ومبهر.. ولكن ماذا يحدث عند الاستخدام الواقعي؟
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>جمال المظهر وحده لا يضمن نجاح أي موقع!</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">فخ المظهر ⚠️</span>
            </div>
          </div>
        </Box>

        {/* Left Side: Reality Check (5 Hidden Failure Problems) */}
        <Box x={60} y={215} w={580} h={365} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  ⚠️ صدمة الواقع: المشكلات الخمس الخفية
                </span>
                <span className="text-[10px] font-bold bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">
                  ممكن يكون شكله ممتاز لكن!
                </span>
              </div>

              {/* 5 Problem Points with Clear Warning Icons */}
              <div className="space-y-1 text-xs">
                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-rose-500 flex items-center justify-between text-slate-200">
                  <span>😓 <b>الطالب مش عارف يسجل بسهولة:</b> تعقيد في الإجراءات والخطوات.</span>
                  <span className="text-[10px] text-rose-400 font-bold">صعوبة</span>
                </div>

                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-amber-500 flex items-center justify-between text-slate-200">
                  <span>🔘 <b>زر تسجيل الدخول مش واضح:</b> مكانه مخفي أو لونه غير بارز.</span>
                  <span className="text-[10px] text-amber-400 font-bold">غموض</span>
                </div>

                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-purple-500 flex items-center justify-between text-slate-200">
                  <span>⏳ <b>الصفحة بطيئة:</b> تأخير في التحميل يسبب الملل والمغادرة.</span>
                  <span className="text-[10px] text-purple-400 font-bold">بطء</span>
                </div>

                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-sky-500 flex items-center justify-between text-slate-200">
                  <span>🏃‍♂️ <b>الطالب بيخرج قبل ما يكمل التسجيل:</b> ارتداد وفقدان للزوار.</span>
                  <span className="text-[10px] text-sky-400 font-bold">ارتداد</span>
                </div>

                <div className="p-1.5 px-2 rounded-lg bg-slate-900 border-r-4 border-emerald-500 flex items-center justify-between text-slate-200">
                  <span>🚫 <b>المستخدم مش عارف يتصرف لما تظهر رسالة خطأ:</b> غياب الإرشاد.</span>
                  <span className="text-[10px] text-emerald-400 font-bold">حيرة</span>
                </div>
              </div>

              {/* Evaluation Target Ribbon */}
              <div className="mt-2 p-1.5 rounded bg-slate-950 border border-slate-800 text-[10.5px] text-slate-300">
                🎯 <b>إذن نقيّم الموقع لنعرف:</b> هل الاستخدام سهل؟ ما المشكلات؟ كم استخدمه؟ كم حقق هدفه؟ وما التعديلات المطلوبة؟
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-red)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              التقييم هو الوسيلة الوحيدة لاكتشاف هذه المشكلات وعلاجها!
            </div>
          </div>
        </Box>

        {/* Bottom Banner: Core Idea of the Lesson */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>الفكرة الأساسية للدرس:</b> تقييم الموقع الإلكتروني لا يعتمد على طريقة واحدة، وإنما نجمع بين نوعين من التقييم: التقييم النوعي والتقييم الكمي، بالإضافة إلى مراجعة الخبراء، للحصول على صورة واضحة عن جودة الموقع وتجربة المستخدم!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 4: Textbook Definition First + Exact Screenshot Content (No Added Words)
  // -------------------------------------------------------------------------
  {
    id: 'qualitative-eval-concept',
    title: '٢ · تعريف الكتاب أولاً ثم الشرح والمثال العملي (التقييم النوعي) 🧠',
    scene: true,
    notes: (
      <>
        <p><b>تعريف الكتاب:</b></p>
        <p><b>التقييم النوعي:</b> فهم تجربة المستخدم وأسباب السلوك والمشكلات من خلال الملاحظة والمقابلات وغيرها.</p>
        <p><b>مصطلحات أساسية:</b> يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة.</p>
        <hr />
        <p><b>1. يعني إيه تقييم نوعي Qualitative Evaluation؟</b></p>
        <p>التقييم النوعي هو تقييم بيهتم بفهم تجربة المستخدم ومعرفة أسباب المشكلات التي تواجهه.</p>
        <p>يعني إحنا مش عايزين نعرف الأرقام بس، إحنا عايزين نعرف المستخدم بيواجه إيه وليه.</p>
        <p><b>مثال عملي:</b></p>
        <p>صممنا صفحة تسجيل في موقع المدرسة.</p>
        <p>طلبنا من مجموعة طلاب يستخدموا الصفحة، وراقبناهم.</p>
        <p>لاحظنا:</p>
        <ul>
          <li>بعض الطلاب مش عارفين مكان زر التسجيل.</li>
          <li>بعضهم مش فاهم المطلوب في خانة البيانات.</li>
          <li>بعضهم بيواجه صعوبة في إكمال التسجيل.</li>
        </ul>
        <p>دي معلومات نوعية؛ لأنها بتوصف سلوك المستخدم والمشكلات اللي واجهته.</p>
        <p><b>خلاصة أساسية:</b> التقييم النوعي = لماذا حدثت المشكلة؟ وكيف كانت تجربة المستخدم؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الجزء الأول: التقييم النوعي والتقييم الكمي · تعريف الكتاب والشرح والمثال العملي">
          ٢ · التقييم النوعي: تعريف الكتاب والشرح والمثال العملي 🧠
        </Heading>

        {/* Top: Textbook Definition from Image 1 */}
        <Box x={60} y={110} w={1160} h={102} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 3 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-xs font-bold border border-purple-400">
                📖 تعريف الكتاب
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                التقييم النوعي:
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «فهم تجربة المستخدم وأسباب السلوك والمشكلات من خلال الملاحظة والمقابلات وغيرها.»
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 4 }}>
              «يستخدم الملاحظة والمقابلات والأدلة الوصفية لفهم تجربة المستخدم والأسباب المحتملة.»
            </div>
          </div>
        </Box>

        {/* Right Side: Exact Text from Image 2 */}
        <Box x={660} y={222} w={560} h={368} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '8px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  1. يعني إيه تقييم نوعي Qualitative Evaluation؟
                </span>
                <span className="text-xs font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  الجزء الأول
                </span>
              </div>

              {/* Exact Text from Image 2 */}
              <div className="p-4 rounded-xl bg-purple-950/80 border-2 border-purple-500/70 mb-3.5 shadow">
                <div className="text-sm font-bold text-white leading-relaxed">
                  التقييم النوعي هو تقييم بيهتم بـ <span className="text-amber-300">فهم تجربة المستخدم</span> ومعرفة <span className="text-amber-300">أسباب المشكلات</span> التي تواجهه.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border-2 border-slate-700 shadow">
                <div className="text-sm font-bold text-slate-200 leading-relaxed">
                  «يعني إحنا <span className="text-rose-400">مش عايزين نعرف الأرقام بس</span>، إحنا عايزين نعرف <span className="text-emerald-400">المستخدم بيواجه إيه وليه</span>.»
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>فهم تجربة المستخدم ومعرفة أسباب المشكلات</span>
              <span className="p-1 px-3 rounded bg-purple-500/20 text-purple-300 font-bold text-xs">سؤال (لماذا؟)</span>
            </div>
          </div>
        </Box>

        {/* Left Side: Exact Practical Example from Image 2 */}
        <Box x={60} y={222} w={580} h={368} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مثال عملي
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  موقع المدرسة 🏫
                </span>
              </div>

              {/* Exact Context from Image 2 */}
              <div className="p-2.5 rounded-lg bg-blue-950/70 border border-blue-500/60 text-xs text-sky-200 mb-2.5 leading-relaxed">
                <div>صممنا صفحة تسجيل في موقع المدرسة.</div>
                <div>طلبنا من مجموعة طلاب يستخدموا الصفحة، وراقبناهم.</div>
              </div>

              <div className="text-xs font-bold text-amber-300 mb-1.5 flex items-center gap-1">
                <span>لاحظنا:</span>
              </div>

              {/* Exact 3 Bullet Points from Image 2 */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border-r-4 border-amber-500 text-slate-100 shadow flex items-center justify-between">
                  <span className="font-bold">• بعض الطلاب مش عارفين مكان زر التسجيل.</span>
                  <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded">مكان الزر</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border-r-4 border-sky-500 text-slate-100 shadow flex items-center justify-between">
                  <span className="font-bold">• بعضهم مش فاهم المطلوب في خانة البيانات.</span>
                  <span className="text-[10px] text-sky-400 font-bold bg-sky-950 px-2 py-0.5 rounded">خانة البيانات</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900 border-r-4 border-rose-500 text-slate-100 shadow flex items-center justify-between">
                  <span className="font-bold">• بعضهم بيواجه صعوبة في إكمال التسجيل.</span>
                  <span className="text-[10px] text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded">إكمال التسجيل</span>
                </div>
              </div>

              {/* Exact Conclusion from Image 2 */}
              <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-950/80 border-2 border-emerald-500/80 text-xs text-emerald-200 font-bold flex items-center gap-2 shadow">
                <span>✨</span>
                <span>دي معلومات نوعية؛ لأنها بتوصف سلوك المستخدم والمشكلات اللي واجهته.</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>توصف سلوك المستخدم والمشكلات التي واجهته</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">معلومات نوعية</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>التقييم النوعي = لماذا حدثت المشكلة؟ وكيف كانت تجربة المستخدم؟</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 5: Usability Testing (Definition & Examples with Visual Identity)
  // -------------------------------------------------------------------------
  {
    id: 'usability-testing-method',
    title: '٣ · طرق التقييم النوعي (1): اختبار قابلية الاستخدام (Usability Testing) 🧪',
    scene: true,
    notes: (
      <>
        <p><b>أدوات التقييم النوعي في الكتاب: 1. اختبارات قابلية الاستخدام (Usability Testing):</b></p>
        <p><b>تعريف الكتاب:</b> «مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.»</p>
        <p><b>التعريف الوصفي:</b> «مراقبة المستخدمين أثناء استخدام الموقع لتحديد النقاط التي يصعب عليهم استخدامها.»</p>
        <p><b>مثال تطبيقي:</b> «نراقب طالبًا وهو يحاول التسجيل ونلاحظ أين يتوقف.»</p>
        <p><b>المثال العملي (مهمة التسجيل في موقع المدرسة):</b></p>
        <ul>
          <li><b>المسار السلس:</b> دخل ➔ وجد زر التسجيل بارزاً ➔ فهم المطلوب بالبيانات ➔ أكمل التسجيل بنجاح في 8 ثوانٍ ➔ <b>يبقى الاستخدام جيد ✅</b>.</li>
          <li><b>مسار رصد الصعوبات (أين يتوقف الطالب):</b> دخل ➔ مش عارف مكان زر التسجيل ➔ مش فاهم المطلوب في خانة البيانات ➔ توقف وصعوبة في إكمال التسجيل (+120 ثانية) ➔ <b>يبقى عندنا مشكلة في قابلية الاستخدام ❌</b>.</li>
        </ul>
        <p><b>خلاصة أساسية:</b> اختبار قابلية الاستخدام = أشوف المستخدم وهو بيستخدم الموقع وأحدد الصعوبات!</p>
        <p><b>خلاصة أساسية:</b> التقييم النوعي = لماذا حدثت المشكلة؟ وكيف كانت تجربة المستخدم؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقنية النوعية الأولى · مراقبة مستخدم حقيقي لتحديد صعوبات الاستخدام">
          ٣ · طرق التقييم النوعي (1): اختبار قابلية الاستخدام (Usability Testing) 🧪
        </Heading>

        {/* Top Banner: Verbatim Definitions from Book */}
        <Box x={60} y={110} w={1160} h={96} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-blue-900 text-sky-200 text-xs font-bold border border-blue-400">
                📖 التعريف المعتمد
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                1. اختبارات قابلية الاستخدام (Usability Testing):
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 2 }}>
              «مراقبة العمليات الفعلية لتحديد النقاط التي يصعب استخدامها.»
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 2 }}>
              «مراقبة المستخدمين أثناء استخدام الموقع لتحديد النقاط التي يصعب عليهم استخدامها.»
            </div>
          </div>
        </Box>

        {/* Right Card: CCTV Success Feed (Scenario A) */}
        <Box x={660} y={215} w={560} h={372} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span className="font-bold text-emerald-300 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  🔴 بث المراقبة: مسار الاستخدام السلس
                </span>
                <span className="text-[10px] font-mono bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-700">
                  ⏱️ 8 ثوانٍ فقط
                </span>
              </div>

              {/* Example Box */}
              <div className="p-2 rounded bg-blue-950/70 border border-blue-500/70 mb-2 text-xs text-sky-200">
                📌 <b>مثال تطبيقي:</b> «نراقب طالبًا وهو يحاول التسجيل ونلاحظ أين يتوقف.»
              </div>

              {/* Task Header */}
              <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 mb-2 text-xs text-slate-300">
                🎯 <b>مهمة الطالب:</b> الدخول والتسجيل في موقع المدرسة
              </div>

              {/* Step Flow Ribbon */}
              <div className="p-2 rounded-xl bg-emerald-950/60 border-2 border-emerald-500/70 mb-2">
                <div className="text-[11px] text-emerald-300 font-bold mb-1">خطوات الطالب أثناء المراقبة:</div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white flex-wrap">
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">1️⃣ دخل الصفحة</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">2️⃣ زر التسجيل بارز</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-800 px-2 py-0.5 rounded">3️⃣ فهم المطلوب بالبيانات</span>
                  <span className="text-emerald-400">➔</span>
                  <span className="bg-emerald-600 px-2.5 py-0.5 rounded shadow">4️⃣ أكمل التسجيل بنجاح!</span>
                </div>
              </div>

              {/* Visual Observation Log */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs text-emerald-200">
                👁️ <b>الملاحظة:</b> توجه مباشرة للزر، وفهم الخانات، وأكمل التسجيل في ثوانٍ دون أي توقف.
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              الاستنتاج: الواجهة واضحة ➔ يبقى الاستخدام جيد وتجربة مريحة ✅
            </div>
          </div>
        </Box>

        {/* Left Card: CCTV Failure Feed (Scenario B) */}
        <Box x={60} y={215} w={580} h={372} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span className="font-bold text-rose-300 text-base flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
                  ⚠️ بث المراقبة: رصد الصعوبات وأين يتوقف الطالب
                </span>
                <span className="text-[10px] font-mono bg-rose-950 text-rose-300 px-2 py-0.5 rounded border border-rose-700">
                  ⏱️ +120 ثانية (تعثر!)
                </span>
              </div>

              {/* Task Header */}
              <div className="p-2 rounded bg-slate-900/90 border border-slate-800 mb-2 text-xs text-slate-300">
                🎯 <b>نفس المهمة:</b> مراقبة الطالب في صفحة تسجيل ذات تصميم غير واضح
              </div>

              {/* Step Flow Ribbon */}
              <div className="p-2.5 rounded-xl bg-rose-950/60 border-2 border-rose-500/70 mb-2">
                <div className="text-[11px] text-rose-300 font-bold mb-1">خطوات وملاحظات مراقبة الطالب:</div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-white flex-wrap">
                  <span className="bg-rose-900 px-2 py-0.5 rounded">1️⃣ مش عارفين مكان الزر</span>
                  <span className="text-rose-400">➔</span>
                  <span className="bg-rose-900 px-2 py-0.5 rounded">2️⃣ مش فاهم خانة البيانات</span>
                  <span className="text-rose-400">➔</span>
                  <span className="bg-rose-700 px-2.5 py-0.5 rounded shadow">3️⃣ توقف وصعوبة في الإكمال!</span>
                </div>
              </div>

              {/* Visual Observation Log */}
              <div className="p-2 rounded bg-slate-950 border border-slate-800 text-xs text-rose-200">
                👁️ <b>الملاحظة:</b> الطالب تاه في الصفحة، وعجز عن معرفة المطلوب في الخانة، وتوقف قبل إكمال التسجيل!
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-red)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              الاستنتاج: وجود عائق في الواجهة ➔ مشكلة في قابلية الاستخدام يجب معالجتها ❌
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={598} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>اختبار قابلية الاستخدام = مراقبة المستخدم أثناء الاستخدام وتحديد الصعوبات!</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 6: Interviews (Definition & Examples with Visual Identity)
  // -------------------------------------------------------------------------
  {
    id: 'interviews-method',
    title: '٤ · طرق التقييم النوعي (2): أسلوب المقابلات الشخصية (Interviews) 🎤',
    scene: true,
    notes: (
      <>
        <p><b>أدوات التقييم النوعي في الكتاب: 2. المقابلات (Interviews):</b></p>
        <p><b>تعريف الكتاب:</b> «الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.»</p>
        <p><b>التعريف الوصفي:</b> «الاستماع إلى آراء المستخدمين مباشرة لفهم احتياجاتهم وتجاربهم.»</p>
        <p><b>مثال تطبيقي:</b> «نسأل الطلاب: إيه أكثر حاجة واجهتك صعوبة أثناء التسجيل؟»</p>
        <p><b>أسئلة مقابلة المستخدم بعد الاستخدام:</b> هل وجدت التسجيل سهلاً؟ ما الشيء الذي أزعجك؟ ما الذي كان غير واضح؟</p>
        <p><b>الأسئلة الخمسة الذهبية في المقابلة (دليل المقابلة 🎙️):</b></p>
        <ol>
          <li><b>١ · إيه اللي عجبك؟</b> ⬅️ تحديد نقاط القوة</li>
          <li><b>٢ · إيه اللي كان صعب عليك؟</b> ⬅️ اكتشاف العوائق</li>
          <li><b>٣ · إيه اللي مش واضح؟</b> ⬅️ رصد الغموض</li>
          <li><b>٤ · كنت تتوقع الزر ده يعمل إيه؟</b> ⬅️ النموذج العقلي</li>
          <li><b>٥ · إيه اللي تحب يتغير؟</b> ⬅️ مقترحات التطوير</li>
        </ol>
        <p><b>النص المعتمد:</b> «الحوار المباشر يكشف مشاعر الزائر التي تعجز الكاميرا عن تفسيرها!»</p>
        <p><b>أثر كلام الطالب في التصميم:</b> عندما يشتكي الطالب من عدم وضوح زر التسجيل ➔ يتم اتخاذ قرار فوري بتكبير وتوضيح الزر.</p>
        <p><b>خلاصة أساسية:</b> التقييم النوعي = لماذا حدثت المشكلة؟ وكيف كانت تجربة المستخدم؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التقنية النوعية الثانية · حوار مباشر لفهم احتياجات الزوار واستيائهم وتجاربهم">
          ٤ · طرق التقييم النوعي (2): أسلوب المقابلات الشخصية (Interviews) 🎤
        </Heading>

        {/* Top Banner: Verbatim Definitions from Book */}
        <Box x={60} y={110} w={1160} h={96} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-xs font-bold border border-purple-400">
                📖 التعريف المعتمد
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                2. المقابلات (Interviews):
              </span>
            </div>
            <div style={{ fontSize: 17.5, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 2 }}>
              «الاستماع إلى آراء المستخدمين المباشرة لفهم احتياجاتهم واستيائهم.»
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 2 }}>
              «الاستماع إلى آراء المستخدمين مباشرة لفهم احتياجاتهم وتجاربهم.»
            </div>
          </div>
        </Box>

        {/* Right Card: 5 Golden Questions Accordion (from Screenshot 4) */}
        <Box x={660} y={215} w={560} h={372} c="orange" fill="orange" at={2}>
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

              {/* 5 Questions Exactly from Image 4 */}
              <div className="space-y-1.5 text-xs">
                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-emerald-500 flex justify-between items-center text-slate-100 shadow">
                  <span className="font-bold">١ · إيه اللي عجبك؟</span>
                  <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">تحديد نقاط القوة</span>
                </div>

                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-rose-500 flex justify-between items-center text-slate-100 shadow">
                  <span className="font-bold">٢ · إيه اللي كان صعب عليك؟</span>
                  <span className="text-[10px] text-rose-400 font-bold bg-rose-950 px-2 py-0.5 rounded">اكتشاف العوائق</span>
                </div>

                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-amber-500 flex justify-between items-center text-slate-100 shadow">
                  <span className="font-bold">٣ · إيه اللي مش واضح؟</span>
                  <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded">رصد الغموض</span>
                </div>

                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-sky-500 flex justify-between items-center text-slate-100 shadow">
                  <span className="font-bold">٤ · كنت تتوقع الزر ده يعمل إيه؟</span>
                  <span className="text-[10px] text-sky-400 font-bold bg-sky-950 px-2 py-0.5 rounded">النموذج العقلي</span>
                </div>

                <div className="p-1.5 px-2.5 rounded-lg bg-slate-900 border-r-4 border-purple-500 flex justify-between items-center text-slate-100 shadow">
                  <span className="font-bold">٥ · إيه اللي تحب يتغير؟</span>
                  <span className="text-[10px] text-purple-400 font-bold bg-purple-950 px-2 py-0.5 rounded">مقترحات التطوير</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              الحوار المباشر يكشف مشاعر الزائر التي تعجز الكاميرا عن تفسيرها!
            </div>
          </div>
        </Box>

        {/* Left Card: Example & Design Transformation */}
        <Box x={60} y={215} w={580} h={372} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مثال المقابلة وأثر كلام الطالب في التصميم
                </span>
                <span className="text-[10px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  تطبيق عملي 💬
                </span>
              </div>

              {/* Question Example */}
              <div className="p-2 rounded bg-purple-950/70 border border-purple-600 mb-2 text-xs text-purple-200">
                📌 <b>سؤال المقابلة:</b> «نسأل الطلاب: إيه أكثر حاجة واجهتك صعوبة أثناء التسجيل؟»
              </div>

              {/* Questions after use */}
              <div className="p-2 rounded bg-slate-900 border border-slate-800 mb-2 text-xs text-sky-200 flex items-center justify-between">
                <span>💬 <b>أسئلة بعد الاستخدام:</b></span>
                <span className="text-[11px] text-slate-300">هل وجدت التسجيل سهلاً؟ ما الذي أزعجك؟ ما الذي كان غير واضح؟</span>
              </div>

              {/* Student Voice Quote */}
              <div className="p-2 rounded-xl bg-blue-950/70 border-2 border-blue-500 mb-2">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-base">🧑‍🎓</span>
                  <b className="text-sky-300 text-xs">صوت الطالب في المقابلة:</b>
                </div>
                <div className="text-xs text-amber-300 italic font-bold pr-2 border-r-2 border-amber-400 leading-relaxed">
                  «الموقع شكله كويس، بس مكان زر التسجيل مش واضح وقعدت أدور عليه كتير!»
                </div>
              </div>

              {/* Before vs After Button Showcase */}
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-rose-900/60 text-center flex flex-col justify-between items-center">
                  <div className="text-[10.5px] text-rose-400 font-bold mb-1.5 flex items-center justify-center gap-1">
                    <span>❌</span>
                    <span>قبل المقابلة (تصميم مربك)</span>
                  </div>
                  <div className="w-full py-1.5 px-2 rounded-lg bg-slate-800/90 text-slate-400 text-[10.5px] border border-slate-700/60 flex items-center justify-center gap-1">
                    <span>🔗</span>
                    <span>رابط صغير غير واضح ومخفي</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 text-center flex flex-col justify-between items-center shadow-lg">
                  <div className="text-[10.5px] text-emerald-300 font-bold mb-1.5 flex items-center justify-center gap-1">
                    <span>✅</span>
                    <span>بعد المقابلة (قرار فوري)</span>
                  </div>
                  <button
                    type="button"
                    className="w-full py-2 px-3 rounded-lg font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    style={{
                      backgroundColor: '#10b981',
                      color: '#022c22',
                      border: '1.5px solid #6ee7b7',
                      boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                    }}
                  >
                    <span style={{ color: '#022c22', fontSize: 13 }}>⬇️</span>
                    <span style={{ color: '#022c22', fontWeight: 900 }}>اضغط هنا للتسجيل في الموقع</span>
                  </button>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              نسمع رأي المستخدم مباشرة علشان نفهم احتياجاته ومشكلاته!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={598} w={1160} h={70} c="purple" fill="purple" size={17} tc="ink" at={4}>
          📌 <b>التقييم النوعي = لماذا حدثت المشكلة؟ وكيف كانت تجربة المستخدم؟</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 7: Quantitative Evaluation Concept + School Website Practical Example (Numbers & Stats)
  // -------------------------------------------------------------------------
  {
    id: 'quantitative-eval-concept',
    title: '٥ · التقييم الكمي: قياس السلوك والنتائج بالأرقام ومثال موقع المدرسة 📊',
    scene: true,
    notes: (
      <>
        <p><b>تعريف الكتاب:</b></p>
        <p><b>التقييم الكمي:</b> قياس السلوك والنتائج باستخدام بيانات عددية ومقاييس محددة بوضوح.</p>
        <p><b>الأدوات المعتمدة:</b></p>
        <ul>
          <li><b>تحليلات الويب:</b> تحليل مؤشرات مثل عدد PV والوقت المستغرق. (نعرف بالأرقام ماذا يحدث).</li>
          <li><b>اختبار A/B:</b> مقارنة خيارين من نفس الشيء لمعرفة أيهما أفضل في تحقيق الهدف.</li>
        </ul>
        <hr />
        <p><b>2. التقييم الكمي Quantitative Evaluation:</b></p>
        <p>التقييم الكمي بيهتم بقياس سلوك المستخدمين والنتائج باستخدام البيانات العددية والمقاييس المحددة.</p>
        <p>يعني بدل ما نسأل المستخدم عن رأيه، بنستخدم الأرقام والإحصائيات.</p>
        <p><b>مثال:</b> عندنا موقع مدرسة، ووجدنا:</p>
        <ul>
          <li>عدد زوار الموقع: 100 شخص.</li>
          <li>عدد مرات مشاهدة صفحة التسجيل: 80 مرة.</li>
          <li>عدد الطلاب الذين أكملوا التسجيل: 50 طالبًا.</li>
          <li>معدل الارتداد: 30%.</li>
        </ul>
        <p><b>خلاصة أساسية:</b> التقييم الكمي = كم تحدث المشكلة؟ وما حجمها؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الجزء الأول: التقييم النوعي والتقييم الكمي · قياس السلوك والنتائج ومثال موقع المدرسة بالأرقام">
          ٥ · التقييم الكمي: قياس السلوك والنتائج بالأرقام والإحصائيات 📊
        </Heading>

        {/* Top: Textbook Definition */}
        <Box x={60} y={110} w={1160} h={102} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 3 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-900 text-emerald-200 text-xs font-bold border border-emerald-400">
                📖 تعريف الكتاب
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                التقييم الكمي:
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «قياس السلوك والنتائج باستخدام بيانات عددية ومقاييس محددة بوضوح.»
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 4 }}>
              «تحليلات الويب: تحليل مؤشرات مثل عدد PV والوقت المستغرق · اختبار A/B: مقارنة خيارين لمعرفة أيهما أفضل في تحقيق الهدف»
            </div>
          </div>
        </Box>

        {/* Right Side: Concept & Definition */}
        <Box x={660} y={222} w={560} h={368} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '8px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  2. التقييم الكمي Quantitative Evaluation
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  البيانات العددية 📈
                </span>
              </div>

              {/* Exact Text from Image */}
              <div className="p-3.5 rounded-xl bg-emerald-950/80 border-2 border-emerald-500/70 mb-3 shadow">
                <div className="text-sm font-bold text-white leading-relaxed">
                  التقييم الكمي بيهتم بـ <span className="text-emerald-300">قياس سلوك المستخدمين والنتائج</span> باستخدام <span className="text-amber-300">البيانات العددية والمقاييس المحددة</span>.
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border-2 border-slate-700 shadow mb-3">
                <div className="text-sm font-bold text-slate-200 leading-relaxed">
                  «يعني بدل ما نسأل المستخدم عن رأيه، <span className="text-sky-300">بنستخدم الأرقام والإحصائيات</span>.»
                </div>
              </div>

              {/* Core Tools */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-bold text-sky-400 mb-0.5">📊 تحليلات الويب</div>
                  <div className="text-[11px] text-slate-300">تحليل الأرقام والمؤشرات لمعرفة ماذا يحدث.</div>
                </div>
                <div className="p-2 rounded-lg bg-slate-950 border border-slate-800">
                  <div className="font-bold text-purple-400 mb-0.5">⚖️ اختبار A/B</div>
                  <div className="text-[11px] text-slate-300">مقارنة خيارين لمعرفة أيهما أفضل لتحقيق الهدف.</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>بدل ما نسأل المستخدم عن رأيه ⬅️ بنستخدم الأرقام!</span>
              <span className="p-1 px-3 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">سؤال (كم؟)</span>
            </div>
          </div>
        </Box>

        {/* Left Side: School Website Practical Example */}
        <Box x={60} y={222} w={580} h={368} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  مثال: موقع مدرسة
                </span>
                <span className="text-xs font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  بيانات عددية 🏫
                </span>
              </div>

              <div className="p-2 rounded-lg bg-blue-950/70 border border-blue-500/60 text-xs text-sky-200 mb-2 leading-relaxed">
                عندنا موقع مدرسة، ووجدنا:
              </div>

              {/* 4 Stat Cards */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-sky-500 shadow flex flex-col justify-between">
                  <span className="text-[11px] text-slate-400">عدد زوار الموقع</span>
                  <div className="text-lg font-black text-sky-300 font-mono mt-1">100 شخص</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-purple-500 shadow flex flex-col justify-between">
                  <span className="text-[11px] text-slate-400">مشاهدة صفحة التسجيل</span>
                  <div className="text-lg font-black text-purple-300 font-mono mt-1">80 مرة</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow flex flex-col justify-between">
                  <span className="text-[11px] text-slate-400">أكملوا التسجيل</span>
                  <div className="text-lg font-black text-emerald-300 font-mono mt-1">50 طالبًا</div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-amber-500 shadow flex flex-col justify-between">
                  <span className="text-[11px] text-slate-400">معدل الارتداد</span>
                  <div className="text-lg font-black text-amber-300 font-mono mt-1">30%</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300">
                📊 <b>دلالة الأرقام:</b> تكشف بدقة كم شخصاً وصل للموقع، وكم شاهدوا الاستمارة، وكم حققوا الهدف، ونسبة من غادروا فوراً!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>أرقام وإحصائيات دقيقة تحسم قياس النتائج</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">قياس بالأرقام 🔢</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          📌 <b>التقييم الكمي = كم تحدث المشكلة؟ وما حجمها؟</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 8: Quantitative Method 1: Web Analytics (PV, Bounce Rate, CVR) + E-commerce Example
  // -------------------------------------------------------------------------
  {
    id: 'web-analytics-method',
    title: '٦ · طرق التقييم الكمي (١): تحليلات الويب (Web Analytics) ومؤشراتها 📈',
    scene: true,
    notes: (
      <>
        <p><b>1. تحليلات الويب (Web Analytics):</b></p>
        <p>هي جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.</p>
        <p>ومن خلالها بنحلل مؤشرات مثل:</p>
        <ul>
          <li><b>PV:</b> عدد مرات مشاهدة الصفحة.</li>
          <li><b>معدل الارتداد (Bounce Rate):</b> نسبة المستخدمين الذين غادروا بعد مشاهدة الصفحة الأولى وفق تعريف الأداة.</li>
          <li><b>CVR:</b> معدل التحويل، أي نسبة المستخدمين الذين حققوا الهدف المطلوب.</li>
        </ul>
        <hr />
        <p><b>مثال:</b> نحلل بيانات متجر إلكتروني لمعرفة عدد الزوار، وعدد مرات مشاهدة المنتجات، وعدد الأشخاص الذين اشتروا.</p>
        <p><b>وظيفة التقنية:</b> تحليل الأرقام والمؤشرات لمعرفة ما يفعله الزوار داخل الموقع.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="طرق التقييم الكمي (1) · جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج">
          ٦ · طرق التقييم الكمي (١): تحليلات الويب (Web Analytics) ومؤشراتها 📈
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={102} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 3 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-amber-900 text-amber-200 text-xs font-bold border border-amber-400">
                📊 التعريف المعتمد
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                1. تحليلات الويب (Web Analytics):
              </span>
            </div>
            <div style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «هي جمع وقياس وتحليل بيانات استخدام الموقع لفهم الوصول والتفاعل والنتائج.»
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', opacity: 0.95, marginTop: 4 }}>
              «تحليل الأرقام والمؤشرات لمعرفة ما يفعله الزوار داخل الموقع وفهم ماذا يحدث بالأرقام.»
            </div>
          </div>
        </Box>

        {/* Right Side: The 3 Core Indicators */}
        <Box x={660} y={222} w={560} h={368} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ومن خلالها بنحلل مؤشرات مثل:
                </span>
                <span className="text-xs font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40">
                  المؤشرات الثلاثة 🎯
                </span>
              </div>

              {/* 3 Metric Rows */}
              <div className="space-y-2 text-xs">
                {/* Metric 1: PV */}
                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-sky-500 shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-sky-400 text-sm">• PV (Page Views)</span>
                    <span className="text-[10px] text-sky-300 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">مشاهدات الصفحة</span>
                  </div>
                  <div className="text-slate-200 font-bold">
                    عدد مرات مشاهدة الصفحة.
                  </div>
                </div>

                {/* Metric 2: Bounce Rate */}
                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-amber-500 shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-amber-400 text-sm">• معدل الارتداد (Bounce Rate)</span>
                    <span className="text-[10px] text-amber-300 bg-amber-950 px-2 py-0.5 rounded border border-amber-800">المغادرة الفورية</span>
                  </div>
                  <div className="text-slate-200 font-bold leading-relaxed">
                    نسبة المستخدمين الذين غادروا بعد مشاهدة الصفحة الأولى وفق تعريف الأداة.
                  </div>
                </div>

                {/* Metric 3: CVR */}
                <div className="p-2.5 rounded-xl bg-slate-900 border-r-4 border-emerald-500 shadow">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-emerald-400 text-sm">• معدل التحويل (CVR)</span>
                    <span className="text-[10px] text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">تحقيق الهدف</span>
                  </div>
                  <div className="text-slate-200 font-bold leading-relaxed">
                    أي نسبة المستخدمين الذين حققوا الهدف المطلوب.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>رصد الوصول ⬅️ والتفاعل ⬅️ وتحقيق الهدف المطلوب!</span>
              <span className="p-1 px-3 rounded bg-amber-500/20 text-amber-300 font-bold text-xs">ثلاثية المؤشرات</span>
            </div>
          </div>
        </Box>

        {/* Left Side: E-Commerce Practical Example */}
        <Box x={60} y={222} w={580} h={368} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17.5, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  مثال: متجر إلكتروني 🛒
                </span>
                <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  تطبيق عملي
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/70 border border-emerald-500/60 text-xs text-emerald-200 mb-3 leading-relaxed">
                نحلل بيانات متجر إلكتروني لمعرفة:
              </div>

              {/* 3 Practical Analysis Rows */}
              <div className="space-y-2.5 text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between shadow">
                  <div className="flex items-center gap-2">
                    <span className="text-base">👥</span>
                    <span className="font-bold text-slate-100">عدد الزوار</span>
                  </div>
                  <span className="text-sky-300 font-mono font-bold bg-slate-800 px-2.5 py-1 rounded">معرفة حجم الإقبال</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between shadow">
                  <div className="flex items-center gap-2">
                    <span className="text-base">👀</span>
                    <span className="font-bold text-slate-100">عدد مرات مشاهدة المنتجات (PV)</span>
                  </div>
                  <span className="text-purple-300 font-mono font-bold bg-slate-800 px-2.5 py-1 rounded">تفاعل المشاهدات</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-between shadow">
                  <div className="flex items-center gap-2">
                    <span className="text-base">🛍️</span>
                    <span className="font-bold text-slate-100">عدد الأشخاص الذين اشتروا (CVR)</span>
                  </div>
                  <span className="text-emerald-300 font-mono font-bold bg-slate-800 px-2.5 py-1 rounded">إتمام الهدف المطلوب</span>
                </div>
              </div>

              <div className="mt-3 p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                💡 <b>الربط:</b> تحليلات الويب تكشف كم زائر دخل، وكم منتج شاهده، وكم شخص أتم الشراء بالفعل!
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>تحليل الأرقام والمؤشرات لمعرفة ما يفعله الزوار</span>
              <span className="p-1 px-3 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">تحليلات المتجر 🛒</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={600} w={1160} h={70} c="blue" fill="blue" size={17} tc="ink" at={4}>
          📌 <b>تحليلات الويب = تحليل الأرقام والمؤشرات لمعرفة ما يفعله الزوار داخل الموقع!</b>
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 9: Quantitative Method 2: A/B Testing + Dual Website Design Comparison (Blue vs Green)
  // -------------------------------------------------------------------------
  {
    id: 'ab-testing-method',
    title: '٧ · اختبار A/B: مقارنة تصميمين لموقع ومعرفة أيهما حقق نتائج أفضل ⚖️',
    scene: true,
    notes: (
      <>
        <p><b>2. اختبار A/B (A/B Testing):</b></p>
        <p>هو مقارنة نسختين من نفس الشيء لمعرفة أيهما أفضل في تحقيق الهدف.</p>
        <hr />
        <p><b>مثال عملي للطلاب (مقارنة تصميمين لموقع المتجر):</b></p>
        <p>عندنا موقع فيه زر لشراء منتج:</p>
        <ul>
          <li><b>النسخة A:</b> ديزاين الموقع مع زر الشراء باللون الأزرق ➔ حقق معدل تحويل 5% (عمليات شراء معتدلة).</li>
          <li><b>النسخة B:</b> ديزاين الموقع مع زر الشراء باللون الأخضر ➔ حقق معدل تحويل 15% (3 أضعاف المبيعات).</li>
        </ul>
        <p>نعرض النسختين على مجموعتين من المستخدمين (50% لكل نسخة)، ونقارن النتائج لمعرفة أي نسخة حققت عمليات شراء أكثر.</p>
        <p><b>النتيجة الحاسمة:</b> النسخة (B) ذات الزر الأخضر حققت نتائج أفضل بكثير في تحقيق الهدف وتم اعتمادها!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="طرق التقييم الكمي (2) · مقارنة نسختين لموقع المتجر وتحديد النسخة التي حققت أفضل نتائج بالأرقام">
          ٧ · اختبار A/B: مقارنة تصميمين لموقع ومعرفة أيهما حقق نتائج أفضل ⚖️
        </Heading>

        {/* Top: Definition Banner */}
        <Box x={60} y={110} w={1160} h={102} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 24px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 2 }}>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-900 text-purple-200 text-xs font-bold border border-purple-400">
                ⚖️ 2. اختبار A/B (A/B Testing)
              </span>
              <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                هو مقارنة نسختين من نفس الشيء لمعرفة أيهما أفضل في تحقيق الهدف.
              </span>
            </div>
            <div style={{ fontSize: 14.5, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 3 }}>
              «عندنا موقع فيه زر لشراء منتج: نعرض النسختين بالتساوي (50% لكل مجموعة)، ونقارن النتائج لمعرفة أي نسخة حققت عمليات شراء أكثر!»
            </div>
          </div>
        </Box>

        {/* Right Side: Website Design A (Blue Button) */}
        <Box x={660} y={222} w={560} h={368} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 16.5, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  ديزاين الموقع الأول: النسخة (A)
                </span>
                <span className="text-[10.5px] font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                  50% من الزوار 👥
                </span>
              </div>

              {/* Realistic Browser Window Mockup */}
              <div className="rounded-xl bg-slate-950 border border-slate-700 shadow overflow-hidden">
                {/* Browser Titlebar */}
                <div className="bg-slate-900 px-2.5 py-1 flex items-center justify-between border-b border-slate-800 text-[10px]">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-slate-400 font-mono mr-1.5">store.edu/shoes</span>
                  </div>
                  <span className="text-slate-400 font-bold">🛒 متجر الأدوات</span>
                </div>

                {/* Website Content */}
                <div className="p-2 space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👟</span>
                      <div>
                        <div className="font-bold text-slate-100 text-xs">حذاء رياضي مدرسي</div>
                        <div className="text-[10px] text-slate-400">مناسب لجميع الأنشطة المدرسية</div>
                      </div>
                    </div>
                    <div className="text-sky-300 font-black font-mono text-sm">250 ج.م</div>
                  </div>

                  {/* Version A Button: Blue */}
                  <div className="pt-0.5">
                    <button
                      type="button"
                      className="w-full py-2 px-3 rounded-lg font-bold text-xs text-white shadow flex items-center justify-center gap-1.5 cursor-default"
                      style={{ backgroundColor: '#2563eb', border: '1.5px solid #60a5fa' }}
                    >
                      <span>🛒</span>
                      <span>زر الشراء باللون الأزرق</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Version A Result Metrics */}
              <div className="mt-2 p-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <div className="text-[10.5px] text-slate-400 font-bold">معدل التحويل (CVR):</div>
                  <div className="text-base font-black text-sky-400 font-mono">5% فقط</div>
                </div>
                <div className="text-right">
                  <div className="text-[10.5px] text-slate-400 font-bold">حجم المبيعات:</div>
                  <div className="text-[11px] text-slate-300 font-bold">5 مشتريات لكل 100 زائر</div>
                </div>
                <div className="p-1 px-2 rounded bg-slate-800 text-[10px] text-slate-400 font-bold border border-slate-700">
                  نتائج عادية ⚪
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>النسخة A: زر الشراء باللون الأزرق</span>
              <span className="p-0.5 px-2 rounded bg-blue-500/20 text-blue-300 font-bold text-[10.5px]">النسخة الأصلية</span>
            </div>
          </div>
        </Box>

        {/* Left Side: Website Design B (Green Button - WINNER) */}
        <Box x={60} y={222} w={580} h={368} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 16.5, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  ديزاين الموقع الثاني: النسخة (B) 🏆
                </span>
                <span className="text-[10.5px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  50% من الزوار 👥
                </span>
              </div>

              {/* Realistic Browser Window Mockup */}
              <div className="rounded-xl bg-slate-950 border-2 border-emerald-500 shadow-xl overflow-hidden">
                {/* Browser Titlebar */}
                <div className="bg-slate-900 px-2.5 py-1 flex items-center justify-between border-b border-slate-800 text-[10px]">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="text-emerald-400 font-mono mr-1.5 font-bold">store.edu/shoes</span>
                  </div>
                  <span className="text-emerald-300 font-bold">🛒 متجر الأدوات</span>
                </div>

                {/* Website Content */}
                <div className="p-2 space-y-1.5 text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">👟</span>
                      <div>
                        <div className="font-bold text-white text-xs">حذاء رياضي مدرسي</div>
                        <div className="text-[10px] text-slate-400">مناسب لجميع الأنشطة المدرسية</div>
                      </div>
                    </div>
                    <div className="text-emerald-300 font-black font-mono text-sm">250 ج.م</div>
                  </div>

                  {/* Version B Button: Green High Contrast */}
                  <div className="pt-0.5">
                    <button
                      type="button"
                      className="w-full py-2 px-3 rounded-lg font-black text-xs text-slate-950 shadow-lg flex items-center justify-center gap-1.5 cursor-default"
                      style={{
                        backgroundColor: '#10b981',
                        border: '2px solid #6ee7b7',
                        boxShadow: '0 4px 14px rgba(16, 185, 129, 0.4)',
                      }}
                    >
                      <span style={{ color: '#022c22' }}>🛒</span>
                      <span style={{ color: '#022c22', fontWeight: 900 }}>زر الشراء باللون الأخضر (بارز وواضح)</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Version B Result Metrics (Winner) */}
              <div className="mt-2 p-2 rounded-xl bg-emerald-950/80 border-2 border-emerald-500 flex items-center justify-between text-xs shadow-lg">
                <div>
                  <div className="text-[10.5px] text-emerald-300 font-bold">معدل التحويل (CVR):</div>
                  <div className="text-base font-black text-emerald-400 font-mono">15% 🏆</div>
                </div>
                <div className="text-right">
                  <div className="text-[10.5px] text-emerald-300 font-bold">حجم المبيعات:</div>
                  <div className="text-[11px] text-emerald-100 font-bold">15 عملية شراء (3 أضعاف!)</div>
                </div>
                <div className="p-1 px-2.5 rounded bg-emerald-500 text-[10.5px] text-slate-950 font-black shadow">
                  حققت نتائج أفضل! ✅
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>النسخة B: زر الشراء باللون الأخضر حقق أفضل نتائج!</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">النسخة الأفضل 🏆</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner: Explicit Winner Verdict */}
        <Box x={60} y={600} w={1160} h={70} c="green" fill="green" size={17} tc="ink" at={4}>
          🏆 <b>النتيجة الحاسمة:</b> النسخة (B) ذات الزر الأخضر حققت نتائج أفضل بكثير وضاعفت المبيعات 3 مرات (15% مقابل 5%)، فتم اعتمادها رسمياً!
        </Box>
      </Scene>
    ),
  },

  // -------------------------------------------------------------------------
  // SLIDE 10: The Master Comparison: Qualitative vs Quantitative + Applications Beyond Websites
  // -------------------------------------------------------------------------
  {
    id: 'qual-vs-quant-comparison',
    title: '٨ · المقارنة الشاملة بين التقييم النوعي والكمي ومجالات التطبيق 🌐',
    scene: true,
    notes: (
      <>
        <p><b>الفرق بين النوعي والكمي:</b></p>
        <p><b>التقييم النوعي:</b> يهتم بفهم لماذا تحدث المشكلة؟ وكيف كانت تجربة المستخدم؟</p>
        <p><b>التقييم الكمي:</b> يهتم بالأرقام لمعرفة كم تحدث المشكلة؟ وما حجمها؟</p>
        <hr />
        <p><b>جدول المقارنة المعتمد:</b></p>
        <ul>
          <li><b>الهدف:</b> النوعي (فهم تجربة وسلوك المستخدم وأسباب المشكلات) | الكمي (قياس السلوك والنتائج بدقة عددية).</li>
          <li><b>السؤال الأساسي:</b> النوعي (لماذا حدثت المشكلة؟ وكيف كانت التجربة؟) | الكمي (كم عدد المستخدمين؟ وما حجم المشكلة أو النجاح؟).</li>
          <li><b>الأدوات:</b> النوعي (المقابلات، اختبارات قابلية الاستخدام والملاحظة) | الكمي (تحليلات الويب، اختبارات A/B، والاستبيانات).</li>
          <li><b>نوع البيانات:</b> النوعي (بيانات وصفية، كلام المستخدمين، مشاعرهم وملاحظات سلوكهم) | الكمي (بيانات رقمية وإحصاءات ومعدلات مئوية).</li>
        </ul>
        <hr />
        <p><b>ملحوظة مهمة:</b> الأفضل ألا نعتمد على طريقة واحدة فقط، وإنما نجمع بين التقييم النوعي والتقييم الكمي لنفهم المشكلة ونقيس حجمها في نفس الوقت.</p>
        <hr />
        <p><b>تطبيقات خارج المواقع:</b></p>
        <p>طرق التقييم النوعي والكمي ليست خاصة بتقييم المواقع الإلكترونية فقط، بل يمكن استخدامها في مجالات وتطبيقات كثيرة مثل:</p>
        <ol>
          <li>التطبيقات (Apps).</li>
          <li>البرامج (Software).</li>
          <li>الخدمات (Services).</li>
          <li>المنتجات (Products).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفرق بين النوعي والكمي · جدول المقارنة والجمع بينهما وتطبيقات تمتد خارج المواقع">
          ٨ · المقارنة الشاملة بين التقييم النوعي والكمي ومجالات التطبيق 🌐
        </Heading>

        {/* Top: Dual Core Questions & Combined Note */}
        <Box x={60} y={105} w={1160} h={100} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', lineHeight: 1.4, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              التقييم النوعي: يهتم بفهم <span style={{ color: '#c084fc' }}>لماذا تحدث المشكلة؟ وكيف كانت تجربة المستخدم؟</span>
              &nbsp;·&nbsp;
              التقييم الكمي: يهتم بالأرقام لمعرفة <span style={{ color: '#86efac' }}>كم تحدث المشكلة؟ وما حجمها؟</span>
            </div>
            <div className="mt-1.5 p-1 px-3 rounded-lg bg-slate-900/80 inline-block border border-amber-500/50 text-amber-300 font-bold text-xs">
              ✨ <b>ملحوظة مهمة:</b> الأفضل ألا نعتمد على طريقة واحدة فقط، وإنما نجمع بين التقييم النوعي والتقييم الكمي لنفهم المشكلة ونقيس حجمها في نفس الوقت!
            </div>
          </div>
        </Box>

        {/* Right Side: The Comparison Table (from Image 6) */}
        <Box x={660} y={212} w={560} h={378} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  جدول المقارنة: الفرق بين النوعي والكمي
                </span>
                <span className="text-[10.5px] font-bold bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-500/40">
                  مقارنة شاملة 📊
                </span>
              </div>

              {/* Table Container */}
              <div className="rounded-xl border border-slate-700 overflow-hidden shadow text-[11px]">
                <table className="w-full text-right border-collapse">
                  <thead>
                    <tr className="bg-slate-900/95 text-slate-200 border-b border-slate-700">
                      <th className="p-1.5 px-2 font-bold w-1/4">وجه المقارنة</th>
                      <th className="p-1.5 px-2 font-bold text-purple-300 w-[38%] border-r border-slate-700">التقييم النوعي</th>
                      <th className="p-1.5 px-2 font-bold text-emerald-300 w-[37%] border-r border-slate-700">التقييم الكمي</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950/90 text-slate-200">
                    <tr>
                      <td className="p-1.5 px-2 font-bold text-amber-300">الهدف</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">فهم تجربة وسلوك المستخدم وأسباب المشكلات</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">قياس السلوك والنتائج بدقة عددية</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 px-2 font-bold text-amber-300">السؤال الأساسي</td>
                      <td className="p-1.5 px-2 border-r border-slate-800 text-purple-200 font-bold">لماذا حدثت المشكلة؟ وكيف كانت التجربة؟</td>
                      <td className="p-1.5 px-2 border-r border-slate-800 text-emerald-200 font-bold">كم عدد المستخدمين؟ وما حجم المشكلة أو النجاح؟</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 px-2 font-bold text-amber-300">الأدوات</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">المقابلات، اختبارات قابلية الاستخدام والملاحظة</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">تحليلات الويب، اختبارات A/B، والاستبيانات</td>
                    </tr>
                    <tr>
                      <td className="p-1.5 px-2 font-bold text-amber-300">نوع البيانات</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">بيانات وصفية، كلام المستخدمين، مشاعرهم وملاحظاتهم</td>
                      <td className="p-1.5 px-2 border-r border-slate-800">بيانات رقمية وإحصاءات ومعدلات مئوية</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>نجمع بينهما لنفهم المشكلة ونقيس حجمها في نفس الوقت!</span>
              <span className="p-0.5 px-2 rounded bg-purple-500/20 text-purple-300 font-bold text-[10.5px]">تكامل منهجي</span>
            </div>
          </div>
        </Box>

        {/* Left Side: Applications Beyond Websites (from Image 7) */}
        <Box x={60} y={212} w={580} h={378} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  تطبيقات خارج المواقع: شمولية التقييم 🌍
                </span>
                <span className="text-[10.5px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/40">
                  تطبيقات واسعة
                </span>
              </div>

              <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-600/50 text-[11.5px] text-emerald-200 mb-2 leading-relaxed">
                «طرق التقييم النوعي والكمي ليست خاصة بتقييم المواقع الإلكترونية فقط، بل يمكن استخدامها في مجالات وتطبيقات كثيرة مثل:»
              </div>

              {/* 4 Application Cards */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-xl bg-slate-900 border border-sky-500/50 shadow">
                  <div className="font-bold text-sky-400 mb-0.5 flex items-center gap-1.5">
                    <span>📱</span>
                    <span>1. التطبيقات (Apps)</span>
                  </div>
                  <div className="text-[10.5px] text-slate-300 leading-snug">
                    تطبيقات الهواتف الذكية وسهولة تفاعل اللمس والإيماءات.
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-purple-500/50 shadow">
                  <div className="font-bold text-purple-400 mb-0.5 flex items-center gap-1.5">
                    <span>💻</span>
                    <span>2. البرامج (Software)</span>
                  </div>
                  <div className="text-[10.5px] text-slate-300 leading-snug">
                    برمجيات المحاسبة ومنظومات المدارس والمستشفيات.
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-amber-500/50 shadow">
                  <div className="font-bold text-amber-400 mb-0.5 flex items-center gap-1.5">
                    <span>🏛️</span>
                    <span>3. الخدمات (Services)</span>
                  </div>
                  <div className="text-[10.5px] text-slate-300 leading-snug">
                    الخدمات الرقمية الحكومية وبوابات الدفع الإلكتروني.
                  </div>
                </div>

                <div className="p-2 rounded-xl bg-slate-900 border border-emerald-500/50 shadow">
                  <div className="font-bold text-emerald-400 mb-0.5 flex items-center gap-1.5">
                    <span>📦</span>
                    <span>4. المنتجات (Products)</span>
                  </div>
                  <div className="text-[10.5px] text-slate-300 leading-snug">
                    الأجهزة المادية الذكية وسهولة الأزرار والتجربة الفيزيائية.
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 5 }}>
              <span style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>منهجية عالمية تطبق على كل ما يصممه الإنسان!</span>
              <span className="p-0.5 px-2 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10.5px]">تطبيقات 4 📦</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={598} w={1160} h={70} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>القاعدة المعتمدة:</b> التقييم النوعي يركز على الفهم التفصيلي، والتقييم الكمي يركز على القياس بالأرقام، والجمع بينهما يعطي الصورة الكاملة!
        </Box>
      </Scene>
    ),
  },
];
