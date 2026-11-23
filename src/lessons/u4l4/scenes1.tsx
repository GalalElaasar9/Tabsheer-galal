// Board scenes · Unit 4 · Lesson 4 · intro, iterative philosophy, and the PDCA cycle
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'تمهيد وفكرة التحسين',
  'الفكرة الأساسية للدرس',
  'دورة ديمنغ (PDCA)',
  'التفكير التصميمي',
  'اختبار A/B',
  'ترابط الأساليب الثلاثة',
  'أهم مصطلحات الدرس',
  'بنك الأسئلة والتقييم',
];

const STOP_PTS: [number, number][] = [
  [1050, 350], [800, 350], [550, 350], [300, 350],
  [300, 570], [550, 570], [800, 570], [1050, 570],
];

export const intro: FrameDef[] = [
  {
    id: 'cover', title: 'الغلاف', scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم في الدرس الرابع من الوحدة الرابعة: عملية التحسين التكراري للمواقع الإلكترونية.</b></p>
        <p>مواقع الويب كائنات حية تتطور باستمرار. في هذا الدرس نتعلم كيف نطبق المنهجية الهندسية لتحسين الموقع وتجربة المستخدم بشكل دائم عبر دورة PDCA، التفكير التصميمي، واختبار A/B.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={28} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 4 · Lesson 4</Txt>
        <Txt x={640} y={205} size={62}>عملية التحسين التكراري</Txt>
        <Txt x={640} y={272} size={48} c="blue">للمواقع الإلكترونية</Txt>
        <Underline x={370} y={312} w={540} c="blue" />
        <Txt x={640} y={360} size={32} c="blue">Iterative Website Optimization Process</Txt>

        {[
          ['💡', 'فكرة التحسين'],
          ['🔄', 'دورة PDCA'],
          ['🧠', 'التفكير التصميمي'],
          ['⚖️', 'اختبار A/B'],
          ['📖', 'المعجم والتقييم'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1060 - i * 210}
            y={535}
            icon={icon}
            size={80}
            label={label}
            lsize={20}
            lc="blue"
            at={1}
            delay={i * 0.2}
          />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في التحسين التكراري:</b> ثماني محطات متكاملة تغطي تمهيد الدرس، الفكرة الأساسية، دورة PDCA، التفكير التصميمي، اختبار A/B، ترابط الأساليب الثلاثة، أهم المصطلحات، وبنك الأسئلة والتقييم الشامل.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات التحسين التكراري</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={28} tc="ink">
          ❓ كيف نطور موقعنا باستمرار ليكون أسهل وأفضل للزوار خطوة بخطوة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={19}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
  {
    id: 'intro-hook',
    title: 'تمهيد · هل الموقع المنشور مثالي؟',
    scene: true,
    notes: (
      <>
        <p><b>تمهيد ومقدمة الدرس:</b></p>
        <p>سؤال البداية: هل عمرك دخلت موقع إلكتروني وحسيت إن استخدامه صعب؟</p>
        <p>هل نشر الموقع يعني أنه أصبح مثالياً؟ طبعاً لأ! الموقع منتج يحتاج متابعة وتجربة وقياس وتطوير مستمر، ومن هنا ظهر مفهوم التحسين التكراري (Iterative Improvement).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>تمهيد · هل نشر الموقع يعني أنه أصبح مثالياً؟ 🤔</Heading>

        {/* Question Hook */}
        <Box x={120} y={110} w={1040} h={65} c="pink" fill="pink" size={26} tc="ink">
          ❓ خلينا نبدأ بسؤال: هل عمرك دخلت موقع إلكتروني وحسيت إن استخدامه صعب؟
        </Box>

        {/* 4 Difficulty Cards */}
        <Place x={120} y={185} w={1040} h={155} at={1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 w-full h-full text-right font-sans" dir="rtl">
            <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-1.5 shadow-sm">
              <span className="text-2xl">🎫</span>
              <span className="font-extrabold text-xs text-[var(--pen-blue)]">حجز تذكرة</span>
              <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed font-medium">
                دخلت موقع علشان تحجز تذكرة، لكن مش عارف توصل لزر الحجز.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-1.5 shadow-sm">
              <span className="text-2xl">🛒</span>
              <span className="font-extrabold text-xs text-[var(--pen-orange)]">موقع تسوق</span>
              <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed font-medium">
                دخلت موقع تسوق، ولقيت إن عملية الشراء طويلة ومعقدة.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-1.5 shadow-sm">
              <span className="text-2xl">📱</span>
              <span className="font-extrabold text-xs text-[var(--pen-green)]">تصفح بالموبايل</span>
              <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed font-medium">
                فتحت موقع من الموبايل، ولقيت الكلام صغير والأزرار مش واضحة.
              </p>
            </div>

            <div className="p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-1.5 shadow-sm">
              <span className="text-2xl">⚠️</span>
              <span className="font-extrabold text-xs text-[var(--pen-red)]">تسجيل الحساب</span>
              <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed font-medium">
                حاولت تسجل في موقع، لكن كل شوية تظهرلك مشكلة.
              </p>
            </div>
          </div>
        </Place>

        {/* Central Question & Analogy */}
        <Box x={120} y={350} w={510} h={210} c="orange" at={2}>
          <div className="flex flex-col gap-2 text-right font-sans p-2">
            <span className="font-black text-sm text-[var(--pen-orange)]">
              ❓ هنا عندنا سؤال مهم:
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              هل معنى إن الموقع اتصمم واتبرمج واتنشر على الإنترنت إنه كده أصبح موقع مثالي ومش محتاج أي تعديل؟
            </p>
            <div className="p-2 rounded-xl bg-red-950/30 border border-red-500/40 text-center font-black text-sm text-red-400">
              طبعاً لأ! ❌
            </div>
            <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
              الموقع مش مجرد حاجة بنصممها مرة واحدة وننتهي منها.
            </p>
          </div>
        </Box>

        <Box x={650} y={350} w={510} h={210} c="blue" at={2}>
          <div className="flex flex-col gap-2 text-right font-sans p-2">
            <span className="font-black text-sm text-[var(--pen-blue)]">
              💡 مثال توضيحي:
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
              تخيل إنك عملت اختبار تقييمي، وبعد ما تم حله، اكتشفت إن فيه سؤال مش واضح، وسؤال تاني صعب بطريقة غير مناسبة، وإن المعظم وقعوا في نفس الجزئية.
            </p>
            <div className="p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] text-[11px] text-[var(--text)] font-semibold leading-relaxed">
              هل هتقول خلاص الاختبار اتعمل وانتهى؟ ولا هتراجع النتائج، وتعرف أسباب الأخطاء، وتعدل الأسئلة، وتخلي الاختبار أفضل في المرة الجاية؟ <b>أكيد هتختار الحل التاني!</b>
            </div>
          </div>
        </Box>

        {/* Conclusion / Takeaway */}
        <Place x={120} y={575} w={1040} h={115} at={3}>
          <div className="p-3.5 rounded-2xl bg-purple-950/25 border-2 border-purple-500/50 flex flex-col gap-1.5 text-right font-sans shadow-md" dir="rtl">
            <div className="flex items-center gap-2">
              <span className="text-xl">🔄</span>
              <span className="font-black text-sm text-purple-300">
                وده بالضبط اللي بيحصل في المواقع الإلكترونية!
              </span>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
              الموقع منتج محتاج متابعة وتجربة وقياس وتطوير مستمر. ومن هنا ظهر مفهوم مهم جداً اسمه:
              <b className="text-[var(--primary)] text-sm mr-1 font-black">التحسين التكراري (Iterative Improvement)</b>.
            </p>
            <span className="text-[11px] text-[var(--safe)] font-bold">
              يعني إيه؟ وإزاي نقدر نحسن الموقع خطوة بخطوة؟ ده موضوع درسنا النهارده 🎯
            </span>
          </div>
        </Place>
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'core-concept',
    title: 'ثانياً · الفكرة الأساسية: حلقات التحسين والأساليب الثلاثة',
    scene: true,
    notes: (
      <>
        <p><b>الفكرة الأساسية للدرس:</b></p>
        <p>المواقع الإلكترونية لا تُبنى مثالية من أول مرة، ولكن يتم تحسينها من خلال حلقات متكررة.</p>
        <p>نراقب استخدام الناس للموقع: ما الذي يعمل جيداً؟ ما المشكلات؟ ما التعديلات المقترحة؟ ثم نطبق ونقيس ونكرر.</p>
        <p>يحدد المنهج ثلاثة أساليب مترابطة للتحسين: دورة PDCA، التفكير التصميمي (Design Thinking)، واختبار A/B.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المواقع لا تُبنى مثالية من أول مرة.. بل تتطور عبر حلقات مستمرة من التجربة والتحسين">
          ثانياً · الفكرة الأساسية للدرس 🔄
        </Heading>

        {/* Top Principle Box */}
        <Box x={60} y={105} w={1160} h={65} c="purple" fill="purple" size={20} tc="ink">
          <span className="font-bold whitespace-nowrap">
            💡 المنهج يوضح: المواقع الإلكترونية لا تُبنى مثالية من أول مرة، ولكن يتم تحسينها من خلال حلقات متكررة.
          </span>
        </Box>

        {/* Observation Loop (يعني إيه الكلام ده؟) */}
        <Place x={60} y={180} w={1160} h={175} at={1}>
          <div className="p-4 rounded-2xl border-2 border-[var(--pen-blue)] bg-[var(--surface-2)] flex flex-col justify-between shadow-sm text-right font-sans h-full" dir="rtl">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
              <span className="font-black text-sm text-[var(--pen-blue)]">
                🔍 يعني إيه الكلام ده؟
              </span>
              <span className="text-xs text-[var(--muted)] font-bold">
                بعد ما نصمم الموقع وننشره، بنبدأ نراقب استخدام الناس ليه، ونشوف:
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-1">
              <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-green-500/30 flex items-center gap-2 text-xs">
                <span className="text-lg">🟢</span>
                <span className="text-[var(--text)] font-semibold">إيه الحاجات اللي شغالة كويس؟</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-red-500/30 flex items-center gap-2 text-xs">
                <span className="text-lg">🔴</span>
                <span className="text-[var(--text)] font-semibold">إيه الحاجات اللي المستخدمين بيواجهوا فيها مشاكل؟</span>
              </div>
              <div className="p-2.5 rounded-xl bg-[var(--surface-1)] border border-amber-500/30 flex items-center gap-2 text-xs">
                <span className="text-lg">💡</span>
                <span className="text-[var(--text)] font-semibold">إيه التعديلات اللي ممكن تحسن تجربة المستخدم؟</span>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-blue-950/30 border border-blue-500/40 text-center text-xs font-bold text-blue-200">
              🔄 &quot;وبعد كده نطبق التعديلات، ونقيس النتائج، ونكرر العملية مرة تانية.&quot;
            </div>
          </div>
        </Place>

        {/* The 3 Core Methods (الأساليب الثلاثة المترابطة) */}
        <Place x={60} y={368} w={1160} h={240} at={2}>
          <div className="flex flex-col gap-2.5 text-right font-sans h-full" dir="rtl">
            <span className="font-black text-sm text-[var(--primary)]">
              📌 المنهج بيحدد ٣ أساليب مترابطة بتساعدنا على تحسين المواقع الإلكترونية:
            </span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 flex-1">
              {/* Method 1: PDCA */}
              <div className="p-4 rounded-2xl border-2 border-[var(--pen-purple)] bg-[var(--surface-2)] flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl p-1.5 rounded-xl bg-purple-500/15">🔄</span>
                  <div>
                    <span className="text-xs font-black text-[var(--muted)]">الأسلوب الأول</span>
                    <h4 className="m-0 text-sm font-extrabold text-[var(--pen-purple)]">
                      ١. دورة PDCA
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
                  دورة التحسين المستمر التكرارية: خطط (Plan)، نفذ (Do)، افحص (Check)، وطبق واعتمد (Act).
                </p>
                <span className="text-[11px] text-[var(--muted)] font-mono">Plan · Do · Check · Act</span>
              </div>

              {/* Method 2: Design Thinking */}
              <div className="p-4 rounded-2xl border-2 border-[var(--pen-orange)] bg-[var(--surface-2)] flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl p-1.5 rounded-xl bg-orange-500/15">🧠</span>
                  <div>
                    <span className="text-xs font-black text-[var(--muted)]">الأسلوب الثاني</span>
                    <h4 className="m-0 text-sm font-extrabold text-[var(--pen-orange)]">
                      ٢. التفكير التصميمي
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
                  (Design Thinking): الانطلاق من فهم المستخدم وحل مشكلاته وتجربة النماذج الأولية.
                </p>
                <span className="text-[11px] text-[var(--muted)] font-mono">User-Centered Problem Solving</span>
              </div>

              {/* Method 3: A/B Testing */}
              <div className="p-4 rounded-2xl border-2 border-[var(--pen-green)] bg-[var(--surface-2)] flex flex-col justify-between shadow-md">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl p-1.5 rounded-xl bg-green-500/15">⚖️</span>
                  <div>
                    <span className="text-xs font-black text-[var(--muted)]">الأسلوب الثالث</span>
                    <h4 className="m-0 text-sm font-extrabold text-[var(--pen-green)]">
                      ٣. اختبار A/B
                    </h4>
                  </div>
                </div>
                <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
                  مقارنة نسختين من الصفحة لمعرفة أي خيار يحقق تفاعلاً أعلى ونتائج أفضل بالأرقام.
                </p>
                <span className="text-[11px] text-[var(--muted)] font-mono">A/B Testing & Data-Driven</span>
              </div>
            </div>
          </div>
        </Place>

        {/* Footer Transition */}
        <Place x={60} y={620} w={1160} h={65} at={3}>
          <div className="p-3 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 flex items-center justify-between text-xs font-bold text-[var(--text)] shadow-sm" dir="rtl">
            <span className="flex items-center gap-2">
              <span className="text-lg">🎯</span>
              <span>هنشرح كل واحدة بالتفصيل في المحطات القادمة!</span>
            </span>
            <span className="text-[var(--primary)] font-black">
              دورة PDCA ⬅️ التفكير التصميمي ⬅️ اختبار A/B
            </span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'pdca-intro',
    title: '١ · ما المقصود بدورة PDCA؟',
    scene: true,
    notes: (
      <>
        <p><b>١- ما المقصود بدورة PDCA؟</b></p>
        <p>هي طريقة منظمة تساعد على تطوير العمل وتحسينه بشكل مستمر، من خلال تكرار أربع خطوات بالترتيب.</p>
        <p>والاختصار PDCA بيتكون من أول حرف في كل خطوة: Plan (خطط)، Do (نفّذ)، Check (تحقق)، Act (تصرف).</p>
        <p><b>مثال عملي:</b> موقع لبيع المنتجات، صاحب الموقع لاحظ أن عدداً كبيراً من المستخدمين يضيفون المنتجات للسلة دون إكمال الشراء. كيف نستخدم دورة PDCA لحل هذه المشكلة؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="طريقة منظمة لتطوير العمل وتحسينه بشكل مستمر عبر أربع خطوات مرتبة">
          ١ · ما المقصود بدورة PDCA؟
        </Heading>

        {/* Intro Definition Box */}
        <Place x={60} y={115} w={1160} h={80} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🔄</span>
              <div>
                <span className="font-extrabold text-sm text-[var(--primary)] block">التعريف الأساسي:</span>
                <p className="text-xs text-[var(--text)] m-0 font-medium">
                  هي طريقة منظمة تساعد على تطوير العمل وتحسينه بشكل مستمر، من خلال تكرار أربع خطوات بالترتيب.
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs font-black text-[var(--primary)] whitespace-nowrap">
              تكرار ٤ خطوات بالترتيب
            </div>
          </div>
        </Place>

        {/* Left Card: PDCA Table (Screenshot 1 Table) */}
        <Place x={660} y={210} w={560} h={375} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-blue)]">
                  والاختصار PDCA بيتكون من أول حرف في كل خطوة:
                </span>
                <span className="text-[11px] font-mono text-[var(--muted)]">4-Step Acronym</span>
              </div>

              {/* Table */}
              <div className="space-y-2">
                <div className="grid grid-cols-12 gap-2 text-center text-xs font-black text-[var(--muted)] pb-1 border-b border-[var(--border)]/40">
                  <div className="col-span-2">الحرف</div>
                  <div className="col-span-5">المصطلح (English)</div>
                  <div className="col-span-5">المعنى (عربي)</div>
                </div>

                {/* P */}
                <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-blue)]/30 text-xs">
                  <div className="col-span-2 font-mono font-black text-base text-[var(--pen-blue)] text-center">P</div>
                  <div className="col-span-5 font-mono font-bold text-[var(--text)] text-center">Plan</div>
                  <div className="col-span-5 font-extrabold text-[var(--pen-blue)] text-center">خَطِّط</div>
                </div>

                {/* D */}
                <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-orange)]/30 text-xs">
                  <div className="col-span-2 font-mono font-black text-base text-[var(--pen-orange)] text-center">D</div>
                  <div className="col-span-5 font-mono font-bold text-[var(--text)] text-center">Do</div>
                  <div className="col-span-5 font-extrabold text-[var(--pen-orange)] text-center">نَفِّذ</div>
                </div>

                {/* C */}
                <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-purple)]/30 text-xs">
                  <div className="col-span-2 font-mono font-black text-base text-[var(--pen-purple)] text-center">C</div>
                  <div className="col-span-5 font-mono font-bold text-[var(--text)] text-center">Check</div>
                  <div className="col-span-5 font-extrabold text-[var(--pen-purple)] text-center">تَحَقَّق</div>
                </div>

                {/* A */}
                <div className="grid grid-cols-12 gap-2 items-center p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--pen-green)]/30 text-xs">
                  <div className="col-span-2 font-mono font-black text-base text-[var(--pen-green)] text-center">A</div>
                  <div className="col-span-5 font-mono font-bold text-[var(--text)] text-center">Act</div>
                  <div className="col-span-5 font-extrabold text-[var(--pen-green)] text-center">تَصَرَّف</div>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-center text-[11px] text-[var(--muted)] font-medium">
              حلقات متصلة لا تنتهي للوصول إلى أعلى جودة ممكنة.
            </div>
          </div>
        </Place>

        {/* Right Card: Practical Example Setup */}
        <Place x={60} y={210} w={580} h={375} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--pen-orange)] flex items-center gap-2">
                  <span>🛒</span>
                  <span>تعالى نفهم كل خطوة بمثال عملي</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--warning-soft)] text-[var(--warning)] text-[11px] font-black">
                  حالة واقعية
                </span>
              </div>

              {/* Scenario Box */}
              <div className="p-3.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] mb-3">
                <div className="font-bold text-xs text-[var(--text)] mb-2 leading-relaxed">
                  هنفترض إن عندنا <span className="text-[var(--pen-blue)] font-black">موقع إلكتروني لبيع المنتجات</span>، وصاحب الموقع لاحظ إن:
                </div>
                <div className="p-2.5 rounded-lg bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-xs text-[var(--danger)] font-bold flex items-center gap-2">
                  <span className="text-lg">⚠️</span>
                  <span>عدد كبير من المستخدمين بيضيفوا المنتجات للسلة، لكن مش بيكملوا عملية الشراء.</span>
                </div>
              </div>

              {/* Hook Question */}
              <div className="p-3 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/40 text-center">
                <span className="text-base block mb-1">🤔</span>
                <div className="font-black text-sm text-[var(--primary)] leading-normal">
                  إزاي نستخدم دورة PDCA لحل المشكلة دي؟
                </div>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-medium">
                  سنمر معاً على الخطوات الأربع لمعرفة كيف تعالج هندسة الويب هذه الأزمة!
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] flex items-center justify-between pt-1 font-mono">
              <span>Next: الخطوة الأولى (Plan)</span>
              <span>1 / 4 Steps ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2">
              <span className="text-base">📌</span>
              <span>التحسين التكراري لا يعتمد على التخمين، بل على خطوات علمية محكمة تبدأ بالتخطيط.</span>
            </span>
            <span className="text-[var(--pen-blue)] font-mono">P ➔ D ➔ C ➔ A</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'pdca-plan',
    title: 'الخطوة الأولى: خطط (Plan)',
    scene: true,
    notes: (
      <>
        <p><b>الخطوة الأولى: خطط (Plan) - كتاب المدرسة:</b></p>
        <ul>
          <li><b>الخطوة:</b> 1 · خطط (Plan)</li>
          <li><b>المهمة:</b> حدّد الأهداف وضع خطة للتحسين.</li>
          <li><b>التطبيق والمثال:</b> حدد هدفًا واضحًا، مثال: رفع نسبة إكمال نموذج التسجيل من 40% إلى 50% وخطط لتغيير مناسب.</li>
        </ul>
        <p><b>المقصود بها:</b> نحدد المشكلة ونضع خطة للتحسين قبل البدء في أي كود أو تصميم جديد.</p>
        <p><b>مثال عملي:</b> صاحب الموقع لاحظ أن نسبة كبيرة من المستخدمين تغادر عند صفحة إتمام الشراء. فقرر: يحدد المشكلة (عملية الشراء معقدة)، يحدد الهدف (زيادة نسبة المستخدمين الذين يكملون الشراء)، ويضع خطة (تقليل عدد خطوات إتمام الطلب وتسهيل إدخال البيانات).</p>
        <p><b>خد بالك من نقطة مهمة:</b> في مرحلة التخطيط نحن لم ننفذ التغيير بعد، نحن نحدد المشكلة والهدف والخطة التي سنعمل عليها.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="حدّد الأهداف وضع خطة للتحسين قبل كتابة أو تعديل أي سطر برمجي">
          الخطوة الأولى: خطط (Plan) 📝
        </Heading>

        {/* Top Concept Card: Official Textbook Row */}
        <Place x={60} y={115} w={1160} h={95} at={1}>
          <div className="p-3 rounded-2xl bg-[var(--surface-2)] border-2 border-[var(--primary)] flex items-center gap-3 shadow-md text-right font-sans" dir="rtl">
            {/* Column 1: Step */}
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] whitespace-nowrap">
              <span className="w-6 h-6 rounded-full bg-rose-500 text-white font-black text-xs flex items-center justify-center">1</span>
              <span className="font-black text-sm text-[var(--primary)]">خطط (Plan)</span>
            </div>

            {/* Column 2: Definition */}
            <div className="px-3.5 py-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] whitespace-nowrap">
              <span className="text-[10px] text-[var(--muted)] font-black block">المهمة الأساسية:</span>
              <span className="font-extrabold text-xs text-[var(--pen-blue)]">حدّد الأهداف وضع خطة للتحسين</span>
            </div>

            {/* Column 3: Textbook Example */}
            <div className="flex-1 px-3.5 py-2 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[var(--safe)] font-black block">نص كتاب الوزارة:</span>
                <span className="text-xs text-[var(--text)] font-bold">
                  حدد هدفًا واضحًا، مثال: رفع نسبة إكمال نموذج التسجيل من 40% إلى 50% وخطط لتغيير مناسب
                </span>
              </div>
              <span className="px-2 py-0.5 rounded bg-[var(--safe)] text-white text-[10px] font-black mr-2 whitespace-nowrap">كتاب المدرسة 📖</span>
            </div>
          </div>
        </Place>

        {/* Middle Left: Example Breakdown */}
        <Place x={560} y={225} w={660} h={355} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--text)] flex items-center gap-2">
                  <span>🛒</span>
                  <span>مثال عملي: متجر السلة ونموذج التسجيل</span>
                </span>
                <span className="text-[11px] text-[var(--pen-blue)] font-bold">تطبيق خطوة التخطيط</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] mb-3 leading-relaxed">
                صاحب الموقع لاحظ إن <span className="text-[var(--danger)] font-bold">نسبة كبيرة من المستخدمين بتسيب الموقع عند صفحة إتمام الشراء والتسجيل</span>.. فقرر:
              </div>

              {/* 3 Decisions */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 flex items-start gap-2.5">
                  <span className="text-sm font-black text-[var(--danger)]">١.</span>
                  <div>
                    <span className="font-black text-xs text-[var(--danger)] block">يحدد المشكلة:</span>
                    <span className="text-xs text-[var(--text)] font-medium">عملية الشراء أو التسجيل معقدة.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/30 flex items-start gap-2.5">
                  <span className="text-sm font-black text-[var(--safe)]">٢.</span>
                  <div>
                    <span className="font-black text-xs text-[var(--safe)] block">يحدد هدفًا واضحًا (كتاب المدرسة):</span>
                    <span className="text-xs text-[var(--text)] font-medium">رفع نسبة إكمال نموذج التسجيل من 40% إلى 50%.</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 flex items-start gap-2.5">
                  <span className="text-sm font-black text-[var(--primary)]">٣.</span>
                  <div>
                    <span className="font-black text-xs text-[var(--primary)] block">يضع خطة لتغيير مناسب:</span>
                    <span className="text-xs text-[var(--text)] font-medium">تقليل عدد خطوات إتمام الطلب وتسهيل إدخال البيانات.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-left font-mono">
              Problem Identified ➔ Clear Target Set (40% ➔ 50%)
            </div>
          </div>
        </Place>

        {/* Middle Right: Crucial Notice */}
        <Place x={60} y={225} w={480} h={355} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--warning)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center gap-2 border-b border-[var(--border)] pb-2 mb-3">
                <span className="text-xl">⚠️</span>
                <span className="font-extrabold text-sm text-[var(--warning)]">
                  خد بالك من نقطة مهمة:
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[var(--warning-soft)] border border-[var(--warning)]/40 text-xs text-[var(--text)] leading-relaxed font-bold space-y-3">
                <p className="m-0 text-sm text-[var(--warning)] font-black">
                  في مرحلة التخطيط إحنا لسه ما نفذناش التغيير!
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  إحنا بنحدد المشكلة والهدف والخطة اللي هنشتغل عليها.
                </p>
                <div className="p-2.5 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-[11px] text-[var(--muted)] font-normal">
                  💡 لا تتسرع بالبرمجة أو التصميم؛ لأن التعديل بدون خطة واضحة وهدف مقاس يهدر الوقت وقد يزيد المشكلة تعقيداً.
                </div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs text-[var(--muted)]">
              <span>المرحلة القادمة:</span>
              <span className="text-[var(--pen-orange)] font-bold">الخطوة الثانية: نفّذ (Do) ➡️</span>
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--primary)]">
              <span>🎯</span>
              <span>القاعدة: لا تغيير على الموقع بدون مشكلة واضحة، هدف رقمي، وخطة عمل محددة.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Plan ➔ Next: Do</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'pdca-do-check',
    title: 'الخطوة الثانية: نفّذ (Do) والخطوة الثالثة: تحقق (Check)',
    scene: true,
    notes: (
      <>
        <p><b>الخطوة الثانية: نفّذ (Do):</b></p>
        <p><b>المقصود بها:</b> تطبيق التغيير المقترح وفقاً للخطة. بعد ما حددنا المشكلة والخطة، نبدأ ننفذ التعديلات (مثل تقليل خطوات الشراء، تبسيط نموذج البيانات، وتوضيح زر التأكيد). إذن في هذه المرحلة نحول الخطة من مجرد أفكار إلى تغييرات فعلية في الموقع.</p>
        <p><b>الخطوة الثالثة: تحقق (Check):</b></p>
        <p><b>المقصود بها:</b> نقيس النتائج ونتأكد هل التغيير حقق الهدف المطلوب أم لا. وهي من أهم المراحل؛ لأن ليس كل تعديل نعمله يعني أنه نجح.</p>
        <p><b>مثال بالأرقام:</b> قبل التعديل كان 40% من العملاء يكملون الشراء، بعد التعديل أصبح 55%. نقارن بالهدف: هل نجح؟ نعم لزيادة النسبة، ولو انخفضت نراجع ونعرف السبب.</p>
        <p><b>خد بالك:</b> مرحلة تحقق معناها القياس والتقييم، مش مجرد الاعتقاد أن التغيير نجح.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تحويل الخطة إلى تعديلات فعلية ثم قياس الأثر بالأرقام والنسب الدقيقة">
          الخطوتان: نفّذ (Do) ⚙️ ⬅️ تحقق (Check) 📊
        </Heading>

        {/* Step 2: Do Card */}
        <Place x={650} y={115} w={570} h={470} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-orange)]/40 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--pen-orange)]/20 border border-[var(--pen-orange)] flex items-center justify-center font-mono font-black text-sm text-[var(--pen-orange)]">
                    D
                  </div>
                  <span className="font-extrabold text-sm text-[var(--pen-orange)]">الخطوة الثانية: نفّذ (Do)</span>
                </div>
                <span className="text-[11px] text-[var(--muted)] font-mono">Execution Phase</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs mb-3">
                <span className="font-black text-[var(--pen-orange)] block mb-1">المقصود بها:</span>
                <span className="text-[var(--text)] font-medium leading-relaxed">
                  تطبيق التغيير المقترح وفقاً للخطة.
                </span>
                <div className="text-[11px] text-[var(--muted)] mt-1 font-normal">
                  بعد ما حددنا المشكلة والخطة، نبدأ ننفذ التعديلات.
                </div>
              </div>

              <div className="space-y-2 mb-3">
                <span className="font-bold text-xs text-[var(--text)] block">أمثلة على التعديلات المنفذة:</span>
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>تقليل عدد الخطوات المطلوبة لإتمام الشراء.</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>تبسيط نموذج تسجيل البيانات.</span>
                </div>
                <div className="p-2 rounded-lg bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] flex items-center gap-2">
                  <span className="text-[var(--pen-orange)] font-bold">•</span>
                  <span>جعل زر تأكيد الطلب أكثر وضوحاً.</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[var(--pen-orange)]/15 border border-[var(--pen-orange)]/40 text-xs font-bold text-[var(--pen-orange)] text-center">
              💡 إذن في المرحلة دي بنحول الخطة من مجرد أفكار إلى تغييرات فعلية في الموقع.
            </div>
          </div>
        </Place>

        {/* Step 3: Check Card */}
        <Place x={60} y={115} w={570} h={470} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-purple)]/40 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[var(--pen-purple)]/20 border border-[var(--pen-purple)] flex items-center justify-center font-mono font-black text-sm text-[var(--pen-purple)]">
                    C
                  </div>
                  <span className="font-extrabold text-sm text-[var(--pen-purple)]">الخطوة الثالثة: تحقق (Check)</span>
                </div>
                <span className="text-[11px] text-[var(--muted)] font-mono">Evaluation Phase</span>
              </div>

              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs mb-2.5">
                <span className="font-black text-[var(--pen-purple)] block mb-1">المقصود بها:</span>
                <span className="text-[var(--text)] font-medium leading-relaxed">
                  نقيس النتائج ونتأكد هل التغيير حقق الهدف المطلوب أم لا.
                </span>
                <div className="text-[11px] text-[var(--danger)] mt-1 font-bold">
                  ودي من أهم المراحل؛ لأن مش كل تعديل بنعمله معناه إنه نجح!
                </div>
              </div>

              {/* Data comparison */}
              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] space-y-2 mb-2.5">
                <span className="font-bold text-xs text-[var(--text)] block">مثال القياس بالأرقام:</span>
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--border)]">
                    <span className="text-[11px] text-[var(--muted)] block">قبل التعديل</span>
                    <span className="text-base font-black text-[var(--danger)]">40%</span>
                    <span className="text-[10px] text-[var(--muted)] block">بيكملوا الشراء</span>
                  </div>
                  <div className="p-2 rounded-lg bg-[var(--surface-2)] border border-[var(--safe)]/40 bg-[var(--safe-soft)]">
                    <span className="text-[11px] text-[var(--safe)] block">بعد التعديل</span>
                    <span className="text-base font-black text-[var(--safe)]">55%</span>
                    <span className="text-[10px] text-[var(--safe)] block">بيكملوا الشراء</span>
                  </div>
                </div>
                <div className="text-[11px] text-[var(--text)] leading-tight font-medium">
                  هنا بنقارن النتائج بالهدف: <b className="text-[var(--safe)]">هل التغيير نجح؟ نعم</b>، لأن نسبة إتمام الشراء زادت (ولو انخفضت نراجع ونعرف السبب).
                </div>
              </div>
            </div>

            {/* Warning Callout */}
            <div className="p-2.5 rounded-xl bg-[var(--warning-soft)] border border-[var(--warning)]/40 text-xs font-bold text-[var(--text)]">
              <span className="text-[var(--warning)] font-black">⚠️ خد بالك:</span> مرحلة تحقق معناها <span className="underline decoration-[var(--warning)]">القياس والتقييم</span>، مش مجرد الاعتقاد إن التغيير نجح.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={3}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--pen-purple)]">
              <span>📊</span>
              <span>التحقق الرقمي يحمي المؤسسة من هدر الأموال على تعديلات قد تضر بتجربة المستخدم بدلاً من نفعها.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Do ➔ Check ➔ Next: Act</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'pdca-act',
    title: 'الخطوة الرابعة: تصرف (Act)',
    scene: true,
    notes: (
      <>
        <p><b>الخطوة الرابعة: تصرف (Act):</b></p>
        <p><b>المقصود بها:</b> اتخاذ قرار بناءً على نتائج التقييم.</p>
        <p><b>عندنا احتمالين:</b></p>
        <ul>
          <li><b>الحالة الأولى: التغيير نجح:</b> لو التغيير حقق الهدف المطلوب، نعتمده ونستمر في استخدامه، وممكن نوسع تطبيقه. (مثال: لو تقليل خطوات الشراء أدى لزيادة عدد العملاء الذين يكملون الطلب، نعتمد التصميم الجديد).</li>
          <li><b>الحالة الثانية: التغيير لم ينجح:</b> لو التغيير لم يحقق الهدف، نراجع الخطة ونعدلها ونجرب حلاً آخر. (مثال: لو تقليل خطوات الشراء لم يحسن النتائج، ممكن نبحث عن سبب آخر، زي عدم وضوح تكلفة الشحن).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="اتخاذ القرار النهائي: إما اعتماد الحل الناجح وتعميمه، أو مراجعة الخطة والبحث عن حل بديل">
          الخطوة الرابعة: تصرف (Act) 🎯
        </Heading>

        {/* Top Definition Header */}
        <Place x={60} y={115} w={1160} h={85} at={1}>
          <div className="p-3.5 rounded-2xl bg-[var(--surface-2)] border border-[var(--pen-green)]/40 flex items-center justify-between shadow-sm text-right font-sans" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)] flex items-center justify-center font-mono font-black text-xl text-[var(--safe)]">
                A
              </div>
              <div>
                <span className="font-extrabold text-sm text-[var(--pen-green)] block">المقصود بها:</span>
                <p className="text-xs text-[var(--text)] m-0 font-bold leading-relaxed">
                  اتخاذ قرار بناءً على نتائج التقييم.
                </p>
                <p className="text-[11px] text-[var(--muted)] m-0 font-medium">
                  بناءً على الأرقام الصادرة من مرحلة Check.. عندنا احتمالين رئيسيين:
                </p>
              </div>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--muted)] font-mono whitespace-nowrap">
              Two Scenarios ⚖️
            </div>
          </div>
        </Place>

        {/* Case 1: Success */}
        <Place x={650} y={215} w={570} h={370} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--safe)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--safe)] flex items-center gap-2">
                  <span className="text-lg">🎉</span>
                  <span>الحالة الأولى: التغيير نجح</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--safe-soft)] text-[var(--safe)] text-[11px] font-black">
                  اعتماد وتوسيع
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/30 text-xs text-[var(--text)] leading-relaxed mb-3 font-medium">
                <span className="font-black text-[var(--safe)] block mb-1 text-sm">القرار المتخذ:</span>
                لو التغيير حقق الهدف المطلوب، <b className="text-[var(--safe)]">نعتمده ونستمر في استخدامه</b>، وممكن نوسع تطبيقه على صفحات أو أقسام أخرى.
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs leading-relaxed">
                <span className="font-bold text-[var(--safe)] block mb-1">مثال متجر السلة:</span>
                لو تقليل خطوات الشراء أدى لزيادة عدد العملاء اللي بيكملوا الطلب، <span className="font-black text-[var(--text)]">نعتمد التصميم الجديد</span> ونثبته رسمياً في الموقع.
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--safe)]/30 text-[11px] text-[var(--safe)] font-bold text-center">
              ✅ النتيجة: تثبيت النجاح وتعميم الفائدة والانطلاق لدورة جديدة.
            </div>
          </div>
        </Place>

        {/* Case 2: Failed */}
        <Place x={60} y={215} w={570} h={370} at={3}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--danger)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--danger)] flex items-center gap-2">
                  <span className="text-lg">🔄</span>
                  <span>الحالة الثانية: التغيير لم ينجح</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--danger-soft)] text-[var(--danger)] text-[11px] font-black">
                  مراجعة وبدائل
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--danger-soft)] border border-[var(--danger)]/30 text-xs text-[var(--text)] leading-relaxed mb-3 font-medium">
                <span className="font-black text-[var(--danger)] block mb-1 text-sm">القرار المتخذ:</span>
                لو التغيير لم يحقق الهدف، <b className="text-[var(--danger)]">نراجع الخطة ونعدلها ونجرب حلاً آخر</b> بدلاً من الإصرار على حل فاشل.
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs leading-relaxed">
                <span className="font-bold text-[var(--danger)] block mb-1">مثال متجر السلة:</span>
                لو تقليل خطوات الشراء لم يحسن النتائج، ممكن نبحث عن سبب آخر، <span className="font-black text-[var(--text)]">زي عدم وضوح تكلفة الشحن</span> أو بطء استجابة بوابة الدفع.
              </div>
            </div>

            <div className="p-2 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/30 text-[11px] text-[var(--danger)] font-bold text-center">
              ⚠️ التغيير الذي لا يحسن الأرقام فرصة ثمينة لاكتشاف السبب الحقيقي.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={595} w={1160} h={65} at={4}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--safe)]">
              <span>🎯</span>
              <span>سواء نجح التعديل أو لم ينجح: خطوة Act تقودنا فوراً إلى الخطوة الأولى Plan في الدورة التالية!</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Continuous Feedback Loop</span>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'pdca-example-cycle',
    title: 'مثال كامل على دورة PDCA · ولماذا تسمى دورة؟',
    scene: true,
    notes: (
      <>
        <p><b>مثال كامل على دورة PDCA:</b></p>
        <p><b>المشكلة:</b> انخفاض عدد المستخدمين الذين يسجلون في موقع تعليمي.</p>
        <ol>
          <li><b>1 Plan – خطط:</b> تحديد أن نموذج التسجيل طويل ومعقد، ووضع هدف لزيادة نسبة التسجيل.</li>
          <li><b>2 Do – نفّذ:</b> تقليل عدد الخانات المطلوبة في نموذج التسجيل.</li>
          <li><b>3 Check – تحقق:</b> مقارنة نسبة التسجيل قبل التعديل وبعده.</li>
          <li><b>4 Act – تصرف:</b> اعتماد التعديل إذا نجح، أو تعديل الخطة وتجربة حل آخر إذا لم ينجح.</li>
        </ol>
        <p><b>النتيجة:</b> تكرار الدورة يؤدي إلى تحسين الموقع باستمرار.</p>
        <p><b>لماذا تسمى دورة؟</b> لأنها لا تتوقف عند الخطوة الرابعة؛ بعد ما ننتهي من التصرف، نبدأ دورة جديدة: نخطط ⬅️ ننفذ ⬅️ نتحقق ⬅️ نتصرف ونكرر. يعني بنفضل نحسن الموقع باستمرار، ومش بنعتبر النسخة الأولى هي النسخة النهائية المثالية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تطبيق شامل من البداية للنهاية على موقع تعليمي، وفهم سر تسميتها دورة مستمرة">
          مثال كامل على دورة PDCA · ولماذا تسمى دورة؟ 🔄
        </Heading>

        {/* Right Card: Complete Example (Screenshot 5 top box) */}
        <Place x={530} y={115} w={690} h={475} at={1}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--primary)] flex items-center gap-2">
                  <span>🎓</span>
                  <span>مثال كامل على دورة PDCA</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[var(--primary-soft)] text-[var(--primary)] text-[11px] font-black">
                  موقع تعليمي
                </span>
              </div>

              {/* Problem Statement */}
              <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--danger)]/30 text-xs text-[var(--danger)] font-bold mb-3 flex items-center gap-2">
                <span className="text-base">🚨</span>
                <span>مشكلة: انخفاض عدد المستخدمين الذين يسجلون في موقع تعليمي.</span>
              </div>

              {/* 4 Steps In Sequence */}
              <div className="space-y-2">
                {/* 1 Plan */}
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-blue)] border border-[var(--border)] flex items-start gap-3">
                  <div className="px-2 py-1 rounded-lg bg-[var(--pen-blue)]/20 text-[var(--pen-blue)] font-black text-xs font-mono">
                    1 Plan
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-[var(--pen-blue)] block">خطط:</span>
                    <span className="text-[var(--text)] font-medium">تحديد أن نموذج التسجيل طويل ومعقد، ووضع هدف لزيادة نسبة التسجيل.</span>
                  </div>
                </div>

                {/* 2 Do */}
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-orange)] border border-[var(--border)] flex items-start gap-3">
                  <div className="px-2 py-1 rounded-lg bg-[var(--pen-orange)]/20 text-[var(--pen-orange)] font-black text-xs font-mono">
                    2 Do
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-[var(--pen-orange)] block">نفّذ:</span>
                    <span className="text-[var(--text)] font-medium">تقليل عدد الخانات المطلوبة في نموذج التسجيل.</span>
                  </div>
                </div>

                {/* 3 Check */}
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-purple)] border border-[var(--border)] flex items-start gap-3">
                  <div className="px-2 py-1 rounded-lg bg-[var(--pen-purple)]/20 text-[var(--pen-purple)] font-black text-xs font-mono">
                    3 Check
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-[var(--pen-purple)] block">تحقق:</span>
                    <span className="text-[var(--text)] font-medium">مقارنة نسبة التسجيل قبل التعديل وبعده.</span>
                  </div>
                </div>

                {/* 4 Act */}
                <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border-r-4 border-r-[var(--pen-green)] border border-[var(--border)] flex items-start gap-3">
                  <div className="px-2 py-1 rounded-lg bg-[var(--pen-green)]/20 text-[var(--pen-green)] font-black text-xs font-mono">
                    4 Act
                  </div>
                  <div className="text-xs">
                    <span className="font-black text-[var(--pen-green)] block">تصرف:</span>
                    <span className="text-[var(--text)] font-medium">اعتماد التعديل إذا نجح، أو تعديل الخطة وتجربة حل آخر إذا لم ينجح.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Result Badge */}
            <div className="p-2.5 rounded-xl bg-[var(--safe-soft)] border border-[var(--safe)]/40 flex items-center justify-between text-xs font-bold text-[var(--safe)]">
              <span className="px-2 py-0.5 rounded-md bg-[var(--safe)] text-black text-[11px] font-black">النتيجة</span>
              <span>تكرار الدورة يؤدي إلى تحسين الموقع باستمرار.</span>
            </div>
          </div>
        </Place>

        {/* Left Card: Why is it called a cycle? */}
        <Place x={60} y={115} w={450} h={475} at={2}>
          <div className="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--primary)]/50 h-full flex flex-col justify-between shadow-sm text-right font-sans" dir="rtl">
            <div>
              <div className="flex items-center justify-between border-b border-[var(--border)] pb-2 mb-3">
                <span className="font-extrabold text-sm text-[var(--primary)] flex items-center gap-2">
                  <span className="text-lg">❓</span>
                  <span>لماذا تسمى دورة؟</span>
                </span>
                <span className="text-[11px] font-mono text-[var(--muted)]">Why a Cycle?</span>
              </div>

              <div className="p-3 rounded-xl bg-[var(--primary-soft)] border border-[var(--primary)]/30 text-xs text-[var(--text)] leading-relaxed mb-3 font-bold">
                <p className="m-0 text-sm text-[var(--primary)] font-black mb-1.5">
                  لأنها مش بتقف عند الخطوة الرابعة!
                </p>
                <p className="m-0 text-xs text-[var(--text)] font-medium">
                  بعد ما ننتهي من التصرف، بنبدأ دورة جديدة مباشرة:
                </p>
              </div>

              {/* Loop Flow Graphic */}
              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-center space-y-2 mb-3">
                <div className="flex items-center justify-center gap-1.5 text-xs font-black text-[var(--pen-blue)] flex-wrap">
                  <span className="px-2 py-1 rounded-md bg-[var(--pen-blue)]/20">نخطط</span>
                  <span>⬅️</span>
                  <span className="px-2 py-1 rounded-md bg-[var(--pen-orange)]/20 text-[var(--pen-orange)]">ننفذ</span>
                  <span>⬅️</span>
                  <span className="px-2 py-1 rounded-md bg-[var(--pen-purple)]/20 text-[var(--pen-purple)]">نتحقق</span>
                  <span>⬅️</span>
                  <span className="px-2 py-1 rounded-md bg-[var(--pen-green)]/20 text-[var(--pen-green)]">نتصرف</span>
                </div>
                <div className="text-[11px] font-black text-[var(--primary)] flex items-center justify-center gap-1">
                  <span>🔄 ونكرر العملية باستمرار</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] text-xs text-[var(--text)] leading-relaxed font-bold">
                <span className="text-[var(--warning)] block mb-1">💡 الخلاصة الذهبية:</span>
                يعني بنفضل نحسن الموقع باستمرار، ومش بنعتبر النسخة الأولى هي النسخة النهائية المثالية.
              </div>
            </div>

            <div className="text-[11px] text-[var(--muted)] text-center font-mono">
              Continuous Improvement • Never Static
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Place x={60} y={600} w={1160} h={60} at={3}>
          <div className="p-2.5 rounded-xl bg-[var(--board-bg)] border border-[var(--border)] flex items-center justify-between text-xs font-bold text-[var(--text)]" dir="rtl">
            <span className="flex items-center gap-2 text-[var(--primary)]">
              <span>🚀</span>
              <span>الموقع الناجح في عالم الويب الحديث هو الموقع الذي لا يتوقف أبداً عن الدوران في فلك PDCA.</span>
            </span>
            <span className="text-xs text-[var(--muted)] font-mono">Complete PDCA Masterclass</span>
          </div>
        </Place>
      </Scene>
    ),
  },
];

