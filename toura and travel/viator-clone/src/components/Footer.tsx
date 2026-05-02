import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Globe, CircleHelp as HelpCircle } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
          {/* Support */}
          <div>
            <h5 className="font-extrabold text-[10px] uppercase tracking-[0.2em] mb-8 text-yellow-400">Guest Support</h5>
            <ul className="flex flex-col gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
              <li className="hover:text-white cursor-pointer transition-colors">Safety Info</li>
              <li className="hover:text-white cursor-pointer transition-colors">Cancellations</li>
              <li className="hover:text-white cursor-pointer transition-colors">Report Issues</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5 className="font-extrabold text-[10px] uppercase tracking-[0.2em] mb-8 text-yellow-400">Corporate</h5>
            <ul className="flex flex-col gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">About Viator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-white cursor-pointer transition-colors">Newsroom</li>
              <li className="hover:text-white cursor-pointer transition-colors">Affiliates</li>
            </ul>
          </div>

          {/* Suppliers */}
          <div>
            <h5 className="font-extrabold text-[10px] uppercase tracking-[0.2em] mb-8 text-yellow-400">Partners</h5>
            <ul className="flex flex-col gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <li className="hover:text-white cursor-pointer transition-colors">Marketplace</li>
              <li className="hover:text-white cursor-pointer transition-colors">Supplier Login</li>
              <li className="hover:text-white cursor-pointer transition-colors">Partner Central</li>
            </ul>
          </div>

          {/* Trustpilot */}
          <div>
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 backdrop-blur-md shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-green-500/5 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-green-500/10 transition-colors" />
              <div className="flex items-center gap-2 mb-6">
                 <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                 </div>
                 <span className="font-black text-2xl text-white tracking-tighter italic">Trustpilot</span>
              </div>
              <div className="flex gap-1.5 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 bg-[#00b67a] rounded-md flex items-center justify-center">
                     <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-white"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  </div>
                ))}
              </div>
              <p className="text-[9px] text-slate-300 font-black uppercase tracking-[0.1em] leading-relaxed">Excellent reviews from travelers world-wide.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
              <Globe size={16} />
              <span>English (US)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400 cursor-pointer">
              <span>$ USD</span>
            </div>
          </div>

          <div className="flex gap-6 text-slate-400">
            <Facebook size={20} className="hover:text-white cursor-pointer" />
            <Twitter size={20} className="hover:text-white cursor-pointer" />
            <Instagram size={20} className="hover:text-white cursor-pointer" />
            <Youtube size={20} className="hover:text-white cursor-pointer" />
          </div>

          <div className="text-slate-500 text-xs">
            © 2026 Viator Clone, Inc. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
