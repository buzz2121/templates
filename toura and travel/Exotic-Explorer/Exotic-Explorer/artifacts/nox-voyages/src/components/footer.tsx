import { motion } from "framer-motion";
import { Link } from "wouter";
import { Mail, Shield, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12 noise-bg">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & Manifesto */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-serif font-bold tracking-widest text-white">NOX</span>
            </Link>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-xs">
              Architecting the world's most exclusive escapes since 2006. We don't just plan travel; we curate legacies. Access is a privilege. Excellence is our baseline.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary uppercase tracking-[0.2em] text-[10px] font-semibold mb-8">The Collection</h4>
            <ul className="space-y-4">
              {["Home", "Destinations", "Packages", "Experiences", "About", "Testimonials"].map((item) => (
                <li key={item}>
                  <Link href={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-white/60 hover:text-primary text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-primary uppercase tracking-[0.2em] text-[10px] font-semibold mb-8">Global Access</h4>
            <ul className="space-y-4">
              {["Privacy Policy", "Terms of Service", "Confidentiality Framework", "NDA Portal", "Corporate Access", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="/contact" className="text-white/60 hover:text-primary text-sm font-light transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-primary uppercase tracking-[0.2em] text-[10px] font-semibold mb-8">The NOX Bulletin</h4>
            <p className="text-white/40 text-sm font-light leading-relaxed mb-6">
              Exclusive destination reveals and invitation-only event access. Delivered once monthly.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Direct Email Address" 
                className="w-full bg-white/5 border border-white/10 py-3 pl-4 pr-12 text-sm text-white focus:outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Shield className="w-3 h-3 text-primary/50" />
              <span className="text-[10px] text-white/25 uppercase tracking-widest">End-to-End Encrypted</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/20 text-[10px] uppercase tracking-[0.2em]">
            © {currentYear} NOX VOYAGES S.A. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <Mail className="w-3 h-3 text-primary/30" />
              <span className="text-white/30 text-[10px] uppercase tracking-widest">concierge@noxvoyages.com</span>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/50 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
              <span className="text-white/30 text-[10px] uppercase tracking-widest">Systems Secure</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
