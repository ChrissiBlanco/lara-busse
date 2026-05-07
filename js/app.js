/* ─── View switching ──────────────────────────────────────────────────────── */

function showHome() {
  document.getElementById('view-home').style.display = '';
  document.getElementById('view-detail').style.display = 'none';
  window.scrollTo(0, 0);
}

function showDetail(id) {
  const p = PROJECTS[id];
  if (!p) return;

  const blocksHTML = p.blocks().join('');
  const contactHTML = p.contact
    ? `<div class="detail-contact">${p.contact}</div>`
    : '';

  document.getElementById('view-detail').innerHTML = `
    <a class="detail-back" href="#" onclick="showHome();return false;">← Zurück zur Übersicht</a>
    <div class="detail-header">
      <h1 class="detail-h1">${p.title}</h1>
      <p class="detail-sub">${p.sub}</p>
    </div>
    ${blocksHTML}
    ${contactHTML}
    <div class="detail-footer">
      <div class="footer-links">
        <a href="#">Impressum</a>
        <a href="#">Datenschutz</a>
      </div>
    </div>
  `;

  document.getElementById('view-home').style.display = 'none';
  document.getElementById('view-detail').style.display = 'block';
  window.scrollTo(0, 0);
}
