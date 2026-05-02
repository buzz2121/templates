import { motion } from 'motion/react';
import { ArrowRight, Calendar, User, Clock, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "The Architecture of Silence: Modernist Desert Sanctuaries",
    excerpt: "Exploring the rise of minimalist architecture in desert landscapes and the psychological impact of open space.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    category: "Design",
    author: "Elena Rodriguez",
    date: "April 15, 2026",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "Global Wealth Hubs: Where the Elite are Investing in 2026",
    excerpt: "A deep dive into the emerging real estate markets across Southeast Asia and the Mediterranean.",
    image: "https://images.unsplash.com/photo-1545324418-f1d3ac1ef739?q=80&w=800&auto=format&fit=crop",
    category: "Investment",
    author: "Marcus Chen",
    date: "March 28, 2026",
    readTime: "12 min read"
  },
  {
    id: 3,
    title: "Ancestral Luxury: Restoring Victorian Estates for Modern Living",
    excerpt: "How to preserve the soul of historical assets while integrating 21st-century smart home technology.",
    image: "https://images.unsplash.com/photo-1512915922686-57c11f9ad6b3?q=80&w=800&auto=format&fit=crop",
    category: "Restoration",
    author: "James Wilson",
    date: "March 12, 2026",
    readTime: "15 min read"
  }
];

export default function Blog() {
  return (
    <div className="pt-32 pb-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-24 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-px bg-gold-500/30" />
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.5em]">Intellectual Assets</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif leading-none italic"
            >
              The <span className="gold-text">Journal</span>
            </motion.h1>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hidden md:block text-white/40 max-w-sm text-right font-light italic font-serif"
          >
            Insights into global architecture, strategic investment, and the pursuit of exceptional living.
          </motion.p>
        </div>

        {/* Featured Post */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[21/9] rounded-[3rem] overflow-hidden group mb-24 cursor-pointer"
        >
          <img 
            src="https://images.unsplash.com/photo-1600607687940-477a6a698a63?q=80&w=1920&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2000ms]" 
            alt="Featured Post"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-12">
            <div className="space-y-4 max-w-2xl">
              <Badge className="bg-gold-500 text-black px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[9px] mb-2">Editorial Choice</Badge>
              <h2 className="text-4xl md:text-6xl font-serif italic text-white line-tight">The Sustainable Super-Villa: A Legacy for Generations</h2>
              <p className="text-white/60 font-light text-lg line-clamp-2">How current architectural trends are shifting towards total energetic independence without compromising on the aesthetics of luxury.</p>
            </div>
            <Button className="h-20 w-20 md:h-32 md:w-32 rounded-full bg-gold-500 hover:bg-gold-600 text-black transition-all hover:scale-110 active:scale-95 group">
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-white/5">
                <img 
                  src={post.image} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                  alt={post.title} 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1545324418-f1d3ac1ef739?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-6 left-6">
                   <Badge className="bg-black/60 backdrop-blur-xl border border-white/10 text-white font-bold uppercase tracking-widest text-[8px] px-4 py-1.5 rounded-full">
                     {post.category}
                   </Badge>
                </div>
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                   <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-black/50 text-white hover:text-gold-500 border border-white/10">
                        <Bookmark size={14} />
                      </Button>
                      <Button variant="ghost" size="icon" className="w-10 h-10 rounded-full bg-black/50 text-white hover:text-gold-500 border border-white/10">
                        <Share2 size={14} />
                      </Button>
                   </div>
                </div>
              </div>

              <div className="space-y-4 px-2">
                <div className="flex items-center gap-4 text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">
                   <span className="flex items-center gap-2">
                      <Calendar size={12} className="text-gold-500/50" /> {post.date}
                   </span>
                   <span className="flex items-center gap-2">
                      <Clock size={12} className="text-gold-500/50" /> {post.readTime}
                   </span>
                </div>
                <h3 className="text-2xl font-serif italic text-white group-hover:text-gold-500 transition-colors leading-snug">
                   {post.title}
                </h3>
                <p className="text-white/40 font-light text-sm line-clamp-2 leading-relaxed">
                   {post.excerpt}
                </p>
                <div className="pt-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden grayscale border border-white/10">
                       <img 
                         src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" 
                         alt="Author" 
                         className="w-full h-full object-cover" 
                         onError={(e) => {
                           const target = e.target as HTMLImageElement;
                           target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100";
                         }}
                       />
                    </div>
                   <span className="text-[10px] uppercase font-bold tracking-widest text-white/60">{post.author}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 p-12 md:p-20 bg-gradient-to-br from-zinc-900/40 to-black border border-white/5 rounded-[4rem] flex flex-col lg:flex-row items-center justify-between gap-12 group">
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif italic">Privileged <span className="gold-text">Insights</span></h2>
            <p className="text-white/40 max-w-md font-light leading-relaxed">
              Subscribe to our monthly briefing for exclusive asset reports, market analytics, and off-market opportunities.
            </p>
          </div>
          <div className="w-full max-w-md space-y-4">
             <div className="relative group/input">
                <input 
                  type="email" 
                  placeholder="Your private email..."
                  className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl px-8 focus:outline-none focus:border-gold-500/50 transition-all font-light"
                />
                <Button className="absolute right-2 top-2 bottom-2 bg-gold-500 hover:bg-gold-600 text-black px-8 rounded-xl font-extrabold uppercase tracking-widest text-[9px]">
                   Subscribe
                </Button>
             </div>
             <p className="text-[8px] uppercase tracking-widest text-center lg:text-left text-white/20 font-bold">Encrypted connection. No unauthorized disclosure.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
