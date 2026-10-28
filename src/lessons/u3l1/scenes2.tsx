// Board scenes · parts 2–5: static pages, changing content, databases, the Backend.
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Cylinder, Doodle, Heading, Line, Mark, Note, Paper, Scene, Table, Txt,
} from '../../sketch/Sketch';
import { AboutRendered } from './common';

export const part2: FrameDef[] = [
  {
    id: 'where-is-it', title: 'كتبت العنوان… وبعدين؟', scene: true,
    notes: <p>الملف about.html على سيرفر الجامعة، والطالب في بيته. السؤال: إيه اللي بيحصل من لحظة ما يكتب العنوان لحد ما الصفحة تظهر؟ الإجابة هي دورة الطلب والاستجابة (Request / Response Lifecycle).</p>,
    render: () => (
      <Scene>
        <Heading>كتبت العنوان… وبعدين؟</Heading>
        <Doodle x={1070} y={250} icon="👩‍🎓" size={120} c="blue" fill="blue" label="أنت في البيت" lc="blue" />
        <Browser x={880} y={390} w={350} h={150} url="www.univ.example/about.html" at={2}><div style={{ fontSize: 30 }}>⏳</div></Browser>
        <Doodle x={210} y={250} icon="🗄️" size={130} c="orange" fill="orange" label="سيرفر الجامعة" lc="orange" at={1} />
        <Paper x={145} y={400} w={130} h={140} at={1} delay={0.3}><div style={{ fontSize: 22, textAlign: 'center' }}>📄<br />about.html</div></Paper>
        <Line dashed pts={[[330, 290], [600, 270], [870, 290]]} sw={2} at={2} />
        <Txt x={600} y={340} size={120} c="red" at={2} delay={0.4}>؟</Txt>
        <Txt x={600} y={470} size={34} c="red" at={2} delay={0.6}>إيه اللي بيحصل في الثانية دي؟</Txt>
        <Note x={420} y={575} w={440} h={95} rot={-1.5} size={28} at={3}>📨 Request / Response Lifecycle</Note>
      </Scene>
    ),
  },
  {
    id: 'lifecycle', title: 'رحلة الطلب والرد', scene: true,
    notes: (
      <>
        <p><b>Request / Response Lifecycle</b> بالترتيب:</p>
        <ul>
          <li>١. المستخدم يكتب العنوان أو يضغط على رابط.</li>
          <li>٢. المتصفح يبعت طلب HTTP للسيرفر صاحب العنوان.</li>
          <li>٣. السيرفر يستقبل الطلب ويحدد المورد المطلوب من المسار.</li>
          <li>٤. السيرفر يبعت ملف HTML في الرد.</li>
          <li>٥. المتصفح يحلّل HTML ويبني منه تمثيل للمستند، وبعدين يعرض المحتوى.</li>
        </ul>
        <p>(فيه خطوات تانية زي معرفة عنوان السيرفر على الشبكة، مش موضوعنا النهارده.)</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>رحلة الطلب والرد</Heading>
        <Browser x={840} y={200} w={380} h={250} url="www.univ.example/about.html" />
        <Doodle x={190} y={330} icon="🗄️" size={150} c="orange" fill="orange" label="Web Server" lc="orange" />
        <Mark x={905} y={200} w={315} h={46} c="red" at={1} />
        <Txt x={1030} y={160} size={30} c="red" at={1} delay={0.4}>① كتبت العنوان</Txt>
        <Arrow from={[830, 270]} to={[290, 270]} c="blue" at={2} />
        <Txt x={560} y={240} size={30} c="blue" at={2} delay={0.4}>② طلب HTTP: /about.html</Txt>
        <Paper x={70} y={500} w={130} h={140} at={3}><div style={{ fontSize: 22, textAlign: 'center' }}>📄<br />about.html</div></Paper>
        <Arrow from={[150, 410]} to={[135, 495]} c="orange" bend={-30} at={3} delay={0.3} />
        <Txt x={330} y={480} size={30} c="orange" at={3} delay={0.5}>③ لقيت الملف 📂</Txt>
        <Arrow from={[290, 390]} to={[830, 390]} c="green" at={4} />
        <Txt x={560} y={420} size={30} c="green" at={4} delay={0.4}>④ رد: ملف HTML 📄</Txt>
        <Browser x={840} y={200} w={380} h={250} url="www.univ.example/about.html" at={5}><AboutRendered /></Browser>
        <Txt x={1030} y={500} size={30} c="purple" at={5} delay={0.6}>⑤ حلّل HTML ورسم الصفحة</Txt>
      </Scene>
    ),
  },
  {
    id: 'roles', title: 'السيرفر بيبعت… والمتصفح بيرسم', scene: true,
    notes: (
      <>
        <p><b>السيرفر:</b> يستقبل الطلب، يحدد المورد، ويبعته كما هو. ميهموش الصفحة شكلها إيه على الشاشة.</p>
        <p><b>المتصفح:</b> يقرا HTML ويحلّله، يبني منه تمثيل داخلي للمستند، ويرسم المحتوى. لو الصفحة محتاجة صور أو ملفات CSS يبعت لها طلبات إضافية.</p>
        <p>السيرفر بيبعت <b>نص HTML</b>، مش "صورة للصفحة".</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>كل واحد ليه شغلانة</Heading>
        <Line pts={[[640, 150], [648, 400], [640, 640]]} dashed sw={2} />
        <Doodle x={960} y={230} icon="🖥️" size={120} c="blue" fill="blue" />
        <Txt x={960} y={340} size={44} c="blue">المتصفح: يفهم ويرسم</Txt>
        <Txt x={960} y={410} size={32} at={2}>📖 يقرا HTML</Txt>
        <Txt x={960} y={460} size={32} at={2} delay={0.3}>🌳 يبني تمثيل للمستند</Txt>
        <Txt x={960} y={510} size={32} at={2} delay={0.6}>🎨 يرسم الصفحة</Txt>
        <Doodle x={320} y={230} icon="🗄️" size={120} c="orange" fill="orange" />
        <Txt x={320} y={340} size={44} c="orange">السيرفر: يبعت وبس</Txt>
        <Txt x={320} y={410} size={32} at={1}>📥 يستقبل الطلب</Txt>
        <Txt x={320} y={460} size={32} at={1} delay={0.3}>🔎 يدوّر على الملف</Txt>
        <Txt x={320} y={510} size={32} at={1} delay={0.6}>📤 يبعته زي ما هو</Txt>
        <Note x={380} y={570} w={520} h={100} rot={-1.5} size={30} at={3}>السيرفر بيبعت <b>نص</b>… المتصفح هو اللي بيحوّله لصفحة</Note>
      </Scene>
    ),
  },
  {
    id: 'static-def', title: 'Static Web Page', scene: true,
    notes: (
      <>
        <p><b>Static Web Page:</b> صفحة محتواها متجهز مسبقًا في ملف، والسيرفر بيبعت نفس الملف لكل اللي يطلبه، من غير ما يولّد المحتوى من بيانات المستخدم أو من قاعدة بيانات وقت الطلب.</p>
        <p>"ثابتة" <b>مش معناها</b> مفيهاش تفاعل: ممكن يكون فيها زرار يفتح قائمة أو صورة بتتحرك. الكلمة بتوصف طريقة تجهيز المحتوى على السيرفر.</p>
        <p>أمثلة: صفحة "عن الجامعة"، "اتصل بنا"، مقال منشور.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>Static Web Page: صفحة ثابتة</Heading>
        <Doodle x={200} y={260} icon="🗄️" size={130} c="orange" fill="orange" />
        <Paper x={260} y={320} w={110} h={120} at={1}><div style={{ fontSize: 22, textAlign: 'center' }}>📄<br />ملف واحد</div></Paper>
        {[170, 345, 520].map((y, i) => (
          <span key={y} className="contents">
            <Arrow from={[385, 360]} to={[855, y + 60]} c="green" bend={i === 1 ? 0 : (i ? 20 : -20)} at={2} delay={i * 0.25} />
            <Browser x={865} y={y} w={300} h={140} c="blue" at={2} delay={i * 0.25 + 0.3}><div style={{ fontSize: 26 }}>جامعة المستقبل</div></Browser>
          </span>
        ))}
        <Txt x={600} y={175} size={34} c="green" at={2} delay={1}>نفس الملف للكل</Txt>
        <Txt x={1015} y={685} size={30} c="blue" at={2} delay={1.2}>= = = نفس المحتوى</Txt>
        <Note x={60} y={500} w={400} h={150} rot={2.5} color="pink" size={29} at={3}>⚠️ ثابتة ≠ مفيهاش تفاعل<br />ممكن فيها زرار يفتح قائمة 🔘</Note>
      </Scene>
    ),
  },
];

