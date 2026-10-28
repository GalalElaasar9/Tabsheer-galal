// Board scenes · parts 6–10: JavaScript, background requests, API, page vs app, summary.
import type { ColorKey, FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Cylinder, Doodle, Ellipse, Heading, Line, Mark, Note, Paper, Scene, Struck, Txt,
} from '../../sketch/Sketch';

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
    id: 'js-problem', title: 'الصفحة وصلت… بس مبتردش', scene: true,
    notes: <p>من غير كود شغال جوه المتصفح، الصفحة بعد ما بتتعرض مبتقدرش ترد على المستخدم بنفسها: أي رد فعل (حتى رسالة "الرقم غلط") محتاج رحلة للسيرفر وصفحة جديدة كاملة.</p>,
    render: () => (
      <Scene>
        <Heading>الصفحة وصلت… بس مبتردش!</Heading>
        <Browser x={820} y={180} w={400} h={220} c="blue">
          <div style={{ fontSize: 26 }}>رقم الطالب: <span className="sk-input" style={{ width: '3.4em', textAlign: 'center' }}>abc</span> <span className="sk-btn">عرض</span></div>
        </Browser>
        <Txt x={915} y={300} size={46} at={1}>👆</Txt>
        <Txt x={1020} y={440} size={28} c="blue" at={1} delay={0.3}>كتب حروف بدل الرقم ودوس عرض</Txt>
        <Doodle x={200} y={290} icon="🗄️" size={130} c="orange" fill="orange" label="السيرفر" lc="orange" />
        <Arrow from={[810, 250]} to={[285, 250]} c="blue" at={2} />
        <Txt x={550} y={220} size={28} c="blue" at={2} delay={0.4}>البيانات كلها تروح للسيرفر</Txt>
        <Arrow from={[285, 340]} to={[810, 355]} c="red" at={3} />
        <Txt x={550} y={385} size={28} c="red" at={3} delay={0.4}>صفحة جديدة كاملة: "الرقم غلط" ❌</Txt>
        <Doodle x={550} y={505} icon="⏳" size={90} c="red" at={4} />
        <Txt x={550} y={600} size={32} c="red" at={4} delay={0.3}>كل ده علشان رسالة صغيرة؟!</Txt>
        <Note x={870} y={500} w={350} h={140} rot={2} color="green" size={27} at={5}>💡 محتاجين كود شغال<br /><b>جوه الصفحة نفسها</b></Note>
      </Scene>
    ),
  },
  {
    id: 'why-js', title: 'ليه JavaScript؟', scene: true,
    notes: (
      <>
        <p>قبل JavaScript الصفحة بعد ما تتعرض كانت زي مستند: تقراه وتضغط روابط. مفيش كود جوه المتصفح يرد على اللي بتعمله في الصفحة نفسها.</p>
        <p><b>JavaScript:</b> لغة برمجة بتشتغل جوه المتصفح وتضيف سلوك للصفحة: تتحقق من المدخلات، ترد على ضغطة زرار، تغيّر جزء من الصفحة. ظهرت سنة 1995 في متصفح Netscape.</p>
        <p>⚠️ ما تقولش إنها ظهرت علشان تقلل الضغط على السيرفر: ده تبسيط غلط.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>JavaScript: الصفحة بقت بترد عليك</Heading>
        <Paper x={890} y={190} w={290} h={290} label="قبل" at={1}>
          <div style={{ fontSize: 26 }}>جامعة المستقبل<br />——————<br />——————<br />——</div>
        </Paper>
        <Txt x={1035} y={530} size={32} at={1} delay={0.4}>😐 مستند بتقراه وبس</Txt>
        <Arrow from={[870, 330]} to={[580, 330]} c="orange" bend={-40} label="+ JavaScript ⚡" lsize={34} at={2} />
        <Browser x={130} y={190} w={430} h={290} c="green" at={3}>
          <div style={{ fontSize: 26 }}>رقم الطالب: <span className="sk-input" /> <span className="sk-btn">عرض</span></div>
          <div className="sk-pop">⚠️ اكتب رقم الطالب الأول</div>
        </Browser>
        <Txt x={480} y={350} size={50} at={3} delay={0.8}>👆</Txt>
        <Txt x={345} y={530} size={32} c="green" at={3} delay={0.6}>🙂 بترد على ضغطاتك</Txt>
        <Note x={420} y={580} w={440} h={100} rot={-1.5} size={28} at={4}>لغة برمجة شغالة <b>جوه المتصفح</b> · 1995</Note>
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
        <Note x={140} y={520} w={560} h={130} rot={-2} color="pink" size={29} at={3}>🔐 التحقق في المتصفح للراحة…<br />والسيرفر <b>لازم</b> يتحقق تاني</Note>
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
      </Scene>
    ),
  },
];

