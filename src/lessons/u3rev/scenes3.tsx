// Master Review Scenes · Part 3: Front-End Technologies, Trio (HTML/CSS/JS), Semantic HTML, Responsive & Mobile-First, DOM, React/Next.js, Security/XSS, and Exam Comparison Tables
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Heading, Note, Place, Scene, Txt,
} from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'scene-frontend-trio',
    title: 'الثلاثي الذهبي للواجهة الأمامية (HTML • CSS • JavaScript)',
    scene: true,
    notes: (
      <>
        <p><b>الثلاثي الأساسي للواجهة الأمامية (The Front-End Trio):</b></p>
        <p>كل صفحة ويب تراها مبنية بتعاون ثلاث لغات قياسية تعمل داخل المتصفح:</p>
        <ul>
          <li><b>لغة HTML (هيكل المبنى):</b> تحدد عناصر الصفحة ومحتواها (نصوص، عناوين، صور، حقول، أزرار). من دونها لا توجد صفحة أصلاً.</li>
          <li><b>لغة CSS (طلاء وديكور وتخطيط المبنى):</b> تحدد الألوان، الخطوط، الهوامش، المسافات، والتكيف مع مقاسات الشاشات المختلفة.</li>
          <li><b>لغة JavaScript (شبكة الكهرباء والمصاعد والحركة):</b> تجعل الصفحة تفاعلية وحية؛ تستجيب لنقرات الأزرار، تفحص المدخلات، وتطلب بيانات جديدة من الخادم في الخلفية.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="orange" fill="orange" tc="orange" size={26}>🏗️ الثلاثي الذهبي</Box>
        <Heading sub="تشبيه المبنى الشهير: كيف تتعاون لغات الواجهة الأمامية الثلاث لبناء صفحة ويب متكاملة؟">
          الثلاثي الذهبي للواجهة الأمامية (HTML • CSS • JavaScript)
        </Heading>

        {/* 1. HTML (Right) */}
        <Box x={850} y={150} w={360} h={385} c="orange" at={1}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>🧱</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-orange)' }}>١. لغة HTML</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginTop: 2, direction: 'ltr' }}>Structure (الهيكل)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16, lineHeight: 1.7 }}>
              • <b>تشبيه المبنى:</b> الأعمدة الخرسانية والجدران.<br />
              • تحدد وجود العناصر (عناوين، صور، أزرار).<br />
              • توفر الوسوم الدلالية لتنظيم الصفحة.<br />
              • <b>بدونها لا توجد صفحة أصلاً</b> (شاشة بيضاء).
            </div>
          </div>
        </Box>
        <Txt x={1030} y={555} size={22} c="orange" at={1}>أساس وبنية الصفحة</Txt>

        {/* 2. CSS (Center) */}
        <Box x={460} y={150} w={360} h={385} c="blue" at={2}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>🎨</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>٢. لغة CSS</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginTop: 2, direction: 'ltr' }}>Style (المظهر)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16, lineHeight: 1.7 }}>
              • <b>تشبيه المبنى:</b> ألوان الطلاء والديكور.<br />
              • تحدد الألوان والخطوط والمسافات والهوامش.<br />
              • تنظم شبكات التخطيط (Flexbox و Grid).<br />
              • <b>تجعل التصميم متجاوباً</b> مع مختلف الشاشات.
            </div>
          </div>
        </Box>
        <Txt x={640} y={555} size={22} c="blue" at={2}>جمال وتنسيق الصفحة</Txt>

        {/* 3. JavaScript (Left) */}
        <Box x={70} y={150} w={360} h={385} c="green" at={3}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>⚡</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-green)' }}>٣. لغة JavaScript</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginTop: 2, direction: 'ltr' }}>Behavior (السلوك)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16, lineHeight: 1.7 }}>
              • <b>تشبيه المبنى:</b> شبكة الكهرباء والمصاعد.<br />
              • تستجيب لنقرات الماوس وأحداث المستخدم.<br />
              • تعدل شجرة الـ DOM لحظياً دون وميض.<br />
              • <b>تتواصل مع الـ APIs</b> لتبادل كائنات JSON.
            </div>
          </div>
        </Box>
        <Txt x={250} y={555} size={22} c="green" at={3}>حياة وتفاعل الصفحة</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={4}>
          💡 معادلة الويب الذهبية: HTML تبني الهيكل + CSS تجمله + JavaScript تجعله ينبض بالحياة والتفاعل!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-semantic-html',
    title: 'العناصر الدلالية (Semantic HTML) وتخطيط الصفحة',
    scene: true,
    notes: (
      <>
        <p><b>العناصر الدلالية (Semantic HTML):</b></p>
        <p>تعني استخدام وسوم HTML تعبر بوضوح عن المعنى والوظيفة للمحتوى الموجود بداخلها، بدلاً من استخدام وسوم عامة خالية من المعنى مثل &lt;div&gt; و &lt;span&gt;.</p>
        <p><b>أهم الوسوم الدلالية المقررة:</b></p>
        <ul>
          <li><b>&lt;header&gt;:</b> ترويسة الصفحة أو القسم (تحتوي عادة على الشعار وعنوان الصفحة).</li>
          <li><b>&lt;nav&gt;:</b> قائمة روابط التنقل الرئيسية داخل الموقع.</li>
          <li><b>&lt;main&gt;:</b> المحتوى الأساسي والفريد للصفحة (لا يتكرر في الصفحات الأخرى).</li>
          <li><b>&lt;article&gt;:</b> مقال أو بطاقة محتوى مستقلة بذاتها يمكن مشاركتها أو إعادة نشرها منفردة.</li>
          <li><b>&lt;section&gt;:</b> قسم موضوعي مترابط داخل الصفحة.</li>
          <li><b>&lt;aside&gt;:</b> شريط جانبي لمحتوى إضافي أو إعلانات مرتبطة بالموضوع.</li>
          <li><b>&lt;footer&gt;:</b> تذييل الصفحة (حقوق النشر، سياسة الخصوصية، وروابط التواصل).</li>
        </ul>
        <p><b>لماذا نستخدم العناصر الدلالية؟ (سؤال امتحان شهير):</b></p>
        <ol>
          <li><b>إمكانية الوصول (Accessibility):</b> تمكّن برامج قراءة الشاشة (Screen Readers) من مساعدة ذوي الهمم وفاقدي البصر على القفز مباشرة للمحتوى أو قائمة التنقل.</li>
          <li><b>تحسين محركات البحث (SEO):</b> تساعد روبوتات Google على فهم هيكل المقال وأهميته وأرشفته في صدارة نتائج البحث.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="blue" fill="blue" tc="blue" size={26}>📐 عناصر دلالية</Box>
        <Heading sub="لماذا نتجنب فوضى الوسوم العامة <div> ونفضل الوسوم الدلالية الصريحة؟">
          العناصر الدلالية (Semantic HTML) وتخطيط الصفحة
        </Heading>

        {/* Semantic Wireframe on Right */}
        <Box x={660} y={150} w={540} h={380} c="blue" at={1}>
          <div style={{ padding: '14px 18px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 10 }}>
              المخطط الهيكلي للصفحة الدلالية
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: 14.5, fontWeight: 800 }}>
              <div style={{ background: 'var(--primary-soft)', border: '1.5px dashed var(--pen-blue)', padding: '5px 10px', borderRadius: 6, textAlign: 'center', color: 'var(--pen-blue)' }}>
                &lt;header&gt; ترويسة الصفحة والشعار &lt;/header&gt;
              </div>
              <div style={{ background: 'var(--purple-soft, var(--surface-2))', border: '1.5px dashed var(--pen-purple)', padding: '5px 10px', borderRadius: 6, textAlign: 'center', color: 'var(--pen-purple)' }}>
                &lt;nav&gt; روابط التنقل الرئيسية &lt;/nav&gt;
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ flex: 3, background: 'var(--safe-soft)', border: '1.5px dashed var(--pen-green)', padding: '14px 8px', borderRadius: 6, textAlign: 'center', color: 'var(--pen-green)' }}>
                  &lt;main&gt; المحتوى الأساسي والفريد للصفحة<br />
                  <span style={{ fontSize: 12.5, color: 'var(--muted)', display: 'block', marginTop: 2 }}>
                    يضم &lt;article&gt; و &lt;section&gt;
                  </span>
                </div>
                <div style={{ flex: 1, background: 'var(--warn-soft)', border: '1.5px dashed var(--pen-orange)', padding: '14px 4px', borderRadius: 6, textAlign: 'center', fontSize: 13, color: 'var(--pen-orange)' }}>
                  &lt;aside&gt;<br />شريط جانبي
                </div>
              </div>
              <div style={{ background: 'var(--danger-soft)', border: '1.5px dashed var(--pen-red)', padding: '5px 10px', borderRadius: 6, textAlign: 'center', color: 'var(--pen-red)' }}>
                &lt;footer&gt; تذييل الصفحة وحقوق النشر والتواصل &lt;/footer&gt;
              </div>
            </div>
          </div>
        </Box>
        <Txt x={930} y={555} size={22} c="blue" at={1}>هيكل منظم ودلالي واضح</Txt>

        {/* Why it Matters (Left) */}
        <Box x={80} y={150} w={530} h={380} c="green" at={2}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-green)', textAlign: 'center', marginBottom: 12 }}>
              لماذا نستخدمها؟ (سؤال امتحان أساسي)
            </div>
            <div style={{ background: 'var(--primary-soft)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px', marginBottom: 10 }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-blue)', fontSize: 17 }}>
                ♿ ١. إمكانية الوصول (Accessibility - a11y):
              </div>
              <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.5 }}>
                تمكّن <b>قارئات الشاشة (Screen Readers)</b> لذوي الإعاقة البصرية من تخطي القوائم والوصول للمحتوى مباشرة.
              </div>
            </div>
            <div style={{ background: 'var(--safe-soft)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-green)', fontSize: 17 }}>
                🔍 ٢. تحسين محركات البحث (SEO):
              </div>
              <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.5 }}>
                تساعد عناكب Google على فهم هيكل وأهمية المقال بدقة وأرشفته في صدارة نتائج البحث.
              </div>
            </div>
          </div>
        </Box>
        <Txt x={345} y={555} size={22} c="green" at={2}>أهمية مضاعفة للمستخدم والروبوت</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={3}>
          💡 قاعدة امتحان ذهبية: نستخدم الوسم الدلالي للتعبير عن وظيفة ومعنى المحتوى، وليس لشكله أو لونه التنسيقي!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-responsive-mobile-first',
    title: 'التصميم المتجاوب واستراتيجية «الجوال أولاً» (Mobile-First)',
    scene: true,
    notes: (
      <>
        <p><b>التصميم المتجاوب واستراتيجية الأولوية للجوال:</b></p>
        <p><b>التصميم المتجاوب (Responsive Web Design):</b> تقنية تجعل الموقع يغير أبعاده وترتيب عناصره تلقائياً ليناسب شاشة الهاتف والتابلت والشاشات الكبيرة دون الحاجة لبرمجة موقعين مختلفين.</p>
        <p><b>نهج الأولوية للجوال (Mobile-First Approach):</b></p>
        <ul>
          <li>هو معيار الصناعة الحديث في تطوير المواقع.</li>
          <li>نبدأ بتصميم وبرمجة موقع الويب لأصغر شاشة (الهاتف المحمول) حيث الموارد وسرعة الإنترنت محدودة.</li>
          <li>ثم نتوسع تدريجياً بإضافة أعمدة وتفاصيل للشاشات الأكبر عبر <b>استعلامات الوسائط (CSS Media Queries)</b> مثل: <span className="ltr">@media (min-width: 768px)</span>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="pink" fill="pink" tc="pink" size={26}>📱 تصميم متجاوب</Box>
        <Heading sub="كيف تجعل موقعك يبدو مثالياً على الهواتف الذكية والحواسيب المكتبية في نفس الوقت؟">
          التصميم المتجاوب واستراتيجية «الجوال أولاً» (Mobile-First)
        </Heading>

        {/* Mobile View (Right) */}
        <Box x={870} y={150} w={320} h={385} c="pink" at={1}>
          <div style={{ padding: '14px 16px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 28 }}>📱</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-pink)' }}>البداية: شاشة الهاتف</div>
            <div style={{ fontSize: 14.5, color: 'var(--muted)', marginTop: 2, direction: 'ltr' }}>Mobile-First Approach</div>
            <div style={{ marginTop: 12, border: '1.5px solid var(--border)', borderRadius: 10, padding: '8px', background: 'var(--surface-2)', fontSize: 13, fontWeight: 800 }}>
              <div style={{ background: 'var(--pink-soft)', padding: '5px', borderRadius: 6, marginBottom: 6, color: 'var(--pen-pink)' }}>☰ قائمة مطوية عمودية</div>
              <div style={{ background: 'var(--surface)', padding: '16px 4px', borderRadius: 6, marginBottom: 6 }}>عمود رأسي واحد (Single Column)</div>
              <div style={{ background: 'var(--safe-soft)', padding: '5px', borderRadius: 6, color: 'var(--pen-green)' }}>أزرار لمس كبيرة وسهلة</div>
            </div>
          </div>
        </Box>
        <Txt x={1030} y={555} size={22} c="pink" at={1}>تصميم خفيف لأصغر شاشة</Txt>

        {/* Center: Media Query Connector (Right to Left expansion) */}
        <Arrow from={[870, 310]} to={[640, 310]} c="purple" at={2} />
        <Box x={460} y={230} w={200} h={150} c="purple" at={2}>
          <div style={{ padding: '10px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 15, fontWeight: 900, color: 'var(--pen-purple)' }}>استعلام الوسائط</div>
            <div style={{ direction: 'ltr', background: 'var(--surface)', padding: '6px', borderRadius: 6, marginTop: 6, fontFamily: 'monospace', fontSize: 12, fontWeight: 800, color: 'var(--pen-purple)' }}>
              @media (min-width: 768px)
            </div>
            <div style={{ fontSize: 13, marginTop: 6, color: 'var(--pen-ink)' }}>
              توسع تدريجي لليسار ⟵
            </div>
          </div>
        </Box>

        {/* Desktop Browser (Left) */}
        <Browser x={70} y={150} w={360} h={385} c="blue" url="store.eg/home" at={3}>
          <div style={{ padding: '10px 14px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--pen-blue)', textAlign: 'center' }}>
              🖥️ شاشة الحاسوب (Desktop)
            </div>
            <div style={{ marginTop: 8, fontSize: 13, fontWeight: 800 }}>
              <div style={{ background: 'var(--primary-soft)', padding: '4px', borderRadius: 6, marginBottom: 6, textAlign: 'center', color: 'var(--pen-blue)' }}>
                روابط تنقل أفقية كاملة
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <div style={{ flex: 2, background: 'var(--surface)', border: '1px solid var(--border)', padding: '24px 6px', borderRadius: 6, textAlign: 'center' }}>
                  محتوى رئيسي واسع
                </div>
                <div style={{ flex: 1, background: 'var(--warn-soft)', padding: '24px 4px', borderRadius: 6, textAlign: 'center', color: 'var(--pen-orange)', fontSize: 12 }}>
                  شريط جانبي
                </div>
              </div>
            </div>
          </div>
        </Browser>
        <Txt x={250} y={555} size={22} c="blue" at={3}>توسع وتعدد الأعمدة</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={4}>
          💡 استراتيجية الجوال أولاً: نصمم لأصغر شاشة وأقل موارد أولاً، ثم نتوسع تدريجياً عبر Media Queries للشاشات الأكبر!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-dom-tree',
    title: 'نموذج كائن المستند (DOM Tree) والتحديث التفاعلي',
    scene: true,
    notes: (
      <>
        <p><b>نموذج كائن المستند (Document Object Model - DOM):</b></p>
        <p>هو تمثيل شجري لشفرة HTML يقوم المتصفح ببنائه داخل ذاكرة الجهاز فور قراءة المستند:</p>
        <ul>
          <li><b>كل عنصر HTML يتحول إلى عقدة (Node):</b> في الشجرة، ويكون أعلى الشجرة هو كائن المستند <span className="ltr">document</span>.</li>
          <li><b>شجرة حية وديناميكية:</b> الـ DOM ليس كوداً ثابتاً، بل يمكن للغة JavaScript الوصول إلى أي عقدة وتعديل نصوصها أو ألوانها أو إضافة عناصر جديدة وحذفها فوراً استجابة لنقرات المستخدم!</li>
          <li><b>قوة الـ DOM:</b> تعديل الـ DOM يحدث في أجزاء من الألف من الثانية دون الحاجة لتحديث الصفحة بالكامل.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="green" fill="green" tc="green" size={26}>🌳 شجرة الـ DOM</Box>
        <Heading sub="كيف يترجم المتصفح شفرة HTML إلى شجرة تفاعلية حية داخل الذاكرة؟">
          نموذج كائن المستند (Document Object Model - DOM)
        </Heading>

        {/* DOM Tree Diagram on Right */}
        <Box x={620} y={150} w={580} h={385} c="green" at={1}>
          <div style={{ padding: '14px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 20, fontWeight: 900, color: 'var(--pen-green)', marginBottom: 8 }}>
              شجرة كائنات المستند في ذاكرة المتصفح
            </div>

            {/* Root: document */}
            <div style={{ display: 'inline-block', background: 'var(--safe-soft)', border: '2px solid var(--pen-green)', padding: '4px 18px', borderRadius: 8, fontWeight: 900, color: 'var(--pen-green)', fontSize: 17, direction: 'ltr' }}>
              document (جذر المستند)
            </div>
            <div style={{ fontSize: 16, color: 'var(--pen-green)', margin: '2px 0' }}>↓</div>

            {/* html */}
            <div style={{ display: 'inline-block', background: 'var(--primary-soft)', border: '1.5px solid var(--pen-blue)', padding: '3px 16px', borderRadius: 6, fontWeight: 800, color: 'var(--pen-blue)', fontSize: 16 }}>
              &lt;html&gt;
            </div>

            {/* head (right) and body (left) in Arabic RTL order */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 50, marginTop: 4 }}>
              <div>
                <div style={{ fontSize: 15, color: 'var(--pen-purple)' }}>↓</div>
                <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border)', padding: '4px 12px', borderRadius: 6, fontSize: 14, fontWeight: 800 }}>
                  &lt;head&gt;
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>&lt;title&gt;</div>
              </div>

              <div>
                <div style={{ fontSize: 15, color: 'var(--pen-orange)' }}>↓</div>
                <div style={{ background: 'var(--warn-soft)', border: '1.5px solid var(--pen-orange)', padding: '4px 16px', borderRadius: 6, fontSize: 14, fontWeight: 900, color: 'var(--pen-orange)' }}>
                  &lt;body&gt; (العناصر المرئية)
                </div>

                <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                  <span style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '3px 10px', borderRadius: 6, fontSize: 13, fontWeight: 800 }}>&lt;h1&gt;</span>
                  <span style={{ background: 'var(--safe-soft)', border: '2px dashed var(--pen-green)', padding: '3px 10px', borderRadius: 6, fontSize: 13, fontWeight: 900, color: 'var(--pen-green)' }}>&lt;p id="score"&gt;</span>
                  <span style={{ background: 'var(--surface)', border: '1px solid var(--border)', padding: '3px 10px', borderRadius: 6, fontSize: 13, fontWeight: 800 }}>&lt;button&gt;</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
        <Txt x={910} y={555} size={22} c="green" at={1}>تمثيل شجري حي داخل الذاكرة</Txt>

        {/* JavaScript Role on Left */}
        <Box x={80} y={150} w={500} h={385} c="blue" at={2}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 12 }}>
              ⚡ دور لغة JavaScript مع الـ DOM
            </div>
            <div style={{ fontSize: 16.5, lineHeight: 1.7, textAlign: 'right' }}>
              تستطيع لغة JavaScript تعديل أي عقدة في الشجرة فوراً:
              <ul style={{ paddingRight: 16, marginTop: 8, listStyleType: 'disc' }}>
                <li><b>تغيير النصوص:</b> كتابة اسم الطالب ودرجاته.</li>
                <li><b>تعديل التنسيق:</b> تغيير لون الزر أو إخفاء عنصر.</li>
                <li><b>إضافة وحذف العقد:</b> إضافة عنصر جديد للقائمة.</li>
                <li><b>الاستجابة للأحداث:</b> عند نقر الزر (onClick).</li>
              </ul>
            </div>
            <div style={{ marginTop: 10, padding: '8px 12px', background: 'var(--safe-soft)', borderRadius: 8, color: 'var(--pen-green)', fontWeight: 900, fontSize: 15, textAlign: 'center' }}>
              ✔️ التعديل يتم لحظياً دون الحاجة لإعادة تحميل الصفحة!
            </div>
          </div>
        </Box>
        <Txt x={330} y={555} size={22} c="blue" at={2}>تفاعل فوري في أجزاء من الثانية</Txt>

        {/* Connecting Arrow from JS to Node */}
        <Arrow from={[580, 330]} to={[920, 330]} c="green" at={3} />

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={4}>
          💡 حقيقة امتحانية: الـ DOM ليس كوداً ثابتاً، بل كائنات برمجية حية تتفاعل معها JavaScript في التو واللحظة!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-frameworks-and-security',
    title: 'أطر العمل الحديثة (React و Next.js) والأمان ضد هجمات XSS',
    scene: true,
    notes: (
      <>
        <p><b>أطر عمل الواجهة الأمامية والأمان في منهج كتاب المدرسة:</b></p>
        <p><b>مكتبة React:</b></p>
        <ul>
          <li>مكتبة JavaScript مفتوحة المصدر طورتها شركة Meta.</li>
          <li><b>الفكرة الجوهرية:</b> تقسيم الواجهة إلى <b>مكونات قابلة لإعادة الاستخدام (Reusable Components)</b> مثل مكون زر أو بطاقة منتج، وإدارة حالة الواجهة (State).</li>
        </ul>
        <p><b>إطار عمل Next.js:</b></p>
        <ul>
          <li>إطار عمل متكامل مبني فوق React.</li>
          <li><b>ميزته الكبرى:</b> دعم <b>التصيير من جهة الخادم (Server-Side Rendering - SSR)</b>؛ حيث يجهز الخادم كود HTML كاملاً ويرسله للمتصفح، مما يسرع التحميل الأولي ويجعل محركات البحث تؤرشف الموقع بكفاءة عالية (SEO).</li>
        </ul>
        <p><b>الأمان: هجوم البرمجة عبر المواقع (Cross-Site Scripting - XSS):</b></p>
        <ul>
          <li>يحدث عندما يحقن مهاجم كود جافاسكريبت خبيث في حقول التعليقات أو الاستمارات، ويعرضه المتصفح دون تنقية؛ فيعمل الكود ويسرق ملفات تعريف الارتباط (Cookies).</li>
          <li><b>الحماية:</b> تنقية وتطهير المدخلات <b>(Input Sanitization)</b> وتطبيق مبدأ <b>التحقق المزدوج (Client & Server Validation)</b>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="purple" fill="purple" tc="purple" size={26}>🛡️ أطر العمل والأمان</Box>
        <Heading sub="أحدث تقنيات بناء الواجهات الاحترافية وأهم معايير الحماية السيبرانية المقررة">
          أطر العمل الحديثة (React & Next.js) والأمان ضد ثغرات XSS
        </Heading>

        {/* Right: Modern Frameworks */}
        <Box x={660} y={150} w={540} h={385} c="purple" at={1}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-purple)', textAlign: 'center', marginBottom: 12 }}>
              ⚛️ أطر ومكتبات الواجهة الحديثة
            </div>
            <div style={{ background: 'var(--primary-soft)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px', marginBottom: 10 }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-blue)', fontSize: 17 }}>
                ١. مكتبة React (طورتها Meta):
              </div>
              <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.5 }}>
                مبنية على مبدأ <b>المكونات القابلة لإعادة الاستخدام (Reusable Components)</b> وإدارة حالة الواجهة (State).
              </div>
            </div>
            <div style={{ background: 'var(--purple-soft, var(--surface-2))', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-purple)', fontSize: 17 }}>
                ٢. إطار عمل Next.js:
              </div>
              <div style={{ fontSize: 15, marginTop: 4, lineHeight: 1.5 }}>
                مبني فوق React ويدعم <b>التصيير من جهة الخادم (Server-Side Rendering - SSR)</b> لسرعة الفتح وتحسين محركات البحث SEO.
              </div>
            </div>
          </div>
        </Box>
        <Txt x={930} y={555} size={22} c="purple" at={1}>مكونات قابلة لإعادة الاستخدام وتصيير سريع</Txt>

        {/* Left: Security XSS */}
        <Box x={80} y={150} w={540} h={385} c="red" at={2}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-red)', textAlign: 'center', marginBottom: 12 }}>
              🔒 الأمان: ثغرة XSS والتحقق المزدوج
            </div>
            <div style={{ background: 'var(--danger-soft)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px', marginBottom: 10 }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-red)', fontSize: 17 }}>
                ⚠️ هجوم حقن السكربتات (Cross-Site Scripting - XSS):
              </div>
              <div style={{ fontSize: 14.5, marginTop: 4, lineHeight: 1.5 }}>
                حقن كود JS خبيث في حقول التعليقات لسرقة الـ Cookies.<br />
                <span style={{ color: 'var(--pen-green)', fontWeight: 800 }}>الحل: تنقية وتطهير المدخلات (Input Sanitization).</span>
              </div>
            </div>
            <div style={{ background: 'var(--safe-soft)', border: '1px solid var(--border)', borderRadius: 10, padding: '10px 14px' }}>
              <div style={{ fontWeight: 900, color: 'var(--pen-green)', fontSize: 17 }}>
                🛡️ قاعدة التحقق المزدوج (Dual Validation):
              </div>
              <div style={{ fontSize: 14.5, marginTop: 4, lineHeight: 1.5 }}>
                • <b>تحقق العميل:</b> لتنبيه المستخدم بسرعة فورية.<br />
                • <b>تحقق الخادم:</b> خط الدفاع الأمني الحقيقي الإلزامي!
              </div>
            </div>
          </div>
        </Box>
        <Txt x={350} y={555} size={22} c="red" at={2}>تحقق الخادم هو صمام الأمان الإلزامي</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={3}>
          💡 سؤال امتحان: لماذا نتحقق في الخادم رغم وجود تحقق في المتصفح؟ لأن تحقق المتصفح يمكن تجاوزه، والخادم هو خط الدفاع الأمني الحقيقي!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-master-comparisons',
    title: 'المقارنات الذهبية للامتحان (Golden Comparison Tables)',
    scene: true,
    notes: (
      <>
        <p><b>جداول المقارنات الذهبية للامتحان:</b></p>
        <p>هذه الجداول تلخص الفروق الدقيقة التي تتكرر دائماً في امتحانات نهاية الفصل الدراسي:</p>
        <ol>
          <li><b>GET مقابل POST:</b> أين توضع البيانات؟ هل العملية آمنة للمعلومات الحساسة؟ هل هي Idempotent؟ هل تقبل التخزين بالمفضلة؟</li>
          <li><b>HTTP مقابل HTTPS:</b> التشفير، بروتوكول TLS، الشهادة الرقمية، المنافذ (80 مقابل 443).</li>
          <li><b>أكواد استجابة HTTP:</b> فئات النجاح (200, 201)، أخطاء العميل (400, 401, 403, 404)، وأخطاء الخادم (500).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="green" fill="green" tc="green" size={26}>🏆 المقارنات الذهبية</Box>
        <Heading sub="ملخص الفروق والمقارنات الحاسمة التي لا يخلو منها أي امتحان وزاري">
          جداول المقارنات الذهبية للامتحان 🏆
        </Heading>

        {/* Table 1: GET vs POST (Right) */}
        <Box x={640} y={150} w={560} h={390} c="blue" at={1}>
          <div style={{ padding: '12px 16px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 19, fontWeight: 900, color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 8 }}>
              ⚡ مقارنة أساليب الطلب: GET مقابل POST
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14.5, textAlign: 'right' }}>
              <thead>
                <tr style={{ background: 'var(--primary-soft)', borderBottom: '2px solid var(--pen-blue)' }}>
                  <th style={{ padding: '6px 8px' }}>وجه المقارنة</th>
                  <th style={{ padding: '6px 8px', color: 'var(--pen-blue)' }}>طريقة GET</th>
                  <th style={{ padding: '6px 8px', color: 'var(--pen-purple)' }}>طريقة POST</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 800 }}>الغرض الأساسي</td>
                  <td style={{ padding: '5px 8px' }}>جلب واسترجاع بيانات</td>
                  <td style={{ padding: '5px 8px' }}>إرسال وتخزين بيانات جديدة</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 800 }}>مكان البيانات</td>
                  <td style={{ padding: '5px 8px' }}>شريط العنوان (URL)</td>
                  <td style={{ padding: '5px 8px' }}>جسم الطلب (Request Body)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 800 }}>الأمان للسرية</td>
                  <td style={{ padding: '5px 8px', color: 'var(--pen-red)' }}>غير آمنة لكلمات السر</td>
                  <td style={{ padding: '5px 8px', color: 'var(--pen-green)' }}>آمنة وتحمي الخصوصية</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '5px 8px', fontWeight: 800 }}>خاصية Idempotent</td>
                  <td style={{ padding: '5px 8px', color: 'var(--pen-green)' }}>نعم (تكرارها آمن)</td>
                  <td style={{ padding: '5px 8px', color: 'var(--pen-red)' }}>لا (تكرارها يكرر العملية)</td>
                </tr>
                <tr>
                  <td style={{ padding: '5px 8px', fontWeight: 800 }}>المفضلة والكاش</td>
                  <td style={{ padding: '5px 8px' }}>تقبل الحفظ والكاش</td>
                  <td style={{ padding: '5px 8px' }}>لا تقبل الحفظ بالمفضلة</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Box>
        <Txt x={920} y={558} size={22} c="blue" at={1}>المقارنة الأكثر تكراراً في الامتحانات</Txt>

        {/* Table 2: HTTP vs HTTPS & Codes (Left) */}
        <Box x={80} y={150} w={530} h={390} c="green" at={2}>
          <div style={{ padding: '12px 16px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 19, fontWeight: 900, color: 'var(--pen-green)', textAlign: 'center', marginBottom: 8 }}>
              🔒 بروتوكول HTTP مقابل HTTPS المشفر
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14, textAlign: 'right' }}>
              <thead>
                <tr style={{ background: 'var(--safe-soft)', borderBottom: '2px solid var(--pen-green)' }}>
                  <th style={{ padding: '5px 6px' }}>وجه المقارنة</th>
                  <th style={{ padding: '5px 6px' }}>HTTP العادي</th>
                  <th style={{ padding: '5px 6px', color: 'var(--pen-green)' }}>HTTPS المشفر 🔒</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '4px 6px', fontWeight: 800 }}>طبيعة النص</td>
                  <td style={{ padding: '4px 6px' }}>نص مكشوف Plain Text</td>
                  <td style={{ padding: '4px 6px' }}>مشفر تماماً TLS/SSL</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '4px 6px', fontWeight: 800 }}>هجوم الوسيط</td>
                  <td style={{ padding: '4px 6px', color: 'var(--pen-red)' }}>عرضة للتنصت والسرقة</td>
                  <td style={{ padding: '4px 6px', color: 'var(--pen-green)' }}>محمي تماماً</td>
                </tr>
                <tr style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '4px 6px', fontWeight: 800 }}>المنفذ الافتراضي</td>
                  <td style={{ padding: '4px 6px' }}>منفذ 80</td>
                  <td style={{ padding: '4px 6px' }}>منفذ 443</td>
                </tr>
              </tbody>
            </table>

            <div style={{ marginTop: 8, borderTop: '1.5px dashed var(--border)', paddingTop: 6 }}>
              <div style={{ fontSize: 15, fontWeight: 900, color: 'var(--pen-orange)', marginBottom: 4 }}>
                🚦 ملخص أكواد استجابة السيرفر:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 4, fontSize: 13 }}>
                <div>🟢 <b>200:</b> نجاح الطلب</div>
                <div>🟢 <b>201:</b> إنشاء مورد جديد</div>
                <div>🟡 <b>400:</b> طلب غير سليم</div>
                <div>🟡 <b>401:</b> يحتاج تسجيل دخول</div>
                <div>🟡 <b>403:</b> محظور الصلاحية</div>
                <div>🟡 <b>404:</b> غير موجود</div>
                <div style={{ gridColumn: 'span 2' }}>🔴 <b>500:</b> عطل برمجي في خادم الويب</div>
              </div>
            </div>
          </div>
        </Box>
        <Txt x={345} y={558} size={22} c="green" at={2}>الأمان وأكواد الحالة بنظرة واحدة</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={3}>
          🎯 سر التفوق: تذكر أن GET للقراءة فقط، و POST للتعديل، والمنفذ 80 لـ HTTP العادي، والمنفذ 443 لـ HTTPS المشفر!
        </Note>
      </Scene>
    ),
  },
];

