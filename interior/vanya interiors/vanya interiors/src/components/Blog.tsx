import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const posts = [
  {
    title: 'The Revival of Indian Craftsmanship',
    date: 'March 12, 2026',
    category: 'Heritage',
    image: '/images/img_10.jpg'
  },
  {
    title: 'Modern Vastu: Harmony in Design',
    date: 'February 28, 2026',
    category: 'Philosophy',
    image: '/images/img_20.jpg'
  },
  {
    title: 'Textiles of India: A Luxury Narrative',
    date: 'February 15, 2026',
    category: 'Materials',
    image: '/images/img_9.jpg'
  }
];

export default function Blog() {
  return (
    <section className="py-32 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-4 block"
            >
              Studio Insights
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-serif text-luxury-charcoal"
            >
              Design Journal
            </motion.h2>
          </div>
          <Link 
            to="/blog"
            className="text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal border-b border-luxury-charcoal pb-1 hover:text-luxury-gold hover:border-luxury-gold transition-colors"
          >
            View All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-sm mb-6">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold">{post.category}</span>
                  <span className="w-1 h-1 bg-luxury-charcoal/20 rounded-full" />
                  <span className="text-[10px] uppercase tracking-widest text-luxury-charcoal/40">{post.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
                  {post.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
