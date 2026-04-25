# Projektbriefing: Webseite Immobilien- & Gartenservice ON GbR

> **Hinweis an die ausführende Claude-Instanz:** Dieses Dokument ist das vollständige Briefing für den Bau einer modernen, SEO-optimierten Webseite. Der Auftraggeber baut die Seite als Dienstleister für die Kunden. Alle Entscheidungen mit dem Auftraggeber wurden bereits getroffen und sind unten dokumentiert. Bei Unklarheiten zuerst die "Offene Punkte"-Sektion am Ende prüfen, bevor Annahmen getroffen werden.

---

## 1. Projektübersicht

### 1.1 Kunde
**Immobilien- & Gartenservice ON GbR**
Inhaber: Bastian Ollmanns & Johannes Neerschulte
Tätigkeitsgebiet: Kreis Heinsberg und Umgebung (NRW, Deutschland)

### 1.2 Kontaktdaten (auf der Webseite zu verwenden)
- **E-Mail:** info.serviceon@web.de
- **Telefon:** +49 163 3669579
- **Vollständige Geschäftsadresse:** *(noch vom Kunden einzuholen – Platzhalter im Impressum)*

### 1.3 Zielgruppe
1. **Privatkunden** (Hauptzielgruppe) – Eigenheimbesitzer, Mieter mit Garten
2. **Gewerbekunden** – kleinere Firmen, Gastronomie, Praxen
3. **Hausverwaltungen** – Mehrfamilienhäuser, Wohnanlagen

### 1.4 Leistungen
**Gartenservice**
- Rasenpflege & Rasenschnitt
- Hecken- & Strauchschnitt
- Baum- & Gehölzpflege
- Unkrautentfernung
- Reinigung von Grün- & Grauflächen
- Saisonale Gartenarbeiten & Dauerpflege

**Hausmeisterservice**
- Regelmäßige Objektkontrollen
- Treppenhaus- & Außenreinigung
- Kleinreparaturen & Instandhaltung
- Austausch von Leuchtmitteln
- Winterdienst

**Zusatzleistungen**
- Individuelle Leistungen nach Absprache

### 1.5 USPs (Unique Selling Points – aus dem Instagram-Auftritt übernommen)
1. Schnelle und zuverlässige Arbeit (effizient, gründlich, zuverlässig)
2. Hochwertige Ausstattung und Geräte (moderne Technik)
3. Faire Preise (transparent, faire Konditionen)
4. Flexible Terminabsprachen
5. Individuelle Lösungen nach Kundenbedarf

---

## 2. Technische Entscheidungen

| Punkt | Entscheidung |
|---|---|
| **CMS** | WordPress (neueste Version) |
| **Hosting** | Hetzner (eigene Server des Auftraggebers) |
| **Domain** | Noch zu registrieren – Vorschläge siehe Abschnitt 3 |
| **Theme** | Empfehlung: **Kadence** oder **GeneratePress** (beide kostenlos, schnell, sauberer Code, mobile-first, gut für SEO) |
| **Page Builder** | Gutenberg (Block-Editor, nativ in WordPress) – kein zusätzlicher Builder wie Elementor (zu schwer, schlechtere Performance) |
| **SEO-Plugin** | Rank Math (kostenlos, besser als Yoast in der Free-Version) |
| **Cache/Performance** | WP Super Cache oder LiteSpeed Cache (je nach Hetzner-Setup) |
| **Bildoptimierung** | ShortPixel oder Converter for Media (WebP-Konvertierung) |
| **Backup** | UpdraftPlus (kostenlos) |
| **Sicherheit** | Wordfence (kostenlos) + 2FA für Admin-Logins |
| **Tracking/Analytics** | **Plausible** oder **gar keins** zum Start – datensparsam, kein Cookie-Banner nötig. **KEIN Google Analytics.** |
| **Karten** | OpenStreetMap (z. B. via Leaflet) statt Google Maps – spart Cookie-Banner |
| **Schriftarten** | Lokal eingebunden (NICHT von Google Fonts CDN – Abmahnrisiko in DE) |
| **SSL** | Let's Encrypt via Hetzner |
| **PHP-Version** | 8.2 oder höher |

