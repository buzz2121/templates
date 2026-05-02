import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-32 pb-16 relative overflow-hidden">
      {/* Decorative Brand Accent */}
      <div className="absolute top-0 right-0 p-24 opacity-[0.08] pointer-events-none select-none">
          <span className="text-[20rem] font-display font-medium leading-none tracking-tighter">S</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          <div className="space-y-12">
             <Link to="/" className="flex items-center gap-3">
                <div className="w-10 h-10 border border-primary/50 flex items-center justify-center">
                    <span className="text-primary font-display font-bold text-xlitalic">S</span>
                </div>
                <span className="font-display font-medium text-2xl text-background italic">Sterling</span>
            </Link>
            <p className="text-background/50 font-light text-sm leading-relaxed max-w-xs tracking-wide border-l border-primary/20 pl-6">
              Curating the world's most significant residential artifacts since 1924. Tailored advisory for the architectural elite.
            </p>
            <div className="flex gap-6">
                {[Instagram, Twitter, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="text-background/40 hover:text-primary transition-luxury">
                        <Icon size={18} />
                    </a>
                ))}
            </div>
          </div>

          <div>
            <h4 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-10">The Portfolio</h4>
            <ul className="space-y-4 text-[11px] font-bold uppercase tracking-[0.2em] text-background/40">
              <li><Link to="/properties" className="hover:text-primary transition-luxury">Signature Collection</Link></li>
              <li><Link to="/agents" className="hover:text-primary transition-luxury">Private Advisors</Link></li>
              <li><Link to="/compare" className="hover:text-primary transition-luxury">Investment Matrix</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-luxury">Our Heritage</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-luxury">The Journal</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-10">Concierge</h4>
            <ul className="space-y-8 text-sm font-light text-background/50 italic">
              <li className="flex gap-4 items-start">
                  <MapPin size={18} className="text-primary shrink-0" />
                  <span className="leading-relaxed">Sterling Headquarters:<br />450 Park Avenue, NY 10022</span>
              </li>
              <li className="flex gap-4 items-center">
                  <Phone size={18} className="text-primary shrink-0" />
                  <span className="tracking-widest font-normal">+1 (212) 555-0120</span>
              </li>
              <li className="flex gap-4 items-center">
                  <Mail size={18} className="text-primary shrink-0" />
                  <span className="tracking-widest font-normal">private@sterling-estates.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary uppercase tracking-[0.4em] text-[10px] font-bold mb-10">Briefings</h4>
            <p className="text-background/40 text-[10px] font-bold uppercase tracking-widest mb-8 leading-relaxed">Secure exclusive access to off-market inventory and bespoke market reports.</p>
            <div className="space-y-4">
                <Input placeholder="Private Email" className="bg-background/10 border-background/10 text-background placeholder:text-background/20 h-16 rounded-none focus:border-primary transition-luxury italic border-none outline-none" />
                <Button className="w-full gold-gradient text-white font-bold uppercase text-[10px] tracking-[0.3em] h-16 rounded-none shadow-xl border-none">Establish Link</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[9px] uppercase tracking-[0.4em] text-foreground/40 font-bold italic">© 1924-2024 Sterling Estates International. All rights reserved.</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-medium">
              Designed & Developed by - <a href="#" className="text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-luxury">Buzz Entertainment Media Pvt. Ltd.</a>
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end gap-12 text-[9px] uppercase tracking-[0.4em] text-foreground/40 font-bold">
              <a href="#" className="hover:text-primary transition-luxury">Privacy Protocol</a>
              <a href="#" className="hover:text-primary transition-luxury">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
