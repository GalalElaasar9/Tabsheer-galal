// Unit 6 · Lesson 3 — Digital Representation of Characters (Grade 1 Secondary)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, QUIZ } from './data';
import {
  AsciiExplorerDemo,
  CharacterCorruptionDemo,
  DataSizeCalculatorDemo,
  FontInspectorDemo,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
import { part3 } from './scenes3';
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
  id: 'u6l3',
  title: 'التمثيل الرقمي للأحرف',
  subtitle: 'الصف الأول الثانوي · الوحدة السادسة · الدرس الثالث',
  sections: [
    {
      title: 'المقدمة والمفاهيم التأسيسية',
      frames: [
        ...intro,
        ...part1.slice(0, 2),
        check('check-intro', 'المفاهيم التأسيسية لترميز الأحرف', CHECKS.intro),
        order('order-char-journey', 'رتّب رحلة الحرف من ضغطة المفتاح حتى ظهوره على الشاشة', ORDERS.charJourney),
        part1[2], // ascii overview
      ],
    },
    {
      title: '١ · نظام ASCII وجدول التحويل',
      frames: [
        part2[0], // ascii-anatomy
        {
          id: 'demo-ascii-lab',
          title: '🧪 معمل: مستكشف جدول ASCII ومفكك الشفرات',
          h: 880,
          notes: (
            <>
              <p><b>معمل جدول ASCII التفاعلي:</b></p>
              <p>اجعل الطلاب يجربون كتابة أسمائهم أو كلمات مثل (Hello, MILK, Love) لمشاهدة تحديد العمود الأكثر أهمية (MSB) والصف الأقل أهمية (LSB) فوراً في الجدول.</p>
              <p>انتقل إلى تبويب "فك شفرة الأكواد" لتجربة أكواد كتاب الوزارة مثل (4C 6F 76 65) ومشاهدة خروج كلمة Love تلقائياً مع شرح كل بايت.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مستكشف جدول ASCII ومترجم الأكواد السداسية</Title>
              <AsciiExplorerDemo />
            </>
          ),
        },
        part2[1], // hello-example-detailed
        part2[2], // milk-and-love-examples
        check('check-ascii', 'قراءة وتفكيك أكواد ASCII', CHECKS.ascii),
        check('check-decoding', 'فك شفرات Hello و MILK و Love', CHECKS.decoding),
        order('order-decode-hex', 'رتّب خطوات فك شفرة الكود الست عشري', ORDERS.decodeHex),
      ],
    },
    {
      title: '٢ · نظام يونيكود (Unicode) ولغات العالم',
      frames: [
        part2[3], // unicode-world-solution
        part2[4], // utf8-vs-utf16-comparison
        check('check-unicode', 'معيار Unicode و UTF-8 و UTF-16', CHECKS.unicode),
      ],
    },
    {
      title: '٣ · الترميز، فك الترميز، وتلف الأحرف',
      frames: [
        part3[0], // encoding-and-decoding
        part3[1], // character-corruption-explained
        {
          id: 'demo-corruption-lab',
          title: '🧪 معمل: محاكي تشوّه وتلف الأحرف (Mojibake)',
          h: 800,
          notes: (
            <>
              <p><b>تجربة واقعية لظاهرة تلف الأحرف (Character Corruption):</b></p>
              <p>دع الطالب يكتب نصاً عربياً، ثم يغير نظام فك الترميز ليصبح (Windows-1256 أو ISO-8859-1) مع نظام حفظ مختلف.</p>
              <p>سيشاهد الطلاب فوراً تحول النص العربي إلى رموز وطلاسم غريبة، وسيدركون علمياً لماذا تظهر هذه المشكلة في الواقع، وكيف نحلها بمطابقة الترميزين أو التوحيد على UTF-8.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>محاكي ظاهرة تلف وتشوّه الأحرف (Character Corruption)</Title>
              <CharacterCorruptionDemo />
            </>
          ),
        },
        check('check-encoding', 'الترميز وفك الترميز وتلف الأحرف', CHECKS.encodingVsFont),
      ],
    },
    {
      title: '٤ · الخط (Font) وحساب حجم البيانات',
      frames: [
        part3[2], // font-vs-code-concept
        {
          id: 'demo-font-lab',
          title: '🧪 معمل: فحص ومقارنة أنواع الخطوط الثلاثة',
          h: 800,
          notes: (
            <>
              <p><b>مختبر الخطوط:</b></p>
              <p>ركّز مع الطلاب على القاعدة الجوهرية المقررة: رمز الحرف في الذاكرة (Character Code) ثابت ولا يتغير (65 للحرف A)، بينما ملف الخط (Font) هو الذي يغير طريقة رسم الحرف وتفاصيله على الشاشة.</p>
              <p>قارن بين: Serif (الزوائد المضيئة باللون الأحمر)، Sans-serif (الأطراف المستقيمة النظيفة)، و Semi-cursive (المنحنيات اليدوية المتصلة).</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مختبر فحص الخطوط: Serif و Sans-serif و Semi-cursive</Title>
              <FontInspectorDemo />
            </>
          ),
        },
        part3[3], // data-size-calculation-rules
        {
          id: 'demo-size-calc',
          title: '🧪 معمل: حاسبة حجم النصوص وتكلفة التخزين',
          h: 780,
          notes: (
            <>
              <p><b>حاسبة حجم البيانات في الذاكرة:</b></p>
              <p>اطلب من طالب كتابة كلمة "Welcome" وملاحظة الناتج (7 بايت = 56 بت).</p>
              <p>ثم كتابة "Happy Birthday" وملاحظة كيف تُحسب المسافة كبايت مستقل (14 بايت = 112 بت).</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>حاسبة حجم النصوص وخلايا الذاكرة (Memory Bytes)</Title>
              <DataSizeCalculatorDemo />
            </>
          ),
        },
        check('check-data-size', 'مسائل حساب حجم البيانات', CHECKS.dataSize),
      ],
    },
    {
      title: '٥ · الملخص وبنك الأسئلة الشامل',
      frames: [
        part3[4], // lesson-summary-board
        {
          id: 'quiz-comprehensive',
          title: '🏆 تحدي الفائز والوزارة الشامل',
          h: 900,
          notes: (
            <>
              <p><b>بنك الأسئلة الشامل:</b></p>
              <p>يحتوي على كافة أسئلة الاختيار من متعدد، وتحدَّ معلوماتك، وجرّب بنفسك، وتدريبات الفائز من الكتابين.</p>
              <p>يتيح للطلاب خوض اختبار إلكتروني مصغر مع عداد درجات فوري وزر لإعادة الاختبار.</p>
            </>
          ),
          render: () => (
            <div className="card p-6">
              <ScoredQuiz
                title="🏆 تحدي أسئلة كتاب الوزارة ودليل الفائز (التمثيل الرقمي للأحرف)"
                items={QUIZ}
              />
            </div>
          ),
        },
      ],
    },
  ],
};

/** Attach each frame's narration script */
export const u6l3: LessonDef = {
  ...baseLesson,
  sections: baseLesson.sections.map(sec => ({
    ...sec,
    frames: sec.frames.map(f => ({
      ...f,
      script: SCRIPT[f.id] ?? f.script,
    })),
  })),
};
