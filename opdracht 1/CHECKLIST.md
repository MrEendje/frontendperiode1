# Alteco Opdracht 1 — Responsive Grid Systeem

**Naam:** [Jouw naam]  
**Datum:** 2024  
**Klas:** JAAR 2 PER 1  

---

## 📋 Checklist — Inlevering

### ✅ Bestanden & Repository

- [ ] GitHub (of ander versiebeheer) repository aangemaakt
- [ ] `package.json` met npm scripts (`dev`, `build`)
- [ ] `README.md` met instructies hoe je het project runt
- [ ] `.gitignore` aanwezig (node_modules, dist, .DS_Store, enz.)
- [ ] Alle broncode volledig gecommit

### ✅ Layout & Responsive Design

#### Desktop (1200px+)
- [ ] Header met logo, navigatie, zoeken sticky
- [ ] Topbar met contactinfo en social links
- [ ] Hero banner met slider/carousel (3+ slides)
- [ ] Offers section (2 kolommen side-by-side)
- [ ] Services section (4 kolommen grid)
- [ ] Footer met footerstructuur

#### Tablet (768px – 1199px)
- [ ] Hamburger menu in plaats van full nav
- [ ] Offers section: nog steeds 2 kolommen
- [ ] Services section: 2 kolommen (2×2 grid)
- [ ] Hero slider buttons zichtbaar
- [ ] Footer gestapeld

#### Mobiel (< 768px)
- [ ] Full-breedte layout, geen horizontale scroll
- [ ] Hamburger menu werkt en is toegankelijk
- [ ] Offers section: 1 kolom, gestapeld
- [ ] Services section: 1 kolom, gestapeld
- [ ] Hero slider dots zichtbaar, pijlen verborgen
- [ ] Buttons vol breedte of passend

### ✅ Grid Systeem

- [ ] **Eigen, herbruikbare grid-klassen** of Bootstrap/Tailwind/etc.
  - Wat heb je gekozen? **[Antwoord hier]**
  - Waarom? **[Antwoord hier]**

- [ ] 12-koloms systeem (of duidelijk alternatief)
- [ ] Breakpoint-prefixes: `col-`, `col-sm-`, `col-md-`, `col-lg-`, `col-xl-`
- [ ] Gutter (ruimte tussen kolommen) consistent
- [ ] Row-klassen voor uitlijning (center, between, middle, enz.)

**Voorbeelden:**
```html
<!-- Mobiel: vol breedte, tablet: 6 kolommen (50%), desktop: 3 (33.3%) -->
<div class="col-12 col-md-6 col-lg-3">...</div>

<!-- Flex-rij met center uitlijning -->
<div class="row row--center">
  <div class="col-12">...</div>
</div>
```

### ✅ Styling & CSS

- [ ] Gestructureerde SCSS/SASS met mappen:
  - `abstracts/` (_tokens.scss, _grid.scss, _mixins.scss)
  - `base/` (_reset.scss, _typography.scss)
  - `layout/` (_header.scss, _hero.scss, _footer.scss)
  - `components/` (_buttons.scss, _cards.scss, _links.scss)
  - `main.scss` (importeert alles)

