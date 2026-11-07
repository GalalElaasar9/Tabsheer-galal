// Board scenes · Unit 4 · Lesson 3 · Core Web Vitals, Concept Map, and Ending
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Doodle, Heading, Scene, Txt, Underline } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'core-web-vitals', title: 'مؤشرات أداء الويب الأساسية (Core Web Vitals)', scene: true,
    notes: (
      <>
        <p><b>مؤشرات أداء الويب الأساسية من Google (Core Web Vitals):</b></p>
        <p>ثلاثة معايير قياسية تعتمدها محركات البحث والمتصفحات لقياس سرعة واستقرار تجربة التصفح:</p>
        <ol>
          <li><b>LCP (Largest Contentful Paint):</b> زمن تحميل أكبر صورة أو نص يراه المستخدم (المثالي أقل من 2.5 ثانية).</li>
          <li><b>INP / FID (Interaction Response):</b> زمن استجابة الصفحة لأول نقرة يقوم بها المستخدم (المثالي أقل من 200 مللي ثانية).</li>
          <li><b>CLS (Cumulative Layout Shift):</b> استقرار العناصر على الشاشة ومنع قفز الأزرار أثناء تحميل الإعلانات والصور (المثالي أقل من 0.1).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المعايير الثلاثة الرسمية لتقييم سرعة واستقرار تجربة التصفح">
          مؤشرات أداء الويب الأساسية (Core Web Vitals)
        </Heading>

        {/* LCP */}
        <Box x={800} y={170} w={380} h={360} c="blue" at={1} />
        <Doodle x={990} y={235} icon="⏱️" size={75} c="blue" fill="blue" at={1} />
        <Txt x={990} y={305} size={26} c="blue" at={1}>LCP · سرعة التحميل</Txt>
        <Txt x={990} y={355} w={320} size={18} c="ink" at={1}>• Largest Contentful Paint</Txt>
        <Txt x={990} y={395} w={320} size={18} c="ink" at={1}>• زمن ظهور أكبر عنصر على الشاشة</Txt>
        <Txt x={990} y={435} w={320} size={18} c="ink" at={1}>• المستهدف: أقل من 2.5 ثانية</Txt>
        <Txt x={990} y={485} size={20} c="blue" at={1}>سرعة التحميل المحسوسة 🚀</Txt>

        {/* INP */}
        <Box x={400} y={170} w={380} h={360} c="green" at={2} />
        <Doodle x={590} y={235} icon="⚡" size={75} c="green" fill="green" at={2} />
        <Txt x={590} y={305} size={26} c="green" at={2}>INP · استجابة التفاعل</Txt>
        <Txt x={590} y={355} w={320} size={18} c="ink" at={2}>• Interaction to Next Paint</Txt>
        <Txt x={590} y={395} w={320} size={18} c="ink" at={2}>• زمن استجابة الزر لنقرة المستخدم</Txt>
        <Txt x={590} y={435} w={320} size={18} c="ink" at={2}>• المستهدف: أقل من 200 مللي ثانية</Txt>
        <Txt x={590} y={485} size={20} c="green" at={2}>تفاعل فوري بدون تهنيج ⚡</Txt>

        {/* CLS */}
        <Box x={20} y={170} w={360} h={360} c="purple" at={3} />
        <Doodle x={200} y={235} icon="📐" size={75} c="purple" fill="purple" at={3} />
        <Txt x={200} y={305} size={26} c="purple" at={3}>CLS · استقرار التخطيط</Txt>
        <Txt x={200} y={355} w={310} size={18} c="ink" at={3}>• Cumulative Layout Shift</Txt>
        <Txt x={200} y={395} w={310} size={18} c="ink" at={3}>• منع قفز وتحرك الأزرار فجأة</Txt>
        <Txt x={200} y={435} w={310} size={18} c="ink" at={3}>• المستهدف: درجة ممتازة أقل من 0.1</Txt>
        <Txt x={200} y={485} size={20} c="purple" at={3}>ثبات واستقرار بصري 🛡️</Txt>

        {/* Bottom Rule */}
        <Box x={20} y={555} w={1160} h={80} c="orange" fill="orange" size={21} tc="ink" at={4}>
          🌐 <b>أهميتها للـ SEO:</b> المواقع التي تحقق نتائج خضراء في هذه المؤشرات الثلاثة ترقيها Google تلقائياً في نتائج البحث الأولى.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'concept-map-u4l3', title: 'الخريطة الذهنية لتقييم المواقع الإلكترونية', scene: true,
    notes: (
      <>
        <p><b>الخريطة الذهنية الشاملة لدرس أساليب تقييم المواقع:</b></p>
        <p>ملخص بصري كامل يجمع بين اختبارات الاستخدام، مبادئ نيلسن الاستكشافية، تحليلات الارتداد والتحويل، واختبارات A/B ومؤشرات الأداء.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الصورة الكاملة لمنهجيات وأدوات تقييم المواقع المقررة">
          الخريطة الذهنية لتقييم المواقع (Concept Map)
        </Heading>

        {/* Center node */}
        <Box x={440} y={150} w={400} h={75} c="purple" fill="purple" size={26} tc="ink" at={1}>
          🔍 أساليب تقييم المواقع الإلكترونية
        </Box>

        {/* Branch 1: Usability Testing */}
        <Arrow from={[440, 180]} to={[240, 240]} c="purple" at={2} />
        <Box x={80} y={240} w={320} h={130} c="blue" at={2}>
          <Txt x={240} y={270} size={22} c="blue">🧪 اختبارات الاستخدام</Txt>
          <Txt x={240} y={305} w={290} size={16} c="ink">• مراقبة مستخدمين حقيقيين</Txt>
          <Txt x={240} y={335} w={290} size={16} c="ink">• قياس معدل الإتمام وزمن المهمة</Txt>
        </Box>

        {/* Branch 2: Heuristics */}
        <Arrow from={[840, 180]} to={[1040, 240]} c="purple" at={2} />
        <Box x={880} y={240} w={320} h={130} c="orange" at={2}>
          <Txt x={1040} y={270} size={22} c="orange">📋 التقييم الاستكشافي</Txt>
          <Txt x={1040} y={305} w={290} size={16} c="ink">• فحص بواسطة خبراء معتمدين</Txt>
          <Txt x={1040} y={335} w={290} size={16} c="ink">• مبادئ نيلسن (Undo ومنع الخطأ)</Txt>
        </Box>

        {/* Branch 3: Analytics & A/B */}
        <Arrow from={[540, 225]} to={[350, 410]} c="purple" at={3} />
        <Box x={80} y={410} w={420} h={130} c="green" at={3}>
          <Txt x={290} y={440} size={22} c="green">📊 التحليلات الرقمية واختبارات A/B</Txt>
          <Txt x={290} y={475} w={380} size={16} c="ink">• معدل الارتداد Bounce ومعدل التحويل Conversion</Txt>
          <Txt x={290} y={505} w={380} size={16} c="ink">• الخرائط الحرارية ومقارنة نسختين A و B</Txt>
        </Box>

        {/* Branch 4: Performance */}
        <Arrow from={[740, 225]} to={[930, 410]} c="purple" at={3} />
        <Box x={780} y={410} w={420} h={130} c="pink" at={3}>
          <Txt x={990} y={440} size={22} c="pink">⚡ مؤشرات الويب الأساسية</Txt>
          <Txt x={990} y={475} w={380} size={16} c="ink">• سرعة تحميل المحتوى الأكبر (LCP)</Txt>
          <Txt x={990} y={505} w={380} size={16} c="ink">• استقرار التخطيط وتجنب قفز العناصر (CLS)</Txt>
        </Box>

        {/* Bottom Banner */}
        <Box x={80} y={570} w={1120} h={70} c="green" fill="green" size={21} tc="ink" at={4}>
          🎓 <b>بكالوريا 2027:</b> التقييم هو الأساس الذي تنطلق منه عملية التحسين التكراري المستمر في الدرس الرابع.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'ending-u4l3', title: 'خاتمة الدرس الثالث', scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الثالث من الوحدة الرابعة: أساليب تقييم المواقع الإلكترونية.</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={150} size={85}>🎉 عمل رائع!</Txt>
        <Txt x={640} y={245} size={36} c="purple">أتممتم بنجاح دراسة درس أساليب تقييم المواقع</Txt>
        <Underline x={300} y={285} w={680} c="green" />

        <Box x={180} y={330} w={920} h={170} c="blue" fill="blue" size={24} tc="ink" at={1}>
          💡 <b>أهم ما أتقنتموه في هذا الدرس:</b>
          <br />
          ١. كيفية إدارة جلسات اختبارات قابلية الاستخدام (Usability Testing) مع مستخدمين فعليين.
          <br />
          ٢. تطبيق مبادئ نيلسن الاستكشافية العشرة (وضوح الحالة، زر التراجع، ومنع الخطأ).
          <br />
          ٣. قراءة الخرائط الحرارية، مؤشرات الارتداد والتحويل، واختبارات A/B العلمية.
        </Box>

        <Doodle x={640} y={555} icon="🎯" size={90} c="orange" fill="orange" at={2} label="نلتقي في الدرس الرابع: عملية التحسين التكراري للمواقع" lc="orange" />
      </Scene>
    ),
  },
];
