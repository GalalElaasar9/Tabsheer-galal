// Board scenes · Unit 3 · Lesson 2 · part 4 (API & JSON) and part 6 (Summary)
import type { FrameDef } from '../../board/types';
import { Arrow, Box, Doodle, Heading, Place, Scene, Txt } from '../../sketch/Sketch';
// import { C } from './common';

export const part4: FrameDef[] = [
  // 1️⃣ السؤال التأسيسي: الموقع بيجيب البيانات منين؟
  {
    id: 'api-where-data',
    title: 'الموقع بيجيب البيانات منين؟',
    scene: true,
    notes: (
      <>
        <p><b>١. المدخل التفاعلي مع الطلاب:</b></p>
        <p>اطرح السؤال البسيط: إحنا لما نفتح موقع زي بوابة نتائج الطلاب، الموقع بيحتاج يعرف اسم الطالب ورقم الجلوس والنتيجة... طيب البيانات دي موجودة فين؟</p>
        <p>الطلاب غالبًا هيقولوا: <b>قاعدة البيانات (Database)</b>.</p>
        <p>قولهم: <b>تمام 👌 بس هل المتصفح نفسه بيدخل على قاعدة البيانات ويطلب منها البيانات مباشرة؟</b></p>
        <p>الإجابة الحاسمة: <b>لا ❌!</b></p>
        <ul>
          <li><b>أمنياً:</b> إعطاء المتصفح اتصالاً مباشراً بقاعدة البيانات كارثة أمنية تكشف كلمات سر السيرفر وتسمح بتعديل أو مسح بيانات كل الطلاب!</li>
          <li><b>تقنياً:</b> المتصفح لا يتحدث لغات قواعد البيانات المعقدة، ولا يملك الصلاحيات لإدارتها.</li>
        </ul>
        <p><b>رحلة البيانات المنظمة:</b></p>
        <p><b>الذهاب:</b> المتصفح (Frontend) ➔ الـ API ➔ الخادم (Backend) ➔ قاعدة البيانات (Database).</p>
        <p><b>الإياب:</b> قاعدة البيانات (Database) ➔ الخادم (Backend) ➔ الـ API ➔ المتصفح (Frontend).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="السؤال الأساسي: هل يتصل المتصفح بقاعدة البيانات مباشرة؟">الموقع بيجيب البيانات منين؟</Heading>

        {/* 1. Question Banner */}
        <Box x={80} y={115} w={1120} h={60} c="blue" fill="blue" size={24} tc="ink">
          ❓ لما تفتح موقع نتائج الطلاب… البيانات (الاسم، رقم الجلوس، الدرجة) بتيجي منين؟
        </Box>

        {/* 2. Myth vs Reality: Direct Connection (Wide layout with 640px gap) */}
        <Box x={960} y={195} w={240} h={95} c="blue" at={1}>
          <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>💻 المتصفح (Frontend)</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginTop: 4 }}>جهاز وشاشة العميل</div>
          </div>
        </Box>

        {/* Big 640px red dashed arrow */}
        <Arrow from={[960, 242]} to={[320, 242]} c="red" dashed sw={4.2} at={2} />

        {/* Floating badge in the center of the arrow */}
        <Place x={450} y={214} w={380} h={56} at={2}>
          <div style={{
            textAlign: 'center',
            background: 'rgba(239, 68, 68, 0.16)',
            border: '2px solid var(--pen-red)',
            borderRadius: 14,
            padding: '6px 14px',
            color: 'var(--pen-red)',
            fontWeight: 900,
            fontSize: 21,
            lineHeight: 1.3,
          }}>
            ❌ اتصال مباشر؟ <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 700 }}>مستحيل وخطر أمنياً!</span>
          </div>
        </Place>

        <Box x={80} y={195} w={240} h={95} c="orange" at={1}>
          <div style={{ textAlign: 'center', lineHeight: 1.4 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-orange)' }}>🗄️ قاعدة البيانات</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginTop: 4 }}>مخزن البيانات السري للسيرفر</div>
          </div>
        </Box>

        {/* 3. Sub-prompt */}
        <Txt x={640} y={322} size={24} c="ink" at={3}>
          👇 الحل المعماري الحقيقي: رحلة منظمة عبر ٤ محطات 👇
        </Txt>

        {/* 4. The 4 Stations (Spacious 155px boxes with wide 165px gaps) */}
        {[
          { icon: '💻', title: 'المتصفح', sub: 'Frontend', x: 1045, c: 'blue' as const },
          { icon: '🔌', title: 'الـ API', sub: 'الوسيط الآمن', x: 725, c: 'pink' as const, fill: true },
          { icon: '⚙️', title: 'السيرفر', sub: 'Backend', x: 405, c: 'orange' as const },
          { icon: '🗄️', title: 'قاعدة البيانات', sub: 'Database', x: 80, c: 'green' as const },
        ].map((item, i) => (
          <Box key={item.title} x={item.x} y={375} w={155} h={115} c={item.c} fill={item.fill ? item.c : undefined} at={3} delay={i * 0.15}>
            <div style={{ textAlign: 'center', lineHeight: 1.35, paddingTop: 6 }}>
              <div style={{ fontSize: 30 }}>{item.icon}</div>
              <div style={{ fontSize: 21, fontWeight: 900, color: `var(--pen-${item.c})`, marginTop: 2 }}>{item.title}</div>
              <div style={{ fontSize: 14.5, color: 'var(--muted)', fontWeight: 700 }}>{item.sub}</div>
            </div>
          </Box>
        ))}

        {/* Big Request Arrows (Top line y=408, sw=4.2, loff=24) */}
        <Arrow from={[1045, 408]} to={[880, 408]} c="blue" sw={4.2} label="١. الطلب" lsize={20} loff={24} at={4} />
        <Arrow from={[725, 408]} to={[560, 408]} c="pink" sw={4.2} label="٢. توجيه" lsize={20} loff={24} at={4} delay={0.2} />
        <Arrow from={[405, 408]} to={[235, 408]} c="orange" sw={4.2} label="٣. استعلام" lsize={20} loff={24} at={4} delay={0.4} />

        {/* Big Response Arrows (Bottom line y=462, 54px below, sw=4.2, loff=24) */}
        <Arrow from={[235, 462]} to={[405, 462]} c="green" sw={4.2} label="٤. النتيجة" lsize={20} loff={24} at={4} delay={0.6} />
        <Arrow from={[560, 462]} to={[725, 462]} c="orange" sw={4.2} label="٥. تجهيز JSON" lsize={18} loff={24} at={4} delay={0.7} />
        <Arrow from={[880, 462]} to={[1045, 462]} c="pink" sw={4.2} label="٦. عرض النتيجة" lsize={18} loff={24} at={4} delay={0.8} />

        {/* 5. Bottom Takeaway Banner */}
        <Box x={80} y={550} w={1120} h={85} c="green" fill="green" size={25} tc="ink" at={5}>
          💡 المتصفح لا يتصل بقاعدة البيانات مباشرة، بل يتعامل معها من خلال الـ Backend.
        </Box>
      </Scene>
    ),
  },

  // 2️⃣ تشبيه المطعم: يعني إيه API؟ 🍔
  {
    id: 'api-restaurant',
    title: 'تشبيه المطعم: يعني إيه API؟ 🍔',
    scene: true,
    notes: (
      <>
        <p><b>٢. تشبيه المطعم (أبسط وأدق تشبيه لـ API):</b></p>
        <p>تخيل إنك في مطعم 🍔:</p>
        <ul>
          <li><b>أنت في الصالة</b> = Frontend (المتصفح)</li>
          <li><b>المطبخ والمخزن</b> = Backend + Database</li>
          <li><b>الجرسون (النادل)</b> = الـ API</li>
        </ul>
        <p>أنت مش هتدخل المطبخ بنفسك وتقول للشيف: «هاتلي البيانات دي» 😂! أنت بتطلب من الجرسون، والجرسون يوصل الطلب للمطبخ ويرجعلك بالنتيجة جاهزة.</p>
        <p><b>إذن:</b> API هي الوسيلة والقواعد اللي بتخلي أجزاء البرامج المختلفة تتواصل مع بعض وتتبادل البيانات بأمان.</p>
        <p>ولما الموقع يعمل طلب: <code>fetch("/students/123")</code> فهو ببساطة بيقول: <b>«يا API، هاتلي بيانات الطالب رقم 123»</b>.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="أنت في الصالة، والمطبخ بالداخل، والجرسون ينظم الطلب">تشبيه المطعم: يعني إيه API؟ 🍔</Heading>

        {/* 1. Customer Column (Right) */}
        <Box x={950} y={150} w={250} h={390} c="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '12px 14px', direction: 'rtl', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 46 }}>🧑‍💼</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-blue)', marginTop: 2 }}>أنت (الزبون)</div>
            <div style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: 8,
              background: 'rgba(59, 130, 246, 0.12)',
              color: 'var(--pen-blue)',
              fontWeight: 800,
              fontSize: 14.5,
              marginTop: 4,
            }}>
              💻 الـ Frontend (المتصفح)
            </div>
            <div style={{
              textAlign: 'right',
              marginTop: 14,
              fontSize: 15.5,
              lineHeight: 1.6,
              color: 'var(--pen-ink)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div>• جالس في صالة المطعم</div>
              <div>• يطلب: <code style={{ color: 'var(--pen-blue)', fontWeight: 700 }} dir="ltr">fetch(...)</code></div>
              <div>• لا يدخل المطبخ بنفسه نهائياً</div>
              <div>• ينتظر الوجبة تصل إليه جاهزة</div>
            </div>
          </div>
        </Box>

        {/* 2. Waiter Column (Center) */}
        <Box x={515} y={150} w={250} h={390} c="pink" fill="pink" at={2}>
          <div style={{ textAlign: 'center', padding: '12px 14px', direction: 'rtl', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 46 }}>🤵</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-pink)', marginTop: 2 }}>الجرسون (النادل)</div>
            <div style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: 8,
              background: 'rgba(236, 72, 153, 0.15)',
              color: 'var(--pen-pink)',
              fontWeight: 800,
              fontSize: 14.5,
              marginTop: 4,
            }}>
              🔌 الـ API (الوسيط الآمن)
            </div>
            <div style={{
              textAlign: 'right',
              marginTop: 14,
              fontSize: 15.5,
              lineHeight: 1.6,
              color: 'var(--pen-ink)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div>• يستلم تذكرة الطلب من الزبون</div>
              <div>• يوصلها للشيف في المطبخ</div>
              <div>• يعود بالطبق المطلوب (البيانات)</div>
              <div style={{ color: 'var(--pen-pink)', fontWeight: 800 }}>🛡️ يحمي المطبخ من أي فوضى!</div>
            </div>
          </div>
        </Box>

        {/* 3. Kitchen Column (Left) */}
        <Box x={80} y={150} w={250} h={390} c="orange" at={3}>
          <div style={{ textAlign: 'center', padding: '12px 14px', direction: 'rtl', fontFamily: "'Cairo', system-ui, sans-serif" }}>
            <div style={{ fontSize: 46 }}>👨‍🍳🗄️</div>
            <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--pen-orange)', marginTop: 2 }}>المطبخ والمخزن</div>
            <div style={{
              display: 'inline-block',
              padding: '3px 10px',
              borderRadius: 8,
              background: 'rgba(249, 115, 22, 0.12)',
              color: 'var(--pen-orange)',
              fontWeight: 800,
              fontSize: 14.5,
              marginTop: 4,
            }}>
              ⚙️ Backend + 🗄️ DB
            </div>
            <div style={{
              textAlign: 'right',
              marginTop: 14,
              fontSize: 15.5,
              lineHeight: 1.6,
              color: 'var(--pen-ink)',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}>
              <div>• الشيف (السيرفر) ينفذ الطهي</div>
              <div>• المخزن (DB) يحتوي كل المكونات</div>
              <div>• يجهز الوجبة ويغلفها</div>
              <div>• منطقة مغلقة يتعامل مع الجرسون فقط</div>
            </div>
          </div>
        </Box>

        {/* 4. Big connecting arrows across 185px gaps */}
        {/* Request Line (Top y=295, sw=4.5, loff=24) */}
        <Arrow from={[950, 295]} to={[765, 295]} c="blue" sw={4.5} label="١. اطلب الوجبة 🗣️" lsize={19} loff={24} at={4} />
        <Arrow from={[515, 295]} to={[330, 295]} c="pink" sw={4.5} label="٢. وصّل للشيف 🍳" lsize={19} loff={24} at={4} delay={0.2} />

        {/* Response Line (Bottom y=380, 85px below, sw=4.5, loff=24) */}
        <Arrow from={[330, 380]} to={[515, 380]} c="orange" sw={4.5} label="٣. جهّز الطبق 📦" lsize={19} loff={24} at={4} delay={0.4} />
        <Arrow from={[765, 380]} to={[950, 380]} c="green" sw={4.5} label="٤. قدّم للزبون 🍽️" lsize={19} loff={24} at={4} delay={0.6} />

        {/* 5. Bottom Definition Banner */}
        <Box x={80} y={555} w={1120} h={95} c="green" fill="green" size={23} tc="ink" at={5}>
          📖 <b>تعريف واجهة برمجة التطبيقات API (كتاب المدرسة الوزاري):</b> «مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.»
        </Box>
      </Scene>
    ),
  },

  // 3️⃣ البيانات اللي بترجع شكلها إيه؟ هنا ييجي JSON 📦
  {
    id: 'json-what-is',
    title: 'البيانات بترجع إزاي؟ هنا ييجي JSON 📦',
    scene: true,
    notes: (
      <>
        <p><b>٣. كيف تعود البيانات؟ دخول صيغة JSON:</b></p>
        <p>قول للطلاب: طيب لو الـ API رجعتلي بيانات الطالب، هترجعهالي إزاي؟</p>
        <p>هنا تدخل صيغة <b>JSON (JavaScript Object Notation)</b>!</p>
        <p><b>تشبيه JSON:</b> تخيل إن عندك ورقة مكتوب فيها بيانات طالب، وكل معلومة مكتوب جنبها اسمها:</p>
        <ul>
          <li><b>اسم (Key)</b> ➔ "Ahmed" (Value)</li>
          <li><b>رقم الجلوس (Key)</b> ➔ 123 (Value)</li>
          <li><b>الدرجة (Key)</b> ➔ 95 (Value)</li>
        </ul>
        <p>JSON بيعمل نفس الفكرة، لكن بطريقة يفهمها الكمبيوتر بسهولة وبشكل خفيف جداً ومستقل عن لغات البرمجة.</p>
        <p><b>تعريف كتاب المدرسة:</b> صيغة نصية قياسية خفيفة الوزن وسهلة القراءة ومستقلة عن لغات البرمجة تُستخدم لتخزين وتبادل البيانات المهيكلة بين العميل والخادم بالاعتماد على أزواج المفاتيح والقيم {'{ }'} والمصفوفات [ ].</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="تشبيه الورقة المنظمة: كل معلومة جنبها اسمها كأزواج مفاتيح وقيم">البيانات بترجع إزاي؟ هنا ييجي JSON 📦</Heading>

        {/* Human Paper Analogy (Right) */}
        <Box x={710} y={155} w={490} h={385} c="blue" at={1}>
          <div style={{ textAlign: 'center', lineHeight: 1.6, paddingTop: 10 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>📄 تشبيه ورقة البيانات المنظمة</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 12 }}>كيف يفهمها البشر (اسم المعلومة ➔ قيمتها)</div>

            <div style={{ background: 'var(--surface-2)', padding: '12px 18px', borderRadius: 12, textAlign: 'right', margin: '0 16px', fontSize: 19, lineHeight: 1.7 }}>
              <div>🏷️ <b>المفتاح (Key)</b> ⬅️ <b>القيمة (Value)</b></div>
              <div style={{ borderTop: '1.5px dashed var(--border)', marginTop: 8, paddingTop: 6 }}>
                👤 <b>الاسم:</b> أحمد سامي (Ahmed)
              </div>
              <div>
                🪪 <b>رقم الجلوس:</b> 123
              </div>
              <div>
                📊 <b>الدرجة:</b> 95%
              </div>
            </div>
            <div style={{ fontSize: 15, color: 'var(--safe)', fontWeight: 800, marginTop: 10 }}>
              💡 واضحة ومنظمة: كل قيمة مكتوب قبلها هي إيه!
            </div>
          </div>
        </Box>

        {/* Big 140px arrow in the middle */}
        <Arrow from={[710, 340]} to={[570, 340]} c="green" sw={4.2} label="تحويل لـ JSON ⚡" lsize={20} loff={26} at={3} />

        {/* JSON Code (Left) */}
        <Box x={80} y={155} w={490} h={385} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'center', lineHeight: 1.6, paddingTop: 10 }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-purple)' }}>📦 كود الـ JSON المقابل العائد من الـ API</div>
            <div style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 10 }}>الصيغة القياسية التي تفهمها وتتبادلها الحواسيب</div>

            <div style={{ background: '#16192b', color: '#51cf66', padding: '12px 18px', borderRadius: 12, textAlign: 'left', direction: 'ltr', fontFamily: 'Consolas, monospace', fontSize: 18, lineHeight: 1.6, margin: '0 16px' }}>
              {`{\n  "name": "Ahmed",\n  "seatNumber": 123,\n  "grade": 95\n}`}
            </div>

            <div style={{ fontSize: 15, color: 'var(--text)', textAlign: 'right', padding: '10px 20px 0', lineHeight: 1.6 }}>
              • <code>{'{ }'}</code> كائن يحفظ الحزمة كاملاً<br />
              • <code>"name"</code> هو <b>المفتاح (Key)</b> بين تنصيص<br />
              • <code>"Ahmed"</code> و <code>95</code> هي <b>القيم (Values)</b>
            </div>
          </div>
        </Box>

        {/* Bottom Definition */}
        <Box x={80} y={560} w={1120} h={95} c="green" fill="green" size={23} tc="ink" at={4}>
          📖 <b>تعريف صيغة JSON (كتاب المدرسة):</b> صيغة نصية قياسية خفيفة الوزن وسهلة القراءة ومستقلة عن لغات البرمجة تُستخدم لتخزين وتبادل البيانات المهيكلة بين العميل والخادم بالاعتماد على أزواج المفاتيح والقيم {'{ }'} والمصفوفات [ ].
        </Box>
      </Scene>
    ),
  },
];

