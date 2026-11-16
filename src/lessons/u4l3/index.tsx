// Unit 4 · Lesson 3 — Website Evaluation Methods
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { QuestionList } from '../../kit/questions';
import { CHECKS } from './data';
import {
  AbTestingSimulatorDemo,
  UsabilityTestingInterviewLab,
} from './demos';
import { intro, part1 } from './scenes1';
import { part2 } from './scenes2';
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

const lesson: LessonDef = {
  id: 'u4l3',
  title: 'أساليب تقييم المواقع الإلكترونية',
  subtitle: 'اختبارات قابلية الاستخدام · مبادئ نيلسن للاستكشاف · التحليلات الرقمية · اختبارات A/B · مؤشرات الأداء',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · فكرة التقييم، التقييم النوعي، والتقييم الكمي والمقارنة الشاملة',
      frames: [
        part1[0], // school-website-case (Slide 3: فكرة الدرس وموقف عملي لموقع المدرسة)
        part1[1], // qualitative-eval-concept (Slide 4: تعريف الكتاب أولاً ثم الشرح والمثال العملي)
        part1[2], // usability-testing-method (Slide 5: طرق التقييم النوعي (1): اختبار قابلية الاستخدام)
        part1[3], // interviews-method (Slide 6: طرق التقييم النوعي (2): أسلوب المقابلات الشخصية)
        part1[4], // quantitative-eval-concept (Slide 7: التقييم الكمي ومثال موقع المدرسة بالأرقام)
        part1[5], // web-analytics-method (Slide 8: تحليلات الويب ومؤشراتها ومثال المتجر)
        part1[6], // ab-testing-method (Slide 9: اختبار A/B ومخطط التقسيم وتجربة زري الشراء)
        part1[7], // qual-vs-quant-comparison (Slide 10: المقارنة الشاملة وتطبيقات التقييم خارج المواقع)
        {
          id: 'demo-usability-interview',
          title: '🧪 معمل: محاكي اختبار قابلية الاستخدام ومقابلة الطالب (Usability & Interview Lab)',
          h: 760,
          notes: (
            <>
              <p><b>معمل اختبار قابلية الاستخدام والمقابلات:</b></p>
              <p>دع الطلاب يجربون مهمة «البحث عن نتيجة الطالب أحمد» بين الواجهة (أ) المربكة والواجهة (ب) المباشرة.</p>
              <p>اضغط زر «عرض مقابلة الطالب» لمشاهدة كيف يكشف كلام الطالب عيب زر تحميل النتيجة ويساعد المصمم في تطوير الواجهة فوراً.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة تقييم نوعي حية</Eyebrow>
              <Title>محاكي اختبار الاستخدام وسيناريو المقابلة الشخصية (Student Result Usability & Interview)</Title>
              <UsabilityTestingInterviewLab />
            </>
          ),
        },
        check('check-eval-basics', 'تأكد من استيعابك للمفاهيم الأساسية للتقييم النوعي والكمي', CHECKS.evalBasics),
      ],
    },
    {
      title: '٢ · طرق التقييم الكمي: تحليلات الويب واختبارات A/B',
      frames: [
        part2[0], // analytics-concept (Slide 13: مفهوم تحليلات الويب وثلاثية الوصول والتفاعل والنتائج ومثال المتجر)
        part2[1], // metric-pv (Slide 14: مؤشر مشاهدات الصفحة PV واختصار Page Views والفرق الجوهري)
        part2[2], // metric-bounce-rate-concept (Slide 15: أولاً: مفهوم معدل الارتداد ومثال الموقع التعليمي)
        part2[3], // metric-bounce-rate-tools (Slide 16: ثانيًا: اختلاف طريقة الحساب بين الأدوات ومعايير GA4)
        part2[4], // metric-bounce-rate-causes (Slide 17: ثالثًا: رصد ضعف التفاعل والتمييز بين 404 ووجد ما يبحث عنه)
        part2[5], // metric-bounce-rate-interpretation (Slide 18: رابعًا: جدول المؤشرات الأربعة ومثال المتجر الشامل)
        part2[6], // metric-bounce-rate-summary (Slide 19: خامسًا: اختصار الفكرة وشجرة القرار المنهجية)
        part2[7], // metric-cvr-concept (Slide 20: أولاً: مفهوم CVR وأمثلة الأهداف)
        part2[8], // metric-cvr-meaning (Slide 21: ثانيًا: معنى كلمة تحويل ونوعا الزوار والتنبيه على إتمام التسجيل)
        part2[9], // metric-cvr-math (Slide 22: ثالثًا: شرح مثال الكتاب الحسابي والتصور البصري للشريط)
        part2[10], // metric-cvr-users-vs-sessions (Slide 23: الفرق الجوهري بين إجمالي المستخدمين وإجمالي الجلسات)
        part2[11], // metric-cvr-denominator (Slide 24: رابعًا: تحديد المقام وطريقة الحساب ومقارنة المستخدمين مقابل الجلسات)
        {
          id: 'ab-testing-simulator',
          title: '🧪 محاكي اختبارات A/B: قياس معدل التحويل والارتداد',
          h: 880,
          notes: (
            <>
              <p><b>محاكي اختبارات A/B:</b> قارن بين النسخة A والنسخة B وشاهد تفوق النسخة المحسنة في خفض معدل الارتداد ومضاعفة المشتركين.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة إحصائية علمية</Eyebrow>
              <Title>محاكي اختبارات A/B: المقارنة الرقمية الحاسمة بين خيارات التصميم</Title>
              <AbTestingSimulatorDemo />
            </>
          ),
        },
        check('check-analytics', 'تأكد من فهمك لمؤشرات تحليلات الويب واختبارات A/B', CHECKS.analytics),
      ],
    },
    {
      title: '٣ · التقييم الإرشادي (مراجعة الخبراء)',
      frames: [
        part2[12], // heuristic-concept-ui (Slide 27: التقييم الإرشادي: المفهوم وتفكيك واجهة المستخدم)
        part2[13], // heuristic-qualitative-nature (Slide 28: التقييم الإرشادي: لماذا يعد نوعياً والتكامل مع اختبار الاستخدام)
        part2[14], // heuristic-rule-consistency (Slide 29: التقييم الإرشادي: القاعدة 1 الاتساق وتوحيد التصميم)
        part2[15], // heuristic-rule-error-prevention (Slide 30: التقييم الإرشادي: القاعدة 2 منع الأخطاء ونموذج إدخال العمر)
        part2[16], // heuristic-rule-system-status (Slide 31: التقييم الإرشادي: القاعدة 3 وضوح حالة النظام وأمثلتها)
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l3: LessonDef = {
  ...lesson,
  sections: lesson.sections.map(sec => ({
    ...sec,
    frames: sec.frames.filter(Boolean).map(f => {
      const tag = TAG[f.id];
      return {
        ...f,
        script: SCRIPT[f.id] ?? f.script,
        render: tag ? () => <>{f.render()}<Tag kind={tag} /></> : f.render,
      };
    }),
  })),
};