export const reviewLesson1Points: FrameDef = {
  id: 'review-lesson1-points', title: 'نقاط مراجعة الدرس الأول (البنية العامة لتطبيقات الويب)', scene: true,
  notes: (
    <>
      <p><b>نقاط مراجعة الدرس الأول (البنية العامة لتطبيقات الويب):</b></p>
      <ul>
        <li><b>تطبيق الويب:</b> برنامج يعمل عبر الإنترنت ويُستخدم غالباً عبر المتصفح ليتفاعل مع المستخدم وينفذ أوامره.</li>
        <li><b>بنية الطبقات الثلاث:</b>
          <ol>
            <li><b>الواجهة الأمامية (Frontend):</b> الجزء المرئي على الشاشة الذي يتفاعل معه المستخدم مباشرة.</li>
            <li><b>الواجهة الخلفية (Backend):</b> الجزء المسؤول عن المعالجة والمنطق وتطبيق قواعد التطبيق في الخادم.</li>
            <li><b>قاعدة البيانات (Database):</b> نظام ينظم ويخزن البيانات ويديرها بشكل دائم.</li>
          </ol>
        </li>
        <li><b>تدفق طلب المستخدم:</b> يبدأ من الواجهة الأمامية ← ترسل طلباً للواجهة الخلفية ← تطلب وتسترجع البيانات من قاعدة البيانات ← تعيد النتيجة للواجهة الأمامية.</li>
      </ul>
    </>
  ),
  render: () => (
    <Scene>
      <Heading sub="تلخيص مركز ومباشر لكافة أركان الدرس الأول في نقاط أساسية">
        🌐 مراجعة الدرس الأول: البنية العامة لتطبيقات الويب
      </Heading>
      <Place x={140} y={150} w={1000} h={100} at={1}>
        <div className="p-3.5 rounded-xl border flex items-center justify-between" style={{ background: '#0f172a', borderColor: '#2563eb' }}>
          <div>
            <span className="text-xs font-bold text-sky-400 block mb-1">١. ما هو تطبيق الويب؟ (Web Application)</span>
            <p className="text-xs text-slate-300 leading-relaxed">
              برنامج يعمل عبر الإنترنت ويُستخدم غالباً عبر متصفح الويب (مثل Chrome). لا يعرض مجرد صفحات ثابتة، بل يتفاعل مع المستخدم وينفذ أوامره (كالتبضع، البحث، والتسجيل).
            </p>
          </div>
          <span className="text-3xl pr-4">💻</span>
        </div>
      </Place>
      <Place x={140} y={265} w={1000} h={190} at={2}>
        <div className="p-3.5 rounded-xl border" style={{ background: '#0a0f1d', borderColor: '#334155' }}>
          <span className="text-xs font-bold text-amber-400 block mb-2">٢. بنية الطبقات الثلاث (Three-tier Architecture)</span>
          <div className="grid grid-cols-3 gap-3">
            <div className="p-2.5 rounded-lg border bg-slate-900 border-sky-800/60">
              <span className="text-xs font-bold text-sky-400 block mb-1">🖥️ الواجهة الأمامية (Frontend)</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                مكون الشاشة الذي يراه المستخدم ويتفاعل معه مباشرة في المتصفح (عرض المحتوى، الأزرار، والمدخلات).
              </p>
            </div>
            <div className="p-2.5 rounded-lg border bg-slate-900 border-emerald-800/60">
              <span className="text-xs font-bold text-emerald-400 block mb-1">⚙️ الواجهة الخلفية (Backend)</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                الجزء المسؤول عن المعالجة والمنطق على جانب الخادم (تطبيق القواعد، التحقق، وتنسيق العمليات).
              </p>
            </div>
            <div className="p-2.5 rounded-lg border bg-slate-900 border-purple-800/60">
              <span className="text-xs font-bold text-purple-400 block mb-1">🗄️ قاعدة البيانات (Database)</span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                نظام ينظم البيانات ويخزنها ويديرها بشكل دائم (حسابات المستخدمين، سجلات المنتجات، والطلبات).
              </p>
            </div>
          </div>
        </div>
      </Place>
      <Place x={140} y={470} w={1000} h={170} at={3}>
        <div className="p-3.5 rounded-xl border" style={{ background: '#0a0f1d', borderColor: '#059669' }}>
          <span className="text-xs font-bold text-emerald-400 block mb-2">٣. مسار تدفق الطلب عبر الطبقات (Request Flow)</span>
          <div className="flex items-center justify-between text-xs text-slate-200 gap-2">
            <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="font-bold text-sky-300 block mb-0.5">١. إجراء المستخدم</span>
              <span className="text-[10px] text-slate-400">كتابة بحث أو نقر زر في الواجهة الأمامية</span>
            </div>
            <span className="text-emerald-400 font-bold">←</span>
            <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="font-bold text-emerald-300 block mb-0.5">٢. معالجة الخادم</span>
              <span className="text-[10px] text-slate-400">تطبيق قواعد البحث بالواجهة الخلفية</span>
            </div>
            <span className="text-emerald-400 font-bold">←</span>
            <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="font-bold text-purple-300 block mb-0.5">٣. استرجاع البيانات</span>
              <span className="text-[10px] text-slate-400">جلب السجلات من قاعدة البيانات</span>
            </div>
            <span className="text-emerald-400 font-bold">←</span>
            <div className="flex-1 p-2 rounded bg-slate-900 border border-slate-800 text-center">
              <span className="font-bold text-sky-300 block mb-0.5">٤. العرض للمستخدم</span>
              <span className="text-[10px] text-slate-400">تحديث شاشة الواجهة الأمامية بالنتائج</span>
            </div>
          </div>
        </div>
      </Place>
    </Scene>
  ),
};

