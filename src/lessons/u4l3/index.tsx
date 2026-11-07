// Unit 4 · Lesson 3 — Website Evaluation Methods
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  AbTestingSimulatorDemo,
  HeuristicAuditLabDemo,
  TextbookGlossaryU4L3,
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
  id: 'u4l3',
  title: 'أساليب تقييم المواقع الإلكترونية',
  subtitle: 'اختبارات قابلية الاستخدام · مبادئ نيلسن للاستكشاف · التحليلات الرقمية · اختبارات A/B · مؤشرات الأداء',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · أهمية التقييم واختبارات قابلية الاستخدام',
      frames: [
        part1[0], // evaluation-why
        check('check-eval-basics', 'تأكد من استيعابك لأهداف تقييم المواقع', CHECKS.evalBasics),
        part1[1], // usability-testing-method
      ],
    },
    {
      title: '٢ · التقييم الاستكشافي ومبادئ نيلسن لقابلية الاستخدام',
      frames: [
        part2[0], // heuristics-nielsen
        {
          id: 'heuristic-audit-lab',
          title: '🧪 مدقق مبادئ نيلسن: تقييم تفاعلي لقابلية الاستخدام',
          h: 860,
          notes: (
            <>
              <p><b>مدقق مبادئ نيلسن:</b> راجع معايير وضوح الحالة، التراجع Undo، ومنع الأخطاء ولاحظ مؤشر قابلية الاستخدام المحسوب.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة تقييم عملية</Eyebrow>
              <Title>مدقق مبادئ نيلسن العشرة لقابلية الاستخدام (Heuristics Checklist)</Title>
              <HeuristicAuditLabDemo />
            </>
          ),
        },
        check('check-heuristics', 'تأكد من فهمك لمبادئ نيلسن الاستكشافية', CHECKS.heuristics),
      ],
    },
    {
      title: '٣ · التحليلات الرقمية واختبارات A/B ومؤشرات الأداء',
      frames: [
        part2[1], // analytics-and-heatmaps
        {
          id: 'ab-testing-simulator',
          title: '🧪 محاكي اختبارات A/B: قياس معدل التحويل والارتداد',
          h: 880,
          notes: (
            <>
              <p><b>محاكي اختبارات A/B:</b> قارن بين النسخة A والنسخة B وشاهد تفوق النسخة المحسنة في خفض معدل الارتداد ومضاعفة المشتركين.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة إحصائية علمية</Eyebrow>
              <Title>محاكي اختبارات A/B: المقارنة الرقمية الحاسمة بين خيارات التصميم</Title>
              <AbTestingSimulatorDemo />
            </>
          ),
        },
        part3[0], // core-web-vitals
        order('order-eval-flow', 'رتّب خطوات عملية تقييم الموقع الإلكتروني', ORDERS.evaluationFlow),
        check('check-analytics', 'تأكد من فهمك للتحليلات الرقمية والخرائط الحرارية', CHECKS.analytics),
      ],
    },
    {
      title: '٤ · المعجم الوزاري والتقييم النهائي',
      frames: [
        {
          id: 'textbook-definitions',
          title: '📖 معجم مصطلحات كتاب الوزارة لتقييم المواقع',
          h: 840,
          notes: (
            <>
              <p><b>معجم المصطلحات المعتمدة:</b> التعريفات الرسمية المقررة في المنهج لدرس أساليب تقييم المواقع الإلكترونية.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة المعتمد</Eyebrow>
              <Title>معجم مصطلحات ومفاهيم تقييم المواقع الإلكترونية في البكالوريا</Title>
              <TextbookGlossaryU4L3 />
            </>
          ),
        },
        part3[1], // concept-map-u4l3
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
        part3[2], // ending-u4l3
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l3: LessonDef = {
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

