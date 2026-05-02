import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Calendar, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Services', href: '/services' },
    { name: 'About Clinic', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/90 backdrop-blur-md border-b border-slate-200' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center shadow-lg shadow-primary-100 transform group-hover:rotate-12 transition-transform">
            <span className="text-white font-bold text-xl">RT</span>
          </div>
          <span className={`text-2xl font-bold tracking-tight transition-colors ${
            isScrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-slate-900'
          }`}>
            REAL<span className="text-primary-600">TOOTH</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.href}
              className={`text-sm font-semibold transition-colors ${
                isScrolled || location.pathname !== '/' ? 'text-slate-600 hover:text-primary-600' : 'text-slate-700 hover:text-primary-900'
              } ${location.pathname === link.href ? 'text-primary-600' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="btn-primary flex items-center gap-2">
            BOOK APPOINTMENT
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-primary-600 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} className={isScrolled || location.pathname !== '/' ? 'text-slate-800' : 'text-slate-900'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-2xl p-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-slate-800 font-bold text-lg hover:text-primary-600 ${location.pathname === link.href ? 'text-primary-600' : ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <div className="flex flex-col gap-4">
                <Link to="/contact" className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                  <Calendar size={20} />
                  Book Appointment
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
