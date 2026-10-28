// Interactive parts for Unit 3 · Lesson 1 (The Evolution of the Web)

const STUDENTS = {
  2401: { name: 'أحمد سامي', math: 88, physics: 91, prog: 95 },
  2402: { name: 'مريم خالد', math: 97, physics: 85, prog: 99 },
  2403: { name: 'يوسف عادل', math: 74, physics: 80, prog: 86 },
};

const TF = ['✔️ صح', '✖️ غلط'];

/* ---------------- Section checks ---------------- */
const CHECKS = {
  'check-1': [
    {
      q: 'مين بيحدد مكان المورد (الصفحة) بالظبط على الويب؟',
      opts: ['HTML', 'URL', 'HTTP', 'Web Browser'], a: 1,
      why: 'الـ URL هو العنوان. HTTP هو قواعد الطلب والرد، وHTML هو لغة كتابة الصفحة نفسها.',
    },
    {
      q: 'إيه العلاقة بين الإنترنت والويب؟',
      opts: ['هما نفس الحاجة', 'الإنترنت جزء من الويب', 'الويب خدمة شغالة فوق شبكة الإنترنت', 'الويب ظهر قبل الإنترنت'], a: 2,
      why: 'الإنترنت هو الشبكة اللي بتوصّل الأجهزة، والويب نظام مستندات مربوطة بروابط بيستخدم الشبكة دي.',
    },
    {
      q: 'Tim Berners-Lee كان عايز يحل مشكلة إيه؟',
      opts: ['بطء الإنترنت', 'الفيروسات', 'غلاء أجهزة الكمبيوتر', 'صعوبة الوصول لمستندات متفرقة على أجهزة مختلفة'], a: 3,
      why: 'المعلومات كانت موجودة بس متفرقة. الويب ربطها ببعض بروابط وخلّى أي حد بمتصفح يوصلها.',
    },
  ],
  'check-3': [
    {
      q: 'ليه ملف HTML منفصل لكل طالب مش حل عملي؟',
      opts: ['لأن المتصفح مش بيقدر يفتح ملفات كتير', 'لأن صعب نحدّث آلاف الملفات، وبيحصل تكرار وأخطاء', 'لأن HTML مش بيعرض أرقام', 'لأنه مستحيل تقنيًا'], a: 1,
      why: 'الحل ممكن، بس كل تعديل في درجة أو في التصميم بيتحول لشغل يدوي كبير ومعرّض للغلط.',
    },
    {
      q: 'الفكرة اللي هتحل المشكلة:',
      opts: ['نفصل البيانات عن تصميم الصفحة', 'نصغّر حجم الملفات', 'نحط نتايج كل الطلاب في صفحة واحدة', 'نبعت النتيجة بالإيميل'], a: 0,
      why: 'البيانات تبقى في مكان منظم، والتصميم في قالب واحد، وندمجهم وقت الطلب.',
    },
  ],
  'check-4': [
    {
      q: 'درجة طالب في الفيزياء اتعدلت. مع قاعدة البيانات هنعمل إيه؟',
      opts: ['نعيد كتابة صفحة الطالب', 'نعدّل خانة واحدة في صف الطالب', 'نعدّل كل الملفات', 'نحذف الطالب ونضيفه تاني'], a: 1,
      why: 'البيانات متخزنة مرة واحدة في مكان منظم، فالتحديث بيبقى في خانة واحدة.',
    },
    {
      q: 'قاعدة البيانات لوحدها بتبعت صفحة HTML للمتصفح؟',
      opts: ['أيوه، دي وظيفتها', 'أيوه، لو البيانات قليلة', 'لأ، هي بتخزّن البيانات؛ محتاجين حد ياخد الطلب ويجهّز الصفحة', 'لأ، لأنها شغالة جوه المتصفح'], a: 2,
      why: 'قاعدة البيانات بتحفظ وترجّع بيانات. اللي بيستقبل الطلب ويبني الصفحة هو الـ Backend.',
    },
  ],
  'check-5': [
    {
      q: 'في صفحة النتيجة، مين بيتأكد إن الطالب مسموح له يشوف النتيجة دي؟',
      opts: ['المتصفح', 'قاعدة البيانات', 'الـ Backend', 'ملف HTML'], a: 2,
      why: 'منطق التطبيق، ومنه الصلاحيات، بيتنفّذ على السيرفر في الـ Backend.',
    },
    {
      q: '20,000 طالب بيشوفوا نتايجهم. محتاجين كام قالب HTML؟',
      opts: ['20,000', 'قالب واحد', 'قالب لكل كلية', 'ولا قالب'], a: 1,
      why: 'القالب واحد، والـ Backend بيملاه ببيانات الطالب اللي طلب.',
    },
    {
      q: 'Server-Side Rendering (SSR) معناها:',
      opts: ['المتصفح يبني الصفحة من البيانات', 'السيرفر يجهّز HTML كامل قبل ما يبعته', 'الصفحة متخزنة جاهزة على السيرفر من الأول', 'JavaScript تحدّث جزء من الصفحة'], a: 1,
      why: 'في الـ SSR الصفحة بتتبني على السيرفر (قالب + بيانات) والمتصفح بيستلمها جاهزة.',
    },
  ],
  'check-6': [
    { q: 'العنوان يبقى لونه أزرق وحجمه أكبر.', opts: ['HTML', 'CSS', 'JavaScript'], a: 1, why: 'الألوان والأحجام مظهر ← CSS.' },
    { q: 'يبقى في الصفحة خانة لرقم الطالب وزرار.', opts: ['HTML', 'CSS', 'JavaScript'], a: 0, why: 'وجود العناصر نفسها بنية ← HTML.' },
    { q: 'لما يضغط الزرار والخانة فاضية، يظهر تنبيه.', opts: ['HTML', 'CSS', 'JavaScript'], a: 2, why: '"لما يحصل كذا، اعمل كذا" ده سلوك ← JavaScript.' },
    { q: 'الكروت تبقى جنب بعض بدل تحت بعض.', opts: ['HTML', 'CSS', 'JavaScript'], a: 1, why: 'ترتيب العناصر على الشاشة تنسيق ← CSS.' },
    { q: 'لما يختار كلية من القائمة، تظهر أقسامها بس.', opts: ['HTML', 'CSS', 'JavaScript'], a: 2, why: 'الصفحة بتتغير كرد فعل على اختيار المستخدم ← JavaScript.' },
  ],
  'check-8': [
    { q: 'الـ API اتفاق بيحدد البرامج تتعامل مع بعض إزاي.', opts: TF, a: 0, why: 'بيحدد العمليات المتاحة، وإزاي تطلبها، وإيه اللي هيرجع.' },
    { q: 'API و JSON نفس الحاجة.', opts: TF, a: 1, why: 'JSON صيغة لكتابة البيانات. الـ API هي الاتفاق، والرد ممكن يبقى JSON أو غيرها.' },
    { q: 'أي API لازم تكون REST.', opts: TF, a: 1, why: 'REST أسلوب واحد لتصميم واجهات الويب، ومش كل API ماشية عليه.' },
    { q: 'JavaScript هي اللي اخترعت فكرة الـ API.', opts: TF, a: 1, why: 'الفكرة أقدم منها، ومستخدمة في كل لغات البرمجة وأنظمة التشغيل.' },
    { q: 'الطلب اللي JavaScript بتبعته بيتكتب حسب قواعد الـ API.', opts: TF, a: 0, why: 'الـ API هي القواعد، والطلب حاجة بتتبعت حسب القواعد دي.' },
  ],
  'check-9': (() => {
    const O = ['📄 أقرب لـ Web Page', '🧰 أقرب لـ Web App'];
    return [
      { q: 'صفحة فيها تاريخ الجامعة وصور الحرم.', opts: O, a: 0, why: 'هدفها عرض معلومات.' },
      { q: 'موقع تحجز فيه تذكرة قطر وتدفع.', opts: O, a: 1, why: 'المستخدم بينفّذ مهمة كاملة.' },
      { q: 'بريد إلكتروني على الويب: تقرا رسائل وتبعت وتمسح.', opts: O, a: 1, why: 'وظائف تفاعلية لإدارة رسائلك.' },
      { q: 'مقال عن تاريخ الإنترنت فيه زرار يكبّر الخط.', opts: O, a: 0, why: 'فيه تفاعل بسيط، بس الهدف الأساسي القراءة. التفاعل لوحده مش بيحوّل الصفحة لتطبيق.' },
    ];
  })(),
};

