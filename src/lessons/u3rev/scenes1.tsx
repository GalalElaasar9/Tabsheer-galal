// Master Review Scenes · Part 1: Spacious Hand-Drawn Whiteboard Scenes (Textbook Page 118)
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Cylinder, Doodle, Heading, Mark, Note, Scene, Txt, Underline,
} from '../../sketch/Sketch';

const portalStore = (res?: string) => (
  <div style={{ textAlign: 'center', paddingTop: 18, fontFamily: "'Cairo', system-ui, sans-serif", direction: 'rtl', lineHeight: 1.65 }}>
    <div style={{ color: 'var(--pen-blue)', fontSize: 24, fontWeight: 900 }}>🛍️ المتجر الإلكتروني · بحث المنتجات</div>
    <div style={{ marginTop: 16, fontSize: 22, color: 'var(--pen-ink)' }}>
      بحث: <span style={{ direction: 'rtl', display: 'inline-block', fontWeight: 900, color: 'var(--pen-blue)' }}>سماعة بلوتوث</span> 🔍
    </div>
    {res ? (
      <div style={{ marginTop: 20, padding: '10px 16px', border: '2px dashed var(--pen-green)', borderRadius: 12, background: 'var(--safe-soft)', fontWeight: 900, fontSize: 24, color: 'var(--pen-green)' }}>
        {res}
      </div>
    ) : (
      <div style={{ marginTop: 24, color: 'var(--muted)', fontSize: 18 }}>في انتظار البحث…</div>
    )}
  </div>
);

const portalStudent = (res?: string) => (
  <div style={{ textAlign: 'center', paddingTop: 18, fontFamily: "'Cairo', system-ui, sans-serif", direction: 'rtl', lineHeight: 1.65 }}>
    <div style={{ color: 'var(--pen-purple)', fontSize: 24, fontWeight: 900 }}>🎓 بوابة الطلاب · نتيجة الامتحانات</div>
    <div style={{ marginTop: 16, fontSize: 22, color: 'var(--pen-ink)' }}>
      رقم الجلوس: <span style={{ direction: 'ltr', display: 'inline-block', fontWeight: 900, color: 'var(--pen-purple)' }}>2403</span> 🔍
    </div>
    {res ? (
      <div style={{ marginTop: 20, padding: '10px 16px', border: '2px dashed var(--pen-green)', borderRadius: 12, background: 'var(--safe-soft)', fontWeight: 900, fontSize: 24, color: 'var(--pen-green)' }}>
        {res}
      </div>
    ) : (
      <div style={{ marginTop: 24, color: 'var(--muted)', fontSize: 18 }}>اكتب الرقم واضغط بحث…</div>
    )}
  </div>
);

