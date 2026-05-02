import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES = [
  { 
    slug: "weddings",
    title: "Weddings", 
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200", 
    label: "01", 
    desc: "Crafting timeless, emotional journeys for couples worldwide. From intimate elopements to grand celebrations, we handle every detail with artistic precision." 
  },
  { 
    slug: "corporate",
    title: "Corporate", 
    img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&q=80&w=1200", 
    label: "02", 
    desc: "Strategic event production that elevates your brand identity and creates lasting professional connections through immersive brand storytelling." 
  },
  { 
    slug: "entertainment",
    title: "Entertainment", 
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200", 
    label: "03", 
    desc: "Theatrical galas, award shows, and immersive performances that push the boundaries of creativity and technical excellence." 
  },
  { 
    slug: "lifestyle",
    title: "Lifestyle", 
    img: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200", 
    label: "04", 
    desc: "Expert guidance in fashion and interior design, transforming how the world perceives luxury living through the Buzz Management lens." 
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
           <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">What We Offer</p>
           <h1 className="text-6xl md:text-8xl font-serif">Curated <br /><span className="italic">Experiences</span></h1>
           <p className="text-xl text-charcoal/60 leading-relaxed font-light">
             From conceptual design to on-site production, we offer a comprehensive suite of services tailored to your specific needs.
           </p>
        </div>
      </section>

      <section className="bg-charcoal px-0 overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-px bg-white/10 border-y border-white/10">
          {SERVICES.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group relative h-[700px] bg-charcoal overflow-hidden p-12 md:p-20 flex flex-col justify-end"
            >
              <img src={service.img} alt={service.title} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 group-hover:scale-110 transition-all duration-1000 grayscale group-hover:grayscale-0" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
              
              <div className="relative z-10 space-y-8">
                <span className="text-gold text-5xl font-serif italic opacity-30">{service.label}</span>
                <h3 className="text-5xl md:text-6xl font-serif tracking-tight">{service.title}</h3>
                <p className="max-w-lg text-white/50 text-base leading-relaxed font-light">
                  {service.desc}
                </p>
                <div className="pt-4">
                  <Link to={`/services/${service.slug}`} className="flex items-center gap-6 group text-[11px] font-bold tracking-[0.4em] uppercase text-gold">
                    <span className="border-b border-gold/40 pb-1 group-hover:border-gold transition-colors">Explore Experience</span>
                    <ChevronRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-40 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-24">
             <h2 className="text-5xl font-serif italic mb-8">Our Signature Process</h2>
             <div className="h-[1px] w-20 bg-gold mx-auto" />
           </div>
           
           <div className="grid md:grid-cols-3 gap-16">
             {[
               { title: "Dream", desc: "We begin with a deep dive into your vision, aspirations, and story." },
               { title: "Design", desc: "Our creative team translates your dreams into detailed blueprints and visual worlds." },
               { title: "Deliver", desc: "Expert production ensures every element is executed with flawless precision." }
             ].map((step, idx) => (
                <div key={idx} className="space-y-6 text-center">
                   <div className="w-20 h-20 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-10">
                     <span className="text-gold font-serif text-2xl italic">{idx + 1}</span>
                   </div>
                   <h3 className="text-2xl font-serif">{step.title}</h3>
                   <p className="text-charcoal/60 leading-relaxed font-light">{step.desc}</p>
                </div>
             ))}
           </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-10">
           <h2 className="text-4xl md:text-6xl font-serif">Ready to Begin Your <br /><span className="italic">Journey?</span></h2>
           <p className="text-lg text-charcoal/60 leading-relaxed font-light">
             Whether it's a grand event or a creative consultation, we are here to bring your vision to life.
           </p>
           <div className="pt-8">
             <button className="px-16 py-6 bg-charcoal text-white text-[11px] font-bold tracking-[0.5em] uppercase hover:bg-gold transition-all shadow-2xl">
               Start Your Inquiry
             </button>
           </div>
        </div>
      </section>
    </div>
  );
}
