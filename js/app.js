/* ─── View switching ──────────────────────────────────────────────────────── */

function showHome() {
  document.getElementById('view-home').style.display = '';
  document.getElementById('view-detail').style.display = 'none';

  if (window.location.hash) {
    window.history.pushState(null, '', window.location.pathname);
  }

  window.scrollTo(0, 0);
}

function showDetail(id, { pushHistory = true } = {}) {
  const p = PROJECTS[id];
  if (!p) return;

  const blocksHTML = p.blocks().join('');
  const contactHTML = p.contact
    ? `<div class="detail-contact">${p.contact}</div>`
    : '';

  document.getElementById('view-detail').innerHTML = `
    <div class="detail-header">
      <h1 class="detail-h1">${p.title}</h1>
      <p class="detail-sub">${p.sub}</p>
    </div>
    ${blocksHTML}
    ${contactHTML}
    <div class="detail-footer">
      <a href="#" onclick="showHome();return false;">← Zurück zur Übersicht</a>
      <div class="footer-links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </div>
  `;

  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').style.display = 'block';
  window.scrollTo(0, 0);

  const detailUrl = `${window.location.pathname}#${id}`;
  if (pushHistory && window.location.href !== detailUrl) {
    window.history.pushState({ view: 'detail', id }, p.title, detailUrl);
  }

  // Initialize carousels
  initCarousels();
}

window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace(/^#/, '');

  if (hash && PROJECTS[hash]) {
    showDetail(hash, { pushHistory: false });
    return;
  }

  showHome();
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace(/^#/, '');

  if (hash && PROJECTS[hash]) {
    showDetail(hash, { pushHistory: false });
    return;
  }

  showHome();
});

function initCarousels() {
  const carousels = document.querySelectorAll('.block-carousel-inner');
  carousels.forEach(carousel => {
    const slides = carousel.querySelectorAll('.block-carousel-slide');
    if (slides.length <= 1) return;
    
    // Set first slide as active
    slides[0].classList.add('active');
    
    let currentIndex = 0;
    const rotateCarousel = () => {
      // Remove active from current slide
      slides[currentIndex].classList.remove('active');
      
      // Move to next slide
      currentIndex = (currentIndex + 1) % slides.length;
      
      // Add active to new slide
      slides[currentIndex].classList.add('active');
    };
    
    setInterval(rotateCarousel, 3000);
  });
}