export const intro: FrameDef[] = [
  {
    id: 'rev-cover',
    title: 'الغلاف والمقدمة',
    scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم في المراجعة الشاملة للفصل الثالث: الويب (الصف الثاني الثانوي · بكالوريا)!</b></p>
        <p>مراجعة مرسومة تفاعلية واسعة ومريحة للعين بخط Cairo، وبنفس أسلوب ورسومات الشرح الأساسية:</p>
        <ul>
          <li><b>الدرس الأول:</b> معمارية الويب والطبقات الثلاث ومثال المتجر الإلكتروني (ص 118).</li>
          <li><b>الدرس الثاني:</b> نموذج العميل والخادم، بروتوكولات الاتصال HTTP/HTTPS، طرق الطلب GET و POST، أكواد الحالة، و JSON.</li>
          <li><b>الدرس الثالث:</b> تقنيات الواجهة الأمامية (HTML/CSS/JS)، العناصر الدلالية، استراتيجية الجوال أولاً، وشجرة الـ DOM.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        {/* Top Eyebrow */}
        <Txt x={640} y={85} size={28} c="purple">
          الصف الثاني الثانوي · بكالوريا · المراجعة الكبرى للوحدة الثالثة
        </Txt>

        {/* Big Main Title */}
        <Txt x={640} y={190} size={76}>
          مراجعة الفصل الثالث: الويب
        </Txt>
        <Underline x={260} y={250} w={760} c="red" />

        {/* English Subtitle */}
        <Txt x={640} y={305} size={34} c="blue" style={{ direction: 'ltr' }}>
          Unit 3: Web Technologies Master Review
        </Txt>

        {/* 4 Milestones in proper Arabic RTL order (Right to Left: 1 -> 2 -> 3 -> Marathon) */}
        {[
          { icon: '🌐', num: 'الدرس الأول', title: 'معمارية الويب', x: 1070, c: 'blue' as const },
          { icon: '📡', num: 'الدرس الثاني', title: 'بروتوكولات الاتصال', x: 785, c: 'purple' as const },
          { icon: '💻', num: 'الدرس الثالث', title: 'الواجهة الأمامية', x: 500, c: 'green' as const },
          { icon: '🏆', num: 'ماراثون التحدي', title: 'أسئلة الامتحانات', x: 215, c: 'orange' as const },
        ].map((item, i) => (
          <div key={item.num}>
            <Doodle
              x={item.x}
              y={445}
              icon={item.icon}
              size={95}
              c={item.c}
              at={1}
              delay={i * 0.15}
            />
            {/* Number line */}
            <Txt x={item.x} y={535} size={22} c={item.c} at={1} delay={i * 0.15 + 0.1} style={{ fontWeight: 900 }}>
              {item.num}
            </Txt>
            {/* Title line */}
            <Txt x={item.x} y={575} size={18} c="ink" at={1} delay={i * 0.15 + 0.15}>
              {item.title}
            </Txt>
          </div>
        ))}
      </Scene>
    ),
  },

  {
    id: 'rev-mindmap',
    title: 'الخريطة الذهنية الكبرى للوحدة',
    scene: true,
    notes: (
      <>
        <p><b>الخريطة البصرية المتكاملة للوحدة الثالثة (باتجاه القراءة العربي الصحيح من اليمين إلى اليسار):</b></p>
        <p>تتكامل موضوعات الوحدة في منظومة واحدة متتابعة:</p>
        <p>١. <b>الدرس الأول (يمين):</b> معمارية تطبيقات الويب والـ Backend والطبقات الثلاث وقاعدة البيانات.</p>
        <p>٢. <b>الدرس الثاني (وسط):</b> طرق الاتصال بين العميل والخادم بنقل الطلبات والاستجابات بـ HTTP/HTTPS و GET/POST وأكواد الحالة و JSON.</p>
        <p>٣. <b>الدرس الثالث (يسار):</b> تقنيات الواجهة الأمامية بالمتصفح (HTML/CSS/JS) وشجرة الـ DOM والأمان ضد XSS.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="blue" fill="blue" tc="blue" size={26}>🗺️ خريطة الوحدة</Box>
        <Heading>معمارية تطبيقات الويب المتكاملة</Heading>

        {/* Lesson 1 on the RIGHT: Backend & Database */}
        <Box x={850} y={180} w={380} h={340} c="green" at={1}>
          <div style={{ textAlign: 'center', paddingTop: 14, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-green)' }}>⚙️ الدرس الأول (معمارية الويب)</div>
            <div style={{ fontSize: 16, marginTop: 12, lineHeight: 1.6, textAlign: 'right', padding: '0 14px' }}>
              • <b>الموقع الثابت vs التفاعلي:</b> توليد المحتوى الديناميكي.<br />
              • <b>خادم التطبيق (Backend):</b> عقل التطبيق ومنطق العمل.<br />
              • <b>قاعدة البيانات (Database):</b> مستودع السجلات الدائمة.<br />
              • <b>معمارية الطبقات الثلاث:</b> فصل العرض عن المعالجة والبيانات.
            </div>
          </div>
        </Box>
        <Txt x={1040} y={545} size={26} c="green" at={1}>الدرس ١: الخادم وقاعدة البيانات</Txt>

        {/* Lesson 2 in the CENTER: Protocols & Communication */}
        <Doodle x={640} y={280} icon="📡" size={130} c="purple" label="الدرس الثاني (بروتوكولات الاتصال)" lc="purple" at={2} />
        <Txt x={640} y={440} size={22} c="purple" at={2}>بروتوكول HTTP / HTTPS المشفر</Txt>
        <Txt x={640} y={480} size={19} c="ink" at={2}>أساليب الطلب: GET و POST • أكواد الحالة • JSON</Txt>
        <Txt x={640} y={545} size={26} c="purple" at={2}>الدرس ٢: طرق نقل البيانات</Txt>

        {/* Lesson 3 on the LEFT: Frontend */}
        <Browser x={50} y={180} w={380} h={340} c="blue" at={3} url="myapp.edu">
          <div style={{ textAlign: 'center', paddingTop: 10, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>💻 الدرس الثالث (الواجهة الأمامية)</div>
            <div style={{ fontSize: 16, marginTop: 10, lineHeight: 1.6, textAlign: 'right', padding: '0 12px' }}>
              • <b>HTML:</b> الهيكل والعناصر الدلالية Semantic.<br />
              • <b>CSS:</b> التنسيق والتصميم المتجاوب للجوال أولاً.<br />
              • <b>JavaScript:</b> التفاعل وتعديل شجرة الـ DOM.<br />
              • <b>الأمان:</b> الحماية من ثغرات XSS وتطهير المدخلات.
            </div>
          </div>
        </Browser>
        <Txt x={240} y={545} size={26} c="blue" at={3}>الدرس ٣: متصفح العميل (Client)</Txt>

        {/* Connecting curved arrows in RTL direction: Right to Center, Center to Left */}
        <Arrow from={[850, 310]} to={[720, 310]} c="green" at={4} />
        <Arrow from={[560, 310]} to={[430, 310]} c="purple" at={4} />

        <Note x={310} y={580} w={660} h={90} rot={-1} color="yellow" size={24} at={5}>
          💡 رحلة الوحدة الثالثة: من الـ Backend والـ DB ⟵ عبر بروتوكولات الاتصال ⟵ حتى شاشة المستخدم!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-static-vs-dynamic',
    title: 'الموقع الثابت مقابل تطبيق الويب التفاعلي',
    scene: true,
    notes: (
      <>
        <p><b>المقارنة الجوهرية الأولى في الدرس الأول:</b></p>
        <p><b>الموقع الإلكتروني الثابت (Static Website):</b> ملفات HTML مخزنة مسبقاً، تُعرض كما هي لجميع المستخدمين دون معالجة.</p>
        <p><b>تطبيق الويب التفاعلي (Interactive Web Application):</b> برنامج حي، يعالج الـ Backend الطلب ويستعلم قاعدة البيانات ويولد محتوى مخصص لكل مستخدم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="blue" fill="blue" tc="blue" size={26}>⚖️ مقارنة</Box>
        <Heading>الموقع الثابت vs تطبيق الويب التفاعلي</Heading>

        {/* Right side: Static Website Browser */}
        <Browser x={720} y={180} w={480} h={270} c="blue" url="company.com/about.html" at={1}>
          <div style={{ textAlign: 'center', paddingTop: 20, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>📄 موقع تعريفي ثابت (Static)</div>
            <p style={{ fontSize: 18, marginTop: 14, color: 'var(--pen-ink)' }}>
              "أهلاً بكم في شركة المستقبل للتقنية"<br />
              (نفس النص والصور يراها مليون زائر دون أي تغيير!)
            </p>
          </div>
        </Browser>

        {/* Left side: Storage disk */}
        <Doodle x={220} y={270} icon="💾" size={130} c="blue" label="قرص خادم الويب" lc="blue" at={1} />
        
        {/* Request: Right to Left */}
        <Arrow from={[720, 270]} to={[320, 270]} c="blue" bend={-20} at={2} />
        <Txt x={520} y={220} size={24} c="blue" at={2}>① طلب ملف HTML ثابت ⟵</Txt>

        {/* Response: Left to Right */}
        <Arrow from={[320, 330]} to={[720, 330]} c="purple" bend={-20} at={3} />
        <Txt x={520} y={380} size={24} c="purple" at={3}>② إرجاع نفس الملف المخزن لكل الزوار ⟶</Txt>

        <Note x={720} y={490} w={480} h={90} rot={1} color="pink" size={24} at={4}>
          ❌ لا يعرف هوية الزائر ولا يتصل بقاعدة بيانات
        </Note>

        <Box x={80} y={490} w={580} h={90} c="green" fill="green" tc="green" size={24} at={5}>
          ✔️ تطبيق الويب التفاعلي (Web App): يولّد محتوى مخصص لكل مستخدم بالـ Backend والـ DB!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'scene-three-tier',
    title: 'معمارية الطبقات الثلاث (Three-Tier Architecture)',
    scene: true,
    notes: (
      <>
        <p><b>معمارية الطبقات الثلاث (Three-Tier Architecture):</b></p>
        <ol>
          <li><b>طبقة العرض (Presentation Tier):</b> متصفح المستخدم (HTML, CSS, JS). مهمتها عرض الواجهة واستقبال مدخلات الزائر.</li>
          <li><b>طبقة منطق التطبيق (Application Tier):</b> خادم التطبيق (Backend). تطبق قواعد العمل والأمان والحسابات.</li>
          <li><b>طبقة البيانات (Data Tier):</b> قاعدة البيانات (SQL / NoSQL). حفظ واسترجاع السجلات الدائمة.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="purple" fill="purple" tc="purple" size={26}>🏢 المعمارية</Box>
        <Heading>معمارية الطبقات الثلاث (Three-Tier)</Heading>

        {/* 1. Presentation Tier (Right) */}
        <Browser x={870} y={180} w={360} h={300} c="blue" at={1} url="store.eg">
          <div style={{ textAlign: 'center', paddingTop: 20, fontFamily: "'Cairo', sans-serif" }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>١. طبقة العرض</div>
            <div style={{ fontSize: 16, marginTop: 10, color: 'var(--muted)', fontWeight: 700, direction: 'ltr' }}>Presentation Tier</div>
            <div style={{ fontSize: 16, marginTop: 12, lineHeight: 1.5, textAlign: 'right', padding: '0 10px' }}>
              • متصفح العميل (Client)<br />
              • HTML • CSS • JavaScript<br />
              • عرض واجهة المستخدم واستقبال النقرات
            </div>
          </div>
        </Browser>

        {/* 2. Application Logic Tier (Middle) */}
        <Doodle x={640} y={280} icon="⚙️" size={130} c="orange" fill="orange" label="٢. منطق التطبيق" lc="orange" at={2} />
        <Txt x={640} y={430} size={20} c="orange" at={2}>Application Tier (خادم التطبيق)</Txt>
        <Txt x={640} y={465} size={16} c="ink" at={2} style={{ direction: 'ltr' }}>Python • Node.js • Java • PHP</Txt>
        <Txt x={640} y={495} size={15} c="ink" style={{ opacity: 0.7 }} at={2}>عقل التطبيق: الصلاحيات وقواعد العمل</Txt>

        {/* 3. Data Tier (Left) */}
        <Cylinder x={150} y={220} w={150} h={180} label="٣. البيانات" at={3} />
        <Txt x={225} y={430} size={20} c="green" at={3}>Data Tier (قاعدة البيانات)</Txt>
        <Txt x={225} y={465} size={16} c="ink" at={3} style={{ direction: 'ltr' }}>MySQL • PostgreSQL • MongoDB</Txt>
        <Txt x={225} y={495} size={15} c="ink" style={{ opacity: 0.7 }} at={3}>مستودع السجلات الدائمة الآمن</Txt>

        {/* Connecting Arrows matching movement direction */}
        <Arrow from={[870, 270]} to={[730, 270]} c="blue" at={4} />
        <Txt x={800} y={240} size={18} c="blue" at={4}>طلب العميل: Request ⟵</Txt>

        <Arrow from={[730, 330]} to={[870, 330]} c="purple" at={4} />
        <Txt x={800} y={360} size={18} c="purple" at={4}>استجابة السيرفر: Response ⟶</Txt>

        <Arrow from={[550, 270]} to={[320, 270]} c="orange" at={5} />
        <Txt x={435} y={240} size={18} c="orange" at={5}>استعلام قاعدة البيانات: SQL ⟵</Txt>

        <Arrow from={[320, 330]} to={[550, 330]} c="green" at={5} />
        <Txt x={435} y={360} size={18} c="green" at={5}>بيانات السجلات ⟶</Txt>

        <Note x={340} y={575} w={600} h={85} rot={-1.5} color="green" size={24} at={6}>
          🏢 كتاب المدرسة: فصل العرض عن منطق العمل وقاعدة البيانات يسهل التطوير والصيانة
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-search-flow-118',
    title: 'سيناريو كتاب المدرسة ص 118: رحلة البحث في المتجر الإلكتروني',
    scene: true,
    notes: (
      <>
        <p><b>المثال التطبيقي الرئيسي في كتاب الوزارة (صفحة 118):</b></p>
        <p>يشرح الكتاب كيف تتعاون الطبقات الثلاث لإنجاز عملية واحدة بسيطة يقوم بها المستخدم يومياً: البحث عن منتج في متجر إلكتروني.</p>
        <p><b>الخطوات الست بالتفصيل:</b></p>
        <ol>
          <li><b>الخطوة ١:</b> المستخدم يكتب كلمة البحث (مثل "سماعة لاسلكية") ويضغط زر البحث.</li>
          <li><b>الخطوة ٢:</b> طبقة العرض (المتصفح) تجهز وترسل طلب HTTP من نوع GET عبر الشبكة إلى الخادم.</li>
          <li><b>الخطوة ٣:</b> خادم التطبيق (الـ Backend) يستلم الطلب، يتحقق من سلامة النص المدخل، ويصيغ استعلاماً لقاعدة البيانات.</li>
          <li><b>الخطوة ٤:</b> قاعدة البيانات تبحث في جداول المنتجات وتستخرج السجلات المطابقة وتعيدها للخادم.</li>
          <li><b>الخطوة ٥:</b> الخادم ينظم البيانات في كائن JSON أو يملأ قالباً ويعيدها مصحوبة برمز الحالة 200 OK.</li>
          <li><b>الخطوة ٦:</b> المتصفح يستقبل البيانات ويحدث شجرة الـ DOM ليرى المستخدم قائمة المنتجات فوراً دون وميض إعادة تحميل كامل للصفحة.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="green" fill="green" tc="green" size={27}>🛒 ص 118</Box>
        <Heading>رحلة البحث في المتجر الإلكتروني</Heading>

        {/* Right side: Browser Window */}
        <Browser x={700} y={180} w={500} h={310} c="blue">{portalStore()}</Browser>
        <Doodle x={660} y={535} icon="⚡" size={76} c="orange" fill="orange" label="JS" lsize={26} lc="orange" />

        {/* Left side: Server and Database */}
        <Doodle x={180} y={270} icon="⚙️" size={130} c="orange" label="خادم التطبيق" lc="orange" />
        <Cylinder x={130} y={485} w={105} h={120} label="الـ DB" />

        {/* Step 1: User types search query (Right) */}
        <Txt x={640} y={290} size={28} c="red" at={1} delay={0.3}>① بحث المستخدم</Txt>

        {/* Step 2: GET Request to Server (Right to Left) */}
        <Arrow from={[620, 510]} to={[260, 320]} c="blue" bend={-20} at={2} />
        <Txt x={450} y={330} size={26} c="blue" at={2} delay={0.4}>② طلب GET مشفر بالرابط ⟵</Txt>

        {/* Step 3 & 4: Server queries DB */}
        <Arrow from={[180, 400]} to={[180, 480]} c="green" both at={3} />
        <Txt x={340} y={450} size={26} c="orange" at={3} delay={0.3}>③ فحص الطلب واستعلام الـ DB</Txt>
        <Txt x={340} y={490} size={22} c="green" at={3} delay={0.5}>④ استرجاع المنتجات المطابقة</Txt>

        {/* Step 5: JSON Response to Browser (Left to Right) */}
        <Arrow from={[260, 250]} to={[690, 370]} c="pink" bend={-40} at={4} />
        <Txt x={460} y={195} size={26} c="pink" at={4} delay={0.4}>⑤ رد JSON مع كود 200 OK ⟶</Txt>

        {/* Step 6: DOM Update (Right) */}
        <Browser x={700} y={180} w={500} h={310} c="blue" at={5}>{portalStore('سماعة بلوتوث لاسلكية · 450 ج.م ✨')}</Browser>
        <Mark x={700} y={295} w={500} h={105} c="green" at={5} delay={0.5} />
        <Txt x={950} y={515} size={28} c="green" at={5} delay={0.8}>⑥ JavaScript حدثت شجرة الـ DOM</Txt>

        {/* Bottom Note */}
        <Note x={720} y={570} w={480} h={95} rot={-1.5} color="yellow" size={24} at={6}>
          📖 كتاب المدرسة ص 118: تعاون الطبقات الثلاث لإنجاز عملية البحث دون وميض!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-background-requests',
    title: 'طلب في الخلفية (Background Requests / AJAX / Fetch)',
    scene: true,
    notes: (
      <>
        <p><b>الطلبات في الخلفية (Background Requests / AJAX / Fetch):</b></p>
        <p>المتصفح يتحدث مع الخادم بصمت في الخلفية ويجلب البيانات ويحدث الجزء المطلوب فقط دون وميض شاشة بيضاء.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="green" fill="green" tc="green" size={27}>💡 الحل</Box>
        <Heading>طلب في الخلفية (AJAX / Fetch)</Heading>

        {/* Matching exact user screenshot structure */}
        <Browser x={700} y={180} w={500} h={310} c="blue">{portalStudent()}</Browser>
        <Doodle x={660} y={535} icon="⚡" size={76} c="orange" fill="orange" label="JS" lsize={26} lc="orange" />

        <Doodle x={180} y={270} icon="⚙️" size={130} c="orange" label="السيرفر" lc="orange" />
        <Cylinder x={130} y={485} w={105} h={120} label="DB" />

        <Txt x={640} y={290} size={30} c="red" at={1} delay={0.3}>① بحث</Txt>
        
        {/* Right to Left Request */}
        <Arrow from={[620, 510]} to={[260, 320]} c="blue" bend={-20} at={2} />
        <Txt x={460} y={330} size={28} c="blue" at={2} delay={0.4}>② طلب صغير في الخلفية ⟵</Txt>

        <Arrow from={[180, 400]} to={[180, 480]} c="green" both at={3} />
        <Txt x={340} y={455} size={28} c="orange" at={3} delay={0.3}>③ يعالج ويسأل الـ DB</Txt>

        {/* Left to Right Response */}
        <Arrow from={[260, 250]} to={[690, 370]} c="pink" bend={-40} at={4} />
        <Txt x={460} y={195} size={28} c="pink" at={4} delay={0.4}>④ بيانات بس: الاسم + الدرجات ⟶</Txt>

        <Browser x={700} y={180} w={500} h={310} c="blue" at={5}>{portalStudent('يوسف عادل · 74 · 80 · 86 ✨')}</Browser>
        <Mark x={700} y={295} w={500} h={105} c="green" at={5} delay={0.5} />
        <Txt x={950} y={515} size={30} c="green" at={5} delay={0.8}>⑤ JavaScript حدّثت الجزء ده بس</Txt>

        <Note x={740} y={570} w={460} h={95} rot={-1.5} color="pink" size={26} at={6}>
          🤔 بس JavaScript عرفت منين تطلب إزاي؟ (عبر الـ API و JSON)
        </Note>
      </Scene>
    ),
  },
];