---

## 3. Domain

Verfügbarkeit muss bei der Registrierung geprüft werden. Vorschläge in Reihenfolge der Präferenz:

1. `service-on-gbr.de`
2. `on-gartenservice.de`
3. `on-immobilienservice.de`
4. `service-on.de` (kurz, aber wahrscheinlich vergeben)
5. `ollmanns-neerschulte.de`

Empfehlung: Eine Hauptdomain registrieren, ggf. eine zweite als 301-Redirect.

---

## 4. Seitenstruktur (Sitemap)

```
/                          → Startseite
/leistungen/               → Leistungs-Übersicht
  /leistungen/gartenservice/
  /leistungen/hausmeisterservice/
  /leistungen/zusatzleistungen/
/projekte/                 → Referenzen (Custom Post Type)
  /projekte/[einzelprojekt]/
/ueber-uns/                → Team & Unternehmen
/einsatzgebiet/            → Kreis Heinsberg + Orte
/kontakt/                  → Kontaktdaten (KEIN Formular)
/impressum/                → Pflichtangaben
/datenschutz/              → DSGVO
```

URLs: alle in Kleinbuchstaben, mit Bindestrichen, sprechend (für SEO).

---

## 5. Inhalte pro Seite

### 5.1 Startseite

**Hero-Sektion**
- Headline (H1): "Gepflegte Immobilie und ein schöner Garten?"
- Subline: "Wir kümmern uns darum – zuverlässig, fair und persönlich. Ihr Partner im Kreis Heinsberg."
- 2 CTA-Buttons: "Jetzt anrufen" (`tel:+491633669579`) und "E-Mail schreiben" (`mailto:info.serviceon@web.de`)
- Hintergrund: hochwertiges Naturfoto (gepflegter Garten oder Vorher-Nachher)

**USP-Sektion (3 oder 4 Spalten)**
- Schnelle und zuverlässige Arbeit
- Hochwertige Ausstattung
- Faire Preise
- Flexible Terminabsprachen

Mit Lucide-Icons (Linien-Icons, modern).

**Leistungs-Teaser (3 Karten)**
- Gartenservice → verlinkt auf `/leistungen/gartenservice/`
- Hausmeisterservice → verlinkt auf `/leistungen/hausmeisterservice/`
- Zusatzleistungen → verlinkt auf `/leistungen/zusatzleistungen/`

**Über-uns-Teaser**
- Kurzer Text + Foto Bastian & Johannes (Platzhalter)
- Link zur Über-uns-Seite

**Projekte-Vorschau**
- Die letzten 3 Projekte als Karten (automatisch via Custom Post Type)
- Link zu allen Projekten

**Einsatzgebiet-Teaser**
- Kurze Liste der bedienten Orte
- Karte (OpenStreetMap)

**Bewertungen**
- 3–5 Google-Bewertungen (zum Start statisch als Zitate, später dynamisch)
- Sternebewertung gut sichtbar

**Final-CTA**
- "Bereit für einen gepflegten Garten oder professionellen Hausmeisterservice?"
- Telefon + E-Mail groß

### 5.2 Leistungs-Übersichtsseite (`/leistungen/`)

- H1: "Unsere Leistungen für Ihren Garten und Ihre Immobilie"
- Kurzer Einleitungstext
- 3 große Karten mit Bild/Icon, Titel, kurzer Beschreibung, Link zur Detailseite

### 5.3 Leistungs-Detailseiten (jeweils eigene URL für SEO)

**`/leistungen/gartenservice/`**
- H1: "Gartenservice im Kreis Heinsberg"
- Title-Tag: "Gartenservice Kreis Heinsberg | ON GbR – Rasen, Hecken, Pflege"
- Meta-Description: "Professioneller Gartenservice im Kreis Heinsberg: Rasenpflege, Heckenschnitt, Baumpflege und mehr. Faire Preise, flexible Termine. Jetzt anfragen!"
- Inhalte:
  - Einleitung (2–3 Absätze)
  - Leistungsliste (alle 6 Punkte als ausformulierte Abschnitte mit H2/H3)
  - Beispielprojekte (2–3 Karten aus Custom Post Type, gefiltert nach Kategorie "Garten")
  - FAQ (3–5 typische Fragen, gut für SEO)
  - CTA

