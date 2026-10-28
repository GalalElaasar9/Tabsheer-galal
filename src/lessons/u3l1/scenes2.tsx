// Board scenes · parts 2–5: static pages, changing content, databases, the Backend.
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Cylinder, Doodle, Ellipse, Heading, Line, Mark, Note, Paper, Scene, Table, Txt,
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
    id: 'web-grows', title: 'الويب كبر… والناس عايزة أكتر', scene: true,
    notes: (
      <>
        <p>بعد ما الويب اتفتح للناس سنة 1991، ومع ظهور متصفحات سهلة زي Mosaic (1993)، عدد المواقع زاد بسرعة كبيرة: موقع واحد سنة 1991، حوالي 3 آلاف سنة 1994، حوالي ربع مليون سنة 1996، وأكتر من 17 مليون سنة 2000 (أرقام تقريبية).</p>
        <p>الويب مبقاش للباحثين بس: الجامعات والبنوك والمحلات دخلت، والمستخدمين بقوا عايزين محتوى يخصهم هم. الصفحات الثابتة (نفس الملف للكل) مبقتش كفاية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الويب كبر… والناس عايزة أكتر</Heading>
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
        <Doodle x={300} y={190} icon="🎓" size={86} c="pink" label="نتيجتي أنا" lsize={26} lc="pink" at={2} />
        <Doodle x={300} y={335} icon="🏦" size={86} c="pink" label="رصيد حسابي" lsize={26} lc="pink" at={2} delay={0.3} />
        <Doodle x={300} y={480} icon="🛒" size={86} c="pink" label="السلة بتاعتي" lsize={26} lc="pink" at={2} delay={0.6} />
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
        <Mark x={630} y={190} w={160} h={250} c="purple" at={3} />
        <Txt x={710} y={490} size={32} c="purple" at={3} delay={0.4}>عمود = نوع معلومة</Txt>
        <Doodle x={900} y={600} icon="💾" size={80} c="blue" label="نحفظ" at={4} />
        <Doodle x={640} y={600} icon="🔍" size={80} c="blue" label="نسترجع" at={4} delay={0.2} />
        <Doodle x={380} y={600} icon="✏️" size={80} c="blue" label="نحدّث" at={4} delay={0.4} />
        <Txt x={160} y={600} size={30} c="green" at={4} delay={0.7}>بسهولة وبسرعة ✔</Txt>
      </Scene>
    ),
  },
  {
    id: 'files-vs-db', title: 'ملفات ولا قاعدة بيانات؟', scene: true,
    notes: (
      <>
        <ul>
          <li><b>حفظ طالب جديد:</b> ملف جديد كامل بالتصميم ⟷ صف واحد.</li>
          <li><b>استرجاع نتيجة:</b> تفتح الملف وتدوّر جوه الكلام ⟷ تطلب الصف برقم الطالب.</li>
          <li><b>تحديث درجة:</b> تعدّل الملف بإيدك ⟷ تعدّل خانة واحدة.</li>
          <li><b>متوسط الرياضيات:</b> تفتح 20,000 ملف ⟷ البيانات مرتبة في عمود.</li>
        </ul>
        <p>بس قاعدة البيانات بتخزّن بيانات بس، مش بتعمل صفحات. مين اللي ياخد الطلب ويجيب البيانات ويحطها في صفحة؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>درجة مريم اتعدلت… نعمل إيه؟</Heading>
        <Line pts={[[640, 150], [632, 400], [640, 560]]} dashed sw={2} />
        {[0, 1, 2].map(i => <Paper key={i} x={840 + i * 26} y={190 + i * 20} w={210} h={170} at={1} delay={i * 0.15} />)}
        <Txt x={960} y={450} size={34} at={1} delay={0.5}>📄 ملف لكل طالب</Txt>
        <Txt x={960} y={500} size={30} c="red" at={1} delay={0.7}>دوّر على الملف وعدّل بإيدك 😩</Txt>
        <Txt x={640} y={300} size={44} c="purple">VS</Txt>
        <Cylinder x={250} y={180} w={160} h={190} label="DB" at={2} />
        <Table x={120} y={400} cols={[110, 160, 120]} rowH={44} size={24} rows={[['2402', 'مريم', 'رياضيات'], ['', '', '97']].map(r => r)} at={2} delay={0.3} />
        <Mark x={100} y={430} w={150} h={64} c="green" at={2} delay={0.8} />
        <Txt x={300} y={530} size={30} c="green" at={2} delay={1}>خانة واحدة 🙂</Txt>
        <Note x={360} y={580} w={560} h={100} rot={1.5} color="blue" size={30} at={3}>بس مين ياخد الطلب ويجيب البيانات ويعمل صفحة؟ 🤔</Note>
      </Scene>
    ),
  },
];

