// Unit 3 Master Review — Built entirely from the core explanations and interactive labs of Lessons 1, 2, and 3
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, ScoredQuiz } from '../../kit/questions';
import { CHECKS, ORDERS, MEGA_QUIZ } from './data';

// -----------------------------------------------------------------------------
// Lesson 1 Core Explanation Scenes, Demos & Activities
// -----------------------------------------------------------------------------
import { part2 as l1_p2, part4 as l1_p4, part5 as l1_p5 } from '../u3l1/scenes2';
import { part7 as l1_p7 } from '../u3l1/scenes3';
import { SearchDemo } from '../u3l1/demos';
import { ApiStatesDemo } from '../u3l1/apiStatesDemo';

// -----------------------------------------------------------------------------
// Lesson 2 Core Explanation Scenes, Demos & Activities
// -----------------------------------------------------------------------------
import { intro as l2_intro, part1 as l2_p1 } from '../u3l2/scenes1';
import { part2 as l2_p2, part3 as l2_p3 } from '../u3l2/scenes2';
import { part4 as l2_p4 } from '../u3l2/scenes3';
import {
  ApiRestaurantDemo,
  GetInteractiveDemo,
  HttpVsHttpsDemo,
  PostInteractiveDemo,
  StatusCodesExplorer,
} from '../u3l2/demos';

// -----------------------------------------------------------------------------
// Lesson 3 Core Explanation Scenes, Demos & Activities
// -----------------------------------------------------------------------------
import { part2 as l3_p2 } from '../u3l3/scenes2';
import { part3 as l3_p3 } from '../u3l3/scenes3';
import {
  FrontendTrioLabDemo,
  ResponsiveMobileFirstDemo,
  SemanticHtmlComparisonDemo,
} from '../u3l3/demos';
import { reviewLesson1Points, reviewLesson2Points } from './scenes3';

// Review cover
import { intro as rev_intro } from './scenes1';

/** Helper to ensure all frame IDs remain 100% unique without collisions across lessons */
const wrap = (p: string, f: FrameDef): FrameDef => {
  if (!f || !f.id) {
    throw new Error(`Invalid frame passed to wrap with prefix: ${p}`);
  }
  return {
    ...f,
    id: `rev-${p}-${f.id}`,
  };
};

