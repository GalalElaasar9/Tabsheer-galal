// Master Review Scenes · Part 2: Communication Methods, HTTP vs HTTPS, GET vs POST, Status Codes, JSON & APIs
import type { FrameDef } from '../../board/types';
import {
  Arrow, Box, Browser, Doodle, Heading, Note, Scene, Txt,
} from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'scene-client-server',
    title: 'نموذج العميل والخادم ودورة الطلب والاستجابة',
    scene: true,
    notes: (
      <>
        <p><b>نموذج العميل والخادم (Client-Server Architecture):</b></p>
        <p>هو الأساس المعماري الذي تبنى عليه كل اتصالات الويب:</p>
        <ul>
          <li><b>العميل (Client):</b> هو الطرف الذي <b>يبدأ بالطلب دائماً</b> في نموذج الويب الكلاسيكي (مثل متصفح Chrome على الكمبيوتر، أو تطبيق الهاتف). يرسل طلب HTTP Request إلى الخادم.</li>
          <li><b>الخادم (Server):</b> جهاز كمبيوتر مركزي فائق الأداء متصل بالإنترنت دائماً على مدار الساعة. يستمع للطلبات الواردة، يفحصها، يعالج منطق التطبيق، يستعلام قاعدة البيانات، ويرد باستجابة HTTP Response.</li>
        </ul>
        <p><b>نقطة امتحانية هامة:</b> في بروتوكول HTTP القياسي، لا يمكن للخادم أن يرسل بيانات للمتصفح دون أن يطلبها المتصفح أولاً!</p>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="blue" fill="blue" tc="blue" size={26}>📡 الدرس الثاني</Box>
        <Heading sub="الأساس المعماري لتبادل البيانات والتواصل عبر شبكة الويب العالمية">
          نموذج العميل والخادم (Client-Server Architecture)
        </Heading>

        {/* Client (Browser) on Right */}
        <Browser x={780} y={160} w={440} h={330} c="blue" url="school.edu.eg" at={1}>
          <div style={{ textAlign: 'center', paddingTop: 16, fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-blue)' }}>💻 العميل (Client)</div>
            <div style={{ marginTop: 12, fontSize: 17, color: 'var(--pen-ink)', lineHeight: 1.6 }}>
              المتصفح (Chrome, Firefox, Safari)<br />
              <b>هو الطرف المبادر بالطلب دائماً!</b>
            </div>
            <div style={{ marginTop: 16, padding: '8px 12px', background: 'var(--primary-soft)', borderRadius: 10, fontSize: 15, fontWeight: 800, color: 'var(--pen-blue)' }}>
              يرسل الترويسات (Headers) ونوع المتصفح
            </div>
          </div>
        </Browser>
        <Txt x={1000} y={520} size={26} c="blue" at={1}>العميل: المبادر بالطلب</Txt>

        {/* Server Doodle on Left */}
        <Doodle x={220} y={260} icon="🗄️" size={130} c="orange" label="الخادم (Server)" lc="orange" at={2} />
        <Txt x={220} y={425} size={24} c="orange" at={2}>خادم الويب المركزي</Txt>
        <Txt x={220} y={465} size={18} c="ink" at={2}>حاسوب مركزي متصل 24/7</Txt>
        <Txt x={220} y={498} size={16} c="ink" at={2}>يستقبل، يعالج، ويرد بالاستجابة</Txt>

        {/* Step 1: HTTP Request (Right to Left) */}
        <Arrow from={[780, 240]} to={[310, 240]} bend={-18} c="purple" at={3} />
        <Txt x={540} y={195} size={24} c="purple" at={3}>
          ① إرسال الطلب: HTTP Request ⟵
        </Txt>
        <Txt x={540} y={230} size={17} c="ink" at={3}>
          (أسلوب GET أو POST + ترويسات Headers)
        </Txt>

        {/* Step 2: HTTP Response (Left to Right) */}
        <Arrow from={[310, 345]} to={[780, 345]} bend={-18} c="green" at={4} />
        <Txt x={540} y={365} size={24} c="green" at={4}>
          ② إرسال الاستجابة: HTTP Response ⟶
        </Txt>
        <Txt x={540} y={400} size={17} c="ink" at={4}>
          (كود الحالة 200 OK + بيانات HTML أو JSON)
        </Txt>

        {/* Sticky Note at Bottom */}
        <Note x={260} y={560} w={760} h={95} rot={-1} color="yellow" size={24} at={5}>
          💡 قاعدة امتحانية حاسمة: الخادم لا يرسل أي بيانات من تلقاء نفسه دون طلب مسبق من العميل!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-http-vs-https',
    title: 'الأمان: بروتوكول HTTP مقابل بروتوكول HTTPS المشفر',
    scene: true,
    notes: (
      <>
        <p><b>الأمان في بروتوكولات الاتصال:</b></p>
        <p><b>بروتوكول HTTP (نقل النص التشعبي غير الآمن):</b></p>
        <ul>
          <li>يرسل البيانات كنص صريح مكشوف (Plain Text).</li>
          <li>إذا اتصلت من شبكة عامة (كواي فاي المقهى)، يمكن لأي مخترق عبر برامج التنصت (Packet Sniffers) قراءة كلمات المرور وبطاقات الائتمان مباشرة!</li>
          <li>يسمى هذا الاختراق: <b>هجوم الرجل في المنتصف (Man-in-the-Middle - MitM)</b>.</li>
          <li>يعمل على المنفذ الافتراضي <b>80</b>.</li>
        </ul>
        <p><b>بروتوكول HTTPS (نقل النص التشعبي الآمن 🔒):</b></p>
        <ul>
          <li>يضيف طبقة تشفير أمنية تسمى <b>TLS / SSL</b> (Transport Layer Security).</li>
          <li>يشفر البيانات قبل خروجها من جهازك بمفاتيح رياضية معقدة؛ فتتحول إلى نصوص عشوائية غير مفهومة لأي طرف ثالث يتنصت على الخط.</li>
          <li>يتطلب تثبيت شهادة أمان رقمية موثقة (SSL Certificate) على الخادم.</li>
          <li>يعمل على المنفذ الافتراضي <b>443</b> ويظهر علامة القفل بجانب الرابط.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="red" fill="red" tc="red" size={26}>🔒 مقارنة الأمان</Box>
        <Heading sub="لماذا تحذرك المتصفحات الحديثة عند الدخول على موقع لا يحمل علامة القفل؟">
          بروتوكول HTTP العادي مقابل HTTPS المشفر 🔒
        </Heading>

        {/* HTTP Unencrypted (Right) */}
        <Box x={670} y={150} w={530} h={375} c="red" at={1}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-red)' }}>🔓 بروتوكول HTTP العادي</span>
              <span style={{ fontSize: 16, background: 'var(--danger-soft)', color: 'var(--pen-red)', padding: '4px 10px', borderRadius: 8, fontWeight: 900, direction: 'ltr' }}>Port 80</span>
            </div>
            <div style={{ marginTop: 10, fontSize: 17, color: 'var(--pen-ink)' }}>
              البيانات تُرسل كنص صريح مكشوف <b>(Plain Text)</b> دون أي حماية.
            </div>
            <div style={{ marginTop: 12, background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '10px 14px', direction: 'ltr', textAlign: 'center', fontFamily: 'monospace', fontSize: 17, color: 'var(--pen-red)', fontWeight: 800 }}>
              password = "Secret2027!" ⚠️
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--danger-soft)', padding: '10px 14px', borderRadius: 10 }}>
              <span style={{ fontSize: 28 }}>🕵️</span>
              <div style={{ fontSize: 15, color: 'var(--pen-red)', fontWeight: 800, textAlign: 'right' }}>
                <b>هجوم الوسيط (Man-in-the-Middle):</b><br />
                المخترق على نفس شبكة الـ Wi-Fi يقرأ كلمات المرور والبطاقات فوراً!
              </div>
            </div>
          </div>
        </Box>
        <Txt x={935} y={550} size={22} c="red" at={1}>❌ غير مشفر · عرضة لسرقة البيانات</Txt>

        {/* HTTPS Encrypted (Left) */}
        <Box x={80} y={150} w={530} h={375} c="green" at={2}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-green)' }}>🔒 بروتوكول HTTPS المشفر</span>
              <span style={{ fontSize: 16, background: 'var(--safe-soft)', color: 'var(--pen-green)', padding: '4px 10px', borderRadius: 8, fontWeight: 900, direction: 'ltr' }}>Port 443 + SSL</span>
            </div>
            <div style={{ marginTop: 10, fontSize: 17, color: 'var(--pen-ink)' }}>
              البيانات مشفرة بطبقة أمان النقل <b>TLS / SSL</b> المعتمدة بشهادة رقمية.
            </div>
            <div style={{ marginTop: 12, background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '10px 14px', direction: 'ltr', textAlign: 'center', fontFamily: 'monospace', fontSize: 17, color: 'var(--pen-green)', fontWeight: 800 }}>
              #8f*9A@kL!0x7d^2vQ9 🛡️
            </div>
            <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', gap: 12, background: 'var(--safe-soft)', padding: '10px 14px', borderRadius: 10 }}>
              <span style={{ fontSize: 28 }}>🛡️</span>
              <div style={{ fontSize: 15, color: 'var(--pen-green)', fontWeight: 800, textAlign: 'right' }}>
                <b>حماية كاملة ضد التنصت:</b><br />
                طلاسم خوارزمية يستحيل فك شفرتها بدون المفتاح السري الموثق!
              </div>
            </div>
          </div>
        </Box>
        <Txt x={345} y={550} size={22} c="green" at={2}>✔️ مشفر تماماً · المعيار الآمن الإلزامي</Txt>

        {/* Sticky Note */}
        <Note x={240} y={585} w={800} h={85} rot={-1} color="yellow" size={24} at={3}>
          🎯 سؤال امتحان شهير: HTTP يعمل على المنفذ 80 غير مشفر، و HTTPS يعمل على المنفذ 443 المشفر بطبقة TLS/SSL!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-get-vs-post',
    title: 'المقارنة الذهبية: أسلوب GET مقابل أسلوب POST',
    scene: true,
    notes: (
      <>
        <p><b>أساليب طلب الـ HTTP الأكثر تكراراً في الامتحانات:</b></p>
        <p><b>طريقة GET (جلب واسترجاع البيانات):</b></p>
        <ul>
          <li>تُستخدم لطلب وقراءة محتوى موجود على الخادم (صفحة منتج، قائمة طلاب، نتيجة بحث).</li>
          <li>البيانات تُرسل ظاهرة صراحة في شريط العنوان (URL Query Parameters): مثل <span className="ltr">?q=iphone&sort=price</span>.</li>
          <li><b>خاصية عدم التغيير (Idempotent):</b> تكرار إرسال الطلب 100 مرة لا يغير أي بيانات على الخادم.</li>
          <li>يمكن حفظها في المفضلة (Bookmarking) وتخزينها مؤقتاً بالمتصفح (Caching).</li>
        </ul>
        <p><b>طريقة POST (إرسال وتخزين بيانات جديدة):</b></p>
        <ul>
          <li>تُستخدم لإرسال بيانات جديدة أو حساسة (تسجيل حساب، كتابة تعليق، دفع أموال).</li>
          <li>البيانات تُرسل مخفية ومغلفة داخل <b>جسم الطلب (Request Body)</b> ولا تظهر في شريط العنوان أبداً.</li>
          <li>ليست Idempotent؛ إعادة إرسالها قد يؤدي لتكرار العملية (مثل سحب المبلغ مرتين أو إنشاء حسابين!).</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="purple" fill="purple" tc="purple" size={26}>⚖️ أساليب الطلب</Box>
        <Heading sub="المقارنة الأهم في امتحانات الثانوية: متى نستخدم GET ومتى نستخدم POST؟">
          أساليب الطلب: طريقة GET مقابل طريقة POST ⚖️
        </Heading>

        {/* Right Browser: GET (Method 1) */}
        <Browser x={670} y={150} w={530} h={365} c="blue" url="store.eg/search?q=laptop&sort=asc" at={1}>
          <div style={{ padding: '16px 20px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ color: 'var(--pen-blue)', fontSize: 24, fontWeight: 900 }}>طريقة الطلب GET 🔍</div>
            <div style={{ marginTop: 10, fontSize: 16.5, color: 'var(--pen-ink)', lineHeight: 1.7, textAlign: 'right' }}>
              • <b>الوظيفة:</b> طلب وقراءة وجلب الموارد من الخادم.<br />
              • <b>مكان البيانات:</b> ظاهرة صراحة في <b>شريط العنوان (URL)</b>.<br />
              • <b>خاصية Idempotent:</b> نعم ✔️ (تكرار الطلب لا يغير شيئاً في الـ DB).<br />
              • تقبل التخزين المؤقت (Cache) والحفظ في المفضلة (Bookmarks).
            </div>
            <div style={{ marginTop: 12, padding: '6px 10px', background: 'var(--danger-soft)', borderRadius: 8, color: 'var(--pen-red)', fontSize: 14.5, fontWeight: 800 }}>
              ❌ غير آمنة لكلمات المرور أو البيانات الحساسة!
            </div>
          </div>
        </Browser>
        <Txt x={935} y={540} size={24} c="blue" at={1}>Idempotent: نعم ✔️ · للقراءة فقط</Txt>

        {/* Left Browser: POST (Method 2) */}
        <Browser x={80} y={150} w={530} h={365} c="purple" url="school.eg/api/register" at={2}>
          <div style={{ padding: '16px 20px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ color: 'var(--pen-purple)', fontSize: 24, fontWeight: 900 }}>طريقة الطلب POST ✉️</div>
            <div style={{ marginTop: 10, fontSize: 16.5, color: 'var(--pen-ink)', lineHeight: 1.7, textAlign: 'right' }}>
              • <b>الوظيفة:</b> إرسال وتخزين بيانات جديدة وتعديل قاعدة البيانات.<br />
              • <b>مكان البيانات:</b> مخفية تماماً داخل <b>جسم الطلب (Request Body)</b>.<br />
              • <b>خاصية Idempotent:</b> لا ❌ (تكرار الطلب قد يكرر العملية مجدداً!).<br />
              • لا تُخزن في كاش المتصفح ولا يمكن حفظها بالمفضلة.
            </div>
            <div style={{ marginTop: 12, padding: '6px 10px', background: 'var(--safe-soft)', borderRadius: 8, color: 'var(--pen-green)', fontSize: 14.5, fontWeight: 800 }}>
              ✔️ المعيار الإلزامي لتسجيل الدخول والمدفوعات والحسابات.
            </div>
          </div>
        </Browser>
        <Txt x={345} y={540} size={24} c="purple" at={2}>Idempotent: لا ❌ · للتعديل والتخزين</Txt>

        {/* Bottom Sticky Note */}
        <Note x={260} y={580} w={760} h={88} rot={-1} color="yellow" size={24} at={3}>
          💡 قاعدة امتحانية ذهبية: GET للقراءة وجلب البيانات، و POST لإرسال وتخزين البيانات الجديدة!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-status-codes',
    title: 'لوحة رموز استجابة الخادم (HTTP Status Codes)',
    scene: true,
    notes: (
      <>
        <p><b>أكواد حالة استجابة الخادم (HTTP Status Codes):</b></p>
        <p>تتكون من ٣ أرقام تخبر المتصفح بنتيجة معالجة الطلب:</p>
        <ul>
          <li><b>فئة النجاح (2xx):</b>
            <ul>
              <li><b>200 OK:</b> تم استلام الطلب ومعالجته بنجاح تام وإرجاع البيانات.</li>
              <li><b>201 Created:</b> تم إنشاء وتخزين مورد جديد بنجاح على السيرفر (مثل تسجيل حساب جديد).</li>
            </ul>
          </li>
          <li><b>فئة أخطاء العميل (4xx):</b>
            <ul>
              <li><b>400 Bad Request:</b> الطلب غير صالح أو يحتوي صياغة خاطئة.</li>
              <li><b>401 Unauthorized:</b> غير مصرح؛ يتطلب تسجيل الدخول وتقديم هوية الاعتماد.</li>
              <li><b>403 Forbidden:</b> محظور؛ المستخدم معروف لكنه لا يملك صلاحية فتح الصفحة.</li>
              <li><b>404 Not Found:</b> المورد أو الرابط غير موجود بالخادم.</li>
            </ul>
          </li>
          <li><b>فئة أخطاء الخادم (5xx):</b>
            <ul>
              <li><b>500 Internal Server Error:</b> حدث عطل أو انهيار برمجي داخل السيرفر نفسه أثناء المعالجة.</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="green" fill="green" tc="green" size={26}>🚦 رموز الاستجابة</Box>
        <Heading sub="رموز الحالة السبعة الأساسية المقررة في كتاب المدرسة ودليل الفائز">
          أكواد استجابة الخادم (HTTP Status Codes) 🚦
        </Heading>

        {/* 2xx Success (Right) */}
        <Box x={850} y={150} w={360} h={385} c="green" at={1}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>🟢</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-green)' }}>فئة النجاح (2xx)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16.5, lineHeight: 1.75 }}>
              • <b>200 OK:</b> تم تنفيذ الطلب بنجاح تام وإرجاع البيانات المطلوبة.<br />
              • <b>201 Created:</b> تم إنشاء وتخزين مورد جديد بنجاح في قاعدة البيانات.
            </div>
            <div style={{ marginTop: 16, padding: '8px', background: 'var(--safe-soft)', borderRadius: 8, color: 'var(--pen-green)', fontWeight: 900, fontSize: 15 }}>
              الخادم يقول: تم بنجاح تام! ✔️
            </div>
          </div>
        </Box>
        <Txt x={1030} y={555} size={22} c="green" at={1}>نجاح الطلب (Success)</Txt>

        {/* 4xx Client Errors (Center) */}
        <Box x={460} y={150} w={360} h={385} c="orange" at={2}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>🟡</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-orange)' }}>أخطاء العميل (4xx)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16, lineHeight: 1.7 }}>
              • <b>400 Bad Request:</b> صياغة الطلب خاطئة.<br />
              • <b>401 Unauthorized:</b> يحتاج تسجيل الدخول أولاً.<br />
              • <b>403 Forbidden:</b> الصلاحية ممنوعة ومحظورة.<br />
              • <b>404 Not Found:</b> الرابط غير موجود بالسيرفر.
            </div>
            <div style={{ marginTop: 12, padding: '8px', background: 'var(--warn-soft)', borderRadius: 8, color: 'var(--pen-orange)', fontWeight: 900, fontSize: 15 }}>
              الخطأ من طرف العميل أو المتصفح! 👤
            </div>
          </div>
        </Box>
        <Txt x={640} y={555} size={22} c="orange" at={2}>أخطاء العميل (Client Error)</Txt>

        {/* 5xx Server Errors (Left) */}
        <Box x={70} y={150} w={360} h={385} c="red" at={3}>
          <div style={{ padding: '16px 18px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ fontSize: 32 }}>🔴</div>
            <div style={{ fontSize: 24, fontWeight: 900, color: 'var(--pen-red)' }}>أخطاء الخادم (5xx)</div>
            <div style={{ marginTop: 12, textAlign: 'right', fontSize: 16.5, lineHeight: 1.8 }}>
              • <b>500 Internal Server Error:</b><br />
              عطل أو انهيار برمجي داخلي في خادم الويب أثناء معالجة الطلب (كفشل الاتصال بـ DB).
            </div>
            <div style={{ marginTop: 24, padding: '8px', background: 'var(--danger-soft)', borderRadius: 8, color: 'var(--pen-red)', fontWeight: 900, fontSize: 15 }}>
              الطلب سليم ولكن السيرفر تعطل! ⚠️
            </div>
          </div>
        </Box>
        <Txt x={250} y={555} size={22} c="red" at={3}>أخطاء الخادم (Server Error)</Txt>

        {/* Sticky Note */}
        <Note x={260} y={590} w={760} h={85} rot={-1} color="yellow" size={24} at={4}>
          💡 تلميح امتحان: الفرق بين 401 و 403: في 401 نحتاج معرفة هويتك، وفي 403 نعرف هويتك لكن الصلاحية ممنوعة!
        </Note>
      </Scene>
    ),
  },

  {
    id: 'scene-json-api',
    title: 'نسق تبادل البيانات JSON وواجهات برمجة التطبيقات (APIs)',
    scene: true,
    notes: (
      <>
        <p><b>نسق تبادل البيانات JSON (JavaScript Object Notation):</b></p>
        <p>هو اللغة العالمية القياسية لتبادل البيانات بين المتصفح والخادم:</p>
        <ul>
          <li><b>لماذا نستخدم JSON؟</b> خفيف الحجم جداً، مفهوم ومقروء بسهولة للإنسان، وتدعمه كل لغات البرمجة (Python, JS, Java, PHP, C#).</li>
          <li><b>القواعد الأساسية لـ JSON:</b>
            <ul>
              <li>الأقواس المتعرجة <span className="ltr">&#123; &#125;</span> تعبر عن <b>كائن (Object)</b>.</li>
              <li>الأقواس المربعة <span className="ltr">[ ]</span> تعبر عن <b>مصفوفة أو قائمة (Array)</b>.</li>
              <li>البيانات تتكون من أزواج: <b>مفتاح وقيمة</b> (<span className="ltr">"key": "value"</span>)، وتوضع المفاتيح دائماً داخل علامات تنصيص مزدوجة.</li>
            </ul>
          </li>
          <li><b>واجهة برمجة التطبيقات (API):</b> هي العقد البرمجي ونقطة النهاية (Endpoint) التي يطلب منها المتصفح بيانات الـ JSON.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Box x={46} y={30} w={196} h={56} c="blue" fill="blue" tc="blue" size={26}>📦 تبادل البيانات</Box>
        <Heading sub="اللغة المشتركة القياسية لتبادل البيانات بين الواجهة الأمامية والواجهة الخلفية">
          نسق تبادل البيانات JSON وواجهات برمجة التطبيقات (APIs) 📦
        </Heading>

        {/* Right Browser: Frontend receiving JSON */}
        <Browser x={740} y={160} w={460} h={350} c="blue" url="school.eg/api/students/2403" at={1}>
          <div style={{ padding: '16px 20px', textAlign: 'center', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ color: 'var(--pen-blue)', fontSize: 22, fontWeight: 900 }}>الواجهة الأمامية تستقبل كائن JSON</div>
            <div style={{ marginTop: 14, padding: '10px 14px', background: 'var(--safe-soft)', border: '2px dashed var(--pen-green)', borderRadius: 10, fontSize: 20, fontWeight: 900, color: 'var(--pen-green)' }}>
              الطالب: أحمد علي · المجموع: 98% 🎓
            </div>
            <div style={{ marginTop: 14, fontSize: 16, color: 'var(--pen-ink)', lineHeight: 1.6 }}>
              جافاسكريبت تقرأ حقول الـ JSON وتحدث شجرة الـ DOM وتطبع النتيجة فوراً دون إعادة تحميل الصفحة!
            </div>
          </div>
        </Browser>
        <Txt x={970} y={535} size={24} c="blue" at={1}>المتصفح (JavaScript DOM)</Txt>

        {/* Left Box: JSON Structure Code */}
        <Box x={80} y={160} w={460} h={350} c="purple" at={2}>
          <div style={{ padding: '16px 20px', fontFamily: "'Cairo', sans-serif", direction: 'rtl' }}>
            <div style={{ color: 'var(--pen-purple)', fontSize: 22, fontWeight: 900, textAlign: 'center' }}>
              كائن JSON في كتاب الوزارة
            </div>
            <div style={{ direction: 'ltr', textAlign: 'left', background: 'var(--surface)', border: '1.5px solid var(--border)', borderRadius: 10, padding: '10px 14px', marginTop: 10, fontFamily: 'monospace', fontSize: 15.5, lineHeight: 1.45, color: 'var(--pen-ink)' }}>
              &#123;<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>"id"</span>: <span style={{ color: 'var(--pen-orange)', fontWeight: 800 }}>2403</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>"name"</span>: <span style={{ color: 'var(--pen-green)', fontWeight: 800 }}>"أحمد علي"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>"active"</span>: <span style={{ color: 'var(--pen-purple)', fontWeight: 800 }}>true</span>,<br />
              &nbsp;&nbsp;<span style={{ color: 'var(--pen-blue)', fontWeight: 800 }}>"courses"</span>: [<span style={{ color: 'var(--pen-green)', fontWeight: 800 }}>"ويب"</span>, <span style={{ color: 'var(--pen-green)', fontWeight: 800 }}>"ذكاء"</span>]<br />
              &#125;
            </div>
            <div style={{ marginTop: 8, fontSize: 14.5, color: 'var(--pen-purple)', fontWeight: 800, textAlign: 'center' }}>
              &#123; &#125; كائن (Object) • [ ] مصفوفة (Array)
            </div>
          </div>
        </Box>
        <Txt x={310} y={535} size={24} c="purple" at={2}>خادم الـ API (JSON Response)</Txt>

        {/* Center Connecting Arrow (Left to Right Response) */}
        <Arrow from={[540, 315]} to={[740, 315]} c="green" at={3} />
        <Txt x={640} y={270} size={22} c="green" at={3}>استجابة JSON خفيفة ⟶</Txt>
        <Txt x={640} y={355} size={16} c="ink" at={3}>مستقلة عن أي لغة برمجة</Txt>

        {/* Sticky Note */}
        <Note x={260} y={575} w={760} h={85} rot={-1} color="yellow" size={24} at={4}>
          💡 قاعدة الامتحان: نسق JSON نصي خفيف وسهل القراءة للإنسان والآلة، وهو اللغة القياسية المشتركة لجميع الـ APIs!
        </Note>
      </Scene>
    ),
  },
];
