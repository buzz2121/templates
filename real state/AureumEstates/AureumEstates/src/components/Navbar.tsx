import { motion, AnimatePresence } from "motion/react";
import { Search, Menu, X } from "lucide-react";
import SearchOverlay from "./SearchOverlay";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const shouldShowSolid = isScrolled || !isHomePage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Buy", href: "/buy" },
    { name: "Rent", href: "/rent" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      id="main-nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 border-b ${
        shouldShowSolid 
          ? "py-4 shadow-xl border-charcoal/5 backdrop-blur-2xl bg-white/90" 
          : "bg-transparent py-8 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="w-9 h-9 border border-gold/40 flex items-center justify-center transition-all group-hover:rotate-90 group-hover:border-gold duration-500 rounded-sm">
              <span className="gold-text font-bold text-xl uppercase tracking-tighter">A</span>
            </div>
            <span className={`text-sm md:text-lg font-light tracking-[0.25em] uppercase transition-colors duration-500 ${shouldShowSolid ? 'text-charcoal' : 'text-white'}`}>
              AUREUM <span className="hidden sm:inline font-bold tracking-tight">ESTATES</span>
            </span>
          </motion.div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link, idx) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: location.pathname === link.href ? 1 : 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ delay: idx * 0.08 }}
            >
              <Link
                to={link.href}
                className={`text-[10px] font-semibold transition-all tracking-[0.25em] uppercase relative ${
                  location.pathname === link.href 
                    ? "text-gold" 
                    : shouldShowSolid ? "text-charcoal hover:text-gold" : "text-white hover:text-gold"
                }`}
              >
                {link.name}
                {location.pathname === link.href && (
                  <motion.div 
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" 
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-8">
          <button 
            id="search-btn" 
            onClick={() => setIsSearchOpen(true)}
            className={`p-2 opacity-80 hover:opacity-100 hover:text-gold transition-all duration-300 ${shouldShowSolid ? 'text-charcoal' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}
          >
            <Search size={20} />
          </button>
          
          <Link to="/post-property" className="hidden sm:block">
            <motion.button
              id="post-property-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`premium-pill ${shouldShowSolid ? 'text-gold-dark border-gold/30' : 'text-white border-white/40 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}
            >
              Post Property
            </motion.button>
          </Link>

          {/* Mobile Menu Trigger */}
          <button
            id="mobile-menu-toggle"
            className={`lg:hidden p-2 ${shouldShowSolid ? 'text-charcoal' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 lg:hidden bg-white/95 backdrop-blur-2xl"
          >
            {/* Decorative glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-gold/[0.03] blur-[100px] rounded-full pointer-events-none" />
            
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 }}
              >
                <Link
                  to={link.href}
                  className={`text-3xl font-serif font-bold tracking-tight ${location.pathname === link.href ? "gold-text" : "text-charcoal/80 hover:text-gold"} transition-colors`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link
              to="/contact"
              className="mt-6 px-14 py-5 glass border border-gold/30 gold-text font-bold uppercase tracking-[0.2em] text-xs rounded-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Request Consultation
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  );
}
