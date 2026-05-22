import { Link, useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/packages", label: "Packages" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${
          scrolled
            ? "glass-dark py-4 border-white/10"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-3xl font-serif font-bold text-white tracking-[0.2em] relative group">
            NOX
            <span className="absolute -inset-2 blur-lg bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                  location === link.href
                    ? "text-primary"
                    : "text-white/60 hover:text-white"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-primary shadow-[0_0_8px_rgba(212,175,55,0.8)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 border border-primary/50 text-primary uppercase text-xs tracking-widest hover:bg-primary hover:text-background transition-all duration-500 glow-gold hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]"
              data-testid="nav-cta-button"
            >
              Inquire
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 focus:outline-none"
            onClick={() => setMobileMenuOpen(true)}
            data-testid="mobile-menu-toggle"
            aria-label="Open Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 z-[60] bg-black/90 flex flex-col"
          >
            <div className="p-6 flex justify-end">
              <button
                className="text-white p-2"
                onClick={() => setMobileMenuOpen(false)}
                data-testid="mobile-menu-close"
                aria-label="Close Menu"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <motion.div
                  key={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-serif tracking-widest ${
                      location === link.href ? "text-primary" : "text-white/70"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
