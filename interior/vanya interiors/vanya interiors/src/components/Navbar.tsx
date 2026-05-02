import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const MotionLink = motion(Link);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          isScrolled 
            ? 'bg-luxury-cream/90 backdrop-blur-xl py-4 border-b border-luxury-charcoal/5 shadow-sm' 
            : 'bg-transparent py-10'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col group relative z-50">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <span className={`text-2xl md:text-3xl font-serif font-black tracking-[-0.05em] leading-none transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-luxury-charcoal' : 'text-white'}`}>
              VANYA<span className="text-luxury-gold transition-transform duration-500 group-hover:rotate-12 inline-block">.</span>
            </span>
            <span className={`text-[7px] md:text-[8px] uppercase tracking-[0.5em] font-bold mt-1 transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-luxury-charcoal opacity-40' : 'text-white opacity-60'}`}>
              Luxury Interiors
            </span>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-12 lg:space-x-16">
          <div className="flex items-center space-x-10 lg:space-x-12">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
              >
                <Link
                  to={link.href}
                  className={`text-[11px] lg:text-[12px] uppercase tracking-[0.4em] font-black transition-all duration-500 relative group py-2 ${
                    location.pathname === link.href 
                      ? 'text-luxury-gold' 
                      : isScrolled 
                        ? 'text-luxury-charcoal/60 hover:text-luxury-gold' 
                        : 'text-white/70 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-[1.5px] bg-luxury-gold transition-all duration-500 group-hover:w-full ${
                    location.pathname === link.href ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2 transition-colors duration-500 ${isScrolled ? 'text-luxury-charcoal/60 hover:text-luxury-gold' : 'text-white/60 hover:text-white'}`}
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.button>
            
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-8 lg:px-10 py-3.5 text-[10px] uppercase tracking-[0.3em] font-bold transition-all duration-500 shadow-xl ${
                isScrolled 
                  ? 'bg-luxury-charcoal text-luxury-cream hover:bg-luxury-gold hover:text-white' 
                  : 'bg-white text-luxury-charcoal hover:bg-luxury-gold hover:text-white'
              }`}
            >
              Start Project
            </MotionLink>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden relative z-50">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-luxury-charcoal' : 'text-white'}`}
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button 
            className={`p-2 rounded-full transition-colors duration-500 ${isScrolled || isMenuOpen ? 'text-luxury-charcoal' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>
    </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-cream z-40 flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-8 md:space-y-12 py-32 px-6 min-h-[100dvh] justify-center">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-4xl md:text-5xl font-serif font-bold transition-colors relative group ${
                      location.pathname === link.href ? 'text-luxury-gold' : 'text-luxury-charcoal hover:text-luxury-gold'
                    }`}
                  >
                    {link.name}
                    {location.pathname === link.href && (
                      <motion.span 
                        layoutId="mobile-active"
                        className="absolute -left-10 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-luxury-gold"
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-12 py-5 bg-luxury-charcoal text-luxury-cream text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-luxury-gold transition-all duration-500"
                >
                  Get Consultation
                </Link>
              </motion.div>
              <div className="pt-16 mt-auto w-full text-center text-[10px] uppercase tracking-[0.5em] text-luxury-gold/40 font-bold whitespace-nowrap">
                Vanya Luxury Interiors
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
