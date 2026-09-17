/* ─── View switching ──────────────────────────────────────────────────────── */

function showHome() {
  document.getElementById('view-home').style.display = '';
  document.getElementById('view-detail').style.display = 'none';
  document.getElementById('view-legal').style.display = 'none';

  if (window.location.hash) {
    window.history.pushState(null, '', window.location.pathname);
  }

  window.scrollTo(0, 0);
}

function showLegal(type) {
  const legalPages = {
    impressum: {
      title: 'Impressum',
      content: `
        <div class="legal-wrap">
          <div class="detail-header">
            <a class="detail-back-link" href="#" onclick="showHome(); return false;" aria-label="Zurück zur Übersicht">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </a>
            <h1 class="detail-h1">Impressum</h1>
            <p class="detail-sub">Kontakt &amp; Verantwortlichkeitsangaben</p>
          </div>
          <div class="legal-content">
            <h2>Lara Busse</h2>
            <p>Kommunikationsdesignerin<br />München</p>

            <h3>Kontakt</h3>
            <p>
              E-Mail: <a href="mailto:lara@larabusse.com">lara@larabusse.com</a><br />
              Instagram: <a href="https://instagram.com" target="_blank" rel="noopener">@larabusse</a>
            </p>

            <h3>Hinweis</h3>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der bereitgestellten Informationen übernehmen wir keine
              Gewährleistung.
            </p>

            <h3>Haftung</h3>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für externe Links,
              fremde Inhalte oder Schäden, die durch die Nutzung dieser Website entstehen.
            </p>
          </div>
        </div>
      `
    },
    datenschutz: {
      title: 'Datenschutz',
      content: `
        <div class="legal-wrap">
          <div class="detail-header">
            <a class="detail-back-link" href="#" onclick="showHome(); return false;" aria-label="Zurück zur Übersicht">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M15 5 8 12l7 7" />
              </svg>
            </a>
            <h1 class="detail-h1">Datenschutz</h1>
            <p class="detail-sub">Hinweise zur Verarbeitung personenbezogener Daten</p>
          </div>
          <div class="legal-content">
            <p>
              Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Diese Website wird grundsätzlich
              ohne die Erhebung personenbezogener Daten genutzt. Wenn Sie per E-Mail oder über soziale
              Kanäle Kontakt aufnehmen, verwenden wir Ihre Angaben nur für die Beantwortung Ihrer Anfrage.
            </p>

            <h3>Kontaktformular &amp; E-Mail</h3>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden die von Ihnen mitgeteilten Daten nur zur Bearbeitung
              Ihres Anliegens verwendet und nicht an Dritte weitergegeben, sofern keine gesetzliche Pflicht dazu besteht.
            </p>

            <h3>Cookies</h3>
            <p>
              Auf dieser Website werden keine Tracking-Cookies oder Analyse-Tools eingesetzt, die personenbezogene
              Daten speichern. Es können technisch notwendige Cookies gesetzt werden, die nur für die sichere und
              funktionale Bereitstellung der Seite erforderlich sind.
            </p>

            <h3>Rechte</h3>
            <p>
              Sie haben das Recht, Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten,
              deren Berichtigung, Löschung oder Einschränkung der Verarbeitung zu verlangen. Bitte wenden
              Sie sich dafür an <a href="mailto:lara@larabusse.com">lara@larabusse.com</a>.
            </p>
          </div>
        </div>
      `
    }
  };

  const page = legalPages[type];
  if (!page) return;

  document.getElementById('view-legal').innerHTML = page.content;
  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').style.display = 'none';
  document.getElementById('view-legal').style.display = 'block';
  window.scrollTo(0, 0);

  window.history.pushState({ view: 'legal', type }, page.title, `${window.location.pathname}#${type}`);
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
      <a class="detail-back-link" href="#" onclick="showHome();return false;" aria-label="Zurück zur Übersicht">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15 5 8 12l7 7" />
        </svg>
      </a>
      <h1 class="detail-h1">${p.title}</h1>
      <p class="detail-sub">${p.sub}</p>
    </div>
    ${blocksHTML}
    ${contactHTML}
    <div class="detail-footer">
      <div class="footer-links">
        <a href="#" onclick="showLegal('impressum'); return false;">Impressum</a>
        <a href="#" onclick="showLegal('datenschutz'); return false;">Datenschutz</a>
      </div>
    </div>
  `;

  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').style.display = 'block';
  document.getElementById('view-legal').style.display = 'none';
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

  if (hash === 'impressum' || hash === 'datenschutz') {
    showLegal(hash);
    return;
  }

  if (hash && PROJECTS[hash]) {
    showDetail(hash, { pushHistory: false });
    return;
  }

  showHome();
});

window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace(/^#/, '');

  if (hash === 'impressum' || hash === 'datenschutz') {
    showLegal(hash);
    return;
  }

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
