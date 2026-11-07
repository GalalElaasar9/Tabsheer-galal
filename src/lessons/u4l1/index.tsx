// Unit 4 · Lesson 1 — Media Types & Characteristics
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import {
  AudioVideoAttributesLabDemo,
  MediaFormatExplorerDemo,
  TextbookGlossaryU4L1,
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
  id: 'u4l1',
  title: 'أنواع الوسائط وخصائصها',
  subtitle: 'النصوص · الصور النقطية والمتجهة · الصوت والفيديو الرقمي · خوارزميات الضغط والوسوم',
  sections: [
    {
      title: 'المقدمة وخريطة الرحلة',
      frames: [...intro],
    },
    {
      title: '١ · عناصر الوسائط والصور (Raster vs Vector)',
      frames: [
        part1[0], // media-types-overview
        part1[1], // raster-vs-vector
        {
          id: 'media-explorer',
          title: '🧪 مستكشف الصيغ: مقارنة JPEG و PNG و WebP و SVG',
          h: 880,
          notes: (
            <>
              <p><b>مستكشف صيغ الصور:</b> بدّل بين الصيغ ولاحظ أثر معامل الضغط على الحجم وسرعة التحميل وجودة التفاصيل.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية</Eyebrow>
              <Title>مستكشف صيغ الصور والوسائط: الموازنة بين جودة العرض وسرعة التحميل</Title>
              <MediaFormatExplorerDemo />
            </>
          ),
        },
        check('check-images', 'تأكد من فهمك للصور النقطية والمتجهة وصيغ الويب', CHECKS.images),
      ],
    },
    {
      title: '٢ · خوارزميات الضغط وخصائص الصوت والفيديو',
      frames: [
        part2[0], // compression-lossy-vs-lossless
        part2[1], // audio-digitalization
        {
          id: 'audio-video-lab',
          title: '🧪 مختبر الفيديو والصوت: خصائص HTML5 واستهلاك الباقة',
          h: 860,
          notes: (
            <>
              <p><b>مختبر الفيديو والصوت:</b> اختبر خصائص وسم video واطلع على استهلاك البيانات لكل دقة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 مختبر الوسائط</Eyebrow>
              <Title>مشغل الفيديو والصوت الرقمي: خصائص HTML5 ومعدلات نقل البيانات</Title>
              <AudioVideoAttributesLabDemo />
            </>
          ),
        },
        order('order-raster', 'رتّب خطوات تحضير وضغط الصور للعرض في الويب', ORDERS.rasterOptimization),
        check('check-audio-video', 'تأكد من استيعابك لخوارزميات الضغط والصوت والفيديو', CHECKS.audioVideo),
      ],
    },
    {
      title: '٣ · وسوم HTML5 والمعجم والتقييم النهائي',
      frames: [
        part3[0], // html5-media-tags
        {
          id: 'textbook-definitions',
          title: '📖 معجم مصطلحات كتاب الوزارة المعتمدة للوسائط',
          h: 840,
          notes: (
            <>
              <p><b>معجم المصطلحات المعتمدة:</b> التعريفات الرسمية المقررة في المنهج لدرس أنواع الوسائط.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة المعتمد</Eyebrow>
              <Title>معجم مصطلحات ومفاهيم الوسائط المتعددة المقررة في البكالوريا</Title>
              <TextbookGlossaryU4L1 />
            </>
          ),
        },
        part3[1], // concept-map-u4l1
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
          h: 1150,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٢</Eyebrow>
              <ScoredQuiz title="فرّق بين المفاهيم الأساسية للامتحان" items={DIFF} />
            </>
          ),
        },
        {
          id: 'applied',
          title: 'أسئلة تطبيقية من الحياة',
          h: 960,
          render: () => (
            <>
              <Eyebrow>📝 التقييم · ٣</Eyebrow>
              <Title>فكّر وجاوب، ثم اكشف الإجابة لتتأكد</Title>
              <div className="grid grid-cols-2 gap-3 mt-4 items-start">
                {APPLIED.map(([q, a]) => <RevealCard key={q} q={q} a={a} />)}
              </div>
            </>
          ),
        },
        part3[2], // ending-u4l1
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u4l1: LessonDef = {
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

