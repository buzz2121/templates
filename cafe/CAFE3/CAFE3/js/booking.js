/* ═══════════════════════════════════════════════════════════
   AUREL — BOOKING PAGE JAVASCRIPT
   Handles: Form animation, validation, success state
   ═══════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const form    = document.getElementById('booking-form');
  const success = document.getElementById('booking-success');

  if (!form) return;

  /* ─── Form submit ─── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Basic validation
    const inputs = form.querySelectorAll('[required]');
    let valid = true;

    inputs.forEach(input => {
      if (!input.value.trim()) {
        valid = false;
        input.classList.add('border-red-500');
        gsap.to(input, { x: [-6, 6, -4, 4, 0], duration: 0.4, ease: 'power2.inOut' });
      } else {
        input.classList.remove('border-red-500');
      }
    });

    if (!valid) return;

    // Animate out form, show success
    const submitBtn = document.getElementById('submit-booking');

    // Spin the arrow
    gsap.to('.submit-arrow', { rotate: 360, duration: 0.5, ease: 'power2.inOut' });

    gsap.to(submitBtn, {
      scale: 0.97,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      onComplete: () => {
        gsap.to(form, {
          opacity: 0,
          y: -20,
          duration: 0.5,
          ease: 'power3.in',
          onComplete: () => {
            form.classList.add('hidden');
            success.classList.remove('hidden');
            gsap.fromTo(success,
              { opacity: 0, y: 30 },
              { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
            );
          }
        });
      }
    });
  });

  /* ─── Real-time select colour update ─── */
  document.querySelectorAll('.float-select').forEach(sel => {
    sel.addEventListener('change', () => {
      if (sel.value) {
        sel.style.color = '#1a1a1a';
      }
    });
  });

  /* ─── Gold border on focus ─── */
  document.querySelectorAll('.float-input, .float-textarea, .float-select').forEach(el => {
    el.addEventListener('focus', () => {
      gsap.to(el, { borderBottomColor: '#c19d68', duration: 0.3 });
    });
    el.addEventListener('blur', () => {
      gsap.to(el, { borderBottomColor: 'rgba(26,26,26,0.25)', duration: 0.3 });
    });
  });

})();
