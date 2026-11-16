// Unit 6 · Lesson 9 — Information & Data Design (Grade 1 Secondary)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, QUIZ } from './data';
import {
  AccessibilityLab,
  AffordanceSignifierLab,
  DataComparisonLab,
  HierarchyLab,
  LatchInteractiveLab,
  PictogramVsIconLab,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
import { part3 } from './scenes3';
import { part4 } from './scenes4';
import { part5 } from './scenes5';
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
  id: 'u6l9',
  title: 'تصميم البيانات والمعلومات',
  subtitle: 'الصف الأول الثانوي · الوحدة السادسة · الدرس التاسع',
  sections: [
    {
      title: 'المقدمة والمفاهيم التأسيسية',
      frames: [
        ...intro,
        part1[0], // data-concept
        part1[1], // info-design-definition
        part1[2], // three-goals
        part1[3], // students-100-example
        {
          id: 'demo-data-comparison',
          title: '🧪 معمل: مقارنة البيانات (قائمة خام مقابل رسم بياني مصمم)',
          h: 780,
          notes: (
            <>
              <p><b>معمل مقارنة البيانات التفاعلي:</b></p>
              <p>دع الطلاب يجربون البحث عن صاحب المركز الأول في القائمة النصية العشوائية المكونة من 100 طالب لملاحظة صعوبة الأمر.</p>
              <p>ثم انتقل إلى تبويب "الرسم البياني وتصور البيانات (Visualization)" واضغط زر "أظهر صاحب المركز الأول فوراً" لمشاهدة كيف يكشف التصميم البصري الأوائل في ثانية واحدة!</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مقارنة عملية: فوضى القوائم النصية مقابل قوة التصور البياني</Title>
              <DataComparisonLab />
            </>
          ),
        },
        check('check-intro', 'المفاهيم التأسيسية وأهداف تصميم البيانات', CHECKS.intro),
      ],
    },
    {
      title: '١ · طرق التصميم: التجريد، الرمز التصويري، والأيقونة',
      frames: [
        part2[0], // methods-hub
        part2[1], // method-abstraction
        part2[2], // method-pictogram
        part2[3], // method-icon
        {
          id: 'demo-pictogram-icon',
          title: '🧪 معمل: فرز وتحدي Pictogram مقابل Icon',
          h: 740,
          notes: (
            <>
              <p><b>معمل التمييز بين الرسم التصويري والأيقونة:</b></p>
              <p>اطلب من الطلاب تصنيف الرموز الحقيقية (ممنوع التدخين، سلة المهملات، مخرج الطوارئ، الكاميرا) لاكتشاف الفرق الجوهري بينهما.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>تحدي المختبر: هل هذا العنصر Pictogram أم Icon؟</Title>
              <PictogramVsIconLab />
            </>
          ),
        },
        check('check-methods-p1', 'التجريد والبكتوجرام والأيقونة', CHECKS.methodsPart1),
      ],
    },
    {
      title: '٢ · التصور والهيكلة وقصة الذاكرة الذهبية',
      frames: [
        part3[0], // method-visualization
        part3[1], // method-structuring
        {
          id: 'demo-hierarchy',
          title: '🧪 معمل: الهيكلة وتدرج المستويات والعلاقات',
          h: 760,
          notes: (
            <>
              <p><b>معمل الهيكلة ومستويات الشجرة:</b></p>
              <p>استعرض مع الطلاب العلاقات الهرمية في النظام المدرسي والإداري لتثبيت مفهوم الهيكلة كأهم نقطة في الدرس.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مستكشف الهيكلة: العلاقات والمستويات التنظيمية</Title>
              <HierarchyLab />
            </>
          ),
        },
        part3[2], // brain-mnemonic-story
        check('check-methods-p2', 'التصور والهيكلة وقصة التثبيت', CHECKS.methodsPart2),
        order('order-workflow', 'رتّب خطوات دورة حياة تصميم البيانات للنظام المدرسي', ORDERS.dataDesignWorkflow),
      ],
    },
    {
      title: '٣ · تقنيات التصميم لسهولة الفهم (صفحة ١٤٢)',
      frames: [
        part4[0], // ui-cui-gui
        part4[1], // ux-experience
        check('check-ui-ux', 'واجهات المستخدم وتجربة المستخدم (UI & UX)', CHECKS.uiUx),
        part4[2], // affordance-vs-signifier
        {
          id: 'demo-affordance-signifier',
          title: '🧪 معمل: لغز الباب وأزرار البحث (Affordance vs Signifier)',
          h: 760,
          notes: (
            <>
              <p><b>معمل الإمكانية والدالة التفاعلي:</b></p>
              <p>اطلب من الطلاب تجربة لغز الباب بمقبض بارز (يوحي بالسحب) ولوح أملس (يوحي بالدفع) لتثبيت مفهوم الـ Affordance.</p>
              <p>ثم انتقل لحقل البحث وجرب إخفاء رمز العدسة أو نص التوجيه لاكتشاف دور الـ Signifier في إرشاد المستخدم بدقة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مختبر لغز الباب: كيف نميز بين شكل العنصر والدالة الإرشادية؟</Title>
              <AffordanceSignifierLab />
            </>
          ),
        },
        part4[3], // usability-accessibility-universal
        {
          id: 'demo-accessibility',
          title: '🧪 معمل: إمكانية الوصول والتصميم الشامل (Accessibility & Universal)',
          h: 780,
          notes: (
            <>
              <p><b>معمل إمكانية الوصول والتصميم الشامل:</b></p>
              <p>اجعل الطلاب يجربون أدوات مساعدة ذوي الإعاقات: التباين العالي، تكبير النصوص، وقارئ الشاشة الصوتي.</p>
              <p>ثم جرب إزالة المنحدر المائل من مدخل المبنى لمشاهدة كيف يتحول التصميم من شامل إلى قاصر يعيق مستخدمي الكراسي المتحركة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مختبر التصميم الشامل وإمكانية الوصول لجميع فئات المجتمع</Title>
              <AccessibilityLab />
            </>
          ),
        },
        check('check-access', 'الإمكانية والدالة والتصميم الشامل', CHECKS.affordanceAccess),
        part4[4], // master-summary-table
      ],
    },
    {
      title: '٤ · مبدأ LATCH لتنظيم البيانات والمعلومات',
      frames: [
        part5[0], // latch-intro
        part5[1], // latch-location-alphabet
        part5[2], // latch-time-category
        part5[3], // latch-hierarchy
        {
          id: 'demo-latch-sorter',
          title: '🧪 معمل: تحدي مبدأ LATCH وتصنيف البيانات',
          h: 760,
          notes: (
            <>
              <p><b>معمل مبدأ LATCH التفاعلي:</b></p>
              <p>دع الطلاب يصنفون الأمثلة الواقعية (فروع المحافظات، كشف الطلاب، جدول الحصص، أقسام المكتبة، الهيكل الإداري) حسب أحرف LATCH وسؤالها الذهبي.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مختبر LATCH لتنظيم البيانات والمعلومات في خمس طرق عالمية</Title>
              <LatchInteractiveLab />
            </>
          ),
        },
        check('check-latch', 'مبدأ LATCH وأسئلته الذهبية', CHECKS.latch),
        part5[4], // latch-summary-table
        {
          id: 'mega-quiz',
          title: '🏆 تحدي المنهج المعتمد الشامل: ماراثون تصميم البيانات والواجهات',
          h: 840,
          notes: <p>اختبار شامل يحاكي أسئلة امتحانات تكنولوجيا المعلومات للصف الأول الثانوي مع النتيجة والتقييم الفوري والتفسير العلمي.</p>,
          render: () => (
            <>
              <Eyebrow>🏆 الماراثون النهائي</Eyebrow>
              <Title>تحدي المنهج المعتمد الشامل في درس تصميم البيانات والمعلومات</Title>
              <ScoredQuiz title="ماراثون أسئلة تصميم البيانات والواجهات" items={QUIZ} />
            </>
          ),
        },
      ],
    },
  ],
};

// Bind audio script narration
export const u6l9: LessonDef = {
  ...baseLesson,
  sections: baseLesson.sections.map(s => ({
    ...s,
    frames: s.frames.filter(Boolean).map(f => ({
      ...f,
      script: SCRIPT[f.id] || f.script,
    })),
  })),
};
