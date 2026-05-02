import { motion } from 'motion/react';
import { Shield, Award, Users, MapPin, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <div className="text-white pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="EstateFlow Headquarters"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6"
          >
            Since 1988
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-serif mb-8 leading-tight"
          >
            Elevating the Art of <br /> <span className="text-gold-500">Living</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-10"
          >
            EstateFlow is a global real estate concierge, specializing in the acquisition and management of the world's most prestigious properties.
          </motion.p>
          <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-10 h-14 rounded-none">
            Our Heritage
          </Button>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">We deal in legacies, not just properties.</h2>
            <div className="space-y-6 text-white/60 font-light leading-relaxed">
              <p>
                At EstateFlow, we understand that a home is more than an asset; it is the stage upon which a life is lived. Our mission is to facilitate seamless transitions for the global elite, providing discretion, expertise, and unparalleled access.
              </p>
              <p>
                Every property in our portfolio is hand-selected through a rigorous audit process, ensuring that only assets with exceptional architectural merit and strategic value reach our clients.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1600607687940-477a6a698a63?auto=format&fit=crop&q=80&w=1000" 
              className="w-full h-full object-cover"
              alt="Luxury Interior"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200";
              }}
            />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 border border-gold-500/30 hidden md:block" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white/5 py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {[
            { label: 'Total Volume', value: '£12.4B' },
            { label: 'Global Offices', value: '18' },
            { label: 'Elite Agents', value: '150+' },
            { label: 'Client Retention', value: '98%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-3xl md:text-5xl font-serif text-gold-500 mb-2">{stat.value}</p>
              <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif mb-20 text-center">Our Journey</h2>
        <div className="space-y-20 relative before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-px before:bg-white/10 hidden md:block">
          {[
            { year: '1988', title: 'The Founding', desc: 'Established in Mayfair with a vision to redefine luxury real estate.' },
            { year: '1995', title: 'Global Expansion', desc: 'Opened our first international offices in Monaco and Geneva.' },
            { year: '2008', title: 'Strategic Advisory', desc: 'Launched our private wealth and portfolio audit division.' },
            { year: '2020', title: 'Digital Frontier', desc: 'Pioneered full VR property acquisitions for international buyers.' },
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex items-center gap-20 ${i % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="flex-1 text-right">
                <div className={i % 2 === 0 ? 'text-left' : 'text-right'}>
                  <p className="text-4xl font-serif text-gold-500 mb-2">{item.year}</p>
                  <h4 className="text-xl mb-4">{item.title}</h4>
                  <p className="text-white/50 font-light leading-relaxed max-w-md mx-auto inline-block">{item.desc}</p>
                </div>
              </div>
              <div className="z-10 w-4 h-4 rounded-full bg-gold-500 border-4 border-black ring-8 ring-gold-500/20" />
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
        
        {/* Mobile Timeline */}
        <div className="md:hidden space-y-12">
           {[
            { year: '1988', title: 'The Founding', desc: 'Established in Mayfair with a vision to redefine luxury real estate.' },
            { year: '1995', title: 'Global Expansion', desc: 'Opened our first international offices in Monaco and Geneva.' },
            { year: '2008', title: 'Strategic Advisory', desc: 'Launched our private wealth and portfolio audit division.' },
            { year: '2020', title: 'Digital Frontier', desc: 'Pioneered full VR property acquisitions for international buyers.' },
          ].map((item, i) => (
            <div key={i} className="border-l border-gold-500/30 pl-6">
              <p className="text-2xl font-serif text-gold-500 mb-2">{item.year}</p>
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-white/50 font-light text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