const GROWTH = [
  { year: '1991', label: 'موقع واحد', h: 10 },
  { year: '1994', label: 'حوالي 3 آلاف', h: 45 },
  { year: '1996', label: 'حوالي ربع مليون', h: 130 },
  { year: '2000', label: 'أكتر من 17 مليون', h: 290 },
];

export const part3: FrameDef[] = [
  {
    id: 'web-grows', title: 'الويب كبر… والناس عايزاة أكتر', scene: true,
    notes: (
      <>
        <p>بعد ما الويب اتفتح للناس سنة 1991، ومع ظهور متصفحات سهلة زي Mosaic (1993)، عدد المواقع زاد بسرعة كبيرة: موقع واحد سنة 1991، حوالي 3 آلاف سنة 1994، حوالي ربع مليون سنة 1996، وأكتر من 17 مليون سنة 2000 (أرقام تقريبية).</p>
        <p>الويب مبقاش للباحثين بس: الجامعات والبنوك والمحلات دخلت، والمستخدمين بقوا عايزين محتوى يخصهم هم. الصفحات الثابتة (نفس الملف للكل) مبقتش كفاية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>انتشار الويب وزياده الطلب عليه..  </Heading>
        <Line pts={[[1200, 530], [520, 530]]} sw={2.4} />
        {GROWTH.map((g, i) => {
          const x = 1080 - i * 170;
          return (
            <span key={g.year} className="contents">
              <Box x={x - 45} y={530 - g.h} w={90} h={g.h} c="blue" fill="blue" hachure at={1} delay={i * 0.35} />
              <Txt x={x} y={510 - g.h} size={24} c="blue" at={1} delay={i * 0.35 + 0.2}>{g.label}</Txt>
              <Txt x={x} y={565} size={28} at={1} delay={i * 0.35}>{g.year}</Txt>
            </span>
          );
        })}
        <Txt x={850} y={620} size={26} c="ink" at={1} delay={1.6}>عدد المواقع على الويب (تقريبًا)</Txt>
        <Doodle x={300} y={190} icon="🎓" size={86} c="pink" label="التعليم" lsize={26} lc="pink" at={2} />
        <Doodle x={300} y={335} icon="🏦" size={86} c="pink" label="البنوك" lsize={26} lc="pink" at={2} delay={0.3} />
        <Doodle x={300} y={480} icon="🛒" size={86} c="pink" label="التجارة" lsize={26} lc="pink" at={2} delay={0.6} />
        <Line pts={[[470, 150], [478, 370], [470, 580]]} dashed sw={1.6} />
        <Note x={70} y={600} w={430} h={95} rot={-1.5} size={26} at={3}>صفحة واحدة للكل… مبقتش كفاية</Note>
      </Scene>
    ),
  },
  {
    id: 'results-site', title: 'نتيجة كل طالب… إزاي؟', scene: true,
    notes: (
      <>
        <p>موقع جامعة عايز يعرض نتيجة كل طالب، وعندها 20,000 طالب. باللي عرفناه لحد دلوقتي: نعمل ملف HTML لكل طالب؟</p>
        <p>ممكن تقنيًا، بس:</p>
        <ul>
          <li>درجة اتعدلت ← تدوّر على ملف الطالب وتعدّله بإيدك.</li>
          <li>تغيير التصميم ← تعدّل 20,000 ملف.</li>
          <li>نفس المعلومة متكررة في أماكن كتير ← تضارب وأخطاء.</li>
          <li>الخصوصية: أي حد يغيّر الرقم في العنوان ممكن يفتح نتيجة غيره.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>نتيجة كل طالب… إزاي؟</Heading>
        <Txt x={330} y={170} size={32} c="purple">👩‍🎓👨‍🎓 20,000 طالب</Txt>
        {[0, 1, 2, 3, 4].map(i => (
          <Paper key={i} x={130 + i * 26} y={230 + i * 22} w={250} h={200} at={1} delay={i * 0.15}>
            {i === 4 && <div className="sk-code" style={{ fontSize: 24 }}>result-2405.html<br /><span style={{ fontFamily: 'var(--hand)' }}>يوسف · 74 · 80</span></div>}
          </Paper>
        ))}
        <Txt x={330} y={570} size={50} c="red" at={2}>20,000 ملف؟!</Txt>
        <Mark x={160} y={520} w={340} h={100} at={2} delay={0.3} />
        {([
          [1060, 220, '✏️', 'درجة اتغيرت؟', 'دوّر وعدّل بإيدك'],
          [770, 220, '🎨', 'تصميم جديد؟', 'عدّل 20,000 ملف'],
          [1060, 470, '🔁', 'معلومة متكررة', 'تضارب وأخطاء'],
          [770, 470, '🔓', 'غيّرت الرقم في الرابط', 'شفت نتيجة غيرك!'],
        ] as const).map(([x, y, icon, a, b], i) => (
          <span key={a} className="contents">
            <Doodle x={x} y={y} icon={icon} size={96} c="red" at={3 + i} />
            <Txt x={x} y={y + 80} size={30} at={3 + i} delay={0.3}>{a}</Txt>
            <Txt x={x} y={y + 120} size={27} c="red" at={3 + i} delay={0.5}>{b}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
  {
    id: 'split', title: 'الحل: افصل البيانات عن التصميم', scene: true,
    notes: (
      <>
        <p>الفكرة اللي هتحل المشكلة: نفصل <b>البيانات</b> (أسماء ودرجات) عن <b>تصميم الصفحة</b>.</p>
        <p>البيانات في مكان منظّم، والتصميم في قالب واحد، ووقت الطلب ندمجهم ونطلع صفحة الطالب.</p>
        <p>طيب البيانات دي هنحطها فين؟ ده سؤال المحطة الجاية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الحل: افصل!</Heading>
        <Paper x={900} y={200} w={280} h={260} label="ملف فيه كل حاجة" at={1}>
          <div style={{ fontSize: 26 }}>🎨 تصميم + لون<br />أحمد · 88 · 91<br />🎨 تصميم + خط</div>
        </Paper>
        <Line pts={[[860, 170], [880, 330], [860, 500]]} c="red" dashed sw={3} at={2} />
        <Txt x={860} y={150} size={46} at={2}>✂️</Txt>
        <Box x={430} y={190} w={330} h={110} c="blue" fill="blue" tc="ink" size={32} at={3}>🎨 التصميم: قالب واحد</Box>
        <Box x={430} y={360} w={330} h={110} c="green" fill="green" tc="ink" size={32} at={3} delay={0.3}>📊 البيانات: مكان منظّم</Box>
        <Arrow from={[890, 290]} to={[770, 245]} c="blue" at={3} delay={0.5} />
        <Arrow from={[890, 380]} to={[770, 415]} c="green" at={3} delay={0.6} />
        <Arrow from={[420, 245]} to={[230, 320]} c="purple" bend={30} at={4} />
        <Arrow from={[420, 415]} to={[230, 340]} c="purple" bend={-30} at={4} delay={0.2} />
        <Doodle x={160} y={330} icon="📄" size={110} c="purple" label="صفحة الطالب" lc="purple" at={4} delay={0.5} />
        <Txt x={190} y={180} size={28} c="purple" at={4} delay={0.7}>وقت الطلب ندمجهم</Txt>
        <Note x={420} y={540} w={440} h={110} rot={-2} size={32} at={5}>طب البيانات هنحطها فين؟ 🤔</Note>
      </Scene>
    ),
  },
];

const STUDENT_ROWS = [
  ['رقم الطالب', 'الاسم', 'رياضيات', 'فيزياء', 'برمجة'],
  ['2401', 'أحمد سامي', '88', '91', '95'],
  ['2402', 'مريم خالد', '97', '85', '99'],
  ['2403', 'يوسف عادل', '74', '80', '86'],
];

export const part4: FrameDef[] = [
  {
    id: 'db-def', title: 'قاعدة البيانات', scene: true,
    notes: (
      <>
        <p><b>Database:</b> مجموعة بيانات منظّمة ومتخزّنة بطريقة تخلّي حفظها واسترجاعها وتحديثها سهل وسريع.</p>
        <p>مثال: جدول الطلاب. كل صف = طالب، وكل عمود = نوع معلومة. في الحقيقة فيه 20,000 صف.</p>
        <p>مش هندخل في SQL ولا أنواع قواعد البيانات: المهم دورها جوه الويب.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>قاعدة البيانات: Database</Heading>
        <Cylinder x={1030} y={190} w={170} h={220} label="Database" c="green" />
        <Table x={150} y={200} cols={[150, 210, 140, 130, 130]} rows={STUDENT_ROWS} head="green" at={1} />
        <Arrow from={[1020, 300]} to={[920, 300]} c="green" at={1} delay={0.2} />
        <Mark x={150} y={308} w={770} h={64} c="orange" at={2} />
        <Txt x={1100} y={470} size={32} c="orange" at={2} delay={0.4}>صف = طالب</Txt>
        <Arrow from={[1030, 455]} to={[930, 345]} c="orange" bend={20} at={2} delay={0.5} />
        <Mark x={570} y={190} w={160} h={250} c="purple" at={3} />
        <Txt x={650} y={490} size={32} c="purple" at={3} delay={0.4}>عمود = نوع معلومة</Txt>
        <Doodle x={1100} y={600} icon="💾" size={80} c="blue" label="نحفظ" at={4} />
        <Doodle x={840} y={600} icon="🔍" size={80} c="blue" label="نسترجع" at={4} delay={0.2} />
        <Doodle x={580} y={600} icon="✏️" size={80} c="blue" label="نحدّث" at={4} delay={0.4} />
        <Doodle x={320} y={600} icon="🗑️" size={80} c="blue" label="نحذف" at={4} delay={0.6} />
        <Txt x={160} y={600} size={30} c="green" at={4} delay={0.7}>بسهولة وبسرعة ✔</Txt>
      </Scene>
    ),
  },
  {
    id: 'files-vs-db', title: 'ملفات ولا قاعدة بيانات؟', scene: true,
    notes: (
      <>
        <p>نرجع لنفس مشاكل موقع النتائج ونقارن الطريقتين:</p>
        <ul>
          <li><b>درجة اتعدلت:</b> ملف لكل طالب ← تدوّر على ملفه وتعدّل جوه كود HTML ⟷ قاعدة بيانات ← تعدّل خانة واحدة في صفه.</li>
          <li><b>تصميم جديد:</b> تعدّل 20,000 ملف ⟷ تعدّل القالب الواحد.</li>
          <li><b>طالب جديد:</b> تكتب ملف HTML كامل ⟷ تضيف صف واحد.</li>
        </ul>
        <p>بس قاعدة البيانات بتخزّن وترجّع بيانات وبس: مش بتستقبل طلبات ولا بتبني صفحات. لسه محتاجين حد في النص، وده المحطة الجاية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>ملفات ولا قاعدة بيانات؟</Heading>
        <Txt x={1010} y={170} size={34} c="red">📄 ملف لكل طالب</Txt>
        <Txt x={290} y={170} size={34} c="green">🗃️ قاعدة بيانات + قالب</Txt>
        <Line pts={[[800, 210], [806, 420], [800, 600]]} dashed sw={1.6} />
        <Line pts={[[480, 210], [474, 420], [480, 600]]} dashed sw={1.6} />
        {([
          ['✏️', 'درجة مريم اتعدلت', 'دوّر على ملفها وعدّل جوه الكود', 'خانة واحدة في صفها'],
          ['🎨', 'تصميم جديد', 'عدّل 20,000 ملف 😩', 'عدّل القالب الواحد'],
          ['➕', 'طالب جديد', 'اكتب ملف HTML كامل', 'ضيف صف واحد'],
        ] as const).map(([icon, task, files, db], i) => (
          <span key={task} className="contents">
            <Txt x={640} y={270 + i * 120} size={30} at={i + 1}>{icon} {task}</Txt>
            <Txt x={1010} y={270 + i * 120} w={360} size={27} c="red" at={i + 1} delay={0.3}>{files}</Txt>
            <Txt x={290} y={270 + i * 120} w={340} size={27} c="green" at={i + 1} delay={0.6}>{db} ✔</Txt>
          </span>
        ))}
        <Note x={300} y={590} w={680} h={95} rot={-1.5} color="blue" size={28} at={4}>بس قاعدة البيانات بتخزّن وبس… مين ياخد الطلب ويبني الصفحة؟ 🤔</Note>
      </Scene>
    ),
  },
];

export const part5: FrameDef[] = [
  {
    id: 'backend-def', title: 'الـ Backend: المخ اللي على السيرفر', scene: true,
    notes: (
      <>
        <p><b>Backend:</b> البرنامج اللي شغال على السيرفر. بيستقبل الطلبات، وينفّذ منطق التطبيق (القواعد والقرارات زي الصلاحيات)، ويتعامل مع قاعدة البيانات، ويجهّز الرد.</p>
        <p>شغلانته ٤ حاجات:</p>
        <ul>
          <li><b>يستقبل</b> الطلب اللي جاي من المتصفح.</li>
          <li><b>يقرر:</b> مين ده؟ مسموح له؟ المفروض نعمل إيه؟</li>
          <li><b>يقرا ويحفظ</b> البيانات في قاعدة البيانات.</li>
          <li><b>يبني الرد:</b> يملا قالب HTML بالبيانات ويبعت الصفحة.</li>
        </ul>
        <p>ولأن الكود ده على السيرفر مش في المتصفح، المستخدم مش شايفه ومش قادر يغيّره. ده اللي بيحل مشكلة "غيّرت الرقم في الرابط فشفت نتيجة غيري".</p>
        <p><b>تشبيه:</b> المتصفح هو الزبون في الصالة، وقاعدة البيانات هي المخزن، والـ Backend هو الشيف في المطبخ: ياخد الطلب، يجيب المكونات، ويجهّز الطبق.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الـ Backend: المخ اللي على السيرفر</Heading>
        <Line pts={[[60, 165], [820, 165], [820, 670], [60, 670], [60, 165]]} dashed c="orange" sw={2} />
        <Txt x={160} y={195} size={28} c="orange">🗄️ السيرفر</Txt>
        <Doodle x={530} y={400} icon="⚙️" size={150} c="orange" fill="orange" label="Backend" lsize={34} lc="orange" />
        <Browser x={890} y={235} w={340} h={200} url="/results?id=2402" c="blue">
          <div style={{ fontSize: 22, textAlign: 'center', paddingTop: 16 }}>
            <div style={{ fontSize: 26 }}>👩‍🎓 مريم (2402)</div>
            <div style={{ fontSize: 18, color: 'var(--muted)', marginTop: 10 }}>⏳ مستنية النتيجة...</div>
          </div>
        </Browser>
        <Arrow from={[880, 295]} to={[615, 360]} c="blue" label="📥 يستقبل الطلب" at={1} />
        <Doodle x={700} y={240} icon="🔐" size={70} c="red" at={2} />
        <Txt x={540} y={240} size={28} c="red" at={2} delay={0.3}>🧠 يقرر: مسموح؟</Txt>
        <Cylinder x={100} y={230} w={140} h={160} label="DB" at={3} />
        <Arrow from={[250, 320]} to={[450, 375]} c="green" both label="يدور" at={3} delay={0.3} />
        <Paper x={110} y={500} w={200} h={110} label="قالب HTML" at={4}>
          <div className="sk-code" style={{ fontSize: 20 }}>Result: <span className="ph">{'{{name}}'}</span><br />Math: <span className="ph">{'{{math}}'}</span></div>
        </Paper>
        <Arrow from={[455, 440]} to={[320, 540]} c="purple" label="يملا القالب" loff={26} at={4} delay={0.2} />
        <Arrow from={[615, 440]} to={[880, 375]} c="green" label="📤 صفحة HTML جاهزة" loff={26} at={4} delay={0.5} />
        {/* المتصفح يستلم ويعرض الصفحة بالبيانات المعبأة */}
        <Browser x={890} y={235} w={340} h={200} url="/results?id=2402" c="green" at={4} delay={0.9}>
          <div style={{ fontSize: 20, padding: '6px 8px' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', borderBottom: '1.5px dashed var(--pen-blue)', paddingBottom: 4 }}>
              👩‍🎓 مريم خالد
            </div>
            <div style={{ marginTop: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--tint-green)', padding: '6px 12px', borderRadius: 8 }}>
              <span style={{ fontSize: 20, color: 'var(--pen-ink)' }}>الرياضيات</span>
              <span style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)' }}>97 / 100 ✨</span>
            </div>
          </div>
        </Browser>
        <Txt x={1060} y={465} size={22} c="green" at={4} delay={1.1}>🖥️ المتصفح يعرض النتيجة!</Txt>
        <Note x={870} y={510} w={370} h={140} rot={2} color="green" size={26} at={5}>🔒 الكود ده على السيرفر<br />المستخدم مش شايفه ولا يقدر يغيّره</Note>
      </Scene>
    ),
  },
  {
    id: 'static-vs-dynamic', title: 'Static ولا Dynamic؟', scene: true,
    notes: (
      <>
        <p><b>Dynamic Web Page:</b> صفحة محتواها بيتولّد وقت الطلب، حسب مين طلبها أو حسب البيانات الحالية.</p>
        <p><b>Server-Side Rendering (SSR):</b> إن السيرفر هو اللي يجهّز HTML كامل (قالب + بيانات) قبل ما يبعته.</p>
        <p>القالب واحد، والبيانات المعروضة بتتغير من مستخدم للتاني. في الحالتين المتصفح بيستلم HTML ويعرضه بنفس الطريقة: الفرق كله في السيرفر.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>Static ولا Dynamic؟</Heading>
        <Line pts={[[640, 150], [632, 380], [640, 615]]} dashed sw={2} />
        <Txt x={960} y={170} size={40} c="blue">📄 Static</Txt>
        <Paper x={900} y={210} w={120} h={130}><div style={{ fontSize: 22, textAlign: 'center' }}>about<br />.html</div></Paper>
        {[1130, 960, 790].map((x, i) => (
          <span key={x} className="contents">
            <Arrow from={[960, 345]} to={[x, 440]} c="blue" bend={0} at={1} delay={i * 0.2} />
            <Box x={x - 70} y={450} w={140} h={80} c="blue" size={22} at={1} delay={i * 0.2 + 0.3}>جامعة المستقبل</Box>
          </span>
        ))}
        <Txt x={960} y={590} size={30} c="blue" at={1} delay={1}>ملف جاهز ← نفس المحتوى للكل</Txt>
        <Txt x={320} y={170} size={40} c="orange">⚙️ Dynamic (SSR)</Txt>
        <Paper x={360} y={215} w={110} h={110} at={2}><div style={{ fontSize: 22, textAlign: 'center' }}>قالب<br />واحد</div></Paper>
        <Cylinder x={180} y={215} w={110} h={115} label="DB" at={2} delay={0.2} />
        <Txt x={325} y={270} size={34} at={2} delay={0.3}>+</Txt>
        {([[490, 'أحمد · 88'], [320, 'مريم · 97'], [150, 'يوسف · 74']] as const).map(([x, t], i) => (
          <span key={x} className="contents">
            <Arrow from={[320, 345]} to={[x, 440]} c="orange" at={3} delay={i * 0.2} />
            <Box x={x - 75} y={450} w={150} h={80} c="orange" size={24} at={3} delay={i * 0.2 + 0.3}>{t}</Box>
          </span>
        ))}
        <Txt x={320} y={590} size={30} c="orange" at={3} delay={1}>السيرفر يجهّز HTML وقت كل طلب</Txt>
        <Txt x={640} y={670} size={28} c="purple" at={4}>في الحالتين المتصفح بيستلم HTML ويعرضه 🖥️</Txt>
      </Scene>
    ),
  },
  {
    id: 'site-examples', title: 'أمثلة من حياتنا', scene: true,
    notes: (
      <>
        <p><b>Static:</b> كل الزوار بيشوفوا نفس المحتوى، والصفحة متجهزة من الأول:</p>
        <ul>
          <li>صفحة "عن الجامعة" أو "اتصل بنا".</li>
          <li>منيو مطعم صغير على النت.</li>
          <li>صفحة شخصية (CV) لمصمم أو مبرمج.</li>
          <li>صفحة إعلان عن حفلة أو مؤتمر.</li>
        </ul>
        <p><b>Dynamic:</b> كل مستخدم بيشوف محتوى مختلف، والصفحة بتتبني وقت الطلب من قاعدة البيانات:</p>
        <ul>
          <li>موقع نتيجة الثانوية العامة: كل طالب يكتب رقم جلوسه ويشوف درجاته هو.</li>
          <li>فيسبوك: الصفحة الرئيسية بتاعتك غير بتاعة صاحبك.</li>
          <li>موقع شوبينج زي أمازون: السلة والطلبات بتاعتك أنت.</li>
          <li>حسابك في البنك: رصيدك أنت بس.</li>
        </ul>
        <p><b>اسأل الطلاب:</b> "كل الزوار بيشوفوا نفس المحتوى؟" لو أيوه يبقى Static، لو لأ يبقى Dynamic. وخلّيهم يقولوا أمثلة من عندهم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أمثلة من حياتنا</Heading>
        <Line pts={[[640, 150], [646, 360], [640, 545]]} dashed sw={2} />

        <Txt x={960} y={180} size={34} c="blue" at={1}>📄 Static: نفس المحتوى للكل</Txt>
        {([[1090, 290, '🏫', '«عن الجامعة»'], [830, 290, '🍽️', 'منيو مطعم'], [1090, 445, '👤', 'صفحة CV شخصية'], [830, 445, '🎤', 'إعلان مؤتمر']] as const).map(([x, y, icon, l], i) => (
          <Doodle key={l} x={x} y={y} icon={icon} size={88} c="blue" label={l} lsize={26} lc="blue" at={1} delay={i * 0.25} />
        ))}

        <Txt x={320} y={180} size={34} c="orange" at={2}>⚙️ Dynamic: كل واحد له محتواه</Txt>
        {([[450, 290, '🎓', 'نتيجة الثانوية العامة'], [190, 290, '📘', 'فيسبوك بتاعك'], [450, 445, '🛒', 'سلة أمازون'], [190, 445, '🏦', 'حسابك في البنك']] as const).map(([x, y, icon, l], i) => (
          <Doodle key={l} x={x} y={y} icon={icon} size={88} c="orange" label={l} lsize={24} lc="orange" at={2} delay={i * 0.25} />
        ))}

        <Box x={170} y={575} w={940} h={95} c="purple" fill="purple" size={30} tc="ink" at={3}>
          🔑 اسأل نفسك: كل الزوار بيشوفوا نفس المحتوى؟ <b>أيوه ← Static</b> · <b>لأ ← Dynamic</b>
        </Box>
      </Scene>
    ),
  },
];
