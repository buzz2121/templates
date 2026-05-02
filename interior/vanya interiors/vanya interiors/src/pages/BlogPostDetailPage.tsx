import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { blogPosts } from '../data/content';
import { ArrowLeft, Clock, Calendar, Share2, Tag, ChevronRight } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function BlogPostDetailPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-luxury-cream">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-luxury-charcoal mb-6">Article Not Found</h1>
          <Link to="/blog" className="text-luxury-gold border-b border-luxury-gold pb-1 uppercase tracking-widest text-xs font-black">
            Back to Journal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen">
      <PageHero 
        title={post.title}
        subtitle={post.category}
        italicWord="Insights"
        image={post.image}
      />

      <div className="container mx-auto px-6 max-w-4xl py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-luxury-charcoal/60 hover:text-luxury-gold transition-colors mb-12 group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs uppercase tracking-widest font-bold">Back to Journal</span>
        </Link>

        {/* Article Meta */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center gap-8 py-8 border-y border-luxury-charcoal/5 mb-16"
        >
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-luxury-charcoal text-white rounded-full flex items-center justify-center text-luxury-gold italic font-serif">V</div>
              <div>
                 <p className="text-[10px] uppercase tracking-widest font-black text-luxury-charcoal">Vanya Malhotra</p>
                 <p className="text-[8px] uppercase tracking-widest text-luxury-charcoal/40">Founding Designer</p>
              </div>
           </div>
           <div className="flex items-center gap-3 text-luxury-charcoal/40">
              <Calendar size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{post.date}</span>
           </div>
           <div className="hidden md:flex items-center gap-3 text-luxury-charcoal/40">
              <Clock size={14} />
              <span className="text-[10px] uppercase tracking-widest font-bold">6 Min Read</span>
           </div>
        </motion.div>

        {/* Content */}
        <motion.article 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="prose prose-luxury lg:prose-xl max-w-none mb-24"
        >
           <div className="text-luxury-charcoal/80 leading-relaxed space-y-8 text-2xl font-serif italic mb-16 text-center max-w-2xl mx-auto">
             "{post.excerpt}"
           </div>
           
           <div className="text-luxury-charcoal/70 leading-loose space-y-12 text-lg font-light">
             <p>
                Every architectural vision begins with a silent conversation between the designer and the void. In our studio, this dialogue is rooted in centuries of Indian craftsmanship, translated for a modern context. 
             </p>
             <div className="aspect-video overflow-hidden rounded-sm my-16 shadow-2xl">
               <img src={post.image} alt="Process Detail" className="w-full h-full object-cover" />
             </div>
             <h3 className="text-3xl font-serif text-luxury-charcoal italic mt-16 mb-8 text-center">The Soul of the Material</h3>
             <p>
                Materials are the vocabulary of design. We believe that true luxury lies in the authenticity of texture—the coolness of Himalayan white marble, the warm grain of reclaimed teak from coastal workshops, and the tactile richness of hand-spun silk. These aren't just finishes; they are the vessels of stories.
             </p>
             <div className="bg-luxury-white p-12 border border-luxury-charcoal/5 italic my-16 text-xl text-center shadow-lg relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-px bg-luxury-gold" />
                "Architectural integrity is the byproduct of honesty. When we allow materials to speak their natural language, the result is an environment that feels both grounded and transcendental."
             </div>
             <p>
                Integrating these traditional elements into a contemporary layout requires more than just placement; it requires a deep understanding of spatial psychology. How does light interact with the weave? How does the echo of stone enhance the stillness?
             </p>
           </div>
        </motion.article>

        {/* Footer info */}
        <div className="border-t border-luxury-charcoal/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-widest font-black text-luxury-gold">Share this vision:</span>
              <div className="flex gap-4">
                 <button className="w-10 h-10 rounded-full border border-luxury-charcoal/10 flex items-center justify-center text-luxury-charcoal/40 hover:text-luxury-gold hover:border-luxury-gold transition-colors duration-500"><Share2 size={14} /></button>
              </div>
           </div>
           <div className="flex items-center gap-6">
              {['Design Strategy', 'Materials'].map(t => (
                <span key={t} className="text-[10px] uppercase tracking-widest font-black text-luxury-charcoal/40 flex items-center gap-2">
                  <Tag size={12} className="text-luxury-gold/50" /> {t}
                </span>
              ))}
           </div>
        </div>

        {/* Navigation */}
        <div className="mt-40 pt-16 border-t border-luxury-charcoal/5">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="group cursor-pointer">
                 <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-6 flex items-center gap-3">
                    <ArrowLeft size={10} /> Previous Insight
                 </p>
                 <h4 className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-500 line-clamp-2">The Philosophy of Stillness in Minimalist Interiors</h4>
              </div>
              <div className="group cursor-pointer text-right">
                 <p className="text-[9px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-6 flex items-center justify-end gap-3">
                    Next Insight <ChevronRight size={10} />
                 </p>
                 <h4 className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-500 line-clamp-2">Integrating Circadian Lighting in Residential Spaces</h4>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
