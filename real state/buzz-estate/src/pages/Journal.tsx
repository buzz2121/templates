import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Search, ChevronRight, Share2, Calendar, Tag } from 'lucide-react';
import { JOURNAL_ENTRIES } from '../data';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export default function Journal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-32">
      {/* Header */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Corporate Media Centre"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-3xl space-y-6 text-white">
              <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">The Latest From Buzz Estate</span>
              <h1 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter leading-none text-white">Media <br/> <span className="italic text-brand-gold text-white">Centre</span></h1>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed">
                Stay updated with our latest project launches, corporate milestones, and market insights from the heart of the Middle East.
              </p>
            </div>
            
            <div className="w-full lg:w-96">
               <div className="relative group">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gold" size={18} />
                 <input 
                   type="text" 
                   placeholder="Search in news..." 
                   className="w-full bg-white/10 backdrop-blur-md border border-white/20 pl-16 pr-6 py-5 text-xs font-bold uppercase tracking-widest focus:ring-1 focus:ring-brand-gold outline-none text-white placeholder:text-white/40"
                 />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="group cursor-pointer">
                 <div className="aspect-[16/9] bg-brand-surface overflow-hidden relative shadow-luxury">
                    <img 
                      src="https://images.unsplash.com/photo-1577412647305-991150c7d163?auto=format&fit=crop&q=80" 
                      className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-105" 
                      alt="Featured" 
                    />
                    <div className="absolute top-6 left-6 bg-brand-gold text-white text-[10px] uppercase font-black tracking-widest px-4 py-2">
                       Featured Story
                    </div>
                 </div>
                 <div className="pt-10 space-y-6">
                    <div className="flex items-center gap-6 text-[10px] uppercase text-brand-gold font-bold tracking-widest">
                       <span className="flex items-center gap-2"><Tag size={12} /> Corporate</span>
                       <span className="flex items-center gap-2 text-brand-gray/50"><Calendar size={12} /> January 20, 2026</span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-serif tracking-tight leading-tight group-hover:text-brand-gold transition-colors">
                      Buzz Estate Reports Record-Breaking 2025 Financial Results
                    </h2>
                    <p className="text-brand-gray text-lg leading-relaxed max-w-2xl">
                      Exceeding all growth projections as international appetite for Dubai's luxury branded residences reaches unprecedented levels.
                    </p>
                    <Link to="#" className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold border-b border-brand-gold pb-2 group">
                      Read Article <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>

              <div className="space-y-12">
                 {[
                    { title: "Why Fashion-Branded Penthouses are the New Gold Standard", date: "Dec 2025", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" },
                    { title: "Buzz Estate Announces New Hospitality Venture in London", date: "Nov 2025", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" },
                    { title: "Sustainability Initiatives: Green Living in Desert Landscapes", date: "Oct 2025", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" }
                  ].map((news, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-8 group cursor-pointer border-b border-brand-line pb-12">
                       <div className="w-full md:w-56 aspect-[4/3] flex-shrink-0 overflow-hidden">
                          <img 
                            src={news.img} 
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                            alt="News Thumb" 
                          />
                       </div>
                       <div className="space-y-3">
                          <div className="flex items-center gap-4 text-[10px] uppercase text-brand-gold font-bold tracking-widest">
                             <span>Market Update</span>
                             <span className="text-brand-gray/40 italic">{news.date}</span>
                          </div>
                          <h3 className="text-2xl font-serif tracking-tight leading-none group-hover:text-brand-gold transition-colors">
                             {news.title}
                          </h3>
                          <p className="text-brand-gray text-sm line-clamp-2 leading-relaxed">
                             Exploring the synergy between haute couture and architectural design in our latest luxury collections.
                          </p>
                       </div>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

      {/* Grid News */}
      <section className="py-24 bg-brand-surface">
        <div className="container mx-auto px-6">
           <div className="mb-16 reveal-section">
              <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Archives</span>
              <h2 className="text-5xl font-serif mt-4 uppercase">All Updates</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {JOURNAL_ENTRIES.map((entry, i) => (
                <motion.div 
                  key={entry.id}
                  className="group bg-white border border-brand-line hover:shadow-luxury transition-all duration-700 reveal-section cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={entry.image} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" 
                      alt={entry.title} 
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <div className="flex justify-between items-center text-[10px] uppercase text-brand-gold font-black tracking-widest">
                       <span>{entry.category}</span>
                       <span className="text-brand-gray/40">{entry.date}</span>
                    </div>
                    <h3 className="text-2xl font-serif leading-tight group-hover:text-brand-gold transition-colors">{entry.title}</h3>
                    <p className="text-brand-gray text-sm line-clamp-3 leading-relaxed">{entry.excerpt}</p>
                    <div className="pt-4 flex justify-between items-center border-t border-brand-line mt-4">
                       <button className="text-[10px] uppercase tracking-[0.2em] font-bold group-hover:text-brand-gold transition-colors">Read More</button>
                       <Share2 size={14} className="text-brand-gray/30 hover:text-brand-gold transition-colors" />
                    </div>
                  </div>
                </motion.div>
              ))}
           </div>
           
           <div className="mt-20 text-center">
              <Button variant="outline" className="rounded-none border-brand-dark px-16 h-16 uppercase font-bold tracking-[0.3em] text-[10px] hover:bg-brand-gold hover:text-white transition-all shadow-sm">
                 Load More Publications
              </Button>
           </div>
        </div>
      </section>
    </div>
  );
}
