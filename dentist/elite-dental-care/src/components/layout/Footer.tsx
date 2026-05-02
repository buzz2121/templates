import { Facebook, Instagram, Twitter, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-32 bg-brand text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="col-span-1 md:col-span-2 text-left">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand">
                  <div className="w-3 h-3 border-2 border-brand rotate-45" />
                </div>
                <span className="font-sans font-bold text-white text-2xl tracking-tighter">ELITE DENTAL</span>
              </div>
              <p className="text-white/60 max-w-sm mb-12 text-sm leading-relaxed font-medium">
                Established as the pinnacle of dental care in Dubai, Elite Dental Care combines artistry with science to redefine your smile journey.
              </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div key={i} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent hover:bg-white/5 transition-all cursor-pointer">
                  <Icon size={20} />
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-left">
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-10">Exploration</h4>
            <ul className="space-y-4 text-white/50 text-xs font-bold uppercase tracking-widest">
              <li><Link to="/services" className="hover:text-white transition-all">Atelier Services</Link></li>
              <li><Link to="/doctors" className="hover:text-white transition-all">Clinical Team</Link></li>
              <li><Link to="/about" className="hover:text-white transition-all">Patient Concierge</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-all">Media Kit</Link></li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-accent font-bold text-xs uppercase tracking-widest mb-10">Private Concierge</h4>
            <p className="text-white/50 text-[10px] font-bold uppercase tracking-widest mb-6">Receive exclusive dental health insights.</p>
            <div className="flex gap-3">
              <input type="email" placeholder="Email Address" className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-xs w-full text-white placeholder:text-white/20 focus:ring-1 focus:ring-accent outline-none transition-all" />
              <button type="button" className="bg-accent text-white w-12 rounded-xl flex items-center justify-center hover:bg-accent-dark transition-colors"><ChevronRight size={18}/></button>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-white/30 gap-8">
          <p>© 2026 Elite Dental Care. Artisanal Dentistry. All Rights Reserved.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">Legal</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
