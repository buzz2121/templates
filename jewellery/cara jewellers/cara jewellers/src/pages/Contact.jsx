import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useAnimations';

export default function Contact() {
  const revealRef = useReveal();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    e.target.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact & Private Viewing — Book an Appointment | CARA</title>
        <meta name="description" content="Schedule a private consultation with CARA's certified gemologists and designers. Visit our showrooms in Mumbai, Delhi, or Jaipur. Bespoke jewellery design services available." />
        <meta property="og:title" content="Contact CARA — Book a Private Viewing" />
        <meta property="og:description" content="Schedule a private consultation with our gemologists in Mumbai, Delhi, or Jaipur." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/hero-bg.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="CARA contact, private viewing, jewellery appointment, bespoke design, Mumbai jeweller, luxury jewellery India" />
        <link rel="canonical" href="https://cara-jewels.com/contact" />
      </Helmet>

      <section className="page-hero page-hero-short">
        <div className="page-hero-bg">
          <img src="/images/hero-bg.png" alt="CARA Contact" className="page-hero-bg-img" />
          <div className="page-hero-overlay"></div>
        </div>
        <div className="page-hero-content">
          <p className="section-eyebrow">PRIVATE CONSULTATION</p>
          <h1 className="page-hero-title">Begin Your<br /><em>Journey</em></h1>
          <p className="page-hero-sub">Experience CARA in the intimacy of our private salon.</p>
        </div>
      </section>

      <div ref={revealRef}>
        <section className="section appointment">
          <div className="section-container">
            <div className="appointment-inner">
              <div className="appointment-text reveal-section">
                <h2 className="section-title">Visit Our<br /><em>Showrooms</em></h2>
                <p className="appointment-desc">Our certified gemologists and designers will guide you through our collections, or begin crafting a bespoke piece that is entirely yours.</p>
                <div className="appointment-details">
                  <div className="detail-item">
                    <span className="detail-label">MUMBAI FLAGSHIP</span>
                    <span className="detail-value">14, Turner Road, Bandra West, Mumbai 400050</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">DELHI SHOWROOM</span>
                    <span className="detail-value">D-6, South Extension Part II, New Delhi 110049</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">JAIPUR ATELIER</span>
                    <span className="detail-value">C-11, Ashok Marg, C-Scheme, Jaipur 302001</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">PHONE</span>
                    <span className="detail-value">+91 22 6789 0123</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">WHATSAPP</span>
                    <span className="detail-value">+91 98765 43210</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">EMAIL</span>
                    <span className="detail-value">concierge@cara-jewels.com</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">HOURS</span>
                    <span className="detail-value">Mon – Sat: 11:00 AM – 8:00 PM</span>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="contact-map glass-card">
                  <div className="map-inner">
                    <span className="map-pin">◈</span>
                    <p>14, Turner Road, Bandra West<br />Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>

              <div className="appointment-form-wrap reveal-section">
                <form className="appointment-form glass-card" id="appointment-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Reserve Your Private Viewing</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-first-name">First Name</label>
                      <input type="text" id="form-first-name" placeholder="Priya" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-last-name">Last Name</label>
                      <input type="text" id="form-last-name" placeholder="Sharma" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-email">Email</label>
                    <input type="email" id="form-email" placeholder="priya@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-phone">Phone</label>
                    <input type="tel" id="form-phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="form-location">Preferred Location</label>
                      <select id="form-location">
                        <option value="">Select location</option>
                        <option value="mumbai">Mumbai — Bandra West</option>
                        <option value="delhi">Delhi — South Extension</option>
                        <option value="jaipur">Jaipur — C-Scheme</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="form-interest">Interest</label>
                      <select id="form-interest">
                        <option value="">Select your interest</option>
                        <option value="engagement">Engagement Rings</option>
                        <option value="necklaces">Necklaces & Pendants</option>
                        <option value="earrings">Earrings</option>
                        <option value="bracelets">Bracelets & Bangles</option>
                        <option value="bespoke">Bespoke Creation</option>
                        <option value="bridal">Bridal Collection</option>
                        <option value="collection">View Full Collection</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="form-message">Message</label>
                    <textarea id="form-message" rows="4" placeholder="Tell us about your vision..."></textarea>
                  </div>
                  <button type="submit" className={`btn-primary btn-full ${submitted ? 'btn-success' : ''}`} id="form-submit">
                    {submitted ? 'Thank You ✦ We\'ll Be in Touch' : 'Request Appointment'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
