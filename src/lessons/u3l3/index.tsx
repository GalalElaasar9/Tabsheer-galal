// Unit 3 · Lesson 3 — Front-end Technology Fundamentals
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  FrontendTrioLabDemo,
  ResponsiveMobileFirstDemo,
  ReviewPointsDemo,
  SemanticElementBuilderDemo,
  SemanticHtmlComparisonDemo,
  TextbookGlossaryU3L3,
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
  notes: <p>اسأل الطلاب أولاً واجعلهم يفكرون، ثم اضغط الإجابة مع التفسير العلمي الدقيق أسفلها.</p>,
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
  id: 'u3l3',
  title: 'أساسيات تكنولوجيا الواجهة الأمامية',
  subtitle: 'مراجعة الدرسين ١ و ٢ في نقاط · أدوار الثلاثي (HTML/CSS/JS) · HTML الدلالية · التصميم المتجاوب والأولوية للجوال · أطر العمل',
  sections: [
    /* =========================================================================
       Section 1: المقدمة وخريطة الرحلة
       ========================================================================= */
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },

    /* =========================================================================
       Section 2: مراجعة شاملة للدرس الأول والدرس الثاني في نقاط محددة
       ========================================================================= */
    {
      title: '١ · مراجعة الدرس الأول والدرس الثاني في نقاط',
      frames: [
        part1[0], // review-lesson1-points
        part1[1], // review-lesson2-points
        {
          id: 'review-points-demo',
          title: '🧪 مستكشف نقاط مراجعة الدرسين الأول والثاني',
          h: 840,
          notes: (
            <>
              <p><b>مستكشف مراجعة الدرسين ١ و ٢:</b> استعراض منظم لنقاط كل درس: تطبيق الويب، بنية الطبقات الثلاث، تدفق الطلب، نموذج العميل والخادم، بروتوكولات HTTP/HTTPS، طريقتي GET و POST، رموز الحالة، و JSON.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مراجعة مركزة في نقاط</Eyebrow>
              <Title>مستكشف نقاط مراجعة الدرسين الأول والثاني: البنية والاتصال</Title>
              <ReviewPointsDemo />
            </>
          ),
        },
        order('order-flow', 'رتّب خطوات تدفق الطلب في بنية الطبقات الثلاث', ORDERS.requestFlow),
        check('check-review', 'تأكد من استيعابك لنقاط مراجعة الدرسين الأول والثاني', CHECKS.reviewLessons1And2),
      ],
    },

    /* =========================================================================
       Section 3: أدوار الثلاثي الأساسي (HTML · CSS · JavaScript)
       ========================================================================= */
    {
      title: '٢ · أدوار الثلاثي الأساسي (HTML · CSS · JavaScript)',
      frames: [
        part2[0], // html-slide (أولاً: لغة HTML)
        part2[1], // css-slide (ثانياً: لغة CSS)
        part2[2], // js-slide (ثالثاً: لغة JavaScript)
        part2[3], // frontend-trio (خلاصة تكامل الثلاثي)
        {
          id: 'trio-lab',
          title: '🧪 مستكشف أدوار التقنيات والتشبيه الوزاري',
          h: 840,
          notes: (
            <>
              <p><b>مستكشف الثلاثي الأساسي:</b> افحص دور كل تقنية (البنية، المظهر، السلوك) ونموذجها البرمجي والتشبيه الوزاري المعتمد بالمبنى، والملحوظة الوزارية الهامة حول إمكانية استخدام HTML وحده أو مع CSS أو مع JS.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مقارنة منهجية واضحة</Eyebrow>
              <Title>أدوار الثلاثي الأساسي: الهيكل الخرساني، الديكور، والكهرباء والسباكة</Title>
              <FrontendTrioLabDemo />
            </>
          ),
        },
        check('check-trio', 'تأكد من فهمك لوظائف وأدوار لغات الواجهة الأمامية', CHECKS.trio),
      ],
    },

    /* =========================================================================
       Section 4: لغة HTML الدلالية وإمكانية الوصول و SEO
       ========================================================================= */
    {
      title: '٣ · لغة HTML الدلالية وإمكانية الوصول و SEO',
      frames: [
        part2[4], // semantic-html
        {
          id: 'semantic-builder',
          title: '🧪 محاكي بناء عناصر HTML الدلالية (Semantic Builder)',
          h: 900,
          notes: (
            <>
              <p><b>محاكي بناء عناصر HTML الدلالية:</b> يتيح للطلاب بناء صفحة ويب خطوة بخطوة باستخدام وسوم HTML الدلالية الرسمية (header, nav, main, aside, footer).</p>
              <p>جرّب التبديل بين البناء الدلالي والبناء بصناديق div العادية، وشاهد الكود المولد فورياً واستمع إلى محاكاة قارئ الشاشة لذوي الإعاقة البصرية.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 محاكاة بناء تفاعلية</Eyebrow>
              <Title>محاكي بناء عناصر HTML الدلالية (Semantic Elements Builder)</Title>
              <SemanticElementBuilderDemo />
            </>
          ),
        },
        {
          id: 'semantic-demo',
          title: '🧪 مقارنة HTML الدلالية وقارئ الشاشة ومحركات البحث',
          h: 840,
          notes: (
            <>
              <p><b>مقارنة لغة HTML الدلالية:</b> قارن بين الوسوم الدلالية (header, nav, main, footer) والصناديق العادية div، وشاهد كيف تساعد برامج قراءة الشاشة لذوي الإعاقة ومحركات البحث.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مقارنة بصرية وتطبيقية</Eyebrow>
              <Title>لغة HTML الدلالية: وضوح المعنى لقارئ الشاشة وفهرسة محركات البحث</Title>
              <SemanticHtmlComparisonDemo />
            </>
          ),
        },
        check('check-semantic', 'تأكد من فهمك لـ HTML الدلالية وإمكانية الوصول', CHECKS.semanticAndA11y),
      ],
    },

    /* =========================================================================
       Section 5: التصميم المتجاوب وأطر العمل
       ========================================================================= */
    {
      title: '٤ · التصميم المتجاوب وأطر العمل (Frameworks)',
      frames: [
        part3[0], // responsive-and-mobile-first
        {
          id: 'responsive-demo',
          title: '🧪 محاكي التصميم المتجاوب ونهج الأولوية للجوال',
          h: 820,
          notes: (
            <>
              <p><b>محاكي التصميم المتجاوب:</b> بدّل بين شاشة الهاتف وشاشة الكمبيوتر وشاهد كيف يتكيف التخطيط تلقائياً مع حجم الشاشة، وتعرف على نهج الأولوية للجوال (Mobile-first).</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة التكيف البصري</Eyebrow>
              <Title>محاكي التكيف مع الشاشات ونهج الأولوية للجوال (Mobile-first)</Title>
              <ResponsiveMobileFirstDemo />
            </>
          ),
        },
        part3[1], // frameworks-and-components
        order('order-layers', 'رتّب خطوات بناء الواجهة الأمامية الحديثة', ORDERS.frontendLayers),
        check('check-responsive', 'تأكد من فهمك للتصميم المتجاوب وأطر العمل', CHECKS.responsiveAndFrameworks),
      ],
    },

    /* =========================================================================
       Section 6: المعجم الوزاري والتقييم وبنك أسئلة الامتحانات
       ========================================================================= */
    {
      title: '٥ · المعجم الوزاري والتقييم النهائي',
      frames: [
        {
          id: 'textbook-definitions',
          title: '📖 معجم تعريفات كتاب المدرسة وكتاب الفائز المعتمدة',
          h: 860,
          notes: (
            <>
              <p><b>معجم تعريفات كتاب المدرسة وكتاب الفائز:</b> النصوص والتعريفات الوزارية الرسمية المقررة لدرس أساسيات تكنولوجيا الواجهة الأمامية.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة المعتمد</Eyebrow>
              <Title>معجم مصطلحات ومفاهيم الواجهة الأمامية في البكالوريا 2027</Title>
              <TextbookGlossaryU3L3 />
            </>
          ),
        },
        part3[2], // concept-map-u3l3
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
          h: 1100,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٢</Eyebrow>
              <ScoredQuiz title="فرّق بين المصطلحات والمفاهيم الأساسية للامتحان" items={DIFF} />
            </>
          ),
        },
        {
          id: 'applied',
          title: 'أسئلة تطبيقية من كتاب المدرسة والفائز',
          h: 960,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٣</Eyebrow>
              <Title>فكّر وجاوب، ثم اكشف الإجابة لتتأكد من فهمك</Title>
              <div className="grid grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
        part3[3], // ending-u3l3
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u3l3: LessonDef = {
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
