import { Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxury-charcoal text-luxury-beige py-20 transition-colors duration-500">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link to="/" className="text-3xl font-serif font-bold tracking-tighter">
              VANYA<span className="text-luxury-gold">.</span>
            </Link>
            <p className="text-luxury-beige/50 leading-relaxed max-w-xs">
              Blending Indian heritage with contemporary luxury to create bespoke interiors that tell your unique story.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-luxury-beige/40 hover:text-luxury-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-luxury-beige/40 hover:text-luxury-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-luxury-beige/40 hover:text-luxury-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-luxury-beige/40 hover:text-luxury-gold transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Quick Links</h4>
            <ul className="space-y-4 text-luxury-beige/60">
              <li><Link to="/portfolio" className="hover:text-luxury-gold transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-luxury-gold transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-luxury-gold transition-colors">About Studio</Link></li>
              <li><Link to="/blog" className="hover:text-luxury-gold transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-luxury-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Services</h4>
            <ul className="space-y-4 text-luxury-beige/60">
              <li><Link to="/services/interior-design" className="hover:text-luxury-white transition-colors">Interior Design</Link></li>
              <li><Link to="/services/furniture-curation" className="hover:text-luxury-white transition-colors">Furniture Curation</Link></li>
              <li><Link to="/services/space-planning" className="hover:text-luxury-white transition-colors">Space Planning</Link></li>
              <li><Link to="/services/renovation" className="hover:text-luxury-white transition-colors">Renovation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-8 text-luxury-gold">Studio</h4>
            <ul className="space-y-4 text-luxury-beige/60 text-sm">
              <li>DLF Phase 5, Golf Course Road</li>
              <li>Gurugram, Haryana 122002</li>
              <li>India</li>
              <li className="pt-4 text-luxury-beige/80">+91 11 4567 8900</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-luxury-beige/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-luxury-beige/30">
          <p>© 2026 Vanya Luxury Interiors. All Rights Reserved.</p>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-luxury-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-luxury-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
        <div className="mt-8 text-center text-[10px] uppercase tracking-widest text-luxury-beige/40">
          Designed & Developed by - Buzz Entertainment Media Pvt. Ltd.
        </div>
      </div>
    </footer>
  );
}
