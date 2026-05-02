import React, { useState, useEffect } from 'react';
import { Search, Globe, User, HelpCircle, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const isDarkHeroPage = ['/', '/explore'].includes(location.pathname) || location.pathname.startsWith('/category/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const getTextColorClass = () => {
    if (isScrolled) return 'text-slate-900';
    return isDarkHeroPage ? 'text-white' : 'text-slate-900';
  };

  const getNavColorClass = (path: string) => {
    const isActive = location.pathname === path;
    if (isScrolled || !isDarkHeroPage) {
      return isActive ? 'text-yellow-600' : 'text-slate-900 hover:text-yellow-600';
    }
    return isActive ? 'text-yellow-400' : 'text-white hover:text-yellow-400';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white shadow-xl py-3 border-b border-slate-100' 
          : (isDarkHeroPage 
              ? 'bg-transparent py-6 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/40 before:to-transparent before:-z-10' 
              : 'bg-white border-b border-slate-100 py-3')
      }`}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1 cursor-pointer" id="logo-container">
            <span className={`text-3xl font-black tracking-tighter italic text-yellow-400 ${isScrolled || !isDarkHeroPage ? '' : 'drop-shadow-md'}`}>
               viator
            </span>
          </Link>

          {/* Search Bar (Only shown when scrolled on desktop or on non-hero pages) */}
          <form 
            onSubmit={handleSearch}
            className={`hidden lg:flex items-center bg-white border border-slate-200 rounded-full px-4 py-2 w-[400px] shadow-sm transition-all ${
              isScrolled || !isDarkHeroPage ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <input 
              type="text" 
              placeholder="Where to?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:ring-0 text-sm flex-1 outline-none font-bold"
            />
            <button type="submit" className="bg-yellow-400 p-1.5 rounded-full text-slate-900">
              <Search size={16} />
            </button>
          </form>
        </div>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/explore" className={`flex items-center gap-1 cursor-pointer font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${getNavColorClass('/explore')}`}>
            Explore
          </Link>
          <Link to="/search" className={`flex items-center gap-1 cursor-pointer font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${getNavColorClass('/search')}`}>
            Trip Planner
          </Link>
          <Link to="/help" className={`flex items-center gap-1 cursor-pointer font-black text-[10px] uppercase tracking-[0.2em] transition-colors ${getNavColorClass('/help')}`}>
            Help
          </Link>
          <Link to="/cart" className={`flex items-center gap-1 cursor-pointer relative transition-colors ${getTextColorClass()} hover:text-yellow-500 transition-colors`}>
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-slate-900 text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-sm">2</span>
          </Link>
          <div className={`flex items-center gap-2 cursor-pointer font-black text-[10px] uppercase tracking-[0.2em] px-6 py-2.5 rounded-full transition-all shadow-lg ${
            isScrolled || !isDarkHeroPage
              ? 'bg-slate-900 text-white hover:bg-yellow-400 hover:text-slate-900 shadow-slate-900/10' 
              : 'bg-white text-slate-900 hover:bg-yellow-400 hover:text-slate-900 shadow-white/10'
          }`}>
            <span>Log in</span>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 rounded-full ${getTextColorClass()}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>


      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 md:hidden flex flex-col gap-6 animate-in slide-in-from-right duration-300">
          <div className="flex items-center gap-3 text-slate-900 font-medium border-b pb-4">
            <User /> Log in or Sign up
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-slate-700">Wishlist</div>
            <div className="flex items-center gap-3 text-slate-700">Help Center</div>
            <div className="flex items-center gap-3 text-slate-700">Currency: USD</div>
            <div className="flex items-center gap-3 text-slate-700">Language: English</div>
          </div>
        </div>
      )}
    </header>
  );
};
