import { motion } from 'motion/react';
import About from '../components/About';
import PageHero from '../components/PageHero';

export default function AboutPage() {
  const values = [
    {
      title: 'Timeless Aesthetic',
      desc: 'We create spaces that transcend fleeting trends, focusing on enduring beauty and functional elegance.',
      icon: '✧'
    },
    {
      title: 'Artisan Soul',
      desc: 'Our projects celebrate the human touch, integrating master craftsmanship into every detail.',
      icon: '✦'
    },
    {
      title: 'Pure Materials',
      desc: 'We prioritize authentic, natural materials that age gracefully and tell a story of their origin.',
      icon: '❂'
    }
  ];

  const team = [
    {
      name: 'Vanya Malhotra',
      role: 'Principal Designer & Founder',
      image: '/images/img_33.jpg'
    },
    {
      name: 'Arjun Verma',
      role: 'Head of Architecture',
      image: '/images/img_31.jpg'
    },
    {
      name: 'Sanya Gupta',
      role: 'Director of Sourcing',
      image: '/images/img_34.jpg'
    }
  ];

  return (
    <div className="bg-luxury-cream">
      <PageHero 
        title="Designing the"
        subtitle="Our Story"
        italicWord="Soul of Space"
        image="/images/img_35.jpg"
      />

      {/* Main Philosophy Section (Existing About Component) */}
      <About />

      {/* Founder's Vision */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-[3/4] overflow-hidden"
              >
                <img 
                  src="/images/img_36.jpg"
                  alt="Founder's Workspace"
                  className="w-full h-full object-cover grayscale"
                />
              </motion.div>
              <div className="space-y-8">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black"
                >
                  Founder's Vision
                </motion.span>
                <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal">"A home is a portrait of the soul, painted in sunlight and stone."</h2>
                <p className="text-lg text-luxury-charcoal/60 leading-relaxed italic">
                  I started this studio with a simple belief: that luxury isn't about excess—it's about the precision of choice. It's the way a piece of hand-woven silk feels against a cool marble floor, or how a single shaft of afternoon light can transform a room into a sanctuary.
                </p>
                <div className="pt-6">
                  <div className="text-2xl font-serif text-luxury-gold">Vanya Malhotra</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold text-luxury-charcoal/40">Principal Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-luxury-cream">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-24 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif text-luxury-charcoal mb-6">Our Design <span className="italic">Tenets</span></h2>
            <p className="text-luxury-charcoal/60">The principles that guide every sketch, every material choice, and every final placement.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-12 bg-luxury-white border border-luxury-charcoal/5 hover:border-luxury-gold/30 transition-all duration-500 text-center space-y-6 group"
              >
                <div className="text-4xl text-luxury-gold group-hover:scale-110 transition-transform duration-500">{value.icon}</div>
                <h3 className="text-xl font-serif uppercase tracking-widest text-luxury-charcoal">{value.title}</h3>
                <p className="text-sm text-luxury-charcoal/60 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-32 bg-luxury-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-[10px] uppercase tracking-[0.4em] text-luxury-gold font-black mb-4 block">Meet The Studio</span>
              <h2 className="text-4xl md:text-5xl font-serif text-luxury-charcoal leading-tight">Collective <span className="italic">Brilliance</span></h2>
            </div>
            <p className="md:max-w-xs text-luxury-charcoal/60 text-sm pb-2 italic">A curated group of visionaries dedicated to the pursuit of aesthetic excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-none"
              >
                <div className="aspect-[4/5] overflow-hidden mb-6 bg-luxury-cream grayscale group-hover:grayscale-0 transition-all duration-700">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]"
                  />
                </div>
                <h4 className="text-2xl font-serif text-luxury-charcoal mb-1">{member.name}</h4>
                <p className="text-[10px] uppercase tracking-widest font-black text-luxury-gold">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social / Culture */}
      <section className="py-32 bg-luxury-charcoal text-luxury-cream text-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif mb-8 italic">Follow Our Journey</h2>
          <p className="text-luxury-cream/50 mb-12 leading-relaxed">
            From site visits to mood board sessions, follow us for a glimpse behind the curtains of luxury interior design.
          </p>
          <a 
            href="#" 
            className="inline-flex h-14 items-center px-12 bg-luxury-gold text-luxury-cream text-xs uppercase tracking-[0.3em] font-bold hover:bg-luxury-white hover:text-luxury-charcoal transition-all duration-500 shadow-xl"
          >
            Instagram Profile
          </a>
          </div>
        </div>
      </section>
    </div>
  );
}
