/* ON GbR – Main JS */

/* ── PIN Overlay ── */
(function () {
  const PIN = '3819';
  if (sessionStorage.getItem('pinOK') === '1') return;

  let entered = '';

  const overlay = document.createElement('div');
  overlay.className = 'pin-overlay';
  overlay.innerHTML = `
    <div class="pin-box" id="pin-box">
      <img src="public/logo.png" alt="ON GbR" class="pin-box__logo">
      <h2>Demo-Zugang</h2>
      <p>Bitte PIN eingeben</p>
      <div class="pin-dots" id="pin-dots">
        <div class="pin-dot" id="d0"></div>
        <div class="pin-dot" id="d1"></div>
        <div class="pin-dot" id="d2"></div>
        <div class="pin-dot" id="d3"></div>
      </div>
      <div class="pin-keypad">
        ${[1,2,3,4,5,6,7,8,9].map(n =>
          `<button class="pin-key" data-n="${n}">${n}</button>`
        ).join('')}
        <button class="pin-key pin-key--del" data-n="del">⌫</button>
        <button class="pin-key" data-n="0">0</button>
        <div></div>
      </div>
      <div class="pin-error" id="pin-error"></div>
    </div>`;
  document.body.prepend(overlay);

  function updateDots() {
    for (let i = 0; i < 4; i++) {
      document.getElementById('d' + i).classList.toggle('filled', i < entered.length);
    }
  }

  function handleKey(val) {
    const box = document.getElementById('pin-box');
    const err = document.getElementById('pin-error');
    if (val === 'del') {
      entered = entered.slice(0, -1);
    } else if (entered.length < 4) {
      entered += val;
    }
    err.textContent = '';
    updateDots();
    if (entered.length === 4) {
      if (entered === PIN) {
        sessionStorage.setItem('pinOK', '1');
        overlay.remove();
      } else {
        box.classList.add('shake');
        box.addEventListener('animationend', () => box.classList.remove('shake'), { once: true });
        err.textContent = 'Falscher PIN – bitte erneut versuchen.';
        entered = '';
        updateDots();
      }
    }
  }

  overlay.addEventListener('click', e => {
    const n = e.target.closest('[data-n]')?.dataset.n;
    if (n !== undefined) handleKey(n);
  });

  document.addEventListener('keydown', e => {
    if (!document.getElementById('pin-box')) return;
    if (e.key >= '0' && e.key <= '9') handleKey(e.key);
    if (e.key === 'Backspace') handleKey('del');
  });
}());

/* ── Mobile nav toggle ── */
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', open);
  });
  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('is-open');
      navToggle.classList.remove('is-open');
    }
  });
}

/* ── Active nav link ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav__link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('is-active');
  }
});

/* ── FAQ accordion ── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item.is-open').forEach(el => el.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

/* ── Project filter ── */
const filterBtns = document.querySelectorAll('.filter-btn');
if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}
