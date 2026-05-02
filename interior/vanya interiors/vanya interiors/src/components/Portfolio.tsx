import { motion } from 'motion/react';
import ImageGallery from './ui/image-gallery';

export default function Portfolio() {
  const principles = [
    { title: 'Cultural Resonance', desc: 'Integrating deep Indian soul into clean, contemporary forms for a timeless aesthetic.' },
    { title: 'Material Excellence', desc: 'A dedication to the honest expression of natural stone, hand-finished wood, and raw metal.' },
    { title: 'Living Art', desc: 'Crafting spaces that aren\'t just viewed, but experienced—breathing environments that tell a story.' }
  ];

  return (
    <div id="portfolio">
      <section className="pt-32 pb-12 bg-luxury-cream overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-end mb-24">
            <div className="max-w-2xl">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block"
              >
                Our Design Narrative
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-5xl md:text-7xl font-serif text-luxury-charcoal leading-[1.05]"
              >
                Where Heritage <br />
                <span className="text-luxury-gold italic">Meets Modernity</span>
              </motion.h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:max-w-md pb-4"
            >
              <p className="text-lg text-luxury-charcoal/70 leading-relaxed">
                The projects below are more than just interiors. They are a collection of deliberate choices, curated narratives, and architectural experiments that define the future of Indian luxury living.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-luxury-charcoal/10 pt-16">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
                className="space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono text-luxury-gold">0{i + 1}</span>
                  <h3 className="text-xl font-serif text-luxury-charcoal uppercase tracking-widest">{p.title}</h3>
                </div>
                <p className="text-luxury-charcoal/60 leading-relaxed text-sm">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <ImageGallery />

      <section className="py-24 bg-luxury-charcoal text-luxury-cream">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { label: 'Completed Works', value: '120+' },
              { label: 'Artisan Partners', value: '45' },
              { label: 'Cities Presence', value: '12' },
              { label: 'Design Awards', value: '08' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center space-y-2"
              >
                <div className="text-4xl md:text-6xl font-serif text-luxury-gold">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
