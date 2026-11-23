// Board scenes · intro and part 1 (Software vs Hardware, System Software vs Application Software)
import type { FrameDef } from '../../board/types';
import {
  Box, Doodle, Heading, Line, Note, Num, Place, Scene, Txt, Underline,
} from '../../sketch/Sketch';
import { HardwareVsSoftwareSvg } from './visuals';

const STOPS = [
  'العتاد والبرمجيات',
  'برمجيات النظام',
  'نظام التشغيل OS',
  'وظائف الإدارة الثلاث',
  'برامج تشغيل الأجهزة',
  'برامج التطبيقات',
  'معمارية الطبقات 🏁',
];

const STOP_PTS: [number, number][] = [
  [1060, 335], [780, 365], [500, 335], [220, 365],
  [300, 565], [640, 565], [980, 565],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف',
    scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم يا شباب الصف الأول الثانوي في الدرس الثاني من الوحدة السابعة!</b></p>
        <p>موضوعنا اليوم هو الركيزة البرمجية للحاسوب: <b>برامج الكمبيوتر (Computer Software) والعتاد والبرمجيات</b>.</p>
        <p>بعد أن تعرفنا في الدرس الأول على العتاد المادي والمكونات الخمسة، نكتشف اليوم الروح التي تمنح هذا الحديد والدوائر الحياة؛ سنتعرف على الفرق بين العتاد (Hardware) والبرمجيات (Software)، وأقسام البرمجيات: برمجيات النظام (System software) وعلى رأسها نظام التشغيل (OS) ووظائف إدارته الثلاث الكبرى (المهام، الذاكرة، الملفات)، وبرامج تشغيل الأجهزة (Device Drivers)، وبرامج التطبيقات (Application software)، ومعمارية الطبقات المتكاملة!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={115} size={32} c="purple">
          الصف الأول الثانوي · الوحدة السابعة · الكمبيوترات · الدرس الثاني
        </Txt>
        <Txt x={640} y={240} size={105}>
          برامج الكمبيوتر
        </Txt>
        <Underline x={370} y={320} w={540} c="blue" />
        <Txt x={640} y={370} size={44} c="blue">
          Computer Software & Hardware
        </Txt>

        {[
          ['⚙️', 'نظام التشغيل OS'],
          ['🔌', 'برامج التشغيل Drivers'],
          ['📱', 'برامج التطبيقات Apps'],
          ['💻', 'العتاد Hardware'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1030 - i * 260}
            y={535}
            icon={icon}
            size={90}
            label={label}
            lsize={24}
            lc={i % 2 === 0 ? 'blue' : 'green'}
            at={1}
            delay={i * 0.15}
          />
        ))}
      </Scene>
    ),
  },

  {
    id: 'roadmap',
    title: 'خريطة الدرس',
    scene: true,
    notes: (
      <>
        <p><b>خريطة الطريق لدرس برامج الكمبيوتر:</b></p>
        <p>سنتنقل عبر ٧ محطات تعليمية مركزة تغطي التكامل بين العتاد والبرمجيات، أنواع البرمجيات، وظائف نظام التشغيل الثلاث، المعامل التفاعلية، والتدريبات الوزارية المعتمدة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة محطات الدرس الثاني · برامج الكمبيوتر 🗺️</Heading>

        <Box x={150} y={140} w={980} h={100} c="pink" fill="pink" size={32} tc="ink">
          ❓ كيف تمنح البرمجيات العتاد المادي الحياة، وكيف يدير نظام التشغيل الذاكرة والمهام والملفات؟
        </Box>

        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [140, 465], ...STOP_PTS.slice(4)]} />

        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={0.2 + i * 0.12} x={x} y={y} n={i + 1} c={i < 4 ? 'blue' : 'green'} />
            <Txt at={1} delay={0.2 + i * 0.12} x={x} y={y + 48} size={25}>
              {STOPS[i]}
            </Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'hardware-and-software',
    title: '١ · العتاد والبرمجيات (Hardware vs Software)',
    scene: true,
    notes: (
      <>
        <p><b>التكامل بين العتاد المادي والبرمجيات:</b></p>
        <p>الحاسوب لا يكتمل إلا بوجود ركنين متلازمين تماماً كعلاقة الجسد بالروح:</p>
        <ol>
          <li><b>الأجهزة (Hardware):</b> كل المكونات المادية الملموسة مثل وحدة الكمبيوتر الرئيسية (المعالج CPU، الذاكرة RAM، وحدة التخزين) والأجهزة الطرفية (الشاشة، الطابعة، لوحة المفاتيح). العتاد بمفرده حديد صامت لا ينفذ شيئاً.</li>
          <li><b>البرمجيات (Software):</b> البرامج والبيانات التي تعمل فوق العتاد المادي، وتصدر له التعليمات والأوامر الدقيقة لإنجاز الحسابات ومعالجة البيانات وعرض النتائج.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>١ · مفهوم العتاد (Hardware) والبرمجيات (Software) 🤖⚡</Heading>

        <Place x={150} y={130} w={980} h={210} at={0}>
          <HardwareVsSoftwareSvg />
        </Place>

        <Box x={150} y={365} w={475} h={165} c="orange" fill="orange" at={1}>
          <div className="flex flex-col gap-1.5 text-right font-sans p-1">
            <span className="font-extrabold text-base text-[var(--pen-orange)]">
              ١) الأجهزة المادية (Hardware)
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
              هي جميع الأجزاء المادية الملموسة في نظام الحاسوب، مثل: وحدة الكمبيوتر الرئيسية، والأجهزة الطرفية، والمعالج CPU، والذاكرة RAM، والقرص الصلب.
            </p>
            <span className="text-[11px] text-[var(--muted)] font-bold">
              💡 بدون برمجيات = مجرد قطع حديد ودوائر إلكترونية خاملة!
            </span>
          </div>
        </Box>

        <Box x={655} y={365} w={475} h={165} c="blue" fill="blue" at={2}>
          <div className="flex flex-col gap-1.5 text-right font-sans p-1">
            <span className="font-extrabold text-base text-[var(--pen-blue)]">
              ٢) البرمجيات (Software)
            </span>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
              هي مجموعة البرامج والبيانات التي تعمل فوق العتاد وتوجهه للقيام بالوظائف؛ تنقسم لبرمجيات النظام (لتشغيل العتاد) وبرامج التطبيقات (لخدمة المستخدم).
            </p>
            <span className="text-[11px] text-[var(--muted)] font-bold">
              💡 بدون عتاد = تعليمات رقمية مجردة لا تجد جهازاً لتنفيذها!
            </span>
          </div>
        </Box>

        <Note x={150} y={555} w={980} h={85} color="yellow" at={3}>
          ⚡ <b>القاعدة المنهجية الذهبية:</b> الحاسوب منظومة ثنائية متكاملة؛ <b>العتاد (Hardware)</b> يوفر القدرة المادية والتنفيذية، و<b>البرمجيات (Software)</b> توفر الذكاء والتعليمات والبيانات.
        </Note>
      </Scene>
    ),
  },

  {
    id: 'software-categories',
    title: '٢ · تصنيف البرمجيات: النظام مقابل التطبيقات',
    scene: true,
    notes: (
      <>
        <p><b>أقسام البرمجيات في علوم الحاسوب:</b></p>
        <p>تنقسم البرمجيات وفق المنهج المقرر إلى فئتين رئيسيتين:</p>
        <ol>
          <li><b>برمجيات النظام (System Software):</b> البرامج اللازمة لتشغيل العتاد والتحكم في وظائف الحاسوب الأساسية، وتشمل <b>نظام التشغيل (OS)</b> و<b>برامج تشغيل الأجهزة (Device Drivers)</b>.</li>
          <li><b>برامج التطبيقات (Application Software):</b> برامج تعمل <b>فوق</b> برنامج النظام، مصممة لأداء مهام محددة للمستخدم (مثل معالجة النصوص، الجداول الحسابية، التصفح، الألعاب).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>٢ · أقسام البرمجيات: برمجيات النظام والتطبيقات 📂</Heading>

        <Box x={150} y={130} w={980} h={85} c="purple" fill="purple" size={26} tc="ink">
          💡 تنقسم برمجيات الحاسوب إلى نوعين رئيسيين: برمجيات النظام (لإدارة العتاد) وبرامج التطبيقات (لخدمة المستخدم).
        </Box>

        {/* System Software Column */}
        <Box x={150} y={235} w={475} h={285} c="purple" at={1}>
          <div className="flex flex-col gap-2.5 text-right font-sans p-2">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-1.5">
              <span className="text-2xl">⚙️</span>
              <span className="font-black text-base text-[var(--pen-purple)]">
                [1] برمجيات النظام (System Software)
              </span>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              البرامج الأساسية اللازمة لتشغيل العتاد المادي وتوفير منصة آمنة لعمل بقية البرامج.
            </p>
            <div className="p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1 text-xs">
              <span className="font-extrabold text-[var(--pen-purple)]">أهم مكوناتها:</span>
              <span>• <b>نظام التشغيل (OS):</b> Windows, macOS, Android, iOS</span>
              <span>• <b>برامج تشغيل الأجهزة (Device Drivers):</b> مترجمات العتاد</span>
            </div>
            <span className="text-[11px] text-[var(--safe)] font-bold">
              ✅ ضرورية ولا غنى عنها لتشغيل أي جهاز كمبيوتر أو هاتف.
            </span>
          </div>
        </Box>

        {/* Application Software Column */}
        <Box x={655} y={235} w={475} h={285} c="blue" at={2}>
          <div className="flex flex-col gap-2.5 text-right font-sans p-2">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-1.5">
              <span className="text-2xl">📱</span>
              <span className="font-black text-base text-[var(--pen-blue)]">
                [2] برامج التطبيقات (Application Software)
              </span>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-bold">
              البرامج التي تعمل فوق برنامج النظام، ومصممة خصيصاً لأداء مهام محددة للمستخدم.
            </p>
            <div className="p-2 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1 text-xs">
              <span className="font-extrabold text-[var(--pen-blue)]">أمثلة مقررة:</span>
              <span>• <b>معالجة النصوص:</b> Microsoft Word, Google Docs</span>
              <span>• <b>الجداول الحسابية:</b> Microsoft Excel, Google Sheets</span>
              <span>• <b>التصفح والتصميم:</b> Google Chrome, Photoshop</span>
            </div>
            <span className="text-[11px] text-[var(--pen-orange)] font-bold">
              ⚠️ لا يمكن لبرامج التطبيقات أن تعمل بدون برنامج النظام!
            </span>
          </div>
        </Box>

        <Note x={150} y={545} w={980} h={85} color="blue" at={3}>
          📌 <b>تنبيه امتحاني مهم:</b> عندما يقول السؤال: &quot;برمجيات تُستخدم لأداء مهام محددة للمستخدم&quot; فهذا تعريف <b>برامج التطبيقات</b>، وليس برمجيات النظام التي تدير العتاد بشكل عام!
        </Note>
      </Scene>
    ),
  },
];