Object.entries(CHECKS).forEach(([id, items]) => {
  const root = document.getElementById(id);
  if (root) renderQuestions(root, items);
});

/* ---------------- Final assessment ---------------- */
(() => {
  const root = $('#quiz');
  if (!root) return;
  renderQuiz(root, $('#quiz-score'), $('#quiz-reset'), [
    {
      q: 'ليه ظهر الويب؟',
      opts: ['علشان يزوّد سرعة الإنترنت', 'علشان يربط مستندات على أجهزة مختلفة بروابط ويسهّل تبادل المعلومات', 'علشان يستبدل الإيميل', 'علشان يخزّن البيانات بدل قواعد البيانات'], a: 1,
      why: 'المشكلة كانت معلومات متفرقة على أجهزة مختلفة، والحل كان مستندات مربوطة بروابط.',
    },
    {
      q: 'بعد ما ملف HTML يوصل، مين بيحوّله لصفحة على الشاشة؟',
      opts: ['Web Server', 'Database', 'URL', 'Web Browser'], a: 3,
      why: 'السيرفر بيبعت النص بس، والمتصفح هو اللي بيحلّله ويعرضه.',
    },
    {
      q: 'صفحة "اتصل بنا" فيها زرار يفتح خريطة، والسيرفر بيبعت نفس الملف لكل الزوار. الصفحة دي:',
      opts: ['Static، لأن محتواها مش بيتولد وقت الطلب', 'Dynamic، لأن فيها زرار', 'Web App', 'مش صفحة ويب'], a: 0,
      why: 'Static بتوصف طريقة تجهيز المحتوى على السيرفر، مش وجود تفاعل.',
    },
    {
      q: 'أهم ميزة لقاعدة البيانات في موقع النتائج:',
      opts: ['بتخلّي شكل الصفحة أحلى', 'بتشغّل JavaScript', 'بتنظّم البيانات فنحفظها ونسترجعها ونحدّثها بسهولة', 'بتعرض الصفحة للطالب'], a: 2,
      why: 'دورها تخزين البيانات بشكل منظم، مش تصميم ولا عرض.',
    },
    {
      q: 'أي واحدة من دول <b>مش</b> من شغل الـ Backend؟',
      opts: ['استقبال الطلب', 'التأكد من صلاحية المستخدم', 'جلب البيانات من قاعدة البيانات', 'رسم الصفحة على شاشة المستخدم'], a: 3,
      why: 'رسم الصفحة شغل المتصفح. الـ Backend بيجهّز الرد بس.',
    },
    {
      q: 'طالبين فتحوا صفحة النتيجة، وكل واحد شاف بياناته هو. ده حصل لأن:',
      opts: ['فيه ملفين HTML متجهزين مسبقًا', 'الـ Backend ملا نفس القالب ببيانات مختلفة', 'المتصفح خمّن البيانات', 'كل طالب عنده سيرفر'], a: 1,
      why: 'قالب واحد + بيانات كل طالب من قاعدة البيانات = صفحة مختلفة لكل واحد.',
    },
    {
      q: 'أدق وصف لدور JavaScript في المتصفح:',
      opts: ['تحدد بنية الصفحة', 'تتحكم في الألوان والخطوط', 'تضيف سلوك وتفاعل للصفحة', 'تخزّن بيانات كل الطلاب'], a: 2,
      why: 'البنية HTML، والمظهر CSS، والسلوك JavaScript.',
    },
    {
      q: 'في مثال البحث في الخلفية، إيه اللي رجع من السيرفر؟',
      opts: ['صفحة HTML كاملة جديدة', 'البيانات المطلوبة بس', 'ملف CSS', 'ولا حاجة'], a: 1,
      why: 'رجعت بيانات الطالب بس، وJavaScript حطتها في الجزء المناسب من غير ما الصفحة تتحمّل كلها.',
    },
    {
      q: 'الـ API هي:',
      opts: ['الطلب اللي بيتبعت للسيرفر', 'صيغة بيانات زي JSON', 'لغة برمجة', 'اتفاق بيحدد البرامج تطلب من بعض إيه وإزاي وإيه اللي هيرجع'], a: 3,
      why: 'الطلب بيمشي حسب الـ API، وJSON ممكن تكون صيغة الرد، بس الـ API هي الاتفاق نفسه.',
    },
    {
      q: 'بوابة الطلاب أقرب لـ Web App لأن:',
      opts: ['فيها صور كتير', 'مكتوبة بـ HTML', 'المستخدم بينفّذ فيها مهام زي تسجيل الدخول وتسجيل المواد', 'ليها URL'], a: 2,
      why: 'المعيار هو الهدف: تنفيذ مهام. الصور وHTML والـ URL موجودين في أي صفحة.',
    },
  ]);
})();

