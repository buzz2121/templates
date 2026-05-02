import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    communities: [
      { name: 'Buzz Hills', path: '/estates' },
      { name: 'Buzz Hills 2', path: '/estates' },
      { name: 'Buzz Lagoons', path: '/estates' },
      { name: 'Safa One & Two', path: '/estates' },
      { name: 'Cavalli Tower', path: '/estates' },
      { name: 'Greenview Units', path: '/estates' },
    ],
    sectors: [
      { name: 'Residential', path: '/estates' },
      { name: 'Hospitality', path: '/estates' },
      { name: 'Commercial', path: '/estates' },
      { name: 'Retail', path: '/estates' },
    ],
    quickLinks: [
      { name: 'About Us', path: '/about' },
      { name: 'Investor Relations', path: '/investors' },
      { name: 'Media Centre', path: '/journal' },
      { name: 'Careers', path: '#' },
      { name: 'Contact Us', path: '/about' },
      { name: 'Blogs', path: '/journal' },
    ],
    legal: [
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms & Conditions', path: '#' },
      { name: 'Cookie Policy', path: '#' },
      { name: 'Whistleblower Policy', path: '#' },
    ]
  };

  return (
    <footer className="bg-brand-dark text-white pt-32 pb-12 overflow-hidden relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/[0.02] pointer-events-none -skew-x-12 transform translate-x-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-24">
          <div className="space-y-10 lg:col-span-4">
            <Link to="/" className="inline-block group">
               <div className="flex flex-col">
                 <span className="text-4xl font-black tracking-tighter leading-none text-white font-sans italic group-hover:text-brand-gold transition-colors duration-500">BUZZ ESTATE</span>
                 <div className="h-px w-0 group-hover:w-full bg-brand-gold transition-all duration-700 mt-1" />
               </div>
            </Link>
            
            <p className="text-white/40 text-[11px] leading-relaxed max-w-sm uppercase tracking-[0.2em] font-medium">
              A legacy of uncompromising quality and architectural excellence. Shaping the Middle East's skyline with iconic developments since 2002.
            </p>

            <div className="space-y-4">
              <h5 className="text-[10px] uppercase tracking-[0.3em] font-black text-brand-gold">Connectivity</h5>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter, Linkedin, Youtube].map((Icon, i) => (
                  <a key={i} href="#" className="w-11 h-11 border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold hover:text-brand-dark transition-all duration-500 group">
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-10 border-b border-brand-gold/30 pb-4 inline-block">Communities</h4>
            <ul className="space-y-4">
              {footerLinks.communities.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-brand-gold transition-all duration-300 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-brand-gold transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px] mb-10 border-b border-brand-gold/30 pb-4 inline-block">Sectors</h4>
            <ul className="space-y-4">
              {footerLinks.sectors.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-white/40 hover:text-brand-gold transition-all duration-300 text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group">
                    <span className="w-0 group-hover:w-4 h-px bg-brand-gold transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <div className="bg-white/[0.02] p-10 border border-white/5 space-y-8 backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Mail size={40} className="text-brand-gold" />
              </div>
              
              <div className="space-y-2">
                <h4 className="text-white font-black uppercase tracking-[0.3em] text-[11px]">News Insight</h4>
                <p className="text-[10px] uppercase text-white/30 tracking-widest leading-relaxed font-bold max-w-[200px]">Subscribe for world-class architectural updates and exclusive launches.</p>
              </div>

              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-[10px] font-bold tracking-widest focus:border-brand-gold focus:outline-none transition-colors placeholder:text-white/20"
                />
                <Button className="w-full bg-brand-gold text-brand-dark font-black tracking-[0.3em] uppercase text-[10px] h-14 rounded-none hover:bg-white transition-all duration-700">
                  SUBSCRIBE
                </Button>
              </div>

              <div className="pt-6 grid grid-cols-1 gap-4">
                <div className="flex items-center gap-3 group/info">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/info:bg-brand-gold transition-colors">
                    <Phone size={12} className="text-brand-gold group-hover/info:text-brand-dark transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-white/40">800-BUZZ (2899)</span>
                </div>
                <div className="flex items-center gap-3 group/info">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover/info:bg-brand-gold transition-colors">
                    <MapPin size={12} className="text-brand-gold group-hover/info:text-brand-dark transition-colors" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-white/40">Buzz Park, Dubai, UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Hubs Strip */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 py-16 border-t border-white/5">
           <span className="text-[10px] uppercase tracking-[0.5em] font-black text-brand-gold/50">Global Presence</span>
           <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.3em] font-black text-white/20">
              {['Dubai', 'Riyadh', 'London', 'Toronto', 'Miami', 'Beijing'].map(city => (
                <span key={city} className="hover:text-white transition-colors cursor-default">{city}</span>
              ))}
           </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold text-center md:text-left">
            © {currentYear} BUZZ ESTATE (P.J.S.C). ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.path} className="text-[10px] text-white/20 uppercase tracking-[0.2em] font-bold hover:text-brand-gold transition-colors relative group">
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        {/* Attribution Bar */}
        <div className="mt-16 pt-10 border-t border-white/5 flex flex-col items-center gap-4">
          <div className="w-12 h-px bg-brand-gold/20" />
          <p className="text-[9px] text-white/30 uppercase tracking-[0.3em] font-black text-center">
            Designed & Developed by - <a href="https://buzzentertainment.in/" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:text-white transition-all underline decoration-brand-gold/30 underline-offset-4">Buzz Entertainment Media Pvt. Ltd.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
