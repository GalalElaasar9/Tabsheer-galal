// Board scenes · Unit 4 · Lesson 2 · Visual Hierarchy, Accessibility, and Navigation Systems
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Scene, Txt } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'visual-hierarchy-rules', title: 'مبادئ التسلسل الهرمي البصري (Visual Hierarchy)', scene: true,
    notes: (
      <>
        <p><b>التسلسل الهرمي البصري (Visual Hierarchy):</b></p>
        <p>الأسلوب الذي يتبعه المصمم لترتيب العناصر على الشاشة لكي تلتقط عين المستخدم الأهم فالأقل أهمية تلقائياً وبدون ارتباك.</p>
        <p><b>أدوات صنع التسلسل البصري:</b></p>
        <ul>
          <li><b>الحجم والمقياس (Scale):</b> العنوان الرئيسي (H1) أكبر حجماً من العنوان الفرعي، والفرعي أكبر من النص العادي.</li>
          <li><b>الوزن والخطوط (Weight):</b> العناوين بخط عريض (Bold)، والنصوص الفرعية بوزن عادي.</li>
          <li><b>التباين اللوني (Contrast):</b> الأزرار المهمة (CTA) بألوان مشعة وبارزة لجذب النقرات.</li>
          <li><b>المساحات البيضاء (White Space):</b> ترك مسافات كافية تفصل الكتل عن بعضها وتريح عين القارئ.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف توجه عين الزائر لقراءة عناصر الصفحة بالترتيب الصحيح؟">
          مبادئ التسلسل الهرمي البصري (Visual Hierarchy)
        </Heading>

        {/* Pillar 1: Scale */}
        <Box x={890} y={170} w={270} h={360} c="blue" at={1} />
        <Doodle x={1025} y={235} icon="📏" size={75} c="blue" fill="blue" at={1} />
        <Txt x={1025} y={305} size={28} c="blue" at={1}>١ · الحجم (Scale)</Txt>
        <Txt x={1025} y={360} w={230} size={18} c="ink" at={1}>• العنوان الرئيسي هو الأكبر</Txt>
        <Txt x={1025} y={400} w={230} size={18} c="ink" at={1}>• النصوص العادية أصغر حجماً</Txt>
        <Txt x={1025} y={440} w={230} size={18} c="ink" at={1}>• العين تقرأ الأكبر أولاً</Txt>
        <Txt x={1025} y={485} size={20} c="blue" at={1}>H1 &gt; H2 &gt; Body</Txt>

        {/* Pillar 2: Contrast */}
        <Box x={600} y={170} w={270} h={360} c="orange" at={2} />
        <Doodle x={735} y={235} icon="🎨" size={75} c="orange" fill="orange" at={2} />
        <Txt x={735} y={305} size={28} c="orange" at={2}>٢ · التباين (Contrast)</Txt>
        <Txt x={735} y={360} w={230} size={18} c="ink" at={2}>• لون بارز لزر الشراء والـ CTA</Txt>
        <Txt x={735} y={400} w={230} size={18} c="ink" at={2}>• نص غامق فوق خلفية فاتحة</Txt>
        <Txt x={735} y={440} w={230} size={18} c="ink" at={2}>• يبرز الأزرار التفاعلية</Txt>
        <Txt x={735} y={485} size={20} c="orange" at={2}>WCAG Contrast 4.5:1</Txt>

        {/* Pillar 3: White Space */}
        <Box x={310} y={170} w={270} h={360} c="green" at={3} />
        <Doodle x={445} y={235} icon="🕊️" size={75} c="green" fill="green" at={3} />
        <Txt x={445} y={305} size={28} c="green" at={3}>٣ · الفراغات البيضاء</Txt>
        <Txt x={445} y={360} w={230} size={18} c="ink" at={3}>• مسافات وهوامش مريحة</Txt>
        <Txt x={445} y={400} w={230} size={18} c="ink" at={3}>• تمنع تكدس وازدحام الصفحة</Txt>
        <Txt x={445} y={440} w={230} size={18} c="ink" at={3}>• تسمح للعين بالتنفس والتركيز</Txt>
        <Txt x={445} y={485} size={20} c="green" at={3}>Negative Space</Txt>

        {/* Pillar 4: Consistency */}
        <Box x={20} y={170} w={270} h={360} c="purple" at={4} />
        <Doodle x={155} y={235} icon="🔄" size={75} c="purple" fill="purple" at={4} />
        <Txt x={155} y={305} size={28} c="purple" at={4}>٤ · التناسق (Consistency)</Txt>
        <Txt x={155} y={360} w={230} size={18} c="ink" at={4}>• نفس أشكال الأزرار والخطوط</Txt>
        <Txt x={155} y={400} w={230} size={18} c="ink" at={4}>• نفس موضع القوائم بكل صفحة</Txt>
        <Txt x={155} y={440} w={230} size={18} c="ink" at={4}>• يبني ألفة وسرعة استيعاب</Txt>
        <Txt x={155} y={485} size={20} c="purple" at={4}>Design System</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1140} h={80} c="pink" fill="pink" size={21} tc="ink" at={5}>
          👁️ <b>قاعدة القراءة:</b> الزائر لا يقرأ كل كلمة في صفحة الويب، بل يقوم بمسح بصري سريع (Scanning)؛ والتسلسل الهرمي يضمن وصوله للأهم في ثوانٍ.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'navigation-systems-scene', title: 'أنظمة التنقل ومسار الـ Breadcrumbs', scene: true,
    notes: (
      <>
        <p><b>أنظمة التنقل والتوجيه في الويب (Navigation Systems):</b></p>
        <p>البوصلة التي تمنع ضياع المستخدم وتساعده على التنقل السلس بين الأقسام:</p>
        <ul>
          <li><b>شريط التنقل العلوي (Navbar):</b> يضم روابط الأقسام الرئيسية والبحث وزر الدخول.</li>
          <li><b>مسار التنقل المتسلسل (Breadcrumbs):</b> مسار يوضح موقع الصفحة الحالية (مثل: الرئيسية &gt; الكليات &gt; الحاسبات) ويتيح الرجوع السريع لأي مستوى.</li>
          <li><b>زر الدعوة للإجراء (Call to Action - CTA):</b> الزر البارز الذي يوجه المستخدم نحو الخطوة الرئيسية المستهدفة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الأدوات الأساسية التي ترشد الزائر وتمنع ضياعه وتشتته داخل الموقع">
          أنظمة التنقل والتوجيه (Navigation Systems)
        </Heading>

        {/* Navbar */}
        <Box x={640} y={170} w={540} h={360} c="blue" at={1} />
        <Doodle x={910} y={235} icon="🧭" size={75} c="blue" fill="blue" at={1} />
        <Txt x={910} y={305} size={28} c="blue" at={1}>شريط التنقل الرئيسي (Navbar)</Txt>
        <Txt x={910} y={360} w={480} size={19} c="ink" at={1}>• يثبت بأعلى الصفحة في كل الشاشات</Txt>
        <Txt x={910} y={400} w={480} size={19} c="ink" at={1}>• يضم أهم ٥ إلى ٧ أقسام رئيسية للموقع</Txt>
        <Txt x={910} y={440} w={480} size={19} c="ink" at={1}>• يتحول لقائمة جانبية منسدلة (Drawer) في الموبايل</Txt>
        <Txt x={910} y={485} size={20} c="blue" at={1}>واضح · متاح دائماً · لا يتغير موضعه</Txt>

        {/* Breadcrumbs */}
        <Box x={40} y={170} w={560} h={360} c="green" at={2} />
        <Doodle x={320} y={235} icon="🍞" size={75} c="green" fill="green" at={2} />
        <Txt x={320} y={305} size={28} c="green" at={2}>مسار التنقل (Breadcrumbs)</Txt>
        <Txt x={320} y={360} w={500} size={19} c="ink" at={2}>• مسار هرمي دقيق: الرئيسية &gt; الكليات &gt; الذكاء الاصطناعي</Txt>
        <Txt x={320} y={400} w={500} size={19} c="ink" at={2}>• يجيب دائماً على سؤال المستخدم: أين أنا الآن داخل الموقع؟</Txt>
        <Txt x={320} y={440} w={500} size={19} c="ink" at={2}>• يسمح بالقفز للوراء بنقرة زر واحدة دون الحاجة لزر Back</Txt>
        <Txt x={320} y={485} size={20} c="green" at={2}>أداة أساسية في المتاجر وبوابات الجامعات</Txt>

        {/* Bottom Banner */}
        <Box x={40} y={550} w={1140} h={85} c="orange" fill="orange" size={21} tc="ink" at={3}>
          🎯 <b>زر الدعوة للإجراء (CTA):</b> يجب أن يتميز بلون متباين وموضع واضح ولا يزاحمه أزرار فرعية أخرى، ليحث المستخدم على اتخاذ القرار المستهدف.
        </Box>
      </Scene>
    ),
  },
];
