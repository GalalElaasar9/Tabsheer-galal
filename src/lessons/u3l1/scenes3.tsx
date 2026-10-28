// Board scenes · parts 6–10: JavaScript, background requests, API, page vs app, summary.
import type { ColorKey, FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Cylinder, Doodle, Ellipse, Heading, Line, Mark, Note, Paper, Scene, Txt,
} from '../../sketch/Sketch';
import { C } from './common';

/** A small form drawn three ways: plain HTML, styled with CSS, and reacting with JavaScript. */
function Form({ x, title, c, styled, js, at }: { x: number; title: string; c: ColorKey; styled?: boolean; js?: boolean; at: number }) {
  const ink = styled ? c : 'ink';
  return (
    <>
      <Box x={x} y={200} w={330} h={250} c={ink} fill={styled ? c : undefined} sw={styled ? 2.6 : 1.6} rough={styled ? 1 : 2} at={at} />
      <Txt x={x + 165} y={235} size={styled ? 32 : 26} c={ink} at={at} delay={0.3}>{styled ? '🎓 النتيجة' : 'النتيجة'}</Txt>
      <Box x={x + 40} y={280} w={250} h={50} c={ink} sw={styled ? 2.4 : 1.4} rough={styled ? 0.8 : 2} at={at} delay={0.4} />
      <Box x={x + 105} y={355} w={120} h={50} c={ink} fill={styled ? c : undefined} sw={styled ? 2.4 : 1.4}
        rough={styled ? 0.8 : 2} size={26} tc={ink} at={at} delay={0.5}>عرض</Box>
      {js && <Txt x={x + 250} y={415} size={46} at={at} delay={0.9}>👆</Txt>}
      {js && <Note x={x + 20} y={455} w={240} h={70} rot={-3} color="red" size={26} at={at} delay={1.2}>⚠️ أرقام بس!</Note>}
      <Txt x={x + 165} y={570} size={36} c={c} at={at} delay={0.6}>{title}</Txt>
    </>
  );
}

const portal = (result?: string) => (
  <div style={{ fontSize: 24 }}>
    <div style={{ color: 'var(--pen-purple)' }}>🎓 بوابة الطلاب · الرئيسية · نتائجي</div>
    <div style={{ marginTop: 8 }}>🔍 بحث: 2403</div>
    <div style={{ marginTop: 10, minHeight: 60, border: '2px dashed var(--pen-pink)', borderRadius: 8, padding: '4px 10px' }}>{result ?? 'النتيجة هنا'}</div>
  </div>
);

