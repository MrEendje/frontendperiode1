# Alteco Project — Setup & Development Notes

## 📁 Project Structuur

```
alteco/
├── index.html                    ← Main entry point
├── README.md                     ← Uitgebreide docs
├── CHECKLIST.md                  ← Inlevercriteria
├── package.json                  ← npm, Vite, Sass
├── vite.config.js                ← Build config
├── .gitignore
│
├── src/
│   ├── scss/
│   │   ├── abstracts/
│   │   │   ├── _tokens.scss      ← Design tokens
│   │   │   └── _grid.scss        ← 12-koloms grid
│   │   ├── base/
│   │   │   ├── _reset.scss
│   │   │   └── _typography.scss
│   │   ├── layout/
│   │   │   ├── _header.scss
│   │   │   └── _hero.scss
│   │   ├── components/
│   │   │   ├── _buttons.scss
│   │   │   ├── _cards.scss
│   │   │   ├── _links.scss
│   │   │   └── _section.scss
│   │   └── main.scss             ← Alle imports
│   │
│   └── js/
│       └── main.js               ← Slider, menu, scroll
│
├── dist/                         ← Build output
└── wireframes/                   ← Responsive wireframes
```

---

## 🚀 Quick Start

```bash
# Install
npm install

# Development server (http://localhost:5173)
npm run dev

# Production build
npm run build
```

---

## 🎨 Grid System

**12-koloms, SCSS-based, responsive:**

```html
<!-- Mobiel: vol breedte -->
<!-- Tablet: 50% -->
<!-- Desktop: 33.3% -->
<div class="col-12 col-md-6 col-lg-4">...</div>
```

**Breakpoints:**
- Mobiel: `col-` (0px+)
- Grote telefoon: `col-sm-` (576px+)
- Tablet: `col-md-` (768px+)
- Laptop: `col-lg-` (992px+)
- Desktop: `col-xl-` (1200px+)

**Rij-utilities:**
```html
<div class="row row--center">        <!-- Center -->
<div class="row row--between">       <!-- Space between -->
<div class="row row--middle">        <!-- Vertical center -->
<div class="row row--gap-y">         <!-- Gaps tussen wrapped items -->
```

---

## 🎯 Key Features

✅ Responsive: Mobile-first, 4 breakpoints  
✅ Grid: Eigen 12-koloms SCSS systeem  
✅ Components: Header, Hero slider, Offers, Services, Footer  
✅ Interactive: Slider, menu toggle, smooth scroll  
✅ Accessible: Semantic HTML, ARIA, focus-visible, contrast  
✅ Build: Vite + SCSS compiler  

---

## 💡 Design Decisions

**Why custom grid?**
- Full control & understanding
- Reusable via SCSS mixins
- No unnecessary overhead
- Perfect for learning

**Why Vite?**
- Fast dev server (HMR)
- Minimal config
- Built-in SCSS support
- ES modules

**Why Vanilla JS?**
- Lightweight
- No overkill
- Clear & maintainable
- Great browser support

---

## 📊 Responsive Layouts

### Mobile (<768px)
- Hamburger menu
- 1-column stacked
- Hero dots visible, arrows hidden

### Tablet (768–991px)
- Hamburger menu
- 2-column layouts
- Hero with all controls

### Desktop (992px+)
- Full navigation
- Multi-column grids (up to 4)
- Full slider functionality

---

## 🔑 CSS Tokens

```scss
// Colors
$color-primary: #0f5ffd      // Blue
$color-dark:    #2b2b2b      // Dark gray
$color-body:    #737373      // Body text
$color-light:   #f5f6f8      // Light backgrounds

// Typography
$font-base: 'Poppins', sans-serif
$fs-h1: clamp(2rem, 6vw, 4rem)
$fs-h2: clamp(1.75rem, 4.5vw, 3.25rem)

// Spacing
$section-y: clamp(3.5rem, 8vw, 7rem)
$gutter: 30px
```

---

## 📝 Inlevering Checklist

**Canvas submission:**
1. ✅ GitHub repository link
2. ✅ Wireframes (desktop, tablet, mobile)
3. ✅ CHECKLIST.docx (ingevuld)

**Voorbereiding:**
- [ ] README gelezen
- [ ] npm run dev getest
- [ ] Wireframes gemaakt
- [ ] CHECKLIST ingevuld

---

## 🛠️ Common Tasks

**Nieuwe knop maken:**
```html
<button class="btn btn--primary">Click me</button>
```

**Responsive kolom:**
```html
<div class="col-12 col-md-6 col-lg-4">
  <div class="card">...</div>
</div>
```

**Section met titel:**
```html
<section class="section section--light">
  <div class="container">
    <div class="section-head">
      <span class="section-head__label">Label</span>
      <h2 class="section-head__title">Title</h2>
      <p class="section-head__text">Intro</p>
    </div>
  </div>
</section>
```

---

## 📱 Testing Responsiveness

```bash
# Desktop
npm run dev  # Resize browser

# Mobile simulation
Chrome DevTools > Toggle Device Toolbar (F12)
- iPhone 12
- iPad
- Custom sizes
```

---

## 🔗 Resources

- [README.md](./README.md) — Volledige documentatie
- [CHECKLIST.md](./CHECKLIST.md) — Inlevercriteria
- [Poppins Font](https://fonts.google.com/specimen/Poppins)
- [Vite Docs](https://vitejs.dev/)
- [SCSS Guide](https://sass-lang.com/guide)

---

**Vragen? Lees README.md of CHECKLIST.md! 🚀**
