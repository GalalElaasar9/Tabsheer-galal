// Board scenes · intro and part 1 (Digital Representation of Characters & ASCII).
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Doodle, Heading, Line, Note, Num, Scene, Txt, Underline,
} from '../../sketch/Sketch';

const STOPS = [
  'لغز الحروف والكمبيوتر',
  'رمز الحرف ونظامه',
  'نظام ASCII وسعة 1 Byte',
  'قراءة جدول ASCII',
  'تفكيك كلمة Hello و MILK',
  'يونيكود ولغات العالم',
  'UTF-8 مقابل UTF-16',
  'الترميز وفك الترميز',
  'تلف الأحرف (Corruption)',
  'الرمز والخط (Font)',
  'حساب حجم النصوص',
  'تحدي الفائز الشامل 🏁',
];

const STOP_PTS: [number, number][] = [
  [1130, 310], [930, 340], [730, 310], [530, 340], [330, 310], [130, 340],
  [130, 560], [330, 590], [530, 560], [730, 590], [930, 560], [1130, 590],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف',
    scene: true,
    notes: (
      <>
        <p><b>مرحباً بكم يا شباب في أولى ثانوي!</b></p>
        <p>النهارده هنبدأ الدرس التالت من الوحدة السادسة: <b>التمثيل الرقمي للأحرف (Digital Representation of Characters)</b>.</p>
        <p>هنعرف مع بعض سر عظيم: إزاي الكمبيوتر اللي مبيفهمش غير سلك فيه كهربا (1) أو مفيش كهربا (0) يقدر يقرأ ويكتب أسماءنا، رسايلنا، البوستات، والكتب بلغات العالم كلها!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={100} size={30} c="purple">
          الصف الأول الثانوي · الوحدة السادسة · التناظرية والرقمية · الدرس الثالث
        </Txt>
        <Txt x={640} y={230} size={105}>
          التمثيل الرقمي للأحرف
        </Txt>
        <Underline x={370} y={305} w={540} c="red" />
        <Txt x={640} y={355} size={46} c="blue">
          Digital Representation of Characters
        </Txt>

        {[
          ['🔤', 'الحرف (Character)'],
          ['🔢', 'رمز الحرف (Code)'],
          ['🗂️', 'ASCII (256 نوع)'],
          ['🌐', 'Unicode (عالمي)'],
          ['🖋️', 'الخط (Font)'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1070 - i * 215}
            y={520}
            icon={icon}
            size={95}
            label={label}
            lc="blue"
            at={1}
            delay={i * 0.25}
          />
        ))}
      </Scene>
    ),
  },

  {
    id: 'journey',
    title: 'خريطة الدرس وأهدافه',
    scene: true,
    notes: (
      <>
        <p><b>أهداف الدرس الرئيسية (طبقا لكتاب الوزارة ودليل الفائز):</b></p>
        <ul>
          <li>فهم لماذا لا يستطيع الحاسوب فهم الحروف مباشرة وحاجته للتمثيل الرقمي.</li>
          <li>تعريف <b>رمز الحرف (Character code)</b> و <b>نظام رموز الأحرف (Character code system)</b>.</li>
          <li>التعرف على نظام <b>ASCII</b> وسعته (1 Byte = 8 Bits = 256 نوعاً) ومكوناته وعيوبه.</li>
          <li>إتقان قراءة جدول ASCII وتحويل الكلمات إلى ثنائي وست عشري وفك شفراتها (Hello, MILK, Love).</li>
          <li>فهم نظام <b>Unicode</b> وسعته الهائلة (65,536 نوعاً في 2 بايت) والفرق بين UTF-8 و UTF-16.</li>
          <li>التمييز بين <b>الترميز (Encoding)</b> و <b>فك الترميز (Decoding)</b>.</li>
          <li>شرح أسباب حدوث <b>تلف وتشوّه الأحرف (Character corruption)</b> وكيفية علاجه.</li>
          <li>توضيح العلاقة التكاملية بين <b>رمز الحرف والخط (Font)</b> وأنواعه الثلاثة (Serif, Sans-serif, Semi-cursive).</li>
          <li>حساب حجم البيانات النصية في الذاكرة (عدد الأحرف × حجم البايت).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة رحلتنا النهارده 🗺️</Heading>
        <Box x={150} y={135} w={980} h={100} c="pink" fill="pink" size={32} tc="ink">
          ❓ إزاي ضغطة زرار على الكيبورد بتتحول لأصفار ووحايد في الذاكرة… وترجع تترسم كلمة جميلة على الشاشة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 6), [70, 450], ...STOP_PTS.slice(6)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num x={x} y={y} n={i + 1} c={i < 6 ? 'blue' : 'green'} at={1} delay={0.2 + i * 0.1} />
            <Txt x={x} y={y + 44} size={23} at={1} delay={0.2 + i * 0.1}>
              {STOPS[i]}
            </Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'why-digital-rep',
    title: 'لماذا نحتاج التمثيل الرقمي للأحرف؟',
    scene: true,
    notes: (
      <>
        <p><b>المشكلة الجوهرية:</b> الكمبيوتر أعمى تماماً عن الحروف الأبجدية، الأشكال، والنصوص!</p>
        <p>المعالج (CPU) والذاكرة (RAM) عبارة عن مليارات المفاتيح والترانزستورات الدقيقة، لا تفهم إلا حالتين فقط: "تيار مرتفع (1)" أو "تيار منخفض (0)".</p>
        <p>إذن عندما تكتب الحرف <b>'A'</b>، الكمبيوتر لا يعرف شكل حرف 'A' إطلاقاً! الحل الوحيد هو الاتفاق على لغة مشتركة: أن نعطي كل حرف ورمز في الدنيا "رقماً فريداً" يعبر عنه، ثم نخزن هذا الرقم في الذاكرة بالنظام الثنائي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الحاسوب لا يفهم إلا لغة الأرقام الثنائية">١ · لغز الحروف والكمبيوتر 🧩</Heading>

        {/* User Side */}
        <Doodle x={1080} y={260} icon="🧑‍💻" size={130} c="blue" fill="blue" label="أنت (المستخدم)" lc="blue" />
        <Box x={980} y={380} w={200} h={80} c="blue" at={1}>
          يكتب حرف: "A"
        </Box>

        {/* Arrow to Computer */}
        <Arrow from={[960, 420]} to={[660, 420]} c="red" at={2} label="إشارة كهربائية" lc="red" />

        {/* Question Mark Center */}
        <Txt x={810} y={350} size={70} c="red" at={2}>
          ❓
        </Txt>
        <Txt x={810} y={480} size={26} c="red" at={2}>
          الكمبيوتر مش شايف حرف 'A'!
        </Txt>

        {/* Computer Side */}
        <Doodle x={520} y={260} icon="💻" size={140} c="orange" fill="orange" label="المعالج والذاكرة (CPU & RAM)" lc="orange" at={1} />
        <Box x={400} y={380} w={240} h={130} c="orange" at={3}>
          <div style={{ fontSize: 22, lineHeight: 1.4 }}>
            ⚡ فقط نبضات كهرباء:<br />
            <b>1</b> (مرتفع) أو <b>0</b> (منخفض)<br />
            <span style={{ color: 'var(--pen-green)' }}>01000001 (ثنائي)</span>
          </div>
        </Box>

        {/* Solution Note */}
        <Note x={100} y={220} w={260} h={300} color="green" rot={2} size={24} at={4}>
          <div style={{ lineHeight: 1.5 }}>
            💡 <b>الحل العبقري:</b><br />
            هنعمل جدول شفرة متفق عليه دولياً:<br /><br />
            كل حرف هنعيّن له رقم مميز خاص بيه:<br />
            'A' = 65<br />
            'B' = 66<br />
            'a' = 97<br />
            وهكذا!
          </div>
        </Note>
      </Scene>
    ),
  },

  {
    id: 'char-code-and-system',
    title: 'رمز الحرف ونظام رموز الأحرف',
    scene: true,
    notes: (
      <>
        <p><b>التعريفان الأساسيان المقرران في كتاب الوزارة (ص 76) وكتاب الفائز (ص 104):</b></p>
        <p><b>١. رمز الحرف (Character code):</b> قيمة رقمية فريدة يتم تعيينها لكل حرف، أو رمز، أو أمر تحكم حتى يستطيع الكمبيوتر التعرف عليه وتخزينه ومعالجته.</p>
        <p><b>٢. نظام رموز الأحرف (Character code system):</b> هو النظام أو الجدول المعتمد الذي يلخص ويحدد المراسلات والعلاقات بين الحروف ورموزها الرقمية الخاصة بها.</p>
        <p><b>تشبيه تربوي يقرب المفهوم جداً للطلاب:</b></p>
        <p>تخيّل لجنة امتحانات الثانوية العامة: كل طالب له اسم وشخصية، لكن كنترول الامتحانات يعطي كل طالب "رقم جلوس" فريد لا يتكرر! رقم الجلوس هو (Character code)، وسجل الكنترول الكبير الذي يربط اسم كل طالب برقم جلوسه هو (Character code system).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفاهيم التأسيسية المقررة في المنهج">٢ · ما هو رمز الحرف ونظامه؟ 📋</Heading>

        {/* Definition 1: Character Code */}
        <Box x={660} y={160} w={540} h={180} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '10px 20px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ① رمز الحرف (Character code):
            </span>
            <br />
            <span style={{ fontSize: 24, color: 'var(--pen-ink)' }}>
              قيمة رقمية فريدة يتم تعيينها لكل حرف، رمز، أو أمر تحكم، ليتعرف عليه الكمبيوتر ويخزنه ويعالجه.
            </span>
          </div>
        </Box>

        {/* Definition 2: Character Code System */}
        <Box x={80} y={160} w={540} h={180} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '10px 20px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ② نظام رموز الأحرف (Character code system):
            </span>
            <br />
            <span style={{ fontSize: 24, color: 'var(--pen-ink)' }}>
              الجدول أو النظام الشامل الذي يلخص ويحدد المراسلات الدقيقة بين الحروف ورموزها الرقمية.
            </span>
          </div>
        </Box>

        {/* Real-world Metaphor: School Exam Control */}
        <Box x={80} y={390} w={1120} h={250} c="green" at={3}>
          <div style={{ textAlign: 'right', padding: '15px 30px' }}>
            <div style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 12 }}>
              🏫 تشبيه واقعي ممتع: كنترول الامتحانات ورقم الجلوس!
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: 22, lineHeight: 1.6 }}>
              <div style={{ background: 'var(--tint-blue)', padding: '12px 18px', borderRadius: 12 }}>
                <b>👤 في المدرسة:</b><br />
                • كل طالب هو (حرف أو رمز).<br />
                • <b>رقم الجلوس</b> الخاص بالطالب = <b>رمز الحرف (Character Code)</b>.<br />
                • لا يمكن لطالبين أن يأخذا نفس رقم الجلوس!
              </div>
              <div style={{ background: 'var(--tint-purple)', padding: '12px 18px', borderRadius: 12 }}>
                <b>📖 سجل الكنترول العام:</b><br />
                • الجدول الكبير الذي يكتب فيه الكنترول: فلان رقمه 101 وفلانة رقمها 102.<br />
                • هذا السجل هو <b>نظام رموز الأحرف (Character Code System)</b>!
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ascii-overview',
    title: 'نظام ASCII وسعة 1 Byte',
    scene: true,
    notes: (
      <>
        <p><b>نظام ASCII (American Standard Code for Information Interchange):</b></p>
        <p>هو أشهر وأقدم نظام قياسي معتمد لترميز الأحرف والرموز في الحاسوب.</p>
        <p><b>ماذا يدعم ASCII؟</b></p>
        <ul>
          <li>الأحرف الإنجليزية الكبيرة من A إلى Z.</li>
          <li>الأحرف الإنجليزية الصغيرة من a إلى z.</li>
          <li>الأرقام الحسابية من 0 إلى 9.</li>
          <li>الرموز الخاصة مثل: (!, @, #, $, %, &, *, /).</li>
          <li><b>أحرف التحكم (Control Characters):</b> رموز لا تُطبع على الشاشة بل تتحكم في الأجهزة والطرفيات، مثل زر الرجوع Backspace، مسافة Space (كودها 32)، وسطر جديد Newline.</li>
        </ul>
        <p><b>القاعدة الحسابية للسعة:</b></p>
        <p>يُمثل كل حرف في ASCII بحجم <b>1 Byte (8 Bits)</b>. وبما أن كل بت له احتمالان (0 أو 1)، فإن عدد الأنواع التي يمكن تمثيلها هي: <b>2⁸ = 256 نوعاً من الأحرف والرموز</b>.</p>
        <p><b>العيب القاتل:</b> ASCII صُمم بالكامل للغة الإنجليزية والرموز الغربية فقط، ولا يدعم لغات العالم كالعربية والصينية واليابانية والروسية!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="American Standard Code for Information Interchange">٣ · نظام كود ASCII وسعته 🇺🇸</Heading>

        {/* ASCII Scope Card */}
        <Box x={640} y={160} w={560} h={250} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 30, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ماذا يدعم نظام ASCII؟
            </span>
            <ul style={{ fontSize: 22, marginTop: 8, listStyleType: 'disc', paddingRight: 20 }}>
              <li>🔠 الحروف الإنجليزية الكبيرة (A - Z) والصغيرة (a - z).</li>
              <li>🔢 الأرقام الرياضية (0 - 9).</li>
              <li>⚡ الرموز الخاصة مثل (!, @, #, $, %, &).</li>
              <li>🎛️ <b>أحرف التحكم (Control Characters):</b> رموز غير مطبوعة توجه الكمبيوتر والطرفيات (مثل مفتاح المسافة SP والحذف DEL والسطر الجديد).</li>
            </ul>
          </div>
        </Box>

        {/* Capacity Math Card */}
        <Box x={80} y={160} w={520} h={250} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'center', padding: '15px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              قاعدة السعة وحجم الحرف ⚖️
            </span>
            <div style={{ fontSize: 22, marginTop: 10 }}>
              يُمثل الحرف في ASCII باستخدام:<br />
              <b style={{ fontSize: 32, color: 'var(--pen-blue)' }}>1 Byte = 8 Bits</b>
            </div>
            <div style={{ marginTop: 10, background: 'var(--surface)', padding: '8px 12px', borderRadius: 10, display: 'inline-block' }}>
              <span style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                2⁸ = 256 نوعاً من الأحرف
              </span>
            </div>
            <p style={{ fontSize: 18, color: 'var(--pen-ink)', marginTop: 8 }}>
              (بدون استخدام تقنيات خاصة، 1 بايت يمثل 256 نوعاً فريداً)
            </p>
          </div>
        </Box>

        {/* The Fatal Flaw */}
        <Box x={80} y={445} w={1120} h={185} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '15px 30px' }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ⚠️ العيب الخطير في نظام ASCII:
            </span>
            <p style={{ fontSize: 23, lineHeight: 1.6, marginTop: 8 }}>
              نظام ASCII يتسع لـ 256 رمزاً فقط، وهي تكفي الإنجليزية بالكاد!<br />
              <b>لا يدعم لغات العالم الأخرى إطلاقاً</b> (زي اللغة العربية، الصينية، الهيروغليفية، إلخ).<br />
              وهذا العيب كان السبب المباشر لظهور نظام <b>Unicode</b> العالمي!
            </p>
          </div>
        </Box>
      </Scene>
    ),
  },
];
