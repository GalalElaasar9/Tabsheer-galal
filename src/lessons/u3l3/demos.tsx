// Clean, lightweight interactive demos for Unit 3 Lesson 3
// Aligned strictly with the Baccalaureate 2027 textbook and Al-Fayez curriculum
import { useState } from 'react';
import {
  Smartphone,
  Monitor,
  Eye,
  Bot,
  Layers,
  Sparkles,
  BookOpen,
  CheckCircle2,
  FileCode2,
  Palette,
  Zap,
  Globe,
  Radio,
  Server,
  Database,
  ArrowRight,
  Volume2,
  RotateCcw,
  Check,
  Code2,
  Building2,
  Hammer,
  Clock,
  FolderTree,
  Repeat,
  ShieldCheck,
} from 'lucide-react';

/* =========================================================================
   1. مستكشف مراجعة الدرسين الأول والثاني في نقاط محددة
   ========================================================================= */
export function ReviewPointsDemo() {
  const [activeTab, setActiveTab] = useState<'l1' | 'l2'>('l1');

  return (
    <div className="rounded-2xl border p-5 shadow-xl my-4 text-right" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      {/* Tab Switcher */}
      <div className="flex items-center justify-between border-b pb-4 mb-5" style={{ borderColor: '#1e293b' }}>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('l1')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
              activeTab === 'l1'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Globe className="w-4 h-4" />
            نقاط الدرس الأول: البنية العامة لتطبيقات الويب
          </button>
          <button
            onClick={() => setActiveTab('l2')}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
              activeTab === 'l2'
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Radio className="w-4 h-4" />
            نقاط الدرس الثاني: طرق الاتصال في تطبيقات الويب
          </button>
        </div>
        <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
          مراجعة مركزة شاملة في نقاط
        </span>
      </div>

      {/* Lesson 1 Content */}
      {activeTab === 'l1' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl border bg-blue-950/20 border-blue-900/40">
            <h4 className="text-blue-400 font-extrabold text-base mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              ١. ما هو تطبيق الويب؟ (Web Application)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              برنامج يعمل عبر الإنترنت ويُستخدم غالباً عبر متصفح الويب (مثل متصفح Chrome). يتيح للمستخدم التفاعل الحقيقي وأداء مهام (كالتبضع، البحث، مشاهدة الفيديو، أو التواصل) وليس مجرد قراءة صفحة ثابتة جامدة.
            </p>
          </div>

          <div className="p-4 rounded-xl border bg-slate-900/70 border-slate-800">
            <h4 className="text-amber-400 font-extrabold text-base mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              ٢. بنية الطبقات الثلاث (Three-tier Architecture)
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="p-3 rounded-lg border bg-slate-950/60 border-slate-800">
                <span className="text-sky-400 font-bold text-xs flex items-center gap-1.5 mb-1.5">
                  <Monitor className="w-3.5 h-3.5" /> الواجهة الأمامية (Frontend)
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  مكون الشاشة الذي يراه المستخدم ويتفاعل معه مباشرة على المتصفح: يعرض المحتوى، يستقبل كلمات البحث، ويعرض الأزرار وقوائم المنتجات.
                </p>
              </div>

              <div className="p-3 rounded-lg border bg-slate-950/60 border-slate-800">
                <span className="text-emerald-400 font-bold text-xs flex items-center gap-1.5 mb-1.5">
                  <Server className="w-3.5 h-3.5" /> الواجهة الخلفية (Backend)
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  الجزء المسؤول عن المعالجة من جانب الخادم (لا يراه المستخدم): يطبق قواعد التطبيق، يتحقق من المخزون وكلمات المرور، ويعالج الطلبات.
                </p>
              </div>

              <div className="p-3 rounded-lg border bg-slate-950/60 border-slate-800">
                <span className="text-purple-400 font-bold text-xs flex items-center gap-1.5 mb-1.5">
                  <Database className="w-3.5 h-3.5" /> قاعدة البيانات (Database)
                </span>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  نظام ينظم البيانات ويخزنها ويديرها بشكل دائم: يحتوي على جداول المنتجات، حسابات العملاء، سجل الطلبات، ومنشورات المستخدمين.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-slate-900/70 border-slate-800">
            <h4 className="text-emerald-400 font-extrabold text-base mb-2 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-emerald-400" />
              ٣. تدفق الطلب عبر طبقات الويب (Request Flow)
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              عندما يبحث المستخدم عن منتج:
              <br />
              <b>١)</b> تستقبل الواجهة الأمامية كلمة البحث وترسل طلباً للواجهة الخلفية.
              <br />
              <b>٢)</b> تطبق الواجهة الخلفية قواعد البحث وتطلب المنتجات المطابقة من قاعدة البيانات.
              <br />
              <b>٣)</b> تعيد قاعدة البيانات النتائج للواجهة الخلفية، التي ترتبها وترسلها للواجهة الأمامية لعرضها للمستخدم على الشاشة.
            </p>
          </div>
        </div>
      )}

      {/* Lesson 2 Content */}
      {activeTab === 'l2' && (
        <div className="space-y-4">
          <div className="p-4 rounded-xl border bg-purple-950/20 border-purple-900/40">
            <h4 className="text-purple-400 font-extrabold text-base mb-2 flex items-center gap-2">
              <Server className="w-4 h-4 text-purple-400" />
              ١. نموذج العميل والخادم وبروتوكول HTTP / HTTPS
            </h4>
            <ul className="text-xs text-slate-300 space-y-1.5 leading-relaxed">
              <li>• <b>العميل (Client):</b> هو المتصفح أو الجهاز الذي يبدأ دائماً بإرسال الطلب (Request).</li>
              <li>• <b>الخادم (Server):</b> يستقبل الطلب، يعالجه، ويعيد الاستجابة (Response).</li>
              <li>• <b>بروتوكول HTTP:</b> بروتوكول نقل الرسائل النصية بين العميل والخادم عبر الويب.</li>
              <li>• <b>بروتوكول HTTPS الآمن:</b> بروتوكول HTTP محمي بتشفير <b>TLS</b> لضمان سرية الاتصال ومصادقة الخادم وحماية البيانات أثناء انتقالها.</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl border bg-slate-900/70 border-slate-800">
              <h4 className="text-sky-400 font-bold text-xs mb-2">٢. طرق الطلب الأساسية (HTTP Methods)</h4>
              <ul className="text-[11px] text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <b>طريقة GET:</b> تُستخدم لطلب واسترجاع بيانات من الخادم دون تعديلها (مثل: عرض صفحة ويب، أو استرجاع نتائج البحث).</li>
                <li>• <b>طريقة POST:</b> تُستخدم لإرسال بيانات جديدة إلى الخادم ليعالجها ويخزنها (مثل: إرسال استمارة تسجيل، أو نشر منشور).</li>
              </ul>
            </div>

            <div className="p-3.5 rounded-xl border bg-slate-900/70 border-slate-800">
              <h4 className="text-amber-400 font-bold text-xs mb-2">٣. رموز حالة الخادم القياسية (Status Codes)</h4>
              <ul className="text-[11px] text-slate-300 space-y-1.5 leading-relaxed">
                <li>• <b className="text-emerald-400">200 OK:</b> تمت معالجة الطلب بنجاح تام من جانب الخادم.</li>
                <li>• <b className="text-amber-400">404 Not Found:</b> المورد أو الرابط المطلوب غير موجود على الخادم.</li>
                <li>• <b className="text-red-400">500 Server Error:</b> حدث خطأ أو مشكلة داخلية في جانب الخادم.</li>
              </ul>
            </div>
          </div>

          <div className="p-4 rounded-xl border bg-slate-900/70 border-slate-800">
            <h4 className="text-indigo-400 font-extrabold text-base mb-1.5 flex items-center gap-2">
              <FileCode2 className="w-4 h-4 text-indigo-400" />
              ٤. واجهة برمجة التطبيقات (API) وصيغة البيانات JSON
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed mb-2">
              • <b>API:</b> مجموعة قواعد تسمح لبرنامج أو واجهة بطلب بيانات أو وظائف من برنامج أو خدمة أخرى (مثل خدمة الطقس اليومية).
              <br />
              • <b>صيغة JSON:</b> صيغة نصية شائعة وخفيفة لتمثيل وتبادل البيانات المهيكلة بين العميل والخادم بنظام المفتاح والقيمة (<code className="font-mono text-amber-300">"city": "Cairo"</code>).
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   ويدجت مخطط هيكل HTML البنائي (مطابق للصورة ١)
   ========================================================================= */
export function HtmlStructureDiagram() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="p-4 rounded-2xl bg-white border border-slate-300 shadow-xl max-w-[340px] mx-auto text-center font-mono select-none" dir="ltr">
      {/* <header> red box */}
      <div
        onMouseEnter={() => setHovered('header')}
        onMouseLeave={() => setHovered(null)}
        className="p-3 mb-2 rounded bg-[#ff3b30] text-white font-extrabold text-sm tracking-wide shadow-sm hover:brightness-110 transition cursor-pointer"
      >
        &lt;header&gt;
      </div>

      {/* Middle row: <nav> (left) and <main> (right) */}
      <div className="flex gap-2 mb-2 min-h-[175px]">
        {/* <nav> green */}
        <div
          onMouseEnter={() => setHovered('nav')}
          onMouseLeave={() => setHovered(null)}
          className="w-2/5 p-2 rounded bg-[#7bc043] text-slate-900 font-extrabold text-xs flex flex-col justify-between hover:brightness-110 transition cursor-pointer shadow-sm"
        >
          <span className="text-white font-bold">&lt;nav&gt;</span>
          <div className="space-y-1.5 my-auto">
            <div className="h-4 rounded border border-green-800/40 bg-white/30" />
            <div className="h-4 rounded border border-green-800/40 bg-white/30" />
            <div className="h-4 rounded border border-green-800/40 bg-white/30" />
            <div className="h-4 rounded border border-green-800/40 bg-white/30" />
          </div>
        </div>

        {/* <main> orange with two <section> yellow */}
        <div
          onMouseEnter={() => setHovered('main')}
          onMouseLeave={() => setHovered(null)}
          className="w-3/5 p-2 rounded bg-[#f37735] text-white font-extrabold text-xs flex flex-col justify-between hover:brightness-110 transition cursor-pointer shadow-sm"
        >
          <span className="font-bold">&lt;main&gt;</span>
          <div className="space-y-1.5 my-auto">
            <div className="p-2.5 rounded bg-[#ffc425] text-slate-900 font-bold text-[11px] shadow-sm">
              &lt;section&gt;
            </div>
            <div className="p-2.5 rounded bg-[#ffc425] text-slate-900 font-bold text-[11px] shadow-sm">
              &lt;section&gt;
            </div>
          </div>
        </div>
      </div>

      {/* <footer> cyan */}
      <div
        onMouseEnter={() => setHovered('footer')}
        onMouseLeave={() => setHovered(null)}
        className="p-3 rounded bg-[#00d2d3] text-slate-900 font-extrabold text-sm tracking-wide shadow-sm hover:brightness-110 transition cursor-pointer"
      >
        &lt;footer&gt;
      </div>

      {/* Info hover tooltip */}
      <div className="mt-2 text-[10px] text-slate-600 font-sans min-h-[16px]" dir="rtl">
        {hovered === 'header' && '🔴 رأس الصفحة: الشعار وعنوان الموقع الرئيسي'}
        {hovered === 'nav' && '🟢 روابط التنقل: قائمة أزرار التنقل بين الصفحات'}
        {hovered === 'main' && '🟠 المحتوى الرئيسي: يضم أقسام المقال <section>'}
        {hovered === 'footer' && '🔵 تذييل الصفحة: أسفل الموقع وحقوق النشر'}
        {!hovered && '💡 مرر الفأرة على أي جزء لفحص دوره في الهيكل'}
      </div>
    </div>
  );
}

