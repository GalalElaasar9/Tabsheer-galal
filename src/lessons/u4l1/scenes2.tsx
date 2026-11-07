// Board scenes · Unit 4 · Lesson 1 · Compression, Audio, and Video specifications
import type { FrameDef } from '../../board/types';
import { Box, Doodle, Heading, Place, Scene, Txt } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'compression-lossy-vs-lossless', title: 'خوارزميات الضغط: بفقد (Lossy) وبدون فقد (Lossless)', scene: true,
    notes: (
      <>
        <p><b>خوارزميات ضغط الوسائط في الويب:</b></p>
        <ul>
          <li><b>الضغط بفقْد (Lossy):</b> يحذف التفاصيل الدقيقة التي تعجز عين أو أذن الإنسان عن ملاحظتها. الميزة: توفير هائل في حجم الملف (يصل إلى 90%). الأمثلة: JPEG, MP3, MP4.</li>
          <li><b>الضغط بدون فقْد (Lossless):</b> يختزل البيانات المتكررة ويحافظ على الملف الأصلي كاملاً بدون حذف أي تفصيل. الميزة: جودة 100% ودعم الشفافية. الأمثلة: PNG, FLAC, ZIP.</li>
        </ul>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="كيف نضغط الملفات الكبيرة لتسافر بسرعة عبر شبكة الإنترنت؟">
          الضغط بفقْد (Lossy) مقابل الضغط بدون فقْد (Lossless)
        </Heading>

        {/* Lossy Card */}
        <Place x={630} y={160} w={550} h={380} at={1}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#1c1015', borderColor: '#e11d48' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-rose-400">✂️ الضغط بفقْد بيانات (Lossy)</span>
                <span className="pill text-xs font-bold bg-rose-950 text-rose-300 border-rose-700">JPEG · MP3 · MP4</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>آلية العمل:</b> حذف التفاصيل والترددات غير الملحوظة للحواس البشرية.</li>
                <li>• <b>نسبة الضغط:</b> فائقة (تصل إلى 10:1 أو 20:1 من الحجم الأصلي).</li>
                <li>• <b>استرجاع الملف:</b> لا يمكن استعادة البايتات المحذوفة أبداً.</li>
                <li>• <b>الاستخدام:</b> بث الفيديو عبر يوتيوب، الموسيقى، وصور المواقع الكبيرة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-rose-950/40 border border-rose-800 text-xs text-rose-300 font-bold">
              ⚡ الميزة العظمى: حجم ملف صغير جداً وسرعة تحميل خاطفة في الويب.
            </div>
          </div>
        </Place>

        {/* Lossless Card */}
        <Place x={40} y={160} w={550} h={380} at={2}>
          <div className="p-4 rounded-2xl border h-full flex flex-col justify-between shadow-lg" style={{ background: '#0a1a18', borderColor: '#10b981' }}>
            <div>
              <div className="flex items-center justify-between border-b pb-2 mb-2" style={{ borderColor: '#1e293b' }}>
                <span className="font-extrabold text-base text-emerald-400">🛡️ الضغط بدون فقْد (Lossless)</span>
                <span className="pill text-xs font-bold bg-emerald-950 text-emerald-300 border-emerald-700">PNG · FLAC · GIF</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
                <li>• <b>آلية العمل:</b> إعادة ترميز وتجميع البيانات المتكررة بذكاء دون حذف أي شيء.</li>
                <li>• <b>نسبة الضغط:</b> متوسطة (حجم الملف يظل كبيراً نسبياً).</li>
                <li>• <b>استرجاع الملف:</b> استعادة مطابقة 100% للملف الأصلي بالبايت.</li>
                <li>• <b>الاستخدام:</b> الصور ذات الشفافية، الرسوم البيانية، وشاشات النصوص الحادة.</li>
              </ul>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-800 text-xs text-emerald-300 font-bold">
              💎 الميزة العظمى: نقاء كامل للألوان ودقة لا تقبل التنازل مع دعم الشفافية.
            </div>
          </div>
        </Place>

        {/* Bottom Rule */}
        <Box x={40} y={560} w={1140} h={80} c="blue" fill="blue" size={21} tc="ink" at={3}>
          📖 <b>الخلاصة للويب:</b> نستخدم Lossy (WebP / JPEG) للصور الفوتوغرافية لتسريع التحميل، ونستخدم Lossless (PNG) عندما نحتاج الشفافية والنقاء التام.
        </Box>
      </Scene>
    ),
  },
  {
    id: 'audio-digitalization', title: 'خصائص الصوت الرقمي (Digital Audio)', scene: true,
    notes: (
      <>
        <p><b>كيف يتحول الصوت التناظري (Analog) إلى صوت رقمي (Digital)؟</b></p>
        <p>الموجات الصوتية في الطبيعة متصلة ومستمرة. لتحويلها إلى أصفار وآحاد في الكمبيوتر والويب، نحتاج خاصيتين أساسيتين:</p>
        <ol>
          <li><b>معدل العينات (Sample Rate):</b> عدد مرات قياس شدة الصوت في الثانية (مثل 44,100 Hz أو 44.1 kHz جودة الـ CD). كلما زاد، التقط الترددات الحادة بدقة.</li>
          <li><b>عمق البت (Bit Depth):</b> عدد البتات المخصصة لكل عينة (مثل 16-bit أو 24-bit). يحدد النقاء والمدى الديناميكي بين أهدأ وأعلى صوت.</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="المعايير الهندسية التي تحدد نقاء وحجم ملفات الصوت في الويب">
          خصائص الصوت الرقمي (Digital Audio)
        </Heading>

        {/* Sample Rate */}
        <Box x={640} y={170} w={540} h={360} c="purple" at={1} />
        <Doodle x={910} y={235} icon="📊" size={75} c="purple" fill="purple" at={1} />
        <Txt x={910} y={305} size={28} c="purple" at={1}>معدل العينات (Sample Rate)</Txt>
        <Txt x={910} y={360} w={480} size={19} c="ink" at={1}>• عدد القياسات المأخوذة في الثانية (يقاس بـ Hz)</Txt>
        <Txt x={910} y={400} w={480} size={19} c="ink" at={1}>• جودة السي دي القياسية: 44.1 kHz (44,100 عينة/ث)</Txt>
        <Txt x={910} y={440} w={480} size={19} c="ink" at={1}>• جودة الاستوديو والفيديو: 48 kHz</Txt>
        <Txt x={910} y={485} size={20} c="purple" at={1}>كلما زاد معدل العينات ← زادت دقة الترددات العالية</Txt>

        {/* Bit Depth */}
        <Box x={40} y={170} w={560} h={360} c="blue" at={2} />
        <Doodle x={320} y={235} icon="🎚️" size={75} c="blue" fill="blue" at={2} />
        <Txt x={320} y={305} size={28} c="blue" at={2}>عمق البت (Bit Depth)</Txt>
        <Txt x={320} y={360} w={500} size={19} c="ink" at={2}>• عدد البتات المستخدمة لتخزين قيمة كل عينة صوتية</Txt>
        <Txt x={320} y={400} w={500} size={19} c="ink" at={2}>• 16-bit: يعطي 65,536 مستوى لمقدار ارتفاع الصوت</Txt>
        <Txt x={320} y={440} w={500} size={19} c="ink" at={2}>• 24-bit: استوديو احترافي بنقاء استثنائي ومدى ديناميكي واسع</Txt>
        <Txt x={320} y={485} size={20} c="blue" at={2}>كلما زاد عمق البت ← قلّ التشويش وزاد النقاء</Txt>

        {/* Bottom Audio Formats */}
        <Box x={40} y={550} w={1140} h={85} c="green" fill="green" size={21} tc="ink" at={3}>
          🎵 <b>صيغ الصوت في الويب:</b> صيغة <b>MP3 / AAC</b> مضغوطة وخفيفة تناسب سرعات التصفح، بينما صيغة <b>WAV</b> خام وضخمة مخصصة للمونتاج.
        </Box>
      </Scene>
    ),
  },
];

