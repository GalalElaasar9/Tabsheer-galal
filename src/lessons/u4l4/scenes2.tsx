// Board scenes · Unit 4 · Lesson 4 · Performance optimization stack & CRO
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'performance-optimization-stack', title: 'حزمة تقنيات تسريع الأداء (Performance Stack)', scene: true,
    notes: (
      <>
        <p><b>أهم التقنيات الهندسية لتسريع أداء ومعدلات تحميل الموقع:</b></p>
        <ul>
          <li><b>تحويل الصور إلى WebP:</b> يوفر أكثر من 60% من حجم الصور النقطية.</li>
          <li><b>التحميل الكسول (Lazy Loading):</b> تأخير تحميل الصور والمقاطع غير المرئية حتى يقترب المستخدم منها عبر <code>loading="lazy"</code>.</li>
          <li><b>التصغير (Minification):</b> حذف المسافات والتعليقات من ملفات CSS و JavaScript.</li>
          <li><b>التخزين المؤقت (Browser Caching):</b> حفظ الملفات الثابتة في جهاز الزائر لتفتح فورياً في الزيارات التالية عبر ترويسة <code>Cache-Control</code>.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الركائز الأربع التي تقلص زمن تحميل الصفحة من ثوانٍ إلى أجزاء من الثانية">
          حزمة تقنيات تسريع الأداء (Speed Optimization)
        </Heading>

        {/* Pillar 1: WebP */}
        <Box x={890} y={170} w={270} h={360} c="green" at={1} />
        <Doodle x={1025} y={235} icon="🖼️" size={75} c="green" fill="green" at={1} />
        <Txt x={1025} y={305} size={28} c="green" at={1}>١ · صور WebP</Txt>
        <Txt x={1025} y={360} w={230} size={18} c="ink" at={1}>• ضغط فائق مع دعم الشفافية</Txt>
        <Txt x={1025} y={400} w={230} size={18} c="ink" at={1}>• تقليص حجم الملف بنسبة 60%</Txt>
        <Txt x={1025} y={440} w={230} size={18} c="ink" at={1}>• توفير هائل في باقة الموبايل</Txt>
        <Txt x={1025} y={485} size={20} c="green" at={1}>بديل حديث لـ JPEG و PNG</Txt>

        {/* Pillar 2: Lazy Loading */}
        <Box x={600} y={170} w={270} h={360} c="blue" at={2} />
        <Doodle x={735} y={235} icon="⚡" size={75} c="blue" fill="blue" at={2} />
        <Txt x={735} y={305} size={28} c="blue" at={2}>٢ · التحميل الكسول</Txt>
        <Txt x={735} y={360} w={230} size={18} c="ink" at={2}>• loading="lazy"</Txt>
        <Txt x={735} y={400} w={230} size={18} c="ink" at={2}>• لا يحمل الصور البعيدة إلا عند التمرير</Txt>
        <Txt x={735} y={440} w={230} size={18} c="ink" at={2}>• فتح الصفحة الأولى في لمح البصر</Txt>
        <Txt x={735} y={485} size={20} c="blue" at={2}>سرعة LCP فائقة ⏱️</Txt>

        {/* Pillar 3: Minification */}
        <Box x={310} y={170} w={270} h={360} c="orange" at={3} />
        <Doodle x={445} y={235} icon="📦" size={75} c="orange" fill="orange" at={3} />
        <Txt x={445} y={305} size={28} c="orange" at={3}>٣ · تصغير الأكواد</Txt>
        <Txt x={445} y={360} w={230} size={18} c="ink" at={3}>• Minification لـ CSS و JS</Txt>
        <Txt x={445} y={400} w={230} size={18} c="ink" at={3}>• حذف المسافات والأسطر الفارغة</Txt>
        <Txt x={445} y={440} w={230} size={18} c="ink" at={3}>• تقليص حجم ملف الكود للنصف</Txt>
        <Txt x={445} y={485} size={20} c="orange" at={3}>style.min.css</Txt>

        {/* Pillar 4: Caching */}
        <Box x={20} y={170} w={270} h={360} c="purple" at={4} />
        <Doodle x={155} y={235} icon="💾" size={75} c="purple" fill="purple" at={4} />
        <Txt x={155} y={305} size={28} c="purple" at={4}>٤ · التخزين المؤقت</Txt>
        <Txt x={155} y={360} w={230} size={18} c="ink" at={4}>• Browser Caching</Txt>
        <Txt x={155} y={400} w={230} size={18} c="ink" at={4}>• حفظ الملفات الثابتة بجهاز الزائر</Txt>
        <Txt x={155} y={440} w={230} size={18} c="ink" at={4}>• فتح فوري في الزيارة التالية</Txt>
        <Txt x={155} y={485} size={20} c="purple" at={4}>Cache-Control: max-age</Txt>

        {/* Bottom Banner */}
        <Box x={20} y={555} w={1140} h={80} c="pink" fill="pink" size={21} tc="ink" at={5}>
          🚀 <b>النتيجة الإجمالية:</b> تطبيق هذه الحزمة يقلص حجم تحميل الصفحة بنسبة 85% ويجعل زمن التحميل أقل من ثانية واحدة!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'cro-frictionless-ux', title: 'تحسين معدل التحويل وإزالة نقاط الاحتكاك (CRO)', scene: true,
    notes: (
      <>
        <p><b>تحسين معدل التحويل وإزالة نقاط الاحتكاك (CRO & Frictionless UX):</b></p>
        <p>كل حقل زائد وكل زر غير واضح يمثل "نقطة احتكاك" تجعل المستخدم يتردد ويهرب.</p>
        <p><b>استراتيجيات الـ CRO الناجحة:</b></p>
        <ul>
          <li><b>تقليص حقول الاستمارات:</b> الاقتصار على المعلومات الجوهرية فقط وتوفير التسجيل السريع.</li>
          <li><b>إبراز أزرار الدعوة للإجراء (CTA):</b> استخدام نصوص محفزة ("ابدأ التعلم مجاناً" بدلاً من "إرسال").</li>
          <li><b>توفير الأمان والطمأنينة:</b> إظهار شارات الأمان وضمان استرجاع الأموال وسياسة الخصوصية.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف تحول الزوار المترددين إلى مشتركين وعملاء دائمين؟">
          تحسين معدل التحويل (Conversion Rate Optimization - CRO)
        </Heading>

        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1015', borderColor: '#e11d48' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-rose-400">⚠️ نقاط الاحتكاك المسببة للهروب (Friction Points)</span>
                <span className="pill text-xs font-bold bg-rose-950 text-rose-300 border-rose-700">تطرد الزوار</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• استمارات طويلة تطلب ٢٠ معلومة شخصية غير ضرورية.</li>
                <li>• إجبار المستخدم على إنشاء حساب وتفعيل إيميل قبل استعراض الخدمة.</li>
                <li>• أزرار تسجيل باهتة وصغيرة ومخفية في زاوية الصفحة.</li>
                <li>• غياب رسائل الطمأنينة وسياسة الأمان وإرجاع الأموال.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300 font-bold">
              ❌ النتيجة: يغادر 70% من الزوار الصفحة دون إتمام الهدف.
            </div>
          </div>
        </Place>

        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1a18', borderColor: '#10b981' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-emerald-400">✨ الحلول التكرارية المحسنة (CRO Solutions)</span>
                <span className="pill text-xs font-bold bg-emerald-950 text-emerald-300 border-emerald-700">ترفع المبيعات</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• تقليص الاستمارة لـ 3 حقول فقط مع خيار التسجيل بنقرة واحدة بحساب Google.</li>
                <li>• إتاحة "الشراء كضيف" وإظهار شريط تقدم تسلسلي (Progress Bar).</li>
                <li>• زر CTA عريض وبارز بلون مشرق ونص محفز ("ابدأ مجاناً").</li>
                <li>• وضع شارات التقييم والضمان بجوار الزر لطمأنة الزائر.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-bold">
              🚀 النتيجة: مضاعفة معدل التحويل والاشتراكات بنسبة تفوق 200%!
            </div>
          </div>
        </Place>

        {/* Bottom Banner */}
        <Box x={40} y={560} w={1140} h={80} c="green" fill="green" size={21} tc="ink" at={3}>
          💡 <b>القاعدة الذهبية:</b> في كل دورة تحسين تكرارية، ابحث عن الحقل أو الخطوة الأكثر إزعاجاً للمستخدم وتخلص منها فوراً.
        </Box>
      </Scene>
    ),
  },
];