export const part6: FrameDef[] = [
    {
    id: 'css-what', title: 'يعني إيه CSS ببساطة؟', scene: true,
    notes: (
      <>
        <p><b>CSS (Cascading Style Sheets):</b> لغة بتحدد <b>شكل</b> الصفحة: الألوان، الخطوط، الأحجام، المسافات، وترتيب العناصر على الشاشة.</p>
        <p><b>أهم النقاط:</b></p>
        <ul>
          <li><b>بتحدد الشكل مش المحتوى:</b> HTML بيقول "فيه عنوان"، وCSS بتقول "العنوان ده أزرق وكبير وفي النص".</li>
          <li><b>بتتكتب كقواعد:</b> كل قاعدة بتختار عناصر (مثلًا كل <code>h1</code>) وتقول شكلها يبقى إزاي: <code>h1 {'{'} color: blue; {'}'}</code>.</li>
          <li><b>قاعدة واحدة لكل الموقع:</b> لو عايز تغيّر لون كل العناوين في الموقع، بتغيّر سطر واحد في ملف CSS.</li>
          <li><b>لغة تنسيق مش برمجة:</b> زي HTML، مفيهاش شروط ولا قرارات.</li>
        </ul>
        <p><b>التشبيه:</b> لو HTML هو طوب العمارة، فـ CSS هي الدهان والديكور: نفس الحيطان، بس شكلها اتغيّر.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الشكل والتنسيق لصفحات الويب">يعني إيه CSS ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={75} c="blue" fill="blue" size={30} tc="ink">
          🎨 <span style={{ fontWeight: 'bold' }}>CSS:</span> لغة بتحدد <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>شكل</span> الصفحة… الألوان والخطوط والمسافات وترتيب العناصر
        </Box>

        {/* 1. بتحدد الشكل (Right) */}
        <Box x={670} y={235} w={530} h={305} c="pink" at={1} />
        <Doodle x={935} y={290} icon="🎨" size={80} c="pink" fill="pink" at={1} />
        <Txt x={935} y={360} size={30} c="pink" at={1}>① بتحدد الشكل… مش المحتوى</Txt>
        <Txt x={935} y={405} w={480} size={23} c="ink" at={1}>• HTML يقول: «فيه عنوان»</Txt>
        <Txt x={935} y={450} w={480} size={23} c="ink" at={1}>• CSS تقول: «العنوان أزرق وكبير وفي النص»</Txt>
        <Txt x={935} y={500} size={26} c="pink" at={1}>🖌️ زي الدهان والديكور في العمارة</Txt>

        {/* 2. بتتكتب كقواعد (Left) */}
        <Box x={80} y={235} w={530} h={305} c="blue" at={2} />
        <Doodle x={345} y={290} icon="📏" size={80} c="blue" fill="blue" at={2} />
        <Txt x={345} y={360} size={30} c="blue" at={2}>② بتتكتب كقواعد</Txt>
        <Txt x={345} y={405} size={26} at={2}><C>h1 {'{'} color: blue; {'}'}</C></Txt>
        <Txt x={345} y={450} w={480} size={23} c="ink" at={2}>• تختار العنصر… وتقول شكله يبقى إزاي</Txt>
        <Txt x={345} y={500} size={26} c="blue" at={2}>⚡ سطر واحد يغيّر كل عناوين الموقع</Txt>

        {/* الخلاصة في الأسفل */}
        <Box x={80} y={560} w={1120} h={100} c="purple" fill="purple" size={28} tc="ink" at={3}>
          💡 <span style={{ fontWeight: 'bold' }}>الخلاصة:</span> CSS بتجاوب على سؤال: <span style={{ color: 'var(--pen-purple)', fontWeight: 'bold' }}>«الصفحة دي شكلها إيه؟»</span>
        </Box>
      </Scene>
    ),
  },
    {
    id: 'js-what', title: 'يعني إيه JavaScript ببساطة؟', scene: true,
    notes: (
      <>
        <p><b>JavaScript:</b> لغة برمجة بتشتغل جوه المتصفح، ووظيفتها تدّي الصفحة <b>سلوك</b>: تخليها ترد على اللي المستخدم بيعمله.</p>
        <p><b>أهم النقاط:</b></p>
        <ul>
          <li><b>لغة برمجة بجد:</b> فيها شروط (لو… يبقى…) وحسابات وقرارات، وده اللي مش موجود في HTML ولا CSS.</li>
          <li><b>بتسمع وترد:</b> بتستنى <b>حدث</b> (ضغطة زرار، كتابة في خانة، اختيار من قائمة)، وترد عليه: تظهر رسالة، تحسب حاجة، تغيّر جزء من الصفحة.</li>
          <li><b>بتغيّر الصفحة بعد ما اتعرضت:</b> تقدر تضيف أو تشيل أو تعدّل أي عنصر من غير ما الصفحة تتحمّل من جديد.</li>
        </ul>
        <p><b>التشبيه:</b> لو HTML هو طوب العمارة، فـ JavaScript هي الكهربا والأسانسير: اللي بيخلّي المبنى يشتغل ويرد عليك.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="السلوك والتفاعل في صفحات الويب">يعني إيه JavaScript ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={75} c="green" fill="green" size={30} tc="ink">
          ⚡ <span style={{ fontWeight: 'bold' }}>JavaScript:</span> لغة برمجة شغالة جوه المتصفح… بتخلّي الصفحة <span style={{ color: 'var(--pen-green)', fontWeight: 'bold' }}>تتفاعل</span> مع المستخدم
        </Box>

        {/* 1. لغة برمجة بجد (Right) */}
        <Box x={670} y={235} w={530} h={305} c="purple" at={1} />
        <Doodle x={935} y={290} icon="🧠" size={80} c="purple" fill="purple" at={1} />
        <Txt x={935} y={360} size={30} c="purple" at={1}>① لغة برمجة بجد</Txt>
        <Txt x={935} y={405} w={480} size={23} c="ink" at={1}>• فيها شروط وحسابات وقرارات (عكس HTML و CSS)</Txt>
        <Txt x={935} y={450} size={24} at={1}><C>if (id == "") alert("اكتب رقمك")</C></Txt>
        <Txt x={935} y={500} size={26} c="purple" at={1}>💡 زي الكهربا والأسانسير في العمارة</Txt>

        {/* 2. بتسمع وترد (Left) */}
        <Box x={80} y={235} w={530} h={305} c="orange" at={2} />
        <Doodle x={345} y={290} icon="👂" size={80} c="orange" fill="orange" at={2} />
        <Txt x={345} y={360} size={30} c="orange" at={2}>② بتسمع… وترد</Txt>
        <Txt x={345} y={405} w={480} size={23} c="ink" at={2}>• بتستنى حدث: ضغطة زرار، كتابة، اختيار</Txt>
        <Txt x={345} y={450} w={480} size={23} c="ink" at={2}>• وترد: تظهر رسالة، تحسب، تغيّر جزء من الصفحة</Txt>
        <Txt x={345} y={500} size={26} c="orange" at={2}>🔄 بتغيّر الصفحة بعد ما اتعرضت</Txt>

        {/* الخلاصة في الأسفل */}
        <Box x={80} y={560} w={1120} h={100} c="purple" fill="purple" size={28} tc="ink" at={3}>
          💡 <span style={{ fontWeight: 'bold' }}>الخلاصة:</span> JavaScript بتجاوب على سؤال: <span style={{ color: 'var(--pen-purple)', fontWeight: 'bold' }}>«الصفحة دي بتعمل إيه لما أتفاعل معاها؟»</span>
        </Box>
      </Scene>
    ),
  },
  {
    id: 'why-js', title: 'ليه JavaScript؟', scene: true,
    notes: (
      <>
        <p><b>المثال:</b> طالب كتب حروف (abc) بدل رقمه ودوس "عرض".</p>
        <p><b>من غير JavaScript:</b> الصفحة (HTML وCSS) بتعرض بس ومبتفكرش، فمتعرفش إن ده غلط. بتبعته للسيرفر، والسيرفر يرد بصفحة جديدة كاملة علشان يقول "الرقم غلط".</p>
        <p><b>مع JavaScript:</b> كود شغال جوه الصفحة نفسها بيتأكد ويقول فورًا "أرقام بس!" من غير ما يروح للسيرفر.</p>
        <p><b>JavaScript:</b> لغة برمجة بتشتغل جوه المتصفح، بتخلّي الصفحة ترد على المستخدم. ظهرت سنة 1995.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>ليه محتاجين JavaScript؟</Heading>
        <Line pts={[[640, 150], [646, 400], [640, 560]]} dashed sw={2} />

        {/* من غير JavaScript */}
        <Txt x={960} y={180} size={36} c="red">😐 من غير JavaScript</Txt>
        <Browser x={790} y={220} w={340} h={140} c="red" at={1}>
          <div style={{ fontSize: 26 }}>رقم الطالب: <span className="sk-input" style={{ width: '3em', textAlign: 'center' }}>abc</span> <span className="sk-btn">عرض</span></div>
        </Browser>
        <Txt x={960} y={410} size={28} c="red" at={1} delay={0.4}>🐢 يروح للسيرفر ويرجع بصفحة جديدة</Txt>
        <Txt x={960} y={460} size={28} c="red" at={1} delay={0.7}>علشان يقول: «الرقم غلط»</Txt>

        {/* مع JavaScript */}
        <Txt x={320} y={180} size={36} c="green" at={2}>🙂 مع JavaScript</Txt>
        <Browser x={150} y={220} w={340} h={140} c="green" at={2}>
          <div style={{ fontSize: 26 }}>رقم الطالب: <span className="sk-input" style={{ width: '3em', textAlign: 'center' }}>abc</span> <span className="sk-btn">عرض</span></div>
          <div className="sk-pop">⚠️ أرقام بس!</div>
        </Browser>
        <Txt x={320} y={410} size={28} c="green" at={2} delay={0.4}>⚡ الصفحة نفسها بتقولك فورًا</Txt>
        <Txt x={320} y={460} size={28} c="green" at={2} delay={0.7}>من غير ما تروح للسيرفر</Txt>

        <Box x={190} y={570} w={900} h={95} c="purple" fill="purple" size={30} tc="ink" at={3}>
          ⚡ <b>JavaScript</b> = لغة برمجة شغالة <b>جوه المتصفح</b>… بتخلّي الصفحة ترد عليك
        </Box>
      </Scene>
    ),
  },
  {
    id: 'layers', title: 'HTML · CSS · JavaScript', scene: true,
    notes: (
      <>
        <ul>
          <li><b>HTML:</b> يحدد بنية المحتوى: إيه اللي في الصفحة (عنوان، خانة، زرار).</li>
          <li><b>CSS:</b> يتحكم في المظهر والتنسيق: ألوان، مسافات، خطوط، ترتيب.</li>
          <li><b>JavaScript:</b> يضيف السلوك والتفاعل: بيعمل إيه لما المستخدم يتفاعل.</li>
        </ul>
        <p>JavaScript تقدر تقرا وتغيّر محتوى الصفحة وشكلها بعد ما اتعرضت.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>نفس الفورم… ٣ طبقات</Heading>
        <Form x={880} title="HTML = البنية 🧱" c="orange" at={1} />
        <Txt x={830} y={325} size={56} c="purple" at={2}>+</Txt>
        <Form x={475} title="CSS = المظهر 🎨" c="blue" styled at={2} />
        <Txt x={425} y={325} size={56} c="purple" at={3}>+</Txt>
        <Form x={70} title="JavaScript = السلوك ⚡" c="green" styled js at={3} />
        <Txt x={1045} y={625} size={26} c="ink" at={1} delay={0.8}>إيه اللي في الصفحة</Txt>
        <Txt x={640} y={625} size={26} c="ink" at={2} delay={0.8}>شكله إيه</Txt>
        <Txt x={235} y={625} size={26} c="ink" at={3} delay={1.4}>بيعمل إيه لما تتفاعل</Txt>
      </Scene>
    ),
  },
  {
    id: 'js-where', title: 'JavaScript شغالة فين؟', scene: true,
    notes: (
      <>
        <p>السيرفر بيبعت ملفات JavaScript مع الصفحة، والمتصفح هو اللي بيشغّلها على جهاز المستخدم.</p>
        <p>التحقق من المدخلات في المتصفح للراحة (تنبيه سريع)، لكن الـ Backend لازم يتحقق تاني، لأن أي حد ممكن يتحكم في الكود اللي شغال على جهازه.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>JavaScript شغالة فين؟</Heading>
        <Doodle x={180} y={320} icon="🗄️" size={140} c="orange" fill="orange" label="السيرفر" lc="orange" />
        <Arrow from={[260, 320]} to={[780, 320]} c="ink" at={1} />
        {(['HTML', 'CSS', 'JS ⚡'] as const).map((t, i) => (
          <Paper key={t} x={340 + i * 140} y={200} w={110} h={95} at={1} delay={0.3 + i * 0.2}><div style={{ fontSize: 26, textAlign: 'center' }}>📄<br />{t}</div></Paper>
        ))}
        <Browser x={790} y={190} w={400} h={270} c="blue" at={2}>
          <div style={{ fontSize: 30, textAlign: 'center', marginTop: 30 }}>⚙️⚡<br />المتصفح بيشغّل الكود</div>
        </Browser>
        <Txt x={990} y={500} size={32} c="blue" at={2} delay={0.5}>على جهاز المستخدم 💻</Txt>
      </Scene>
    ),
  },
];

