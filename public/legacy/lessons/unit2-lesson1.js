// Interactive demos for Unit 2 · Lesson 1 (needs lesson-kit.js; runs before deck.js builds the steppers).

/* ---------------- Caesar cipher ---------------- */
(() => {
  const AR = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
  const EN = 'abcdefghijklmnopqrstuvwxyz';
  const NORM = { 'أ': 'ا', 'إ': 'ا', 'آ': 'ا', 'ة': 'ه', 'ى': 'ي', 'ؤ': 'و', 'ئ': 'ي' };

  function shift(text, k) {
    return [...text].map(ch => {
      const c = NORM[ch] || ch;
      let i = AR.indexOf(c);
      if (i >= 0) return AR[(i + k + AR.length * 10) % AR.length];
      const lower = c.toLowerCase();
      i = EN.indexOf(lower);
      if (i >= 0) {
        const out = EN[(i + k + 260) % 26];
        return c === lower ? out : out.toUpperCase();
      }
      return ch;
    }).join('');
  }

  const inp = $('#cz-in'), key = $('#cz-k'), guess = $('#cz-g');
  if (!inp) return;

  function render() {
    const k = +key.value, g = +guess.value;
    $('#cz-k-val').textContent = arNum(k);
    $('#cz-g-val').textContent = arNum(g);
    const cipher = shift(inp.value, k);
    $('#cz-out').textContent = cipher || '…';
    const attempt = shift(cipher, -g);
    const gEl = $('#cz-guess');
    gEl.textContent = attempt || '…';
    gEl.classList.toggle('ok', g === k);
    if (g === k) gEl.textContent += '  ✅ فكّيتها!';
    $('#cz-strip').innerHTML = [...AR].map(ch =>
      `<div class="cz-cell">${ch}<i>↓</i><b>${shift(ch, k)}</b></div>`).join('');
  }
  [inp, key, guess].forEach(el => el.addEventListener('input', render));
  render();
})();

/* ---------------- Key count calculator ---------------- */
(() => {
  const r = $('#kc-range');
  if (!r) return;
  const render = () => {
    const n = +r.value;
    $('#kc-n').textContent = arNum(n);
    $('#kc-sym').textContent = arNum(n * (n - 1) / 2);
    $('#kc-asym').textContent = arNum(2 * n);
  };
  r.addEventListener('input', render);
  render();
})();

/* ---------------- HTTP vs HTTPS sniffer ---------------- */
(() => {
  const root = $('#sniff');
  if (!root) return;
  let proto = 'http';
  const addr = $('#sn-addr'), screen = $('#sn-screen'), verdict = $('#sn-verdict'), packet = $('#sn-packet');

  function setProto(p) {
    proto = p;
    $$('[data-proto]', root).forEach(b => b.classList.toggle('on', b.dataset.proto === p));
    addr.innerHTML = p === 'http'
      ? `<span title="غير آمن">⚠️</span> <span class="scheme-bad">http://</span>bank.example/login`
      : `🔒 <span class="scheme-good">https://</span>bank.example/login`;
    screen.textContent = 'في انتظار بيانات…';
    verdict.className = 'sniffer-verdict';
    verdict.textContent = '';
  }

  function gibberish(len) {
    const chars = 'ABCDEF0123456789abcdef';
    let s = '';
    for (let i = 0; i < len; i++) {
      s += chars[Math.floor(Math.random() * chars.length)];
      if (i % 2 === 1) s += ' ';
    }
    return s;
  }

  $$('[data-proto]', root).forEach(b => b.addEventListener('click', () => setProto(b.dataset.proto)));

  $('#sn-send').addEventListener('click', () => {
    const user = $('#sn-user').value, pass = $('#sn-pass').value;
    packet.textContent = proto === 'http' ? '📄' : '🔒';
    packet.classList.remove('go');
    void packet.offsetWidth;
    packet.classList.add('go');
    screen.textContent = '…التقاط حزمة…';
    verdict.className = 'sniffer-verdict';
    verdict.textContent = '';
    setTimeout(() => {
      if (proto === 'http') {
        screen.innerHTML =
`POST /login HTTP/1.1
Host: bank.example
Content-Type: application/x-www-form-urlencoded

username=<span class="leak">${esc(user)}</span>&amp;password=<span class="leak">${esc(pass)}</span>`;
        verdict.className = 'sniffer-verdict bad';
        verdict.textContent = '😱 المتطفل شاف اسم المستخدم وكلمة المرور بالكامل!';
      } else {
        screen.textContent =
`TLS Application Data (encrypted)
${gibberish(48)}
${gibberish(48)}
${gibberish(48)}`;
        verdict.className = 'sniffer-verdict good';
        verdict.textContent = '😎 المتطفل شايف بيانات مشفرة ملهاش أي معنى!';
      }
    }, 1100);
  });

  setProto('http');
})();

