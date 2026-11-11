// Board scenes · intro and part 1 (Image Digitization, Rose Example, Pixels, & Sampling).
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Heading, Line, Note, Num, Scene, Txt, Underline,
} from '../../sketch/Sketch';

const STOPS = [
  'رقمنة الصور والبكسل',
  'رحلة صورة الوردة 🌹',
  'مراحل الرقمنة الثلاث',
  'الدقة ووحدة dpi 🔍',
  'حساب حجم بيانات الصور 📐',
  'النقطي والمتجهات ⚖️',
  'أنظمة الألوان (RGB/CMY)',
  'تحدي الفائز الشامل 🏁',
];

const STOP_PTS: [number, number][] = [
  [1130, 310], [850, 330], [570, 310], [290, 330],
  [290, 560], [570, 580], [850, 560], [1130, 580],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف',
    scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم يا شباب الصف الأول الثانوي في الدرس السابع من الوحدة السادسة!</b></p>
        <p>موضوعنا اليوم في غاية الأهمية والتشويق: <b>رقمنة الصور (Image Digitization)</b>.</p>
        <p>تخيل أنك التقطت صورة سيلفي أو صورة لوردة بكاميرا هاتفك... كيف يرى الكمبيوتر هذه الصورة؟ وكيف تتحول ملايين الألوان إلى مجرد أصفار وآحاد (0 و 1) مخزنة في الذاكرة؟ سنكتشف اليوم السر الرياضي والتقني وراء كل صورة رقمية نراها على الشاشات!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={90} size={28} c="purple">
          الصف الأول الثانوي · الوحدة السادسة · التناظرية والرقمية · الدرس السابع
        </Txt>
        <Txt x={640} y={215} size={95}>
          رقمنة الصور
        </Txt>
        <Underline x={430} y={285} w={420} c="red" />
        <Txt x={640} y={335} size={42} c="blue">
          Image Digitization
        </Txt>

        {/* 5 Distinct Safe Cards across the 1160px width - Zero chance of text overlap */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 440,
            width: 1160,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '16px',
            direction: 'rtl',
            pointerEvents: 'auto',
          }}
        >
          {[
            { icon: '📷', title: 'المعاينة', en: 'Sampling', color: 'blue' },
            { icon: '🎨', title: 'التكميم', en: 'Quantization', color: 'purple' },
            { icon: '🔢', title: 'الترميز', en: 'Encoding', color: 'red' },
            { icon: '💡', title: 'أنظمة الألوان', en: 'RGB vs CMY', color: 'orange' },
            { icon: '📐', title: 'النقطي والمتجه', en: 'Raster & Vector', color: 'green' },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.75)',
                border: `2px solid var(--pen-${item.color})`,
                borderRadius: '16px',
                padding: '16px 8px',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
              }}
            >
              <div style={{ fontSize: 36, lineHeight: 1 }}>{item.icon}</div>
              <div style={{ fontSize: 21, fontWeight: 'bold', color: `var(--pen-${item.color})`, whiteSpace: 'nowrap' }}>
                {item.title}
              </div>
              <div style={{
                fontSize: 14,
                color: 'var(--pen-ink)',
                opacity: 0.85,
                fontFamily: 'ui-sans-serif, system-ui, sans-serif',
                direction: 'ltr',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}>
                {item.en}
              </div>
            </div>
          ))}
        </div>
      </Scene>
    ),
  },

  {
    id: 'journey',
    title: 'خريطة الدرس وأهدافه',
    scene: true,
    notes: (
      <>
        <p><b>أهداف الدرس المعتمدة من كتاب الوزارة ودليل الفائز:</b></p>
        <ul>
          <li>فهم المفهوم التأسيسي لرقمنة الصور ولماذا يحول الكمبيوتر الصورة إلى أرقام.</li>
          <li>تتبع مراحل الرقمنة الثلاث بالترتيب: <b>أخذ العينات (Sampling)</b>، <b>التكميم (Quantization)</b>، و <b>الترميز (Encoding)</b>.</li>
          <li>تعريف <b>البكسل (Pixel)</b>، و <b>الدقة (Resolution)</b> ووحدة <b>dpi</b>، و <b>التدرج (Gradation)</b>.</li>
          <li>المقارنة الدقيقة بين <b>التنسيق النقطي (Raster / Bitmap)</b> وظاهرة <b>التعرجات (Jaggies)</b> وبين <b>تنسيق المتجهات (Vector)</b> وبرامج كل منهما (Photoshop vs Illustrator).</li>
          <li>فهم نظام <b>ألوان الضوء (RGB)</b> ومزجه الجمعي، ونظام <b>ألوان الصبغة (CMY)</b> ومزجه الطرحي، ونظام <b>24-bit Full Color</b>.</li>
          <li>إتقان قانون حساب حجم بيانات الصور بالبت والبايت والكيلوبايت والميجابايت وحل جميع مسائل كتاب الوزارة ص 89 و 90 و 91.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="محطاتنا التعليمية من الأساسيات حتى بنك الأسئلة والمسائل">خريطة رحلتنا اليوم 🗺️</Heading>
        <Box x={150} y={135} w={980} h={85} c="pink" fill="pink" size={28} tc="ink">
          ❓ كيف تتحول الصورة من مشهد تراه عين الإنسان إلى مصفوفة بايتات دقيقة في ذاكرة الحاسوب؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [180, 445], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num x={x} y={y} n={i + 1} c={i < 4 ? 'blue' : 'green'} at={1} delay={0.2 + i * 0.1} />
            <Txt x={x} y={y + 40} size={22} at={1} delay={0.2 + i * 0.1}>
              {STOPS[i]}
            </Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

// 8x8 Pixel Rose Matrix for Step 2 visual representation
const PIXEL_ROSE_GRID: string[][] = [
  ['#0f172a', '#0f172a', '#e11d48', '#e11d48', '#e11d48', '#e11d48', '#0f172a', '#0f172a'],
  ['#0f172a', '#e11d48', '#f43f5e', '#f43f5e', '#f43f5e', '#f43f5e', '#e11d48', '#0f172a'],
  ['#e11d48', '#f43f5e', '#be123c', '#fda4af', '#f43f5e', '#be123c', '#f43f5e', '#e11d48'],
  ['#e11d48', '#f43f5e', '#f43f5e', '#f43f5e', '#f43f5e', '#f43f5e', '#f43f5e', '#e11d48'],
  ['#0f172a', '#e11d48', '#be123c', '#be123c', '#be123c', '#be123c', '#e11d48', '#0f172a'],
  ['#0f172a', '#0f172a', '#22c55e', '#15803d', '#15803d', '#22c55e', '#0f172a', '#0f172a'],
  ['#0f172a', '#22c55e', '#16a34a', '#15803d', '#15803d', '#16a34a', '#22c55e', '#0f172a'],
  ['#0f172a', '#0f172a', '#0f172a', '#15803d', '#15803d', '#0f172a', '#0f172a', '#0f172a'],
];

export const part1: FrameDef[] = [
  {
    id: 'what-is-digitization',
    title: 'أولاً: يعني إيه «رقمنة الصور»؟',
    scene: true,
    notes: (
      <>
        <p><b>يعني إيه «رقمنة الصور»؟ ببساطة شديدة:</b></p>
        <p><b>رقمنة الصورة</b> = تحويل الصورة من شكل يمكن للإنسان رؤيته (مشهد طبيعي، صورة ورقية، ألوان حقيقية) إلى <b>بيانات رقمية</b> يستطيع الكمبيوتر تخزينها ومعالجتها.</p>
        <p>يعني لو عندنا صورة اتصورت بالكاميرا، الكمبيوتر <b>لا يخزنها كـ«صورة» بالمفهوم البشري</b>، وإنما يحولها كلها إلى <b>أرقام</b>!</p>
        <p>المعالج لا يعرف شكلاً ولا يملك عيوناً بشرية؛ كل ما في الذاكرة عبارة عن خلايا تحتوي على نبضات كهربائية (1) أو انعدام نبضات (0).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفهوم التأسيسي المباشر لرقمنة الصور">أولاً: يعني إيه «رقمنة الصور»؟ 🤔</Heading>

        {/* Human concept card (Right, RTL) */}
        <Box x={690} y={140} w={530} h={250} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '16px 22px', whiteSpace: 'normal', width: '100%', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 8 }}>
              👁️ مفهوم الصورة عند الإنسان:
            </div>
            <div style={{ fontSize: 20, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              نرى مشهداً طبيعياً، ألواناً وتدرجات وظلالاً متصلة ومستمرة (تناظرية Analog).
              عين الإنسان تميز الوجوه والمشاعر والأشكال مباشرة.
            </div>
          </div>
        </Box>

        {/* Computer concept card (Left, RTL) */}
        <Box x={60} y={140} w={530} h={250} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 22px', whiteSpace: 'normal', width: '100%', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 8 }}>
              💻 مفهوم الصورة عند الكمبيوتر:
            </div>
            <div style={{ fontSize: 20, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              الكمبيوتر <b>لا يخزنها كـ«صورة»</b> بالمفهوم البشري إطلاقاً!
              بل يحولها بالكامل إلى <b>أرقام ثنائية (0 و 1)</b>،
              حيث يمثل كل رقم لون وسطوع نقطة معينة.
            </div>
          </div>
        </Box>

        {/* Arrow between human and computer: gap is from 590 to 690 (100px). Arrow stays inside without touching borders. */}
        <Arrow from={[680, 265]} to={[600, 265]} c="red" sw={3.5} at={2} label="عملية الرقمنة" lsize={18} lc="red" />

        {/* Big Definition Banner */}
        <Box x={60} y={425} w={1160} h={165} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'center', padding: '16px 24px', whiteSpace: 'normal', width: '100%', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 6 }}>
              ✨ ببساطة: رقمنة الصورة =
            </div>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-ink)', lineHeight: 1.6 }}>
              تحويل الصورة من شكل يمكن للإنسان رؤيته إلى <b>بيانات رقمية</b> يستطيع الكمبيوتر تخزينها ومعالجتها.
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'rose-example',
    title: 'مثال بسيط: رحلة صورة الوردة 🌹',
    scene: true,
    notes: (
      <>
        <p><b>التمثيل البصري لرحلة رقمنة الوردة خطوة بخطوة:</b></p>
        <ol>
          <li><b>① صورة لوردة 📷:</b> مشهد طبيعي حقيقي ذو ألوان وتدرجات مستمرة.</li>
          <li><b>② تقسيم الصورة لـ Pixels 🔲:</b> تحويل المشهد إلى شبكة من المربعات المتناهية الصغر (مصفوفة بكسلات).</li>
          <li><b>③ تحديد قيمة كل بكسل 🎨:</b> قياس درجة اللون والسطوع لكل مربع وإعطاؤه قيمة رقمية (مثلاً من 0 إلى 255).</li>
          <li><b>④ تحويل للتمثيل الثنائي 🔢:</b> ترجمة الأرقام إلى شفرات ثنائية مكونة من أصفار وآحاد (Bits: 0 و 1).</li>
          <li><b>⑤ التخزين في الذاكرة 💾:</b> حفظ البايتات في خلايا الذاكرة أو على القرص، وعند فتح الصورة يقرؤها كارت الشاشة ليعيد رسم الوردة!</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التمثيل البصري الكامل لتحول المشهد الطبيعي إلى بايتات في الذاكرة">مثال بسيط: رحلة صورة الوردة 🌹</Heading>

        {/* Step 1: Natural Rose */}
        <Box x={860} y={135} w={360} h={250} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 14px', whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 4 }}>
              ① التقاط صورة لوردة 📷
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 115 }}>
              <svg width="105" height="105" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
                <path d="M50 52 Q48 80 44 90" stroke="#15803d" strokeWidth="5" fill="none" strokeLinecap="round" />
                <path d="M48 68 Q28 62 30 52 Q42 58 48 68 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                <path d="M48 76 Q68 70 66 60 Q54 66 48 76 Z" fill="#22c55e" stroke="#15803d" strokeWidth="1.5" />
                <circle cx="50" cy="38" r="22" fill="#e11d48" />
                <path d="M36 36 C34 22, 66 22, 64 36 C60 48, 40 48, 36 36 Z" fill="#be123c" />
                <path d="M42 32 C40 26, 60 26, 58 32 C56 40, 44 40, 42 32 Z" fill="#f43f5e" />
                <circle cx="50" cy="34" r="5" fill="#fda4af" />
              </svg>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              مشهد تناظري طبيعي مستمر الألوان
            </div>
          </div>
        </Box>

        {/* Arrow Step 1 -> Step 2 */}
        <Arrow from={[850, 260]} to={[830, 260]} c="blue" sw={3.5} at={2} />

        {/* Step 2: Pixel Grid */}
        <Box x={460} y={135} w={360} h={250} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', padding: '10px 14px', whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 4 }}>
              ② تقسيم الصورة لبكسلات 🔲
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 115 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(8, 1fr)',
                  gap: '1px',
                  width: 105,
                  height: 105,
                  backgroundColor: '#cbd5e1',
                  padding: '2px',
                  borderRadius: '6px',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                }}
              >
                {PIXEL_ROSE_GRID.flat().map((color, idx) => (
                  <div key={idx} style={{ backgroundColor: color, borderRadius: '1px' }} />
                ))}
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              شبكة من النقاط الصغيرة (Pixels)
            </div>
          </div>
        </Box>

        {/* Arrow Step 2 -> Step 3 */}
        <Arrow from={[450, 260]} to={[430, 260]} c="purple" sw={3.5} at={3} />

        {/* Step 3: Numeric Brightness/Color per Pixel */}
        <Box x={60} y={135} w={360} h={250} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'center', padding: '10px 14px', whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 4 }}>
              ③ تحديد قيمة كل بكسل 🎨
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 115 }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '4px',
                  width: 125,
                  height: 105,
                }}
              >
                {[
                  { val: '255', bg: '#e11d48' },
                  { val: '180', bg: '#9f1239' },
                  { val: '095', bg: '#16a34a' },
                  { val: '015', bg: '#0f172a' },
                ].map((cell, idx) => (
                  <div
                    key={idx}
                    style={{
                      backgroundColor: cell.bg,
                      color: '#ffffff',
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 15,
                      fontWeight: 'bold',
                      fontFamily: 'monospace',
                      border: '1.5px solid rgba(255,255,255,0.4)',
                    }}
                  >
                    <span>{cell.val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              كل بكسل يأخذ رقماً يعبر عن سطوعه ولونه
            </div>
          </div>
        </Box>

        {/* Arrow Step 3 down to Step 4 */}
        <Arrow from={[240, 395]} to={[240, 420]} c="red" sw={3.5} at={4} />

        {/* Step 4: Convert to Binary (Bits) */}
        <Box x={60} y={430} w={360} h={240} c="red" fill="red" at={4}>
          <div style={{ textAlign: 'center', padding: '10px 14px', whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-red)', marginBottom: 4 }}>
              ④ تمثيل رقمي ثنائي 🔢
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
              <div
                style={{
                  backgroundColor: '#0f172a',
                  padding: '8px 14px',
                  borderRadius: '8px',
                  fontFamily: 'ui-monospace, monospace',
                  fontSize: 13,
                  color: '#22c55e',
                  lineHeight: 1.45,
                  textAlign: 'left',
                  direction: 'ltr',
                  border: '1px solid rgba(34,197,94,0.3)',
                  width: '90%',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                <div>255 ➔ <span style={{ color: '#38bdf8' }}>11111111</span></div>
                <div>180 ➔ <span style={{ color: '#38bdf8' }}>10110100</span></div>
                <div>095 ➔ <span style={{ color: '#38bdf8' }}>01011111</span></div>
                <div>015 ➔ <span style={{ color: '#38bdf8' }}>00001111</span></div>
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              سلسلة أصفار وآحاد تفهمها الدوائر (0 و 1)
            </div>
          </div>
        </Box>

        {/* Arrow Step 4 -> Step 5 */}
        <Arrow from={[430, 550]} to={[450, 550]} c="green" sw={3.5} at={5} />

        {/* Step 5: Final Computer Storage */}
        <Box x={460} y={430} w={360} h={240} c="green" fill="green" at={5}>
          <div style={{ textAlign: 'center', padding: '10px 14px', whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 4 }}>
              ⑤ الكمبيوتر يخزن الصورة! 💾
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110, gap: 12 }}>
              <div
                style={{
                  backgroundColor: '#1e293b',
                  border: '2px solid #3b82f6',
                  borderRadius: '6px',
                  padding: '6px 8px',
                  fontFamily: 'monospace',
                  fontSize: 11,
                  color: '#93c5fd',
                  lineHeight: 1.35,
                  direction: 'ltr',
                  textAlign: 'left',
                }}
              >
                <div style={{ color: '#fbbf24', fontWeight: 'bold' }}>RAM / Memory:</div>
                <div>0x00: 11111111</div>
                <div>0x01: 10110100</div>
                <div>0x02: 01011111</div>
              </div>
              <div
                style={{
                  width: 72,
                  height: 65,
                  backgroundColor: '#0f172a',
                  border: '2px solid #64748b',
                  borderRadius: '6px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                }}
              >
                <span style={{ fontSize: 28 }}>🌹</span>
                <span style={{ fontSize: 9, color: '#94a3b8' }}>Display</span>
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              تخزين البايتات وإعادة رسمها عند الطلب
            </div>
          </div>
        </Box>

        {/* Arrow Step 5 -> Summary */}
        <Arrow from={[830, 550]} to={[850, 550]} c="ink" sw={3} dashed at={6} />

        {/* Explanatory Note on Right */}
        <Note x={860} y={425} w={360} h={255} color="yellow" rot={1} size={18} at={6}>
          <div style={{ textAlign: 'right', padding: '6px 14px', lineHeight: 1.45 }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-red)', marginBottom: 6 }}>
              💡 خلاصة رحلة الوردة:
            </div>
            الكاميرا لا تحفظ ورقة الوردة!
            بل تحفظ <b>جدولاً من الأرقام الثنائية</b> التي تعبر عن لون وسطوع كل بكسل.
            <div style={{ marginTop: 8, color: 'var(--pen-ink)' }}>
              وعند فتح الصورة، يقرأ المعالج وكارت الشاشة هذه الأرقام ليعيد رسم الوردة أمامك!
            </div>
          </div>
        </Note>
      </Scene>
    ),
  },

  {
    id: 'pixel-definition',
    title: '١ · البكسل (Pixel) ومصفوفة الصورة',
    scene: true,
    notes: (
      <>
        <p><b>١ · البكسل (Pixel) في علوم الحاسب:</b></p>
        <p><b>البكسل Pixel</b> هو أصغر وحدة تتكون منها الصورة الرقمية.</p>
        <p><b>تجربة واقعية للطلاب:</b> تخيل إنك كبّرت صورة على الموبايل جداً.. بدل ما تشوف الصورة بشكلها الطبيعي، هتبدأ تشوف مربعات صغيرة.. كل مربع من دول = <b>Pixel</b>!</p>
        <p>والصورة الرقمية عبارة عن مجموعة كبيرة من البكسلات مرتبة في: <b>صفوف × أعمدة</b>.</p>
        <p>مثال: مصفوفة من ٤ أعمدة × ٣ صفوف = <b>12 Pixel</b>.</p>
        <p><b>القاعدة والاستنتاج:</b> «إذن: كلما زاد عدد البكسلات التي تمثل الصورة، يمكننا الحصول على تفاصيل أكثر!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="أصغر وحدة بناء للصورة الرقمية وسر تفاصيل الشاشات">البكسل (Pixel) ومصفوفة الصورة (صفوف × أعمدة) 🔲</Heading>

        {/* Right Box: Pixel Concept & Mobile Analogy */}
        <Box x={670} y={140} w={550} h={265} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '16px 22px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 25, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 8 }}>
              📱 تخيل إنك كبّرت صورة على الموبايل جدًا:
            </div>
            <div style={{ fontSize: 20, color: 'var(--pen-ink)', lineHeight: 1.6 }}>
              بدل ما تشوف الصورة بشكلها الطبيعي، هتبدأ تشوف <b>مربعات صغيرة</b>.<br />
              • كل مربع من دول = <b style={{ color: 'var(--pen-blue)' }}>Pixel</b>.<br />
              • <b>البكسل Pixel:</b> هو أصغر وحدة تتكون منها الصورة الرقمية.
            </div>
          </div>
        </Box>

        {/* Left Box: Matrix Rows x Cols (The 4x3 Example from Slide 1) */}
        <Box x={60} y={140} w={550} h={265} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', padding: '12px 18px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 8 }}>
              📐 الصورة مرتبة في: صفوف × أعمدة
            </div>

            {/* The 4 columns x 3 rows blue pixel squares matching the slide */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '6px 0' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  backgroundColor: '#0f172a',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  border: '1.5px solid #334155',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                }}
              >
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '28px',
                      height: '28px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '4px',
                      boxShadow: '0 0 6px rgba(59, 130, 246, 0.6)',
                    }}
                  />
                ))}
              </div>
            </div>

            <div style={{ fontSize: 20, color: 'var(--pen-ink)', fontWeight: 'bold', marginTop: 4 }}>
              دي صورة صغيرة مكونة من: ٤ أعمدة × ٣ صفوف = <span style={{ color: 'var(--pen-green)' }}>12 Pixel</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner: Golden Rule Conclusion */}
        <Box x={60} y={435} w={1160} h={165} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'center', padding: '16px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 6 }}>
              ✨ إذن: القاعدة الذهبية لتفاصيل الصورة:
            </div>
            <div style={{ fontSize: 24, fontWeight: 'black', color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              «كلما زاد عدد البكسلات التي تمثل الصورة، يمكننا الحصول على تفاصيل أكثر!»
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 4 }}>
              (مصفوفة الـ 12 بكسل لا تُظهر أي تفاصيل، بينما شاشات Full HD بملايين البكسلات تعرض أدق تفاصيل المشهد بنعومة فائقة)
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'how-image-becomes-pixels',
    title: '٢ · طيب الصورة بتتحول لبكسلات إزاي؟',
    scene: true,
    notes: (
      <>
        <p><b>٢ · طيب الصورة بتتحول لبكسلات إزاي؟ (خطوات رقمنة الصورة):</b></p>
        <p>يوضح الدرس أن عملية رقمنة الصور تمر بثلاث خطوات أساسية متتالية:</p>
        <ol>
          <li><b>① أخذ العينات (Sampling):</b> تقسيم الصورة إلى شبكة من البكسلات.</li>
          <li><b>② التقدير الرقمي (Quantization):</b> تحويل السطوع إلى مستويات وقيم رقمية.</li>
          <li><b>③ الترميز (Encoding):</b> تمثيل القيم بأرقام ثنائية (0 و 1).</li>
        </ol>
        <p><b>⚠️ نقطة امتحانية هامة جداً:</b> ترتيب الخطوات موضع سؤال دائم بالامتحانات!</p>
        <p>احفظها:</p>
        <p><b>Sampling → Quantization → Encoding</b></p>
        <p>أو: <b>أخذ العينات → التقدير الرقمي → الترميز</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المراحل الثلاث الأساسية لتحويل المشهد الطبيعي إلى بيانات رقمية">خطوات رقمنة الصورة: طيب بتتحول لبكسلات إزاي؟ 🤔</Heading>

        {/* Top Intro Banner */}
        <Box x={60} y={125} w={1160} h={65} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '6px 20px', fontSize: 22, fontWeight: 'bold', color: 'var(--pen-ink)', whiteSpace: 'normal' }}>
            هنا نبدأ خطوات رقمنة الصورة · تمر عملية الرقمنة بـ <span style={{ color: 'var(--pen-blue)' }}>ثلاث خطوات أساسية متتالية</span>:
          </div>
        </Box>

        {/* 3 Visual Process Cards Side-by-Side (RTL) */}
        {/* Step 1: Sampling (Right) */}
        <Box x={860} y={205} w={360} h={295} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ① أخذ العينات Sampling 🔍
            </div>
            {/* Visual Icon / Diagram */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
              <svg width="100" height="90" viewBox="0 0 100 90">
                <rect x="5" y="5" width="90" height="80" rx="8" fill="#1e293b" stroke="#3b82f6" strokeWidth="2.5" />
                {/* Continuous gradient photo slice */}
                <defs>
                  <linearGradient id="sampleGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="50%" stopColor="#818cf8" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
                <rect x="12" y="12" width="76" height="66" rx="4" fill="url(#sampleGrad)" />
                {/* Sampling Grid overlay lines */}
                <line x1="37" y1="12" x2="37" y2="78" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="63" y1="12" x2="63" y2="78" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="12" y1="34" x2="88" y2="34" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
                <line x1="12" y1="56" x2="88" y2="56" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="3 2" />
              </svg>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              تقسيم الصورة إلى بكسلات وقياس / استخراج سطوع ولون كل بكسل.
            </div>
          </div>
        </Box>

        {/* Arrow 1 -> 2 */}
        <Arrow from={[850, 350]} to={[830, 350]} c="purple" sw={3.5} at={2} />

        {/* Step 2: Quantization (Middle) */}
        <Box x={460} y={205} w={360} h={295} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ② التقدير الرقمي Quantization 🎨
            </div>
            {/* Visual Levels Staircase */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
              <svg width="110" height="90" viewBox="0 0 110 90">
                <rect x="5" y="5" width="100" height="80" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2.5" />
                {/* 4 discrete Quantized Levels */}
                <rect x="15" y="62" width="18" height="18" rx="2" fill="#0f172a" stroke="#cbd5e1" strokeWidth="1" />
                <text x="24" y="56" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">0</text>
                <rect x="36" y="46" width="18" height="34" rx="2" fill="#475569" stroke="#cbd5e1" strokeWidth="1" />
                <text x="45" y="40" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">1</text>
                <rect x="57" y="30" width="18" height="50" rx="2" fill="#94a3b8" stroke="#cbd5e1" strokeWidth="1" />
                <text x="66" y="24" fill="#94a3b8" fontSize="10" fontWeight="bold" textAnchor="middle">2</text>
                <rect x="78" y="14" width="18" height="66" rx="2" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                <text x="87" y="10" fill="#fde047" fontSize="10" fontWeight="bold" textAnchor="middle">3</text>
              </svg>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              تحويل السطوع المستمر إلى مستويات رقمية محددة وفق قاعدة ثابتة.
            </div>
          </div>
        </Box>

        {/* Arrow 2 -> 3 */}
        <Arrow from={[450, 350]} to={[430, 350]} c="red" sw={3.5} at={3} />

        {/* Step 3: Encoding (Left) */}
        <Box x={60} y={205} w={360} h={295} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ③ الترميز Encoding 🔢
            </div>
            {/* Visual Binary Matrix */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 110 }}>
              <div
                style={{
                  backgroundColor: '#0f172a',
                  border: '2px solid #ef4444',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  fontFamily: 'monospace',
                  fontSize: '13px',
                  color: '#22c55e',
                  lineHeight: 1.4,
                  direction: 'ltr',
                  textAlign: 'left',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.4)',
                }}
              >
                <div>0 ➔ <span style={{ color: '#38bdf8' }}>00</span> (أسود)</div>
                <div>1 ➔ <span style={{ color: '#38bdf8' }}>01</span> (رمادي داكن)</div>
                <div>2 ➔ <span style={{ color: '#38bdf8' }}>10</span> (رمادي فاتح)</div>
                <div>3 ➔ <span style={{ color: '#38bdf8' }}>11</span> (أبيض)</div>
              </div>
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              التعبير عن المستويات بأرقام ثنائية (0 و 1) وحفظها في الذاكرة.
            </div>
          </div>
        </Box>

        {/* Bottom Exam Alert Banner */}
        <Box x={60} y={520} w={1160} h={165} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'center', padding: '12px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-red)', marginBottom: 8 }}>
              ⚠️ ودي نقطة مهمة جدًا؛ لأن ترتيب الخطوات موضع سؤال دائم في الامتحانات!
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div style={{
                background: '#0f172a',
                color: '#38bdf8',
                padding: '8px 20px',
                borderRadius: '10px',
                fontFamily: 'monospace',
                fontSize: '19px',
                fontWeight: 'bold',
                direction: 'ltr',
                border: '1.5px solid rgba(56,189,248,0.5)',
                boxShadow: '0 0 12px rgba(56,189,248,0.3)',
              }}>
                Sampling ➔ Quantization ➔ Encoding
              </div>
              <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-ink)' }}>أو بالعربية:</span>
              <div style={{
                background: 'rgba(15, 23, 42, 0.85)',
                color: 'var(--pen-green)',
                padding: '8px 20px',
                borderRadius: '10px',
                fontSize: '19px',
                fontWeight: 'bold',
                border: '1.5px solid var(--pen-green)',
              }}>
                أخذ العينات ➔ التقدير الرقمي ➔ الترميز
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 6 }}>
              احفظ الترتيب بدقة: أولاً نقسم الصورة (عينات)، ثانياً نحدد مستويات السطوع (تكميم)، ثالثاً نحولها لأصفار وآحاد (ترميز).
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'sampling-step1',
    title: '٣ · الخطوة الأولى: أخذ العينات Sampling',
    scene: true,
    notes: (
      <>
        <p><b>٣ · الخطوة الأولى: أخذ العينات (Sampling):</b></p>
        <p><b>أخذ العينات يعني:</b> تقسيم الصورة إلى بكسلات وقياس/استخراج قيمة السطوع لكل بكسل.</p>
        <p><b>كيف يحدث ذلك واقعياً؟</b></p>
        <ul>
          <li>تكون لدينا <b>صورة كاملة</b> (مشهد حقيقي مستمر ومتصل الألوان).</li>
          <li><b>نقسمها إلى شبكة:</b> خطوط أفقية ورأسية متقاطعة تقسم المشهد لمربعات صغيرة منتظمة.</li>
          <li><b>كل مربع = Pixel:</b> أصغر وحدة مستقلة في الصورة.</li>
        </ul>
        <p><b>النتيجة:</b> «وبالتالي أصبح لدينا وصف رقمي للصورة يعتمد على عدد من البكسلات!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخطوة رقم ١ من خطوات رقمنة الصور الثلاث">الخطوة الأولى: أخذ العينات (Sampling) وتقسيم الشبكة 🔍</Heading>

        {/* Top Definition Banner */}
        <Box x={60} y={125} w={1160} h={75} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              أخذ العينات يعني:
            </span>
            &nbsp;
            <span style={{ fontSize: 22, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تقسيم الصورة إلى بكسلات وقياس / استخراج قيمة السطوع لكل بكسل.
            </span>
          </div>
        </Box>

        {/* 3 Sequential Transformation Cards Side-by-Side (RTL) */}
        {/* Stage 1: Continuous Natural Image */}
        <Box x={860} y={215} w={360} h={295} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ① صورة كاملة (طبيعية) 📷
            </div>
            {/* Continuous SVG Landscape */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120 }}>
              <svg width="150" height="95" viewBox="0 0 150 95" style={{ borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #64748b' }}>
                <defs>
                  <linearGradient id="naturalSky" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#0284c7" />
                    <stop offset="45%" stopColor="#6366f1" />
                    <stop offset="75%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f59e0b" />
                  </linearGradient>
                </defs>
                <rect width="150" height="95" fill="url(#naturalSky)" />
                {/* Sun */}
                <circle cx="28" cy="24" r="12" fill="#fde047" />
                {/* Mountains */}
                <polygon points="0,95 45,35 90,95" fill="#1e293b" opacity="0.9" />
                <polygon points="50,95 105,25 150,95" fill="#0f172a" />
              </svg>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              مشهد تناظري متصل نراه بالعين البشرية ككتلة واحدة مستمرة.
            </div>
          </div>
        </Box>

        {/* Arrow 1 -> 2 */}
        <Arrow from={[850, 360]} to={[830, 360]} c="purple" sw={3.5} at={2} />

        {/* Stage 2: Sliced into Grid */}
        <Box x={460} y={215} w={360} h={295} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ② نقسمها إلى شبكة (Grid) 🔲
            </div>
            {/* Landscape with Grid Overlay */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120 }}>
              <svg width="150" height="95" viewBox="0 0 150 95" style={{ borderRadius: '8px', overflow: 'hidden', border: '1.5px solid #a855f7' }}>
                <rect width="150" height="95" fill="url(#naturalSky)" />
                <circle cx="28" cy="24" r="12" fill="#fde047" />
                <polygon points="0,95 45,35 90,95" fill="#1e293b" opacity="0.9" />
                <polygon points="50,95 105,25 150,95" fill="#0f172a" />
                {/* 6 columns x 4 rows crisp white grid */}
                <line x1="25" y1="0" x2="25" y2="95" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="50" y1="0" x2="50" y2="95" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="75" y1="0" x2="75" y2="95" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="100" y1="0" x2="100" y2="95" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="125" y1="0" x2="125" y2="95" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="0" y1="24" x2="150" y2="24" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="0" y1="48" x2="150" y2="48" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
                <line x1="0" y1="72" x2="150" y2="72" stroke="#ffffff" strokeWidth="1.2" opacity="0.85" />
              </svg>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              خطوط تقسم المشهد إلى مربعات صغيرة منتظمة ومتساوية.
            </div>
          </div>
        </Box>

        {/* Arrow 2 -> 3 */}
        <Arrow from={[450, 360]} to={[430, 360]} c="green" sw={3.5} at={3} />

        {/* Stage 3: Each Square = Pixel */}
        <Box x={60} y={215} w={360} h={295} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'center', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              ③ كل مربع = Pixel 🎯
            </div>
            {/* Zoomed Pixel Square Visual */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 120 }}>
              <div
                style={{
                  width: 85,
                  height: 85,
                  backgroundColor: '#38bdf8',
                  borderRadius: '10px',
                  border: '3px solid #22c55e',
                  boxShadow: '0 0 16px rgba(34, 197, 94, 0.6)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2px',
                }}
              >
                <span style={{ fontSize: 13, fontWeight: 'black', color: '#0f172a', fontFamily: 'monospace' }}>
                  PIXEL
                </span>
                <span style={{ fontSize: 11, color: '#0f172a', fontWeight: 'bold' }}>
                  لون مستقل
                </span>
              </div>
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              أصغر جزء مستقل في الصورة؛ يُقاس سطوعه لتمثيله رقمياً!
            </div>
          </div>
        </Box>

        {/* Bottom Conclusion Banner */}
        <Box x={60} y={530} w={1160} h={150} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'center', padding: '12px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 4 }}>
              ✨ النتيجة الأساسية:
            </div>
            <div style={{ fontSize: 24, fontWeight: 'black', color: 'var(--pen-ink)' }}>
              «وبالتالي أصبح لدينا وصف رقمي للصورة يعتمد على عدد من البكسلات!»
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 4 }}>
              الصورة لم تعد كتلة تناظرية غامضة للكمبيوتر، بل أصبحت مصفوفة محددة من النقاط المستقلة الجاهزة للخطوة التالية!
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'sampling-brightness',
    title: '٤ · إزاي بنستخرج مستوى السطوع؟',
    scene: true,
    notes: (
      <>
        <p><b>٤ · إزاي بنستخرج مستوى السطوع؟ (Brightness):</b></p>
        <p><b>هنا لازم نفهم معنى السطوع Brightness الأول:</b></p>
        <p><b>السطوع ببساطة هو:</b> مدى إضاءة المنطقة التي يمثلها الـ Pixel.</p>
        <p><b>يعني المعالج يسأل: هل المنطقة:</b></p>
        <ul>
          <li><b>مظلمة؟</b> (سطوع منخفض / أسود)</li>
          <li><b>متوسطة الإضاءة؟</b> (سطوع متوسط / رمادي)</li>
          <li><b>شديدة الإضاءة؟</b> (سطوع مرتفع / أبيض)</li>
        </ul>
        <p><b>مثلاً في الصور ذات التدرج الرمادي (أبيض وأسود):</b></p>
        <p>الأسود يمثل أقل سطوع، والأبيض يمثل أعلى سطوع، وبينهما تدرجات الرمادي المتوسطة.</p>
        <p><b>القاعدة:</b> «إذن: كل جزء من الصورة له مستوى سطوع معين!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="فهم معنى السطوع وكيف يقيس المستشعر كمية الضوء لكل بكسل">استخراج السطوع (Brightness): إزاي بنقيس مستويات الإضاءة؟ 💡</Heading>

        {/* Top Definition Box */}
        <Box x={60} y={125} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 24px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              السطوع (Brightness) ببساطة هو: <u>مدى إضاءة المنطقة التي يمثلها الـ Pixel</u>
            </div>
            <div style={{ fontSize: 20, color: 'var(--pen-ink)', marginTop: 3 }}>
              (يعني هل المنطقة: مظلمة؟ متوسطة الإضاءة؟ شديدة الإضاءة؟)
            </div>
          </div>
        </Box>

        {/* 3 Brightness Scale Cards (RTL) */}
        {/* Card 1: Black (Right) */}
        <Box x={860} y={225} w={360} h={285} c="red" fill="red" at={2}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              🌑 أسود (Black)
            </div>
            {/* Visual Dark Swatch + Meter */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: '#0b0f19',
                  borderRadius: '10px',
                  border: '2px solid #334155',
                  boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.8)',
                }}
              />
              <div style={{ width: '80%', height: '10px', backgroundColor: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '8%', height: '100%', backgroundColor: '#ef4444' }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                سطوع منخفض (Low)
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 2 }}>
                منطقة معتمة خالية من الضوء المنعكس.
              </div>
            </div>
          </div>
        </Box>

        {/* Card 2: Gray (Middle) */}
        <Box x={460} y={225} w={360} h={285} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🌓 رمادي (Gray)
            </div>
            {/* Visual Gray Swatch + Meter */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: '#64748b',
                  borderRadius: '10px',
                  border: '2px solid #94a3b8',
                }}
              />
              <div style={{ width: '80%', height: '10px', backgroundColor: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '50%', height: '100%', backgroundColor: '#a855f7' }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                سطوع متوسط (Medium)
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 2 }}>
                إضاءة معتدلة متوازنة بين النور والظلام.
              </div>
            </div>
          </div>
        </Box>

        {/* Card 3: White (Left) */}
        <Box x={60} y={225} w={360} h={285} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'center', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              🌕 أبيض (White)
            </div>
            {/* Visual White Swatch + Meter */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: 75,
                  height: 75,
                  backgroundColor: '#ffffff',
                  borderRadius: '10px',
                  border: '2px solid #e2e8f0',
                  boxShadow: '0 0 16px rgba(255,255,255,0.7)',
                }}
              />
              <div style={{ width: '80%', height: '10px', backgroundColor: '#1e293b', borderRadius: '5px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', backgroundColor: '#22c55e' }} />
              </div>
            </div>
            <div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                سطوع مرتفع (High)
              </div>
              <div style={{ fontSize: 15, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 2 }}>
                منطقة شديدة الإضاءة عاكسة لأقصى كمية ضوء.
              </div>
            </div>
          </div>
        </Box>

        {/* Bottom Summary Banner */}
        <Box x={60} y={530} w={1160} h={150} c="green" fill="green" at={5}>
          <div style={{ textAlign: 'center', padding: '14px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 25, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 4 }}>
              ✨ الاستنتاج التأسيسي:
            </div>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-ink)' }}>
              «إذن: كل جزء من الصورة له مستوى سطوع معين!»
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 4 }}>
              المستشعر الضوئي (في الكاميرا أو الماسح) يقيس كمية الضوء الساقطة من كل بكسل ليحدد درجة سطوعها بدقة قبل تحويلها إلى أرقام.
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'sampling-example-2x2',
    title: '٥ · مثال بسيط جدًا: قراءة سطوع البكسلات',
    scene: true,
    notes: (
      <>
        <p><b>٥ · مثال بسيط جدًا (شبكة ٢ × ٢ بكسل):</b></p>
        <p><b>افترض إن عندنا صورة أبيض وأسود:</b></p>
        <p>مقسمة إلى 4 بكسلات: كل مربع هنا هو <b>Pixel</b> مستقل.</p>
        <p><b>الكاميرا أو الماسح الضوئي</b> يقرأ الضوء القادم من المنطقة التي يمثلها كل Pixel، فنحصل مثلاً على:</p>
        <ul>
          <li><b>Pixel 1 ➔ مظلم جدًا</b></li>
          <li><b>Pixel 2 ➔ ساطع جدًا</b></li>
          <li><b>Pixel 3 ➔ متوسط</b></li>
          <li><b>Pixel 4 ➔ ساطع جدًا</b></li>
        </ul>
        <p><b>القاعدة الذهبية:</b> «إذن استخراج مستوى السطوع معناه أننا نحدد: المنطقة دي فاتحة قد إيه أو غامقة قد إيه؟»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تجربة عملية لقراءة مستشعر الكاميرا لشبكة ٢ × ٢">مثال بسيط: قراءة سطوع البكسلات بمستشعر الكاميرا (شبكة ٢ × ٢) 🔬</Heading>

        {/* Top Intro Banner */}
        <Box x={60} y={125} w={1160} h={70} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', fontSize: 22, fontWeight: 'bold', color: 'var(--pen-ink)', whiteSpace: 'normal' }}>
            افترض إن عندنا صورة أبيض وأسود مقسمة إلى ٤ بكسلات · <span style={{ color: 'var(--pen-blue)' }}>كل مربع هنا هو Pixel مستقل</span>:
          </div>
        </Box>

        {/* 2 Large Cards Side-by-Side */}
        {/* Right Card: 2x2 Grid Representation */}
        <Box x={670} y={210} w={550} h={300} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🔲 شبكة البكسلات (٢ × ٢) ومستشعر الضوء:
            </div>

            {/* The 2x2 Grid matching Slide 5 */}
            <div style={{ display: 'flex', justifyContent: 'center', margin: '4px 0' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '6px',
                  backgroundColor: '#020617',
                  padding: '8px',
                  borderRadius: '12px',
                  border: '2px solid #334155',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                }}
              >
                {/* Pixel 1: Dark */}
                <div
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#0f172a',
                    border: '1.5px solid #475569',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  <span>Pixel 1</span>
                  <span style={{ fontSize: 10, color: '#ef4444' }}>مظلم</span>
                </div>

                {/* Pixel 2: Bright White */}
                <div
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  <span>Pixel 2</span>
                  <span style={{ fontSize: 10, color: '#15803d' }}>ساطع</span>
                </div>

                {/* Pixel 3: Medium Gray */}
                <div
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#64748b',
                    border: '1.5px solid #94a3b8',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  <span>Pixel 3</span>
                  <span style={{ fontSize: 10, color: '#fde047' }}>متوسط</span>
                </div>

                {/* Pixel 4: Bright White */}
                <div
                  style={{
                    width: 75,
                    height: 75,
                    backgroundColor: '#f8fafc',
                    border: '1.5px solid #cbd5e1',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0f172a',
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 'bold',
                  }}
                >
                  <span>Pixel 4</span>
                  <span style={{ fontSize: 10, color: '#15803d' }}>ساطع</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 16, color: 'var(--pen-ink)' }}>
              الكاميرا أو الماسح الضوئي يقرأ الضوء القادم من كل بكسل على حدة.
            </div>
          </div>
        </Box>

        {/* Left Card: 4 Sensor Readings */}
        <Box x={60} y={210} w={550} h={300} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 23, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              📊 قراءات السطوع المستخرجة (Sensor Readings):
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', margin: '4px 0' }}>
              {[
                { p: 'Pixel 1', desc: 'مظلم جدًا', level: 'سطوع منخفض (أسود)', icon: '🌑', color: 'red' },
                { p: 'Pixel 2', desc: 'ساطع جدًا', level: 'سطوع مرتفع (أبيض)', icon: '🌕', color: 'green' },
                { p: 'Pixel 3', desc: 'متوسط', level: 'سطوع معتدل (رمادي)', icon: '🌓', color: 'purple' },
                { p: 'Pixel 4', desc: 'ساطع جدًا', level: 'سطوع مرتفع (أبيض)', icon: '🌕', color: 'green' },
              ].map(item => (
                <div
                  key={item.p}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <span style={{ fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--pen-blue)', fontSize: 16 }}>
                    {item.p}
                  </span>
                  <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>➔</span>
                  <span style={{ fontWeight: 'bold', fontSize: 16, color: `var(--pen-${item.color})` }}>
                    {item.desc}
                  </span>
                  <span style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.8 }}>
                    ({item.level}) {item.icon}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ fontSize: 15, color: 'var(--pen-ink)', opacity: 0.9 }}>
              المستشعر فكك الصورة إلى ٤ قراءات سطوع منفصلة تمهد للمرحلة التالية.
            </div>
          </div>
        </Box>

        {/* Bottom Golden Rule Banner */}
        <Box x={60} y={530} w={1160} h={150} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'center', padding: '12px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 4 }}>
              🎯 القاعدة الذهبية لاستخراج السطوع:
            </div>
            <div style={{ fontSize: 26, fontWeight: 'black', color: 'var(--pen-ink)' }}>
              «إذن استخراج مستوى السطوع معناه أننا نحدد: <span style={{ color: 'var(--pen-red)' }}>المنطقة دي فاتحة قد إيه، أو غامقة قد إيه؟</span>»
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', opacity: 0.85, marginTop: 4 }}>
              هذا التحديد هو المدخل الأساسي للخطوة الثانية: التقدير الرقمي (التكميم Quantization)!
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'sampling-stage',
    title: '٦ · الدقة (Resolution) ووحدة القياس dpi',
    scene: true,
    notes: (
      <>
        <p><b>٦ · الدقة (Resolution) ووحدة قياسها (dpi) طبقاً لكتاب الفائز (ص 130):</b></p>
        <p><b>الدقة (Resolution):</b> درجة دقة ووضوح Pixels عند إجراء عملية أخذ العينات.</p>
        <p><b>يعني إيه «بوصة» (Inch) في الصورة؟</b></p>
        <p>البوصة هي وحدة قياس أبعاد فيزيائية حقيقية (1 Inch = 2.54 cm) على الورق المطبوع أو شاشة العرض.</p>
        <p><b>وحدة قياس الدقة:</b> <b>dpi = Dots Per Inch</b> (أي: عدد النقاط في كل بوصة واحدة 2.54 سم).</p>
        <p><b>طرق التعبير عن الدقة في كتاب الفائز (ص 130):</b></p>
        <ol>
          <li><b>بكثافة النقاط:</b> dpi مثل (72 dpi للشاشات، 300 dpi للمطبوعات، 1200 dpi لطابعات الليزر).</li>
          <li><b>بأبعاد البكسل:</b> (Pixels أفقي × Pixels رأسي) مثل $800 \times 600$ أو $1920 \times 1080$.</li>
        </ol>
        <p><b>القواعد الذهبية المعتمدة ص 130:</b></p>
        <ul>
          <li>كلما زادت الدقة (Resolution) أصبحت الصورة أكثر سلاسة ووضوحاً.</li>
          <li>زيادة الدقة تؤدي إلى زيادة حجم ملف الصورة في الذاكرة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المصطلح الأهم في أخذ العينات: ما هي الدقة وما هي البوصة والفرق بين 72 و 300 و 1200 dpi؟">الدقة (Resolution) ووحدة القياس dpi ومعنى البوصة 🔍</Heading>

        {/* Top Definition & Physical Inch Banner */}
        <Box x={60} y={115} w={1160} h={105} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 22px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <div style={{ fontSize: 20, color: 'var(--pen-ink)' }}>
              أثناء أخذ العينات تظهر كلمة هامة جدًا: <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>الدقة (Resolution)</span> = <b>درجة دقة ووضوح البكسلات عند أخذ العينات</b> (كتاب الفائز ص 130).
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', flexWrap: 'wrap', fontSize: 17, color: 'var(--pen-ink)' }}>
              <div>
                📏 <span style={{ color: 'var(--pen-yellow)', fontWeight: 'bold' }}>يعني إيه «بوصة» (Inch) في الصورة؟</span> وحدة أبعاد فيزيائية حقيقية = <b style={{ color: 'var(--pen-green)' }}>2.54 سم</b> على الورق أو الشاشة.
              </div>
              <div>
                🎯 <span style={{ color: 'var(--pen-blue)', fontWeight: 'bold' }}>وحدة القياس dpi:</span> اختصار <b style={{ color: '#38bdf8', fontFamily: 'monospace' }}>Dots Per Inch</b> (أي: <b>عدد النقاط في كل بوصة واحدة</b>).
              </div>
            </div>
          </div>
        </Box>

        {/* 3 Visual Comparison Cards Side-by-Side: 1200 dpi vs 300 dpi vs 72 dpi (Textbook Standards) */}
        {/* Card 1: 1200 dpi - Laser Printers (Right, RTL) */}
        <Box x={860} y={230} w={360} h={310} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            {/* Header + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                🌟 طابعات الليزر: 1200 dpi
              </div>
              <span style={{
                fontSize: 11,
                fontWeight: 'bold',
                backgroundColor: 'rgba(168, 85, 247, 0.2)',
                color: 'var(--pen-purple)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid var(--pen-purple)',
              }}>
                كتاب الفائز ص 130
              </span>
            </div>

            {/* Visual: 1-Inch Box with Ultra-Dense Dots & Micro-Sharp Arc */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* 1 Inch Dot Matrix Simulator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8', fontFamily: 'monospace' }}>1 بوصة (2.54 سم)</span>
                <div style={{
                  width: 65,
                  height: 65,
                  backgroundColor: '#020617',
                  border: '2px solid #a855f7',
                  borderRadius: '5px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(16, 1fr)',
                  gap: '1px',
                  padding: '2px',
                  boxShadow: '0 0 10px rgba(168, 85, 247, 0.4)',
                }}>
                  {Array.from({ length: 256 }).map((_, i) => (
                    <div key={i} style={{ width: '100%', height: '100%', backgroundColor: '#c084fc', borderRadius: '50%' }} />
                  ))}
                </div>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#c084fc' }}>تلاحم ميكروسكوبي</span>
              </div>

              {/* Razor-Sharp Arc */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8' }}>وضوح التفاصيل</span>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <rect width="65" height="65" fill="#020617" rx="5" stroke="#334155" strokeWidth="1" />
                  <circle cx="32.5" cy="32.5" r="23" fill="none" stroke="#a855f7" strokeWidth="3.5" />
                  <circle cx="32.5" cy="32.5" r="9" fill="#c084fc" />
                </svg>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#c084fc' }}>نعومة فائقة تماماً</span>
              </div>
            </div>

            {/* Explanation Points */}
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.4 }}>
              • <b>1200 نقطة</b> في كل بوصة خطية.<br />
              • <b>نعومة ميكروسكوبية:</b> تفاصيل حادة للغاية لا تظهر بها أي تعرجات.<br />
              • <b>الاستخدام:</b> طابعات الليزر والمطابع الفاخرة.
            </div>
          </div>
        </Box>

        {/* Card 2: 300 dpi - Paper Printing (Middle) */}
        <Box x={460} y={230} w={360} h={310} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            {/* Header + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                ✨ المطبوعات الورقية: 300 dpi
              </div>
              <span style={{
                fontSize: 11,
                fontWeight: 'bold',
                backgroundColor: 'rgba(34, 197, 94, 0.2)',
                color: 'var(--pen-green)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid var(--pen-green)',
              }}>
                معيار الطباعة
              </span>
            </div>

            {/* Visual: 1-Inch Box with Dense Dots & Crisp Circle */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* 1 Inch Dot Matrix Simulator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8', fontFamily: 'monospace' }}>1 بوصة (2.54 سم)</span>
                <div style={{
                  width: 65,
                  height: 65,
                  backgroundColor: '#020617',
                  border: '2px solid #22c55e',
                  borderRadius: '5px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(10, 1fr)',
                  gap: '1.5px',
                  padding: '2px',
                  boxShadow: '0 0 10px rgba(34, 197, 94, 0.3)',
                }}>
                  {Array.from({ length: 100 }).map((_, i) => (
                    <div key={i} style={{ width: '100%', height: '100%', backgroundColor: '#22c55e', borderRadius: '50%' }} />
                  ))}
                </div>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#22c55e' }}>نقاط شديدة التزاحم</span>
              </div>

              {/* Crisp Circle */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8' }}>وضوح التفاصيل</span>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <rect width="65" height="65" fill="#020617" rx="5" stroke="#334155" strokeWidth="1" />
                  <circle cx="32.5" cy="32.5" r="23" fill="none" stroke="#22c55e" strokeWidth="3" />
                  <circle cx="32.5" cy="32.5" r="9" fill="#22c55e" />
                </svg>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#22c55e' }}>منحنى ناعم وممتاز</span>
              </div>
            </div>

            {/* Explanation Points */}
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.4 }}>
              • <b>300 نقطة</b> في كل بوصة خطية.<br />
              • <b>تفاصيل أكثر:</b> جودة فائقة لا تظهر بها أي بكسلات بالعين الطبيعية.<br />
              • <b>الاستخدام:</b> طباعة الكتب والمجلات والصور الفوتوغرافية.
            </div>
          </div>
        </Box>

        {/* Card 3: 72 dpi - Web & Mobile Screens (Left) */}
        <Box x={60} y={230} w={360} h={310} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            {/* Header + Badge */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                📱 شاشات الويب: 72 dpi
              </div>
              <span style={{
                fontSize: 11,
                fontWeight: 'bold',
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                color: 'var(--pen-orange)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid var(--pen-orange)',
              }}>
                شاشات وسرعة
              </span>
            </div>

            {/* Visual: 1-Inch Box with Sparse Dots & Jagged Arc */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '8px 10px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              {/* 1 Inch Dot Matrix Simulator (Sparse) */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8', fontFamily: 'monospace' }}>1 بوصة (2.54 سم)</span>
                <div style={{
                  width: 65,
                  height: 65,
                  backgroundColor: '#020617',
                  border: '2px solid #f97316',
                  borderRadius: '5px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 1fr)',
                  gap: '4px',
                  padding: '5px',
                  boxShadow: '0 0 10px rgba(249, 115, 22, 0.3)',
                }}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} style={{ width: '100%', height: '100%', backgroundColor: '#f97316', borderRadius: '50%' }} />
                  ))}
                </div>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#f97316' }}>نقاط أقل ومتباعدة</span>
              </div>

              {/* Stepped Arc Visual */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 10, color: '#94a3b8' }}>وضوح التفاصيل</span>
                <svg width="65" height="65" viewBox="0 0 65 65">
                  <rect width="65" height="65" fill="#020617" rx="5" stroke="#334155" strokeWidth="1" />
                  <rect x="22" y="9" width="22" height="5" fill="#f97316" />
                  <rect x="13" y="14" width="9" height="7" fill="#f97316" />
                  <rect x="44" y="14" width="9" height="7" fill="#f97316" />
                  <rect x="7" y="21" width="6" height="22" fill="#f97316" />
                  <rect x="52" y="21" width="6" height="22" fill="#f97316" />
                  <rect x="13" y="43" width="9" height="7" fill="#f97316" />
                  <rect x="44" y="43" width="9" height="7" fill="#f97316" />
                  <rect x="22" y="50" width="22" height="5" fill="#f97316" />
                  <rect x="27" y="27" width="11" height="11" fill="#f97316" />
                </svg>
                <span style={{ fontSize: 10, fontWeight: 'bold', color: '#f97316' }}>تعرجات بكسل ظاهرة</span>
              </div>
            </div>

            {/* Explanation Points */}
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.4 }}>
              • <b>72 نقطة فقط</b> في كل بوصة خطية.<br />
              • <b>تفاصيل محدودة:</b> تظهر التعرجات عند التكبير، لكنها مريحة على الشاشات.<br />
              • <b>الاستخدام:</b> مواقع الويب وموبايل لتوفير الذاكرة وسرعة النقل.
            </div>
          </div>
        </Box>

        {/* Bottom Banner: Textbook Rules & The Two Representation Methods */}
        <Box x={60} y={550} w={1160} h={140} c="green" fill="green" at={5}>
          <div style={{ padding: '10px 24px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)', textAlign: 'center' }}>
              🎯 قواعد واستنتاجات كتاب الفائز ص 130:
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: 15, lineHeight: 1.45 }}>
                <span style={{ color: '#38bdf8', fontWeight: 'bold' }}>📌 طريقتا التعبير عن الدقة في كتاب الفائز:</span><br />
                ١) <b>بكثافة النقاط:</b> <span style={{ color: '#38bdf8', fontFamily: 'monospace' }}>dpi</span> (مثل 72 dpi أو 300 dpi أو 1200 dpi).<br />
                ٢) <b>بأبعاد البكسل:</b> <b>(أفقي × رأسي)</b> مثل <span style={{ fontFamily: 'monospace', color: '#22c55e' }}>800 × 600</span> أو <span style={{ fontFamily: 'monospace', color: '#22c55e' }}>1920 × 1080</span>.
              </div>
              <div style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: 15, lineHeight: 1.45 }}>
                <span style={{ color: 'var(--pen-green)', fontWeight: 'bold' }}>✨ القاعدة الذهبية ص 130:</span><br />
                • كلما زادت الدقة (Resolution) أصبحت الصورة <b>أكثر سلاسة ووضوحاً</b>.<br />
                • زيادة الدقة تؤدي إلى <b>زيادة حجم ملف الصورة في الذاكرة</b>.
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },
];
