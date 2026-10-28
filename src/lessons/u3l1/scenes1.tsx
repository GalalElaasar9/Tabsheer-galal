// Board scenes · intro and part 1 (beginning of the web).
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Browser, Doodle, Heading, Line, Mark, Note, Num, Paper, Parts, Scene, Txt, Underline } from '../../sketch/Sketch';

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
        {[0, 1, 2, 3].map(i => (
          <Arrow key={i} from={[1060 - i * 200 - 62, 540]} to={[1060 - (i + 1) * 200 + 62, 540]} bend={-14} c="orange" at={1} delay={i * 0.35 + 0.2} />
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
        <Box x={700} y={450} w={420} h={80} c="blue" fill="blue" size={32} tc="ink" at={4}>🌐 الويب: خدمة فوق الشبكة</Box>
        <Box x={160} y={450} w={420} h={80} c="purple" fill="purple" size={32} tc="ink" at={4} delay={0.3}>✉️ الإيميل: خدمة تانية</Box>
        <Note x={30} y={130} w={130} h={120} rot={-4} size={24} at={5}>1990 أول سيرفر<br />1991 للناس</Note>
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
        <Txt x={190} y={445} size={30} c="orange" at={2} delay={0.4}>② Web Server</Txt>
        <Txt x={190} y={485} size={26} c="orange" at={2} delay={0.5}>بيخزّن ويبعت</Txt>
        <Mark x={880} y={190} w={330} h={50} c="purple" at={3} />
        <Txt x={640} y={185} size={30} c="purple" at={3} delay={0.4}>③ URL = عنوان المورد</Txt>
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
    id: 'url', title: 'تشريح URL', scene: true,
    notes: (
      <>
        <p>الـ URL هو عنوان المورد على الويب، وبيتكوّن من أجزاء:</p>
        <ul>
          <li><b>https://</b> البروتوكول. https هي النسخة المؤمّنة من HTTP.</li>
          <li><b>www.univ.example</b> اسم السيرفر اللي عنده المورد.</li>
          <li><b>/about.html</b> المسار: المورد المطلوب بالظبط على السيرفر.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الـ URL: عنوان الصفحة بالظبط</Heading>
        <Parts y={300} size={80} at={1} parts={[
          { t: 'https://', c: 'blue', label: 'البروتوكول: نتكلم إزاي؟', at: 2 },
          { t: 'www.univ.example', c: 'orange', label: 'السيرفر: فين؟', at: 3 },
          { t: '/about.html', c: 'pink', label: 'المورد: إيه بالظبط؟', at: 4 },
        ]} />
        <Note x={120} y={520} w={420} h={120} rot={-2} size={28} color="green" at={5}>🔒 https = HTTP المؤمّن</Note>
        <Note x={740} y={520} w={420} h={120} rot={2} size={28} at={5} delay={0.2}>زي العنوان: المدينة ← العمارة ← الشقة</Note>
      </Scene>
    ),
  },
];
