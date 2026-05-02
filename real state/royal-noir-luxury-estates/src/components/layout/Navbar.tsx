import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Collection", path: "/properties" },
  { name: "Portfolio", path: "/compare" },
  { name: "Advisors", path: "/agents" },
  { name: "Journal", path: "/blog" },
  { name: "Heritage", path: "/about" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12",
        isScrolled
          ? "bg-white/80 backdrop-blur-xl h-20 border-b border-border/50 shadow-sm"
          : "bg-transparent h-28"
      )}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-primary flex items-center justify-center transition-luxury group-hover:bg-primary/5">
            <span className="text-primary font-display text-xl font-medium italic">S</span>
          </div>
          <span className="text-2xl font-display font-medium text-foreground italic tracking-tight">
            Sterling <span className="text-primary font-light not-italic tracking-widest text-[10px] uppercase ml-1 opacity-60">Estates</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "text-[10px] uppercase tracking-[0.3em] font-bold transition-luxury relative group/link",
                location.pathname === link.path ? "text-primary" : "text-foreground/60 hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-2 left-0 h-[1px] bg-primary transition-all duration-500",
                location.pathname === link.path ? "w-full" : "w-0 group-hover/link:w-full"
              )} />
            </Link>
          ))}
          <Link to="/contact" className="text-[10px] uppercase tracking-[0.2em] font-bold text-foreground border-b border-primary/20 hover:border-primary transition-luxury pb-1 ml-4">
            Establishing Contact
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 bg-white z-[60] lg:hidden flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-16">
                <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center">
                        <span className="text-primary font-display font-bold text-xl">S</span>
                    </div>
                    <span className="font-display font-bold text-2xl text-foreground uppercase italic underline decoration-primary/20">Sterling</span>
                </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/40 hover:text-primary transition-luxury"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="flex flex-col gap-10 mt-12">
                {NAV_LINKS.map((link) => (
                    <Link 
                        key={link.path} 
                        to={link.path} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                            "text-4xl font-display hover:text-primary transition-luxury italic underline decoration-transparent hover:decoration-primary/20",
                            location.pathname === link.path ? "text-primary" : "text-foreground"
                        )}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link 
                    to="/contact" 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-4xl font-display text-primary italic underline decoration-primary/10 mt-8"
                >
                    Private Contact
                </Link>
            </div>

            <div className="mt-auto border-t border-border pt-12">
                <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground font-bold mb-6">Concierge Protocol</p>
                <p className="text-xl font-display text-foreground mb-1">+1 (212) 555-0120</p>
                <p className="text-muted-foreground font-light text-sm italic">concierge@sterling-estates.com</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
