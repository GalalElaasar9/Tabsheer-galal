// Board scenes · Unit 3 · Lesson 2 · intro and part 1 (Protocols HTTP & HTTPS)
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Browser, Doodle, Heading, Line, Num, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'العميل والخادم', 'دورة الطلب والرد', 'HTTP و HTTPS', 'تشفير TLS',
  'أسلوب GET', 'أسلوب POST', 'رموز الحالة (200, 404, 500)', 'API و JSON',
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
        <p><b>أهلاً بالطلاب في الدرس الثاني:</b> بعد ما فهمنا في الدرس الأول إزاي الويب اتطور، النهارده هندخل جوه <b>لغة الكلام</b> بين المتصفح والسيرفر.</p>
        <p>هنتعلم إزاي الأجهزة بتتفاهم عبر بروتوكولات HTTP و HTTPS، وإيه الفرق بين أسلوبي GET و POST، وإزاي السيرفر بيرد برموز الحالة المحددة (200, 404, 500) وصيغة الـ JSON.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={28} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 3 · Lesson 2</Txt>
        <Txt x={640} y={225} size={52} clean style={{ fontWeight: 800 }}>طرق الإتصال فى تطبيقات الويب</Txt>
        <Underline x={270} y={262} w={740} c="blue" />
        <Txt x={640} y={315} size={28} c="blue">Web Application Communication Methods</Txt>

        {[['💻', 'العميل Client'], ['📨', 'HTTP & HTTPS'], ['⚙️', 'GET & POST'], ['🚦', 'رموز الحالة'], ['📦', 'JSON & API']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={515} icon={icon} size={85} label={label} lc="blue" at={1} delay={i * 0.2} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا النهارده:</b> ثماني محطات رئيسية بتغطي كل أفكار الدرس وأسئلة الامتحانات في منهج البكالوريا.</p>
        <p>من أول كيف يتصل المتصفح بالسيرفر، مروراً بالأمان والتشفير، وطرق نقل البيانات بـ GET و POST، ورموز الحالة، وصيغة JSON.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات الدرس</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={32} tc="ink">
          ❓ إزاي تطبيقات الويب بتبعت وتستقبل البيانات بأمان وسرعة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={21}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
  {
    id: 'client-server-model', title: 'نموذج العميل والخادم (Client / Server)', scene: true,
    notes: (
      <>
        <p><b>نموذج العميل والخادم:</b> هو الأساس المعماري اللي قايم عليه كل اتصال في الويب.</p>
        <ul>
          <li><b>العميل (Client):</b> هو الطرف اللي بيبدأ دايماً بطلب الخدمة (زي متصفح كروم أو فايرفوكس، أو تطبيق على الموبايل).</li>
          <li><b>الخادم (Server):</b> جهاز كمبيوتر قوي متصل بالإنترنت ومتاح دايماً، وظيفته يستقبل الطلبات، يعالجها، ويجيب البيانات من الـ Database ويرجع الرد.</li>
        </ul>
        <p><b>قاعدة ذهبية للامتحان:</b> في نموذج الويب التقليدي، العميل هو دايماً اللي يبدأ بالطلب (Request) والسيرفر يرد بالاستجابة (Response).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الأساس المعماري لتبادل البيانات في الويب">نموذج العميل والخادم (Client-Server Model)</Heading>

        {/* Client side (Right) */}
        <Box x={820} y={165} w={380} h={365} c="blue" at={1} />
        <Doodle x={1010} y={225} icon="💻" size={75} c="blue" fill="blue" at={1} />
        <Txt x={1010} y={285} size={32} c="blue" at={1}>العميل (Client)</Txt>
        <Txt x={1010} y={375} w={350} size={19} c="ink" at={1}>
          📖 <b>تعريف كتاب المدرسة:</b> الجهاز أو البرنامج (كالمتصفح) الذي يبدأ بطلب الخدمة أو المورد من الخادم ويرسل HTTP Request.
        </Txt>
        <Txt x={1010} y={490} size={22} c="pink" at={1}>👉 هو الطرف الذي يبدأ بالطلب دائماً</Txt>

        {/* Server side (Left) */}
        <Box x={80} y={165} w={380} h={365} c="orange" at={2} />
        <Doodle x={270} y={225} icon="🗄️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={270} y={285} size={32} c="orange" at={2}>الخادم (Server)</Txt>
        <Txt x={270} y={375} w={350} size={19} c="ink" at={2}>
          📖 <b>تعريف كتاب المدرسة:</b> حاسوب مركزي متصل دائماً بالشبكة، يمتلك موارد وخدمات، يستقبل طلبات العملاء ويعالجها ويرسل HTTP Response.
        </Txt>
        <Txt x={270} y={490} size={22} c="green" at={2}>👈 يعالج الطلب ويرد بالاستجابة</Txt>

        {/* The Connection Between them */}
        <Arrow from={[820, 290]} to={[470, 290]} c="purple" at={3} />
        <Txt x={645} y={260} size={25} c="purple" at={3}>① طلب: HTTP Request 📨</Txt>

        <Arrow from={[470, 390]} to={[820, 390]} c="green" at={4} />
        <Txt x={645} y={425} size={25} c="green" at={4}>② استجابة: HTTP Response 📦</Txt>

        <Box x={80} y={545} w={1120} h={105} c="purple" fill="purple" size={24} tc="ink" at={5}>
          📖 <span style={{ fontWeight: 'bold' }}>تعريف دورة الطلب والاستجابة (Request-Response Cycle):</span> آلية الاتصال الأساسية في الويب، حيث يبدأ العميل بإرسال طلب (Request)، فيقوم الخادم بمعالجته وإعادة الرد المناسب (Response).
        </Box>
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'http-problem', title: 'مشكلة بروتوكول HTTP العادي', scene: true,
    notes: (
      <>
        <p><b>تعريف بروتوكول HTTP المعتمد:</b> بروتوكول اتصال قياسي على طبقة التطبيقات يُستخدم لنقل وتداول صفحات الويب ومواردها عبر الإنترنت كنص صريح (Plaintext) غير مشفر.</p>
        <p><b>المشكلة الكبرى:</b> صُمم في البداية لمستندات أبحاث علمية عامة ومفتوحة للكل، مكنش فيه اهتمام بالتشفير أو السرية.</p>
        <p>البيانات بتسافر كنص واضح صريح (Plaintext). يعني لو طالب بيكتب كلمة السر بتاعته في شبكة واي فاي بمقهى، أي شخص معاه برنامج تنصت (Sniffer) يقدر يقرأ كلمة السر زي ما هي بالظبط!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="لماذا نحتاج بروتوكولاً آمناً؟">مشكلة HTTP: بيانات تسافر في العراء 🔓</Heading>

        {/* User (Right) */}
        <Browser x={940} y={170} w={280} h={160} c="red">
          <div style={{ fontSize: 20, color: 'var(--danger)', fontWeight: 'bold' }}>🔓 http://univ.example</div>
          <div style={{ fontSize: 19 }}>الباسورد: <span style={{ color: 'red' }}>pass123</span></div>
        </Browser>
        <Txt x={1080} y={365} size={30} c="blue">👤 الطالب</Txt>

        {/* Server (Left) */}
        <Doodle x={160} y={245} icon="🗄️" size={100} c="orange" fill="orange" />
        <Txt x={160} y={365} size={30} c="orange">سيرفر الكلية</Txt>

        {/* Transmission line with sniffer */}
        <Line pts={[[940, 245], [230, 245]]} sw={3} c="red" dashed at={1} />
        <Doodle x={585} y={210} icon="🕵️" size={100} c="red" fill="red" at={2} />
        <Txt x={585} y={325} size={28} c="red" at={2}>متنصت على نفس الشبكة (Sniffer)</Txt>

        <Box x={380} y={375} w={410} h={100} c="red" fill="red" size={24} tc="ink" at={3}>
          «أنا شايف اسم المستخدم وكلمة السر نص واضح قدامي: <b style={{ color: 'red' }}>pass123</b>» 😱
        </Box>

        <Box x={80} y={500} w={1120} h={130} c="red" fill="red" size={23} tc="ink" at={4}>
          <div style={{ lineHeight: 1.6 }}>
            📖 <b>تعريف بروتوكول HTTP (كتاب المدرسة):</b> بروتوكول اتصال قياسي على طبقة التطبيقات يُستخدم لنقل وتداول صفحات الويب ومواردها عبر الإنترنت كنص صريح (Plaintext) غير مشفر، مما يجعله غير آمن لتداول البيانات الحساسة ككلمات المرور والبطاقات المصرفية.
          </div>
        </Box>
      </Scene>
    ),
  },
  {
    id: 'https-solution', title: 'الحل: بروتوكول HTTPS المشفر', scene: true,
    notes: (
      <>
        <p><b>تعريف بروتوكول HTTPS المعتمد:</b> النسخة الآمنة من بروتوكول HTTP، مضاف إليها طبقة تشفير TLS/SSL لتأمين نقل البيانات ومنع التنصت والتلاعب والتأكد من هوية الخادم.</p>
        <p><b>تعريف طبقة التشفير TLS:</b> بروتوكول تشفير قياسي يوفر السرية (Confidentiality) وسلامة البيانات (Integrity) والمصادقة (Authentication) بين العميل والخادم.</p>
        <p><b>أين نستخدمه إجبارياً؟</b> صفحات تسجيل الدخول، الدفع بالبطاقات البنكية، والبيانات الشخصية الحساسة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التشفير والأمان عبر طبقة TLS">الحل: بروتوكول HTTPS المشفر 🔒</Heading>

        {/* User (Right) */}
        <Browser x={940} y={170} w={280} h={160} c="green">
          <div style={{ fontSize: 20, color: 'var(--safe)', fontWeight: 'bold' }}>🔒 https://univ.example</div>
          <div style={{ fontSize: 19 }}>الباسورد: <span style={{ color: 'green' }}>••••••••</span></div>
        </Browser>
        <Txt x={1080} y={365} size={30} c="blue">👤 الطالب</Txt>

        {/* Server (Left) */}
        <Doodle x={160} y={245} icon="🗄️" size={100} c="green" fill="green" />
        <Txt x={160} y={365} size={30} c="green">سيرفر الكلية (معاه المفتاح)</Txt>

        {/* Transmission line with encrypted shield */}
        <Line pts={[[940, 245], [230, 245]]} sw={3} c="green" at={1} />
        <Doodle x={585} y={210} icon="🛡️" size={100} c="green" fill="green" at={2} />
        <Txt x={585} y={325} size={28} c="green" at={2}>طبقة التشفير TLS / SSL 🔒</Txt>

        <Box x={380} y={375} w={410} h={100} c="green" fill="green" size={23} tc="ink" at={3}>
          المتنصت يرى رموزاً مشفرة يستحيل فكها: <bdi dir="ltr" style={{ color: 'var(--pen-purple)' }}>e7#19!q@x9</bdi>
        </Box>

        <Box x={80} y={500} w={1120} h={140} c="green" fill="green" size={22} tc="ink" at={4}>
          <div style={{ lineHeight: 1.6 }}>
            📖 <b>تعريف بروتوكول HTTPS (كتاب المدرسة):</b> النسخة الآمنة من بروتوكول HTTP مضاف إليها طبقة تشفير TLS لتأمين نقل البيانات ومنع التنصت والتلاعب والتأكد من هوية الخادم.<br />
            🛡️ <b>تعريف طبقة التشفير (TLS):</b> بروتوكول أمان يوفر السرية (التشفير)، سلامة البيانات (عدم التعديل)، والمصادقة (شهادة الخادم الموثقة).
          </div>
        </Box>
      </Scene>
    ),
  },
];
