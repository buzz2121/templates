/**
 * AURELIAN — Shared Scroll Animations
 * Auto-animates elements on all pages via IntersectionObserver
 */
(function () {
    'use strict';

    /* ─────────────────────────────────────────
       1. NAVBAR — scroll state
    ───────────────────────────────────────── */
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 55);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll(); // run once on load
    }

    /* ─────────────────────────────────────────
       2. HERO PARALLAX
    ───────────────────────────────────────── */
    const heroBg = document.querySelector('.page-hero, .hero-bg');
    if (heroBg) {
        window.addEventListener('scroll', () => {
            heroBg.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.28}px)`;
        }, { passive: true });
    }

    /* ─────────────────────────────────────────
       3. AUTO SCROLL REVEAL
       Automatically finds elements and applies
       reveal animations based on their type
    ───────────────────────────────────────── */

    // Elements that already have .reveal — just observe them
    const manualReveals = document.querySelectorAll('.reveal');

    // Auto-select elements to animate (anything NOT already in .reveal)
    const autoSelectors = [
        'section h2',
        'section h3',
        'section > div > p',
        'section .card-lift',
        'section .img-zoom',
        'section .icon-ring',
        'section .testi-card',
        'footer'
    ].join(', ');

    const autoElements = document.querySelectorAll(autoSelectors);

    // Assign reveal + stagger to grid children
    function assignStagger(el, index) {
        const delays = ['reveal-d1', 'reveal-d2', 'reveal-d3', 'reveal-d4', 'reveal-d5'];
        if (index < delays.length) el.classList.add(delays[index]);
    }

    // Tag each auto element
    autoElements.forEach((el, i) => {
        if (el.closest('.reveal')) return; // skip if already inside a .reveal parent
        if (el.classList.contains('reveal')) return;

        el.classList.add('reveal');

        // Assign direction based on element type
        if (el.tagName === 'H2' || el.tagName === 'H3') {
            // headings: fade up (default)
        } else if (el.classList.contains('img-zoom')) {
            el.classList.add('scale');
        } else if (el.classList.contains('card-lift') || el.classList.contains('testi-card')) {
            // Check position in parent grid for stagger
            const siblings = el.parentElement ? [...el.parentElement.children].filter(c => c.classList.contains('card-lift') || c.classList.contains('testi-card')) : [];
            assignStagger(el, siblings.indexOf(el));
        } else if (el.classList.contains('icon-ring')) {
            const siblings = el.parentElement ? [...el.parentElement.children] : [];
            assignStagger(el, siblings.indexOf(el));
        }
    });

    // Combined observer for all reveal elements
    const allReveals = document.querySelectorAll('.reveal');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate child gold bars
                entry.target.querySelectorAll('.gold-bar').forEach(b => b.classList.add('visible'));
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    allReveals.forEach(el => revealObs.observe(el));

    /* ─────────────────────────────────────────
       4. STAGGER for grid cards automatically
    ───────────────────────────────────────── */
    document.querySelectorAll('.grid').forEach(grid => {
        const cards = [...grid.children].filter(c =>
            c.classList.contains('card-lift') ||
            c.classList.contains('reveal') ||
            c.classList.contains('testi-card')
        );
        cards.forEach((card, i) => {
            const delays = [0, 0.1, 0.2, 0.3, 0.4, 0.5];
            if (!card.style.transitionDelay) {
                card.style.transitionDelay = (delays[i] || 0) + 's';
            }
        });
    });

    /* ─────────────────────────────────────────
       5. ANIMATED COUNTERS
    ───────────────────────────────────────── */
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            const text = el.textContent.trim();
            const num = parseFloat(text.replace(/[^0-9.]/g, ''));
            const suffix = text.replace(/[0-9.]/g, '');
            if (isNaN(num)) return;

            const duration = 1800;
            const start = performance.now();
            const isDecimal = text.includes('.');

            const tick = (now) => {
                const progress = Math.min((now - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                const current = isDecimal
                    ? (num * ease).toFixed(1)
                    : Math.floor(num * ease);
                el.textContent = current + suffix;
                if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            counterObs.unobserve(el);
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('[data-count], .text-5xl.font-heading, .text-4xl.text-gold').forEach(el => {
        if (/^[\d.,]+[+K%x]*$/.test(el.textContent.trim())) {
            counterObs.observe(el);
        }
    });

    /* ─────────────────────────────────────────
       6. SMOOTH IMAGE LOAD FADE-IN
    ───────────────────────────────────────── */
    document.querySelectorAll('img').forEach(img => {
        img.style.transition = 'opacity 0.5s ease';
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', () => { img.style.opacity = '1'; });
        }
    });

    /* ─────────────────────────────────────────
       7. BUTTON RIPPLE EFFECT
    ───────────────────────────────────────── */
    document.querySelectorAll('.btn-gold, a.rounded-full').forEach(btn => {
        btn.style.position = 'relative';
        btn.style.overflow = 'hidden';
        btn.addEventListener('click', function (e) {
            const rect = this.getBoundingClientRect();
            const ripple = document.createElement('span');
            const size = Math.max(rect.width, rect.height);
            ripple.style.cssText = `
                position:absolute; border-radius:50%;
                width:${size}px; height:${size}px;
                left:${e.clientX - rect.left - size / 2}px;
                top:${e.clientY - rect.top - size / 2}px;
                background:rgba(255,255,255,0.25);
                transform:scale(0); pointer-events:none;
                animation:ripple 0.6s ease-out forwards;
            `;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 700);
        });
    });

    /* ─────────────────────────────────────────
       8. SECTION ENTRANCE via CSS class toggle
    ───────────────────────────────────────── */
    document.querySelectorAll('section').forEach((sec, i) => {
        sec.style.transitionDelay = '0s'; // ensure no inherited delay on sections
    });

    /* ─────────────────────────────────────────
       9. MOBILE MENU TOGGLE
    ───────────────────────────────────────── */
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    /* ─────────────────────────────────────────
       10. ACTIVE NAV LINK detection
    ───────────────────────────────────────── */
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#navbar a[href]').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('nav-active');
            link.classList.remove('nav-link');
        }
    });

})();