export const part5: FrameDef[] = [];

export const part6: FrameDef[] = [
  {
    id: 'textbook-definitions', title: 'معجم تعريفات كتاب المدرسة الوزاري', scene: true,
    notes: (
      <>
        <p><b>مرجع التعريفات الرسمية لكتاب المدرسة:</b> جميع المصطلحات المقررة في المنهج السوري للبكالوريا لدرس طرق الاتصال في تطبيقات الويب:</p>
        <ol>
          <li><b>العميل (Client):</b> الجهاز أو البرنامج الذي يبدأ بطلب الخدمة ويرسل HTTP Request.</li>
          <li><b>الخادم (Server):</b> حاسوب مركزي متصل دائماً، يعالج الطلبات ويقدم الموارد ويرسل HTTP Response.</li>
          <li><b>دورة الطلب والاستجابة:</b> آلية الاتصال الأساسية؛ العميل يطلب والسيرفر يعالج ويرد.</li>
          <li><b>بروتوكول HTTP:</b> بروتوكول اتصال قياسي ينقل البيانات كنص صريح (Plaintext) غير مشفر.</li>
          <li><b>بروتوكول HTTPS:</b> النسخة الآمنة من HTTP مدعومة بتشفير TLS/SSL.</li>
          <li><b>طبقة النقل الآمن (TLS):</b> بروتوكول تشفير يوفر السرية، سلامة البيانات، والمصادقة.</li>
          <li><b>أسلوب الطلب (Method):</b> تحديد نوع العملية المطلوبة على السيرفر (مثل القراءة أو الإرسال).</li>
          <li><b>أسلوب GET:</b> جلب وقراءة واسترجاع البيانات دون إجراء أي تعديل عليها في الخادم.</li>
          <li><b>أسلوب POST:</b> إرسال بيانات جديدة إلى الخادم لمعالجتها وتخزينها (كالاستمارات).</li>
          <li><b>رموز الحالة (Status Codes):</b> رموز ثلاثية الخانات لبيان نتيجة الطلب (200 نجاح، 404 غير موجود، 500 عطل داخلي).</li>
          <li><b>واجهة برمجة التطبيقات (API):</b> مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.</li>
          <li><b>صيغة JSON:</b> صيغة نصية خفيفة وسريعة ومستقلة لتبادل البيانات المهيكلة بين العميل والسيرفر.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="مرجع الحفظ السريع لجميع المصطلحات المقررة في المنهج الوزاري">📖 معجم تعريفات كتاب المدرسة الوزاري المعتمد</Heading>

        {/* Column 1 (Right): الأساسيات والبروتوكولات */}
        <Box x={660} y={145} w={540} h={515} c="blue" at={1} />
        <Place x={685} y={165} w={490} h={475} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)', paddingBottom: 4 }}>
              🏛️ الأساسيات وبروتوكولات الأمان
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 16.5, lineHeight: 1.55 }}>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>العميل (Client):</strong> الجهاز أو المتصفح الذي يبدأ بالطلب ويرسل HTTP Request.</div>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>الخادم (Server):</strong> حاسوب مركزي متصل دائماً، يعالج الطلب ويرسل HTTP Response.</div>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>دورة الطلب والرد:</strong> سؤال وجواب؛ العميل يطلب والخادم يعالج ويرد بالاستجابة.</div>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>بروتوكول HTTP:</strong> نقل بيانات الويب كنص صريح (Plaintext) غير مشفر.</div>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>بروتوكول HTTPS:</strong> النسخة الآمنة من HTTP مدعومة بتشفير TLS.</div>
              <div>• <strong style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>طبقة TLS:</strong> تشفير قياسي يوفر السرية، سلامة البيانات، والمصادقة.</div>
            </div>
            <div style={{
              padding: '6px 12px',
              borderRadius: 10,
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1.5px solid var(--pen-green)',
              color: 'var(--pen-green)',
              fontWeight: 800,
              fontSize: 16,
              textAlign: 'center',
            }}>
              🔒 الحماية إجبارية في تسجيل الدخول وبوابات الدفع
            </div>
          </div>
        </Place>

        {/* Column 2 (Left): الأساليب ورموز الحالة والبيانات */}
        <Box x={80} y={145} w={540} h={515} c="purple" at={2} />
        <Place x={105} y={165} w={490} h={475} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            justifyContent: 'space-between',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', fontSize: 24, fontWeight: 900, color: 'var(--pen-purple)', paddingBottom: 4 }}>
              ⚙️ الأساليب ورموز الحالة والبيانات
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: 16.5, lineHeight: 1.55 }}>
              <div>• <strong style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>أسلوب GET:</strong> جلب وقراءة واسترجاع البيانات دون تعديلها على الخادم.</div>
              <div>• <strong style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>أسلوب POST:</strong> إرسال بيانات جديدة إلى الخادم لمعالجتها وتخزينها.</div>
              <div>• <strong style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>رموز الحالة:</strong> 200 (نجاح) · 404 (طلب خاطئ، السيرفر سليم) · 500 (عطل خادم).</div>
              <div>• <strong style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>واجهة الـ API:</strong> مجموعة قواعد واضحة تسمح لبرنامج بطلب بيانات أو وظائف من برنامج آخر.</div>
              <div>• <strong style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>صيغة JSON:</strong> صيغة نصية خفيفة وسريعة لتبادل البيانات كأزواج مفاتيح وقيم.</div>
            </div>
            <div style={{
              padding: '6px 12px',
              borderRadius: 10,
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1.5px solid var(--pen-purple)',
              color: 'var(--pen-purple)',
              fontWeight: 800,
              fontSize: 16,
              textAlign: 'center',
            }}>
              🎯 جميع التعريفات معتمدة ومطابقة لكتاب المدرسة الوزاري
            </div>
          </div>
        </Place>
      </Scene>
    ),
  },
  {
    id: 'concept-map-u3l2', title: 'الخريطة الشاملة لطرق الاتصال', scene: true,
    notes: (
      <>
        <p><b>ملخص شامل للدرس الثاني:</b></p>
        <ul>
          <li><b>الطرفان:</b> العميل (Client) يبدأ بالطلب، والخادم (Server) يعالج ويرد.</li>
          <li><b>الأمان:</b> HTTPS مشفر بطبقة TLS مقابل HTTP غير المشفر.</li>
          <li><b>أساليب الطلب:</b> GET لقراءة واسترجاع البيانات دون تعديلها مقابل POST لإرسال وتخزين بيانات جديدة (كالاستمارات).</li>
          <li><b>رموز الحالة:</b> 200 نجاح تام، 404 خطأ عميل (غير موجود)، 500 عطل داخلي من السيرفر.</li>
          <li><b>تبادل البيانات:</b> واجهات البرمجة API وصيغة البيانات القياسية JSON.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كل ما تحتاجه للامتحان في لوحة واحدة">خلاصة طرق الاتصال في تطبيقات الويب</Heading>

        {/* 4 Pillars summary with pure Flexbox and zero line collision */}
        {/* Pillar 1: Security (Right) */}
        <Box x={940} y={145} w={260} h={380} c="blue" at={1} />
        <Place x={950} y={160} w={240} h={350} at={1}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 36, lineHeight: 1 }}>🔒</div>
              <div style={{ fontSize: 21, fontWeight: 900, color: 'var(--pen-blue)', marginTop: 4 }}>١. الأمان والتشفير</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 14.5, lineHeight: 1.5 }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-green)' }}>
                <strong style={{ color: 'var(--pen-green)' }}>🔒 HTTPS:</strong> مشفر بطبقة TLS لحماية البيانات
              </div>
              <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-red)' }}>
                <strong style={{ color: 'var(--pen-red)' }}>🔓 HTTP:</strong> نص صريح غير مشفر وعرضة للتنصت
              </div>
            </div>
          </div>
        </Place>

        {/* Pillar 2: Request Methods */}
        <Box x={660} y={145} w={260} h={380} c="orange" at={2} />
        <Place x={670} y={160} w={240} h={350} at={2}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 36, lineHeight: 1 }}>📨</div>
              <div style={{ fontSize: 21, fontWeight: 900, color: 'var(--pen-orange)', marginTop: 4 }}>٢. أساليب الطلب</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 14.5, lineHeight: 1.5 }}>
              <div style={{ background: 'rgba(59, 130, 246, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-blue)' }}>
                <strong style={{ color: 'var(--pen-blue)' }}>🔍 أسلوب GET:</strong> جلب وقراءة واسترجاع البيانات
              </div>
              <div style={{ background: 'rgba(249, 115, 22, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-orange)' }}>
                <strong style={{ color: 'var(--pen-orange)' }}>📤 أسلوب POST:</strong> إرسال بيانات جديدة لمعالجتها وتخزينها
              </div>
            </div>
          </div>
        </Place>

        {/* Pillar 3: Status Codes */}
        <Box x={380} y={145} w={260} h={380} c="green" at={3} />
        <Place x={390} y={160} w={240} h={350} at={3}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 10 }}>
              <div style={{ fontSize: 36, lineHeight: 1 }}>🚦</div>
              <div style={{ fontSize: 21, fontWeight: 900, color: 'var(--pen-green)', marginTop: 4 }}>٣. رموز الحالة</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: 14, lineHeight: 1.45 }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.12)', padding: '6px 8px', borderRadius: 8, border: '1px solid var(--pen-green)' }}>
                <strong style={{ color: 'var(--pen-green)' }}>🟢 200 OK:</strong> نجاح تام ومعالجة سليمة للطلب
              </div>
              <div style={{ background: 'rgba(249, 115, 22, 0.12)', padding: '6px 8px', borderRadius: 8, border: '1px solid var(--pen-orange)' }}>
                <strong style={{ color: 'var(--pen-orange)' }}>🟡 404:</strong> المورد غير موجود (خطأ من العميل)
              </div>
              <div style={{ background: 'rgba(239, 68, 68, 0.12)', padding: '6px 8px', borderRadius: 8, border: '1px solid var(--pen-red)' }}>
                <strong style={{ color: 'var(--pen-red)' }}>🔴 500:</strong> عطل داخلي في الخادم البرمجي
              </div>
            </div>
          </div>
        </Place>

        {/* Pillar 4: API & JSON (Left) */}
        <Box x={100} y={145} w={260} h={380} c="purple" at={4} />
        <Place x={110} y={160} w={240} h={350} at={4}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            direction: 'rtl',
            textAlign: 'right',
            fontFamily: "'Cairo', system-ui, sans-serif",
            color: 'var(--pen-ink)',
          }}>
            <div style={{ textAlign: 'center', marginBottom: 12 }}>
              <div style={{ fontSize: 36, lineHeight: 1 }}>📦</div>
              <div style={{ fontSize: 21, fontWeight: 900, color: 'var(--pen-purple)', marginTop: 4 }}>٤. الـ API و JSON</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: 14.5, lineHeight: 1.5 }}>
              <div style={{ background: 'rgba(236, 72, 153, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-pink)' }}>
                <strong style={{ color: 'var(--pen-pink)' }}>🔌 الـ API:</strong> وسيط وقواعد لطلب البيانات بين البرامج
              </div>
              <div style={{ background: 'rgba(168, 85, 247, 0.1)', padding: '8px 10px', borderRadius: 8, border: '1px solid var(--pen-purple)' }}>
                <strong style={{ color: 'var(--pen-purple)' }}>📦 JSON:</strong> صيغة نصية خفيفة لتبادل البيانات
              </div>
            </div>
          </div>
        </Place>

        <Box x={100} y={550} w={1100} h={95} c="green" fill="green" size={28} tc="ink" at={5}>
          🎓 بكده اكتملت المفاهيم الأساسية للاتصال في الويب.. يلا نقيس فهمنا في بنك الأسئلة والتقييم!
        </Box>
      </Scene>
    ),
  },
  {
    id: 'ending-u3l2', title: 'نهاية الدرس', scene: true,
    notes: <p>هنّئ الطلاب بإنهاء الدرس الثاني. في الدرس القادم هندخل جوه تكنولوجيا الواجهة الأمامية (Frontend Basics).</p>,
    render: () => (
      <Scene>
        <Doodle x={640} y={220} icon="🎉" size={120} c="green" fill="green" />
        <Txt x={640} y={350} size={54} c="green">عاش يا أبطال البكالوريا!</Txt>
        <Txt x={640} y={420} size={32} c="blue">أتقنتم درس: طرق الاتصال في تطبيقات الويب</Txt>
        <Box x={240} y={490} w={800} h={110} c="purple" fill="purple" size={28} tc="ink">
          الدرس القادم: <b>أساسيات تكنولوجيا الواجهة الأمامية (HTML, CSS, DOM)</b> 🚀
        </Box>
      </Scene>
    ),
  },
];