(() => {
  const root = $('#diff');
  if (!root) return;
  renderQuiz(root, $('#diff-score'), $('#diff-reset'), [
    { q: 'قواعد الطلب والرد بين المتصفح والسيرفر.', opts: ['HTML', 'HTTP'], a: 1, why: 'HTTP بروتوكول تواصل، وHTML لغة كتابة الصفحة.' },
    { q: 'عنوان المورد اللي عايز توصله.', opts: ['URL', 'HTTP'], a: 0, why: 'الـ URL هو "فين"، وHTTP هو "إزاي نتكلم".' },
    { q: 'البرنامج اللي بيحلّل HTML ويعرضه.', opts: ['Web Server', 'Web Browser'], a: 1, why: 'السيرفر بيبعت، والمتصفح بيعرض.' },
    { q: 'صفحة نتيجة الطالب اللي بتتولد من قاعدة البيانات وقت الطلب.', opts: ['Static Web Page', 'Dynamic Web Page'], a: 1, why: 'المحتوى بيتولد وقت الطلب حسب الطالب.' },
    { q: 'اتفاق بيحدد إزاي تطلب نتيجة طالب وإيه اللي هيرجع.', opts: ['API', 'JSON'], a: 0, why: 'ده الاتفاق نفسه. JSON ممكن تكون بس صيغة البيانات اللي بترجع.' },
    { q: 'مربع النتيجة اتغيّر بس، والملاحظة اللي كتبتها فضلت موجودة.', opts: ['إعادة تحميل الصفحة كلها', 'تحديث جزء من الصفحة'], a: 1, why: 'لو الصفحة اتحملت كلها كانت الملاحظة هتضيع.' },
    { q: 'الجزء اللي بيتأكد من صلاحية الطالب على السيرفر.', opts: ['Frontend', 'Backend'], a: 1, why: 'الصلاحيات لازم تتحقق على السيرفر، لأن الكود اللي في المتصفح تحت تحكم المستخدم.' },
    { q: 'ترتيب الكروت جنب بعض بدل تحت بعض.', opts: ['CSS', 'JavaScript'], a: 0, why: 'ده تنسيق ومظهر، مش سلوك.' },
  ]);
})();

