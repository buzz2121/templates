import { motion } from 'motion/react';
import { blogPosts } from '../data/content';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-luxury-cream">
      <PageHero 
        title="Design"
        subtitle="Journal & Insights"
        italicWord="Discourse"
        image="/images/img_37.jpg"
      />

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 bg-luxury-white shadow-2xl rounded-sm overflow-hidden"
          >
            <div className="aspect-video lg:aspect-auto">
              <img 
                src="/images/img_1.jpg" 
                alt="Featured Post" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-12 md:p-20 flex flex-col justify-center space-y-8">
              <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest font-black text-luxury-gold">
                <span>Featured Article</span>
                <span className="w-8 h-px bg-luxury-gold/30" />
                <span>Modern Living</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">The Evolution of the Indian Courtyard</h2>
              <p className="text-luxury-charcoal/60 leading-relaxed text-lg">
                How traditional Vastu-driven layouts are being reimagined for high-density luxury apartments in modern metros.
              </p>
              <Link to="#" className="inline-flex items-center gap-4 text-xs uppercase tracking-[0.3em] font-black text-luxury-charcoal hover:text-luxury-gold transition-colors">
                Read Abstract <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group space-y-6"
              >
                <Link to={`/blog/${post.id}`} className="block aspect-[16/10] overflow-hidden rounded-sm bg-luxury-charcoal/5">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:grayscale-0 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </Link>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[9px] uppercase tracking-widest font-bold text-luxury-gold">
                    <span className="flex items-center gap-2"><Calendar size={10} /> {post.date}</span>
                    <span className="flex items-center gap-2"><User size={10} /> By Admin</span>
                  </div>
                  <h3 className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors duration-300">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-sm text-luxury-charcoal/60 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-luxury-charcoal/10 flex justify-between items-center">
                    <div className="flex gap-2">
                       {['Design', 'Interiors'].map(tag => (
                         <span key={tag} className="text-[8px] uppercase tracking-tighter text-luxury-charcoal/40 flex items-center gap-1">
                           <Tag size={8} /> {tag}
                         </span>
                       ))}
                    </div>
                    <Link to={`/blog/${post.id}`} className="text-xs uppercase tracking-widest font-black text-luxury-charcoal group-hover:text-luxury-gold transition-all duration-300">
                      Read
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-luxury-cream">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="w-full p-12 md:p-24 bg-luxury-charcoal text-center space-y-12 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-luxury-gold/5 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10 space-y-6">
              <span className="text-xs uppercase tracking-[0.6em] text-luxury-gold font-black block">The Private Circle</span>
              <h2 className="text-5xl md:text-7xl font-serif text-white">Subscribe to the Edition</h2>
              <p className="text-white/40 max-w-2xl mx-auto text-lg leading-relaxed">Monthly curated design trends, architectural reveals, and exclusive invitations to studio showcases.</p>
            </div>
            <form className="relative z-10 max-w-2xl mx-auto flex flex-col md:flex-row gap-6">
              <div className="flex-1 relative group">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full h-16 bg-white/5 border border-white/10 px-8 text-white focus:outline-none focus:border-luxury-gold transition-all duration-500 placeholder:text-white/20"
                  required
                />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-luxury-gold group-focus-within:w-full transition-all duration-500" />
              </div>
              <button className="h-16 px-16 bg-luxury-gold text-white text-xs uppercase tracking-[0.4em] font-black hover:bg-white hover:text-luxury-charcoal transition-all duration-500 shadow-2xl group flex items-center justify-center gap-4">
                Join <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </button>
            </form>
            <p className="relative z-10 text-[10px] uppercase tracking-[0.3em] text-white/20">Respecting your privacy as much as your architecture.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
