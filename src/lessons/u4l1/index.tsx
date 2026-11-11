// Unit 4 · Lesson 1 — Choosing the Right Communication Medium
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
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
  id: 'u4l1',
  title: 'اختيار الوسيلة المناسبة لنقل المعلومات',
  subtitle: 'الأسئلة الأربعة للتخطيط · الوسائط الخمسة · اتجاه واحد واتجاهين · نقاط القوة والقيود للمواقع · اختيار الوسيط حسب الغرض والتناقل الشفهي',
  sections: [
    {
      title: '١ · التخطيط والأسئلة الأربعة قبل اختيار الوسيلة',
      frames: [
        intro[0], // cover
        intro[1], // journey
        intro[2], // planning-four-questions (مثال إعلان الكورس والأسئلة الأربعة)
        check('check-planning', 'تأكد من فهمك للأسئلة الأربعة قبل اختيار الوسيلة', CHECKS.planning),
        order('order-planning', 'رتّب الأسئلة الأربعة لاختيار الوسيلة المناسبة قبل تصميم الموقع', ORDERS.planningSteps),
      ],
    },
    {
      title: '٢ · الوسائط الخمسة لنقل المعلومات والاتصال (اتجاه واحد vs اتجاهين)',
      frames: [
        part1[0], // medium-tv (① التلفزيون)
        part1[1], // medium-radio (② الراديو)
        part1[2], // medium-newspaper (③ الصحيفة)
        part1[3], // medium-website (④ الموقع الإلكتروني)
        part1[4], // one-way-vs-two-way (اتجاه واحد مقابل اتجاهين)
        part1[5], // medium-social-and-compare (⑤ وسائل التواصل الاجتماعي ومقارنة الوسائط الخمسة)
        check('check-media-five', 'تأكد من فهمك للوسائط الخمسة والفرق بين اتجاه واحد واتجاهين', CHECKS.mediaFive),
      ],
    },
    {
      title: '٣ · نقاط القوة والقيود في المواقع الإلكترونية',
      frames: [
        part2[0], // website-strengths (نقاط القوة الخمس)
        part2[1], // website-limitations (القيود الثلاثة)
        part2[2], // strengths-vs-limitations (جدول المقارنة والتصنيف التفاعلي)
        check('check-web-pros-cons', 'تأكد من فهمك لنقاط القوة والقيود في المواقع الإلكترونية', CHECKS.webProsCons),
      ],
    },
    {
      title: '٤ · اختيار الوسائط وفقاً للغرض والتناقل الشفهي والتقييم الشامل',
      frames: [
        part3[0], // purpose-four-cases (الحالات الأربع للاختيار وفقاً للغرض)
        part3[1], // word-of-mouth-sim (محاكي Word of Mouth ومختبر القرار)
        check('check-purpose-wom', 'تأكد من فهمك لاختيار الوسيلة حسب الغرض والتناقل الشفهي', CHECKS.purposeAndWom),
        part3[2], // golden-summary-u4l1 (لوحة الملخص الشامل)
        {
          id: 'quiz',
          title: '📝 اختيار من متعدد: أسئلة شاملة على الدرس الأول',
          h: 1350,
          render: () => (
            <>
              <Eyebrow>📝 التقييم الشامل · ١</Eyebrow>
              <ScoredQuiz title="اختبار الدرس الأول: اختر الإجابة الصحيحة" items={QUIZ} />
            </>
          ),
        },
        {
          id: 'diff',
          title: '⚖️ فرّق بين المفاهيم الأساسية للدرس الأول',
          h: 1050,
          render: () => (
            <>
              <Eyebrow>📝 التقييم الشامل · ٢</Eyebrow>
              <ScoredQuiz title="فرّق بين المفاهيم المتقاربة بدقة" items={DIFF} />
            </>
          ),
        },
        {
          id: 'applied',
          title: '💡 أسئلة علل ومواقف تطبيقية (فكّر واكشف الإجابة)',
          h: 960,
          render: () => (
            <>
              <Eyebrow>📝 التقييم الشامل · ٣</Eyebrow>
              <Title>مواقف وتطبيقات عملية: فكّر أولاً ثم اكشف الإجابة النموذجية</Title>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
        part3[3], // ending-u4l1
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l1: LessonDef = {
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
