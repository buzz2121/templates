import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white py-5 shadow-none border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-brand rounded-full flex items-center justify-center text-white">
            <div className="w-4 h-4 border-2 border-white rotate-45"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-sans font-bold text-brand text-xl leading-none tracking-tighter">ELITE</span>
            <span className="text-accent font-bold text-[10px] tracking-[0.2em] leading-none mt-1 uppercase">DENTAL CARE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-bold transition-colors text-xs uppercase tracking-widest ${location.pathname === item.path ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
            >
              {item.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95">
            Book Appointment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-brand" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl md:hidden"
          >
            <div className="p-8 flex flex-col gap-6 text-left">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  to={item.path} 
                  className={`font-bold text-xs uppercase tracking-widest py-2 border-b border-slate-50 transition-colors ${location.pathname === item.path ? 'text-brand' : 'text-slate-600'}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" className="bg-accent text-white w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest mt-4 text-center">
                Book Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
