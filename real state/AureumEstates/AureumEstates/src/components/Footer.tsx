import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-28 pb-14 border-t border-white/5 relative z-10">
      {/* Top gold line accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8 col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 border border-gold/60 flex items-center justify-center rounded-sm">
                <span className="gold-text font-bold text-lg">A</span>
              </div>
              <span className="text-lg font-light tracking-[0.2em] uppercase text-white">Aureum<span className="font-bold tracking-tight ml-0.5">Estates</span></span>
            </Link>
            <p className="text-white/80 text-sm leading-[1.9] font-light tracking-wide">
              Setting new benchmarks in luxury real estate with a commitment to excellence and architectural brilliance.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-11 h-11 glass-blue flex items-center justify-center hover:text-gold hover:border-gold/30 transition-all duration-300 rounded-xl">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-7">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'Buy Estates', href: '/buy' },
                { name: 'Lease Collection', href: '/rent' },
                { name: 'Developments', href: '/projects' },
                { name: 'Contact Concierge', href: '/contact' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-white/80 hover:text-gold transition-colors duration-300 font-light tracking-wide">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-7">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Locations</h4>
            <ul className="space-y-4">
              {['Dubai', 'London', 'New York', 'Paris', 'Singapore'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/80 hover:text-gold transition-colors duration-300 font-light tracking-wide">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-7">
            <h4 className="text-gold uppercase tracking-[0.3em] text-[10px] font-bold">Contact Us</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold/60 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-white/80 leading-relaxed font-light tracking-wide">Suite 505, Platinum Tower, Financial District</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold/60 flex-shrink-0" />
                <p className="text-sm text-white/80 font-light tracking-wide">+1 (234) LUXE-789</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-gold/60 flex-shrink-0" />
                <p className="text-sm text-white/80 font-light tracking-wide">concierge@aureum.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.2em] text-white/70 font-medium text-center">
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
            <span className="hover:text-gold/60 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-gold/60 cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-gold/60 cursor-pointer transition-colors">DLD Registered</span>
          </div>
          <p className="opacity-60">© 2024 AUREUM GLOBAL REALTY. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
