// Unit 3 · Lesson 3 — Front-end Technology Fundamentals
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  FrontendTrioLabDemo,
  ResponsiveMobileFirstDemo,
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
  subtitle: 'أدوار الثلاثي (HTML/CSS/JS) · تكامل البنية والمظهر والسلوك · HTML الدلالية · التصميم المتجاوب والأولوية للجوال · أطر العمل (React, Vue, Next)',
  sections: [
    /* =========================================================================
       Section 1: المقدمة وخريطة الرحلة
       ========================================================================= */
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },

    /* =========================================================================
       Section 2: ١ · أدوار الثلاثي الأساسي وتكاملهم والتشبيه بالمبنى
       ========================================================================= */
    {
      title: '١ · أدوار الثلاثي الأساسي وتكاملهم (HTML · CSS · JavaScript)',
      frames: [
        part2[0], // html-slide (أولاً: لغة HTML للبنية والهيكل والتشبيه بالمبنى)
        part2[1], // css-slide (ثانياً: لغة CSS للمظهر والتنسيق والتشبيه بالديكور)
        part2[2], // js-slide (ثالثاً: لغة JavaScript للسلوك والتفاعل والتشبيه بالكهرباء والسباكة)
        part1[4], // trio-layers (نفس الفورم… ٣ طبقات متكاملة: بنية + مظهر + سلوك)
        part2[3], // frontend-trio (خلاصة تكامل الثلاثي: مقارنة الأعمدة يمين ⬅️ يسار والملحوظة الوزارية)
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
        check('check-langs', 'HTML ولا CSS ولا JavaScript؟', CHECKS.langs, 820),
        check('check-trio', 'تأكد من فهمك لأدوار لغات الواجهة الأمامية والتشبيه الوزاري', CHECKS.trio),
      ],
    },

    /* =========================================================================
       Section 3: ٢ · لغة HTML الدلالية (Semantic HTML) وإمكانية الوصول و SEO
       ========================================================================= */
    {
      title: '٢ · لغة HTML الدلالية (Semantic HTML) وإمكانية الوصول و SEO',
      frames: [
        part2[4], // semantic-html (لغة HTML الدلالية: header, nav, main, aside, footer)
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
        check('check-semantic', 'تأكد من فهمك لـ HTML الدلالية وإمكانية الوصول و SEO', CHECKS.semanticAndA11y),
      ],
    },

    /* =========================================================================
       Section 4: ٣ · التصميم المتجاوب (Responsive Design) ونهج الأولوية للجوال
       ========================================================================= */
    {
      title: '٣ · التصميم المتجاوب (Responsive Design) ونهج الأولوية للجوال',
      frames: [
        part3[0], // responsive-and-mobile-first (التصميم المتجاوب ونهج الأولوية للجوال)
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
        check('check-responsive', 'تأكد من فهمك للتصميم المتجاوب ونهج الأولوية للجوال', CHECKS.responsiveAndFrameworks),
      ],
    },

    /* =========================================================================
       Section 5: ٤ · أطر العمل (Frameworks) والمكتبات لتطوير الويب
       ========================================================================= */
    {
      title: '٤ · أطر العمل (Frameworks) والمكتبات لتطوير الويب',
      frames: [
        part3[1], // frameworks-and-components (أطر العمل والمكتبات: React · Vue · Next وتشبيه البيت 🏠)
        order('order-layers', 'رتّب خطوات بناء الواجهة الأمامية الحديثة', ORDERS.frontendLayers),
        check('check-frameworks', 'تأكد من فهمك لأطر العمل والمكتبات المقررة', CHECKS.js),
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
