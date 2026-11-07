// Board scenes · Unit 4 · Lesson 1 · intro and core media types
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'الوسائط المتعددة',
  'الصور النقطية (Raster)',
  'الصور المتجهة (Vector)',
  'الضغط (Lossy vs Lossless)',
  'الصوت الرقمي (Audio)',
  'الفيديو الرقمي (Video)',
  'وسوم الوسائط في HTML5',
  'بنك أسئلة البكالوريا',
];

const STOP_PTS: [number, number][] = [
  [1050, 350], [800, 350], [550, 350], [300, 350],
  [300, 570], [550, 570], [800, 570], [1050, 570],
];

export const intro: FrameDef[] = [
  {
    id: 'cover', title: 'الغلاف', scene: true,
    notes: (
      <>
        <p><b>أهلاً بكم في أول دروس الوحدة الرابعة: أنواع الوسائط وخصائصها.</b></p>
        <p>في هذه الوحدة ننتقل إلى عالم <b>تصميم الويب والوسائط</b>، لنتعلم كيف نختار الوسائط المتعددة (الصور، الصوت، الفيديو) ونوازن بين جودتها وسرعة تحميل الصفحة على مختلف الأجهزة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={30} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 4 · Lesson 1</Txt>
        <Txt x={640} y={235} size={95}>أنواع الوسائط وخصائصها</Txt>
        <Underline x={260} y={305} w={760} c="blue" />
        <Txt x={640} y={360} size={42} c="blue">Media Types and Characteristics</Txt>

        {[['📝', 'النص'], ['🖼️', 'الصور'], ['🎵', 'الصوت الرقمي'], ['🎬', 'الفيديو'], ['⚡', 'الصيغ والضغط']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={530} icon={icon} size={90} label={label} lc="blue" at={1} delay={i * 0.3} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في درس الوسائط:</b> ثماني محطات رئيسية تغطي كل تفاصيل المقرر الوزاري للبكالوريا.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات أنواع الوسائط</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={30} tc="ink">
          ❓ كيف نختار الوسائط المناسبة لموقع الويب بأعلى جودة وأقل استهلاك للباقة؟
        </Box>
        <Line at={1} c="ink" sw={3} dashed pts={[...STOP_PTS.slice(0, 4), [150, 460], ...STOP_PTS.slice(4)]} />
        {STOP_PTS.map(([x, y], i) => (
          <span key={i} className="contents">
            <Num at={1} delay={i * 0.12} x={x} y={y} n={i + 1} c="purple" />
            <Txt at={1} delay={i * 0.12} x={x} y={y + 55} size={20}>{STOPS[i]}</Txt>
          </span>
        ))}
      </Scene>
    ),
  },
];

export const part1: FrameDef[] = [
  {
    id: 'media-types-overview', title: 'عناصر الوسائط المتعددة في الويب', scene: true,
    notes: (
      <>
        <p><b>الوسائط المتعددة (Multimedia) في تطبيقات الويب:</b></p>
        <p>صفحات الويب الحديثة تجمع بين أربعة أشكال رئيسية للوسائط لتوصيل الأفكار بأفضل تجربة مستخدم:</p>
        <ul>
          <li><b>النصوص (Text):</b> الأساس في نقل الحقائق والمعلومات، سهل الفهرسة من محركات البحث.</li>
          <li><b>الصور والرسومات (Images & Graphics):</b> تشد انتباه المستخدم وتوضح المفاهيم المعقدة بسرعة.</li>
          <li><b>الصوت الرقمي (Audio):</b> التوجيه الصوتي، المؤثرات، البودكاست، والقراءة الآلية.</li>
          <li><b>الفيديو والرسوم المتحركة (Video & Animation):</b> الوسيط الأكثر جذباً وتأثيراً لشرح المنتجات والتعليم.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الوسائط الأربعة التي تصنع تجربة ويب غنية ومتكاملة">
          عناصر الوسائط المتعددة (Multimedia Elements)
        </Heading>

        {/* Text */}
        <Box x={890} y={170} w={270} h={360} c="blue" at={1} />
        <Doodle x={1025} y={235} icon="📝" size={75} c="blue" fill="blue" at={1} />
        <Txt x={1025} y={305} size={28} c="blue" at={1}>١ · النصوص (Text)</Txt>
        <Txt x={1025} y={360} w={230} size={18} c="ink" at={1}>• أسرع وسيط في التحميل</Txt>
        <Txt x={1025} y={400} w={230} size={18} c="ink" at={1}>• ممتاز لمحركات البحث (SEO)</Txt>
        <Txt x={1025} y={440} w={230} size={18} c="ink" at={1}>• حجم ملف مهمل بالبايتات</Txt>
        <Txt x={1025} y={485} size={20} c="blue" at={1}>HTML: &lt;p&gt;, &lt;h1&gt;</Txt>

        {/* Images */}
        <Box x={600} y={170} w={270} h={360} c="green" at={2} />
        <Doodle x={735} y={235} icon="🖼️" size={75} c="green" fill="green" at={2} />
        <Txt x={735} y={305} size={28} c="green" at={2}>٢ · الصور (Images)</Txt>
        <Txt x={735} y={360} w={230} size={18} c="ink" at={2}>• نقطية (JPEG, PNG, WebP)</Txt>
        <Txt x={735} y={400} w={230} size={18} c="ink" at={2}>• متجهة للشعارات (SVG)</Txt>
        <Txt x={735} y={440} w={230} size={18} c="ink" at={2}>• تشد انتباه العين فوراً</Txt>
        <Txt x={735} y={485} size={20} c="green" at={2}>HTML: &lt;img&gt;, &lt;picture&gt;</Txt>

        {/* Audio */}
        <Box x={310} y={170} w={270} h={360} c="purple" at={3} />
        <Doodle x={445} y={235} icon="🎵" size={75} c="purple" fill="purple" at={3} />
        <Txt x={445} y={305} size={28} c="purple" at={3}>٣ · الصوت (Audio)</Txt>
        <Txt x={445} y={360} w={230} size={18} c="ink" at={3}>• بودكاست وتوجيه صوتي</Txt>
        <Txt x={445} y={400} w={230} size={18} c="ink" at={3}>• صيغ MP3 و AAC الخفيفة</Txt>
        <Txt x={445} y={440} w={230} size={18} c="ink" at={3}>• مؤثرات صوتية تفاعلية</Txt>
        <Txt x={445} y={485} size={20} c="purple" at={3}>HTML: &lt;audio&gt;</Txt>

        {/* Video */}
        <Box x={20} y={170} w={270} h={360} c="orange" at={4} />
        <Doodle x={155} y={235} icon="🎬" size={75} c="orange" fill="orange" at={4} />
        <Txt x={155} y={305} size={28} c="orange" at={4}>٤ · الفيديو (Video)</Txt>
        <Txt x={155} y={360} w={230} size={18} c="ink" at={4}>• الأكثر جذباً للمستخدم</Txt>
        <Txt x={155} y={400} w={230} size={18} c="ink" at={4}>• أكبر استهلاك للباقة</Txt>
        <Txt x={155} y={440} w={230} size={18} c="ink" at={4}>• MP4 (H.264) و WebM</Txt>
        <Txt x={155} y={485} size={20} c="orange" at={4}>HTML: &lt;video&gt;</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1140} h={80} c="pink" fill="pink" size={21} tc="ink" at={5}>
          ⚖️ <b>المعادلة الذهبية للمصمم:</b> المحتوى الغني يجذب الزوار، ولكن الحجم الكبير يبطئ الموقع؛ والحل هو الضغط والاختيار الصحيح للصيغ.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'raster-vs-vector', title: 'الصور النقطية (Raster) مقابل المتجهة (Vector)', scene: true,
    notes: (
      <>
        <p><b>مقارنة جوهرية في امتحانات البكالوريا:</b></p>
        <ul>
          <li><b>الصور النقطية (Raster / Bitmap):</b> تتكون من شبكة بكسلات ثابتة؛ ممتازة للصور الفوتوغرافية المعقدة (JPEG, PNG, WebP)، لكنها تتبكسل وتفقد وضوحها عند التكبير.</li>
          <li><b>الصور المتجهة (Vector Graphics):</b> مبنية على معادلات رياضية وأشكال هندسية؛ ممتازة للشعارات والأيقونات والخطوط (SVG)، وتحتفظ بحدتها ونقائها بأي حجم دون زيادة في مساحة الملف.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الفارق العلمي بين شبكة البكسلات والمعادلات الرياضية">
          الصور النقطية (Raster) مقابل المتجهة (Vector)
        </Heading>

        {/* Raster Card */}
        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1020', borderColor: '#2563eb' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-sky-400">🖼️ الصور النقطية (Raster / Bitmap)</span>
                <span className="pill text-xs font-bold bg-sky-950 text-sky-300 border-sky-700">JPEG · PNG · WebP</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>البنية:</b> شبكة من المربعات الملونة الدقيقة تُسمى <b>بكسلات (Pixels)</b>.</li>
                <li>• <b>عند التكبير:</b> تتبكسل (Pixelation) وتصبح حوافها مشوهة ومربعات واضحة.</li>
                <li>• <b>الاستخدام الأنسب:</b> الصور الفوتوغرافية، الطبيعة، الوجوه، والتدرجات المعقدة.</li>
                <li>• <b>حجم الملف:</b> يرتبط مباشرة بعدد البكسلات (العرض × الارتفاع).</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-800 text-xs text-sky-300 font-bold">
              🔍 عيبها الأساسي: مقيدة بدقة عرض محددة؛ التكبير الزائد يفسد مظهرها.
            </div>
          </div>
        </Place>

        {/* Vector Card */}
        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1020', borderColor: '#f97316' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-orange-400">📐 الصور المتجهة (Vector Graphics)</span>
                <span className="pill text-xs font-bold bg-orange-950 text-orange-300 border-orange-700">SVG (Scalable)</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>البنية:</b> معادلات رياضية ونقاط إحداثية وخطوط وأقواس برمجية (XML).</li>
                <li>• <b>عند التكبير:</b> يعيد المتصفح رسمها لحظياً بدقة حادة 100% دون أي تشوه.</li>
                <li>• <b>الاستخدام الأنسب:</b> شعارات الشركات، الأيقونات، الخرائط، والرسوم البيانية.</li>
                <li>• <b>حجم الملف:</b> صغير جداً ومستقل تماماً عن مساحة الشاشة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-950/40 border border-orange-800 text-xs text-orange-300 font-bold">
              ✨ ميزتها الكبرى: نقاء مطلق على كافة الشاشات العادية وشاشات Retina والشاشات العملاقة.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          📖 <b>قاعدة امتحانية:</b> الصور الواقعية نستخدم لها Raster (WebP أو JPEG)، بينما الشعارات والأيقونات نستخدم لها Vector (SVG).
        </Box>
      </Scene>
    ),
  },
];

