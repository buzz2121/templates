import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Heart, Menu, X, Mail, Building2, User, Landmark, Calculator, LayoutGrid, Layers, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Properties', href: '/listings', icon: Search },
  { name: 'Projects', href: '/projects', icon: Layers },
  { name: 'Agents', href: '/agents', icon: User },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out',
        isScrolled
          ? 'bg-black/40 backdrop-blur-3xl border-b border-white/5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
          : 'bg-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-gold-500/30 bg-black/20 backdrop-blur-md flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-700 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <Building2 className="-rotate-45 group-hover:rotate-0 transition-all duration-700 text-gold-500" size={20} />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-[0.1em] text-white leading-none">
              ESTATE<span className="text-gold-500">FLOW</span>
            </span>
            <span className="text-[7px] uppercase tracking-[0.4em] text-gold-500/50 mt-1 font-bold">International Luxe Realty</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "relative text-[9px] xl:text-[10px] font-extrabold uppercase tracking-[0.2em] xl:tracking-[0.3em] transition-all duration-500 py-2 group/nav",
                  isActive ? "text-gold-500" : "text-white/40 hover:text-white"
                )}
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-500/40 transition-all duration-500 group-hover/nav:w-full" />
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gold-500 shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/contact"
            className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[9px] px-6 xl:px-8 h-11 rounded-xl transition-all duration-500 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(212,175,55,0.2)] flex items-center"
          >
            Book Site Visit
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="text-gold-500 hover:bg-white/5 transition-colors">
                  <Menu size={24} />
                </Button>
              }
            />
            <SheetContent side="right" className="w-full bg-[#080806] border-l border-gold-500/20 text-white p-0">
              <div className="h-full flex flex-col p-10 bg-gradient-to-br from-black to-gold-950/20">
                <div className="flex items-center gap-3 mb-16">
                  <div className="w-10 h-10 border border-gold-500/30 flex items-center justify-center rotate-45 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                    <Building2 className="-rotate-45 text-gold-500" size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-serif font-bold tracking-[0.1em] text-white leading-none">ESTATEFLOW</span>
                    <span className="text-[6px] uppercase tracking-[0.4em] text-gold-500 font-bold mt-1">Luxe Global</span>
                  </div>
                </div>
                
                <div className="space-y-4 overflow-y-auto max-h-[50vh] pr-4 custom-scrollbar">
                  {navLinks.map((link) => (
                    <Link key={link.name} to={link.href} className="block group">
                      <div className={cn(
                        "text-3xl font-serif italic transition-all duration-500",
                        location.pathname === link.href ? "gold-text translate-x-4" : "text-white/20 group-hover:text-white/60 group-hover:translate-x-2"
                      )}>
                        {link.name}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-auto space-y-8 pt-12 border-t border-white/5">
                  <div className="flex justify-between items-end">
                    <div className="space-y-2">
                       <div className="text-[8px] uppercase font-bold tracking-[0.3em] text-gold-500/50">Headquarters</div>
                       <p className="text-white/40 text-[10px] leading-relaxed">Mayfair, London<br />United Kingdom</p>
                    </div>
                    <div className="text-right space-y-2">
                       <div className="text-[8px] uppercase font-bold tracking-[0.3em] text-gold-500/50">Contact</div>
                       <p className="text-white/40 text-[10px] italic font-serif">+44 20 7946 0123</p>
                    </div>
                  </div>
                  <Link 
                    to="/contact"
                    className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] h-16 rounded-xl shadow-[0_10px_30px_rgba(212,175,55,0.2)] flex items-center justify-center"
                  >
                    Private Consultation
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
