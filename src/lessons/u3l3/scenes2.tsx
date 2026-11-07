// Board scenes · Unit 3 · Lesson 3 · part 2 (Frontend Trio: HTML, CSS, JavaScript in full slides + Semantic HTML)
import type { FrameDef } from '../../board/types';
import { Box, Heading, Place, Scene } from '../../sketch/Sketch';
import { CssBeforeAfterWidget, HtmlStructureDiagram, JsCounterWidget } from './demos';

export const part2: FrameDef[] = [
  /* =========================================================================
     ١. شريحة كاملة مخصصة لـ HTML (مطابقة للصورة ١ والصورة ٢)
     ========================================================================= */
  {
    id: 'html-slide', title: 'أولاً: لغة HTML (بنية وهيكل صفحة الويب)', scene: true,
    notes: (
      <>
        <p><b>أولاً: لغة HTML — HyperText Markup Language:</b></p>
        <p>وظيفتها تحديد هيكل صفحة الويب (Structure)، وتوصف العناصر الموجودة فيها، مثل: العناوين، الفقرات، الصور، الروابط، الأزرار، وحقول إدخال البيانات.</p>
        <p><b>مثال توضيحي:</b> كود يحدد عنواناً وفقرة وزراً (اشتري الآن). هل حددنا لون الزر أو حجمه؟ لأ! هل الزر يضيف منتجاً للسلة؟ لأ! إحنا فقط بنينا العناصر الأساسية.</p>
        <p><b>التشبيه الوزاري المعتمد:</b> تشبه لغة HTML هيكل المبنى الخرساني وجدرانه.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="اختصار لـ HyperText Markup Language — تحديد هيكل وبنية عناصر الصفحة">
          أولاً: لغة HTML (بنية وهيكل صفحة الويب)
        </Heading>

        {/* Right Side: The Colored Wireframe Diagram (matching Image 1) */}
        <Place x={140} y={150} w={380} h={390} at={1}>
          <div className="p-3.5 rounded-xl border bg-slate-900 border-sky-800 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-2 text-center">
                مخطط الهيكل البنائي للصفحة (HTML Structure)
              </span>
              <HtmlStructureDiagram />
            </div>
            <span className="text-[10px] text-slate-400 text-center font-mono" dir="ltr">
              &lt;header&gt; | &lt;nav&gt; | &lt;main&gt; &lt;section&gt; | &lt;footer&gt;
            </span>
          </div>
        </Place>

        {/* Left Side: Role, Bullets & Code Explanations (matching Image 1 & 2) */}
        <Place x={540} y={150} w={600} h={390} at={2}>
          <div className="p-4 rounded-xl border bg-slate-900/90 border-slate-800 h-full flex flex-col justify-between text-right text-slate-200">
            <div>
              <div className="border-b border-slate-800 pb-2 mb-2 flex items-center justify-between">
                <span className="font-extrabold text-sm text-sky-400">وظيفتها ومسؤوليتها الأساسية:</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">Structure</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                تحديد هيكل صفحة الويب (Structure)، وتوصف العناصر الموجودة فيها، زي:
              </p>
              <div className="grid grid-cols-3 gap-1 text-[11px] text-slate-300 font-bold mb-3 pr-2">
                <span>• العناوين.</span>
                <span>• الفقرات.</span>
                <span>• الصور.</span>
                <span>• الروابط.</span>
                <span>• الأزرار.</span>
                <span>• حقول إدخال البيانات.</span>
              </div>

              {/* Code Snippet from image 2 */}
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-sky-300 mb-2" dir="ltr">
                &lt;h1&gt;متجر الملابس&lt;/h1&gt;<br />
                &lt;p&gt;أهلاً بك في متجرنا&lt;/p&gt;<br />
                &lt;button&gt;اشتري الآن&lt;/button&gt;
              </div>

              {/* Pedagogical insight from image 2 */}
              <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-800/40 text-[11px] text-slate-200 leading-relaxed">
                💡 <b>الشرح التربوي:</b> الكود ده بيحدد إن عندنا عنوان وفقرة وزرار. لكن هل حددنا لون الزرار أو حجمه؟ <b>لأ!</b> هل الزرار بيضيف منتج للسلة؟ <b>لأ!</b> إحنا بس بنينا العناصر الأساسية.
              </div>
            </div>

            <div className="text-[11px] text-sky-300 border-t border-slate-800 pt-1.5 flex items-center justify-between">
              <span>🏛️ التشبيه الوزاري:</span>
              <span className="font-bold">هيكل المبنى الخرساني والجدران الحاملة</span>
            </div>
          </div>
        </Place>

        {/* Bottom Rule Box */}
        <Box x={140} y={555} w={1000} h={90} c="blue" fill="blue" size={20} tc="ink" at={3}>
          🏗️ <b>قاعدة لغة HTML:</b> تهتم بما هو موجود في الصفحة (Content & Structure) دون التدخل في شكله الجمالي أو سلوكه البرمجي.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٢. شريحة كاملة مخصصة لـ CSS (مطابقة للصورة ٣)
     ========================================================================= */
  {
    id: 'css-slide', title: 'ثانياً: لغة CSS (مظهر وتنسيق صفحة الويب)', scene: true,
    notes: (
      <>
        <p><b>ثانياً: لغة CSS — Cascading Style Sheets:</b></p>
        <p>وظيفتها تحديد مظهر صفحة الويب (Appearance). يعني بنستخدمها في: تغيير ألوان النصوص والخلفيات، تحديد حجم الخط، تحديد أبعاد العناصر، ترتيب العناصر جنب بعضها، إضافة المسافات، وتنسيق الأزرار والصور.</p>
        <p><b>كود توضيحي:</b> تلوين العنوان بالأزرق والزر باللون الأخضر والكتابة باللون الأبيض.</p>
        <p><b>ملحوظة هامة:</b> CSS غير مسؤولة عن تنفيذ وظيفة الزرار، هي مسؤولة عن شكله فقط!</p>
        <p><b>التشبيه الوزاري:</b> تشبه لغة CSS الديكور والتصميم الداخلي والخارجي والدهانات للمبنى.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="اختصار لـ Cascading Style Sheets — تحديد مظهر وتنسيق وجماليات صفحة الويب">
          ثانياً: لغة CSS (مظهر وتنسيق صفحة الويب)
        </Heading>

        {/* Right Side: Before / After Widget (matching Image 3) */}
        <Place x={140} y={150} w={490} h={390} at={1}>
          <div className="p-3 rounded-xl border bg-slate-900 border-purple-800 flex flex-col justify-between h-full">
            <CssBeforeAfterWidget />
            <span className="text-[10px] text-purple-300 text-center font-mono">
              HTML/CSS Before & After Visual Styling
            </span>
          </div>
        </Place>

        {/* Left Side: Role, Bullets & Code Explanations (matching Image 3) */}
        <Place x={650} y={150} w={490} h={390} at={2}>
          <div className="p-4 rounded-xl border bg-slate-900/90 border-slate-800 h-full flex flex-col justify-between text-right text-slate-200">
            <div>
              <div className="border-b border-slate-800 pb-2 mb-2 flex items-center justify-between">
                <span className="font-extrabold text-sm text-purple-400">وظيفتها ومسؤوليتها الأساسية:</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">Appearance</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                تحديد مظهر صفحة الويب (Appearance)، يعني بنستخدمها في:
              </p>
              <div className="grid grid-cols-2 gap-1 text-[11px] text-slate-300 font-bold mb-3 pr-2">
                <span>• تغيير ألوان النصوص والخلفيات.</span>
                <span>• تحديد حجم الخط.</span>
                <span>• تحديد أبعاد العناصر.</span>
                <span>• ترتيب العناصر جنب بعضها.</span>
                <span>• إضافة المسافات.</span>
                <span>• تنسيق الأزرار والصور.</span>
              </div>

              {/* Code Snippet from image 3 */}
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-purple-300 mb-2" dir="ltr">
                h1 &#123; color: blue; &#125;<br />
                button &#123; background-color: green; color: white; font-size: 20px; &#125;
              </div>

              {/* Pedagogical insight from image 3 */}
              <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-800/40 text-[11px] text-slate-200 leading-relaxed">
                🎨 <b>الشرح والملحوظة المهمة:</b> هنا غيرنا لون العنوان، وخلينا الزرار أخضر والكتابة بيضاء. <b>ملحوظة مهمة:</b> CSS غير مسؤولة عن تنفيذ وظيفة الزرار، هي مسؤولة عن شكله فقط!
              </div>
            </div>

            <div className="text-[11px] text-purple-300 border-t border-slate-800 pt-1.5 flex items-center justify-between">
              <span>🏛️ التشبيه الوزاري:</span>
              <span className="font-bold">التصميم الداخلي والديكور والدهانات للمبنى</span>
            </div>
          </div>
        </Place>

        {/* Bottom Rule Box */}
        <Box x={140} y={555} w={1000} h={90} c="purple" fill="purple" size={20} tc="ink" at={3}>
          🎨 <b>قاعدة لغة CSS:</b> تهتم بكيف تبدو العناصر على الشاشة (Colors, Layout, Fonts)، ولا تتدخل في وظيفة الزر أو ما يحدث عند النقر عليه.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٣. شريحة كاملة مخصصة لـ JavaScript (مطابقة للصورة ٤)
     ========================================================================= */
  {
    id: 'js-slide', title: 'ثالثاً: لغة JavaScript (السلوك والتفاعل الحي)', scene: true,
    notes: (
      <>
        <p><b>ثالثاً: لغة JavaScript — Behavior & Interactivity:</b></p>
        <p>وظيفتها إضافة السلوك والتفاعلية إلى صفحة الويب. يعني إيه؟ يعني الصفحة متبقاش مجرد نصوص وصور جامدة، لكن تستجيب لتصرفات المستخدم.</p>
        <p><b>أمثلة واقعية:</b> الضغط على زر يضيف منتجاً للسلة، ظهور رسالة تنبيه عند الضغط، التحقق من صحة البيانات، تحديث عدد الإعجابات، وتحديث جزء من الصفحة دون إعادة تحميلها بالكامل.</p>
        <p><b>كود توضيحي:</b> زر مع حدث onclick يُظهر تنبيهاً alert.</p>
        <p><b>التشبيه الوزاري:</b> تشبه لغة JavaScript أنظمة الكهرباء والسباكة والأجهزة التي تجعل المبنى يعمل ويعيش.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="إضافة السلوك والتفاعلية (Behavior & Interactivity) واستجابة الصفحة لأفعال المستخدم">
          ثالثاً: لغة JavaScript (السلوك والتفاعل الحي)
        </Heading>

        {/* Right Side: Working Counter App (matching Image 4) */}
        <Place x={140} y={150} w={380} h={390} at={1}>
          <div className="p-3 rounded-xl border bg-slate-900 border-yellow-800 flex flex-col justify-between h-full">
            <div>
              <span className="text-xs font-bold text-yellow-400 block mb-2 text-center">
                تطبيق العداد التفاعلي (Live Counter App)
              </span>
              <JsCounterWidget />
            </div>
            <span className="text-[10px] text-yellow-300 text-center font-mono" dir="ltr">
              button.onclick = () =&gt; updateCounter();
            </span>
          </div>
        </Place>

        {/* Left Side: Role, Bullets & Code Explanations (matching Image 4) */}
        <Place x={540} y={150} w={600} h={390} at={2}>
          <div className="p-4 rounded-xl border bg-slate-900/90 border-slate-800 h-full flex flex-col justify-between text-right text-slate-200">
            <div>
              <div className="border-b border-slate-800 pb-2 mb-2 flex items-center justify-between">
                <span className="font-extrabold text-sm text-yellow-400">وظيفتها ومسؤوليتها الأساسية:</span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">Behavior & Interactivity</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-2">
                وظيفتها إضافة السلوك والتفاعلية (Behavior & Interactivity). يعني إيه؟ يعني الصفحة متبقاش مجرد نصوص وصور، لكن تستجيب لتصرفات المستخدم:
              </p>
              <div className="space-y-1 text-[11px] text-slate-300 font-bold mb-3 pr-2">
                <div>• الضغط على زرار يضيف منتج للسلة.</div>
                <div>• ظهور رسالة عند الضغط على زرار.</div>
                <div>• التحقق من صحة البيانات في نموذج تسجيل الدخول.</div>
                <div>• تحديث عدد الإعجابات وتحديث جزء من الصفحة دون إعادة تحميلها بالكامل.</div>
              </div>

              {/* Code Snippet from image 4 */}
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-yellow-300 mb-2" dir="ltr">
                &lt;button onclick="alert('أهلاً بك')"&gt;اضغط هنا&lt;/button&gt;
              </div>

              {/* Pedagogical insight from image 4 */}
              <div className="p-2.5 rounded-lg bg-yellow-950/30 border border-yellow-800/40 text-[11px] text-slate-200 leading-relaxed">
                ⚡ <b>الشرح التربوي:</b> لما المستخدم يضغط على الزرار، بتظهر رسالة. هنا <b>JavaScript</b> هي اللي نفذت التفاعل الحقيقي.
              </div>
            </div>

            <div className="text-[11px] text-yellow-300 border-t border-slate-800 pt-1.5 flex items-center justify-between">
              <span>🏛️ التشبيه الوزاري:</span>
              <span className="font-bold">شبكة الكهرباء والسباكة والأجهزة التي تجعل المبنى حياً</span>
            </div>
          </div>
        </Place>

        {/* Bottom Rule Box */}
        <Box x={140} y={555} w={1000} h={90} c="orange" fill="orange" size={20} tc="ink" at={3}>
          ⚡ <b>قاعدة لغة JavaScript:</b> هي محرك الذكاء والتفاعل في الواجهة؛ تحوّل الصفحة من مستند مقروء إلى تطبيق حي يتفاعل مع كل نقرة وإدخال.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٤. مشهد خلاصة الثلاثي والملحوظة الوزارية الهامة
     ========================================================================= */
  {
    id: 'frontend-trio', title: 'خلاصة تكامل الثلاثي والملحوظة الوزارية', scene: true,
    notes: (
      <>
        <p><b>خلاصة تكامل الثلاثي الأساسي (HTML · CSS · JavaScript):</b></p>
        <ol>
          <li><b>HTML (البنية):</b> يحدد بنية وهيكل الصفحة (هيكل المبنى).</li>
          <li><b>CSS (المظهر):</b> يحدد مظهر وشكل وألوان الصفحة (الديكور والدهانات).</li>
          <li><b>JavaScript (السلوك):</b> يضيف السلوك والتفاعل والأزرار الحية (الكهرباء والسباكة).</li>
        </ol>
        <p><b>ملحوظة كتاب الوزارة الرسمية:</b> ليس من الضروري أن تستخدم الصفحة التقنيات الثلاث كلها معاً، بل يمكن لصفحة أن تكتفي بـ HTML وحده، أو HTML مع CSS، أو الثلاثة معاً بحسب ما تحتاجه.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مقارنة شاملة تلخص تكامل لغات الواجهة الأمامية والملحوظة الوزارية">
          خلاصة تكامل الثلاثي: HTML · CSS · JavaScript
        </Heading>

        {/* 3 Columns for Trio in Arabic Right-to-Left order: HTML (Right) -> CSS (Center) -> JS (Left) */}
        {/* 1. HTML (Right: x=820) */}
        <Place x={820} y={150} w={320} h={380} at={1}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#38bdf8' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-3" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-sky-400">١. لغة HTML</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">البنية (Structure)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                تحدد بنية (هيكل) ومحتوى صفحة الويب، وتصف العناصر الأساسية مثل العناوين، الفقرات، الصور، والروابط.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">🏛️ التشبيه الوزاري:</span>
                <span className="text-xs font-bold text-sky-300">هيكل المبنى والجدران</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-sky-400 border border-slate-800" dir="ltr">
              &lt;h1&gt;العنوان&lt;/h1&gt;
            </div>
          </div>
        </Place>

        {/* 2. CSS (Center: x=480) */}
        <Place x={480} y={150} w={320} h={380} at={2}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#a855f7' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-3" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-purple-400">٢. لغة CSS</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">المظهر (Presentation)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                تحدد مظهر وتنسيق صفحة الويب، كالألوان، والتخطيط، ومقاسات العناصر والخطوط، والمسافات الجمالية.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">🏛️ التشبيه الوزاري:</span>
                <span className="text-xs font-bold text-purple-300">الديكور الداخلي والدهانات</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-purple-400 border border-slate-800" dir="ltr">
              color: #38bdf8; font-size: 20px;
            </div>
          </div>
        </Place>

        {/* 3. JavaScript (Left: x=140) */}
        <Place x={140} y={150} w={320} h={380} at={3}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#eab308' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-3" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-yellow-400">٣. لغة JavaScript</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-yellow-950 text-yellow-300 border border-yellow-800">السلوك (Behavior)</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                تضيف السلوك والتفاعلية إلى صفحة الويب، كالأزرار المستجيبة، وتحديث جزء فقط من الشاشة، وتشغيل العدادات.
              </p>
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block mb-1">🏛️ التشبيه الوزاري:</span>
                <span className="text-xs font-bold text-yellow-300">أنظمة الكهرباء والسباكة</span>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-950 font-mono text-[11px] text-yellow-400 border border-slate-800" dir="ltr">
              button.onclick = () =&gt; update();
            </div>
          </div>
        </Place>

        {/* Bottom Rule Box */}
        <Box x={140} y={550} w={1000} h={95} c="blue" fill="blue" size={20} tc="ink" at={4}>
          📌 <b>ملحوظة كتاب الوزارة:</b> تؤدي هذه التقنيات أدواراً مختلفة، وليس من الضروري أن تستخدم الصفحة التقنيات الثلاث كلها معاً، بل يمكن استخدام HTML وحده أو مع CSS أو مع JS بحسب الوظائف المطلوبة.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     ٥. مشهد لغة HTML الدلالية (Semantic HTML) وإمكانية الوصول و SEO
     ========================================================================= */
  {
    id: 'semantic-html', title: 'لغة HTML الدلالية (Semantic HTML)', scene: true,
    notes: (
      <>
        <p><b>لغة HTML الدلالية (Semantic HTML):</b></p>
        <p>استخدام عناصر توضح وظيفة ومعنى أجزاء الصفحة ومحتواها، مثل:</p>
        <ul>
          <li><code>&lt;header&gt;</code>: في أعلى الصفحة (رأس الصفحة).</li>
          <li><code>&lt;nav&gt;</code>: لمنطقة روابط التنقل.</li>
          <li><code>&lt;main&gt;</code>: للمحتوى الرئيس الفريد للصفحة.</li>
          <li><code>&lt;footer&gt;</code>: في أسفل الصفحة (تذييل الصفحة).</li>
        </ul>
        <p><b>فوائد HTML الدلالية:</b></p>
        <ol>
          <li><b>إمكانية الوصول (Accessibility):</b> يساعد قارئ الشاشة على فهم بنية الصفحة بشكل أفضل والتنقل فيها، وتحسين إمكانية الوصول للمستخدمين ذوي الإعاقة البصرية.</li>
          <li><b>فهم محركات البحث للمحتوى (SEO):</b> يساعد محركات البحث على فهم بنية المحتوى بصورة أفضل (لكنه لا يضمن ترتيباً أعلى بالضرورة).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="عناصر تعبر عن معنى ووظيفة المحتوى وليس مجرد شكله الخارجي">
          لغة HTML الدلالية: المعنى، إمكانية الوصول، و SEO
        </Heading>

        {/* Left: 4 Semantic Tags */}
        <Place x={140} y={150} w={480} h={480} at={1}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#10b981' }}>
            <div>
              <span className="text-xs font-bold text-emerald-400 block mb-2">عناصر HTML الدلالية المقررة في المنهج:</span>
              <div className="space-y-2.5 font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-emerald-900/60">
                  <span className="text-emerald-400 font-bold" dir="ltr">&lt;header&gt;</span>
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5">في أعلى الصفحة (يحتوي عنوان الموقع وشعاره).</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-sky-900/60">
                  <span className="text-sky-400 font-bold" dir="ltr">&lt;nav&gt;</span>
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5">مخصص لمنطقة روابط التنقل الرئيسية في الموقع.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-indigo-900/60">
                  <span className="text-indigo-400 font-bold" dir="ltr">&lt;main&gt;</span>
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5">المحتوى الرئيس المستقل والفريد للصفحة الحالية.</p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-amber-900/60">
                  <span className="text-amber-400 font-bold" dir="ltr">&lt;footer&gt;</span>
                  <p className="text-[11px] text-slate-300 font-sans mt-0.5">في أسفل الصفحة (يحتوي حقوق النشر والروابط السفلية).</p>
                </div>
              </div>
            </div>
            <span className="text-[10px] text-slate-400 font-sans">
              بدلاً من استخدام صناديق عامة غير دلالية مثل &lt;div&gt; لا توضح وظيفة المحتوى.
            </span>
          </div>
        </Place>

        {/* Right: The 2 Core Benefits (Accessibility & SEO) */}
        <Place x={640} y={150} w={500} h={480} at={2}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#3b82f6' }}>
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-3">فوائد استخدام عناصر HTML الدلالية:</span>

              {/* Benefit 1 */}
              <div className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800 mb-3">
                <span className="text-xs font-bold text-emerald-400 block mb-1">١. تحسين إمكانية الوصول (Accessibility):</span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  يساعد HTML الدلالي برامج قراءة الشاشة (Screen Readers) على فهم بنية الصفحة بشكل أفضل والتنقل فيها، وتحسين إمكانية الوصول للمستخدمين ذوي الإعاقة البصرية.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800">
                <span className="text-xs font-bold text-amber-400 block mb-1">٢. فهم محركات البحث للمحتوى (SEO):</span>
                <p className="text-xs text-slate-300 leading-relaxed mb-2">
                  يساعد HTML الدلالي محركات البحث على فهم بنية المحتوى بصورة أفضل وأيسر في الفهرسة.
                </p>
                <div className="p-2 rounded bg-amber-950/30 border border-amber-800/50 text-[11px] text-amber-300">
                  ⚠️ <b>تنبيه كتاب الوزارة:</b> فهم محركات البحث لبنية المحتوى <u>لا يضمن ترتيباً أعلى بالضرورة</u> في نتائج البحث.
                </div>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 border-t border-slate-800 pt-2">
              HTML الدلالية تمنح الكود معنى برمجياً تفهمه الآلات والبشر على حد سواء.
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },
];
