// Board scenes · Unit 4 · Lesson 3 · intro, why evaluate, and usability testing
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Line, Num, Place, Scene, Txt, Underline } from '../../sketch/Sketch';

const STOPS = [
  'أهمية تقييم المواقع',
  'اختبارات قابلية الاستخدام',
  'التقييم الاستكشافي (نيلسن)',
  'مبادئ التراجع ومنع الخطأ',
  'معدل الارتداد والتحويل',
  'الخرائط الحرارية (Heatmaps)',
  'اختبارات A/B والمؤشرات',
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
        <p><b>أهلاً بكم في ثالث دروس الوحدة الرابعة: أساليب تقييم المواقع الإلكترونية.</b></p>
        <p>بعد تصميم الموقع ووضع وسائطه، كيف نتأكد من نجاحه عملياً؟ كيف نقيس رضا الزوار ومعدلات التحويل ونكتشف الأخطاء قبل إطلاق الحملات الإعلانية؟ هذا ما سنتعلمه اليوم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={110} size={30} c="purple">الصف الثاني الثانوي · بكالوريا · Unit 4 · Lesson 3</Txt>
        <Txt x={640} y={235} size={85}>أساليب تقييم المواقع الإلكترونية</Txt>
        <Underline x={200} y={305} w={880} c="blue" />
        <Txt x={640} y={360} size={42} c="blue">Website Evaluation Methods</Txt>

        {[['🧪', 'اختبار الاستخدام'], ['📋', 'مبادئ نيلسن'], ['📊', 'معدل التحويل'], ['🔥', 'الخرائط الحرارية'], ['🅰️', 'اختبارات A/B']].map(([icon, label], i) => (
          <Doodle key={label} x={1060 - i * 200} y={530} icon={icon} size={90} label={label} lc="blue" at={1} delay={i * 0.3} />
        ))}
      </Scene>
    ),
  },
  {
    id: 'journey', title: 'رحلة الدرس', scene: true,
    notes: (
      <>
        <p><b>خريطة رحلتنا في تقييم المواقع:</b> ثماني محطات تجمع بين الاختبارات المعملية، التحليلات الرقمية، ومؤشرات الأداء.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading>خريطة موضوعات تقييم المواقع الإلكترونية</Heading>
        <Box x={150} y={150} w={980} h={105} c="pink" fill="pink" size={30} tc="ink">
          ❓ كيف نقيس نجاح الموقع ونتأكد من سهولة استخدامه وتحقيقه للأهداف؟
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
    id: 'evaluation-why', title: 'لماذا نقيم المواقع الإلكترونية؟', scene: true,
    notes: (
      <>
        <p><b>أهداف وأهمية تقييم المواقع:</b></p>
        <p>بناء الموقع ليس نهاية المطاف. عملية التقييم المستمر ضرورية للأسباب التالية:</p>
        <ul>
          <li><b>اكتشاف نقاط التعثر والإحباط:</b> معرفة أين يقف المستخدم عاجزاً أو يرتكب أخطاء غير مقصودة.</li>
          <li><b>تحسين معدل التحويل (Conversion Rate):</b> زيادة نسبة الزوار الذين يحققون هدف الموقع (شراء، اشتراك، تحميل).</li>
          <li><b>قياس سرعة الأداء والاستقرار:</b> التأكد من أن الموقع يفتح في أقل من ثانيتين على الهواتف الضعيفة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الأسباب العلمية والاقتصادية لإجراء تقييم دوري لمواقع الويب">
          لماذا نقيم المواقع الإلكترونية؟ (Why Evaluate?)
        </Heading>

        {/* Reason 1 */}
        <Box x={800} y={170} w={380} h={360} c="blue" at={1} />
        <Doodle x={990} y={235} icon="🎯" size={75} c="blue" fill="blue" at={1} />
        <Txt x={990} y={305} size={28} c="blue" at={1}>١ · تحقيق أهداف العمل</Txt>
        <Txt x={990} y={360} w={320} size={19} c="ink" at={1}>• زيادة الاشتراكات والمبيعات</Txt>
        <Txt x={990} y={400} w={320} size={19} c="ink" at={1}>• رفع معدل التحويل (Conversion)</Txt>
        <Txt x={990} y={440} w={320} size={19} c="ink" at={1}>• ضمان عائد الاستثمار في الموقع</Txt>
        <Txt x={990} y={485} size={20} c="blue" at={1}>تحقيق الغاية الاستراتيجية</Txt>

        {/* Reason 2 */}
        <Box x={400} y={170} w={380} h={360} c="orange" at={2} />
        <Doodle x={590} y={235} icon="🛠️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={590} y={305} size={28} c="orange" at={2}>٢ · إزالة عقبات المستخدم</Txt>
        <Txt x={590} y={360} w={320} size={19} c="ink" at={2}>• رصد الحقول الصعبة والمعقدة</Txt>
        <Txt x={590} y={400} w={320} size={19} c="ink" at={2}>• منع هروب الزوار (خفض Bounce Rate)</Txt>
        <Txt x={590} y={440} w={320} size={19} c="ink" at={2}>• تبسيط خطوات التسجيل والشراء</Txt>
        <Txt x={590} y={485} size={20} c="orange" at={2}>إصلاح الأعطال المربكة</Txt>

        {/* Reason 3 */}
        <Box x={20} y={170} w={360} h={360} c="green" at={3} />
        <Doodle x={200} y={235} icon="⚡" size={75} c="green" fill="green" at={3} />
        <Txt x={200} y={305} size={28} c="green" at={3}>٣ · قياس السرعة والأداء</Txt>
        <Txt x={200} y={360} w={310} size={19} c="ink" at={3}>• فحص سرعة التحميل على الموبايل</Txt>
        <Txt x={200} y={400} w={310} size={19} c="ink" at={3}>• تجنب بطء الخادم ورموز 500</Txt>
        <Txt x={200} y={440} w={310} size={19} c="ink" at={3}>• اختبار التوافق مع كافة المتصفحات</Txt>
        <Txt x={200} y={485} size={20} c="green" at={3}>معايير Core Web Vitals</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1160} h={80} c="pink" fill="pink" size={21} tc="ink" at={4}>
          💡 <b>مقولة خبراء الويب:</b> ما لا يمكن قياسه لا يمكن تحسينه؛ والتقييم المستمر هو الفارق بين موقع ناجح وموقع مهجور.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'usability-testing-method', title: 'اختبارات قابلية الاستخدام (Usability Testing)', scene: true,
    notes: (
      <>
        <p><b>اختبارات قابلية الاستخدام (Usability Testing):</b></p>
        <p>المعيار الأصدق لتقييم الويب؛ حيث نجلس مع عينة من المستخدمين الفعليين ونطلب منهم إتمام مهام محددة (مثل: "اشترِ الكتاب رقم 3 وسجل بياناتك").</p>
        <p><b>ماذا نقيس في جلسة الاختبار؟</b></p>
        <ul>
          <li><b>معدل نجاح المهمة (Task Completion Rate):</b> كم نسبة الذين وصلوا للهدف بنجاح؟</li>
          <li><b>زمن إنجاز المهمة (Time on Task):</b> كم ثانية استغرقها الزائر لإنهاء الخطوة؟</li>
          <li><b>أماكن التردد والارتباك:</b> ما هي الأزرار التي نقروا عليها بالخطأ؟</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مراقبة مستخدمين حقيقيين أثناء التفاعل المباشر مع واجهة الموقع">
          اختبارات قابلية الاستخدام (Usability Testing)
        </Heading>

        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1424', borderColor: '#2563eb' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-sky-400">🧪 جلسة الاختبار المعملي الحي</span>
                <span className="pill text-xs font-bold bg-sky-950 text-sky-300 border-sky-700">مستخدمون حقيقيون</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>إعداد السيناريو:</b> تكليف المستخدم بمهمة واقعية دون توجيه مسبق.</li>
                <li>• <b>التفكير بصوت عالٍ (Think Aloud):</b> المستخدم يعبر عما يدور بباله أثناء التصفح.</li>
                <li>• <b>تسجيل الشاشة وحركة العين:</b> رصد كل نقرة وتردد في الاستجابة.</li>
                <li>• <b>تحليل الملاحظات:</b> تصنيف المشكلات إلى حرجة، متوسطة، وبسيطة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-800 text-xs text-sky-300 font-bold">
              🔍 القيمة الكبرى: يكشف العيوب التي يعجز مصممو الموقع عن رؤيتها بسبب تعودهم عليه.
            </div>
          </div>
        </Place>

        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#131b14', borderColor: '#10b981' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-emerald-400">📊 مؤشرات القياس المباشرة</span>
                <span className="pill text-xs font-bold bg-emerald-950 text-emerald-300 border-emerald-700">Quantitative Metrics</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>معدل الإتمام (Success Rate):</b> النسبة المئوية للمستخدمين الذين أتموا المهمة بنجاح (المستهدف &gt; 85%).</li>
                <li>• <b>زمن المهمة (Time on Task):</b> الثواني المستغرقة؛ انخفاض الزمن يعني سهولة الاستخدام.</li>
                <li>• <b>معدل الخطأ (Error Rate):</b> عدد النقرات الخاطئة التي وقع فيها الزائر قبل العثور على الصواب.</li>
                <li>• <b>مقياس الرضا (SUS Score):</b> استبيان يقيس شعور المستخدم بالراحة بعد الجلسة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-bold">
              📈 النتيجة: أرقام موضوعية ودلائل قاطعة توجه خطة التطوير وإعادة التصميم.
            </div>
          </div>
        </Place>

        {/* Bottom Rule */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          📖 <b>قاعدة نيلسن الشهيرة:</b> اختبار 5 مستخدمين فقط يكفي لاكتشاف أكثر من 85% من مشكلات قابلية الاستخدام في أي موقع ويب!
        </Box>
      </Scene>
    ),
  },
];

