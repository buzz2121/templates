import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useReveal } from '../hooks/useAnimations';
import { collections } from '../data/content';

export default function CollectionDetail() {
  const { slug } = useParams();
  const revealRef = useReveal();
  const col = collections.find(c => c.slug === slug);

  if (!col) return <Navigate to="/collections" replace />;

  const otherCollections = collections.filter(c => c.slug !== slug);

  return (
    <>
      <Helmet>
        <title>{col.name} Collection — {col.tagline} | CARA</title>
        <meta name="description" content={`${col.longDescription.substring(0, 155)}...`} />
        <meta property="og:title" content={`${col.name} Collection — CARA`} />
        <meta property="og:description" content={col.description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={col.heroImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content={`${col.name}, ${col.materials.join(', ')}, luxury jewellery, CARA`} />
        <link rel="canonical" href={`https://cara-jewellery.com/collections/${col.slug}`} />
      </Helmet>

      {/* Collection Hero */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <img src={col.heroImage} alt={col.name} className="page-hero-bg-img" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <p className="section-eyebrow">THE COLLECTION</p>
          <h1 className="page-hero-title">{col.name}</h1>
          <p className="page-hero-sub">{col.tagline}</p>
        </div>
      </section>

      <div ref={revealRef}>
        {/* Collection Detail */}
        <section className="section collection-detail">
          <div className="section-container">
            <div className="detail-grid">
              <div className="detail-image reveal-section">
                <div className="detail-img-wrap">
                  <img src={col.image} alt={col.name} />
                </div>
              </div>
              <div className="detail-info reveal-section">
                <h2 className="section-title">{col.name}<br /><em>{col.tagline}</em></h2>
                <p className="brand-paragraph">{col.longDescription}</p>
                <div className="detail-meta-grid">
                  <div className="detail-meta-item">
                    <span className="detail-meta-label">Pieces</span>
                    <span className="detail-meta-value">{col.pieces}</span>
                  </div>
                  <div className="detail-meta-item">
                    <span className="detail-meta-label">Starting From</span>
                    <span className="detail-meta-value">{col.startPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials */}
        <section className="section collection-materials">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">CRAFTED WITH</p>
              <h2 className="section-title">Materials &<br /><em>Mastery</em></h2>
            </div>
            <div className="materials-grid reveal-section">
              {col.materials.map((m, i) => (
                <div className="material-chip glass-card" key={i}>{m}</div>
              ))}
            </div>
            <div className="features-list reveal-section">
              {col.features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <span className="feature-bullet">✦</span>
                  <p>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other Collections */}
        <section className="section">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">ALSO DISCOVER</p>
              <h2 className="section-title">Other<br /><em>Collections</em></h2>
            </div>
            <div className="collections-grid collections-grid-3 reveal-section">
              {otherCollections.map(c => (
                <Link to={`/collections/${c.slug}`} className="collection-card" key={c.slug}>
                  <div className="collection-img-wrap">
                    <img src={c.image} alt={c.name} />
                    <div className="collection-overlay">
                      <span className="collection-view">View Collection →</span>
                    </div>
                  </div>
                  <div className="collection-info">
                    <h3>{c.name}</h3>
                    <p>{c.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-banner">
          <div className="cta-banner-inner reveal-section">
            <h2 className="cta-banner-title">Experience {col.name}</h2>
            <p className="cta-banner-text">View the complete collection in our private salon. By appointment only.</p>
            <Link to="/contact" className="btn-primary">Book Private Viewing</Link>
          </div>
        </section>
      </div>
    </>
  );
}
