import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | CARA Jewellery</title>
        <meta name="description" content="Read CARA's terms and conditions governing the use of our website, services, appointment scheduling, and bespoke design consultations." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cara-jewels.com/terms" />
      </Helmet>

      <section className="page-hero page-hero-minimal">
        <div className="page-hero-content">
          <p className="section-eyebrow">LEGAL</p>
          <h1 className="page-hero-title">Terms &<br /><em>Conditions</em></h1>
        </div>
      </section>

      <section className="section legal-content">
        <div className="section-container legal-container">
          <p className="legal-updated">Last updated: April 2026</p>

          <h2>1. Acceptance of Terms</h2>
          <p>By accessing and using the CARA website and services, you agree to be bound by these Terms & Conditions. If you do not agree, please refrain from using our services.</p>

          <h2>2. Services</h2>
          <p>CARA provides luxury jewellery sales, bespoke design consultations, and private viewing appointments. All services are subject to availability and may be modified at our discretion.</p>

          <h2>3. Appointments</h2>
          <p>Private viewing appointments are complimentary and subject to availability. We request 24 hours' notice for cancellations. CARA reserves the right to reschedule appointments as needed.</p>

          <h2>4. Intellectual Property</h2>
          <p>All content on this website — including images, text, designs, logos, and brand identity — is the exclusive property of CARA and is protected by international copyright and trademark laws. Reproduction without written consent is prohibited.</p>

          <h2>5. Pricing & Availability</h2>
          <p>All prices are indicative and subject to change. Final pricing is confirmed during private consultation. Pieces from our collections are subject to availability and may be made to order.</p>

          <h2>6. Bespoke Commissions</h2>
          <p>Bespoke design services require a consultation and written agreement. A deposit of 30% is required upon commission approval, with the balance due upon completion. Timeline estimates are provided during consultation.</p>

          <h2>7. Limitation of Liability</h2>
          <p>CARA endeavours to present accurate information on this website. However, we do not guarantee that all information is complete, current, or error-free. Colour and appearance of jewellery may vary from digital representations.</p>

          <h2>8. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes shall be resolved in the courts of Mumbai, Maharashtra.</p>

          <h2>9. Contact</h2>
          <p><strong>CARA Legal Department</strong><br />14, Turner Road, Bandra West, Mumbai 400050<br />legal@cara-jewels.com</p>

          <div className="legal-back">
            <Link to="/" className="btn-ghost">← Return Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