**`/leistungen/hausmeisterservice/`**
- H1: "Hausmeisterservice im Kreis Heinsberg"
- Title-Tag: "Hausmeisterservice Kreis Heinsberg | ON GbR – Objektpflege & Winterdienst"
- Analog zu oben mit den 5 Leistungspunkten

**`/leistungen/zusatzleistungen/`**
- H1: "Individuelle Zusatzleistungen"
- Erklärung, dass viele individuelle Aufträge möglich sind, Kontakt-CTA

### 5.4 Projekte (Custom Post Type)

**Wichtig: Custom Post Type "projekte" anlegen**, damit Bastian & Johannes neue Projekte einfach über das WordPress-Backend hinzufügen können.

Felder pro Projekt (via Advanced Custom Fields oder ähnlich):
- Titel (z. B. "Heckenschnitt in Erkelenz")
- Kategorie (Taxonomy: Garten / Hausmeister / Sonstiges)
- Ort (Text)
- Datum
- Bilder-Galerie (Vorher/Nachher möglich)
- Beschreibungstext
- Featured Image

**Übersichtsseite** `/projekte/`:
- H1: "Unsere Projekte und Referenzen"
- Filter nach Kategorie (Garten, Hausmeister, Alle)
- Grid mit Projekt-Karten
- Pagination

**Einzelseite** `/projekte/[slug]/`:
- Titel, Ort, Datum, Kategorie
- Bildergalerie
- Beschreibungstext
- CTA "Ähnliches Projekt anfragen"

### 5.5 Über uns (`/ueber-uns/`)

- H1: "Über uns – Bastian Ollmanns & Johannes Neerschulte"
- Team-Foto (Platzhalter)
- Geschichte/Werte (2–3 Absätze)
- Kurzporträt beider Inhaber
- Schwerpunkt: Persönlichkeit, Region, Verlässlichkeit

### 5.6 Einsatzgebiet (`/einsatzgebiet/`)

- H1: "Unser Einsatzgebiet im Kreis Heinsberg"
- Karte (OpenStreetMap)
- Liste der Orte:
  - Heinsberg, Erkelenz, Geilenkirchen, Hückelhoven, Wegberg, Übach-Palenberg, Selfkant, Waldfeucht, Gangelt
  - Plus angrenzende Gemeinden im Kreis
- Hinweis: "Auch außerhalb des Kreises auf Anfrage"

### 5.7 Kontakt (`/kontakt/`)

**Kein Kontaktformular!** Stattdessen:
- H1: "Kontaktieren Sie uns"
- Telefon groß und klickbar (`tel:+491633669579`)
- E-Mail groß und klickbar (`mailto:info.serviceon@web.de`)
- Erreichbarkeit/Antwortzeiten ("Wir antworten in der Regel innerhalb von 24 Stunden")
- Geschäftsadresse
- Karte
- Hinweis: "Direkter Draht ist uns wichtig – melden Sie sich gerne telefonisch oder per E-Mail."

### 5.8 Impressum

Pflichtangaben gemäß § 5 TMG:
- Vollständiger Name der GbR
- Beide Gesellschafter (Bastian Ollmanns, Johannes Neerschulte)
- Geschäftsadresse
- Telefon, E-Mail
- USt-ID falls vorhanden
- Gewerbeordnung-Hinweis (Pflicht für GbR)
- Berufshaftpflichtversicherung (falls relevant)
- Streitschlichtung-Hinweis (EU-Plattform)

→ Generator empfehlen: e-recht24.de oder anwalt.de

### 5.9 Datenschutz

