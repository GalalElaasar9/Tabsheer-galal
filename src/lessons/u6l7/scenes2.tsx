// Board scenes · part 2 (Quantization, Encoding, Flow Summary, & Raster vs Vector).
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Doodle, Heading, Scene,
} from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'quantization-stage',
    title: 'المرحلة الثانية: التكميم (Quantization) والتدرج',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الثانية في رقمنة الصور طبقاً لكتاب الوزارة (ص 88) والمنهج المعتمد (ص 131):</b></p>
        <p><b>التقدير الرقمي / التكميم (Quantization):</b> يحول سطوع ولون كل Pixel المستمر إلى قيم رقمية مقسمة إلى عدة مستويات محددة وفق قاعدة ثابتة.</p>
        <p><b>التدرج (Gradation):</b> هو قيمة المستوى التي تمثل كثافة اللون أو السطوع لكل بكسل.</p>
        <p>يتم تحديد عدد مستويات التدرج حسب <b>عدد البتات (Bits)</b> المخصصة لكل بكسل، بالقانون الرياضي: <b>2ⁿ</b> (حيث n هو عمق البت).</p>
        <p><b>أمثلة المنهج المعتمدة:</b></p>
        <ul>
          <li><b>1-Bit:</b> يعطي مستويين فقط (2¹ = 2) أبيض أو أسود.</li>
          <li><b>2-Bit:</b> يعطي 4 مستويات (2² = 4) تدرجات رمادية أولية.</li>
          <li><b>8-Bit:</b> يعطي <b>256 تدرجاً</b> (2⁸ = 256) من 0 (أسود تام) إلى 255 (أبيض تام).</li>
          <li><b>24-Bit:</b> يعطي أكثر من <b>16.7 مليون لون</b> (ألوان كاملة True Color).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخطوة رقم ٢ من خطوات رقمنة الصور الثلاث">٢ · التكميم (Quantization) والتدرج (Gradation) 🎨</Heading>

        {/* Top Definition Banner: 2 Columns Side-by-Side */}
        <Box x={60} y={115} w={1160} h={105} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '10px 22px', whiteSpace: 'normal', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px', height: '100%', boxSizing: 'border-box' }}>
            {/* Right Column: Quantization Definition */}
            <div style={{ flex: 1, borderLeft: '1.5px solid rgba(255,255,255,0.15)', paddingLeft: '16px' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 4 }}>
                ① التقدير الرقمي / التكميم (Quantization):
              </div>
              <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
                تحويل سطوع كل بكسل المستمر إلى قيم رقمية صحيحة مقسمة إلى <b>مستويات محددة</b> وفق قاعدة ثابتة.
              </div>
            </div>

            {/* Left Column: Gradation Definition */}
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 4 }}>
                ② التدرج اللوني (Gradation):
              </div>
              <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
                قيمة المستوى التي تمثل كثافة اللون أو السطوع لكل بكسل، ويُحسب بعدد البتات بالقانون: <b style={{ color: 'var(--pen-yellow)', fontFamily: 'monospace' }}>2ⁿ</b>.
              </div>
            </div>
          </div>
        </Box>

        {/* Middle Section: 2 Rich Visual Cards */}
        {/* Right Card: Bit Depth & Gradation Levels (RTL) */}
        <Box x={660} y={230} w={560} h={305} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                🔢 مستويات التدرج حسب عمق البت (2ⁿ):
              </div>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                كتاب الوزارة ص 88
              </span>
            </div>

            {/* 4 Tiers with visual swatches */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {/* 1-Bit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(15, 23, 42, 0.65)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 15, color: 'var(--pen-ink)' }}>
                  • <b>1-Bit</b> (2¹ = <b>مستويان</b>): أسود أو أبيض فقط
                </div>
                {/* 1-bit swatch */}
                <div style={{ width: 75, height: 18, borderRadius: '4px', overflow: 'hidden', display: 'flex', border: '1px solid #64748b' }}>
                  <div style={{ flex: 1, backgroundColor: '#000000' }} />
                  <div style={{ flex: 1, backgroundColor: '#ffffff' }} />
                </div>
              </div>

              {/* 2-Bit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(15, 23, 42, 0.65)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 15, color: 'var(--pen-ink)' }}>
                  • <b>2-Bit</b> (2² = <b>٤ مستويات</b>): تدرجات رمادية أولية
                </div>
                {/* 2-bit swatch */}
                <div style={{ width: 75, height: 18, borderRadius: '4px', overflow: 'hidden', display: 'flex', border: '1px solid #64748b' }}>
                  <div style={{ flex: 1, backgroundColor: '#0f172a' }} />
                  <div style={{ flex: 1, backgroundColor: '#475569' }} />
                  <div style={{ flex: 1, backgroundColor: '#94a3b8' }} />
                  <div style={{ flex: 1, backgroundColor: '#ffffff' }} />
                </div>
              </div>

              {/* 8-Bit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(15, 23, 42, 0.65)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 15, color: 'var(--pen-ink)' }}>
                  • <b>8-Bit</b> (2⁸ = <b>٢٥٦ تدرجاً</b>): تدرج رمادي ناعم (0..255)
                </div>
                {/* 8-bit smooth gradient swatch */}
                <div style={{ width: 75, height: 18, borderRadius: '4px', overflow: 'hidden', background: 'linear-gradient(to left, #ffffff, #000000)', border: '1px solid #64748b' }} />
              </div>

              {/* 24-Bit */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'rgba(15, 23, 42, 0.65)', padding: '6px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: 15, color: 'var(--pen-ink)' }}>
                  • <b>24-Bit</b> (2²⁴ = <b>١٦.٧ مليون لون</b>): ألوان حقيقية كاملة
                </div>
                {/* 24-bit rainbow gradient swatch */}
                <div style={{ width: 75, height: 18, borderRadius: '4px', overflow: 'hidden', background: 'linear-gradient(to left, #ef4444, #eab308, #22c55e, #06b6d4, #3b82f6, #a855f7)', border: '1px solid #64748b' }} />
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', opacity: 0.85 }}>
              كلما زاد عدد البتات (Bits)، تضاعفت مستويات التدرج وتدرجت الألوان بنعومة أعلى.
            </div>
          </div>
        </Box>

        {/* Left Card: Ministry Textbook Example (Page 88) & Staircase Visual */}
        <Box x={60} y={230} w={560} h={305} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                📌 مثال كتاب الوزارة ص 88 (نظام 256 تدرجاً):
              </div>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                8-Bit Grayscale
              </span>
            </div>

            {/* Visual Quantization Staircase (Continuous Analog Curve -> Discrete Digital Steps) */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '8px 12px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 11, color: '#94a3b8' }}>ضوء مستمر (تناظري)</span>
                <svg width="100" height="48" viewBox="0 0 100 48">
                  <path d="M5 42 Q30 5 50 24 T95 6" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                </svg>
              </div>

              <span style={{ fontSize: 20, color: 'var(--pen-red)' }}>➔</span>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontSize: 11, color: '#c084fc', fontWeight: 'bold' }}>سلّم التكميم (رقمي)</span>
                <svg width="100" height="48" viewBox="0 0 100 48">
                  {/* Discrete Quantization Steps */}
                  <path d="M5 42 H25 V30 H50 V18 H75 V8 H95" fill="none" stroke="#a855f7" strokeWidth="3" />
                  <circle cx="25" cy="42" r="3" fill="#ffffff" />
                  <circle cx="50" cy="30" r="3" fill="#ffffff" />
                  <circle cx="75" cy="18" r="3" fill="#ffffff" />
                  <circle cx="95" cy="8" r="3" fill="#ffffff" />
                </svg>
              </div>
            </div>

            {/* 3 Core Ministry Values from Page 88 */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
              <div style={{ backgroundColor: '#020617', border: '1.5px solid #334155', borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'black', fontSize: 16, color: '#94a3b8', display: 'block' }}>القيمة 0</span>
                <span style={{ fontSize: 12, fontWeight: 'bold', color: '#ef4444' }}>أسود تام</span>
                <span style={{ fontSize: 10, color: '#64748b', display: 'block' }}>(أقل سطوع)</span>
              </div>

              <div style={{ backgroundColor: '#1e293b', border: '1.5px solid #475569', borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'black', fontSize: 16, color: '#c084fc', display: 'block' }}>القيمة 128</span>
                <span style={{ fontSize: 12, fontWeight: 'bold', color: '#cbd5e1' }}>رمادي متوسط</span>
                <span style={{ fontSize: 10, color: '#94a3b8', display: 'block' }}>(إضاءة معتدلة)</span>
              </div>

              <div style={{ backgroundColor: '#f8fafc', border: '1.5px solid #cbd5e1', borderRadius: '6px', padding: '6px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'monospace', fontWeight: 'black', fontSize: 16, color: '#0f172a', display: 'block' }}>القيمة 255</span>
                <span style={{ fontSize: 12, fontWeight: 'bold', color: '#15803d' }}>أبيض تام</span>
                <span style={{ fontSize: 10, color: '#475569', display: 'block' }}>(أعلى سطوع)</span>
              </div>
            </div>

            <div style={{ fontSize: 13, color: 'var(--pen-ink)', opacity: 0.9 }}>
              والأرقام بينهما (1 إلى 254) تمثل درجات الرمادي الناعمة تدريجياً.
            </div>
          </div>
        </Box>

        {/* Bottom Summary Banner: Ministry Rules & Memory Cost */}
        <Box x={60} y={545} w={1160} h={140} c="green" fill="green" at={4}>
          <div style={{ padding: '10px 24px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)', textAlign: 'center' }}>
              🎯 خلاصة وقواعد التكميم المعتمدة في كتاب الوزارة (ص 88):
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>
              <div style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: 15, lineHeight: 1.45 }}>
                <span style={{ color: 'var(--pen-green)', fontWeight: 'bold' }}>✨ جودة ونعومة الصورة:</span><br />
                كلما زادت مستويات <b>التدرج (Gradation)</b>، أصبحت الصورة أكثر سلاسة ونعومة واختفت الحدود الحادة بين الألوان.
              </div>
              <div style={{ flex: 1, backgroundColor: 'rgba(15, 23, 42, 0.6)', padding: '8px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)', fontSize: 15, lineHeight: 1.45 }}>
                <span style={{ color: 'var(--pen-red)', fontWeight: 'bold' }}>💾 تكلفة الذاكرة التخزينية:</span><br />
                زيادة عدد البتات المخصصة لكل بكسل (زيادة التدرج) تؤدي مباشرة إلى <b>زيادة حجم ملف الصورة في الذاكرة</b>.
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'encoding-stage',
    title: 'المرحلة الثالثة: الترميز (Encoding) ومصفوفة الأرقام',
    scene: true,
    notes: (
      <>
        <p><b>المرحلة الثالثة في رقمنة الصور طبقاً لكتاب الوزارة (ص 88 و 91):</b></p>
        <p><b>الترميز (Encoding):</b> التعبير عن القيم الكمية المقدرة في أرقام ثنائية (0 و 1) ليتم تخزينها في ذاكرة الكمبيوتر.</p>
        <p><b>شرح تمرين كتاب الوزارة ص 91:</b></p>
        <p>تُقسم الصورة إلى شبكة (8 × 8 بكسل):</p>
        <ul>
          <li>المستوى 0 يُرمز له ثنائياً بـ <b>00</b></li>
          <li>المستوى 1 يُرمز له ثنائياً بـ <b>01</b></li>
          <li>المستوى 2 يُرمز له ثنائياً بـ <b>10</b></li>
          <li>المستوى 3 يُرمز له ثنائياً بـ <b>11</b></li>
        </ul>
        <p>فتتحول الصورة بكاملها إلى ملف ثنائي رقمي خالص!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخطوة رقم ٣ ومثال كتاب الوزارة ص 91 المعتمد">الخطوة الثالثة: الترميز (Encoding) ومصفوفة البايت 🔢</Heading>

        {/* Definition Box */}
        <Box x={660} y={145} w={560} h={165} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'right', padding: '12px 20px', lineHeight: 1.5 }}>
            <div style={{ fontSize: 27, fontWeight: 'bold', color: 'var(--pen-red)', marginBottom: 6 }}>
              الترميز / التشفير (Encoding):
            </div>
            <div style={{ fontSize: 21, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              التعبير عن القيم الكمية المستخرجة في <b>أرقام ثنائية (0 و 1)</b>،
              حيث يأخذ كل بكسل كوده الثنائي الخاص به.
            </div>
          </div>
        </Box>

        {/* Ministry exercise table preview */}
        <Box x={60} y={145} w={560} h={165} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 20px', lineHeight: 1.5 }}>
            <div style={{ fontSize: 27, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 6 }}>
              جدول التحويل (نظام 2 بت):
            </div>
            <div style={{ fontSize: 21, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • المستوى 0 (أسود) = <b style={{ color: 'var(--pen-green)' }}>00</b> &nbsp;|&nbsp;
              • المستوى 1 (رمادي داكن) = <b style={{ color: 'var(--pen-green)' }}>01</b><br />
              • المستوى 2 (رمادي فاتح) = <b style={{ color: 'var(--pen-green)' }}>10</b> &nbsp;|&nbsp;
              • المستوى 3 (أبيض) = <b style={{ color: 'var(--pen-green)' }}>11</b>
            </div>
          </div>
        </Box>

        {/* Matrix Visualization matching page 91 */}
        <Box x={120} y={325} w={1040} h={230} c="ink" at={3}>
          <div style={{ textAlign: 'center', padding: '8px 15px', lineHeight: 1.45 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              📸 كيف يرى المعالج الصورة؟ (تمرين ص 91 بكتاب الوزارة):
            </span>
            <br />
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
              <div style={{ fontSize: 20 }}>
                <b>١. مستويات التكميم (0..3):</b><br />
                <span style={{ fontFamily: 'monospace', letterSpacing: 3 }}>
                  0 0 1 2 2 1 0 0<br />
                  0 1 2 3 3 2 1 0<br />
                  0 1 2 3 3 2 1 0<br />
                  0 0 1 2 2 1 0 0
                </span>
              </div>
              <div style={{ fontSize: 32, color: 'var(--pen-red)' }}>
                ➔
              </div>
              <div style={{ fontSize: 20 }}>
                <b>٢. الكود الثنائي (Encoding):</b><br />
                <span style={{ fontFamily: 'monospace', color: 'var(--pen-green)', letterSpacing: 2 }}>
                  00 00 01 10 10 01 00 00<br />
                  00 01 10 11 11 10 01 00<br />
                  00 01 10 11 11 10 01 00<br />
                  00 00 01 10 10 01 00 00
                </span>
              </div>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'flow-summary-slide',
    title: 'ملخص مراحل رقمنة الصور الثلاث',
    scene: true,
    notes: (
      <>
        <p><b>التدفق المعتمد لرقمنة الصور في كتاب الوزارة ص 88 وص 91:</b></p>
        <p><b>الصورة الأصلية 🖼️</b></p>
        <p>⬇</p>
        <p><b>١) أخذ العينات / المعاينة (Sampling):</b> تقسيم الصورة إلى Pixels واستخراج السطوع التمثيلي.</p>
        <p>⬇</p>
        <p><b>٢) التكميم / التقدير الرقمي (Quantization):</b> تحويل السطوع إلى مستويات قيم رقمية محددة وفق قاعدة ثابتة.</p>
        <p>⬇</p>
        <p><b>٣) الترميز / التشفير (Encoding):</b> التعبير عن القيم في أرقام ثنائية (0 و 1) وتخزينها في الذاكرة.</p>
        <p><b>سؤال تكرر في الامتحانات:</b> «اختر التدفق الصحيح لرقمنة صورة التقطتها كاميرا رقمية: أخذ العينات ← التحول الكمي ← الترميز».</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التدفق الرسمي المعتمد في أسئلة الامتحانات">ملخص خطوات رقمنة الصور الثلاث 📋</Heading>

        {/* Step 0: Original Image */}
        <Doodle x={1170} y={235} icon="🖼️" size={88} c="ink" fill="ink" label="الصورة الأصلية" lc="ink" at={1} />
        <Arrow from={[1100, 235]} to={[1060, 235]} c="blue" sw={3.5} at={2} />

        {/* Step 1: Sampling */}
        <Box x={790} y={170} w={260} h={130} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'center', lineHeight: 1.45, padding: '6px' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ١) أخذ العينات (Sampling)
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', marginTop: 4 }}>
              تقسيم الصورة لـ Pixels واستخراج السطوع
            </div>
          </div>
        </Box>
        <Arrow from={[780, 235]} to={[720, 235]} c="purple" sw={3.5} at={3} />

        {/* Step 2: Quantization */}
        <Box x={450} y={170} w={260} h={130} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'center', lineHeight: 1.45, padding: '6px' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ٢) التكميم (Quantization)
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', marginTop: 4 }}>
              تحويل السطوع لمستويات رقمية محددة
            </div>
          </div>
        </Box>
        <Arrow from={[440, 235]} to={[380, 235]} c="red" sw={3.5} at={4} />

        {/* Step 3: Encoding */}
        <Box x={110} y={170} w={260} h={130} c="red" fill="red" at={4}>
          <div style={{ textAlign: 'center', lineHeight: 1.45, padding: '6px' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ٣) الترميز (Encoding)
            </div>
            <div style={{ fontSize: 17, color: 'var(--pen-ink)', marginTop: 4 }}>
              التعبير عن القيم بالنظام الثنائي (0 و 1)
            </div>
          </div>
        </Box>

        {/* Big Rule Callout Card below */}
        <Box x={120} y={350} w={1040} h={190} c="green" fill="green" at={5}>
          <div style={{ textAlign: 'right', padding: '12px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              💡 ملخص الرقمنة وحجم البيانات (كتاب الوزارة ص 88):
            </span>
            <br />
            <span style={{ fontSize: 23, color: 'var(--pen-ink)' }}>
              • كلما <b>ارتفعت</b> قيم <b>الدقة (Resolution)</b> و<b>التدرج (Gradation)</b>:<br />
              &nbsp;&nbsp;← أصبحت الصورة الناتجة أكثر سالسة وتحسنت جودة الصورة بشكل ملحوظ.<br />
              &nbsp;&nbsp;← ولكن في المقابل، <b>يزداد حجم البيانات التخزينية</b> في الذاكرة وعلى القرص.
            </span>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'raster-vs-vector',
    title: 'التنسيق النقطي (Raster) مقابل المتجهات (Vector)',
    scene: true,
    notes: (
      <>
        <p><b>المقارنة الجوهرية المقررة في كتاب الحاسب الآلي:</b></p>
        <p><b>١) التنسيق النقطي (Bitmap / Raster format):</b></p>
        <ul>
          <li>طريقة لتمثيل الصور باستخدام <b>شبكة من النقاط (Pixels)</b>.</li>
          <li><b>ظاهرة التعرجات (Jaggies):</b> عند تكبير الصورة تظهر متكسّرة أو متعرجة ومسننة الحواف.</li>
          <li><b>البرامج:</b> تُنشأ ببرامج التلوين (Paint) مثل Adobe Photoshop.</li>
          <li><b>الاستخدام:</b> مناسبة للصور الواقعية والفوتوغرافية المعقدة ذات التدرجات الكثيرة.</li>
          <li><b>أشهر الصيغ:</b> PNG, JPG, BMP, GIF, WebP.</li>
        </ul>
        <p><b>٢) تنسيق المتجهات (Vector format):</b></p>
        <ul>
          <li>تمثيل يتضمن معلومات عن <b>إحداثيات النقاط</b>، زوايا وسمك الخطوط ومعادلاتها الرياضية.</li>
          <li><b>عند التكبير:</b> لا تفقد جودتها إطلاقاً، وتظل حادة وناعمة تماماً بدون أي تعرجات!</li>
          <li><b>البرامج:</b> تُنشأ ببرامج الرسم (Draw) مثل Adobe Illustrator.</li>
          <li><b>الاستخدام:</b> مثالية للشعارات (Logos)، والخطوط (Fonts)، والرسوم الهندسية والأيقونات.</li>
          <li><b>أشهر الصيغ:</b> SVG, AI, EPS, PDF.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المقارنة الكبرى بالهوية البصرية: شبكة البكسلات وظاهرة التعرجات مقابل المعادلات الرياضية والنقاء التام">
          التنسيق النقطي (Raster) مقابل تنسيق المتجهات (Vector) ⚖️
        </Heading>

        {/* Raster Card (Right) */}
        <Box x={660} y={120} w={560} h={565} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'right', padding: '14px 18px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Header Badge */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(239, 68, 68, 0.35)', paddingBottom: 6 }}>
                <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  🖼️ التنسيق النقطي (Raster / Bitmap)
                </span>
                <span style={{ fontSize: 12, fontWeight: 'bold', background: '#dc2626', color: '#fff', padding: '2px 8px', borderRadius: 5 }}>
                  Photoshop · برامج التلوين
                </span>
              </div>

              {/* Visual Identity Graphic: Pixel Grid & Jaggies */}
              <div style={{ background: '#090d16', border: '1.5px solid rgba(239, 68, 68, 0.45)', borderRadius: 10, padding: '10px 12px', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                {/* Visual SVG showing Jaggies */}
                <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, padding: 4, width: 130, height: 95, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  {/* Stepped Pixels (Jaggies Staircase) */}
                  <svg width="110" height="80" viewBox="0 0 110 80">
                    {/* Grid lines */}
                    <defs>
                      <pattern id="rasterGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="110" height="80" fill="url(#rasterGrid)" />
                    {/* Stepped pixel blocks */}
                    <rect x="10" y="50" width="20" height="20" fill="#38bdf8" stroke="#ef4444" strokeWidth="1" />
                    <rect x="30" y="40" width="20" height="20" fill="#38bdf8" stroke="#ef4444" strokeWidth="1" />
                    <rect x="50" y="30" width="20" height="20" fill="#38bdf8" stroke="#ef4444" strokeWidth="1" />
                    <rect x="70" y="20" width="20" height="20" fill="#38bdf8" stroke="#ef4444" strokeWidth="1" />
                    <rect x="90" y="10" width="20" height="20" fill="#38bdf8" stroke="#ef4444" strokeWidth="1" />
                    {/* Red jagged outline */}
                    <path d="M 10 70 L 10 50 L 30 50 L 30 40 L 50 40 L 50 30 L 70 30 L 70 20 L 90 20 L 90 10 L 110 10" fill="none" stroke="#f87171" strokeWidth="2.5" />
                  </svg>
                  <span style={{ position: 'absolute', bottom: 2, right: 4, fontSize: 10, color: '#f87171', fontWeight: 'bold' }}>
                    تكبير 8x (السلالم)
                  </span>
                </div>

                <div style={{ flex: 1, fontSize: 13, color: '#fecaca', lineHeight: 1.5 }}>
                  <b style={{ color: '#f87171' }}>⚠️ ظاهرة التعرجات (Jaggies):</b><br />
                  عند تكبير الصورة، تظهر الحواف متكسّرة ومسننة في هيئة درجات سلالم مربعة؛ لأنها مكونة من شبكة بكسلات ثابتة!
                </div>
              </div>

              {/* Core Textbook Specs */}
              <div style={{ fontSize: 15.5, color: 'var(--pen-ink)', marginTop: 10, lineHeight: 1.6 }}>
                • <b>أساس التكوين:</b> شبكة مصفوفية من النقاط الملونة (Pixels).<br />
                • <b>أثر التكبير:</b> <b>تفقد حدتها ونقاءها</b> وتظهر بكسلات مشوشة ومسننة.<br />
                • <b>نوع البرامج:</b> برامج التلوين (Paint) مثل <b>Photoshop</b>.<br />
                • <b>الاستخدام الأمثل:</b> الصور الفوتوغرافية والواقعية وتدرجات الألوان الطبيعية.<br />
                • <b>أشهر الصيغ:</b> <span style={{ fontFamily: 'monospace', color: '#dc2626', fontWeight: 'bold' }}>PNG, JPG, BMP, GIF, WebP</span>
              </div>
            </div>

            {/* Bottom Summary Pill */}
            <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid #ef4444', borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#fecaca', textAlign: 'center', fontWeight: 'bold' }}>
              🎯 الهوية: «مربعات بكسل متراصة — تبكسل وتتشوه عند التكبير!»
            </div>
          </div>
        </Box>

        {/* Vector Card (Left) */}
        <Box x={60} y={120} w={560} h={565} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            {/* Header Badge */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid rgba(34, 197, 94, 0.35)', paddingBottom: 6 }}>
                <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  📐 تنسيق المتجهات (Vector Format)
                </span>
                <span style={{ fontSize: 12, fontWeight: 'bold', background: '#16a34a', color: '#fff', padding: '2px 8px', borderRadius: 5 }}>
                  Illustrator · برامج الرسم
                </span>
              </div>

              {/* Visual Identity Graphic: Smooth Math Path & Bézier Anchor Points */}
              <div style={{ background: '#090d16', border: '1.5px solid rgba(34, 197, 94, 0.45)', borderRadius: 10, padding: '10px 12px', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                {/* Visual SVG showing Smooth Bézier Curve */}
                <div style={{ background: '#0f172a', border: '1px solid #334155', borderRadius: 8, padding: 4, width: 130, height: 95, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <svg width="110" height="80" viewBox="0 0 110 80">
                    {/* Background coordinate lines */}
                    <line x1="5" y1="75" x2="105" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    <line x1="5" y1="5" x2="5" y2="75" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                    {/* Smooth curve */}
                    <path d="M 10 70 Q 55 10, 100 20" fill="none" stroke="#4ade80" strokeWidth="3" />
                    {/* Anchor point 1 */}
                    <rect x="7" y="67" width="6" height="6" fill="#38bdf8" stroke="#fff" strokeWidth="1" />
                    {/* Tangent handle */}
                    <line x1="10" y1="70" x2="40" y2="30" stroke="#facc15" strokeWidth="1" strokeDasharray="2,2" />
                    <circle cx="40" cy="30" r="3" fill="#facc15" />
                    {/* Anchor point 2 */}
                    <rect x="97" y="17" width="6" height="6" fill="#38bdf8" stroke="#fff" strokeWidth="1" />
                  </svg>
                  <span style={{ position: 'absolute', bottom: 2, right: 4, fontSize: 10, color: '#4ade80', fontWeight: 'bold' }}>
                    معادلة رياضية (حادة)
                  </span>
                </div>

                <div style={{ flex: 1, fontSize: 13, color: '#dcfce7', lineHeight: 1.5 }}>
                  <b style={{ color: '#4ade80' }}>✨ نقاء تام 100% دون أي تعرج:</b><br />
                  الحاسوب يعيد حساب المعادلات الهندسية فوراً عند كل تكبير؛ فتظل المنحنيات فائقة النعومة والحِدة مهما كبرت!
                </div>
              </div>

              {/* Core Textbook Specs */}
              <div style={{ fontSize: 15.5, color: 'var(--pen-ink)', marginTop: 10, lineHeight: 1.6 }}>
                • <b>أساس التكوين:</b> معادلات رياضية (إحداثيات نقاط، خطوط، زوايا، ومنحنيات).<br />
                • <b>أثر التكبير:</b> <b>لا تفقد جودتها إطلاقاً</b> وخالية تماماً من أي تعرجات.<br />
                • <b>نوع البرامج:</b> برامج الرسم (Draw) مثل <b>Illustrator</b>.<br />
                • <b>الاستخدام الأمثل:</b> الشعارات (Logos)، الخطوط (Fonts)، والأيقونات والرموز.<br />
                • <b>أشهر الصيغ:</b> <span style={{ fontFamily: 'monospace', color: '#16a34a', fontWeight: 'bold' }}>SVG, AI, EPS, PDF</span>
              </div>
            </div>

            {/* Bottom Summary Pill */}
            <div style={{ background: 'rgba(34, 197, 94, 0.15)', border: '1px solid #22c55e', borderRadius: 8, padding: '6px 12px', fontSize: 13, color: '#bbf7d0', textAlign: 'center', fontWeight: 'bold' }}>
              🎯 الهوية: «منحنيات رياضية نقية — تحتفظ بكامل جودتها في أي حجم!»
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },
];
