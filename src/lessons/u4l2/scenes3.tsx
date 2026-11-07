// Board scenes · Unit 4 · Lesson 2 · Concept Map, Summary, and Ending
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Doodle, Heading, Scene, Txt, Underline } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'concept-map-u4l2', title: 'الخريطة الذهنية لتصميم المعلومات وتجربة المستخدم', scene: true,
    notes: (
      <>
        <p><b>الخريطة الذهنية الشاملة لدرس تصميم المعلومات وتجربة المستخدم:</b></p>
        <p>ملخص شامل يربط بين هندسة المعلومات وهياكلها، والفرق بين UX و UI، ومبادئ التسلسل البصري والتباين والوصول، وأنظمة التنقل.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الصورة الكاملة لمفاهيم تجربة المستخدم وتصميم المعلومات المقررة">
          الخريطة الذهنية للدرس (Concept Map)
        </Heading>

        {/* Center node */}
        <Box x={440} y={150} w={400} h={75} c="purple" fill="purple" size={26} tc="ink" at={1}>
          🧠 تصميم المعلومات وتجربة المستخدم
        </Box>

        {/* Branch 1: IA */}
        <Arrow from={[440, 180]} to={[240, 240]} c="purple" at={2} />
        <Box x={80} y={240} w={320} h={130} c="blue" at={2}>
          <Txt x={240} y={270} size={22} c="blue">📐 هندسة المعلومات (IA)</Txt>
          <Txt x={240} y={305} w={290} size={16} c="ink">• هيكل هرمي للمتاجر والجامعات</Txt>
          <Txt x={240} y={335} w={290} size={16} c="ink">• هيكل تسلسلي لخطوات الدفع</Txt>
        </Box>

        {/* Branch 2: UX vs UI */}
        <Arrow from={[840, 180]} to={[1040, 240]} c="purple" at={2} />
        <Box x={880} y={240} w={320} h={130} c="orange" at={2}>
          <Txt x={1040} y={270} size={22} c="orange">⚖️ مقارنة UX و UI</Txt>
          <Txt x={1040} y={305} w={290} size={16} c="ink">• UX: سهولة الاستخدام والمنطق</Txt>
          <Txt x={1040} y={335} w={290} size={16} c="ink">• UI: الجماليات البصرية والألوان</Txt>
        </Box>

        {/* Branch 3: Visual Hierarchy */}
        <Arrow from={[540, 225]} to={[350, 410]} c="purple" at={3} />
        <Box x={80} y={410} w={420} h={130} c="green" at={3}>
          <Txt x={290} y={440} size={22} c="green">📊 التسلسل البصري والشمولية</Txt>
          <Txt x={290} y={475} w={380} size={16} c="ink">• الحجم والأوزان لتوجيه عين القارئ</Txt>
          <Txt x={290} y={505} w={380} size={16} c="ink">• تباين الألوان ومساحات بيضاء مريحة (a11y)</Txt>
        </Box>

        {/* Branch 4: Navigation */}
        <Arrow from={[740, 225]} to={[930, 410]} c="purple" at={3} />
        <Box x={780} y={410} w={420} h={130} c="pink" at={3}>
          <Txt x={990} y={440} size={22} c="pink">🧭 أنظمة التنقل وأزرار الـ CTA</Txt>
          <Txt x={990} y={475} w={380} size={16} c="ink">• شريط علوي Navbar وقوائم متناسقة</Txt>
          <Txt x={990} y={505} w={380} size={16} c="ink">• مسار Breadcrumbs وزر دعوة للإجراء بارز</Txt>
        </Box>

        {/* Bottom Banner */}
        <Box x={80} y={570} w={1120} h={70} c="green" fill="green" size={21} tc="ink" at={4}>
          🎓 <b>بكالوريا 2027:</b> أتقنت هندسة تجربة المستخدم وتصميم المعلومات لتصنع مواقع تلبي غاية الزائر بكفاءة.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'ending-u4l2', title: 'خاتمة الدرس الثاني', scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الثاني من الوحدة الرابعة: تصميم المعلومات وتجربة المستخدم للمواقع.</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={150} size={85}>🎉 إنجاز متميز!</Txt>
        <Txt x={640} y={245} size={34} c="purple">أتممتم بنجاح دراسة درس تصميم المعلومات وتجربة المستخدم</Txt>
        <Underline x={280} y={285} w={720} c="green" />

        <Box x={180} y={330} w={920} h={170} c="blue" fill="blue" size={24} tc="ink" at={1}>
          💡 <b>أهم ما أتقنتموه في هذا الدرس:</b>
          <br />
          ١. هيكلة وتصنيف المحتوى بهندسة المعلومات الهرمية والتسلسلية.
          <br />
          ٢. التمييز الحاسم بين تجربة المستخدم (UX) وواجهة المستخدم (UI).
          <br />
          ٣. إتقان التسلسل البصري، التباين والوصول الشامل، ومسار التنقل Breadcrumbs.
        </Box>

        <Doodle x={640} y={555} icon="🚀" size={90} c="orange" fill="orange" at={2} label="نلتقي في الدرس الثالث: أساليب تقييم المواقع الإلكترونية" lc="orange" />
      </Scene>
    ),
  },
];

