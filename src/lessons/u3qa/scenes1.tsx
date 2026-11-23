import { useState } from 'react';
import type { FrameDef } from '../../board/types';
import { Eyebrow, Title } from '../../kit/blocks';
import { QAExplorer } from './qaExplorer';

// -----------------------------------------------------------------------------
// Frame 1: خريطة طريق وأسرار تقفيل درجات الأسئلة المقالية
// -----------------------------------------------------------------------------
export const intro: FrameDef = {
  id: 'qa-intro',
  title: '🗺️ استراتيجية إجابة الأسئلة المقالية',
  h: 820,
  notes: (
    <p>
      شجع الطلاب على قراءة استراتيجية الإجابة المقالية الذكية، وكيف ينظمون أفكارهم في ورقة الإجابة
      ليحصلوا على الدرجة النهائية دون رغي أو استطراد غير مفيد.
    </p>
  ),
  render: () => (
    <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto text-right font-sans" dir="rtl">
      <div>
        <Eyebrow>✍️ بنك الأسئلة المقالية · الصف الثاني الثانوي</Eyebrow>
        <Title>أسرار الإجابة النموذجية وضمان الدرجة النهائية 🎯</Title>
        <p className="text-sm text-[var(--muted)] mt-1 leading-relaxed">
          الأسئلة المقالية في منهج البرمجة والويب ليست حفظاً أعمى، بل تعتمد على الفهم الهندسي واستخدام
          المصطلحات الدقيقة وتوضيح الأسباب. إليك قواعد الإجابة الذكية:
        </p>
      </div>

      {/* 4 Pillars of a Perfect Model Answer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div className="card p-4 rounded-2xl border-2 border-[var(--primary)] bg-[var(--surface-2)] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[var(--primary)]/20 text-[var(--primary)] flex items-center justify-center font-black text-sm">
              ١
            </span>
            <h4 className="m-0 font-extrabold text-base text-[var(--primary)]">
              ابدأ بالتعريف الجوهري الصريح
            </h4>
          </div>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            المصحح يبحث عن الجملة المفتاحية في أول سطر (مثلاً: الـ API هو &quot;مجموعة من القواعد الواضحة...&quot;،
            والإنترنت هو &quot;البنية التحتية المادية العالمية...&quot;).
          </p>
        </div>

        <div className="card p-4 rounded-2xl border-2 border-[var(--safe)] bg-[var(--surface-2)] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-[var(--safe)]/20 text-[var(--safe)] flex items-center justify-center font-black text-sm">
              ٢
            </span>
            <h4 className="m-0 font-extrabold text-base text-[var(--safe)]">
              قسّم إجابتك لنقاط مرقمة وموجزة
            </h4>
          </div>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            ابتعد عن الفقرات الطويلة غير المرتبة؛ استخدم أرقاماً واضحة (١، ٢، ٣) لتسهيل رصد الدرجات لكل جزئية مطلوبة في السؤال.
          </p>
        </div>

        <div className="card p-4 rounded-2xl border-2 border-amber-500 bg-[var(--surface-2)] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-sm">
              ٣
            </span>
            <h4 className="m-0 font-extrabold text-base text-amber-300">
              اكتب المصطلحات الإنجليزية الأساسية
            </h4>
          </div>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            وجود مصطلحات مثل (TCP/IP, SSR, CSR, Semantic HTML, TLS Handshake, JSON) يمنح إجابتك طابعاً تخصصياً احترافياً يرفع ثقة المصحح في فهمك.
          </p>
        </div>

        <div className="card p-4 rounded-2xl border-2 border-blue-500 bg-[var(--surface-2)] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-sm">
              ٤
            </span>
            <h4 className="m-0 font-extrabold text-base text-blue-300">
              ادعم إجابتك بتشبيه أو مثال واقعي
            </h4>
          </div>
          <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium">
            استشهد بالتشبيهات الوزارية المعتمدة (تشبيه المطعم للـ API، تشبيه المبنى للثلاثي HTML/CSS/JS، وتشبيه المحل واليافطة للـ Host والدومين).
          </p>
        </div>
      </div>

      {/* Overview Cards of Unit 3 Parts */}
      <div className="card p-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-1)] flex flex-col gap-3">
        <h3 className="text-sm font-black text-[var(--text)] m-0 flex items-center gap-2">
          <span>📊</span>
          <span>توزيع الأسئلة الـ ٣٨ عبر دروس الوحدة الثالثة:</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
          <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="text-xl">🌐</div>
            <div className="text-xs font-black text-[var(--primary)] mt-1">الدرس الأول</div>
            <div className="text-base font-black text-[var(--text)]">١٣ سؤالاً</div>
            <div className="text-[10px] text-[var(--muted)]">تطور الويب و SSR/CSR</div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="text-xl">📡</div>
            <div className="text-xs font-black text-[var(--safe)] mt-1">الدرس الثاني</div>
            <div className="text-base font-black text-[var(--text)]">١١ سؤالاً</div>
            <div className="text-[10px] text-[var(--muted)]">الاتصال، HTTP و API</div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="text-xl">💻</div>
            <div className="text-xs font-black text-amber-300 mt-1">الدرس الثالث</div>
            <div className="text-base font-black text-[var(--text)]">١١ سؤالاً</div>
            <div className="text-[10px] text-[var(--muted)]">الواجهة الأمامية والأمان</div>
          </div>

          <div className="p-3 rounded-xl bg-[var(--surface-2)] border border-[var(--border)]">
            <div className="text-xl">🧩</div>
            <div className="text-xs font-black text-purple-300 mt-1">سيناريوهات ومقارنات</div>
            <div className="text-base font-black text-[var(--text)]">٣ أسئلة</div>
            <div className="text-[10px] text-[var(--muted)]">التكامل والجدول الذهبي</div>
          </div>
        </div>
      </div>
    </div>
  ),
};

