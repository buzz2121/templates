document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // Scroll Reveal with stagger
    // ==========================================
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                setTimeout(() => entry.target.classList.add('active'), i * 80);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(el => observer.observe(el));

    // ==========================================
    // Header shrink on scroll & Mobile Menu
    // ==========================================
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    window.addEventListener('scroll', () => {
        header.classList.toggle('scrolled', window.scrollY > 30);
    });

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });
    }

    // Close menu when link is clicked
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // ==========================================
    // Generate Golden Sparkle Particles in Hero
    // ==========================================
    const sparkleField = document.querySelector('.sparkle-field');
    if (sparkleField) {
        function createSparkle() {
            const s = document.createElement('div');
            s.classList.add('sparkle');
            s.style.left = Math.random() * 100 + '%';
            s.style.top = Math.random() * 100 + '%';
            s.style.animationDuration = (3 + Math.random() * 5) + 's';
            s.style.animationDelay = Math.random() * 4 + 's';
            s.style.width = (2 + Math.random() * 3) + 'px';
            s.style.height = s.style.width;
            sparkleField.appendChild(s);

            const rem = parseFloat(s.style.animationDuration) * 1000 + parseFloat(s.style.animationDelay) * 1000 + 1000;
            setTimeout(() => s.remove(), rem);
        }
        // Initial burst
        for (let i = 0; i < 40; i++) createSparkle();
        // Continuous stream
        setInterval(() => {
            if (sparkleField.children.length < 60) createSparkle();
        }, 400);
    }

    // ==========================================
    // Floating Zodiac Symbols in background
    // ==========================================
    const astroBg = document.querySelector('.astro-bg-layer');
    if (astroBg) {
        const symbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','☉','☽','✦','☿','♀','♂','♃','♄','⚝','🜚'];
        
        function createFloater() {
            const el = document.createElement('span');
            el.style.position = 'absolute';
            el.style.left = Math.random() * 100 + '%';
            el.style.bottom = '-50px';
            el.style.fontSize = (1.2 + Math.random() * 2) + 'rem';
            el.style.opacity = '0';
            el.style.color = '#B8860B';
            el.style.pointerEvents = 'none';
            el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            
            const duration = 18000 + Math.random() * 20000;
            astroBg.appendChild(el);

            el.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 0 },
                { opacity: 0.07, offset: 0.1 },
                { opacity: 0.07, offset: 0.85 },
                { transform: `translateY(-${window.innerHeight + 200}px) rotate(${180 + Math.random()*180}deg)`, opacity: 0 }
            ], { duration: duration, easing: 'linear' });

            setTimeout(() => el.remove(), duration);
        }

        for (let i = 0; i < 15; i++) setTimeout(() => createFloater(), i * 800);
        setInterval(() => {
            if (astroBg.children.length < 20) createFloater();
        }, 2500);
    }
});
