// Unit 6 · Lesson 7 — Image Digitization (Grade 1 Secondary)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, QUIZ } from './data';
import {
  ColorMixingLab,
  DigitizationWorkflowLab,
  DpiResolutionLab,
  ImageSizeCalculatorDemo,
  PixelMatrixInteractiveDemo,
  RasterVsVectorLab,
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
  id: 'u6l7',
  title: 'رقمنة الصور',
  subtitle: 'الصف الأول الثانوي · الوحدة السادسة · الدرس السابع',
  sections: [
    {
      title: 'المقدمة ومفهوم البكسل',
      frames: [
        ...intro,
        part1[0], // what-is-digitization
        part1[2], // pixel-definition (١ · البكسل ومصفوفة الصورة)
        {
          id: 'demo-pixel-matrix',
          title: '🧪 معمل تفاعلي: مستكشف البكسل وتجربة تكبير الموبايل',
          h: 840,
          notes: (
            <>
              <p><b>معمل مستكشف البكسل والمصفوفة:</b></p>
              <p>يتيح للطلاب تجربة:</p>
              <ol>
                <li><b>مصفوفة البكسلات:</b> تجربة مصفوفة (4 أعمدة × 3 صفوف = 12 بكسل) والتلوين التفاعلي فيها، ثم التبديل لمصفوفات 48 و 192 بكسل لملاحظة كيف تزداد التفاصيل.</li>
                <li><b>محاكي تكبير الموبايل:</b> سحب شريط التكبير لرؤية المربعات الصغيرة (Pixels) تظهر وتتفكك أمام أعينهم!</li>
              </ol>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مستكشف مصفوفة البكسل (صفوف × أعمدة) ومحاكي تكبير الموبايل</Title>
              <PixelMatrixInteractiveDemo />
            </>
          ),
        },
        part1[1], // rose-example (مثال بسيط: رحلة صورة الوردة 🌹)
      ],
    },
    {
      title: '١ · خطوات وإجراءات رقمنة الصور الثلاث والمعمل',
      frames: [
        part1[3], // how-image-becomes-pixels (طيب الصورة بتتحول لبكسلات إزاي؟)
        part1[4], // sampling-step1 (الخطوة الأولى: أخذ العينات Sampling)
        part1[5], // sampling-brightness (إزاي بنستخرج مستوى السطوع؟)
        part1[6], // sampling-example-2x2 (مثال بسيط جدًا: شبكة 2×2 بكسل)
        part1[7], // sampling-stage (الدقة Resolution ووحدة القياس dpi)
        {
          id: 'demo-dpi-resolution',
          title: '🧪 معمل تفاعلي: مستكشف الدقة (dpi) وعلاقة البوصة بالبكسل وحسابات المنهج المعتمد ص 130',
          h: 900,
          notes: (
            <>
              <p><b>معمل مستكشف الدقة والبوصة وحسابات المنهج المعتمد (ص 130 و 132):</b></p>
              <p>يتيح للطلاب تجربة بصرية تفاعلية شاملة:</p>
              <ol>
                <li><b>مسطرة البوصة الفيزيائية (1 Inch = 2.54 سم):</b> مقارنة حية لتوزيع النقاط في بوصة مربعة واحدة بين 72 dpi و 150 dpi و 300 dpi و 1200 dpi (طابعات الليزر من المنهج المعتمد ص 130).</li>
                <li><b>مجهر فحص الببغاء 🦜:</b> فحص تكسر وتعرجات البكسل في 72 dpi مقابل النعومة الفائقة للمنحنيات في 300 و 1200 dpi مع شريط التكبير.</li>
                <li><b>حاسبة الدقة وحجم الملف ص 130 وص 132:</b> تغيير أبعاد الصورة بالبوصة ورؤية حساب أبعاد البكسل (أفقي × رأسي) وحجم الملف بالبايت والميجابايت تلقائياً!</li>
              </ol>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مستكشف الدقة (dpi) وعلاقة البوصة بالبكسل وحسابات المنهج المعتمد ص 130</Title>
              <DpiResolutionLab />
            </>
          ),
        },
        part2[0], // quantization-stage (التقدير الرقمي / التكميم Quantization والتدرج)
        part2[1], // encoding-stage (الترميز Encoding ومصفوفة البايت)
        part2[2], // flow-summary-slide (ملخص خطوات رقمنة الصور الثلاث)
        {
          id: 'demo-digitization-workflow',
          title: '🧪 معمل: محاكي مراحل الرقمنة الثلاث (المعاينة، التكميم، الترميز)',
          h: 880,
          notes: (
            <>
              <p><b>معمل خطوات الرقمنة التفاعلي:</b></p>
              <p>اجعل الطلاب يجربون التنقل بين المراحل الثلاث:</p>
              <ol>
                <li><b>المعاينة:</b> تجربة تغيير دقة شبكة البكسلات (4×4، 8×8، 16×16) وملاحظة كيف تتقسم الصورة إلى مربعات.</li>
                <li><b>التكميم:</b> تغيير عمق البت من 1-bit إلى 8-bit وملاحظة تأثير زيادة التدرج اللوني على نعومة الأشكال.</li>
                <li><b>الترميز:</b> تحريك الفأرة فوق أي بكسل لمعاينة كوده الثنائي (0 و 1) ومصفوفة البايتات الناتجة طبقاً لتمرين ص 91 بكتاب الوزارة!</li>
              </ol>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>محاكي خطوات رقمنة الصور الثلاث (Sampling · Quantization · Encoding)</Title>
              <DigitizationWorkflowLab />
            </>
          ),
        },
        order('order-stages', 'رتّب خطوات رقمنة الصور الثلاث المعتمدة في كتاب الوزارة', ORDERS.digitizationStages),
        order('order-rose-journey', 'رتّب رحلة رقمنة الوردة من الكاميرا حتى التخزين بالذاكرة', ORDERS.roseJourney),
        check('check-intro', 'المفاهيم التأسيسية لرقمنة الصور والبكسل', CHECKS.intro),
        check('check-stages', 'خطوات ومراحل رقمنة الصور (كتاب الوزارة ص 88 و 91)', CHECKS.stages),
      ],
    },
    {
      title: '٢ · قوانين ومسائل حساب حجم بيانات الصور',
      frames: [
        part3[2], // size-calculation-laws
        {
          id: 'demo-size-calc',
          title: '🧪 معمل: حاسبة حجم بيانات الصور وحل مسائل كتاب الوزارة',
          h: 880,
          notes: (
            <>
              <p><b>حاسبة حجم الصور وتكلفة الذاكرة:</b></p>
              <p>اختر من القائمة المنسدلة أي مسألة من مسائل كتاب الوزارة (ص 89، ص 90، ص 91) لمشاهدة الحل النموذجي خطوة بخطوة بالبت، البايت، الكيلوبايت، والميجابايت مع التبديل بين أساس 1000 المعتمد في الوزارة وأساس 1024 الأكاديمي.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>حاسبة حجم بيانات الصور وحل مسائل كتاب الوزارة المعتمدة</Title>
              <ImageSizeCalculatorDemo />
            </>
          ),
        },
        order('order-size-steps', 'رتّب خطوات حل مسائل حساب حجم الصور التخزيني بالامتحان', ORDERS.sizeCalcSteps),
        check('check-data-size', 'مسائل حساب حجم بيانات الصور (كتاب الوزارة ص 89 - 91)', CHECKS.dataSize),
      ],
    },
    {
      title: '٣ · النقطي (Raster) مقابل المتجهات (Vector) والمجهر',
      frames: [
        part2[3], // raster-vs-vector
        {
          id: 'demo-raster-vs-vector',
          title: '🧪 معمل المجهر: فحص التعرجات (Jaggies) في النقطي مقابل نقاء المتجهات',
          h: 820,
          notes: (
            <>
              <p><b>معمل المجهر التفاعلي للمقارنة بين الصيغتين:</b></p>
              <p>اجعل الطلاب يزيدون قوة التكبير (Zoom) حتى 16x (1600%):</p>
              <ul>
                <li>في الجانب الأيسر (Raster / Photoshop): يشاهد الطلاب فوراً ظهور <b>التعرجات (Jaggies)</b> وتكسر الحواف لمربعات بكسل واضحة.</li>
                <li>في الجانب الأيمن (Vector / Illustrator): يشاهد الطلاب كيف تظل المنحنيات والأشكال حادة ونقية بنسبة 100% لأنها معادلات رياضية لا تتأثر بالتكبير!</li>
              </ul>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>مجهر المقارنة: التنسيق النقطي (Photoshop) مقابل المتجهات (Illustrator)</Title>
              <RasterVsVectorLab />
            </>
          ),
        },
        check('check-raster-vector', 'التنسيق النقطي، المتجهات، وظاهرة التعرجات', CHECKS.rasterVsVector),
      ],
    },
    {
      title: '٤ · أنظمة تمثيل الألوان: الجمعي (الضوء) مقابل الطرحي (الصبغة)',
      frames: [
        part3[0], // color-representation
        part3[1], // full-color-24bit
        {
          id: 'demo-color-mixing',
          title: '🧪 استوديو خلط الألوان: مزج الضوء الجمعي (RGB) والصبغة الطرحي (CMY)',
          h: 840,
          notes: (
            <>
              <p><b>معمل استوديو خلط الألوان:</b></p>
              <p>يتيح للطلاب تجربة نوعي المزج العملي المقرريْن:</p>
              <ul>
                <li><b>المزج الجمعي (RGB):</b> تحريك سلايدرز الأحمر والأخضر والأزرق، وملاحظة كيف تزداد الإضاءة عند التقاء الأشعة الضوئية لإنتاج الأبيض وكود الـ 24-bit.</li>
                <li><b>المزج الطرحي (CMY):</b> تجربة ألوان أحبار الطابعات (سماوي، أرجواني، أصفر)، وملاحظة كيف تمتزج الصبغات لتعتم وتنتج اللون الأسود.</li>
              </ul>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>استوديو خلط الألوان: ألوان الضوء والشاشات (RGB) مقابل صبغات الطباعة (CMY)</Title>
              <ColorMixingLab />
            </>
          ),
        },
        check('check-colors', 'أنظمة تمثيل الألوان والألوان الكاملة 24-Bit', CHECKS.colors),
      ],
    },
    {
      title: '٥ · الملخص وبنك الأسئلة الشامل',
      frames: [
        part3[3], // summary-board
        {
          id: 'quiz-comprehensive',
          title: '🏆 تحدي المنهج المعتمد والوزارة الشامل (رقمنة الصور)',
          h: 920,
          notes: (
            <>
              <p><b>بنك الأسئلة الشامل:</b></p>
              <p>يحتوي على كافة أسئلة الاختيار من متعدد، وتحدَّ معلوماتك، وجرّب بنفسك، وتدريبات المنهج المعتمد من الكتابين على درس رقمنة الصور.</p>
              <p>يمنح الطالب تقييماً فورياً ودرجة نهائية مع زر لإعادة الاختبار.</p>
            </>
          ),
          render: () => (
            <div className="card p-6">
              <ScoredQuiz
                title="🏆 تحدي أسئلة كتاب الوزارة ودليل المنهج المعتمد (رقمنة الصور)"
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
export const u6l7: LessonDef = {
  ...baseLesson,
  sections: baseLesson.sections.map(sec => ({
    ...sec,
    frames: sec.frames.map(f => ({
      ...f,
      script: SCRIPT[f.id] ?? f.script,
    })),
  })),
};

