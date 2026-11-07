// Board scenes · Unit 3 · Lesson 3 · intro and clear point-by-point review of Lessons 1 & 2
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'نقاط مراجعة الدرس الأول',
  'نقاط مراجعة الدرس الثاني',
  'أدوار الثلاثي (HTML/CSS/JS)',
  'HTML الدلالية وإمكانية الوصول',
  'التصميم المتجاوب (Mobile-first)',
  'أطر العمل (React, Vue, Next)',
  'معجم المصطلحات المعتمدة',
  'بنك أسئلة وتدريبات البكالوريا',
];

const STOP_PTS: [number, number][] = [
  [1050, 350], [800, 350], [550, 350], [300, 350],
  [300, 570], [550, 570], [800, 570], [1050, 570],
];

export const intro: FrameDef[] = [
  {
    id: 'cover', title: 'الغلاف', scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم في الدرس الثالث من وحدة تطبيقات الويب: أساسيات تكنولوجيا الواجهة الأمامية.</b></p>
        <p>بعد دراسة بنية تطبيقات الويب وطرق الاتصال، نصل في هذا الدرس إلى بناء <b>الواجهة التي يراها المستخدم ويتفاعل معها</b>.</p>
        <p>نبدأ الدرس بمراجعة واضحة ومركزة في نقاط لأهم مفاهيم الدرسين الأول والثاني، ثم نتعرف على أدوار HTML و CSS و JavaScript، ولغة HTML الدلالية، والتصميم المتجاوب، وأطر العمل.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={28} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 3 · Lesson 3</Txt>
        <Txt x={640} y={225} size={62}>أساسيات تكنولوجيا الواجهة الأمامية</Txt>
        <Underline x={220} y={272} w={840} c="blue" />
        <Txt x={640} y={325} size={32} c="blue">Front-end Technology Fundamentals</Txt>

        {[['🌐', 'مراجعة د. ١'], ['📡', 'مراجعة د. ٢'], ['🧱', 'HTML البنية'], ['🎨', 'CSS المظهر'], ['⚡', 'JS السلوك']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={515} icon={icon} size={85} label={label} lc="blue" at={1} delay={i * 0.2} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في الدرس الثالث:</b> ثماني محطات واضحة ومنظمة تبدأ بنقاط المراجعة وتختتم بالمعجم وبنك الأسئلة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات الدرس الثالث</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={30} tc="ink">
          ❓ كيف تتكامل تقنيات الواجهة الأمامية معاً لتقديم تجربة مستخدم واضحة وفعالة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={20}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  /* =========================================================================
     مشهد نقاط مراجعة الدرس الأول
     ========================================================================= */
  {
    id: 'review-lesson1-points', title: 'نقاط مراجعة الدرس الأول (البنية العامة لتطبيقات الويب)', scene: true,
    notes: (
      <>
        <p><b>نقاط مراجعة الدرس الأول (البنية العامة لتطبيقات الويب):</b></p>
        <ul>
          <li><b>تطبيق الويب:</b> برنامج يعمل عبر الإنترنت ويُستخدم غالباً عبر المتصفح ليتفاعل مع المستخدم وينفذ أوامره.</li>
          <li><b>بنية الطبقات الثلاث:</b>
            <ol>
              <li><b>الواجهة الأمامية (Frontend):</b> الجزء المرئي على الشاشة الذي يتفاعل معه المستخدم مباشرة.</li>
              <li><b>الواجهة الخلفية (Backend):</b> الجزء المسؤول عن المعالجة والمنطق وتطبيق قواعد التطبيق في الخادم.</li>
              <li><b>قاعدة البيانات (Database):</b> نظام ينظم ويخزن البيانات ويديرها بشكل دائم.</li>
            </ol>
          </li>
          <li><b>تدفق طلب المستخدم:</b> يبدأ من الواجهة الأمامية ← ترسل طلباً للواجهة الخلفية ← تطلب وتسترجع البيانات من قاعدة البيانات ← تعيد النتيجة للواجهة الأمامية.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تلخيص مركز ومباشر لكافة أركان الدرس الأول في نقاط أساسية">
          🌐 مراجعة الدرس الأول: البنية العامة لتطبيقات الويب
        </Heading>

        {/* Point 1: Web App Concept */}
        <Place x={140} y={150} w={1000} h={100} at={1}>
          <div className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: '#0f172a', borderColor: '#2563eb' }}>
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-1">١. ما هو تطبيق الويب؟ (Web Application)</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                برنامج يعمل عبر الإنترنت ويُستخدم غالباً عبر متصفح الويب (مثل Chrome). لا يعرض مجرد صفحات ثابتة، بل يتفاعل مع المستخدم وينفذ أوامره (كالتبضع، البحث، والتسجيل).
              </p>
            </div>
            <span className="text-3xl pr-4">💻</span>
          </div>
        </Place>

        {/* Point 2: Three-tier Architecture */}
        <Place x={140} y={265} w={1000} h={190} at={2}>
          <div className="p-3.5 rounded-xl border" style={{ background: '#0a0f1d', borderColor: '#334155' }}>
            <span className="text-xs font-bold text-amber-400 block mb-2">٢. بنية الطبقات الثلاث (Three-tier Architecture)</span>
            <div className="grid grid-cols-3 gap-3">
              <div className="p-2.5 rounded-lg border bg-slate-900 border-sky-800/60">
                <span className="text-xs font-bold text-sky-400 block mb-1">🖥️ الواجهة الأمامية (Frontend)</span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  مكون الشاشة الذي يراه المستخدم ويتفاعل معه مباشرة في المتصفح (عرض المحتوى، الأزرار، والمدخلات).
                </p>
              </div>

              <div className="p-2.5 rounded-lg border bg-slate-900 border-emerald-800/60">
                <span className="text-xs font-bold text-emerald-400 block mb-1">⚙️ الواجهة الخلفية (Backend)</span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  الجزء المسؤول عن المعالجة والمنطق على جانب الخادم (تطبيق القواعد، التحقق، وتنسيق العمليات).
                </p>
              </div>

              <div className="p-2.5 rounded-lg border bg-slate-900 border-purple-800/60">
                <span className="text-xs font-bold text-purple-400 block mb-1">🗄️ قاعدة البيانات (Database)</span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  نظام ينظم البيانات ويخزنها ويديرها بشكل دائم (حسابات المستخدمين، سجلات المنتجات، والطلبات).
                </p>
              </div>
            </div>
          </div>
        </Place>

        {/* Point 3: Request Flow */}
        <Place x={140} y={470} w={1000} h={170} at={3}>
          <div className="p-3.5 rounded-xl border" style={{ background: '#0a0f1d', borderColor: '#059669' }}>
            <span className="text-xs font-bold text-emerald-400 block mb-2">٣. مسار تدفق الطلب عبر الطبقات (Request Flow)</span>
            <div className="flex items-center justify-between text-xs text-slate-200 gap-2">
              <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="font-bold text-sky-300 block mb-0.5">١. إجراء المستخدم</span>
                <span className="text-[10px] text-slate-400">كتابة بحث أو نقر زر في الواجهة الأمامية</span>
              </div>
              <span className="text-emerald-400 font-bold">←</span>
              <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="font-bold text-emerald-300 block mb-0.5">٢. معالجة الخادم</span>
                <span className="text-[10px] text-slate-400">تطبيق قواعد البحث بالواجهة الخلفية</span>
              </div>
              <span className="text-emerald-400 font-bold">←</span>
              <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="font-bold text-purple-300 block mb-0.5">٣. استرجاع البيانات</span>
                <span className="text-[10px] text-slate-400">جلب السجلات من قاعدة البيانات</span>
              </div>
              <span className="text-emerald-400 font-bold">←</span>
              <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
                <span className="font-bold text-sky-300 block mb-0.5">٤. العرض للمستخدم</span>
                <span className="text-[10px] text-slate-400">تحديث شاشة الواجهة الأمامية بالنتائج</span>
              </div>
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },

  /* =========================================================================
     مشهد نقاط مراجعة الدرس الثاني
     ========================================================================= */
  {
    id: 'review-lesson2-points', title: 'نقاط مراجعة الدرس الثاني (طرق الاتصال في تطبيقات الويب)', scene: true,
    notes: (
      <>
        <p><b>نقاط مراجعة الدرس الثاني (طرق الاتصال في تطبيقات الويب):</b></p>
        <ul>
          <li><b>نموذج العميل والخادم:</b> العميل يرسل الطلب (Request) والخادم يستقبل ويعالج ويعيد الاستجابة (Response).</li>
          <li><b>بروتوكول HTTP:</b> بروتوكول نقل الرسائل النصية بين العميل والخادم.</li>
          <li><b>بروتوكول HTTPS المشفر:</b> محمي بـ TLS لضمان سرية الاتصال ومصادقة الخادم وحماية البيانات من التنصت.</li>
          <li><b>أساليب الطلب:</b> طريقة GET للاسترجاع والقراءة، وطريقة POST للإرسال والتخزين.</li>
          <li><b>رموز الحالة:</b> 200 (نجاح OK)، 404 (المورد غير موجود Not Found)، 500 (خطأ بالخادم Server Error).</li>
          <li><b>الـ API و JSON:</b> قواعد لطلب البيانات، و JSON صيغة نصية مهيكلة لتبادل البيانات بنظام المفتاح والقيمة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تلخيص شامل لبروتوكولات الويب وأساليب الطلب ورموز الحالة بصيغة نقاط">
          📡 مراجعة الدرس الثاني: طرق الاتصال في تطبيقات الويب
        </Heading>

        {/* 4 Point Cards in a 2x2 grid */}
        <Place x={140} y={150} w={490} h={235} at={1}>
          <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#2563eb' }}>
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-1.5">١. نموذج العميل والخادم وأمان HTTPS</span>
              <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <b>العميل (Client):</b> المتصفح الذي يبدأ دائماً بإرسال الطلب (Request).</li>
                <li>• <b>الخادم (Server):</b> يستقبل الطلب، يعالجه، ويعيد الاستجابة (Response).</li>
                <li>• <b>HTTP:</b> بروتوكول تبادل الرسائل النصية غير المشفر.</li>
                <li>• <b>HTTPS و TLS:</b> بروتوكول محمي بتشفير TLS لضمان سرية الاتصال ومصادقة الخادم.</li>
              </ul>
            </div>
            <span className="text-[10px] text-sky-400/80 font-mono">Client-Server & TLS Encryption</span>
          </div>
        </Place>

        <Place x={650} y={150} w={490} h={235} at={2}>
          <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#a855f7' }}>
            <div>
              <span className="text-xs font-bold text-purple-400 block mb-1.5">٢. طرق الطلب الأساسية (HTTP Methods)</span>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>
                  <b className="text-sky-300">طريقة GET:</b> تُستخدم لطلب واسترجاع بيانات أو صفحات من الخادم دون تعديلها (مثل: عرض صفحة ويب، أو نتائج البحث).
                </li>
                <li>
                  <b className="text-purple-300">طريقة POST:</b> تُستخدم لإرسال بيانات جديدة إلى الخادم ليعالجها ويخزنها (مثل: إرسال استمارة تسجيل، أو كلمة المرور).
                </li>
              </ul>
            </div>
            <span className="text-[10px] text-purple-400/80 font-mono">GET (Retrieve) vs POST (Send/Process)</span>
          </div>
        </Place>

        <Place x={140} y={400} w={490} h={240} at={3}>
          <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#f59e0b' }}>
            <div>
              <span className="text-xs font-bold text-amber-400 block mb-1.5">٣. رموز حالة الخادم القياسية (Status Codes)</span>
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="font-bold text-emerald-400 font-mono">200 OK</span>
                  <span>تمت معالجة الطلب بنجاح تام</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="font-bold text-amber-400 font-mono">404 Not Found</span>
                  <span>المورد أو الرابط غير موجود على الخادم</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                  <span className="font-bold text-red-400 font-mono">500 Server Error</span>
                  <span>حدث خطأ أو عطل داخلي في الخادم</span>
                </div>
              </div>
            </div>
            <span className="text-[10px] text-amber-400/80 font-mono">HTTP Response Status Codes</span>
          </div>
        </Place>

        <Place x={650} y={400} w={490} h={240} at={4}>
          <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#10b981' }}>
            <div>
              <span className="text-xs font-bold text-emerald-400 block mb-1.5">٤. واجهة التطبيقات (API) وصيغة البيانات JSON</span>
              <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <b>API:</b> مجموعة قواعد تسمح لبرنامج أو واجهة بطلب بيانات أو وظائف من برنامج أو خدمة أخرى (مثل خدمة الطقس).</li>
                <li>• <b>صيغة JSON:</b> صيغة نصية شائعة وخفيفة لتبادل البيانات المنظمة بين العميل والخادم بنظام المفتاح والقيمة:
                  <div className="p-1.5 rounded bg-slate-900 font-mono text-[11px] text-emerald-300 mt-1 border border-slate-800" dir="ltr">
                    &#123; "city": "Cairo", "temp": 28 &#125;
                  </div>
                </li>
              </ul>
            </div>
            <span className="text-[10px] text-emerald-400/80 font-mono">API & Structured JSON Data</span>
          </div>
        </Place>
      </Scene>
    ),
  },
];