DSGVO-konforme Datenschutzerklärung:
- Verantwortlicher
- Hosting (Hetzner – ist DSGVO-freundlich, eigener Hinweis)
- Server-Logfiles
- Cookies (nur technisch notwendige, falls keine Tracking-Tools)
- Plausible Analytics (falls genutzt)
- Plugins (nur die tatsächlich genutzten erwähnen)
- Rechte der Betroffenen

→ Generator empfehlen: e-recht24.de

---

## 6. Design-System

### 6.1 Farbpalette

| Farbe | Hex | Verwendung |
|---|---|---|
| Dunkelgrün (Primär) | `#1F4D2C` | Headlines, Buttons, Akzente |
| Frischgrün (Akzent) | `#5BAE3A` | Icons, Hover-States, Highlights |
| Anthrazit (Text) | `#1A1A1A` | Fließtext |
| Mittelgrau | `#6B6B6B` | Sekundärer Text, Captions |
| Hellgrau | `#F5F5F5` | Hintergrundsektionen |
| Weiß | `#FFFFFF` | Hauptbackground |

### 6.2 Typografie

- **Font:** Inter (lokal eingebunden via `@font-face`, NICHT von Google Fonts CDN)
- **Fallback-Stack:** `Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **Größen (mobile-first, in rem):**
  - H1: 2.5rem (Desktop 3.5rem)
  - H2: 2rem (Desktop 2.5rem)
  - H3: 1.5rem (Desktop 1.75rem)
  - Body: 1rem (16px), line-height 1.6
  - Small: 0.875rem

### 6.3 Layout

- **Max-Width Container:** 1200px
- **Section Padding:** 4rem oben/unten Mobile, 6rem Desktop
- **Grid:** flexbox/grid, mobile-first
- **Border-Radius:** 8px (Buttons), 12px (Karten) – dezente Rundungen
- **Schatten:** sehr subtil, max `0 4px 12px rgba(0,0,0,0.08)`
- **Buttons:**
  - Primär: dunkelgrüner Hintergrund, weiße Schrift, leichte Rundung
  - Sekundär: weißer Hintergrund, dunkelgrüner Rahmen + Text
  - Hover: leichte Helligkeitsverschiebung, kein wildes Animieren

### 6.4 Bilder

- **Format:** WebP mit JPG-Fallback
- **Lazy Loading:** native `loading="lazy"`
- **Alt-Texte:** beschreibend, nicht keyword-stuffed
- **Platzhalter:** Unsplash (lizenzfrei, attribution wo nötig)
  - Suchbegriffe: "manicured garden", "lawn mowing", "hedge trimming", "house exterior maintenance"

### 6.5 Logo

Vorhandenes Logo aus den Screenshots verwenden. Sollte als **SVG** vorliegen für scharfe Darstellung. Falls nur PNG vorhanden: vom Kunden in Vektor anfragen oder freistellen lassen.

---

## 7. SEO-Strategie

### 7.1 On-Page-SEO

**Pflicht für jede Seite:**
- Einzigartiger Title-Tag (max. 60 Zeichen)
- Meta-Description (max. 155 Zeichen) mit CTA
- Eine H1 pro Seite
- H2/H3-Struktur logisch
- Sprechende URL
- Bild-ALT-Texte
- Interne Verlinkung (z. B. von Leistungsseite zu Projekten)

### 7.2 Lokales SEO (Schwerpunkt!)

**LocalBusiness-Schema (JSON-LD)** im `<head>` jeder Seite:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Immobilien- & Gartenservice ON GbR",
  "image": "https://[domain]/logo.png",
  "telephone": "+49 163 3669579",
  "email": "info.serviceon@web.de",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Straße]",
    "addressLocality": "[Ort]",
    "postalCode": "[PLZ]",
    "addressCountry": "DE"
  },
  "areaServed": [
    "Heinsberg", "Erkelenz", "Geilenkirchen", "Hückelhoven",
    "Wegberg", "Übach-Palenberg", "Selfkant", "Waldfeucht", "Gangelt"
  ],
  "priceRange": "€€",
  "openingHoursSpecification": [...]
}
```

