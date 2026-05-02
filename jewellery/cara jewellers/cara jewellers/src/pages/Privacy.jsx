import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | CARA Jewellery</title>
        <meta name="description" content="CARA's privacy policy outlines how we collect, use, and protect your personal information when you interact with our services and website." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://cara-jewels.com/privacy" />
      </Helmet>

      <section className="page-hero page-hero-minimal">
        <div className="page-hero-content">
          <p className="section-eyebrow">LEGAL</p>
          <h1 className="page-hero-title">Privacy<br /><em>Policy</em></h1>
        </div>
      </section>

      <section className="section legal-content">
        <div className="section-container legal-container">
          <p className="legal-updated">Last updated: April 2026</p>

          <h2>1. Information We Collect</h2>
          <p>When you interact with CARA — whether visiting our website, scheduling an appointment, or visiting our ateliers — we may collect personal information including your name, email address, phone number, and preferences regarding our collections.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Your information enables us to provide a personalised luxury experience:</p>
          <ul>
            <li>Schedule and manage private viewing appointments</li>
            <li>Communicate about our collections, events, and services</li>
            <li>Process bespoke design consultations</li>
            <li>Improve our services and digital experience</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>We implement industry-leading security measures to protect your personal data. All information is encrypted in transit and at rest. We never sell or share your personal data with third parties for marketing purposes.</p>

          <h2>4. Cookies</h2>
          <p>Our website uses essential cookies to ensure functionality and analytics cookies to improve your experience. You may adjust cookie preferences at any time through your browser settings.</p>

          <h2>5. Your Rights</h2>
          <p>Under applicable data protection laws, you have the right to access, rectify, delete, or export your personal data. To exercise these rights, contact our privacy team at <strong>privacy@cara-jewels.com</strong>.</p>

          <h2>6. Data Retention</h2>
          <p>We retain personal data only as long as necessary to fulfil the purposes for which it was collected, or as required by law. Appointment records are retained for 5 years; marketing preferences are retained until you opt out.</p>

          <h2>7. Contact</h2>
          <p>For privacy-related inquiries:</p>
          <p><strong>CARA Privacy Office</strong><br />14, Turner Road, Bandra West, Mumbai 400050<br />privacy@cara-jewels.com</p>

          <div className="legal-back">
            <Link to="/" className="btn-ghost">← Return Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}