/* ---------------- Certificate check ---------------- */
(() => {
  const btns = $('#cert-btns');
  if (!btns) return;
  const CASES = {
    ok: {
      url: 'www.bank.com', cn: 'www.bank.com', issuer: 'جهة موثوقة ✔', until: '2027-01-01',
      checks: [true, true, true],
    },
    name: {
      url: 'www.bamk.com', cn: 'www.bank.com', issuer: 'جهة موثوقة ✔', until: '2027-01-01',
      checks: [false, true, true],
      reason: 'الشهادة صادرة لـ www.bank.com لكنك بتتصل بـ www.bamk.com — الاسم مش مطابق! ممكن يكون موقع مزيف بينتحل اسم البنك.',
    },
    expired: {
      url: 'www.bank.com', cn: 'www.bank.com', issuer: 'جهة موثوقة ✔', until: '2024-03-15',
      checks: [true, true, false],
      reason: 'الشهادة انتهت صلاحيتها في 2024-03-15 — زي بطاقة شخصية منتهية، مينفعش نعتمد عليها.',
    },
    self: {
      url: 'www.bank.com', cn: 'www.bank.com', issuer: 'الموقع نفسه ✘', until: '2027-01-01',
      checks: [true, false, true],
      reason: 'الشهادة مش صادرة من جهة موثوقة (الموقع أصدرها لنفسه) — زي بطاقة شخصية مطبوعة في البيت!',
    },
  };
  const LABELS = ['الشهادة تخص اسم الموقع المطلوب', 'صادرة عن جهة موثوقة (سلسلة الثقة)', 'صالحة وغير منتهية'];

  function render(key) {
    const c = CASES[key];
    const ok = c.checks.every(Boolean);
    $$('[data-case]', btns).forEach(b => b.classList.toggle('on', b.dataset.case === key));
    $('#cc-addr').innerHTML = ok
      ? `🔒 <span class="scheme-good">https://</span>${c.url}`
      : `⚠️ <span class="scheme-bad"><s>https</s>://</span>${c.url}`;
    $('#cc-body').innerHTML = ok
      ? `<div class="ok-page"><div class="big-emoji">🏦</div><p class="h3 mt-2 hl-safe">🔒 الاتصال آمن</p>
           <p class="font-bold">الشهادة سليمة — المتصفح كمّل المصافحة وفتح الموقع.</p>
           <p class="muted text-sm mt-1">صادرة لـ <span class="mono">${c.cn}</span> · من ${c.issuer} · حتى <span class="mono">${c.until}</span></p></div>`
      : `<div class="warn-page"><div class="big-emoji">⚠️</div><p class="h3 mt-1 hl-danger">الاتصال ليس خاصًا!</p>
           <p class="font-bold mt-1">${c.reason}</p>
           <p class="muted text-sm mt-2">المتصفح بينصحك ماتكملش وماتكتبش أي بيانات هنا.</p></div>`;
    $('#cc-checks').innerHTML = c.checks.map((v, i) =>
      `<li class="${v ? 'ok' : 'bad'}">${v ? '✅' : '❌'} ${LABELS[i]}</li>`).join('');
  }
  $$('[data-case]', btns).forEach(b => b.addEventListener('click', () => render(b.dataset.case)));
  render('ok');
})();