// -----------------------------------------------------------------------------
// Frame 2: المستكشف التفاعلي الكامل للأسئلة المقالية (QAExplorer)
// -----------------------------------------------------------------------------
export const explorerFrame: FrameDef = {
  id: 'qa-explorer-frame',
  title: '🔍 المستكشف التفاعلي للأسئلة المقالية (38 سؤالاً)',
  h: 1200,
  notes: (
    <p>
      استخدم شريط البحث وفلاتر الدروس لاستعراض إجابة أي سؤال مقالي بالكامل، والاطلاع على أسلوب الطالب،
      التشبيه الذهني السريع، والكلمات المفتاحية التي يبحث عنها مصحح الامتحان.
    </p>
  ),
  render: () => <QAExplorer />,
};

// -----------------------------------------------------------------------------
// Frame 3: الجدول الذهبي الشامل لمقارنات الامتحان (المقارنات الحاسمة)
// -----------------------------------------------------------------------------
const COMPARISONS = [
  {
    t1: 'الإنترنت (Internet)',
    t2: 'الويب (WWW)',
    point: 'الإنترنت هو الشبكة المادية العالمية والبنية التحتية والكابلات (الأسفلت)، بينما الويب خدمة برمجية لتبادل الصفحات بروابط تعمل فوق الإنترنت (العربيات).',
    icon: '🌐',
  },
  {
    t1: 'صفحة ثابتة (Static)',
    t2: 'صفحة ديناميكية (Dynamic)',
    point: 'الثابتة محتوى HTML واحد جاهز ومسبق الصنع يراه الجميع، بينما الديناميكية تُولد وتُخصص لحظياً لكل مستخدم وفق قاعدة البيانات (Database).',
    icon: '📄',
  },
  {
    t1: 'خادم الويب (Host)',
    t2: 'اسم النطاق (Domain)',
    point: 'الخادم هو الكمبيوتر الفعلي الحامل للملفات والمتاح 24 ساعة (المحل)، واسم النطاق هو العنوان الاسمي السهل المكتوب لإرشاد الزوار (اليافطة).',
    icon: '🏬',
  },
  {
    t1: 'العرض على الخادم (SSR)',
    t2: 'العرض على العميل (CSR)',
    point: 'في SSR يجهز الخادم ملف HTML كامل ومقروء، بينما في CSR يرسل الخادم صفحة فارغة وكود JS يبنيها داخل المتصفح عبر طلب بيانات من الـ API.',
    icon: '🍲',
  },
  {
    t1: 'بروتوكول HTTP',
    t2: 'بروتوكول HTTPS',
    point: 'HTTP ينقل البيانات كنص صريح مكشوف (Plaintext) وخطير في الشبكات العامة، بينما HTTPS مشفر بطبقة TLS تحمي البيانات من هجمات التنصت.',
    icon: '🔒',
  },
  {
    t1: 'أسلوب GET',
    t2: 'أسلوب POST',
    point: 'GET للقراءة واسترجاع البيانات عبر الرابط وتكراره آمن، بينما POST لإرسال وتخزين بيانات جديدة داخل جسم الطلب (Body) وتكراره قد يسبب أخطاء.',
    icon: '📦',
  },
  {
    t1: 'كود 404 Not Found',
    t2: 'كود 500 Server Error',
    point: 'كود 404 خطأ عميل (السيرفر سليم والمورد المطلوب غير موجود)، بينما 500 خطأ خادم (عطل برمجي أو انهيار داخلي في السيرفر).',
    icon: '⚠️',
  },
  {
    t1: 'كود 200 OK',
    t2: 'كود 201 Created',
    point: 'كود 200 نجاح عام في قراءة واسترجاع البيانات، بينما 201 نجاح محدد في إنشاء وحفظ مورد وسجل جديد بقاعدة البيانات (مع POST).',
    icon: '✅',
  },
  {
    t1: 'لغة HTML',
    t2: 'لغة CSS',
    point: 'HTML للبنية والهيكل والعناصر (الهيكل الخرساني والجدران)، بينما CSS للمظهر والألوان والتنسيق والخطوط (أعمال الدهان والديكور).',
    icon: '🎨',
  },
  {
    t1: 'لغة JavaScript',
    t2: 'لغة HTML',
    point: 'JavaScript للسلوك والتفاعل الحي والاستجابة للنقرات (شبكة الكهرباء والمصاعد)، بينما HTML وسوم توصيفية ثابتة لا تتفاعل بمفردها.',
    icon: '⚡',
  },
  {
    t1: 'الصندوق العام <div>',
    t2: 'الوسم الدلالي <nav>',
    point: 'الصندوق div عام وأعمى ومجهول الوظيفة، بينما الوسم الدلالي nav يفصح لقارئات الشاشة وعناكب محركات البحث صراحة عن وظيفته.',
    icon: '🏷️',
  },
  {
    t1: 'المكتبة (React)',
    t2: 'إطار العمل (Next.js)',
    point: 'React مكتبة مخصصة لبناء مكونات الواجهة وتترك الباقي للمطور، بينما Next.js إطار عمل متكامل مبني عليها يوفر العرض على الخادم SSR والتوجيه.',
    icon: '⚛️',
  },
];

