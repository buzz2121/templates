import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Globe, Phone, Search, Heart } from 'lucide-react';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

const NAV_LINKS = [
  { name: 'Browse Properties', path: '/estates' },
  { name: 'About Buzz Estate', path: '/about' },
  { name: 'Media Center', path: '/journal' },
  { name: 'Blogs', path: '/journal' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white border-brand-line py-3 shadow-sm" : "bg-white border-transparent py-5"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-12">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-black tracking-tighter leading-none text-brand-dark font-sans uppercase">
              BUZZ ESTATE
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-[13px] font-medium transition-all hover:text-brand-gold',
                  location.pathname === link.path ? 'text-brand-gold' : 'text-brand-dark'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="hidden md:flex items-center gap-2 cursor-pointer hover:text-brand-gold transition-colors"
          >
            <span className="text-[13px] font-medium">Search</span>
            <Search size={18} />
          </button>
          
          <Link to="/estates" className="text-brand-dark hover:text-brand-gold transition-colors">
            <Heart size={20} />
          </Link>
          
          <button
            className="lg:hidden p-2 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-white z-[100] flex flex-col p-12"
          >
            <div className="flex justify-between items-center mb-24">
              <span className="text-2xl font-black tracking-tighter text-brand-dark uppercase">BUZZ ESTATE</span>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="w-12 h-12 flex items-center justify-center border border-brand-line hover:bg-brand-dark hover:text-white transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="max-w-4xl mx-auto w-full space-y-12">
               <span className="text-xs font-black uppercase tracking-[0.5em] text-brand-gold">Search Our Portfolio</span>
               <div className="relative group">
                  <input 
                    autoFocus
                    type="text" 
                    placeholder="Search by community, project or lifestyle..." 
                    className="w-full text-4xl lg:text-7xl font-serif border-b-2 border-brand-line pb-8 outline-none focus:border-brand-gold transition-colors placeholder:text-brand-gray/20"
                  />
                  <div className="absolute right-0 bottom-8">
                     <ArrowRight size={48} className="text-brand-gold" />
                  </div>
               </div>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
                  {[
                    { label: 'Popular Search', items: ['Buzz Hills', 'Cavalli Tower', 'Safa One', 'Business Bay'] },
                    { label: 'Lifestyle', items: ['Waterfront', 'Golf Living', 'Hotel Rooms', 'Private Islands'] },
                  ].map((group, i) => (
                    <div key={i} className="space-y-4">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-gray">{group.label}</h4>
                       <div className="flex flex-col gap-2">
                          {group.items.map(item => (
                            <Link key={item} to="/estates" onClick={() => setIsSearchOpen(false)} className="text-lg font-serif hover:text-brand-gold transition-colors">{item}</Link>
                          ))}
                       </div>
                    </div>
                  ))}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-brand-line overflow-hidden"
          >
            <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium hover:text-brand-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-brand-line">
                <Search size={20} />
                <span className="text-lg font-medium">Search Properties</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

