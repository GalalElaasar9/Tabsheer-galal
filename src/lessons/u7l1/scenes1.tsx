// Board scenes · intro and part 1 (Computer Architecture, Hardware, 5 Core Components, CPU: CU & ALU)
import type { FrameDef } from '../../board/types';
import {
  Box, Doodle, Heading, Line, Note, Num, Place, Scene, Txt, Underline,
} from '../../sketch/Sketch';
import {
  ArchitecturalBlockDiagram,
  CassetteTapeSvg,
  ChocolateUsbSvg,
  CuVisualCard,
  AluVisualCard,
  KeyboardMouseSvg,
  MonitorSvg,
  MotherboardSvg,
  PcTowerSvg,
  PunchedCardSvg,
  SmartRingSvg,
} from './visuals';

const STOPS = [
  'مفهوم العتاد',
  'الأجهزة الطرفية',
  'المكونات الخمسة',
  'المعالج CPU',
  'الذاكرة والتخزين',
  'الإدخال والإخراج',
  'تدفق البيانات',
  'المنافذ والواجهات 🏁',
];

const STOP_PTS: [number, number][] = [
  [1060, 335], [800, 365], [540, 335], [280, 365],
  [280, 555], [540, 585], [800, 555], [1060, 585],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف',
    scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم يا شباب الصف الأول الثانوي في الدرس الأول من الوحدة السابعة!</b></p>
        <p>موضوعنا اليوم هو حجر الأساس في علم الحاسوب: <b>بنية الكمبيوتر (Computer Architecture)</b>.</p>
        <p>سنتعرف على مفهوم العتاد (Hardware) والأجهزة الطرفية بمختلف أنواعها بما فيها وسائط التخزين الطرفية العادية والطريفة، ونكتشف المكونات الخمسة الرئيسية التي يتكون منها أي حاسوب، وكيف يدير المعالج (CPU) الأوامر والعمليات الحسابية، وتدفق البيانات والتعليمات، ومنافذ التوصيل العالمية (USB, HDMI, Ethernet)!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={120} size={32} c="purple">
          الصف الأول الثانوي · الوحدة السابعة · الكمبيوترات · الدرس الأول
        </Txt>
        <Txt x={640} y={245} size={110}>
          بنية الكمبيوتر
        </Txt>
        <Underline x={390} y={325} w={500} c="blue" />
        <Txt x={640} y={375} size={46} c="blue">
          Computer Architecture & The 5 Components
        </Txt>

        {[
          ['🧠', 'المعالج'],
          ['⚡', 'الذاكرة'],
          ['💾', 'التخزين'],
          ['⌨️', 'الإدخال'],
          ['🖥️', 'الإخراج'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1040 - i * 200}
            y={535}
            icon={icon}
            size={90}
            label={label}
            lsize={26}
            lc="blue"
            at={1}
            delay={i * 0.15}
          />
        ))}
      </Scene>
    ),
  },

  {
    id: 'roadmap',
    title: 'خريطة الدرس',
    scene: true,
    notes: (
      <>
        <p><b>خريطة الطريق لدرس بنية الكمبيوتر:</b></p>
        <p>سنتنقل عبر ثماني محطات رئيسية تغطي بدقة المفاهيم المعمارية وأسئلة التدريبات والاختبارات التفاعلية بنمط السبورة المعتمد في سنة ثانية، بدون مربعات عشوائية أو خطوط متقاطعة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة محطات الدرس الأول · بنية الكمبيوتر 🗺️</Heading>

        <Box x={150} y={140} w={980} h={100} c="pink" fill="pink" size={32} tc="ink">
          ❓ كيف يتعاون عقل الحاسوب والذاكرة مع وحدات الإدخال والإخراج لإنجاز مليارات العمليات؟
        </Box>

        {/* Grade 2 style: Single smooth connecting dashed route with NO bounding boxes around stops */}
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [140, 455], ...STOP_PTS.slice(4)]} />

        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={0.2 + i * 0.12} x={x} y={y} n={i + 1} c={i < 4 ? 'blue' : 'green'} />
            <Txt at={1} delay={0.2 + i * 0.12} x={x} y={y + 48} size={25}>
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
    id: 'hardware-concept',
    title: '١ · مفهوم الأجهزة والعتاد (Hardware)',
    scene: true,
    notes: (
      <>
        <p><b>المفهوم العلمي للأجهزة (Hardware):</b></p>
        <p>هي جميع الأجزاء المادية الملموسة في نظام الحاسوب، مثل: وحدة الكمبيوتر الرئيسية، المكونات الداخلية، والأجهزة الطرفية.</p>
        <p><b>خلينا نفهم التعريف:</b></p>
        <p>كلمة Hardware تعني كل ما يمكننا رؤيته ولمسه باليد في نظام الكمبيوتر. لما تبص على الكمبيوتر تلاقي أجزاء خارجية زي الشاشة والفأرة والكيبورد، وأجزاء داخلية زي المعالج والذاكرة واللوحة الأم والقرص الصلب.</p>
        <p><b>أمثلة مصورة على الأجهزة:</b></p>
        <ol>
          <li><b>وحدة الكمبيوتر الرئيسية (Case):</b> الهيكل الحامي للجهاز ومزود الطاقة.</li>
          <li><b>المكونات الداخلية (Motherboard & CPU):</b> اللوحة الأم والمعالج والذاكرة.</li>
          <li><b>أجهزة الإدخال:</b> لوحة المفاتيح والفأرة عبر منفذ USB.</li>
          <li><b>أجهزة الإخراج:</b> شاشة العرض (Monitor) عبر كابل HDMI.</li>
        </ol>
        <p><b>مثال من الحياة (Hardware vs Software):</b> صندوق الكمبيوتر والشاشة والكيبورد Hardware لأنك تلمسها باليد، بينما نظام Windows أو برنامج Word برمجيات (Software) لأنها كود غير ملموس!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المفاهيم الأساسية · ما هي الأجهزة والعتاد (Hardware)؟ 🖥️</Heading>

        {/* Definition Banner */}
        <Box x={100} y={115} w={1080} h={70} c="blue" fill="blue" size={21} tc="ink">
          📖 <b>المفهوم العلمي للأجهزة (Hardware):</b> هي جميع الأجزاء المادية الملموسة في نظام الحاسوب (التي نراها ونلمسها باليد).
        </Box>

        {/* 4 Rich Visual Graphic Cards across the screen */}
        {/* 1. وحدة الكمبيوتر الرئيسية (Case / Tower) */}
        <Box x={960} y={195} w={260} h={345} c="blue" at={1} />
        <Place x={975} y={205} w={230} at={1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <PcTowerSvg size={100} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الوحدة الرئيسية (Case)
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              الصندوق الحامي ومزود الطاقة ومنافذ التوصيل الخارجية.
            </div>
            <div style={{ marginTop: 8, padding: '3px 10px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              وحدة التشغيل الأساسية 🖥️
            </div>
          </div>
        </Place>

        {/* 2. المكونات الداخلية (Motherboard & CPU) */}
        <Box x={670} y={195} w={260} h={345} c="purple" at={2} />
        <Place x={685} y={205} w={230} at={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <MotherboardSvg size={100} />
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              المكونات الداخلية
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              اللوحة الأم (Motherboard)، المعالج (CPU)، والذاكرة (RAM).
            </div>
            <div style={{ marginTop: 8, padding: '3px 10px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              قلب وعقل الحاسوب ⚙️
            </div>
          </div>
        </Place>

        {/* 3. أجهزة الإدخال (Keyboard & Mouse) */}
        <Box x={380} y={195} w={260} h={345} c="green" at={3} />
        <Place x={395} y={205} w={230} at={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <KeyboardMouseSvg size={100} />
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              لوحة المفاتيح والفأرة
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              أجهزة ملموسة لإدخال الأوامر والنصوص وتوجيه المؤشر.
            </div>
            <div style={{ marginTop: 8, padding: '3px 10px', background: 'var(--tint-green)', borderRadius: 6, color: 'var(--pen-green)', fontWeight: 'bold', fontSize: 12 }}>
              إدخال وتفاعل ملموس ⌨️
            </div>
          </div>
        </Place>

        {/* 4. أجهزة الإخراج (Monitor) */}
        <Box x={90} y={195} w={260} h={345} c="orange" at={4} />
        <Place x={105} y={205} w={230} at={4}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <MonitorSvg size={100} />
            <div style={{ color: 'var(--pen-orange)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الشاشة (Monitor)
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              جهاز ملموس لعرض البيانات والواجهات والصور والفيديوهات.
            </div>
            <div style={{ marginTop: 8, padding: '3px 10px', background: 'var(--tint-orange)', borderRadius: 6, color: 'var(--pen-orange)', fontWeight: 'bold', fontSize: 12 }}>
              عرض النتائج المرئية 📺
            </div>
          </div>
        </Place>

        {/* Bottom Note: Real life example */}
        <Note x={90} y={555} w={1130} h={90} color="yellow" size={21} at={5}>
          💡 <b>مثال من الحياة (Hardware vs Software):</b> الصندوق والشاشة والكيبورد عتاد مادي (Hardware) لأنك تلمسها باليد! أما البرامج مثل <b>Windows</b> أو <b>Word</b> فليست عتاداً بل برمجيات (Software) لأنها كود غير ملموس!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'peripherals-and-storage',
    title: '٢ · الأجهزة الطرفية (Peripheral Devices) وأجهزة التخزين الطرفية',
    scene: true,
    notes: (
      <>
        <p><b>تعريف الأجهزة الطرفية (Peripheral Devices):</b></p>
        <p>هي أجهزة يتم توصيلها بجهاز كمبيوتر لاستخدامها في إدخال أو إخراج أو تخزين البيانات.</p>
        <p><b>تفكيك التعريف:</b></p>
        <ul>
          <li><b>طرفيات الإدخال:</b> لوحة المفاتيح، الفأرة، والماسح الضوئي.</li>
          <li><b>طرفيات الإخراج:</b> الشاشة، الطابعة، ومكبرات الصوت.</li>
          <li><b>طرفيات التخزين:</b> وسائط حفظ ونقل البيانات والنسخ الاحتياطي كالقرص الخارجي وفلاشة USB.</li>
        </ul>
        <p><b>أمثلة بصرية طريفة وغير تقليدية على وسائط التخزين:</b></p>
        <ol>
          <li><b>فلاشات USB فكاهية (Novelty USB):</b> فلاش ميموري متنكر في شكل قطعة شوكولاتة كيت كات بمخرج USB ذهبي!</li>
          <li><b>شريط الكاسيت الصوتي (Cassette Tapes):</b> في الثمانينات مع أجهزة صخر و Commodore كان تخزين الألعاب بالصوت والصفير على كاسيت عادي!</li>
          <li><b>البطاقات المثقوبة (Punched Cards):</b> كروت كرتونية مثقوبة بالخرامة تمثل أقدم وسيلة تخزين تاريخية!</li>
          <li><b>إكسسوارات التجسس الذكية:</b> كروت ذاكرة MicroSD متناهية الصغر داخل خاتم ذكي في إصبعك!</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الأجهزة الطرفية (Peripheral Devices) · وأجهزة التخزين الطرفية 🔌</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={70} c="purple" fill="purple" size={21} tc="ink">
          📖 <b>تعريف الأجهزة الطرفية:</b> أجهزة يتم توصيلها بجهاز الكمبيوتر لاستخدامها في <b>إدخال</b> أو <b>إخراج</b> أو <b>تخزين</b> البيانات.
        </Box>

        {/* Three Visual Columns: Input, Output, and Standard Storage */}
        {/* Input (Right) */}
        <Box x={835} y={195} w={345} h={235} c="blue" at={1} />
        <Place x={850} y={205} w={315} at={1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 32 }}>⌨️ 🖱️ 📠</div>
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              طرفيات الإدخال (Input)
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              إرسال الأوامر والبيانات للحاسوب عبر منافذ USB مثل لوحة المفاتيح والماوس والماسح.
            </div>
            <div style={{ marginTop: 6, padding: '2px 10px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              إرسال البيانات للحاسوب 📥
            </div>
          </div>
        </Place>

        {/* Output (Center) */}
        <Box x={465} y={195} w={345} h={235} c="green" at={2} />
        <Place x={480} y={205} w={315} at={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 32 }}>🖥️ 🖨️ 🔊</div>
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              طرفيات الإخراج (Output)
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              استقبال وعرض النتائج للمستخدم مثل الشاشة (HDMI)، الطابعة (USB)، والسماعات.
            </div>
            <div style={{ marginTop: 6, padding: '2px 10px', background: 'var(--tint-green)', borderRadius: 6, color: 'var(--pen-green)', fontWeight: 'bold', fontSize: 12 }}>
              عرض النتائج للمستخدم 📤
            </div>
          </div>
        </Place>

        {/* Standard Storage (Left) */}
        <Box x={95} y={195} w={345} h={235} c="purple" at={3} />
        <Place x={110} y={205} w={315} at={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 32 }}>💾 💽 📲</div>
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              طرفيات التخزين (Storage)
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              حفظ ونقل البيانات وعمل نسخ احتياطي (فلاشة USB، قرص خارجي HDD/SSD، كروت SD).
            </div>
            <div style={{ marginTop: 6, padding: '2px 10px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              حفظ ونقل البيانات بالخارج 💾
            </div>
          </div>
        </Place>

        {/* Requested Feature: Visual Quirky & Retro Storage Gallery */}
        <Box x={95} y={445} w={1085} h={210} c="orange" fill="orange" at={4} />
        <Place x={110} y={452} w={1055} at={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>🎭</span>
              <span>أجهزة طريفة وتاريخية غير تقليدية ممكن نستخدمها في تخزين البيانات (Visual Quirky Storage):</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '12px',
              textAlign: 'center',
            }}>
              {/* 1. Chocolate USB */}
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: '10px', border: '1.5px solid var(--pen-orange)44', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ChocolateUsbSvg size={65} />
                <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '13px', marginTop: 2 }}>فلاشة شوكولاتة</div>
                <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: 2 }}>فلاش ميموري متنكر بقطعة شوكولاتة كيت كات!</div>
              </div>

              {/* 2. Cassette Tape */}
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: '10px', border: '1.5px solid var(--pen-orange)44', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <CassetteTapeSvg size={65} />
                <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '13px', marginTop: 2 }}>كاسيت كمبيوتر صخر</div>
                <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: 2 }}>تخزين ألعاب الثمانينات كأصوات صفير على شريط كاسيت!</div>
              </div>

              {/* 3. Punched Card */}
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: '10px', border: '1.5px solid var(--pen-orange)44', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PunchedCardSvg size={65} />
                <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '13px', marginTop: 2 }}>البطاقات المثقوبة</div>
                <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: 2 }}>أقدم وسيلة؛ كروت كرتون تُثقب بالخرامة (1 ثقب، 0 بدون).</div>
              </div>

              {/* 4. Smart Ring */}
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: '10px', border: '1.5px solid var(--pen-orange)44', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <SmartRingSvg size={65} />
                <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: '13px', marginTop: 2 }}>خاتم التجسس الذكي</div>
                <div style={{ fontSize: '11px', color: 'var(--pen-ink)', marginTop: 2 }}>كارت MicroSD بحجم العدسة مخفي داخل خاتم ذكي!</div>
              </div>
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },

  {
    id: 'five-core-components',
    title: '٣ · المكونات الرئيسية الخمسة للكمبيوتر',
    scene: true,
    notes: (
      <>
        <p><b>المكونات الخمسة الرئيسية للكمبيوتر:</b></p>
        <p>دي من أهم نقاط الدرس، ولازم نفهم وظيفة وموقع كل مكون كويس:</p>
        <ol>
          <li><b>وحدة التحكم (Control Unit – CU)</b></li>
          <li><b>وحدة الحساب والمنطق (Arithmetic Logic Unit – ALU)</b></li>
          <li><b>وحدة التخزين (Storage Unit):</b> وتشمل الذاكرة الرئيسية RAM وذاكرة التخزين الثانوي.</li>
          <li><b>وحدة الإدخال (Input Unit)</b></li>
          <li><b>وحدة الإخراج (Output Unit)</b></li>
        </ol>
        <p><b>المخطط المعماري الكامل (Block Diagram of Computer Components):</b></p>
        <p>مخطط بصري متكامل يوضح مسار دخول البيانات من وحدة الإدخال إلى المعالج CPU، والتبادل المزدوج مع الذاكرة الرئيسية والتخزين الثانوي، وخروج النتائج إلى وحدة الإخراج.</p>
        <p><b>القاعدة الذهبية:</b> وحدة التحكم (CU) + وحدة الحساب والمنطق (ALU) = المعالج (Processor / CPU).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المكونات الخمسة الرئيسية للكمبيوتر · المخطط المعماري 🏛️</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="blue" fill="blue" size={20} tc="ink">
          🏛️ <b>المعمارية الأساسية:</b> يتكون الحاسوب من ٥ مكونات رئيسية: (وحدة التحكم CU · وحدة ALU · وحدة التخزين · وحدة الإدخال · وحدة الإخراج).
        </Box>

        {/* The Full Graphical Architectural Block Diagram */}
        <Box x={95} y={190} w={1085} h={385} c="purple" at={1} />
        <Place x={105} y={195} w={1065} h={375} at={1}>
          <ArchitecturalBlockDiagram />
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={585} w={1085} h={80} color="yellow" size={19} at={2}>
          ⚡ <b>القاعدة المعمارية الذهبية:</b> تُعرف وحدة التحكم (CU) ووحدة الحساب والمنطق (ALU) معاً باسم "المعالج" (CPU). وتتبادل الذاكرة الرئيسية البيانات مباشرة مع المعالج والتخزين.
        </Note>
      </Scene>
    ),
  },

  {
    id: 'cpu-cu-alu',
    title: '٤ · المعالج المركزي: وحدة التحكم و ALU',
    scene: true,
    notes: (
      <>
        <p><b>وحدة المعالجة المركزية (CPU - Central Processing Unit):</b></p>
        <p>بدل ما نعتبر وحدة التحكم ووحدة الحساب والمنطق مكونين منفصلين تماماً، لازم نفهم إنهم بيشكلوا معاً المعالج CPU:</p>
        <ol>
          <li><b>وحدة التحكم (CU):</b> مسؤولة عن تنفيذ التعليمات وإصدار الأوامر، وتنظيم وتنسيق عمل أجزاء الكمبيوتر كإدارة المؤسسة. <i>(مثال الآلة الحاسبة 3 + 5: تستقبل الأرقام وتوجه ALU للجمع وتوجه الشاشة للعرض، لكنها لا تحسب الناتج بنفسها!)</i></li>
          <li><b>وحدة الحساب والمنطق (ALU):</b> مسؤولة عن إجراء العمليات الحسابية (+ - × ÷) والعمليات المنطقية (المقارنات: أكبر، أصغر، يساوي). <i>(مثال درجات الطالب: 20 + 25 + 30 = 75)</i></li>
        </ol>
        <p><b>ملحوظة مهمة جداً:</b> المعالج (CPU) = وحدة التحكم (CU) + وحدة الحساب والمنطق (ALU).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المعالج CPU · وحدة التحكم (CU) ووحدة الحساب والمنطق (ALU) 🧠</Heading>

        {/* CU Card (Right) */}
        <Box x={660} y={120} w={540} h={430} c="orange" at={1} />
        <Doodle x={930} y={155} icon="🧭" size={52} c="orange" fill="orange" at={1} />
        <Txt x={930} y={195} size={23} c="orange" at={1}>وحدة التحكم (Control Unit - CU)</Txt>
        <Place x={685} y={215} w={490} at={1}>
          <CuVisualCard />
        </Place>

        {/* ALU Card (Left) */}
        <Box x={80} y={120} w={540} h={430} c="red" at={2} />
        <Doodle x={350} y={155} icon="⚡" size={52} c="red" fill="red" at={2} />
        <Txt x={350} y={195} size={23} c="red" at={2}>وحدة الحساب والمنطق (ALU)</Txt>
        <Place x={105} y={215} w={490} at={2}>
          <AluVisualCard />
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={565} w={1085} h={85} color="yellow" size={20} at={3}>
          ⚡ <b>العلاقة المعمارية الجوهرية:</b> تُعرف وحدة التحكم (CU) ووحدة الحساب والمنطق (ALU) معاً باسم <b>المعالج (Processor) أو وحدة المعالجة المركزية (CPU)</b>. فالأولى تفكر وتأمر، والثانية تحسب وتنفذ!
        </Note>
      </Scene>
    ),
  },
];
