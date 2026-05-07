/* ─── Block builder helpers ───────────────────────────────────────────────────
   Each function returns an HTML string for one content block.
   Mix & match these in any project's `blocks` array.
──────────────────────────────────────────────────────────────────────────── */

// A: image left, text right
function blockA({ label, lead, body, imgAlt }) {
  return `<div class="block-a">
    <div class="block-img ph" role="img" aria-label="${imgAlt || 'Projektbild'}">Bild</div>
    <div class="block-text">
      ${label ? `<p class="block-label">${label.toUpperCase()}</p>` : ''}
      ${lead  ? `<p class="block-lead">${lead}</p>` : ''}
      ${body  ? `<div class="block-body">${body}</div>` : ''}
    </div>
  </div>`;
}

// B: text left, image right
function blockB({ label, lead, body, imgAlt }) {
  return `<div class="block-b">
    <div class="block-text">
      ${label ? `<p class="block-label">${label.toUpperCase()}</p>` : ''}
      ${lead  ? `<p class="block-lead">${lead}</p>` : ''}
      ${body  ? `<div class="block-body">${body}</div>` : ''}
    </div>
    <div class="block-img ph" role="img" aria-label="${imgAlt || 'Projektbild'}">Bild</div>
  </div>`;
}

// C: 2-column image+caption grid
function blockC(items) {
  const cols = items.map(it => `
    <div class="block-c-item">
      <div class="block-img ph" role="img" aria-label="${it.imgAlt || 'Bild'}">Bild</div>
      <div class="block-caption">
        ${it.label ? `<strong>${it.label.toUpperCase()}</strong>` : ''}
        ${it.caption || ''}
      </div>
    </div>`).join('');
  return `<div class="block-c">${cols}</div>`;
}

// D: 3-column image+caption grid
function blockD(items) {
  const cols = items.map(it => `
    <div class="block-d-item">
      <div class="block-img ph" role="img" aria-label="${it.imgAlt || 'Bild'}">Bild</div>
      <div class="block-caption">
        ${it.label ? `<strong>${it.label.toUpperCase()}</strong>` : ''}
        ${it.caption || ''}
      </div>
    </div>`).join('');
  return `<div class="block-d">${cols}</div>`;
}

// E: video (Vimeo/YouTube iframe or placeholder)
function blockE({ src, title }) {
  if (src) {
    return `<div class="block-e">
      <div class="block-e-inner">
        <iframe src="${src}" title="${title || 'Video'}" allowfullscreen allow="autoplay; fullscreen"></iframe>
      </div>
    </div>`;
  }
  return `<div class="block-e">
    <div class="block-e-ph" role="img" aria-label="${title || 'Video'}">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8" fill="#555" stroke="none"/></svg>
      <span>${title || 'Video'}</span>
    </div>
  </div>`;
}

// F: full-width single image
function blockF({ imgAlt, height }) {
  return `<div class="block-f">
    <div class="block-img ph" style="height:${height || '420px'}" role="img" aria-label="${imgAlt || 'Projektbild'}">Bild</div>
  </div>`;
}
