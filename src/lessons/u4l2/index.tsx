// Unit 4 · Lesson 2 — Information Design & Website UX (Faez Textbook 2027)
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList } from '../../kit/questions';
import { CHECKS, ORDERS } from './data';
import {
  CrapPrinciplesLab,
  PersonaExplorerLab,
  SchoolParentUxLab,
  WireframeStudioLab,
} from './demos';
import { intro, personaIntroFrames } from './scenes1';
import { crapDetailFrames, wireframeFrames } from './scenes2';
import { accessibilityDetailFrame, ucdDetailFrames, usabilityDetailFrames } from './scenes3';
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
  id: 'u4l2',
  title: 'تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية',
  subtitle: 'فلسفة UCD · شخصية المستخدم Persona · المخطط الهيكلي Wireframe · مبادئ CRAP · سهولة الوصول a11y',
  sections: [
    {
      title: 'المقدمة والربط وقصة موقع المدرسة',
      frames: [
        intro[0], // cover
        intro[1], // journey
        intro[2], // bridge-and-story (فكرة الدرس والربط بالدرس الأول)
        {
          id: 'demo-school-parent-ux',
          title: '🧪 محاكي تجربة ولي الأمر في موقع المدرسة (فوضوي vs منظم)',
          h: 880,
          notes: (
            <>
              <p><b>محاكي تجربة ولي الأمر في موقع المدرسة:</b></p>
              <p>بدّل بين الموقع الفوضوي والموقع المنظم المنفذ بهندسة معلومات وتجربة مستخدم (UX):</p>
              <ul>
                <li><b>الموقع الفوضوي:</b> ولي الأمر مشتت بين إعلانات الرحلات والكانتين والأزرار العشوائية، ويستغرق وقتاً طويلاً للوصول لدرجات ابنه.</li>
                <li><b>الموقع المنظم:</b> قسم أولياء الأمور واضح وزر الدرجات بارز بتسلسل هرمي، فيصل للنتيجة في ثانيتين!</li>
              </ul>
              <p><b>القاعدة الذهبية:</b> «المشكلة هنا مش في المعلومات نفسها، لكن في طريقة تنظيمها وعرضها للمستخدم!»</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 محاكاة تفاعلية</Eyebrow>
              <Title>محاكي تجربة المستخدم: كيف يحول التنظيم الموقع من فوضى مشتتة إلى سهولة وراحة؟</Title>
              <SchoolParentUxLab />
            </>
          ),
        },
        intro[3], // six-core-concepts (خريطة المفاهيم الستة المقررة)
      ],
    },
    {
      title: '١ · المفهوم الأول: شخصية المستخدم (User Persona)',
      frames: [
        personaIntroFrames[0], // persona-concept-intro (أولاً: ما هي شخصية المستخدم ومثال موقع المدرسة)
        personaIntroFrames[1], // persona-parent-case-study (دراسة حالة عملية: بطاقة شخصية ولي الأمر)
        personaIntroFrames[2], // persona-design-impact (تطبيق عملي: أثر شخصية المستخدم في التصميم - قبل وبعد)
        personaIntroFrames[3], // persona-golden-rules (القواعد الذهبية الخمس لشخصية المستخدم مع الهوية البصرية 1-5)
        {
          id: 'demo-persona-builder',
          title: '🧪 تفاعل بصري: مستكشف شخصية المستخدم (User Persona)',
          h: 920,
          notes: (
            <>
              <p><b>معمل تفاعلي لشخصية المستخدم (User Persona):</b></p>
              <p>تفاعل مع المفهوم الأول من المفاهيم الستة: استكشف شخصيات المستخدمين الثلاثة وعناصرها الأربعة (الديموغرافيا، الأهداف، الاحتياجات، نقاط الألم)، وافحص سؤال الامتحان الحاسم حول سرعة الخادم، وشاهد الترجمة المباشرة لواجهة الموقع!</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تفاعل بصري · المفهوم الأول</Eyebrow>
              <Title>مستكشف شخصية المستخدم (User Persona): كيف تحول صفات الزائر إلى واجهة ناجحة؟</Title>
              <PersonaExplorerLab />
            </>
          ),
        },
        check('check-persona', 'مكونات شخصية المستخدم وسؤال أداء الخادم', CHECKS.personaConcepts),
      ],
    },
    {
      title: '٢ · المفهوم الثاني: المخطط الهيكلي (Wireframe)',
      frames: [
        wireframeFrames[0], // wireframe-concept-intro (ثانياً: المخطط الهيكلي وتشبيه البناء)
        wireframeFrames[1], // wireframe-student-results-case (تطبيق عملي: مخطط صفحة نتائج الطلاب)
        wireframeFrames[2], // wireframe-why-before-design (لماذا نعمل Wireframe قبل التصميم والأسئلة الأربعة)
        wireframeFrames[3], // wireframe-vs-final-design (الفرق بين Wireframe والتصميم النهائي وجدول المقارنة)
        {
          id: 'demo-wireframe-studio',
          title: '🧪 استوديو المخطط الهيكلي والتصميم النهائي (Wireframe Studio)',
          h: 890,
          notes: (
            <>
              <p><b>استوديو المخطط الهيكلي (Wireframe vs Final UI):</b></p>
              <p>بدّل بين وضع المسودة المعمارية (Wireframe) بالأبيض والأسود، ووضع التصميم البصري النهائي (Final UI) الملون لمتجر الخضار.</p>
              <p>ناقش مع الطلاب سؤال المنهج المعتمد: لماذا يمنع استخدام الألوان والخطوط في مرحلة الـ Wireframe؟</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 معمل تفاعلي</Eyebrow>
              <Title>استوديو المخطط الهيكلي: من المسودة المعمارية الرمادية إلى الواجهة الملونة</Title>
              <WireframeStudioLab />
            </>
          ),
        },
        check('check-wireframe', 'المخطط الهيكلي وسؤال علل للأبيض والأسود', CHECKS.wireframeConcepts),
      ],
    },
    {
      title: '٣ · المفهوم الثالث: مبادئ التصميم البصري (CRAP)',
      frames: [
        crapDetailFrames[0], // crap-concept-intro (ما هي مبادئ CRAP الأربعة)
        crapDetailFrames[1], // crap-contrast-slide (المبدأ الأول: التباين Contrast)
        crapDetailFrames[2], // crap-repetition-slide (المبدأ الثاني: التكرار Repetition)
        crapDetailFrames[3], // crap-alignment-slide (المبدأ الثالث: المحاذاة Alignment)
        crapDetailFrames[4], // crap-proximity-slide (المبدأ الرابع: التقارب Proximity)
        crapDetailFrames[5], // crap-synthesis-slide (ربط المبادئ الأربعة وتنبيه الوصول الشامل)
        {
          id: 'demo-crap-inspector',
          title: '🧪 مختبر فحص مبادئ CRAP على بطاقة المنتج (المنهج المعتمد)',
          h: 900,
          notes: (
            <>
              <p><b>مختبر مبادئ التصميم البصري الأربعة (CRAP Principles Lab):</b></p>
              <p>جرّب تشغيل وإيقاف كل مبدأ بمفرده على بطاقة الفراولة ولاحظ:</p>
              <ul>
                <li><b>C - التباين:</b> وضوح زر الشراء مقابل بهتانه واختفائه.</li>
                <li><b>R - التكرار:</b> وحدة الهوية البصرية مقابل الفوضى العشوائية للخطوط والحواف.</li>
                <li><b>A - المحاذاة:</b> استقامة المحاذاة الشبكية لليمين مقابل التعرج والتشتت.</li>
                <li><b>P - التقارب:</b> ترابط عناصر المنتج الواحد معاً مقابل تباعدها في الصفحة.</li>
              </ul>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مختبر تفاعلي</Eyebrow>
              <Title>مختبر فحص مبادئ CRAP: تحكم بمبادئ التباين والتكرار والمحاذاة والتقارب حياً</Title>
              <CrapPrinciplesLab />
            </>
          ),
        },
        check('check-crap', 'مبادئ التصميم البصري الأربعة (CRAP Principles)', CHECKS.crapConcepts),
        order('order-crap-matching', 'طابق كل عنصر في بطاقة المنتج مع مبدأ CRAP المناسب له', ORDERS.crapMatching),
        order('order-page-steps', 'رتّب خطوات بناء وتطوير صفحات موقع الويب من الفكرة حتى النشر', ORDERS.pageCreationSteps),
      ],
    },
    {
      title: '٤ · المفهوم الرابع: التصميم المتمحور حول المستخدم (UCD)',
      frames: [
        ucdDetailFrames[0], // ucd-concept-intro (ما هو التصميم المتمحور حول المستخدم والأسئلة الخمسة)
        ucdDetailFrames[1], // ucd-parent-results-case (دراسة حالة موقع نتائج المدرسة وجدول القرارات)
        ucdDetailFrames[2], // ucd-5-stages-cycle (دورة مراحل تطبيق UCD الخمسة وأدواتها)
        ucdDetailFrames[3], // ucd-testing-iteration (أهمية الاختبار والتحسين ودورة حل المشكلات)
        ucdDetailFrames[4], // ucd-vs-designer-opinion (الفرق بين رأي المصمم والتصميم المتمحور حول المستخدم)
        check('check-ucd', 'فلسفة التصميم المتمحور حول المستخدم وموقع نتائج المدرسة', CHECKS.ucdConcepts),
        order('order-ucd-flow', 'رتّب مراحل دورة التصميم المتمحور حول المستخدم الخمسة', ORDERS.ucdWorkflow),
      ],
    },
    {
      title: '٥ · المفهوم الخامس: قابلية الاستخدام (Usability)',
      frames: [
        usabilityDetailFrames[0], // usability-concept-intro (يعني إيه قابلية الاستخدام؟ مع مثال)
      ],
    },
    {
      title: '٦ · المفهوم السادس: إمكانية الوصول الرقمي (Accessibility - a11y)',
      frames: [
        accessibilityDetailFrame, // accessibility-interactive (يعني إيه إمكانية الوصول الرقمي؟ مع مثال)
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l2: LessonDef = {
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
