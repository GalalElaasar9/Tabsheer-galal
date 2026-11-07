// Unit 4 · Lesson 2 — Information Design & Website UX
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  NavigationFlowDemo,
  TextbookGlossaryU4L2,
  UxHierarchyLabDemo,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
import { part3 } from './scenes3';
import { SCRIPT, TAG } from './script';
import { Tag } from '../../sketch/Sketch';

const check = (id: string, title: string, items: typeof CHECKS[string], h?: number): FrameDef => ({
  id,
  title: `✋ ${title}`,
  h,
  notes: <p>اسأل الطلاب أولاً واجعلهم يفكرون، ثم اضغط الإجابة مع التفسير العلمي المكتوب أسفلها.</p>,
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
  notes: <p>دع طالباً يرتّب الخطوات بالضغط عليها. الخطوة غير المتطابقة تهتز لتصحيح المسار.</p>,
  render: () => (
    <>
      <Eyebrow>✋ تأكد من فهمك</Eyebrow>
      <Title>{title}</Title>
      <div className="mt-4"><OrderActivity {...o} /></div>
    </>
  ),
});

const lesson: LessonDef = {
  id: 'u4l2',
  title: 'تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية',
  subtitle: 'هندسة المعلومات · مقارنة UX و UI · التسلسل البصري · سهولة الوصول a11y · أنظمة التنقل',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · هندسة المعلومات (IA) ومقارنة UX و UI',
      frames: [
        part1[0], // ia-architecture-types
        check('check-ia', 'تأكد من فهمك لهندسة المعلومات وهياكل التنظيم', CHECKS.iaConcepts),
        part1[1], // ux-vs-ui-comparison
        check('check-ux-ui', 'تأكد من فهمك للفروق بين تجربة المستخدم وواجهة المستخدم', CHECKS.uxVsUi),
      ],
    },
    {
      title: '٢ · مبادئ التسلسل البصري والشمولية (a11y)',
      frames: [
        part2[0], // visual-hierarchy-rules
        {
          id: 'ux-hierarchy-lab',
          title: '🧪 مختبر تجربة المستخدم: التباين اللوني والمساحات البيضاء',
          h: 880,
          notes: (
            <>
              <p><b>مختبر التسلسل الهرمي البصري:</b> عدّل التباين اللوني والمساحات البيضاء وشاهد تقييم قابلية القراءة المباشر.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية</Eyebrow>
              <Title>مختبر التسلسل البصري وقابلية الوصول: إراحة عين القارئ وتوجيهه للأهم</Title>
              <UxHierarchyLabDemo />
            </>
          ),
        },
        order('order-ux-process', 'رتّب خطوات عملية تصميم تجربة المستخدم والواجهات', ORDERS.uxDesignProcess),
        check('check-visual', 'تأكد من فهمك للتسلسل البصري والوصول الشامل', CHECKS.visualPrinciples),
      ],
    },
    {
      title: '٣ · أنظمة التنقل (Navigation) والمعجم والتقييم النهائي',
      frames: [
        part2[1], // navigation-systems-scene
        {
          id: 'navigation-flow-demo',
          title: '🧪 محاكي أنظمة التنقل: البوابة ومسار الـ Breadcrumbs',
          h: 860,
          notes: (
            <>
              <p><b>محاكي أنظمة التنقل:</b> تنقل بين أقسام البوابة ولاحظ كيف يساعد مسار الـ Breadcrumbs الزائر على معرفة موقعه بدقة والرجوع للوراء.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 محاكي التنقل</Eyebrow>
              <Title>أنظمة التنقل ومسار الـ Breadcrumbs: إرشاد الزائر ومنع ضياعه في الموقع</Title>
              <NavigationFlowDemo />
            </>
          ),
        },
        check('check-nav', 'تأكد من استيعابك لأنظمة التنقل والـ Breadcrumbs وأزرار الـ CTA', CHECKS.navigation),
        {
          id: 'textbook-definitions',
          title: '📖 معجم مصطلحات كتاب الوزارة لتصميم المعلومات والـ UX',
          h: 840,
          notes: (
            <>
              <p><b>معجم المصطلحات المعتمدة:</b> التعريفات الرسمية المقررة في المنهج لدرس تصميم المعلومات وتجربة المستخدم.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة المعتمد</Eyebrow>
              <Title>معجم مصطلحات ومفاهيم هندسة المعلومات وتجربة المستخدم في البكالوريا</Title>
              <TextbookGlossaryU4L2 />
            </>
          ),
        },
        part3[0], // concept-map-u4l2
        {
          id: 'quiz',
          title: 'اختيار من متعدد',
          h: 1400,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ١</Eyebrow>
              <ScoredQuiz title="بنك أسئلة امتحانات البكالوريا: اختر الإجابة الصحيحة" items={QUIZ} />
            </>
          ),
        },
        {
          id: 'diff',
          title: 'فرّق بين المفاهيم المتقاربة',
          h: 1150,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٢</Eyebrow>
              <ScoredQuiz title="فرّق بين المصطلحات الأساسية للامتحان" items={DIFF} />
            </>
          ),
        },
        {
          id: 'applied',
          title: 'أسئلة تطبيقية من الحياة',
          h: 960,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٣</Eyebrow>
              <Title>فكّر وجاوب، ثم اكشف الإجابة لتتأكد</Title>
              <div className="grid grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
        part3[1], // ending-u4l2
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l2: LessonDef = {
  ...lesson,
  sections: lesson.sections.map(sec => ({
    ...sec,
    frames: sec.frames.map(f => {
      const tag = TAG[f.id];
      return {
        ...f,
        script: SCRIPT[f.id] ?? f.script,
        render: tag ? () => <>{f.render()}<Tag kind={tag} /></> : f.render,
      };
    }),
  })),
};

