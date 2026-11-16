// Board scenes · Unit 6 · Lesson 9 · Visualization, Structuring, and The 5-Step Brain Story
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part3: FrameDef[] = [
  {
    id: 'method-visualization',
    title: '٤ · التصور (Visualization)',
    scene: true,
    notes: (
      <>
        <p><b>٤. التصور (Visualization) - ودي مهمة جداً:</b></p>
        <p><b>يعني إيه؟</b> عرض البيانات بصورة مرئية لتسهيل فهمها وتحليلها ومقارنتها.</p>
        <p><b>أدوات التصور:</b> الجداول، الرسوم البيانية، المخططات، والإنفوجرافيك.</p>
        <p><b>مثال الفصول الأربعة:</b> بدلاً من قراءة جدول الأرقام (35، 40، 30، 45)، الرسم البياني بالأعمدة يكشف أن فصل 1/4 هو الأكبر في لمح البصر بمجرد النظر لارتفاع العمود!</p>
        <p><b>احفظها:</b> أحول البيانات إلى شكل مرئي يسهل فهمه = Visualization.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="عرض البيانات بصورة مرئية لتسهيل فهمها وتحليلها في لمح البصر">
          ٤ · التصور – Visualization 📊
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="green" fill="green" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
              ما هو التصور (Visualization)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "عرض البيانات بصورة مرئية لتسهيل فهمها وتحليلها واستخلاص المعاني والمقارنات منها بسرعة."
            </span>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side */}
        {/* Right: 4 Pillars of Visualization */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  📊 أدوات التصور الأربعة (كتاب الوزارة)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                  الأشكال المرئية
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: 12 }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                  <div style={{ fontSize: 24 }}>📋</div>
                  <b style={{ color: '#38bdf8', fontSize: 14 }}>١. الجداول (Tables)</b>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>تنظيم الصفوف والأعمدة</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                  <div style={{ fontSize: 24 }}>📊</div>
                  <b style={{ color: '#4ade80', fontSize: 14 }}>٢. الرسوم البيانية</b>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>أعمدة ومنحنيات للمقارنة</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                  <div style={{ fontSize: 24 }}>🗺️</div>
                  <b style={{ color: '#c084fc', fontSize: 14 }}>٣. المخططات (Charts)</b>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>خرائط ومسارات التدفق</div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 text-center">
                  <div style={{ fontSize: 24 }}>🎨</div>
                  <b style={{ color: '#fb923c', fontSize: 14 }}>٤. الإنفوجرافيك</b>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>رسوم ومعلومات جذابة</div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              كل أداة تحول الأرقام الجامدة إلى شكل بصري ينطق بالمعنى!
            </div>
          </div>
        </Box>

        {/* Left: The 4 Classes Bar Chart Example */}
        <Box x={60} y={215} w={580} h={365} c="green" fill="green" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-green)' }}>
                  🏫 مثال الفصول الأربعة: قراءة أرقام أم رسم بياني؟
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(34, 197, 94, 0.2)', color: 'var(--pen-green)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-green)' }}>
                  المقارنة البصرية
                </span>
              </div>

              {/* Bar Chart Simulation */}
              <div style={{ backgroundColor: '#0f172a', padding: '12px 16px', borderRadius: '12px', border: '1px solid #334155', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', height: '110px' }}>
                  {[
                    { cls: '1/1', count: 35, h: 65, color: '#38bdf8' },
                    { cls: '1/2', count: 40, h: 80, color: '#38bdf8' },
                    { cls: '1/3', count: 30, h: 50, color: '#38bdf8' },
                    { cls: '1/4', count: 45, h: 100, color: '#4ade80', top: true },
                  ].map(bar => (
                    <div key={bar.cls} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: 12, fontWeight: 'bold', color: bar.color }}>{bar.count}</span>
                      <div style={{ width: '40px', height: `${bar.h}px`, backgroundColor: bar.color, borderRadius: '6px 6px 0 0', opacity: 0.9 }} />
                      <span style={{ fontSize: 12, marginTop: 4, fontWeight: 'bold', color: '#f8fafc' }}>{bar.cls}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-700/60" style={{ fontSize: 12.5, lineHeight: 1.5, color: '#86efac' }}>
                👑 <b>الملاحظة اللحظية:</b> بدل ما تقرأ الأرقام في الجدول، عينك عرفت فوراً إن <b>فصل 1/4 هو الأكبر</b> بمجرد رؤية ارتفاع العمود الأخضر!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-green)', fontWeight: 'bold' }}>
              التصور البصري يسبق القراءة النصية بعشرات المرات في سرعة الاستيعاب!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> أحوّل البيانات إلى شكل مرئي يسهل فهمه ومقارنته = <b>Visualization</b> 📊
        </Box>
      </Scene>
    ),
  },

  {
    id: 'method-structuring',
    title: '٥ · الهيكلة (Structuring) - أهم نقطة في الدرس',
    scene: true,
    notes: (
      <>
        <p><b>٥. الهيكلة (Structuring) - أهم نقطة في الدرس:</b></p>
        <p><b>يعني إيه؟</b> تنظيم البيانات وترتيبها بطريقة واضحة تبين العلاقات والتسلسل والمستويات المختلفة بينها.</p>
        <p>بدل ما المعلومات تكون عشوائية، أرتبها بحيث أعرف: إيه الرئيسي؟ وإيه اللي تحته؟ وإيه علاقته بإيه؟</p>
        <p><b>أمثلة:</b> هيكل موقع المدرسة، والهيكل التنظيمي للمدرسة (مدير ➔ وكيل ➔ معلمين ➔ طلاب).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="أهم نقطة في الدرس: تنظيم البيانات وترتيبها في مستويات وعلاقات واضحة">
          ٥ · الهيكلة – Structuring 🏗️ ⭐ (النواة الأساسية)
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="red" fill="red" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-red)' }}>
              ما هي الهيكلة (Structuring)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "تنظيم البيانات وترتيبها بطريقة واضحة تبين العلاقات والتسلسل والمستويات المختلفة بينها (مين الرئيسي ومين الفرعي؟)."
            </span>
          </div>
        </Box>

        {/* 2 Big Tree Cards Side-by-Side */}
        {/* Right: School Website Architecture */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  🏫 مثال موقع المدرسة: تنظيم الكيانات
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                  قاعدة البيانات
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '8px 0' }}>
                <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-600 text-center font-bold" style={{ width: '80%', color: '#38bdf8', fontSize: 13 }}>
                  🏛️ موقع المدرسة الرئيسي (المستوى 1)
                </div>
                <div style={{ color: 'var(--pen-blue)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  📚 الصفوف (أولى • ثانية • ثالثة ثانوي) (المستوى 2)
                </div>
                <div style={{ color: 'var(--pen-blue)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  🚪 الفصول (1/1 • 1/2 • 1/3 • 1/4) (المستوى 3)
                </div>
                <div style={{ color: 'var(--pen-green)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-emerald-950/60 border border-emerald-600 text-center font-bold" style={{ width: '80%', color: '#4ade80', fontSize: 13 }}>
                  🎒 الطلاب وسجلات الدرجات (المستوى 4)
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              دي هيكلة حقيقية: لأن البيانات انتظمت في مستويات وعلاقات واضحة!
            </div>
          </div>
        </Box>

        {/* Left: Administrative School Hierarchy */}
        <Box x={60} y={215} w={580} h={365} c="purple" fill="purple" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  👔 الهيكل التنظيمي للمدرسة (كتاب الوزارة)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  التسلسل الهرمي
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '8px 0' }}>
                <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-600 text-center font-bold" style={{ width: '80%', color: '#c084fc', fontSize: 13 }}>
                  👔 مدير المدرسة (قمة الهرم الإداري)
                </div>
                <div style={{ color: 'var(--pen-purple)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  📋 وكيل المدرسة (الإشراف المباشر)
                </div>
                <div style={{ color: 'var(--pen-purple)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-center font-bold" style={{ width: '80%', color: '#f8fafc', fontSize: 13 }}>
                  👨‍🏫 المعلمون (أعضاء هيئة التدريس)
                </div>
                <div style={{ color: 'var(--pen-orange)', fontSize: 14 }}>⬇️</div>
                <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-600 text-center font-bold" style={{ width: '80%', color: '#fef08a', fontSize: 13 }}>
                  🎒 الطلاب
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الترتيب الهرمي يبين المسؤوليات والعلاقات الإدارية بدقة!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="red" fill="red" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> أنظّم البيانات في شكل واضح يبيّن العلاقات والمستويات = <b>Structuring</b> 🏗️
        </Box>
      </Scene>
    ),
  },

  {
    id: 'brain-mnemonic-story',
    title: '🧠 قصة الذاكرة: الخمس طرق في دماغ الطالب',
    scene: true,
    notes: (
      <>
        <p><b>🧠 قصة الذاكرة الذهبية: الخمس طرق في دماغ الطالب:</b></p>
        <p>تخيل عندك معلومات كتير جداً عن مدرسة: 1. التجريد: أشيل التفاصيل وأطلع المهم. 2. الرسم التصويري: أستخدم رمز بدل الكلام. 3. الأيقونة: صورة صغيرة تمثل وظيفة أو برنامج. 4. التصور: أحول البيانات لجدول أو رسم بياني. 5. الهيكلة: أرتب البيانات في مستويات وعلاقات واضحة.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="القصة السحرية التي تجمع لك مفاهيم الدرس الخمسة في لحظة واحدة">
          🧠 الخمس طرق في دماغ الطالب · قصة التثبيت السحرية ✨
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              🧠 مفتاح التثبيت الدماغي:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              تخيّل أنك مسؤول عن بناء وتصميم نظام لمدرستك.. كيف تطبق الطرق الخمس بالترتيب؟
            </span>
          </div>
        </Box>

        {/* 5 Stacked Story Strips across 1160px */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 215,
            width: 1160,
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            direction: 'rtl',
            pointerEvents: 'auto',
          }}
        >
          {[
            { step: '١', icon: '✂️', title: 'التجريد (Abstraction)', story: 'أشيل التفاصيل الزائدة وأطلع المهم فقط.', color: 'blue' },
            { step: '٢', icon: '🚹', title: 'الرسم التصويري (Pictogram)', story: 'أستخدم رمز أو صورة بدل الكلام والشرح الطويل في الممرات.', color: 'orange' },
            { step: '٣', icon: '📱', title: 'الأيقونة (Icon)', story: 'أستخدم صورة صغيرة تمثّل وظيفة أو برنامجاً على أجهزة المدرسة.', color: 'purple' },
            { step: '٤', icon: '📊', title: 'التصور (Visualization)', story: 'أحوّل درجات الطلاب إلى جدول أو رسم بياني ملون تفهمه العين.', color: 'green' },
            { step: '٥', icon: '🏗️', title: 'الهيكلة (Structuring)', story: 'أرتب البيانات في مستويات وعلاقات هرمية واضحة (مدرسة ➔ صف ➔ فصل ➔ طالب).', color: 'red' },
          ].map(s => (
            <div
              key={s.step}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: `2px solid var(--pen-${s.color})`,
                borderRadius: '12px',
                padding: '10px 18px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
              }}
            >
              <div style={{ fontSize: 24, backgroundColor: `var(--tint-${s.color})`, width: '42px', height: '42px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {s.icon}
              </div>
              <div style={{ width: '240px' }}>
                <span style={{ fontSize: 17, fontWeight: 'bold', color: `var(--pen-${s.color})` }}>
                  {s.step}. {s.title}
                </span>
              </div>
              <div style={{ fontSize: 16, color: '#f8fafc', fontWeight: 'bold' }}>
                👈 {s.story}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="yellow" fill="yellow" size={17} tc="ink" at={2}>
          🌟 <b>قاعدة النجاح:</b> بهذه القصة الواقعية لن تنسى أياً من طرق تصميم البيانات في الامتحان النهائي!
        </Box>
      </Scene>
    ),
  },
];
