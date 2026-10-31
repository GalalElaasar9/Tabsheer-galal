// Board scenes · Unit 3 · Lesson 2 · part 2 (Methods GET & POST) and part 3 (Status Codes)
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Place, Scene, Txt } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'methods-why', title: 'أساليب طلب البيانات (HTTP Methods)', scene: true,
    notes: (
      <>
        <p><b>أسلوب الطلب (HTTP Request Method):</b> وسيلة لتحديد نوع العملية أو الإجراء المطلوب تنفيذه على الخادم بواسطة العميل.</p>
        <p>الطلب مش مجرد اتصال عادي، لازم نحدد النية وفقاً لمنهاج كتاب المدرسة:</p>
        <ul>
          <li>عايز <b>أقرأ أو أسترجع</b> بيانات من الخادم دون تعديل؟ $\leftarrow$ نستخدم <b>GET</b>.</li>
          <li>عايز <b>أرسل بيانات جديدة</b> للخادم يعالجها أو يخزنها (زي تسجيل دخول أو إضافة مستخدم)؟ $\leftarrow$ نستخدم <b>POST</b>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تحديد نوع العملية المراد تنفيذها على الخادم">أساليب طلب البيانات (HTTP Methods)</Heading>

        <Box x={80} y={145} w={1120} h={95} c="purple" fill="purple" size={24} tc="ink">
          📖 <b>تعريف أسلوب الطلب (HTTP Request Method):</b> وسيلة لتحديد نوع العملية أو الإجراء المطلوب تنفيذه على الخادم بواسطة العميل (مثل الاسترجاع أو الإرسال).
        </Box>

        {/* GET Box */}
        <Box x={660} y={255} w={500} h={270} c="blue" at={1} />
        <Doodle x={910} y={305} icon="🔍" size={75} c="blue" fill="blue" at={1} />
        <Txt x={910} y={370} size={34} c="blue" at={1}>أسلوب GET</Txt>
        <Txt x={910} y={425} w={450} size={21} c="ink" at={1}>📖 <b>تعريف كتاب المدرسة:</b> أسلوب طلب لجلب واسترجاع (قراءة) البيانات من الخادم دون تعديلها.</Txt>
        <Txt x={910} y={480} w={450} size={21} c="ink" at={1}>• يُستخدم لقراءة واستعراض صفحات الويب وملفات الموقع</Txt>

        {/* POST Box */}
        <Box x={120} y={255} w={500} h={270} c="orange" at={2} />
        <Doodle x={370} y={305} icon="📤" size={75} c="orange" fill="orange" at={2} />
        <Txt x={370} y={370} size={34} c="orange" at={2}>أسلوب POST</Txt>
        <Txt x={370} y={425} w={450} size={21} c="ink" at={2}>📖 <b>تعريف كتاب المدرسة:</b> أسلوب طلب لإرسال البيانات إلى الخادم لمعالجتها أو تخزينها.</Txt>
        <Txt x={370} y={480} w={450} size={21} c="ink" at={2}>• يُستخدم لإرسال الاستمارات وتسجيل الدخول وحفظ البيانات</Txt>

        <Box x={120} y={545} w={1040} h={95} c="green" fill="green" size={27} tc="ink" at={3}>
          💡 قاعدة ذهبية للامتحان: <span style={{ fontWeight: 'bold' }}>GET للقراءة والاسترجاع · POST للإرسال والمعالجة والتخزين</span>
        </Box>
      </Scene>
    ),
  },
  {
    id: 'methods-compare', title: 'المقارنة: أسلوب GET مقابل أسلوب POST', scene: true,
    notes: (
      <>
        <p><b>مقارنة كتاب المدرسة بين أسلوبي GET و POST:</b></p>
        <ul>
          <li><b>أسلوب GET:</b> طلب مخصص لجلب واسترجاع الموارد من الخادم وقراءتها فقط، ولا يُحدث أي تعديل في بيانات الخادم.</li>
          <li><b>أسلوب POST:</b> طلب مخصص لإرسال بيانات جديدة إلى الخادم لمعالجتها وتخزينها، ويترتب عليه إنشاء سجل جديد أو تحديث بيانات.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المقارنة المعتمدة في منهج البكالوريا الوزاري">مقارنة أسلوبي GET و POST</Heading>

        {/* GET Column (Right) */}
        <Box x={660} y={160} w={500} h={365} c="blue" at={1} />
        <Doodle x={910} y={220} icon="🔍" size={75} c="blue" fill="blue" at={1} />
        <Txt x={910} y={285} size={34} c="blue" at={1}>أسلوب GET (استرجاع وقراءة)</Txt>
        <Txt x={910} y={345} w={450} size={22} c="ink" at={1}>• <b>الهدف:</b> جلب وقراءة البيانات دون أي تعديل في الخادم</Txt>
        <Txt x={910} y={395} w={450} size={22} c="ink" at={1}>• <b>طبيعة العملية:</b> طلب استعلام آمن للقراءة فقط</Txt>
        <Txt x={910} y={445} w={450} size={22} c="ink" at={1}>• <b>أمثلة:</b> تصفح صفحة ويب، استعراض درجات طالب، قراءة مقال</Txt>
        <Txt x={910} y={495} size={24} c="green" at={1}>👈 للقراءة والاسترجاع فقط</Txt>

        {/* POST Column (Left) */}
        <Box x={120} y={160} w={500} h={365} c="orange" at={2} />
        <Doodle x={370} y={220} icon="📤" size={75} c="orange" fill="orange" at={2} />
        <Txt x={370} y={285} size={34} c="orange" at={2}>أسلوب POST (إرسال وتخزين)</Txt>
        <Txt x={370} y={345} w={450} size={22} c="ink" at={2}>• <b>الهدف:</b> إرسال بيانات جديدة لمعالجتها أو تخزينها</Txt>
        <Txt x={370} y={395} w={450} size={22} c="ink" at={2}>• <b>طبيعة العملية:</b> تؤدي لتسجيل أو تعديل بيانات على الخادم</Txt>
        <Txt x={370} y={445} w={450} size={22} c="ink" at={2}>• <b>أمثلة:</b> تسجيل الدخول، إنشاء حساب، حفظ بيانات استمارة</Txt>
        <Txt x={370} y={495} size={24} c="orange" at={2}>👈 للإرسال والتخزين والمعالجة</Txt>

        <Box x={120} y={545} w={1040} h={95} c="green" fill="green" size={27} tc="ink" at={3}>
          💡 <span style={{ fontWeight: 'bold' }}>سؤال الامتحان الوزاري:</span> GET مخصص لقراءة واسترجاع الموارد · POST مخصص لإرسال وتخزين ومعالجة البيانات في الخادم!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'get-api-url', title: 'شكل رابط الـ API: أسلوب GET (مع شرح الكود)', scene: true,
    notes: (
      <>
        <p><b>شرح خطوات كود استدعاء GET بالتفصيل للامتحان:</b></p>
        <ol>
          <li><b>الخطوة ١ <code>fetch(url)</code>:</b> دالة مدمجة بالمتصفح تبدأ دورة الطلب. لم نحدد <code>method</code> لأن المتصفح يعتبر GET هو الخيار الافتراضي دائماً عند القراءة.</li>
          <li><b>الخطوة ٢ <code>response.json()</code>:</b> تحويل البيانات القادمة كنص خام عبر كابل الشبكة إلى كائن JSON قياسي يسهل قراءته وعرضه.</li>
          <li><b>الخطوة ٣ <code>then(data)</code>:</b> تصبح البيانات (مثل اسم الطالب ودرجته) جاهزة لعرضها في المتصفح دون أن يتغير أي شيء على السيرفر.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مسار الطلب بين الفرونت والباك مع شرح كل خطوة في كود الاستدعاء">شكل رابط الـ API في أسلوب GET (جلب البيانات)</Heading>

        {/* API Endpoint Banner */}
        <Place x={80} y={130} w={1120} h={70} at={1}>
          <div className="flex items-center justify-between p-3 rounded-2xl border shadow-sm" style={{ background: '#0e1320', borderColor: '#30363d', color: '#c9d1d9' }}>
            <div className="flex items-center gap-3">
              <span className="pill pill-info font-mono font-black text-sm px-3 py-1">GET</span>
              <span className="font-mono text-base font-bold text-cyan-400">https://api.school.edu/students</span>
            </div>
            <span className="pill text-xs font-bold" style={{ background: '#1f293d', color: '#79c0ff' }}>مسار استرجاع درجات الطلاب (Endpoint)</span>
          </div>
        </Place>

        {/* Left Card: Frontend Code + Step by step explanation */}
        <Place x={80} y={210} w={550} h={365} at={2}>
          <div className="p-3.5 rounded-2xl border h-full flex flex-col justify-between" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-2 border-b pb-1.5" style={{ borderColor: 'var(--border)' }}>
                <span className="font-extrabold text-sm text-purple-900">💻 كود الاستدعاء وشرح خطواته (JavaScript)</span>
                <span className="pill text-xs font-mono">fetch API</span>
              </div>
              <pre dir="ltr" className="text-left p-2.5 rounded-xl font-mono text-xs text-emerald-300 bg-gray-950 border border-gray-800 leading-relaxed mb-2.5 overflow-x-auto">
{`// 1. طلب القراءة من الرابط
fetch('https://api.school.edu/students')
  // 2. تحويل الرد إلى JSON
  .then(response => response.json())
  // 3. استلام البيانات واستعراضها
  .then(data => console.log(data));`}
              </pre>
            </div>

            {/* Step by step explanation */}
            <div className="space-y-1.5 text-[11px] leading-tight">
              <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-blue-700 font-mono whitespace-nowrap">1️⃣ fetch(url):</span>
                <span className="muted">إرسال طلب القراءة للرابط (أسلوب <b>GET</b> هو الافتراضي تلقائياً).</span>
              </div>
              <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-emerald-700 font-mono whitespace-nowrap">2️⃣ response.json():</span>
                <span className="muted">تحويل نص البيانات القادم عبر الشبكة إلى كائن JSON برمجياً.</span>
              </div>
              <div className="flex items-start gap-1.5 p-1.5 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-purple-700 font-mono whitespace-nowrap">3️⃣ then(data):</span>
                <span className="muted">وصول البيانات جاهزة للعرض دون أي تعديل في قاعدة البيانات.</span>
              </div>
            </div>
          </div>
        </Place>

        {/* Right Card: Architecture & Flow */}
        <Place x={650} y={210} w={550} h={365} at={2}>
          <div className="p-3.5 rounded-2xl border h-full flex flex-col justify-between" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-2 border-b pb-1.5" style={{ borderColor: 'var(--border)' }}>
                <span className="font-extrabold text-sm text-blue-900">🔄 دورة تبادل البيانات (Request / Response)</span>
                <span className="pill pill-safe text-xs font-mono font-bold">200 OK</span>
              </div>
              <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white border border-gray-200 text-xs font-bold mb-2.5">
                <span className="p-1.5 rounded bg-blue-50 text-blue-800">💻 العميل (Frontend)</span>
                <span className="text-gray-400 font-mono">── GET ──►</span>
                <span className="p-1.5 rounded bg-purple-50 text-purple-800">🗄️ الخادم (Backend)</span>
              </div>
              <div className="text-xs muted mb-1 font-bold">البيانات المرتجعة من الباك إند (JSON Response):</div>
              <pre dir="ltr" className="text-left p-2.5 rounded-xl font-mono text-xs text-yellow-300 bg-gray-950 border border-gray-800 overflow-x-auto leading-relaxed">
{`{
  "status": 200,
  "name": "أحمد سامي",
  "grade": 95
}`}
              </pre>
            </div>
            <div className="text-[11px] text-emerald-800 bg-emerald-50 p-2 rounded-lg border border-emerald-200 font-bold">
              ✅ طلب قراءة فقط: الخادم لم يعدل أي بيانات بقاعدة البيانات.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={80} y={585} w={1120} h={75} c="green" fill="green" size={24} tc="ink" at={3}>
          💡 خلاصة GET: نرسل رابط المورد فقط، فيقوم السيرفر بقراءة البيانات وإرجاعها فوراً دون أي تعديل في قاعدة البيانات.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'post-api-url', title: 'شكل رابط الـ API: أسلوب POST (مع شرح الكود)', scene: true,
    notes: (
      <>
        <p><b>شرح خطوات كود إرسال POST بالتفصيل للامتحان:</b></p>
        <ol>
          <li><b>الخطوة ١ <code>method: 'POST'</code>:</b> إخبار صريح للخادم بأن هذا الطلب ليس قراءة بل إرسال بيانات جديدة لحفظها.</li>
          <li><b>الخطوة ٢ <code>headers</code>:</b> رسالة تعريفية للخادم تفيد بأن البيانات المشحونة بتنسيق JSON.</li>
          <li><b>الخطوة ٣ <code>body & JSON.stringify</code>:</b> تغليف البيانات داخل جسم الطلب وتحويل الكائن إلى نص لنقله عبر الشبكة.</li>
          <li><b>الخطوة ٤ <code>then(result)</code>:</b> استلام رد الخادم الذي يؤكد معالجة وحفظ البيانات في قاعدة البيانات بنجاح (201 Created).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مسار إرسال البيانات وحفظها في قاعدة البيانات مع شرح كل خطوة في الكود">شكل رابط الـ API في أسلوب POST (إرسال وحفظ البيانات)</Heading>

        {/* API Endpoint Banner */}
        <Place x={80} y={130} w={1120} h={70} at={1}>
          <div className="flex items-center justify-between p-3 rounded-2xl border shadow-sm" style={{ background: '#0e1320', borderColor: '#30363d', color: '#c9d1d9' }}>
            <div className="flex items-center gap-3">
              <span className="pill pill-primary font-mono font-black text-sm px-3 py-1">POST</span>
              <span className="font-mono text-base font-bold text-purple-400">https://api.school.edu/students</span>
            </div>
            <span className="pill text-xs font-bold" style={{ background: '#2e1d4d', color: '#d2a8ff' }}>مسار حفظ وتخزين طالب جديد (Endpoint)</span>
          </div>
        </Place>

        {/* Left Card: Frontend Code + Step by step explanation */}
        <Place x={80} y={210} w={550} h={365} at={2}>
          <div className="p-3.5 rounded-2xl border h-full flex flex-col justify-between" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-2 border-b pb-1.5" style={{ borderColor: 'var(--border)' }}>
                <span className="font-extrabold text-sm text-purple-900">💻 كود إرسال الـ POST وشرح خطواته</span>
                <span className="pill text-xs font-mono">fetch POST</span>
              </div>
              <pre dir="ltr" className="text-left p-2 rounded-xl font-mono text-[11px] text-purple-300 bg-gray-950 border border-gray-800 leading-snug mb-2 overflow-x-auto">
{`fetch('https://api.school.edu/students', {
  method: 'POST', // 1. أسلوب الحفظ
  headers: { 'Content-Type': 'application/json' }, // 2. نوع JSON
  body: JSON.stringify({ name: 'كريم', grade: 98 }) // 3. البيانات في Body
}).then(res => res.json()).then(result => console.log('تم'));`}
              </pre>
            </div>

            {/* Step by step explanation */}
            <div className="space-y-1 text-[11px] leading-tight">
              <div className="flex items-start gap-1 p-1 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-purple-700 font-mono whitespace-nowrap">1️⃣ method: 'POST':</span>
                <span className="muted">تحديد نوع الطلب صراحة لأننا نرسل بيانات جديدة للخادم.</span>
              </div>
              <div className="flex items-start gap-1 p-1 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-blue-700 font-mono whitespace-nowrap">2️⃣ headers:</span>
                <span className="muted">إعلام الخادم بنوع المحتوى عبر <code>Content-Type: application/json</code>.</span>
              </div>
              <div className="flex items-start gap-1 p-1 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-amber-700 font-mono whitespace-nowrap">3️⃣ body & stringify:</span>
                <span className="muted">وضع البيانات في جسم الطلب وتحويلها لنص JSON لنقلها بأمان.</span>
              </div>
              <div className="flex items-start gap-1 p-1 rounded-lg bg-white border border-gray-200">
                <span className="font-bold text-emerald-700 font-mono whitespace-nowrap">4️⃣ then(result):</span>
                <span className="muted">استقبال تأكيد السيرفر بنجاح الحفظ وتخزين السجل (201 Created).</span>
              </div>
            </div>
          </div>
        </Place>

        {/* Right Card: Architecture & Flow */}
        <Place x={650} y={210} w={550} h={365} at={2}>
          <div className="p-3.5 rounded-2xl border h-full flex flex-col justify-between" style={{ background: 'var(--surface-2)', borderColor: 'var(--border)' }}>
            <div>
              <div className="flex items-center justify-between mb-2 border-b pb-1.5" style={{ borderColor: 'var(--border)' }}>
                <span className="font-extrabold text-sm text-purple-900">📦 مسار البيانات والتخزين بالسيرفر</span>
                <span className="pill pill-safe text-xs font-mono font-bold">201 Created</span>
              </div>
              <div className="flex items-center justify-between gap-1 p-2 rounded-xl bg-white border border-gray-200 text-xs font-bold mb-2.5">
                <span className="p-1 rounded bg-blue-50 text-blue-800">💻 العميل</span>
                <span className="text-gray-400 font-mono text-[11px]">── POST + Body ──►</span>
                <span className="p-1 rounded bg-purple-50 text-purple-800">🗄️ الخادم</span>
                <span className="text-gray-400 font-mono text-[11px]">── حفظ ──►</span>
                <span className="p-1 rounded bg-amber-50 text-amber-800">💾 قاعدة البيانات</span>
              </div>
              <div className="text-xs muted mb-1 font-bold">البيانات المُرسلة من الفرونت إند في جسم الطلب:</div>
              <pre dir="ltr" className="text-left p-2.5 rounded-xl font-mono text-xs text-yellow-300 bg-gray-950 border border-gray-800 overflow-x-auto leading-relaxed">
{`{
  "name": "كريم علي",
  "grade": 98
}`}
              </pre>
            </div>
            <div className="text-[11px] text-purple-900 bg-purple-50 p-2 rounded-lg border border-purple-200 font-bold">
              💾 عملية كتابة وتخزين: الخادم يستقبل المعطيات ويسجلها في قاعدة البيانات.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={80} y={585} w={1120} h={75} c="green" fill="green" size={24} tc="ink" at={3}>
          💡 خلاصة POST: نرسل البيانات الجديدة في جسم الطلب لمعالجتها، فيقوم السيرفر بتخزينها وإرجاع تأكيد الحفظ 201 Created.
        </Box>
      </Scene>
    ),
  },
];

export const part3: FrameDef[] = [
  {
    id: 'status-families', title: 'رموز حالة الخادم (200, 404, 500)', scene: true,
    notes: (
      <>
        <p><b>تعريف رموز حالة الخادم (HTTP Status Codes):</b> رموز رقمية قياسية ثلاثية الخانات يُرجعها الخادم في سطر الحالة لبيان نتيجة معالجة الطلب.</p>
        <ul>
          <li><b>200 OK (النجاح التام):</b> استلم الخادم الطلب وعالجه بنجاح وأعاد البيانات المطلوبة.</li>
          <li><b>404 Not Found (غير موجود):</b> خطأ من جانب العميل؛ السيرفر سليم ومتصل ولكنه لم يعثر على الصفحة أو المورد المطلوب.</li>
          <li><b>500 Internal Server Error (عطل خادم):</b> عطل من جانب الخادم؛ حدث خلل تقني داخلي أو انهيار برمجي بالخادم منعه من معالجة الطلب.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الرموز الثلاثة المقررة في منهج البكالوريا لمعرفة نتيجة الطلب">رموز حالة الخادم الأساسية (Status Codes)</Heading>

        {/* 200 OK (Right) */}
        <Box x={840} y={165} w={360} h={365} c="green" at={1} />
        <Doodle x={1020} y={225} icon="🟢" size={70} at={1} />
        <Txt x={1020} y={290} size={34} c="green" at={1}>200 OK</Txt>
        <Txt x={1020} y={350} w={320} size={21} c="ink" at={1}>
          📖 <b>تعريف كتاب المدرسة:</b> رمز النجاح التام؛ استلم الخادم الطلب وعالجه بنجاح وأعاد البيانات المطلوبة للمتصفح.
        </Txt>
        <Txt x={1020} y={485} size={24} c="green" at={1}>✅ نجاح تام (Success)</Txt>

        {/* 404 Not Found (Center) */}
        <Box x={460} y={165} w={360} h={365} c="orange" at={2} />
        <Doodle x={640} y={225} icon="🟡" size={70} at={2} />
        <Txt x={640} y={290} size={34} c="orange" at={2}>404 Not Found</Txt>
        <Txt x={640} y={350} w={320} size={21} c="ink" at={2}>
          📖 <b>تعريف كتاب المدرسة:</b> خطأ من جانب العميل؛ الخادم سليم ومتصل ولكنه لم يعثر على الصفحة أو المورد المطلوب.
        </Txt>
        <Txt x={640} y={485} size={24} c="orange" at={2}>⚠️ خطأ عميل (Client Error)</Txt>

        {/* 500 Server Error (Left) */}
        <Box x={80} y={165} w={360} h={365} c="red" at={3} />
        <Doodle x={260} y={225} icon="🔴" size={70} at={3} />
        <Txt x={260} y={290} size={34} c="red" at={3}>500 Server Error</Txt>
        <Txt x={260} y={350} w={320} size={21} c="ink" at={3}>
          📖 <b>تعريف كتاب المدرسة:</b> عطل من جانب الخادم؛ حدث خلل تقني داخلي أو انهيار برمجي بالخادم منعه من معالجة الطلب.
        </Txt>
        <Txt x={260} y={485} size={24} c="red" at={3}>💥 عطل خادم (Server Error)</Txt>

        <Box x={80} y={545} w={1120} h={105} c="purple" fill="purple" size={23} tc="ink" at={4}>
          📖 <b>تعريف رموز الحالة (HTTP Status Codes):</b> رموز رقمية قياسية ثلاثية الخانات يُرجعها الخادم في سطر الحالة لبيان نتيجة معالجة الطلب: 200 نجاح · 404 العنوان مش موجود (السيرفر سليم) · 500 السيرفر نفسه انهار!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'codes-compare', title: 'سؤال الامتحان: الفرق بين 404 و 500', scene: true,
    notes: (
      <>
        <p><b>سؤال بيتكرر في كل امتحانات البكالوريا:</b> ما الفرق بين كود 404 وكود 500؟</p>
        <ul>
          <li><b>404 Not Found (غير موجود):</b> السيرفر سليم وشغال تمام، واستقبل الطلب وفهمه، بس الصفحة أو الملف اللي طلبته مش موجود عنده (زي رقم جلوس غلط أو رابط مكتوب غلط). الخطأ من العميل.</li>
          <li><b>500 Internal Server Error (عطل داخلي):</b> المشكلة في السيرفر نفسه! السيرفر حاول ينفذ الطلب بس حصل عنده انهيار في الكود أو فشل الاتصال بقاعدة البيانات. المستخدم ملوش ذنب.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مقارنة حاسمة للامتحان بين أشهر كودين للأخطاء">المقارنة: 404 Not Found مقابل 500 Server Error</Heading>

        <Line pts={[[640, 155], [640, 540]]} dashed sw={2} />

        {/* 404 (Right) */}
        <Txt x={950} y={190} size={36} c="orange" at={1}>🟡 404 Not Found</Txt>
        <Doodle x={950} y={265} icon="🗺️" size={80} c="orange" fill="orange" at={1} />
        <Txt x={950} y={335} size={28} c="orange" at={1}>العنوان مش موجود</Txt>
        <Txt x={950} y={385} w={450} size={23} c="ink" at={1}>• السيرفر شغال وزي الفل ومفهوش أي عطل</Txt>
        <Txt x={950} y={435} w={450} size={23} c="ink" at={1}>• الطلب وصل بس المورد المطلوب مش متسجل</Txt>
        <Txt x={950} y={485} size={25} c="purple" at={1}>👉 السبب: العميل طلب رابط خاطئ أو محذوف</Txt>

        {/* 500 (Left) */}
        <Txt x={330} y={190} size={36} c="red" at={2}>🔴 500 Internal Server Error</Txt>
        <Doodle x={330} y={265} icon="💥" size={80} c="red" fill="red" at={2} />
        <Txt x={330} y={335} size={28} c="red" at={2}>السيرفر نفسه انهار</Txt>
        <Txt x={330} y={385} w={450} size={23} c="ink" at={2}>• الخادم استقبل الطلب وعايز ينفذه</Txt>
        <Txt x={330} y={435} w={450} size={23} c="ink" at={2}>• بس حصل كراش في الكود أو سقطت الـ Database</Txt>
        <Txt x={330} y={485} size={25} c="red" at={2}>👉 السبب: عطل تقني داخلي في السيرفر</Txt>

        <Box x={150} y={560} w={980} h={90} c="green" fill="green" size={28} tc="ink" at={3}>
          💡 الخلاصة: في 404 السيرفر سليم والعنوان غلط · في 500 السيرفر نفسه مريض وعنده عطل!
        </Box>
      </Scene>
    ),
  },
];