export const part8: FrameDef[] = [
  {
    id: 'how-js-knows', title: 'JavaScript عرفت منين؟', scene: true,
    notes: (
      <>
        <p>السؤال: إزاي JavaScript تعرف البيانات اللي ممكن تطلبها؟ وتعرف عنوان الطلب وطريقته وشكل الرد المتوقع؟</p>
        <p>لازم يكون فيه اتفاق معلن بين البرنامجين: "دي الحاجات اللي أقدر أعملها، ودي طريقة طلبها، وده اللي هيرجعلك". الاتفاق ده اسمه <b>API</b>.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>JavaScript عرفت منين تطلب إيه؟</Heading>
        <Doodle x={1080} y={370} icon="⚡" size={150} c="orange" fill="orange" label="JavaScript" lc="orange" />
        <Ellipse x={720} y={160} w={260} h={100} c="blue" size={32} at={1}>📍 أبعت فين؟</Ellipse>
        <Ellipse x={660} y={330} w={260} h={100} c="blue" size={32} at={2}>📝 أبعت إيه؟</Ellipse>
        <Ellipse x={720} y={500} w={290} h={100} c="blue" size={32} at={3}>📦 هيرجعلي إيه؟</Ellipse>
        <Paper x={150} y={200} w={340} h={330} label="📜 الاتفاق" at={4}>
          <div style={{ fontSize: 30, lineHeight: 1.9 }}>📍 العنوان<br />📝 المطلوب منك<br />📦 شكل الرد</div>
        </Paper>
        <Arrow from={[650, 380]} to={[500, 370]} c="purple" at={4} delay={0.4} />
        <Txt x={320} y={600} size={64} c="pink" at={5}>= API</Txt>
      </Scene>
    ),
  },
  {
    id: 'api-def', title: 'API = اتفاق', scene: true,
    notes: (
      <>
        <p><b>API (Application Programming Interface):</b> واجهة أو عقد بيحدد البرامج تتفاعل مع بعض إزاي: العمليات أو البيانات اللي ممكن تتطلب، وإزاي تتطلب، وإيه اللي هيرجع، حسب القواعد اللي الواجهة بتوفرها.</p>
        <p>المفهوم أوسع من الويب (برنامج بيطلب من نظام التشغيل يحفظ ملف) وأقدم من JavaScript بسنين.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>API = اتفاق بين برنامجين</Heading>
        <Doodle x={1110} y={330} icon="💻" size={130} c="blue" label="برنامج ١" />
        <Doodle x={170} y={330} icon="🗄️" size={130} c="orange" label="برنامج ٢" />
        <Paper x={420} y={170} w={440} h={330} label="📘 API نتائج الجامعة" c="pink" at={1}>
          <div style={{ fontSize: 26, lineHeight: 1.75 }}>
            <span style={{ color: 'var(--pen-pink)' }}>العملية:</span> عرض نتيجة طالب<br />
            <span style={{ color: 'var(--pen-pink)' }}>تبعت:</span> رقم الطالب + إثبات صلاحية<br />
            <span style={{ color: 'var(--pen-pink)' }}>يرجعلك:</span> الاسم والدرجات<br />
            <span style={{ color: 'var(--pen-pink)' }}>لو مش موجود:</span> رسالة خطأ
          </div>
        </Paper>
        <Arrow from={[1040, 330]} to={[870, 330]} c="blue" both at={2} />
        <Arrow from={[410, 330]} to={[240, 330]} c="orange" both at={2} delay={0.2} />
        <Note x={760} y={545} w={430} h={110} rot={2} color="green" size={28} at={3}>🌍 أوسع من الويب: برنامج ↔ نظام التشغيل</Note>
        <Note x={90} y={545} w={430} h={110} rot={-2} size={28} at={4}>📅 أقدم من JavaScript بسنين</Note>
      </Scene>
    ),
  },
  {
    id: 'api-myths', title: 'أخطاء شائعة', scene: true,
    notes: (
      <>
        <ul>
          <li>الـ API مش هي الطلب نفسه: الطلب بيتبعت حسب قواعد الـ API.</li>
          <li>الـ API مش صيغة بيانات زي JSON.</li>
          <li>مش كل API مبنية على REST.</li>
          <li>مش شرط استجابة API تكون JSON.</li>
          <li>مفهوم API أوسع من JavaScript، ومظهرش بسببها.</li>
        </ul>
        <p>REST و JSON و HTTP Methods بالتفصيل في الدرس الجاي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading c="red" u="red">الـ API مش…</Heading>
        {([
          ['API = الطلب نفسه', 'الطلب بيتبعت حسب قواعد الـ API'],
          ['API = JSON', 'JSON مجرد صيغة لكتابة البيانات'],
          ['كل API لازم تكون REST', 'REST أسلوب واحد من كتير'],
          ['الرد لازم يكون JSON', 'ممكن نص أو HTML أو XML…'],
          ['JavaScript اخترعت الـ API', 'الفكرة أقدم وأوسع من أي لغة'],
        ] as const).map(([wrong, right], i) => (
          <span key={wrong} className="contents">
            <Struck x={1200} y={190 + i * 95} size={36} at={i + 1}>{wrong}</Struck>
            <Txt x={90} y={190 + i * 95} size={32} c="green" align="left" at={i + 1} delay={0.9}>✔ {right}</Txt>
          </span>
        ))}
        <Txt x={640} y={680} size={26} c="purple" at={6}>📚 REST و JSON و HTTP Methods ← الدرس الجاي</Txt>
      </Scene>
    ),
  },
];

