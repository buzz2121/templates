/* ═══════════════════════════════════════════════════════════
   AUREL — MAIN JAVASCRIPT
   Handles: Loader, Lenis, GSAP ScrollTrigger, Nav, Parallax, Reveals
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── 1. PAGE LOADER ─── */
  const loader      = document.getElementById('page-loader');
  const loaderLogo  = loader?.querySelector('.loader-logo');
  const loaderBar   = loader?.querySelector('.loader-bar');
  const loaderTag   = loader?.querySelector('.loader-tagline');

  if (loader) {
    // Lock scroll during load
    document.body.style.overflow = 'hidden';

    // Set initial states before animating
    gsap.set(loaderLogo, { opacity: 0, y: 10 });
    gsap.set(loaderBar,  { scaleX: 0 });
    gsap.set(loaderTag,  { opacity: 0, y: 6 });

    const loaderTl = gsap.timeline({
      delay: 0.1,
      onComplete: () => {
        loader.classList.add('loaded');
        document.body.style.overflow = '';
        // Small delay to let CSS transition finish
        setTimeout(initSite, 200);
      }
    });

    loaderTl
      .to(loaderLogo, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' })
      .to(loaderBar,  { scaleX: 1, duration: 1.2, ease: 'power3.inOut', transformOrigin: 'left' }, '-=0.2')
      .to(loaderTag,  { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.5')
      .to(loader,     { opacity: 0, duration: 0.6, ease: 'power2.inOut', delay: 0.4 });
  } else {
    initSite();
  }

  /* ─── 2. MAIN INIT ─── */
  function initSite() {
    initLenis();
    initHeaderScroll();
    initMobileNav();
    initHeroAnimations();
    initScrollReveal();
    initParallax();
  }

  /* ─── 3. LENIS SMOOTH SCROLL ─── */
  function initLenis() {
    if (typeof Lenis === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      smooth: true,
    });

    // GSAP RAF integration
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // ScrollTrigger integration
    lenis.on('scroll', ScrollTrigger.update);
  }

  /* ─── 4. HEADER SCROLL BEHAVIOUR ─── */
  function initHeaderScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;

    ScrollTrigger.create({
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (window.scrollY > 60) {
          header.classList.add('nav-scrolled');
        } else {
          header.classList.remove('nav-scrolled');
        }
      }
    });
  }

  /* ─── 5. MOBILE NAV ─── */
  function initMobileNav() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open');
      document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    });

    // Close nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        document.body.style.overflow = 'auto';
      });
    });
  }

  /* ─── 6. HERO ANIMATIONS (index.html only) ─── */
  function initHeroAnimations() {
    const heroLines = document.querySelectorAll('.hero-line');
    if (!heroLines.length) return;

    const tl = gsap.timeline({ delay: 0.2 });

    // Staggered text reveal
    tl.to(heroLines, {
      y: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger: 0.12,
    })
    .to('.hero-sup', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .to('.hero-desc', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
    .to('.hero-cta',  { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
    .to('#scroll-indicator', { opacity: 1, duration: 0.6 }, '-=0.2');
  }

  /* ─── 7. SCROLL REVEAL WITH GSAP ScrollTrigger ─── */
  function initScrollReveal() {
    // Register plugin
    gsap.registerPlugin(ScrollTrigger);

    // Select all reveal items that haven't been set up yet
    const items = document.querySelectorAll('.reveal-item');

    items.forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            once: true,
          },
          delay: (i % 3) * 0.1, // stagger items in same row
        }
      );
    });
  }

  /* ─── 8. PARALLAX EFFECTS ─── */
  function initParallax() {
    // Hero main image
    const heroImg = document.getElementById('hero-img');
    if (heroImg) {
      gsap.to(heroImg, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
    }

    // Generic parallax images (e.g., page hero backgrounds)
    document.querySelectorAll('.parallax-img:not(#hero-img)').forEach(img => {
      gsap.to(img, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('section') || img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

    // Full-section parallax backgrounds (quote sections etc.)
    document.querySelectorAll('.parallax-img-section').forEach(img => {
      gsap.to(img, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: img.closest('section') || img.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });
  }

})();
