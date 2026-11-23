// Board scenes · part 3 (Control Flow vs Data Flow, Interfaces: Concept & Standards USB/HDMI/Ethernet, Ethernet Deep-Dive, Hubs & Routers, & Master Summary)
import type { FrameDef } from '../../board/types';
import {
  Box, Doodle, Heading, Note, Place, Scene, Txt,
} from '../../sketch/Sketch';
import {
  EthernetCableSvg,
  HdmiCableSvg,
  HubDeviceSvg,
  LanNetworkDiagramSvg,
  RearIoPanelSvg,
  RouterDeviceSvg,
  UsbCableSvg,
} from './visuals';

export const part3: FrameDef[] = [
  {
    id: 'control-vs-data-flow',
    title: '٨ · الفرق بين تدفق التحكم وتدفق البيانات',
    scene: true,
    notes: (
      <>
        <p><b>المخطط المعماري الكامل للكمبيوتر:</b></p>
        <p>هناك نوعان مختلفان تماماً من الإشارات والمسارات في الحاسوب:</p>
        <ol>
          <li><b>تدفق التحكم (Control Flow):</b> يُرسم كخط متصل، ويخرج <b>حصرياً من وحدة التحكم (CU)</b> ليصل إلى جميع المكونات ليوجهها.</li>
          <li><b>تدفق البيانات (Data Flow):</b> يُرسم كخط متقطع، ويمر مركزياً عبر <b>الذاكرة الرئيسية (RAM)</b> التي تستقبل من الإدخال، وتتبادل مع CPU والتخزين، وترسل للإخراج.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المخطط المعماري · الفرق بين تدفق التحكم وتدفق البيانات 📐</Heading>

        {/* Control Flow Box (Right) */}
        <Box x={660} y={140} w={540} h={390} c="orange" at={1} />
        <Doodle x={930} y={185} icon="🧭" size={65} c="orange" fill="orange" at={1} />
        <Txt x={930} y={230} size={26} c="orange" at={1}>تدفق التحكم (Control Flow)</Txt>
        <Place x={685} y={260} w={490} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            fontSize: 17,
            lineHeight: 1.5,
            color: 'var(--pen-ink)',
          }}>
            <div style={{ color: 'var(--pen-orange)', fontWeight: 'bold', fontSize: 18 }}>
              خط متصل — ينبعث من وحدة التحكم (CU) فقط
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-orange)', fontSize: 20 }}>•</span>
              <div><b>المصدر الوحيد:</b> يخرج حصرياً من <b>وحدة التحكم (CU)</b> بالمعالج.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-orange)', fontSize: 20 }}>•</span>
              <div><b>الوجهات:</b> يصل إلى كافة الوحدات (ALU، RAM، SSD، الإدخال، الإخراج).</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-orange)', fontSize: 20 }}>•</span>
              <div><b>الدور:</b> إصدار أوامر التشغيل وتنسيق توقيت تنفيذ الأوامر البرمجية.</div>
            </div>
            <div style={{ marginTop: 4, padding: '4px 10px', background: 'var(--tint-orange)', borderRadius: 8, color: 'var(--pen-orange)', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
              ━━━━ خط متصل (CU المصدر الوحيد) ━━━━
            </div>
          </div>
        </Place>

        {/* Data Flow Box (Left) */}
        <Box x={80} y={140} w={540} h={390} c="blue" at={2} />
        <Doodle x={350} y={185} icon="🔄" size={65} c="blue" fill="blue" at={2} />
        <Txt x={350} y={230} size={26} c="blue" at={2}>تدفق البيانات (Data Flow)</Txt>
        <Place x={105} y={260} w={490} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            fontSize: 17,
            lineHeight: 1.5,
            color: 'var(--pen-ink)',
          }}>
            <div style={{ color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 18 }}>
              خط متقطع — يمر دائماً عبر الذاكرة RAM
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 20 }}>•</span>
              <div><b>المسار المحوري:</b> يمر دائماً عبر <b>الذاكرة الرئيسية (RAM)</b> كوسيط.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 20 }}>•</span>
              <div><b>الحركة:</b> يدخل من الإدخال ➔ يتبادل مع CPU والتخزين ➔ يخرج للإخراج.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 20 }}>•</span>
              <div><b>الدور:</b> نقل الأرقام والنصوص والصور والملفات والنتائج المعالجة الفعلية.</div>
            </div>
            <div style={{ marginTop: 4, padding: '4px 10px', background: 'var(--tint-blue)', borderRadius: 8, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 15, textAlign: 'center' }}>
              - - - - خط متقطع (الوسيط RAM) - - - -
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={100} y={550} w={1080} h={95} color="yellow" size={23} at={3}>
          💡 <b>تذكّر دائماً في الامتحانات:</b> الخط المتصل = تدفق التحكم (يخرج من CU فقط) · الخط المنقط = تدفق البيانات (يتوسطه RAM).
        </Note>
      </Scene>
    ),
  },

  // Frame 9: Interface Concept, Rear I/O Panel Visual, Practical Examples, and Critical Distinction
  {
    id: 'interface-concept',
    title: '٩ · مفهوم الواجهة (Interface) والفرق بينها وبين الجهاز الطرفي',
    scene: true,
    notes: (
      <>
        <p><b>رابعاً: الواجهة (Interface):</b></p>
        <p><b>التعريف العلمي:</b> الواجهة (Interface) هي مكون يتوسط عملية تبادل المعلومات بين الأجهزة المختلفة.</p>
        <p><b>وظيفة الواجهة:</b></p>
        <ul>
          <li>تُستخدم لتوصيل الكمبيوتر الرئيسي بالأجهزة الطرفية.</li>
          <li>تسمح بنقل البيانات والإشارات بين الأجهزة المتصلة.</li>
        </ul>
        <p><b>خلينا نفهم المقصود:</b> تخيل إن عندك كمبيوتر وعايز توصل به شاشة أو طابعة أو جهاز تاني؛ لازم يكون فيه وسيلة اتصال تسمح للأجهزة دي تتواصل مع الكمبيوتر وتتبادل البيانات. الوسيلة أو المعيار المستخدم في الاتصال ده هو المقصود بالواجهة (Interface).</p>
        <p><b>أمثلة عملية:</b></p>
        <ol>
          <li><b>شاشة بكابل HDMI:</b> الواجهة تسمح بنقل الفيديو والصوت إلى الشاشة.</li>
          <li><b>فلاشة بمنفذ USB:</b> الواجهة تسمح بتبادل البيانات بين الفلاشة والكمبيوتر.</li>
        </ol>
        <p><b>خلي بالك من الفرق الجوهري:</b></p>
        <ul>
          <li><b>الجهاز الطرفي (Peripheral):</b> الجهاز نفسه الذي توصله بالكمبيوتر، زي الطابعة أو الشاشة.</li>
          <li><b>الواجهة (Interface):</b> وسيلة أو معيار الاتصال الذي يسمح بتوصيل الأجهزة وتبادل البيانات والإشارات، زي USB.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الواجهات (Interfaces) · مفهومها ودورها والفرق بينها وبين الأجهزة الطرفية 🔌</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="purple" fill="purple" size={19} tc="ink">
          🌉 <b>الواجهة (Interface):</b> مكوّن يتوسط عملية تبادل المعلومات بين الأجهزة المختلفة · وظيفته: توصيل الكمبيوتر بالأجهزة الطرفية، ونقل البيانات والإشارات.
        </Box>

        {/* Right Side: Realistic Motherboard Rear I/O Shield Panel */}
        <Box x={640} y={190} w={540} h={365} c="purple" at={1} />
        <Place x={655} y={198} w={510} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <RearIoPanelSvg width={490} height={265} />
            <div style={{
              marginTop: 6,
              padding: '3px 12px',
              background: 'var(--tint-purple)',
              borderRadius: 6,
              color: 'var(--pen-purple)',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
              المنافذ الخلفية: وسائط الاتصال المادية (USB · HDMI · Ethernet · Audio)
            </div>
          </div>
        </Place>

        {/* Left Side: Intuition, Practical Examples & Critical Distinction */}
        <Box x={95} y={190} w={525} h={365} c="blue" at={2} />
        <Place x={110} y={198} w={495} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 15 }}>
              🔍 خلينا نفهم المقصود بالواجهة:
            </div>
            <div style={{ fontSize: 12.5, color: 'var(--pen-ink)', lineHeight: 1.4 }}>
              تخيل عندك كمبيوتر وتريد توصيل شاشة أو طابعة أو فلاشة؛ يلزم <b>وسيلة أو معيار اتصال</b> يسمح للأجهزة بالتواصل وتداول البيانات والإشارات؛ هذا المعيار هو <b>الواجهة</b>.
            </div>

            {/* Practical Examples Box */}
            <div style={{
              background: 'var(--surface)',
              border: '1.5px dashed var(--pen-blue)',
              borderRadius: 8,
              padding: '7px 10px',
            }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-blue)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>💡</span>
                <span>أمثلة عملية واقعية:</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 3, lineHeight: 1.4 }}>
                <div>• <b>توصيل الشاشة عبر كابل HDMI:</b> الواجهة تسمح بنقل الفيديو عالي الدقة والصوت معاً للشاشة.</div>
                <div>• <b>توصيل فلاشة عبر منفذ USB:</b> الواجهة تسمح بتبادل البيانات والملفات بين الفلاشة والكمبيوتر.</div>
              </div>
            </div>

            {/* Distinction Box (خلي بالك من الفرق) */}
            <div style={{
              background: 'rgba(234, 179, 8, 0.12)',
              border: '1.5px solid var(--pen-orange)',
              borderRadius: 8,
              padding: '7px 10px',
            }}>
              <div style={{ fontWeight: 800, color: 'var(--pen-orange)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>⚠️</span>
                <span>خلي بالك من الفرق الجوهري:</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 3, lineHeight: 1.4 }}>
                <div>• <b>الجهاز الطرفي:</b> الجهاز نفسه الذي توصله بالكمبيوتر، مثل <b>الطابعة</b> أو <b>الشاشة</b>.</div>
                <div>• <b>الواجهة (Interface):</b> وسيلة أو معيار الاتصال الذي يربط الجهاز وينقل البيانات، مثل <b>USB</b>.</div>
              </div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={568} w={1085} h={80} color="yellow" size={19} at={3}>
          💡 <b>القاعدة المعمارية:</b> الجهاز الطرفي هو العتاد المادي المستقل، بينما الواجهة هي "جسر العبور والمعيار الموحد" لنقل البيانات والإشارات بينه وبين الحاسوب!
        </Note>
      </Scene>
    ),
  },

  // Frame 10: 3 Official Interface Standards (USB, HDMI, Ethernet)
  {
    id: 'interfaces-definition-and-types',
    title: '١٠ · معايير منافذ التوصيل المقررة: USB و HDMI و Ethernet',
    scene: true,
    notes: (
      <>
        <p><b>الواجهات الثلاث الأساسية المقررة في المنهج:</b></p>
        <ol>
          <li><b>واجهة USB:</b> الأكثر استخداماً لتوصيل الأجهزة الطرفية (طابعات، لوحات مفاتيح، فلاش ميموري، محركات أقراص صلبة خارجية).</li>
          <li><b>معيار HDMI:</b> معيار اتصال يسمح بنقل الفيديو عالي الدقة والصوت الرقمي والبيانات الأخرى معاً عبر كابل واحد (شاشات، تلفزيونات رقمية، معدات صوت).</li>
          <li><b>معيار Ethernet:</b> معيار اتصال يستخدم في الشبكات المحلية السلكية (Wired LAN) في المنزل والمكتب لتوصيل أجهزة التوجيه (Routers) والمحاور (Hubs).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>معايير الواجهات ومنافذ التوصيل · USB و HDMI و Ethernet 🔌</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="purple" fill="purple" size={20} tc="ink">
          🌐 <b>معايير التوصيل العالمية المقررة:</b> ثلاثة معايير قياسية توفر منافذ موحدة للأجهزة الطرفية والعرض والشبكات السلكية.
        </Box>

        {/* 3 Interface Columns with custom cable SVGs */}
        {/* USB (Right) */}
        <Box x={835} y={190} w={345} h={355} c="blue" at={1} />
        <Place x={850} y={198} w={315} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <UsbCableSvg size={75} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 17, marginTop: 4 }}>
              واجهة USB
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 6, lineHeight: 1.45 }}>
              <b>الواجهة الأكثر استخداماً</b> لتوصيل الأجهزة الطرفية المتنوعة بالكمبيوتر.
            </div>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--pen-blue)44',
              borderRadius: 8,
              padding: '6px 10px',
              marginTop: 8,
              fontSize: 12,
              color: 'var(--pen-ink)',
              textAlign: 'right',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div>• الطابعات والماسحات الضوئية.</div>
              <div>• لوحات المفاتيح والفأرة.</div>
              <div>• الفلاشات والأقراص الخارجية HDD/SSD.</div>
            </div>
            <div style={{ marginTop: 10, padding: '4px 12px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              الأجهزة الطرفية العامة 🔌
            </div>
          </div>
        </Place>

        {/* HDMI (Center) */}
        <Box x={465} y={190} w={345} h={355} c="purple" at={2} />
        <Place x={480} y={198} w={315} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <HdmiCableSvg size={75} />
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 17, marginTop: 4 }}>
              معيار HDMI
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 6, lineHeight: 1.45 }}>
              معيار اتصال ينقل <b>الفيديو عالي الدقة والصوت الرقمي والبيانات معاً عبر كابل واحد</b>.
            </div>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--pen-purple)44',
              borderRadius: 8,
              padding: '6px 10px',
              marginTop: 8,
              fontSize: 12,
              color: 'var(--pen-ink)',
              textAlign: 'right',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div>• شاشات العرض المكتبية (Monitors).</div>
              <div>• التلفزيونات الرقمية (Smart TVs).</div>
              <div>• أجهزة العرض (Projectors) وأنظمة الصوت.</div>
            </div>
            <div style={{ marginTop: 10, padding: '4px 12px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              فيديو عالي الدقة + صوت معاً 📺
            </div>
          </div>
        </Place>

        {/* Ethernet (Left) */}
        <Box x={95} y={190} w={345} h={355} c="green" at={3} />
        <Place x={110} y={198} w={315} at={3}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <EthernetCableSvg size={75} />
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 17, marginTop: 4 }}>
              معيار Ethernet
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 6, lineHeight: 1.45 }}>
              معيار اتصال يُستخدم في <b>الشبكات المحلية السلكية (Wired LAN)</b> بالمنزل والمكتب.
            </div>
            <div style={{
              background: 'var(--surface)',
              border: '1px solid var(--pen-green)44',
              borderRadius: 8,
              padding: '6px 10px',
              marginTop: 8,
              fontSize: 12,
              color: 'var(--pen-ink)',
              textAlign: 'right',
              width: '100%',
              boxSizing: 'border-box',
            }}>
              <div>• توصيل أجهزة التوجيه (Routers).</div>
              <div>• توصيل المحاور والموزعات (Hubs / Switches).</div>
              <div>• الاتصال السلكي السريع بالإنترنت والشبكة.</div>
            </div>
            <div style={{ marginTop: 10, padding: '4px 12px', background: 'var(--tint-green)', borderRadius: 6, color: 'var(--pen-green)', fontWeight: 'bold', fontSize: 12 }}>
              الشبكات المحلية السلكية LAN 🌐
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={560} w={1085} h={85} color="yellow" size={20} at={4}>
          ⚡ <b>مفتاح الامتحانات:</b> كابل واحد لفيديو وصوت رقمي = <b>HDMI</b> · أجهزة طرفية عامة وفلاشات = <b>USB</b> · شبكة محلية سلكية وراوتر = <b>Ethernet</b>!
        </Note>
      </Scene>
    ),
  },

  // Frame 11: Ethernet & Wired LAN Deep-Dive (Slide 28)
  {
    id: 'ethernet-and-lan',
    title: '١١ · معيار Ethernet والشبكات المحلية السلكية (Wired LAN)',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: ما معنى Ethernet؟</b></p>
        <p>معيار اتصال يُستخدم لربط الأجهزة ببعضها داخل الشبكة المحلية باستخدام كابلات الشبكة.</p>
        <p><b>يعني إيه شبكة محلية (LAN - Local Area Network)؟</b></p>
        <p>LAN اختصار لـ Local Area Network، ومعناها الشبكة المحلية. وهي شبكة تربط مجموعة من الأجهزة في نطاق جغرافي محدود، مثل:</p>
        <ul>
          <li>شبكة الكمبيوترات داخل المدرسة.</li>
          <li>شبكة الأجهزة داخل شركة.</li>
          <li>شبكة الأجهزة داخل المنزل.</li>
        </ul>
        <p><b>ثانياً: ما المقصود بالشبكة المحلية السلكية (Wired LAN)؟</b></p>
        <p>كلمة سلكية تعني أن الأجهزة تتصل ببعض عن طريق كابلات مادية، وليس عن طريق الاتصال اللاسلكي.</p>
        <p><b>مثال عملي (معمل المدرسة):</b> تخيل أن عندك مدرسة فيها معمل كمبيوتر، والمعمل فيه 20 جهاز كمبيوتر. المدرسة تريد ربط الأجهزة في شبكة واحدة لتتبادل البيانات وتستخدم موارد الشبكة المشتركة كالطابعات؛ نصل الأجهزة ببعض باستخدام كابلات Ethernet ونربطها بجهاز شبكة مناسب (Hub أو Router).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>معيار Ethernet والشبكات المحلية السلكية (Wired LAN) 🌐</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="blue" fill="blue" size={19} tc="ink">
          🌐 <b>معيار Ethernet:</b> معيار اتصال قياسي لربط الأجهزة ببعضها داخل الشبكة المحلية (LAN) باستخدام كابلات الشبكة السلكية.
        </Box>

        {/* Right Side: School Lab Network Topology Visual Card */}
        <Box x={640} y={190} w={540} h={365} c="blue" at={1} />
        <Place x={655} y={198} w={510} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <LanNetworkDiagramSvg width={480} height={230} />
            <div style={{
              marginTop: 4,
              padding: '3px 12px',
              background: 'var(--tint-blue)',
              borderRadius: 6,
              color: 'var(--pen-blue)',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
              🏫 مثال عملي: معمل مدرسة به ٢٠ جهاز كمبيوتر متصلة لتبادل الملفات ومشاركة الطابعة
            </div>
          </div>
        </Place>

        {/* Left Side: LAN Scope + Wired Distinction */}
        <Box x={95} y={190} w={525} h={365} c="purple" at={2} />
        <Place x={110} y={198} w={495} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 16 }}>
              🔍 ما هي الشبكة المحلية (LAN)؟
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              اختصار <b>Local Area Network</b>، وهي شبكة تربط مجموعة أجهزة في <b>نطاق جغرافي محدود</b>، مثل:
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '6px',
              textAlign: 'center',
            }}>
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: 6, border: '1px solid var(--pen-purple)44', fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>🏫</div>
                <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>داخل مدرسة</div>
                <div style={{ fontSize: 10, color: 'var(--pen-ink)' }}>معامل الطلاب</div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: 6, border: '1px solid var(--pen-purple)44', fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>🏢</div>
                <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>داخل شركة</div>
                <div style={{ fontSize: 10, color: 'var(--pen-ink)' }}>أقسام ومكاتب</div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '6px', borderRadius: 6, border: '1px solid var(--pen-purple)44', fontSize: 12 }}>
                <div style={{ fontSize: 18 }}>🏠</div>
                <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)' }}>داخل منزل</div>
                <div style={{ fontSize: 10, color: 'var(--pen-ink)' }}>أجهزة العائلة</div>
              </div>
            </div>

            {/* Wired LAN definition */}
            <div style={{
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1.5px solid var(--pen-blue)',
              borderRadius: 8,
              padding: '8px 10px',
              marginTop: 4,
            }}>
              <div style={{ fontWeight: 800, color: 'var(--pen-blue)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🔌</span>
                <span>المقصود بالشبكة المحلية السلكية (Wired LAN):</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
                تتصل الأجهزة ببعضها ماديّاً عن طريق <b>كابلات شبكة (Ethernet Cables)</b>، وليس عن طريق الاتصال اللاسلكي (Wi-Fi)، مما يمنحها استقراراً وسرعة نقل قصوى.
              </div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={568} w={1085} h={80} color="yellow" size={19} at={3}>
          💡 <b>مفهوم ثابت:</b> شبكة LAN = نطاق جغرافي محدود (مدرسة/شركة/منزل) · سلكية (Wired) = تعتمد كلياً على كابلات Ethernet لنقل البيانات!
        </Note>
      </Scene>
    ),
  },

  // Frame 12: Network Hubs (Slides 29 & 30)
  {
    id: 'network-hubs',
    title: '١٢ · أجهزة المحاور (Hubs) في الشبكات المحلية',
    scene: true,
    notes: (
      <>
        <p><b>ثالثاً: ما المقصود بالمحاور (Hubs)؟</b></p>
        <p>الـ Hub هو جهاز شبكة يُستخدم لتوصيل عدة أجهزة ببعضها داخل الشبكة المحلية (LAN).</p>
        <p><b>كيف يعمل؟</b> لو عندك مجموعة أجهزة كمبيوتر، توصل كل جهاز بالـ Hub باستخدام كابل Ethernet، فتصبح الأجهزة متصلة ببعضها من خلاله.</p>
        <p><b>مثال عملي:</b> في معمل كمبيوتر به 10 أجهزة، نوصل كل جهاز بمنفذ في الـ Hub، لإنشاء اتصال وتبادل البيانات داخل المعمل.</p>
        <p><b>ملحوظة جوهرية فارقة (الفرق بين الـ Hub والـ Switch):</b></p>
        <p>الـ Hub يرسل البيانات المستلمة إلى <b>جميع المنافذ الأخرى</b> بدون تمييز (Broadcast)، وهذا يجعله مختلفاً عن جهاز Switch الأكثر استخداماً في الشبكات الحديثة الذي يوجه البيانات للمنفذ المستهدف فقط.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أجهزة المحاور (Hubs) · نقطة التوصيل المركزية في الشبكة 🔀</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="blue" fill="blue" size={20} tc="ink">
          🔀 <b>المحور (Hub):</b> جهاز شبكة يُستخدم لتوصيل عدة أجهزة كمبيوتر ببعضها داخل الشبكة المحلية عبر كابلات Ethernet.
        </Box>

        {/* Right Side: Realistic Hub Graphic Card */}
        <Box x={640} y={190} w={540} h={365} c="blue" at={1} />
        <Place x={655} y={198} w={510} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <HubDeviceSvg width={470} height={230} />
            <div style={{
              marginTop: 4,
              padding: '4px 12px',
              background: 'var(--tint-blue)',
              borderRadius: 6,
              color: 'var(--pen-blue)',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
              منافذ إيثرنت متعددة (RJ-45) لاستقبال كابلات جميع أجهزة المعمل
            </div>
          </div>
        </Place>

        {/* Left Side: Example + Critical Difference from Switch */}
        <Box x={95} y={190} w={525} h={365} c="orange" at={2} />
        <Place x={110} y={198} w={495} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ color: 'var(--pen-orange)', fontWeight: 800, fontSize: 16 }}>
              💡 مثال عملي (معمل به ١٠ أجهزة):
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              في معمل الحاسوب، عندك ١٠ أجهزة وتريد ربطها ببعض؛ نوصل كابل Ethernet من كل جهاز إلى منفذ في الـ Hub، فتصبح جميع الأجهزة متصلة في شبكة واحدة.
            </div>

            {/* Crucial Note Box: Hub vs Switch */}
            <div style={{
              background: 'var(--surface)',
              border: '2px solid var(--pen-orange)',
              borderRadius: 8,
              padding: '10px 12px',
              marginTop: 6,
            }}>
              <div style={{ fontWeight: 800, color: 'var(--pen-orange)', fontSize: 14, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>⚠️</span>
                <span>ملحوظة ذهبية (الفرق بين الـ Hub والـ Switch):</span>
              </div>
              <div style={{ fontSize: 12.5, color: 'var(--pen-ink)', marginTop: 6, lineHeight: 1.5 }}>
                <div>• <b>جهاز المحور (Hub):</b> يرسل البيانات المستقبلة إلى <b>جميع المنافذ الأخرى</b> بلا استثناء (Broadcast).</div>
                <div style={{ marginTop: 4 }}>• <b>جهاز المحول (Switch):</b> يوجه البيانات بذكاء <b>إلى المنفذ المستهدف فقط</b>، ولذلك يُعد Switch هو الأكثر استخداماً في الشبكات الحديثة لتفادي الزحام!</div>
              </div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={568} w={1085} h={80} color="yellow" size={19} at={3}>
          ⚡ <b>تذكّر للامتحان:</b> الـ Hub يوصل أجهزة الشبكة المحلية ببعضها، وعيبه أنه يبث البيانات لجميع المنافذ وليس للجهاز المعني وحده!
        </Note>
      </Scene>
    ),
  },

  // Frame 13: Network Routers (Slides 31 & 32)
  {
    id: 'network-routers',
    title: '١٣ · أجهزة التوجيه (Routers) والربط بالإنترنت',
    scene: true,
    notes: (
      <>
        <p><b>رابعاً: ما المقصود بأجهزة التوجيه (Routers)؟</b></p>
        <p>الـ Router هو جهاز شبكة وظيفته الأساسية <b>توجيه البيانات بين الشبكات المختلفة</b>.</p>
        <p><b>يعني إيه الكلام ده؟</b> تخيل شبكة في المنزل تضم (لابتوب · كمبيوتر · موبايل · تلفزيون ذكي)؛ جهاز التوجيه يساعد هذه الأجهزة على الاتصال بالشبكة، ويوجه حركة البيانات بين شبكتك المنزلية والشبكات الأخرى كشبكة الإنترنت العالمية.</p>
        <p><b>التوصيل السلكي:</b> يمكن توصيل الكمبيوتر المكتبي بالراوتر مباشرة باستخدام كابل Ethernet عبر منافذ LAN الصفراء للحصول على أقصى سرعة وثبات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أجهزة التوجيه (Routers) · ربط الشبكات وتوجيه حركة البيانات 📡</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="orange" fill="orange" size={20} tc="ink">
          🧭 <b>جهاز التوجيه (Router):</b> جهاز شبكة وظيفته الأساسية توجيه وتبادل البيانات بين الشبكات المختلفة (كالشبكة المنزلية وشبكة الإنترنت).
        </Box>

        {/* Right Side: Realistic Router Graphic Card */}
        <Box x={640} y={190} w={540} h={365} c="orange" at={1} />
        <Place x={655} y={198} w={510} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <RouterDeviceSvg width={470} height={230} />
            <div style={{
              marginTop: 4,
              padding: '4px 12px',
              background: 'var(--tint-orange)',
              borderRadius: 6,
              color: 'var(--pen-orange)',
              fontWeight: 'bold',
              fontSize: 12,
            }}>
              منافذ LAN الصفراء (Ethernet) + منفذ WAN للإنترنت + هوائي Wi-Fi
            </div>
          </div>
        </Place>

        {/* Left Side: Home Network Scenario + Ethernet Cable Connection */}
        <Box x={95} y={190} w={525} h={365} c="blue" at={2} />
        <Place x={110} y={198} w={495} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16 }}>
              🏠 يعني إيه توجيه البيانات؟ (مثال الشبكة المنزلية):
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              تخيل عندك في المنزل شبكة أجهزة متعددة:
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '6px',
              textAlign: 'center',
            }}>
              <div style={{ background: 'var(--surface)', padding: '5px', borderRadius: 6, border: '1px solid var(--pen-blue)44', fontSize: 12 }}>
                <div>💻</div>
                <div style={{ fontWeight: 'bold' }}>لابتوب</div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '5px', borderRadius: 6, border: '1px solid var(--pen-blue)44', fontSize: 12 }}>
                <div>🖥️</div>
                <div style={{ fontWeight: 'bold' }}>كمبيوتر</div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '5px', borderRadius: 6, border: '1px solid var(--pen-blue)44', fontSize: 12 }}>
                <div>📱</div>
                <div style={{ fontWeight: 'bold' }}>موبايل</div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '5px', borderRadius: 6, border: '1px solid var(--pen-blue)44', fontSize: 12 }}>
                <div>📺</div>
                <div style={{ fontWeight: 'bold' }}>تلفزيون ذكي</div>
              </div>
            </div>

            <div style={{ fontSize: 12.5, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.45 }}>
              الراوتر يتيح لكل هذه الأجهزة التخاطب داخلياً، <b>ويوجه البيانات بينها وبين الشبكات الخارجية (مثل الإنترنت)</b>.
            </div>

            {/* Direct Ethernet Cable Tip */}
            <div style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1.5px solid var(--pen-green)',
              borderRadius: 8,
              padding: '8px 10px',
              marginTop: 4,
            }}>
              <div style={{ fontWeight: 800, color: 'var(--pen-green)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🔌</span>
                <span>توصيل الكمبيوتر بالراوتر سلكياً:</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 3, lineHeight: 1.4 }}>
                نوصل الكمبيوتر بأحد منافذ LAN الصفراء في الراوتر باستخدام <b>كابل Ethernet</b> للحصول على اتصال ثابت وفائق السرعة بدون تقطيع!
              </div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={568} w={1085} h={80} color="yellow" size={19} at={3}>
          💡 <b>القاعدة الذهبية:</b> الـ Hub يربط الأجهزة داخل نفس الشبكة المحلية (LAN)، بينما الـ Router يوجه حركة البيانات بين شبكات مختلفة (المنزل ➔ الإنترنت)!
        </Note>
      </Scene>
    ),
  },

  // Frame 14: Master Summary
  {
    id: 'master-summary',
    title: '١٤ · الملخص الذهبي لبنية الكمبيوتر والشبكات',
    scene: true,
    notes: (
      <>
        <p><b>الملخص الشامل والنهائي للدرس الأول (الوحدة السابعة):</b></p>
        <ul>
          <li><b>الأجهزة:</b> العتاد المادي الملموس.</li>
          <li><b>الأجهزة الطرفية:</b> أجهزة تُستخدم عبر توصيلها بالحاسوب (إدخال/إخراج/تخزين).</li>
          <li><b>المكونات الخمسة:</b> وحدة التحكم CU، وحدة ALU، وحدة التخزين (RAM و SSD)، أجهزة الإدخال، أجهزة الإخراج.</li>
          <li><b>المعالج CPU:</b> وحدة التحكم CU + وحدة الحساب والمنطق ALU.</li>
          <li><b>التدفق:</b> تدفق التحكم يخرج من CU فقط · تدفق البيانات يمر عبر الذاكرة RAM.</li>
          <li><b>الواجهات:</b> USB (أجهزة طرفية عامة)، HDMI (صوت وفيديو بكابل واحد)، Ethernet (شبكات سلكية LAN).</li>
          <li><b>الشبكات:</b> الـ Hub يربط أجهزة الشبكة المحلية (ويبعث للكل)، بينما الـ Router يوجه البيانات بين الشبكات المختلفة والإنترنت.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>الملخص الذهبي الشامل · خلاصة بنية الكمبيوتر والشبكات 🌟</Heading>

        {/* 2 Summary Pillars */}
        {/* Pillar 1 (Right) */}
        <Box x={660} y={140} w={540} h={390} c="purple" at={1} />
        <Doodle x={930} y={185} icon="🧠" size={65} c="purple" fill="purple" at={1} />
        <Txt x={930} y={230} size={25} c="purple" at={1}>المعالج والمكونات الخمسة</Txt>
        <Place x={685} y={260} w={490} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            fontSize: 16,
            lineHeight: 1.5,
            color: 'var(--pen-ink)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-purple)', fontSize: 18 }}>•</span>
              <div><b>المعالج (CPU):</b> وحدة التحكم (CU) + وحدة الحساب والمنطق (ALU).</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-purple)', fontSize: 18 }}>•</span>
              <div><b>وحدة التحكم (CU):</b> تنفذ التعليمات وتصدر جميع أوامر التحكم.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-purple)', fontSize: 18 }}>•</span>
              <div><b>وحدة الحساب (ALU):</b> تنفذ العمليات الحسابية والمقارنات المنطقية.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-purple)', fontSize: 18 }}>•</span>
              <div><b>الذاكرة الرئيسية (RAM):</b> مؤقتة سريعة تتصل بالمعالج مباشرة.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-purple)', fontSize: 18 }}>•</span>
              <div><b>التخزين الثانوي:</b> تخزين دائم طويل الأجل (SSD / HDD / USB).</div>
            </div>
          </div>
        </Place>

        {/* Pillar 2 (Left) */}
        <Box x={80} y={140} w={540} h={390} c="blue" at={2} />
        <Doodle x={350} y={185} icon="🔌" size={65} c="blue" fill="blue" at={2} />
        <Txt x={350} y={230} size={25} c="blue" at={2}>الواجهات وأجهزة الشبكة</Txt>
        <Place x={105} y={260} w={490} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            fontSize: 16,
            lineHeight: 1.5,
            color: 'var(--pen-ink)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 18 }}>•</span>
              <div><b>واجهة USB:</b> الأكثر استخداماً للطرفيات (طابعة، كيبورد، ماوس).</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 18 }}>•</span>
              <div><b>معيار HDMI:</b> كابل واحد لنقل الفيديو عالي الدقة والصوت الرقمي.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 18 }}>•</span>
              <div><b>معيار Ethernet:</b> كابل الشبكات المحلية السلكية (LAN) والراوترات.</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 18 }}>•</span>
              <div><b>المحور (Hub):</b> يربط أجهزة الشبكة المحلية (ويبث للكل).</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <span style={{ color: 'var(--pen-blue)', fontSize: 18 }}>•</span>
              <div><b>الموجه (Router):</b> يوجه البيانات بين الشبكات المختلفة والإنترنت.</div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={100} y={550} w={1080} h={95} color="yellow" size={23} at={3}>
          🏆 <b>أنت الآن جاهز تماماً:</b> انطلق للمعامل التفاعلية وماراثون الاختبار الشامل لحصد الدرجة النهائية!
        </Note>
      </Scene>
    ),
  },
];