/* ---------------- Ordering activities ---------------- */
const ORDERS = {
  static: {
    steps: ['المستخدم يكتب العنوان أو يضغط رابط', 'المتصفح يبعت طلب HTTP للسيرفر', 'السيرفر يحدد المورد المطلوب', 'السيرفر يبعت ملف HTML', 'المتصفح يحلّل HTML ويعرضه'],
    done: 'المتصفح يطلب ← السيرفر يدوّر ويبعت ← المتصفح يحلّل ويعرض.',
  },
  async: {
    steps: ['المستخدم يتفاعل مع الصفحة (يضغط بحث)', 'JavaScript تبعت طلب في الخلفية', 'السيرفر يعالج الطلب', 'السيرفر يرجّع البيانات المطلوبة', 'JavaScript تحدّث الجزء المناسب من الصفحة'],
    done: 'الصفحة فضلت موجودة طول الوقت، واتغيّر جزء منها بس.',
  },
  ssr: {
    steps: ['الطالب يطلب صفحة النتائج', 'الـ Backend يستقبل الطلب', 'يتأكد من هوية الطالب وصلاحيته', 'يسترجع البيانات من قاعدة البيانات', 'يحط البيانات في قالب HTML', 'يبعت الصفحة الناتجة للمتصفح', 'المتصفح يعرض النتيجة'],
    done: 'صلاحية ← بيانات ← قالب ← صفحة. الترتيب ده مهم: مينفعش نجيب البيانات قبل ما نتأكد إن الطالب مسموح له.',
  },
};

