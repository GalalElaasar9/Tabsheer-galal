// Unit 7 · Lesson 1 — Computer Architecture (Grade 1 Secondary)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, QUIZ } from './data';
import {
  ArchitectureFlowSimulator,
  PortsAndInterfacesLab,
  MinistryDiagramSolverLab,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
import { part3 } from './scenes3';
import { SCRIPT } from './script';

const check = (id: string, title: string, items: typeof CHECKS[string], h?: number): FrameDef => ({
  id,
  title: `✋ ${title}`,
  h,
  notes: <p>اسأل الطلاب أولاً واترك لهم فرصة التفكير والمناقشة، ثم اضغط الخيار لإظهار التفسير العلمي الدقيق.</p>,
  render: () => (
    <>
      <Eyebrow>✋ تأكد من فهمك</Eyebrow>
      <Title>{title}</Title>
      <QuestionList className="grid gap-3 mt-4" items={items} />
    </>
  ),
});

const order = (id: string, title: string, o: { steps: string[]; done: string }, h?: number): FrameDef => ({
  id,
  title: `✋ ${title}`,
  h,
  notes: <p>اطلب من أحد الطلاب ترتيب الخطوات بالضغط عليها. عند اختيار خطوة خاطئة تهتز لتصحيح المسار.</p>,
  render: () => (
    <>
      <Eyebrow>✋ نشاط ترتيبي تفاعلي</Eyebrow>
      <Title>{title}</Title>
      <div className="mt-4">
        <OrderActivity {...o} />
      </div>
    </>
  ),
});

const baseLesson: LessonDef = {
  id: 'u7l1',
  title: 'بنية الكمبيوتر',
  subtitle: 'الصف الأول الثانوي · الوحدة السابعة · الكمبيوترات · الدرس الأول',
  sections: [
    {
      title: 'المقدمة والعتاد والمكونات الخمسة',
      frames: [
        ...intro,
        part1[0], // hardware-concept
        part1[1], // peripherals-and-storage
        check('check-intro', 'فحص الفهم: مفهوم الأجهزة والأجهزة الطرفية والتخزين', CHECKS.intro),
        part1[2], // five-core-components
        part1[3], // cpu-cu-alu
        check('check-five-components', 'فحص الفهم: المكونات الخمسة والمعالج CPU', CHECKS.fiveComponents),
      ],
    },
    {
      title: 'الذاكرة والتخزين والإدخال والإخراج والمعمل المعماري',
      frames: [
        part2[0], // ram-primary-memory
        part2[1], // secondary-storage
        part2[2], // memory-vs-storage
        check('check-memory-storage', 'فحص الفهم: الذاكرة الرئيسية مقابل التخزين الثانوي', CHECKS.memoryVsStorage),
        part2[3], // input-devices
        part2[4], // output-devices
        check('check-input-output', 'فحص الفهم: أجهزة الإدخال وأجهزة الإخراج', CHECKS.inputOutput),
        {
          id: 'demo-architecture-simulator',
          title: '🧪 معمل تفاعلي: محاكي بنية الكمبيوتر وتدفق البيانات والتحكم',
          h: 880,
          notes: (
            <>
              <p><b>معمل بنية الكمبيوتر ومحاكي التدفق التفاعلي:</b></p>
              <p>يتيح للطلاب:</p>
              <ol>
                <li><b>استكشاف المكونات الخمسة:</b> النقر على أي مكون (CU, ALU, RAM, SSD, Input, Output) لقراءة دوره وقاعدته الذهبية.</li>
                <li><b>تتبع السيناريوهات الحية:</b> تجربة سيناريو جمع رقمين (5 + 3 = 8)، حفظ ملف، أو طباعة مستند، ومراقبة حركة نبضات التحكم (الخط المتصل) والبيانات (الخط المنقط) خطوة بخطوة.</li>
              </ol>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>محاكي بنية الكمبيوتر وحركة تدفق التحكم وتدفق البيانات</Title>
              <ArchitectureFlowSimulator />
            </>
          ),
        },
        order('order-command-execution', 'نشاط ترتيبي: دورة معالجة البيانات وانتقالها عبر المكونات الخمسة', ORDERS.commandExecution),
      ],
    },
    {
      title: 'المخطط المعماري ومنافذ التوصيل والمعامل',
      frames: [
        part3[0], // control-vs-data-flow
        check('check-flows', 'فحص الفهم: مسارات تدفق التحكم وتدفق البيانات', CHECKS.flows),
        part3[1], // interface-concept
        part3[2], // interfaces-definition-and-types
        check('check-interfaces', 'فحص الفهم: الواجهات (USB, HDMI, Ethernet)', CHECKS.interfaces),
        part3[3], // ethernet-and-lan
        part3[4], // network-hubs
        part3[5], // network-routers
        {
          id: 'demo-ports-lab',
          title: '🧪 معمل تفاعلي: واجهات ومنافذ التوصيل ومطابقة الكابلات',
          h: 840,
          notes: (
            <>
              <p><b>معمل واجهات التوصيل:</b></p>
              <p>يتيح للطلاب دراسة بطاقات الواجهات الثلاث (USB, HDMI, Ethernet) المقررة في المنهج، ولعب لعبة تفاعلية لاختيار المنفذ الصحيح لكل جهاز طرفي مع تعليق وتفسير فوري.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مستكشف واجهات التوصيل ولعبة مطابقة الكابلات والأجهزة الطرفية</Title>
              <PortsAndInterfacesLab />
            </>
          ),
        },
        {
          id: 'demo-ministry-solver',
          title: '🧪 معمل تفاعلي: حل مخطط بنية الحاسوب وسؤال "تحدَّ معلوماتك"',
          h: 780,
          notes: (
            <>
              <p><b>معمل حل مخطط بنية الحاسوب التفاعلي:</b></p>
              <p>محاكاة دقيقة لرسم المخطط وسؤال "تحدَّ معلوماتك"؛ يقوم الطلاب بتسكين المكونات في الفراغات [1] إلى [6] وتقييم الإجابات فورياً.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>حل المخطط المعماري الكامل وتسكين المكونات [1] إلى [6]</Title>
              <MinistryDiagramSolverLab />
            </>
          ),
        },
        order('order-cable-matching', 'نشاط ترتيبي: مطابقة الأجهزة الطرفية بالواجهات المناسبة', ORDERS.cableMatching),
        part3[6], // master-summary
      ],
    },
    {
      title: 'ماراثون الاختبار الشامل وتحديات الامتحانات',
      frames: [
        {
          id: 'mega-quiz',
          title: '🏁 الاختبار الشامل (بنية الكمبيوتر)',
          notes: (
            <p>
              ماراثون تقييمي شامل يتضمن كافة الأسئلة والتدريبات المعتمدة في المنهج، مع حساب فوري للدرجات وتفسير تعليمي لكل خيار.
            </p>
          ),
          render: () => (
            <>
              <Eyebrow>🏁 التقييم الختامي</Eyebrow>
              <Title>ماراثون الاختبار الشامل · بنية الكمبيوتر والواجهات</Title>
              <div className="mt-4">
                <ScoredQuiz
                  title="🏆 ماراثون الاختبار الشامل · بنية الكمبيوتر والواجهات"
                  items={QUIZ}
                />
              </div>
            </>
          ),
        },
      ],
    },
  ],
};

// Attach script to frames
export const u7l1: LessonDef = {
  ...baseLesson,
  sections: baseLesson.sections.map((sec) => ({
    ...sec,
    frames: sec.frames.map((frame) => ({
      ...frame,
      script: SCRIPT[frame.id],
    })),
  })),
};
