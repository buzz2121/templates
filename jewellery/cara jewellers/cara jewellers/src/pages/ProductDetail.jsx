import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useReveal } from '../hooks/useAnimations';
import { products, collections } from '../data/content';

export default function ProductDetail() {
  const { productId } = useParams();
  const revealRef = useReveal();
  const product = products.find(p => p.id === productId);
  const [imageLoaded, setImageLoaded] = useState(false);

  if (!product) return <Navigate to="/collections" replace />;

  const collection = collections.find(c => c.slug === product.collection);
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{product.name} — {product.material} | CARA</title>
        <meta name="description" content={`${product.name} in ${product.material} featuring ${product.stone}. ${product.price}. Handcrafted luxury jewellery by CARA.`} />
        <meta property="og:title" content={`${product.name} — CARA`} />
        <meta property="og:description" content={`${product.name} in ${product.material} with ${product.stone}. Starting from ${product.price}.`} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={product.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`https://cara-jewellery.com/product/${product.id}`} />
      </Helmet>

      <div ref={revealRef}>
        {/* Product Showcase */}
        <section className="section product-detail-section">
          <div className="section-container">
            {/* Breadcrumb */}
            <nav className="breadcrumb reveal-section" aria-label="Breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-sep">›</span>
              <Link to="/collections">Collections</Link>
              <span className="breadcrumb-sep">›</span>
              {collection && (
                <>
                  <Link to={`/collections/${collection.slug}`}>{collection.name}</Link>
                  <span className="breadcrumb-sep">›</span>
                </>
              )}
              <span className="breadcrumb-current">{product.name}</span>
            </nav>

            <div className="pd-grid">
              {/* Image Column */}
              <div className="pd-image-col reveal-section">
                <div className={`pd-image-main ${imageLoaded ? 'loaded' : ''}`}>
                  {product.isNew && <span className="product-badge badge-new">New</span>}
                  {product.isBestseller && <span className="product-badge badge-best">Bestseller</span>}
                  <img
                    src={product.image}
                    alt={product.name}
                    onLoad={() => setImageLoaded(true)}
                  />
                  <div className="pd-image-glow"></div>
                </div>
                {/* Thumbnail Gallery */}
                <div className="pd-thumbs">
                  <div className="pd-thumb active">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="pd-thumb">
                    <img src={product.image} alt={`${product.name} angle 2`} style={{ filter: 'brightness(1.1) contrast(1.05)' }} />
                  </div>
                  <div className="pd-thumb">
                    <img src={product.image} alt={`${product.name} detail`} style={{ filter: 'saturate(1.2)' }} />
                  </div>
                </div>
              </div>

              {/* Info Column */}
              <div className="pd-info-col reveal-section" style={{ transitionDelay: '.2s' }}>
                {collection && (
                  <Link to={`/collections/${collection.slug}`} className="pd-collection-link">
                    {collection.name} Collection
                  </Link>
                )}
                <h1 className="pd-name">{product.name}</h1>
                <p className="pd-price">{product.price}</p>

                <div className="pd-divider"></div>

                <div className="pd-specs">
                  <div className="pd-spec">
                    <span className="pd-spec-label">Material</span>
                    <span className="pd-spec-value">{product.material}</span>
                  </div>
                  <div className="pd-spec">
                    <span className="pd-spec-label">Stone</span>
                    <span className="pd-spec-value">{product.stone}</span>
                  </div>
                  <div className="pd-spec">
                    <span className="pd-spec-label">Category</span>
                    <span className="pd-spec-value" style={{ textTransform: 'capitalize' }}>{product.category}</span>
                  </div>
                  {collection && (
                    <div className="pd-spec">
                      <span className="pd-spec-label">Collection</span>
                      <span className="pd-spec-value">{collection.name}</span>
                    </div>
                  )}
                </div>

                <div className="pd-divider"></div>

                {/* Description */}
                <div className="pd-description">
                  <h3 className="pd-desc-title">About This Piece</h3>
                  <p>Handcrafted in our Jaipur atelier, the {product.name} is a testament to over 200 hours of meticulous artisanship. Each element is hand-set and individually inspected by our master jewellers to ensure extraordinary brilliance and enduring beauty.</p>
                </div>

                {/* Highlights */}
                <div className="pd-highlights">
                  <div className="pd-highlight">
                    <span className="pd-highlight-icon">◈</span>
                    <div>
                      <strong>Ethically Sourced</strong>
                      <p>Conflict-free gemstones with full provenance</p>
                    </div>
                  </div>
                  <div className="pd-highlight">
                    <span className="pd-highlight-icon">✦</span>
                    <div>
                      <strong>Lifetime Guarantee</strong>
                      <p>Complimentary care and maintenance</p>
                    </div>
                  </div>
                  <div className="pd-highlight">
                    <span className="pd-highlight-icon">◇</span>
                    <div>
                      <strong>Bespoke Options</strong>
                      <p>Customization available on request</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="pd-actions">
                  <Link to="/contact" className="btn-primary btn-full" id="pd-book-viewing">
                    Book Private Viewing
                  </Link>
                  <Link to="/contact" className="btn-ghost btn-full" id="pd-enquire">
                    Enquire About This Piece
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="section related-products">
            <div className="section-container">
              <div className="section-header reveal-section">
                <p className="section-eyebrow">YOU MAY ALSO LOVE</p>
                <h2 className="section-title">Related<br /><em>Pieces</em></h2>
              </div>
              <div className="product-grid reveal-section">
                {relatedProducts.map((rp, i) => (
                  <Link
                    to={`/product/${rp.id}`}
                    className="product-card"
                    key={rp.id}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <div className="product-img-wrap">
                      <img src={rp.image} alt={rp.name} />
                      <div className="product-overlay">
                        <span className="product-view-btn">View Details</span>
                      </div>
                      {rp.isNew && <span className="product-badge badge-new">New</span>}
                      {rp.isBestseller && <span className="product-badge badge-best">Bestseller</span>}
                    </div>
                    <div className="product-info">
                      <span className="product-material">{rp.material}</span>
                      <h3 className="product-name">{rp.name}</h3>
                      <p className="product-stone">{rp.stone}</p>
                      <span className="product-price">{rp.price}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="section cta-banner">
          <div className="cta-banner-inner reveal-section">
            <h2 className="cta-banner-title">Experience It In Person</h2>
            <p className="cta-banner-text">Visit our private salon to see this piece and explore our full collection.</p>
            <Link to="/contact" className="btn-primary">Schedule Appointment</Link>
          </div>
        </section>
      </div>
    </>
  );
}
