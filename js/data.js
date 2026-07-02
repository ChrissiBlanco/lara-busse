/* ─── Project data ────────────────────────────────────────────────────────────
   Each project has a title, subtitle, a blocks() function that returns an
   array of block HTML strings, and an optional contact note (HTML or null).
──────────────────────────────────────────────────────────────────────────── */

window.PROJECTS = {
  'beim-feiern': {
    title: 'Beim Feiern Balance Halten',
    sub: 'Schulung · Typ-1-Diabetes & Alkohol',
    blocks: () => [
      blockCarousel({
        label: 'Die Schulung lehrt Jugendlichen mit Typ-1-Diabetes die Herausforderungen beim Konsum von Alkohol und Drogen.',
        body: 'Mit Hilfe von Spielkarten und Gleichgewichtsübungen auf Balance Boards beschäftigen sich die Jugendlichen (13–17 Jahre) mit möglichen Situationen und Fragestellungen, die im Laufe einer Party auf sie zukommen können. Die Schulung ist in drei Phasen aufgeteilt und bietet den Teilnehmenden Raum für Austausch mit Gleichaltrigen und Antworten auf viele Fragen. Die Schulung dient als Methode um in Diskussion zu gehen und bietet keine medizinische Empfehlung. Diese werden von den anwesenden Diabetolog:innen und Ärzt:innen individuell bei der Schulung vermittelt.',
        images: [
          { src: 'img/balance/DSC00693.png', imgAlt: 'Balance Board Übung', caption: 'Balance Board Training' },
          { src: 'img/balance/DSC00726_LaraBusse.png', imgAlt: 'Jugendliche mit Spielkarten', caption: 'Spielkartenszenario' },
          { src: 'img/balance/DSC00732_LaraBusse.jpg', imgAlt: 'Gruppe im Workshop', caption: 'Interaktiver Workshop' }
        ]
      }),
      blockCarousel({
        label: 'Gestaltung',
        body: 'Für jede Phase gibt es passende Spielkarten, die zur Strukturierung des Workshops dienen. Die erste Phase wird mit digitalen Karten gespielt. Dafür scannen die Jugendlichen einen QR-Code auf dem Handy und werden durch weiterklicken in der ersten Phase geleitet. Dabei können sich die Jugendlichen entscheiden, ob sie den pinken oder türkisen QR-Code scannen. Der pinke thematisiert auch Cannabis und illegale Drogen, während der türkise sich nur auf Alkohol bezieht. Ebenso weisen die pink markierten Erfahrungskarten auf Inhalte mit illegalen Drogen hin und können von der Kursleiterin aussortiert werden.',
        images: [
          { src: 'img/balance/DSC00735_LaraBusse.jpg', imgAlt: 'Teilnehmende diskutieren'},
          { src: 'img/balance/DSC00736_LaraBusse.jpg', imgAlt: 'Lernmaterialien auf dem Tisch' },
          { src: 'img/balance/DSC00742_LaraBusse_ohneGesichter.png', imgAlt: 'Ohne Gesichter Workshopfoto' }
        ]
      }),
      blockD([
        { label: 'Phase 1', caption: 'Die erste Phase dient der Sensibilisierung. Die Spielkarten führen Teilnehmende durch einen fiktiven Partyabend. Die Texte werfen Fragen rund um das Thema Feiern mit Typ-1-Diabetes auf und bieten herausfordernde Übungen, um das Gleichgewicht auf dem Balance Board zu halten. Bei jeder Karte verschwindet eine Stütze unter dem Board, sodass es zunehmend mehr Konzentration benötigt, um in Balance zu bleiben.', src: 'img/balance/DSC00693.png', imgAlt: 'Phase 1 Balance Board Übung' },
        { label: 'Phase 2', caption: 'In Phase 2 werden die Fragen der Teilnehmenden von dem anwesenden Arzt oder der anwesenden Ärztin geklärt. Auf den Karten befinden sich Tipps im Umgang mit Alkohol und Drogen, die zusammen mit den Jugendlichen erarbeitet werden sollen. Diese tauchen auch wieder auf dem Handout für die Jugendlichen auf.', src: 'img/balance/DSC00736_LaraBusse.jpg', imgAlt: 'Phase 2 Unterrichtsmaterialien' },
        { label: 'Phase 3', caption: 'Auf Karten aus Phase 3 befinden sich Erfahrungsberichte von jungen Menschen mit Diabetes und deren Umgang auf Parties aus geführten Interviews. Diese können nach Bedarf vorgelesen werden und helfen besonders Jugendlichen mit wenig Erfahrung beim Feiern. Oft entstehen danach nochmal Fragen, die Teilnehmenden können sich bestimmte Situationen besser vorstellen und trauen sich auch von ihren eigenen Erlebnissen zu berichten.', src: 'img/balance/DSC00816.png', imgAlt: 'Phase 3 Erfahrungsberichte' }
      ]),
      blockE({ title: 'Projektfilm — balance' }),
      blockA({ label: 'Konzept', body: '<p>Die Schulung verbindet medizinisches Wissen mit alltagsnahen Szenarien. Anhand von Rollenspielen und interaktiven Aufgaben lernen die Teilnehmenden, ihre Blutzuckerwerte auch in Feiersituationen sicher im Blick zu behalten.</p>', imgAlt: 'Konzept-Illustration' }),
      blockCarousel({
        label: 'Ergebnis',
        lead: 'Teilnehmende erhalten Materialien und praxisnahe Strategien, um auch beim Feiern mit Typ-1-Diabetes sicher unterwegs zu sein.',
        images: [
          { src: 'img/balance/DSC00816.png', imgAlt: 'Schulungsergebnis', caption: 'Ergebnis der Schulung' },
          { src: 'img/balance/DSC00832.png', imgAlt: 'Gruppenarbeit', caption: 'Austausch mit Gleichaltrigen' },
          { src: 'img/balance/DSC00836.png', imgAlt: 'Materialien und Workshop', caption: 'Praktische Materialien' }
        ]
      }),
    ],
    contact: 'Das Tool ist im Rahmen meines Studiums im Projekt "Spielen hilft!" der BURG Giebichenstein Halle entstanden. Bei Interesse an dem Spiel, melden Sie sich gerne per E-mail bei mir.'
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
