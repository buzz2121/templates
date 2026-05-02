import { Instagram, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-40 pb-20 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 aspect-square bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-start mb-40">
          <div className="lg:col-span-5 space-y-10">
            <h3 className="text-5xl font-serif tracking-[0.1em]">BUZZ <br /><span className="italic opacity-60">Management</span></h3>
            <p className="max-w-md text-white/70 leading-[2] font-light italic text-lg">
              For over three decades, we have been the silent conductors behind the world's most breathtaking celebrations. Welcome to the interactive experience.
            </p>
            <div className="flex gap-6 pt-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all"><Instagram size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all"><Twitter size={20} /></a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:-translate-y-1 transition-all"><Youtube size={20} /></a>
            </div>
          </div>
          
          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase">Navigation</h4>
            <ul className="space-y-5 text-sm text-white/50 tracking-widest uppercase font-bold">
              <li><Link to="/about" className="hover:text-gold transition-colors">The Vision</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-gold transition-colors">Portfolios</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Connect</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase">Programs</h4>
            <ul className="space-y-5 text-sm text-white/50 tracking-widest uppercase font-bold">
              <li><a href="#" className="hover:text-gold transition-colors">Mentorship</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Workshops</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Press Kits</a></li>
            </ul>
          </div>

          <div className="lg:col-span-3 lg:text-right space-y-8">
            <h4 className="text-gold text-[10px] font-bold tracking-[0.5em] uppercase">HQ</h4>
            <p className="text-white/70 text-sm leading-loose uppercase tracking-widest font-bold">
              Los Angeles <br />New York <br />London
            </p>
            <a href="mailto:hello@buzzmanagement.com" className="block text-2xl font-serif italic text-white/80 hover:text-gold transition-colors">hello@buzzmanagement.com</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/10 gap-8 text-[10px] tracking-[0.5em] uppercase text-white/20 font-bold">
          <p>&copy; {new Date().getFullYear()} BUZZ MANAGEMENT GLOBAL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-12">
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p>DESIGNED BY <a href="https://www.torebentsen.com/" target="_blank" className="text-gold">TORE BENTSEN</a></p>
        </div>
      </div>
    </footer>
  );
}