export const masterComparisons: FrameDef = {
  id: 'qa-comparisons',
  title: '⭐ الجدول الذهبي لمقارنات الامتحان الحتمية',
  h: 980,
  notes: (
    <p>
      يعرض هذا الجدول الفوارق الجوهرية الـ 12 الأكثر تكراراً في امتحانات نهاية العام لمادة البرمجة والويب.
    </p>
  ),
  render: () => {
    return <ComparisonsGrid />;
  },
};

function ComparisonsGrid() {
  const [filterQuery, setFilterQuery] = useState('');
  const items = COMPARISONS.filter(
    (c) =>
      c.t1.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.t2.toLowerCase().includes(filterQuery.toLowerCase()) ||
      c.point.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto text-right font-sans" dir="rtl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <Eyebrow>⭐ السؤال ٣٧ · مقارنات الامتحان</Eyebrow>
          <Title>الجدول الذهبي لأهم ١٢ مقارنة حاسمة في الوحدة الثالثة</Title>
        </div>
        <input
          type="text"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
          placeholder="ابحث في المقارنات..."
          className="px-3.5 py-1.5 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] text-xs text-[var(--text)] focus:outline-none focus:border-[var(--primary)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="card p-4 rounded-2xl border-2 border-[var(--border)] bg-[var(--surface-2)] hover:border-[var(--primary)] transition-all flex flex-col gap-2"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-2">
              <span className="text-lg">{item.icon}</span>
              <div className="flex items-center gap-2 text-xs font-black">
                <span className="text-[var(--primary)] bg-[var(--primary)]/15 px-2 py-0.5 rounded-md border border-[var(--primary)]/30">
                  {item.t1}
                </span>
                <span className="text-[var(--muted)] font-normal">ضد</span>
                <span className="text-[var(--safe)] bg-[var(--safe)]/15 px-2 py-0.5 rounded-md border border-[var(--safe)]/30">
                  {item.t2}
                </span>
              </div>
            </div>
            <p className="text-xs text-[var(--text)] m-0 leading-relaxed font-medium pt-1">
              {item.point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Frame 4: سيناريو طلب شراء منتج متجر إلكتروني والتفكير النقدي
// -----------------------------------------------------------------------------
const SCENARIO_STEPS = [
  { step: '١. النقر بالواجهة', tech: 'Frontend / HTML & CSS', role: 'المستخدم ينقر زر "تأكيد الشراء" بصفحة السلة.' },
  { step: '٢. فحص البيانات', tech: 'JavaScript / Validation', role: 'تتأكد لغة JS من ملء خانات العنوان ورقم الهاتف فوراً قبل الإرسال.' },
  { step: '٣. النقل المشفر', tech: 'HTTPS & TLS / POST', role: 'إرسال طلب POST مشفر لحماية أرقام الدفع من السرقة عبر الشبكة.' },
  { step: '٤. معالجة الخادم', tech: 'Backend / Business Logic', role: 'الخادم يتحقق من توفر المخزون وصلاحيات ورصيد المشتري.' },
  { step: '٥. استعلام الحفظ', tech: 'Database / SQL Query', role: 'خصم المنتج، تقليل المخزون بمقدار 1، وتوليد سجل فاتورة جديدة.' },
  { step: '٦. الرد المهيكل', tech: '201 Created & JSON', role: 'إرجاع حزمة JSON فيها كود الفاتورة مصحوبة برمز الحالة 201.' },
  { step: '٧. التحديث الحي', tech: 'DOM Manipulation', role: 'كود JS يعرض إشعار نجاح العملية فوراً بدون وميض أو ريلود.' },
];

export const scenarioFrame: FrameDef = {
  id: 'qa-scenarios',
  title: '🛒 سيناريو شراء متجر إلكتروني ومواقف التفكير النقدي',
  h: 960,
  notes: (
    <p>
      شرح تفاعلي للسؤالين 36 و 38: تتبع رحلة طلب منتج عبر المعمارية ثلاثية الطبقات ومناقشة المواقف النقدية الشائعة في الامتحانات.
    </p>
  ),
  render: () => (
    <div className="flex flex-col gap-5 w-full max-w-5xl mx-auto text-right font-sans" dir="rtl">
      <div>
        <Eyebrow>🧩 السؤال ٣٦ · معمارية الأنظمة المتكاملة</Eyebrow>
        <Title>رحلة طلب شراء منتج في المعمارية ثلاثية الطبقات (3-Tier) 🚀</Title>
        <p className="text-xs text-[var(--muted)] mt-1">
          كيف تتكامل لغات الفرونت إند والباك إند والداتابيز مع بروتوكولات الأمان في ٧ محطات هندسية متتالية:
        </p>
      </div>

      {/* 7-Step Interactive Timeline */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        {SCENARIO_STEPS.map((s, idx) => (
          <div
            key={idx}
            className="card p-3 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] flex flex-col gap-1.5"
          >
            <div className="flex items-center justify-between text-xs font-black">
              <span className="text-[var(--primary)]">{s.step}</span>
              <span className="text-[10px] text-[var(--muted)] px-1.5 py-0.5 rounded bg-[var(--surface-1)]">
                {s.tech}
              </span>
            </div>
            <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed font-medium">
              {s.role}
            </p>
          </div>
        ))}
      </div>

      {/* Critical Thinking 3 Situations (Q38) */}
      <div className="card p-4 rounded-2xl border-2 border-purple-500/40 bg-[var(--surface-2)] flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧠</span>
          <h3 className="text-sm font-black text-purple-300 m-0">
            السؤال ٣٨: ثلاث مواقف نقدية ذكية يخطئ فيها الكثيرون في الامتحان
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
            <span className="text-xs font-black text-amber-300">
              ١) مقولة: &quot;HTTPS يحمي من أي اختراق&quot;
            </span>
            <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed">
              ❌ مقولة خاطئة؛ HTTPS يشفر الطريق وحزم البيانات أثناء انتقالها عبر الشبكة فقط، ولكنه لا يحمي من ثغرات قواعد البيانات (SQL Injection) أو ثغرات البرمجة في كود الموقع.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
            <span className="text-xs font-black text-amber-300">
              ٢) تصميم موقع كامل بـ &lt;div&gt; فقط
            </span>
            <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed">
              ⚠️ كارثة في إمكانية الوصول؛ تحرم المكفوفين وقارئات الشاشة من معرفة القوائم والمحتوى، وتضعف فهرسة محركات البحث (SEO) لعدم وضوح دلالة أجزاء الصفحة.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-[var(--surface-1)] border border-[var(--border)] flex flex-col gap-1.5">
            <span className="text-xs font-black text-amber-300">
              ٣) لماذا ترسل الـ API كود JSON لا HTML؟
            </span>
            <p className="text-[11px] text-[var(--text)] m-0 leading-relaxed">
              💡 لأن JSON خفيف جداً يقلل استهلاك باقة الإنترنت، ويفصل البيانات عن الواجهة ليخدم نفس السيرفر المتصفحات وتطبيقات الهواتف المحمولة والساعات الذكية معاً.
            </p>
          </div>
        </div>
      </div>
    </div>
  ),
};
