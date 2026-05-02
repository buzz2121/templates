import { motion } from 'motion/react';
import { Menu, X, Instagram, Twitter, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const transparentNavbar = !isScrolled && location.pathname === '/';

  return (
    <>
      <nav id="navbar" className={`fixed w-full z-50 transition-all duration-700 ${!transparentNavbar ? 'bg-white/95 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center font-sans">
          <div className="flex-1 hidden lg:flex gap-10 items-center text-[10px] font-bold tracking-[0.3em] uppercase">
            <Link to="/about" className={`hover:text-gold transition-colors relative group ${!transparentNavbar ? 'text-charcoal' : 'text-white'}`}>
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/gallery" className={`hover:text-gold transition-colors relative group ${!transparentNavbar ? 'text-charcoal' : 'text-white'}`}>
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <Link to="/services" className={`hover:text-gold transition-colors relative group ${!transparentNavbar ? 'text-charcoal' : 'text-white'}`}>
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </Link>
          </div>

          <div className="flex-[2] text-center">
            <Link to="/" id="logo" className={`text-2xl md:text-3xl font-serif tracking-[0.2em] transition-all duration-700 ${!transparentNavbar ? 'text-charcoal' : 'text-white'}`}>
              BUZZ <span className="italic opacity-80">Management</span>
            </Link>
          </div>

          <div className="flex-1 hidden lg:flex gap-10 justify-end items-center text-[10px] font-bold tracking-[0.3em] uppercase">
            <Link to="/contact" className={`hover:text-gold transition-colors relative group ${!transparentNavbar ? 'text-charcoal' : 'text-white'}`}>
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all group-hover:w-full"></span>
            </Link>
            <a href="https://www.davidtuteramentorship.com" target="_blank" className="bg-gold px-6 py-2.5 text-white hover:bg-gold-dark transition-all transform hover:-translate-y-0.5 shadow-lg">
              Mentorship
            </a>
          </div>

          <button id="mobile-menu-toggle" className={`lg:hidden transition-colors ${!transparentNavbar ? 'text-charcoal' : 'text-gold'}`} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-charcoal text-white z-[60] flex flex-col items-center justify-center space-y-10 text-2xl font-serif uppercase tracking-widest"
        >
          <button className="absolute top-8 right-8 text-gold" onClick={() => setMobileMenuOpen(false)}><X size={32} /></button>
          <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">About</Link>
          <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Gallery</Link>
          <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Services</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-gold transition-colors">Contact</Link>
          <a href="#" className="text-gold border border-gold px-8 py-3" onClick={() => setMobileMenuOpen(false)}>Mentorship</a>
          
          <div className="flex gap-6 pt-10">
            <Instagram size={20} className="text-white/40" />
            <Twitter size={20} className="text-white/40" />
            <Youtube size={20} className="text-white/40" />
          </div>
        </motion.div>
      )}
    </>
  );
}