**Google Business Profil:**
- Webseite mit Profil verlinken
- NAP (Name, Adresse, Telefon) muss überall identisch sein

**Lokale Verzeichnisse (später):**
- Das Örtliche
- Gelbe Seiten
- Cylex
- 11880

### 7.3 Keyword-Strategie

**Hauptkeywords:**
- Gartenservice Heinsberg
- Hausmeisterservice Heinsberg
- Gartenpflege Kreis Heinsberg
- Gärtner Heinsberg

**Long-Tail (für Unterseiten/FAQ/Blog):**
- Heckenschnitt Heinsberg
- Rasenpflege Erkelenz
- Winterdienst Heinsberg
- Treppenhausreinigung Hausverwaltung Heinsberg
- Baumpflege Kreis Heinsberg

**Zukünftige Erweiterung (nach Launch):**
- Eigene Ortsseiten ("Gartenservice Erkelenz", "Gartenservice Heinsberg" etc.) – starkes Mittel für lokales Ranking
- Ratgeber-Blog (z. B. "Wann sollte man Hecken schneiden?")

### 7.4 Technisches SEO

- Sitemap.xml automatisch von Rank Math generieren
- robots.txt korrekt konfigurieren
- Google Search Console anbinden
- Bing Webmaster Tools anbinden
- Schnelle Ladezeiten (Lighthouse-Score > 90 angestrebt)
- Mobile-friendly (zwingend)
- HTTPS überall
- Strukturierte Daten validieren

---

## 8. Bewertungen einbinden

**Phase 1 (Launch):** Statisch
- 3–5 Top-Bewertungen aus Google Business manuell als Zitate einbauen
- Mit Vorname + Initial Nachname, Sternebewertung
- Kein Plugin nötig

**Phase 2 (später):** Dynamisch
- Plugin: **Trustindex** oder **WP Google Reviews**
- Holt Bewertungen automatisch via Google API
- Erst sinnvoll bei > 10 Bewertungen

---

## 9. Rechtliche Anforderungen (DSGVO & TMG)

