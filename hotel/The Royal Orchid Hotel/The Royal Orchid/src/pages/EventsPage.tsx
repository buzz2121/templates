import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function EventsPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Gatherings</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Meetings, Weddings & <span className="italic text-royal-gold">Events</span>
          </h1>
          <p className="text-royal-white/70 max-w-3xl mx-auto font-light text-lg">
             From corporate summits to intimate social gatherings and grand majestic weddings, we provide the perfect luxurious canvas and meticulous planning services for your most significant moments.
          </p>
        </motion.div>

        {/* Grand Ballroom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] lg:aspect-square relative overflow-hidden"
          >
            <img src="/images/about_interior.png" alt="Grand Ballroom" className="w-full h-full object-cover" />
          </motion.div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-widest text-royal-gold mb-4">Signature Venue</span>
            <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light mb-6">The Grand Ballroom</h2>
            <p className="text-royal-white/70 font-light leading-relaxed mb-8 text-lg">
              A pillarless masterpiece adorned with sweeping crystal chandeliers and classical architecture. Capable of hosting up to 1000 guests, it features state-of-the-art acoustics and lighting, making it the premier choice for opulent weddings and large-scale glamorous galas.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-l-2 border-royal-gold/50 pl-4 py-2">
                <p className="text-[10px] uppercase tracking-widest text-royal-white/50 mb-1">Area Setup</p>
                <p className="font-serif-cormorant text-2xl text-royal-white">15,000 sq ft</p>
              </div>
              <div className="border-l-2 border-royal-gold/50 pl-4 py-2">
                <p className="text-[10px] uppercase tracking-widest text-royal-white/50 mb-1">Max Capacity</p>
                <p className="font-serif-cormorant text-2xl text-royal-white">1,000 Guests</p>
              </div>
            </div>
            
            <Link to="/request-proposal" className="self-start border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-dark px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300">
              Request a Proposal
            </Link>
          </div>
        </div>

        {/* Meeting Rooms & Boardrooms */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24 items-center">
          <div className="flex flex-col justify-center lg:order-1 order-2">
            <span className="text-[10px] uppercase tracking-widest text-royal-gold mb-4">Corporate & Executive</span>
            <h2 className="font-serif-cormorant text-4xl md:text-5xl font-light mb-6">The Imperial Boardrooms</h2>
            <p className="text-royal-white/70 font-light leading-relaxed mb-8 text-lg">
              Designed for high-level executive meetings and strategic summits. Equipped with ultra-high-definition displays, secure high-speed connectivity, and ergonomic leather seating for maximum comfort during intense sessions.
            </p>
            
            <ul className="mb-10 space-y-3">
              {['HD Video Conferencing', 'Dedicated Event Butler', 'Customized Catering Menus', 'Natural Daylight with Blackout Blinds'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-royal-white/80 font-light text-sm">
                  <Check size={16} className="text-royal-gold" />
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/floor-plans" className="self-start border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-dark px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300">
              View Floor Plans
            </Link>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] relative overflow-hidden lg:order-2 order-1"
          >
            <img src="/images/about_interior.png" alt="Imperial Boardroom" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Wedding Services Banner */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 border border-royal-white/10 text-royal-white p-8 md:p-12 lg:p-16 relative overflow-hidden backdrop-blur-sm"
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-serif-cormorant text-4xl lg:text-5xl mb-6">Royal Weddings</h2>
            <p className="font-light text-royal-white/60 mb-10 text-lg leading-relaxed">
              Say "I do" in an environment that echoes the grandeur of your love. Our dedicated wedding specialists will manage every intricate detail—from floral arrangements to world-class bespoke catering—ensuring a flawless fairytale celebration.
            </p>
            <Link to="/request-proposal" className="inline-block border border-royal-gold text-royal-gold hover:bg-royal-gold hover:text-royal-dark px-10 py-4 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-lg">
              Consult a Wedding Specialist
            </Link>
          </div>
          {/* Decorative Pattern */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none" style={{
            backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
