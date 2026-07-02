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

Avoid opening `index.html` via `file://` in the browser. Many browsers treat `file:` URLs as unique security origins which can block embedded content (iframes, external players) and cause console errors.

Start a simple local HTTP server and open the site at `http://localhost:8000` instead:

- Python 3 (built-in):

  ```bash
  python3 -m http.server 8000
  ```

- Node (no install required):

  ```bash
  npx serve -s . -l 8000
  ```

This prevents cross-origin issues that occur with `file://` pages.

## Deployment

Hosted via GitHub Pages. Push to the `main` branch; the site deploys automatically from the repository root.

## Projects

| Project             | Category                                           |
| ------------------- | -------------------------------------------------- |
| balance             | Schulung · Typ-1-Diabetes & Alkohol                |
| Decode Diversity    | Gruppenspiel · sexuelle & geschlechtliche Vielfalt |
| Planspiel Datendorf | Medienkompetenz · 3. & 4. Jahrgangsstufe           |
| Gedankenreich       | Kreativprojekt · Grundschule                       |
| Nachhall            | Corporate Identity · Plattenlabel                  |
| Noord Roots         | Place Branding · Amsterdam Noord                   |
| Crossing Borders    | Siebdruck                                          |
| Was wäre wenn …?    | Installation im öffentlichen Raum                  |
| A.ckerwert          | Flyergestaltung                                    |
| Künstlerbuch        | Leporello-Serie                                    |
