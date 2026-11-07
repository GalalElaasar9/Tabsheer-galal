// Unit 4 · Lesson 4 — Iterative Website Optimization Process
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  IterativePdcaSimulatorDemo,
  PerformanceOptimizationLabDemo,
  TextbookGlossaryU4L4,
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
  id: 'u4l4',
  title: 'عملية التحسين التكراري للمواقع الإلكترونية',
  subtitle: 'فلسفة التحسين التكراري · دورة ديمنغ (PDCA) · تسريع الأداء · ضغط الوسائط · CRO · حصاد الترم الأول',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · فلسفة التحسين التكراري ودورة ديمنغ (PDCA)',
      frames: [
        part1[0], // iterative-philosophy
        part1[1], // pdca-cycle-scene
        {
          id: 'iterative-pdca-sim',
          title: '🧪 محاكي دورة التحسين التكراري (PDCA)',
          h: 880,
          notes: (
            <>
              <p><b>محاكي دورة التحسين التكراري:</b> عش تجربة حية لتطبيق مراحل Plan - Do - Check - Act على متجر افتراضي وشاهد ارتفاع معدل النجاح.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة هندسية تفاعلية</Eyebrow>
              <Title>محاكي دورة التحسين التكراري (PDCA Simulator)</Title>
              <IterativePdcaSimulatorDemo />
            </>
          ),
        },
        order('order-pdca', 'رتّب مراحل دورة التحسين التكراري (PDCA)', ORDERS.pdcaCycle),
        check('check-iterative', 'تأكد من استيعابك لفلسفة التحسين التكراري ودورة PDCA', CHECKS.iterativeBasics),
      ],
    },
    {
      title: '٢ · تسريع الأداء وتحسين معدل التحويل (CRO)',
      frames: [
        part2[0], // performance-optimization-stack
        {
          id: 'performance-lab',
          title: '🧪 معمل تسريع المواقع وضغط الأصول',
          h: 900,
          notes: (
            <>
              <p><b>معمل تسريع الأداء:</b> فعّل التحميل الكسول، صور WebP، وتصغير الأكواد والتخزين المؤقت، وشاهد انخفاض زمن التحميل ومؤشر الأداء الأخضر.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة تطبيقية</Eyebrow>
              <Title>معمل تحسين سرعة الموقع ومقاييس الأداء (Performance Lab)</Title>
              <PerformanceOptimizationLabDemo />
            </>
          ),
        },
        part2[1], // cro-frictionless-ux
        order('order-perf', 'رتّب خطوات عملية تسريع الموقع وتخفيف حمولته', ORDERS.perfWorkflow),
        check('check-perf', 'تأكد من فهمك لتقنيات تسريع الأداء والتحسين التكراري', CHECKS.performanceTechniques),
      ],
    },
    {
      title: '٣ · حصاد المنهج والمعجم والتقييم الختامي',
      frames: [
        part3[0], // term-grand-summary
        {
          id: 'textbook-definitions',
          title: '📖 معجم مصطلحات كتاب الوزارة للتحسين التكراري',
          h: 860,
          notes: (
            <>
              <p><b>معجم المصطلحات المعتمدة:</b> التعريفات الرسمية المقررة في المنهج لدرس عملية التحسين التكراري للمواقع الإلكترونية.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة المعتمد</Eyebrow>
              <Title>معجم مصطلحات ومفاهيم التحسين التكراري في البكالوريا</Title>
              <TextbookGlossaryU4L4 />
            </>
          ),
        },
        part3[1], // concept-map-u4l4
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
        part3[2], // ending-u4l4
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l4: LessonDef = {
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

