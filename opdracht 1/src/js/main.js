/**
 * main.js – interactieve onderdelen
 * - Hamburger-menu toggle
 * - Hero-slider
 * - Smooth scroll naar anchors
 */

// ============================================================================
// 1. HAMBURGER MENU
// ============================================================================
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav__link');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  nav.classList.toggle('active');
});

// Menu sluiten bij link-klik
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('active');
    nav.classList.remove('active');
  });
});

// ============================================================================
// 2. HERO SLIDER
// ============================================================================
class HeroSlider {
  constructor() {
    this.slides = [
      {
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
        title: 'Business <strong>YOUR SATISFACTION</strong>',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&h=900&fit=crop',
        title: 'Innovation <strong>DRIVES SUCCESS</strong>',
        subtitle: 'Discover our comprehensive business solutions.',
      },
      {
        image:
          'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=900&fit=crop',
        title: 'Growth <strong>YOUR VISION</strong>',
        subtitle: 'Building the future, one step at a time.',
      },
    ];

    this.currentSlide = 0;
    this.autoCycleInterval = null;

    this.init();
  }

  init() {
    const prevBtn = document.querySelector('.hero-slider__control--prev');
    const nextBtn = document.querySelector('.hero-slider__control--next');
    const dots = document.querySelectorAll('.hero-slider__dot');

    prevBtn?.addEventListener('click', () => this.prev());
    nextBtn?.addEventListener('click', () => this.next());

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => this.goToSlide(idx));
    });

    // Auto-advance om de 5 seconden
    this.startAutoCycle();

    // Pauze bij mouse-over
    const hero = document.querySelector('.hero');
    hero?.addEventListener('mouseenter', () => this.stopAutoCycle());
    hero?.addEventListener('mouseleave', () => this.startAutoCycle());
  }

  updateSlide() {
    const slide = this.slides[this.currentSlide];
    const bg = document.querySelector('.hero-bg');
    const title = document.querySelector('.hero__title');
    const subtitle = document.querySelector('.hero__subtitle');
    const dots = document.querySelectorAll('.hero-slider__dot');

    bg.src = slide.image;
    title.innerHTML = slide.title;
    subtitle.textContent = slide.subtitle;

    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === this.currentSlide);
    });
  }

  prev() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
    this.updateSlide();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.updateSlide();
  }

  goToSlide(idx) {
    this.currentSlide = idx;
    this.updateSlide();
  }

  startAutoCycle() {
    this.autoCycleInterval = setInterval(() => this.next(), 5000);
  }

  stopAutoCycle() {
    clearInterval(this.autoCycleInterval);
  }
}

// Initialiseer slider als er een hero-element is
if (document.querySelector('.hero')) {
  new HeroSlider();
}

// ============================================================================
// 3. SMOOTH SCROLL NAAR ANCHORS
// ============================================================================
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (href === '#') return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================================================
// 4. ACTIVE NAV-LINK HIGHLIGHT
// ============================================================================
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -50% 0px',
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      document.querySelectorAll('.nav__link').forEach((link) => {
        link.classList.remove('active');
      });
      const activeLink = document.querySelector(`.nav__link[href="#${id}"]`);
      activeLink?.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('[id]').forEach((el) => {
  observer.observe(el);
});

console.log('✓ Alteco script geladen');