export const part5: FrameDef[] = [
  {
    id: 'backend-problem', title: '٣ حاجات… مين يجمعهم؟', scene: true,
    notes: <p>عندنا طلب جاي من الطالب، وبيانات في قاعدة البيانات، وقالب للصفحة. محتاجين برنامج على السيرفر يستقبل الطلب ويقرر ويجيب البيانات ويبني الصفحة: ده الـ Backend.</p>,
    render: () => (
      <Scene>
        <Heading>٣ حاجات… مين يجمعهم؟</Heading>
        <Box x={930} y={190} w={280} h={100} c="blue" fill="blue" tc="ink" size={28} at={1}>📨 طلب من مريم (2402)</Box>
        <Paper x={540} y={175} w={210} h={150} label="قالب الصفحة" at={1} delay={0.3}>
          <div className="sk-code" style={{ fontSize: 22 }}><span className="tag">&lt;h4&gt;</span><span className="ph">{'{{name}}'}</span><br /><span className="tag">&lt;p&gt;</span><span className="ph">{'{{math}}'}</span></div>
        </Paper>
        <Cylinder x={150} y={170} w={160} h={170} label="البيانات" at={1} delay={0.6} />
        <Ellipse x={470} y={420} w={340} h={170} c="red" size={70} tc="red" at={2}>؟</Ellipse>
        <Arrow from={[1050, 300]} to={[790, 450]} c="red" dashed at={2} delay={0.2} />
        <Arrow from={[645, 335]} to={[640, 412]} c="red" dashed at={2} delay={0.3} />
        <Arrow from={[310, 330]} to={[495, 455]} c="red" dashed at={2} delay={0.4} />
        <Txt x={640} y={640} size={30} c="red" at={2} delay={0.7}>مين يستقبل الطلب ويجيب البيانات ويبني الصفحة؟</Txt>
        <Note x={880} y={440} w={340} h={150} rot={2} color="green" size={26} at={3}>💡 برنامج على السيرفر<br />بيستقبل · يقرر · يجيب · يبني</Note>
      </Scene>
    ),
  },
  {
    id: 'backend-def', title: 'الـ Backend', scene: true,
    notes: (
      <>
        <p><b>Backend:</b> الجزء اللي شغال على السيرفر: بيستقبل الطلبات، وينفّذ منطق التطبيق (القواعد والقرارات)، ويتعامل مع البيانات.</p>
        <p>طريقة التنفيذ بتختلف من نظام لنظام، بس الأدوار دي ثابتة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الـ Backend: المخ اللي على السيرفر</Heading>
        <Doodle x={640} y={370} icon="⚙️" size={170} c="orange" fill="orange" label="Backend" lsize={38} lc="orange" />
        <Doodle x={1110} y={370} icon="🖥️" size={110} c="blue" label="المتصفح" />
        <Cylinder x={90} y={290} w={150} h={170} label="DB" />
        <Arrow from={[1050, 370]} to={[735, 370]} c="blue" label="طلب" at={1} />
        <Txt x={640} y={180} size={34} at={1} delay={0.4}>📥 يستقبل الطلب</Txt>
        <Txt x={870} y={570} size={34} at={2}>🧠 يقرر: مسموح؟ نعمل إيه؟</Txt>
        <Arrow from={[545, 370]} to={[250, 370]} c="green" both at={3} />
        <Txt x={400} y={570} size={34} at={3} delay={0.4}>🗃️ يقرا ويحفظ البيانات</Txt>
      </Scene>
    ),
  },
  {
    id: 'ssr-steps', title: 'مريم بتطلب نتيجتها', scene: true,
    notes: (
      <>
        <p>دورة العمل في صفحة النتائج:</p>
        <ul>
          <li>١. الطالب يطلب صفحة النتائج.</li>
          <li>٢. الـ Backend يستقبل الطلب.</li>
          <li>٣. يتحقق من هوية الطالب وصلاحيته عند الحاجة.</li>
          <li>٤. يسترجع البيانات المطلوبة من قاعدة البيانات.</li>
          <li>٥. يستخدم البيانات مع قالب HTML مناسب.</li>
          <li>٦. يرسل الصفحة الناتجة للمتصفح.</li>
          <li>٧. المتصفح يعرض النتيجة.</li>
        </ul>
        <p>مينفعش يجيب البيانات قبل ما يتأكد من الصلاحية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>مريم (2402) بتطلب نتيجتها</Heading>
        <Browser x={930} y={200} w={300} h={200} url="/results" />
        <Doodle x={620} y={290} icon="⚙️" size={130} c="orange" fill="orange" label="Backend" lc="orange" />
        <Cylinder x={80} y={200} w={150} h={180} label="DB" />
        <Txt x={1080} y={165} size={28} c="purple" at={1}>① مريم تطلب النتيجة 👩‍🎓</Txt>
        <Arrow from={[920, 260]} to={[700, 265]} c="blue" at={2} />
        <Txt x={810} y={232} size={28} c="blue" at={2} delay={0.4}>② طلب</Txt>
        <Doodle x={480} y={175} icon="🔐" size={70} c="red" at={3} />
        <Txt x={420} y={250} size={27} c="red" at={3} delay={0.3}>③ دي مريم؟ مسموح لها؟</Txt>
        <Arrow from={[545, 300]} to={[240, 280]} c="green" at={4} />
        <Arrow from={[240, 345]} to={[545, 330]} c="green" at={4} delay={0.4} />
        <Txt x={390} y={385} size={27} c="green" at={4} delay={0.6}>④ هات بيانات 2402… ورجعت ✔</Txt>
        <Paper x={430} y={440} w={250} h={130} at={5}>
          <div className="sk-code" style={{ fontSize: 23 }}><span className="tag">&lt;h4&gt;</span>Result: <span className="ph">{'{{name}}'}</span><br /><span className="tag">&lt;p&gt;</span>Math: <span className="ph">{'{{math}}'}</span></div>
        </Paper>
        <Txt x={300} y={500} size={34} c="ink" at={5} delay={0.3}>+ 📊</Txt>
        <Txt x={555} y={620} size={30} c="purple" at={5} delay={0.5}>⑤ قالب + بيانات = صفحة</Txt>
        <Arrow from={[700, 360]} to={[925, 360]} c="green" bend={30} at={6} />
        <Txt x={820} y={420} size={28} c="green" at={6} delay={0.4}>⑥ صفحة HTML جاهزة</Txt>
        <Browser x={930} y={200} w={300} h={200} url="/results" at={7}>
          <div className="sk-code" style={{ fontSize: 26 }}>Result: مريم خالد<br />Math: 97 · Prog: 99</div>
        </Browser>
        <Txt x={1080} y={445} size={30} c="purple" at={7} delay={0.5}>⑦ المتصفح يعرضها 🎉</Txt>
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
];
