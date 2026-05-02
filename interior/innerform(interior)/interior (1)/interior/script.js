/* ============================================
   INNERFORM — Multi-Page Interactions
   ============================================ */

(function () {
  'use strict';

  /* ───── DARK MODE TOGGLE ───── */
  function createThemeToggle() {
    const navbarContainer = document.querySelector('.navbar .container');
    if (!navbarContainer) return;

    const savedTheme = localStorage.getItem('innerform-theme');
    if (savedTheme === 'dark') document.documentElement.classList.add('dark-mode');

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.innerHTML = `
      <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
      <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
    `;

    // Modern grouping: Wrap CTA and Toggle in .navbar-actions
    let actionsWrap = navbarContainer.querySelector('.navbar-actions');
    const cta = navbarContainer.querySelector('.navbar-cta');

    if (!actionsWrap) {
      actionsWrap = document.createElement('div');
      actionsWrap.className = 'navbar-actions';
      if (cta) {
        cta.parentNode.insertBefore(actionsWrap, cta);
        actionsWrap.appendChild(btn);
        actionsWrap.appendChild(cta);
      } else {
        navbarContainer.appendChild(actionsWrap);
        actionsWrap.appendChild(btn);
      }
    } else {
      if (cta) actionsWrap.insertBefore(btn, cta);
      else actionsWrap.appendChild(btn);
    }

    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark-mode');
      const isDark = document.documentElement.classList.contains('dark-mode');
      localStorage.setItem('innerform-theme', isDark ? 'dark' : 'light');
    });
  }
  createThemeToggle();


  /* ───── PAGE TRANSITION ───── */
  const transitionOverlay = document.querySelector('.page-transition');

  function navigateWithTransition(href) {
    if (!transitionOverlay) { window.location.href = href; return; }
    
    // Add entering class to fade in the light overlay
    transitionOverlay.classList.remove('leaving');
    transitionOverlay.classList.add('entering');
    
    // Pre-fetch the page so it loads instantly
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    document.head.appendChild(link);
    
    // Slight delay before redirecting to allow fade to complete
    setTimeout(() => { window.location.href = href; }, 400);
  }

  // On page load: hide the overlay with a fade out
  window.addEventListener('pageshow', (e) => {
    if (transitionOverlay) {
      if (e.persisted) {
        // Handle Safari back button cache
        transitionOverlay.classList.remove('entering');
        transitionOverlay.classList.remove('leaving');
      } else {
        transitionOverlay.classList.add('leaving');
        setTimeout(() => { transitionOverlay.classList.remove('entering', 'leaving'); }, 600);
      }
    }
  });

  // Intercept internal links for page transition
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href');
    
    // Smooth scroll for anchors
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const navHeight = navbar ? navbar.offsetHeight : 80;
        window.scrollTo({
          top: target.offsetTop - navHeight,
          behavior: 'smooth'
        });
      }
      return;
    }

    // Only intercept local page links
    if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
      e.preventDefault();
      navigateWithTransition(href);
    }
  });

  /* ───── ACTIVE LINK HIGHLIGHT ───── */
  function highlightActiveLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-link, .navbar-mobile a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPath) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
  highlightActiveLink();


  /* ───── PRELOADER ───── */
  const preloader = document.getElementById('preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      setTimeout(() => preloader.classList.add('hidden'), 1200);
    });
    setTimeout(() => { if (preloader) preloader.classList.add('hidden'); }, 3000);
  }


  /* ───── NAVBAR ───── */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }


  /* ───── MOBILE MENU ───── */
  const navToggle = document.getElementById('navbar-toggle');
  const navMobile = document.getElementById('navbar-mobile');
  if (navToggle && navMobile) {
    navToggle.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMobile.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }


  /* ───── SMOOTH SCROLL (same-page anchors) ───── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id === '#' || id.length <= 1) return;
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const offset = navbar ? navbar.offsetHeight + 20 : 80;
        window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
      }
    });
  });


  /* ───── SCROLL REVEAL ───── */
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-children');
  if (revealEls.length) {
    const revealObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('revealed'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => revealObs.observe(el));
  }


  /* ───── STATS COUNTER ANIMATION ───── */
  const counterEls = document.querySelectorAll('[data-counter]');
  if (counterEls.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetNum = parseInt(el.getAttribute('data-counter'));
          const suffix = el.getAttribute('data-suffix') || '';
          let count = 0;
          const duration = 2000;
          const stepTime = 20;
          const increment = targetNum / (duration / stepTime);

          const timer = setInterval(() => {
            count += increment;
            if (count >= targetNum) {
              el.textContent = targetNum + suffix;
              clearInterval(timer);
            } else {
              el.textContent = Math.floor(count) + suffix;
            }
          }, stepTime);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counterEls.forEach(el => counterObs.observe(el));
  }


  /* ───── TESTIMONIALS SLIDER ───── */
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dots = document.querySelectorAll('.testimonial-dot');
  if (track && prevBtn && nextBtn) {
    let slide = 0, perView = 3, total = track.children.length, autoplay;

    function getPerView() {
      const w = window.innerWidth;
      return w <= 768 ? 1 : w <= 1024 ? 2 : 3;
    }
    function maxSlide() { return Math.max(0, total - perView); }
    function update() {
      const card = track.children[0];
      if (!card) return;
      track.style.transform = `translateX(-${slide * (card.offsetWidth + 24)}px)`;
      dots.forEach((d, i) => d.classList.toggle('active', i === slide));
    }
    function next() { perView = getPerView(); slide = slide >= maxSlide() ? 0 : slide + 1; update(); }
    function prev() { perView = getPerView(); slide = slide <= 0 ? maxSlide() : slide - 1; update(); }
    function resetAuto() { clearInterval(autoplay); autoplay = setInterval(next, 5000); }

    nextBtn.addEventListener('click', () => { next(); resetAuto(); });
    prevBtn.addEventListener('click', () => { prev(); resetAuto(); });
    dots.forEach(d => d.addEventListener('click', () => { slide = parseInt(d.dataset.index); update(); resetAuto(); }));

    perView = getPerView(); update(); autoplay = setInterval(next, 5000);
    window.addEventListener('resize', () => { perView = getPerView(); if (slide > maxSlide()) slide = maxSlide(); update(); });
  }


  /* ───── PORTFOLIO DYNAMIC RENDERING & FILTERS ───── */
  const portfolioGrid = document.getElementById('portfolio-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');

  function renderPortfolio(category = 'all') {
    if (!portfolioGrid || typeof projectsData === 'undefined') return;
    portfolioGrid.innerHTML = ''; // clear
    let filtered = projectsData;
    if (category !== 'all') {
      filtered = projectsData.filter(p => p.category === category);
    }
    
    filtered.forEach((p, index) => {
      const el = document.createElement('div');
      el.className = 'portfolio-item';
      el.setAttribute('data-category', p.category);
      el.style.animation = `fadeScaleIn 0.6s var(--ease-out) ${index * 0.1}s backwards`;
      
      const projectLink = p.link || `project-single.html?id=${p.id}`;
      el.innerHTML = `
        <a href="${projectLink}" class="portfolio-link-wrapper">
          <div class="portfolio-img-wrap">
            <img src="${p.images[0]}" alt="${p.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1579546678183-a9a1a494dea9?auto=format&fit=crop&q=80&w=800';">
            <div class="portfolio-hover">
              <span class="portfolio-hover-cat">${p.category}</span>
              <h3 class="portfolio-hover-title">${p.title}</h3>
              <div class="portfolio-btn-circle">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </div>
            </div>
          </div>
        </a>
      `;
      portfolioGrid.appendChild(el);
    });
  }

  // Initial Render
  if (portfolioGrid && typeof projectsData !== 'undefined') {
    renderPortfolio('all');
  }

  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.getAttribute('data-filter');
        renderPortfolio(cat);
      });
    });
  }


  /* ───── PREMIUM SERVICES CAROUSEL (DYNAMIC & AUTO-PLAY) ───── */
  const carouselNav = document.getElementById('carousel-nav');
  const carouselDisplay = document.getElementById('carousel-display');
  let carouselTimer;
  const AUTOPLAY_DELAY = 3500;
  let currentIndex = 0;

  function initServiceCarousel() {
    if (!carouselNav || !carouselDisplay || typeof servicesData === 'undefined') return;

    carouselNav.innerHTML = '';
    carouselDisplay.innerHTML = '';

    servicesData.forEach((s, index) => {
      // Create Nav Item
      const navItem = document.createElement('button');
      navItem.className = `carousel-nav-item ${index === 0 ? 'active' : ''}`;
      navItem.dataset.index = index;
      navItem.innerHTML = `
        <span class="c-nav-num">0${index + 1}</span>
        <span class="c-nav-title">${s.title}</span>
      `;
      carouselNav.appendChild(navItem);

      // Create Display Layer
      const layer = document.createElement('div');
      layer.className = `carousel-image-layer ${index === 0 ? 'active' : ''}`;
      layer.dataset.index = index;
      layer.innerHTML = `
        <img src="${s.images[0]}" alt="${s.title}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=1200';">
        <div class="carousel-content-overlay">
          <h2 class="c-overlay-title">${s.title}</h2>
          <p class="c-overlay-desc">${s.short_desc}</p>
          <a href="service-single.html?id=${s.id}" class="c-overlay-btn">
            <span>Discover More</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      `;
      carouselDisplay.appendChild(layer);

      navItem.addEventListener('click', () => {
        setCarouselIndex(index);
        resetAutoplay();
      });
    });

    startAutoplay();
    
    // Pause on hover
    const mainContainer = document.getElementById('services-carousel');
    if (mainContainer) {
      mainContainer.addEventListener('mouseenter', stopAutoplay);
      mainContainer.addEventListener('mouseleave', startAutoplay);
    }
  }

  function setCarouselIndex(index) {
    currentIndex = index;
    const navItems = document.querySelectorAll('.carousel-nav-item');
    const displayLayers = document.querySelectorAll('.carousel-image-layer');

    navItems.forEach((btn, i) => {
      const isActive = i === index;
      btn.classList.toggle('active', isActive);
      
      // Auto-scroll the active item into view on mobile/tablet
      if (isActive && window.innerWidth <= 1024 && carouselNav) {
        carouselNav.scrollTo({
          left: btn.offsetLeft - (carouselNav.offsetWidth / 2) + (btn.offsetWidth / 2),
          behavior: 'smooth'
        });
      }
    });
    displayLayers.forEach((layer, i) => layer.classList.toggle('active', i === index));
  }

  function startAutoplay() {
    if (carouselTimer) clearInterval(carouselTimer);
    carouselTimer = setInterval(() => {
      currentIndex = (currentIndex + 1) % servicesData.length;
      setCarouselIndex(currentIndex);
    }, AUTOPLAY_DELAY);
  }

  function stopAutoplay() {
    clearInterval(carouselTimer);
  }

  function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
  }

  initServiceCarousel();


  /* ───── PROJECT SINGLE CONTENT INJECTION ───── */
  const pMainContent = document.getElementById('project-main-content');
  if (pMainContent && typeof projectsData !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');

    // Check for trigger element on static pages
    const trigger = document.getElementById('project-trigger');
    if (trigger) id = trigger.dataset.projectId;

    const project = projectsData.find(p => p.id === id);

    if (project) {
      // Basic text fields
      document.getElementById('p-breadcrumb').textContent = project.title;
      document.getElementById('p-title').innerHTML = project.title.split(' ').map((word, i) => i === 1 ? `<em>${word}</em>` : word).join(' ');
      
      const catFriendly = project.category.charAt(0).toUpperCase() + project.category.slice(1);
      document.getElementById('p-cat').textContent = catFriendly;
      
      document.getElementById('p-desc').innerHTML = `<p>${project.description}</p>`;
      document.getElementById('p-client').textContent = project.client;
      document.getElementById('p-location').textContent = project.location;
      document.getElementById('p-year').textContent = project.year;
      document.getElementById('p-scope').textContent = project.scope;

      // Hero image
      const heroImg = document.getElementById('p-hero-img');
      if (heroImg) heroImg.src = project.images[0];


      // Sub-heading logic
      const altTitle = document.getElementById('p-alt-title');
      if (altTitle) {
        const keywords = {
          'living': 'Residential Artistry',
          'kitchen': 'Culinary Precision',
          'bedroom': 'Private Sanctuaries',
          'bathroom': 'Wellness Architecture',
          'office': 'Collaborative Flow'
        };
        altTitle.textContent = keywords[project.category] || 'Architectural Harmony';
      }

      // Thumbs
      const thumbsContainer = document.getElementById('p-thumbs');
      if (thumbsContainer) {
        thumbsContainer.innerHTML = '';
        project.images.forEach((img, index) => {
          const thumb = document.createElement('div');
          thumb.className = `project-gallery-thumb ${index === 0 ? 'active' : ''}`;
          thumb.innerHTML = `<img src="${img}" alt="${project.title} view ${index + 1}">`;
          thumbsContainer.appendChild(thumb);
        });
        
        initGallery();
      }

      // Main Gallery Image
      const mainImg = document.getElementById('p-main-img');
      if (mainImg) {
        mainImg.src = project.images[0];
      }

      // Next Project Logic
      const currentIndex = projectsData.findIndex(p => p.id === project.id);
      const nextProj = projectsData[(currentIndex + 1) % projectsData.length];
      
      const nextTitle = document.getElementById('p-next-title');
      const nextLink = document.getElementById('p-next-link');
      const nextBg = document.getElementById('p-next-bg');
      
      if (nextTitle) nextTitle.textContent = nextProj.title;
      if (nextBg) nextBg.src = nextProj.images[0];
      if (nextLink) {
        nextLink.href = nextProj.link || `project-single.html?id=${nextProj.id}`;
      }
      
      document.title = `${project.title} | INNERFORM`;
    } else {
      window.location.href = 'portfolio.html';
    }
  }

  /* ───── SERVICE SINGLE SEO & CONTENT INJECTION ───── */
  const sContainer = document.getElementById('service-container');
  if (sContainer && typeof servicesData !== 'undefined') {
    const params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    
    // Auto-detect if we're on a static file like interior-design.html
    if (!id) {
       const pathName = window.location.pathname;
       const fileName = pathName.substring(pathName.lastIndexOf('/') + 1);
       if (fileName.includes('-')) {
         id = fileName.replace('.html', '');
       }
    }

    const service = servicesData.find(s => s.id === id);

    if (service) {
      const cleanTitle = service.title.replace(/<[^>]*>/g, '');
      const fullTitle = `${cleanTitle} | INNERFORM Studio`;
      const siteUrl = window.location.origin + window.location.pathname + (id ? `?id=${id}` : '');
      const serviceImage = service.images[0];
      const seoDesc = service.short_desc || service.description.substring(0, 150) + '...';

      // 1. Dynamic SEO Tags
      document.title = fullTitle;
      
      const updateTag = (id, attr, val) => {
        const el = document.getElementById(id);
        if (el) el.setAttribute(attr, val);
      };

      const updateMeta = (prop, val) => {
        const el = document.querySelector(`meta[property="${prop}"]`) || document.querySelector(`meta[name="${prop}"]`);
        if (el) el.setAttribute('content', val);
      };

      updateTag('meta-title', 'content', fullTitle);
      updateTag('meta-desc', 'content', seoDesc);
      updateTag('canonical-url', 'href', siteUrl);
      
      updateMeta('og:title', fullTitle);
      updateMeta('og:description', seoDesc);
      updateMeta('og:image', serviceImage);
      updateMeta('og:url', siteUrl);
      
      updateMeta('twitter:title', fullTitle);
      updateMeta('twitter:description', seoDesc);
      updateMeta('twitter:image', serviceImage);

      // 2. Structured Data (JSON-LD)
      const jsonLdEl = document.getElementById('json-ld-service');
      if (jsonLdEl) {
        const schema = {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": cleanTitle,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "INNERFORM Studio",
            "image": serviceImage,
            "url": "https://innerform.studio"
          },
          "areaServed": ["New York", "International"],
          "image": serviceImage
        };
        jsonLdEl.textContent = JSON.stringify(schema);
      }

      // 3. UI Injections
      const breadcrumb = document.getElementById('s-breadcrumb');
      if (breadcrumb) breadcrumb.textContent = cleanTitle;
      
      const titleEl = document.getElementById('s-title');
      if (titleEl) titleEl.innerHTML = service.title;
      
      const descEl = document.getElementById('s-desc');
      if (descEl) descEl.innerHTML = `<p>${service.description}</p>`;

      const heroImg = document.getElementById('s-hero-img');
      if (heroImg) heroImg.src = serviceImage || '';
      
      const featureList = document.getElementById('s-features-list');
      if (featureList) {
        featureList.innerHTML = service.features.map(f => `<li>${f}</li>`).join('');
      }

      const gallery = document.getElementById('s-gallery');
      if (gallery) {
        gallery.innerHTML = service.images.slice(1).map((img, i) => `
          <div class="gallery-item-wrap" style="animation: fadeScaleIn 0.8s var(--ease-out) ${i * 0.15}s backwards;">
            <img src="${img}" alt="${cleanTitle} detail" loading="lazy">
          </div>
        `).join('');
      }

      // Next Service Logic
      const currentIndex = servicesData.findIndex(s => s.id === service.id);
      if (currentIndex !== -1) {
        const nextSvc = servicesData[(currentIndex + 1) % servicesData.length];
        
        const nextTitle = document.getElementById('s-next-title');
        const nextLink = document.getElementById('s-next-link');
        const nextBg = document.getElementById('s-next-bg');
        
        if (nextTitle) nextTitle.textContent = nextSvc.title.replace(/<[^>]*>/g, '');
        if (nextBg) nextBg.src = nextSvc.images[0];
        if (nextLink) {
          nextLink.href = `service-single.html?id=${nextSvc.id}`;
        }
      }
    }
  }


  function initGallery() {
    const galleryMain = document.getElementById('p-main-img') || document.querySelector('.project-gallery-main img');
    const galleryThumbs = document.querySelectorAll('.project-gallery-thumb');
    
    if (galleryMain && galleryThumbs.length) {
      galleryThumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
          galleryThumbs.forEach(t => t.classList.remove('active'));
          thumb.classList.add('active');
          const img = thumb.querySelector('img');
          if (img) {
            galleryMain.style.opacity = '0';
            setTimeout(() => {
              galleryMain.src = img.src;
              galleryMain.alt = img.alt;
              galleryMain.style.opacity = '1';
            }, 200);
          }
        });
      });
    }
  }

  // Initial call
  initGallery();


  /* ───── CONTACT FORM VALIDATION ───── */
  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      // Clear previous errors
      contactForm.querySelectorAll('.form-input').forEach(inp => inp.classList.remove('error'));

      // Validate required fields
      const name = document.getElementById('input-name');
      const email = document.getElementById('input-email');
      const message = document.getElementById('input-message');

      if (name && !name.value.trim()) { name.classList.add('error'); valid = false; }
      if (email) {
        const emailVal = email.value.trim();
        if (!emailVal || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) { email.classList.add('error'); valid = false; }
      }
      if (message && !message.value.trim()) { message.classList.add('error'); valid = false; }

      if (!valid) return;

      // Success
      contactForm.style.display = 'none';
      if (formSuccess) formSuccess.classList.add('show');
    });
  }


  /* ───── PARALLAX (hero & backgrounds) ───── */
  const parallaxEls = document.querySelectorAll('.hero-image-wrapper img, .bg-image');
  if (parallaxEls.length) {
    window.addEventListener('scroll', () => {
      // Only do parallax if elements are roughly in view
      const scrollY = window.scrollY;
      parallaxEls.forEach(el => {
        const bounds = el.getBoundingClientRect();
        if (bounds.top < window.innerHeight && bounds.bottom > 0) {
          el.style.transform = `translateY(${bounds.top * 0.15}px)`;
        }
      });
    }, { passive: true });
  }


  /* ───── LAZY IMAGE FADE ───── */
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.6s ease-out';
    if (img.complete) { img.style.opacity = '1'; }
    else { img.addEventListener('load', () => { img.style.opacity = '1'; }); }
  });

  /* ───── IMAGE FALLBACK HANDLER (GLOBAL) ───── */
  document.addEventListener('error', (e) => {
    if (e.target.tagName.toLowerCase() === 'img') {
      const fallback = 'https://images.unsplash.com/photo-1579546678183-a9a1a494dea9?auto=format&fit=crop&q=80&w=800';
      if (e.target.src !== fallback) {
        e.target.src = fallback;
      }
    }
  }, true);

})();
