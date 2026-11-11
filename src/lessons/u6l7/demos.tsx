import { useState } from 'react';
import { arNum } from '../../kit/blocks';

/* =========================================================================
   1. Digitization 3-Stage Workflow Lab (معمل محاكاة خطوات الرقمنة الثلاث)
   ========================================================================= */

// Sample 8x8 bitmap shapes (represented as brightness levels 0..3 for 2-bit quantization)
const SAMPLE_SHAPES: Record<string, { name: string; icon: string; matrix: number[][] }> = {
  rose: {
    name: 'وردة 🌹',
    icon: '🌹',
    matrix: [
      [0, 0, 1, 2, 2, 1, 0, 0],
      [0, 2, 3, 3, 3, 3, 2, 0],
      [1, 3, 2, 3, 3, 2, 3, 1],
      [0, 2, 3, 3, 3, 3, 2, 0],
      [0, 0, 1, 2, 2, 1, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
      [0, 1, 2, 2, 2, 1, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0],
    ],
  },
  letterA: {
    name: 'حرف A 🔤',
    icon: '🅰️',
    matrix: [
      [0, 0, 0, 3, 3, 0, 0, 0],
      [0, 0, 3, 1, 1, 3, 0, 0],
      [0, 3, 1, 0, 0, 1, 3, 0],
      [0, 3, 1, 0, 0, 1, 3, 0],
      [0, 3, 3, 3, 3, 3, 3, 0],
      [0, 3, 1, 0, 0, 1, 3, 0],
      [0, 3, 1, 0, 0, 1, 3, 0],
      [0, 3, 1, 0, 0, 1, 3, 0],
    ],
  },
  smile: {
    name: 'وجه مبتسم 😊',
    icon: '😊',
    matrix: [
      [0, 0, 2, 2, 2, 2, 0, 0],
      [0, 2, 0, 0, 0, 0, 2, 0],
      [2, 0, 3, 0, 0, 3, 0, 2],
      [2, 0, 0, 0, 0, 0, 0, 2],
      [2, 0, 3, 0, 0, 3, 0, 2],
      [2, 0, 0, 3, 3, 0, 0, 2],
      [0, 2, 0, 0, 0, 0, 2, 0],
      [0, 0, 2, 2, 2, 2, 0, 0],
    ],
  },
  heart: {
    name: 'قلب ❤️',
    icon: '❤️',
    matrix: [
      [0, 2, 2, 0, 0, 2, 2, 0],
      [2, 3, 3, 2, 2, 3, 3, 2],
      [2, 3, 3, 3, 3, 3, 3, 2],
      [2, 3, 3, 3, 3, 3, 3, 2],
      [0, 2, 3, 3, 3, 3, 2, 0],
      [0, 0, 2, 3, 3, 2, 0, 0],
      [0, 0, 0, 2, 2, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  },
};

export function DigitizationWorkflowLab() {
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedShape, setSelectedShape] = useState<string>('rose');
  const [resolution, setResolution] = useState<number>(8); // 4, 8, 16
  const [bitDepth, setBitDepth] = useState<1 | 2 | 4 | 8>(2);
  const [hoveredPixel, setHoveredPixel] = useState<{ r: number; c: number; val: number } | null>(null);

  const currentShape = SAMPLE_SHAPES[selectedShape] || SAMPLE_SHAPES.rose;
  const matrix = currentShape.matrix;

  // Compute total pixels and size in bits
  const totalPixels = resolution * resolution;
  const totalBits = totalPixels * bitDepth;
  const totalBytes = totalBits / 8;

  // Color mapping based on bitDepth & value
  const getPixelColor = (val: number) => {
    if (bitDepth === 1) {
      return val > 1 ? '#ffffff' : '#111827';
    }
    if (bitDepth === 2) {
      // 4 levels: 0=darkest, 3=brightest
      const colors = ['#111827', '#4b5563', '#9ca3af', '#f3f4f6'];
      return colors[Math.min(val, 3)];
    }
    if (bitDepth === 4) {
      const shade = Math.round((val / 3) * 255);
      return `rgb(${shade}, ${shade}, ${shade})`;
    }
    // 8-bit
    const shade = Math.round((val / 3) * 255);
    return `rgb(${shade}, ${shade}, ${shade})`;
  };

  const getBinaryCode = (val: number) => {
    if (bitDepth === 1) return val > 1 ? '1' : '0';
    if (bitDepth === 2) return Math.min(val, 3).toString(2).padStart(2, '0');
    if (bitDepth === 4) return Math.min(val * 5, 15).toString(2).padStart(4, '0');
    return Math.min(val * 85, 255).toString(2).padStart(8, '0');
  };

  return (
    <div className="card mt-3">
      {/* Top Bar: Steps Stepper */}
      <div className="flex gap-2 items-center justify-between border-b border-border pb-3 mb-4 flex-wrap">
        <div className="flex gap-2 items-center">
          <button
            className={`btn ${activeStep === 1 ? 'btn-primary' : ''}`}
            onClick={() => setActiveStep(1)}
          >
            <span className="font-bold">١ · أخذ العينات (Sampling)</span>
          </button>
          <button
            className={`btn ${activeStep === 2 ? 'btn-primary' : ''}`}
            onClick={() => setActiveStep(2)}
          >
            <span className="font-bold">٢ · التكميم (Quantization)</span>
          </button>
          <button
            className={`btn ${activeStep === 3 ? 'btn-primary' : ''}`}
            onClick={() => setActiveStep(3)}
          >
            <span className="font-bold">٣ · الترميز (Encoding)</span>
          </button>
        </div>

        {/* Shape selector */}
        <div className="flex gap-1 items-center">
          <span className="text-sm font-bold text-muted">الشكل:</span>
          {Object.entries(SAMPLE_SHAPES).map(([key, s]) => (
            <button
              key={key}
              className={`pill text-xs cursor-pointer ${selectedShape === key ? 'pill-primary font-bold' : ''}`}
              onClick={() => setSelectedShape(key)}
            >
              {s.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
        {/* Left / Center: Interactive Canvas / Grid */}
        <div className="md:col-span-7 bg-[var(--surface-2)] p-4 rounded-xl border border-border flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-2 text-sm font-bold">
            <span className="text-primary flex items-center gap-1">
              {activeStep === 1 && '🔍 شبكة المعاينة وتقسيم البكسلات'}
              {activeStep === 2 && '🎨 مستويات السطوع والتدرج اللوني'}
              {activeStep === 3 && '🔢 مصفوفة الأكواد الثنائية المخزنة'}
            </span>
            <span className="text-muted text-xs">
              {resolution} × {resolution} بكسل ({arNum(totalPixels)} بكسل إجمالي)
            </span>
          </div>

          {/* Grid Render */}
          <div
            className="grid gap-[2px] bg-slate-800 p-2 rounded-lg shadow-inner select-none transition-all"
            style={{
              gridTemplateColumns: `repeat(${resolution}, minmax(0, 1fr))`,
              width: 'min(100%, 340px)',
              aspectRatio: '1/1',
            }}
          >
            {Array.from({ length: resolution }).map((_, r) =>
              Array.from({ length: resolution }).map((_, c) => {
                // Map to 8x8 matrix
                const mr = Math.floor((r / resolution) * 8);
                const mc = Math.floor((c / resolution) * 8);
                const val = matrix[mr]?.[mc] ?? 0;
                const bin = getBinaryCode(val);
                const bg = getPixelColor(val);
                const isHovered = hoveredPixel?.r === r && hoveredPixel?.c === c;

                return (
                  <div
                    key={`${r}-${c}`}
                    onMouseEnter={() => setHoveredPixel({ r, c, val })}
                    onMouseLeave={() => setHoveredPixel(null)}
                    className="flex items-center justify-center text-[10px] font-mono cursor-pointer transition-transform hover:scale-110 hover:z-10 rounded-[2px]"
                    style={{
                      backgroundColor: bg,
                      color: val > 1 ? '#000000' : '#ffffff',
                      outline: isHovered ? '2px solid var(--pen-blue)' : undefined,
                    }}
                    title={`Pixel (${c}, ${r}): Level ${val} -> ${bin}`}
                  >
                    {activeStep === 2 && resolution <= 8 && <span>{val}</span>}
                    {activeStep === 3 && resolution <= 8 && (
                      <span className="text-[9px] font-bold">{bin}</span>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Pixel details preview */}
          <div className="mt-3 p-2 w-full bg-[var(--surface)] border border-border rounded-lg text-xs flex justify-between items-center">
            {hoveredPixel ? (
              <>
                <span>
                  بكسل: <b>(س: {hoveredPixel.c}، ص: {hoveredPixel.r})</b>
                </span>
                <span>
                  مستوى السطوع: <b className="text-primary">{hoveredPixel.val}</b>
                </span>
                <span>
                  الكود الثنائي: <b className="font-mono text-green-500">{getBinaryCode(hoveredPixel.val)}</b>
                </span>
              </>
            ) : (
              <span className="text-muted text-center w-full">
                💡 حرّك الفأرة فوق أي بكسل لمعاينة مستواه الرقمي وكوده الثنائي
              </span>
            )}
          </div>
        </div>

        {/* Right / Controls & Educational Info */}
        <div className="md:col-span-5 flex flex-col gap-3">
          {/* Step 1 Controls */}
          {activeStep === 1 && (
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-1 text-sm">
                <span>١. أخذ العينات (Sampling) والدقة (Resolution)</span>
              </h4>
              <p className="text-xs text-muted mb-3 leading-relaxed">
                يتم تقطيع المشهد التناظري المستمر إلى شبكة منتظمة من النقاط تسمى <b>البكسلات (Pixels)</b>. كثافة هذه النقاط هي <b>الدقة (Resolution)</b> وتُقاس بوحدة <b>dpi</b>.
              </p>
              <div className="space-y-2">
                <label className="text-xs font-bold block">
                  دقة شبكة التقسيم (Grid Resolution):
                </label>
                <div className="flex gap-2">
                  {[4, 8, 16].map(res => (
                    <button
                      key={res}
                      onClick={() => setResolution(res)}
                      className={`btn text-xs flex-1 ${resolution === res ? 'btn-primary' : ''}`}
                    >
                      {res} × {res}
                    </button>
                  ))}
                </div>
                <div className="p-2 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400 mt-2">
                  💡 <b>ملاحظة كتاب الوزارة:</b> كلما زادت الدقة (Resolution)، أصبحت الصورة أكثر سلاسة واقتربت من الشكل الأصلي، ولكن يزداد عدد البكسلات وحجم التخزين.
                </div>
              </div>
            </div>
          )}

          {/* Step 2 Controls */}
          {activeStep === 2 && (
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-1 text-sm">
                <span>٢. التكميم (Quantization) والتدرج (Gradation)</span>
              </h4>
              <p className="text-xs text-muted mb-3 leading-relaxed">
                تحويل شدة الإضاءة واللون في كل بكسل إلى <b>قيمة رقمية صحيحة</b> مقسمة لعدة مستويات محددة وفق قاعدة ثابتة. عدد هذه المستويات يسمى <b>التدرج (Gradation)</b>.
              </p>
              <div className="space-y-2">
                <label className="text-xs font-bold block">
                  عمق البت وعدد التدرجات ($2^n$):
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setBitDepth(1)}
                    className={`btn text-xs ${bitDepth === 1 ? 'btn-primary' : ''}`}
                  >
                    1-Bit (مستويان: أبيض/أسود)
                  </button>
                  <button
                    onClick={() => setBitDepth(2)}
                    className={`btn text-xs ${bitDepth === 2 ? 'btn-primary' : ''}`}
                  >
                    2-Bit (٤ مستويات: 0..3)
                  </button>
                  <button
                    onClick={() => setBitDepth(4)}
                    className={`btn text-xs ${bitDepth === 4 ? 'btn-primary' : ''}`}
                  >
                    4-Bit (١٦ مستوى)
                  </button>
                  <button
                    onClick={() => setBitDepth(8)}
                    className={`btn text-xs ${bitDepth === 8 ? 'btn-primary' : ''}`}
                  >
                    8-Bit (٢٥٦ مستوى: 0..255)
                  </button>
                </div>
                <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded text-xs text-amber-400 mt-2">
                  📌 عند تخصيص <b>8 بت</b> لكل بكسل، يكون لدينا $2^8 = 256$ تدرجاً مختلفاً من الأسود التام (0) إلى الأبيض التام (255).
                </div>
              </div>
            </div>
          )}

          {/* Step 3 Controls */}
          {activeStep === 3 && (
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl">
              <h4 className="font-bold text-primary mb-2 flex items-center gap-1 text-sm">
                <span>٣. الترميز (Encoding) وحجم الملف</span>
              </h4>
              <p className="text-xs text-muted mb-3 leading-relaxed">
                التعبير عن كل قيمة مقدرة كمياً بأرقام ثنائية <b>(0 و 1)</b> حتى يستطيع المعالج والذاكرة تخزينها ومعالجتها.
              </p>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between border-b border-border py-1">
                  <span className="text-muted">إجمالي عدد البكسلات:</span>
                  <span className="font-bold">{resolution} × {resolution} = {totalPixels} بكسل</span>
                </div>
                <div className="flex justify-between border-b border-border py-1">
                  <span className="text-muted">البتات لكل بكسل:</span>
                  <span className="font-bold">{bitDepth} بت</span>
                </div>
                <div className="flex justify-between border-b border-border py-1">
                  <span className="text-muted">الحجم الإجمالي بالبت:</span>
                  <span className="font-bold text-primary">{totalBits} بت</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-muted">الحجم بالبايت:</span>
                  <span className="font-bold text-green-500">{totalBytes} بايت ({totalBytes * 8} بت)</span>
                </div>
              </div>
              <div className="p-2 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400 mt-2">
                ✅ كما في <b>تمرين ص 91 بكتاب الوزارة</b>، تتحول المصفوفة إلى سلسلة ثنائية من الأصفار والآحاد تُحفظ في ملف الصورة.
              </div>
            </div>
          )}

          {/* Summary Mini-Card */}
          <div className="p-3 bg-[var(--surface-2)] border border-border rounded-xl text-xs space-y-1">
            <div className="font-bold text-foreground">💡 القانون الذهبي للرقمنة:</div>
            <div className="text-muted">
              كلما زادت <b>الدقة</b> (Resolution) و<b>التدرج</b> (Gradation)، كلما زادت نعومة وجودة الصورة، ولكن <b>زاد حجم الملف في الذاكرة</b>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. Raster vs Vector Microscope Lab (معمل المجهر: النقطي مقابل المتجهات)
   ========================================================================= */

export function RasterVsVectorLab() {
  const [zoom, setZoom] = useState<number>(1);
  const [targetShape, setTargetShape] = useState<'circle' | 'letterR' | 'flower'>('flower');

  return (
    <div className="card mt-3">
      {/* Header & Controls */}
      <div className="flex gap-4 items-center justify-between border-b border-border pb-3 mb-4 flex-wrap">
        <div className="flex items-center gap-3">
          <span className="font-bold text-sm">قوة التكبير (Microscope Zoom):</span>
          <div className="flex gap-1">
            {[1, 2, 4, 8, 16].map(z => (
              <button
                key={z}
                onClick={() => setZoom(z)}
                className={`btn text-xs ${zoom === z ? 'btn-primary' : ''}`}
              >
                {z}x {z > 1 ? `(${z * 100}%)` : '(الأصلي)'}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm font-bold text-muted">الشكل المعروض:</span>
          <button
            onClick={() => setTargetShape('flower')}
            className={`pill text-xs ${targetShape === 'flower' ? 'pill-primary font-bold' : ''}`}
          >
            وردة 🌸
          </button>
          <button
            onClick={() => setTargetShape('letterR')}
            className={`pill text-xs ${targetShape === 'letterR' ? 'pill-primary font-bold' : ''}`}
          >
            حرف R 🔤
          </button>
          <button
            onClick={() => setTargetShape('circle')}
            className={`pill text-xs ${targetShape === 'circle' ? 'pill-primary font-bold' : ''}`}
          >
            دائرة وشعار 🎯
          </button>
        </div>
      </div>

      {/* Side-by-Side Microscope Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Raster / Bitmap Box */}
        <div className="p-4 bg-[var(--surface-2)] border-2 border-red-500/30 rounded-xl relative overflow-hidden flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-2">
            <span className="font-bold text-red-500 flex items-center gap-1 text-sm">
              <span>🖼️ التنسيق النقطي (Raster / Bitmap)</span>
            </span>
            <span className="pill pill-danger text-[11px]">Photoshop · Paint</span>
          </div>

          <div
            className="w-full h-52 bg-slate-900 border border-border rounded-lg flex items-center justify-center overflow-hidden relative"
            style={{ imageRendering: 'pixelated' }}
          >
            {/* Simulated Pixelated Content */}
            <div
              className="transition-transform duration-200 flex items-center justify-center"
              style={{
                transform: `scale(${zoom})`,
                imageRendering: 'pixelated',
              }}
            >
              {targetShape === 'flower' && (
                <div
                  className="grid grid-cols-8 gap-[1px] w-24 h-24 p-1 bg-black/40 rounded"
                  style={{ imageRendering: 'pixelated' }}
                >
                  {Array.from({ length: 64 }).map((_, i) => {
                    const row = Math.floor(i / 8);
                    const col = i % 8;
                    const isPetal =
                      (row >= 1 && row <= 6 && col >= 1 && col <= 6) &&
                      !(row === 1 && col === 1) && !(row === 1 && col === 6) &&
                      !(row === 6 && col === 1) && !(row === 6 && col === 6);
                    const isCenter = row >= 3 && row <= 4 && col >= 3 && col <= 4;
                    const bg = isCenter ? '#eab308' : isPetal ? '#ec4899' : 'transparent';
                    return (
                      <div
                        key={i}
                        className="w-full h-full"
                        style={{ backgroundColor: bg }}
                      />
                    );
                  })}
                </div>
              )}

              {targetShape === 'letterR' && (
                <div
                  className="text-6xl font-black font-sans select-none text-blue-400"
                  style={{
                    filter: zoom > 2 ? `blur(0.5px) contrast(20)` : 'none',
                    letterSpacing: '-2px',
                  }}
                >
                  R
                </div>
              )}

              {targetShape === 'circle' && (
                <div
                  className="w-20 h-20 rounded-full border-4 border-amber-400 bg-amber-500/20"
                  style={{
                    filter: zoom > 2 ? `contrast(50)` : 'none',
                  }}
                />
              )}
            </div>

            {/* Jaggies Warning Overlay when zoomed */}
            {zoom >= 4 && (
              <div className="absolute top-2 right-2 bg-red-600/90 text-white text-[10px] px-2 py-1 rounded font-bold shadow animate-pulse">
                ⚠️ تظهر التعرجات (Jaggies)!
              </div>
            )}
          </div>

          <div className="mt-3 text-xs text-muted w-full space-y-1">
            <div className="text-red-400 font-bold">
              • عند التكبير: تظهر الحواف متكسرة أو متعرجة (Jaggies).
            </div>
            <div>
              • يتكون من شبكة من النقاط (Pixels). مناسب للصور الواقعية والفوتوغرافية.
            </div>
          </div>
        </div>

        {/* Vector Box */}
        <div className="p-4 bg-[var(--surface-2)] border-2 border-green-500/30 rounded-xl relative overflow-hidden flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-2">
            <span className="font-bold text-green-500 flex items-center gap-1 text-sm">
              <span>📐 تنسيق المتجهات (Vector Format)</span>
            </span>
            <span className="pill pill-safe text-[11px]">Illustrator · SVG</span>
          </div>

          <div className="w-full h-52 bg-slate-900 border border-border rounded-lg flex items-center justify-center overflow-hidden relative">
            {/* Pure SVG Vector content */}
            <div
              className="transition-transform duration-200 flex items-center justify-center"
              style={{ transform: `scale(${zoom})` }}
            >
              {targetShape === 'flower' && (
                <svg width="96" height="96" viewBox="0 0 100 100" className="overflow-visible">
                  <circle cx="50" cy="30" r="16" fill="#ec4899" />
                  <circle cx="70" cy="50" r="16" fill="#ec4899" />
                  <circle cx="50" cy="70" r="16" fill="#ec4899" />
                  <circle cx="30" cy="50" r="16" fill="#ec4899" />
                  <circle cx="50" cy="50" r="12" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
                </svg>
              )}

              {targetShape === 'letterR' && (
                <svg width="80" height="80" viewBox="0 0 100 100" className="overflow-visible">
                  <text
                    x="50"
                    y="75"
                    fontSize="75"
                    fontWeight="900"
                    textAnchor="middle"
                    fill="#38bdf8"
                    fontFamily="sans-serif"
                  >
                    R
                  </text>
                </svg>
              )}

              {targetShape === 'circle' && (
                <svg width="80" height="80" viewBox="0 0 100 100" className="overflow-visible">
                  <circle cx="50" cy="50" r="38" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="6" />
                </svg>
              )}
            </div>

            {/* Sharp badge */}
            <div className="absolute top-2 right-2 bg-green-600/90 text-white text-[10px] px-2 py-1 rounded font-bold shadow">
              ✨ نقاء تام ١٠٠٪ دون أي تعرج
            </div>
          </div>

          <div className="mt-3 text-xs text-muted w-full space-y-1">
            <div className="text-green-400 font-bold">
              • عند التكبير: تحافظ على كامل حدتها ونعومتها لأنها معادلات رياضية.
            </div>
            <div>
              • يتضمن إحداثيات النقاط، الزوايا وسماكة الخطوط. مثالي للشعارات والخطوط.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. Color Mixing Lab (RGB Additive vs CMY Subtractive)
   ========================================================================= */

export function ColorMixingLab() {
  const [mode, setMode] = useState<'additive' | 'subtractive'>('additive');

  // RGB States (0 to 255)
  const [r, setR] = useState(255);
  const [g, setG] = useState(50);
  const [b, setB] = useState(50);

  // CMY States (0 to 100 %)
  const [c, setC] = useState(100);
  const [m, setM] = useState(100);
  const [y, setY] = useState(0);

  // Additive Hex
  const hexCode = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`.toUpperCase();

  // Subtractive mixed color in RGB for display
  const subR = Math.round(255 * (1 - c / 100));
  const subG = Math.round(255 * (1 - m / 100));
  const subB = Math.round(255 * (1 - y / 100));
  const subHex = `#${subR.toString(16).padStart(2, '0')}${subG.toString(16).padStart(2, '0')}${subB.toString(16).padStart(2, '0')}`.toUpperCase();

  return (
    <div className="card mt-3">
      {/* Mode Switcher */}
      <div className="flex gap-2 border-b border-border pb-3 mb-4 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <button
            className={`btn ${mode === 'additive' ? 'btn-primary' : ''}`}
            onClick={() => setMode('additive')}
          >
            💡 مزج الألوان الجمعي (الضوء · الشاشات RGB)
          </button>
          <button
            className={`btn ${mode === 'subtractive' ? 'btn-primary' : ''}`}
            onClick={() => setMode('subtractive')}
          >
            🖨️ مزج الألوان الطرحي (الصبغة · الطابعات CMY)
          </button>
        </div>

        <span className="text-xs font-bold text-muted">
          {mode === 'additive' ? 'الجمع يقترب من الأبيض ⚪' : 'المزج يقترب من الأسود ⚫'}
        </span>
      </div>

      {mode === 'additive' ? (
        /* RGB Additive Mixing */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Visual Circles / Spotlights */}
          <div className="md:col-span-6 bg-black p-6 rounded-xl flex flex-col items-center justify-center relative min-h-[260px] border border-border">
            <svg width="240" height="220" viewBox="0 0 240 220" className="overflow-visible">
              {/* Overlapping Light circles */}
              <circle
                cx="120"
                cy="80"
                r="60"
                fill={`rgb(${r}, 0, 0)`}
                style={{ mixBlendMode: 'screen' }}
                opacity="0.85"
              />
              <circle
                cx="80"
                cy="140"
                r="60"
                fill={`rgb(0, ${g}, 0)`}
                style={{ mixBlendMode: 'screen' }}
                opacity="0.85"
              />
              <circle
                cx="160"
                cy="140"
                r="60"
                fill={`rgb(0, 0, ${b})`}
                style={{ mixBlendMode: 'screen' }}
                opacity="0.85"
              />
              <text x="120" y="45" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                أحمر (R)
              </text>
              <text x="50" y="180" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                أخضر (G)
              </text>
              <text x="190" y="180" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">
                أزرق (B)
              </text>
            </svg>
            <div className="text-[11px] text-zinc-400 mt-2">
              🔦 تداخل أشعة الضوء: الشاشات تجمع الأضواء الثلاثة لتنتج الأبيض
            </div>
          </div>

          {/* Sliders & Data Details */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="p-3 bg-[var(--surface-2)] rounded-xl border border-border space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-red-400">الأحمر (Red): {r} / 255</span>
                  <span className="font-mono">{r.toString(2).padStart(8, '0')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={r}
                  onChange={e => setR(Number(e.target.value))}
                  className="w-full accent-red-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-green-400">الأخضر (Green): {g} / 255</span>
                  <span className="font-mono">{g.toString(2).padStart(8, '0')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={g}
                  onChange={e => setG(Number(e.target.value))}
                  className="w-full accent-green-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-blue-400">الأزرق (Blue): {b} / 255</span>
                  <span className="font-mono">{b.toString(2).padStart(8, '0')}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="255"
                  value={b}
                  onChange={e => setB(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-white/20 shadow"
                  style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}
                />
                <div>
                  <div className="font-bold text-sm">اللون الناتج (Result):</div>
                  <div className="font-mono text-xs text-muted">{hexCode} · rgb({r}, {g}, {b})</div>
                </div>
              </div>
              <div className="text-left font-mono text-xs">
                <div className="text-primary font-bold">24-Bit Full Color</div>
                <div className="text-muted text-[11px]">16.7 مليون احتمال</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* CMY Subtractive Mixing */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Visual Circles on White Paper */}
          <div className="md:col-span-6 bg-white p-6 rounded-xl flex flex-col items-center justify-center relative min-h-[260px] border border-border">
            <svg width="240" height="220" viewBox="0 0 240 220" className="overflow-visible">
              <circle
                cx="120"
                cy="80"
                r="60"
                fill={`rgb(0, ${Math.round(255 * (1 - m / 100))}, ${Math.round(255 * (1 - y / 100))})`}
                style={{ mixBlendMode: 'multiply' }}
                opacity="0.85"
              />
              <circle
                cx="80"
                cy="140"
                r="60"
                fill={`rgb(${Math.round(255 * (1 - c / 100))}, 255, ${Math.round(255 * (1 - y / 100))})`}
                style={{ mixBlendMode: 'multiply' }}
                opacity="0.85"
              />
              <circle
                cx="160"
                cy="140"
                r="60"
                fill={`rgb(${Math.round(255 * (1 - c / 100))}, ${Math.round(255 * (1 - m / 100))}, 255)`}
                style={{ mixBlendMode: 'multiply' }}
                opacity="0.85"
              />
              <text x="120" y="45" fill="#000000" fontSize="12" fontWeight="bold" textAnchor="middle">
                سماوي (Cyan)
              </text>
              <text x="50" y="180" fill="#000000" fontSize="12" fontWeight="bold" textAnchor="middle">
                أرجواني (Magenta)
              </text>
              <text x="190" y="180" fill="#000000" fontSize="12" fontWeight="bold" textAnchor="middle">
                أصفر (Yellow)
              </text>
            </svg>
            <div className="text-[11px] text-zinc-600 mt-2 font-medium">
              📄 مزج أحبار الطباعة: الصبغات تمتص الضوء حتى نصل للأسود
            </div>
          </div>

          {/* Sliders & Data Details */}
          <div className="md:col-span-6 flex flex-col gap-3">
            <div className="p-3 bg-[var(--surface-2)] rounded-xl border border-border space-y-3">
              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-cyan-500">السماوي (Cyan): {c}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={c}
                  onChange={e => setC(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-fuchsia-500">الأرجواني (Magenta): {m}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={m}
                  onChange={e => setM(Number(e.target.value))}
                  className="w-full accent-fuchsia-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span className="text-yellow-500">الأصفر (Yellow): {y}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={y}
                  onChange={e => setY(Number(e.target.value))}
                  className="w-full accent-yellow-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Result Box */}
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-lg border-2 border-white/20 shadow"
                  style={{ backgroundColor: `rgb(${subR}, ${subG}, ${subB})` }}
                />
                <div>
                  <div className="font-bold text-sm">لون الحبر الناتج:</div>
                  <div className="font-mono text-xs text-muted">{subHex} · CMY({c}%, {m}%, {y}%)</div>
                </div>
              </div>
              <div className="text-left font-mono text-xs">
                <div className="text-amber-500 font-bold">Subtractive Mixing</div>
                <div className="text-muted text-[11px]">مستخدم في الطابعات</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   4. Image Size Calculator Lab (حاسبة حجم بيانات الصورة والمسائل المقررة)
   ========================================================================= */

const PRESETS = [
  { label: 'كتاب الوزارة ص 89 (1280×720 ألوان كاملة 24-bit)', w: 1280, h: 720, bits: 24 },
  { label: 'كتاب الوزارة ص 90 مسألة 1 (800×600 بعمق 8-bit)', w: 800, h: 600, bits: 8 },
  { label: 'كتاب الوزارة ص 90 مسألة 2 (720×480 ألوان كاملة 24-bit)', w: 720, h: 480, bits: 24 },
  { label: 'كتاب الوزارة ص 90 مسألة 3 (3820×2160 ألوان كاملة 24-bit)', w: 3820, h: 2160, bits: 24 },
  { label: 'كتاب الوزارة ص 91 مسألة 1 (1080×720 بعمق 8-bit)', w: 1080, h: 720, bits: 8 },
  { label: 'كتاب الوزارة ص 91 مسألة 2 (320×480 ألوان كاملة 24-bit)', w: 320, h: 480, bits: 24 },
  { label: 'كتاب الوزارة ص 91 مسألة 3 (1920×1080 Full HD 24-bit)', w: 1920, h: 1080, bits: 24 },
];

export function ImageSizeCalculatorDemo() {
  const [width, setWidth] = useState(1280);
  const [height, setHeight] = useState(720);
  const [bitDepth, setBitDepth] = useState(24);
  const [useMetric, setUseMetric] = useState(true); // true = 1000 (Ministry rule), false = 1024

  const totalPixels = width * height;
  const totalBits = totalPixels * bitDepth;
  const totalBytes = totalBits / 8;

  const divisor = useMetric ? 1000 : 1024;
  const kb = totalBytes / divisor;
  const mb = kb / divisor;

  return (
    <div className="card mt-3">
      {/* Presets and options bar */}
      <div className="flex gap-2 items-center justify-between border-b border-border pb-3 mb-4 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-muted">مسائل كتاب الوزارة:</span>
          <select
            className="p-1.5 text-xs bg-[var(--surface-2)] border border-border rounded-lg font-bold text-primary cursor-pointer"
            onChange={e => {
              const p = PRESETS[Number(e.target.value)];
              if (p) {
                setWidth(p.w);
                setHeight(p.h);
                setBitDepth(p.bits);
              }
            }}
          >
            {PRESETS.map((p, i) => (
              <option key={i} value={i}>
                {p.label}
              </option>
            ))}
          </select>
        </div>

        {/* 1000 vs 1024 Toggle */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted">أساس التحويل:</span>
          <button
            onClick={() => setUseMetric(true)}
            className={`pill text-xs cursor-pointer ${useMetric ? 'pill-primary font-bold' : ''}`}
            title="كما افترض كتاب الوزارة ص 89 و 90 و 91 (1 KB = 1000 B)"
          >
            افتراض كتاب الوزارة (1000)
          </button>
          <button
            onClick={() => setUseMetric(false)}
            className={`pill text-xs cursor-pointer ${!useMetric ? 'pill-primary font-bold' : ''}`}
            title="الأساس الثنائي الأكاديمي (1 KB = 1024 B)"
          >
            النظام الثنائي (1024)
          </button>
        </div>
      </div>

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className="p-3 bg-[var(--surface-2)] rounded-xl border border-border">
          <label className="block text-xs font-bold text-muted mb-1">
            العرض بالبكسل (Width):
          </label>
          <input
            type="number"
            value={width}
            onChange={e => setWidth(Math.max(1, Number(e.target.value)))}
            className="w-full p-2 bg-[var(--surface)] border border-border rounded font-mono text-sm font-bold text-primary"
          />
        </div>

        <div className="p-3 bg-[var(--surface-2)] rounded-xl border border-border">
          <label className="block text-xs font-bold text-muted mb-1">
            الارتفاع بالبكسل (Height):
          </label>
          <input
            type="number"
            value={height}
            onChange={e => setHeight(Math.max(1, Number(e.target.value)))}
            className="w-full p-2 bg-[var(--surface)] border border-border rounded font-mono text-sm font-bold text-primary"
          />
        </div>

        <div className="p-3 bg-[var(--surface-2)] rounded-xl border border-border">
          <label className="block text-xs font-bold text-muted mb-1">
            عمق اللون بالبت (Bit Depth):
          </label>
          <select
            value={bitDepth}
            onChange={e => setBitDepth(Number(e.target.value))}
            className="w-full p-2 bg-[var(--surface)] border border-border rounded font-mono text-sm font-bold text-primary"
          >
            <option value={1}>1-Bit (أبيض وأسود فقط)</option>
            <option value={8}>8-Bit (٢٥٦ تدرج رمادي / مفرد)</option>
            <option value={16}>16-Bit (High Color - 65,536 لون)</option>
            <option value={24}>24-Bit Full Color (الألوان الكاملة 16.7 مليون لون)</option>
            <option value={32}>32-Bit RGBA (ألوان كاملة + قناة الشفافية Alpha)</option>
          </select>
        </div>
      </div>

      {/* Step-by-Step Mathematical Calculation breakdown */}
      <div className="p-4 bg-[var(--surface)] border border-border rounded-xl space-y-3">
        <h4 className="font-bold text-primary text-sm flex items-center gap-1">
          <span>📐 خطوات الحل التفصيلية (خطوة بخطوة كما في نموذج إجابة الوزارة):</span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Step 1 & 2 */}
          <div className="p-3 bg-[var(--surface-2)] rounded-lg space-y-1">
            <div className="font-bold text-muted">١. حساب إجمالي عدد البكسلات:</div>
            <div className="font-mono text-sm">
              {width.toLocaleString()} × {height.toLocaleString()} = <span className="text-primary font-bold">{totalPixels.toLocaleString()} بكسل</span>
            </div>
            <div className="font-bold text-muted mt-2">٢. حساب إجمالي الحجم بالبت (Bits):</div>
            <div className="font-mono text-sm">
              {totalPixels.toLocaleString()} × {bitDepth} بت = <span className="text-primary font-bold">{totalBits.toLocaleString()} بت</span>
            </div>
          </div>

          {/* Step 3 & 4 */}
          <div className="p-3 bg-[var(--surface-2)] rounded-lg space-y-1">
            <div className="font-bold text-muted">٣. التحويل إلى بايت (القسمة على 8):</div>
            <div className="font-mono text-sm">
              {totalBits.toLocaleString()} ÷ 8 = <span className="text-green-500 font-bold">{totalBytes.toLocaleString()} بايت</span>
            </div>
            <div className="font-bold text-muted mt-2">
              ٤. التحويل إلى كيلوبايت وميجابايت (القسمة على {divisor}):
            </div>
            <div className="font-mono text-sm">
              = <span className="text-amber-500 font-bold">{kb.toFixed(2)} KB</span>
              {' '}≈{' '}
              <span className="text-purple-500 font-bold text-base">{mb.toFixed(2)} MB</span>
            </div>
          </div>
        </div>

        {/* Final Highlight Card */}
        <div className="p-3 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 border border-primary/30 rounded-xl flex items-center justify-between flex-wrap gap-2">
          <div>
            <span className="text-xs text-muted block">الناتج النهائي المعتمد:</span>
            <span className="text-lg font-black text-foreground">
              {mb >= 1 ? `${mb.toFixed(2)} MB (${Math.round(mb)} ميجابايت تقريباً)` : `${kb.toFixed(2)} KB (${Math.round(kb)} كيلوبايت تقريباً)`}
            </span>
          </div>
          <div className="text-xs text-muted">
            القانون: <b>(Pixels أفقي × Pixels رأسي) × عدد البتات ÷ 8</b>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   5. Pixel Matrix & Mobile Zoom Explorer (معمل البكسل وتجربة الموبايل التفاعلية)
   ========================================================================= */

export function PixelMatrixInteractiveDemo() {
  const [activeTab, setActiveTab] = useState<'matrix' | 'mobile'>('matrix');

  // Matrix State (default 4 cols x 3 rows = 12 pixels as in user's image)
  const [cols, setCols] = useState<number>(4);
  const [rows, setRows] = useState<number>(3);
  const [activeColor, setActiveColor] = useState<string>('#3b82f6'); // default blue
  const [gridColors, setGridColors] = useState<Record<string, string>>({});

  // Mobile Zoom State
  const [mobileZoom, setMobileZoom] = useState<number>(1);

  const totalPixels = cols * rows;

  const togglePixel = (r: number, c: number) => {
    const key = `${r}-${c}`;
    setGridColors(prev => {
      const current = prev[key];
      if (current === activeColor) {
        const next = { ...prev };
        delete next[key];
        return next;
      }
      return { ...prev, [key]: activeColor };
    });
  };

  const clearGrid = () => setGridColors({});

  const setPreset = (c: number, r: number) => {
    setCols(c);
    setRows(r);
    setGridColors({});
  };

  return (
    <div className="card mt-3">
      {/* Top Mode Tabs */}
      <div className="flex gap-2 border-b border-border pb-3 mb-4 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <button
            className={`btn ${activeTab === 'matrix' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('matrix')}
          >
            🔲 مصفوفة البكسلات التفاعلية (صفوف × أعمدة)
          </button>
          <button
            className={`btn ${activeTab === 'mobile' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('mobile')}
          >
            📱 تجربة تكبير صورة الموبايل (Zoom Simulator)
          </button>
        </div>

        <span className="text-xs font-bold text-muted">
          {activeTab === 'matrix' ? 'اضغط على البكسلات للتلوين والتجربة' : 'حرّك شريط التكبير لاكتشاف مربعات البكسل'}
        </span>
      </div>

      {activeTab === 'matrix' ? (
        /* Tab 1: Interactive Matrix */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left / Grid Canvas */}
          <div className="md:col-span-7 bg-[var(--surface-2)] p-4 rounded-xl border border-border flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <span>🎨 مصفوفة البكسل:</span>
                <span className="font-mono text-foreground font-black">
                  {cols} أعمدة × {rows} صفوف = {totalPixels} بكسل
                </span>
              </span>
              <button
                onClick={clearGrid}
                className="text-xs text-muted hover:text-danger cursor-pointer font-bold"
              >
                مسح الشبكة ↺
              </button>
            </div>

            {/* The Actual Clickable Pixel Matrix */}
            <div
              className="p-3 bg-slate-900 rounded-xl shadow-inner select-none transition-all border-2 border-slate-700"
              style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
                gap: cols <= 8 ? '8px' : '4px',
                width: 'min(100%, 360px)',
                aspectRatio: `${cols}/${rows}`,
              }}
            >
              {Array.from({ length: rows }).map((_, r) =>
                Array.from({ length: cols }).map((_, c) => {
                  const key = `${r}-${c}`;
                  const isPainted = gridColors[key];
                  const bg = isPainted || '#1e293b';

                  return (
                    <div
                      key={key}
                      onClick={() => togglePixel(r, c)}
                      className="rounded-[4px] cursor-pointer transition-transform hover:scale-110 flex items-center justify-center font-mono text-[10px] text-white shadow-sm"
                      style={{
                        backgroundColor: bg,
                        border: isPainted ? '1.5px solid rgba(255,255,255,0.7)' : '1px solid #334155',
                        boxShadow: isPainted ? `0 0 8px ${bg}88` : undefined,
                      }}
                      title={`بكسل (عمود: ${c + 1}، صف: ${r + 1})`}
                    >
                      {cols <= 4 && (
                        <span className="opacity-70 text-[9px]">
                          {c + 1},{r + 1}
                        </span>
                      )}
                    </div>
                  );
                })
              )}
            </div>

            {/* Color Palette Selector */}
            <div className="mt-4 flex items-center gap-2 flex-wrap justify-center">
              <span className="text-xs font-bold text-muted">لون التلوين:</span>
              {[
                { label: 'أزرق', color: '#3b82f6' },
                { label: 'أحمر', color: '#ef4444' },
                { label: 'أخضر', color: '#22c55e' },
                { label: 'أصفر', color: '#eab308' },
                { label: 'أبيض', color: '#f8fafc' },
              ].map(p => (
                <button
                  key={p.color}
                  onClick={() => setActiveColor(p.color)}
                  className="w-7 h-7 rounded-full cursor-pointer transition-transform hover:scale-125 border-2"
                  style={{
                    backgroundColor: p.color,
                    borderColor: activeColor === p.color ? '#ffffff' : 'transparent',
                    outline: activeColor === p.color ? '2px solid var(--pen-blue)' : undefined,
                  }}
                  title={p.label}
                />
              ))}
            </div>
          </div>

          {/* Right / Controls & Rule explanation */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {/* Presets Box */}
            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl space-y-2">
              <label className="text-xs font-bold text-primary block">
                اختر أبعاد المصفوفة (صفوف × أعمدة):
              </label>
              <div className="grid grid-cols-1 gap-2">
                <button
                  onClick={() => setPreset(4, 3)}
                  className={`btn text-xs text-right flex justify-between items-center ${cols === 4 && rows === 3 ? 'btn-primary' : ''}`}
                >
                  <span className="font-bold">٤ أعمدة × ٣ صفوف</span>
                  <span className="font-mono badge">12 Pixel (مثال الصورة المرفقة)</span>
                </button>
                <button
                  onClick={() => setPreset(8, 6)}
                  className={`btn text-xs text-right flex justify-between items-center ${cols === 8 && rows === 6 ? 'btn-primary' : ''}`}
                >
                  <span className="font-bold">٨ أعمدة × ٦ صفوف</span>
                  <span className="font-mono badge">48 Pixel</span>
                </button>
                <button
                  onClick={() => setPreset(16, 12)}
                  className={`btn text-xs text-right flex justify-between items-center ${cols === 16 && rows === 12 ? 'btn-primary' : ''}`}
                >
                  <span className="font-bold">١٦ عمود × ١٢ صف</span>
                  <span className="font-mono badge">192 Pixel (تفاصيل أدق)</span>
                </button>
              </div>
            </div>

            {/* The Golden Rule Banner */}
            <div className="p-4 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 border-2 border-primary/30 rounded-xl space-y-2">
              <div className="font-bold text-primary text-sm flex items-center gap-1">
                <span>✨ الاستنتاج والقاعدة الذهبية:</span>
              </div>
              <div className="text-xs font-black text-foreground leading-relaxed">
                «كلما زاد عدد البكسلات التي تمثل الصورة، يمكننا الحصول على تفاصيل أكثر ونعومة أعلى!»
              </div>
              <div className="text-[11px] text-muted leading-normal">
                • في مصفوفة <b>12 بكسل</b>: لا يمكن رسم تفاصيل وجه أو عين.<br />
                • في مصفوفة <b>Full HD (أكثر من مليوني بكسل)</b>: ترى أدق مسام الوجه وشعيرات العين بنعومة تامة!
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Mobile Zoom Simulator */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Smartphone Mockup */}
          <div className="md:col-span-6 flex justify-center">
            <div className="w-56 h-96 bg-slate-900 border-4 border-slate-700 rounded-[32px] p-2 shadow-2xl relative flex flex-col items-center overflow-hidden">
              {/* Speaker / Camera Notch */}
              <div className="w-20 h-4 bg-slate-800 rounded-full mb-2 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-slate-900" />
              </div>

              {/* Screen Area with Zoomable Image */}
              <div className="w-full flex-1 bg-black rounded-[22px] overflow-hidden relative flex items-center justify-center">
                <div
                  className="transition-transform duration-200 flex flex-col items-center justify-center"
                  style={{
                    transform: `scale(${mobileZoom})`,
                    imageRendering: mobileZoom > 3 ? 'pixelated' : 'auto',
                  }}
                >
                  {/* Rose & Eye test graphic */}
                  <div
                    className="w-24 h-24 rounded-lg flex items-center justify-center text-4xl shadow-inner relative"
                    style={{
                      background: 'radial-gradient(circle, #e11d48 30%, #be123c 70%, #0f172a 100%)',
                    }}
                  >
                    <span>🌹</span>

                    {/* Overlay Grid lines when zoomed */}
                    {mobileZoom >= 4 && (
                      <div
                        className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-[1px] bg-white/20 pointer-events-none"
                      />
                    )}
                  </div>
                </div>

                {/* On-screen Zoom Indicator Pill */}
                <div className="absolute bottom-2 bg-black/70 backdrop-blur-md text-white text-[10px] font-mono px-2 py-0.5 rounded-full border border-white/20">
                  Zoom: {mobileZoom}x
                </div>
              </div>

              {/* Home indicator bar */}
              <div className="w-24 h-1 bg-slate-600 rounded-full mt-2" />
            </div>
          </div>

          {/* Explanation & Slider */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="p-4 bg-[var(--surface-2)] border border-border rounded-xl space-y-3">
              <h4 className="font-bold text-sm text-primary flex items-center gap-1">
                <span>🔍 جرّب بنفسك: كبّر الصورة على الموبايل!</span>
              </h4>
              <p className="text-xs text-muted leading-relaxed">
                تخيل إنك كبّرت صورة على الموبايل جداً.. بدل ما تشوف الصورة بشكلها الطبيعي، هتبدأ تشوف مربعات صغيرة.. <b>كل مربع من دول = Pixel!</b>
              </p>

              <div>
                <div className="flex justify-between text-xs font-bold mb-1">
                  <span>قوة التكبير (Zoom):</span>
                  <span className="font-mono text-primary font-bold">{mobileZoom}x ({mobileZoom * 100}%)</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={mobileZoom}
                  onChange={e => setMobileZoom(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              {mobileZoom >= 4 ? (
                <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-lg text-xs text-red-400 font-bold animate-pulse">
                  🎯 لاحظت المربعات؟ كل مربع صغير ظهر أمامك الآن هو بكسل واحد (Pixel) مستقل!
                </div>
              ) : (
                <div className="p-2.5 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-400">
                  💡 اسحب الشريط لليمين حتى 4x أو أكثر لتشاهد تفكك الصورة إلى مربعات البكسل!
                </div>
              )}
            </div>

            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl text-xs space-y-1">
              <div className="font-bold text-foreground">💡 تذكر دائماً:</div>
              <div className="text-muted leading-relaxed">
                الصورة الرقمية ليست قطعة واحدة مستمرة؛ بل هي <b>مصفوفة ضخمة من البكسلات</b> مرتبة في <b>صفوف × أعمدة</b>.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================================
   6. DPI & Resolution Interactive Lab (معمل الدقة وكثافة البوصة وحاسبة الفائز ص 130)
   ========================================================================= */

export function DpiResolutionLab() {
  const [activeTab, setActiveTab] = useState<'ruler' | 'calculator'>('ruler');
  const [selectedDpi, setSelectedDpi] = useState<number>(300);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [inchWidth, setInchWidth] = useState<number>(4);
  const [inchHeight, setInchHeight] = useState<number>(3);
  const [bitDepth, setBitDepth] = useState<number>(24);

  // Calculations according to textbook page 130 & 132
  const calcPixelsX = Math.round(inchWidth * selectedDpi);
  const calcPixelsY = Math.round(inchHeight * selectedDpi);
  const totalPixels = calcPixelsX * calcPixelsY;
  const totalBits = totalPixels * bitDepth;
  const totalBytes = totalBits / 8;
  const totalKB = totalBytes / 1024;
  const totalMB = totalKB / 1024;

  const DPI_PRESETS = [
    { dpi: 72, label: '72 dpi', desc: 'شاشات الويب والموبايل 📱', color: '#f97316' },
    { dpi: 150, label: '150 dpi', desc: 'مستندات وطباعة يومية 📄', color: '#38bdf8' },
    { dpi: 300, label: '300 dpi', desc: 'مطبوعات ورقية وكتب 🖨️', color: '#22c55e' },
    { dpi: 1200, label: '1200 dpi', desc: 'طابعات ليزر (مثال الفائز) 🌟', color: '#a855f7' },
  ];

  // Visual dot count in the 1-inch preview box
  const getDotGridCount = (dpi: number) => {
    if (dpi <= 72) return 6; // 6x6 = 36 dots
    if (dpi <= 150) return 9; // 9x9 = 81 dots
    if (dpi <= 300) return 14; // 14x14 = 196 dots
    return 22; // 22x22 = 484 micro-dots for 1200 dpi
  };

  const gridCount = getDotGridCount(selectedDpi);

  return (
    <div className="card mt-3">
      {/* Top Tabs */}
      <div className="flex gap-2 border-b border-border pb-3 mb-4 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <button
            type="button"
            className={`btn ${activeTab === 'ruler' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('ruler')}
          >
            📏 مستكشف كثافة البوصة (1-Inch Dot Explorer)
          </button>
          <button
            type="button"
            className={`btn ${activeTab === 'calculator' ? 'btn-primary' : ''}`}
            onClick={() => setActiveTab('calculator')}
          >
            🧮 حاسبة البوصة والبكسل وحجم الملف (كتاب الفائز ص 130)
          </button>
        </div>

        <span className="text-xs font-bold text-muted">
          كتاب الفائز: دقة الصور ووحدة القياس dpi
        </span>
      </div>

      {/* Preset DPI Selector Buttons */}
      <div className="p-3 bg-[var(--surface-2)] border border-border rounded-xl mb-4 flex items-center justify-between flex-wrap gap-2">
        <span className="text-xs font-bold text-muted flex items-center gap-1">
          <span>اختر دقة العينات (DPI):</span>
        </span>
        <div className="flex gap-2 flex-wrap">
          {DPI_PRESETS.map(p => (
            <button
              key={p.dpi}
              type="button"
              onClick={() => setSelectedDpi(p.dpi)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold cursor-pointer transition-all border ${
                selectedDpi === p.dpi
                  ? 'bg-primary text-white shadow-md border-primary'
                  : 'bg-[var(--surface)] text-foreground border-border hover:border-primary/50'
              }`}
            >
              <span className="font-mono">{p.label}</span> ({p.desc})
            </button>
          ))}
        </div>
      </div>

      {activeTab === 'ruler' ? (
        /* Tab 1: Physical Ruler & 1-Inch Dot Density */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left / Visual Ruler & 1-Inch Box */}
          <div className="md:col-span-6 bg-[var(--surface-2)] p-4 rounded-xl border border-border flex flex-col items-center">
            <div className="w-full flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-primary flex items-center gap-1">
                <span>📏 المسطرة الفيزيائية ومساحة البوصة الواحدة:</span>
              </span>
              <span className="text-xs font-mono font-bold text-muted">
                1 Inch = 2.54 cm
              </span>
            </div>

            {/* The Physical Ruler Graphic */}
            <div className="w-full bg-amber-100/90 text-slate-900 rounded-lg p-2 border-2 border-amber-400 shadow-inner select-none mb-4 relative overflow-hidden">
              <div className="flex justify-between items-center text-[10px] font-mono font-bold px-1 mb-1">
                <span>0</span>
                <span>1 بوصة (1 Inch)</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
              </div>
              {/* Ruler Tick Marks */}
              <div className="flex justify-between items-end h-6 border-b-2 border-slate-700">
                {Array.from({ length: 33 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      height: i % 8 === 0 ? '18px' : i % 4 === 0 ? '12px' : '6px',
                      width: '1.5px',
                      backgroundColor: i % 8 === 0 ? '#0f172a' : '#475569',
                    }}
                  />
                ))}
              </div>
              <div className="text-[10px] text-center font-bold text-amber-900 mt-1">
                👈 هذه هي مسافة «بوصة واحدة» (2.54 سم) على الورق المطبوع
              </div>
            </div>

            {/* The 1-Inch Magnified Dot Matrix Box */}
            <div className="flex flex-col items-center gap-2 w-full">
              <div className="flex items-center justify-between w-full text-xs font-bold px-2">
                <span>كثافة النقاط في البوصة الواحدة:</span>
                <span className="font-mono text-primary font-bold">
                  {selectedDpi} نقطة / بوصة (dpi)
                </span>
              </div>

              <div
                className="relative p-2 bg-slate-950 rounded-xl border-2 shadow-2xl transition-all"
                style={{
                  width: '180px',
                  height: '180px',
                  borderColor: selectedDpi >= 300 ? '#22c55e' : '#f97316',
                }}
              >
                {/* 1 Inch Dot Grid Simulator */}
                <div
                  className="w-full h-full rounded-lg overflow-hidden grid gap-[2px] transition-all"
                  style={{
                    gridTemplateColumns: `repeat(${gridCount}, minmax(0, 1fr))`,
                    gridTemplateRows: `repeat(${gridCount}, minmax(0, 1fr))`,
                  }}
                >
                  {Array.from({ length: gridCount * gridCount }).map((_, i) => (
                    <div
                      key={i}
                      className="rounded-full transition-all"
                      style={{
                        backgroundColor:
                          selectedDpi >= 1200
                            ? '#a855f7'
                            : selectedDpi >= 300
                            ? '#22c55e'
                            : selectedDpi >= 150
                            ? '#38bdf8'
                            : '#f97316',
                        opacity: 0.9,
                      }}
                    />
                  ))}
                </div>

                {/* 1-Inch Reticle Overlay */}
                <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none flex items-center justify-center">
                  <span className="px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono font-bold shadow">
                    1 Inch² ({gridCount * gridCount} نقطة ممثلة)
                  </span>
                </div>
              </div>

              <span className="text-[11px] text-muted text-center mt-1">
                {selectedDpi >= 1200
                  ? '🌟 كثافة ميكروسكوبية فائقة: النقاط متلاحمة كأنها كتلة مصمتة ناعمة تماماً!'
                  : selectedDpi >= 300
                  ? '✨ كثافة عالية: النقاط متلاصقة وتظهر ناعمة للعين البشرية الطبيعية.'
                  : '⚠️ نقاط متباعدة: العين تستطيع ملاحظة الفراغات والتكسرات عند الاقتراب.'}
              </span>
            </div>
          </div>

          {/* Right / Live Image Quality Preview (Parrot from Textbook Page 130) */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="p-4 bg-[var(--surface-2)] border border-border rounded-xl space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-sm text-primary flex items-center gap-1">
                  <span>🦜 عينة صورة الببغاء (المثال المعتمد بكتاب الفائز ص 130):</span>
                </h4>
                <span className="text-xs font-mono font-bold text-muted">
                  {selectedDpi} dpi
                </span>
              </div>

              {/* Visual Parrot & Curve Rendering based on DPI */}
              <div className="relative bg-slate-950 p-4 rounded-xl border border-border flex items-center justify-around overflow-hidden">
                {/* Visual SVG Parrot */}
                <div
                  className="flex flex-col items-center gap-1 transition-all"
                  style={{
                    transform: `scale(${zoomLevel})`,
                    transformOrigin: 'center center',
                    filter: selectedDpi <= 72 ? 'blur(0.5px) contrast(1.4)' : 'none',
                  }}
                >
                  <svg width="100" height="100" viewBox="0 0 100 100">
                    <rect width="100" height="100" fill="#0f172a" rx="10" />
                    {selectedDpi <= 72 ? (
                      /* Jagged Pixelated Parrot Face */
                      <g>
                        <rect x="35" y="20" width="30" height="30" fill="#ef4444" />
                        <rect x="25" y="30" width="10" height="40" fill="#15803d" />
                        <rect x="35" y="50" width="40" height="25" fill="#facc15" />
                        <rect x="55" y="28" width="10" height="10" fill="#ffffff" />
                        <rect x="58" y="31" width="4" height="4" fill="#000000" />
                        <rect x="65" y="38" width="20" height="15" fill="#1e293b" />
                        {/* Jaggies overlay */}
                        <line x1="35" y1="20" x2="65" y2="20" stroke="#fca5a5" strokeWidth="2" strokeDasharray="3 3" />
                      </g>
                    ) : (
                      /* Smooth Vector Parrot Face */
                      <g>
                        <path d="M35 80 Q30 40 45 25 Q60 15 70 25 Q75 35 68 50 Q60 65 55 80 Z" fill="#ef4444" />
                        <circle cx="58" cy="32" r="7" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" />
                        <circle cx="60" cy="32" r="3.5" fill="#0f172a" />
                        <path d="M68 36 Q88 38 78 52 Q72 50 68 45 Z" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
                        <path d="M30 50 Q20 65 35 85 Q45 75 40 60 Z" fill="#22c55e" />
                      </g>
                    )}
                  </svg>
                  <span className="text-[10px] font-bold text-muted">
                    {selectedDpi <= 72 ? 'تعرجات واضحة (Jaggies)' : 'منحنيات ناعمة (Smooth)'}
                  </span>
                </div>

                {/* Circular Line Arc comparison */}
                <div className="flex flex-col items-center gap-1">
                  <svg width="80" height="80" viewBox="0 0 80 80">
                    <rect width="80" height="80" fill="#0f172a" rx="8" />
                    {selectedDpi <= 72 ? (
                      /* Stepped Staircase Circle */
                      <g fill="#f97316">
                        <rect x="28" y="14" width="24" height="6" />
                        <rect x="18" y="20" width="10" height="8" />
                        <rect x="52" y="20" width="10" height="8" />
                        <rect x="12" y="28" width="6" height="24" />
                        <rect x="62" y="28" width="6" height="24" />
                        <rect x="18" y="52" width="10" height="8" />
                        <rect x="52" y="52" width="10" height="8" />
                        <rect x="28" y="60" width="24" height="6" />
                      </g>
                    ) : (
                      /* Perfect Smooth Arc */
                      <circle
                        cx="40"
                        cy="40"
                        r="26"
                        fill="none"
                        stroke={selectedDpi >= 1200 ? '#a855f7' : '#22c55e'}
                        strokeWidth={selectedDpi >= 1200 ? '4' : '3.5'}
                      />
                    )}
                  </svg>
                  <span className="text-[10px] font-bold text-muted">
                    {selectedDpi <= 72 ? 'حواف مسننة' : 'حواف فائقة النعومة'}
                  </span>
                </div>
              </div>

              {/* Zoom Controller */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs font-bold">
                  <span>عدسة التكبير (Magnifier Zoom):</span>
                  <span className="font-mono text-primary font-bold">{zoomLevel}x</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="0.25"
                  value={zoomLevel}
                  onChange={e => setZoomLevel(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
              </div>

              <div className="p-3 bg-[var(--surface)] border border-border rounded-xl text-xs space-y-1.5 leading-relaxed">
                <div className="font-bold text-foreground flex items-center gap-1">
                  <span>📌 خلاصة كتاب الفائز (ص 130):</span>
                </div>
                <div>
                  • <b>72 dpi:</b> مناسبة لشاشات الويب لسرعة التصفح وتوفير الذاكرة.<br />
                  • <b>300 dpi:</b> المعيار القياسي لجودة طباعة الكتب والكتالوجات.<br />
                  • <b>1200 dpi:</b> معيار طابعات الليزر الاحترافية لنصوص ورسوم فائقة الحدة.
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Tab 2: Formula & Calculator from Page 130 & 132 */
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
          {/* Left: Input Controls */}
          <div className="md:col-span-6 bg-[var(--surface-2)] p-4 rounded-xl border border-border space-y-4">
            <h4 className="font-bold text-sm text-primary flex items-center gap-1">
              <span>📐 إدخال أبعاد الصورة بالبوصة (Inches):</span>
            </h4>

            {/* Width in Inches */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>عرض الصورة بالبوصة (Width):</span>
                <span className="font-mono text-primary font-bold">{inchWidth} بوصة ({arNum(inchWidth * 2.54)} سم)</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={inchWidth}
                onChange={e => setInchWidth(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
            </div>

            {/* Height in Inches */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span>ارتفاع الصورة بالبوصة (Height):</span>
                <span className="font-mono text-primary font-bold">{inchHeight} بوصة ({arNum(inchHeight * 2.54)} سم)</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                step="0.5"
                value={inchHeight}
                onChange={e => setInchHeight(Number(e.target.value))}
                className="w-full accent-primary cursor-pointer"
              />
            </div>

            {/* Bit depth */}
            <div>
              <label className="text-xs font-bold block mb-1">عمق اللون (Bits لكل بكسل):</label>
              <div className="flex gap-2">
                {[
                  { b: 8, label: '8 بت (رمادي 256 مستوى)' },
                  { b: 24, label: '24 بت (ألوان كاملة True Color)' },
                ].map(item => (
                  <button
                    key={item.b}
                    type="button"
                    onClick={() => setBitDepth(item.b)}
                    className={`btn text-xs flex-1 ${bitDepth === item.b ? 'btn-primary font-bold' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-3 bg-[var(--surface)] border border-border rounded-xl text-xs space-y-1">
              <div className="font-bold text-foreground">القانون الرياضي للتحويل:</div>
              <div className="font-mono text-primary font-bold direction-ltr text-right">
                Pixels = Inches × DPI
              </div>
              <div className="text-muted leading-relaxed">
                أي أن عدد البكسلات في أي اتجاه يساوي طول الصورة بالبوصة مضروباً في كثافة الـ dpi!
              </div>
            </div>
          </div>

          {/* Right: Results & Curriculum Laws */}
          <div className="md:col-span-6 bg-[var(--surface-2)] p-4 rounded-xl border border-border space-y-4">
            <h4 className="font-bold text-sm text-primary flex items-center gap-1">
              <span>📊 النتيجة بالأبعاد وحجم الذاكرة (كتاب الفائز ص 130 و 132):</span>
            </h4>

            {/* Pixel Dimensions (The Two Ways from Page 130) */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-center">
                <span className="text-[11px] text-muted block">أبعاد البكسل (أفقي × رأسي):</span>
                <span className="font-mono text-lg font-black text-sky-400">
                  {calcPixelsX} × {calcPixelsY}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">بكسل</span>
              </div>

              <div className="p-3 bg-slate-900 border border-slate-700 rounded-xl text-center">
                <span className="text-[11px] text-muted block">إجمالي عدد البكسلات:</span>
                <span className="font-mono text-lg font-black text-emerald-400">
                  {arNum(totalPixels)}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Pixel</span>
              </div>
            </div>

            {/* File Size Calculation */}
            <div className="p-3.5 bg-slate-950 border border-slate-800 rounded-xl space-y-2 text-xs">
              <div className="font-bold text-amber-400">حساب حجم بيانات الصورة في الذاكرة:</div>
              <div className="font-mono text-slate-300 space-y-1 text-[11px] direction-ltr text-right">
                <div>• الحجم بالبت (Bits) = {calcPixelsX} × {calcPixelsY} × {bitDepth} = <b>{arNum(totalBits)} Bits</b></div>
                <div>• الحجم بالبايت (Bytes) = {arNum(totalBits)} ÷ 8 = <b>{arNum(totalBytes)} Bytes</b></div>
                <div>• الحجم بالميجابايت = <b>{totalMB.toFixed(2)} MB</b></div>
              </div>
            </div>

            {/* Curriculum Comparison Alert */}
            <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-xl text-xs space-y-1 text-green-300">
              <div className="font-bold text-green-400">🎯 مقارنة كتاب الفائز الحاسمة:</div>
              <div className="leading-relaxed">
                لو قمنا بتغيير الـ DPI من <b>72 dpi</b> إلى <b>300 dpi</b> لنفس الأبعاد ({inchWidth} × {inchHeight} بوصة)،
                سيتضاعف عدد البكسلات وحجم الملف بمقدار <b>{( (300*300)/(72*72) ).toFixed(1)} ضعفاً</b>!
                لذا تُستخدم الـ 72 dpi للإنترنت والـ 300 dpi للمطابع.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


