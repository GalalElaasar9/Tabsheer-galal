// Board scenes · Unit 3 · Lesson 3 · Intro and Frontend Trio Foundations (HTML, CSS, JavaScript)
import type { ColorKey, FrameDef } from '../../board/types';
import {
  Box, Browser, Doodle, Heading, Line, Note, Num, Scene, Txt, Underline,
} from '../../sketch/Sketch';

/** A small form drawn three ways: plain HTML, styled with CSS, and reacting with JavaScript. */
function Form({ x, title, c, styled, js, at }: { x: number; title: string; c: ColorKey; styled?: boolean; js?: boolean; at: number }) {
  const ink = styled ? c : 'ink';
  return (
    <>
      <Box x={x} y={200} w={330} h={250} c={ink} fill={styled ? c : undefined} sw={styled ? 2.6 : 1.6} rough={styled ? 1 : 2} at={at} />
      <Txt x={x + 165} y={235} size={styled ? 30 : 26} c={ink} at={at} delay={0.3}>{styled ? '🎓 النتيجة' : 'النتيجة'}</Txt>
      <Box x={x + 40} y={280} w={250} h={50} c={ink} sw={styled ? 2.4 : 1.4} rough={styled ? 0.8 : 2} at={at} delay={0.4} />
      <Box x={x + 105} y={355} w={120} h={50} c={ink} fill={styled ? c : undefined} sw={styled ? 2.4 : 1.4}
        rough={styled ? 0.8 : 2} size={24} tc={ink} at={at} delay={0.5}>عرض</Box>
      {js && <Txt x={x + 250} y={415} size={42} at={at} delay={0.9}>👆</Txt>}
      {js && <Note x={x + 20} y={455} w={240} h={70} rot={-3} color="red" size={24} at={at} delay={1.2}>⚠️ أرقام بس!</Note>}
      <Txt x={x + 165} y={570} size={32} c={c} at={at} delay={0.6}>{title}</Txt>
    </>
  );
}

const STOPS = [
  'لغة HTML وبنية الصفحة',
  'HTML الدلالية والوصول (A11y)',
  'لغة CSS والمظهر والتنسيق',
  'التصميم المتجاوب (Mobile-first)',
  'لغة JavaScript والتفاعل الحي',
  'أطر العمل (React · Vue · Next)',
  'تكامل الثلاثي والتشبيه الوزاري',
  'المعجم وبنك أسئلة البكالوريا',
];

const STOP_PTS: [number, number][] = [
  [1050, 345], [800, 345], [550, 345], [300, 345],
  [300, 565], [550, 565], [800, 565], [1050, 565],
];

