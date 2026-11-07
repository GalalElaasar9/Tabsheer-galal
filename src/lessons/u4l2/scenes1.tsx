// Board scenes · Unit 4 · Lesson 2 · intro and IA / UX vs UI
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'هندسة المعلومات (IA)',
  'الهياكل (هرمي وتسلسلي)',
  'تجربة المستخدم (UX)',
  'واجهة المستخدم (UI)',
  'التسلسل الهرمي البصري',
  'المساحات والتباين (a11y)',
  'أنظمة التنقل والـ Breadcrumbs',
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
        <p><b>أهلاً بكم في ثاني دروس الوحدة الرابعة: تصميم المعلومات وتجربة المستخدم للمواقع الإلكترونية.</b></p>
        <p>الموقع الناجح ليس مجرد ألوان مبهرة، بل هو <b>هندسة معلومات واضحة</b> وتجربة استخدام مريحة تقود الزائر إلى هدفه بسلاسة ودون مجهود.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={30} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 4 · Lesson 2</Txt>
        <Txt x={640} y={235} size={80}>تصميم المعلومات وتجربة المستخدم للمواقع</Txt>
        <Underline x={180} y={305} w={920} c="blue" />
        <Txt x={640} y={360} size={40} c="blue">Information Design and Website User Experience</Txt>

        {[['📐', 'هندسة المعلومات'], ['🧠', 'تجربة المستخدم UX'], ['🎨', 'الواجهة UI'], ['🧭', 'أنظمة التنقل'], ['♿', 'سهولة الوصول a11y']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={530} icon={icon} size={90} label={label} lc="blue" at={1} delay={i * 0.3} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في تصميم المعلومات وتجربة المستخدم:</b> ثماني محطات أساسية تغطي مفاهيم كتاب الوزارة وامتحانات الثانوية العامة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات تصميم المعلومات وتجربة المستخدم</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={30} tc="ink">
          ❓ كيف ننظم بيانات الموقع لنمنح الزائر رحلة تصفح سهلة ومريحة وواضحة؟
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
    id: 'ia-architecture-types', title: 'هندسة المعلومات وهياكل التنظيم', scene: true,
    notes: (
      <>
        <p><b>تصميم وهندسة المعلومات (Information Architecture - IA):</b></p>
        <p>الفن والعلم المسؤول عن تنظيم وتصنيف وهيكلة محتوى الموقع لتمكين المستخدمين من إيجاد المعلومات وإنجاز مهامهم بأقل مجهود فكري.</p>
        <p><b>أشهر هياكل تنظيم المعلومات:</b></p>
        <ol>
          <li><b>الهيكل الهرمي (Hierarchical):</b> يبدأ من الصفحة الرئيسية، ثم الأقسام الكبرى، ثم الصفحات الفرعية (مثل بوابات الجامعات والمتاجر).</li>
          <li><b>الهيكل التسلسلي (Sequential):</b> مسار خطي إجباري خطوة بخطوة (مثل استمارات الدفع وإتمام الطلبات).</li>
          <li><b>الهيكل الشبكي (Matrix):</b> روابط متعددة متداخلة تتيح للمستخدم القفز بين الموضوعات حسب رغبته (مثل ويكيبيديا).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف نصنف ونرتب صفحات الموقع لتسهيل الوصول للمعلومات؟">
          هندسة المعلومات وهياكل التنظيم (Information Architecture)
        </Heading>

        {/* Hierarchical */}
        <Box x={800} y={170} w={380} h={360} c="blue" at={1} />
        <Doodle x={990} y={235} icon="🏛️" size={75} c="blue" fill="blue" at={1} />
        <Txt x={990} y={305} size={28} c="blue" at={1}>١ · الهيكل الهرمي (Hierarchical)</Txt>
        <Txt x={990} y={360} w={320} size={19} c="ink" at={1}>• شجرة تبدأ من الصفحة الرئيسية</Txt>
        <Txt x={990} y={400} w={320} size={19} c="ink" at={1}>• تتفرع لأقسام كبرى ثم صفحات فرعية</Txt>
        <Txt x={990} y={440} w={320} size={19} c="ink" at={1}>• الأكثر شيوعاً وسهولة في التصفح</Txt>
        <Txt x={990} y={485} size={20} c="blue" at={1}>أمثلة: مواقع الجامعات والمتاجر</Txt>

        {/* Sequential */}
        <Box x={400} y={170} w={380} h={360} c="orange" at={2} />
        <Doodle x={590} y={235} icon="➡️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={590} y={305} size={28} c="orange" at={2}>٢ · الهيكل التسلسلي (Sequential)</Txt>
        <Txt x={590} y={360} w={320} size={19} c="ink" at={2}>• مسار خطي متتابع (١ ← ٢ ← ٣)</Txt>
        <Txt x={590} y={400} w={320} size={19} c="ink" at={2}>• لا يمكن الانتقال لخطوة دون السابقة</Txt>
        <Txt x={590} y={440} w={320} size={19} c="ink" at={2}>• يقلل الأخطاء ويوجه المستخدم بدقة</Txt>
        <Txt x={590} y={485} size={20} c="orange" at={2}>أمثلة: خطوات الدفع والشراء</Txt>

        {/* Matrix */}
        <Box x={20} y={170} w={360} h={360} c="purple" at={3} />
        <Doodle x={200} y={235} icon="🕸️" size={75} c="purple" fill="purple" at={3} />
        <Txt x={200} y={305} size={28} c="purple" at={3}>٣ · الهيكل الشبكي (Matrix)</Txt>
        <Txt x={200} y={360} w={310} size={19} c="ink" at={3}>• روابط متداخلة بين كل الصفحات</Txt>
        <Txt x={200} y={400} w={310} size={19} c="ink" at={3}>• حرية تامة للمستخدم في الاستكشاف</Txt>
        <Txt x={200} y={440} w={310} size={19} c="ink" at={3}>• يتطلب وسوم بحث وفلاتر ذكية</Txt>
        <Txt x={200} y={485} size={20} c="purple" at={3}>أمثلة: ويكيبيديا والمواقع الإخبارية</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1160} h={80} c="green" fill="green" size={21} tc="ink" at={4}>
          📖 <b>الهدف الأساسي لهندسة المعلومات:</b> تقليل الجهد الذهني للزائر، ليعرف فور دخوله: أين أنا الآن؟ وإلى أين أذهب؟ وكيف أعود؟
        </Box>
      </Scene>
    ),
  },
  {
    id: 'ux-vs-ui-comparison', title: 'تجربة المستخدم (UX) مقابل واجهة المستخدم (UI)', scene: true,
    notes: (
      <>
        <p><b>التفرقة المحورية بين UX و UI:</b></p>
        <ul>
          <li><b>تجربة المستخدم (User Experience - UX):</b> كيف يشعر المستخدم أثناء استخدام الموقع؟ هل إنجاز المهمة سهل وبديهي وسريع؟ تركز على المنطق وسلاسة الرحلة.</li>
          <li><b>واجهة المستخدم (User Interface - UI):</b> كيف تبدو عناصر الشاشة بصرياً؟ الألوان، الخطوط، الأزرار، والجماليات. تركز على الإخراج الجمالي المرئي.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التكامل الوظيفي والجمالي بين عقل الموقع ومظهره الخارجي">
          تجربة المستخدم (UX) مقابل واجهة المستخدم (UI)
        </Heading>

        {/* UX Side */}
        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1424', borderColor: '#2563eb' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-sky-400">🧠 تجربة المستخدم (UX - User Experience)</span>
                <span className="pill text-xs font-bold bg-sky-950 text-sky-300 border-sky-700">المنطق والسهولة</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>التركيز الأساسي:</b> كيف يعمل الموقع؟ ومدى سهولة وسرعة حل مشكلة المستخدم.</li>
                <li>• <b>المهام والأنشطة:</b> أبحاث المستخدمين، التخطيط السلكي (Wireframing)، واختبارات الاستخدام.</li>
                <li>• <b>المعيار الأهم:</b> هل استطاع المستخدم تسجيل حسابه وشراء المنتج بدون أي حيرة أو تعثر؟</li>
                <li>• <b>التشبيه الشهير:</b> محرك السيارة وناقل الحركة وراحة مقاعد القيادة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-800 text-xs text-sky-300 font-bold">
              🎯 الهدف: جعل التفاعل سلساً، بديهياً، وخالياً من أي إحباط.
            </div>
          </div>
        </Place>

        {/* UI Side */}
        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c102b', borderColor: '#9333ea' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-purple-400">🎨 واجهة المستخدم (UI - User Interface)</span>
                <span className="pill text-xs font-bold bg-purple-950 text-purple-300 border-purple-700">المظهر والجماليات</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>التركيز الأساسي:</b> كيف تبدو الشاشة بصرياً للعين؟ الألوان، الأيقونات، والخطوط.</li>
                <li>• <b>المهام والأنشطة:</b> لوحات الألوان، التدرجات، ظلال الأزرار، والأنيميشن والانتقالات.</li>
                <li>• <b>المعيار الأهم:</b> هل التصميم جذاب وأنيق ومريح للنظر ويعكس هوية المؤسسة؟</li>
                <li>• <b>التشبيه الشهير:</b> لون طلاء السيارة الخارجي وشكل الجنوط والأضواء الباهرة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-950/40 border border-purple-800 text-xs text-purple-300 font-bold">
              ✨ الهدف: صناعة واجهة بصرية جذابة تعبر عن الاحترافية وتريح العين.
            </div>
          </div>
        </Place>

        {/* Bottom Rule */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          ⚖️ <b>القاعدة الذهبية:</b> UI الجميل بدون UX سليم هو كسيارة رياضية فائقة الجمال لكن بدون محرك ولا عجلة قيادة!
        </Box>
      </Scene>
    ),
  },
];

