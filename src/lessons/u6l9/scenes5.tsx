// Board scenes · Unit 6 · Lesson 9 · The LATCH Principle (Location, Alphabet, Time, Category, Hierarchy)
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part5: FrameDef[] = [
  {
    id: 'latch-intro',
    title: 'مبدأ LATCH لتنظيم البيانات والمعلومات',
    scene: true,
    notes: (
      <>
        <p><b>يعني إيه LATCH؟</b></p>
        <p>هو مبدأ شهير نستخدمه لتنظيم البيانات والمعلومات بطريقة تجعل المستخدم يصل للمعلومة التي يريدها بسهولة وسرعة فائقة.</p>
        <p>كلمة <b>LATCH</b> تتكون من أول حروف خمس طرق عالمية لتنظيم أي بيانات في الدنيا:</p>
        <ol>
          <li><b>L - Location (الموقع):</b> حسب المكان الجغرافي.</li>
          <li><b>A - Alphabet (الترتيب الأبجدي):</b> حسب الحروف الهجائية.</li>
          <li><b>T - Time (الوقت):</b> حسب التسلسل الزمني.</li>
          <li><b>C - Category (الفئة):</b> حسب النوع أو الصفات المشتركة.</li>
          <li><b>H - Hierarchy (التسلسل الهرمي):</b> حسب المستوى أو الأهمية.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="النظرية العالمية الأشهر في تنظيم وهندسة المعلومات: الحروف الخمسة السحرية">
          مبدأ LATCH الخماسي لتنظيم البيانات والمعلومات 🗂️✨
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              يعني إيه مبدأ LATCH؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              مبدأ عالمي نستخدمه لتنظيم البيانات والمعلومات بطريقة تخلي المستخدم يوصل للمعلومة بسهولة!
            </span>
          </div>
        </Box>

        {/* 5 Letters Grid across 1160px */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 220,
            width: 1160,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '14px',
            direction: 'rtl',
            pointerEvents: 'auto',
          }}
        >
          {[
            { letter: 'L', name: 'Location', ar: 'الموقع', q: 'فين؟', icon: '📍', color: 'blue', desc: 'حسب المكان الجغرافي' },
            { letter: 'A', name: 'Alphabet', ar: 'الأبجدية', q: 'اسمه بيبدأ بإيه؟', icon: '🔤', color: 'green', desc: 'حسب الحروف الهجائية' },
            { letter: 'T', name: 'Time', ar: 'الوقت', q: 'إمتى؟', icon: '⏰', color: 'orange', desc: 'حسب التسلسل الزمني' },
            { letter: 'C', name: 'Category', ar: 'الفئة', q: 'نوعه إيه؟', icon: '📚', color: 'purple', desc: 'حسب النوع والمجموعات' },
            { letter: 'H', name: 'Hierarchy', ar: 'الهرمية', q: 'مستواه إيه؟', icon: '👑', color: 'red', desc: 'حسب المستوى والأهمية' },
          ].map(item => (
            <div
              key={item.letter}
              style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: `2px solid var(--pen-${item.color})`,
                borderRadius: '16px',
                padding: '20px 12px',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: 32, fontWeight: 'black', color: `var(--pen-${item.color})`, fontFamily: 'monospace' }}>
                  {item.letter}
                </div>
                <div style={{ fontSize: 32, margin: '4px 0' }}>{item.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: `var(--pen-${item.color})` }}>
                  {item.ar}
                </div>
                <div style={{ fontSize: 11, color: '#94a3b8', direction: 'ltr', fontFamily: 'monospace', marginBottom: 8 }}>
                  {item.name}
                </div>
                <div style={{ fontSize: 12.5, color: '#f8fafc', lineHeight: 1.4 }}>
                  {item.desc}
                </div>
              </div>
              <div style={{ marginTop: 10, padding: '4px 8px', borderRadius: '8px', backgroundColor: `rgba(255,255,255,0.06)`, color: `var(--pen-${item.color})`, fontWeight: 'bold', fontSize: 13 }}>
                السؤال: {item.q}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={2}>
          🌟 <b>القاعدة الذهبية:</b> أي بيانات أو معلومات في الكون لا تخرج طرق تنظيمها عن أحرف <b>L·A·T·C·H</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'latch-location-alphabet',
    title: '١ · الموقع (Location) و ٢ · الترتيب الأبجدي (Alphabet)',
    scene: true,
    notes: (
      <>
        <p><b>1. الموقع (Location):</b> يعني ننظم البيانات حسب المكان الجغرافي. (افتكر: الموقع = فين؟). مثال: فروع مكتبة في مصر (القاهرة، الإسكندرية، الشرقية، الدقهلية).</p>
        <p><b>2. الترتيب الأبجدي (Alphabet):</b> يعني ننظم البيانات حسب الحروف الأبجدية. (افتكر: الأبجدية = ترتيب الحروف). مثال: أسماء الطلاب (أحمد، إبراهيم، خالد، محمد، يوسف).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الطريقة الأولى والثانية من مبدأ LATCH: المكان والحروف الهجائية">
          ١ · الموقع (Location) 📍 و ٢ · الترتيب الأبجدي (Alphabet) 🔤
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              كيف يجد المستخدم ما يريده اعتماداً على <b>مكانه الجغرافي</b> أو <b>اسمه الأبجدي؟</b>
            </span>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side */}
        {/* Right Card: Location */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  📍 ١ · الموقع – Location
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                  حسب الجغرافيا
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تنظيم البيانات حسب المكان الجغرافي ليجد المستخدم أقرب نقطة له بسهولة."
              </div>

              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-700/60" style={{ fontSize: 13, lineHeight: 1.6, color: '#bae6fd' }}>
                🗺️ <b>مثال فروع مكتبة في مصر (حسب المحافظة):</b>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: 4, color: '#ffffff' }}>
                  <div>• القاهرة</div>
                  <div>• الإسكندرية</div>
                  <div>• الشرقية</div>
                  <div>• الدقهلية</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>لو عايز أقرب فرع هتوصله فوراً!</span>
              <span className="p-1 px-3 rounded bg-blue-500/20 text-blue-300 font-bold text-xs">افتكر: الموقع = فين؟</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Alphabet */}
        <Box x={60} y={215} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🔤 ٢ · الترتيب الأبجدي – Alphabet
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  حسب الحروف
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تنظيم البيانات حسب الحروف الأبجدية للوصول السريع لأي عنصر بالاسم."
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/60" style={{ fontSize: 13, lineHeight: 1.6, color: '#86efac' }}>
                📋 <b>مثال كشف أسماء الطلاب (أبجدياً):</b>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginTop: 4, color: '#ffffff' }}>
                  <div>• أحمد (أ)</div>
                  <div>• إبراهيم (إ)</div>
                  <div>• خالد (خ)</div>
                  <div>• محمد (م)</div>
                  <div>• يوسف (ي)</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>ترتيب الحروف يسهل البحث في القوائم الضخمة!</span>
              <span className="p-1 px-3 rounded bg-emerald-500/20 text-emerald-300 font-bold text-xs">افتكر: الأبجدية = ترتيب الحروف</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> هل ترتب محافظات ومدناً؟ ➔ <b>Location (فين؟)</b> | هل ترتب قاموساً وأسماء طلاب؟ ➔ <b>Alphabet (الحروف)</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'latch-time-category',
    title: '٣ · الوقت (Time) و ٤ · الفئة (Category)',
    scene: true,
    notes: (
      <>
        <p><b>3. الوقت (Time):</b> تنظيم البيانات حسب الوقت أو التسلسل الزمني. (افتكر: الوقت = إمتى؟). مثال: جدول الحصص (الحصة الأولى: برمجة، الثانية: رياضيات، الثالثة: علوم)، أو ترتيب الأحداث من الأقدم للأحدث.</p>
        <p><b>4. الفئة (Category):</b> تجميع البيانات في مجموعات حسب النوع أو الصفات المشتركة. (افتكر: الفئة = نوعها إيه؟). مثال: تقسيم مكتبة الكتب إلى كتب علوم، رياضيات، تاريخ، ولغات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الطريقة الثالثة والرابعة من مبدأ LATCH: التوقيت الزمني والتصنيف النوعي">
          ٣ · الوقت (Time) ⏰ و ٤ · الفئة (Category) 📚
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              متى نعتمد على <b>عقارب الساعة والتاريخ</b>، ومتى نجمع العناصر في <b>مجموعات حسب نوعها؟</b>
            </span>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side */}
        {/* Right Card: Time */}
        <Box x={660} y={215} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ⏰ ٣ · الوقت – Time
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  التسلسل الزمني
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تنظيم البيانات حسب الوقت أو الترتيب التاريخي من الأقدم للأحدث."
              </div>

              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/60" style={{ fontSize: 13, lineHeight: 1.6, color: '#fef08a' }}>
                📅 <b>مثال جدول الحصص اليومي للمدرسة:</b>
                <div style={{ marginTop: 4, color: '#ffffff' }}>
                  • <b>الحصة الأولى:</b> برمجة وتكنولوجيا.<br />
                  • <b>الحصة الثانية:</b> رياضيات.<br />
                  • <b>الحصة الثالثة:</b> علوم وفيزياء.<br />
                  • <b>أو ترتيب الأحداث:</b> جدول مواعيد رحلات القطار والطائرات.
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>التسلسل الزمني يمنع التضارب في المواعيد!</span>
              <span className="p-1 px-3 rounded bg-amber-500/20 text-amber-300 font-bold text-xs">افتكر: الوقت = إمتى؟</span>
            </div>
          </div>
        </Box>

        {/* Left Card: Category */}
        <Box x={60} y={215} w={580} h={365} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  📚 ٤ · الفئة – Category
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  النوع والصفات المشتركة
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تجميع البيانات في مجموعات وأقسام حسب النوع أو الصفات المشتركة بينها."
              </div>

              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-700/60" style={{ fontSize: 13, lineHeight: 1.6, color: '#f3e8ff' }}>
                📖 <b>مثال تقسيم رفوف مكتبة الكتب:</b>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px', marginTop: 4, color: '#ffffff' }}>
                  <div>• كتب علوم (Science)</div>
                  <div>• كتب رياضيات (Math)</div>
                  <div>• كتب تاريخ (History)</div>
                  <div>• كتب لغات (Languages)</div>
                </div>
                <div style={{ marginTop: 4, fontSize: 12, color: '#e9d5ff' }}>بدل ما تكون كل الكتب مختلطة مع بعضها بلا تصنيف!</div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 }}>
              <span style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>الفئات تجمع المتشابهات معاً في قسم واحد!</span>
              <span className="p-1 px-3 rounded bg-purple-500/20 text-purple-300 font-bold text-xs">افتكر: الفئة = نوعها إيه؟</span>
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> هل ترتب جدول مواعيد أو تاريخاً؟ ➔ <b>Time (إمتى؟)</b> | هل تصنف منتجات متجر أو كتب مكتبة؟ ➔ <b>Category (نوعها إيه؟)</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'latch-hierarchy',
    title: '٥ · التسلسل الهرمي (Hierarchy) في مبدأ LATCH',
    scene: true,
    notes: (
      <>
        <p><b>5. التسلسل الهرمي (Hierarchy):</b> تنظيم البيانات حسب المستوى أو الدرجة أو الأهمية.</p>
        <p><b>افتكر:</b> الهرمية = مين أعلى ومين أقل؟</p>
        <p><b>مثال:</b> الهيكل الإداري للمدرسة: مدير المدرسة ➔ وكيل المدرسة ➔ المعلمون ➔ الطلاب. كل مستوى له موقعه في الهيكل التنظيمي.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الطريقة الخامسة والأخيرة من مبدأ LATCH: ترتيب الأهمية والمستويات">
          ٥ · التسلسل الهرمي – Hierarchy 👑 (مين أعلى ومين أقل؟)
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ما هو التسلسل الهرمي (Hierarchy)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "تنظيم البيانات حسب المستوى أو الدرجة أو الأهمية لتحديد الصلاحيات والرتب بدقة."
            </span>
          </div>
        </Box>

        {/* 2 Big Cards: Definition & School Admin Tree */}
        {/* Right: Definition & Real-world context */}
        <Box x={660} y={215} w={560} h={365} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  👑 مفهوم الهرمية ومستويات الأهمية
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  من الأعلى للأدنى
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                عندما تكون العناصر غير متساوية في الرتبة أو الأهمية، يكون <b>التسلسل الهرمي</b> هو الحل الوحيد!
                <br /><br />
                • يبدأ بالعنصر الأكبر أو الأكثر أهمية في قمة الهرم، ويتدرج نزولاً حتى المستويات الفرعية.
              </div>

              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-700/60" style={{ fontSize: 13, color: '#f3e8ff' }}>
                💡 <b>استخدامات أخرى:</b> ترتيب الملفات بالأحجام (من الأكبر للأصغر)، أو أسعار المنتجات (من الأغلى للأرخص).
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              افتكر دائماً: الهرمية = مين أعلى ومين أقل؟
            </div>
          </div>
        </Box>

        {/* Left: School Administrative Hierarchy */}
        <Box x={60} y={215} w={580} h={365} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  👔 الهيكل الإداري للمدرسة (المثال الرسمي)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-red)' }}>
                  الهرم التنظيمي
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '6px 0' }}>
                <div className="p-2 rounded-lg bg-red-950/60 border border-red-600 text-center font-bold" style={{ width: '80%', color: '#fca5a5', fontSize: 13 }}>
                  👔 مدير المدرسة (المستوى 1: رأس الهرم)
                </div>
                <div style={{ color: 'var(--pen-red)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  📋 وكيل المدرسة (المستوى 2)
                </div>
                <div style={{ color: 'var(--pen-red)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  👨‍🏫 المعلمون (المستوى 3)
                </div>
                <div style={{ color: 'var(--pen-orange)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-600 text-center font-bold" style={{ width: '80%', color: '#fef08a', fontSize: 13 }}>
                  🎒 الطلاب (المستوى 4)
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold' }}>
              كل مستوى له وزنه وموقعه الواضح داخل الهيكل المدرسي!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> هل تنظم حسب الرتبة أو الأهمية أو الحجم؟ ➔ <b>Hierarchy (الهرمية)</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'latch-summary-table',
    title: 'ملخص مبدأ LATCH بطريقة سهلة للامتحان',
    scene: true,
    notes: (
      <>
        <p><b>ملخص LATCH بطريقة سهلة:</b></p>
        <p>L = Location (الموقع) ➔ فين؟</p>
        <p>A = Alphabet (الأبجدية) ➔ اسمه بيبدأ بإيه؟</p>
        <p>T = Time (الوقت) ➔ إمتى؟</p>
        <p>C = Category (الفئة) ➔ نوعه إيه؟</p>
        <p>H = Hierarchy (الهرمية) ➔ مستواه إيه؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="جدول الحفظ الذهبي للربط بين الحرف والطريقة والسؤال الاسترشادي">
          ملخص مبدأ LATCH بطريقة سهلة للطلاب 🗂️🏆
        </Heading>

        {/* Master LATCH Table */}
        <Box x={60} y={115} w={1160} h={465} c="purple" fill="purple" at={1}>
          <div style={{ padding: '16px 24px', direction: 'rtl', height: '100%', boxSizing: 'border-box' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '15px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--pen-purple)', color: 'var(--pen-purple)', fontSize: '17px' }}>
                  <th style={{ padding: '10px 14px', width: '15%', textAlign: 'center' }}>الحرف</th>
                  <th style={{ padding: '10px 14px', width: '40%' }}>طريقة التنظيم</th>
                  <th style={{ padding: '10px 14px' }}>السؤال اللي نفتكره؟ (مفتاح الحل)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { l: 'L', name: 'Location – الموقع', q: 'فين؟', desc: 'حسب المكان الجغرافي (فروع المحافظات)', color: '#38bdf8' },
                  { l: 'A', name: 'Alphabet – الأبجدية', q: 'اسمه بيبدأ بإيه؟', desc: 'حسب الحروف الهجائية (كشف الطلاب)', color: '#4ade80' },
                  { l: 'T', name: 'Time – الوقت', q: 'إمتى؟', desc: 'حسب الوقت والتسلسل الزمني (جدول الحصص)', color: '#fb923c' },
                  { l: 'C', name: 'Category – الفئة', q: 'نوعه إيه؟', desc: 'حسب النوع والمجموعات المشتركة (رفوف المكتبة)', color: '#c084fc' },
                  { l: 'H', name: 'Hierarchy – الهرمية', q: 'مستواه إيه؟ (مين أعلى ومين أقل؟)', desc: 'حسب المستوى أو الأهمية (الهيكل الإداري للمدرسة)', color: '#f87171' },
                ].map((row, idx) => (
                  <tr key={row.l} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                    <td style={{ padding: '12px 14px', fontWeight: 'black', fontSize: '22px', color: row.color, textAlign: 'center', fontFamily: 'monospace' }}>
                      {row.l}
                    </td>
                    <td style={{ padding: '12px 14px', fontWeight: 'bold', color: row.color, fontSize: '16px' }}>
                      {row.name}
                      <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 'normal', marginTop: '2px' }}>{row.desc}</div>
                    </td>
                    <td style={{ padding: '12px 14px', color: '#ffffff', fontWeight: 'bold', fontSize: '17px' }}>
                      👉 {row.q}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={2}>
          🌟 <b>احفظها للدرجة النهائية:</b> كلمة <b>LATCH</b> تجمع لك أسرار تنظيم المعلومات في العالم!
        </Box>
      </Scene>
    ),
  },
];
