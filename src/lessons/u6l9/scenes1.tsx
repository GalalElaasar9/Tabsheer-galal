// Board scenes · Unit 6 · Lesson 9 · Cover, Journey, Data Concept, Info Design Definition, 3 Goals, & 100 Students Example
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'فكرة الدرس وتحدي البيانات',
  'ما هو تصميم البيانات؟',
  'الأهداف الثلاثة للتصميم',
  'طرق تصميم البيانات الـ 5',
  'التجريد والرسم التصويري',
  'الأيقونة ومقارنة Pictogram',
  'التصور والهيكلة الشجرية',
  '🧠 قصة الذاكرة الذهبية',
  'تقنيات سهولة الفهم (ص 142)',
  'مبدأ LATCH لتنظيم البيانات',
  'معمل وتحديات مبدأ LATCH',
  'ماراثون الامتحان النهائي 🏁',
];

const STOP_PTS: [number, number][] = [
  [1130, 310], [930, 340], [730, 310], [530, 340], [330, 310], [130, 340],
  [130, 560], [330, 590], [530, 560], [730, 590], [930, 560], [1130, 590],
];

export const intro: FrameDef[] = [
  {
    id: 'cover',
    title: 'الغلاف الرسمي للدرس',
    scene: true,
    notes: (
      <>
        <p><b>الدرس التاسع من الوحدة السادسة: تصميم البيانات والمعلومات (Information & Data Design).</b></p>
        <p><b>الأهداف المعتمدة في كتاب الوزارة:</b></p>
        <ol>
          <li>استيعاب التفكير الهندسي للبيانات قبل استخدامها في البرامج والمواقع.</li>
          <li>إتقان مفهوم تصميم البيانات (Information Design) وأهدافه الثلاثة: الدقة، تسهيل الفهم، وجذب الانتباه.</li>
          <li>التمييز بين طرق تصميم البيانات الخمس: التجريد، الرسم التصويري، الأيقونة، التصور، والهيكلة.</li>
          <li>استيعاب تقنيات التصميم لسهولة الفهم (صفحة 142): UI, CUI, GUI, UX, Affordance, Signifier, Usability, Accessibility, Universal Design.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={220} size={50}>تصميم البيانات والمعلومات</Txt>
        <Underline x={260} y={270} w={760} c="green" />
        <Txt x={640} y={335} size={28} c="blue">Information & Data Design · تقنيات سهولة الفهم (صفحة 142)</Txt>

        {[
          ['✂️', 'التجريد (Abstraction)'],
          ['🚹', 'Pictogram (رسم تصويري)'],
          ['📱', 'الأيقونة (Icon)'],
          ['📊', 'التصور (Visualization)'],
          ['🏗️', 'الهيكلة (Structuring)'],
        ].map(([icon, label], i) => (
          <Doodle
            key={label}
            x={1080 - i * 220}
            y={505}
            icon={icon}
            size={85}
            label={label}
            lsize={17}
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
        <p><b>خريطة رحلة الدرس التاسع:</b> عشر محطات متكاملة تربط المفاهيم النظرية بالتطبيقات الحقيقية والامتحانات.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المحطات التعليمية المعتمدة لدرس تصميم البيانات وتقنيات سهولة الفهم">
          خريطة رحلة الدرس: من مدخل البيانات إلى بنك الامتحانات 🗺️
        </Heading>
        <Box x={60} y={115} w={1160} h={85} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              ❓ السؤال المحوري:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              قبل استخدام البيانات في أي برنامج أو موقع.. كيف نرتبها ونعرضها لتصل فكرتها بوضوح وسرعة للجمهور؟
            </span>
          </div>
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 6), [70, 450], ...STOP_PTS.slice(6)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.1} x={x} y={y} n={i + 1} c={i < 6 ? 'blue' : 'purple'} />
            <Txt at={1} delay={i * 0.1} x={x} y={y + 48} size={18}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'data-concept',
    title: 'فكرة الدرس: التفكير قبل التخزين ومفهوم البيانات',
    scene: true,
    notes: (
      <>
        <p><b>فكرة الدرس الأساسية:</b> قبل ما نستخدم البيانات في برنامج أو موقع، لازم نسأل 3 أسئلة:</p>
        <ol>
          <li>هنخزن البيانات إزاي؟</li>
          <li>إيه البيانات اللي محتاجينها؟</li>
          <li>إزاي هنرتبها بحيث نقدر نستخدمها بسهولة؟</li>
        </ol>
        <p><b>يعني إيه بيانات؟</b> هي المعلومات التي نجمعها ونخزنها لاستخدامها لاحقاً (مثل بيانات مدرسة: اسم الطالب، الرقم، الصف، تاريخ الميلاد، الدرجة).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التفكير الهندسي للبيانات قبل كتابة أي كود أو بناء أي نظام">
          ١ · فكرة الدرس: ما قبل التخزين والبرمجة ومفهوم البيانات 💡
        </Heading>

        {/* Top Transition Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 20, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ❓ السؤال التأسيسي:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              قبل البدء في بناء أي برنامج أو موقع إلكتروني.. ما الذي يجب أن نفكر فيه أولاً؟
            </span>
            <div style={{ fontSize: 14, color: 'var(--pen-ink)', opacity: 0.9, marginTop: 4 }}>
              التفكير في طريقة التخزين، نوعية البيانات المطلوبة، وهندسة ترتيبها لسهولة الاستخدام!
            </div>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side (RTL) */}
        {/* Right Card: 3 Core Questions */}
        <Box x={660} y={215} w={560} h={365} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  ١ · الأسئلة الثلاثة قبل التخزين والبرمجة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  التخطيط المسبق
                </span>
              </div>

              <div style={{ fontSize: 14, color: 'var(--pen-ink)', lineHeight: 1.55, marginBottom: 10 }}>
                قبل ما نضع أي بيان داخل قاعدة بيانات أو برنامج، يجب الإجابة عن:
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--pen-ink)' }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#38bdf8' }}>💾 ١. هنخزن البيانات إزاي؟</b>
                  <br />
                  اختيار نوع الملفات وقواعد البيانات وسعة التخزين المناسبة.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#c084fc' }}>📋 ٢. إيه البيانات اللي محتاجينها بالضبط؟</b>
                  <br />
                  تحديد الحقول الضرورية فقط وتجنب جمع بيانات عشوائية لا فائدة منها.
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: '#4ade80' }}>📐 ٣. إزاي هنرتبها لسهولة استخدامها؟</b>
                  <br />
                  تنظيم العلاقات والمستويات ليتم استرجاعها والبحث فيها بلمح البصر.
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الإجابة عن هذه الأسئلة هو جوهر ما يُسمى «تصميم البيانات (Data Design)»!
            </div>
          </div>
        </Box>

        {/* Left Card: Definition & School Example */}
        <Box x={60} y={215} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ٢ · يعني إيه بيانات؟ (مثال المدرسة)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  المفهوم والتطبيق
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                📖 <b>تعريف البيانات (Data):</b>
                <br />
                هي المعلومات التي نجمعها ونخزنها علشان نستخدمها بعد كده.
              </div>

              {/* School ID Card Simulation */}
              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/60" style={{ fontSize: 13, lineHeight: 1.6, color: '#fef08a' }}>
                🏫 <b>مثلاً: لو عندنا نظام مدرسة، البيانات هتكون:</b>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginTop: 6, color: '#ffffff', fontSize: 12.5 }}>
                  <div>• <b>اسم الطالب:</b> أحمد محمود</div>
                  <div>• <b>رقم الطالب:</b> 2026105</div>
                  <div>• <b>الصف:</b> الأول الثانوي</div>
                  <div>• <b>تاريخ الميلاد:</b> 15/3/2010</div>
                  <div style={{ gridColumn: 'span 2' }}>• <b>الدرجة والتقدير:</b> 98% (ممتاز)</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              كل عنصر من دول يمثل بياناً خاماً محتاج تنظيم وتصميم ذكي!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>الخلاصة الذهبية:</b> البيانات وحدها لا تكفي! التصميم الذكي للبيانات هو الذي يحدد نجاح أي تطبيق أو موقع إلكتروني.
        </Box>
      </Scene>
    ),
  },

  {
    id: 'info-design-definition',
    title: 'تعريف تصميم البيانات (Information Design)',
    scene: true,
    notes: (
      <>
        <p><b>تصميم البيانات (Information Design):</b></p>
        <p>ترتيب المعلومات وتنظيمها والتعبير عنها بصورة إبداعية وعرضها بطريقة مناسبة وجذابة، بحيث تصل الفكرة أو الرسالة إلى الجمهور بسهولة ووضوح.</p>
        <p><b>يعني ببساطة:</b> بدل ما يكون عندي معلومات كتير متلخبطة، أقوم بترتيبها وعرضها بطريقة تخلي الشخص يفهمها بسرعة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التعريف الرسمي المعتمد في منهج الحاسب وتكنولوجيا المعلومات">
          ٢ · ما هو تصميم البيانات؟ (Information Design) 🎨
        </Heading>

        {/* Top Official Definition Banner */}
        <Box x={60} y={115} w={1160} h={95} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.5, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              📖 التعريف الرسمي المعتمد (كتاب الوزارة):
            </span>
            <div style={{ fontSize: 18, color: '#f8fafc', fontWeight: 'bold', marginTop: 4 }}>
              "ترتيب المعلومات وتنظيمها والتعبير عنها بصورة إبداعية وعرضها بطريقة مناسبة وجذابة، بحيث تصل الفكرة أو الرسالة إلى الجمهور بسهولة ووضوح."
            </div>
          </div>
        </Box>

        {/* 2 Big Cards: Before vs After Transformation */}
        {/* Right Card: Before Design (Chaos) */}
        <Box x={660} y={225} w={560} h={355} c="red" fill="red" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  🌪️ قبل التصميم: فوضى المعلومات
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-red)' }}>
                  الوضع العشوائي ❌
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                معلومات كثيرة متلخبطة ومكدسة في مكان واحد، خطوط غير واضحة، ولا توجد أولويات بصرية..
                <br />
                <b style={{ color: '#f87171' }}>النتيجة المباشرة:</b> الشخص يحتاج وقتاً طويلاً ومجهوداً كبيراً ليفهم الفكرة، وغالباً يترك الصفحة مشوشاً!
              </div>

              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-700/60" style={{ fontSize: 13, color: '#fca5a5' }}>
                ⚠️ <b>العائق:</b> وفرة البيانات مع غياب التصميم = تشويش وإهدار للوقت.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold' }}>
              البيانات موجودة، لكن لا أحد يستطيع الاستفادة منها بسرعة!
            </div>
          </div>
        </Box>

        {/* Left Card: After Design (Clarity) */}
        <Box x={60} y={225} w={580} h={355} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🎯 بعد التصميم: الوضوح والسرعة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  العرض الإبداعي ✅
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                تنظيم البيانات في جداول ومخططات ملونة وأيقونات معبرة، مع إبراز العناصر الهامة..
                <br />
                <b style={{ color: '#4ade80' }}>النتيجة المباشرة:</b> تصل الرسالة إلى عقل المتلقي في ثوانٍ معدودة وبأقل مجهود ذهني ممكن!
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/60" style={{ fontSize: 13, color: '#86efac' }}>
                ✨ <b>المكسب:</b> تحويل الأرقام والنصوص الصامتة إلى رسالة بصرية جذابة وسريعة الفهم.
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              يعني ببساطة: بدل ما تكون البيانات متلخبطة، نرتبها ليفهمها أي شخص بسرعة!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={4}>
          💡 <b>القاعدة الذهبية:</b> تصميم البيانات ليس مجرد تجميل، بل هو هندسة توصيل الرسالة بأعلى دقة وأقل وقت!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'three-goals',
    title: 'الأهداف الثلاثة لتصميم البيانات',
    scene: true,
    notes: (
      <>
        <p><b>الأهداف الأساسية لتصميم البيانات (كتاب الوزارة):</b></p>
        <p>الكتاب بيحدد 3 أهداف أساسية:</p>
        <ol>
          <li><b>توصيل المعلومات بدقة:</b> نقل الحقائق دون تشويه أو غموض.</li>
          <li><b>تسهيل الفهم والاستيعاب:</b> مساعدة العقل على هضم البيانات الصعبة بسرعة.</li>
          <li><b>جذب انتباه الجمهور:</b> استخدام الجماليات والألوان لإثارة اهتمام المتلقي.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الركائز الثلاث الأساسية المعتمدة في كتاب تكنولوجيا المعلومات">
          ٣ · الأهداف الثلاثة لتصميم البيانات 🎯
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={80} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              يحدد الكتاب المدرسي <b>٣ أهداف محورية</b> لا بد أن يحققها تصميم البيانات الناجح:
            </span>
          </div>
        </Box>

        {/* 3 Columns Grid across 1160px */}
        {/* Goal 1 */}
        <Box x={860} y={210} w={360} h={370} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 44, marginBottom: 6 }}>🎯</div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 4 }}>
                ١. توصيل المعلومات بدقة
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-blue)', textAlign: 'center', fontWeight: 'bold', marginBottom: 12 }}>
                Accuracy in Delivery
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                نقل الأرقام والحقائق كما هي دون تضليل أو تشويه أو التباس، ليعتمد عليها متخذ القرار بثقة كاملة.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الأساس: الحقيقة العلمية الواضحة
            </div>
          </div>
        </Box>

        {/* Goal 2 */}
        <Box x={460} y={210} w={360} h={370} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 44, marginBottom: 6 }}>💡</div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)', textAlign: 'center', marginBottom: 4 }}>
                ٢. تسهيل الفهم والاستيعاب
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-purple)', textAlign: 'center', fontWeight: 'bold', marginBottom: 12 }}>
                Ease of Comprehension
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                تبسيط التعقيد ومساعدة عقل المتلقي على استخلاص الأنماط والمقارنات دون إجهاد ذهني مضاعف.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الهدف: تقليل المجهود العقلي للطالب
            </div>
          </div>
        </Box>

        {/* Goal 3 */}
        <Box x={60} y={210} w={360} h={370} c="orange" fill="orange" at={4}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 44, marginBottom: 6 }}>👁️</div>
              <div style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)', textAlign: 'center', marginBottom: 4 }}>
                ٣. جذب انتباه الجمهور
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-orange)', textAlign: 'center', fontWeight: 'bold', marginBottom: 12 }}>
                Engaging Audience Attention
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 13, lineHeight: 1.6, color: 'var(--pen-ink)' }}>
                استخدام الألوان والصور والتنسيقات الذكية لإثارة الشغف ودفع المتلقي لمتابعة الرسالة وقراءتها.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              الأثر: إيقاظ اهتمام المشاهد فوراً
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={5}>
          🌟 <b>كبسولة الامتحان:</b> إذا اجتمعت <b>الدقة</b> مع <b>سهولة الفهم</b> و<b>جذب الانتباه</b>، ضمنت وصول رسالتك بنسبة 100%!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'students-100-example',
    title: 'المثال التطبيقي: درجات 100 طالب',
    scene: true,
    notes: (
      <>
        <p><b>مثال بسيط من الكتاب:</b> لو عندك درجات 100 طالب، وعرضتها في قائمة طويلة جداً، هيكون من الصعب ملاحظة أعلى الدرجات.</p>
        <p>لكن لو استخدمت جدول أو رسم بياني، هتكون المعلومات أسهل في الفهم والمقارنة اللحظية.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التطبيق العملي الفاصل: كيف ينقذنا التصميم من بحر الأرقام المتلاطم؟">
          ٤ · مثال درجات ١٠٠ طالب: قائمة طويلة أم رسم بياني؟ ⚖️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              تخيّل أنك استلمت ملفاً يضم <b>درجات 100 طالب</b>.. كيف ستعرضها على إدارة المدرسة وأولياء الأمور؟
            </span>
          </div>
        </Box>

        {/* 2 Big Comparison Cards */}
        {/* Right: The Raw Text List */}
        <Box x={660} y={215} w={560} h={365} c="red" fill="red" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  ❌ ١. القائمة النصية الطويلة المكدسة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-red)' }}>
                  بلا تصميم
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 text-xs" style={{ fontFamily: 'monospace', fontSize: 12, lineHeight: 1.7, color: '#94a3b8' }}>
                أحمد: 98% • سارة: 74% • يوسف: 88% • منى: 92% • كريم: 65% • فاطمة: 100% • عمر: 58% • نور: 84% • مريم: 96% • زياد: 77% • آية: 91% • حازم: 82%... (100 سطر متواصل!)
              </div>

              <div className="space-y-1 text-xs" style={{ color: '#fca5a5', lineHeight: 1.5, fontSize: 12.5 }}>
                <div>• من الصعب جداً ملاحظة من هو صاحب المركز الأول.</div>
                <div>• مستحيل معرفة نسبة المتفوقين أو الراسبين بالنظر.</div>
                <div>• مرهقة للعين وتسبب نفور القارئ وتشتته!</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold' }}>
              البيانات كاملة لكنها تفشل في توصيل معناها بسهولة!
            </div>
          </div>
        </Box>

        {/* Left: The Visual Chart / Table */}
        <Box x={60} y={215} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  ✅ ٢. استخدام جدول أو رسم بياني (تصميم البيانات)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  تصميم احترافي
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 text-xs" style={{ fontSize: 13, lineHeight: 1.6, color: '#f8fafc' }}>
                📊 <b>تحويل الأرقام إلى رسم بياني بالأعمدة الملونة:</b>
                <div style={{ marginTop: 6, display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(15, 23, 42, 0.7)', padding: '6px 12px', borderRadius: '6px' }}>
                  <span>ممتاز: 32 طالب</span>
                  <span>جيد جداً: 45 طالب</span>
                  <span>جيد: 18 طالب</span>
                  <span>مقبول: 5 طلاب</span>
                </div>
              </div>

              <div className="space-y-1 text-xs" style={{ color: '#86efac', lineHeight: 1.5, fontSize: 12.5 }}>
                <div>• تلاحظ أعلى وأقل درجة في ثانية واحدة بمجرد النظر!</div>
                <div>• تفهم مستوى الدفعة وتقارن الفصول بلمحة بصرية خاطفة.</div>
                <div>• يحقق أهداف التصميم: <b>الدقة، السهولة، والجاذبية</b>.</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              الرسم البياني يختصر 100 سطر في نظرة واحدة واضحة!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🧪 <b>جرب بنفسك:</b> انتقل للمعمل التفاعلي التالي وجرب البحث عن الطالب الأول في القائمة الخام ثم في الرسم البياني!
        </Box>
      </Scene>
    ),
  },
];
