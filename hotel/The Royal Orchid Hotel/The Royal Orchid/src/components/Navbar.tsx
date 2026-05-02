import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Hotels', href: '/hotels' },
    { name: 'Rooms & Suites', href: '/rooms' },
    { name: 'Dining', href: '/dining' },
    { name: 'Special Offers', href: '/offers' },
    { name: 'Events', href: '/events' },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled || mobileMenuOpen ? 'bg-royal-dark/95 backdrop-blur-md py-4' : 'bg-gradient-to-b from-black/80 via-black/20 to-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className={`flex-shrink-0 flex items-center ${scrolled ? 'scale-90' : 'scale-100'} origin-left transition-all duration-500`}>
              <Link to="/" className="flex flex-col items-start filter drop-shadow-lg">
                <span className="font-serif-cormorant text-2xl md:text-3xl tracking-[0.2em] uppercase text-royal-gold leading-none font-medium">The Royal</span>
                <span className="font-sans text-[0.6rem] md:text-xs tracking-[0.4em] uppercase text-royal-white mt-1 font-semibold">Orchid</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <NavLink
                      to={link.href}
                      className={({ isActive }) => 
                        `text-[11px] uppercase tracking-[0.15em] transition-all duration-300 font-medium drop-shadow-md ${
                          isActive ? 'text-royal-gold border-b-2 border-royal-gold pb-1' : 'text-royal-white hover:text-royal-gold'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Group: Book Now and Mobile Toggle */}
            <div className="flex items-center gap-4 md:gap-6">
              {/* Book Now Button (Hidden on small mobile, visible on tablet/md+) */}
              <div className="hidden md:flex">
                <Link
                  to="/book"
                  className="border-2 border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-dark px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-all duration-300 drop-shadow-md"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-royal-white hover:text-royal-gold transition-colors focus:outline-none"
                  aria-label="Toggle Navigation"
                >
                  {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-royal-dark/95 backdrop-blur-xl pt-24 pb-8 px-4 flex flex-col overflow-y-auto max-h-screen"
          >
            <ul className="flex flex-col items-center justify-center flex-1 space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    className={({ isActive }) => 
                      `font-serif-cormorant text-2xl transition-colors ${
                        isActive ? 'text-royal-gold' : 'text-royal-white hover:text-royal-gold'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
              <li className="pt-8">
                 <Link
                  to="/book"
                  className="border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-dark px-10 py-3 text-sm uppercase tracking-widest transition-all duration-300 inline-block"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
