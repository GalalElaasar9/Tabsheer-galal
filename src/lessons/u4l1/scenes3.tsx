// Board scenes · Unit 4 · Lesson 1 · HTML5 Media Tags, Summary, and Assessments
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Doodle, Heading, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'html5-media-tags', title: 'وسوم الوسائط في HTML5 وتكامل الويب', scene: true,
    notes: (
      <>
        <p><b>كيف ندمج الوسائط برمجياً في صفحات الويب باستخدام HTML5؟</b></p>
        <ul>
          <li><b>وسم <code>&lt;img&gt;</code>:</b> إدراج الصور مع خاصية <code>alt</code> الإلزامية لمحركات البحث وقارئات الشاشة.</li>
          <li><b>وسم <code>&lt;picture&gt;</code>:</b> توفير مصادر صور متعددة بأحجام مختلفة لتتكيف مع حجم شاشة الهاتف أو الحاسوب.</li>
          <li><b>وسم <code>&lt;audio&gt;</code>:</b> تشغيل الملفات الصوتية مع خاصية <code>controls</code> لإظهار شريط التشغيل.</li>
          <li><b>وسم <code>&lt;video&gt;</code>:</b> مشغل الفيديو المتكامل مع خصائص <code>controls</code> و <code>poster</code> و <code>autoplay muted</code>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الوسوم البرمجية القياسية لعرض الصور والصوت والفيديو">
          وسوم الوسائط في HTML5 (Media Tags)
        </Heading>

        {/* Video Tag */}
        <Box x={620} y={160} w={560} h={360} c="orange" at={1} />
        <Doodle x={900} y={225} icon="🎬" size={75} c="orange" fill="orange" at={1} />
        <Txt x={900} y={295} size={28} c="orange" at={1}>وسم الفيديو &lt;video&gt;</Txt>
        <Place x={640} y={345} w={520} h={150} at={1}>
          <div className="p-3 rounded-xl bg-black/70 font-mono text-xs leading-relaxed text-slate-300 ltr text-left border border-slate-800">
            &lt;video controls poster="cover.webp" width="640"&gt;
            <br />&nbsp;&nbsp;&lt;source src="movie.mp4" type="video/mp4"&gt;
            <br />&nbsp;&nbsp;&lt;source src="movie.webm" type="video/webm"&gt;
            <br />&nbsp;&nbsp;المتصفح لا يدعم وسم الفيديو.
            <br />&lt;/video&gt;
          </div>
        </Place>

        {/* Audio & Picture Tags */}
        <Box x={40} y={160} w={540} h={360} c="blue" at={2} />
        <Doodle x={310} y={225} icon="🎵" size={75} c="blue" fill="blue" at={2} />
        <Txt x={310} y={295} size={28} c="blue" at={2}>وسم الصوت &lt;audio&gt; و &lt;picture&gt;</Txt>
        <Place x={60} y={345} w={500} h={150} at={2}>
          <div className="p-3 rounded-xl bg-black/70 font-mono text-xs leading-relaxed text-slate-300 ltr text-left border border-slate-800">
            &lt;audio controls&gt;
            <br />&nbsp;&nbsp;&lt;source src="podcast.mp3" type="audio/mpeg"&gt;
            <br />&lt;/audio&gt;
            <br /><br />
            &lt;img src="photo.webp" alt="وصف بديل للـ SEO" loading="lazy"&gt;
          </div>
        </Place>

        {/* Bottom Rule */}
        <Box x={40} y={545} w={1140} h={85} c="green" fill="green" size={21} tc="ink" at={3}>
          💡 <b>أفضل ممارسات الويب:</b> استخدم دائماً <code>loading="lazy"</code> لتأخير تحميل الصور البعيدة عن الشاشة، واكتب وصفاً واضحاً في <code>alt</code> للوصول الشامل (Accessibility).
        </Box>
      </Scene>
    ),
  },
  {
    id: 'concept-map-u4l1', title: 'الخريطة الذهنية لدرس الوسائط', scene: true,
    notes: (
      <>
        <p><b>الخريطة الذهنية الشاملة لدرس أنواع الوسائط وخصائصها:</b></p>
        <p>ملخص بصري كامل يربط بين الوسائط الأربعة، خوارزميات الضغط (بفقد وبدون فقد)، خصائص الصوت والفيديو، والوسوم في HTML5.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الصورة الكاملة لمفاهيم الوسائط المقررة في منهج البكالوريا">
          الخريطة الذهنية لأنواع الوسائط (Concept Map)
        </Heading>

        {/* Center node */}
        <Box x={460} y={150} w={360} h={75} c="purple" fill="purple" size={26} tc="ink" at={1}>
          🎥 أنواع الوسائط في الويب
        </Box>

        {/* Branch 1: Images */}
        <Arrow from={[460, 180]} to={[240, 240]} c="purple" at={2} />
        <Box x={80} y={240} w={320} h={130} c="blue" at={2}>
          <Txt x={240} y={270} size={22} c="blue">🖼️ الصور (Images)</Txt>
          <Txt x={240} y={305} w={290} size={16} c="ink">• Raster: بكسلات ثابتة (JPEG/WebP)</Txt>
          <Txt x={240} y={335} w={290} size={16} c="ink">• Vector: معادلات لا تتبكسل (SVG)</Txt>
        </Box>

        {/* Branch 2: Compression */}
        <Arrow from={[820, 180]} to={[1040, 240]} c="purple" at={2} />
        <Box x={880} y={240} w={320} h={130} c="orange" at={2}>
          <Txt x={1040} y={270} size={22} c="orange">✂️ خوارزميات الضغط</Txt>
          <Txt x={1040} y={305} w={290} size={16} c="ink">• Lossy: تقليص هائل مع فقد طفيف</Txt>
          <Txt x={1040} y={335} w={290} size={16} c="ink">• Lossless: جودة 100% ودعم الشفافية</Txt>
        </Box>

        {/* Branch 3: Audio & Video */}
        <Arrow from={[540, 225]} to={[350, 410]} c="purple" at={3} />
        <Box x={80} y={410} w={420} h={130} c="green" at={3}>
          <Txt x={290} y={440} size={22} c="green">🎵 الصوت والفيديو الرقمي</Txt>
          <Txt x={290} y={475} w={380} size={16} c="ink">• معدل العينات Sample Rate وعمق البت Bit Depth</Txt>
          <Txt x={290} y={505} w={380} size={16} c="ink">• معدل الإطارات FPS والدقة 1080p و 4K</Txt>
        </Box>

        {/* Branch 4: HTML5 Tags */}
        <Arrow from={[740, 225]} to={[930, 410]} c="purple" at={3} />
        <Box x={780} y={410} w={420} h={130} c="pink" at={3}>
          <Txt x={990} y={440} size={22} c="pink">💻 تكامل وسوم HTML5</Txt>
          <Txt x={990} y={475} w={380} size={16} c="ink">• &lt;video controls poster="..."&gt;</Txt>
          <Txt x={990} y={505} w={380} size={16} c="ink">• &lt;picture&gt; و &lt;img alt="..." loading="lazy"&gt;</Txt>
        </Box>

        {/* Bottom Banner */}
        <Box x={80} y={570} w={1120} h={70} c="green" fill="green" size={21} tc="ink" at={4}>
          🎓 <b>بكالوريا 2027:</b> أتقنت هندسة الوسائط المتعددة وكيفية اختيارها وضغطها بكفاءة في الويب.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'ending-u4l1', title: 'خاتمة الدرس الأول', scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الأول من الوحدة الرابعة: أنواع الوسائط وخصائصها.</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={150} size={85}>🎉 أحسنتم عملاً!</Txt>
        <Txt x={640} y={245} size={36} c="purple">أتممتم بنجاح دراسة درس أنواع الوسائط وخصائصها</Txt>
        <Underline x={320} y={285} w={640} c="green" />

        <Box x={180} y={330} w={920} h={170} c="blue" fill="blue" size={24} tc="ink" at={1}>
          💡 <b>أهم ما تعلمتموه في هذا الدرس:</b>
          <br />
          ١. التمييز بين الصور النقطية (Raster) والصور المتجهة (Vector كالشعارات).
          <br />
          ٢. المفاضلة بين الضغط بفقدان بيانات (Lossy) وبدون فقد (Lossless).
          <br />
          ٣. معايير الصوت الرقمي، معدل الإطارات والدقة في الفيديو، ووسوم HTML5.
        </Box>

        <Doodle x={640} y={555} icon="🌟" size={90} c="orange" fill="orange" at={2} label="نلتقي في الدرس الثاني: تصميم المعلومات وتجربة المستخدم" lc="orange" />
      </Scene>
    ),
  },
];

