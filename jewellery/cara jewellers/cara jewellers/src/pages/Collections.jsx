import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useAnimations';
import { categories, products, collections } from '../data/content';

export default function Collections() {
  const revealRef = useReveal();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'all') return products;
    return products.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  // Re-trigger reveal animations when category changes
  React.useEffect(() => {
    const timer = setTimeout(() => {
      const grid = document.getElementById('product-grid');
      if (!grid) return;
      grid.querySelectorAll('.reveal-section').forEach(el => {
        el.classList.add('visible');
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const activeLabel = categories.find(c => c.id === activeCategory)?.label || 'All';
  const productCount = filteredProducts.length;

  return (
    <>
      <Helmet>
        <title>Collections — Rings, Necklaces, Earrings & More | CARA</title>
        <meta name="description" content="Explore CARA's luxury jewellery collections: diamond rings, necklaces, earrings, bracelets, watches and brooches. Each piece a masterwork of haute joaillerie." />
        <meta property="og:title" content="CARA Collections — Haute Joaillerie" />
        <meta property="og:description" content="Explore our signature collections — each a masterwork of light, gold, and rare stones." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/card-ring.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="luxury jewellery collections, diamond rings, gold necklaces, earrings, bracelets, watches, haute joaillerie" />
        <link rel="canonical" href="https://cara-jewellery.com/collections" />
      </Helmet>

      {/* HERO */}
      <section className="page-hero page-hero-short">
        <div className="page-hero-bg">
          <img src="/images/hero-bg.png" alt="CARA Collections" className="page-hero-bg-img" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <p className="section-eyebrow">HAUTE JOAILLERIE</p>
          <h1 className="page-hero-title">Our<br /><em>Collections</em></h1>
          <p className="page-hero-sub">Exquisite pieces across every category. Each defined by a singular obsession with perfection.</p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="cat-filter-section">
        <div className="section-container">
          <div className="cat-filter-bar" id="category-filter">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`cat-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.id)}
                id={`filter-${cat.id}`}
              >
                <span className="cat-filter-icon">{cat.icon}</span>
                <span className="cat-filter-label">{cat.label}</span>
              </button>
            ))}
          </div>
          <div className="cat-filter-info">
            <span className="cat-filter-count">{productCount} {productCount === 1 ? 'piece' : 'pieces'}</span>
            <span className="cat-filter-active">{activeLabel}</span>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <div ref={revealRef}>
        <section className="section collections-page">
          <div className="section-container">
            <div className="product-grid" id="product-grid">
              {filteredProducts.map((product, i) => (
                <Link
                  to={`/product/${product.id}`}
                  className="product-card reveal-section"
                  key={product.id}
                  style={{ transitionDelay: `${i * 0.06}s` }}
                >
                  <div className="product-img-wrap">
                    <img src={product.image} alt={product.name} />
                    <div className="product-overlay">
                      <span className="product-view-btn">View Details</span>
                    </div>
                    {product.isNew && <span className="product-badge badge-new">New</span>}
                    {product.isBestseller && <span className="product-badge badge-best">Bestseller</span>}
                  </div>
                  <div className="product-info">
                    <span className="product-material">{product.material}</span>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-stone">{product.stone}</p>
                    <span className="product-price">{product.price}</span>
                  </div>
                </Link>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="product-empty">
                <span className="product-empty-icon">◇</span>
                <p>No pieces found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* SIGNATURE COLLECTIONS */}
        <section className="section collections-signature">
          <div className="section-container">
            <div className="section-header reveal-section">
              <p className="section-eyebrow">SIGNATURE COLLECTIONS</p>
              <h2 className="section-title">Explore By<br /><em>Collection</em></h2>
              <p className="section-desc">Four distinct worlds of brilliance, each with a unique creative vision.</p>
            </div>
            <div className="signature-grid">
              {collections.map((col, i) => (
                <Link
                  to={`/collections/${col.slug}`}
                  className="signature-card reveal-section"
                  key={col.slug}
                  style={{ transitionDelay: `${i * 0.12}s` }}
                >
                  <div className="signature-img-wrap">
                    <img src={col.image} alt={col.name} />
                    <div className="signature-overlay">
                      <div className="signature-overlay-content">
                        <span className="signature-number">0{i + 1}</span>
                        <h3 className="signature-name">{col.name}</h3>
                        <p className="signature-tagline">{col.tagline}</p>
                        <span className="signature-cta">Explore →</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-banner">
          <div className="cta-banner-inner reveal-section">
            <h2 className="cta-banner-title">Cannot Find Your Piece?</h2>
            <p className="cta-banner-text">Our artisans craft bespoke pieces tailored to your vision. Schedule a private consultation.</p>
            <Link to="/contact" className="btn-primary">Book Consultation</Link>
          </div>
        </section>
      </div>
    </>
  );
}
