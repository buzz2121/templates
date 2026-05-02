
import React from 'react';
import { Flower2, Instagram, Twitter, Facebook, Mail, Phone, MapPin, Check, Flower, Gift, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white/30 backdrop-blur-md border-t border-stone-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-12 mb-16 overflow-x-auto no-scrollbar pb-8 border-b border-stone-100">
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2.5 bg-stone-50 rounded-xl"><Check size={14} className="text-primary" /></div>
            <span className="text-[10px] font-bold text-stone-900 uppercase tracking-[0.25em]">Same-Day Delivery</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2.5 bg-stone-50 rounded-xl"><Flower size={14} className="text-primary" /></div>
            <span className="text-[10px] font-bold text-stone-900 uppercase tracking-[0.25em]">Artisan Quality</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <div className="p-2.5 bg-stone-50 rounded-xl"><ShieldCheck size={14} className="text-emerald-500" /></div>
            <span className="text-[10px] font-bold text-stone-900 uppercase tracking-[0.25em]">Secure Promise</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-stone-900 flex items-center justify-center text-white text-sm shadow-xl">❀</div>
              <span className="text-2xl font-serif text-stone-900 tracking-tight italic">Bloom & Petal</span>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed max-w-xs italic font-light">
              Curating luxury floral experiences for life's most meaningful moments. 
              Our gardens are filled with love and precision artistry.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-8 uppercase tracking-[0.3em] text-[9px]">The Gallery</h4>
            <ul className="space-y-5 text-xs text-stone-400 font-bold uppercase tracking-widest">
              <li><Link to="/about" className="hover:text-primary transition-colors">Our Story</Link></li>
              <li><Link to="/shop" className="hover:text-primary transition-colors">Artisanal Shop</Link></li>
              <li><Link to="/subscriptions" className="hover:text-primary transition-colors">Seasonal Plans</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-8 uppercase tracking-[0.3em] text-[9px]">Client Care</h4>
            <ul className="space-y-5 text-xs text-stone-400 font-bold uppercase tracking-widest">
              <li><Link to="/track-order" className="hover:text-primary transition-colors">Track Order</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">Floral FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Get in Touch</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-end justify-start">
            <div className="flex gap-4">
              <motion.div 
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-2xl border border-stone-100 flex items-center justify-center bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer text-stone-900 font-bold text-[10px] italic"
              >
                IG
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="w-12 h-12 rounded-2xl border border-stone-100 flex items-center justify-center bg-white shadow-sm hover:shadow-xl transition-all cursor-pointer text-stone-900 font-bold text-[10px] italic"
              >
                TW
              </motion.div>
            </div>
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-stone-100">
          <p className="text-[9px] text-stone-400 uppercase tracking-[0.4em] font-bold">
            © 2026 Bloom & Petal • Crafted for Pure Emotion
          </p>
          <div className="flex gap-8">
            <span className="text-[9px] text-stone-300 uppercase tracking-widest cursor-pointer hover:text-stone-500 transition-colors">Privacy</span>
            <span className="text-[9px] text-stone-300 uppercase tracking-widest cursor-pointer hover:text-stone-500 transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

