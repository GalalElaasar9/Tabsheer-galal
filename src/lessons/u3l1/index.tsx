// Unit 3 · Lesson 1 — The Evolution of the Web, drawn on the board.
// Scenes (scenes1–3) carry the explanation as drawings; full wording lives in each frame's teacher notes.
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import { ApiStatesDemo } from './apiStatesDemo';
import { LayersDemo, ReloadDemo, SearchDemo } from './demos';
import { intro, part1 } from './scenes1';
import { part2, part3, part4, part5 } from './scenes2';
import { ending, part6, part7, part8, part10 } from './scenes3';
import { SCRIPT, TAG } from './script';
import { Tag } from '../../sketch/Sketch';

const check = (id: string, title: string, items: typeof CHECKS[string], h?: number): FrameDef => ({
  id, title: `✋ ${title}`, h,
  notes: <p>اسأل الطلاب الأول وخلّيهم يفكروا، وبعدين اضغط الإجابة. كل إجابة بيظهر معاها سبب قصير.</p>,
  render: () => (
    <>
      <Eyebrow>✋ تأكد من فهمك</Eyebrow>
      <Title>{title}</Title>
      <QuestionList className="grid gap-3 mt-4" items={items} />
    </>
  ),
});

const order = (id: string, title: string, o: { steps: string[]; done: string }, h?: number): FrameDef => ({
  id, title: `✋ ${title}`, h,
  notes: <p>خلّي طالب ييجي يرتّب الخطوات بالضغط عليها. الخطوة الغلط بتهتز.</p>,
  render: () => (
    <>
      <Eyebrow>✋ تأكد من فهمك</Eyebrow>
      <Title>{title}</Title>
      <div className="mt-4"><OrderActivity {...o} /></div>
    </>
  ),
});

