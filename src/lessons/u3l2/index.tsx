// Unit 3 · Lesson 2 — Communication Methods in Web Applications
import type { FrameDef, LessonDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { OrderActivity, QuestionList, RevealCard, ScoredQuiz } from '../../kit/questions';
import { APPLIED, CHECKS, DIFF, ORDERS, QUIZ } from './data';
import { GetInteractiveDemo, HttpVsHttpsDemo, PostInteractiveDemo, StatusCodesExplorer, TextbookGlossary } from './demos';
import { intro, part1 } from './scenes1';
import { part2, part3 } from './scenes2';
import { part4, part6 } from './scenes3';
import { SCRIPT, TAG } from './script';
import { Tag } from '../../sketch/Sketch';

const check = (id: string, title: string, items: typeof CHECKS[string], h?: number): FrameDef => ({
  id,
  title: `✋ ${title}`,
  h,
  notes: <p>اسأل الطلاب الأول وخلّيهم يفكروا، وبعدين اضغط الإجابة مع التفسير العلمي المكتوب أسفلها.</p>,
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
  notes: <p>خلّي طالب يرتّب الخطوات بالضغط عليها. الخطوة غير المتطابقة تهتز لتصحيح المسار.</p>,
  render: () => (
    <>
      <Eyebrow>✋ تأكد من فهمك</Eyebrow>
      <Title>{title}</Title>
      <div className="mt-4"><OrderActivity {...o} /></div>
    </>
  ),
});

const lesson: LessonDef = {
  id: 'u3l2',
  title: 'طرق الاتصال في تطبيقات الويب',
  subtitle: 'الفصل الثالث · الدرس الثاني',
  sections: [
    {
      title: 'المقدمة والنموذج',
      frames: [
        ...intro,
        check('check-clientserver', 'فهم نموذج العميل والخادم', CHECKS.clientServer),
        order('order-http-cycle', 'رتّب دورة الطلب والاستجابة (Request & Response)', ORDERS.httpCycle),
      ],
    },
    {
      title: '١ · الأمان: HTTP مقابل HTTPS',
      frames: [
        ...part1,
        {
          id: 'https-demo',
          title: '🧪 جرّب: كشف التنصت والتشفير',
          h: 880,
          notes: (
            <>
              <p><b>محاكي الأمان:</b> خلّي طالب يكتب كلمة سر ويجرب إرسالها بـ HTTP العادي ويشوف المتنصت وهو بيقرأها في الـ Sniffer.</p>
              <p>بعدين يحول لـ HTTPS ويلاحظ التشفير وظهور القفل الأخضر وفشل المتنصت في قراءة أي شيء!</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>محاكي التنصت على الشبكة: HTTP مقابل HTTPS</Title>
              <HttpVsHttpsDemo />
            </>
          ),
        },
        order('order-tls', 'رتّب خطوات مصافحة الأمان (TLS Handshake)', ORDERS.tlsHandshake),
        check('check-protocols', 'تأكد من فهم بروتوكولات الأمان', CHECKS.protocols),
      ],
    },
    {
      title: '٢ · أساليب الطلب: GET مقابل POST',
      frames: [
        ...part2,
        {
          id: 'get-interactive-demo',
          title: '🧪 جرّب: استرجاع البيانات وقراءتها بأسلوب GET',
          h: 880,
          notes: (
            <>
              <p><b>محاكي GET التفاعلي:</b> ابحث عن أي طالب بالاسم أو الرقم ولاحظ استرجاع بيانات الطلاب الحقيقية المطابقة من السيرفر فوراً دون تعديل.</p>
              <p>افحص شكل حزمة الـ GET في مراقب الشبكة لمعاينة طلب القراءة والاسترجاع الآمن.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية</Eyebrow>
              <Title>استرجاع وقراءة البيانات بـ GET: جلب نتائج الطلاب المطابقة من الخادم</Title>
              <GetInteractiveDemo />
            </>
          ),
        },
        {
          id: 'post-interactive-demo',
          title: '🧪 جرّب: إرسال وتخزين البيانات بـ POST',
          h: 880,
          notes: (
            <>
              <p><b>محاكي POST التفاعلي:</b> املأ بيانات طالب جديد مع رقمه السري وقم بإرساله إلى الخادم لمعالجتها وتخزينها.</p>
              <p>لاحظ كيف يستقبل الخادم بيانات الطالب الجديدة ويقوم بتسجيلها وحفظها فعلياً في جدول السيرفر مع رد النجاح 200 OK.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 تجربة عملية حية</Eyebrow>
              <Title>إرسال وحفظ البيانات بـ POST: تخزين طالب جديد في السيرفر وتحديث قاعدة البيانات</Title>
              <PostInteractiveDemo />
            </>
          ),
        },
        check('check-methods', 'فرّق بين أسلوبي GET و POST', CHECKS.methods),
      ],
    },
    {
      title: '٣ · رموز حالة الخادم (200, 404, 500)',
      frames: [
        ...part3,
        {
          id: 'status-codes-demo',
          title: '🧪 جرّب: مستكشف رموز الحالة (200, 404, 500)',
          h: 860,
          notes: (
            <>
              <p><b>مستكشف رموز الحالة:</b> اضغط على الرموز المقررة في المنهج (200 OK، 404 Not Found، 500 Server Error) وشوف دلالتها وشكل الرد في الواجهة وحزمة الـ JSON العائدة.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
              <Title>مستكشف رموز الحالة المقررة في المنهج</Title>
              <StatusCodesExplorer />
            </>
          ),
        },
        check('check-status', 'تأكد من دلالات رموز الحالة', CHECKS.statusCodes),
      ],
    },
    {
      title: '٤ · واجهات البرمجة وصيغة JSON',
      frames: [
        ...part4,
        order('order-api-flow', 'رتّب مسار طلب الـ API', ORDERS.restApiFlow),
        check('check-json', 'تأكد من فهم صيغة JSON والـ API', CHECKS.jsonApi),
      ],
    },
    {
      title: '٥ · الخلاصة والتقييم',
      frames: [
        part6[0],
        {
          id: 'textbook-glossary-interactive',
          title: '📖 معجم التعريفات التفاعلي',
          h: 980,
          notes: (
            <>
              <p><b>معجم تعريفات كتاب المدرسة:</b> مرجع شامل لكل تعريفات الدرس الثاني المقررة وزارياً في البكالوريا.</p>
              <p>يمكن للطالب تصفية المصطلحات حسب الموضوع، أو البحث السريع بالاسم أو النص، مع إبراز تريكات الامتحان الوزاري وإمكانية نسخ نص التعريف.</p>
            </>
          ),
          render: () => (
            <>
              <Eyebrow>📖 كتاب المدرسة الوزاري المعتمد</Eyebrow>
              <Title>قاموس مصطلحات وتعريفات طرق الاتصال في تطبيقات الويب</Title>
              <TextbookGlossary />
            </>
          ),
        },
        part6[1],
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
              <ScoredQuiz title="فرّق بين المصطلحات الأساسية للامتحان" items={DIFF} />
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
        part6[2],
      ],
    },
  ],
};

/** Attach each frame's narration script and story tag */
export const u3l2: LessonDef = {
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
