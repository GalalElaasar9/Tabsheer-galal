// Board scenes · part 2 (Storage Unit: Primary Memory RAM, Secondary Storage, Comparison, Input & Output Devices)
import type { FrameDef } from '../../board/types';
import {
  Box, Heading, Note, Place, Scene,
} from '../../sketch/Sketch';
import {
  HddDriveSvg,
  KeyboardMouseSvg,
  MonitorSvg,
  PrinterSvg,
  RamStickSvg,
  ScannerSvg,
  SpeakersSvg,
  SsdDriveSvg,
  UsbStickSvg,
} from './visuals';

export const part2: FrameDef[] = [
  // 1. RAM: Primary Memory
  {
    id: 'ram-primary-memory',
    title: '٥ · وحدة التخزين: الذاكرة الرئيسية (RAM)',
    scene: true,
    notes: (
      <>
        <p><b>وحدة التخزين (Storage Unit):</b> وظيفتها تخزين البرامج والبيانات التي يحتاج إليها الكمبيوتر، وتُقسم إلى نوعين رئيسيين.</p>
        <p><b>أ- وحدة الذاكرة الرئيسية (Primary Memory / RAM):</b></p>
        <ul>
          <li><b>الوظيفة:</b> تخزين البرامج والبيانات مؤقتاً (Temporarily) لتكون متاحة للمعالج (CPU) بسرعة فائقة أثناء العمل.</li>
          <li><b>يعني إيه مؤقتاً؟</b> يحتفظ بها الحاسوب أثناء الاستخدام والتشغيل فقط، وتفقد محتواها فور انقطاع التيار الكهربائي (Volatile).</li>
          <li><b>مثال عملي (برنامج Word):</b> عند فتح Word والكتابة، البرنامج والبيانات تكون محمّلة في الذاكرة الرئيسية RAM، وليست محفوظة بشكل دائم بعد!</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>وحدة التخزين · الذاكرة الرئيسية (RAM) والتخزين المؤقت ⚡</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="blue" fill="blue" size={20} tc="ink">
          📦 <b>وحدة التخزين (Storage Unit):</b> تخزن البرامج والبيانات التي يحتاج إليها الكمبيوتر، وتنقسم إلى: ذاكرة رئيسية وذاكرة ثانوية.
        </Box>

        {/* Right Side: RAM Hardware Visual Card */}
        <Box x={660} y={190} w={520} h={355} c="blue" at={1} />
        <Place x={675} y={200} w={490} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <RamStickSvg width={250} height={75} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 18, marginTop: 8 }}>
              الذاكرة الرئيسية (RAM - Main Memory)
            </div>
            <div style={{
              marginTop: 6,
              padding: '4px 12px',
              background: 'var(--tint-blue)',
              borderRadius: 8,
              color: 'var(--pen-blue)',
              fontWeight: 'bold',
              fontSize: 14,
            }}>
              ⚡ تخزين مؤقت (Temporarily) · متطايرة (Volatile)
            </div>
            <div style={{
              fontSize: 13,
              color: 'var(--pen-ink)',
              marginTop: 10,
              lineHeight: 1.5,
              background: 'var(--surface)',
              padding: '8px 12px',
              borderRadius: 8,
              border: '1.5px solid var(--pen-blue)44',
            }}>
              ⚠️ <b>تنبيه جوهري:</b> غير مخصصة للاحتفاظ الدائم بالملفات بعد انتهاء العمل أو انقطاع التيار الكهربائي!
            </div>
          </div>
        </Place>

        {/* Left Side: What is Temporary? + Practical Word Example */}
        <Box x={95} y={190} w={540} h={355} c="purple" at={2} />
        <Place x={115} y={205} w={500} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 16 }}>
              🔍 يعني إيه "تخزين مؤقت"؟
            </div>
            <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.45 }}>
              الكمبيوتر يحتفظ بالبيانات والبرامج في RAM <b>أثناء العمل الفعلي عليها</b> فقط، لتكون متاحة للمعالج بسرعة خارقة.
            </div>

            {/* Practical Word Example Box */}
            <div style={{
              background: 'var(--surface)',
              border: '1.5px dashed var(--pen-purple)',
              borderRadius: 10,
              padding: '10px 12px',
              marginTop: 4,
            }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-purple)', fontSize: 14, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>💡</span>
                <span>مثال عملي (برنامج تحرير النصوص Word):</span>
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.45 }}>
                افترض أنك فتحت برنامج Word وبدأت تكتب موضوعاً:
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, paddingRight: '10px' }}>
                <div>• أثناء الكتابة، يكون البرنامج محمّلاً بالكامل داخل الذاكرة الرئيسية (RAM).</div>
                <div>• البيانات المكتوبة تكون متاحة فوراً للمعالج أثناء العمل.</div>
                <div style={{ color: 'var(--pen-red)', fontWeight: 'bold', marginTop: 4 }}>
                  • إذا انقطع التيار فجأة قبل الحفظ ➔ تفقد كل ما كتبته لأن RAM متطايرة!
                </div>
              </div>
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={560} w={1085} h={85} color="yellow" size={20} at={3}>
          💡 <b>القاعدة الذهبية:</b> الذاكرة الرئيسية (RAM) سريعة جداً وتتصل بالمعالج مباشرة، لكنها مؤقتة وتفقد كل بياناتها بمجرد إغلاق الجهاز!
        </Note>
      </Scene>
    ),
  },

  // 2. Secondary Storage
  {
    id: 'secondary-storage',
    title: '٦ · وحدة التخزين: التخزين الثانوي (Secondary Storage)',
    scene: true,
    notes: (
      <>
        <p><b>ب- وحدة التخزين الثانوية (Secondary Storage):</b></p>
        <p><b>الوظيفة:</b> تخزين البرامج والبيانات لفترات طويلة على المدى الطويل (Long-term) والاحتفاظ بها حتى بعد إغلاق الكمبيوتر.</p>
        <p><b>أمثلة وحدة التخزين الثانوية:</b></p>
        <ol>
          <li><b>القرص الصلب (Hard Disk - HDD):</b> سعات تخزينية ضخمة وأقراص مغناطيسية.</li>
          <li><b>القرص السريع (SSD):</b> رقائق إلكترونية سريعة ومقاومة للصدمات.</li>
          <li><b>ذاكرة الفلاش (USB Flash Drive):</b> للتخزين المحمول والنسخ الاحتياطي السريع.</li>
        </ol>
        <p><b>مثال عملي:</b> عند كتابة ملف في Word وحفظه (Save)، يُخزّن على القرص الثانوي؛ وعند إغلاق الجهاز وتشغيله بعد أيام تجد الملف محفوظاً بأمان.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>وحدة التخزين · ذاكرة التخزين الثانوية (Secondary Storage) 💾</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="orange" fill="orange" size={20} tc="ink">
          💾 <b>ذاكرة التخزين الثانوية:</b> وظيفتها تخزين البرامج والبيانات لفترات طويلة (Long-term) والاحتفاظ بها دائماً حتى بعد إغلاق الحاسوب.
        </Box>

        {/* 3 Visual Secondary Storage Devices */}
        {/* 1. HDD */}
        <Box x={835} y={190} w={345} h={245} c="orange" at={1} />
        <Place x={850} y={198} w={315} at={1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <HddDriveSvg size={75} />
            <div style={{ color: 'var(--pen-orange)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              القرص الصلب (Hard Disk - HDD)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              أقراص مغناطيسية دوارة ورأس ميكانيكي؛ سعات ضخمة بتكلفة اقتصادية.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-orange)', borderRadius: 6, color: 'var(--pen-orange)', fontWeight: 'bold', fontSize: 12 }}>
              سعات تخزين عملاقة (تيرابايت) 💽
            </div>
          </div>
        </Place>

        {/* 2. SSD */}
        <Box x={465} y={190} w={345} h={245} c="blue" at={2} />
        <Place x={480} y={198} w={315} at={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <SsdDriveSvg size={75} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              المحرك الصلب السريع (SSD)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              شرائح إلكترونية صلبة فائقة السرعة؛ بدون أجزاء متحركة ومقاومة للصدمات.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              سرعة إقلاع وتشغيل فائقة ⚡
            </div>
          </div>
        </Place>

        {/* 3. USB */}
        <Box x={95} y={190} w={345} h={245} c="purple" at={3} />
        <Place x={110} y={198} w={315} at={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <UsbStickSvg size={75} />
            <div style={{ color: 'var(--pen-purple)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              ذاكرة الفلاش (USB Drive)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              وسائط تخزين خارجية خفيفة وسهلة الحمل لنقل الملفات والنسخ الاحتياطي.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              سهولة النقل والتوصيل 🔌
            </div>
          </div>
        </Place>

        {/* Practical Save Example Box */}
        <Box x={95} y={450} w={1085} h={200} c="green" fill="green" at={4} />
        <Place x={115} y={458} w={1045} at={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>💡</span>
              <span>مثال عملي (حفظ الملف في Word): كيف يحمينا التخزين الثانوي من فقدان البيانات؟</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
              fontSize: 13,
              lineHeight: 1.45,
              color: 'var(--pen-ink)',
            }}>
              <div style={{ background: 'var(--surface)', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--pen-green)44' }}>
                <b style={{ color: 'var(--pen-green)' }}>1️⃣ عند الضغط على "حفظ" (Save):</b>
                <div style={{ marginTop: 3 }}>
                  تأمر وحدة التحكم بنقل نسخة من الملف المفتوح في RAM إلى القرص الثانوي (SSD أو Hard Disk) ليُكتب دائمياً.
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '8px 12px', borderRadius: 8, border: '1px solid var(--pen-green)44' }}>
                <b style={{ color: 'var(--pen-green)' }}>2️⃣ بعد إغلاق الجهاز وإعادة تشغيله:</b>
                <div style={{ marginTop: 3 }}>
                  تظل البيانات محفوظة بالكامل لشهور وسنوات، وتقدر في أي وقت تعيد فتح الملف والتعديل عليه بأمان تام!
                </div>
              </div>
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },

  // 3. Comparison Frame: RAM vs Secondary Storage
  {
    id: 'memory-vs-storage',
    title: '٧ · المقارنة الشاملة: RAM مقابل التخزين الثانوي',
    scene: true,
    notes: (
      <>
        <p><b>المقارنة الجوهرية بين الذاكرة الرئيسية والتخزين الثانوي:</b></p>
        <ul>
          <li><b>RAM:</b> مؤقتة، سريعة، تتصل بالمعالج مباشرة، تفقد بياناتها عند انقطاع الكهرباء.</li>
          <li><b>التخزين الثانوي:</b> دائم، طويل الأجل، سعات ضخمة، يحتفظ بالبيانات بدون كهرباء.</li>
        </ul>
        <p><b>تشبيه تثبيت الفرق:</b></p>
        <p>المرجع المحفوظ في خزانة الأرشيف يشبه <b>التخزين الثانوي</b> (تحتفظ به وترجع له بأي وقت)، بينما الورقة المفتوحة أمامك على طاولة العمل تشبه <b>RAM</b> (تتعامل معها حالياً وبمجرد إخلاء الطاولة تنتهي).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>المقارنة الشاملة · الذاكرة الرئيسية (RAM) مقابل التخزين الثانوي ⚖️</Heading>

        {/* Right Side: Visual Comparison Table */}
        <Box x={540} y={125} w={640} h={420} c="blue" at={1} />
        <Place x={555} y={135} w={610} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            direction: 'rtl',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 2 }}>
              📊 جدول المقارنة المعياري
            </div>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              fontSize: 13,
              textAlign: 'center',
              direction: 'rtl',
              background: 'var(--surface)',
              borderRadius: 8,
              overflow: 'hidden',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
            }}>
              <thead>
                <tr style={{ background: 'var(--tint-blue)', color: 'var(--pen-blue)', fontWeight: 800 }}>
                  <th style={{ padding: '8px 6px', borderBottom: '2px solid var(--pen-blue)' }}>وجه المقارنة</th>
                  <th style={{ padding: '8px 6px', borderBottom: '2px solid var(--pen-blue)' }}>الذاكرة الرئيسية (RAM) ⚡</th>
                  <th style={{ padding: '8px 6px', borderBottom: '2px solid var(--pen-blue)' }}>التخزين الثانوي (Storage) 💾</th>
                </tr>
              </thead>
              <tbody style={{ color: 'var(--pen-ink)' }}>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 'bold' }}>طبيعة التخزين</td>
                  <td style={{ padding: '7px 6px', color: 'var(--pen-blue)', fontWeight: 'bold' }}>مؤقت (Temporary)</td>
                  <td style={{ padding: '7px 6px', color: 'var(--pen-orange)', fontWeight: 'bold' }}>طويل المدى (Long-term)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 'bold' }}>أمثلة التقنيات</td>
                  <td style={{ padding: '7px 6px' }}>شرائح RAM</td>
                  <td style={{ padding: '7px 6px' }}>HDD · SSD · USB</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 'bold' }}>الاستخدام الأساسي</td>
                  <td style={{ padding: '7px 6px' }}>الاحتفاظ بالبرامج قيد التشغيل</td>
                  <td style={{ padding: '7px 6px' }}>الاحتفاظ بالملفات بعد إغلاق الجهاز</td>
                </tr>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <td style={{ padding: '7px 6px', fontWeight: 'bold' }}>انقطاع الكهرباء</td>
                  <td style={{ padding: '7px 6px', color: 'var(--pen-red)', fontWeight: 'bold' }}>متطايرة (تفقد محتواها)</td>
                  <td style={{ padding: '7px 6px', color: 'var(--pen-green)', fontWeight: 'bold' }}>غير متطايرة (تحتفظ بالبيانات)</td>
                </tr>
                <tr>
                  <td style={{ padding: '7px 6px', fontWeight: 'bold' }}>السرعة والاتصال</td>
                  <td style={{ padding: '7px 6px' }}>فائقة السرعة · متصلة بالمعالج</td>
                  <td style={{ padding: '7px 6px' }}>تتبادل البيانات عبر الذاكرة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Place>

        {/* Left Side: Real-life Metaphor (No mention of book or pages!) */}
        <Box x={95} y={125} w={425} h={420} c="orange" at={2} />
        <Place x={110} y={135} w={395} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--pen-orange)', textAlign: 'center' }}>
              🏛️ تشبيه تثبيت الفرق العملي
            </div>
            
            {/* Archive Cabinet Card */}
            <div style={{ background: 'var(--surface)', padding: '10px', borderRadius: 8, border: '1.5px solid var(--pen-orange)44' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-orange)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🗄️</span>
                <span>خزانة الأرشيف = التخزين الثانوي:</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 3, lineHeight: 1.4 }}>
                تحتفظ فيها بكل مستنداتك وسجلاتك القديمة والجديدة لسنوات طويلة بأمان، وترجع إليها في أي وقت تشاء.
              </div>
            </div>

            {/* Work Desk Card */}
            <div style={{ background: 'var(--surface)', padding: '10px', borderRadius: 8, border: '1.5px solid var(--pen-blue)44' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--pen-blue)', fontSize: 13, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📋</span>
                <span>طاولة عملك الحالية = الذاكرة الرئيسية (RAM):</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 3, lineHeight: 1.4 }}>
                الأوراق والملفات المفروشة أمامك الآن؛ تتعامل معها بسرعة في الوقت الحالي، وبمجرد إخلاء الطاولة أو مغادرة المكتب تنتهي!
              </div>
            </div>

            <div style={{
              padding: '6px 10px',
              background: 'var(--tint-orange)',
              borderRadius: 6,
              color: 'var(--pen-orange)',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'center',
            }}>
              الخزانة للأرشيف الدائم 🗄️ والطاولة للعمل السريع 📋
            </div>
          </div>
        </Place>

        {/* Bottom Note */}
        <Note x={95} y={560} w={1085} h={85} color="yellow" size={20} at={3}>
          ⚡ <b>القاعدة المعمارية:</b> الذاكرة الرئيسية (RAM) تخزن مؤقتاً أثناء التشغيل، بينما ذاكرة التخزين الثانوية (SSD / HDD) تحفظ الملفات لسنوات طويلة بدون كهرباء!
        </Note>
      </Scene>
    ),
  },

  // 4. Input Devices
  {
    id: 'input-devices',
    title: '٨ · أجهزة الإدخال (Input Unit)',
    scene: true,
    notes: (
      <>
        <p><b>٤- جهاز الإدخال (Input Unit):</b></p>
        <p><b>الوظيفة الأساسية:</b> إدخال البيانات من المصادر الخارجية (External Sources).</p>
        <p><b>يعني إيه إدخال بيانات؟</b> إدخال معلومات أو أوامر إلى الكمبيوتر علشان يقدر يتعامل معاها ويعالجها.</p>
        <p><b>الأمثلة المقررة:</b> لوحة المفاتيح · الفأرة · الماسح الضوئي.</p>
        <p><b>أمثلة عملية واقعية:</b></p>
        <ol>
          <li><b>كتابة الاسم بالكيبورد:</b> لما تكتب اسمك باستخدام لوحة المفاتيح ➔ أنت بتدخل بيانات للكمبيوتر.</li>
          <li><b>تحريك ونقر الفأرة:</b> لما تحرك الفأرة وتضغط على برنامج ➔ أنت بتدخل أوامر للكمبيوتر.</li>
          <li><b>مسح المستند بالماسح الضوئي:</b> لما تعمل Scan لصورة ورقية ➔ أنت بتدخل الصورة للكمبيوتر في صورة رقمية.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أجهزة الإدخال (Input Unit) · استقبال البيانات والأوامر 📥</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="blue" fill="blue" size={20} tc="ink">
          📥 <b>جهاز الإدخال (Input Unit):</b> وظيفته إدخال البيانات من المصادر الخارجية (External Sources) إلى الكمبيوتر ليعالجها ويتعامل معها.
        </Box>

        {/* 3 Visual Input Devices */}
        {/* 1. Keyboard */}
        <Box x={835} y={190} w={345} h={235} c="blue" at={1} />
        <Place x={850} y={198} w={315} at={1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <KeyboardMouseSvg size={75} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              لوحة المفاتيح (Keyboard)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              إدخال الحروف والأرقام والنصوص المكتوبة والأوامر.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              إدخال نصوص وبيانات ⌨️
            </div>
          </div>
        </Place>

        {/* 2. Mouse */}
        <Box x={465} y={190} w={345} h={235} c="blue" at={2} />
        <Place x={480} y={198} w={315} at={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 44, margin: '10px 0 2px' }}>🖱️</div>
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الفأرة (Mouse)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              جهاز تأشيري لتحديد الكائنات وتوجيه المؤشر والنقر لتفعيل الأوامر.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              إدخال أوامر وتأشير 🖱️
            </div>
          </div>
        </Place>

        {/* 3. Scanner */}
        <Box x={95} y={190} w={345} h={235} c="blue" at={3} />
        <Place x={110} y={198} w={315} at={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <ScannerSvg size={75} />
            <div style={{ color: 'var(--pen-blue)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الماسح الضوئي (Scanner)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              مسح المستندات والصور الورقية وتحويلها إلى بيانات رقمية.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              تحويل الورق إلى بيانات رقمية 📠
            </div>
          </div>
        </Place>

        {/* Practical Real-Life Examples Section */}
        <Box x={95} y={440} w={1085} h={210} c="green" fill="green" at={4} />
        <Place x={115} y={448} w={1045} at={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-green)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>💡</span>
              <span>أمثلة عملية واقعية: ماذا يحدث عند استخدام أجهزة الإدخال؟</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              fontSize: 12.5,
              lineHeight: 1.4,
              color: 'var(--pen-ink)',
            }}>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-green)44' }}>
                <b style={{ color: 'var(--pen-green)' }}>1️⃣ كتابة الاسم بالكيبورد:</b>
                <div style={{ marginTop: 3 }}>
                  لما تكتب اسمك باستخدام لوحة المفاتيح ➔ أنت بتدخل <b>بيانات نصية</b> إلى نظام الكمبيوتر.
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-green)44' }}>
                <b style={{ color: 'var(--pen-green)' }}>2️⃣ تحريك ونقر الفأرة:</b>
                <div style={{ marginTop: 3 }}>
                  لما تحرك الفأرة وتضغط على أيقونة برنامج ➔ أنت بتدخل <b>أوامر تشغيل</b> إلى الكمبيوتر.
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-green)44' }}>
                <b style={{ color: 'var(--pen-green)' }}>3️⃣ مسح الصورة بالماسح (Scan):</b>
                <div style={{ marginTop: 3 }}>
                  لما تعمل Scan لشهادة أو صورة ورقية ➔ أنت بتدخل المستند في <b>صورة ملف رقمي</b>.
                </div>
              </div>
            </div>
            <div style={{
              marginTop: 4,
              padding: '3px 10px',
              background: 'var(--tint-green)',
              borderRadius: 6,
              color: 'var(--pen-green)',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'center',
            }}>
              إذن جهاز الإدخال هو الوسيلة التي نستخدمها لإدخال البيانات والأوامر إلى الكمبيوتر 📥
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },

  // 5. Output Devices
  {
    id: 'output-devices',
    title: '٩ · أجهزة الإخراج (Output Unit)',
    scene: true,
    notes: (
      <>
        <p><b>٥- جهاز الإخراج (Output Unit):</b></p>
        <p><b>الوظيفة الأساسية:</b> إخراج المعلومات والنتائج خارج الكمبيوتر للمستخدم.</p>
        <p><b>يعني إيه إخراج معلومات؟</b> بعد ما الكمبيوتر يستقبل البيانات ويتعامل معاها ويعالجها، لازم يعرض لنا النتيجة أو يخرجها في صورة نقدر نستفيد منها.</p>
        <p><b>الأمثلة المقررة:</b> الشاشة · الطابعة · مكبرات الصوت.</p>
        <p><b>أمثلة عملية واقعية:</b></p>
        <ol>
          <li><b>عرض ناتج العملية الحسابية:</b> لما تكتب عملية حسابية على الحاسوب ➔ تخرج النتيجة وتُعرض مرئياً على الشاشة.</li>
          <li><b>طباعة ملف ورقي:</b> لما تحتاج نسخة مادية من مستندك ➔ يخرج مطبوعاً على الورق بواسطة الطابعة.</li>
          <li><b>سماع الصوت والفيديو:</b> لما تشغل مقطع فيديو ➔ تسمع الصوت والتنبيهات المسموعة من السماعات.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>أجهزة الإخراج (Output Unit) · وسيلة إظهار النتائج والمعلومات 📤</Heading>

        {/* Top Definition Banner */}
        <Box x={95} y={115} w={1085} h={65} c="green" fill="green" size={20} tc="ink">
          📤 <b>جهاز الإخراج (Output Unit):</b> وظيفته إخراج المعلومات والنتائج المعالجة خارج الكمبيوتر في صورة يستفيد منها المستخدم.
        </Box>

        {/* 3 Visual Output Devices */}
        {/* 1. Monitor */}
        <Box x={835} y={190} w={345} h={235} c="green" at={1} />
        <Place x={850} y={198} w={315} at={1}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <MonitorSvg size={75} />
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الشاشة (Monitor)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              الجهاز الرئيسي للعرض البصري للنصوص والواجهات والرسوميات والفيديوهات.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              منفذ التوصيل: HDMI 🖥️
            </div>
          </div>
        </Place>

        {/* 2. Printer */}
        <Box x={465} y={190} w={345} h={235} c="green" at={2} />
        <Place x={480} y={198} w={315} at={2}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <PrinterSvg size={75} />
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              الطابعة (Printer)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              إخراج مادي ملموس للمستندات والتقارير والرسومات على الورق.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-blue)', borderRadius: 6, color: 'var(--pen-blue)', fontWeight: 'bold', fontSize: 12 }}>
              منفذ التوصيل: USB 🖨️
            </div>
          </div>
        </Place>

        {/* 3. Speakers */}
        <Box x={95} y={190} w={345} h={235} c="green" at={3} />
        <Place x={110} y={198} w={315} at={3}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <SpeakersSvg size={75} />
            <div style={{ color: 'var(--pen-green)', fontWeight: 800, fontSize: 16, marginTop: 4 }}>
              مكبرات الصوت (Speakers)
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-ink)', marginTop: 4, lineHeight: 1.4 }}>
              تحويل الإشارات الصوتية الرقمية إلى صوت مسموع وتنبيهات ومؤثرات.
            </div>
            <div style={{ marginTop: 6, padding: '2px 8px', background: 'var(--tint-purple)', borderRadius: 6, color: 'var(--pen-purple)', fontWeight: 'bold', fontSize: 12 }}>
              منفذ التوصيل: HDMI / Audio 🔊
            </div>
          </div>
        </Place>

        {/* Practical Real-Life Examples Section */}
        <Box x={95} y={440} w={1085} h={210} c="orange" fill="orange" at={4} />
        <Place x={115} y={448} w={1045} at={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
          }}>
            <div style={{ fontSize: 16, fontWeight: 'bold', color: 'var(--pen-orange)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>💡</span>
              <span>أمثلة عملية واقعية: كيف توصل لنا أجهزة الإخراج النتائج؟</span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '10px',
              fontSize: 12.5,
              lineHeight: 1.4,
              color: 'var(--pen-ink)',
            }}>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-orange)44' }}>
                <b style={{ color: 'var(--pen-orange)' }}>1️⃣ عرض ناتج العملية الحسابية:</b>
                <div style={{ marginTop: 3 }}>
                  لما تكتب عملية حسابية والكمبيوتر يعالجها ➔ يعرض لك الناتج مرئياً على <b>الشاشة</b>.
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-orange)44' }}>
                <b style={{ color: 'var(--pen-orange)' }}>2️⃣ طباعة مستند ورقي:</b>
                <div style={{ marginTop: 3 }}>
                  لما تحتاج نسخة مادية من تقريرك أو ملفك ➔ تطبعه كنسخة ورقية عبر <b>الطابعة</b>.
                </div>
              </div>
              <div style={{ background: 'var(--surface)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-orange)44' }}>
                <b style={{ color: 'var(--pen-orange)' }}>3️⃣ سماع الصوت والفيديو:</b>
                <div style={{ marginTop: 3 }}>
                  لما تشغل مقطع فيديو أو تنبيهاً ➔ تسمع الصوت والمؤثرات عبر <b>السماعات</b>.
                </div>
              </div>
            </div>
            <div style={{
              marginTop: 4,
              padding: '3px 10px',
              background: 'var(--tint-orange)',
              borderRadius: 6,
              color: 'var(--pen-orange)',
              fontWeight: 'bold',
              fontSize: 12,
              textAlign: 'center',
            }}>
              إذن جهاز الإخراج هو الوسيلة التي يستخدمها الكمبيوتر ليوصل لنا المعلومات والنتائج 📤
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },
];
