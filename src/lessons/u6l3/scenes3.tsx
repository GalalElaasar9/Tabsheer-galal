// Board scenes · part 3 (Encoding/Decoding, Corruption, Fonts, Data Size, and Summary).
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Doodle, Heading, Scene,
} from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'encoding-and-decoding',
    title: 'الترميز وفك الترميز (Encoding & Decoding)',
    scene: true,
    notes: (
      <>
        <p><b>التعريفان في كتاب الوزارة (ص 76) وكتاب الفائز (ص 107-108):</b></p>
        <p><b>١. الترميز (Encoding):</b> تمثيل سلسلة نصوص أو أحرف برموز وأرقام رقمية ثنائية حتى يتمكن الكمبيوتر من تخزينها ومعالجتها في الذاكرة والملفات.</p>
        <p><b>٢. فك الترميز (Decoding):</b> العملية العكسية؛ حيث يتم تحويل رموز الأحرف أو البيانات الرقمية الثنائية مرة أخرى إلى نص طبيعي مقروء للإنسان.</p>
        <p><b>مثال توضيحي:</b> كلمة "Hello" يحولها الكمبيوتر إلى أرقام (Encoding)، وعندما تفتح الملف يقرأ الأرقام ويحولها لكلمة "Hello" المقروءة (Decoding).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="العملية العكسية لتحويل النص بين الإنسان والآلة">٩ · الترميز (Encoding) وفك الترميز (Decoding) 🔄</Heading>

        {/* Human Side */}
        <Doodle x={1080} y={250} icon="👤" size={130} c="blue" fill="blue" label="إنسان (نص مقروء)" lc="blue" />
        <Box x={980} y={390} w={200} h={100} c="blue" at={1}>
          <div style={{ fontSize: 26, fontWeight: 'bold' }}>"Hello"</div>
        </Box>

        {/* Arrow 1: Encoding */}
        <Arrow from={[960, 320]} to={[640, 320]} c="green" sw={3.5} at={2} label="① ترميز (Encoding)" lc="green" />

        {/* Computer Side */}
        <Doodle x={500} y={250} icon="💾" size={130} c="orange" fill="orange" label="كمبيوتر (بيانات رقمية)" lc="orange" at={1} />
        <Box x={380} y={390} w={240} h={100} c="orange" at={2}>
          <div style={{ fontFamily: 'monospace', fontSize: 18, lineHeight: 1.4 }}>
            01001000 01100101<br />
            01101100 01101111<br />
            <b style={{ color: 'var(--pen-purple)' }}>48 65 6C 6C 6F₁₆</b>
          </div>
        </Box>

        {/* Arrow 2: Decoding */}
        <Arrow from={[640, 470]} to={[960, 470]} c="purple" sw={3.5} at={3} label="② فك الترميز (Decoding)" lc="purple" />

        {/* Summary Note */}
        <Box x={100} y={190} w={240} h={350} c="ink" at={4}>
          <div style={{ textAlign: 'right', padding: '15px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)' }}>الترميز:</span><br />
            تحويل الحروف إلى أرقام ثنائية للحفظ.<br /><br />
            <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-purple)' }}>فك الترميز:</span><br />
            تحويل الأرقام الثنائية إلى حروف للقراءة.<br /><br />
            <span style={{ fontSize: 18, color: 'var(--pen-red)' }}>⚠️ أي اختلاف بين النظامين يُفسد النص فوراً!</span>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'character-corruption-explained',
    title: 'تلف الأحرف (Character Corruption)',
    scene: true,
    notes: (
      <>
        <p><b>ظاهرة تلف وتشوّه الأحرف (Character Corruption):</b></p>
        <p>تحدث هذه الظاهرة الشهيرة عندما يتم ترميز النص (Encoding) بنظام معين (مثلاً UTF-8)، ثم تتم محاولة قراءته وفك ترميزه (Decoding) بنظام مختلف أو غير متوافق (مثل Windows-1252 أو ASCII).</p>
        <p><b>النتيجة:</b> يعجز البرنامج عن مطابقة الأرقام الثنائية بأحرفها الحقيقية، فتظهر الأحرف بشكل خاطئ، أو تتحول إلى علامات استفهام (???)، أو رموز هجينة غريبة وغير مفهومة (تُعرف تقنياً بـ Mojibake).</p>
        <p><b>الحل الجذري:</b> استخدام نفس نظام الترميز في حفظ الملف وفي قراءته، أو التوحيد عالمياً على معيار <b>UTF-8</b>.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="لماذا تظهر أحياناً طلاسم وعلامات استفهام غريبة؟">١٠ · تلف وتشوّه الأحرف (Character Corruption) 💥</Heading>

        {/* The Problem Illustrated */}
        <Box x={640} y={160} w={560} h={260} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ما هو سبب تلف الأحرف؟
            </span>
            <p style={{ fontSize: 22, marginTop: 8 }}>
              عدم تطابق طريقة <b>الترميز (Encoding)</b> المستخدمة عند كتابة وحفظ النص، مع طريقة <b>فك الترميز (Decoding)</b> المستخدمة عند فتحه وقراءته!
            </p>
            <div style={{ background: 'var(--surface)', padding: '10px', borderRadius: 8, marginTop: 10, textAlign: 'center', fontFamily: 'monospace', fontSize: 26, color: 'var(--pen-red)' }}>
              Ø§Ù„Ù…Ø±Ø­Ø¨Ø§ ??? 
            </div>
          </div>
        </Box>

        {/* Real World Examples Box */}
        <Box x={80} y={160} w={520} h={260} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              أمثلة بنشوفها في حياتنا اليومية:
            </span>
            <ul style={{ fontSize: 20, marginTop: 8, listStyleType: 'disc', paddingRight: 20 }}>
              <li>ملف ترجمة فيلم عربي يفتح على برنامج فيديو فيظهر كرموز هيروغليفية!</li>
              <li>صفحة ويب قديمة تفتح فتجد كل العناوين علامات استفهام (???).</li>
              <li>ملف Word أو Text مكتوب على موبايل ويفتح على كمبيوتر كأحرف مشوهة.</li>
            </ul>
          </div>
        </Box>

        {/* The Fix Box */}
        <Box x={80} y={450} w={1120} h={180} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'center', padding: '15px 30px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 30, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              🛡️ كيف نحل مشكلة تلف الأحرف؟
            </span>
            <p style={{ fontSize: 24, marginTop: 8 }}>
              <b>الحل الأساسي:</b> التأكد من تطابق نظام الترميز وفك الترميز، وحفظ جميع الملفات والمواقع باستخدام المعيار العالمي الموحد <b>UTF-8</b>!
            </p>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'font-vs-code-concept',
    title: 'رمز الحرف والخط (Font)',
    scene: true,
    notes: (
      <>
        <p><b>القاعدة الجوهرية في كتاب الوزارة (ص 77) وكتاب الفائز (ص 108):</b></p>
        <p>لعرض أي حرف على شاشة الكمبيوتر أو طباعته على الورق، هناك عنصران أساسيان لا غنى عنهما معاً:</p>
        <ul>
          <li><b>١. رمز الحرف (Character code):</b> يحدد "ما هو الحرف" (هويته المنطقية كرقم في الذاكرة، مثلاً A = 65).</li>
          <li><b>٢. الخط (Font):</b> يحدد "كيف يبدو شكل هذا الحرف" (رسمه، زواياه، سمكه، وحجمه).</li>
        </ul>
        <p><b>أنواع الخطوط الأساسية المقررة:</b></p>
        <ul>
          <li><b>Serif:</b> خطوط تحتوي على زوائد وحليات صغيرة في أطراف الحروف (مثل Times New Roman).</li>
          <li><b>Sans-serif:</b> خطوط لا تحتوي على زوائد في أطراف الحروف وتبدو أبسط وأكثر وضوحاً (مثل Arial).</li>
          <li><b>Semi-cursive:</b> خطوط تميل إلى الشكل اليدوي أو المتصل جزئياً (مثل Monotype Corsiva).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفرق بين هوية الحرف الرقمية وشكله البصري">١١ · رمز الحرف والخط (Font) 🖋️</Heading>

        {/* The Two Pillars Box */}
        <Box x={640} y={150} w={560} h={210} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ① رمز الحرف (Character code):
            </span>
            <p style={{ fontSize: 24, marginTop: 8 }}>
              يحدد <b>«ما هو الحرف»</b><br />
              (القيمة الرقمية الثابتة في الذاكرة: مثلاً الحرف A رقمه 65 ولا يتغير).
            </p>
          </div>
        </Box>

        <Box x={80} y={150} w={520} h={210} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ② الخط (Font):
            </span>
            <p style={{ fontSize: 24, marginTop: 8 }}>
              يحدد <b>«كيف يبدو شكل الحرف»</b><br />
              (التصميم البصري، الحجم، السمك، والزوائد على الشاشة أو الورق).
            </p>
          </div>
        </Box>

        {/* 3 Font Types Breakdown */}
        <Box x={80} y={380} w={1120} h={260} c="ink" at={3}>
          <div style={{ padding: '15px 25px', textAlign: 'center' }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              أنواع الخطوط الثلاثة المقررة في المنهج:
            </span>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginTop: 15, textAlign: 'right' }}>
              <div style={{ background: 'var(--tint-blue)', padding: '12px 16px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-blue)', fontSize: 22 }}>١. Serif (مُذَيَّل)</b><br />
                <span style={{ fontSize: 18 }}>خطوط بها زوائد وحليات صغيرة في أطراف الأحرف.</span><br />
                <span style={{ fontSize: 16, color: 'var(--pen-ink)', fontFamily: 'serif' }}>مثال: Times New Roman</span>
              </div>

              <div style={{ background: 'var(--tint-green)', padding: '12px 16px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-green)', fontSize: 22 }}>٢. Sans-serif (بدون زوائد)</b><br />
                <span style={{ fontSize: 18 }}>خطوط خالية من الزوائد، بسيطة وحديثة وواضحة.</span><br />
                <span style={{ fontSize: 16, color: 'var(--pen-ink)', fontFamily: 'sans-serif' }}>مثال: Arial</span>
              </div>

              <div style={{ background: 'var(--tint-purple)', padding: '12px 16px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-purple)', fontSize: 22 }}>٣. Semi-cursive (يدوي)</b><br />
                <span style={{ fontSize: 18 }}>خطوط تميل للكتابة اليدوية أو المتصلة جزئياً.</span><br />
                <span style={{ fontSize: 16, color: 'var(--pen-ink)', fontFamily: 'cursive' }}>مثال: Monotype Corsiva</span>
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'data-size-calculation-rules',
    title: 'حساب حجم البيانات النصية',
    scene: true,
    notes: (
      <>
        <p><b>مسائل حساب حجم البيانات في كتاب الوزارة (ص 78-79) والفائز (ص 110-111):</b></p>
        <p><b>القاعدة الأساسية في نظام ASCII:</b></p>
        <p>كل حرف، رمز، أو مسافة يشغل في الذاكرة بالضبط: <b>1 Byte = 8 Bits</b>.</p>
        <p>إذن: <b>حجم البيانات (بالبايت) = عدد الأحرف والرموز والمسافات × 1</b></p>
        <p><b>مسائل محلولة من الكتابين:</b></p>
        <ul>
          <li><b>مسألة ١: حجم كلمة "Welcome":</b><br />
            عدد الأحرف = 7 أحرف ➔ الحجم = <b>7 بايت = 56 بت</b>.
          </li>
          <li><b>مسألة ٢: حجم عبارة "Happy Birthday" (مع المسافة):</b><br />
            Happy (5) + مسافة (1) + Birthday (8) = 14 حرفاً ورمزاً ➔ الحجم = <b>14 بايت = 112 بت</b>.<br />
            (لو كُتبت متصلة "HappyBirthday" بدون مسافة تصبح 13 بايت).
          </li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مسائل امتحانات كتاب الوزارة (ص 78-79) والفائز">١٢ · حساب حجم البيانات في الذاكرة 💾</Heading>

        {/* Rule Box */}
        <Box x={150} y={150} w={980} h={110} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              قاعدة الحساب في نظام ASCII:
            </span>
            <div style={{ fontSize: 22, marginTop: 5 }}>
              كل حرف أو رقم أو رمز خاص أو مسافة (Space) = <b>1 Byte = 8 Bits</b>
            </div>
          </div>
        </Box>

        {/* Problem 1: Welcome */}
        <Box x={660} y={290} w={480} h={330} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              مثال ١: حجم كلمة "Welcome"
            </span>
            <div style={{ fontSize: 22, marginTop: 12 }}>
              • نعد الحروف: W - e - l - c - o - m - e<br />
              • عدد الأحرف = <b>٧ أحرف</b>.<br />
              • في ASCII: كل حرف = ١ بايت.<br /><br />
              <div style={{ background: 'var(--surface)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                <b style={{ color: 'var(--pen-blue)', fontSize: 26 }}>الحجم = ٧ بايت (Byte)</b><br />
                <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>بالبت: ٧ × ٨ = ٥٦ بت (Bit)</span>
              </div>
            </div>
          </div>
        </Box>

        {/* Problem 2: Happy Birthday */}
        <Box x={140} y={290} w={480} h={330} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              مثال ٢: عبارة "Happy Birthday"
            </span>
            <div style={{ fontSize: 22, marginTop: 12 }}>
              • كلمة Happy = ٥ أحرف.<br />
              • <b>المسافة (Space)</b> = ١ حرف (بايت).<br />
              • كلمة Birthday = ٨ أحرف.<br />
              • الإجمالي = ٥ + ١ + ٨ = <b>١٤ رمزاً</b>.<br /><br />
              <div style={{ background: 'var(--surface)', padding: '10px', borderRadius: 8, textAlign: 'center' }}>
                <b style={{ color: 'var(--pen-purple)', fontSize: 26 }}>الحجم = ١٤ بايت (Byte)</b><br />
                <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>بالبت: ١٤ × ٨ = ١١٢ بت (Bit)</span>
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'lesson-summary-board',
    title: 'خلاصة الدرس والقوانين الذهبية',
    scene: true,
    notes: (
      <>
        <p><b>الخلاصة المركزة للدرس (دليل المعلم والمراجعة النهائية):</b></p>
        <p>١. <b>رمز الحرف:</b> قيمة رقمية فريدة تحدد هوية الحرف في الكمبيوتر.</p>
        <p>٢. <b>نظام رموز الأحرف:</b> الجدول المرجعي للعلاقات بين الأحرف والأرقام.</p>
        <p>٣. <b>ASCII:</b> يمثل الإنجليزية فقط، 1 بايت للحرف، يسع 256 نوعاً.</p>
        <p>٤. <b>Unicode:</b> معيار دولي يوحد لغات العالم كلها، 2 بايت تسع 65,536 نوعاً، وأشهر أشكاله UTF-8.</p>
        <p>٥. <b>الترميز (Encoding):</b> نص ➔ أرقام | <b>فك الترميز (Decoding):</b> أرقام ➔ نص.</p>
        <p>٦. <b>تلف الأحرف:</b> سببه عدم تطابق الترميز وفك الترميز.</p>
        <p>٧. <b>معادلة العرض:</b> رمز الحرف (يحدد ما هو الحرف) + الخط (يحدد كيف يظهر شكله).</p>
        <p>٨. <b>أنواع الخطوط:</b> Serif (زوائد) | Sans-serif (خالٍ من الزوائد) | Semi-cursive (يدوي).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الروشتة الذهبية لمراجعة الدرس والامتحان">١٣ · ملخص الدرس الشامل 🏁</Heading>

        <Box x={80} y={150} w={1120} h={490} c="ink" at={1}>
          <div style={{ padding: '20px 30px', textAlign: 'right', lineHeight: 1.7 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', fontSize: 21 }}>
              <div style={{ background: 'var(--tint-blue)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-blue)' }}>١. رمز الحرف (Character Code):</b><br />
                قيمة رقمية فريدة تحدد هوية الحرف في الحاسوب.
              </div>

              <div style={{ background: 'var(--tint-purple)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-purple)' }}>٢. نظام ASCII:</b><br />
                1 بايت = 8 بت = 256 نوعاً (الإنجليزية ورموز التحكم فقط).
              </div>

              <div style={{ background: 'var(--tint-green)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-green)' }}>٣. نظام Unicode:</b><br />
                يوحد كل لغات العالم، 2 بايت = 65,536 نوعاً، وأشهر نظمه UTF-8.
              </div>

              <div style={{ background: 'var(--tint-orange)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-orange)' }}>٤. الترميز وفك الترميز:</b><br />
                Encoding (نص ➔ أرقام) | Decoding (أرقام ➔ نص).
              </div>

              <div style={{ background: 'var(--tint-red)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-red)' }}>٥. تلف الأحرف (Corruption):</b><br />
                سببه عدم تطابق الترميز وفك الترميز.
              </div>

              <div style={{ background: 'var(--tint-pink)', padding: '12px 18px', borderRadius: 10 }}>
                <b style={{ color: 'var(--pen-pink)' }}>٦. معادلة ظهور الحرف:</b><br />
                رمز الحرف (هوية الحرف) + الخط (تصميم وشكل الحرف).
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 15, fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              🎉 مبروك! جاهز الآن لخوض اختبار وتحدي الأسئلة الشاملة!
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },
];