### 9.1 Pflicht
- [x] Impressum (siehe oben)
- [x] Datenschutzerklärung
- [x] Cookie-Banner: NUR wenn nicht-essenzielle Cookies/Tracking → bei dem Setup hier (Plausible oder gar nichts) **nicht nötig**
- [x] SSL-Zertifikat (Let's Encrypt via Hetzner)
- [x] Google Fonts lokal einbinden (NICHT via CDN)
- [x] Karte: OpenStreetMap statt Google Maps, oder Google Maps nur nach Klick laden

### 9.2 Empfohlene Tools
- Impressum-Generator: e-recht24.de
- Datenschutz-Generator: e-recht24.de oder datenschutz-generator.de

---

## 10. Hosting-Setup auf Hetzner

### 10.1 Empfohlenes Produkt
- **Hetzner Webhosting** (z. B. Level 4 oder 9) – günstig, ausreichend für eine Unternehmenswebseite
- Alternative: Hetzner Cloud (CX22) mit eigener WordPress-Installation, falls mehr Kontrolle gewünscht

### 10.2 Server-Konfiguration
- PHP 8.2+
- MySQL/MariaDB
- HTTPS (Let's Encrypt automatisch via Hetzner)
- Tägliche Backups aktivieren
- WordPress-Updates aktiviert lassen (Auto-Updates für Minor-Versionen)

### 10.3 Setup-Reihenfolge
1. Domain bei Hetzner oder externem Registrar bestellen
2. Hosting-Paket bestellen
3. Domain auf Hosting verbinden (DNS A-Record)
4. SSL-Zertifikat aktivieren
5. WordPress 1-Klick-Installer von Hetzner nutzen
6. Theme + Plugins installieren
7. Inhalte einpflegen
8. Search Console verbinden
9. Live gehen

---

## 11. Plugin-Liste

| Plugin | Zweck | Pflicht? |
|---|---|---|
| **Rank Math** | SEO | ✅ Pflicht |
| **UpdraftPlus** | Backups | ✅ Pflicht |
| **Wordfence** | Sicherheit | ✅ Pflicht |
| **WP Super Cache** oder **LiteSpeed Cache** | Performance | ✅ Pflicht |
| **ShortPixel** oder **Converter for Media** | Bild-Optimierung/WebP | ✅ Pflicht |
| **Advanced Custom Fields (ACF)** | Custom Post Type "Projekte" | ✅ Pflicht |
| **Custom Post Type UI** | CPT-Erstellung | ✅ Pflicht |
| **OMGF (Host Webfonts Local)** | Google Fonts lokal hosten | ✅ Pflicht |
| **Plausible Analytics** | Tracking (datensparsam) | Optional |
| **Trustindex** | Google Reviews dynamisch | Phase 2 |

**Wichtig:** Nicht zu viele Plugins! Jedes Plugin = potenzielle Sicherheitslücke + Performance-Kosten.

---

## 12. Roadmap & Aufgabenliste

### Phase 1: Vorbereitung
- [ ] Domain registrieren (Vorschläge in Abschnitt 3)
- [ ] Hetzner-Hosting bestellen
- [ ] WordPress installieren
- [ ] Theme (Kadence/GeneratePress) installieren und Child Theme anlegen
- [ ] Vom Kunden einsammeln:
  - [ ] Vollständige Geschäftsadresse
  - [ ] USt-ID (falls vorhanden)
  - [ ] Logo als SVG (oder hochauflösende PNG)
  - [ ] Texte zum Team (2–3 Sätze pro Person)
  - [ ] Genaue Liste der bedienten Orte
  - [ ] Link zum Google Business Profil

### Phase 2: Aufbau
- [ ] Design-System einrichten (Farben, Typografie, Spacing)
- [ ] Globale Komponenten (Header, Footer, Buttons)
- [ ] Startseite bauen
- [ ] Leistungs-Übersichtsseite
- [ ] 3 Leistungs-Detailseiten
- [ ] Über-uns-Seite
- [ ] Einsatzgebiet-Seite
- [ ] Kontaktseite
- [ ] Custom Post Type "Projekte" einrichten (mit ACF)
- [ ] Projekte-Übersichtsseite mit Filter
- [ ] Projekt-Detailseite (Single)
- [ ] 2–3 Demo-Projekte als Beispiel anlegen

### Phase 3: SEO & Recht
- [ ] Rank Math konfigurieren
- [ ] LocalBusiness-Schema einbauen
- [ ] Sitemap erstellen und an Search Console schicken
- [ ] Google Business mit Webseite verknüpfen
- [ ] Impressum (mit e-recht24-Generator)
- [ ] Datenschutzerklärung (mit e-recht24-Generator)
- [ ] OpenStreetMap-Karte einbauen
- [ ] Performance-Test (Lighthouse, PageSpeed Insights)
- [ ] Mobile-Test

### Phase 4: Übergabe
- [ ] Kurze Schulung für Bastian/Johannes (30 Min): Wie lege ich ein neues Projekt an?
- [ ] Mini-Anleitung schriftlich (1 Seite PDF)
- [ ] Backup einrichten und testen
- [ ] Final-Check und Go-Live

---

## 13. Inhaltliche Vorlagen (Texte)

### 13.1 Hero-Subline
"Ihr verlässlicher Partner für Garten- und Hausmeisterleistungen im Kreis Heinsberg. Schnell, fair und persönlich."

### 13.2 Über-uns (Vorschlag)
"Wir sind Bastian Ollmanns und Johannes Neerschulte – die Gesichter hinter ON GbR. Mit Leidenschaft für gepflegte Außenanlagen und ein gutes Auge für Details kümmern wir uns um Privathaushalte, Gewerbeobjekte und Hausverwaltungen im Kreis Heinsberg. Persönlicher Kontakt, transparente Preise und verlässliche Arbeit sind für uns selbstverständlich – nicht das Extra."

### 13.3 Beispiel-FAQ Gartenservice
- **Wie oft sollte der Rasen gemäht werden?** → "In der Wachstumsperiode (April–Oktober) empfehlen wir alle 1–2 Wochen. Wir bieten Pflegeverträge mit festen Intervallen an."
- **Übernehmen Sie auch die Entsorgung des Grünschnitts?** → "Ja, auf Wunsch entsorgen wir den anfallenden Grünschnitt fachgerecht."
- **Wann ist die beste Zeit für den Heckenschnitt?** → "Form- und Pflegeschnitte sind außerhalb der Brutzeit (1. März – 30. September) einzuhalten – wir beraten Sie gerne zum optimalen Zeitpunkt."
- **Bieten Sie auch einmalige Aufträge an?** → "Selbstverständlich – ob einmalig oder regelmäßig, wir richten uns nach Ihrem Bedarf."

### 13.4 Beispiel-FAQ Hausmeisterservice
- **Was umfasst der Winterdienst?** → "Räumen und Streuen von Gehwegen, Zufahrten und Eingangsbereichen gemäß Räum- und Streupflicht."
- **Wie schnell sind Sie bei Notfällen vor Ort?** → "Im Kreis Heinsberg in der Regel innerhalb weniger Stunden – kontaktieren Sie uns telefonisch."
- **Übernehmen Sie auch Aufträge für Hausverwaltungen?** → "Ja, wir betreuen mehrere Wohnanlagen und arbeiten mit Hausverwaltungen langfristig zusammen."

---

## 14. Wichtige Hinweise für die Umsetzung

1. **Keine Cookies ohne Banner.** Nur technisch notwendige Cookies. Wenn Plausible eingebunden wird: das ist cookielos und braucht keinen Banner.

2. **KEINE Google Fonts via CDN!** Lokal einbinden via OMGF-Plugin oder manuell. Sonst Abmahnrisiko.

3. **Bilder vor dem Upload optimieren** (WebP, max. 1920px Breite, Komprimierung).

4. **Keine Tracking-Pixel** von Facebook, TikTok etc. einbauen. Bei Bedarf später nachrüsten mit korrektem Cookie-Consent.

5. **Backup vor jeder größeren Änderung** und automatisierte tägliche Backups.

6. **Editor-Berechtigungen:** Bastian & Johannes bekommen Rolle "Editor" oder eine custom Rolle, die nur Projekte verwalten darf – NICHT "Administrator".

7. **Mobile-first denken.** Mehr als 70 % der lokalen Suchanfragen kommen mobil.

8. **Performance-Ziel:** Lighthouse > 90 in allen Kategorien (Performance, SEO, Accessibility, Best Practices).

---

## 15. Offene Punkte (vom Kunden noch zu klären)

- [ ] Exakte Geschäftsadresse für Impressum
- [ ] USt-ID (falls vorhanden)
- [ ] Welche Domain konkret? (Auswahl aus Vorschlägen oder eigener Wunsch)
- [ ] Logo als Vektor verfügbar?
- [ ] Liste der genauen bedienten Orte
- [ ] Link zum Google Business Profil
- [ ] Welche 3–5 Top-Bewertungen für die Startseite?
- [ ] Team-Foto vorhanden oder muss noch entstehen?

---

## 16. Referenzen / Inspiration (Visueller Stil)

Modern, clean, mit viel Weißraum, dezente Animationen. Kein Stock-Photo-Look, sondern echte Bilder oder hochwertige Naturfotos.

Stilrichtung-Stichworte:
- Squarespace-Cleanness
- Apple-Produktseiten-Großzügigkeit
- Skandinavisches Webdesign
- Generous typography, restrained colors

---

## 17. Erfolgsmessung (nach Launch)

- Google Search Console: Rankings für Hauptkeywords
- Plausible: Besucherzahlen, Top-Seiten
- Anrufe / E-Mail-Anfragen (manuell tracken)
- Google Business Insights: Anrufe direkt aus Suchergebnissen
- Lighthouse-Score regelmäßig prüfen

---

**Ende des Briefings.**
