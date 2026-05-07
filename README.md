# Portfolio Website

A single-page portfolio site for a communication designer based in Munich. Built with plain HTML, CSS, and JavaScript — no frameworks or build tools required.

## Structure

```
├── index.html        # Single HTML file, all views
├── css/
│   └── styles.css    # All styles
├── js/
│   ├── app.js        # View routing (home ↔ detail)
│   ├── data.js       # Project content / copy
│   └── blocks.js     # Detail view block renderer
└── img/              # Project images and photos
```

## Features

- **Home view** — sidebar bio, project list with thumbnails, sketchbook grid
- **Detail view** — per-project pages rendered from `data.js`
- Sticky topbar with links to Instagram, email, and LinkedIn
- Responsive: sidebar collapses to a mobile bio strip on small screens
- No dependencies, no build step — open `index.html` directly in a browser

## Local development

Just open `index.html` in any browser. No server needed.

## Deployment

Hosted via GitHub Pages. Push to the `main` branch; the site deploys automatically from the repository root.

## Projects

| Project | Category |
|---|---|
| Beim Feiern Balance Halten | Schulung · Typ-1-Diabetes & Alkohol |
| Decode Diversity | Gruppenspiel · sexuelle & geschlechtliche Vielfalt |
| Planspiel Datendorf | Medienkompetenz · 3. & 4. Jahrgangsstufe |
| Gedankenreich | Kreativprojekt · Grundschule |
| Nachhall | Corporate Identity · Plattenlabel |
| Noord Roots | Place Branding · Amsterdam Noord |
| Crossing Borders | Siebdruck |
| Was wäre wenn …? | Installation im öffentlichen Raum |
| A.ckerwert | Flyergestaltung |
| Künstlerbuch | Leporello-Serie |