export const intro: FrameDef[] = [
  {
    id: 'cover', title: 'الغلاف', scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم في الدرس الثالث من وحدة تطبيقات الويب: أساسيات تكنولوجيا الواجهة الأمامية.</b></p>
        <p>بعد دراسة بنية الويب وطرق الاتصال، نصل إلى بناء <b>الواجهة التي يراها ويلمسها المستخدم ويتفاعل معها</b>.</p>
        <p>نستعرض محاور الدرس بشكل مترابط يجمع كل تقنية وتطبيقاتها المتقدمة في مسار متكامل ومترابط:</p>
        <ul>
          <li><b>١. محور HTML:</b> البنية والوسوم الأساسية وصولاً إلى HTML الدلالية وقارئات الشاشة و SEO.</li>
          <li><b>٢. محور CSS:</b> المظهر وتنسيق الألوان وصولاً إلى التصميم المتجاوب ونهج الأولوية للجوال.</li>
          <li><b>٣. محور JavaScript:</b> السلوك والتفاعل وسرعة المتصفح وصولاً إلى أطر العمل الحديثة (React · Vue · Next).</li>
          <li><b>٤. تكامل الثلاثي والتشبيه الوزاري:</b> كيف تتحد التقنيات الثلاث في صفحة واحدة وهل يلزم استخدامها معاً دائماً.</li>
          <li><b>٥. المعجم وبنك أسئلة البكالوريا:</b> تثبيت التعريفات الوزارية والتدريب على نماذج الامتحانات.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={115} size={26} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 3 · Lesson 3</Txt>
        <Txt x={640} y={225} size={58} clean style={{ fontWeight: 800, whiteSpace: 'nowrap' }}>أساسيات تكنولوجيا الواجهة الأمامية</Txt>
        <Underline x={230} y={272} w={820} c="blue" />
        <Txt x={640} y={325} size={28} c="blue" clean style={{ fontWeight: 700, whiteSpace: 'nowrap' }}>Front-end Technology Fundamentals</Txt>

        {[['🧱', 'HTML والبنية'], ['🎨', 'CSS والتجاوب'], ['⚡', 'JS والأطر'], ['🏛️', 'تكامل الثلاثي'], ['📚', 'المعجم والامتحانات']].map(([icon, label], i) => (
          <Doodle key={label} x={1040 - i * 200} y={515} icon={icon} size={85} label={label} lc="blue" at={1} delay={i * 0.18} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة موضوعات الدرس الثالث:</b> ثماني محطات أساسية مرتبة ومترابطة دون تشتيت:</p>
        <p>محور HTML الكامل (البنية والوسوم الدلالية)، ثم محور CSS الكامل (المظهر والتصميم المتجاوب)، ثم محور JavaScript الكامل (السلوك وأطر العمل)، ثم تكامل الثلاثي، وصولاً للمعجم وبنك أسئلة البكالوريا.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات الدرس الثالث</Heading>
        <Box x={150} y={145} w={980} h={95} c="pink" fill="pink" size={26} tc="ink">
          ❓ كيف تتكامل تقنيات الواجهة الأمامية معاً لتقديم تجربة مستخدم واضحة وفعالة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 455], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 58} size={17} w={210} align="center" style={{ lineHeight: 1.35, fontWeight: 700 }}>
              {STOPS[i]}
            </Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  /* =========================================================================
     ١. يعني إيه HTML ببساطة؟ (البنية أولاً)
     ========================================================================= */
  {
    id: 'html-why',
    title: 'يعني إيه HTML ببساطة؟',
    scene: true,
    notes: (
      <>
        <p><b>HTML (HyperText Markup Language):</b> لغة كتابة صفحات الويب، والهدف الأساسي منها هو بناء وتحديد هيكل ومحتوى الصفحة.</p>
        <p><b>أهم النقاط لتوضيحها ببساطة:</b></p>
        <ul>
          <li><b>الهيكل والمحتوى:</b> بتحدد هيكل الصفحة (ده عنوان، دي فقرة، دي صورة، ده زرار)، زي الهيكل العظمي للجسم أو الطوب في المبنى.</li>
          <li><b>لغة ترميز مش برمجة:</b> لغة توصيفية (Markup) بتستخدم علامات وأقواس اسمها <b>Tags</b>؛ مفيهاش ذكاء أو شروط أو حسابات.</li>
          <li><b>المتصفح هو اللي بيعرضها:</b> المتصفح هو البرنامج اللي بيقرا كود الـ HTML ده ويفهم وسومه ويحوّله لشكل مرئي قدام المستخدم.</li>
        </ul>
        <p><b>التشبيه الوزاري:</b> تشبه الهيكل الخرساني والجدران الحاملة في المبنى.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الهيكل العظمي وبنية المحتوى لصفحات الويب">يعني إيه HTML ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={72} c="blue" fill="blue" size={25} tc="ink">
          📄 <b>HTML:</b> لغة كتابة صفحات الويب… بتحدد <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>هيكل ومحتوى</span> الصفحة
        </Box>

        {/* 1. الهيكل العظمي للصفحة (Right) */}
        <Box x={670} y={230} w={530} h={310} c="green" at={1} />
        <Doodle x={935} y={285} icon="🏗️" size={75} c="green" fill="green" at={1} />
        <Txt x={935} y={350} size={26} c="green" at={1}>① الهيكل العظمي للصفحة (Structure)</Txt>
        <Txt x={935} y={395} w={480} size={20.5} c="ink" at={1}>• بتحدد الصفحة فيها إيه: ده عنوان، دي فقرة، ده زرار</Txt>
        <Txt x={935} y={440} w={480} size={20.5} c="ink" at={1}>• من غيرها مفيش صفحة أصلاً (زي الطوب في العمارة)</Txt>
        <Txt x={935} y={490} size={23} c="green" at={1}>🦴 هي الأساس اللي بيتبني عليه باقي الصفحة</Txt>

        {/* 2. لغة ترميز مش برمجة (Left) */}
        <Box x={80} y={230} w={530} h={310} c="orange" at={2} />
        <Doodle x={345} y={285} icon="🏷️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={345} y={350} size={26} c="orange" at={2}>② لغة ترميز (Tags) مش برمجة</Txt>
        <Txt x={345} y={395} w={480} size={20.5} c="ink" at={2}>• مش برمجة: مفيهاش حسابات أو ذكاء أو أوامر شرطية</Txt>
        <Txt x={345} y={440} w={480} size={20.5} c="ink" at={2}>• ترميز: بتعلّم الكلام بـ Tags زي &lt;h1&gt; للعنوان و &lt;p&gt; للفقرة</Txt>
        <Txt x={345} y={490} size={23} c="orange" at={2}>🌐 المتصفح بيقرا الـ Tags دي ويعرضها قدامك</Txt>

        {/* Bottom Takeaway */}
        <Box x={80} y={555} w={1120} h={90} c="purple" fill="purple" size={23} tc="ink" at={3}>
          💡 <b>الخلاصة:</b> HTML بتجاوب على سؤال: <span style={{ color: 'var(--pen-purple)', fontWeight: 'bold' }}>«الصفحة دي فيها إيه وشكل هيكلها إيه؟»</span>
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٢. يعني إيه CSS ببساطة؟ (المظهر ثانياً)
     ========================================================================= */
  {
    id: 'css-what',
    title: 'يعني إيه CSS ببساطة؟',
    scene: true,
    notes: (
      <>
        <p><b>CSS (Cascading Style Sheets):</b> لغة بتحدد <b>شكل</b> الصفحة: الألوان، الخطوط، الأحجام، المسافات، وترتيب العناصر على الشاشة.</p>
        <p><b>أهم النقاط المقررة:</b></p>
        <ul>
          <li><b>بتحدد الشكل مش المحتوى:</b> HTML يقول "فيه عنوان"، وCSS تقول "العنوان ده أزرق وكبير وفي النص".</li>
          <li><b>بتتكتب كقواعد (Rules):</b> كل قاعدة بتختار عناصر (مثلًا كل <code>h1</code>) وتقول شكلها يبقى إزاي: <code>h1 &#123; color: blue; &#125;</code>.</li>
          <li><b>قاعدة واحدة لكل الموقع:</b> لو عايز تغيّر لون كل العناوين في الموقع، بتغيّر سطر واحد في ملف CSS.</li>
          <li><b>لغة تنسيق مش برمجة:</b> زي HTML، مفيهاش شروط ولا قرارات.</li>
        </ul>
        <p><b>التشبيه الوزاري:</b> لو HTML هو طوب وعواميد العمارة، فـ CSS هي الدهان والديكور والتصميم الداخلي والخارجي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الشكل والتنسيق وقواعد الألوان والمسافات">يعني إيه CSS ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={72} c="blue" fill="blue" size={25} tc="ink">
          🎨 <b>CSS:</b> لغة بتحدد <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>شكل</span> الصفحة… الألوان والخطوط والمسافات وترتيب العناصر
        </Box>

        {/* 1. بتحدد الشكل (Right) */}
        <Box x={670} y={230} w={530} h={310} c="pink" at={1} />
        <Doodle x={935} y={285} icon="🎨" size={75} c="pink" fill="pink" at={1} />
        <Txt x={935} y={350} size={26} c="pink" at={1}>① بتحدد الشكل… مش المحتوى</Txt>
        <Txt x={935} y={395} w={480} size={20.5} c="ink" at={1}>• HTML يقول: «فيه عنوان وفيه زرار»</Txt>
        <Txt x={935} y={440} w={480} size={20.5} c="ink" at={1}>• CSS تقول: «العنوان أزرق والزرار أخضر وفي النص»</Txt>
        <Txt x={935} y={490} size={23} c="pink" at={1}>🖌️ زي الدهان والديكور للمبنى</Txt>

        {/* 2. بتتكتب كقواعد (Left) */}
        <Box x={80} y={230} w={530} h={310} c="blue" at={2} />
        <Doodle x={345} y={285} icon="📏" size={75} c="blue" fill="blue" at={2} />
        <Txt x={345} y={350} size={26} c="blue" at={2}>② بتتكتب كقواعد (CSS Rules)</Txt>
        <Txt x={345} y={395} size={22} at={2}><code dir="ltr" className="font-mono text-sky-400 font-bold">h1 &#123; color: blue; &#125;</code></Txt>
        <Txt x={345} y={440} w={480} size={20.5} c="ink" at={2}>• تختار العنصر… وتحدد مواصفاته الجمالية</Txt>
        <Txt x={345} y={490} size={23} c="blue" at={2}>⚡ سطر واحد يغيّر تنسيق كل صفحات الموقع</Txt>

        {/* Bottom Takeaway */}
        <Box x={80} y={555} w={1120} h={90} c="purple" fill="purple" size={23} tc="ink" at={3}>
          💡 <b>الخلاصة:</b> CSS بتجاوب على سؤال: <span style={{ color: 'var(--pen-purple)', fontWeight: 'bold' }}>«الصفحة دي شكلها إيه؟»</span> دون التدخل في وظيفة العناصر.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٣. يعني إيه JavaScript ببساطة؟ (السلوك ثالثاً)
     ========================================================================= */
  {
    id: 'js-what',
    title: 'يعني إيه JavaScript ببساطة؟',
    scene: true,
    notes: (
      <>
        <p><b>JavaScript:</b> لغة برمجة بتشتغل جوه المتصفح، ووظيفتها تدّي الصفحة <b>سلوك وتفاعل حي</b>: تخليها تستجيب لتصرفات المستخدم.</p>
        <p><b>أهم النقاط المقررة:</b></p>
        <ul>
          <li><b>لغة برمجة حقيقية:</b> فيها شروط وحسابات وقرارات، وده اللي مش موجود في HTML ولا CSS.</li>
          <li><b>بتسمع وترد على الأحداث (Events):</b> بتستنى ضغطة زرار، أو كتابة في خانة، وترد: تظهر رسالة، تحسب عملية، أو تغيّر جزء من الصفحة.</li>
          <li><b>تحديث فوري دون إعادة تحميل:</b> تغيّر محتوى الصفحة بعد ما اتعرضت من غير ما نعمل Reload.</li>
        </ul>
        <p><b>التشبيه الوزاري:</b> تشبه شبكة الكهرباء والسباكة والأجهزة التي تجعل المبنى حياً ومتحركاً.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="السلوك والتفاعل الحي واستجابة الصفحة لنقرات المستخدم">يعني إيه JavaScript ببساطة؟</Heading>
        <Box x={80} y={145} w={1120} h={72} c="green" fill="green" size={25} tc="ink">
          ⚡ <b>JavaScript:</b> لغة برمجة شغالة جوه المتصفح… بتخلّي الصفحة <span style={{ color: 'var(--pen-green)', fontWeight: 'bold' }}>تتفاعل حياً</span> مع المستخدم
        </Box>

        {/* 1. لغة برمجة بجد (Right) */}
        <Box x={670} y={230} w={530} h={310} c="purple" at={1} />
        <Doodle x={935} y={285} icon="🧠" size={75} c="purple" fill="purple" at={1} />
        <Txt x={935} y={350} size={26} c="purple" at={1}>① لغة برمجة بجد (Logic)</Txt>
        <Txt x={935} y={395} w={480} size={20.5} c="ink" at={1}>• فيها شروط وحسابات وقرارات (عكس HTML و CSS)</Txt>
        <Txt x={935} y={440} size={20} at={1}><code dir="ltr" className="font-mono text-purple-300 font-bold">if (id == "") alert("اكتب رقمك")</code></Txt>
        <Txt x={935} y={490} size={23} c="purple" at={1}>💡 زي الكهربا والأسانسير في العمارة</Txt>

        {/* 2. بتسمع وترد (Left) */}
        <Box x={80} y={230} w={530} h={310} c="orange" at={2} />
        <Doodle x={345} y={285} icon="👂" size={75} c="orange" fill="orange" at={2} />
        <Txt x={345} y={350} size={26} c="orange" at={2}>② بتسمع… وترد (Event Driven)</Txt>
        <Txt x={345} y={395} w={480} size={20.5} c="ink" at={2}>• بتستنى حدث: ضغطة زرار، كتابة، اختيار</Txt>
        <Txt x={345} y={440} w={480} size={20.5} c="ink" at={2}>• وترد: تظهر رسالة، تحسب، وتغيّر جزء من الصفحة</Txt>
        <Txt x={345} y={490} size={23} c="orange" at={2}>🔄 تحديث فوري دون إعادة تحميل الصفحة</Txt>

        {/* Bottom Takeaway */}
        <Box x={80} y={555} w={1120} h={90} c="green" fill="green" size={23} tc="ink" at={3}>
          💡 <b>الخلاصة:</b> JavaScript بتجاوب على سؤال: <span style={{ color: 'var(--pen-green)', fontWeight: 'bold' }}>«الصفحة دي بتعمل إيه لما المستخدم يتفاعل معاها؟»</span>
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٤. ليه محتاجين JavaScript في المتصفح؟
     ========================================================================= */
  {
    id: 'why-js',
    title: 'ليه محتاجين JavaScript في المتصفح؟',
    scene: true,
    notes: (
      <>
        <p><b>المثال التوضيحي:</b> طالب كتب حروف (abc) بدل رقمه وضغط "عرض".</p>
        <p><b>من غير JavaScript:</b> الصفحة (HTML وCSS) تعرض بس وما تفكرش. لازم تبعت الطلب للسيرفر، والسيرفر يرد بصفحة كاملة جديدة علشان يقول "الرقم غلط!". ده بطيء ومكلف.</p>
        <p><b>مع وجود JavaScript:</b> كود خفيف شغال جوه المتصفح نفسه بيتأكد فوراً ويطلع تنبيه "أرقام بس!" في جزء من الثانية من غير ما يتصل بالسيرفر.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المقارنة العملية: التحقق الفوري محلياً في المتصفح مقابل طلب السيرفر البطيء">
          ليه محتاجين JavaScript في المتصفح؟
        </Heading>
        <Line pts={[[640, 145], [640, 545]]} dashed sw={2.5} c="ink" />

        {/* من غير JavaScript (Right) */}
        <Box x={665} y={150} w={535} h={385} c="red" at={1} />
        <Txt x={932} y={185} size={28} c="red" at={1}>❌ من غير JavaScript</Txt>
        <Browser x={750} y={230} w={365} h={140} c="red" at={1}>
          <div style={{ fontSize: 22, textAlign: 'center', paddingTop: 8 }}>
            رقم الطالب: <span className="sk-input" style={{ width: '4em', textAlign: 'center', display: 'inline-block' }}>abc</span> <span className="sk-btn">عرض</span>
          </div>
        </Browser>
        <Txt x={932} y={405} size={22} c="red" at={1} delay={0.4}>🐢 يروح للسيرفر ويرجع بصفحة جديدة كاملة</Txt>
        <Txt x={932} y={450} size={22} c="red" at={1} delay={0.6}>علشان بس يقول للطالب: «الرقم غلط!»</Txt>
        <Txt x={932} y={498} size={19} c="ink" at={1} delay={0.8}>بطيء · استهلاك للإنترنت · تجربة مستخدم سيئة</Txt>

        {/* مع JavaScript (Left) */}
        <Box x={80} y={150} w={535} h={385} c="green" fill="green" at={2} />
        <Txt x={347} y={185} size={28} c="green" at={2}>✔️ مع JavaScript في المتصفح</Txt>
        <Browser x={165} y={230} w={365} h={140} c="green" at={2}>
          <div style={{ fontSize: 22, textAlign: 'center', paddingTop: 8 }}>
            رقم الطالب: <span className="sk-input" style={{ width: '4em', textAlign: 'center', display: 'inline-block' }}>abc</span> <span className="sk-btn">عرض</span>
          </div>
        </Browser>
        <Txt x={347} y={395} size={38} at={2} delay={0.4}>👆</Txt>
        <Note x={227} y={430} w={240} h={60} rot={-2} color="red" size={23} at={2} delay={0.6}>⚠️ أرقام بس!</Note>
        <Txt x={347} y={500} size={21} c="green" at={2} delay={0.8}>⚡ التحقق الفوري محلياً في جزء من الثانية!</Txt>

        {/* Bottom Rule */}
        <Box x={80} y={555} w={1120} h={90} c="purple" fill="purple" size={23} tc="ink" at={3}>
          💡 <b>الفائدة الكبرى:</b> كود JavaScript شغال على جهاز العميل؛ يوفر ردوداً فورية وسلسة ويقلل العبء على السيرفر.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٥. نفس الفورم… ٣ طبقات متكاملة (خلاصة الدمج بين البنية والمظهر والسلوك)
     ========================================================================= */
  {
    id: 'trio-layers',
    title: 'نفس الفورم… ٣ طبقات متكاملة',
    scene: true,
    notes: (
      <>
        <p><b>تكامل الثلاثي:</b> نفس صفحة الويب أو النموذج (الفورم) يمر بالطبقات الثلاث بالترتيب:</p>
        <ul>
          <li><b>١. HTML (البنية):</b> يحدد ما هو موجود في الصفحة من عناصر (عنوان، خانة إدخال، زر).</li>
          <li><b>٢. CSS (المظهر):</b> يتحكم في الشكل والألوان والخطوط والمسافات والترتيب.</li>
          <li><b>٣. JavaScript (السلوك):</b> يضيف التفاعل الحي والاستجابة لما يفعله المستخدم.</li>
        </ul>
        <p><b>المعادلة الأساسية:</b> الواجهة الأمامية الحديثة = بنية (HTML) + مظهر (CSS) + سلوك وتفاعل (JS).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="البنية + المظهر + السلوك والتفاعل الحي في المتصفح">نفس الفورم… ٣ طبقات متكاملة</Heading>
        {/* Right to Left: HTML (Right) + CSS (Center) + JS (Left) */}
        <Form x={880} title="HTML = البنية 🧱" c="orange" at={1} />
        <Txt x={830} y={325} size={50} c="purple" at={2}>+</Txt>
        <Form x={475} title="CSS = المظهر 🎨" c="blue" styled at={2} />
        <Txt x={425} y={325} size={50} c="purple" at={3}>+</Txt>
        <Form x={70} title="JavaScript = السلوك ⚡" c="green" styled js at={3} />
        <Txt x={1045} y={625} size={23} c="ink" at={1} delay={0.8}>① إيه اللي في الصفحة (البنية)</Txt>
        <Txt x={640} y={625} size={23} c="ink" at={2} delay={0.8}>② شكله إيه على الشاشة (المظهر)</Txt>
        <Txt x={235} y={625} size={23} c="ink" at={3} delay={1.4}>③ بيعمل إيه لما تتفاعل (السلوك)</Txt>
      </Scene>
    ),
  },
];