export const part9: FrameDef[] = [
  {
    id: 'page-vs-app', title: 'Web Page ولا Web App؟', scene: true,
    notes: (
      <>
        <p><b>Web Page:</b> هدفها الأساسي عرض معلومات (صفحة الجامعة: الكليات، العنوان، الأخبار).</p>
        <p><b>Web App:</b> بتوفر وظائف تفاعلية تساعد المستخدم ينفّذ مهام (بوابة الطلاب: تسجيل دخول، الدرجات، تسجيل المواد، تقديم طلب).</p>
        <p>الفرق مش حد فاصل صارم: الصفحة ممكن يكون فيها تفاعل، والتطبيق ممكن يتكوّن من صفحات كتير.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>Web Page ولا Web App؟</Heading>
        <Doodle x={1080} y={250} icon="📄" size={140} c="blue" fill="blue" label="Web Page: تقرا وتعرف" lsize={32} lc="blue" at={1} />
        <Doodle x={200} y={250} icon="🧰" size={140} c="pink" fill="pink" label="Web App: تعمل مهام" lsize={32} lc="pink" at={2} />
        <Txt x={640} y={250} size={36} c="red" at={3}>مش حد فاصل… مسطرة! 📏</Txt>
        <Arrow from={[1170, 480]} to={[110, 480]} c="ink" both at={3} delay={0.3} />
        {([[1080, 'مقال'], [860, 'صفحة الجامعة'], [640, 'أخبار + بحث'], [420, 'بوابة الطلاب'], [200, 'محرر مستندات']] as const).map(([x, t], i) => (
          <span key={t} className="contents">
            <Ellipse x={x - 12} y={468} w={24} h={24} c={i < 2 ? 'blue' : i > 2 ? 'pink' : 'purple'} fill={i < 2 ? 'blue' : i > 2 ? 'pink' : 'purple'} at={4} delay={i * 0.25} />
            <Txt x={x} y={540} size={30} at={4} delay={i * 0.25 + 0.2}>{t}</Txt>
          </span>
        ))}
        <Note x={420} y={590} w={440} h={95} rot={-1} size={27} at={5}>الصفحة ممكن تتفاعل… والتطبيق ممكن يبقى صفحات كتير</Note>
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
    id: 'stairs', title: 'كل خطوة حلّت مشكلة', scene: true,
    notes: <p>كل مرحلة في تطور الويب حلّت مشكلة ظهرت في اللي قبلها: صفحات ثابتة ← قاعدة بيانات ← Backend يولّد الصفحة ← JavaScript للتفاعل ← طلبات في الخلفية و API ← تطبيقات ويب.</p>,
    render: () => (
      <Scene>
        <Heading>كل خطوة حلّت مشكلة</Heading>
        <Line at={1} sw={3.4} pts={[[1230, 650], [1010, 650], [1010, 560], [790, 560], [790, 470], [570, 470], [570, 380], [350, 380], [350, 290], [130, 290]]} />
        {STAIRS.map(([step, problem], i) => (
          <span key={step} className="contents">
            <Txt x={1120 - i * 220} y={620 - i * 90} size={28} c="blue" at={i + 1} delay={0.4}>{step}</Txt>
            {problem && <Txt x={1120 - i * 220} y={684 - i * 90} size={23} c="red" at={i + 1} delay={0.6}>{problem}</Txt>}
          </span>
        ))}
        <Doodle x={200} y={190} icon="🏆" size={110} c="orange" fill="orange" label="" at={6} />
        <Txt x={390} y={190} size={44} c="orange" at={6} delay={0.3}>= Web Apps</Txt>
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
      {[0, 1, 2, 3].map(i => <Arrow key={i} from={[1060 - i * 200 - 62, 400]} to={[1060 - (i + 1) * 200 + 62, 400]} bend={-14} c="orange" />)}
      <Note x={390} y={540} w={500} h={120} rot={-1.5} size={30} at={1}>📚 الدرس الجاي<br /><bdi>HTTP · REST · JSON</bdi></Note>
    </Scene>
  ),
};
