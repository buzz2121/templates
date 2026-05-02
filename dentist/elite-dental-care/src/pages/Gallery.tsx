import { Search, Sparkles, ImageIcon, Eye, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const categories = ["All", "Smile Makeover", "Veneers", "Orthodontics", "Implants"];

export default function Gallery() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => ({
    id: i,
    url: `https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200&sig=${i + 100}`,
    thumb: `https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600&sig=${i + 100}`,
    title: `Case Study #${1000 + i}`,
    category: "Smile Transformation"
  }));

  return (
    <div className="py-32 bg-white min-h-screen text-left">
      <div className="max-w-7xl mx-auto px-12">
        <div className="mb-20 text-center max-w-2xl mx-auto">
          <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Smile Gallery</span>
          <h2 className="text-5xl text-slate-900 tracking-tight leading-tight mb-8">Visual Mastery of <span className="font-serif italic text-brand">Craft</span>.</h2>
          <p className="text-slate-500 mb-12">Witness the life-changing transformations our specialists deliver every day through precise clinical artistry.</p>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-brand text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {galleryItems.map((item) => (
             <motion.div 
               layoutId={`card-${item.id}`}
               key={item.id} 
               onClick={() => setSelectedImage(item.url)}
               className="relative aspect-[3/4] rounded-[2rem] overflow-hidden group cursor-pointer border border-slate-100 bg-slate-50"
             >
               <img 
                  src={item.thumb} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
               <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4">
                    <Eye className="text-white" size={24} />
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                  <p className="text-xs text-white/80 uppercase tracking-widest font-black">{item.category}</p>
               </div>
             </motion.div>
           ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            >
              <button 
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              >
                <X size={40} strokeWidth={1.5} />
              </button>
              
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Enlarged view" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Case Study - Large Format */}
        <div className="mt-32">
           <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 overflow-hidden relative">
              <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Featured Transformation</span>
                    <h2 className="text-5xl text-white tracking-tight leading-tight mb-8 italic font-serif">The Royal Makeover.</h2>
                    <p className="text-white/60 text-lg mb-12 leading-relaxed">
                       A comprehensive 6-month treatment plan involving digital smile design, orthodontic alignment, and custom porcelain veneers. The result is a natural, radiant smile that perfectly complements her facial features.
                    </p>
                    <div className="grid grid-cols-2 gap-8 mb-12 border-t border-white/10 pt-10">
                       <div>
                          <span className="block text-accent text-sm font-bold uppercase tracking-widest mb-2">Duration</span>
                          <span className="text-white font-medium">6 Months</span>
                       </div>
                       <div>
                          <span className="block text-accent text-sm font-bold uppercase tracking-widest mb-2">Specialists</span>
                          <span className="text-white font-medium">Dr. Aditi & Dr. Thawani</span>
                       </div>
                    </div>
                    <button className="bg-brand text-white px-12 py-5 rounded-2xl font-bold uppercase text-[10px] tracking-widest hover:bg-white hover:text-slate-900 transition-all">View Full Case Study</button>
                 </div>
                 <div className="relative grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl scale-105">
                       <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase text-white tracking-widest">Before</div>
                       <img src="https://images.unsplash.com/photo-1579684388669-c2c31e89a1ce?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl -translate-y-8">
                       <div className="absolute top-4 left-4 bg-brand px-3 py-1 rounded-full text-[8px] font-black uppercase text-white tracking-widest">After</div>
                       <img src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover" />
                    </div>
                 </div>
              </div>
              <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 blur-3xl pointer-events-none" />
           </div>
        </div>

        {/* Instagram Feed Placeholder */}
        <div className="mt-32 text-center">
           <div className="flex items-center justify-center gap-4 mb-8">
              <ImageIcon className="text-brand" />
              <h3 className="text-2xl font-bold text-slate-900 uppercase tracking-widest">Follow @PrecisionElite</h3>
           </div>
           <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {[1,2,3,4,5,6].map(i => (
                <div key={i} className="aspect-square bg-slate-50 rounded-2xl overflow-hidden">
                   <img 
                    src={`https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=300&sig=ig-${i}`} 
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-all cursor-pointer"
                   />
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
