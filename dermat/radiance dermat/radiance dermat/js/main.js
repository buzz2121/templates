document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for Reveal Animations
    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, revealOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        revealObserver.observe(el);
    });

    // Sticky Navigation
    const nav = document.querySelector('nav');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                nav.classList.add('sticky');
            } else {
                nav.classList.remove('sticky');
            }
        });
    }

    // FAQ Accordion Interaction
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const isActive = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item').forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // Toggle current item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });

    // Smooth Scroll for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('open');
        });

        // Close menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }

    // Gallery Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Update Active State
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filterValue = btn.getAttribute('data-filter');
                
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    if (filterValue === 'all' || category === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.classList.remove('hidden');
                        }, 10);
                    } else {
                        item.classList.add('hidden');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 600);
                    }
                });
            });
        });
    }

    // Testimonials Drag-to-Scroll Interaction
    const track = document.querySelector('.testimonials-track');
    if (track) {
        let isDown = false;
        let startX;
        let scrollLeft;

        track.addEventListener('mousedown', (e) => {
            isDown = true;
            track.classList.add('grabbing');
            startX = e.pageX - track.offsetLeft;
            scrollLeft = track.scrollLeft;
        });

        track.addEventListener('mouseleave', () => {
            isDown = false;
            track.classList.remove('grabbing');
        });

        track.addEventListener('mouseup', () => {
            isDown = false;
            track.classList.remove('grabbing');
        });

        track.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed
            track.scrollLeft = scrollLeft - walk;
        });
    }

    // --- Before/After Comparison Slider Logic ---
    const baSliders = document.querySelectorAll('.ba-slider');
    baSliders.forEach(slider => {
        const range = slider.querySelector('.ba-range-input');
        const afterImg = slider.querySelector('.ba-slider-after');
        const handle = slider.querySelector('.ba-slider-handle');
        
        if (range && afterImg && handle) {
            range.addEventListener('input', (e) => {
                const value = e.target.value;
                afterImg.style.width = `${value}%`;
                handle.style.left = `${value}%`;
            });
        }
    });

    // --- Cinematic Video Modal Logic ---
    const videoModal = document.getElementById('videoModal');
    const closeModal = document.getElementById('closeModal');
    const testimonialVideo = document.getElementById('testimonialVideo');
    const videoTriggers = document.querySelectorAll('.video-testimonial-card');

    if (videoModal && closeModal && testimonialVideo) {
        videoTriggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                // High-fidelity Clinical Sanctuary Tour (YouTube ID: l61H0_o99Y0)
                // Using nocookie domain for better compatibility and restricted environments
                const videoId = 'l61H0_o99Y0'; 
                testimonialVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
                videoModal.classList.add('active');
            });
        });

        const closeFunc = () => {
            videoModal.classList.remove('active');
            testimonialVideo.src = ''; // Kill the stream on close
        };

        closeModal.addEventListener('click', closeFunc);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeFunc();
        });
    }
});
