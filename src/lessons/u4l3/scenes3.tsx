// Board scenes · Unit 4 · Lesson 3 · Core Web Vitals, Concept Map, and Master Summary (Kitab El-Faez)
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Scene, Txt, Underline } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'core-web-vitals',
    title: 'مؤشرات أداء الويب الأساسية (Core Web Vitals)',
    scene: true,
    notes: (
      <>
        <p><b>مؤشرات أداء الويب الأساسية من Google (Core Web Vitals):</b></p>
        <p>ثلاثة معايير قياسية تعتمدها محركات البحث والمتصفحات لقياس سرعة واستقرار تجربة التصفح:</p>
        <ol>
          <li><b>LCP (Largest Contentful Paint):</b> زمن تحميل أكبر صورة أو نص يراه المستخدم (المثالي أقل من 2.5 ثانية).</li>
          <li><b>INP / FID (Interaction to Next Paint):</b> زمن استجابة الصفحة لنقرة وتفاعل المستخدم (المثالي أقل من 200 مللي ثانية).</li>
          <li><b>CLS (Cumulative Layout Shift):</b> استقرار العناصر على الشاشة ومنع قفز الأزرار فجأة (المثالي أقل من 0.1).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المعايير الثلاثة الرسمية لتقييم سرعة واستقرار تجربة التصفح من Google">
          مؤشرات أداء الويب الأساسية (Core Web Vitals) ⏱️⚡
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              ⚡ سرعة وثبات التصفح بالأرقام القياسية:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              ثلاثة مؤشرات هندسية تقيس سرعة التحميل، استجابة التفاعل، وثبات الشاشة بدقة متناهية!
            </span>
          </div>
        </Box>

        {/* 3 Columns: LCP, INP, CLS across 1160px */}
        {/* LCP */}
        <Box x={860} y={215} w={360} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  ⏱️ ١ · سرعة التحميل (LCP)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 6px', borderRadius: '4px' }}>
                  Loading Speed
                </span>
              </div>

              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs mb-2 text-slate-300">
                <b>Largest Contentful Paint:</b> زمن ظهور أكبر محتوى مرئي (صورة رئيسية أو عنوان ضخم).
              </div>

              <div className="p-2 rounded bg-blue-950/40 border border-blue-700/60 text-xs text-sky-200 space-y-1">
                <div>• المستهدف المثالي: <b>أقل من 2.5 ثانية</b>.</div>
                <div>• يمنع شعور الزائر بالملل والانتظار.</div>
                <div>• يتأثر بضغط الصور وسرعة السيرفر.</div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              المحتوى الأكبر يظهر فوراً وبدون تأخير!
            </div>
          </div>
        </Box>

        {/* INP */}
        <Box x={460} y={215} w={360} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  ⚡ ٢ · سرعة الاستجابة (INP)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 6px', borderRadius: '4px' }}>
                  Interactivity
                </span>
              </div>

              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs mb-2 text-slate-300">
                <b>Interaction to Next Paint:</b> زمن استجابة الصفحة لأول نقرة بالماوس أو لمسة شاشة.
              </div>

              <div className="p-2 rounded bg-emerald-950/40 border border-emerald-700/60 text-xs text-emerald-200 space-y-1">
                <div>• المستهدف المثالي: <b>أقل من 200 مللي ثانية</b>.</div>
                <div>• يمنع بطء أو «تهنيج» الأزرار والقوائم.</div>
                <div>• يجعل الموقع يشعر بالسلاسة والخفة.</div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              تفاعل لحظي وفوري مع نقرات الزائر!
            </div>
          </div>
        </Box>

        {/* CLS */}
        <Box x={60} y={215} w={360} h={365} c="purple" fill="purple" at={4}>
          <div style={{ textAlign: 'right', padding: '16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🛡️ ٣ · ثبات التخطيط (CLS)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 6px', borderRadius: '4px' }}>
                  Visual Stability
                </span>
              </div>

              <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs mb-2 text-slate-300">
                <b>Cumulative Layout Shift:</b> استقرار العناصر ومنع قفز الأزرار فجأة أثناء التحميل.
              </div>

              <div className="p-2 rounded bg-purple-950/40 border border-purple-700/60 text-xs text-purple-200 space-y-1">
                <div>• المستهدف المثالي: <b>أقل من 0.1</b> (شبه معدوم).</div>
                <div>• يمنع النقرات الخاطئة بسبب قفز الأزرار.</div>
                <div>• يحقق راحة بصرية وثباتاً ممتازاً.</div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-purple)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
              لا مفاجآت بصرية ولا أزرار تتحرك بمفردها!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={5}>
          🌐 <b>أهميتها لمحركات البحث (SEO):</b> المواقع التي تحقق اللون الأخضر في هذه المؤشرات الثلاثة ترقيها Google تلقائياً لقمة نتائج البحث!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'concept-map-u4l3',
    title: 'الخريطة الذهنية الشاملة لتقييم المواقع الإلكترونية',
    scene: true,
    notes: (
      <>
        <p><b>الخريطة الذهنية الشاملة لدرس طُرق تقييم المواقع:</b></p>
        <p>ملخص بصري متكامل يربط بين:</p>
        <ul>
          <li><b>التقييم النوعي (لماذا حدث السلوك؟):</b> اختبار قابلية الاستخدام (مراقبة العمليات الفعلية) · المقابلات (الاستماع المباشر) · التقييم الإرشادي (مراجعة الخبراء بالقواعد الثلاث: الاتساق، منع الأخطاء، وضوح حالة النظام).</li>
          <li><b>التقييم الكمي (ماذا وكم حدث بالأرقام؟):</b> تحليلات الويب (الوصول، التفاعل، النتائج) ومؤشراتها (PV، معدل الارتداد، CVR وتحديد المقام) · واختبارات A/B.</li>
          <li><b>الجمع بينهما:</b> الأرقام تكشف ما يحدث، والمستخدمون والخبراء يكشفون الأسباب!</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الصورة الكاملة لمنهجيات ومصطلحات تقييم المواقع المعتمدة في المنهج">
          الخريطة الذهنية الشاملة: طُرق تقييم المواقع الإلكترونية 🧠🗺️
        </Heading>

        {/* Top Center Node */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '8px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🔍 طُرق تقييم المواقع الإلكترونية المعتمدة:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              لا نعتمد على طريقة واحدة، بل نجمع بين التقييم النوعي (لماذا) والتقييم الكمي (كم)!
            </span>
          </div>
        </Box>

        {/* 3 Main Pillars across 1160px */}
        {/* Pillar 1: Qualitative */}
        <Box x={860} y={215} w={360} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🧠 ١ · التقييم النوعي (لماذا؟)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 6px', borderRadius: '4px' }}>
                  فهم تجربة
                </span>
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 11.5, lineHeight: 1.5 }}>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-sky-300">🧪 اختبار قابلية الاستخدام:</b>
                  <div className="text-[11px] text-slate-300">مراقبة العمليات الفعلية لتحديد نقاط صعوبة الاستخدام (سيناريو الطالب أحمد).</div>
                </div>
                <div className="p-2 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-sky-300">🎤 المقابلات الشخصية:</b>
                  <div className="text-[11px] text-slate-300">الاستماع المباشر لآراء واحتياجات واستياء الزوار (الأسئلة الـ 5 الذهبية).</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-blue)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              يوضح أسباب المشكلات ومشاعر وتجربة المستخدم!
            </div>
          </div>
        </Box>

        {/* Pillar 2: Heuristic */}
        <Box x={460} y={215} w={360} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  📋 ٢ · التقييم الإرشادي (خبراء)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 6px', borderRadius: '4px' }}>
                  مراجعة UI
                </span>
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 11.5, lineHeight: 1.5 }}>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-amber-300">🎯 ١. الاتساق:</b>
                  <div className="text-[11px] text-slate-300">تشابه وتوحيد التصميم وطريقة العمل عبر كل الموقع.</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-amber-300">🛡️ ٢. منع الأخطاء:</b>
                  <div className="text-[11px] text-slate-300">منع ارتكاب الأخطاء مسبقاً (حقل العمر يمنع الحروف).</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-amber-300">📢 ٣. وضوح حالة النظام:</b>
                  <div className="text-[11px] text-slate-300">إخبار المستخدم بما يحدث الآن (مؤشر تحميل الملف).</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              فحص خبير يكتشف ما قد تخفيه الأرقام الصامتة!
            </div>
          </div>
        </Box>

        {/* Pillar 3: Quantitative & Analytics */}
        <Box x={60} y={215} w={360} h={365} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'right', padding: '14px 16px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '4px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  📊 ٣ · التقييم الكمي (كم؟)
                </span>
                <span style={{ fontSize: 10, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 6px', borderRadius: '4px' }}>
                  بيانات عددية
                </span>
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 11.5, lineHeight: 1.5 }}>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-emerald-300">👁️ مشاهدات الصفحة PV:</b>
                  <div className="text-[11px] text-slate-300">إجمالي مرات المشاهدة بما فيها التكرار لنفس الزائر.</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-emerald-300">↩️ معدل الارتداد:</b>
                  <div className="text-[11px] text-slate-300">المغادرة بعد صفحة واحدة دون تفاعل (لا يفسر السبب وحده).</div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/90 border border-slate-800 text-slate-200">
                  <b className="text-emerald-300">🎯 التحويل CVR + اختبار A/B:</b>
                  <div className="text-[11px] text-slate-300">نسبة تحقيق الهدف وتحديد المقام، ومقارنة خيارين A/B.</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 11, color: 'var(--pen-green)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 4 }}>
              قياس دقيق بالسلوك والنتائج والأرقام الإحصائية!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={5}>
          🌟 <b>القاعدة الذهبية:</b> التقييم الكمي يقول ماذا يحدث؟ وكم يحدث؟ والتقييم النوعي يوضح لماذا يحدث ذلك؟ وكيف يشعر المستخدم!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ending-u4l3',
    title: 'خاتمة درس أساليب تقييم المواقع',
    scene: true,
    notes: (
      <>
        <p><b>ألف مبروك! أتممتم بنجاح دراسة الدرس الثالث من الوحدة الرابعة: طُرق تقييم المواقع الإلكترونية (بكالوريا 2027).</b></p>
      </>
    ),
    render: () => (
      <Scene>
        <Txt x={640} y={150} size={85}>🎉 عمل رائع!</Txt>
        <Txt x={640} y={245} size={36} c="purple">أتممتم بنجاح دراسة درس طُرق تقييم المواقع الإلكترونية</Txt>
        <Underline x={300} y={285} w={680} c="green" />

        <Box x={60} y={335} w={1160} h={185} c="blue" fill="blue" size={24} tc="ink" at={1}>
          <div style={{ textAlign: 'right', padding: '16px 24px', lineHeight: 1.6, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 22, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              💡 أهم ما أتقنتموه في هذا الدرس:
            </span>
            <div style={{ marginTop: 8, fontSize: 16.5, color: 'var(--pen-ink)' }}>
              ١. التمييز بين <b>التقييم النوعي</b> (سؤال: لماذا؟) و<b>التقييم الكمي</b> (سؤال: كم؟).
              <br />
              ٢. كيفية تطبيق <b>اختبارات قابلية الاستخدام (Usability Testing)</b> وتوجيه <b>المقابلات الشخصية (Interviews)</b>.
              <br />
              ٣. مراجعة <b>التقييم الإرشادي وقواعده الثلاث</b> (الاتساق، منع الأخطاء، وضوح حالة النظام) وحساب <b>مؤشرات PV والارتداد و CVR واختبارات A/B</b>.
            </div>
          </div>
        </Box>

        <Doodle
          x={640}
          y={575}
          icon="🎯"
          size={75}
          c="orange"
          fill="orange"
          at={2}
          label="نلتقي في الدرس الرابع: عملية التحسين التكراري للمواقع الإلكترونية (دورة PDCA)"
          lc="orange"
          lsize={20}
        />
      </Scene>
    ),
  },
];
