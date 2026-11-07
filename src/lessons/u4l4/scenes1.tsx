// Board scenes · Unit 4 · Lesson 4 · intro, iterative philosophy, and the PDCA cycle
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'فلسفة التحسين التكراري',
  'دورة ديمنغ (PDCA)',
  'تقنيات تسريع الأداء (Speed)',
  'التحميل الكسول و WebP',
  'التصغير والتخزين المؤقت',
  'تحسين التحويل (CRO)',
  'المراجعة الكبرى للترم الأول',
  'بنك أسئلة البكالوريا',
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
        <p><b>أهلاً بكم في مسك ختام الوحدة الرابعة ومنهج الترم الأول: عملية التحسين التكراري للمواقع الإلكترونية.</b></p>
        <p>مواقع الويب كائنات حية تتطور باستمرار. في هذا الدرس نتعلم كيف نطبق المنهجية الهندسية لتحسين سرعة وأداء وتجربة الموقع بشكل دائم بناءً على الأرقام واحتياجات المستخدمين.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={30} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 4 · Lesson 4</Txt>
        <Txt x={640} y={235} size={78}>عملية التحسين التكراري للمواقع الإلكترونية</Txt>
        <Underline x={160} y={305} w={960} c="blue" />
        <Txt x={640} y={360} size={40} c="blue">Iterative Website Optimization Process</Txt>

        {[['🔄', 'دورة PDCA'], ['⚡', 'تسريع الأداء'], ['📦', 'ضغط وتصغير'], ['🎯', 'تحسين التحويل'], ['🏆', 'ختام الترم الأول']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={530} icon={icon} size={90} label={label} lc="blue" at={1} delay={i * 0.3} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في التحسين التكراري:</b> ثماني محطات تنتهي بمراجعة ختامية كبرى لكامل منهج الترم الأول لمرحلة البكالوريا.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات التحسين التكراري</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={30} tc="ink">
          ❓ كيف نطور موقعنا باستمرار ليكون أسرع، أسهل، وأكثر جذباً للزوار؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={20}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'iterative-philosophy', title: 'فلسفة التحسين التكراري في الويب', scene: true,
    notes: (
      <>
        <p><b>لماذا نتبنى نهج التحسين التكراري (Iterative Mindset)؟</b></p>
        <p>في الماضي كانت المواقع تُبنى كالمباني الحجرية: تصمم مرة واحدة ولا تتغير لسنوات. أما في عالم الويب الحديث:</p>
        <ul>
          <li><b>سلوك المستخدمين يتغير:</b> ما كان يعجب الزوار قبل عام قد يصبح قديماً ومملاً اليوم.</li>
          <li><b>الأجهزة والشاشات تتطور:</b> تظهر هواتف بدقات شاشات جديدة وتقنيات اتصال أسرع.</li>
          <li><b>البيانات تكشف الحقيقة:</b> بعد إطلاق الموقع تبدأ التحليلات الرقمية في إظهار المشكلات الخفية التي لم تكن في الحسبان.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="لماذا لا ينتهي عمل المهندس والمصمم بمجرد نشر الموقع؟">
          فلسفة التحسين التكراري (Iterative Mindset)
        </Heading>

        {/* Traditional vs Iterative */}
        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1015', borderColor: '#e11d48' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-rose-400">❌ النهج القديم: التصميم الجامد (Static)</span>
                <span className="pill text-xs font-bold bg-rose-950 text-rose-300 border-rose-700">مرة واحدة للأبد</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• إطلاق الموقع وتركه لشهور أو سنوات دون أي متابعة أو فحص.</li>
                <li>• تجاهل شكاوى الزوار وانخفاض المبيعات والاشتراكات.</li>
                <li>• بطء تدريجي في فتح الصفحات وتراجع الترتيب في محركات البحث.</li>
                <li>• في النهاية: انهيار الموقع واضطرار المؤسسة لبنائه من الصفر بتكاليف باهظة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300 font-bold">
              ⚠️ عيب قاتل: يؤدي لهروب الزوار وخسارة العملاء لصالح المنافسين.
            </div>
          </div>
        </Place>

        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1a18', borderColor: '#10b981' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-emerald-400">✅ النهج الحديث: التحسين التكراري (Iterative)</span>
                <span className="pill text-xs font-bold bg-emerald-950 text-emerald-300 border-emerald-700">تطوير مستمر بالأرقام</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• متابعة يومية وأسبوعية للتحليلات ومعدلات الارتداد والتحويل.</li>
                <li>• تعديلات صغيرة ومدروسة أسبوعياً (ضغط صور، تبسيط أزرار).</li>
                <li>• استخدام اختبارات A/B للتأكد من نجاح كل تعديل قبل تعميمه.</li>
                <li>• النتيجة: موقع فائق السرعة يتصدر نتائج Google ويسعد زواره دائماً.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-bold">
              🚀 الميزة الكبرى: تكيف مرن، نمو دائم في الأرباح، وتجربة مستخدم لا تضاهى.
            </div>
          </div>
        </Place>

        {/* Bottom Rule */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          📖 <b>القاعدة الهندسية:</b> الموقع ليس منتجاً نهائياً مغلقاً، بل خدمة حية مستمرة تنمو وتتحسن مع كل زيارة وملاحظة.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'pdca-cycle-scene', title: 'دورة التحسين التكراري المستمر (PDCA Cycle)', scene: true,
    notes: (
      <>
        <p><b>دورة ديمنغ للتحسين التكراري المستمر (PDCA Cycle):</b></p>
        <p>الإطار المنهجي المعتمد في هندسة الجودة والبرمجيات ويتكون من 4 خطوات متعاقبة:</p>
        <ol>
          <li><b>خطط (Plan):</b> تحليل المشكلات وصياغة فرضيات التحسين وتحديد مؤشرات النجاح.</li>
          <li><b>نفّذ (Do):</b> تطبيق التعديلات المقترحة في بيئة تجريبية واختبارها محلياً.</li>
          <li><b>افحص وقِس (Check):</b> قياس النتائج عبر اختبارات A/B ومقارنة أرقام السرعة والمبيعات قبل وبعد.</li>
          <li><b>طبّق وعمّم (Act):</b> نشر الحل الناجح رسمياً للمستخدمين، وتوثيقه، والبدء في دورة جديدة.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخطوات الأربع المنهجية لإدارة وتطبيق أي تعديل أو تحسين في الموقع">
          دورة التحسين التكراري المنهجية (PDCA Cycle)
        </Heading>

        {/* Plan */}
        <Box x={890} y={170} w={270} h={360} c="blue" at={1} />
        <Doodle x={1025} y={235} icon="📝" size={75} c="blue" fill="blue" at={1} />
        <Txt x={1025} y={305} size={28} c="blue" at={1}>١ · خطّط (Plan)</Txt>
        <Txt x={1025} y={360} w={230} size={18} c="ink" at={1}>• فحص تحليلات الموقع</Txt>
        <Txt x={1025} y={400} w={230} size={18} c="ink" at={1}>• رصد المشكلة وفرص التطوير</Txt>
        <Txt x={1025} y={440} w={230} size={18} c="ink" at={1}>• صياغة الفرضية والهدف</Txt>
        <Txt x={1025} y={485} size={20} c="blue" at={1}>تحليل المشكلة بدقة</Txt>

        {/* Do */}
        <Box x={600} y={170} w={270} h={360} c="orange" at={2} />
        <Doodle x={735} y={235} icon="⚙️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={735} y={305} size={28} c="orange" at={2}>٢ · نفّذ (Do)</Txt>
        <Txt x={735} y={360} w={230} size={18} c="ink" at={2}>• تطبيق التعديل برمجياً</Txt>
        <Txt x={735} y={400} w={230} size={18} c="ink" at={2}>• استخدام بيئة تجريبية آمنة</Txt>
        <Txt x={735} y={440} w={230} size={18} c="ink" at={2}>• تحضير نسختي اختبار A/B</Txt>
        <Txt x={735} y={485} size={20} c="orange" at={2}>تطوير تجريبي آمن</Txt>

        {/* Check */}
        <Box x={310} y={170} w={270} h={360} c="purple" at={3} />
        <Doodle x={445} y={235} icon="📊" size={75} c="purple" fill="purple" at={3} />
        <Txt x={445} y={305} size={28} c="purple" at={3}>٣ · افحص (Check)</Txt>
        <Txt x={445} y={360} w={230} size={18} c="ink" at={3}>• قياس النتائج بالأرقام</Txt>
        <Txt x={445} y={400} w={230} size={18} c="ink" at={3}>• فحص سرعة LCP ومعدل الارتداد</Txt>
        <Txt x={445} y={440} w={230} size={18} c="ink" at={3}>• مقارنة الأداء قبل وبعد</Txt>
        <Txt x={445} y={485} size={20} c="purple" at={3}>قياس علمي إحصائي</Txt>

        {/* Act */}
        <Box x={20} y={170} w={270} h={360} c="green" at={4} />
        <Doodle x={155} y={235} icon="🚀" size={75} c="green" fill="green" at={4} />
        <Txt x={155} y={305} size={28} c="green" at={4}>٤ · عمّم (Act)</Txt>
        <Txt x={155} y={360} w={230} size={18} c="ink" at={4}>• اعتماد التعديل ونشره رسمياً</Txt>
        <Txt x={155} y={400} w={230} size={18} c="ink" at={4}>• توثيق التغييرات لفريق العمل</Txt>
        <Txt x={155} y={440} w={230} size={18} c="ink" at={4}>• بدء دورة تحسين تالية</Txt>
        <Txt x={155} y={485} size={20} c="green" at={4}>نشر الحل وتكرار الدورة 🔄</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1140} h={80} c="pink" fill="pink" size={21} tc="ink" at={5}>
          🔄 <b>دورة لا تتوقف:</b> بمجرد الانتهاء من مرحلة Act بنجاح، تصبح المخرجات هي نقطة الانطلاق لمرحلة Plan التالية.
        </Box>
      </Scene>
    ),
  },
];