/* ---------------- Paint mixing (key agreement) ---------------- */
(() => {
  const root = $('#paint');
  if (!root) return;
  const common = [245, 205, 40], a = [215, 35, 70], b = [35, 95, 225];
  const mix = (...cs) => cs[0].map((_, i) => Math.round(cs.reduce((s, c) => s + c[i], 0) / cs.length));
  const rgb = c => `rgb(${c.join(',')})`;
  const COLORS = {
    common: rgb(common), secretA: rgb(a), secretB: rgb(b),
    mixA: rgb(mix(common, a)), mixB: rgb(mix(common, b)),
    final: rgb(mix(common, a, b)),
  };
  $$('.dot[data-color]', root).forEach(d => { d.style.background = COLORS[d.dataset.color]; });
})();

/* ---------------- Factor classification game ---------------- */
(() => {
  const root = $('#classify');
  if (!root) return;
  const ITEMS = [
    ['🔤 كلمة المرور', 'know'], ['🔢 رقم PIN', 'know'], ['❓ إجابة سؤال سري', 'know'],
    ['📱 الهاتف المحمول', 'have'], ['🔢 تطبيق المصادقة', 'have'], ['🔑 مفتاح أمان', 'have'], ['💳 بطاقة دخول', 'have'],
    ['👆 بصمة الإصبع', 'are'], ['🙂 التعرف على الوجه', 'are'], ['👁️ بصمة العين', 'are'],
  ];
  const pool = $('#cl-pool');
  let selected = null, done = 0;

  function setScore() {
    $('#cl-score').textContent = done === ITEMS.length
      ? `🎉 ممتاز! ${arNum(done)} / ${arNum(ITEMS.length)}`
      : `${arNum(done)} / ${arNum(ITEMS.length)}`;
  }

  function reset() {
    selected = null; done = 0;
    pool.innerHTML = '';
    $$('.bucket-items', root).forEach(b => { b.innerHTML = ''; });
    shuffle(ITEMS).forEach(([label, cat]) => {
      const c = document.createElement('button');
      c.className = 'chip';
      c.textContent = label;
      c.dataset.cat = cat;
      c.addEventListener('click', e => {
        e.stopPropagation();
        if (c.classList.contains('done')) return;
        $$('.chip.sel', root).forEach(x => x.classList.remove('sel'));
        selected = c;
        c.classList.add('sel');
      });
      pool.appendChild(c);
    });
    setScore();
  }

  $$('.bucket', root).forEach(bucket => bucket.addEventListener('click', () => {
    if (!selected) return;
    if (selected.dataset.cat === bucket.dataset.cat) {
      selected.classList.remove('sel');
      selected.classList.add('done');
      $('.bucket-items', bucket).appendChild(selected);
      selected = null;
      done++;
      setScore();
    } else {
      bucket.classList.remove('shake');
      void bucket.offsetWidth;
      bucket.classList.add('shake');
    }
  }));
  $('#cl-reset').addEventListener('click', reset);
  reset();
})();