const check = (id: string, title: string, items: typeof CHECKS[string], h?: number): FrameDef => ({
  id,
  title: `✋ ${title}`,
  h,
  notes: <p>اسأل الطلاب أولاً واترك لهم فرصة التفكير والمناقشة، ثم اضغط الخيار لإظهار التفسير العلمي الدقيق والتعليل النموذجي.</p>,
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

export const u3rev: LessonDef = {
  id: 'u3rev',
  title: 'مراجعة شاملة على الفصل الثالث (الويب)',
  subtitle: 'الصف الثاني الثانوي (بكالوريا) · مراجعة مجمعة من شرح الدروس الأول والثاني والثالث',
  sections: [
    /* =========================================================================
       Section 1: شرح الدرس الأول (تطور ومعمارية تطبيقات الويب والطبقات الثلاث)
       ========================================================================= */
    {
      title: '١ · شرح الدرس الأول: معمارية الويب والـ Backend والـ DB',
      frames: [
        rev_intro[0], // Cover frame
        wrap('l1', l1_p2[1]), // lifecycle (رحلة الطلب والرد)
        wrap('l1', l1_p4[0]), // db-def (قاعدة البيانات: Database)
        wrap('l1', l1_p4[1]), // files-vs-db (ملفات ولا قاعدة بيانات؟)
        wrap('l1', l1_p5[0]), // backend-def (الـ Backend: المخ اللي على السيرفر)
        wrap('l1', l1_p5[1]), // static-vs-dynamic (الموقع الثابت مقابل التفاعلي)
        wrap('l1', l1_p7[1]), // reload-problem (مشكلة التحميل الكامل)
        wrap('l1', l1_p7[2]), // async-steps (طلب في الخلفية)
        {
          id: 'rev-l1-search-demo',
          title: '🧪 جرّب: بوابة نتائج الطلاب ومحاكاة السيرفر (كتاب المدرسة ص 118)',
          h: 840,
          notes: (
            <>
              <p><b>معمل بوابة نتائج الطلاب:</b> موقع نتائج حقيقي مصغر يجسد خطوات كتاب المدرسة صفحة 118 بالتفصيل.</p>
              <p>ابحث برقم جلوس مثل (2402) أو باسم مثل (سارة) أو (مريم) وشاهد الخطوات التي ينفذها السيرفر: استلام الطلب ➔ استعلام قاعدة البيانات ➔ ملء القالب ➔ إرجاع صفحة HTML متكاملة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك · تطبيق كتاب الوزارة ص 118</Eyebrow>
              <Title>ابحث عن طالب… وشوف السيرفر وقاعدة البيانات بيعملوا إيه</Title>
              <SearchDemo />
            </>
          ),
        },
        {
          id: 'rev-l1-api-states-demo',
          title: '🧪 جرّب: حالات الـ API (Idle • Loading • Success • Error)',
          h: 880,
          notes: (
            <>
              <p><b>حالات الـ API في تطبيقات الويب:</b> أي طلب يمر بدورة حياة من ٤ حالات أساسية (Idle, Loading, Success, Error).</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك · حالات الـ API</Eyebrow>
              <Title>حالات الـ API: شوف الطلب بيعدّي بإيه في المتصفح والشبكة</Title>
              <ApiStatesDemo />
            </>
          ),
        },
        check('check-l1', 'مراجعة مفاهيم الدرس الأول (المعمارية، الطبقات، والباك إند)', CHECKS.lesson1),
        order('order-search-flow', 'رتّب خطوات البحث في المتجر الإلكتروني (كتاب المدرسة ص 118)', ORDERS.searchFlow118),
      ],
    },

    /* =========================================================================
       Section 2: شرح الدرس الثاني (طرق الاتصال في تطبيقات الويب)
       ========================================================================= */
    {
      title: '٢ · شرح الدرس الثاني: بروتوكولات الاتصال (HTTP / HTTPS / GET / POST / Status Codes / JSON)',
      frames: [
        wrap('l2', l2_intro[2]), // client-server-model (نموذج العميل والخادم)
        wrap('l2', l2_p1[0]), // http-problem (مشكلة النقل غير المشفر بـ HTTP)
        wrap('l2', l2_p1[1]), // https-solution (حل التشفير بـ HTTPS)
        {
          id: 'rev-l2-https-demo',
          title: '🧪 جرّب: كشف التنصت والتشفير (HTTP مقابل HTTPS)',
          h: 880,
          notes: (
            <>
              <p><b>محاكي الأمان:</b> اكتب كلمة مرور وجرب إرسالها بـ HTTP العادي وشاهد المتنصت (Sniffer) وهو يقرأها مباشرة في هجوم الوسيط (Man-in-the-Middle).</p>
              <p>ثم حوّل لـ HTTPS المشفر وشاهد التشفير التام بـ TLS/SSL وعلامة القفل الأخضر!</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك · HTTP مقابل HTTPS</Eyebrow>
              <Title>محاكي التنصت على الشبكة: قارن بين النص المكشوف والتشفير</Title>
              <HttpVsHttpsDemo />
            </>
          ),
        },
        wrap('l2', l2_p2[0]), // methods-why (أساليب طلب البيانات: GET و POST)
        wrap('l2', l2_p2[1]), // methods-compare (المقارنة بين GET و POST)
        {
          id: 'rev-l2-get-demo',
          title: '🧪 جرّب: استرجاع البيانات وقراءتها بأسلوب GET (Idempotent)',
          h: 880,
          notes: (
            <>
              <p><b>محاكي GET التفاعلي:</b> ابحث عن أي طالب بالاسم أو الرقم ولاحظ استرجاع بيانات الطلاب الحقيقية من السيرفر فوراً دون تعديل في قاعدة البيانات.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية · طريقة GET</Eyebrow>
              <Title>استرجاع وقراءة البيانات بـ GET: جلب نتائج الطلاب المطابقة من الخادم</Title>
              <GetInteractiveDemo />
            </>
          ),
        },
        {
          id: 'rev-l2-post-demo',
          title: '🧪 جرّب: إرسال وتخزين البيانات بأسلوب POST',
          h: 880,
          notes: (
            <>
              <p><b>محاكي POST التفاعلي:</b> املأ بيانات طالب جديد مع رقمه السري وقم بإرساله إلى الخادم لمعالجتها وتخزينها.</p>
              <p>لاحظ إخفاء البيانات داخل جسم الطلب (Request Body) وعدم ظهورها في شريط العنوان لحماية سريتها، مع رد النجاح 200 OK.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية · طريقة POST</Eyebrow>
              <Title>إرسال وحفظ البيانات بـ POST: تخزين طالب جديد في السيرفر وتحديث قاعدة البيانات</Title>
              <PostInteractiveDemo />
            </>
          ),
        },
        wrap('l2', l2_p3[0]), // status-families (رموز حالة الخادم 200, 404, 500)
        wrap('l2', l2_p3[1]), // codes-compare (مقارنة رموز الحالة)
        {
          id: 'rev-l2-status-demo',
          title: '🧪 جرّب: مستكشف رموز حالة الخادم (200, 404, 500)',
          h: 860,
          notes: (
            <>
              <p><b>مستكشف رموز الحالة:</b> اضغط على الرموز المقررة في المنهج (200 OK، 404 Not Found، 500 Server Error) وشوف دلالتها وشكل الرد وحزمة الـ JSON المستلمة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك · رموز استجابة الخادم</Eyebrow>
              <Title>مستكشف رموز الحالة المقررة في المنهج: 200 و 404 و 500</Title>
              <StatusCodesExplorer />
            </>
          ),
        },
        wrap('l2', l2_p4[0]), // api-where-data (الموقع بيجيب البيانات منين؟ رحلة الـ API)
        wrap('l2', l2_p4[1]), // api-restaurant (تشبيه المطعم: يعني إيه API؟)
        wrap('l2', l2_p4[2]), // json-what-is (البيانات بترجع إزاي؟ هنا ييجي JSON)
        {
          id: 'rev-l2-restaurant-demo',
          title: '🧪 جرّب: محاكي تشبيه المطعم والـ API وصيغة JSON',
          h: 880,
          notes: (
            <>
              <p><b>محاكي تشبيه المطعم والـ API وصيغة JSON:</b> الزبون في الصالة هو Frontend، والجرسون هو الـ API، والمطبخ والمخزن هو Backend و Database.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية · تشبيه المطعم والـ API</Eyebrow>
              <Title>محاكي رحلة البيانات: من طلب الزبون إلى استلام حزمة الـ JSON المنظمة</Title>
              <ApiRestaurantDemo />
            </>
          ),
        },
        check('check-l2', 'مراجعة مفاهيم الدرس الثاني (HTTP و GET و POST و JSON)', CHECKS.lesson2),
        order('order-web-cycle', 'رتّب دورة الاتصال المتكاملة من ضغطة الزر حتى استجابة الـ DOM', ORDERS.fullWebCycle),
      ],
    },

    /* =========================================================================
       Section 3: شرح الدرس الثالث (أساسيات تكنولوجيا الواجهة الأمامية)
       ========================================================================= */
    {
      title: '٣ · شرح الدرس الثالث: الواجهة الأمامية (HTML / CSS / JS / DOM / Responsive / Security)',
      frames: [
        wrap('l3', l3_p2[0]), // html-slide (أولاً: لغة HTML البنية)
        wrap('l3', l3_p2[1]), // css-slide (ثانياً: لغة CSS المظهر)
        wrap('l3', l3_p2[2]), // js-slide (ثالثاً: لغة JavaScript السلوك)
        wrap('l3', l3_p2[3]), // frontend-trio (خلاصة تكامل الثلاثي الأساسي)
        {
          id: 'rev-l3-trio-lab',
          title: '🧪 جرّب: مختبر أدوار التقنيات والتشبيه الوزاري بالمبنى',
          h: 840,
          notes: (
            <>
              <p><b>مستكشف الثلاثي الأساسي:</b> افحص دور كل تقنية (الهيكل الخرساني 🧱، المظهر والديكور 🎨، السلوك والكهرباء ⚡) والتشبيه الوزاري المعتمد بالمبنى.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مقارنة منهجية واضحة · HTML • CSS • JavaScript</Eyebrow>
              <Title>أدوار الثلاثي الأساسي: الهيكل الخرساني، الديكور، والكهرباء والسباكة</Title>
              <FrontendTrioLabDemo />
            </>
          ),
        },
        wrap('l3', l3_p2[4]), // semantic-html (لغة HTML الدلالية وإمكانية الوصول و SEO)
        {
          id: 'rev-l3-semantic-demo',
          title: '🧪 جرّب: مقارنة HTML الدلالية وقارئ الشاشة ومحركات البحث',
          h: 840,
          notes: (
            <>
              <p><b>مقارنة لغة HTML الدلالية:</b> قارن بين الوسوم الدلالية (header, nav, main, aside, footer) والصناديق العادية div، وشاهد كيف تساعد برامج قراءة الشاشة لذوي الإعاقة ومحركات البحث.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مقارنة بصرية وتطبيقية · Semantic HTML</Eyebrow>
              <Title>لغة HTML الدلالية: وضوح المعنى لقارئ الشاشة وفهرسة محركات البحث</Title>
              <SemanticHtmlComparisonDemo />
            </>
          ),
        },
        wrap('l3', l3_p3[0]), // responsive-and-mobile-first (التصميم المتجاوب واستراتيجية Mobile-First)
        {
          id: 'rev-l3-responsive-demo',
          title: '🧪 جرّب: محاكي التصميم المتجاوب واستراتيجية «الجوال أولاً»',
          h: 860,
          notes: (
            <>
              <p><b>محاكي التصميم المتجاوب:</b> شاهد كيف يتوسع التصميم تلقائياً من شاشة الهاتف إلى شاشة الحاسوب المكتبي عبر Media Queries دون الحاجة لإعادة كتابة الموقع.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 محاكاة تفاعلية · استراتيجية Mobile-First</Eyebrow>
              <Title>محاكي شاشتي الهاتف والديسكتوب والتوسع عبر استعلامات الوسائط Media Queries</Title>
              <ResponsiveMobileFirstDemo />
            </>
          ),
        },
        wrap('l3', l3_p3[1]), // frameworks-and-components (أطر العمل الحديثة والمكونات)
        check('check-l3', 'مراجعة مفاهيم الدرس الثالث (الـ DOM والأطر والأمان)', CHECKS.lesson3),
        order('order-dom-render', 'رتّب مراحل معالجة المتصفح للمستند ورسم الـ DOM على الشاشة', ORDERS.domRenderCycle),
      ],
    },

    /* =========================================================================
       Section 4: نقاط مراجعة الدرسين الأول والثاني وماراثون الامتحانات
       ========================================================================= */
    {
      title: '٤ · نقاط المراجعة المركزة وماراثون الامتحانات الشامل',
      frames: [
        reviewLesson1Points, // review-lesson1-points (نقاط مراجعة الدرس الأول المعتمدة في المنهج)
        reviewLesson2Points, // review-lesson2-points (نقاط مراجعة الدرس الثاني المعتمدة في المنهج)
        {
          id: 'mega-quiz-frame',
          title: '🏆 ماراثون أسئلة الوحدة الثالثة الشامل',
          h: 920,
          notes: (
            <>
              <p><b>ماراثون الامتحانات الشامل:</b></p>
              <p>يضم أكثر من 20 سؤالاً وزارياً شاملاً لجميع دروس الوحدة الثالثة مع نظام رصد الدرجات التلقائي، وإعادة المحاولة، والتعليلات العلمية المعتمدة.</p>
            </>
          ),
          render: () => (
            <div className="card p-6">
              <ScoredQuiz
                title="🏆 ماراثون أسئلة امتحانات الوحدة الثالثة: الويب (بكالوريا 2027)"
                items={MEGA_QUIZ}
              />
            </div>
          ),
        },
      ],
    },
  ],
};
