// Board scenes · part 2 (Reading ASCII table, Examples Hello/MILK/Love, and Unicode).
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Doodle, Heading, Scene,
} from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'ascii-anatomy',
    title: 'تشريح قراءة جدول ASCII',
    scene: true,
    notes: (
      <>
        <p><b>كيف يُقرأ جدول ASCII في كتاب الوزارة (ص 76)؟</b></p>
        <p>الحرف في ASCII يُمثل في <b>1 Byte = 8 Bits</b>. هذه الـ 8 بت مقسمة هندسياً إلى نصفين متساويين:</p>
        <ul>
          <li><b>١. الـ 4 بت الأكثر أهمية (Most Significant 4 Bits):</b> تمثل خانات الأعمدة (أعلى الجدول)، وقيمها من 0 إلى 7 (بالثنائي: 0000 إلى 0111). وتكون الرقم الأيسر في النظام الست عشري.</li>
          <li><b>٢. الـ 4 بت الأقل أهمية (Least Significant 4 Bits):</b> تمثل خانات الصفوف (يسار الجدول)، وقيمها من 0 إلى F (بالثنائي: 0000 إلى 1111). وتكون الرقم الأيمن في النظام الست عشري.</li>
        </ul>
        <p><b>القاعدة الذهبية:</b> رمز الحرف = تقاطع (العمود الأكثر أهمية) مع (الصف الأقل أهمية).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف يتقاطع العمود الأكثر أهمية مع الصف الأقل أهمية؟">٤ · كيف نقرأ جدول ASCII؟ 📊</Heading>

        {/* 8-bit Byte Breakdown Box */}
        <Box x={140} y={150} w={1000} h={130} c="ink" at={1}>
          <div style={{ textAlign: 'center', padding: '10px' }}>
            <span style={{ fontSize: 26, fontWeight: 'bold' }}>
              بايت الحرف الواحد (1 Byte = 8 Bits) ينقسم إلى نصفين:
            </span>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: 12 }}>
              <div style={{ background: 'var(--tint-blue)', border: '2px solid var(--pen-blue)', padding: '6px 20px', borderRadius: 8 }}>
                <b style={{ color: 'var(--pen-blue)', fontSize: 24 }}>4 بت الأكثر أهمية (MSB)</b><br />
                <span style={{ fontSize: 18 }}>أرقام الأعمدة في الجدول (الرقم الأيسر)</span>
              </div>
              <div style={{ fontSize: 32, lineHeight: 1.8 }}>+</div>
              <div style={{ background: 'var(--tint-orange)', border: '2px solid var(--pen-orange)', padding: '6px 20px', borderRadius: 8 }}>
                <b style={{ color: 'var(--pen-orange)', fontSize: 24 }}>4 بت الأقل أهمية (LSB)</b><br />
                <span style={{ fontSize: 18 }}>أرقام الصفوف في الجدول (الرقم الأيمن)</span>
              </div>
            </div>
          </div>
        </Box>

        {/* Visual Matrix Schema */}
        <Box x={200} y={320} w={420} h={280} c="blue" fill="blue" at={2}>
          <div style={{ padding: '15px 25px', textAlign: 'right', lineHeight: 1.6 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              الأعمدة (الـ 4 بت الأكثر أهمية):
            </span>
            <ul style={{ fontSize: 20, marginTop: 8 }}>
              <li>توجد أعلى الجدول.</li>
              <li>القيم بالست عشري: <b>0, 1, 2, 3, 4, 5, 6, 7</b></li>
              <li>القيم بالثنائي: <b>0000 إلى 0111</b></li>
              <li>الحروف الكبيرة (A-Z) تبدأ في الأعمدة <b>4 و 5</b>.</li>
              <li>الحروف الصغيرة (a-z) تبدأ في الأعمدة <b>6 و 7</b>.</li>
            </ul>
          </div>
        </Box>

        <Box x={660} y={320} w={420} h={280} c="orange" fill="orange" at={3}>
          <div style={{ padding: '15px 25px', textAlign: 'right', lineHeight: 1.6 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              الصفوف (الـ 4 بت الأقل أهمية):
            </span>
            <ul style={{ fontSize: 20, marginTop: 8 }}>
              <li>توجد على يسار الجدول رأسياً.</li>
              <li>القيم بالست عشري: <b>0, 1, ..., 9, A, B, C, D, E, F</b></li>
              <li>القيم بالثنائي: <b>0000 إلى 1111</b></li>
              <li>تحدد موقع الحرف الدقيق داخل مجموعته.</li>
            </ul>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'hello-example-detailed',
    title: 'تفكيك كلمة "Hello" خطوة بخطوة',
    scene: true,
    notes: (
      <>
        <p><b>مثال كتاب الوزارة وكتاب الفائز المعتمد:</b></p>
        <p>المطلوب: تحويل السلسلة النصية <b>"Hello"</b> إلى رمز ثنائي ورمز سداسي عشري باستخدام جدول ASCII.</p>
        <p><b>الخطوات بالتفصيل:</b></p>
        <ul>
          <li><b>الحرف H:</b> العمود 4 (0100) + الصف 8 (1000) = 48(16) = 01001000(2) [وعشري 72].</li>
          <li><b>الحرف e:</b> العمود 6 (0110) + الصف 5 (0101) = 65(16) = 01100101(2) [وعشري 101].</li>
          <li><b>الحرف l:</b> العمود 6 (0110) + الصف C (1100) = 6C(16) = 01101100(2) [وعشري 108].</li>
          <li><b>الحرف l:</b> الثاني بنفس القيمة 6C(16) = 01101100(2).</li>
          <li><b>الحرف o:</b> العمود 6 (0110) + الصف F (1111) = 6F(16) = 01101111(2) [وعشري 111].</li>
        </ul>
        <p>الرمز السداسي عشري الكامل لكلمة Hello هو: <b>48 65 6C 6C 6F</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مثال كتاب الوزارة (ص 76) وكتاب الفائز (ص 105)">٥ · تفكيك وتحويل كلمة "Hello" 🔠</Heading>

        {/* Summary Table Box */}
        <Box x={80} y={150} w={1120} h={360} c="ink" at={1}>
          <div style={{ padding: '15px 25px' }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              جدول التحويل التفصيلي لكل حرف من حروف "Hello":
            </span>

            <table style={{ width: '100%', marginTop: 15, borderCollapse: 'collapse', textAlign: 'center', fontSize: 22 }}>
              <thead>
                <tr style={{ background: 'var(--tint-purple)', borderBottom: '2px solid var(--border)' }}>
                  <th style={{ padding: '10px' }}>الحرف</th>
                  <th style={{ padding: '10px' }}>العمود (MSB 4-bits)</th>
                  <th style={{ padding: '10px' }}>الصف (LSB 4-bits)</th>
                  <th style={{ padding: '10px', color: 'var(--pen-green)' }}>الرمز الثنائي (Binary)</th>
                  <th style={{ padding: '10px', color: 'var(--pen-purple)' }}>الرمز الست عشري (Hex)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['H', '4 (0100)', '8 (1000)', '01001000', '48₁₆ (عشري 72)'],
                  ['e', '6 (0110)', '5 (0101)', '01100101', '65₁₆ (عشري 101)'],
                  ['l', '6 (0110)', 'C (1100)', '01101100', '6C₁₆ (عشري 108)'],
                  ['l', '6 (0110)', 'C (1100)', '01101100', '6C₁₆ (عشري 108)'],
                  ['o', '6 (0110)', 'F (1111)', '01101111', '6F₁₆ (عشري 111)'],
                ].map(([char, col, row, bin, hex], idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '8px', fontSize: 28, fontWeight: 'bold', color: 'var(--pen-blue)' }}>{char}</td>
                    <td style={{ padding: '8px' }}>{col}</td>
                    <td style={{ padding: '8px' }}>{row}</td>
                    <td style={{ padding: '8px', fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--pen-green)' }}>{bin}</td>
                    <td style={{ padding: '8px', fontFamily: 'monospace', fontWeight: 'bold', color: 'var(--pen-purple)' }}>{hex}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>

        {/* Final Hex String Result */}
        <Box x={80} y={535} w={1120} h={110} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'center', padding: '12px', fontSize: 26 }}>
            <span>النتيجة النهائية في ذاكرة الحاسوب: </span>
            <b style={{ color: 'var(--pen-purple)', fontSize: 32, fontFamily: 'monospace' }}>48 65 6C 6C 6F</b>
            <span style={{ margin: '0 15px', color: 'var(--pen-ink)' }}>|</span>
            <span style={{ fontSize: 22, color: 'var(--pen-green)' }}>الحجم: ٥ أحرف = ٥ بايت = ٤٠ بت</span>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'milk-and-love-examples',
    title: 'أمثلة MILK وفك شفرة Love',
    scene: true,
    notes: (
      <>
        <p><b>أمثلة امتحانات وتدريبات كتاب الوزارة والفائز:</b></p>
        <p><b>١. تمثيل كلمة "MILK" في النظام الست عشري:</b></p>
        <ul>
          <li>M: العمود 4 والصف D ➔ الكود <b>4D</b> (ثنائي: 01001101)</li>
          <li>I: العمود 4 والصف 9 ➔ الكود <b>49</b></li>
          <li>L: العمود 4 والصف C ➔ الكود <b>4C</b></li>
          <li>K: العمود 4 والصف B ➔ الكود <b>4B</b></li>
          <li>ربط الرموز معاً ينتج: <b>4D494C4B(16)</b></li>
        </ul>
        <p><b>٢. فك الشفرة السداسية "4C6F7665":</b></p>
        <ul>
          <li>4C: تقاطع عمود 4 مع صف C يعطي الحرف <b>L</b></li>
          <li>6F: تقاطع عمود 6 مع صف F يعطي الحرف <b>o</b></li>
          <li>76: تقاطع عمود 7 مع صف 6 يعطي الحرف <b>v</b></li>
          <li>65: تقاطع عمود 6 مع صف 5 يعطي الحرف <b>e</b></li>
          <li>الكلمة الناتجة هي: <b>Love</b> ❤️</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="حل تمارين وتحديات كتاب الوزارة ص 77 والفائز ص 109">٦ · أمثلة MILK وفك شفرة Love 💌</Heading>

        {/* MILK Example Box */}
        <Box x={640} y={160} w={560} h={460} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              🥛 مثال ١: تمثيل كلمة "MILK" بالست عشري
            </span>
            <ul style={{ fontSize: 22, marginTop: 12, listStyleType: 'disc', paddingRight: 20 }}>
              <li><b>M:</b> عمود 4 وصف D ➔ <b style={{ color: 'var(--pen-purple)' }}>4D</b> (01001101)</li>
              <li><b>I:</b> عمود 4 وصف 9 ➔ <b style={{ color: 'var(--pen-purple)' }}>49</b></li>
              <li><b>L:</b> عمود 4 وصف C ➔ <b style={{ color: 'var(--pen-purple)' }}>4C</b></li>
              <li><b>K:</b> عمود 4 وصف B ➔ <b style={{ color: 'var(--pen-purple)' }}>4B</b></li>
            </ul>
            <div style={{ marginTop: 20, background: 'var(--surface)', padding: '12px', borderRadius: 10, textAlign: 'center' }}>
              <span style={{ fontSize: 20, color: 'var(--pen-ink)' }}>الرمز السداسي عشري الكامل:</span><br />
              <b style={{ fontSize: 32, color: 'var(--pen-purple)', fontFamily: 'monospace' }}>4D494C4B₁₆</b>
            </div>
          </div>
        </Box>

        {/* Love Decoding Box */}
        <Box x={80} y={160} w={520} h={460} c="pink" fill="pink" at={2}>
          <div style={{ textAlign: 'right', padding: '15px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-pink)' }}>
              ❤️ مثال ٢: فك شفرة "4C6F7665"
            </span>
            <p style={{ fontSize: 20, marginTop: 8 }}>نقسم الكود لأزواج (كل زوج = بايت):</p>
            <ul style={{ fontSize: 22, marginTop: 8, listStyleType: 'disc', paddingRight: 20 }}>
              <li><b>4C:</b> عمود 4 وتقاطع صف C ➔ <b style={{ color: 'var(--pen-blue)' }}>L</b></li>
              <li><b>6F:</b> عمود 6 وتقاطع صف F ➔ <b style={{ color: 'var(--pen-blue)' }}>o</b></li>
              <li><b>76:</b> عمود 7 وتقاطع صف 6 ➔ <b style={{ color: 'var(--pen-blue)' }}>v</b></li>
              <li><b>65:</b> عمود 6 وتقاطع صف 5 ➔ <b style={{ color: 'var(--pen-blue)' }}>e</b></li>
            </ul>
            <div style={{ marginTop: 20, background: 'var(--surface)', padding: '12px', borderRadius: 10, textAlign: 'center' }}>
              <span style={{ fontSize: 20, color: 'var(--pen-ink)' }}>الكلمة المقروءة الناتجة:</span><br />
              <b style={{ fontSize: 38, color: 'var(--pen-pink)', fontFamily: 'cursive' }}>"Love"</b>
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'unicode-world-solution',
    title: 'نظام يونيكود (Unicode) لتوحيد لغات العالم',
    scene: true,
    notes: (
      <>
        <p><b>نظام يونيكود (Unicode):</b></p>
        <p>هو المعيار العالمي الموحد لترميز الأحرف الذي تم تصميمه لتوحيد أحرف جميع لغات العالم ورموزها في نظام رقمي واحد متفق عليه.</p>
        <p><b>لماذا ظهر يونيكود؟</b></p>
        <p>لأن كود ASCII لم يكن كافياً لتمثيل لغات العالم المختلفة. فكانت كل لغة أو دولة تخترع نظاماً محلياً، مما أدى لتضارب كبير وتشوّه النصوص عند إرسالها من جهاز لآخر.</p>
        <p><b>القوة والسعة:</b></p>
        <ul>
          <li>باستخدام <b>2 بايت (16 بت)</b> يستطيع تمثيل <b>2¹⁶ = 65,536 نوعاً من الأحرف</b>! (مقارنة بـ 256 فقط في ASCII).</li>
          <li>ويونيكود الحديث يستوعب كل اللغات: العربية، الصينية، الهيروغليفية، الرموز الرياضية، وحتى رموز الإيموجي!</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="معيار موحد يضم كل لغات العالم والرموز">٧ · يونيكود (Unicode) حل أزمة اللغات 🌍</Heading>

        {/* Global Languages Circle / Doodles */}
        <Doodle x={200} y={230} icon="🌍" size={130} c="green" fill="green" label="كل لغات العالم" lc="green" />
        <Box x={80} y={380} w={240} h={180} c="green" at={1}>
          <div style={{ textAlign: 'center', fontSize: 20, lineHeight: 1.6 }}>
            🇸🇦 العربية (أ ب ت)<br />
            🇨🇳 الصينية (汉字)<br />
            🇯🇵 اليابانية (かな)<br />
            😃 الإيموجي (Emoji)
          </div>
        </Box>

        {/* The Arrow */}
        <Arrow from={[340, 310]} to={[450, 310]} c="blue" at={2} label="نظام موحد" lc="blue" />

        {/* Unicode Main Card */}
        <Box x={470} y={160} w={730} h={450} c="purple" fill="purple" at={2}>
          <div style={{ padding: '20px 30px', textAlign: 'right', lineHeight: 1.6 }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🌟 معيار يونيكود (Unicode)
            </span>
            <p style={{ fontSize: 24, marginTop: 10 }}>
              معيار دولي موحد يمنح كل حرف في أي لغة في العالم <b>رقماً فريداً موحداً (Code Point)</b> لا يتكرر أبداً.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: 20 }}>
              <div style={{ background: 'var(--surface)', padding: '12px 18px', borderRadius: 12, border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 20, color: 'var(--pen-blue)', fontWeight: 'bold' }}>سعة 1 بايت (ASCII):</span><br />
                <span style={{ fontSize: 28, fontWeight: 'bold' }}>2⁸ = 256</span><br />
                <span style={{ fontSize: 16, color: 'var(--pen-red)' }}>إنجليزي فقط! ضيق جداً.</span>
              </div>

              <div style={{ background: 'var(--surface)', padding: '12px 18px', borderRadius: 12, border: '1px solid var(--border)' }}>
                <span style={{ fontSize: 20, color: 'var(--pen-purple)', fontWeight: 'bold' }}>سعة 2 بايت (Unicode):</span><br />
                <span style={{ fontSize: 28, fontWeight: 'bold' }}>2¹⁶ = 65,536</span><br />
                <span style={{ fontSize: 16, color: 'var(--pen-green)' }}>يتسع لجميع لغات الأرض!</span>
              </div>
            </div>

            <p style={{ fontSize: 20, marginTop: 18, color: 'var(--pen-ink)' }}>
              💡 بفضل يونيكود، تستطيع الآن كتابة رسالة واحدة تحتوي على كلمات عربية، إنجليزية، يابانية، ورموز إيموجي دون أي تضارب!
            </p>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'utf8-vs-utf16-comparison',
    title: 'المقارنة بين أنظمة UTF-8 و UTF-16',
    scene: true,
    notes: (
      <>
        <p><b>الفرق بين UTF-8 و UTF-16 المقرران في كتاب الوزارة (ص 76) وكتاب الفائز (ص 107):</b></p>
        <p>يونيكود يحدد "رقم الرمز فقط"، بينما طريقة تخزين هذا الرقم في الذاكرة تتم عبر أنظمة ترميز أشهرها:</p>
        <p><b>١. نظام UTF-8:</b></p>
        <ul>
          <li>يستخدم حجماً متغيراً من <b>1 إلى 4 بايتات</b> لكل حرف.</li>
          <li><b>متوافق تماماً مع ASCII:</b> الحروف الإنجليزية تشغل 1 بايت فقط (لتوفير المساحة).</li>
          <li><b>الأكثر انتشاراً في العالم:</b> هو معيار الويب والإنترنت رقم واحد بنسبة 98%+.</li>
        </ul>
        <p><b>٢. نظام UTF-16:</b></p>
        <ul>
          <li>يستخدم غالباً <b>2 بايت أو 4 بايتات</b> لكل حرف.</li>
          <li>شائع داخل أنظمة التشغيل مثل Windows وبيئات البرمجة مثل Java.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف يتم تخزين رموز يونيكود في الذاكرة؟">٨ · UTF-8 مقابل UTF-16 🥊</Heading>

        {/* UTF-8 Column Box */}
        <Box x={640} y={160} w={560} h={470} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'right', padding: '20px 25px', lineHeight: 1.6 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                🌐 نظام UTF-8
              </span>
              <span style={{ background: 'var(--pen-green)', color: 'white', padding: '4px 12px', borderRadius: 999, fontSize: 18 }}>
                ملك الإنترنت 👑
              </span>
            </div>

            <ul style={{ fontSize: 22, marginTop: 15, listStyleType: 'disc', paddingRight: 20 }}>
              <li><b>طول مرن:</b> يستخدم من <b>١ إلى ٤ بايتات</b> لكل حرف.</li>
              <li><b>متوافق مع ASCII بنسبة 100%:</b> أي ملف ASCII قديم هو تلقائياً ملف UTF-8 صحيح.</li>
              <li><b>ذكي في استهلاك المساحة:</b> الحروف الإنجليزية تأخذ بايت واحد، والحروف العربية تأخذ بايتين.</li>
              <li><b>الأكثر انتشاراً:</b> يُستخدم في أكثر من 98% من مواقع وشبكات الويب العالمية.</li>
            </ul>
          </div>
        </Box>

        {/* UTF-16 Column Box */}
        <Box x={80} y={160} w={520} h={470} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '20px 25px', lineHeight: 1.6 }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              💻 نظام UTF-16
            </span>

            <ul style={{ fontSize: 22, marginTop: 15, listStyleType: 'disc', paddingRight: 20 }}>
              <li><b>الحجم:</b> يستخدم غالباً <b>٢ بايت أو ٤ بايتات</b> لكل حرف.</li>
              <li>حتى الحروف الإنجليزية البسيطة تأخذ 2 بايت (ضعف الحجم مقارنة بـ UTF-8).</li>
              <li><b>أماكن استخدامه:</b> في الذاكرة الداخلية لبعض أنظمة التشغيل (مثل Microsoft Windows) ولغات البرمجة (مثل Java و JavaScript).</li>
            </ul>
          </div>
        </Box>
      </Scene>
    ),
  },
];
