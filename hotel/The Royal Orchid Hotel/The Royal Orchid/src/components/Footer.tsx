import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-royal-white border-t border-royal-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-royal-white/10 pb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex flex-col items-start mb-6">
              <span className="font-serif-cormorant text-3xl tracking-[0.2em] uppercase text-royal-gold leading-none">The Royal</span>
              <span className="font-sans text-xs tracking-[0.4em] uppercase text-royal-white mt-2">Orchid</span>
            </Link>
            <p className="text-royal-white/50 text-sm font-light mt-6 max-w-xs leading-relaxed">
              Experience the pinnacle of luxury, where royal heritage meets modern elegance.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-royal-gold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm font-light text-royal-white/70">
              <li>1 Royal Avenue, Prestige District</li>
              <li>Mumbai, Maharashtra 400001, India</li>
              <li className="pt-2">T: +91 22 1234 5678</li>
              <li>E: reservations@royalorchid.com</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-royal-gold mb-6">The Hotel</h4>
            <ul className="space-y-3 text-sm font-light text-royal-white/70">
              <li><Link to="/hotels" className="hover:text-royal-gold transition-colors">Our Story</Link></li>
              <li><Link to="/rooms" className="hover:text-royal-gold transition-colors">Accommodations</Link></li>
              <li><Link to="/dining" className="hover:text-royal-gold transition-colors">Dining</Link></li>
              <li><Link to="/offers" className="hover:text-royal-gold transition-colors">Offers</Link></li>
              <li><Link to="/events" className="hover:text-royal-gold transition-colors">Events</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-sans text-[10px] uppercase tracking-widest text-royal-gold mb-6">Newsletter</h4>
            <p className="text-sm font-light text-royal-white/70 mb-4">Subscribe to receive exclusive news and offers.</p>
            <form className="flex border-b border-royal-white/20 pb-2 focus-within:border-royal-gold transition-colors">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-transparent border-none outline-none text-sm font-light text-royal-white w-full placeholder:text-royal-white/30"
              />
              <button type="button" className="text-[10px] uppercase tracking-widest text-royal-gold hover:text-royal-white transition-colors">
                Subscribe
              </button>
            </form>

            <div className="flex gap-4 mt-8 text-royal-white/50">
              <a href="#" className="hover:text-royal-white transition-colors"><Instagram size={18} /></a>
              <a href="#" className="hover:text-royal-white transition-colors"><Facebook size={18} /></a>
              <a href="#" className="hover:text-royal-white transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-[10px] uppercase tracking-widest text-royal-white/40">
          <p>&copy; {new Date().getFullYear()} The Royal Orchid. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-royal-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-royal-white transition-colors">Terms of Service</a>
            <span className="text-royal-white/20">|</span>
            <span className="text-royal-gold/60">Developed by <span className="text-royal-gold">Buzz Entertainment</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
