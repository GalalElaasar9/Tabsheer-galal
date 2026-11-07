// Board scenes · Unit 3 · Lesson 3 · part 3 (Responsive Design, Frameworks, Concept Map, & Ending)
import type { FrameDef } from '../../board/types';
import { Box, Heading, Place, Scene, Txt, Underline } from '../../sketch/Sketch';
import { FrameworksShowcaseWidget } from './demos';

export const part3: FrameDef[] = [
  /* =========================================================================
     مشهد التصميم المتجاوب ونهج الأولوية للجوال
     ========================================================================= */
  {
    id: 'responsive-and-mobile-first', title: 'التصميم المتجاوب ونهج الأولوية للجوال', scene: true,
    notes: (
      <>
        <p><b>التصميم المتجاوب (Responsive Design):</b></p>
        <p>مفهوم تصميمي يُضبط فيه التخطيط تلقائياً وفقاً لأحجام الشاشات المختلفة مثل أجهزة الكمبيوتر والهواتف الذكية والأجهزة اللوحية.</p>
        <p><b>فوائده:</b> يساعد الصفحة على التكيف مع أحجام الشاشات المختلفة وتحسين سهولة استخدامها.</p>
        <p><b>نهج الأولوية للجوال (Mobile-first approach):</b> يستخدم كثير من الناس الويب عبر الهواتف، لذلك يراعي المطورون الشاشات الصغيرة منذ بداية التصميم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تكيف الواجهة تلقائياً مع الشاشات ونهج الأولوية للهواتف الذكية">
          التصميم المتجاوب (Responsive Design) ونهج الأولوية للجوال
        </Heading>

        {/* Responsive Design Concept */}
        <Place x={140} y={150} w={480} h={380} at={1}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#3b82f6' }}>
            <div>
              <span className="text-xs font-bold text-sky-400 block mb-2">مفهوم التصميم المتجاوب:</span>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                مفهوم تصميمي يُضبط فيه التخطيط تلقائياً وفقاً لأحجام الشاشات المختلفة، مثل:
              </p>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>📱 الهواتف الذكية</span>
                  <span className="text-sky-400 font-mono text-[11px]">عمود واحد وتمرير سلس</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>📟 الأجهزة اللوحية (Tablets)</span>
                  <span className="text-purple-400 font-mono text-[11px]">عمودين متوازيين</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <span>💻 أجهزة الكمبيوتر (Desktop)</span>
                  <span className="text-emerald-400 font-mono text-[11px]">ثلاثة أعمدة وشاشات عريضة</span>
                </div>
              </div>
            </div>
            <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-400 border border-slate-800">
              يضمن تجربة استخدام مريحة دون الحاجة لتكبير أو تصغير الصفحة يدوياً.
            </div>
          </div>
        </Place>

        {/* Mobile-first Approach */}
        <Place x={640} y={150} w={500} h={380} at={2}>
          <div className="p-4 rounded-xl border h-full flex flex-col justify-between" style={{ background: '#0a0f1d', borderColor: '#a855f7' }}>
            <div>
              <span className="text-xs font-bold text-purple-400 block mb-2">نهج الأولوية للجوال (Mobile-first approach):</span>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                يستخدم معظم الناس الويب عبر الهواتف الذكية؛ لذا يراعي المطورون الشاشات الصغيرة منذ بداية مرحلة التصميم، ثم يوسعون التخطيط لاحقاً للشاشات الكبيرة.
              </p>
              <div className="p-3 rounded-lg border bg-slate-900/80 border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">١.</span>
                  <span>التركيز أولاً على المحتوى الأهم والأكثر فائدة للمستخدم.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">٢.</span>
                  <span>تبسيط عناصر التنقل والقوائم لتناسب اللمس بالأصابع.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400 font-bold">٣.</span>
                  <span>سرعة التحميل العالية وتقليل استهلاك البيانات.</span>
                </div>
              </div>
            </div>
            <div className="text-[11px] text-purple-300 border-t border-slate-800 pt-2 font-mono">
              Mobile-First = Better UX for Most Users
            </div>
          </div>
        </Place>

        {/* Summary Footer */}
        <Box x={140} y={550} w={1000} h={95} c="purple" fill="purple" size={20} tc="ink" at={3}>
          💡 <b>الفائدة:</b> يساعد التصميم المتجاوب الصفحة على التكيف مع مختلف أحجام الشاشات وتحسين سهولة استخدامها لجميع الزوار.
        </Box>
      </Scene>
    ),
  },

  /* =========================================================================
     مشهد أطر العمل والمكتبات (مطابق لصورة أطر العمل بالكامل)
     ========================================================================= */
  {
    id: 'frameworks-and-components', title: '٦. أطر العمل (Frameworks) والمكتبات', scene: true,
    notes: (
      <>
        <p><b>أطر العمل (Frameworks) والمكتبات:</b></p>
        <p>لما المطور يبدأ يعمل موقع كبير، ممكن يلاقي نفسه بيكرر نفس الأكواد والوظائف كتير جداً. هل لازم يكتب كل حاجة من الصفر؟ <b>لأ.</b> هنا بتظهر أهمية الـ Frameworks.</p>
        <p><b>Framework:</b> هو إطار عمل بيوفر وظائف ومكونات جاهزة وشائعة الاستخدام، بتساعد المطور يبني التطبيقات بكفاءة أكبر بدل ما يبدأ كل حاجة من الصفر.</p>
        <p><b>أمثلة مهمة:</b></p>
        <ul>
          <li><b>React:</b> مكتبة JavaScript لبناء واجهات المستخدم باستخدام مكونات (Components) قابلة لإعادة الاستخدام.</li>
          <li><b>Vue.js:</b> إطار عمل JavaScript بيسمح ببناء تطبيقات الويب بشكل تدريجي من ميزات صغيرة وحتى تطبيقات أكبر.</li>
          <li><b>Next.js:</b> إطار عمل مبني على React، ويوفر إمكانيات إضافية مثل التوجيه (Routing) وطرق عرض الصفحات.</li>
        </ul>
        <p><b>ليه بنستخدم Frameworks؟</b> توفير الوقت، إعادة استخدام المكونات، تنظيم الكود، تسهيل بناء التطبيقات الكبيرة، وتقليل تكرار كتابة الأكواد.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="٦. أطر العمل (Frameworks) والمكتبات — أهميتها وأشهر أمثلتها ولماذا نستخدمها">
          أطر العمل (Frameworks) والمكتبات لتطوير الويب
        </Heading>

        <Place x={60} y={115} w={1160} h={575} at={1}>
          <FrameworksShowcaseWidget />
        </Place>
      </Scene>
    ),
  },

  /* =========================================================================
     مشهد خريطة المفاهيم الشاملة للدرس الثالث
     ========================================================================= */
  {
    id: 'concept-map-u3l3', title: 'خريطة المفاهيم للواجهة الأمامية', scene: true,
    notes: (
      <>
        <p><b>خريطة المفاهيم الشاملة للدرس الثالث:</b></p>
        <p>صفحة الويب الحديثة هي تركيبة متكاملة: HTML يبني بنيتها، و CSS ينسق مظهرها، و JavaScript يمنحها التفاعلية، بينما تجعل HTML الدلالية والتصميم المتجاوب وأطر العمل بناءها ذا معنى، قابلاً للتكيف مع مختلف الشاشات، وعالي الكفاءة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الرؤية الشاملة لتكامل تقنيات الواجهة الأمامية الحديثة">
          الخريطة الذهنية: أساسيات تكنولوجيا الواجهة الأمامية
        </Heading>

        {/* Center Root */}
        <Box x={440} y={150} w={400} h={60} c="purple" fill="purple" size={24} tc="ink" at={1}>
          الواجهة الأمامية الحديثة (Frontend)
        </Box>

        {/* 4 Pillars */}
        <Place x={140} y={240} w={230} h={370} at={2}>
          <div className="p-3 rounded-xl border bg-slate-900 border-sky-800 text-xs text-slate-300 h-full flex flex-col justify-between">
            <div>
              <span className="font-bold text-sky-400 block mb-2 border-b border-slate-800 pb-1">١. الثلاثي الأساسي</span>
              <ul className="space-y-2 text-[11px] leading-relaxed">
                <li>• <b>HTML:</b> بنية ومحتوى الصفحة (هيكل المبنى).</li>
                <li>• <b>CSS:</b> المظهر والألوان (الديكور).</li>
                <li>• <b>JS:</b> السلوك والتفاعل (الكهرباء والسباكة).</li>
              </ul>
            </div>
            <span className="text-[10px] text-sky-400/80 font-mono">The Core Trio</span>
          </div>
        </Place>

        <Place x={390} y={240} w={230} h={370} at={3}>
          <div className="p-3 rounded-xl border bg-slate-900 border-emerald-800 text-xs text-slate-300 h-full flex flex-col justify-between">
            <div>
              <span className="font-bold text-emerald-400 block mb-2 border-b border-slate-800 pb-1">٢. HTML الدلالية</span>
              <ul className="space-y-2 text-[11px] leading-relaxed">
                <li>• وسوم توضح وظيفة المحتوى: &lt;header&gt; و &lt;nav&gt; و &lt;main&gt; و &lt;footer&gt;.</li>
                <li>• <b>إمكانية الوصول:</b> مساعدة قارئ الشاشة لذوي الإعاقة.</li>
                <li>• <b>SEO:</b> تيسير فهم محركات البحث.</li>
              </ul>
            </div>
            <span className="text-[10px] text-emerald-400/80 font-mono">Semantic & Accessible</span>
          </div>
        </Place>

        <Place x={640} y={240} w={230} h={370} at={4}>
          <div className="p-3 rounded-xl border bg-slate-900 border-purple-800 text-xs text-slate-300 h-full flex flex-col justify-between">
            <div>
              <span className="font-bold text-purple-400 block mb-2 border-b border-slate-800 pb-1">٣. التصميم المتجاوب</span>
              <ul className="space-y-2 text-[11px] leading-relaxed">
                <li>• ضبط التخطيط تلقائياً ليناسب كل أحجام الشاشات.</li>
                <li>• <b>نهج الأولوية للجوال:</b> مراعاة الهواتف أولاً نظراً لأهميتها وكثرة مستخدميها.</li>
              </ul>
            </div>
            <span className="text-[10px] text-purple-400/80 font-mono">Responsive & Mobile-First</span>
          </div>
        </Place>

        <Place x={890} y={240} w={250} h={370} at={5}>
          <div className="p-3 rounded-xl border bg-slate-900 border-amber-800 text-xs text-slate-300 h-full flex flex-col justify-between">
            <div>
              <span className="font-bold text-amber-400 block mb-2 border-b border-slate-800 pb-1">٤. أطر العمل (Frameworks)</span>
              <ul className="space-y-2 text-[11px] leading-relaxed">
                <li>• توفير وظائف جاهزة لتطوير أسرع بكثير.</li>
                <li>• <b>React:</b> مكتبة واجهات ومكونات قابلة لإعادة الاستخدام.</li>
                <li>• <b>Vue:</b> بنية بسيطة وتدرج.</li>
                <li>• <b>Next.js:</b> إطار عمل مبني على React.</li>
              </ul>
            </div>
            <span className="text-[10px] text-amber-400/80 font-mono">Frameworks & Components</span>
          </div>
        </Place>
      </Scene>
    ),
  },

  /* =========================================================================
     مشهد ختام الدرس
     ========================================================================= */
  {
    id: 'ending-u3l3', title: 'خاتمة الدرس الثالث', scene: true,
    notes: (
      <>
        <p><b>أحسنتم عملاً! أتممتم بنجاح دراسة الدرس الثالث من وحدة تطبيقات الويب.</b></p>
        <p>الآن أصبحت لديكم رؤية واضحة ومتكاملة: كيف تتصل تطبيقات الويب، وكيف تُبنى واجهاتها الأمامية بشكل دلالي متجاوب وفعال.</p>
        <p>في الوحدة الرابعة سننتقل إلى تصميم الويب والوسائط المتعددة وتقييم المواقع الإلكترونية والتحسين التكراري.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={130} size={32} c="purple">الوحدة الثالثة: تطبيقات الويب · مسك الختام</Txt>
        <Txt x={640} y={250} size={80}>مبروك إتمام الدرس الثالث بنجاح! 🎉</Txt>
        <Underline x={200} y={320} w={880} c="green" />

        <Txt x={640} y={385} size={30} c="ink">
          أصبحتم الآن متقنين لأركان الواجهة الأمامية: HTML و CSS و JavaScript والدلالية والتجاوب
        </Txt>

        <Place x={240} y={450} w={800} h={160} at={1}>
          <div className="p-5 rounded-2xl border bg-slate-900 border-sky-800 text-center flex flex-col justify-between">
            <span className="text-base font-bold text-sky-300">
              🚀 المحطة القادمة: الوحدة الرابعة — تصميم الويب والوسائط (Media & Web Design)
            </span>
            <p className="text-xs text-slate-400 mt-2">
              أنواع الوسائط وخصائصها · تصميم المعلومات وتجربة المستخدم · أساليب تقييم المواقع · والتحسين التكراري.
            </p>
          </div>
        </Place>
      </Scene>
    ),
  },
];
