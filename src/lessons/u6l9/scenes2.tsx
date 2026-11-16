// Board scenes · Unit 6 · Lesson 9 · 5 Methods: Abstraction, Pictogram, and Icon with comparison
import type { FrameDef } from '../../board/types';
import { Box, Heading, Scene } from '../../sketch/Sketch';

export const part2: FrameDef[] = [
  {
    id: 'methods-hub',
    title: 'خريطة طرق تصميم البيانات الـ 5',
    scene: true,
    notes: (
      <>
        <p><b>طرق تصميم البيانات بحسب كتاب الوزارة:</b></p>
        <p>يعرض الكتاب 5 طرق رئيسية لا غنى عنها في تصميم المعلومات:</p>
        <ol>
          <li><b>التجريد (Abstraction):</b> استخراج المهم وحذف الزوائد.</li>
          <li><b>الرسم التصويري (Pictogram):</b> رموز بصرية لنقل المعلومات دون كلمات.</li>
          <li><b>الأيقونة (Icon):</b> رسوم صغيرة تمثل برامج أو وظائف رقمية.</li>
          <li><b>التصور (Visualization):</b> تحويل الأرقام إلى جداول ورسوم بيانية مرئية.</li>
          <li><b>الهيكلة (Structuring):</b> تنظيم البيانات في مستويات وعلاقات هرمية (أهم نقطة بالدرس!).</li>
        </ol>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="الأساليب الخمسة المعتمدة في كتاب تكنولوجيا المعلومات والاتصالات">
          طرق تصميم البيانات الـ ٥ الأساسية 🛠️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              🛠️ أدوات المصمم الذكي:
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              يعرض كتاب الوزارة ٥ طرق رئيسية لتصميم وتنظيم البيانات لتصل بوضوح للجمهور
            </span>
          </div>
        </Box>

        {/* 5 Distinct Safe Cards across 1160px width */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 220,
            width: 1160,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'stretch',
            gap: '14px',
            direction: 'rtl',
            pointerEvents: 'auto',
          }}
        >
          {[
            { num: '١', title: 'التجريد', en: 'Abstraction', desc: 'أشيل الزائد وأحتفظ بالمهم فقط', color: 'blue', icon: '✂️', hint: 'تصفية وحذف الحشو' },
            { num: '٢', title: 'الرسم التصويري', en: 'Pictogram', desc: 'رمز أو صورة ينقل معلومة دون كلمات', color: 'orange', icon: '🚹', hint: 'علامات الشوارع والمطارات' },
            { num: '٣', title: 'الأيقونة', en: 'Icon', desc: 'صورة صغيرة تمثل برنامجاً أو وظيفة', color: 'purple', icon: '📱', hint: 'شاشات الكمبيوتر والموبايل' },
            { num: '٤', title: 'التصور', en: 'Visualization', desc: 'تحويل الأرقام لشكل مرئي يسهل فهمه', color: 'green', icon: '📊', hint: 'جداول ورسوم بيانية' },
            { num: '٥', title: 'الهيكلة', en: 'Structuring', desc: 'تنظيم المستويات والعلاقات الهرمية', color: 'red', icon: '🏗️', badge: '⭐ الأهم بالدرس', hint: 'مين الرئيسي ومين الفرعي؟' },
          ].map(m => (
            <div
              key={m.num}
              style={{
                flex: 1,
                minWidth: 0,
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: `2px solid var(--pen-${m.color})`,
                borderRadius: '16px',
                padding: '18px 12px',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
              }}
            >
              {m.badge && (
                <div style={{ position: 'absolute', top: -12, right: 10, backgroundColor: 'var(--pen-red)', color: '#fff', fontSize: 11, fontWeight: 'bold', padding: '2px 8px', borderRadius: 8 }}>
                  {m.badge}
                </div>
              )}
              <div>
                <div style={{ fontSize: 36, marginBottom: 4 }}>{m.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: `var(--pen-${m.color})` }}>
                  {m.num}. {m.title}
                </div>
                <div style={{ fontSize: 12, color: '#94a3b8', direction: 'ltr', fontFamily: 'monospace', marginBottom: 8 }}>
                  {m.en}
                </div>
                <div style={{ fontSize: 13, color: '#f8fafc', lineHeight: 1.4, marginBottom: 8 }}>
                  {m.desc}
                </div>
              </div>
              <div style={{ fontSize: 11, color: `var(--pen-${m.color})`, fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6 }}>
                {m.hint}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={2}>
          🌟 <b>نصيحة المعلم:</b> هذه الطرق الخمس تتكامل معاً في أي موقع أو تطبيق ناجح لتوفير تجربة مستخدم مبهرة وسهلة!
        </Box>
      </Scene>
    ),
  },

  {
    id: 'method-abstraction',
    title: '١ · التجريد (Abstraction)',
    scene: true,
    notes: (
      <>
        <p><b>١. التجريد (Abstraction):</b></p>
        <p><b>يعني إيه؟</b> استخراج البيانات المهمة والمقصودة فقط من كمية كبيرة من البيانات، وإهمال التفاصيل غير الضرورية.</p>
        <p><b>مثال الكتاب:</b> لو عندك تقرير طويل جداً، بدل ما تعرض التقرير كله، تلخصه في عدة نقاط رئيسية.</p>
        <p><b>مثال الطلاب:</b> درس أمن المعلومات ➔ (حماية البيانات، كلمات المرور، التشفير، المصادقة). تركنا التفاصيل الزائدة واحتفظنا بالمهم.</p>
        <p><b>احفظها:</b> التجريد = أشيل الزائد وأحتفظ بالمهم.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="استخراج البيانات المهمة فقط وإهمال التفاصيل غير الضرورية">
          ١ · التجريد – Abstraction ✂️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="blue" fill="blue" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
              يعني إيه التجريد؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "استخراج البيانات المهمة والمقصودة فقط من كمية كبيرة من البيانات، وإهمال التفاصيل غير الضرورية."
            </span>
          </div>
        </Box>

        {/* 2 Big Cards Side-by-Side */}
        {/* Right Card: Full text report */}
        <Box x={660} y={215} w={560} h={365} c="purple" fill="purple" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
                  📄 تقرير طويل ومكدس بالتفاصيل
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(168, 85, 247, 0.2)', color: 'var(--pen-purple)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-purple)' }}>
                  مثال الكتاب
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3 text-xs" style={{ fontSize: 13, lineHeight: 1.6, color: '#94a3b8' }}>
                لو عندك تقرير من 10 صفحات، أو درس كامل مليء بالفقرات والتعريفات التاريخية والشروحات الطويلة..
                <br />
                عرض كل هذه الصفحات على الشاشة يسبب تشتتاً للمستخدم ويصعب عليه تذكر ما هو مطلوب منه!
              </div>

              <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-700/60" style={{ fontSize: 13, color: '#f3e8ff', lineHeight: 1.5 }}>
                💡 <b>قاعدة التجريد:</b> المستخدم لا يحتاج قراءة كل كلمة، بل يبحث عن الزبدة والخلاصة!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-purple)', fontWeight: 'bold' }}>
              الحل: تطبيق فلتر التجريد واستخراج النقاط الذهبية فقط!
            </div>
          </div>
        </Box>

        {/* Left Card: Filtered result */}
        <Box x={60} y={215} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  💎 الملخص المركز (مثال أمن المعلومات)
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  النقاط الذهبية
                </span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800 mb-3" style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--pen-ink)' }}>
                بدل ما أدي الطالب صفحة كاملة عن درس أمن المعلومات، لخصناه في ٤ عناصر رئيسية:
                <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <div className="p-2 rounded bg-slate-800 text-center font-bold" style={{ color: '#38bdf8' }}>🔒 حماية البيانات</div>
                  <div className="p-2 rounded bg-slate-800 text-center font-bold" style={{ color: '#4ade80' }}>🔑 كلمات المرور</div>
                  <div className="p-2 rounded bg-slate-800 text-center font-bold" style={{ color: '#c084fc' }}>🛡️ التشفير الرقمي</div>
                  <div className="p-2 rounded bg-slate-800 text-center font-bold" style={{ color: '#fb923c' }}>✅ المصادقة والتحقق</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-700/60" style={{ fontSize: 13, color: '#fef08a' }}>
                ✨ <b>النتيجة:</b> أخذت المعلومات المهمة وتركت التفاصيل الزائدة التي لا أحتاجها في الملخص!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              التجريد يصنع رسالة واضحة يسهل تذكرها وحفظها!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> التجريد (Abstraction) = أشيل الزائد ✂️ وأحتفظ بالمهم فقط 💎
        </Box>
      </Scene>
    ),
  },

  {
    id: 'method-pictogram',
    title: '٢ · الرسم التصويري (Pictogram)',
    scene: true,
    notes: (
      <>
        <p><b>٢. الرسم التصويري (Pictogram):</b></p>
        <p><b>الرسم التصويري هو:</b> استخدام رموز أو صور لنقل المعلومات دون الحاجة إلى كلمات.</p>
        <p><b>أمثلة:</b> دورات المياه، مدخل أو باب، ممنوع التدخين، المصعد، مخرج الطوارئ، المحطات والمطارات.</p>
        <p><b>احفظها:</b> صورة أو رمز يوصل معلومة = Pictogram.</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="استخدام رموز أو صور لنقل المعلومات دون الحاجة إلى كلمات">
          ٢ · الرسم التصويري – Pictogram 🚹
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="orange" fill="orange" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
              ما هو الرسم التصويري (Pictogram)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "استخدام رموز أو صور لنقل المعلومات دون الحاجة إلى كلمات (رسالة عالمية يفهمها الجميع فوراً)."
            </span>
          </div>
        </Box>

        {/* Signage Gallery across 1160px */}
        <div
          style={{
            position: 'absolute',
            left: 60,
            top: 220,
            width: 1160,
            display: 'flex',
            justifyContent: 'space-between',
            gap: '14px',
            direction: 'rtl',
            pointerEvents: 'auto',
          }}
        >
          {[
            { icon: '🚹🚺', title: 'دورات المياه', en: 'Restrooms', desc: 'تحديد مرافق الرجال والنساء بلمح البصر دون حاجة لأي لغة مكتوبة' },
            { icon: '🚪', title: 'مدخل أو باب', en: 'Entrance / Door', desc: 'توجيه حركة الدخول والمسارات في المباني العامة والمولات' },
            { icon: '🚭', title: 'ممنوع التدخين', en: 'No Smoking', desc: 'تحذير عالمي صارم يفهمه أي مسافر في كل مطارات العالم' },
            { icon: '🛗', title: 'المصعد', en: 'Elevator', desc: 'إرشاد مباشر لمكان المصعد الكهربائي لكبار السن والزوار' },
            { icon: '🏃‍♂️🚪', title: 'مخرج الطوارئ', en: 'Emergency Exit', desc: 'توجيه سريع للنجاة عند الخطر والحرائق دون قراءة نصوص' },
          ].map(item => (
            <div
              key={item.title}
              style={{
                flex: 1,
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                border: '2px solid var(--pen-orange)',
                borderRadius: '16px',
                padding: '20px 10px',
                textAlign: 'center',
                boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ fontSize: 44, marginBottom: 6 }}>{item.icon}</div>
                <div style={{ fontSize: 18, fontWeight: 'bold', color: 'var(--pen-orange)' }}>{item.title}</div>
                <div style={{ fontSize: 11.5, color: '#94a3b8', direction: 'ltr', fontFamily: 'monospace', marginBottom: 8 }}>{item.en}</div>
                <div style={{ fontSize: 13, color: '#f8fafc', lineHeight: 1.5 }}>{item.desc}</div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--pen-orange)', fontWeight: 'bold', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 6, marginTop: 8 }}>
                رمز عالمي بدون كلمات
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="green" fill="green" size={17} tc="ink" at={2}>
          🌟 <b>كبسولة الامتحان:</b> صورة أو رمز يوصل معلومة وإرشاداً دون الحاجة لكلمات = <b>Pictogram</b> 🌍
        </Box>
      </Scene>
    ),
  },

  {
    id: 'method-icon',
    title: '٣ · الأيقونة (Icon) والفرق الحاسم مع Pictogram',
    scene: true,
    notes: (
      <>
        <p><b>٣. الأيقونة (Icon):</b></p>
        <p><b>الأيقونة هي:</b> صورة أو رسم صغير يمثل برنامجاً أو ملفاً أو وظيفة معينة على الكمبيوتر أو الهاتف الذكي.</p>
        <p><b>أمثلة:</b> سلة المحذوفات 🗑️، المتصفح 🌐، الكاميرا 📷.</p>
        <p><b>الفرق الجوهري:</b> الرسم التصويري ينقل معلومة وإرشاداً (🚭)، بينما الأيقونة تمثل برنامجاً أو وظيفة (🗑️).</p>
      </>
    ),
    render: () => (
      <Scene>
        <Heading sub="صورة صغيرة تمثل برنامجاً أو وظيفة رقمية · والفرق مع الرسم التصويري">
          ٣ · الأيقونة – Icon 📱 ومقارنة الامتحان الذهبية ⚖️
        </Heading>

        {/* Top Banner */}
        <Box x={60} y={115} w={1160} h={85} c="purple" fill="purple" at={1}>
          <div style={{ textAlign: 'center', padding: '10px 20px', lineHeight: 1.45, whiteSpace: 'normal' }}>
            <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-purple)' }}>
              ما هي الأيقونة (Icon)؟
            </span>
            &nbsp;
            <span style={{ fontSize: 18, color: 'var(--pen-ink)', fontWeight: 'bold' }}>
              "صورة أو رسم صغير يمثل برنامجاً أو ملفاً أو وظيفة معينة على الكمبيوتر أو الهاتف الذكي."
            </span>
          </div>
        </Box>

        {/* 2 Big Cards: Desktop Mockup vs Exam Table */}
        {/* Right: Mockup Examples */}
        <Box x={660} y={215} w={560} h={365} c="blue" fill="blue" at={2}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-blue)' }}>
                  📱 أمثلة واقعية على شاشات الأجهزة
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(59, 130, 246, 0.2)', color: 'var(--pen-blue)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-blue)' }}>
                  وظائف برمجية
                </span>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#0f172a', padding: '14px', borderRadius: '12px', border: '1px solid #334155', marginBottom: 10 }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36 }}>🗑️</div>
                  <div style={{ fontSize: 13, fontWeight: 'bold', color: '#f8fafc' }}>سلة المحذوفات</div>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>وظيفة مسح الملفات</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36 }}>🌐</div>
                  <div style={{ fontSize: 13, fontWeight: 'bold', color: '#f8fafc' }}>المتصفح</div>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>برنامج تصفح الويب</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 36 }}>📷</div>
                  <div style={{ fontSize: 13, fontWeight: 'bold', color: '#f8fafc' }}>الكاميرا</div>
                  <div style={{ fontSize: 11, color: '#94a3b8' }}>تطبيق التقاط الصور</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-700/60" style={{ fontSize: 13, color: '#bae6fd', lineHeight: 1.5 }}>
                كل أيقونة تساعد المستخدم يعرف فوراً: <b>إيه الوظيفة أو الشيء اللي بتمثله</b> دون كتابة اسمها!
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-blue)', fontWeight: 'bold' }}>
              الأيقونة مرتبطة دائماً بالبرامج والملفات والأدوات التقنية!
            </div>
          </div>
        </Box>

        {/* Left: The Golden Comparison Table */}
        <Box x={60} y={215} w={580} h={365} c="orange" fill="orange" at={3}>
          <div style={{ textAlign: 'right', padding: '16px 20px', whiteSpace: 'normal', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', boxSizing: 'border-box' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '6px' }}>
                <span style={{ fontSize: 19, fontWeight: 'bold', color: 'var(--pen-orange)' }}>
                  ⚖️ مقارنة الامتحان: Pictogram مقابل Icon
                </span>
                <span style={{ fontSize: 11, fontWeight: 'bold', backgroundColor: 'rgba(249, 115, 22, 0.2)', color: 'var(--pen-orange)', padding: '2px 8px', borderRadius: '6px', border: '1px solid var(--pen-orange)' }}>
                  سؤال متكرر ⭐
                </span>
              </div>

              <div className="space-y-2 text-xs" style={{ fontSize: 13, lineHeight: 1.55 }}>
                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: 'var(--pen-orange)' }}>🚹 الرسم التصويري (Pictogram):</b>
                  <br />
                  يستخدم رمزاً أو صورة لنقل <b>معلومة أو إرشاد أو تحذير عام</b>.<br />
                  <span style={{ color: '#94a3b8' }}>مثال: 🚭 ممنوع التدخين • 🛗 المصعد • 🏃‍♂️ مخرج الطوارئ</span>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                  <b style={{ color: 'var(--pen-purple)' }}>📱 الأيقونة (Icon):</b>
                  <br />
                  تمثل <b>برنامجاً أو ملفاً أو وظيفة برمجية على الجهاز</b>.<br />
                  <span style={{ color: '#94a3b8' }}>مثال: 🗑️ سلة المحذوفات • 🌐 المتصفح • 📷 الكاميرا</span>
                </div>
              </div>
            </div>

            <div style={{ fontSize: 12, color: 'var(--pen-orange)', fontWeight: 'bold' }}>
              معلومة عامة = Pictogram | برنامج أو وظيفة = Icon!
            </div>
          </div>
        </Box>

        {/* Bottom Banner */}
        <Box x={60} y={595} w={1160} h={75} c="purple" fill="purple" size={17} tc="ink" at={4}>
          🌟 <b>كبسولة الامتحان:</b> هل العنصر ينقل تحذيراً وإرشاداً؟ ➔ <b>Pictogram</b> | هل يفتح تطبيقاً أو أداة؟ ➔ <b>Icon</b>!
        </Box>
      </Scene>
    ),
  },
];