$$('[data-order]').forEach(root => {
  const { steps, done } = ORDERS[root.dataset.order];
  root.innerHTML = `
    <div class="ord-slots"></div>
    <div class="chips ord-pool mt-4"></div>
    <div class="flex items-center justify-center gap-3 mt-4">
      <span class="pill pill-primary ord-msg"></span>
      <button class="btn ord-reset">↺ إعادة</button>
    </div>
    <div class="q-why ord-done hidden"></div>`;
  const slots = $('.ord-slots', root), pool = $('.ord-pool', root), msg = $('.ord-msg', root), doneBox = $('.ord-done', root);
  let next = 0;

  function reset() {
    next = 0;
    doneBox.classList.add('hidden');
    slots.innerHTML = steps.map((_, i) => `<div class="ord-slot"><span class="num">${arNum(i + 1)}</span></div>`).join('');
    pool.innerHTML = '';
    shuffle(steps.map((s, i) => [s, i])).forEach(([s, i]) => {
      const c = document.createElement('button');
      c.className = 'chip';
      c.textContent = s;
      c.addEventListener('click', () => {
        if (i !== next) {
          c.classList.remove('shake');
          void c.offsetWidth;
          c.classList.add('shake');
          msg.textContent = 'مش دي الخطوة اللي بعد كده 🤔';
          return;
        }
        const slot = slots.children[next];
        slot.classList.add('filled');
        slot.insertAdjacentText('beforeend', s);
        c.remove();
        next++;
        msg.textContent = `${arNum(next)} / ${arNum(steps.length)}`;
        if (next === steps.length) {
          msg.textContent = '🎉 الترتيب صح';
          doneBox.innerHTML = '✅ ' + done;
          doneBox.classList.remove('hidden');
        }
      });
      pool.appendChild(c);
    });
    msg.textContent = `٠ / ${arNum(steps.length)}`;
  }
  $('.ord-reset', root).addEventListener('click', reset);
  reset();
});

/* ---------------- Applied questions (reveal) ---------------- */
(() => {
  const root = $('#applied');
  if (!root) return;
  const items = [
    ['🥐 مخبز عنده موقع فيه المنيو والعنوان، والمنيو بيتغير مرتين في السنة. محتاج Database و Backend؟',
      'غالبًا لأ. المحتوى واحد لكل الزوار ونادرًا ما بيتغير، فصفحات Static كفاية ونعدّل الملف لما المنيو يتغير. لو بقى فيه طلب أونلاين لكل زبون، ساعتها نحتاج Backend و Database.'],
    ['🏫 المدرسة عايزة كل ولي أمر يشوف غياب ابنه بس. اشرح الطلب بيمشي إزاي.',
      'المتصفح يبعت طلب ← الـ Backend يتأكد إن ولي الأمر مسموح له يشوف بيانات الطالب ده ← يجيب سجل الغياب من الـ Database ← يملا قالب HTML ← يبعت الصفحة ← المتصفح يعرضها.'],
    ['🌤️ موقع طقس بيحدّث درجة الحرارة كل 10 دقايق، والصفحة مش بترمش ومكانك فيها مش بيتغير. إيه اللي بيحصل؟',
      'JavaScript بتبعت طلب غير متزامن في الخلفية، والسيرفر يرجّع درجة الحرارة الجديدة بس، وJavaScript تحدّث الجزء ده. مستند HTML نفسه مش بيتحمّل من جديد.'],
    ['💬 صاحبك قال: "الـ API يعني ملف JSON اللي بيرجع من السيرفر". صحّحه.',
      'الـ API هي الاتفاق اللي بيحدد إيه اللي ممكن يتطلب وإزاي وإيه اللي هيرجع. JSON مجرد صيغة ممكن الرد يتكتب بيها، وممكن الرد ييجي بصيغة تانية.'],
    ['📱 استمارة بتقولك "رقم الموبايل لازم يكون 11 رقم" قبل ما تبعت. مين عمل ده؟ وهل كده السيرفر مش محتاج يتحقق؟',
      'JavaScript في المتصفح. لكن السيرفر لازم يتحقق تاني، لأن الكود اللي في المتصفح ممكن يتعطل أو المستخدم يغيّره.'],
    ['📰 موقع أخبار فيه مقالات وخانة بحث وتعليقات. Web Page ولا Web App؟',
      'مفيش إجابة واحدة قاطعة. هدفه الأساسي عرض الأخبار، فهو أقرب لـ Web Page، بس فيه وظائف تفاعلية. المهم تبرر إجابتك بهدف الموقع والمهام اللي المستخدم بينفذها.'],
  ];
  root.innerHTML = items.map(([q, a]) => `
    <div class="card interactive">
      <p class="font-extrabold text-lg">${q}</p>
      <details class="reveal mt-2"><summary>اكشف الإجابة</summary><div class="ans">${a}</div></details>
    </div>`).join('');
})();

