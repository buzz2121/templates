import { motion } from 'motion/react';

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '250+' },
    { label: 'Global Clients', value: '180+' },
    { label: 'Design Awards', value: '15' },
    { label: 'Years Experience', value: '12' },
  ];

  return (
    <section id="about" className="py-32 bg-luxury-cream overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src="/images/img_10.jpg"
                alt="Vanya Studio"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-luxury-gold/10 -z-10 rounded-full blur-3xl" />
          </motion.div>

          {/* Text Side */}
          <div className="lg:col-span-7">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-luxury-gold font-bold mb-6 block"
            >
              Our Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-serif mb-8 leading-tight"
            >
              Elegance is not about being noticed, it's about being <span className="italic">remembered.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-luxury-charcoal/70 mb-12 leading-relaxed max-w-2xl"
            >
              Founded in 2012, Vanya Luxury Interiors has redefined premium living in India through a meticulous blend of heritage craftsmanship and contemporary innovation. We believe that every space should reflect the soul of its inhabitants, brought to life through thoughtful curation and unparalleled attention to detail.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-luxury-charcoal mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-[9px] sm:text-[10px] uppercase tracking-widest text-luxury-gold font-bold">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
