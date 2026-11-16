// Board scenes · Unit 4 · Lesson 2 · Cover, Journey, UCD Philosophy, Case Study, and User Persona
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'الربط وقصة موقع المدرسة',
  'المفاهيم الستة الأساسية',
  'فلسفة التصميم (UCD)',
  'شخصية المستخدم (Persona)',
  'المخطط الهيكلي (Wireframe)',
  'استوديو التخطيط المعماري',
  'مبادئ التصميم (CRAP)',
  'بنك أسئلة المنهج المعتمد',
];

const STOP_PTS: [number, number][] = [
  [1050, 350], [800, 350], [550, 350], [300, 350],
  [300, 570], [550, 570], [800, 570], [1050, 570],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف الرسمي للدرس',
    scene: true,
    notes: (
      <>
        <p><b>الدرس الثاني من الوحدة الرابعة: تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية (بكالوريا 2027).</b></p>
        <p><b>الأهداف المعتمدة في المنهج المعتمد:</b></p>
        <ol>
          <li>استيعاب مفهوم التصميم المتمحور حول المستخدم (User-Centered Design - UCD).</li>
          <li>بناء وفهم شخصية المستخدم (User Persona) وعناصرها الأربعة.</li>
          <li>رسم المخطط الهيكلي (Wireframe) كمسودة معمارية وفهم سبب تصميمه بالأبيض والأسود.</li>
          <li>إتقان مبادئ التصميم البصري الأربعة (CRAP Principles): التباين، التكرار، المحاذاة، التقارب.</li>
          <li>تحقيق سهولة الوصول الشامل (Accessibility - a11y) لكافة فئات المجتمع.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={28} c="purple">الصف الثاني الثانوي · بكالوريا · الوحدة الرابعة · الدرس (2)</Txt>
        <Txt x={640} y={220} size={50}>تصميم المعلومات وتجربة المستخدم للمواقع</Txt>
        <Underline x={230} y={270} w={820} c="green" />
        <Txt x={640} y={335} size={28} c="blue">Information Design & Website User Experience (UX/UI)</Txt>

        {[
          ['🥦', 'متجر المنتجات'],
          ['👤', 'شخصية المستخدم'],
          ['📐', 'المخطط الهيكلي'],
          ['🎨', 'مبادئ CRAP'],
          ['♿', 'سهولة الوصول'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1080 - i * 220}
            y={505}
            icon={icon}
            size={85}
            label={label}
            lsize={18}
            lc="blue"
            at={1}
            delay={i * 0.2}
          />
        ))}
      </Scene>
    ),
  },

  {
    id: 'journey',
    title: 'خريطة رحلة الدرس',
    scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في الدرس الثاني (المنهج المعتمد):</b> ثماني محطات أساسية تربط النظرية بالتطبيق العملي في الامتحانات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المحطات التعليمية المعتمدة لدرس تصميم المعلومات وتجربة المستخدم">
          خريطة رحلة الدرس: من دراسة الحالة إلى بنك الامتحانات 🗺️
        </Heading>
        <Box x={120} y={150} w={1040} h={95} c="green" fill="green" size={24} tc="ink">
          ❓ السؤال المحوري: كيف نخطط للموقع وننظم محتواه حتى يحقق أهدافه وأهداف المستخدمين في آنٍ واحد؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={18}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },

  {
    id: 'bridge-and-story',
    title: 'فكرة الدرس: الربط وقصة موقع المدرسة',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: فكرة الدرس والربط بالدرس الأول:</b></p>
        <p>في الدرس الأول اتكلمنا عن اختيار الوسيط المناسب لتوصيل المعلومات، وعرفنا إن اختيار طريقة العرض بيتوقف على ركنين:</p>
        <ul>
          <li><b>هدف المحتوى (Content Goal):</b> إحنا عايزين نوصل إيه؟</li>
          <li><b>الجمهور المستهدف (Target Audience):</b> بنوجه الكلام لمين؟</li>
        </ul>
        <p>يعني لو عايزين نعرض معلومات المدرسة، ممكن نستخدم موقع إلكتروني، فيديو، أو عرض تقديمي حسب الهدف والجمهور.</p>
        <p><b>السؤال المحوري:</b> لو قررنا إن أفضل وسيلة هي موقع إلكتروني، هل كده خلصنا؟</p>
        <p><b>لأ، هنا بيظهر السؤال الأهم:</b> إزاي نصمم الموقع بحيث يكون منظم وسهل الاستخدام، وكل شخص يقدر يوصل للمعلومة اللي محتاجها بسهولة؟</p>
        <p><b>قصة ولي الأمر:</b> تخيّل ولي أمر دخل موقع المدرسة علشان يعرف درجات ابنه، لقى الصفحة مليانة معلومات وأزرار وإعلانات ومش عارف يبدأ منين!</p>
        <p><b>الخلاصة الذهبية:</b> «المشكلة هنا مش في المعلومات نفسها، لكن في طريقة تنظيمها وعرضها للمستخدم!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="من اختيار الوسيط في الدرس الأول إلى هندسة وتصميم تجربة المستخدم">
          فكرة الدرس والربط بالدرس الأول: قصة موقع المدرسة 🏫
        </Heading>

        {/* Top Question Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ❓ السؤال المحوري:
            </span>
            &nbsp;
            <span style={{ fontSize: 19, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              لو قررنا أن أفضل وسيلة لعرض المعلومات هي موقع إلكتروني.. هل كده خلصنا؟
            </span>
            <div style={{ fontSize: 15, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 4 }}>
              لأ! كيف نصمم الموقع ليكون منظماً وسهل الاستخدام وكل شخص يصل للمعلومة التي يحتاجها دون عناء وتشتيت؟
            </div>
          </div>
        </Box>

        {/* Middle Section: 2 Big Comparison Cards Side-by-Side (RTL) */}
        {/* Right Card: Link to Lesson 1 */}
        <Box x={660} y={215} w={560} h={365} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  ١ · الربط بالدرس الأول (اختيار الوسيط)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  الوحدة ٤ · درس ١
                </span>
              </div>

              <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55, marginBottom: 10 }}>
                عرفنا في الدرس الأول أن اختيار طريقة عرض المعلومات يتوقف على ركنين أساسيين:
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#38bdf8' }}>🎯 هدف المحتوى (Content Goal):</b>
                  <br />
                  إحنا عايزين نوصل إيه للناس بالضبط؟
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#4ade80' }}>👥 الجمهور المستهدف (Target Audience):</b>
                  <br />
                  إحنا بنوجه الكلام والبيانات لمين؟
                </div>
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginTop: 8, lineHeight: 1.45 }}>
                • لعرض معلومات المدرسة، يمكن استخدام <b>موقع ويب، فيديو، أو عرض تقديمي</b> حسب الهدف والجمهور.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              القرار: اخترنا الموقع الإلكتروني ➔ تبدأ مهمة الدرس الثاني!
            </div>
          </div>
        </Box>

        {/* Left Card: School Parent Story */}
        <Box x={60} y={215} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ٢ · قصة ولي الأمر في موقع المدرسة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  الموقف الواقعي
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 text-xs" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                👨‍💼 <b>تخيّل هذا الموقف:</b>
                <br />
                دخل ولي أمر موقع المدرسة بهدف محدد: <b>معرفة درجات ابنه في الاختبار</b>.
                <br />
                لكنه فوجئ بأن الصفحة مليانة إعلانات وأزرار عشوائية وأخبار غير مهمة.. ومش عارف يبدأ منين!
              </div>

              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/60 text-xs" style={{ fontSize: 14, lineHeight: 1.5, color: '#fef08a' }}>
                💡 <b>الاستنتاج الحاسم في تجربة المستخدم:</b>
                <div style={{ fontWeight: 'black', fontSize: 15, color: '#ffffff', marginTop: 4 }}>
                  «المشكلة هنا مش في المعلومات نفسها، لكن في طريقة تنظيمها وعرضها للمستخدم!»
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              المعلومات متوفرة، لكن سوء التنظيم حجبها عن المستخدم!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={18} tc="ink" at={4}>
          🌟 <b>الخلاصة:</b> الدرس الأول ساعدنا نختار الوسيط المناسب لتوصيل المعلومات، والدرس الثاني يعلمنا كيف نصمم الموقع وننظم معلوماته ليكون مناسباً للمستخدم وسهل التعامل معه!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'six-core-concepts',
    title: 'المفاهيم الستة الأساسية لتجربة المستخدم',
    scene: true,
    notes: (
      <>
        <p><b>ثانياً: الدرس بيتكلم عن إيه؟ (المفاهيم الستة المعتمدة):</b></p>
        <p>الدرس بيتكلم عن إزاي نصمم المعلومات داخل الموقع الإلكتروني وننظم عناصر الصفحة بحيث تناسب احتياجات المستخدم وتكون سهلة وواضحة في الاستخدام.</p>
        <ol>
          <li><b>شخصية المستخدم (User Persona):</b> علشان نفهم مين المستخدم وإيه احتياجاته وأهدافه وسلوكه.</li>
          <li><b>المخطط الهيكلي (Wireframe):</b> علشان نحدد أماكن العناصر وأولويات المعلومات بمسودة رمادية قبل التصميم النهائي.</li>
          <li><b>مبادئ CRAP:</b> علشان ننظم الشكل البصري للصفحة باستخدام التباين (Contrast) والتكرار (Repetition) والمحاذاة (Alignment) والتقارب (Proximity).</li>
          <li><b>التصميم المتمحور حول المستخدم (User-Centered Design - UCD):</b> علشان تكون احتياجات المستخدم الحقيقية هي أساس كل قرارات التصميم.</li>
          <li><b>قابلية الاستخدام (Usability):</b> علشان نعرف هل المستخدم يقدر ينجز المهمة (مثل معرفة الدرجات) بسهولة وفاعلية وسرعة؟</li>
          <li><b>إمكانية الوصول الرقمي (Digital Accessibility - a11y):</b> علشان نراعي تمكين الأشخاص ذوي الإعاقة وكبار السن من استخدام الموقع والتفاعل معه.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفاهيم المقررة في المنهج التي تحول الموقع من فوضى مشتتة إلى تجربة ناجحة وسهلة">
          ثانياً: خريطة المفاهيم الستة لتصميم المعلومات وتجربة المستخدم 📚
        </Heading>

        {/* 6 Grid Cards: Row 1 */}
        {/* Card 1: Persona */}
        <Box x={860} y={115} w={360} h={240} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 4 }}>
                👤 ١ · شخصية المستخدم
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold', marginBottom: 6 }}>
                User Persona
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان نفهم <b>مين المستخدم</b>، وما هي أهدافه، واحتياجاته، وتوقعاته، وسلوكه، وسياق استخدامه للموقع.
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الأساس: معرفة الزائر قبل التصميم
            </div>
          </div>
        </Box>

        {/* Card 2: Wireframe */}
        <Box x={460} y={115} w={360} h={240} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 4 }}>
                📐 ٢ · المخطط الهيكلي
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', marginBottom: 6 }}>
                Wireframe Blueprint
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان نحدد <b>أماكن العناصر وأولويات المعلومات</b> بمسودة رمادية بالأبيض والأسود قبل التلوين والتصميم النهائي.
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              المسودة المعمارية للبناء الرقمي
            </div>
          </div>
        </Box>

        {/* Card 3: CRAP */}
        <Box x={60} y={115} w={360} h={240} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 4 }}>
                🎨 ٣ · مبادئ CRAP الأربعة
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold', marginBottom: 6 }}>
                CRAP Principles
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان ننظم <b>الشكل البصري للصفحة</b> باستخدام: التباين (Contrast)، التكرار (Repetition)، المحاذاة (Alignment)، والتقارب (Proximity).
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              قواعد الإخراج البصري الجذاب
            </div>
          </div>
        </Box>

        {/* 6 Grid Cards: Row 2 */}
        {/* Card 4: UCD */}
        <Box x={860} y={375} w={360} h={240} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 4 }}>
                🧠 ٤ · التصميم المتمحور حول المستخدم
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold', marginBottom: 6 }}>
                User-Centered Design (UCD)
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان تكون <b>احتياجات وسلوكيات المستخدم الحقيقي</b> هي أساس ومنطلق كل قرارات التصميم والبرمجة.
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              «نحن لا نصمم لأنفسنا بل للمستخدمين»
            </div>
          </div>
        </Box>

        {/* Card 5: Usability */}
        <Box x={460} y={375} w={360} h={240} c="blue" fill="blue" at={5}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 4 }}>
                ⚡ ٥ · قابلية الاستخدام
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold', marginBottom: 6 }}>
                Usability
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان نتأكد: هل المستخدم يقدر <b>ينجز مهمته (مثل معرفة الدرجات أو الشراء) بسهولة وفاعلية وسرعة</b> ودون أخطاء؟
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              السرعة والكفاءة والسهولة للجميع
            </div>
          </div>
        </Box>

        {/* Card 6: Accessibility */}
        <Box x={60} y={375} w={360} h={240} c="purple" fill="purple" at={6}>
          <div style={{ textAlign: 'right', padding: '12px 14px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 4 }}>
                ♿ ٦ · إمكانية الوصول الرقمي
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', marginBottom: 6 }}>
                Digital Accessibility (a11y)
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-ink)', lineHeight: 1.5 }}>
                علشان نراعي <b>تمكين الأشخاص ذوي الإعاقة وكبار السن</b> من استخدام الموقع والتفاعل معه (كالنص البديل والتباين العالي).
              </div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الشمولية وعدم استبعاد أي فئة
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={630} w={1160} h={60} c="pink" fill="pink" size={17} tc="ink" at={7}>
          🎯 <b>الهدف الأسمى للمنهج:</b> هذه المفاهيم الستة تعمل معاً لضمان أن يجد الزائر مبتغاه في أقل من ثلاث ثوانٍ دون تشتيت!
        </Box>
      </Scene>
    ),
  },
];