/* ---------------- One template, different data ---------------- */
(() => {
  const row = $('#tpl-row'), out = $('#tpl-out');
  if (!row) return;
  const btns = $$('[data-stu]');
  function show(id) {
    const s = STUDENTS[id];
    btns.forEach(b => b.classList.toggle('on', b.dataset.stu === id));
    row.innerHTML = `<span class="cm">id:</span> <span class="ph">${id}</span>
<span class="cm">name:</span> <span class="ph">${esc(s.name)}</span>
<span class="cm">math:</span> <span class="ph">${s.math}</span>
<span class="cm">physics:</span> <span class="ph">${s.physics}</span>
<span class="cm">prog:</span> <span class="ph">${s.prog}</span>`;
    out.innerHTML = `<h4>Result: ${esc(s.name)}</h4>
      <div class="row"><span>ID</span><b>${id}</b></div>
      <div class="row"><span>Math</span><b>${s.math}</b></div>
      <div class="row"><span>Physics</span><b>${s.physics}</b></div>
      <div class="row"><span>Programming</span><b>${s.prog}</b></div>`;
    out.parentElement.classList.remove('shake');
    void out.offsetWidth;
    out.parentElement.classList.add('shake');
  }
  btns.forEach(b => b.addEventListener('click', () => show(b.dataset.stu)));
  show('2401');
})();

/* ---------------- HTML / CSS / JavaScript layers ---------------- */
(() => {
  const demo = $('#ld');
  if (!demo) return;
  const cssBtn = $('#ld-css'), jsBtn = $('#ld-js'), input = $('#ld-input'), msg = $('#ld-msg');
  let js = false;
  function say(text, cls = '') { msg.textContent = text; msg.className = 'ld-msg ' + cls; }
  cssBtn.addEventListener('click', () => {
    cssBtn.classList.toggle('on', demo.classList.toggle('css'));
  });
  jsBtn.addEventListener('click', () => {
    js = !js;
    jsBtn.classList.toggle('on', js);
    say('');
  });
  $('#ld-btn').addEventListener('click', () => {
    if (!js) return say('(الزرار موجود، بس مفيش كود يحدد يعمل إيه لما تضغطه)');
    const v = input.value.trim();
    if (!v) return say('⚠️ اكتب رقم الطالب الأول', 'bad');
    if (!/^\d+$/.test(v)) return say('⚠️ رقم الطالب لازم يكون أرقام بس', 'bad');
    say('✓ الرقم مكتوب صح. هنا الطلب يتبعت للسيرفر.', 'good');
  });
  input.addEventListener('input', () => { if (js && msg.textContent) say(''); });
})();

/* ---------------- Full reload vs background request ---------------- */
(() => {
  const site = $('#ax-site');
  if (!site) return;
  const box = $('#ax-box'), countEl = $('#ax-count'), note = $('#ax-note'), pick = $('#ax-id');
  const notes = $('input', site);
  let count = 1, busy = false;
  const result = id => {
    const s = STUDENTS[id];
    return `<b>${esc(s.name)}</b> · رياضيات ${s.math} · فيزياء ${s.physics} · برمجة ${s.prog}`;
  };

  $('#ax-full').addEventListener('click', () => {
    if (busy) return;
    busy = true;
    site.classList.remove('reloading');
    void site.offsetWidth;
    site.classList.add('reloading');
    setTimeout(() => {
      count++;
      countEl.textContent = arNum(count);
      notes.value = '';
      box.classList.remove('flashed');
      box.innerHTML = result(pick.value);
      note.innerHTML = '📄 الصفحة <b class="hl-danger">كلها</b> اتشالت واتحمّلت من جديد، والملاحظة اللي كتبتها ضاعت.';
    }, 250);
    setTimeout(() => { busy = false; }, 700);
  });

  $('#ax-bg').addEventListener('click', () => {
    if (busy) return;
    busy = true;
    box.classList.remove('flashed');
    box.innerHTML = '<span class="muted">⏳ بندوّر… (جرّب تكتب في الملاحظات، الصفحة شغالة)</span>';
    setTimeout(() => {
      box.innerHTML = result(pick.value);
      box.classList.add('flashed');
      note.innerHTML = '⚡ <b class="hl-safe">مربع النتيجة بس</b> اتغيّر. الملاحظة لسه موجودة، والعدّاد ما زادش.';
      busy = false;
    }, 900);
  });
})();

/* ---------------- Concept map: two ways back ---------------- */
(() => {
  const btns = $$('[data-ret]');
  btns.forEach(b => b.addEventListener('click', () => {
    btns.forEach(x => x.classList.toggle('on', x === b));
    $$('[data-retbox]').forEach(box => box.classList.toggle('hidden', box.dataset.retbox !== b.dataset.ret));
  }));
})();