const lesson: LessonDef = {
  id: 'u3l1',
  title: 'تطور الويب',
  subtitle: 'الفصل الثالث · الدرس الأول',
  sections: [
    { title: 'المقدمة', frames: intro },
    { title: '١ · بداية الويب', frames: [...part1, check('check-1', 'قبل ما نكمل…', CHECKS.web)] },
    { title: '٢ · الصفحة الثابتة', frames: [...part2, order('check-2', 'رتّب رحلة الصفحة الثابتة', ORDERS.static)] },
    { title: '٣ · المحتوى المتغير', frames: part3 },
    { title: '٤ · قواعد البيانات', frames: part4 },
    {
      title: '٥ · الـ Backend',
      frames: [
        ...part5.slice(0, 2),
        {
          id: 'template-demo', title: '🧪 جرّب: بوابة النتائج', h: 800,
          notes: (
            <>
              <p>ده موقع نتايج حقيقي مصغّر. خلّي طالب يبحث برقم (2402)، وبعدين باسم (سارة)، وبعدين باسم متكرر (مريم)، وبعدين برقم مش موجود (9999).</p>
              <p>على الشمال بيظهر اللي بيحصل على السيرفر خطوة بخطوة: الطلب يوصل، والـ Backend يدوّر في قاعدة البيانات، ويملا القالب، ويبعت صفحة HTML كاملة.</p>
              <p>لاحظ معاهم: العنوان في المتصفح بيتغير مع كل بحث، يعني كل بحث طلب جديد وصفحة جديدة. الصفحة شكلها واحد لكل الطلاب، اللي بيتغير البيانات بس. والمتوسط مش متخزّن في قاعدة البيانات، الـ Backend هو اللي حسبه.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>ابحث عن طالب… وشوف السيرفر بيعمل إيه</Title>
              <SearchDemo />
            </>
          ),
        },
        ...part5.slice(2),
        check('check-5', 'الـ Backend والصفحات الديناميكية', CHECKS.backend),
      ],
    },
    {
      title: '٦ · JavaScript',
      frames: [
        ...part6.slice(0, 4),
        {
          id: 'layers-demo', title: '🧪 جرّب: HTML · CSS · JS',
          notes: <p>شغّل CSS الأول وبعدين JavaScript، وجرّب تكتب حروف بدل أرقام. من غير JavaScript الزرار موجود بس مش بيعمل حاجة.</p>,
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>شغّل وطفّي كل طبقة</Title>
              <div className="mt-4" style={{ maxWidth: 640 }}><LayersDemo /></div>
            </>
          ),
        },
        ...part6.slice(4),
        check('check-6', 'HTML ولا CSS ولا JavaScript؟', CHECKS.langs, 820),
      ],
    },
    {
      title: '٧ · طلبات في الخلفية',
      frames: [
        ...part7.slice(0, 2),
        {
          id: 'reload-demo', title: '🧪 جرّب: صفحة كاملة ولا جزء؟',
          notes: <p>خلّي الطالب يكتب ملاحظة، وبعدين يجرّب الزرارين: في التحميل الكامل الملاحظة بتضيع والعدّاد بيزيد، وفي الطلب في الخلفية مربع النتيجة بس اللي بيتغير.</p>,
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>قارن الطريقتين</Title>
              <ReloadDemo />
            </>
          ),
        },
        ...part7.slice(2),
      ],
    },
    {
      title: '٨ · تمهيد للـ API',
      frames: [
        ...part8.slice(0, 2),
        {
          id: 'api-states-demo', title: '🧪 جرّب: حالات الـ API', h: 860,
          notes: (
            <>
              <p><b>حالات الـ API في تطبيقات الويب:</b> أي طلب يمر بدورة حياة من ٤ حالات أساسية:</p>
              <ul>
                <li><b>Idle (خامل):</b> قبل ما المستخدم يضغط، مفيش طلب في الطريق والواجهة مستقرة.</li>
                <li><b>Pending / Loading (تحميل):</b> الطلب انطلق في الشبكة، بنعرض مؤشر انتظار أو Skeleton ونعطل الزرار علشان ميتكررش.</li>
                <li><b>Success (نجاح 200 OK):</b> السيرفر رد بالبيانات، وJavaScript تعرضها في مكانها فورًا بدون رفرش.</li>
                <li><b>Error (أخطاء 404 أو 500 أو شبكة):</b> لو حصلت مشكلة، لازم الواجهة توضح للمستخدم السبب بدقة (بيانات مش موجودة، ولا سيرفر واقع، ولا النت مفصول).</li>
              </ul>
              <p>خلّي الطلاب يجرّبوا السيناريوهات الأربعة، ويلاحظوا الفرق بين اللي بيشوفه المستخدم في المتصفح وبين كود الرد (Status Code) والـ JSON المستلم في مراقب الشبكة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>حالات الـ API: شوف الطلب بيعدّي بإيه</Title>
              <ApiStatesDemo />
            </>
          ),
        },
        ...part8.slice(2),
        order('check-7', 'رتّب خطوات الطلب في الخلفية', ORDERS.async),
        check('check-8', 'صح ولا غلط؟', CHECKS.api, 820),
      ],
    },
    { title: '٩ · الخلاصة', frames: part10 },
    {
      title: 'التقييم',
      frames: [
        { id: 'quiz', title: 'اختيار من متعدد', h: 1360, render: () => <><Eyebrow>📝 التقييم · ١</Eyebrow><ScoredQuiz title="اختر الإجابة الصحيحة" items={QUIZ} /></> },
        { id: 'diff', title: 'فرّق بين المفاهيم', h: 1120, render: () => <><Eyebrow>📝 التقييم · ٢</Eyebrow><ScoredQuiz title="فرّق بين المفاهيم المتقاربة" items={DIFF} /></> },
        {
          id: 'order-ssr', title: 'رتّب الخطوات', h: 820,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٣</Eyebrow>
              <Title>رتّب خطوات صفحة النتيجة (SSR)</Title>
              <div className="mt-3"><OrderActivity {...ORDERS.ssr} /></div>
            </>
          ),
        },
        {
          id: 'applied', title: 'أسئلة تطبيقية', h: 940,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٤</Eyebrow>
              <Title>فكّر وجاوب، وبعدين اكشف الإجابة</Title>
              <div className="grid grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
        ending,
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag (kept in script.ts so the scenes stay about drawing). */
export const u3l1: LessonDef = {
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