export const part7: FrameDef[] = [
  {
    id: 'apps-era', title: 'الويب بقى مكان بنقعد فيه', scene: true,
    notes: <p>حوالي 2004–2005 ظهرت خدمات زي Gmail (2004) وGoogle Maps (2005)، والناس بقت تستخدم الويب زي البرامج: وقت طويل وتفاعل كتير. تحميل الصفحة كلها مع كل ضغطة بقى مشكلة واضحة.</p>,
    render: () => (
      <Scene>
        <Heading>الويب بقى مكان بنقعد فيه</Heading>
        <Doodle x={1020} y={250} icon="✉️" size={120} c="red" fill="red" label="Gmail · 2004" lsize={30} lc="red" at={1} />
        <Doodle x={760} y={250} icon="🗺️" size={120} c="green" fill="green" label="Google Maps · 2005" lsize={30} lc="green" at={1} delay={0.4} />
        <Line pts={[[620, 150], [628, 400], [620, 650]]} dashed sw={1.6} at={2} />
        <Txt x={880} y={440} size={32} c="ink" at={2}>زمان: تفتح الصفحة… تقراها… وتمشي</Txt>
        <Txt x={880} y={500} size={32} c="purple" at={2} delay={0.4}>دلوقتي: قاعد بالساعات · مئات الضغطات</Txt>
        <Doodle x={330} y={300} icon="🖱️" size={130} c="purple" fill="purple" at={2} delay={0.6} />
        <Txt x={330} y={420} size={44} c="purple" at={2} delay={0.8}>× 100</Txt>
        <Note x={160} y={520} w={420} h={130} rot={-2} color="pink" size={28} at={3}>ولو كل ضغطة<br />بتحمّل الصفحة كلها؟ 😩</Note>
      </Scene>
    ),
  },
  {
    id: 'reload-problem', title: 'الصفحة كلها؟!', scene: true,
    notes: (
      <>
        <p>في الطريقة اللي اتعلمناها (SSR)، لو عايز معلومة صغيرة جديدة: المتصفح يطلب صفحة جديدة كاملة، السيرفر يبني الصفحة كلها من جديد (الهيدر والقوائم وكل حاجة)، والمتصفح يشيل القديمة ويعرض الجديدة.</p>
        <p>الفكرة الجديدة: JavaScript اللي شغالة أصلًا في الصفحة تطلب البيانات الناقصة بس في الخلفية، وتحطها في المكان المناسب.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>عايز معلومة صغيرة… أحمّل الصفحة كلها؟!</Heading>
        <Browser x={780} y={200} w={420} h={260} c="blue" at={1}>{portal()}</Browser>
        <Arrow from={[770, 330]} to={[570, 330]} c="red" bend={-40} label="صفحة كاملة تاني" at={2} />
        <Browser x={140} y={200} w={420} h={260} c="blue" at={2} delay={0.4}>{portal('يوسف · 74 · 80 · 86')}</Browser>
        <Line pts={[[790, 210], [990, 330], [1190, 450]]} c="red" sw={5} at={3} />
        <Line pts={[[1190, 210], [990, 330], [790, 450]]} c="red" sw={5} at={3} delay={0.3} />
        <Txt x={990} y={500} size={30} c="red" at={3} delay={0.5}>الهيدر والقوائم اتعادوا على الفاضي</Txt>
        <Mark x={150} y={330} w={400} h={110} c="green" at={4} />
        <Note x={360} y={540} w={560} h={120} rot={1.5} color="green" size={30} at={4} delay={0.4}>💡 الفكرة: نجيب البيانات الناقصة بس… ونحطها في مكانها</Note>
      </Scene>
    ),
  },
  {
    id: 'async-steps', title: 'طلب في الخلفية', scene: true,
    notes: (
      <>
        <ul>
          <li>١. المستخدم يتفاعل مع الصفحة (يكتب رقم ويضغط بحث).</li>
          <li>٢. JavaScript تبعت طلب في الخلفية. الصفحة فاضلة قدامه ويقدر يستخدمها.</li>
          <li>٣. السيرفر يعالج الطلب (ويسأل قاعدة البيانات).</li>
          <li>٤. السيرفر يرجّع البيانات المطلوبة بس.</li>
          <li>٥. JavaScript تحدّث الجزء المناسب من الصفحة.</li>
        </ul>
        <p>تحديث جزء من الصفحة مش معناه إن مستند HTML اتحمّل كله من جديد.</p>
        <p><b>انتقال للصفحة الجاية:</b> اسأل الطلاب: JavaScript عرفت منين تبعت الطلب فين، وتبعت معاه إيه، وهيرجعلها إيه؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>طلب في الخلفية</Heading>
        <Browser x={700} y={190} w={500} h={300} c="blue">{portal()}</Browser>
        <Doodle x={660} y={540} icon="⚡" size={76} c="orange" fill="orange" label="JS" lsize={26} lc="orange" />
        <Doodle x={180} y={290} icon="⚙️" size={130} c="orange" label="السيرفر" lc="orange" />
        <Cylinder x={130} y={500} w={100} h={110} label="DB" />
        {/* <Mark x={715} y={268} w={230} h={56} c="red" at={1} /> */}
        <Txt x={640} y={300} size={30} c="red" at={1} delay={0.3}>① بحث</Txt>
        <Arrow from={[620, 520]} to={[260, 330]} c="blue" bend={-20} at={2} />
        <Txt x={470} y={330} size={28} c="blue" at={2} delay={0.4}>② طلب صغير في الخلفية</Txt>
        {/* <Txt x={950} y={540} size={28} c="green" at={2} delay={0.6}>الصفحة لسه شغالة ✔</Txt> */}
        <Arrow from={[180, 415]} to={[180, 495]} c="green" both at={3} />
        <Txt x={340} y={470} size={28} c="orange" at={3} delay={0.3}>③ يعالج ويسأل الـ DB</Txt>
        <Arrow from={[260, 260]} to={[690, 380]} c="pink" bend={-40} at={4} />
        <Txt x={460} y={205} size={28} c="pink" at={4} delay={0.4}>④ بيانات بس: الاسم + الدرجات</Txt>
        <Browser x={700} y={190} w={500} h={300} c="blue" at={5}>{portal('يوسف عادل · 74 · 80 · 86 ✨')}</Browser>
        <Mark x={700} y={300} w={500} h={110} c="green" at={5} delay={0.5} />
        <Txt x={950} y={520} size={30} c="green" at={5} delay={0.8}>⑤ JavaScript حدّثت الجزء ده بس</Txt>
        <Note x={760} y={575} w={440} h={95} rot={-1.5} color="pink" size={28} at={6}>🤔 بس JavaScript عرفت منين تطلب إزاي؟</Note>
      </Scene>
    ),
  },
];