export const personaIntroFrames: FrameDef[] = [
  {
    id: 'persona-concept-intro',
    title: '١ · ما هي شخصية المستخدم ومثال المدرسة',
    scene: true,
    notes: (
      <>
        <p><b>أولاً: شخصية المستخدم (User Persona):</b></p>
        <p><b>السؤال المحوري قبل التصميم:</b> مين الشخص اللي هيستخدم الموقع؟ وإيه اللي محتاجه منه؟ لأن الموقع اللي بنصممه للطلاب مش بالضرورة يناسب أولياء الأمور أو المدرسين.</p>
        <p><b>تعريف الكتاب:</b> هي تمثيل لنوع من المستخدمين، يُبنى قدر الإمكان على بحث أو بيانات عن أهدافهم واحتياجاتهم وسلوكهم وسياقهم وتحدياتهم.</p>
        <p><b>الأسئلة الخمسة لفهم المستخدم:</b> هو مين؟ عايز يحقق إيه؟ محتاج إيه؟ بيستخدم الموقع في ظروف إيه؟ وإيه الصعوبات اللي ممكن تقابله؟</p>
        <p><b>مثال موقع المدرسة:</b> اختلاف احتياجات الطالب (جدول وواجبات ودرجات) عن ولي الأمر (متابعة درجات ابنه) عن المعلم (إضافة واجبات ورصد درجات).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المفهوم الأول: السؤال الأساسي قبل التصميم والأسئلة الخمسة ومثال موقع المدرسة">
          ١ · شخصية المستخدم (User Persona): المفهوم ومثال المدرسة 👤
        </Heading>

        {/* Top Question Banner */}
        <Box x={50} y={105} w={1180} h={80} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ❓ السؤال الجوهري قبل تصميم أي موقع:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              «مين الشخص اللي هيستخدم الموقع؟ وإيه اللي هو محتاجه منه؟»
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 4 }}>
              لأن الموقع اللي بنصممه للطلاب مش بالضرورة يكون مناسب بنفس الطريقة لأولياء الأمور أو المدرسين!
            </div>
          </div>
        </Box>

        {/* Right Box: Definition & 5 Questions */}
        <Box x={660} y={195} w={570} h={410} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  📖 ١ · يعني إيه شخصية المستخدم (Persona)؟
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  المنهج المعتمد
                </span>
              </div>

              {/* Textbook definition */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.5, color: '#fef08a' }}>
                <b style={{ color: '#38bdf8' }}>📌 تعريف الكتاب:</b>
                <br />
                «هي تمثيل لنوع من المستخدمين، يُبنى قدر الإمكان على بحث أو بيانات عن أهدافهم واحتياجاتهم وسلوكهم وسياقهم وتحدياتهم.»
              </div>

              {/* 5 Questions for Students */}
              <div style={{ fontSize: 12.5, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 4 }}>
                💡 ببساطة للطلاب: وصف لنوع الزائر علشان نفهم:
              </div>
              <div className="space-y-1 text-xs" style={{ fontSize: 12, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <div>• <b>هو مين؟</b> (نوع الشخص وفئته ومستواه).</div>
                <div>• <b>عايز يحقق إيه من الموقع؟</b> (الهدف الأساسي للزيارة).</div>
                <div>• <b>محتاج إيه؟</b> (المعلومات والأدوات والوظائف).</div>
                <div>• <b>بيستخدم الموقع في ظروف إيه؟</b> (سياق الاستخدام والموبايل).</div>
                <div>• <b>إيه الصعوبات اللي ممكن تقابله؟</b> (التحديات ونقاط الألم).</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', background: 'rgba(168, 85, 247, 0.1)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
              المبدأ: بدل ما نصمم على حسب رأينا الشخصي.. بنفهم المستخدم الأول!
            </div>
          </div>
        </Box>

        {/* Left Box: School Example */}
        <Box x={50} y={195} w={590} h={410} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  🏫 ٢ · مثال يوضح الفكرة: موقع المدرسة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  تعدد المستخدمين
                </span>
              </div>

              <div style={{ fontSize: 13, color: 'var(--pen-ink)', marginBottom: 8, lineHeight: 1.45 }}>
                تخيل إننا بنصمم موقع إلكتروني لمدرسة.. مين ممكن يستخدمه؟
              </div>

              {/* 3 User Types */}
              <div className="space-y-2 text-xs" style={{ fontSize: 12.5, lineHeight: 1.4, color: 'var(--pen-ink)' }}>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#38bdf8' }}>🎒 الطالب:</b>
                  &nbsp;عايز يعرف جدول الحصص، الواجبات المدرسية، ودرجاته.
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#f59e0b' }}>👨‍💼 ولي الأمر:</b>
                  &nbsp;عايز يتابع درجات ابنه ومستواه وأخبار المدرسة.
                </div>
                <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#4ade80' }}>👨‍🏫 المعلم:</b>
                  &nbsp;عايز يضيف الواجبات، ويسجل درجات الاختبارات، ورصد الغياب.
                </div>
              </div>

              <div className="mt-3 p-2 rounded-lg bg-amber-950/40 border border-amber-700/60" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#fef08a' }}>
                ❓ <b>هل الثلاثة عندهم نفس الاحتياجات؟</b> طبعاً لأ!<br />
                علشان كده بنحدد شخصية مستخدم لكل نوع حسب احتياجاته.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold', background: 'rgba(249, 115, 22, 0.1)', padding: '6px 10px', borderRadius: '6px', border: '1px solid rgba(249, 115, 22, 0.3)' }}>
              🌟 مثال عملي: سنختار «ولي الأمر» لندرسه بالتفصيل في الخطوة التالية!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={615} w={1180} h={65} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>الخلاصة:</b> شخصية المستخدم تنقلنا من التخمين العشوائي إلى تصميم واجهات مخصصة تلبي الأهداف الحقيقية لكل فئة!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'persona-parent-case-study',
    title: '٢ · بطاقة شخصية ولي الأمر (دراسة حالة)',
    scene: true,
    notes: (
      <>
        <p><b>شخصية المستخدم: ولي الأمر (مثال افتراضي للتوضيح):</b></p>
        <p><b>١. الهدف من استخدام الموقع:</b> متابعة درجات ابنه ومستواه الدراسي.</p>
        <p><b>٢. الاحتياجات:</b> معرفة درجات الاختبارات · متابعة الواجبات · معرفة إعلانات المدرسة.</p>
        <p><b>٣. السلوك:</b> يدخل الموقع من الموبايل · يفضل الوصول للمعلومة بسرعة.</p>
        <p><b>٤. سياق الاستخدام:</b> ممكن يستخدم الموقع في وقت قصير أثناء يومه المزدحم.</p>
        <p><b>٥. التحديات:</b> صعوبة الوصول للدرجات لو المعلومات غير منظمة · كثرة الخطوات للوصول للنتيجة.</p>
        <p><b>القاعدة المنهجية:</b> لاحظ إننا مش بنكتب معلومات لمجرد ملء نموذج؛ كل معلومة بنكتبها لازم تساعدنا نفهم المستخدم ونصمم الموقع بشكل صحيح!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="دراسة حالة عملية: بناء بطاقة المستخدم وفق المحاور الخمسة المعتمدة في المنهج">
          ٢ · دراسة حالة عملية: بطاقة شخصية ولي الأمر (School Parent Persona) 👨‍💼
        </Heading>

        {/* Top Profile Header */}
        <Box x={50} y={105} w={1180} h={80} c="blue" fill="blue" at={1}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 20px', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ fontSize: 38 }}>👨‍💼</div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  شخصية المستخدم: ولي الأمر
                </div>
                <div style={{ fontSize: 13, color: 'var(--pen-ink)', opacity: 0.9 }}>
                  مثال افتراضي للتوضيح · أب وموظف مشغول يسعى لمتابعة مستوى ابنه الدراسي
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'left' }}>
              <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(56, 189, 248, 0.15)', color: 'var(--pen-blue)', padding: '4px 10px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                School Parent Archetype
              </span>
            </div>
          </div>
        </Box>

        {/* 3 Columns for 5 Pillars */}
        {/* Right Column: Goal & Needs */}
        <Box x={850} y={195} w={380} h={410} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 22 }}>🎯</span>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  الهدف والاحتياجات
                </span>
              </div>

              {/* Goal */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <b style={{ color: '#4ade80' }}>🎯 الهدف من استخدام الموقع:</b>
                <br />
                متابعة درجات ابنه ومستواه الدراسي باستمرار والاطمئنان على تحصيله.
              </div>

              {/* Needs */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800" style={{ fontSize: 12.5, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
                <b style={{ color: '#38bdf8' }}>💡 الاحتياجات الأساسية:</b>
                <div className="mt-1 space-y-1">
                  <div>• معرفة درجات الاختبارات الشهرية والفصلية.</div>
                  <div>• متابعة الواجبات المدرسية اليومية.</div>
                  <div>• معرفة إعلانات المدرسة وأخبارها العاجلة.</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', background: 'rgba(74, 222, 128, 0.1)', padding: '6px 8px', borderRadius: '6px' }}>
              🎯 يحدد المحتوى الأساسي والصفحات المطلوبة
            </div>
          </div>
        </Box>

        {/* Center Column: Behavior & Context */}
        <Box x={450} y={195} w={380} h={410} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 22 }}>📱</span>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  السلوك وسياق الاستخدام
                </span>
              </div>

              {/* Behavior */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <b style={{ color: '#fb923c' }}>📱 سلوك المستخدم:</b>
                <div className="mt-1 space-y-1" style={{ fontSize: 12.5 }}>
                  <div>• يدخل الموقع بشكل رئيسي من الموبايل.</div>
                  <div>• يفضل الوصول للمعلومة بأقصى سرعة وأقل نقرات.</div>
                </div>
              </div>

              {/* Context */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <b style={{ color: '#f59e0b' }}>⏱️ سياق الاستخدام (Context):</b>
                <div className="mt-1" style={{ fontSize: 12.5, lineHeight: 1.45 }}>
                  ممكن يستخدم الموقع في وقت قصير أثناء استراحة يوم عمله المزدحم أو في المواصلات.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', background: 'rgba(251, 146, 60, 0.1)', padding: '6px 8px', borderRadius: '6px' }}>
              📱 يفرض التصميم المتجاوب مع الموبايل وسرعة التحميل
            </div>
          </div>
        </Box>

        {/* Left Column: Pain Points & Solution */}
        <Box x={50} y={195} w={380} h={410} c="red" fill="red" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 22 }}>⚠️</span>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  التحديات ونقاط الألم
                </span>
              </div>

              {/* Pain points */}
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <b style={{ color: '#f87171' }}>⚠️ التحديات والصعوبات:</b>
                <div className="mt-1 space-y-1" style={{ fontSize: 12.5 }}>
                  <div>• صعوبة الوصول للدرجات لو كانت المعلومات غير منظمة.</div>
                  <div>• كثرة الخطوات والنقرات للوصول لنتيجة الاختبار.</div>
                  <div>• التشتت بين إعلانات وأخبار غير هامة له.</div>
                </div>
              </div>

              {/* Design solution */}
              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-700/50" style={{ fontSize: 12.5, lineHeight: 1.45, color: '#fecaca' }}>
                <b style={{ color: '#ffffff' }}>🚀 القرار التصميمي المستنتج:</b>
                <br />
                تخصيص بطاقة بارزة فورية وزر عريض مباشر [عرض الدرجات] دون أي خطوات وسيطة!
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-red)', fontWeight: 'bold', background: 'rgba(239, 68, 68, 0.1)', padding: '6px 8px', borderRadius: '6px' }}>
              ⚠️ يحدد الأخطاء التي يجب استبعادها تماماً من الواجهة
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={618} w={1180} h={68} c="purple" fill="purple" at={5}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            📌 <b>ملاحظة منهجية حاسمة (المنهج المعتمد):</b>
            &nbsp;
            «لاحظ إننا مش بنكتب معلومات لمجرد ملء نموذج؛ كل معلومة بنكتبها لازم تساعدنا نفهم المستخدم ونصمم الموقع بشكل صحيح!»
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'persona-design-impact',
    title: '٣ · أثر شخصية المستخدم في التصميم (قبل وبعد)',
    scene: true,
    notes: (
      <>
        <p><b>إزاي نستفيد من شخصية المستخدم في التصميم؟</b></p>
        <p>بعد ما عرفنا إن ولي الأمر محتاج يتابع درجات ابنه بسرعة من الموبايل، نبدأ ناخد قرارات في تصميم الموقع:</p>
        <ol>
          <li>نخلي زر <b>عرض الدرجات</b> واضحاً وبارزاً.</li>
          <li>نخلي الوصول لصفحة النتائج سهلاً ومباشراً.</li>
          <li>نعرض اسم الطالب ودرجاته بطريقة منظمة.</li>
          <li>نقلل الخطوات المطلوبة للوصول للمعلومة.</li>
        </ol>
        <p><b>تطبيق عملي: قبل وبعد فهم المستخدم:</b></p>
        <p><b>قبل فهم المستخدم:</b> كل العناصر متشابهة وباهتة ومش واضح يبدأ منين.</p>
        <p><b>بعد فهم المستخدم:</b> بطاقة بارزة لمتابعة الطالب وزر أزرق كبير وواضح [عرض الدرجات]، المعلومة المهمة أصبحت أوضح وأسهل للوصول في ثانيتين!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تطبيق عملي: كيف تترجم صفات واحتياجات شخصية المستخدم إلى قرارات تصميمية تغير شكل الموقع تماماً">
          ٣ · أثر شخصية المستخدم في التصميم: مقارنة قبل وبعد ⚖️
        </Heading>

        {/* Top 4 Decisions Banner */}
        <Box x={50} y={105} w={1180} h={82} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'right', padding: '6px 16px', whiteSpace: 'normal', lineHeight: 1.4 }}>
            <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 2 }}>
              🎯 بعد ما عرفنا إن ولي الأمر محتاج يتابع درجات ابنه بسرعة من الموبايل ➔ اتخذنا ٤ قرارات تصميمية حاسمة:
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12.5, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              <span>١. نخلي زر <b>عرض الدرجات</b> واضحاً وبارزاً.</span>
              <span>٢. نخلي الوصول لصفحة النتائج سهلاً ومباشراً.</span>
              <span>٣. نعرض اسم الطالب ودرجاته بطريقة منظمة.</span>
              <span>٤. نقلل الخطوات المطلوبة للوصول للمعلومة.</span>
            </div>
          </div>
        </Box>

        {/* Middle Section: Side-by-Side Visual Mockups */}
        {/* Right Mockup: Before (Messy) */}
        <Box x={660} y={197} w={570} h={410} c="red" fill="red" at={2}>
          <div style={{ textAlign: 'right', padding: '12px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  ❌ قبل فهم المستخدم (عشوائي ومتطابق)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '4px' }}>
                  تشتيت وحيرة
                </span>
              </div>

              {/* Simulated UI Window */}
              <div className="rounded-lg bg-slate-950 border border-slate-800 p-3 mb-2">
                <div style={{ fontSize: 11, color: '#94a3b8', borderBottom: '1px solid #334155', paddingBottom: 4, marginBottom: 8 }}>
                  موقع المدرسة
                </div>
                {/* Identical grey links */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  {['عن المدرسة', 'أخبار المدرسة', 'الأنشطة', 'الخدمات', 'الطلاب', 'تواصل معنا', 'النتائج', 'الشكاوى'].map((item) => (
                    <div key={item} className="p-2 rounded bg-slate-800/80 border border-slate-700 text-slate-400" style={{ fontSize: 11 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-red-950/40 border border-red-700/50" style={{ fontSize: 12, lineHeight: 1.45, color: '#fecaca' }}>
                ⚠️ <b>المشكلة:</b> كل العناصر متشابهة، باهتة، ومش واضح يبدأ منين! ولي الأمر يضيع وقته باحثاً عن درجات ابنه وسط زحمة الروابط المتكدسة.
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-red)', fontWeight: 'bold' }}>
              رسم توضيحي للفكرة · تجربة مستخدم سيئة ومحبطة
            </div>
          </div>
        </Box>

        {/* Left Mockup: After (Persona-Driven) */}
        <Box x={50} y={197} w={590} h={410} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '12px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  ✅ بعد فهم المستخدم (تصميم موجه بالـ Persona)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(74, 222, 128, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '4px' }}>
                  وضوح وسرعة
                </span>
              </div>

              {/* Simulated UI Window */}
              <div className="rounded-lg bg-slate-950 border border-slate-800 p-3 mb-2">
                <div style={{ fontSize: 11, color: '#38bdf8', borderBottom: '1px solid #334155', paddingBottom: 4, marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>موقع المدرسة</span>
                  <span style={{ color: '#94a3b8' }}>بوابة ولي الأمر</span>
                </div>

                {/* Hero Action Card */}
                <div className="p-3 rounded-lg bg-slate-900 border border-blue-500/40 text-center mb-2">
                  <div style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', marginBottom: 2 }}>
                    متابعة الطالب
                  </div>
                  <div style={{ fontSize: 11, color: '#94a3b8', marginBottom: 6 }}>
                    اعرف درجات ابنك بسهولة
                  </div>
                  <button className="w-full py-2 rounded-md bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/30 transition-all">
                    📊 عرض الدرجات
                  </button>
                </div>

                {/* Secondary clean links */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300" style={{ fontSize: 11 }}>
                    📢 أخبار المدرسة
                  </div>
                  <div className="p-1.5 rounded bg-slate-900/60 border border-slate-800 text-slate-300" style={{ fontSize: 11 }}>
                    📝 الواجبات
                  </div>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-700/50" style={{ fontSize: 12, lineHeight: 1.45, color: '#bbf7d0' }}>
                🌟 <b>النتيجة:</b> المعلومة المهمة للمستخدم أصبحت أوضح وأسهل للوصول في ثانيتين وبأقل عدد نقرات ممكن دون أي حيرة!
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              رسم توضيحي للفكرة وليس تصميماً نهائياً للموقع
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={50} y={618} w={1180} h={68} c="pink" fill="pink" at={4}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            🎯 <b>الخلاصة:</b> شخصية المستخدم تنقل الموقع من مجرد «صفحة زحمة وروابط مكدسة» إلى «أداة ذكية وفعالة تخدم أهداف المستخدم الحقيقية»!
          </div>
        </Box>
      </Scene>
    ),
  },

  {
    id: 'persona-golden-rules',
    title: '٤ · القواعد الخمس لشخصية المستخدم (شرح مفصل)',
    scene: true,
    notes: (
      <>
        <p><b>القواعد الذهبية الخمس لبناء واستخدام شخصية المستخدم:</b></p>
        <ol>
          <li><b>شخصية المستخدم بتمثل نوع من المستخدمين، مش شرط شخص حقيقي بعينه:</b> هي نموذج تمثيلي (Archetype) يجمع الخصائص المشتركة لمجموعة مستخدمين بدلاً من التشتت في إرضاء أفراد بعينهم.</li>
          <li><b>بنبنيها قدر الإمكان على بحث أو بيانات، مش مجرد تخمينات شخصية:</b> تُبنى على أبحاث واستبيانات ومقابلات حقيقية (Data-driven) وليس على أهواء وتوقعات المصمم الشخصية.</li>
          <li><b>بنركز على الأهداف والاحتياجات والسلوك وسياق الاستخدام والتحديات:</b> المحاور الخمسة الأساسية التي تحدد قرارات الواجهة والأزرار وهندسة المعلومات.</li>
          <li><b>ممكن نضيف العمر أو الوظيفة لو ليهم تأثير على تصميم الموقع:</b> البيانات الديموغرافية لا تُضاف كحشو شكلي، بل تُذكر فقط إذا كانت ستغير الخط أو اللون أو التوافق مع الموبايل.</li>
          <li><b>مش لازم نستخدم Persona في كل مشروع؛ هي أداة ممكن تساعد فريق التصميم على فهم المستخدم:</b> أداة مرنة للمشاريع المعقدة وذات الجمهور المتنوع، وليست قالباً إجبارياً للمواقع البسيطة البديهية.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="شرح تفصيلي وهوية بصرية للنقاط الخمس المعتمدة لبناء واستثمار شخصية المستخدم">
          ٤ · القواعد الذهبية الخمس لشخصية المستخدم (Persona) بالتفصيل 💡
        </Heading>

        {/* 5 Distinct Cards Side-by-Side (RTL: Card 1 on right, Card 5 on left) */}
        {/* Card 1: Archetype (Blue) */}
        <Box x={1006} y={110} w={224} h={495} c="blue" fill="blue" at={1}>
          <div style={{ padding: '10px 10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 24 }}>👥</span>
                <span style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 6px', borderRadius: 4, background: 'rgba(2, 132, 199, 0.2)', color: '#38bdf8', border: '1px solid #0284c7' }}>
                  Archetype
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-blue)', marginBottom: 2 }}>
                ١ · تمثيل فئة ونوع
              </div>
              <div style={{ fontSize: 10, color: 'var(--pen-ink)', opacity: 0.7, fontWeight: '600' }}>
                نموذج تركيبي لفئة
              </div>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />

              <div style={{ fontSize: 11.5, color: '#fef08a', background: 'rgba(254, 240, 138, 0.08)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(254, 240, 138, 0.2)', lineHeight: 1.4, marginBottom: 6 }}>
                <b>📌 نص الكتاب:</b><br />
                «شخصية المستخدم بتمثل <b>نوعاً من المستخدمين</b>، مش شرط شخص حقيقي بعينه.»
              </div>

              <div style={{ fontSize: 11, color: 'var(--pen-ink)', lineHeight: 1.45, marginBottom: 6 }}>
                <b style={{ color: '#38bdf8' }}>💡 الشرح للطلاب:</b><br />
                هي ليست سيرة ذاتية لشخص حقيقي باسمه وبطاقته، وليست مقابلة لفرد واحد؛ بل هي <b>نموذج افتراضي مركب</b> يجمع الخصائص المشتركة لمئات أو آلاف الزوار.
              </div>
            </div>

            <div style={{ fontSize: 10.5, color: '#e2e8f0', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(56, 189, 248, 0.3)', lineHeight: 1.4 }}>
              <b style={{ color: '#38bdf8' }}>🎯 الأثر بالتصميم:</b><br />
              إرضاء الفئة المشتركة بدلاً من التشتت في أذواق فردية متناقضة.
            </div>
          </div>
        </Box>

        {/* Card 2: Data-Driven (Green) */}
        <Box x={767} y={110} w={224} h={495} c="green" fill="green" at={2}>
          <div style={{ padding: '10px 10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 24 }}>📊</span>
                <span style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 6px', borderRadius: 4, background: 'rgba(22, 163, 74, 0.2)', color: '#4ade80', border: '1px solid #16a34a' }}>
                  Data-Driven
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-green)', marginBottom: 2 }}>
                ٢ · أبحاث وبيانات
              </div>
              <div style={{ fontSize: 10, color: 'var(--pen-ink)', opacity: 0.7, fontWeight: '600' }}>
                مبنية على وقائع لا آراء
              </div>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />

              <div style={{ fontSize: 11.5, color: '#fef08a', background: 'rgba(254, 240, 138, 0.08)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(254, 240, 138, 0.2)', lineHeight: 1.4, marginBottom: 6 }}>
                <b>📌 نص الكتاب:</b><br />
                «بنبنيها قدر الإمكان على <b>بحث أو بيانات حقيقية</b>، مش مجرد تخمينات شخصية.»
              </div>

              <div style={{ fontSize: 11, color: 'var(--pen-ink)', lineHeight: 1.45, marginBottom: 6 }}>
                <b style={{ color: '#4ade80' }}>💡 الشرح للطلاب:</b><br />
                مينفعش المصمم يقعد في مكتبه ويخمن بمزاجه: "أنا حاسس إن أولياء الأمور عايزين كذا"؛ بل تُبنى من <b>استبيانات ومقابلات واقعية وإحصائيات استخدام فعلية</b>.
              </div>
            </div>

            <div style={{ fontSize: 10.5, color: '#e2e8f0', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(74, 222, 128, 0.3)', lineHeight: 1.4 }}>
              <b style={{ color: '#4ade80' }}>🎯 الأثر بالتصميم:</b><br />
              التخمين يؤدي لفشل الواجهة، بينما البيانات تضمن تلبية احتياجات حقيقية.
            </div>
          </div>
        </Box>

        {/* Card 3: Core Pillars (Orange) */}
        <Box x={528} y={110} w={224} h={495} c="orange" fill="orange" at={3}>
          <div style={{ padding: '10px 10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 24 }}>🎯</span>
                <span style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 6px', borderRadius: 4, background: 'rgba(234, 88, 12, 0.2)', color: '#fb923c', border: '1px solid #ea580c' }}>
                  Core Pillars
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-orange)', marginBottom: 2 }}>
                ٣ · المحاور الخمسة
              </div>
              <div style={{ fontSize: 10, color: 'var(--pen-ink)', opacity: 0.7, fontWeight: '600' }}>
                الركائز العملية للتجربة
              </div>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />

              <div style={{ fontSize: 11.5, color: '#fef08a', background: 'rgba(254, 240, 138, 0.08)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(254, 240, 138, 0.2)', lineHeight: 1.4, marginBottom: 6 }}>
                <b>📌 نص الكتاب:</b><br />
                «بنركز على: <b>الأهداف، الاحتياجات، السلوك، سياق الاستخدام، والتحديات</b>.»
              </div>

              <div style={{ fontSize: 11, color: 'var(--pen-ink)', lineHeight: 1.45, marginBottom: 6 }}>
                <b style={{ color: '#fb923c' }}>💡 الشرح للطلاب:</b><br />
                هذه الركائز هي جوهر الـ Persona؛ لأنها تكشف ما يريد إنجازه، وظروف تصفحه للموقع، ونقاط الألم التي تعطله وتسبب له الإحباط أثناء الاستخدام.
              </div>
            </div>

            <div style={{ fontSize: 10.5, color: '#e2e8f0', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(251, 146, 60, 0.3)', lineHeight: 1.4 }}>
              <b style={{ color: '#fb923c' }}>🎯 الأثر بالتصميم:</b><br />
              الهدف يحدد تسلسل الصفحة، والاحتياج يحدد الأزرار، والسياق يحدد التوافق.
            </div>
          </div>
        </Box>

        {/* Card 4: Demographics (Purple) */}
        <Box x={289} y={110} w={224} h={495} c="purple" fill="purple" at={4}>
          <div style={{ padding: '10px 10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 24 }}>🎂</span>
                <span style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 6px', borderRadius: 4, background: 'rgba(147, 51, 234, 0.2)', color: '#c084fc', border: '1px solid #9333ea' }}>
                  Demographics
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-purple)', marginBottom: 2 }}>
                ٤ · ديموغرافيا مشروطة
              </div>
              <div style={{ fontSize: 10, color: 'var(--pen-ink)', opacity: 0.7, fontWeight: '600' }}>
                العمر والوظيفة بالأثر
              </div>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />

              <div style={{ fontSize: 11.5, color: '#fef08a', background: 'rgba(254, 240, 138, 0.08)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(254, 240, 138, 0.2)', lineHeight: 1.4, marginBottom: 6 }}>
                <b>📌 نص الكتاب:</b><br />
                «ممكن نضيف <b>العمر أو الوظيفة</b> لو ليهم تأثير حقيقي على تصميم الموقع.»
              </div>

              <div style={{ fontSize: 11, color: 'var(--pen-ink)', lineHeight: 1.45, marginBottom: 6 }}>
                <b style={{ color: '#c084fc' }}>💡 الشرح للطلاب:</b><br />
                مش بنكتب السن أو المهنة كحشو شكلي فارغ في النموذج! بنضيف العمر مثلاً لكبار السن لتكبير الخطوط، أو نضيف مهنة مهندس ميداني لاستخدام الموبايل بالشارع.
              </div>
            </div>

            <div style={{ fontSize: 10.5, color: '#e2e8f0', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(192, 132, 252, 0.3)', lineHeight: 1.4 }}>
              <b style={{ color: '#c084fc' }}>🎯 الأثر بالتصميم:</b><br />
              إذا لم تؤثر المعلومة على أي زر أو خط بالواجهة.. فلا داعي لكتابتها!
            </div>
          </div>
        </Box>

        {/* Card 5: Pragmatic Tool (Pink) */}
        <Box x={50} y={110} w={224} h={495} c="pink" fill="pink" at={5}>
          <div style={{ padding: '10px 10px', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', whiteSpace: 'normal', wordBreak: 'break-word' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                <span style={{ fontSize: 24 }}>🛠️</span>
                <span style={{ fontSize: 10, fontWeight: 'bold', padding: '2px 6px', borderRadius: 4, background: 'rgba(225, 29, 72, 0.2)', color: '#fb7185', border: '1px solid #e11d48' }}>
                  Pragmatic Tool
                </span>
              </div>
              <div style={{ fontSize: 15, fontWeight: 'bold', color: 'var(--pen-pink)', marginBottom: 2 }}>
                ٥ · أداة مساعدة مرنة
              </div>
              <div style={{ fontSize: 10, color: 'var(--pen-ink)', opacity: 0.7, fontWeight: '600' }}>
                ليست فرضاً إلزامياً
              </div>

              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', margin: '6px 0' }} />

              <div style={{ fontSize: 11.5, color: '#fef08a', background: 'rgba(254, 240, 138, 0.08)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(254, 240, 138, 0.2)', lineHeight: 1.4, marginBottom: 6 }}>
                <b>📌 نص الكتاب:</b><br />
                «<b>مش لازم نستخدم Persona في كل مشروع</b>؛ هي أداة ممكن تساعد على فهم المستخدم.»
              </div>

              <div style={{ fontSize: 11, color: 'var(--pen-ink)', lineHeight: 1.45, marginBottom: 6 }}>
                <b style={{ color: '#fb7185' }}>💡 الشرح للطلاب:</b><br />
                بناء الـ Persona ليس قالباً روتينياً يُفرض على كل صفحة ويب بسيطة ومعروفة؛ بل نلجأ لها في المشاريع المعقدة ذات الجمهور المتنوع لتوحيد رؤية الفريق.
              </div>
            </div>

            <div style={{ fontSize: 10.5, color: '#e2e8f0', background: 'rgba(15, 23, 42, 0.8)', padding: '6px 8px', borderRadius: 6, border: '1px solid rgba(251, 113, 133, 0.3)', lineHeight: 1.4 }}>
              <b style={{ color: '#fb7185' }}>🎯 الأثر بالتصميم:</b><br />
              المصمم المحترف يتصرف بمرونة: يوفر الوقت والجهد في المشاريع البديهية.
            </div>
          </div>
        </Box>

        {/* Bottom Synthesis Banner */}
        <Box x={50} y={618} w={1180} h={72} c="blue" fill="blue" at={6}>
          <div style={{ textAlign: 'center', padding: '8px 16px', fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, whiteSpace: 'normal' }}>
            🌟 <b>الخلاصة المنهجية المعتمدة (المنهج المعتمد):</b>
            &nbsp;
            شخصية المستخدم أداة ذكية مبنية على بيانات واقعية لفهم أنماط المستخدمين، وتوجيه كل عنصر ولون وزر في الموقع لخدمة هدفهم في ثوانٍ دون حيرة!
          </div>
        </Box>
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'ucd-case-study',
    title: '١ · دراسة الحالة وفلسفة التصميم UCD',
    scene: true,
    notes: (
      <>
        <p><b>١ · دراسة الحالة المعتمدة في المنهج المعتمد:</b></p>
        <p>تخيل أنك مكلف بتصميم <b>متجر إلكتروني للمنتجات الزراعية والخضار والفواكه الطازجة</b>.</p>
        <p><b>السؤال المحوري:</b> كيف نبدأ التخطيط؟ هل نبدأ باختيار الألوان والخطوط وبرمجة السيرفرات؟ أم نبدأ بدراسة الجمهور المستهدف؟</p>
        <p><b>فلسفة التصميم المتمحور حول المستخدم (User-Centered Design - UCD):</b></p>
        <p>نهج تصميمي يركز على <b>احتياجات المستخدم النهائي وأهدافه وسلوكياته</b> في كل مرحلة من مراحل تطوير الموقع.</p>
        <p><b>القاعدة الذهبية المعتمدة:</b> «نحن لا نصمم لأنفسنا، بل نصمم للمستخدمين!»</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="دراسة حالة متجر المنتجات الزراعية وفلسفة التصميم المعتمدة في المنهج المعتمد">
          ١ · دراسة الحالة وفلسفة التصميم المتمحور حول المستخدم (UCD) 🥦
        </Heading>

        {/* Top Case Study Banner */}
        <Box x={60} y={120} w={1160} h={110} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '12px 24px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              دراسة الحالة (المنهج المعتمد):
            </span>
            &nbsp;
            <span style={{ fontSize: 20, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تصميم متجر إلكتروني لبيع الخضراوات والفواكه الطازجة عبر الإنترنت.
            </span>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', marginTop: 4 }}>
              الهدف: كيف نوفر تجربة شراء سهلة وسريعة تجعل ربة المنزل والمهندس الرياضي يطلبان في دقائق بثقة؟
            </div>
          </div>
        </Box>

        {/* 3 Core Conceptual Pillars Side-by-Side (RTL) */}
        {/* Right: Golden Rule */}
        <Box x={840} y={250} w={380} h={320} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'center', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              🌟 القاعدة الذهبية في الـ UX
            </div>
            <div style={{ fontSize: 44, margin: '6px 0' }}>💡</div>
            <div style={{ fontSize: 22, fontWeight: 'black', color: 'var(--pen-ink)', lineHeight: 1.5 }}>
              «نحن لا نصمم لأنفسنا،<br />بل نصمم للمستخدمين!»
            </div>
            <div style={{ fontSize: 15, color: 'var(--pen-ink)', lineHeight: 1.45, opacity: 0.9 }}>
              تصميم الموقع وفق ذوق المطور الشخصي غالباً ما يفشل؛ النجاح يأتي من تلبية رغبات المشتري الفعلي.
            </div>
          </div>
        </Box>

        {/* Center: UCD Definition */}
        <Box x={440} y={250} w={380} h={320} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'center', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              🎯 مفهوم التصميم (UCD)
            </div>
            <div style={{ fontSize: 40, margin: '4px 0' }}>🧠</div>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              <b>التصميم المتمحور حول المستخدم:</b> نهج متكامل يضع <b>المستخدم النهائي واحتياجاته وسياق استخدامه</b> في قلب كل قرار تصميمي وبرمجي منذ اليوم الأول.
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              User-Centered Design Framework
            </div>
          </div>
        </Box>

        {/* Left: 4 Stages Cycle */}
        <Box x={60} y={250} w={360} h={320} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)', textAlign: 'center' }}>
              🔄 دورة مراحل UCD الأربعة
            </div>
            <div className="space-y-2 text-xs" style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
              <div><b>١. فهم المستخدم:</b> أبحاث وتحليل الجمهور وسياق العمل.</div>
              <div><b>٢. تحديد المتطلبات:</b> ما الذي يريده المشتري بالضبط؟</div>
              <div><b>٣. تصميم الحلول:</b> رسم المخططات الهيكلية والواجهات.</div>
              <div><b>٤. الاختبار والتقييم:</b> تجربة الموقع مع مستخدمين حقيقيين.</div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-purple)', textAlign: 'center', fontWeight: 'bold' }}>
              تكرار مستمر للوصول لأفضل تجربة
            </div>
          </div>
        </Box>

        {/* Bottom Conclusion Note */}
        <Box x={60} y={590} w={1160} h={80} c="pink" fill="pink" size={19} tc="ink" at={4}>
          📌 <b>الخلاصة:</b> قبل كتابة كود واحد أو اختيار لون الشعار، تبدأ الخطوة الأولى بصياغة <b>شخصية المستخدم (User Persona)</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'user-persona-scene',
    title: '٢ · شخصية المستخدم (User Persona)',
    scene: true,
    notes: (
      <>
        <p><b>٢ · شخصية المستخدم (User Persona) طبقاً لالمنهج المعتمد:</b></p>
        <p><b>التعريف المعتمد:</b> تمثيل افتراضي للمستخدم المثالي / النموذجي مستند إلى بيانات وأبحاث واقعية عن الجمهور المستهدف.</p>
        <p><b>لماذا نبني شخصية المستخدم؟</b></p>
        <ul>
          <li>تساعد فريق التصميم والبرمجة على اتخاذ قرارات منطقية ترضي العميل الحقيقي.</li>
          <li>توحد الرؤية بين المبرمجين والمصممين وأصحاب المشروع.</li>
          <li>تمنع التشتت والجدل الشخصي حول المظهر والتفضيلات الفردية.</li>
        </ul>
        <p><b>العناصر الأربعة المكونة للـ Persona:</b></p>
        <ol>
          <li><b>الديموغرافيا (Demographics):</b> العمر، المهنة، السكن، المهارة التقنية.</li>
          <li><b>الأهداف (Goals):</b> ما يسعى لتحقيقه في الموقع (مثل شراء خضار طازج في دقيقتين).</li>
          <li><b>الاحتياجات والتوقعات (Needs):</b> أدوات البحث السهل، طرق دفع متنوعة، وتوصيل سريع.</li>
          <li><b>نقاط الألم والإحباط (Pain Points):</b> الإجراءات المعقدة، الخطوط غير المقروءة، وبطء التوصيل.</li>
        </ol>
        <p><b>تنبيه امتحاني حاسم:</b> أداء الخادم (Server Performance) ليس جزءاً من شخصية المستخدم!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التمثيل الافتراضي للمستخدم المثالي وعناصره الأربعة المعتمدة في المنهج المعتمد">
          ٢ · شخصية المستخدم (User Persona) ودورها في توجيه التصميم 👤
        </Heading>

        {/* Top Definition Banner */}
        <Box x={60} y={115} w={1160} h={100} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 22px', whiteSpace: 'normal', lineHeight: 1.5 }}>
            <span style={{ fontSize: 24, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              تعريف شخصية المستخدم (User Persona):
            </span>
            &nbsp;
            <span style={{ fontSize: 21, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تمثيل خيالي / افتراضي للمستخدم النموذجي للموقع، يُبنى استناداً إلى أبحاث وبيانات واقعية.
            </span>
            <div style={{ fontSize: 16, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 4 }}>
              الهدف: توجيه كافة قرارات التصميم والبرمجة لتلبية احتياجات مستخدم حقيقي وليس افتراضات عشوائية.
            </div>
          </div>
        </Box>

        {/* 4 Persona Pillars (Grid 2x2 or 4 Columns) */}
        {/* Pillar 1: Demographics */}
        <Box x={930} y={230} w={290} h={330} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>📊</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                ١ · الديموغرافيا
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-purple)', fontWeight: 'bold' }}>Demographics</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • <b>العمر والوظيفة:</b> (مثلاً ربة منزل ٤٢ سنة، أو مهندس ٢٨ سنة).<br />
              • <b>الموقع الجغرافي:</b> مدينة التوصيل.<br />
              • <b>المستوى التقني:</b> قدرته على التعامل مع التطبيقات والويب.
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold', textAlign: 'center' }}>
              تحدد طريقة صياغة الواجهة
            </div>
          </div>
        </Box>

        {/* Pillar 2: Goals */}
        <Box x={640} y={230} w={270} h={330} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>🎯</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                ٢ · الأهداف
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-green)', fontWeight: 'bold' }}>Goals</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • <b>ماذا يريد الزائر؟</b><br />
              • شراء خضراوات طازجة بسرعة.<br />
              • فحص شهادات الجودة والمصدر العضوي.<br />
              • إتمام الدفع بأقل عدد نقرات ممكنة.
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold', textAlign: 'center' }}>
              تحدد مسار رحلة الشراء
            </div>
          </div>
        </Box>

        {/* Pillar 3: Needs */}
        <Box x={350} y={230} w={270} h={330} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>🛒</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                ٣ · الاحتياجات
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-orange)', fontWeight: 'bold' }}>Needs</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • <b>توقعاته من واجهة المتجر:</b><br />
              • شريط بحث وتصنيفات سريعة.<br />
              • خيار الدفع كاش عند الباب.<br />
              • صور حقيقية وواضحة للمحاصيل.
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold', textAlign: 'center' }}>
              تحدد وظائف وعناصر الصفحة
            </div>
          </div>
        </Box>

        {/* Pillar 4: Pain Points */}
        <Box x={60} y={230} w={270} h={330} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 2 }}>⚠️</div>
              <div style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                ٤ · نقاط الألم
              </div>
              <div style={{ fontSize: 13, color: 'var(--pen-red)', fontWeight: 'bold' }}>Pain Points</div>
            </div>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55 }}>
              • <b>ما الذي يزعج المستخدم؟</b><br />
              • استمارات تسجيل معقدة وطويلة.<br />
              • خطوط صغيرة وألوان باهتة غير مريحة.<br />
              • إخفاء تكلفة التوصيل حتى النهاية.
            </div>
            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold', textAlign: 'center' }}>
              تحدد الأخطاء التي يجب تجنبها
            </div>
          </div>
        </Box>

        {/* Bottom Exam Note */}
        <Box x={60} y={580} w={1160} h={85} c="blue" fill="blue" size={18} tc="ink" at={4}>
          📝 <b>سؤال امتحان البكالوريا:</b> أي من العناصر التالية <b>ليس</b> من مكونات شخصية المستخدم؟<br />
          (السن / الاحتياجات / <b>أداء الخادم واستضافته</b> / نقاط الألم) ➔ <b>الإجابة: أداء الخادم</b> لأنه متطلب تقني خاص بالبنية التحتية للموقع.
        </Box>
      </Scene>
    ),
  },
];
