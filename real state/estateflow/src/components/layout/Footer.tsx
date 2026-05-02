import { Link } from 'react-router-dom';
import { Building2, Facebook, Instagram, Twitter, Mail, Phone, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold-500/10 pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="mb-24 pb-24 border-b border-white/5 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-3xl font-serif italic text-white">Privileged <span className="gold-text">Briefings</span></h3>
            <p className="text-white/40 max-w-sm font-light leading-relaxed">
              Subscribe to receive exclusive market reports and off-market asset notifications.
            </p>
          </div>
          <div className="w-full max-w-md">
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Enter private email..."
                className="w-full h-16 bg-white/[0.03] border border-white/10 rounded-none px-8 focus:outline-none focus:border-gold-500/50 transition-all font-light text-white"
              />
              <button className="absolute right-0 top-0 h-16 px-8 bg-gold-500 hover:bg-gold-600 text-black font-extrabold uppercase tracking-widest text-[9px] transition-all">
                Subscribe
              </button>
            </div>
            <p className="text-[8px] uppercase tracking-[0.3em] mt-4 text-white/20 text-center lg:text-left">Strictly confidential • GDPR Compliant</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Column */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 border border-gold-500/50 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
                <Building2 className="-rotate-45 group-hover:rotate-0 transition-all duration-500 text-gold-500" size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-serif font-bold tracking-[0.1em] text-white leading-none uppercase">
                  ESTATE<span className="text-gold-500">FLOW</span>
                </span>
                <span className="text-[7px] uppercase tracking-[0.5em] text-gold-500/60 mt-2">Elite Concierge Realty</span>
              </div>
            </Link>
            <p className="text-white/40 font-serif italic text-lg leading-relaxed pr-8">
              "Excellence is not an act, but a habit. Curating the world's most exceptional living spaces for the global elite."
            </p>
            <div className="flex gap-6 text-gold-500/40">
              <Instagram size={18} className="hover:text-gold-500 transition-colors cursor-pointer" />
              <Twitter size={18} className="hover:text-gold-500 transition-colors cursor-pointer" />
              <Facebook size={18} className="hover:text-gold-500 transition-colors cursor-pointer" />
              <Globe size={18} className="hover:text-gold-500 transition-colors cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold-500">Collections</h4>
            <ul className="space-y-4">
              {[
                { name: 'Signature Villas', slug: 'villa' },
                { name: 'Sky Penthouses', slug: 'penthouse' },
                { name: 'Urban Lofts', slug: 'loft' },
                { name: 'Historic Manors', slug: 'manor' },
                { name: 'Private Islands', slug: 'island' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={`/listings?type=${item.slug}`} className="text-white/40 hover:text-white transition-all text-[11px] uppercase tracking-widest font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold-500">Concierge</h4>
            <ul className="space-y-4">
              {[
                { name: 'Global Portfolio', path: '/listings' },
                { name: 'Private Liaisons', path: '/agents' },
                { name: 'Strategic Audit', path: '/compare' },
                { name: 'EMI Calculator', path: '/calculator' },
                { name: 'Private Vault', path: '/saved' },
                { name: 'The Journal', path: '/blog' },
                { name: 'Our Heritage', path: '/about' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.path} className="text-white/40 hover:text-white transition-all text-[11px] uppercase tracking-widest font-bold">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8 bg-gold-500/[0.03] p-8 -m-8 border border-gold-500/5">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.4em] text-gold-500">Liaison Offices</h4>
            <div className="space-y-6">
              <div className="flex gap-4 group">
                <MapPin size={18} className="text-gold-500 shrink-0 mt-1" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 leading-relaxed group-hover:text-white transition-colors">
                  Mayfair, London <br />
                  Fifth Ave, New York <br />
                  The Palm, Dubai
                </p>
              </div>
              <div className="flex gap-4 group">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">+44 20 7946 0000</p>
              </div>
              <div className="flex gap-4 group">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">concierge@estateflow.com</p>
              </div>
            </div>
            <Link 
              to="/contact"
              className="w-full bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[9px] h-12 rounded-none mt-4 flex items-center justify-center"
            >
              Private Inquiry
            </Link>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] uppercase tracking-[0.3em] text-white/20">
            © 2026 EstateFlow • Proprietary Concept by Atelier Royale • All Rights Reserved
          </p>
          <div className="flex gap-10 text-[9px] uppercase tracking-[0.2em] font-bold text-white/30">
            <a href="#" className="hover:text-gold-500 transition-colors">Privacy Protocal</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Terms of Liaison</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
