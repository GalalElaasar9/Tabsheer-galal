// Shared helpers for lesson decks: DOM shortcuts, question widgets, flashcards.

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const arNum = n => Number(n).toLocaleString('ar-EG');

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ---------------- Generic multiple-choice renderer ---------------- */
function renderQuestions(container, items, opts = {}) {
  let score = 0, answered = 0;
  container.innerHTML = '';
  items.forEach((it, qi) => {
    const row = document.createElement('div');
    row.className = 'q-row';
    row.innerHTML = `<div class="q-text">${opts.numbered === false ? '' : arNum(qi + 1) + ' – '}${it.q}</div><div class="q-opts"></div>`;
    const box = row.querySelector('.q-opts');
    it.opts.forEach((o, oi) => {
      const b = document.createElement('button');
      b.className = 'q-opt';
      b.innerHTML = o;
      b.addEventListener('click', () => {
        if (row.dataset.done) return;
        row.dataset.done = '1';
        answered++;
        const right = oi === it.a;
        if (right) score++;
        b.classList.add(right ? 'right' : 'wrong');
        box.children[it.a].classList.add('right');
        row.classList.add(right ? 'answered-right' : 'answered-wrong');
        if (it.why) {
          const w = document.createElement('div');
          w.className = 'q-why';
          w.innerHTML = (right ? '✅ ' : '💡 ') + it.why;
          row.appendChild(w);
        }
        if (!right) row.classList.add('shake');
        opts.onAnswer && opts.onAnswer(score, answered, items.length);
      });
      box.appendChild(b);
    });
    container.appendChild(row);
  });
  opts.onAnswer && opts.onAnswer(0, 0, items.length);
}

/* ---------------- Flashcards ---------------- */
function renderFlashcards(container, cards) {
  container.innerHTML = cards.map(([t, en, d]) => `
    <div class="flash" tabindex="0">
      <div class="flash-in">
        <div class="flash-face flash-front">${t}<small class="ltr">${en}</small></div>
        <div class="flash-face flash-back">${d}</div>
      </div>
    </div>`).join('');
  $$('.flash', container).forEach(f => f.addEventListener('click', () => f.classList.toggle('flipped')));
}

/* ---------------- Scored quiz ---------------- */
function renderQuiz(container, scoreEl, resetBtn, questions) {
  const start = () => renderQuestions(container, questions, {
    onAnswer(score, answered, total) {
      scoreEl.textContent = answered === total
        ? `🏁 النتيجة: ${arNum(score)} / ${arNum(total)}`
        : `${arNum(score)} / ${arNum(total)}`;
    },
  });
  resetBtn.addEventListener('click', start);
  start();
}
