// Board scenes · Unit 6 · Lesson 9 · Page 142: Design Techniques for Comprehension
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part4: FrameDef[] = [
  {
    id: 'ui-cui-gui',
    title: 'واجهات المستخدم: UI و CUI و GUI (صفحة 142)',
    scene: true,
    notes: (
      <>
        <p><b>تقنيات التصميم لسهولة الفهم – صفحة 142:</b></p>
        <p>الهدف منها تصميم أنظمة ومواقع تكون سهلة وواضحة للمستخدم.</p>
        <ol>
          <li><b>واجهة المستخدم (UI - User Interface):</b> الوسيلة التي يتفاعل المستخدم من خلالها مع الجهاز أو التطبيق (مثل درجات الحرارة والأزرار والقوائم في تطبيق الطقس).</li>
          <li><b>واجهة سطر الأوامر (CUI - Command User Interface):</b> واجهة نتعامل فيها بكتابة الأوامر بدلاً من الأزرار والفأرة (مثل نافذة CMD/Terminal).</li>
          <li><b>واجهة المستخدم الرسومية (GUI - Graphical User Interface):</b> واجهة تسمح بالتعامل عبر عناصر مرئية كالنوافذ والأيقونات والأزرار وسلة المحذوفات.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="صفحة ١٤٢ من كتاب الوزارة · أنواع واجهات المستخدم من الأوامر النصية إلى الرسوميات">
          ١ · واجهات المستخدم: UI و CUI و GUI 🖥️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              📱 واجهة المستخدم (UI – User Interface):
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "الوسيلة التي يتفاعل المستخدم من خلالها مع الجهاز أو التطبيق (كل ما يراه المستخدم ويتفاعل معه)."
            </span>
          </div>
        </Box>

        {/* 2 Big Comparison Cards: CUI vs GUI */}
        {/* Right: CUI */}
        <Box x={660} y={215} w={560} h={365} c="orange" fill="orange" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ⌨️ ٢ · واجهة سطر الأوامر (CUI)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  كتابة الأوامر
                </span>
              </div>

              {/* Terminal Simulation */}
              <div style={{ backgroundColor: '#020617', border: '1px solid #334155', borderRadius: '10px', padding: '12px 14px', fontFamily: 'monospace', direction: 'ltr', color: '#22c55e', fontSize: '13px', lineHeight: 1.6, marginBottom: 10 }}>
                <div>C:\Windows&gt; cd documents</div>
                <div>C:\Windows\documents&gt; mkdir NewProject</div>
                <div>C:\Windows\documents&gt; _</div>
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                <div>• واجهة نتعامل فيها مع الكمبيوتر بكتابة الأوامر بدلاً من الأزرار والفأرة.</div>
                <div>• <b>مثال:</b> بدل فتح مجلد بالماوس، تكتب أمراً ينفذ المطلوب في ثوانٍ.</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              الخلاصة: CUI = بنتعامل مع الجهاز عن طريق كتابة الأوامر فقط!
            </div>
          </div>
        </Box>

        {/* Left: GUI */}
        <Box x={60} y={215} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🖱️ ٣ · واجهة المستخدم الرسومية (GUI)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  العناصر المرئية
                </span>
              </div>

              {/* Desktop Simulation */}
              <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '10px', padding: '12px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10 }}>
                <div style={{ textAlign: 'center' }}><span style={{ fontSize: 32 }}>🗑️</span><div style={{ fontSize: 11.5, color: '#f8fafc' }}>سلة المحذوفات</div></div>
                <div style={{ textAlign: 'center' }}><span style={{ fontSize: 32 }}>📁</span><div style={{ fontSize: 11.5, color: '#f8fafc' }}>مجلداتي</div></div>
                <div style={{ textAlign: 'center' }}><span style={{ fontSize: 32 }}>🌐</span><div style={{ fontSize: 11.5, color: '#f8fafc' }}>المتصفح</div></div>
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                <div>• واجهة تسمح بالتعامل مع الجهاز من خلال النوافذ والأيقونات والأزرار والقوائم.</div>
                <div>• <b>مثال:</b> تضغط بالماوس على سلة المهملات أو تفتح مجلداً بلمسة إصبع.</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              الخلاصة: GUI = واجهة رسومية سهلة للمستخدم العادي بالفأرة واللمس!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="blue" fill="blue" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> CUI = كتابة أوامر نصية على شاشة سوداء | GUI = نوافذ وأيقونات ملونة بالفأرة 🖱️
        </Box>
      </Scene>
    ),
  },

  {
    id: 'ux-experience',
    title: 'تجربة المستخدم (UX - User Experience)',
    scene: true,
    notes: (
      <>
        <p><b>٤. تجربة المستخدم (UX – User Experience):</b></p>
        <p><b>التعريف:</b> هي التجربة أو الانطباع الذي يحصل عليه المستخدم أثناء استخدام منتج أو موقع أو خدمة.</p>
        <p><b>المثال:</b> طالب يدخل على موقع تعليمي:</p>
        <ul>
          <li>لو الموقع سهل وسريع ووصل للمعلومة بسهولة ➔ تجربة جيدة (Good UX).</li>
          <li>لو الموقع معقد ومش عارف يوصل للدرس ➔ تجربة سيئة (Bad UX).</li>
        </ul>
        <p><b>الخلاصة:</b> UX = المستخدم حس بإيه أثناء استخدام الموقع أو التطبيق؟</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المشاعر والانطباع وسرعة وصول المستخدم لهدفه">
          ٢ · تجربة المستخدم – UX (User Experience) 🧠❤️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ما هي تجربة المستخدم (UX)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "هي التجربة أو الانطباع الذي يحصل عليه المستخدم أثناء وبعد استخدام منتج أو خدمة أو موقع."
            </span>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side: Good UX vs Bad UX */}
        {/* Right: Good UX */}
        <Box x={660} y={215} w={560} h={365} c="green" fill="green" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  😍 تجربة مستخدم ممتازة (Good UX)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  نجاح الموقع 🚀
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                👨‍🎓 <b>طالب يدخل على موقع تعليمي:</b>
                <br />
                الموقع منظم وسريع جداً، زر بدء الدرس واضح في المنتصف، وبدون أي إعلانات مشتتة.
              </div>

              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-700/60" style={{ fontSize: 13, color: '#86efac', lineHeight: 1.5 }}>
                ✨ <b>شعور المستخدم:</b> راحة تامة، إنجاز سريع، ورغبة في تكرار الزيارة كل يوم!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              سهولة الاستخدام تصنع ولاء المستخدم للموقع!
            </div>
          </div>
        </Box>

        {/* Left: Bad UX */}
        <Box x={60} y={215} w={580} h={365} c="red" fill="red" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
                  😡 تجربة مستخدم سيئة (Bad UX)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.2)', color: 'var(--pen-red)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-red)' }}>
                  فشل الموقع ⏳
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                👨‍💼 <b>طالب يدخل على نفس الموقع:</b>
                <br />
                الموقع بطيء التحميل، الصفحات معقدة ومتداخلة، ومش عارف يوصل للدرس بعد 10 دقائق بحث!
              </div>

              <div className="p-2.5 rounded-lg bg-red-950/40 border border-red-700/60" style={{ fontSize: 13, color: '#fca5a5', lineHeight: 1.5 }}>
                ⚠️ <b>شعور المستخدم:</b> إحباط، غضب، ويغلق التبويب فوراً ولن يرجع للموقع مرة ثانية!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-red)', fontWeight: 'bold' }}>
              التعقيد والبطء يطرد المستخدمين مهما كانت جودة المعلومات!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>قاعدة المقارنة الذهبية:</b> الـ <b>UI</b> هو ما يراه المستخدم بالعين | والـ <b>UX</b> هو ما يشعر به المستخدم في التجربة!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'affordance-vs-signifier',
    title: 'الإمكانية (Affordance) والدالة (Signifier)',
    scene: true,
    notes: (
      <>
        <p><b>٥. الإمكانية (Affordance) و ٦. الدالة (Signifier):</b></p>
        <p><b>الإمكانية (Affordance):</b> الخصائص التي توضح للمستخدم ما هو الإجراء الممكن عمله (مثل مقبض الباب للسحب أو اللوح للدفع).</p>
        <p><b>الدالة (Signifier):</b> علامة أو إشارة توجه المستخدم وتوضح له الإجراء المطلوب وأين يضغط (مثل علامة العدسة للبحث، أو كلمة «اضغط هنا»).</p>
        <p><b>الفرق الحاسم:</b> Affordance: شكل الزر يوضح أنه قابل للضغط | Signifier: الكتابة أو الرمز يوضح وظيفة الزر.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="لغز الباب الشهير ومقارنة الامتحان: شكل العنصر مقابل الإشارة الدالة">
          ٣ · الإمكانية (Affordance) والدالة (Signifier) 🚪🔍
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              كيف يعرف المستخدم بطريقة فطرية وسريعة: <b>كيف يستخدم العنصر، وأين يضغط بالتحديد؟</b>
            </span>
          </div>
        </Box>

        {/* 2 Big Comparison Cards */}
        {/* Right: Affordance */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🚪 ٥ · الإمكانية (Affordance)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                  شكل العنصر
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "هي الخصائص التي توضح للمستخدم إيه الإجراء اللي ممكن يعمله مع عنصر معين."
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 12.5, lineHeight: 1.5, color: '#bae6fd' }}>
                <div>• <b>مقبض الباب (Handle):</b> تصميمه البارز يسمح لك بمسكه وسحب الباب (Pull).</div>
                <div>• <b>لوح الباب المسطح (Plate):</b> سطحه الأملس يوحي ليدك بدفعه للأمام (Push).</div>
                <div>• <b>الزر البارز:</b> شكله وارتفاعه يوضح لعينك أنه <b>قابل للضغط</b>.</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الخلاصة: Affordance = شكل العنصر أو خصائصه بتوضح إزاي نستخدمه!
            </div>
          </div>
        </Box>

        {/* Left: Signifier */}
        <Box x={60} y={215} w={580} h={365} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  🔍 ٦ · الدالة (Signifier)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  الإشارة والتوجيه
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-2.5" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "هي علامة أو إشارة بتوجّه المستخدم وتوضح له الإجراء المطلوب وأين يضغط."
              </div>

              <div className="space-y-1.5 text-xs" style={{ fontSize: 12.5, lineHeight: 1.5, color: '#f3e8ff' }}>
                <div>• <b>علامة العدسة 🔍:</b> ترشد المستخدم أن هذا المربع مخصص للبحث.</div>
                <div>• <b>كلمة «اضغط هنا» أو «ادفع»:</b> كلمة نصية توضح الإجراء المطلوب بدقة.</div>
                <div>• <b>سهم القائمة 🔻:</b> يوضح للمستخدم أن هناك قائمة فرعية ستفتح.</div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الخلاصة: Signifier = إشارة بتقول للمستخدم يعمل إيه أو يضغط فين!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="orange" fill="orange" size={17} tc="ink" at={4}>
          🌟 <b>قاعدة الامتحان الحاسمة:</b> Affordance: شكل الزر يوضح أنه <b>قابل للضغط</b> | Signifier: الكتابة أو رمز العدسة يوضح <b>وظيفة الزر</b>!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'usability-accessibility-universal',
    title: 'قابلية الاستخدام وإمكانية الوصول والتصميم الشامل',
    scene: true,
    notes: (
      <>
        <p><b>الثلاثية الإنسانية لسهولة الفهم:</b></p>
        <ol start={7}>
          <li><b>قابلية الاستخدام (Usability):</b> مدى سهولة استخدام المنتج وسهولة تعلمه وتنفيذ المهام من خلاله.</li>
          <li><b>إمكانية الوصول (Accessibility):</b> تصميم المنتجات بحيث يقدر ذوو الإعاقات المختلفة استخدامها والوصول للمعلومات (قارئ شاشة، ترجمة فيديوهات CC، تصفح بالكيبورد).</li>
          <li><b>التصميم الشامل (Universal Design):</b> تصميم المنتجات من البداية لتناسب أكبر عدد ممكن من الناس باختلاف أعمارهم وقدراتهم (سلالم ومنحدر للكراسي المتحركة).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="التصميم الإنساني لسهولة الفهم لجميع فئات المجتمع باختلاف قدراتهم">
          ٤ · قابلية الاستخدام وإمكانية الوصول والتصميم الشامل ♿🌍
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={80} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 18, color: 'var(--pen-ink)' }}>
              كيف نجعل مواقعنا وأنظمتنا <b>سهلة، متاحة، ومناسبة للجميع دون استثناء؟</b>
            </span>
          </div>
        </Box>

        {/* 3 Columns Grid across 1160px */}
        {/* Usability */}
        <Box x={860} y={210} w={360} h={370} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 40, marginBottom: 4 }}>⚡</div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-blue)', textAlign: 'center', marginBottom: 4 }}>
                ٧. قابلية الاستخدام
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-blue)', textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>
                Usability
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "هي مدى سهولة استخدام المنتج أو النظام، ومدى سهولة تعلّمه وتنفيذ المهام من خلاله."
                <br /><br />
                <b>مثال:</b> موقع حجز دروس فيه زر واضح للحجز وخطوات بسيطة تُمكّن الطالب من الحجز دون مساعدة.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الخلاصة: هل استخدام الموقع سهل ولا صعب؟
            </div>
          </div>
        </Box>

        {/* Accessibility */}
        <Box x={460} y={210} w={360} h={370} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 40, marginBottom: 4 }}>♿</div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-purple)', textAlign: 'center', marginBottom: 4 }}>
                ٨. إمكانية الوصول
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-purple)', textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>
                Accessibility
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تصميم المنتجات والمواقع بحيث يقدر الأشخاص ذوو الإعاقات المختلفة استخدامها والوصول للمعلومات."
                <br /><br />
                <b>أمثلة:</b> قارئ شاشة للمكفوفين، ترجمة مكتوبة (CC) لضعاف السمع، واستخدام الكيبورد.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الخلاصة: إتاحة الموقع للأشخاص باختلاف قدراتهم!
            </div>
          </div>
        </Box>

        {/* Universal Design */}
        <Box x={60} y={210} w={360} h={370} c="green" fill="green" at={4}>
          <div style={{ textAlign: 'right', padding: '16px 18px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ textAlign: 'center', fontSize: 40, marginBottom: 4 }}>🏛️</div>
              <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-green)', textAlign: 'center', marginBottom: 4 }}>
                ٩. التصميم الشامل
              </div>
              <div style={{ fontSize: 12, color: 'var(--pen-green)', textAlign: 'center', fontWeight: 'bold', marginBottom: 10 }}>
                Universal Design
              </div>
              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs" style={{ fontSize: 12.5, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                "تصميم المنتجات والخدمات بحيث تناسب أكبر عدد ممكن من الأشخاص، مع اختلاف أعمارهم وقدراتهم."
                <br /><br />
                <b>مثال:</b> مدخل مبنى فيه سلالم ومنحدر مائل (Ramp) ليناسب مستخدمي الكراسي المتحركة وغيرهم.
              </div>
            </div>
            <div style={{ fontSize: 11.5, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              الخلاصة: نصمم من البداية ليناسب أكبر عدد من الناس!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={5}>
          🌟 <b>القيمة الإنسانية:</b> التكنولوجيا الحقيقية هي التي تفتح أبوابها للجميع وتلغي الفوارق بين البشر!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'master-summary-table',
    title: 'جدول المراجعة السريعة الذهبي للطلاب',
    scene: true,
    notes: (
      <>
        <p><b>كبسولة الحفظ والمراجعة السريعة للامتحان:</b> جدول يلخص المصطلحات التسعة الأساسية في جملة واحدة حاسمة لكل مصطلح.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كبسولة الامتحان السحرية لتذكر كل مصطلحات الدرس للامتحان النهائي">
          مراجعة سريعة للطلاب · جدول المفاهيم الذهبي 🏆
        </Heading>

        {/* Master Table Box */}
        <Box x={60} y={115} w={1160} h={465} c="purple" fill="purple" at={1}>
          <div style={{ padding: '14px 20px', direction: 'rtl', height: '100%', boxSizing: 'border-box' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '14px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--pen-purple)', color: 'var(--pen-purple)', fontSize: '16px' }}>
                  <th style={{ padding: '8px 12px', width: '30%' }}>المصطلح</th>
                  <th style={{ padding: '8px 12px' }}>افتكر إيه؟ (كبسولة الامتحان)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { term: 'واجهة المستخدم (UI)', note: 'اللي المستخدم بيشوفه ويتعامل معاه', color: '#38bdf8' },
                  { term: 'سطر الأوامر (CUI)', note: 'كتابة الأوامر', color: '#fb923c' },
                  { term: 'الواجهة الرسومية (GUI)', note: 'النوافذ والأيقونات', color: '#4ade80' },
                  { term: 'تجربة المستخدم (UX)', note: 'تجربة المستخدم (المستخدم حس بإيه؟)', color: '#c084fc' },
                  { term: 'الإمكانية (Affordance)', note: 'شكل العنصر يوضح طريقة استخدامه (مقبض vs لوح مسطح)', color: '#38bdf8' },
                  { term: 'الدالة (Signifier)', note: 'إشارة توضح الإجراء (أيقونة العدسة 🔍 / كلمة اضغط هنا)', color: '#fb923c' },
                  { term: 'قابلية الاستخدام (Usability)', note: 'سهولة الاستخدام (سهل ولا صعب؟)', color: '#4ade80' },
                  { term: 'إمكانية الوصول (Accessibility)', note: 'إتاحة الاستخدام لذوي الإعاقات (قارئ شاشة / ترجمة CC)', color: '#c084fc' },
                  { term: 'التصميم الشامل (Universal Design)', note: 'تصميم يناسب أكبر عدد من الناس من البداية (سلالم + منحدر)', color: '#f87171' },
                ].map((row, idx) => (
                  <tr key={row.term} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', backgroundColor: idx % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent' }}>
                    <td style={{ padding: '6px 12px', fontWeight: 'bold', color: row.color }}>{row.term}</td>
                    <td style={{ padding: '6px 12px', color: '#f8fafc', fontWeight: '500' }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={2}>
          🏆 <b>تحدي المنهج المعتمد الشامل:</b> انتقل الآن للماراثون النهائي واختبر حفظك وفهمك لجميع نقاط الدرس!
        </Box>
      </Scene>
    ),
  },
];
