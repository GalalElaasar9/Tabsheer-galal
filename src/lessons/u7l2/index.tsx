// Unit 7 · Lesson 2 — Computer Software & Hardware (Grade 1 Secondary)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, QUIZ, APPLIED } from './data';
import {
  SystemLayersSimulator,
  OsTrioManagerLab,
  DriverBridgeLab,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
import { part3, ending } from './scenes3';
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
  id: 'u7l2',
  title: 'برامج الكمبيوتر (العتاد والبرمجيات)',
  subtitle: 'الصف الأول الثانوي · الوحدة السابعة · الكمبيوترات · الدرس الثاني',
  sections: [
    {
      title: '١ · ثنائية العتاد والبرمجيات وتصنيف البرامج',
      frames: [
        ...intro,
        part1[0], // hardware-and-software
        part1[1], // software-categories
        check('check-hw-sw', 'فحص الفهم: مفهوم العتاد والبرمجيات وتكاملهما', CHECKS.hardwareVsSoftware),
        check('check-system-sw', 'فحص الفهم: برمجيات النظام ونظام التشغيل', CHECKS.systemSoftware),
      ],
    },
    {
      title: '٢ · نظام التشغيل OS ووظائف الإدارة وبرامج التشغيل والمعامل',
      frames: [
        part2[0], // operating-system-trio
        check('check-os-trio', 'فحص الفهم: وظائف إدارة نظام التشغيل الثلاث (المهام، الذاكرة، الملفات)', CHECKS.osFunctions),
        part2[1], // device-drivers
        check('check-drivers', 'فحص الفهم: برامج تشغيل الأجهزة ودورها كمترجم رسمي', CHECKS.deviceDrivers),
        part2[2], // os-platforms
        {
          id: 'demo-layers-simulator',
          title: '🧪 معمل تفاعلي: محاكي تدفق الأوامر عبر طبقات الحاسوب',
          h: 880,
          notes: (
            <>
              <p><b>محاكي طبقات الحاسوب الهرمية:</b></p>
              <p>شاهد كيف تتدفق إشارات الأوامر بين المستخدم، برامج التطبيقات، نظام التشغيل، برامج التشغيل، والعتاد المادي في سيناريوهات واقعية متعددة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>محاكي تدفق الأوامر عبر طبقات الحاسوب الهرمية</Title>
              <SystemLayersSimulator />
            </>
          ),
        },
        {
          id: 'demo-os-trio',
          title: '🧠 معمل تفاعلي: وظائف نظام التشغيل الثلاث (المهام، الذاكرة، الملفات)',
          h: 890,
          notes: (
            <>
              <p><b>معمل وظائف نظام التشغيل الثلاث:</b></p>
              <p>يتيح للطلاب تجربة إدارة المهام (Task Manager)، وحجز وتحرير كتل الذاكرة RAM (Memory Manager)، وتنظيم شجرة الملفات (File Manager).</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧠 معمل تفاعلي</Eyebrow>
              <Title>معمل وظائف إدارة نظام التشغيل الثلاث (Task, Memory, File)</Title>
              <OsTrioManagerLab />
            </>
          ),
        },
        {
          id: 'demo-driver-bridge',
          title: '🔌 معمل تفاعلي: برنامج تشغيل الجهاز (Device Driver) والمترجم الفوري',
          h: 860,
          notes: (
            <>
              <p><b>مختبر برامج تشغيل الأجهزة:</b></p>
              <p>جرّب توصيل طابعة أو كارت شاشة بدون برنامج تشغيل، وشاهد كيف يترجم الـ Driver أوامر النظام لنبضات تفهمها الطابعة فور تثبيته.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🔌 معمل تفاعلي</Eyebrow>
              <Title>مختبر برامج تشغيل الأجهزة والمترجم الرسمي للعتاد</Title>
              <DriverBridgeLab />
            </>
          ),
        },
        order('order-print', 'نشاط ترتيبي: تسلسل أمر الطباعة عبر الطبقات من التطبيق حتى الطابعة المادية', ORDERS.printWorkflow),
        order('order-app-launch', 'نشاط ترتيبي: مراحل تشغيل تطبيق وتنسيق موارد نظام التشغيل الثلاث', ORDERS.appLaunchWorkflow),
      ],
    },
    {
      title: '٣ · برامج التطبيقات وهرم المعمارية وماراثون الاختبار الشامل',
      frames: [
        part3[0], // application-software
        check('check-applications', 'فحص الفهم: برامج التطبيقات والأصناف المقررة', CHECKS.applications),
        part3[1], // layered-hierarchy
        check('check-curriculum', 'تطبيقات المنهج الرسمية: تحدى معلوماتك وتدريبات ص ١٠٨ و ١٠٩', CHECKS.curriculumExercises),
        {
          id: 'applied-questions',
          title: '💡 مواقف وتحديات تطبيقية من واقع الحياة',
          h: 920,
          notes: <p>مجموعة من الأسئلة التحليلية والتطبيقية بأسلوب طالب متفوق لربط مفاهيم الدرس بالحياة العملية.</p>,
          render: () => (
            <>
              <Eyebrow>💡 تفكير وتطبيق عملي</Eyebrow>
              <Title>فكر وناقش، ثم اكشف التحليل العلمي والحل النموذجي</Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-4 items-start">
                {APPLIED.map(([q, a]) => (
                  <RevealCard key={q} q={q} a={a} />
                ))}
              </div>
            </>
          ),
        },
        ending,
        {
          id: 'mega-quiz',
          title: '🏁 ماراثون التقييم الشامل (برامج الكمبيوتر)',
          notes: (
            <p>
              ماراثون تقييمي شامل يغطي كافة المفاهيم والأسئلة المعتمدة في المنهج الدراسي، مع رصد فوري للدرجات وتفسير تعليمي لكل خيار.
            </p>
          ),
          render: () => (
            <>
              <Eyebrow>🏁 التقييم الختامي</Eyebrow>
              <Title>ماراثون التقييم الشامل · برامج الكمبيوتر والعتاد والبرمجيات</Title>
              <div className="mt-4">
                <ScoredQuiz
                  title="🏆 ماراثون التقييم الشامل · برامج الكمبيوتر (الصف الأول الثانوي)"
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
export const u7l2: LessonDef = {
  ...baseLesson,
  sections: baseLesson.sections.map((sec) => ({
    ...sec,
    frames: sec.frames.map((frame) => ({
      ...frame,
      script: SCRIPT[frame.id],
    })),
  })),
};