- [ ] CSS variabelen/tokens voor kleuren, fonts, spacing
- [ ] Consistent kleurschema (blauw primair #0f5ffd, donker #2b2b2b, grijs #737373)
- [ ] Typografieën consistent (Poppins, sans-serif fallback)
- [ ] Transities/animaties waar passend (hover states)

**Wat is je kleurkeuze en waarom?**
```
Primair:  #0f5ffd (blauw - actief, accent)
Donker:   #2b2b2b (tekst, donkere achtergronden)
Licht:    #f5f6f8 (section achtergronden)
Waarom:   Contrast, professioneel, duidelijk onderscheid
```

### ✅ Componenten & Interactiviteit

- [ ] **Header**
  - Logo + merk-naam
  - Primaire navigatie
  - Hamburger menu mobiel
  - Sticky/fixed gedrag
  - Topbar (contact, social)

- [ ] **Hero Slider**
  - Minimum 3 slides
  - Vorige/volgende knoppen (desktop)
  - Dot-indicator met active state
  - Auto-cycle (5sec interval)
  - Pauze bij hover (desktop)

- [ ] **Offers Section**
  - Titel + intro
  - 2+ kaarten met icoon, titel, tekst
  - "Read More" links
  - "View All Offers" knop

- [ ] **Services Section**
  - 4 service-kaarten (of meer)
  - Icoon (blauw cirkel), titel, beschrijving
  - Hover-effect (translateY omhoog)
  - Responsive layout (4 → 2 → 1 kolom)

- [ ] **Footer**
  - Meerkoloms layout
  - Links
  - Contact info
  - Copyright

- [ ] **Knoppen**
  - `.btn--primary` (blauw)
  - `.btn--dark` (zwart)
  - `.btn--ghost` (transparant met border)
  - Hover-states (kleur, transform)

### ✅ JavaScript (Enhancement)

- [ ] Hamburger-menu toggle (open/close)
- [ ] Hero-slider: volgende/vorige/dots
- [ ] Active nav-link highlight bij scroll
- [ ] Smooth-scroll naar anchors
- [ ] Console.log voor debugging (verwijderen of minimaliseren)

**JavaScript-keuzes:**
```
- Vanilla JavaScript (geen framework nodig)
- Intersection Observer voor sectie-highlight
- Interval voor auto-cycle slider
- Event listeners op knoppen
```

### ✅ Afbeeldingen & Iconen

- [ ] Hero-afbeelding(en) gekozen (stock foto's bv. Unsplash, Pexels)
- [ ] Iconen (Material Design, Font Awesome, custom SVG, of icomoon)
- [ ] Afbeelding-resolutie geschikt (niet zwaar, wel duidelijk)
- [ ] Alt-tekst aanwezig op afbeeldingen

**Afbeelding-bronnen gebruikt:**
```
- Hero: Unsplash (business professionals)
- Iconen: Custom SVG (Material Design icons)
- Stock foto's: [Bronnen hier]
```

### ✅ Prestaties & Toegankelijkheid

- [ ] Lighthouse score gemeten (destination: >80)
  - Performance: ___ / 100
  - Accessibility: ___ / 100
  - Best Practices: ___ / 100

- [ ] ARIA labels op interactieve elementen
- [ ] Fokus-states zichtbaar (outline)
- [ ] Kleurcontrast passend (minstens 4.5:1 voor tekst)
- [ ] Mobiel touch-targets minstens 44×44px
- [ ] Reduced motion respected

### ✅ Wireframes (inleveren!)

#### 📱 Mobiel Wireframe (< 768px)
- [ ] Gemaak en opgeslagen in `wireframes/mobile.png` (of PDF)
- [ ] Toont: header, hero, offers (1 kolom), services (1 kolom), footer
- [ ] Annotaties: breakpoints, gutter, spacing

#### 📊 Tablet Wireframe (768px – 1199px)
- [ ] Gemaak en opgeslagen in `wireframes/tablet.png` (of PDF)
- [ ] Toont: samenvoeging naar 2-koloms layout
- [ ] Menu-verandering: hamburger

#### 🖥️ Desktop Wireframe (1200px+)
- [ ] Gemaak en opgeslagen in `wireframes/desktop.png` (of PDF)
- [ ] Volledig menu zichtbaar
- [ ] 4-koloms services grid
- [ ] All features: hero slider controls, pijlen, full nav

---

## 📝 Technische Notities

### Grid Systeem — Eigen Keuze

**Wat heb je gekozen?**
- [x] **Eigen SCSS grid** (12-koloms, mixin-based, herbruikbaar)
- [ ] Bootstrap 5
- [ ] Tailwind CSS
- [ ] CSS Grid (display: grid)
- [ ] Flexbox (display: flex)

**Waarom deze keuze?**
```
Eigen SCSS grid:
- Slim en herbruikbaar (@mixin make-col)
- Volledig begrip van hoe grid werkt
- Geen onnodige overhead
- Breakpoints via @include respond-to mixin
- Gutter als CSS custom property (--gutter) aanpasbaar per rij
- Volle controle over klassenamen
```

**Hoe werkt het?**
```scss
// Mobiel: volle breedte
.col-12 { width: 100%; }

// Tablet 6 kolommen
.col-md-6 { width: 50%; }

// Desktop 3 kolommen
.col-lg-3 { width: 33.3333%; }

// Ruimte tussen kolommen (gutter)
.row { margin-inline: calc(var(--gutter) / -2); }
[class*="col-"] { padding-inline: calc(var(--gutter) / 2); }

// Flexbox wrapping
.row { display: flex; flex-wrap: wrap; }
```

### Responsive Breakpoints

```
Mobiel:              0px – 575px   (default)
Grote telefoon:     576px – 767px  (col-sm-)
Tablet:             768px – 991px  (col-md-)
Kleine laptop:      992px – 1199px (col-lg-)
Desktop:          1200px+          (col-xl-)
```

### CSS Structuur (SCSS)

```
src/scss/
├── abstracts/
│   ├── _tokens.scss      (kleuren, fonts, spacing, breakpoints)
│   └── _grid.scss        (12-koloms grid mixin-based)
├── base/
│   ├── _reset.scss       (normalize, box-sizing)
│   └── _typography.scss  (h1, h2, p, links, etc.)
├── layout/
│   ├── _header.scss      (topbar, nav, logo)
│   └── _hero.scss        (slider banner)
├── components/
│   ├── _buttons.scss     (btn, btn--primary, etc.)
│   ├── _links.scss       (link-more, link--light)
│   ├── _section.scss     (section-head, section--light)
│   └── _cards.scss       (offer-card, service-card)
└── main.scss             (alles importeert, + utilities + footer)
```

### Voordelen van deze structuur

1. **Modulair** – elk onderdeel is onafhankelijk
2. **Schaalbaar** – gemakkelijk nieuwe componenten toevoegen
3. **Onderhoudbaarheid** – tokens centraal, mixin herbruikbaarheid
4. **Performantie** – geminificeerd CSS in build
5. **DRY** – geen duplication (via mixins bv. @include make-col)

---

## 🎯 Extra Onderdelen (Bonuspunten?)

- [ ] Carousel/slider in hero met auto-scroll
- [ ] Smooth transitions/animaties (hover, scroll)
- [ ] Form-validatie (contact)
- [ ] Dark mode toggle
- [ ] Lazy-loading afbeeldingen
- [ ] Service-detail pagina's
- [ ] Blog/news sectie
- [ ] Testimonials slider
- [ ] Mobile menu animatie (slide in/out)

**Welke extra onderdelen heb je gemaakt?**
```
✓ Hero slider met auto-cycle (5sec)
✓ Hover-transities op kaarten
✓ Smooth scroll naar anchors
✓ Active nav-link highlight
✓ Hamburger menu animatie (⟹, X)
```

---

## 🚀 Build & Deploy

### Local Development
```bash
npm install
npm run dev
# Open http://localhost:5173
```

### Production Build
```bash
npm run build
# Output: dist/ folder
```

### Deploy (opsies)
- [ ] GitHub Pages
- [ ] Vercel
- [ ] Netlify
- [ ] Andere: ___________

**Waar is je project gehost?**
```
GitHub Pages: https://[username].github.io/alteco/
```

---

## 📸 Screenshots

- [ ] Desktop homepage
- [ ] Tablet homepage  
- [ ] Mobiel homepage

*Voeg hieronder screenshots toe of link ernaar:*

---

## ✨ Eindoordeel

**Wat voelde goed?**
- Het grid-systeem zelf bouwen → volledig begrip
- SCSS structuur → gemakkelijker onderhoud
- Breakpoints logisch georganiseerd
- Componenten herbruikbaar

**Wat was lastig?**
- _[Eventueel hieronder beschrijven]_

**Wat zou je volgende keer anders doen?**
- _[Eventueel hieronder beschrijven]_

---

**Handtekening Leerling:**  
Naam: ________________  
Datum: ________________  

---

## 📎 Inlevering (Canvas)

1. ✅ **GitHub link** naar repository
2. ✅ **Wireframes** (desktop, tablet, mobiel)
3. ✅ **Deze CHECKLIST.docx** — ingevuld en opgeslagen
4. ✅ Zelf presentation/demonstratie klaar voor review