/* ---------------- 2FA demo ---------------- */
(() => {
  const body = $('#tfa-body');
  if (!body) return;
  const phone = $('#tfa-phone'), screen = $('#tfa-phone-screen'), phoneLabel = $('#tfa-phone-label');
  let mode = 'owner', code = '', tries = 0;

  function clock() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  function idlePhone() {
    screen.innerHTML = `<div class="phone-clock">${clock()}</div>`;
  }

  function stepPassword() {
    tries = 0;
    const hacker = mode === 'hacker';
    phone.classList.toggle('far', hacker);
    phoneLabel.textContent = hacker ? '📱 هاتف صاحبة الحساب — مش معاك 🙅' : '📱 هاتفك';
    idlePhone();
    body.innerHTML = `
      <p class="step-badge"><span class="num">1</span> العامل الأول: <b>شيء تعرفه</b> 🧠</p>
      <label class="font-bold block mt-3">اسم المستخدم</label>
      <input class="field mt-1" value="mona_2009" autocomplete="off">
      <label class="font-bold block mt-2">كلمة المرور ${hacker ? '<span class="pill pill-danger">مسرّبة 😈</span>' : ''}</label>
      <input class="field mt-1" type="password" value="Mona@2009" autocomplete="off">
      <button class="btn btn-primary w-full mt-4" data-go="pw">تسجيل الدخول ←</button>`;
    $('[data-go="pw"]', body).addEventListener('click', stepOtp);
  }

  function stepOtp() {
    code = String(Math.floor(100000 + Math.random() * 900000));
    const hacker = mode === 'hacker';
    body.innerHTML = `
      <div class="result-box good">✅ كلمة المرور صحيحة</div>
      <p class="step-badge mt-3"><span class="num pink">2</span> العامل الثاني: <b>شيء تملكه</b> 📱</p>
      <p class="font-bold mt-1">بعتنا رمز على الهاتف.</p>
      <input class="field mt-2 text-center text-2xl mono" maxlength="6" inputmode="numeric" placeholder="______" id="tfa-code" autocomplete="off">
      <button class="btn btn-primary w-full mt-3" data-go="otp">تأكيد ←</button>
      <div class="mt-3" id="tfa-res"></div>`;
    screen.innerHTML = `<div class="phone-clock">${clock()}</div>
      <div class="notif"${hacker ? ' style="filter: blur(6px)"' : ''}>💬 رسالة SMS<br>رمز التحقق الخاص بك:<div class="otp">${code}</div>لا تشاركه مع أحد.</div>`;
    const input = $('#tfa-code', body);
    input.focus();
    const submit = () => {
      const res = $('#tfa-res', body);
      if (input.value.trim() === code) {
        body.innerHTML = `<div class="result-box good">🎉 تم تسجيل الدخول بنجاح!</div>
          <p class="mt-3 font-bold text-center">معرفة 🧠 + حيازة 📱 = <span class="hl">2FA</span></p>
          <button class="btn w-full mt-3" data-go="again">↺ جرّب تاني</button>`;
        $('[data-go="again"]', body).addEventListener('click', stepPassword);
      } else {
        tries++;
        res.innerHTML = tries >= 3
          ? `<div class="result-box bad">⛔ تم رفض الدخول!</div>`
          : `<div class="result-box bad">❌ رمز غير صحيح (محاولة ${arNum(tries)} من ٣)</div>`;
        if (tries >= 3) { input.disabled = true; $('[data-go="otp"]', body).disabled = true; }
        if (hacker && tries >= 3) {
          res.innerHTML += `<p class="mt-3 font-bold text-center">من غير الهاتف… <b class="hl-safe">الحساب فضل محمي!</b></p>`;
        }
      }
    };
    $('[data-go="otp"]', body).addEventListener('click', submit);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  }

  $$('[data-mode]').forEach(b => b.addEventListener('click', () => {
    mode = b.dataset.mode;
    $$('[data-mode]').forEach(x => x.classList.toggle('on', x === b));
    stepPassword();
  }));
  stepPassword();
})();

/* ---------------- CIA triad exercise ---------------- */
(() => {
  const root = $('#cia-quiz');
  if (!root) return;
  const O = ['🤫 السرية', '🧩 السلامة', '✅ التوافر'];
  renderQuestions(root, [
    { q: 'حد قرأ رسايلك الخاصة.', opts: O, a: 0 },
    { q: 'حد غيّر درجتك في نظام المدرسة.', opts: O, a: 1 },
    { q: 'موقع النتيجة وقع يوم ظهورها.', opts: O, a: 2 },
    { q: 'كلمات مرور المستخدمين اتسرّبت.', opts: O, a: 0 },
    { q: 'مبلغ التحويل البنكي اتعدّل في السكة.', opts: O, a: 1 },
  ]);
})();