export const part8: FrameDef[] = [
  {
    id: 'api-problem', title: 'المشكلة: هيفهموا بعض إزاي؟', scene: true,
    notes: (
      <>
        <p><b>المشكلة:</b> JavaScript في المتصفح عايزة تطلب بيانات من السيرفر. بس الاتنين برنامجين مختلفين، اتكتبوا غالبًا على إيد ناس مختلفة. فـ JavaScript محتاجة تعرف ٣ حاجات:</p>
        <ul>
          <li>📍 تبعت الطلب على أنهي عنوان؟</li>
          <li>📝 تبعت معاه إيه بالظبط؟ (رقم الطالب؟ اسمه؟ بأي شكل؟)</li>
          <li>📦 هيرجعلها إيه؟ وبأي شكل؟</li>
        </ul>
        <p>لو كل طرف اشتغل على مزاجه، JavaScript ممكن تبعت حاجة السيرفر مش مستنيها، فمش هيفهمها، أو يرجّع حاجة هي مش عارفة تقراها.</p>
        <p><b>الحل:</b> اتفاق متكتب ومعروف للطرفين. وده موضوع الصفحة الجاية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المشكلة: هيفهموا بعض إزاي؟</Heading>
        <Doodle x={1090} y={250} icon="⚡" size={130} c="orange" fill="orange" label="JavaScript" lc="orange" />
        <Doodle x={190} y={250} icon="🗄️" size={130} c="blue" fill="blue" label="السيرفر" lc="blue" />
        <Arrow from={[1010, 250]} to={[275, 250]} c="ink" dashed />
        <Txt x={640} y={200} size={34}>عايزة تطلب بيانات… بس 🤔</Txt>
        {([[1000, '📍 أبعت فين؟'], [640, '📝 أبعت إيه؟'], [280, '📦 هيرجعلي إيه؟']] as const).map(([x, q], i) => (
          <Ellipse key={q} x={x - 160} y={350} w={320} h={95} c="purple" size={30} at={i + 1}>{q}</Ellipse>
        ))}
        <Txt x={640} y={505} size={30} c="red" at={4}>لو كل واحد اشتغل على مزاجه… محدش هيفهم التاني ❌</Txt>
        <Note x={340} y={570} w={600} h={95} rot={-1.5} color="green" size={30} at={5}>💡 محتاجين اتفاق متكتب ومعروف للطرفين</Note>
      </Scene>
    ),
  },
  {
    id: 'api-def', title: 'API = اتفاق', scene: true,
    notes: (
      <>
        <p><b>الطرفين:</b></p>
        <ul>
          <li><b>Frontend (الواجهة الأمامية):</b> اللي المستخدم شايفه وبيتعامل معاه في المتصفح: HTML وCSS وJavaScript.</li>
          <li><b>Backend:</b> اللي شغال ورا الكواليس على السيرفر: المنطق وقاعدة البيانات.</li>
        </ul>
        <p>علشان الـ Frontend يطلب حاجة من الـ Backend، فيه اتفاق متكتب ومعروف بينهم اسمه <b>API</b> (Application Programming Interface). بيحدد:</p>
        <ul>
          <li>📍 تبعت الطلب على أنهي عنوان.</li>
          <li>📝 تبعت معاه إيه (مثلًا رقم الطالب).</li>
          <li>📦 هيرجعلك إيه (الاسم والدرجات، أو رسالة خطأ لو الطالب مش موجود).</li>
        </ul>
        <p><b>التشبيه (مرسوم على السبورة):</b> الـ Frontend هو الزبون في الصالة، والـ Backend هو الشيف في المطبخ، والـ API هو المنيو. الزبون مش بيدخل المطبخ ولا يعرف الأكل بيتعمل إزاي، هو بيطلب من المنيو وبس.</p>
        <p>الفكرة أوسع من الويب وأقدم من JavaScript: أي برنامج بيطلب من نظام التشغيل يحفظ ملف بيستخدم API.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الـ API: اتفاق بين الـ Frontend والـ Backend</Heading>

        {/* Frontend (right) */}
        <Browser x={950} y={170} w={280} h={165} c="orange">
          <div style={{ fontSize: 24 }}>🎓 بوابة النتائج</div>
          <div style={{ fontSize: 22 }}>رقم الطالب: <span className="sk-input" style={{ width: '2.6em' }} /> <span className="sk-btn">⚡</span></div>
        </Browser>
        <Txt x={1090} y={370} size={36} c="orange">💻 Frontend</Txt>
        <Txt x={1090} y={410} w={280} size={22}>اللي المستخدم شايفه في المتصفح</Txt>

        {/* Backend (left) */}
        <Doodle x={150} y={250} icon="⚙️" size={120} c="blue" fill="blue" />
        <Cylinder x={225} y={200} w={75} h={95} label="DB" size={20} />
        <Txt x={190} y={370} size={36} c="blue">🗄️ Backend</Txt>
        <Txt x={190} y={410} w={280} size={22}>اللي شغال ورا الكواليس على السيرفر</Txt>

        {/* The agreement (middle) */}
        <Arrow from={[940, 255]} to={[890, 255]} c="orange" both />
        <Arrow from={[390, 255]} to={[310, 255]} c="blue" both />
        <Paper x={400} y={170} w={480} h={270} label="📜 الاتفاق (API)" c="pink" />
        <Txt x={640} y={240} size={28} at={1}>📍 تبعت فين؟ <span className="ltr" style={{ color: 'var(--pen-pink)' }}>/api/results</span></Txt>
        <Txt x={640} y={310} size={28} at={2}>📝 تبعت إيه؟ <span style={{ color: 'var(--pen-pink)' }}>رقم الطالب</span></Txt>
        <Txt x={640} y={380} size={28} at={3}>📦 هيرجعلك إيه؟ <span style={{ color: 'var(--pen-pink)' }}>الاسم والدرجات</span></Txt>

        {/* Restaurant picture under each part */}
        <Doodle x={1090} y={500} icon="🙋" size={74} c="orange" label="الزبون في الصالة" lsize={24} lc="orange" at={4} />
        <Doodle x={640} y={500} icon="🍽️" size={74} c="pink" label="المنيو" lsize={24} lc="pink" at={4} delay={0.3} />
        <Doodle x={190} y={500} icon="👨‍🍳" size={74} c="blue" label="الشيف في المطبخ" lsize={24} lc="blue" at={4} delay={0.6} />
        <Line pts={[[1030, 500], [700, 500]]} dashed c="ink" sw={1.6} at={4} delay={0.3} />
        <Line pts={[[580, 500], [250, 500]]} dashed c="ink" sw={1.6} at={4} delay={0.6} />

        <Box x={170} y={600} w={940} h={80} c="green" fill="green" size={27} tc="ink" at={5}>
          الزبون مش بيدخل المطبخ… بيطلب من المنيو. والـ Frontend بيطلب من الـ Backend حسب الـ API
        </Box>
      </Scene>
    ),
  },
];

