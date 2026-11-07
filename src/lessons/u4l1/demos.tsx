import { useState } from 'react';

/* =========================================================================
   1. MediaFormatExplorerDemo: مستكشف صيغ الصور والوسائط
   ========================================================================= */
export function MediaFormatExplorerDemo() {
  const [format, setFormat] = useState<'jpeg' | 'png' | 'webp' | 'svg'>('webp');
  const [quality, setQuality] = useState<number>(80);

  // Approximate file sizes based on format and quality
  const getCalculatedSize = () => {
    if (format === 'svg') return 1.8; // SVG is constant tiny vector code
    if (format === 'png') return 480; // PNG lossless is large
    if (format === 'webp') return Math.round((quality / 100) * 110 + 20);
    // JPEG
    return Math.round((quality / 100) * 180 + 35);
  };

  const fileSizeKb = getCalculatedSize();
  const loadTimeMs = format === 'svg' ? 12 : Math.round(fileSizeKb * 1.8 + 45);

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#090e1c', borderColor: '#1e293b' }}>
      {/* Format Selector Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b" style={{ borderColor: '#1e293b' }}>
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300">اختر صيغة الصورة:</span>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${format === 'webp' ? 'bg-emerald-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setFormat('webp')}
          >
            🌟 WebP (المعيار الحديث)
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${format === 'jpeg' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setFormat('jpeg')}
          >
            📸 JPEG (صور فوتوغرافية)
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${format === 'png' ? 'bg-purple-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setFormat('png')}
          >
            🖼️ PNG (شفافية ونقاء)
          </button>
          <button
            className={`btn text-xs py-1.5 px-3 rounded-xl font-bold transition-all ${format === 'svg' ? 'bg-orange-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
            onClick={() => setFormat('svg')}
          >
            📐 SVG (رسوم متجهة للشعارات)
          </button>
        </div>
        <div className="text-xs font-mono text-sky-400">
          نوع الوسيط: {format === 'svg' ? 'Vector Graphics' : 'Raster Bitmap'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Controls & Metrics */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-4">
          <div className="text-xs font-bold text-slate-300 flex justify-between items-center">
            <span>⚙️ خصائص الضغط والأداء:</span>
            <span className="pill text-[10px] font-bold bg-sky-950 text-sky-300 border-sky-800">
              {format === 'svg' ? 'معادلات رياضية' : format === 'png' ? 'Lossless بدون فقد' : 'Lossy مع فقد مدروس'}
            </span>
          </div>

          {format !== 'svg' && format !== 'png' && (
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-300 mb-1.5">
                <span>معامل جودة الضغط (Quality):</span>
                <span className="font-mono text-amber-400">{quality}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={quality}
                onChange={e => setQuality(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>10% (حجم متناهي الصغر مع تشوه)</span>
                <span>100% (أعلى جودة مع حجم كبير)</span>
              </div>
            </div>
          )}

          {/* Performance Dashboard */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">📦 حجم الملف المتوقع:</span>
              <span className="text-base font-extrabold font-mono text-emerald-400">
                {fileSizeKb} <span className="text-xs text-slate-400">KB</span>
              </span>
            </div>
            <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 text-center">
              <span className="text-[11px] text-slate-400 block mb-1">⚡ زمن التحميل (4G):</span>
              <span className="text-base font-extrabold font-mono text-sky-400">
                {loadTimeMs} <span className="text-xs text-slate-400">ms</span>
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-slate-800 bg-slate-950/60 text-xs leading-relaxed text-slate-300">
            {format === 'webp' && (
              <p>
                <b>لماذا WebP؟</b> تدعم الشفافية والضغط الفائق؛ توفر 30% مساحة مقارنة بـ JPEG مع الحفاظ على الألوان الزاهية.
              </p>
            )}
            {format === 'jpeg' && (
              <p>
                <b>لماذا JPEG؟</b> ممتازة للصور الفوتوغرافية الطبيعية المعقدة؛ لا تدعم الشفافية وتعتمد ضغطاً بفقْد لتقليص الحجم.
              </p>
            )}
            {format === 'png' && (
              <p>
                <b>لماذا PNG؟</b> تدعم الشفافية التامة وحواف النصوص الحادة لأنها لا تحذف أي بكسل (Lossless)، لكن حجمها أكبر.
              </p>
            )}
            {format === 'svg' && (
              <p>
                <b>لماذا SVG؟</b> كود XML رياضي يرسم خطوطاً ومنحنيات، تحتفظ بحدتها المطلقة عند أي تكبير مهما كانت كثافة الشاشة.
              </p>
            )}
          </div>
        </div>

        {/* Live Visual Simulation */}
        <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 flex flex-col justify-center items-center min-h-[280px]">
          <div className="text-xs font-bold text-slate-400 mb-3 w-full border-b pb-1.5 flex justify-between">
            <span>🖼️ محاكاة وضوح الصورة وتكبيرها (Zoom-in Simulation):</span>
            <span className="font-mono text-sky-300">Format: .{format}</span>
          </div>

          <div
            className="w-full max-w-[280px] h-[180px] rounded-2xl border-2 flex flex-col items-center justify-center p-4 transition-all relative overflow-hidden"
            style={{
              background: format === 'png' ? 'radial-gradient(#1e293b 2px, transparent 2px)' : 'linear-gradient(135deg, #1e1b4b 0%, #0c1a30 100%)',
              backgroundSize: format === 'png' ? '14px 14px' : undefined,
              borderColor: format === 'svg' ? '#f97316' : format === 'webp' ? '#10b981' : format === 'jpeg' ? '#38bdf8' : '#a855f7',
              filter: format === 'jpeg' && quality < 40 ? 'blur(1px) contrast(1.2)' : undefined,
            }}
          >
            {format === 'svg' ? (
              <svg className="w-20 h-20 text-orange-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            ) : (
              <div className="text-center">
                <div className="text-4xl mb-2">{format === 'png' ? '💎' : '🌄'}</div>
                <div className="text-xs font-bold text-white">
                  {format === 'png' ? 'شعار شفاف ونقي (PNG)' : `صورة طبيعية (.${format})`}
                </div>
              </div>
            )}

            <div className="absolute bottom-2 left-2 text-[10px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300">
              {format === 'svg' ? 'Scale: ∞ Vector' : `Quality: ${format === 'png' ? '100% Lossless' : `${quality}%`}`}
            </div>
          </div>

          <div className="text-[11px] text-slate-400 mt-3 text-center">
            {format === 'svg'
              ? '✓ حواف حادة وناعمة بنسبة 100% مهما كبّرت الشاشة.'
              : format === 'jpeg' && quality < 40
              ? '⚠️ تشوه ملحوظ في الحواف وتكتل بالبكسلات بسبب الضغط الزائد.'
              : '✓ وضوح ممتاز مع حجم ملف متوازن ومناسب لتحميل سريع.'}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. AudioVideoAttributesLabDemo: مختبر خصائص الفيديو والصوت في HTML5
   ========================================================================= */
export function AudioVideoAttributesLabDemo() {
  const [controls, setControls] = useState(true);
  const [autoplay, setAutoplay] = useState(false);
  const [muted, setMuted] = useState(true);
  const [loop, setLoop] = useState(false);
  const [resolution, setResolution] = useState<'480p' | '720p' | '1080p' | '4K'>('1080p');

  const bitrateMap = {
    '480p': { mbPerMin: 12, fps: 24, label: 'جودة قياسية (SD) - باقات الموبايل' },
    '720p': { mbPerMin: 28, fps: 30, label: 'عالية الدقة (HD) - توازن وسرعة' },
    '1080p': { mbPerMin: 65, fps: 60, label: 'فائقة الدقة (Full HD) - حواسيب وشاشات' },
    '4K': { mbPerMin: 240, fps: 60, label: 'سينمائية (Ultra HD) - تحتاج نت سريع جداً' },
  };

  const selected = bitrateMap[resolution];

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#080d1a', borderColor: '#1e293b' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* HTML5 Attributes Toggle */}
        <div className="p-4 rounded-xl border bg-slate-900/80 border-slate-800 space-y-3">
          <div className="text-xs font-bold text-sky-400 border-b pb-1.5 flex justify-between">
            <span>🎛️ خصائص وسم &lt;video&gt; في HTML5</span>
            <span className="text-[11px] text-slate-400">خصائص برمجية</span>
          </div>

          <div className="space-y-2 text-xs">
            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <span className="font-bold text-slate-200">
                controls <span className="text-slate-400 font-normal">(إظهار شريط التحكم للمستخدم)</span>
              </span>
              <input type="checkbox" checked={controls} onChange={e => setControls(e.target.checked)} className="accent-sky-500" />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <span className="font-bold text-slate-200">
                muted <span className="text-slate-400 font-normal">(كتم الصوت تلقائياً)</span>
              </span>
              <input type="checkbox" checked={muted} onChange={e => setMuted(e.target.checked)} className="accent-sky-500" />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <span className="font-bold text-slate-200">
                autoplay <span className="text-slate-400 font-normal">(التشغيل التلقائي عند الفتح)</span>
              </span>
              <input type="checkbox" checked={autoplay} onChange={e => setAutoplay(e.target.checked)} className="accent-sky-500" />
            </label>

            <label className="flex items-center justify-between p-2 rounded-lg bg-slate-950 border border-slate-800 cursor-pointer">
              <span className="font-bold text-slate-200">
                loop <span className="text-slate-400 font-normal">(إعادة التشغيل بعد الانتهاء للأبد)</span>
              </span>
              <input type="checkbox" checked={loop} onChange={e => setLoop(e.target.checked)} className="accent-sky-500" />
            </label>
          </div>

          {/* Generated Code Snippet */}
          <div className="pt-2">
            <div className="text-[11px] font-bold text-slate-400 mb-1">الكود الناتج في الصفحة:</div>
            <pre className="p-2.5 rounded-lg bg-black/70 font-mono text-[11px] text-emerald-400 overflow-x-auto text-left ltr">
{`<video src="lecture.mp4"
  ${controls ? 'controls ' : ''}${muted ? 'muted ' : ''}${autoplay ? 'autoplay ' : ''}${loop ? 'loop ' : ''}poster="cover.webp">
  <source src="lecture.mp4" type="video/mp4">
  متصفحك لا يدعم وسم الفيديو.
</video>`}
            </pre>
          </div>
        </div>

        {/* Resolution & Bandwidth Consumption Lab */}
        <div className="p-4 rounded-xl border bg-slate-900/60 border-slate-800 space-y-3 text-xs">
          <div className="text-xs font-bold text-amber-400 border-b pb-1.5 flex justify-between">
            <span>📊 دقة الفيديو واستهلاك باقة الإنترنت</span>
            <span className="font-mono text-slate-400">{resolution}</span>
          </div>

          <div className="flex gap-2">
            {(['480p', '720p', '1080p', '4K'] as const).map(res => (
              <button
                key={res}
                className={`flex-1 py-1.5 rounded-lg font-bold font-mono text-xs transition-all ${resolution === res ? 'bg-amber-600 text-white shadow-md' : 'bg-slate-800 text-slate-400'}`}
                onClick={() => setResolution(res)}
              >
                {res}
              </button>
            ))}
          </div>

          <div className="p-3 rounded-xl border border-slate-800 bg-slate-950 space-y-2">
            <div className="text-slate-300 font-bold">{selected.label}</div>
            <div className="grid grid-cols-2 gap-2 text-center pt-1">
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">استهلاك الدقيقة:</span>
                <span className="text-sm font-extrabold text-amber-400 font-mono">{selected.mbPerMin} MB/min</span>
              </div>
              <div className="p-2 rounded bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-slate-400 block">معدل الإطارات:</span>
                <span className="text-sm font-extrabold text-sky-400 font-mono">{selected.fps} FPS</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-sky-950/30 border border-sky-800 text-slate-300 leading-relaxed text-[11px]">
            💡 <b>قاعدة هندسة الوسائط:</b> لتوفير تجربة مستخدم ممتازة، نوفر وسوم <code>&lt;source&gt;</code> متعددة بدقات مختلفة، ليقوم المتصفح تلقائياً باختيار الدقة التي تناسب سرعة اتصال المستخدم.
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. TextbookGlossaryU4L1: معجم مصطلحات كتاب الوزارة المعتمدة
   ========================================================================= */
export function TextbookGlossaryU4L1() {
  const [filter, setFilter] = useState('');
  const terms = [
    {
      term: 'الوسائط المتعددة (Multimedia)',
      def: 'دمج منظم بين عناصر النص المكتوب، الصور الثابتة، الرسوم التوضيحية، الصوت الرقمي، ومقاطع الفيديو لعرض المعلومات بطريقة تفاعلية ومؤثرة.',
      tag: 'مفهوم عام',
    },
    {
      term: 'الصور النقطية (Raster / Bitmap)',
      def: 'صور تتكون من شبكة من النقاط الملونة الصغيرة تُسمى بكسلات (Pixels). تفقد حدتها ونعومتها وتتبكسل عند تكبيرها، ومثالها JPEG و PNG.',
      tag: 'صور',
    },
    {
      term: 'الصور المتجهة (Vector Graphics)',
      def: 'رسومات مبنية على معادلات رياضية وهندسية ونقاط إحداثية، تحتفظ بنقائها التام وأطرافها الحادة مهما تم تكبيرها، ومثالها SVG.',
      tag: 'صور',
    },
    {
      term: 'الضغط بفقدان بيانات (Lossy Compression)',
      def: 'خوارزمية ضغط تحذف بعض الترددات والتفاصيل الدقيقة غير الملحوظة للإدراك البشري لتحقيق تقليص هائل في حجم الملف، ومثالها JPEG و MP3.',
      tag: 'ضغط',
    },
    {
      term: 'الضغط بدون فقدان بيانات (Lossless Compression)',
      def: 'خوارزمية ضغط تختزل البيانات المتكررة مع إمكانية استرجاع الملف الأصلي بتطابق تام 100% دون حذف أي تفصيلة، ومثالها PNG و FLAC.',
      tag: 'ضغط',
    },
    {
      term: 'معدل العينات (Sample Rate)',
      def: 'عدد العينات المقاسة من الموجة الصوتية التناظرية في الثانية الواحدة ويقاس بالهرتز (Hz)، ويحدد دقة ونقاء الصوت الرقمي.',
      tag: 'صوت',
    },
    {
      term: 'معدل الإطارات (Frame Rate - FPS)',
      def: 'عدد الصور الثابتة (الإطارات) التي يتم عرضها في الثانية الواحدة لخلق إيهام الحركة السلسة في الفيديو الرقمي.',
      tag: 'فيديو',
    },
    {
      term: 'صيغة WebP',
      def: 'صيغة صور حديثة مخصصة لشبكة الويب، توفر ضغطاً متفوقاً يدعم الشفافية والرسوم المتحركة بحجم أصغر بحوالي 30% من الصيغ التقليدية.',
      tag: 'ويب',
    },
  ];

  const filtered = terms.filter(t => t.term.includes(filter) || t.def.includes(filter) || t.tag.includes(filter));

  return (
    <div className="rounded-2xl border p-4 sm:p-5 shadow-lg" style={{ background: '#0a0f1d', borderColor: '#1e293b' }}>
      <div className="flex items-center justify-between mb-3 border-b pb-2" style={{ borderColor: '#1e293b' }}>
        <h4 className="font-extrabold text-sm text-sky-400 flex items-center gap-2">
          <span>📖 معجم مصطلحات كتاب الوزارة المعتمدة للوسائط المتعددة</span>
        </h4>
        <input
          type="text"
          placeholder="ابحث عن مصطلح..."
          className="field text-xs py-1 px-3 w-48 font-bold"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[360px] overflow-y-auto">
        {filtered.map((t, i) => (
          <div key={i} className="p-3 rounded-xl border bg-slate-900/90 border-slate-800 text-right">
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-extrabold text-xs text-white">{t.term}</span>
              <span className="pill text-[10px] font-bold py-0.5 px-2 bg-sky-950 text-sky-300 border-sky-800">
                {t.tag}
              </span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">{t.def}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

