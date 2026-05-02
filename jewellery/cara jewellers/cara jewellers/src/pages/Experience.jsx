import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useAnimations';
import { editorialItems } from '../data/content';

export default function Experience() {
  const revealRef = useReveal();

  return (
    <>
      <Helmet>
        <title>The CARA Experience — Editorial & Campaign | CARA Jewellery</title>
        <meta name="description" content="Immerse yourself in the CARA experience. Explore our editorial campaigns, cinematic storytelling, and the artistry behind the world's most coveted jewellery." />
        <meta property="og:title" content="The CARA Experience — Editorial Vision" />
        <meta property="og:description" content="Immerse yourself in cinematic storytelling and the artistry behind haute joaillerie." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/editorial-model.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="CARA experience, jewellery editorial, luxury campaign, fashion photography, haute joaillerie" />
        <link rel="canonical" href="https://cara-jewellery.com/experience" />
      </Helmet>

      <section className="page-hero">
        <div className="page-hero-bg">
          <img src="/images/editorial-model.png" alt="CARA Editorial" className="page-hero-bg-img" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <p className="section-eyebrow">THE EXPERIENCE</p>
          <h1 className="page-hero-title">An Editorial<br /><em>Vision</em></h1>
          <p className="page-hero-sub">Where jewellery meets cinematic artistry.</p>
        </div>
      </section>

      <div ref={revealRef}>
        {/* Editorial Gallery */}
        <section className="section editorial">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">AUTUMN / WINTER 2026</p>
              <h2 className="section-title">Campaign<br /><em>Gallery</em></h2>
              <p className="section-desc">Each image is a story. Each story, a facet of CARA's world — where light, form, and emotion converge.</p>
            </div>
            <div className="editorial-grid">
              {editorialItems.map((item) => (
                <div className={`editorial-item editorial-${item.size} reveal-section`} key={item.id}>
                  <img src={item.image} alt={item.caption} />
                  <div className="editorial-caption">
                    <span>{item.caption}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="section experience-bts">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">BEHIND THE LENS</p>
              <h2 className="section-title">The Making of<br /><em>A Campaign</em></h2>
            </div>
            <div className="bts-grid">
              <div className="bts-item bts-large reveal-section">
                <img src="/images/brand-story.png" alt="Behind the scenes" />
                <div className="bts-overlay">
                  <h3>The Atelier Sessions</h3>
                  <p>Weeks of preparation culminate in moments of pure creative expression. Our campaigns are shot on location across five continents.</p>
                </div>
              </div>
              <div className="bts-item reveal-section">
                <img src="/images/editorial-hands.png" alt="Detail work" />
                <div className="bts-overlay">
                  <h3>Detail & Devotion</h3>
                  <p>Every angle, every reflection — orchestrated to reveal the soul of each piece.</p>
                </div>
              </div>
              <div className="bts-item reveal-section">
                <img src="/images/collection-tiara.png" alt="Final reveal" />
                <div className="bts-overlay">
                  <h3>The Reveal</h3>
                  <p>When light meets stone and gold meets skin — that is the CARA moment.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="section experience-quote">
          <div className="section-container">
            <blockquote className="luxury-quote reveal-section">
              <p>"We don't create jewellery for the world to see. We create it for the wearer to feel."</p>
              <cite>— Henri Cara, Founder</cite>
            </blockquote>
          </div>
        </section>

        <section className="section cta-banner">
          <div className="cta-banner-inner reveal-section">
            <h2 className="cta-banner-title">Live the Experience</h2>
            <p className="cta-banner-text">Visit our flagship salon and discover CARA in person.</p>
            <Link to="/contact" className="btn-primary">Book Your Visit</Link>
          </div>
        </section>
      </div>
    </>
  );
}