/* ---------------- Factor combinations exercise ---------------- */
(() => {
  const root = $('#combo');
  if (!root) return;
  const O = ['[أ] المعرفة + الحيازة', '[ب] المعرفة + السمات الحيوية', '[ج] السمات الحيوية + الحيازة'];
  renderQuestions(root, [
    { q: 'كلمة مرور + كلمة مرور لمرة واحدة.', opts: O, a: 0, why: 'كلمة المرور = معرفة، وكلمة المرور لمرة واحدة بتوصل على جهاز معاك = حيازة.' },
    { q: 'كلمة مرور + مصادقة ببصمة الإصبع.', opts: O, a: 1, why: 'كلمة المرور = معرفة، والبصمة = سمات حيوية.' },
    { q: 'كلمة مرور + مصادقة عبر الرسائل القصيرة SMS.', opts: O, a: 0, why: 'الرسالة بتوصل على هاتفك = حيازة.' },
    { q: 'التعرف على الوجه + بطاقة IC (بطاقة ذكية تحمل شريحة مدمجة تخزّن بيانات الهوية).', opts: O, a: 2, why: 'الوجه = سمات حيوية، والبطاقة = حيازة.' },
  ]);
})();

/* ---------------- Digital signature tamper demo ---------------- */
(() => {
  const root = $('#sig');
  if (!root) return;
  // Small non-cryptographic hash, enough to show that any change alters the fingerprint.
  function fingerprint(str) {
    let h1 = 0xdeadbeef, h2 = 0x41c6ce57;
    for (let i = 0; i < str.length; i++) {
      const ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return ((h2 >>> 0).toString(16).padStart(8, '0') + (h1 >>> 0).toString(16).padStart(8, '0')).toUpperCase();
  }
  const orig = $('#sig-orig'), recv = $('#sig-recv'), out = $('#sig-out'), verdict = $('#sig-verdict');
  let signature = null;

  $('#sig-sign').addEventListener('click', () => {
    signature = fingerprint(orig.value);
    out.innerHTML = `✍️ التوقيع الرقمي: <span class="mono">${signature}</span>`;
    recv.value = orig.value;
    recv.disabled = false;
    $('#sig-tamper').disabled = false;
    $('#sig-verify').disabled = false;
    verdict.innerHTML = '';
  });
  $('#sig-tamper').addEventListener('click', () => {
    recv.value = recv.value.replace(/[0-9٠-٩]+/, '10000');
    if (!/10000/.test(recv.value)) recv.value += ' 10000';
    verdict.innerHTML = '';
  });
  recv.addEventListener('input', () => { verdict.innerHTML = ''; });
  $('#sig-verify').addEventListener('click', () => {
    const now = fingerprint(recv.value);
    verdict.innerHTML = now === signature
      ? `<div class="result-box good">✅ التوقيع صحيح<br><small>الرسالة صادرة من البنك ولم تتغير بعد التوقيع</small></div>`
      : `<div class="result-box bad">❌ التوقيع غير مطابق — تم كشف تلاعب!<br><small>بصمة الرسالة الحالية <span class="mono">${now}</span> ≠ التوقيع <span class="mono">${signature}</span></small></div>`;
  });
})();

/* ---------------- Threat ↔ technique matching ---------------- */
(() => {
  const root = $('#threats');
  if (!root) return;
  const O = ['🔐 التشفير', '✍️ التوقيع الرقمي', '📜 الشهادة الرقمية', '📱 المصادقة الثنائية 2FA'];
  renderQuestions(root, [
    { q: 'أريد منع قراءة محتوى الاتصال من قِبل أطراف ثالثة.', opts: O, a: 0, why: 'التشفير يمنع قراءة المحتوى.' },
    { q: 'أريد التحقق من أن رسالة موقّعة لم يتم تعديلها وأنها صدرت عن الموقع المزعوم.', opts: O, a: 1, why: 'التوقيع الرقمي يثبت المصدر ويكشف التعديل.' },
    { q: 'أريد التحقق من أن الطرف المقابل في الاتصال حقيقي.', opts: O, a: 2, why: 'الشهادات الرقمية نظام للتحقق من أن الطرف المقابل حقيقي.' },
    { q: 'تسرّبت كلمة مرور وحدث تسجيل دخول غير مصرّح به.', opts: O, a: 3, why: '2FA تطلب عاملاً ثانيًا، فكلمة المرور وحدها لا تكفي.' },
    { q: 'تم تعديل البيانات أثناء الاتصال.', opts: O, a: 1, why: 'التوقيع الرقمي يكشف التلاعب ويدعم التحقق من سلامة البيانات.' },
    { q: 'تم توجيه مستخدم إلى موقع إلكتروني مزيّف.', opts: O, a: 2, why: 'الشهادة الرقمية + اسم النطاق تساعد المتصفح على كشف الموقع المزيف.' },
    { q: 'تم اعتراض محتوى الاتصال من قِبل طرف ثالث.', opts: O, a: 0, why: 'مع التشفير، المحتوى المعترَض يكون غير مفهوم.' },
  ]);
})();

/* ---------------- Flashcards ---------------- */
(() => {
  const root = $('#flash');
  if (!root) return;
  const CARDS = [
    ['البروتوكول', 'Protocol', 'مجموعة قواعد واتفاقيات تنظّم طريقة تبادل البيانات بين الأجهزة.'],
    ['HTTP', 'HyperText Transfer Protocol', 'طريقة التواصل بين المتصفح وخادم الموقع (بدون تشفير).'],
    ['HTTPS', 'HTTP Secure', 'بروتوكول HTTP منقول عبر اتصال TLS مؤمَّن: تشفير + اكتشاف تلاعب + تحقق من الطرف المقابل.'],
    ['TLS', 'Transport Layer Security', 'تقنية أمان تشفّر الاتصال بين جهازك وخادم الموقع، وتوفر السرية والسلامة والتحقق من الخادم.'],
    ['مصافحة TLS', 'TLS Handshake', 'خطوات إنشاء الاتصال الآمن: التحقق من الشهادة ثم اشتقاق مفاتيح الجلسة.'],
    ['التشفير المتماثل', 'Symmetric', 'نفس المفتاح يُستخدم للتشفير وفك التشفير — سريع لحماية البيانات.'],
    ['التشفير بالمفتاح العام', 'Public-Key', 'يستخدم زوجًا من المفاتيح المرتبطة: مفتاحًا عامًا ومفتاحًا خاصًا.'],
    ['الشهادة الرقمية', 'Digital Certificate', 'بطاقة هوية إلكترونية للموقع تساعد المتصفح على التحقق من هوية الخادم واسم النطاق.'],
    ['اسم النطاق', 'Domain Name', 'عنوان الموقع مثل example.com، ويجب أن تكون الشهادة مرتبطة به.'],
    ['مفاتيح الجلسة', 'Session Keys', 'مفاتيح الاتصال الحالي، تُستخدم مع التشفير المتماثل لحماية البيانات بكفاءة.'],
    ['مجموعة التشفير', 'Cipher Suite', 'مجموعة من الخوارزميات والقواعد التي تحدد كيف سيتم تأمين الاتصال.'],
    ['المصادقة الثنائية', '2FA', 'استخدام عاملين مستقلين من فئتين مختلفتين لإثبات الهوية.'],
    ['المصادقة متعددة العوامل', 'MFA', 'استخدام عاملين أو أكثر من فئات مختلفة: المعرفة والحيازة والسمات الحيوية.'],
    ['التوقيع الرقمي', 'Digital Signature', 'يكشف التلاعب وانتحال الشخصية، ويوفّر دليلاً يدعم عدم التنصل.'],
    ['عدم التنصل', 'Non-repudiation', 'عدم قدرة المرسِل على إنكار أنه أرسل الرسالة أو وقّع عليها.'],
  ];
  renderFlashcards(root, CARDS);
})();

/* ---------------- True / False ---------------- */
(() => {
  const root = $('#tf');
  if (!root) return;
  const O = ['✓ صح', '✗ خطأ'];
  renderQuestions(root, [
    { q: 'يستخدم اتصال HTTPS كلاً من التشفير بالمفتاح العام والتشفير المتماثل.', opts: O, a: 0, why: 'المفتاح العام في المصافحة، والمتماثل لحماية بيانات الجلسة.' },
    { q: 'يتبادل اتصال HTTPS جميع البيانات باستخدام التشفير بالمفتاح العام.', opts: O, a: 1, why: 'خطأ: البيانات تُحمى بالتشفير المتماثل بمفاتيح الجلسة، لأن المفتاح العام بطيء.' },
    { q: 'المصادقة الثنائية (2FA) تستخدم عاملين مستقلين من فئتين مختلفتين لإثبات الهوية.', opts: O, a: 0, why: 'ده تعريف 2FA بالظبط.' },
    { q: 'من أمثلة المصادقة الثنائية (2FA) تعيين كلمتي مرور.', opts: O, a: 1, why: 'خطأ: كلمتي المرور من نفس الفئة (المعرفة)، ولازم فئتين مختلفتين.' },
  ], { numbered: false });
})();

/* ---------------- Final quiz ---------------- */
(() => {
  const root = $('#quiz');
  if (!root) return;
  const QUESTIONS = [
    { q: 'ما البروتوكول الذي يعمل عبر اتصال TLS مؤمّن؟', opts: ['FTP', 'HTTP', 'HTTPS', 'SMTP'], a: 2, why: 'HTTPS = HTTP منقول عبر اتصال TLS مؤمّن.' },
    { q: 'ما التقنية التي توفر سرية البيانات وسلامتها أثناء النقل؟', opts: ['TLS', '2FA', 'SMS', 'PIN'], a: 0, why: 'TLS يوفر سرية البيانات وسلامتها أثناء النقل.' },
    { q: 'ما اسم خطوات إنشاء الاتصال الآمن في TLS؟', opts: ['المصادقة', 'مصافحة TLS', 'التوقيع الرقمي', 'النسخ الاحتياطي'], a: 1 },
    { q: 'ما التقنية التي تساعد المتصفح على التحقق من هوية الخادم واسم النطاق؟', opts: ['الشهادة الرقمية', 'كلمة المرور', 'التشفير المتماثل', 'SMS'], a: 0 },
    { q: 'ما نوع التشفير الذي يستخدم زوجًا من المفاتيح المرتبطة؟', opts: ['التشفير المتماثل', 'التشفير بالمفتاح العام', 'ضغط البيانات', 'التحقق بخطوتين'], a: 1, why: 'مفتاح عام + مفتاح خاص.' },
    { q: 'ما الذي يُستخدم لحماية بيانات الجلسة بكفاءة بعد إنشاء المفاتيح؟', opts: ['التشفير المتماثل', 'الشهادة الرقمية', 'التوقيع الرقمي', 'اسم النطاق'], a: 0 },
    { q: 'ما الذي يتحقق منه المتصفح في الشهادة الرقمية أثناء مصافحة TLS؟', opts: ['حجم الصفحة', 'سرعة الاتصال', 'نوع الجهاز', 'صلاحية الشهادة وسلسلة الثقة وملاءمة اسم الموقع'], a: 3 },
    { q: 'ما الذي يُستخدم لاشتقاق مفاتيح الجلسة أثناء مصافحة TLS؟', opts: ['الرسائل القصيرة', 'آليات المفتاح العام', 'بصمة الإصبع', 'اسم المستخدم'], a: 1 },
    { q: 'ما الهدف الأساسي من المصادقة الثنائية (2FA)؟', opts: ['زيادة سرعة الإنترنت', 'إنشاء مواقع الويب', 'ضغط الملفات', 'تقليل احتمال الدخول غير المصرح به'], a: 3 },
    { q: 'أي مما يلي يمثل عاملاً من فئة «المعرفة»؟', opts: ['الهاتف', 'بصمة الإصبع', 'كلمة المرور', 'بطاقة الدخول'], a: 2 },
    { q: 'أي مما يلي يمثل عاملاً من فئة «الحيازة»؟', opts: ['كلمة المرور', 'الهاتف', 'بصمة الإصبع', 'الوجه'], a: 1 },
    { q: 'أي مما يلي يمثل عاملاً من فئة «السمات الحيوية»؟', opts: ['كلمة المرور', 'الهاتف', 'بصمة الإصبع', 'رمز PIN'], a: 2 },
    { q: 'عند التسوق الإلكتروني، ما التقنية التي تقلل احتمال الدخول غير المصرح به إلى الحساب؟', opts: ['2FA', 'HTTP', 'اسم النطاق', 'التشفير المتماثل فقط'], a: 0 },
    { q: 'اختر الخيار الذي <u>لا</u> يمثل وصفًا مناسبًا لتركيبات تقنيات الأمان:', opts: ['التشفير تقنية تمنع قراءة محتوى الاتصال من قبل أطراف ثالثة', 'التوقيعات الرقمية تقنية تحسّن سرعة الاتصال', 'الشهادات الرقمية نظام للتحقق من أن الطرف المقابل حقيقي', 'من خلال الجمع بين عدة تقنيات أمان يمكن معالجة تهديدات متنوعة'], a: 1, why: 'التوقيع الرقمي لا علاقة له بالسرعة؛ وظيفته إثبات المصدر وكشف التلاعب.' },
    { q: 'اختر الخيار الذي <u>لا</u> يمثل مثالاً مناسبًا للمصادقة الثنائية باستخدام عاملين مختلفين:', opts: ['كلمة مرور + إشعار على الهاتف الذكي', 'كلمة مرور + سؤال سري', 'مصادقة ببصمة الإصبع + بطاقة IC', 'كلمة مرور + مصادقة عبر الرسائل القصيرة SMS'], a: 1, why: 'كلمة المرور والسؤال السري من نفس الفئة (المعرفة).' },
  ];
  renderQuiz(root, $('#quiz-score'), $('#quiz-reset'), QUESTIONS);
})();

/* ---------------- Engineer activity ---------------- */
(() => {
  const root = $('#engineer');
  if (!root) return;
  const out = $('#engineer-out');
  const TEXT = {
    pw: `<div class="callout c-warn"><span class="ico">⚖️</span><div>
      ✅ سهلة لكل الطلاب. ❌ لو كلمة المرور اتسرّبت، الحساب يتسرق.</div></div>`,
    otp: `<div class="callout c-safe"><span class="ico">🛡️</span><div>
      ✅ أمان أعلى (2FA). ⚠️ الطالب اللي معندوش هاتف ذكي ← رسالة SMS على أي موبايل.</div></div>`,
  };
  $$('[data-v]', root).forEach(b => b.addEventListener('click', () => {
    $$('[data-v]', root).forEach(x => x.classList.toggle('on', x === b));
    out.innerHTML = TEXT[b.dataset.v] +
      `<p class="mt-2 font-bold muted">💬 برّر اختيارك بـ<b>الأمان</b> و<b>إمكانية الوصول</b>.</p>`;
  }));
})();
