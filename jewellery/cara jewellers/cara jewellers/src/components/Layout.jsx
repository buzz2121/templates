import React, { useState, useEffect } from 'react';
import { Outlet, Link, NavLink, useLocation } from 'react-router-dom';

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMobile = () => {
    setMobileOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  };

  return (
    <>
      {/* ===== NAVBAR ===== */}
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`} id="navbar">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo" id="nav-logo">CARA</Link>
          <div className="nav-links" id="nav-links">
            <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} end>Home</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to="/collections" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Collections</NavLink>
            <NavLink to="/experience" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Experience</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Contact</NavLink>
          </div>
          <Link to="/contact" className="nav-cta" id="nav-cta">Book Private Viewing</Link>
          <button className={`mobile-menu-btn ${mobileOpen ? 'active' : ''}`} id="mobile-menu-btn" aria-label="Toggle menu" onClick={toggleMobile}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} id="mobile-menu-overlay">
        <div className="mobile-menu-content">
          <Link to="/" className="mobile-link" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" className="mobile-link" onClick={() => setMobileOpen(false)}>About</Link>
          <Link to="/collections" className="mobile-link" onClick={() => setMobileOpen(false)}>Collections</Link>
          <Link to="/experience" className="mobile-link" onClick={() => setMobileOpen(false)}>Experience</Link>
          <Link to="/contact" className="mobile-link" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link to="/contact" className="mobile-cta" onClick={() => setMobileOpen(false)}>Book Private Viewing</Link>
        </div>
      </div>

      {/* Floating Concierge Button */}
      <Link to="/contact" className="concierge-float" id="concierge-float" aria-label="Contact Concierge">
        <span className="concierge-tooltip">Private Concierge</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      </Link>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer" id="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">CARA</Link>
              <p className="footer-tagline">Crafted Light. Defined Luxury.</p>
              <div className="footer-socials">
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="#" className="social-icon" aria-label="Pinterest">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 21c1-3 2-6 3-8 0 0-.5-1-.5-2.5C10.5 8.5 11.5 7 13 7c1 0 1.5.8 1.5 1.7 0 1.2-.8 3-1.2 4.5-.3 1.3.7 2.3 2 2.3 2.4 0 4-3 4-6.5 0-2.7-2-4.7-5.3-4.7-3.8 0-6.2 2.8-6.2 6 0 1 .3 1.8.8 2.4.1.1.1.3.1.4l-.3 1.2c0 .2-.2.3-.4.2-1.7-.7-2.5-2.6-2.5-4.7 0-3.5 3-7.7 9-7.7 4.8 0 8 3.4 8 7.2 0 4.9-2.7 8.5-6.7 8.5-1.3 0-2.6-.7-3-1.5l-.8 3.2c-.3 1-.8 2-1.3 2.8"/></svg>
                </a>
              </div>
            </div>
            <div className="footer-links-group">
              <div className="footer-col">
                <h4>Maison</h4>
                <Link to="/about">Our Story</Link>
                <Link to="/about">Ateliers</Link>
                <Link to="/about">Artisans</Link>
                <Link to="/about">Sustainability</Link>
              </div>
              <div className="footer-col">
                <h4>Collections</h4>
                <Link to="/collections/lumiere">Lumière</Link>
                <Link to="/collections/eternite">Éternité</Link>
                <Link to="/collections/cascade">Cascade</Link>
                <Link to="/collections/aureole">Auréole</Link>
              </div>
              <div className="footer-col">
                <h4>Services</h4>
                <Link to="/contact">Private Viewing</Link>
                <Link to="/contact">Bespoke Design</Link>
                <Link to="/contact">Care & Repair</Link>
                <Link to="/contact">Gift Registry</Link>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 CARA. All rights reserved.</p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy</Link>
              <Link to="/terms">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
