import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useAnimations';
import { brandValues, milestones } from '../data/content';

export default function About() {
  const revealRef = useReveal();

  return (
    <>
      <Helmet>
        <title>About CARA — Our Heritage & Artistry | CARA Jewellery</title>
        <meta name="description" content="Since 1987, CARA has been the whispered name among connoisseurs of fine jewellery. Discover our heritage of masterful craftsmanship, ethical sourcing, and timeless design." />
        <meta property="og:title" content="About CARA — Our Heritage & Artistry" />
        <meta property="og:description" content="Since 1987, CARA has been the whispered name among connoisseurs of fine jewellery." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/brand-story.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="CARA history, luxury jewellery heritage, artisan craftsmanship, ethical jewellery, haute joaillerie" />
        <link rel="canonical" href="https://cara-jewellery.com/about" />
      </Helmet>

      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/brand-story.png" alt="CARA Atelier" className="page-hero-bg-img" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <p className="section-eyebrow">OUR LEGACY</p>
          <h1 className="page-hero-title">The Art of<br /><em>Defined Luxury</em></h1>
          <p className="page-hero-sub">Since 1987, transforming the world's rarest stones into wearable art.</p>
        </div>
      </section>

      <div ref={revealRef}>
        {/* Story Section */}
        <section className="section about-story">
          <div className="section-container">
            <div className="about-grid">
              <div className="about-image reveal-section">
                <div className="about-img-wrap">
                  <img src="/images/brand-story.png" alt="Master craftsman at work" />
                  <div className="brand-img-frame"></div>
                </div>
              </div>
              <div className="about-text reveal-section">
                <h2 className="section-title">Where Passion<br /><em>Becomes Permanence</em></h2>
                <p className="brand-paragraph">In the quiet workshops along Jaipur's old quarter, master jeweller Henri Cara first shaped gold under candlelight. His belief was simple: jewellery should not merely adorn — it should illuminate the soul of its wearer.</p>
                <p className="brand-paragraph">Today, three generations later, that philosophy endures. Every piece that leaves our atelier carries the weight of tradition and the spark of innovation. Our artisans — many of whom trained under Henri himself — work with techniques that cannot be rushed, replicated, or automated.</p>
                <p className="brand-paragraph">This is not manufacturing. This is alchemy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section about-values">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">OUR PRINCIPLES</p>
              <h2 className="section-title">Built on<br /><em>Conviction</em></h2>
            </div>
            <div className="values-grid">
              {brandValues.map((v, i) => (
                <div className="value-card glass-card reveal-section" key={i} style={{ transitionDelay: `${i * 0.15}s` }}>
                  <span className="value-card-icon">{v.icon}</span>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section about-timeline">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">OUR JOURNEY</p>
              <h2 className="section-title">Milestones of<br /><em>Mastery</em></h2>
            </div>
            <div className="timeline">
              {milestones.map((m, i) => (
                <div className="timeline-item reveal-section" key={i} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="timeline-marker">
                    <span className="timeline-year">{m.year}</span>
                    <div className="timeline-dot"></div>
                  </div>
                  <div className="timeline-content">
                    <h3>{m.title}</h3>
                    <p>{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="section about-stats">
          <div className="section-container">
            <div className="stats-grid reveal-section">
              <div className="stat-item">
                <span className="stat-number">37</span>
                <span className="stat-label">Years of Mastery</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4</span>
                <span className="stat-label">Global Ateliers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">120+</span>
                <span className="stat-label">Master Artisans</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15k+</span>
                <span className="stat-label">Pieces Created</span>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-banner">
          <div className="cta-banner-inner reveal-section">
            <h2 className="cta-banner-title">Experience the Atelier</h2>
            <p className="cta-banner-text">Visit our workshop and witness the creation of extraordinary jewellery firsthand.</p>
            <Link to="/contact" className="btn-primary">Schedule a Visit</Link>
          </div>
        </section>
      </div>
    </>
  );
}
