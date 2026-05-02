
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Flower2, Heart, Search, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onCartOpen: () => void;
  onSearchOpen: () => void;
  onAccountOpen: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onCartOpen, onSearchOpen, onAccountOpen, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const shouldShowGlass = isScrolled || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shop', path: '/shop' },
    { name: 'Studio', path: '/studio', highlight: true },
    { name: 'Occasions', path: '/occasions' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 glass ${
        isScrolled ? 'py-3 bg-white/80' : 'py-5 bg-white/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group cursor-pointer transition-colors text-stone-900">
          <div className="w-10 h-10 rounded-2xl flex items-center justify-center transition-transform shadow-lg bg-stone-900 text-white group-hover:rotate-6">
            <Flower2 size={20} />
          </div>
          <span className="text-2xl font-serif italic font-bold tracking-tight">
            Bloom & Petal
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-[10px] font-bold transition-all uppercase tracking-[0.3em] px-2 py-1 flex items-center gap-1.5 ${
                location.pathname === link.path 
                ? 'text-primary' 
                : link.highlight ? 'text-primary animate-pulse' : 'text-stone-900/60 hover:text-stone-900'
              }`}
            >
              {link.highlight && <Sparkles size={12} />}
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onSearchOpen}
            className="p-2.5 rounded-full transition-all duration-300 hidden sm:block text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          >
            <Search size={18} strokeWidth={1.5} />
          </motion.button>
          <motion.button 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={onCartOpen}
            className="p-2.5 rounded-full transition-all duration-300 hidden sm:block relative text-stone-600 hover:text-stone-900 hover:bg-stone-50"
          >
            <ShoppingCart size={18} strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute top-1.5 right-1.5 text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold bg-stone-900 text-white">
                {cartCount}
              </span>
            )}
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onAccountOpen}
            className="px-8 py-2.5 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-2xl transition-all hidden md:block bg-stone-900 text-white shadow-stone-900/10 hover:bg-stone-800"
          >
            SIGN IN
          </motion.button>
          <button 
            className="md:hidden p-2 rounded-full transition-colors text-stone-900 hover:bg-stone-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 items-center">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-bold uppercase tracking-[0.3em] ${
                    location.pathname === link.path ? 'text-primary' : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col items-center gap-6 w-full pt-6 border-t border-stone-100">
                <button 
                  onClick={() => {
                    onSearchOpen();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 text-sm font-bold text-stone-600 uppercase tracking-widest"
                >
                  <Search size={18} />
                  Search
                </button>
                <button 
                  onClick={() => {
                    onAccountOpen();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-5 bg-stone-900 text-white rounded-2xl font-bold text-[10px] uppercase tracking-widest shadow-xl"
                >
                  Sign In
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
