import { motion } from 'motion/react';
import { Phone, Mail, Award, MapPin, Star, ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const agents = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Lead Strategic Acquisitions",
    experience: "14 Years",
    location: "Global Portfolio",
    specialization: "Coastal Ultra-Luxury",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    bio: "Sarah specializes in identifying high-growth coastal assets before they reach the public market. Her client list includes CEOs and tech founders across Silicon Valley."
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Senior Portfolio Director",
    experience: "11 Years",
    location: "New York & Dubai",
    specialization: "Penthouse Developments",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    bio: "With a background in international finance, Marcus approaches real estate as a strategic asset class. He leads our urban luxury developments across Major global hubs."
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "European Markets Advisor",
    experience: "9 Years",
    location: "Madrid & Paris",
    specialization: "Historical Restorations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    bio: "Elena's passion for architectural history makes her the perfect guide for those seeking character-rich estates across Europe's most storied cities."
  },
  {
    id: 4,
    name: "James Wilson",
    role: "London Prime Markets",
    experience: "16 Years",
    location: "London & Home Counties",
    specialization: "Ancestral Estates",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    bio: "James is the primary liaison for our London portfolio. His discreteness and deep-rooted connections in Mayfair and Belgravia are legendary."
  }
];

export default function Agents() {
  return (
    <div className="bg-black text-white">
      {/* Hero Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Advisor Background"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-gold-500/30" />
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.5em]">The Elite Liaison</span>
              <div className="w-12 h-px bg-gold-500/30" />
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-serif leading-none italic"
            >
              Our Trusted <span className="gold-text">Advisors</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 max-w-2xl mx-auto font-light text-lg italic font-serif"
            >
              Connect with our world-class strategic partners who curate and secure the most exceptional assets for our global clientele.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {agents.map((agent, idx) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col md:flex-row bg-[#080807] border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-gold-500/20 transition-all duration-700 h-full"
            >
              <div className="md:w-2/5 relative overflow-hidden aspect-[4/5] md:aspect-auto">
                <img 
                  src={agent.image} 
                  alt={agent.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" 
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                   <div className="flex items-center gap-2 bg-gold-500 text-black px-3 py-1 rounded-full text-[8px] font-extrabold uppercase tracking-widest shadow-xl">
                      <Star size={10} fill="currentColor" /> Top Tier
                   </div>
                </div>
              </div>

              <div className="flex-1 p-8 md:p-12 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-3xl font-serif italic mb-1">{agent.name}</h3>
                    <p className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.3em]">{agent.role}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest text-white/40">
                      <Award size={14} className="text-gold-500/40" /> {agent.experience} Exp.
                    </div>
                    <div className="flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest text-white/40">
                      <MapPin size={14} className="text-gold-500/40" /> {agent.location}
                    </div>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed font-light line-clamp-3">
                    {agent.bio}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <button className="text-white/40 hover:text-gold-500 transition-colors">
                      <Phone size={20} />
                    </button>
                    <button className="text-white/40 hover:text-gold-500 transition-colors">
                      <Mail size={20} />
                    </button>
                    <button className="text-white/40 hover:text-gold-500 transition-colors">
                      <MessageSquare size={20} />
                    </button>
                  </div>
                  <Link to="/contact">
                    <Button className="w-full h-14 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-500 rounded-2xl text-[9px] font-extrabold uppercase tracking-[0.3em] transition-all duration-500 group/btn">
                      Request Liaison <ArrowRight size={16} className="ml-3 group-hover/btn:translate-x-2 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Network Section */}
        <div className="mt-32 p-16 md:p-24 bg-[#080807] border border-white/5 rounded-[4rem] text-center space-y-12 relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=2000" 
               className="w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-[3s]"
               alt="Network Background"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.05)_0%,transparent_100%)]" />
          <div className="relative space-y-6 z-10">
            <h2 className="text-4xl md:text-6xl font-serif italic text-white leading-tight">Join Our <span className="gold-text">Elite</span> Partner Network</h2>
            <p className="text-white/40 max-w-xl mx-auto font-light leading-relaxed italic font-serif text-lg">
              We are always extending our reach. If you represent the pinnacle of real estate brokerage in your region, we invite you to discuss strategic collaboration.
            </p>
            <div className="pt-8">
               <Button className="bg-gold-500 hover:bg-gold-600 text-black px-12 h-16 rounded-2xl font-extrabold text-[10px] uppercase tracking-[0.4em] shadow-2xl transition-all hover:scale-105">
                 Liaison Registration
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
