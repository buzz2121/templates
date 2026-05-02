import { motion } from 'motion/react';
import { ArrowRight, Play } from 'lucide-react';

const ASSETS = {
  about: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
};

export default function About() {
  return (
    <div className="pt-32">
      {/* Intro Header */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
           <p className="text-gold text-[11px] font-bold tracking-[0.5em] uppercase">The Visionary</p>
           <h1 className="text-6xl md:text-8xl font-serif">About <br /><span className="italic">Buzz Management</span></h1>
           <div className="h-[1px] w-20 bg-gold mx-auto" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden shadow-2xl relative z-10 rounded-2xl">
              <img src={ASSETS.about} alt="Leadership" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" referrerPolicy="no-referrer" loading="lazy" />
            </div>
            <div className="absolute -top-10 -left-10 w-full h-full border border-gold/20 z-0 hidden lg:block" />
            <div className="absolute -bottom-10 -right-10 px-8 py-10 bg-gold text-white z-20 hidden lg:block max-w-[200px]">
              <p className="font-serif text-3xl italic">30+</p>
              <p className="text-[9px] tracking-widest uppercase font-bold mt-2">Years of Artistic Vision</p>
            </div>
          </motion.div>
          
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg leading-[1.8] text-charcoal/90 font-light"
            >
              <p>
                Globally recognized as a powerhouse in the luxury wedding and entertainment landscape, Buzz Management has spent three decades redefining modern celebration. We bridge the gap between fantasy and reality through impeccable design.
              </p>
              <p>
                Our philosophy is simple: Every client has a story, and every story deserves to be told with artistry, passion, and an uncompromising eye for extraordinary detail.
              </p>
              <p>
                From coordinating high-profile celebrity weddings to producing large-scale corporate galas, our team brings a wealth of experience and a fresh perspective to every project.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button className="flex items-center gap-4 text-charcoal text-[11px] font-bold tracking-[0.4em] uppercase group">
                 <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-white transition-all">
                   <Play size={20} fill="currentColor" />
                 </div>
                 <span>Watch Our Story</span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="py-32 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Events Produced", val: "1,500+" },
            { label: "Countries Reached", val: "25+" },
            { label: "Awards Won", val: "40+" },
            { label: "Happy Clients", val: "100%" }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-4">
              <p className="text-4xl md:text-6xl font-serif text-gold italic">{stat.val}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase font-bold text-white/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Media & Press */}
      <section className="py-24 bg-white border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 overflow-hidden">
          <p className="text-center text-[10px] tracking-[0.5em] uppercase font-bold text-charcoal/60 mb-16">As Seen In</p>
          <div className="flex flex-wrap justify-between items-center opacity-40 gap-12">
            <span className="text-2xl font-serif tracking-widest italic hover:opacity-100 transition-opacity">VOGUE</span>
            <span className="text-2xl font-serif tracking-widest italic hover:opacity-100 transition-opacity">BRIDES</span>
            <span className="text-2xl font-serif tracking-widest italic hover:opacity-100 transition-opacity">HARPER'S BAZAAR</span>
            <span className="text-2xl font-serif tracking-widest italic hover:opacity-100 transition-opacity">INSIDE WEDDINGS</span>
            <span className="text-2xl font-serif tracking-widest italic hover:opacity-100 transition-opacity">PEOPLE</span>
          </div>
        </div>
      </section>
    </div>
  );
}