/* =========================================================================
   ويدجت مقارنة مظهر CSS (مطابق للصورة ٣ Before / After)
   ========================================================================= */
export function CssBeforeAfterWidget() {
  const [applied, setApplied] = useState<boolean>(true);

  return (
    <div className="rounded-2xl border p-4 shadow-xl text-right font-sans" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
        <span className="text-xs font-bold text-slate-300">مقارنة تأثير CSS (Before vs After):</span>
        <button
          onClick={() => setApplied(!applied)}
          className={`px-3 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
            applied ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-700 text-slate-300'
          }`}
        >
          <Palette className="w-3.5 h-3.5" />
          <span>{applied ? '✅ CSS مفعّل (أفتر)' : '❌ بدون CSS (بيفور)'}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 min-h-[220px]">
        {/* Left: Raw HTML (Before) */}
        <div className={`p-4 rounded-xl border transition-all ${!applied ? 'ring-2 ring-blue-500 bg-white text-black' : 'bg-slate-950 text-slate-400 border-slate-800 opacity-60'}`} dir="ltr">
          <div className="text-[10px] font-mono text-slate-500 border-b pb-1 mb-2">بيفور (CSS未適用) — Raw HTML</div>
          <div className="font-serif text-xs space-y-1">
            <p className="font-bold text-sm">Welcome to my portfolio!</p>
            <ul className="list-disc pl-4 space-y-1 text-slate-700">
              <li className="font-bold text-black">ABOUT ME</li>
              <li className="list-none pl-2 text-[11px]">Hi, I'm a developer.</li>
              <li className="font-bold text-black">PROJECTS</li>
              <li className="list-none pl-2 text-[11px]">• Project 1 (No styling)</li>
              <li className="font-bold text-black">CONTACT</li>
            </ul>
          </div>
        </div>

        {/* Right: Styled Card (After) */}
        <div className={`p-4 rounded-xl border transition-all ${applied ? 'ring-2 ring-purple-500 bg-gradient-to-br from-slate-900 to-purple-950/40 text-white shadow-xl' : 'bg-slate-950 text-slate-500 border-slate-800 opacity-60'}`} dir="ltr">
          <div className="text-[10px] font-mono text-purple-400 border-b border-purple-800/40 pb-1 mb-2">أفتر (CSS適用後) — Styled Card</div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-sm text-purple-300">Welcome!</h4>
              <span className="text-[9px] px-2 py-0.5 rounded-full bg-purple-600 text-white font-mono">Portfolio</span>
            </div>
            <p className="text-[11px] text-slate-300">Hi, I'm a modern web developer.</p>
            <div className="grid grid-cols-2 gap-1.5 my-2">
              <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] text-center font-bold text-sky-300">App Design</div>
              <div className="p-1.5 rounded bg-slate-800/80 border border-slate-700 text-[10px] text-center font-bold text-emerald-300">Web Dev</div>
            </div>
            <button className="w-full py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-xs font-bold shadow-md transition">
              اشتري الآن (Styled Button)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   ويدجت تفاعل JavaScript (تطبيق العداد التفاعلي مطابق للصورة ٤)
   ========================================================================= */
export function JsCounterWidget() {
  const [count, setCount] = useState<number>(3);
  const [message, setMessage] = useState<string | null>(null);

  const triggerAlert = () => {
    setMessage('🎉 استجابة فورية: أهلاً بك في متجرنا! هذا التفاعل نفذته لغة JavaScript دون إعادة تحميل الصفحة!');
  };

  return (
    <div className="rounded-2xl border p-4 shadow-xl text-center font-sans max-w-[340px] mx-auto bg-slate-950 border-slate-800">
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 shadow-inner">
        <h3 className="text-xl font-black text-slate-200 tracking-wide font-mono mb-1">Counter</h3>
        
        {/* Big Counter Number */}
        <div
          className="text-5xl font-black my-3 font-mono transition-transform duration-200"
          style={{
            color: count > 0 ? '#22c55e' : count < 0 ? '#ef4444' : '#38bdf8',
          }}
        >
          {count}
        </div>

        {/* 3 Buttons from image 4: DECREASE, RESET, INCREASE */}
        <div className="flex justify-center gap-1.5 font-mono text-[11px]">
          <button
            onClick={() => { setCount(c => c - 1); setMessage(null); }}
            className="px-2.5 py-1.5 rounded border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition shadow-sm"
          >
            DECREASE
          </button>
          <button
            onClick={() => { setCount(0); setMessage(null); }}
            className="px-2.5 py-1.5 rounded border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold transition shadow-sm"
          >
            RESET
          </button>
          <button
            onClick={() => { setCount(c => c + 1); setMessage(null); }}
            className="px-2.5 py-1.5 rounded border border-sky-600 bg-sky-950 hover:bg-sky-900 text-sky-300 font-bold transition shadow-sm"
          >
            INCREASE
          </button>
        </div>
      </div>

      {/* Button onclick demonstration from image 4 */}
      <div className="mt-3 pt-3 border-t border-slate-800 text-right">
        <button
          onClick={triggerAlert}
          className="w-full py-2 px-3 rounded-lg bg-yellow-600 hover:bg-yellow-500 text-white font-bold text-xs shadow transition flex items-center justify-center gap-1.5"
        >
          <Zap className="w-3.5 h-3.5" />
          <span dir="ltr">button onclick="alert('أهلاً بك')"</span>
        </button>

        {message && (
          <div className="mt-2 p-2 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-200 text-[11px] font-bold text-center">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================================
   2. مستكشف الثلاثي الذهبي (HTML, CSS, JavaScript) والتشبيه الوزاري
   ========================================================================= */
export function FrontendTrioLabDemo() {
  const [tech, setTech] = useState<'html' | 'css' | 'js'>('html');
  const [showRule, setShowRule] = useState(false);

  const DATA = {
    html: {
      name: 'HTML',
      title: 'بنية وهيكل صفحة الويب',
      analogy: 'هيكل المبنى الخرساني والجدران',
      role: 'تحدد بنية ومحتوى صفحة الويب، وتصف العناصر الأساسية كالعناوين والفقرات والصور والروابط.',
      example: '<h1>عنوان الصفحة</h1> <p>محتوى الفقرة</p>',
      color: '#38bdf8',
      icon: FileCode2,
    },
    css: {
      name: 'CSS',
      title: 'مظهر وتنسيق صفحة الويب',
      analogy: 'التصميم والديكور والدهانات الداخلية والخارجية',
      role: 'تحدد مظهر وشكل صفحة الويب، كالألوان، والتخطيط، ومقاسات الخطوط، وأسلوب العرض.',
      example: 'body { color: #1e293b; background: #f8fafc; font-size: 16px; }',
      color: '#a855f7',
      icon: Palette,
    },
    js: {
      name: 'JavaScript',
      title: 'السلوك والتفاعل الديناميكي',
      analogy: 'شبكة الكهرباء والسباكة والأجهزة التي تعمل في المبنى',
      role: 'تضيف السلوك والتفاعلية إلى صفحة الويب، كالأزرار المستجيبة، وتحديث جزء فقط من الشاشة دون إعادة تحميل، وتشغيل العدادات.',
      example: 'button.addEventListener("click", () => { counter++; });',
      color: '#eab308',
      icon: Zap,
    },
  };

  const curr = DATA[tech];
  const IconComp = curr.icon;

  return (
    <div className="rounded-2xl border p-5 shadow-xl my-4 text-right" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      {/* Top Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-5" style={{ borderColor: '#1e293b' }}>
        <div className="flex gap-2">
          {(['html', 'css', 'js'] as const).map(key => {
            const item = DATA[key];
            const isSel = tech === key;
            return (
              <button
                key={key}
                onClick={() => setTech(key)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition flex items-center gap-2 ${
                  isSel
                    ? 'bg-slate-800 text-white shadow-md border'
                    : 'bg-slate-900/60 text-slate-400 hover:bg-slate-800'
                }`}
                style={{ borderColor: isSel ? item.color : 'transparent' }}
              >
                <item.icon className="w-4 h-4" style={{ color: item.color }} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setShowRule(!showRule)}
          className="text-xs text-amber-300 bg-amber-950/40 border border-amber-800/60 px-3 py-1.5 rounded-lg hover:bg-amber-900/30 transition flex items-center gap-1.5"
        >
          <span>💡 ملحوظة وزارية هامة</span>
        </button>
      </div>

      {/* Ministerial Important Note */}
      {showRule && (
        <div className="mb-4 p-3 rounded-xl border bg-amber-950/20 border-amber-800/40 text-xs text-amber-200 leading-relaxed">
          📌 <b>هل يلزم استخدام التقنيات الثلاث معاً في كل صفحة؟</b><br />
          <b>لا، ليس من الضروري!</b> تؤدي التقنيات أدواراً مختلفة، ويمكن أن تستخدم الصفحة لغة <b>HTML وحدها</b>، أو HTML مع CSS، أو HTML مع CSS و JavaScript بحسب الوظائف التي تحتاج إليها الصفحة.
        </div>
      )}

      {/* Main Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Info Box */}
        <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <IconComp className="w-5 h-5" style={{ color: curr.color }} />
              <h3 className="text-base font-extrabold text-white">{curr.name} — {curr.title}</h3>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">{curr.role}</p>

            <div className="p-3 rounded-lg border bg-slate-950/70 border-slate-800">
              <span className="text-[11px] text-slate-400 block mb-1">🏛️ التشبيه المعتمد في كتاب الوزارة والفائز:</span>
              <p className="text-xs font-bold text-slate-200">{curr.analogy}</p>
            </div>
          </div>
        </div>

        {/* Code / Visual Box */}
        <div className="p-4 rounded-xl border bg-slate-950/90 border-slate-800 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-mono text-slate-400 block mb-2">نموذج برمجي تمثيلي:</span>
            <pre className="font-mono text-xs p-3 rounded-lg bg-slate-900 text-slate-200 overflow-x-auto border border-slate-800 text-left" dir="ltr">
              {curr.example}
            </pre>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
            <span>الدور في الواجهة:</span>
            <span className="font-bold px-2 py-0.5 rounded" style={{ background: `${curr.color}20`, color: curr.color }}>
              {tech === 'html' ? 'البنية (Structure)' : tech === 'css' ? 'المظهر (Presentation)' : 'السلوك (Behavior)'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. مقارنة لغة HTML الدلالية (Semantic HTML) وإمكانية الوصول و SEO
   ========================================================================= */
export function SemanticHtmlComparisonDemo() {
  const [mode, setMode] = useState<'standard' | 'a11y' | 'seo'>('standard');

  return (
    <div className="rounded-2xl border p-5 shadow-xl my-4 text-right" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      {/* Top Header & Buttons */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-5" style={{ borderColor: '#1e293b' }}>
        <div>
          <h3 className="text-base font-extrabold text-white">لغة HTML الدلالية (Semantic HTML)</h3>
          <p className="text-xs text-slate-400">استخدام عناصر توضح وظيفة ومعنى أجزاء الصفحة وليس مجرد شكلها</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setMode('standard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'standard' ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Layers className="w-3.5 h-3.5" /> المقارنة الهيكلية
          </button>
          <button
            onClick={() => setMode('a11y')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'a11y' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Eye className="w-3.5 h-3.5" /> إمكانية الوصول (Accessibility)
          </button>
          <button
            onClick={() => setMode('seo')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              mode === 'seo' ? 'bg-amber-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Bot className="w-3.5 h-3.5" /> محركات البحث (SEO)
          </button>
        </div>
      </div>

      {/* Comparison View */}
      {mode === 'standard' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Non Semantic */}
          <div className="p-4 rounded-xl border bg-red-950/10 border-red-900/30">
            <span className="text-xs font-bold text-red-400 block mb-2">❌ الصناديق العادية غير الدلالية (&lt;div&gt;)</span>
            <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
              استخدام <code>&lt;div&gt;</code> لجميع الأجزاء لا يعطي أي معنى لوظيفة المحتوى، فيعامل المتصفح وقارئ الشاشة كل شيء كصندوق مجهول.
            </p>
            <div className="space-y-1.5 font-mono text-[11px] text-slate-300" dir="ltr">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">&lt;div class="top"&gt;رأس الصفحة&lt;/div&gt;</div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">&lt;div class="links"&gt;روابط التنقل&lt;/div&gt;</div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">&lt;div class="content"&gt;المحتوى الرئيسي&lt;/div&gt;</div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">&lt;div class="bottom"&gt;أسفل الصفحة&lt;/div&gt;</div>
            </div>
          </div>

          {/* Semantic HTML */}
          <div className="p-4 rounded-xl border bg-emerald-950/15 border-emerald-900/40">
            <span className="text-xs font-bold text-emerald-400 block mb-2">✅ عناصر HTML الدلالية المعتمدة في المنهج</span>
            <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
              توضح وظيفة كل جزء من أجزاء الصفحة بدقة، وتفهمها البرمجيات المساعدة ومحركات البحث تلقائياً.
            </p>
            <div className="space-y-1.5 font-mono text-[11px] text-slate-200" dir="ltr">
              <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800 text-emerald-300">&lt;header&gt; رأس الصفحة وأعلى الموقع &lt;/header&gt;</div>
              <div className="p-2 rounded bg-sky-950/40 border border-sky-800 text-sky-300">&lt;nav&gt; منطقة روابط التنقل الرئيسية &lt;/nav&gt;</div>
              <div className="p-2 rounded bg-indigo-950/40 border border-indigo-800 text-indigo-300">&lt;main&gt; المحتوى الرئيس المستقل للصفحة &lt;/main&gt;</div>
              <div className="p-2 rounded bg-amber-950/40 border border-amber-800 text-amber-300">&lt;footer&gt; أسفل الصفحة وتذييلها &lt;/footer&gt;</div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility View */}
      {mode === 'a11y' && (
        <div className="p-4 rounded-xl border bg-emerald-950/20 border-emerald-800/40">
          <h4 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
            <Eye className="w-4 h-4 text-emerald-400" />
            الفائدة الأولى: تحسين إمكانية الوصول (Accessibility)
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            <b>إمكانية الوصول:</b> هي تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة.
          </p>
          <div className="p-3 rounded-lg border bg-slate-900/80 border-slate-800 text-xs text-slate-300 leading-relaxed">
            🔊 <b>دور قارئ الشاشة (Screen Reader):</b> عندما يقرأ قارئ الشاشة كود <code>&lt;nav&gt;</code> فإنه يخبر المستخدم الكفيف فورياً: <i>"هذه منطقة التنقل بالصفحة"</i>، وعندما يقرأ <code>&lt;main&gt;</code> ينقله مباشرة إلى المحتوى الأساسي دون إضاعة وقته في قراءة الإعلانات والعناصر الجانبية.
          </div>
        </div>
      )}

      {/* SEO View */}
      {mode === 'seo' && (
        <div className="p-4 rounded-xl border bg-amber-950/20 border-amber-800/40">
          <h4 className="text-amber-400 font-bold text-sm mb-2 flex items-center gap-2">
            <Bot className="w-4 h-4 text-amber-400" />
            الفائدة الثانية: فهم محركات البحث للمحتوى (SEO)
          </h4>
          <p className="text-xs text-slate-300 leading-relaxed mb-3">
            <b>SEO (تحسين محركات البحث):</b> ممارسات تجعل صفحة الويب أيسر في الفهرسة والظهور في نتائج البحث.
          </p>
          <div className="p-3 rounded-lg border bg-slate-900/80 border-slate-800 text-xs text-slate-300 leading-relaxed">
            🔍 <b>ملحوظة كتاب الوزارة الرسمية:</b> يساعد HTML الدلالي محركات البحث على فهم بنية المحتوى بصورة أفضل، <b>ولكنه لا يضمن ترتيباً أعلى بالضرورة</b> في نتائج البحث.
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   محاكي بناء عناصر HTML الدلالية (Semantic HTML Builder Simulator)
   ========================================================================= */
export function SemanticElementBuilderDemo() {
  const [semanticMode, setSemanticMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'a11y' | 'seo'>('preview');

  // Element inclusion states
  const [hasHeader, setHasHeader] = useState<boolean>(true);
  const [hasNav, setHasNav] = useState<boolean>(true);
  const [hasMain, setHasMain] = useState<boolean>(true);
  const [hasAside, setHasAside] = useState<boolean>(true);
  const [hasFooter, setHasFooter] = useState<boolean>(true);

  // Inspector selection
  const [activeElement, setActiveElement] = useState<'header' | 'nav' | 'main' | 'aside' | 'footer' | null>('header');

  // Screen reader active step index
  const [srStep, setSrStep] = useState<number>(0);

  const ELEMENTS = [
    {
      id: 'header' as const,
      name: '<header>',
      nonSemanticName: '<div class="header">',
      label: 'رأس الصفحة (Header)',
      role: 'في أعلى الصفحة: يضم عنوان الموقع والشعار والترويسة الرئيسية.',
      active: hasHeader,
      setActive: setHasHeader,
      color: '#38bdf8',
      srTextSemantic: '🔊 لافتة الموقع (Banner Landmark): تم الوصول لرأس الصفحة. العنوان: "منصة البكالوريا التعليمية 2027".',
      srTextDiv: '⚠️ صندوق... نص: "منصة البكالوريا التعليمية". (لا يعلم الكفيف إن كان هذا إعلاناً أم ترويسة رئيسية).',
      seoDesc: 'يفهرسه محرك البحث كترويسة أساسية للصفحة تحدد هويتها وموضوعها العام.',
    },
    {
      id: 'nav' as const,
      name: '<nav>',
      nonSemanticName: '<div class="nav-bar">',
      label: 'منطقة روابط التنقل (Navigation)',
      role: 'منطقة مخصصة لروابط التنقل الرئيسية بين صفحات وأقسام الموقع.',
      active: hasNav,
      setActive: setHasNav,
      color: '#06b6d4',
      srTextSemantic: '🔊 معلم التنقل (Navigation Landmark): قائمة بها ٤ روابط. [ميزة: يمكن للكفيف تخطي القائمة والانتقال فوراً للمحتوى].',
      srTextDiv: '⚠️ صندوق عادي... رابط ١، رابط ٢... (المستخدم الكفيف مجبر على قراءة كل الروابط بدون خيار القفز).',
      seoDesc: 'يرشد عناكب محركات البحث إلى خريطة روابط الموقع الداخلية بسرعة وبدقة.',
    },
    {
      id: 'main' as const,
      name: '<main>',
      nonSemanticName: '<div class="main-content">',
      label: 'المحتوى الرئيس (Main Content)',
      role: 'المحتوى الرئيس والفريد والمستقل للصفحة الحالية، ويضم مقال الصفحة.',
      active: hasMain,
      setActive: setHasMain,
      color: '#10b981',
      srTextSemantic: '🔊 المعلم الرئيسي (Main Landmark): مقال تعليمي بعنوان: "أساسيات لغة HTML الدلالية في بناء الويب".',
      srTextDiv: '⚠️ صندوق نصي مجهول المعنى... (يصعب على الكفيف معرفة متى بدأ المحتوى الأساسي ومتى انتهت القوائم).',
      seoDesc: 'النص الأساسي الذي تقيمه خوارزميات محركات البحث لحساب جودة المحتوى والفهرسة.',
    },
    {
      id: 'aside' as const,
      name: '<aside>',
      nonSemanticName: '<div class="sidebar">',
      label: 'الشريط الجانبي (Sidebar / Aside)',
      role: 'محتوى تكميلي إضافي يرتبط بالموضوع بشكل غير مباشر (أخبار سريعة ومواعيد).',
      active: hasAside,
      setActive: setHasAside,
      color: '#a855f7',
      srTextSemantic: '🔊 محتوى تكميلي (Complementary Landmark): مواعيد هامة وروابط جانبية ذات صلة.',
      srTextDiv: '⚠️ صندوق جانبي إضافي غير محدد المعنى.',
      seoDesc: 'تفهمه محركات البحث كمحتوى فرعي ثانوي لا يشوش على الكلمات المفتاحية للمقال الرئيسي.',
    },
    {
      id: 'footer' as const,
      name: '<footer>',
      nonSemanticName: '<div class="footer-box">',
      label: 'تذييل الصفحة (Footer)',
      role: 'في أسفل الصفحة: يضم حقوق النشر وتاريخ النشر وبيانات التواصل.',
      active: hasFooter,
      setActive: setHasFooter,
      color: '#f59e0b',
      srTextSemantic: '🔊 تذييل الصفحة (Contentinfo Landmark): نهاية الصفحة. حقوق النشر © 2027.',
      srTextDiv: '⚠️ صندوق أخير في أسفل الشاشة.',
      seoDesc: 'يساعد في فهرسة معلومات الناشر وحقوق الملكية والروابط القانونية.',
    },
  ];

  const curr = ELEMENTS.find(e => e.id === activeElement) ?? ELEMENTS[0];

  // Active elements list for screen reader walkthrough
  const activeElementsList = ELEMENTS.filter(e => e.active);
  const activeSrElement = activeElementsList[srStep % Math.max(1, activeElementsList.length)] ?? curr;

  const buildFullPage = () => {
    setHasHeader(true);
    setHasNav(true);
    setHasMain(true);
    setHasAside(true);
    setHasFooter(true);
    setSrStep(0);
  };

  const clearAll = () => {
    setHasHeader(false);
    setHasNav(false);
    setHasMain(false);
    setHasAside(false);
    setHasFooter(false);
    setActiveElement(null);
    setSrStep(0);
  };

  const generateCode = () => {
    const lines = [
      '<!DOCTYPE html>',
      '<html lang="ar" dir="rtl">',
      '<head>',
      '  <title>منصة البكالوريا التعليمية</title>',
      '</head>',
      '<body>',
    ];

    if (semanticMode) {
      if (hasHeader) {
        lines.push('  <header>');
        lines.push('    <h1>منصة البكالوريا التعليمية</h1>');
        lines.push('  </header>');
      }
      if (hasNav) {
        lines.push('  <nav>');
        lines.push('    <a href="#home">الرئيسية</a>');
        lines.push('    <a href="#lessons">الدروس</a>');
        lines.push('    <a href="#contact">اتصل بنا</a>');
        lines.push('  </nav>');
      }
      if (hasMain || hasAside) {
        lines.push('  <div class="page-body">');
        if (hasMain) {
          lines.push('    <main>');
          lines.push('      <article>');
          lines.push('        <h2>أساسيات عناصر HTML الدلالية</h2>');
          lines.push('        <p>توضح عناصر HTML الدلالية وظيفة المحتوى لقارئ الشاشة ومحركات البحث.</p>');
          lines.push('      </article>');
          lines.push('    </main>');
        }
        if (hasAside) {
          lines.push('    <aside>');
          lines.push('      <h3>مواعيد هامة</h3>');
          lines.push('      <p>امتحان البرمجة والذكاء الاصطناعي نهاية الفصل الدراسي.</p>');
          lines.push('    </aside>');
        }
        lines.push('  </div>');
      }
      if (hasFooter) {
        lines.push('  <footer>');
        lines.push('    <p>© 2027 جميع الحقوق محفوظة - بكالوريا</p>');
        lines.push('  </footer>');
      }
    } else {
      if (hasHeader) {
        lines.push('  <div class="top-header">');
        lines.push('    <h1>منصة البكالوريا التعليمية</h1>');
        lines.push('  </div>');
      }
      if (hasNav) {
        lines.push('  <div class="nav-links">');
        lines.push('    <a href="#home">الرئيسية</a>');
        lines.push('    <a href="#lessons">الدروس</a>');
        lines.push('    <a href="#contact">اتصل بنا</a>');
        lines.push('  </div>');
      }
      if (hasMain || hasAside) {
        lines.push('  <div class="page-body">');
        if (hasMain) {
          lines.push('    <div class="main-box">');
          lines.push('      <div class="article-box">');
          lines.push('        <h2>أساسيات عناصر HTML الدلالية</h2>');
          lines.push('        <p>صفحة مبنية بصناديق عادية غير دلالية تفقد معناها البنائي.</p>');
          lines.push('      </div>');
          lines.push('    </div>');
        }
        if (hasAside) {
          lines.push('    <div class="side-box">');
          lines.push('      <h3>مواعيد هامة</h3>');
          lines.push('      <p>امتحان البرمجة والذكاء الاصطناعي نهاية الفصل الدراسي.</p>');
          lines.push('    </div>');
        }
        lines.push('  </div>');
      }
      if (hasFooter) {
        lines.push('  <div class="bottom-footer">');
        lines.push('    <p>© 2027 جميع الحقوق محفوظة - بكالوريا</p>');
        lines.push('  </div>');
      }
    }

    lines.push('</body>');
    lines.push('</html>');
    return lines.join('\n');
  };

  const isAnyBuilt = hasHeader || hasNav || hasMain || hasAside || hasFooter;

  return (
    <div className="rounded-2xl border p-5 shadow-2xl my-4 text-right" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      {/* Top Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-4" style={{ borderColor: '#1e293b' }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="p-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800 text-emerald-400">
              <Layers className="w-4 h-4" />
            </span>
            <h3 className="text-base font-extrabold text-white">
              محاكي بناء عناصر HTML الدلالية (Semantic HTML Builder)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            ابنِ صفحة الويب قطعةً بقطعة باستخدام وسوم المنهج الرسمية، ولاحظ الفرق الجوهري في الكود وتجربة قارئ الشاشة و SEO.
          </p>
        </div>

        {/* Semantic / Non-semantic Mode Switch */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
          <button
            onClick={() => setSemanticMode(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              semanticMode
                ? 'bg-emerald-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            <span>بناء دلالي (Semantic HTML)</span>
          </button>
          <button
            onClick={() => setSemanticMode(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              !semanticMode
                ? 'bg-rose-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>صناديق عادية (&lt;div&gt;)</span>
          </button>
        </div>
      </div>

      {/* Toolbox: Elements Toggles */}
      <div className="p-3.5 rounded-xl border bg-slate-900/60 border-slate-800 mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">قطع البناء:</span>
          <div className="flex flex-wrap gap-1.5">
            {ELEMENTS.map(elem => {
              const isOn = elem.active;
              const isSelected = activeElement === elem.id;
              return (
                <button
                  key={elem.id}
                  onClick={() => {
                    elem.setActive(!elem.active);
                    setActiveElement(elem.id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition flex items-center gap-1.5 border ${
                    isOn
                      ? 'bg-slate-800 text-white border-slate-600 shadow-sm'
                      : 'bg-slate-950 text-slate-500 border-slate-800 hover:text-slate-300'
                  } ${isSelected ? 'ring-2 ring-emerald-500/50' : ''}`}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: isOn ? elem.color : '#475569' }}
                  />
                  <span>{semanticMode ? elem.name : elem.nonSemanticName}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={buildFullPage}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition flex items-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>بناء كامل الصفحة</span>
          </button>
          <button
            onClick={clearAll}
            className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-slate-300 transition flex items-center gap-1 border border-slate-700"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>إعادة تعيين</span>
          </button>
        </div>
      </div>

      {/* Main Dual Workspace */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Left Side: Browser Preview (7 cols) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Mock Browser Chrome */}
          <div className="rounded-xl border border-slate-700 overflow-hidden shadow-xl bg-slate-950 flex flex-col flex-1">
            {/* Window titlebar */}
            <div className="px-3 py-2 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <div className="flex-1 max-w-[280px] mx-auto px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-[10px] font-mono text-slate-400 text-center truncate" dir="ltr">
                https://madrasa-bac2027.edu.eg
              </div>
              <span className="text-[10px] font-mono text-slate-500">HTML5 View</span>
            </div>

            {/* Page Canvas */}
            <div className="p-3.5 bg-slate-950/90 flex-1 min-h-[360px] flex flex-col justify-between space-y-2">
              {!isAnyBuilt ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-slate-800 rounded-xl my-auto">
                  <Layers className="w-10 h-10 text-slate-600 mb-2" />
                  <p className="text-xs text-slate-400 font-bold mb-1">الصفحة فارغة حالياً</p>
                  <p className="text-[11px] text-slate-500">
                    اضغط على عناصر شريط الأدوات أعلاه (مثل &lt;header&gt; أو &lt;main&gt;) لبدء بناء هيكل الصفحة!
                  </p>
                </div>
              ) : (
                <>
                  {/* Header Element */}
                  {hasHeader && (
                    <div
                      onClick={() => setActiveElement('header')}
                      className={`p-3 rounded-lg border transition cursor-pointer relative group ${
                        activeElement === 'header'
                          ? 'ring-2 ring-sky-400 bg-sky-950/40 border-sky-600'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="absolute top-1.5 left-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-sky-950 text-sky-300 border border-sky-800">
                        {semanticMode ? '<header>' : '<div class="header">'}
                      </span>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xs font-extrabold text-white">منصة البكالوريا التعليمية ٢٠٢٧</h4>
                          <p className="text-[10px] text-slate-400">بوابة التعلم الرقمي لمادة البرمجة والذكاء الاصطناعي</p>
                        </div>
                        <span className="text-lg">🎓</span>
                      </div>
                    </div>
                  )}

                  {/* Nav Element */}
                  {hasNav && (
                    <div
                      onClick={() => setActiveElement('nav')}
                      className={`p-2.5 rounded-lg border transition cursor-pointer relative group ${
                        activeElement === 'nav'
                          ? 'ring-2 ring-cyan-400 bg-cyan-950/40 border-cyan-600'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="absolute top-1 left-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                        {semanticMode ? '<nav>' : '<div class="nav-bar">'}
                      </span>
                      <div className="flex items-center gap-3 text-[11px] font-bold text-slate-300">
                        <span className="text-cyan-400 cursor-pointer hover:underline">الرئيسية</span>
                        <span className="text-slate-400">|</span>
                        <span className="cursor-pointer hover:underline">الدروس التعليمية</span>
                        <span className="text-slate-400">|</span>
                        <span className="cursor-pointer hover:underline">المعجم الوزاري</span>
                        <span className="text-slate-400">|</span>
                        <span className="cursor-pointer hover:underline">اتصل بنا</span>
                      </div>
                    </div>
                  )}

                  {/* Middle Row: Main Content + Sidebar Aside */}
                  {(hasMain || hasAside) && (
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 my-auto">
                      {/* Main */}
                      {hasMain && (
                        <div
                          onClick={() => setActiveElement('main')}
                          className={`p-3 rounded-lg border transition cursor-pointer relative group ${
                            hasAside ? 'md:col-span-8' : 'md:col-span-12'
                          } ${
                            activeElement === 'main'
                              ? 'ring-2 ring-emerald-400 bg-emerald-950/30 border-emerald-600'
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span className="absolute top-1.5 left-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                            {semanticMode ? '<main> / <article>' : '<div class="main-content">'}
                          </span>
                          <span className="text-[10px] text-emerald-400 font-bold block mb-1">المحتوى الرئيس للصفحة:</span>
                          <h5 className="text-xs font-bold text-white mb-1.5">أساسيات تكنولوجيا الواجهة الأمامية</h5>
                          <p className="text-[11px] text-slate-300 leading-relaxed">
                            تُبنى صفحة الويب من HTML (البنية) و CSS (المظهر) و JavaScript (السلوك)، بينما تجعل عناصر HTML الدلالية التصميم مفهوماً للآلات والبشر.
                          </p>
                        </div>
                      )}

                      {/* Aside */}
                      {hasAside && (
                        <div
                          onClick={() => setActiveElement('aside')}
                          className={`p-3 rounded-lg border transition cursor-pointer relative group ${
                            hasMain ? 'md:col-span-4' : 'md:col-span-12'
                          } ${
                            activeElement === 'aside'
                              ? 'ring-2 ring-purple-400 bg-purple-950/30 border-purple-600'
                              : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                          }`}
                        >
                          <span className="absolute top-1.5 left-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-purple-950 text-purple-300 border border-purple-800">
                            {semanticMode ? '<aside>' : '<div class="sidebar">'}
                          </span>
                          <span className="text-[10px] text-purple-400 font-bold block mb-1">شريط جانبي:</span>
                          <h6 className="text-[11px] font-bold text-white mb-1">📅 مواعيد هامة</h6>
                          <p className="text-[10px] text-slate-400 leading-relaxed">
                            مراجعة الوحدة الثالثة يوم الأحد القادم.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Footer Element */}
                  {hasFooter && (
                    <div
                      onClick={() => setActiveElement('footer')}
                      className={`p-2.5 rounded-lg border transition cursor-pointer relative group text-center ${
                        activeElement === 'footer'
                          ? 'ring-2 ring-amber-400 bg-amber-950/40 border-amber-600'
                          : 'bg-slate-900 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      <span className="absolute top-1 left-2 text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-950 text-amber-300 border border-amber-800">
                        {semanticMode ? '<footer>' : '<div class="footer-box">'}
                      </span>
                      <p className="text-[11px] text-slate-400">
                        © 2027 جميع الحقوق محفوظة — وزارة التربية والتعليم والتعليم الفني
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Inspector & Simulator Tabs (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Tab buttons */}
          <div className="flex gap-1 border-b pb-2 mb-3" style={{ borderColor: '#1e293b' }}>
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>فحص العنصر</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'code'
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>كود HTML</span>
            </button>
            <button
              onClick={() => setActiveTab('a11y')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'a11y'
                  ? 'bg-purple-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>قارئ الشاشة</span>
            </button>
            <button
              onClick={() => setActiveTab('seo')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                activeTab === 'seo'
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800'
              }`}
            >
              <Bot className="w-3.5 h-3.5" />
              <span>محركات البحث</span>
            </button>
          </div>

          {/* Tab 1: Element Inspector */}
          {activeTab === 'preview' && (
            <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: curr.color }} />
                    {curr.label}
                  </span>
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded" style={{ background: `${curr.color}25`, color: curr.color }}>
                    {semanticMode ? curr.name : curr.nonSemanticName}
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div>
                    <span className="text-[10px] text-slate-500 block mb-0.5">الدور والوظيفة في صفحة الويب:</span>
                    <p className="leading-relaxed bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                      {curr.role}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] text-slate-500 block mb-0.5">الفرق بين البناء الدلالي وغير الدلالي:</span>
                    <p className="leading-relaxed text-[11px] text-slate-300">
                      {semanticMode
                        ? `عند استخدام ${curr.name}، يعرف المتصفح وقارئ الشاشة ومحركات البحث وظيفته فورياً دون الحاجة لقراءة كل الكود.`
                        : `عند استخدام الصندوق العام <div>، يفقد العنصر دلالته ويتحول لمجرد حاوية لا تخبر أحداً بوظيفتها.`}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                <span>الحالة في الصفحة: {curr.active ? '✅ مُدرج بالصفحة' : '❌ محذوف'}</span>
                <button
                  onClick={() => curr.setActive(!curr.active)}
                  className="text-sky-400 hover:underline"
                >
                  {curr.active ? 'إخفاء العنصر' : 'إظهار العنصر'}
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Live HTML Code */}
          {activeTab === 'code' && (
            <div className="p-3.5 rounded-xl border bg-slate-950 border-slate-800 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                  <span className="text-xs font-bold text-emerald-400 font-mono">index.html</span>
                  <span className="text-[10px] text-slate-500">
                    {semanticMode ? 'Semantic HTML5 Markup' : 'Generic Div Soup'}
                  </span>
                </div>
                <pre
                  className="font-mono text-[11px] leading-relaxed p-2.5 rounded bg-slate-900 text-emerald-300 overflow-x-auto max-h-[300px] border border-slate-800"
                  dir="ltr"
                >
                  {generateCode()}
                </pre>
              </div>

              <span className="text-[10px] text-slate-400 block pt-2 border-t border-slate-800 mt-2">
                لاحظ كيف أن الكود الدلالي أنظف وأقصر وأسهل في القراءة والصيانة!
              </span>
            </div>
          )}

          {/* Tab 3: Screen Reader Simulator */}
          {activeTab === 'a11y' && (
            <div className="p-4 rounded-xl border bg-purple-950/20 border-purple-800/40 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-purple-800/60 pb-2 mb-3">
                  <span className="text-xs font-bold text-purple-300 flex items-center gap-1.5">
                    <Volume2 className="w-4 h-4 text-purple-400" />
                    محاكي قارئ الشاشة (Screen Reader Voice)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-900/60 text-purple-200">
                    Accessibility Lab
                  </span>
                </div>

                <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                  تخيل أنك كفيف وتستخدم الحاسوب عبر الصوت فقط. كيف سيقرأ لك المتصفح الصفحة الحالية؟
                </p>

                {/* Audio simulation box */}
                <div className="p-3.5 rounded-xl bg-slate-900 border border-purple-900/60 mb-3 shadow-inner">
                  <span className="text-[10px] font-bold text-purple-400 block mb-1">
                    العنصر المقروء حالياً: {activeSrElement.name}
                  </span>
                  <p className="text-xs font-bold leading-relaxed text-slate-100">
                    {semanticMode ? activeSrElement.srTextSemantic : activeSrElement.srTextDiv}
                  </p>
                </div>

                {/* Step controls */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] text-slate-400">
                    العنصر {activeElementsList.length > 0 ? (srStep % activeElementsList.length) + 1 : 0} من {activeElementsList.length}
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setSrStep(prev => Math.max(0, prev - 1))}
                      disabled={activeElementsList.length <= 1}
                      className="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold disabled:opacity-40"
                    >
                      السابق
                    </button>
                    <button
                      onClick={() => setSrStep(prev => prev + 1)}
                      disabled={activeElementsList.length <= 1}
                      className="px-2.5 py-1 rounded bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold disabled:opacity-40"
                    >
                      العنصر التالي ⏭️
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-3 p-2 rounded bg-slate-950 border border-purple-900/40 text-[10px] text-purple-200">
                {semanticMode
                  ? '✅ تمكن الكفيف من القفز فوراً للمحتوى بفضل وسوم HTML الدلالية!'
                  : '❌ الكفيف تائه بين الصناديق ولا يدري أين روابط الموقع وأين المحتوى!'}
              </div>
            </div>
          )}

          {/* Tab 4: Search Engine Inspection (SEO) */}
          {activeTab === 'seo' && (
            <div className="p-4 rounded-xl border bg-amber-950/20 border-amber-800/40 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-amber-800/60 pb-2 mb-3">
                  <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                    <Bot className="w-4 h-4 text-amber-400" />
                    رؤية عناكب البحث (Googlebot Crawler)
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-900/60 text-amber-200">
                    SEO Inspector
                  </span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="p-2.5 rounded-lg bg-slate-900 border border-amber-900/40">
                    <span className="text-[11px] font-bold text-amber-400 block mb-1">كيف تفهم محركات البحث هيكل صفحتك؟</span>
                    <p className="text-[11px] leading-relaxed text-slate-300">
                      {semanticMode
                        ? 'تتعرف محركات البحث بسهولة على عنوان الصفحة في <header> ومحتواها الأساسي في <main> و <article>، مما يسهل أرشفتها وفهرستها بدقة.'
                        : 'تواجه عناكب البحث صعوبة في تمييز المحتوى الفريد عن الإعلانات والقوائم بسبب تشابه وسوم <div> المتكررة.'}
                    </p>
                  </div>

                  <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/60 text-[11px] text-amber-200 leading-relaxed">
                    📖 <b>قاعدة كتاب المدرسة الرسمية:</b> استخدام عناصر HTML الدلالية يساعد محركات البحث على فهم بنية المحتوى بصورة أفضل، <u>ولكنه لا يضمن ترتيباً أعلى بالضرورة</u> في نتائج البحث.
                  </div>
                </div>
              </div>

              <span className="text-[10px] text-slate-400 block pt-2 border-t border-slate-800 mt-2">
                Semantic HTML = Better structured indexing
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   4. التصميم المتجاوب ونهج الأولوية للجوال (Responsive & Mobile-First)
   ========================================================================= */
export function ResponsiveMobileFirstDemo() {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');

  return (
    <div className="rounded-2xl border p-5 shadow-xl my-4 text-right" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      {/* Controls */}
      <div className="flex items-center justify-between border-b pb-4 mb-4" style={{ borderColor: '#1e293b' }}>
        <div>
          <h3 className="text-base font-extrabold text-white">التصميم المتجاوب (Responsive Design)</h3>
          <p className="text-xs text-slate-400">ضبط تخطيط الصفحة تلقائياً ليتناسب مع أحجام الشاشات المختلفة</p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setDevice('mobile')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              device === 'mobile'
                ? 'bg-blue-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Smartphone className="w-3.5 h-3.5" /> شاشة الهاتف (Mobile)
          </button>
          <button
            onClick={() => setDevice('desktop')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              device === 'desktop'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
            }`}
          >
            <Monitor className="w-3.5 h-3.5" /> شاشة الكمبيوتر (Desktop)
          </button>
        </div>
      </div>

      {/* Simulated Screen */}
      <div className="flex justify-center p-4 rounded-xl bg-slate-950/80 border border-slate-800">
        <div
          className={`transition-all duration-300 rounded-xl border border-slate-700 p-3 bg-slate-900 ${
            device === 'mobile' ? 'w-[280px]' : 'w-full max-w-[620px]'
          }`}
        >
          {/* Header */}
          <div className="p-2 rounded bg-blue-950/40 border border-blue-800/60 text-center mb-2">
            <span className="text-[11px] font-bold text-blue-300">&lt;header&gt; عنوان الموقع &lt;/header&gt;</span>
          </div>

          {/* Nav */}
          <div className="p-1.5 rounded bg-sky-950/30 border border-sky-800/40 text-center mb-2">
            <span className="text-[10px] text-sky-300">&lt;nav&gt; {device === 'mobile' ? '☰ قائمة مطوية' : 'الرئيسية | من نحن | اتصل بنا'} &lt;/nav&gt;</span>
          </div>

          {/* Content Cards */}
          <div className={`grid gap-2 mb-2 ${device === 'mobile' ? 'grid-cols-1' : 'grid-cols-3'}`}>
            <div className="p-2.5 rounded bg-slate-800 text-center text-[10px] text-slate-300 border border-slate-700">بطاقة ١</div>
            <div className="p-2.5 rounded bg-slate-800 text-center text-[10px] text-slate-300 border border-slate-700">بطاقة ٢</div>
            <div className="p-2.5 rounded bg-slate-800 text-center text-[10px] text-slate-300 border border-slate-700">بطاقة ٣</div>
          </div>

          {/* Footer */}
          <div className="p-1.5 rounded bg-amber-950/30 border border-amber-800/40 text-center">
            <span className="text-[10px] text-amber-300">&lt;footer&gt; حقوق النشر &lt;/footer&gt;</span>
          </div>
        </div>
      </div>

      {/* Mobile-first Concept Callout */}
      <div className="mt-4 p-3 rounded-xl border bg-blue-950/20 border-blue-900/40 text-xs text-slate-300 leading-relaxed">
        📱 <b>نهج الأولوية للجوال (Mobile-first approach):</b><br />
        نظراً لأن أكثر مستخدمي الويب يدخلون عبر الهواتف، يراعي المطورون الشاشات الصغيرة منذ بداية التصميم، ثم يوسعون التخطيط ليتكيف مع شاشات الكمبيوتر والأجهزة اللوحية.
      </div>
    </div>
  );
}

/* =========================================================================
   5. معجم مصطلحات كتاب المدرسة وكتاب الفائز المعتمدة
   ========================================================================= */
export function TextbookGlossaryU3L3() {
  const [filter, setFilter] = useState<'all' | 'trio' | 'modern' | 'frameworks'>('all');

  const TERMS = [
    {
      term: 'الواجهة الأمامية (Frontend)',
      cat: 'trio',
      def: 'الجزء من موقع الويب الذي يراه المستخدم ويتفاعل معه مباشرة في المتصفح، وتشمل الأزرار والقوائم والصور.',
    },
    {
      term: 'لغة HTML',
      cat: 'trio',
      def: 'لغة تحديد بنية (هيكل) ومحتوى صفحة الويب، وتصف عناصر مثل العناوين والفقرات والصور والروابط (تشبه هيكل المبنى).',
    },
    {
      term: 'لغة CSS',
      cat: 'trio',
      def: 'لغة تحديد مظهر صفحة الويب، كالألوان، والتخطيط، ومقاسات الخطوط، والتصميم العام (تشبه الديكور والدهانات).',
    },
    {
      term: 'لغة JavaScript',
      cat: 'trio',
      def: 'لغة إضافة السلوك والتفاعلية إلى صفحة الويب وتفعيل الاستجابة عند الضغط على الأزرار وتحديث أجزاء من الشاشة (تشبه أنظمة الكهرباء والسباكة).',
    },
    {
      term: 'HTML الدلالية (Semantic HTML)',
      cat: 'modern',
      def: 'استخدام عناصر توضح وظيفة ومعنى أجزاء الصفحة ومحتواها، مثل <header> و <footer> و <nav> و <main>، بدلاً من الصناديق العامة.',
    },
    {
      term: 'إمكانية الوصول (Accessibility)',
      cat: 'modern',
      def: 'تصميم المحتوى والواجهة بحيث يمكن لأصحاب القدرات والاحتياجات المختلفة استخدامها، بمن فيهم ذوو الإعاقة (مستخدمو برامج قراءة الشاشة).',
    },
    {
      term: 'تحسين محركات البحث (SEO)',
      cat: 'modern',
      def: 'ممارسات تجعل صفحة الويب أيسر في الفهرسة والظهور في نتائج محركات البحث (HTML الدلالي يساعد في الفهم لكنه لا يضمن ترتيباً أعلى).',
    },
    {
      term: 'التصميم المتجاوب (Responsive Design)',
      cat: 'modern',
      def: 'مفهوم تصميمي يُضبط فيه التخطيط تلقائياً وفقاً لأحجام الشاشات المختلفة (كمبيوتر، هاتف ذكي، جهاز لوحي).',
    },
    {
      term: 'نهج الأولوية للجوال (Mobile-First)',
      cat: 'modern',
      def: 'مراعاة الشاشات الصغيرة وتصميم الواجهة لها منذ بداية العمل نظراً لأن أغلب الزوار يتصفحون الويب عبر هواتفهم.',
    },
    {
      term: 'إطار العمل (Framework)',
      cat: 'frameworks',
      def: 'بنية توفر مسبقاً وظائف ومكونات شائعة الاستخدام لجعل عملية تطوير تطبيقات الويب أكثر كفاءة، دون الحاجة لكتابة كامل الكود من الصفر.',
    },
    {
      term: 'المكتبة / إطار React',
      cat: 'frameworks',
      def: 'مكتبة JavaScript لبناء واجهات المستخدم من مكونات قابلة لإعادة الاستخدام وتحديثها عند تغير البيانات.',
    },
    {
      term: 'إطار Vue',
      cat: 'frameworks',
      def: 'إطار عمل له بنية بسيطة ويتيح بناء تطبيقات الويب تدريجياً بدءاً من ميزات صغيرة.',
    },
    {
      term: 'إطار Next.js',
      cat: 'frameworks',
      def: 'إطار عمل مبني على React لبناء تطبيقات ويب، ويوفر التوجيه وطرقاً مختلفة لعرض الصفحات والعمل على الخادم والعميل.',
    },
  ];

  const filtered = filter === 'all' ? TERMS : TERMS.filter(t => t.cat === filter);

  return (
    <div className="rounded-2xl border p-5 shadow-xl my-4 text-right" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4 mb-5" style={{ borderColor: '#1e293b' }}>
        <div>
          <h3 className="text-base font-extrabold text-white flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            معجم مصطلحات كتاب المدرسة وكتاب الفائز المعتمدة
          </h3>
          <p className="text-xs text-slate-400">النصوص والتعريفات الوزارية المقررة في امتحان البكالوريا 2027</p>
        </div>

        <div className="flex gap-1.5">
          {[
            { id: 'all', label: 'الكل' },
            { id: 'trio', label: 'الثلاثي (HTML/CSS/JS)' },
            { id: 'modern', label: 'الدلالية والتجاوب' },
            { id: 'frameworks', label: 'أطر العمل' },
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id as any)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                filter === btn.id
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
        {filtered.map(item => (
          <div key={item.term} className="p-3.5 rounded-xl border bg-slate-900/60 border-slate-800">
            <span className="text-xs font-bold text-amber-300 block mb-1.5 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              {item.term}
            </span>
            <p className="text-xs text-slate-300 leading-relaxed">{item.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================================
   ويدجت أطر العمل والمكتبات (تفاعلي متكامل: تشبيه البيت 🏠، المقارنة، المكونات، الفوائد)
   ========================================================================= */
export function FrameworksShowcaseWidget() {
  const [activeTab, setActiveTab] = useState<'analogy' | 'compare' | 'components'>('analogy');
  const [selectedFw, setSelectedFw] = useState<'angular' | 'react' | 'next' | 'vue' | 'bootstrap'>('angular');
  const [reusedComponent, setReusedComponent] = useState<'login' | 'card' | 'navbar'>('login');

  return (
    <div
      className="rounded-2xl border p-5 shadow-2xl text-right font-sans h-full flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #0b1120 0%, #070d19 100%)',
        borderColor: '#1e293b',
        fontFamily: "'Cairo', system-ui, sans-serif",
        direction: 'rtl',
      }}
    >
      {/* Top Tab Bar */}
      <div>
        <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🚀</span>
            <div>
              <span className="font-extrabold text-base text-white block">
                أطر العمل (Frameworks) والمكتبات في تطوير الويب
              </span>
              <span className="text-[11px] text-slate-400 font-bold">
                الوحدة الثالثة · الدرس الثالث · منهج البكالوريا الوزاري
              </span>
            </div>
          </div>

          {/* 3 Main Tabs */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('analogy')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'analogy'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>١. المشكلة وتشبيه البيت 🏠</span>
            </button>

            <button
              onClick={() => setActiveTab('compare')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'compare'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>٢. أطر العمل والمكتبات المقررة 🅰️⚛️</span>
            </button>

            <button
              onClick={() => setActiveTab('components')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'components'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>٣. قوة المكونات والفوائد الـ ٥ 🧩</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Problem & House Analogy */}
        {activeTab === 'analogy' && (
          <div className="space-y-4">
            {/* The Problem Intro */}
            <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800">
              <div className="flex items-center gap-2 mb-2 text-amber-300 font-extrabold text-sm">
                <span className="text-base">🤔</span>
                <span>المشكلة: لو كل مرة هنعمل موقع هنكتب كل حاجة من الصفر؟</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                لو كل مطور قرر يبدأ كل تطبيق من نقطة الصفر، هيضيع وقتاً ومجهوداً ضخماً في برمجة أشياء متكررة وشائعة يحتاجها كل موقع:
              </p>
              {/* 4 Routine Tasks */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 text-center text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xl block mb-1">🚦</span>
                  <span className="font-extrabold text-sky-300 block mb-0.5">التوجيه (Routing)</span>
                  <span className="text-[11px] text-slate-400 leading-normal">التنقل بين الصفحات وتغيير الروابط</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xl block mb-1">📁</span>
                  <span className="font-extrabold text-sky-300 block mb-0.5">تنظيم الصفحات</span>
                  <span className="text-[11px] text-slate-400 leading-normal">هيكلة وتقسيم ملفات ومجلدات المشروع</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xl block mb-1">🔄</span>
                  <span className="font-extrabold text-sky-300 block mb-0.5">التعامل مع البيانات</span>
                  <span className="text-[11px] text-slate-400 leading-normal">إرسال واستقبال طلبات API والـ JSON</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                  <span className="text-xl block mb-1">🧩</span>
                  <span className="font-extrabold text-sky-300 block mb-0.5">إدارة أجزاء الموقع</span>
                  <span className="text-[11px] text-slate-400 leading-normal">تحديث الواجهة وحالة المكونات (State)</span>
                </div>
              </div>
            </div>

            {/* House Analogy: 2 Contrasting Options */}
            <div>
              <div className="text-xs font-extrabold text-slate-200 mb-2 flex items-center gap-2">
                <span>🏠</span>
                <span>تشبيه بسيط جداً لتقريب الفكرة للطلاب: تخيل إنك هتبني بيت 🏠</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {/* Option 1: From Scratch */}
                <div className="p-4 rounded-xl border bg-rose-950/20 border-rose-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-rose-900/30">
                      <span className="font-extrabold text-rose-300 text-xs flex items-center gap-2">
                        <Hammer className="w-4 h-4 text-rose-400" />
                        الخيار الأول: تبدأ من الصفر تماماً ❌
                      </span>
                      <span className="text-[10px] text-rose-400 font-bold px-2 py-0.5 rounded bg-rose-950/80 border border-rose-900">
                        مجهود جبار وبطيء
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      تصنع الطوب بنفسك، وتخلط الأسمنت يدوياً، وتجهز كل مسمار وسلك كهرباء من البداية!
                      <br />
                      <span className="text-rose-400 font-bold">النتيجة:</span> تضييع مئات الساعات، وكثرة الأخطاء، وإعادة اختراع العجلة على الفاضي.
                    </p>
                  </div>
                </div>

                {/* Option 2: Using Framework */}
                <div className="p-4 rounded-xl border bg-emerald-950/20 border-emerald-900/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2.5 pb-2 border-b border-emerald-900/30">
                      <span className="font-extrabold text-emerald-300 text-xs flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-emerald-400" />
                        الخيار الثاني: هيكل وتجهيزات أساسية جاهزة ✔️
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-900">
                        الـ Framework الجاهز
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      عندك هيكل خرساني جاهز ومختبر، وأعمدة وتجهيزات أساسية تساعدك تبدأ فوراً في تشطيب شقتك!
                      <br />
                      <span className="text-emerald-300 font-bold">النتيجة:</span> تركز مباشرة على وظائف موقعك وتصميمه الخاص وتبنيه بأعلى سرعة وأمان.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Golden Definition Banner */}
            <div className="p-3.5 rounded-xl border bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border-blue-800/60 text-xs text-blue-100 flex items-center gap-3 shadow-lg">
              <span className="text-2xl">💡</span>
              <div className="leading-relaxed">
                <span className="font-black text-amber-300 text-sm">التعريف المعتمد في المنهج: </span>
                <b>الـ Framework (إطار العمل)</b> = بيئة برمجية وأدوات وقواعد جاهزة توفر هيكلاً موحداً يساعد المطور على بناء وتطوير التطبيقات بشكل أسرع وأكثر تنظيماً وأماناً.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Frameworks vs Libraries in Curriculum */}
        {activeTab === 'compare' && (
          <div className="space-y-3.5">
            {/* Core Distinction Explanation */}
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-900/50 text-xs text-purple-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚖️</span>
                <span>
                  <b>الفرق التقني الجوهري للامتحان:</b> هل الأداة <b>Framework</b> متكامل أم <b>Library</b> متخصصة؟
                </span>
              </div>
              <span className="text-[11px] font-bold text-purple-300 bg-purple-950/80 px-2.5 py-1 rounded-lg border border-purple-800">
                سؤال امتحاني معتمد
              </span>
            </div>

            {/* 5 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-2.5">
              {/* 1. Angular */}
              <div
                onClick={() => setSelectedFw('angular')}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedFw === 'angular'
                    ? 'ring-2 ring-red-500 bg-red-950/30 border-red-500 shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">🅰️</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-red-950 text-red-300 border border-red-800">
                      Framework
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-red-400 mb-0.5">Angular</h4>
                  <span className="text-[10px] text-slate-400 block mb-1.5 font-bold">من Google</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <b>إطار عمل ويب شامل:</b> يوفر التوجيه (Routing) والنماذج وحالة التطبيق بشكل مدمج دون الحاجة لأدوات خارجية.
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] text-red-300 font-bold">
                  👈 Framework متكامل
                </div>
              </div>

              {/* 2. React */}
              <div
                onClick={() => setSelectedFw('react')}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedFw === 'react'
                    ? 'ring-2 ring-sky-400 bg-sky-950/30 border-sky-400 shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">⚛️</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      UI Library
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-sky-400 mb-0.5">React</h4>
                  <span className="text-[10px] text-slate-400 block mb-1.5 font-bold">من Meta</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <b>مكتبة واجهات (Library):</b> متخصصة فقط في بناء وتحديث واجهة المستخدم بالمكونات (Components)، وتستدعي مكتبات مساعدة للتوجيه.
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] text-sky-300 font-bold">
                  👈 Library وليست Framework
                </div>
              </div>

              {/* 3. Next.js */}
              <div
                onClick={() => setSelectedFw('next')}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedFw === 'next'
                    ? 'ring-2 ring-white bg-slate-800 border-white shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">▲</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-300 border border-slate-700">
                      Framework
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-white mb-0.5">Next.js</h4>
                  <span className="text-[10px] text-slate-400 block mb-1.5 font-bold">مبني فوق React</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <b>إطار عمل لتطبيقات React:</b> يحل نقص React فيضيف التوجيه (Routing) والتصيير على الخادم (SSR) لسرعة الأرشفة ومحركات البحث.
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] text-slate-200 font-bold">
                  👈 Framework فوق React
                </div>
              </div>

              {/* 4. Vue.js */}
              <div
                onClick={() => setSelectedFw('vue')}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedFw === 'vue'
                    ? 'ring-2 ring-emerald-400 bg-emerald-950/30 border-emerald-400 shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">💚</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                      Progressive
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-emerald-400 mb-0.5">Vue.js</h4>
                  <span className="text-[10px] text-slate-400 block mb-1.5 font-bold">إطار عمل تدريجي</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <b>إطار عمل مرن:</b> يسمح ببناء واجهات الويب بشكل تدريجي؛ من إضافة ميزة صغيرة وحتى بناء تطبيقات SPA متكاملة.
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] text-emerald-300 font-bold">
                  👈 Progressive Framework
                </div>
              </div>

              {/* 5. Bootstrap (CSS Framework) */}
              <div
                onClick={() => setSelectedFw('bootstrap')}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedFw === 'bootstrap'
                    ? 'ring-2 ring-indigo-400 bg-indigo-950/30 border-indigo-400 shadow-lg'
                    : 'bg-slate-900/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl">🎨</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                      CSS Framework
                    </span>
                  </div>
                  <h4 className="font-extrabold text-xs text-indigo-300 mb-0.5">Bootstrap</h4>
                  <span className="text-[10px] text-slate-400 block mb-1.5 font-bold">أطر عمل التصميم</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    <b>إطار عمل لتنسيق الواجهات:</b> يوفر نظام شبكي متجاوب (Grid System) وعناصر جاهزة (أزرار، قوائم، بطاقات) تتكيف تلقائياً مع الشاشات.
                  </p>
                </div>
                <div className="mt-2 pt-1.5 border-t border-slate-800/80 text-[10px] text-indigo-300 font-bold">
                  👈 CSS Framework
                </div>
              </div>
            </div>

            {/* Inversion of Control Rule */}
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-2.5">
              <span className="text-amber-400 text-base">📌</span>
              <div className="leading-relaxed">
                <span className="font-bold text-amber-300">قاعدة الامتحان الذهبية (مبدأ التحكم المعكوس Inversion of Control): </span>
                في <b>المكتبة (Library)</b> أنت المطور وأنت من يستدعي دوالها وقتما تحب، بينما في <b>إطار العمل (Framework)</b> هو الذي يفرض القواعد والهيكل المعماري ويستدعي الكود الخاص بك داخل قوالبه.
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Component Power & 5 Benefits */}
        {activeTab === 'components' && (
          <div className="space-y-3.5">
            {/* Interactive Component Lab */}
            <div className="p-3.5 rounded-xl border bg-slate-900/80 border-slate-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>معمل عملي: قوة المكونات القابلة لإعادة الاستخدام (Reusable Components)</span>
                </span>
                {/* Switchable Component */}
                <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-lg border border-slate-800 text-[10px]">
                  <button
                    onClick={() => setReusedComponent('login')}
                    className={`px-2.5 py-1 rounded font-bold ${
                      reusedComponent === 'login' ? 'bg-sky-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    زرار تسجيل دخول &lt;LoginBtn /&gt;
                  </button>
                  <button
                    onClick={() => setReusedComponent('card')}
                    className={`px-2.5 py-1 rounded font-bold ${
                      reusedComponent === 'card' ? 'bg-sky-600 text-white' : 'text-slate-400'
                    }`}
                  >
                    بطاقة طالب &lt;StudentCard /&gt;
                  </button>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-2.5">
                بدل ما نكتب كود العنصر ونكرره في كل صفحة يدوياً، نبرمج <b>مكوناً واحداً (Component)</b> ونستدعيه بسطر واحد في مئات الصفحات:
              </p>

              {/* Simulated 3 Pages */}
              <div className="grid grid-cols-3 gap-3 text-center font-mono text-[11px]">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1.5 text-[10px] font-sans font-bold">الصفحة الرئيسية (Home)</span>
                  {reusedComponent === 'login' ? (
                    <span className="inline-block px-3 py-1 rounded bg-blue-600 text-white font-bold shadow">
                      &lt;LoginBtn /&gt;
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded bg-purple-600 text-white font-bold shadow">
                      &lt;StudentCard id="123" /&gt;
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1.5 text-[10px] font-sans font-bold">بوابة النتائج (Portal)</span>
                  {reusedComponent === 'login' ? (
                    <span className="inline-block px-3 py-1 rounded bg-blue-600 text-white font-bold shadow">
                      &lt;LoginBtn /&gt;
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded bg-purple-600 text-white font-bold shadow">
                      &lt;StudentCard id="123" /&gt;
                    </span>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-400 block mb-1.5 text-[10px] font-sans font-bold">لوحة الإدارة (Admin)</span>
                  {reusedComponent === 'login' ? (
                    <span className="inline-block px-3 py-1 rounded bg-blue-600 text-white font-bold shadow">
                      &lt;LoginBtn /&gt;
                    </span>
                  ) : (
                    <span className="inline-block px-3 py-1 rounded bg-purple-600 text-white font-bold shadow">
                      &lt;StudentCard id="123" /&gt;
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* The 5 Official Curriculum Benefits */}
            <div>
              <div className="text-xs font-extrabold text-amber-300 mb-2 flex items-center gap-1.5">
                <span>⭐</span>
                <span>لماذا نستخدم الـ Frameworks؟ (أهم ٥ فوائد معتمدة للامتحان الوزاري):</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-2 text-center text-xs">
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Clock className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                  <span className="font-bold text-slate-100 block text-xs">١. توفير الوقت</span>
                  <span className="text-[10px] text-slate-400">بدء سريع بهيكل جاهز</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Repeat className="w-5 h-5 text-sky-400 mx-auto mb-1" />
                  <span className="font-bold text-slate-100 block text-xs">٢. إعادة الاستخدام</span>
                  <span className="text-[10px] text-slate-400">مكونات مشتركة</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <FolderTree className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                  <span className="font-bold text-slate-100 block text-xs">٣. تنظيم الكود</span>
                  <span className="text-[10px] text-slate-400">هيكلة موحدة للمشروع</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                  <Building2 className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                  <span className="font-bold text-slate-100 block text-xs">٤. تطبيقات عملاقة</span>
                  <span className="text-[10px] text-slate-400">إدارة التوسع والتعقيد</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 col-span-2 md:col-span-1">
                  <ShieldCheck className="w-5 h-5 text-rose-400 mx-auto mb-1" />
                  <span className="font-bold text-slate-100 block text-xs">٥. تقليل التكرار</span>
                  <span className="text-[10px] text-slate-400">وداعاً لكتابة نفس الكود</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Footer Note */}
      <div className="mt-3 pt-2.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
        <span className="font-bold text-slate-300">
          💡 الخلاصة: الـ Framework هو الهيكل والبيئة الجاهزة التي تجعل التطوير سريعاً ومنظماً وآمناً.
        </span>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              if (activeTab === 'analogy') setActiveTab('compare');
              else if (activeTab === 'compare') setActiveTab('components');
              else setActiveTab('analogy');
            }}
            className="text-[11px] font-bold text-blue-400 hover:text-blue-300 flex items-center gap-1 bg-blue-950/40 px-3 py-1.5 rounded-lg border border-blue-900/40"
          >
            <span>{activeTab === 'components' ? 'العودة للبداية' : 'المحطة التالية'}</span>
            <ArrowRight className="w-3.5 h-3.5 rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
}