export const reviewLesson2Points: FrameDef = {
  id: 'review-lesson2-points', title: 'نقاط مراجعة الدرس الثاني (طرق الاتصال في تطبيقات الويب)', scene: true,
  notes: (
    <>
      <p><b>نقاط مراجعة الدرس الثاني (طرق الاتصال في تطبيقات الويب):</b></p>
      <ul>
        <li><b>نموذج العميل والخادم:</b> العميل يرسل الطلب (Request) والخادم يستقبل ويعالج ويعيد الاستجابة (Response).</li>
        <li><b>بروتوكول HTTP:</b> بروتوكول نقل الرسائل النصية بين العميل والخادم.</li>
        <li><b>بروتوكول HTTPS المشفر:</b> محمي بـ TLS لضمان سرية الاتصال ومصادقة الخادم وحماية البيانات من التنصت.</li>
        <li><b>أساليب الطلب:</b> طريقة GET للاسترجاع والقراءة، وطريقة POST للإرسال والتخزين.</li>
        <li><b>رموز الحالة:</b> 200 (نجاح OK)، 404 (المورد غير موجود Not Found)، 500 (خطأ بالخادم Server Error).</li>
        <li><b>الـ API و JSON:</b> قواعد لطلب البيانات، و JSON صيغة نصية مهيكلة لتبادل البيانات بنظام المفتاح والقيمة.</li>
      </ul>
    </>
  ),
  render: () => (
    <Scene>
      <Heading sub="تلخيص شامل لبروتوكولات الويب وأساليب الطلب ورموز الحالة بصيغة نقاط">
        📡 مراجعة الدرس الثاني: طرق الاتصال في تطبيقات الويب
      </Heading>
      <Place x={140} y={150} w={490} h={235} at={1}>
        <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#2563eb' }}>
          <div>
            <span className="text-xs font-bold text-sky-400 block mb-1.5">١. نموذج العميل والخادم وأمان HTTPS</span>
            <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• <b>العميل (Client):</b> المتصفح الذي يبدأ دائماً بإرسال الطلب (Request).</li>
              <li>• <b>الخادم (Server):</b> يستقبل الطلب، يعالجه، ويعيد الاستجابة (Response).</li>
              <li>• <b>HTTP:</b> بروتوكول تبادل الرسائل النصية غير المشفر.</li>
              <li>• <b>HTTPS و TLS:</b> بروتوكول محمي بتشفير TLS لضمان سرية الاتصال ومصادقة الخادم.</li>
            </ul>
          </div>
          <span className="text-[10px] text-sky-400/80 font-mono">Client-Server & TLS Encryption</span>
        </div>
      </Place>
      <Place x={650} y={150} w={490} h={235} at={2}>
        <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#a855f7' }}>
          <div>
            <span className="text-xs font-bold text-purple-400 block mb-1.5">٢. طرق الطلب الأساسية (HTTP Methods)</span>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>
                <b className="text-sky-300">طريقة GET:</b> تُستخدم لطلب واسترجاع بيانات أو صفحات من الخادم دون تعديلها (مثل: عرض صفحة ويب، أو نتائج البحث).
              </li>
              <li>
                <b className="text-purple-300">طريقة POST:</b> تُستخدم لإرسال بيانات جديدة إلى الخادم ليعالجها ويخزنها (مثل: إرسال استمارة تسجيل، أو كلمة المرور).
              </li>
            </ul>
          </div>
          <span className="text-[10px] text-purple-400/80 font-mono">GET (Retrieve) vs POST (Send/Process)</span>
        </div>
      </Place>
      <Place x={140} y={400} w={490} h={240} at={3}>
        <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#f59e0b' }}>
          <div>
            <span className="text-xs font-bold text-amber-400 block mb-1.5">٣. رموز حالة الخادم القياسية (Status Codes)</span>
            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="font-bold text-emerald-400 font-mono">200 OK</span>
                <span>تمت معالجة الطلب بنجاح تام</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="font-bold text-amber-400 font-mono">404 Not Found</span>
                <span>المورد أو الرابط غير موجود على الخادم</span>
              </div>
              <div className="p-1.5 rounded bg-slate-900 border border-slate-800 flex justify-between">
                <span className="font-bold text-red-400 font-mono">500 Server Error</span>
                <span>حدث خطأ أو عطل داخلي في الخادم</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-amber-400/80 font-mono">HTTP Response Status Codes</span>
        </div>
      </Place>
      <Place x={650} y={400} w={490} h={240} at={4}>
        <div className="p-3.5 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#10b981' }}>
          <div>
            <span className="text-xs font-bold text-emerald-400 block mb-1.5">٤. واجهة التطبيقات (API) وصيغة البيانات JSON</span>
            <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• <b>API:</b> مجموعة قواعد تسمح لبرنامج أو واجهة بطلب بيانات أو وظائف من برنامج أو خدمة أخرى (مثل خدمة الطقس).</li>
              <li>• <b>صيغة JSON:</b> صيغة نصية شائعة وخفيفة لتبادل البيانات المنظمة بين العميل والخادم بنظام المفتاح والقيمة:
                <div className="p-1.5 rounded bg-slate-900 font-mono text-[11px] text-emerald-300 mt-1 border border-slate-800" dir="ltr">
                  &#123; "city": "Cairo", "temp": 28 &#125;
                </div>
              </li>
            </ul>
          </div>
          <span className="text-[10px] text-emerald-400/80 font-mono">API & Structured JSON Data</span>
        </div>
      </Place>
    </Scene>
  ),
};
