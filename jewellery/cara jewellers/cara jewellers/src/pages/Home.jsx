import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useReveal, useParallax } from '../hooks/useAnimations';
import { collections, testimonials, newArrivals, editorialItems } from '../data/content';

export default function Home() {
  const revealRef = useReveal();
  useParallax();
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>CARA — Crafted Light. Defined Luxury.</title>
        <meta name="description" content="CARA is a luxury jewellery house crafting timeless pieces with exceptional diamonds, rare gemstones, and masterful gold artistry. Experience defined luxury." />
        <meta property="og:title" content="CARA — Crafted Light. Defined Luxury." />
        <meta property="og:description" content="Where timeless artistry meets the brilliance of rare stones. Each piece — a legacy illuminated." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero-bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CARA — Crafted Light. Defined Luxury." />
        <meta name="keywords" content="luxury jewellery, haute joaillerie, diamond rings, gold necklaces, fine jewellery, CARA" />
        <link rel="canonical" href="https://cara-jewellery.com/" />
      </Helmet>

      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg">
          <img src="/images/hero-bg.png" alt="Cinematic luxury jewellery" className="hero-bg-img" />
          <div className="hero-bg-overlay"></div>
          <div className="hero-texture-overlay"></div>
        </div>

        <div className="hero-card hero-card-1 floating-card" id="hero-card-1">
          <img src="/images/card-ring.png" alt="Diamond Ring" />
          <div className="card-shine"></div>
        </div>
        <div className="hero-card hero-card-2 floating-card" id="hero-card-2">
          <img src="/images/card-necklace.png" alt="Gold Necklace" />
          <div className="card-shine"></div>
        </div>
        <div className="hero-card hero-card-3 floating-card" id="hero-card-3">
          <img src="/images/card-earring.png" alt="Diamond Earrings" />
          <div className="card-shine"></div>
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow reveal-text">EST. 1987 — HAUTE JOAILLERIE</p>
          <h1 className="hero-headline reveal-text">
            <span className="headline-line">Crafted</span>
            <span className="headline-line headline-italic">Light</span>
          </h1>
          <p className="hero-sub reveal-text">Where timeless artistry meets the brilliance of rare stones.<br />Each piece — a legacy illuminated.</p>
          <div className="hero-actions reveal-text">
            <Link to="/collections" className="btn-primary" id="hero-cta-explore">Explore Collection</Link>
            <Link to="/about" className="btn-ghost" id="hero-cta-story">Our Story</Link>
          </div>
        </div>

        <div className="trust-card glass-card" id="trust-card">
          <div className="trust-rating">
            <span className="trust-score">4.9</span>
            <div className="trust-stars">★★★★★</div>
          </div>
          <div className="trust-info">
            <div className="trust-avatars">
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #d4a574, #8b6914)' }}>E</div>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #c9a96e, #7a5c1e)' }}>M</div>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #e8c88a, #9b7b2c)' }}>A</div>
              <div className="avatar" style={{ background: 'linear-gradient(135deg, #b8944a, #6b4e0a)' }}>S</div>
            </div>
            <span className="trust-count">15k+ Reviews</span>
          </div>
        </div>

        <div className="hero-socials">
          <a href="#" className="social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="#" className="social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
          </a>
          <a href="#" className="social-icon" aria-label="Pinterest">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M8 21c1-3 2-6 3-8 0 0-.5-1-.5-2.5C10.5 8.5 11.5 7 13 7c1 0 1.5.8 1.5 1.7 0 1.2-.8 3-1.2 4.5-.3 1.3.7 2.3 2 2.3 2.4 0 4-3 4-6.5 0-2.7-2-4.7-5.3-4.7-3.8 0-6.2 2.8-6.2 6 0 1 .3 1.8.8 2.4.1.1.1.3.1.4l-.3 1.2c0 .2-.2.3-.4.2-1.7-.7-2.5-2.6-2.5-4.7 0-3.5 3-7.7 9-7.7 4.8 0 8 3.4 8 7.2 0 4.9-2.7 8.5-6.7 8.5-1.3 0-2.6-.7-3-1.5l-.8 3.2c-.3 1-.8 2-1.3 2.8" /></svg>
          </a>
        </div>

        <div className="scroll-indicator" id="scroll-indicator">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      <div ref={revealRef}>
      {/* ===== BRAND STORY ===== */}
      <section className="section brand-story-section" id="brand-story">
        <div className="section-container">
          <div className="brand-story-grid reveal-section">
            <div className="brand-story-img-wrap">
              <img src="/images/brand-story.png" alt="CARA Atelier Craftsmanship" />
              <div className="brand-img-frame"></div>
            </div>
            <div className="brand-story-content">
              <p className="section-eyebrow">OUR HERITAGE</p>
              <h2 className="section-title" style={{ textAlign: 'left' }}>A Legacy of<br /><em>Brilliance</em></h2>
              <p className="brand-paragraph">Since 1987, CARA has been the guardian of an ancient art — transforming the earth's rarest treasures into objects of enduring beauty. From our atelier in Jaipur, every piece begins as a sketch and emerges as a masterpiece, shaped by hands that have perfected their craft over decades.</p>
              <p className="brand-paragraph">We don't follow trends. We create legacies. Each CARA jewel carries the weight of tradition and the spark of innovation — a duality that defines true luxury.</p>
              <div className="brand-story-features">
                <div className="brand-feature">
                  <span className="brand-feature-icon">◈</span>
                  <div>
                    <strong>Ethically Sourced</strong>
                    <span>Every gemstone traced from mine to masterpiece</span>
                  </div>
                </div>
                <div className="brand-feature">
                  <span className="brand-feature-icon">✦</span>
                  <div>
                    <strong>Hand-Finished</strong>
                    <span>200+ hours of artisan work per piece</span>
                  </div>
                </div>
                <div className="brand-feature">
                  <span className="brand-feature-icon">◇</span>
                  <div>
                    <strong>Lifetime Guarantee</strong>
                    <span>A legacy that endures beyond generations</span>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn-ghost" style={{ marginTop: '24px' }}>Discover Our Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== NEW ARRIVALS ===== */}
      <section className="section new-arrivals">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">JUST ARRIVED</p>
            <h2 className="section-title">New<br /><em>Arrivals</em></h2>
            <p className="section-desc">The latest masterpieces from our atelier, each a testament to innovation and timeless craft.</p>
          </div>
          <div className="arrivals-scroll">
            <div className="arrivals-track">
              {newArrivals.map((product, i) => (
                <Link
                  to={`/product/${product.id}`}
                  className="arrival-card reveal-section"
                  key={product.id}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className="arrival-img-wrap">
                    <img src={product.image} alt={product.name} />
                    <div className="arrival-badge">New</div>
                    <div className="arrival-overlay">
                      <span className="arrival-view">View →</span>
                    </div>
                  </div>
                  <div className="arrival-info">
                    <span className="arrival-material">{product.material}</span>
                    <h3 className="arrival-name">{product.name}</h3>
                    <span className="arrival-price">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section stats-section" id="stats">
        <div className="section-container">
          <div className="stats-grid reveal-section">
            <div className="stat-item">
              <span className="stat-number">38+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Hours Per Piece</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Global Ateliers</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED COLLECTIONS ===== */}
      <section className="section collections">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">THE COLLECTIONS</p>
            <h2 className="section-title">Timeless<br /><em>Masterpieces</em></h2>
            <p className="section-desc">Each collection tells a story of heritage, precision, and the relentless pursuit of perfection.</p>
          </div>
          <div className="collections-grid">
            {collections.map((col, i) => (
              <Link to={`/collections/${col.slug}`} className={`collection-card reveal-section ${i === 1 ? 'collection-card-tall' : ''}`} key={col.slug} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="collection-img-wrap">
                  <img src={col.image} alt={col.name} />
                  <div className="collection-overlay">
                    <span className="collection-view">View Collection →</span>
                  </div>
                </div>
                <div className="collection-info">
                  <h3>{col.name}</h3>
                  <p>{col.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EDITORIAL ===== */}
      <section className="section editorial-section" id="editorial">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">THE EDITORIAL</p>
            <h2 className="section-title">Captured in<br /><em>Light</em></h2>
            <p className="section-desc">A cinematic look at our latest campaign — where jewellery meets art.</p>
          </div>
          <div className="editorial-grid reveal-section">
            {editorialItems.map((item) => (
              <div className={`editorial-item editorial-${item.size}`} key={item.id}>
                <img src={item.image} alt={item.caption} />
                <div className="editorial-caption">
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRAFTSMANSHIP PROCESS ===== */}
      <section className="section craft-section" id="craftsmanship">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">THE PROCESS</p>
            <h2 className="section-title">From Vision to<br /><em>Masterpiece</em></h2>
            <p className="section-desc">Every CARA creation passes through four pillars of excellence before it reaches you.</p>
          </div>
          <div className="craft-steps">
            {[
              { num: '01', icon: '◈', title: 'Sourcing', desc: 'Our gemologists travel to ethical mines across 12 countries, hand-selecting only the finest stones — each with a unique story of the earth.' },
              { num: '02', icon: '✧', title: 'Design', desc: 'Master designers sketch by hand, translating emotion into geometry. Each design is refined through 50+ iterations before approval.' },
              { num: '03', icon: '✦', title: 'Crafting', desc: 'In our Jaipur atelier, artisans with 20+ years of experience shape precious metals and set stones with sub-millimetre precision.' },
              { num: '04', icon: '◇', title: 'Perfection', desc: 'Every piece undergoes 72-point quality inspection, ensuring it meets our uncompromising standards before receiving the CARA hallmark.' },
            ].map((step, i) => (
              <div className="craft-step reveal-section" key={step.num} style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="craft-step-number">{step.num}</div>
                <div className="craft-step-line"></div>
                <div className="craft-step-content">
                  <div className="craft-step-icon">{step.icon}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">CLIENT STORIES</p>
            <h2 className="section-title">Words of<br /><em>Devotion</em></h2>
          </div>
          <div className="testimonial-carousel reveal-section">
            <div className="testimonial-slide-wrap">
              {testimonials.map((t, i) => (
                <div
                  className={`testimonial-slide ${i === activeTestimonial ? 'active' : ''}`}
                  key={i}
                >
                  <div className="testimonial-stars">{'★'.repeat(t.rating)}</div>
                  <blockquote className="testimonial-quote">"{t.quote}"</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" style={{ background: `linear-gradient(135deg, hsl(${38 + i * 12}, 50%, ${45 + i * 5}%), hsl(${42 + i * 8}, 60%, 30%))` }}>
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <strong className="testimonial-name">{t.author}</strong>
                      <span className="testimonial-title">{t.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`testimonial-dot ${i === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM / SOCIAL ===== */}
      <section className="section insta-section" id="instagram">
        <div className="section-container">
          <div className="section-header reveal-section">
            <p className="section-eyebrow">FOLLOW THE JOURNEY</p>
            <h2 className="section-title">@CARA<br /><em>Official</em></h2>
            <p className="section-desc">Step inside our world of brilliance. Tag #CARACrafted to be featured.</p>
          </div>
          <div className="insta-grid reveal-section">
            {[
              '/images/card-ring.png',
              '/images/editorial-model.png',
              '/images/card-necklace.png',
              '/images/editorial-hands.png',
              '/images/card-earring.png',
              '/images/collection-bracelet.png',
            ].map((src, i) => (
              <a href="#" className="insta-item" key={i}>
                <img src={src} alt="CARA Instagram" />
                <div className="insta-overlay">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="section cta-banner">
        <div className="cta-banner-inner reveal-section">
          <h2 className="cta-banner-title">Begin Your Legacy</h2>
          <p className="cta-banner-text">Schedule a private consultation with our gemologists in Mumbai, Delhi, or Jaipur.</p>
          <Link to="/contact" className="btn-primary">Book Appointment</Link>
        </div>
      </section>
      </div>
    </>
  );
}
