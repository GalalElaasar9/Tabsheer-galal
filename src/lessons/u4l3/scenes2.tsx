// Board scenes · Unit 4 · Lesson 3 · Nielsen Heuristics, Web Analytics & A/B Testing
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'heuristics-nielsen', title: 'التقييم الاستكشافي ومبادئ نيلسن (Heuristic Evaluation)', scene: true,
    notes: (
      <>
        <p><b>التقييم الاستكشافي ومبادئ جاكوب نيلسن (Nielsen's 10 Usability Heuristics):</b></p>
        <p>مجموعة من القواعد الذهبية المعترف بها دولياً لفحص وتقييم واجهات المستخدم بواسطة الخبراء:</p>
        <ol>
          <li><b>وضوح حالة النظام:</b> إخبار المستخدم بما يجري (مؤشرات تحميل، شريط تقدم).</li>
          <li><b>مطابقة النظام للعالم الحقيقي:</b> مصطلحات مألوفة وأيقونات يفهمها الإنسان العادي.</li>
          <li><b>حرية وتحكم المستخدم:</b> توفير زر تراجع (Undo) وإلغاء فوري للأخطاء.</li>
          <li><b>التناسق والمعايير:</b> عدم تغيير وظيفة الأزرار بين صفحة وأخرى.</li>
          <li><b>منع الأخطاء:</b> تصميم استمارات ذكية تمنع وقوع الخطأ أصلاً بدلاً من التحذير بعده.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="القواعد الإرشادية الذهبية لخبراء تصميم تجربة المستخدم عالمياً">
          التقييم الاستكشافي: مبادئ نيلسن لقابلية الاستخدام
        </Heading>

        {/* Principle 1 */}
        <Box x={800} y={170} w={380} h={360} c="blue" at={1} />
        <Doodle x={990} y={235} icon="📢" size={75} c="blue" fill="blue" at={1} />
        <Txt x={990} y={305} size={26} c="blue" at={1}>١ · وضوح حالة النظام</Txt>
        <Txt x={990} y={360} w={320} size={18} c="ink" at={1}>• إخبار المستخدم بما يحدث خلف الكواليس</Txt>
        <Txt x={990} y={400} w={320} size={18} c="ink" at={1}>• مؤشر تقدم دائري أثناء التحميل</Txt>
        <Txt x={990} y={440} w={320} size={18} c="ink" at={1}>• رسالة تأكيد خضراء عند إتمام الحفظ</Txt>
        <Txt x={990} y={485} size={20} c="blue" at={1}>Visibility of Status</Txt>

        {/* Principle 2 */}
        <Box x={400} y={170} w={380} h={360} c="orange" at={2} />
        <Doodle x={590} y={235} icon="↩️" size={75} c="orange" fill="orange" at={2} />
        <Txt x={590} y={305} size={26} c="orange" at={2}>٢ · حرية وتحكم المستخدم</Txt>
        <Txt x={590} y={360} w={320} size={18} c="ink" at={1}>• مخرج طوارئ واضح عند التراجع</Txt>
        <Txt x={590} y={400} w={320} size={18} c="ink" at={1}>• زر التراجع الفوري (Undo)</Txt>
        <Txt x={590} y={440} w={320} size={18} c="ink" at={1}>• عدم حبس الزائر في مسار إجباري معقد</Txt>
        <Txt x={590} y={485} size={20} c="orange" at={2}>User Control & Freedom</Txt>

        {/* Principle 3 */}
        <Box x={20} y={170} w={360} h={360} c="green" at={3} />
        <Doodle x={200} y={235} icon="🛡️" size={75} c="green" fill="green" at={3} />
        <Txt x={200} y={305} size={26} c="green" at={3}>٣ · منع الأخطاء قبل وقوعها</Txt>
        <Txt x={200} y={360} w={310} size={18} c="ink" at={1}>• تعطيل زر الإرسال حتى تكتمل الشروط</Txt>
        <Txt x={200} y={400} w={310} size={18} c="ink" at={1}>• رسالة تأكيد قبل حذف أي سجل نهائياً</Txt>
        <Txt x={200} y={440} w={310} size={18} c="ink" at={1}>• قوائم اختيار بدل الكتابة اليدوية</Txt>
        <Txt x={200} y={485} size={20} c="green" at={3}>Error Prevention</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1160} h={80} c="purple" fill="purple" size={21} tc="ink" at={4}>
          📖 <b>الفرق في الامتحانات:</b> اختبار الاستخدام يجريه مستخدمون حقيقيون، بينما التقييم الاستكشافي يجريه خبراء متخصصون استناداً لمبادئ نيلسن.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'analytics-and-heatmaps', title: 'التحليلات الرقمية والخرائط الحرارية (Heatmaps)', scene: true,
    notes: (
      <>
        <p><b>التحليلات الرقمية وسلوك المستخدمين (Web Analytics):</b></p>
        <p>الأرقام الصامتة التي تفضح كل نقاط القوة والضعف في موقعك:</p>
        <ul>
          <li><b>معدل الارتداد (Bounce Rate):</b> نسبة الذين يدخلون الصفحة الأولى ويخرجون فوراً دون نقر أي رابط. انخفاضه دليل نجاح وجاذبية.</li>
          <li><b>معدل التحويل (Conversion Rate):</b> نسبة الزوار الذين نفذوا الهدف المنشود (تسجيل حساب، شراء، تحميل ملف).</li>
          <li><b>الخرائط الحرارية (Heatmaps):</b> رصد أماكن نقرات وتمرير الفأرة؛ اللون الأحمر يعني منطقة ساخنة وجاذبة، والأزرق منطقة مهجورة.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف تقرأ تصرفات ونقرات واهتمامات ملايين الزوار بالأرقام والخرائط؟">
          التحليلات الرقمية والخرائط الحرارية (Analytics & Heatmaps)
        </Heading>

        {/* Bounce & Conversion */}
        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1424', borderColor: '#2563eb' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-sky-400">📊 مؤشرات الأداء الحيوية (KPIs)</span>
                <span className="pill text-xs font-bold bg-sky-950 text-sky-300 border-sky-700">Bounce & Conversion</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>معدل الارتداد (Bounce Rate):</b> نسبة الذين غادروا فوراً دون تفاعل؛ ارتفاعه مؤشر خطير لخلل في المحتوى أو بطء الصفحة.</li>
                <li>• <b>معدل التحويل (Conversion Rate):</b> نسبة من أنجزوا الهدف النهائي (شراء/تسجيل)؛ المقياس التجاري الأول للموقع.</li>
                <li>• <b>متوسط مدة الجلسة:</b> كم دقيقة يقضيها الزائر مستمتعاً بقراءة المقالات والدروس؟</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-800 text-xs text-sky-300 font-bold">
              📈 الهدف المستمر: خفض معدل الارتداد ورفع معدل التحويل إلى أقصى حد.
            </div>
          </div>
        </Place>

        {/* Heatmaps */}
        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1015', borderColor: '#f97316' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-orange-400">🔥 الخرائط الحرارية (Heatmaps)</span>
                <span className="pill text-xs font-bold bg-orange-950 text-orange-300 border-orange-700">تتبع النقرات والتمرير</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>خريطة النقرات (Click Map):</b> تظهر الأزرار والنصوص التي ضغط عليها الزوار بكثافة.</li>
                <li>• <b>خريطة التمرير (Scroll Map):</b> تكشف إلى أي عمق في الصفحة نزل القراء قبل أن يغادروا.</li>
                <li>• <b>الألوان الساخنة:</b> اللون الأحمر والأصفر يشير لأكثر الأماكن جذباً للعيون والنقرات.</li>
                <li>• <b>الألوان الباردة:</b> اللون الأزرق يشير للأقسام المتجاهلة والميتة بصرياً.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-orange-950/40 border border-orange-800 text-xs text-orange-300 font-bold">
              🎯 القرار الهندسي: وضع زر الـ CTA في المناطق الساخنة الحمراء لتحقيق أعلى نقرات.
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          💡 <b>اختبارات A/B:</b> الطريقة العلمية التي تستخدم هذه الأرقام للمقارنة بين تصميمين وتحديد الفائز بالدليل الإحصائي القاطع.
        </Box>
      </Scene>
    ),
  },
];

