// Board scenes · Unit 4 · Lesson 1 · Part 2: Website Strengths (5) & Limitations (3)
import type { FrameDef } from '../../board/types';
import { LessonSceneShell } from './common';
import {
  StrengthsVsLimitationsInteractive,
  WebsiteLimitationsInteractive,
  WebsiteStrengthsInteractive,
} from './demos';

export const part2: FrameDef[] = [
  {
    id: 'website-strengths',
    title: 'أولاً: نقاط القوة في المواقع الإلكترونية (٥ نقاط)',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: نقاط القوة (Strengths) — ٥ نقاط أساسية:</b></p>
        <ol>
          <li><b>الجمع بين معلومات متنوعة:</b> نصوص وصور وفيديوهات معاً في موقع تعليمي.</li>
          <li><b>تحديث المعلومات في أي وقت:</b> تعديل موعد امتحان مباشرة أسهل من إعادة طباعة آلاف الجداول الورقية.</li>
          <li><b>الوصول من أي مكان يتوفر فيه اتصال مناسب:</b> طالب في القاهرة يدخل موقع مدرسته وهو مسافر بالإسكندرية.</li>
          <li><b>إمكانية التفاعل ثنائي الاتجاه:</b> التعليقات، نماذج التواصل، نماذج التسجيل، إرسال الاستفسارات.</li>
          <li><b>الاستخدام من المتصفح (Chrome / Edge) وإمكانية التثبيت لبعض تطبيقات الويب.</b></li>
        </ol>
      </>
    ),
    render: () => (
      <LessonSceneShell
        color="green"
        title="أولاً: نقاط القوة في المواقع الإلكترونية (Strengths) 💪"
        sub="الخمس مميزات التي تجعل الموقع الإلكتروني وسيلة قوية ومنظمة"
      >
        <WebsiteStrengthsInteractive />
      </LessonSceneShell>
    ),
  },

  {
    id: 'website-limitations',
    title: 'ثانياً: قيود المواقع الإلكترونية (٣ نقاط)',
    scene: true,
    notes: (
      <>
        <p><b>ثانياً: قيود المواقع الإلكترونية (Limitations) — ٣ نقاط أساسية:</b></p>
        <ol>
          <li><b>تحتاج معظم وظائف المواقع إلى اتصال بالشبكة</b> (مع ملحوظة: قد تُصمم بعض تطبيقات الويب لتوفير محتوى أو وظائف محدودة دون اتصال).</li>
          <li><b>غالباً يحتاج المستخدم إلى فتح الموقع للوصول إلى محتواه</b> (إلا لو استخدمت الخدمة إشعارات أو وسائل أخرى لإبلاغه).</li>
          <li><b>قد تختلف سرعة العرض والتحميل حسب جهاز المستخدم وبيئة الشبكة</b> (نوع الجهاز، إمكانياته، سرعة الإنترنت، وحجم المحتوى).</li>
        </ol>
      </>
    ),
    render: () => (
      <LessonSceneShell
        color="red"
        title="ثانياً: قيود المواقع الإلكترونية (Limitations) 🚧"
        sub="التحديات الثلاثة: الاتصال بالشبكة، الحاجة لفتح الموقع، واختلاف سرعة التحميل"
      >
        <WebsiteLimitationsInteractive />
      </LessonSceneShell>
    ),
  },

  {
    id: 'strengths-vs-limitations',
    title: 'مقارنة نقاط القوة والقيود وتصنيفها',
    scene: true,
    notes: (
      <>
        <p><b>مقارنة شاملة:</b> ٥ نقاط قوة للموقع الإلكتروني مقابل ٣ قيود، مع تدريب تصنيف تفاعلي سريع.</p>
      </>
    ),
    render: () => (
      <LessonSceneShell
        color="yellow"
        title="مقارنة نقاط القوة والقيود للمواقع الإلكترونية ⚖️"
        sub="جدول المقارنة المعتمد + نشاط تصنيف تفاعلي للتمييز بين القوة والقيد"
      >
        <StrengthsVsLimitationsInteractive />
      </LessonSceneShell>
    ),
  },
];