const STAIRS = [
  ['📄 صفحات ثابتة', 'نفس المحتوى للكل'],
  ['🗃️ + Database', 'مين يعمل الصفحة؟'],
  ['⚙️ + Backend (SSR)', 'الصفحة مش بتتفاعل'],
  ['🖱️ + JavaScript', 'أي بيانات = صفحة كاملة'],
  ['⚡ + خلفية و API', ''],
] as const;

export const part10: FrameDef[] = [
  {
    id: 'concept-map', title: 'الصورة الكاملة', scene: true,
    notes: (
      <>
        <p>المسار: Web Browser ← HTTP Request ← Web Server ← Backend ← Database.</p>
        <p>الرد يرجع بطريقتين: <b>HTML جاهز</b> للعرض (زي صفحة النتيجة بالـ SSR)، أو <b>بيانات</b> تتعامل معاها JavaScript وتحدّث جزء من الواجهة (زي البحث في الخلفية).</p>
        <p>ده نموذج توضيحي للأدوار، مش الشكل الوحيد: أحيانًا الـ Web Server والـ Backend برنامج واحد، وأحيانًا مفيش Database (زي الصفحة الثابتة).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الصورة الكاملة</Heading>
        <Box x={1020} y={200} w={200} h={100} c="blue" fill="blue" tc="ink" size={30}>🖥️ Browser</Box>
        <Box x={790} y={200} w={190} h={100} c="purple" size={28} at={1}>📨 HTTP Request</Box>
        <Box x={560} y={200} w={190} h={100} c="orange" size={30} at={2}>🗄️ Web Server</Box>
        <Box x={330} y={200} w={190} h={100} c="orange" fill="orange" tc="ink" size={30} at={3}>⚙️ Backend</Box>
        <Cylinder x={110} y={185} w={170} h={140} label="Database" at={4} />
        <Arrow from={[1015, 250]} to={[985, 250]} at={1} />
        <Arrow from={[785, 250]} to={[755, 250]} at={2} />
        <Arrow from={[555, 250]} to={[525, 250]} at={3} />
        <Arrow from={[325, 250]} to={[285, 250]} at={4} />
        <Arrow from={[420, 310]} to={[1100, 310]} c="green" bend={80} sw={3.4} at={5} />
        <Txt x={760} y={432} size={32} c="green" at={5} delay={0.5}>📄 HTML جاهز ← يتعرض على طول</Txt>
        <Arrow from={[420, 310]} to={[1140, 305]} c="pink" bend={280} sw={3.4} at={6} />
        <Txt x={800} y={640} size={32} c="pink" at={6} delay={0.5}>📦 بيانات ← JavaScript تحدّث جزء</Txt>
        <Note x={70} y={560} w={360} h={110} rot={-2} size={26} color="blue" at={7}>نموذج توضيحي… مش الشكل الوحيد</Note>
      </Scene>
    ),
  },
  {
    id: 'ecosystem', title: 'Frontend · Backend · Database · API', scene: true,
    notes: (
      <>
        <ul>
          <li><b>Frontend (الواجهة الأمامية):</b> اللي المستخدم بيشوفه ويتفاعل معاه في المتصفح.</li>
          <li><b>Backend (الواجهة الخلفية):</b> على السيرفر: يعالج الطلبات ويطبّق قواعد التطبيق.</li>
          <li><b>Database (طبقة البيانات):</b> تحفظ البيانات وتوفرها عند الحاجة.</li>
          <li><b>API:</b> الاتفاق اللي بيحدد البرامج تطلب من بعض إيه وإزاي.</li>
        </ul>
        <p>دي أدوار ومفاهيم متكاملة، مش لازم كل واحد يبقى نظام منفصل فعليًا.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أدوار بتكمّل بعض</Heading>
        <Box x={860} y={180} w={350} h={130} c="blue" fill="blue" tc="ink" size={30} at={1}>💻 Frontend<br />اللي بتشوفه وتتفاعل معاه</Box>
        <Ellipse x={480} y={300} w={320} h={130} c="pink" fill="pink" tc="ink" size={30} at={4}>🔌 API<br />الاتفاق بينهم</Ellipse>
        <Box x={860} y={430} w={350} h={130} c="orange" fill="orange" tc="ink" size={30} at={2}>⚙️ Backend<br />يعالج ويقرر</Box>
        <Cylinder x={110} y={400} w={260} h={190} label="🗃️ Database" c="green" at={3} />
        <Arrow from={[855, 270]} to={[760, 320]} c="pink" both at={4} delay={0.3} />
        <Arrow from={[855, 480]} to={[760, 410]} c="pink" both at={4} delay={0.4} />
        <Arrow from={[855, 520]} to={[380, 500]} c="green" both bend={-30} at={3} delay={0.3} />
        <Note x={90} y={170} w={340} h={130} rot={-2} size={27} at={5}>أدوار ومفاهيم…<br />مش لازم أنظمة منفصلة</Note>
      </Scene>
    ),
  },
];

export const ending: FrameDef = {
  id: 'end', title: 'نهاية الدرس', scene: true,
  notes: <p>الدرس الجاي: طرق الاتصال في تطبيقات الويب: HTTP بالتفصيل، وREST، وJSON.</p>,
  render: () => (
    <Scene>
      <Txt x={640} y={200} size={84}>من صفحة ثابتة… لتطبيق ويب 🎉</Txt>
      {[['📄', 'HTML'], ['🗃️', 'Database'], ['⚙️', 'Backend'], ['🖱️', 'JavaScript'], ['🔌', 'API']].map(([icon, label], i) => (
        <Doodle key={label} x={1060 - i * 200} y={400} icon={icon} size={100} label={label} lc="blue" />
      ))}
      <Note x={390} y={540} w={500} h={120} rot={-1.5} size={30} at={1}>📚 الدرس الجاي<br /><bdi>HTTP · JSON</bdi></Note>
    </Scene>
  ),
};
