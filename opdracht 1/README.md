# Alteco — Responsive Business Website

**Opdracht 1** — MBO Jaar 2, Periode 1  
**Onderwerp:** Responsive grid systeem & layout

Een professionele business-website gebouwd met een **eigen, herbruikbaar 12-koloms SCSS-grid systeem** en Vite als build tool.

![Desktop preview](https://via.placeholder.com/800x400?text=Desktop+Preview)
![Tablet preview](https://via.placeholder.com/600x400?text=Tablet+Preview)
![Mobile preview](https://via.placeholder.com/400x600?text=Mobile+Preview)

---

## 🎯 Features

### ✨ Responsive Design
- **Mobile First** approach
- **4 breakpoints**: 576px (sm), 768px (md), 992px (lg), 1200px (xl)
- Fluid typography met `clamp()`
- Consistent gutter (30px) tussen kolommen

### 📐 Grid Systeem
- **Eigen SCSS grid** (12-koloms)
- Klassen: `.col-`, `.col-sm-`, `.col-md-`, `.col-lg-`, `.col-xl-` (1–12)
- Flexbox-based wrapping
- Rij-utilities: `.row--center`, `.row--between`, `.row--middle`
- Gutter aanpasbaar via CSS custom property

### 🎨 Componenten
- **Header** – sticky, topbar met contactinfo, logo, nav
- **Hero Slider** – 3 slides, auto-cycle, dot-indicators, vorige/volgende knoppen
- **Offers Section** – 2-koloms responsive cards
- **Services Section** – 4-koloms responsive grid (4 → 2 → 1 kolom)
- **Footer** – multi-column layout

### ⚡ Interactiviteit
- Hamburger menu (mobiel/tablet)
- Hero slider: auto-advance, pauze op hover, click-dots
- Smooth scroll naar anchors
- Active nav-link highlight bij scroll
- Hover-transities op kaarten en knoppen

### 🏗️ Code Organisatie
```
src/scss/
├── abstracts/       (tokens, grid mixin, variabelen)
├── base/            (reset, typografie)
├── layout/          (header, hero, footer)
├── components/      (buttons, cards, links, sections)
└── main.scss        (importeert alles)

src/js/
└── main.js          (slider, menu, smooth scroll)

index.html           (semantic HTML5)
```

---

## 🚀 Quick Start

### Vereisten
- **Node.js** 16+ en npm
- **Git** (optioneel)

### Installatie & Development

```bash
# 1. Clone of download het project
git clone https://github.com/[username]/alteco.git
cd alteco

# 2. Installeer dependencies
npm install

# 3. Start dev-server (auto reload)
npm run dev

# Browser opent automatisch op http://localhost:5173
```

### Production Build

```bash
npm run build
# Output: dist/ folder (klaar voor hosting)

# Preview:
npm run preview
```

---

## 📋 Grid Systeem — Uitleg

### Basis

```html
<!-- Container: max-width + centered -->
<div class="container">
  <!-- Rij: flexbox, wraps automatisch -->
  <div class="row">
    <!-- Kolom: 12-koloms systeem -->
    <div class="col-12 col-md-6 col-lg-4">...</div>
    <div class="col-12 col-md-6 col-lg-4">...</div>
    <div class="col-12 col-md-6 col-lg-4">...</div>
  </div>
</div>
```

### Klasse-naming

```scss
.col-1 bis .col-12      // Mobiel (standaard)
.col-sm-1 bis .col-sm-12 // >= 576px
.col-md-1 bis .col-md-12 // >= 768px (tablet)
.col-lg-1 bis .col-lg-12 // >= 992px (laptop)
.col-xl-1 bis .col-xl-12 // >= 1200px (desktop)
```

### Gutter (ruimte tussen kolommen)

```scss
// Standaard: 30px
.row { --gutter: 30px; }

// Overschrijven per rij (inline)
<div class="row" style="--gutter: 40px">

// Geen gutter
<div class="row row--flush">
```

### Rij-utilities

```html
<!-- Center content -->
<div class="row row--center">

<!-- Space-between (ruimte tussen items) -->
<div class="row row--between">

<!-- Verticaal center -->
<div class="row row--middle">

<!-- Gap tussen gewrapte kolommen -->
<div class="row row--gap-y">
```

---

## 🎨 Design System

### Kleuren

```scss
--c-primary:  #0f5ffd  // Blauw (accenten, knoppen)
--c-dark:     #2b2b2b  // Donkergrijs (tekst, bg)
--c-heading:  #262626  // Koppelingetekst
--c-body:     #737373  // Bodytekst
--c-light:    #f5f6f8  // Lichte achtergronden
--c-white:    #ffffff  // Wit
--c-border:   #e6e6e6  // Borders
```

### Typografie

```scss
--font-body: 'Poppins', sans-serif
--fs-body:   16px
--fs-small:  14px
--fs-h1:     clamp(2rem, 6vw, 4rem)
--fs-h2:     clamp(1.75rem, 4.5vw, 3.25rem)
--fs-h3:     clamp(1.125rem, 2vw, 1.375rem)
```

### Spacing

```scss
--section-y: clamp(3.5rem, 8vw, 7rem)
--gutter:    30px
```

---

## 🔧 SCSS Structuur

### abstracts/
- **_tokens.scss** – Alle CSS custom properties, breakpoints, kleuren
- **_grid.scss** – 12-koloms grid mixin + klassen

### base/
- **_reset.scss** – Normalize, box-sizing
- **_typography.scss** – Headings, paragraphs, text utils

### layout/
- **_header.scss** – Topbar, nav, logo, sticky behavior
- **_hero.scss** – Hero banner, slider styles

### components/
- **_buttons.scss** – Alle button-varianten (.btn--primary, etc.)
- **_links.scss** – Tekstlinks, "Read More"-links
- **_section.scss** – Section-heads, .section--light, enz.
- **_cards.scss** – Offer-cards, service-cards

### main.scss
- Importeert alles in juiste volgorde
- Voegt utilities, footer, accessibility toe

---

## 📱 Responsive Breakpoints

| Breakpoint | Min-width | Device | Kolommen |
| --- | --- | --- | --- |
| `col-` | 0px | Mobiel | 1 |
| `col-sm-` | 576px | Grote telefoon | 1-2 |
| `col-md-` | 768px | Tablet | 2-3 |
| `col-lg-` | 992px | Laptop | 3-4 |
| `col-xl-` | 1200px | Desktop | 4+ |

---

## 🎬 Interactiviteit

### Hero Slider
- 3 voorgedefinieerde slides
- Auto-advance elke 5 seconden
- Pauze bij hover (desktop)
- Dot-indicators (klikbaar)
- Vorige/volgende knoppen (desktop, verborgen mobiel)

```javascript
// Slide data
const slides = [
  { image: '...', title: '...', subtitle: '...' },
  { image: '...', title: '...', subtitle: '...' },
  { image: '...', title: '...', subtitle: '...' }
];
```

### Hamburger Menu
- Toggle-knop mobiel/tablet
- Full navigation desktop
- Active link highlight bij scroll

### Smooth Scroll
```javascript
// Alle anchor-links (#home, #services, enz.)
// Scroll smooth naar target
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
  });
});
```

---

## 🌐 Accessibility

- ✅ Semantic HTML (`<header>`, `<main>`, `<footer>`, `<section>`)
- ✅ ARIA labels op interactieve elementen
- ✅ Focus-states zichtbaar (3px outline)
- ✅ Color contrast passend (4.5:1+)
- ✅ Touch targets >= 44×44px
- ✅ `prefers-reduced-motion` respected

---

## 📊 Performance

Lighthouse scores (streefwaarde: >85 per metric)

- **Performance:** [meten via lighthouse]
- **Accessibility:** [meten via lighthouse]
- **Best Practices:** [meten via lighthouse]

Build size: ~15KB CSS (geminificeerd)

---

## 📸 Screenshots & Wireframes

Zie `wireframes/` folder:
- `desktop.png` – Desktop layout (1200px+)
- `tablet.png` – Tablet layout (768px–1199px)
- `mobile.png` – Mobile layout (<768px)

---

## 🐛 Known Issues

- [ ] ~~iOS Safari sticky header flicker~~ *(gefixt via will-change)*
- [ ] ~~Slider dots niet toonbaar op ultra-breede screens~~ *(gefixt)*

---

## 🛣️ Roadmap

- [ ] Contact form met validatie
- [ ] Testimonials slider
- [ ] Dark mode toggle
- [ ] Multi-language support (i18n)
- [ ] Blog/news sectie
- [ ] Service detail pages

---

## 📚 Resources

- [Poppins Font](https://fonts.google.com/specimen/Poppins)
- [SCSS Documentation](https://sass-lang.com/documentation)
- [Vite Guide](https://vitejs.dev/)
- [MDN: CSS Grid vs Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)

---

## 📄 Licentie

Open source — vrij te gebruiken voor educatieve doeleinden.

---

## 🤝 Credits

- **Ontwerp** – Geïnspireerd door Alteco Business Template
- **Stock foto's** – Unsplash
- **Iconen** – Material Design Icons (SVG)
- **Build tool** – Vite
- **CSS Preprocessor** – SCSS/Sass

---

## 📞 Contact

**Student Name:** [Jouw naam]  
**Email:** [jouw email]  
**Repository:** [Link naar GitHub]  

---

**Gemaakt voor opdracht 1: Responsive Grid Systeem (MBO, Jaar 2, Periode 1)**
