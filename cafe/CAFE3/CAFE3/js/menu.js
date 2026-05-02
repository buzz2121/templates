/* ═══════════════════════════════════════════════════════════
   AUREL — MENU PAGE JAVASCRIPT
   Handles: Category Switcher with GSAP Fade+Scale animation
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const tabs     = document.querySelectorAll('.menu-tab');
  const sections = document.querySelectorAll('.menu-section');
  const items    = document.querySelectorAll('.menu-item');

  if (!tabs.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const category = tab.dataset.category;

      // Update active tab
      tabs.forEach(t => t.classList.remove('active-tab'));
      tab.classList.add('active-tab');

      if (category === 'all') {
        // Show all sections
        sections.forEach(section => {
          section.classList.remove('hidden-section');
          gsap.fromTo(section,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }
          );
        });
      } else {
        // Show matching sections, hide others
        sections.forEach(section => {
          const sectionCat = section.dataset.section;

          if (sectionCat === category) {
            section.classList.remove('hidden-section');
            gsap.fromTo(section,
              { opacity: 0, y: 30, scale: 0.98 },
              { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out' }
            );
          } else {
            // Animate out then hide
            gsap.to(section, {
              opacity: 0,
              y: -10,
              scale: 0.98,
              duration: 0.3,
              ease: 'power2.in',
              onComplete: () => {
                section.classList.add('hidden-section');
                gsap.set(section, { opacity: 1, y: 0, scale: 1 });
              }
            });
          }
        });
      }
    });
  });

  /* ─── Animate menu rows in on load ─── */
  document.querySelectorAll('.menu-row').forEach((row, i) => {
    gsap.fromTo(row,
      { opacity: 0, x: -20 },
      {
        opacity: 1,
        x: 0,
        duration: 0.6,
        ease: 'power3.out',
        delay: i * 0.05,
        scrollTrigger: {
          trigger: row,
          start: 'top 92%',
          once: true,
        }
      }
    );
  });

})();
