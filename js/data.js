/* ─── Project data ────────────────────────────────────────────────────────────
   Each project has a title, subtitle, a blocks() function that returns an
   array of block HTML strings, and an optional contact note (HTML or null).
──────────────────────────────────────────────────────────────────────────── */

const PROJECTS = {
  'beim-feiern': {
    title: 'Beim Feiern Balance Halten',
    sub: 'Schulung · Typ-1-Diabetes & Alkohol',
    blocks: () => [
      blockA({ lead: 'Wie können Jugendliche mit Typ-1-Diabetes sicher feiern? Diese Schulung gibt ihnen die Werkzeuge, um bewusst mit Alkohol und Drogen umzugehen — ohne auf das volle Jugendleben zu verzichten.', imgAlt: 'Schulungsmaterial Hauptbild' }),
      blockE({ title: 'Projektfilm — Beim Feiern Balance Halten' }),
      blockB({ label: 'Konzept', body: '<p>Die Schulung verbindet medizinisches Wissen mit alltagsnahen Szenarien. Anhand von Rollenspielen und interaktiven Aufgaben lernen die Teilnehmenden, ihre Blutzuckerwerte auch in Feiersituationen sicher im Blick zu behalten.</p>', imgAlt: 'Konzept-Illustration' }),
      blockC([
        { label: 'App-Konzept', caption: 'Begleitende digitale Unterstützung für unterwegs.', imgAlt: 'App-Mockup' },
        { label: 'Handout', caption: 'Gedruckte Materialien zum Nachschlagen nach der Schulung.', imgAlt: 'Handout' }
      ]),
      blockF({ imgAlt: 'Schulung in Aktion', height: '380px' }),
    ],
    contact: 'Das Projekt entstand im Rahmen meiner Bachelorarbeit. Bei Interesse melde dich gerne per <a href="mailto:lara@larabusse.com">E-Mail</a>.'
  },

  'decode-diversity': {
    title: 'Decode Diversity',
    sub: 'Das Spiel zur Vielfalt sexueller und geschlechtlicher Identität',
    blocks: () => [
      blockA({ lead: 'In diesem interaktiven Gruppenspiel erkunden Schülerinnen und Schüler ab der 8. Klasse spielerisch die Vielfalt sexueller und geschlechtlicher Identitäten.', body: '<p>Gemeinsam hören sie Audioaufnahmen, in denen Personen sich selbst beschreiben, und versuchen anhand von Hinweisen ihre Identität in fünf Kategorien einzuschätzen.</p>', imgAlt: 'Spielfeld Decode Diversity' }),
      blockE({ src: 'https://player.vimeo.com/video/000000000', title: 'DecodeDiversity Trailer' }),
      blockB({ label: 'Ablauf', body: `<p>Bis zu sechs Spieler:innen spielen an einem Feld, das in fünf Kategorien aufgeteilt ist. Es wird von außen nach innen gespielt — beginnend mit einer Audio vom 14-jährigen Ich der sprechenden Person.</p><p>In der letzten Runde beschreibt die Person ihre heutige Identität und nennt ihren Namen.</p>`, imgAlt: 'Spielablauf' }),
      blockC([
        { label: 'Digitale Präsentation', caption: 'Strukturiert und erklärt die Methode mit einer digitalen Präsentation.', imgAlt: 'Digitale Präsentation' },
        { label: 'Vielfalts-Lexikon', caption: 'Handout: alle Begriffe des Spiels einfach erklärt.', imgAlt: 'Lexikon' }
      ]),
      blockA({ label: 'Spielsteine', body: '<p>Die Spielsteine zeigen diverse Körperteile. Intime Organe werden durch die nüchterne Darstellung enttabuisiert.</p>', imgAlt: 'Spielsteine' }),
      blockD([
        { label: 'Spielfeld', caption: 'Fünf Kategorien, konzentrisch angeordnet.', imgAlt: 'Spielfeld Detail' },
        { label: 'Profilscheibe', caption: 'Enthüllt am Ende die Identität der sprechenden Person.', imgAlt: 'Profilscheibe' },
        { label: 'Audiogerät', caption: 'Spielt die Audioaufnahmen der echten Personen ab.', imgAlt: 'Audiogerät' }
      ]),
      blockF({ imgAlt: 'Gruppe spielt Decode Diversity', height: '460px' }),
    ],
    contact: 'Das Spiel ist im Rahmen meiner Masterarbeit im Spiel- und Lerndesign an der BURG Giebichenstein Halle entstanden.<br><br>Bei Interesse melden Sie sich gerne per <a href="mailto:lara@larabusse.com">E-Mail</a> bei mir.'
  },

  'planspiel': {
    title: 'Planspiel Datendorf',
    sub: 'Medienkompetenz für die 3. und 4. Jahrgangsstufe',
    blocks: () => [
      blockA({ lead: 'Kinder der 3. und 4. Klasse entscheiden gemeinsam über die Einstellungen zum Datenschutz einer neuen App. Sie schlüpfen in die Rollen von vier Schülergruppen mit unterschiedlichen Interessen.', imgAlt: 'Planspiel Spielszene' }),
      blockB({ label: 'Die Rollen', body: `<p>Es gibt Datenschützer, Entwickler, Vernetzer und Spieler. Ihr Ziel ist es gemeinsam zu entscheiden:</p><ul><li>Welche Daten sammelt die App?</li><li>Welche Berechtigungen hat sie?</li><li>Wie lenkt sie die Aufmerksamkeit auf sich?</li><li>Wie viel Werbung und In-App-Käufe baut sie ein?</li></ul>`, imgAlt: 'Rollenkarten' }),
      blockD([
        { label: 'Datenschützer', caption: 'Schützen die Privatsphäre der Nutzenden.', imgAlt: 'Rolle Datenschützer' },
        { label: 'Entwickler', caption: 'Wollen eine funktionale, erfolgreiche App bauen.', imgAlt: 'Rolle Entwickler' },
        { label: 'Spieler', caption: 'Wollen Spaß und Unterhaltung maximieren.', imgAlt: 'Rolle Spieler' }
      ]),
      blockF({ imgAlt: 'Planspiel im Unterricht', height: '380px' }),
    ],
    contact: null
  },

  'gedankenreich': {
    title: 'Gedankenreich',
    sub: 'Das Paket für eine kreative Pause im Unterricht',
    blocks: () => [
      blockA({ lead: 'Das Projekt Gedankenreich bietet die Möglichkeit Kreativität nachhaltig zu fördern und in den Grundschulalltag zu integrieren.', imgAlt: 'Gedankenreich Paket' }),
      blockB({ label: 'Konzept', body: '<p>Gedankenreich ist ein Materialpaket für Lehrkräfte, das kurze, niedrigschwellige Kreativaufgaben für den Unterrichtsalltag bereitstellt. Die Aufgaben sind so gestaltet, dass sie ohne Vorbereitung eingesetzt werden können.</p>', imgAlt: 'Konzeptskizze' }),
      blockC([
        { label: 'Karten', caption: 'Impulskarten mit Aufgaben für verschiedene Altersstufen.', imgAlt: 'Karten' },
        { label: 'Anleitung', caption: 'Leicht verständliches Heft für Lehrkräfte.', imgAlt: 'Anleitung' }
      ]),
      blockE({ title: 'Gedankenreich — Produktfilm' }),
    ],
    contact: null
  },

  'nachhall': {
    title: 'Nachhall',
    sub: 'Corporate Identity',
    blocks: () => [
      blockA({ lead: 'NACHHALL ist ein fiktives, junges, unabhängiges Plattenlabel in Berlin für Electro Minimal Music. Das Branding-System wurde mit zwei Vinyl-Reihen gestaltet.', body: '<p>Das Logo und die Gestaltung werden von Absorbern abgeleitet, die in jedem Tonstudio vorhanden sind.</p>', imgAlt: 'Nachhall Logoentwicklung' }),
      blockB({ label: 'Vinyl-Reihe 1', body: '<p>Vinylreihe eins nutzt Fotografien der Absorber als Hauptmotiv — rau, direkt, dokumentarisch.</p>', imgAlt: 'Vinyl-Reihe 1 Cover' }),
      blockA({ label: 'Vinyl-Reihe 2', body: '<p>Reihe zwei lässt die Absorber zu abstrakten Mustern werden — gleicher Ursprung, andere Abstraktion.</p>', imgAlt: 'Vinyl-Reihe 2 Cover' }),
      blockD([
        { label: 'Plattencover', caption: 'Konsistent im System, individuell im Motiv.', imgAlt: 'Plattencover' },
        { label: 'Merchandise', caption: 'T-Shirts, Totes, Aufkleber.', imgAlt: 'Merchandise' },
        { label: 'Plakat', caption: 'Veranstaltungsplakate im Raster.', imgAlt: 'Plakat' }
      ]),
      blockF({ imgAlt: 'Nachhall Gesamtübersicht', height: '420px' }),
    ],
    contact: null
  },

  'noord-roots': {
    title: 'Noord Roots',
    sub: 'Place Branding für Amsterdam Noord',
    blocks: () => [
      blockA({ lead: 'Amsterdam Noord soll mit neuen Büros, Museen und Wohnmöglichkeiten das Szeneviertel der Stadt werden. Dafür erstellten wir ein charakteristisches Place Branding.', imgAlt: 'Noord Roots Logomark' }),
      blockB({ label: 'Brief', body: '<p>Das Viertel hat eine reiche Geschichte — von der Werftindustrie bis zur heutigen Kreativszene. Das Branding sollte beides ehren, ohne nostalgisch zu wirken.</p>', imgAlt: 'Briefing-Visualisierung' }),
      blockC([
        { label: 'Wortmarke', caption: 'Typografisch stark, erkennbar auf Distanz.', imgAlt: 'Wortmarke' },
        { label: 'Farbsystem', caption: 'Warm, urban, lebendig — typisch Noord.', imgAlt: 'Farbpalette' }
      ]),
      blockD([
        { label: 'Leitsystem', caption: 'Wegweisung im öffentlichen Raum.', imgAlt: 'Leitsystem' },
        { label: 'Poster', caption: 'Kampagnenplakate für den öffentlichen Raum.', imgAlt: 'Poster' },
        { label: 'Digital', caption: 'Social-Media-Auftritt und Web-Elemente.', imgAlt: 'Digital' }
      ]),
      blockF({ imgAlt: 'Noord Roots — gesamter Brand-Auftritt', height: '440px' }),
    ],
    contact: null
  },

  'crossing-borders': {
    title: 'Crossing Borders',
    sub: 'Siebdruck · ca. 50×65 cm · 10,–',
    blocks: () => [
      blockA({ lead: 'Im Rahmen eines Gestaltungsateliers entstand dieser Siebdruck 2021, als die meisten Seminare auf Grund der Corona-Pandemie nur noch online stattfanden. Man war sich einerseits durch den Bildschirm so nah und gleichzeitig doch so weit entfernt.', imgAlt: 'Crossing Borders Siebdruck' }),
      blockB({ label: 'Technik', body: '<p>Zweifarbiger Siebdruck auf 120g Papier. Jeder Abzug ist ein Unikat — die Überlagerung der beiden Farben variiert leicht von Druck zu Druck.</p>', imgAlt: 'Druckprozess' }),
      blockF({ imgAlt: 'Crossing Borders — hängend in Raumansicht', height: '500px' }),
    ],
    contact: 'Noch erhältlich für 10,– € inkl. Versand. Anfragen gerne per <a href="mailto:lara@larabusse.com">E-Mail</a>.'
  },

  'was-waere-wenn': {
    title: 'Was wäre wenn …?',
    sub: 'Installation im öffentlichen Raum',
    blocks: () => [
      blockA({ lead: 'Wie würde ein Reichstag in Augsburg im Jahre 2020 aussehen? Auf unserem Reichstag soll Begegnung, Austausch und Zusammenarbeit gefördert werden.', imgAlt: 'Installation Gesamtansicht' }),
      blockE({ title: 'Was wäre wenn …? — Dokumentation' }),
      blockB({ label: 'Installation', body: '<p>Dabei entstand eine Installation als Teil des Reichstags, um zufällige Begegnung zu schaffen und neue Wege zu gehen. Die Arbeit hinterfragt, welchen Raum wir der zivilen Beteiligung in einer modernen Gesellschaft geben.</p>', imgAlt: 'Detailansicht Installation' }),
      blockF({ imgAlt: 'Installation im öffentlichen Raum', height: '420px' }),
    ],
    contact: null
  },

  'ackerwert': {
    title: 'A.ckerwert',
    sub: 'Flyergestaltung',
    blocks: () => [
      blockA({ lead: 'A.ckerwert unterstützt Verpächter:innen von landwirtschaftlichen Flächen dabei, Nachhaltigkeitsaspekte in Pachtvereinbarungen aufzunehmen.', body: '<p>Das Projekt ist eine Plattform, um Menschen zusammenzubringen und Lösungen zu finden, die für alle Beteiligten ein Gewinn sind: Landwirte, Flächeneigentümer und Natur.</p>', imgAlt: 'A.ckerwert Flyergestaltung' }),
      blockC([
        { label: 'Vorderseite', caption: 'Warm, organisch, einladend.', imgAlt: 'Flyer Vorderseite' },
        { label: 'Rückseite', caption: 'Klare Kontaktinformation und Aufruf zur Aktion.', imgAlt: 'Flyer Rückseite' }
      ]),
    ],
    contact: null
  },

  'kuenstlerbuch': {
    title: 'Künstlerbuch',
    sub: 'Zum Anschauen und Experimentieren',
    blocks: () => [
      blockA({ lead: 'Wir sammelten im Bekanntenkreis kreative Knickgeschichten, also Geschichten, in denen jeder Satz von einer anderen Person geschrieben ist und waren fasziniert von den unterhaltenden Ergebnissen.', imgAlt: 'Künstlerbuch aufgeklappt' }),
      blockB({ label: 'Entstehung', body: '<p>Daraus entstanden drei Leporellos aus Zeichnungen und Geschichten, die zum Anschauen und Experimentieren einladen. Jedes Buch kann auf unterschiedliche Weise gefaltet und gelesen werden.</p>', imgAlt: 'Leporello gefaltet' }),
      blockD([
        { label: 'Ausgabe 1', caption: 'Zeichnungen und erste Geschichten.', imgAlt: 'Ausgabe 1' },
        { label: 'Ausgabe 2', caption: 'Aquarelle und experimentelle Texte.', imgAlt: 'Ausgabe 2' },
        { label: 'Ausgabe 3', caption: 'Collage und Kurzprosa.', imgAlt: 'Ausgabe 3' }
      ]),
      blockF({ imgAlt: 'Alle drei Ausgaben im Überblick', height: '400px' }),
    ],
    contact: null
  }
};
