import { useEffect, useRef } from 'react';

export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );
    const targets = el.querySelectorAll('.reveal-section');
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

export function useParallax() {
  useEffect(() => {
    const handler = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      document.querySelectorAll('.floating-card').forEach((card, i) => {
        const speed = (i + 1) * 6;
        const rot = (i + 1) * 1.5;
        card.style.transform = `translate(${x * speed}px, ${y * speed}px) rotate(${x * rot}deg)`;
      });
      const bg = document.querySelector('.hero-bg-img');
      if (bg) bg.style.transform = `scale(1.08) translate(${x * -5}px, ${y * -5}px)`;
    };
    window.addEventListener('mousemove', handler, { passive: true });
    return () => window.removeEventListener('mousemove', handler);
  }, []);
}
