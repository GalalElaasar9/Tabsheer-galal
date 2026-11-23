// Unit 4 · Lesson 4 — Iterative Website Optimization Process
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import { IterativePdcaSimulatorDemo } from './demos';
import { intro, part1 } from './scenes1';
import { abTesting, designThinking } from './scenes2';
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
  subtitle: 'فلسفة التحسين التكراري · دورة ديمنغ (PDCA) · التفكير التصميمي · اختبار A/B · بنك الأسئلة والتقييم الشامل',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · فلسفة التحسين التكراري ودورة ديمنغ (PDCA)',
      frames: [
        ...part1,
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
      title: '٢ · التفكير التصميمي (Design Thinking)',
      frames: [...designThinking],
    },
    {
      title: '٣ · اختبار A/B وترابط الأساليب والمصطلحات',
      frames: [...abTesting],
    },
    {
      title: '٤ · بنك الأسئلة والتقييم الشامل على الدرس',
      frames: [
        {
          id: 'quiz',
          title: 'اختيار من متعدد (Quiz)',
          h: 1400,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ١</Eyebrow>
              <ScoredQuiz title="بنك أسئلة الدرس: اختر الإجابة الصحيحة (PDCA · التفكير التصميمي · اختبار A/B)" items={QUIZ} />
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
              <ScoredQuiz title="فرّق بين المصطلحات والمفاهيم الأساسية للدرس" items={DIFF} />
            </>
          ),
        },
        order('order-dt', 'رتّب مراحل التفكير التصميمي الخمس بالترتيب الصحيح', ORDERS.designThinkingWorkflow),
        {
          id: 'applied',
          title: 'أسئلة تطبيقية وسيناريوهات من الحياة',
          h: 1050,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٤</Eyebrow>
              <Title>سيناريوهات عملية من واقع الويب: فكّر وجاوب، ثم اكشف الإجابة لتتأكد</Title>
              <div className="grid grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
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
