// Board scenes · part 3 (Color Representation RGB/CMY, 24-bit Full Color, Size Laws, & Summary).
import type { FrameDef } from '../../board/types';
import {
  Box, Heading, Scene,
} from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'color-representation',
    title: 'تمثيل الألوان: الجمعي (الضوء) مقابل الطرحي (الصبغة)',
    scene: true,
    notes: (
      <>
        <p><b>تمثيل الألوان في كتاب الوزارة (ص 89):</b></p>
        <p><b>١) الألوان الأساسية الثلاثة للضوء (Three primary colors of light):</b></p>
        <ul>
          <li>الأحمر (Red)، الأخضر (Green)، الأزرق (Blue) = <b>RGB</b>.</li>
          <li><b>مزج الألوان الجمعي (Additive color mixing):</b> عند مزج ألوان الضوء معاً تزداد السطوع وتقترب من <b>الأبيض</b>.</li>
          <li>مستخدمة في أجهزة التلفزيون وشاشات الكمبيوتر والهواتف الذكية.</li>
        </ul>
        <p><b>٢) الألوان الأساسية الثلاثة للصبغة (Three primary colors of pigment):</b></p>
        <ul>
          <li>السماوي (Cyan)، الأرجواني (Magenta)، الأصفر (Yellow) = <b>CMY</b>.</li>
          <li><b>مزج الألوان الطرحي (Subtractive color mixing):</b> مزج هذه الألوان سوف يغمقها ويعتمها وتقترب من <b>الأسود</b>.</li>
          <li>مستخدمة في الطابعات الملونة والأحبار على الورق.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفارق العلمي الدقيق بين شاشات العرض وأحبار الطابعات">تمثيل الألوان: ضوء الشاشات مقابل صبغة الطابعات 🎨</Heading>

        {/* Light Box (RGB) */}
        <Box x={660} y={150} w={560} h={380} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '12px 20px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              💡 ألوان الضوء الأساسية (RGB):
            </span>
            <br />
            <div style={{ fontSize: 21, color: 'var(--pen-ink)', marginTop: 8, lineHeight: 1.5 }}>
              • <b>الألوان:</b> الأحمر (Red)، الأخضر (Green)، الأزرق (Blue).<br />
              • <b>نوع المزج:</b> مزج جمعي (Additive color mixing).<br />
              • <b>القاعدة:</b> عند مزج ألوان الضوء <b>تزداد السطوع وتقترب من الأبيض</b>.<br />
              • <b>الاستخدام:</b> شاشات الكمبيوتر، التلفزيون، والهواتف.
            </div>
          </div>
        </Box>

        {/* Pigment Box (CMY) */}
        <Box x={60} y={150} w={560} h={380} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 20px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🖨️ ألوان الصبغة الأساسية (CMY):
            </span>
            <br />
            <div style={{ fontSize: 21, color: 'var(--pen-ink)', marginTop: 8, lineHeight: 1.5 }}>
              • <b>الألوان:</b> السماوي (Cyan)، الأرجواني (Magenta)، الأصفر (Yellow).<br />
              • <b>نوع المزج:</b> مزج طرحي (Subtractive color mixing).<br />
              • <b>القاعدة:</b> عند مزج هذه الصبغات <b>تزداد عتمة وتقترب من الأسود</b>.<br />
              • <b>الاستخدام:</b> الطابعات الملونة والأحبار الورقية.
            </div>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'full-color-24bit',
    title: 'الألوان الكاملة (24-Bit Full Color)',
    scene: true,
    notes: (
      <>
        <p><b>الألوان الكاملة (24-bit Full Color / True Color) ص 89 بكتاب الوزارة:</b></p>
        <p>تتكون الألوان الكاملة من تخصيص <b>24 بت</b> لكل بكسل، مقسمة بالتساوي على الألوان الثلاثة للضوء:</p>
        <ul>
          <li><b>8 بت للأحمر (Red)</b> = 2^8 = 256 مستوى (0 - 255)</li>
          <li><b>8 بت للأخضر (Green)</b> = 2^8 = 256 مستوى (0 - 255)</li>
          <li><b>8 بت للأزرق (Blue)</b> = 2^8 = 256 مستوى (0 - 255)</li>
        </ul>
        <p><b>إجمالي عدد الألوان المتاحة:</b></p>
        <p>256 × 256 × 256 = 2^24 = 16,777,216 لون مختلف</p>
        <p>أي حوالي <b>16.7 مليون لون مختلف</b>! وهذا العدد الهائل يتجاوز قدرة العين البشرية على التمييز؛ لذا تسمى بالألوان الحقيقية (True Color).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="سر الـ ١٦.٧ مليون لون في شاشات هواتفنا وحواسيبنا">الألوان الكاملة (24-Bit Full Color) 🌈</Heading>

        {/* 3 Channels Breakdown */}
        <Box x={850} y={150} w={380} h={160} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'center', padding: '10px', lineHeight: 1.4 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              قناة الأحمر (Red)
            </span>
            <br />
            <span style={{ fontSize: 22, color: 'var(--pen-ink)' }}>
              <b>8 بت (Bit)</b><br />
              256 مستوى (0..255)
            </span>
          </div>
        </Box>

        <Box x={450} y={150} w={380} h={160} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'center', padding: '10px', lineHeight: 1.4 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              قناة الأخضر (Green)
            </span>
            <br />
            <span style={{ fontSize: 22, color: 'var(--pen-ink)' }}>
              <b>8 بت (Bit)</b><br />
              256 مستوى (0..255)
            </span>
          </div>
        </Box>

        <Box x={50} y={150} w={380} h={160} c="blue" fill="blue" at={3}>
          <div style={{ textAlign: 'center', padding: '10px', lineHeight: 1.4 }}>
            <span style={{ fontSize: 26, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              قناة الأزرق (Blue)
            </span>
            <br />
            <span style={{ fontSize: 22, color: 'var(--pen-ink)' }}>
              <b>8 بت (Bit)</b><br />
              256 مستوى (0..255)
            </span>
          </div>
        </Box>

        {/* Calculation Banner */}
        <Box x={120} y={345} w={1040} h={190} c="purple" fill="purple" at={4}>
          <div style={{ textAlign: 'center', padding: '12px 25px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 32, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              24 Bit = 3 قنوات × 8 Bit = 3 بايت لكل بكسل
            </span>
            <br />
            <span style={{ fontSize: 26, color: 'var(--pen-ink)' }}>
              إجمالي الاحتمالات = 256 × 256 × 256 = <b>2²⁴ = 16,777,216 لوناً</b>
            </span>
            <br />
            <span style={{ fontSize: 21, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              ✨ أكثر من ١٦.٧ مليون لون طبيعي تغطي كافة تدرجات الرؤية البشرية!
            </span>
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'size-calculation-laws',
    title: 'قانون حساب حجم بيانات الصورة والمسائل',
    scene: true,
    notes: (
      <>
        <p><b>قانون حساب حجم بيانات الصورة المعتمد في كتاب الوزارة (ص 88):</b></p>
        <p><b>حجم بيانات الصورة [Bit] = (عدد pixels الأفقي × عدد pixels الرأسي) × عدد bits لمعلومات اللون</b></p>
        <p><b>خطوات التحويل الرياضية:</b></p>
        <ol>
          <li>الحجم بالبايت [B] = الحجم بالبت ÷ 8</li>
          <li>الحجم بالكيلوبايت [KB] = الحجم بالبايت ÷ 1000 (فرضية كتاب الوزارة ص 89 و 90 و 91)</li>
          <li>الحجم بالميجابايت [MB] = الحجم بالكيلوبايت ÷ 1000</li>
        </ol>
        <p><b>نموذج محلول من كتاب الوزارة ص 89:</b></p>
        <p>صورة ملونة 24-bit بدقة 1280 × 720:</p>
        <p>الحجم بالبت = 1280 × 720 × 24 = 22,118,400 بت</p>
        <p>الحجم بالبايت = 22,118,400 ÷ 8 = 2,764,800 بايت</p>
        <p>الحجم بالميجابايت = 2,764,800 ÷ 1,000,000 ≈ <b>2.76 MB</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="القانون الرياضي والخطوات المعيارية المعتمدة للامتحانات">قانون حساب حجم بيانات الصورة 📐</Heading>

        {/* Formula Box */}
        <Box x={100} y={150} w={1080} h={130} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.5 }}>
            <span style={{ fontSize: 28, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              قانون كتاب الوزارة لحساب حجم الصورة [Bit]:
            </span>
            <br />
            <span style={{ fontSize: 26, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              حجم البيانات [Bit] = (عدد pixels الأفقي × عدد pixels الرأسي) × عدد بتات اللون
            </span>
          </div>
        </Box>

        {/* Solved Examples Grid */}
        <Box x={660} y={305} w={560} h={240} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '10px 18px', fontSize: 20, lineHeight: 1.45 }}>
            <b style={{ color: 'var(--pen-blue)' }}>مسألة كتاب الوزارة ص 89 (محلولة):</b><br />
            صورة ملونة كاملة (24 بت) بدقة <b>1280 × 720</b>:<br />
            • البتات = 1280 × 720 × 24 = <b>22,118,400 بت</b>.<br />
            • البايت = 22,118,400 ÷ 8 = <b>2,764,800 بايت</b>.<br />
            • بالـ MB (÷ 1,000,000) = 2.7648 ≈ <b style={{ color: 'var(--pen-red)' }}>2.76 MB</b>.
          </div>
        </Box>

        <Box x={60} y={305} w={560} h={240} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '10px 18px', fontSize: 20, lineHeight: 1.45 }}>
            <b style={{ color: 'var(--pen-orange)' }}>مسألة كتاب الوزارة ص 90 رقم 1:</b><br />
            صورة بدقة <b>800 × 600</b> بكسل وعمق <b>8 بت</b>:<br />
            • البتات = 800 × 600 × 8 = <b>3,840,000 بت</b>.<br />
            • البايت = 3,840,000 ÷ 8 = <b>480,000 بايت</b>.<br />
            • بالكيلوبايت (÷ 1000) = <b style={{ color: 'var(--pen-green)' }}>480 KB</b> بالضبط!
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'summary-board',
    title: 'اللوحة الذهبية لملخص درس رقمنة الصور',
    scene: true,
    notes: (
      <>
        <p><b>اللوحة الذهبية لملخص درس رقمنة الصور بالكامل:</b></p>
        <p>راجِع مع طلابك هذه الخريطة المفاهيمية الشاملة التي تجمع كل أفكار ومصطلحات الدرس في إطار واحد:</p>
        <ul>
          <li><b>البكسل:</b> أصغر وحدة لبناء الصورة الرقمية.</li>
          <li><b>مراحل الرقمنة الثلاث:</b> المعاينة (Sampling) ← التكميم (Quantization) ← الترميز (Encoding).</li>
          <li><b>النقطي (Raster):</b> مربعات بكسل، تظهر تعرجات (Jaggies) عند التكبير، برنامجه Photoshop.</li>
          <li><b>المتجهات (Vector):</b> معادلات رياضية، لا تتأثر بالتكبير، برنامجه Illustrator للشعارات.</li>
          <li><b>ألوان الضوء (RGB):</b> مزج جمعي للشاشات، يقترب من الأبيض.</li>
          <li><b>ألوان الصبغة (CMY):</b> مزج طرحي للطابعات، يقترب من الأسود.</li>
          <li><b>الألوان الكاملة (24-bit):</b> 16.7 مليون لون (3 قنوات × 8 بت).</li>
          <li><b>قانون الحجم:</b> (العرض × الارتفاع) × عمق البت ÷ 8.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الخريطة المفاهيمية الشاملة لكافة مصطلحات وقوانين الدرس">اللوحة الذهبية لملخص رقمنة الصور 🏆</Heading>

        {/* 4 Quadrants Summary */}
        <Box x={660} y={150} w={560} h={185} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '8px 16px', fontSize: 19, lineHeight: 1.4 }}>
            <b style={{ color: 'var(--pen-blue)' }}>١. البكسل ومراحل الرقمنة الثلاث:</b><br />
            • <b>البكسل:</b> أصغر وحدة تشكل الصورة (Pixel).<br />
            • <b>أخذ العينات:</b> تقسيم الصورة لشبكة (دقتها بـ dpi).<br />
            • <b>التكميم:</b> تقريب السطوع لمستويات تدرج ($2^n$).<br />
            • <b>الترميز:</b> تحويل المستويات لأصفار وآحاد (0 و 1).
          </div>
        </Box>

        <Box x={60} y={150} w={560} h={185} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '8px 16px', fontSize: 19, lineHeight: 1.4 }}>
            <b style={{ color: 'var(--pen-green)' }}>٢. النقطي (Raster) مقابل المتجه (Vector):</b><br />
            • <b>النقطي:</b> بكسلات + تعرجات (Jaggies) + فوتوشوب.<br />
            • <b>المتجه:</b> معادلات رياضية + جودة ثابتة + إليستريتور.<br />
            • <b>التطبيقات:</b> النقطي للصور والواقع، المتجه للشعارات والخطوط.
          </div>
        </Box>

        <Box x={660} y={355} w={560} h={195} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '8px 16px', fontSize: 19, lineHeight: 1.4 }}>
            <b style={{ color: 'var(--pen-purple)' }}>٣. تمثيل الألوان وأنظمتها:</b><br />
            • <b>RGB (الضوء):</b> جمعي للشاشات ويقترب من الأبيض.<br />
            • <b>CMY (الصبغة):</b> طرحي للطابعات ويقترب من الأسود.<br />
            • <b>الألوان الكاملة 24-bit:</b> 3 قنوات × 8 بت = 16.7 مليون لون.
          </div>
        </Box>

        <Box x={60} y={355} w={560} h={195} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'right', padding: '8px 16px', fontSize: 19, lineHeight: 1.4 }}>
            <b style={{ color: 'var(--pen-orange)' }}>٤. قانون الحجم المعتمد بالامتحانات:</b><br />
            • <b>الحجم [بت] = (عرض × ارتفاع) × عمق البت</b>.<br />
            • للتحويل إلى بايت: نقسم على <b>8</b>.<br />
            • للتحويل إلى KB و MB: نقسم على <b>1000</b>.<br />
            • كلما زادت الدقة والتدرج زادت الجودة وزاد حجم الملف.
          </div>
        </Box>
      </Scene>
    ),
  },
];
