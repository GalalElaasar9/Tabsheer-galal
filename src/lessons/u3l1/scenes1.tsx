// Board scenes · intro and part 1 (beginning of the web).
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Browser, Doodle, Heading, Line, Mark, Note, Num, Paper, Scene, Txt, Underline } from '../../sketch/Sketch';
import { Eyebrow, Title } from '../../kit/blocks';
import { ABOUT, Code } from './common';
import { HtmlPlayground } from './demos';

const STOPS = [
  'بداية الويب', 'الصفحة الثابتة', 'المحتوى المتغير', 'قواعد البيانات', 'الـ Backend',
  'JavaScript', 'طلبات في الخلفية', 'الـ API', 'Page ولا App؟', 'الخلاصة 🏁',
];
const STOP_PTS: [number, number][] = [
  [1130, 340], [910, 370], [690, 340], [470, 370], [250, 340],
  [250, 570], [470, 600], [690, 570], [910, 600], [1130, 570],
];

export const intro: FrameDef[] = [
  {
    id: 'cover', title: 'الغلاف', scene: true,
    notes: <p>رحّب بالطلاب. الدرس هيمشي كرحلة: كل محطة بتحل مشكلة ظهرت في المحطة اللي قبلها، من صفحة HTML بسيطة لحد تطبيق ويب كامل.</p>,
    render: () => (
      <Scene>
        <Txt x={640} y={120} size={32} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 3 · Lesson 1</Txt>
        <Txt x={640} y={250} size={120}>تطور الويب</Txt>
        <Underline x={430} y={330} w={420} c="red" />
        <Txt x={640} y={375} size={52} c="blue">The Evolution of the Web</Txt>
        {[['📄', 'HTML'], ['🗃️', 'Database'], ['⚙️', 'Backend'], ['🖱️', 'JavaScript'], ['🔌', 'API']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={540} icon={icon} size={100} label={label} lc="blue" at={1} delay={i * 0.35} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>أهداف الدرس.</b> في الآخر الطالب يقدر يشرح:</p>
        <ul>
          <li>الـ Web إيه، وظهر ليه.</li>
          <li>المتصفح بيطلب الصفحة من السيرفر ويعرضها إزاي.</li>
          <li>يعني إيه Static Web Page.</li>
          <li>ليه محتاجين Database.</li>
          <li>دور الـ Backend في معالجة الطلبات والبيانات.</li>
          <li>قالب HTML واحد يعرض بيانات مختلفة إزاي.</li>
          <li>دور JavaScript في التفاعل.</li>
          <li>الصفحة تجيب بيانات من غير ما تتحمّل كلها.</li>
          <li>فكرة مبدئية عن الـ API.</li>
          <li>الفرق بين Web Page و Web App.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>رحلتنا النهارده</Heading>
        <Box x={150} y={150} w={980} h={110} c="pink" fill="pink" size={34} tc="ink">
          ❓ إزاي الويب اتطوّر من صفحة ثابتة… لتطبيق بيعرف كل مستخدم ويتفاعل معاه؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 5), [110, 455], ...STOP_PTS.slice(5)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num x={x} y={y} n={i + 1} c={i < 5 ? 'blue' : 'green'} at={1} delay={0.3 + i * 0.15} />
            <Txt x={x} y={y + 48} size={27} at={1} delay={0.3 + i * 0.15}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'what-is-internet', title: 'مراجعة: ما هو الإنترنت ومكوناته؟', scene: true,
    notes: (
      <>
        <p><b>مراجعة لما سبق دراسته:</b></p>
        <p><b>الإنترنت (Internet):</b> شبكة عالمية عملاقة تربط ملايين الشبكات ومليارات الأجهزة ببعضها (Network of Networks)، وكان موجودًا قبل الويب بسنوات طويلة.</p>
        <p><b>الإنترنت ببساطة يتكون من ٣ عناصر أساسية:</b></p>
        <ul>
          <li><b>١. أجهزة (Devices):</b> أجهزة المستخدمين (كمبيوتر، هاتف) وخوادم (Servers) تخزن البيانات وتستضيف المواقع.</li>
          <li><b>٢. وسيلة اتصال (Transmission Media):</b> كابلات (ألياف ضوئية بحرية وأسلاك) وموجات لاسلكية (Wi-Fi، أقمار صناعية) تنقل الإشارات.</li>
          <li><b>٣. قواعد تنظم حركة الاتصال (Protocols):</b> معايير وقوانين موحدة (مثل حزمة <b>TCP/IP</b>) تنظم كيفية إرسال واستقبال البيانات وفهمها بين الأجهزة.</li>
        </ul>
        <p><b>الربط بالدرس:</b> الإنترنت هو "شبكة الطرق والبنية التحتية"، بينما الويب (Web) هو مجرد خدمة واحدة تعمل فوقه.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مراجعة">ما هو الإنترنت ومما يتكون؟</Heading>
        <Box x={80} y={145} w={1120} h={75} c="blue" fill="blue" size={30} tc="ink">
          🌍 <span style={{ fontWeight: 'bold' }}>الإنترنت (Internet):</span> شبكة عالمية عملاقة بتربط مليارات الأجهزة ببعضها
        </Box>

        {/* 1. أجهزة (Devices) */}
        <Box x={850} y={245} w={340} h={285} c="blue" at={1} />
        <Doodle x={1020} y={305} icon="💻" size={78} c="blue" fill="blue" at={1} />
        <Txt x={1020} y={365} size={30} c="blue" at={1}>① أجهزة (Devices)</Txt>
        <Txt x={1020} y={435} w={300} size={23} c="ink" at={1} style={{ lineHeight: 1.5 }}>
          أجهزة شخصية (كمبيوتر، موبايل) + خوادم (Servers) بتخزن المواقع والبيانات
        </Txt>
        <Txt x={1020} y={495} size={26} at={1}>🖥️ 📱 🗄️</Txt>

        {/* 2. وسيلة اتصال (Media) */}
        <Arrow from={[850, 385]} to={[810, 385]} c="blue" at={2} />
        <Box x={470} y={245} w={340} h={285} c="green" at={2} />
        <Doodle x={640} y={305} icon="🔌" size={78} c="green" fill="green" at={2} />
        <Txt x={640} y={365} size={30} c="green" at={2}>② وسيلة اتصال</Txt>
        <Txt x={640} y={435} w={300} size={23} c="ink" at={2} style={{ lineHeight: 1.5 }}>
          Wired (الكابلات) + <br />Wireless (اللاسلكي)
        </Txt>
        <Txt x={640} y={495} size={26} at={2}>🌊 📡 🌐</Txt>

        {/* 3. قواعد تنظم الاتصال (Protocols) */}
        <Arrow from={[470, 385]} to={[430, 385]} c="green" at={3} />
        <Box x={90} y={245} w={340} h={285} c="purple" at={3} />
        <Doodle x={260} y={305} icon="📜" size={78} c="purple" fill="purple" at={3} />
        <Txt x={260} y={365} size={30} c="purple" at={3}>③ قواعد بتنظم الاتصال</Txt>
        <Txt x={260} y={435} w={300} size={23} c="ink" at={3} style={{ lineHeight: 1.5 }}>
          بروتوكولات وقوانين موحدة
        </Txt>
        <Txt x={260} y={495} size={26} at={3}>🚦 🤝 📦</Txt>
      </Scene>
    ),
  },
  {
    id: 'problem-1989', title: 'المشكلة سنة 1989', scene: true,
    notes: (
      <>
        <p>سنة 1989 في معمل <b>CERN</b> في سويسرا: آلاف الباحثين من دول مختلفة، كل واحد مستنداته على جهاز مختلف وبنظام مختلف.</p>
        <p>علشان توصل لمعلومة لازم تعرف هي على أنهي جهاز وتستخدم برنامج مخصوص: المعلومات موجودة بس متفرقة.</p>
        <p><b>Tim Berners-Lee</b>، عالم بريطاني في CERN، اقترح نظام يربط المستندات ببعض بروابط مهما كان الجهاز اللي عليه المستند.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="معمل CERN · سويسرا">سنة 1989: المشكلة</Heading>
        {([[560, 250, 'Mac'], [330, 210, 'Unix'], [120, 300, 'PC'], [470, 440, 'NeXT'], [210, 480, 'VAX']] as const).map(([x, y, l], i) => (
          <Doodle key={l} x={x} y={y} icon="🖥️" size={92} label={l} lsize={26} at={1} delay={i * 0.2} />
        ))}
        <Line at={1} delay={1} dashed c="red" pts={[[510, 255], [380, 220]]} />
        <Line at={1} delay={1.1} dashed c="red" pts={[[285, 230], [165, 290]]} />
        <Line at={1} delay={1.2} dashed c="red" pts={[[430, 410], [250, 460]]} />
        <Txt x={445} y={215} size={44} c="red" at={1} delay={1.3}>؟</Txt>
        <Txt x={225} y={245} size={44} c="red" at={1} delay={1.4}>؟</Txt>
        <Txt x={340} y={410} size={44} c="red" at={1} delay={1.5}>؟</Txt>
        <Txt x={340} y={625} size={40} c="red" at={2}>المعلومات موجودة… بس متفرقة!</Txt>
        <Mark x={60} y={585} w={560} h={85} at={2} delay={0.5} />
        <Line pts={[[680, 170], [690, 420], [680, 670]]} c="ink" sw={1.5} dashed />
        <Doodle x={985} y={300} icon="👨‍🔬" size={140} c="blue" fill="blue" label="Tim Berners-Lee" lsize={36} lc="blue" at={3} />
        <Box x={740} y={460} w={490} h={130} c="blue" size={34} at={4}>فكرة: نربط المستندات ببعض بـ <span style={{ color: 'var(--pen-red)' }}>روابط 🔗</span></Box>
      </Scene>
    ),
  },
  {
    id: 'idea', title: 'الويب = مستندات + روابط', scene: true,
    notes: (
      <>
        <p><b>World Wide Web:</b> نظام لنشر المستندات والوصول ليها عبر الإنترنت، والمستندات فيه مربوطة ببعض بـ <b>Hyperlinks</b>. تضغط رابط في مستند يفتح مستند تاني حتى لو على جهاز في بلد تانية.</p>
        <p><b>الويب مش هو الإنترنت.</b> الإنترنت هو الشبكة اللي بتوصّل الأجهزة، وكانت موجودة قبل الويب. الويب خدمة شغالة فوقها، زي الإيميل.</p>
        <p>سنة 1990 اشتغل أول Web Server وأول متصفح، وسنة 1991 الويب بقى متاح للناس برّه CERN.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الويب = مستندات + روابط</Heading>
        {([[960, 'جهاز في سويسرا'], [575, 'جهاز في أمريكا'], [190, 'جهاز في اليابان']] as const).map(([x, l], i) => (
          <Paper key={l} x={x} y={160} w={150} h={170} label="" at={1} delay={i * 0.25}>
            <div className="hand" style={{ position: 'static', fontSize: 24, whiteSpace: 'normal', textAlign: 'center' }}>📄<br />{l}</div>
          </Paper>
        ))}
        <Arrow from={[950, 245]} to={[735, 245]} bend={-40} c="red" label="رابط 🔗" at={2} />
        <Arrow from={[565, 245]} to={[350, 245]} bend={-40} c="red" label="رابط 🔗" at={2} delay={0.4} />
        <Txt x={640} y={400} size={36} c="red" at={3}>الويب ≠ الإنترنت</Txt>
        <Box x={120} y={570} w={1040} h={90} c="green" fill="green" size={32} tc="ink" at={3} delay={0.3}>🌍 الإنترنت: الشبكة اللي بتوصّل الأجهزة (موجودة قبل الويب)</Box>
        <Box x={700} y={450} w={420} h={80} c="blue" fill="blue" size={32} tc="ink" at={4}>🌐 الويب: خدمة على الانترنت</Box>
        <Box x={160} y={450} w={420} h={80} c="purple" fill="purple" size={32} tc="ink" at={4} delay={0.3}>✉️ الإيميل: خدمة تانية</Box>
      </Scene>
    ),
  },
  {
    id: 'host-and-domain', title: 'يعني إيه Host و Domain؟', scene: true,
    notes: (
      <>
        <p><b>علشان أي موقع ويب يشتغل ويكون متاح للناس، محتاج حاجتين أساسيتين:</b></p>
        <ul>
          <li><b>١. الاستضافة (Web Host = Server):</b> جهاز كمبيوتر قوي متصل بالإنترنت 24/7 بمواصفات خاصة، بتأجّر فيه مساحة تخزينية تحط عليها ملفات موقعك (صفحات HTML، صور، بيانات).</li>
          <li><b>٢. اسم النطاق (Domain Name):</b> الاسم الفريد والمميز للموقع (زي <code>google.com</code> أو <code>univ.example</code>). وظيفته يسهّل على الناس الوصول للموقع بدل ما يكتبوا عنوان الـ IP الرقمي المعقد للسيرفر.</li>
        </ul>
        <p><b>التشبيه للتوضيح:</b> الـ <b>Host</b> هو البيت أو المحل الفعلي… والـ <b>Domain</b> هو اسم الشارع وعنوان البيت المكتوب على الباب!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="أساسيات إطلاق أي موقع">يعني إيه Host و Domain؟</Heading>

        {/* 1. Host = Server (Right) */}
        <Box x={670} y={155} w={530} h={375} c="orange" at={1} />
        <Doodle x={935} y={220} icon="🗄️" size={85} c="orange" fill="orange" at={1} />
        <Txt x={935} y={285} size={32} c="orange" at={1}>🏢 الاستضافة (Host = Server)</Txt>
        <Txt x={935} y={345} w={470} size={24} c="ink" at={1}>• كمبيوتر قوي متصل بالإنترنت 24 ساعة بدون انقطاع</Txt>
        <Txt x={935} y={395} w={470} size={24} c="ink" at={1}>• بيخزّن ملفات موقعك (صفحات HTML، صور، بيانات)</Txt>
        <Txt x={935} y={465} size={26} c="orange" at={1}>🏠 هو "البيت أو المحل" اللي شايل حاجتك</Txt>

        {/* Arrow connecting Domain to Host */}
        <Arrow from={[580, 340]} to={[670, 340]} c="purple" label="بيشاور عليه 🎯" loff={-26} at={3} />

        {/* 2. Domain Name (Left) */}
        <Box x={80} y={155} w={500} h={375} c="blue" at={2} />
        <Doodle x={330} y={220} icon="🏷️" size={85} c="blue" fill="blue" at={2} />
        <Txt x={330} y={285} size={32} c="blue" at={2}>📍 اسم النطاق (Domain Name)</Txt>
        <Txt x={330} y={345} w={450} size={24} c="ink" at={2}>• الاسم السهل اللي بنكتبه (مثال: univ.example)</Txt>
        <Txt x={330} y={395} w={450} size={24} c="ink" at={2}>• بديل ذكي لحفظ رقم الـ IP المعقد (192.0.2.1)</Txt>
        <Txt x={330} y={465} size={26} c="blue" at={2}>🪧 هو "العنوان واليافطة" اللي بتدل الناس</Txt>

        {/* Bottom Takeaway */}
        <Box x={80} y={560} w={1120} h={100} c="green" fill="green" size={28} tc="ink" at={4}>
          💡 <span style={{ fontWeight: 'bold' }}>التشبيه الأسهل:</span> الـ <b>Host</b> هو <span style={{ color: 'var(--pen-orange)' }}>"المحل الفعلي"</span> اللي فيه بضاعتك وملفاتك… والـ <b>Domain</b> هو <span style={{ color: 'var(--pen-blue)' }}>"اليافطة والعنوان"</span> اللي بتوصّل الناس ليه!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'components', title: 'المكونات الخمسة', scene: true,
    notes: (
      <>
        <p>علشان صفحة تتطلب وتتعرض محتاجين ٥ حاجات، والمهم العلاقة بينهم مش التعريفات لوحدها:</p>
        <ul>
          <li><b>Web Browser:</b> برنامج عند المستخدم بيطلب الصفحة ويعرضها.</li>
          <li><b>Web Server:</b> جهاز/برنامج بيخزّن الصفحات ويبعتها لما تتطلب.</li>
          <li><b>URL:</b> عنوان فريد لكل مورد (صفحة، صورة…).</li>
          <li><b>HTTP:</b> بروتوكول: قواعد الطلب والرد بين المتصفح والسيرفر.</li>
          <li><b>HTML:</b> لغة بتوصف محتوى الصفحة وبنيتها.</li>
        </ul>
        <p>الجملة اللي تربطهم: المتصفح بيستخدم HTTP علشان يطلب المورد اللي عنوانه URL من الـ Web Server، والسيرفر يرد بملف HTML يعرضه المتصفح.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>علشان صفحة تظهر: ٥ حاجات</Heading>
        <Browser x={800} y={190} w={410} h={270} url="www.univ.example/about.html" at={1}>
          <div style={{ fontSize: 34 }}>جامعة المستقبل</div><div style={{ fontSize: 22, opacity: .7 }}>تأسست سنة 2005…</div>
        </Browser>
        <Txt x={1005} y={500} size={30} c="blue" at={1} delay={0.5}>① Web Browser: بيطلب ويعرض</Txt>
        <Doodle x={190} y={320} icon="🗄️" size={150} c="orange" fill="orange" at={2} />
        <Txt x={190} y={445} size={30} c="orange" at={2} delay={0.4}>② Web Server = Host</Txt>
        <Txt x={190} y={485} size={26} c="orange" at={2} delay={0.5}>بيخزّن ويبعت</Txt>
        <Mark x={880} y={190} w={330} h={50} c="purple" at={3} />
        <Txt x={580} y={185} size={30} c="purple" at={3} delay={0.4}>③ URL (domain) = عنوان الموقع</Txt>
        <Arrow from={[740, 192]} to={[875, 212]} c="purple" bend={-12} at={3} delay={0.3} />
        <Arrow from={[790, 275]} to={[285, 275]} c="blue" at={4} />
        <Txt x={720} y={245} size={28} c="blue" at={4} delay={0.4}>طلب ←</Txt>
        <Arrow from={[285, 375]} to={[790, 375]} c="green" at={5} />
        <Txt x={350} y={405} size={28} c="green" at={5} delay={0.4}>→ رد</Txt>
        <Txt x={535} y={325} size={32} c="red" at={4} delay={0.6}>④ HTTP = قواعد الطلب والرد</Txt>
        <Paper x={480} y={420} w={110} h={120} at={5} delay={0.4}><div style={{ fontSize: 30, textAlign: 'center' }}>📄<br />HTML</div></Paper>
        <Txt x={535} y={585} size={30} c="green" at={5} delay={0.7}>⑤ HTML = لغة كتابة الصفحة</Txt>
        <Note x={850} y={555} w={340} h={135} rot={2} size={27} at={6}>يطلب بـ <b>HTTP</b><br />العنوان <b>URL</b><br />← يرجع <b>HTML</b></Note>
      </Scene>
    ),
  },
  {
    id: 'html-why', title: 'يعني إيه HTML ببساطة؟', scene: true,
    notes: (
      <>
        <p><b>HTML (HyperText Markup Language):</b> لغة كتابة صفحات الويب، والهدف الأساسي منها هو توحيد طريقة عرض المستندات على كل الأجهزة.</p>
        <p><b>أهم النقاط لتوضيحها ببساطة:</b></p>
        <ul>
          <li><b>الهيكل والمحتوى:</b> بتحدد هيكل الصفحة (ده عنوان، دي فقرة، دي صورة، ده زرار)، زي الهيكل العظمي للجسم أو الطوب في المبنى.</li>
          <li><b>لغة ترميز مش برمجة:</b> لغة توصيفية (Markup) بتستخدم علامات وأقواس اسمها <b>Tags</b>؛ مفيهاش ذكاء أو شروط أو حسابات.</li>
          <li><b>المتصفح هو اللي بيعرضها:</b> المتصفح هو البرنامج اللي بيقرا كود الـ HTML ده ويفهم وسومه ويحوّله لشكل مرئي قدام المستخدم.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الهيكل العظمي لصفحات الويب">يعني إيه HTML ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={75} c="blue" fill="blue" size={30} tc="ink">
          📄 <span style={{ fontWeight: 'bold' }}>HTML:</span> هي لغة كتابة صفحات الويب… بتحدد <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>هيكل ومحتوى</span> الصفحة
        </Box>

        {/* 1. الهيكل العظمي للصفحة (Right) */}
        <Box x={670} y={235} w={530} h={305} c="green" at={1} />
        <Doodle x={935} y={295} icon="🏗️" size={80} c="green" fill="green" at={1} />
        <Txt x={935} y={375} size={30} c="green" at={1}>① الهيكل العظمي للصفحة</Txt>
        <Txt x={935} y={415} w={480} size={23} c="ink" at={1}>• بتحدد الصفحة فيها إيه: ده عنوان، دي فقرة، ده زرار</Txt>
        <Txt x={935} y={455} w={480} size={23} c="ink" at={1}>• من غيرها مفيش صفحة (زي الطوب في العمارة)</Txt>
        <Txt x={935} y={500} size={26} c="green" at={1}>🦴 هي الأساس اللي بيتبني عليه باقي الصفحة</Txt>

        {/* 2. لغة ترميز مش برمجة (Left) */}
        <Box x={80} y={235} w={530} h={305} c="orange" at={2} />
        <Doodle x={345} y={295} icon="🏷️" size={80} c="orange" fill="orange" at={2} />
        <Txt x={345} y={355} size={30} c="orange" at={2}>② لغة ترميز (Tags) مش برمجة</Txt>
        <Txt x={345} y={415} w={480} size={23} c="ink" at={2}>• مش برمجة: مفيهاش حسابات أو ذكاء أو أوامر شرطية</Txt>
        <Txt x={345} y={455} w={480} size={23} c="ink" at={2}>• ترميز: بتعلّم الكلام بـ Tags زي &lt;h1&gt; للعنوان و &lt;p&gt; للفقرة</Txt>
        <Txt x={345} y={500} size={26} c="orange" at={2}>🌐 المتصفح بيقرا الـ Tags دي ويعرضها قدامك</Txt>

        {/* الخلاصة في الأسفل */}
        <Box x={80} y={560} w={1120} h={100} c="purple" fill="purple" size={28} tc="ink" at={3}>
          💡 <span style={{ fontWeight: 'bold' }}>الخلاصة:</span> الـ HTML بتجاوب على سؤال: <span style={{ color: 'var(--pen-purple)', fontWeight: 'bold' }}>«الصفحة دي فيها إيه وشكل هيكلها إيه؟»</span>
        </Box>
      </Scene>
    ),
  },
  {
    id: 'html-render', title: 'المتصفح بيعرض HTML إزاي؟', scene: true,
    notes: (
      <>
        <p>المتصفح بيقرا كود HTML، ويفهم كل عنصر، ويبني منه تمثيل داخلي للمستند (هيكل مترتب للعناصر)، وبعدين يرسم كل عنصر بالشكل المناسب.</p>
        <p>HTML بيوصف <b>ده إيه</b> (عنوان، فقرة، رابط)، والمتصفح هو اللي بيقرر يبان إزاي. تفاصيل الهيكل الداخلي (DOM) مش موضوع الدرس ده.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المتصفح بيعرض HTML إزاي؟</Heading>
        <Paper x={900} y={180} w={330} h={200} label="الكود اللي وصل"><Code lines={ABOUT} size={20} /></Paper>
        <Txt x={1065} y={425} size={30} c="blue" at={1}>① يقرا الكود</Txt>
        <Arrow from={[890, 280]} to={[830, 280]} c="blue" at={1} delay={0.3} />
        <Box x={505} y={170} w={230} h={60} c="purple" fill="purple" tc="ink" size={28} at={2}>📄 الصفحة</Box>
        {([[410, 'عنوان · h1'], [555, 'فقرة · p'], [700, 'رابط · a']] as const).map(([x, t], i) => (
          <span key={t} className="contents">
            <Line pts={[[620, 232], [x + 65, 300]]} c="purple" sw={2} at={2} delay={0.3 + i * 0.15} />
            <Box x={x} y={300} w={130} h={56} c="purple" size={24} at={2} delay={0.4 + i * 0.15}>{t}</Box>
          </span>
        ))}
        <Txt x={620} y={400} size={28} c="purple" at={2} delay={0.9}>② يفهم كل عنصر ويبني تمثيل للمستند</Txt>
        <Arrow from={[470, 430]} to={[400, 470]} c="green" bend={-20} at={3} />
        <Browser x={50} y={440} w={460} h={230} c="green" at={3} delay={0.2}>
          <div style={{ fontSize: 40 }}>جامعة المستقبل</div>
          <div style={{ fontSize: 24 }}>تأسست سنة 2005</div>
          <div style={{ fontSize: 24, color: 'var(--pen-blue)', textDecoration: 'underline' }}>تواصل معنا 👆</div>
        </Browser>
        <Txt x={870} y={500} size={30} c="green" at={3} delay={0.6}>③ يرسم كل عنصر بشكله</Txt>
        <Txt x={870} y={545} size={24} at={3} delay={0.8}>العنوان كبير · الرابط أزرق وتدوس عليه</Txt>
        <Note x={620} y={590} w={580} h={95} rot={-1} size={27} at={4}>HTML بيقول <b>ده إيه</b>… والمتصفح بيقرر <b>يبان إزاي</b></Note>
      </Scene>
    ),
  },
  {
    id: 'html-try', title: '🧪 جرّب: اكتب HTML',
    notes: <p>خلّي الطلاب يغيّروا الكلام، ويضيفوا عناصر من الزراير، ويلاحظوا إن كل Tag ليه شكل مختلف في المعاينة. المعاينة محمية: مفيش أي كود بيتنفّذ فيها.</p>,
    render: () => (
      <>
        <Eyebrow>🧪 جرّب بنفسك</Eyebrow>
        <Title>اكتب HTML… وشوف المتصفح بيعرضه إزاي</Title>
        <HtmlPlayground />
      </>
    ),
  },
];
