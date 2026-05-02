import { motion } from 'motion/react';
import { Layers, MapPin, ChevronRight, Calendar, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'p1',
    title: 'The Obsidian Pavilion',
    location: 'Dubai International Financial Centre',
    status: 'Ready to Move',
    completion: '2023',
    units: '12 Bespoke Apartments',
    image: 'https://images.unsplash.com/photo-1541339907198-e087563f3f2b?auto=format&fit=crop&q=80&w=1200',
    description: 'A masterwork of modern minimalism, featuring floating terraces and full-height obsidian glass facades.',
    features: ['Private Sky Garden', 'Heli-pad Access', 'Art Curation Service']
  },
  {
    id: 'p2',
    title: 'Heritage Gardens',
    location: 'Chelsea, London',
    status: 'Final Phase',
    completion: 'Q4 2024',
    units: '8 Restored Mansions',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&q=80&w=1200',
    description: 'Breathtaking restoration of Grade-II listed Victorian estates, blending historical grandeur with ultra-modern smart infrastructure.',
    features: ['Grade-II Restoration', 'Private Park Access', '24/7 Security Detail']
  },
  {
    id: 'p3',
    title: 'Azure Heights',
    location: 'Sentosa Cove, Singapore',
    status: 'Pre-Launch',
    completion: '2026',
    units: '25 Waterfront Villas',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
    description: 'Zero-emission architectural marvels integrated directly into the shoreline, featuring underwater viewing capsules.',
    features: ['Underwater Lounge', 'Direct Mooring', 'Solar Glass Tech']
  }
];

export default function Projects() {
  return (
    <div className="bg-black text-white">
      {/* Hero Header Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-20 scale-105"
            alt="Development Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-px bg-gold-500" />
              <span className="text-gold-500 text-[10px] uppercase font-bold tracking-[0.5em]">Visionary Developments</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-9xl font-serif leading-none italic"
            >
              The <span className="gold-text">Collection</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/40 max-w-2xl font-light text-xl italic font-serif leading-relaxed"
            >
              Exclusive off-market projects curated by EstateFlow. These aren't just buildings; they are future landmarks.
            </motion.p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
            >
              <div className="flex-1 w-full group cursor-pointer relative overflow-hidden rounded-[2.5rem] p-1 bg-white/5 border border-white/5">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full aspect-[4/5] lg:aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-105 rounded-[2.3rem]" 
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200";
                   }}
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700" />
                 <div className="absolute top-8 left-8 flex gap-4">
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[9px] uppercase font-bold tracking-widest text-gold-500">
                      {project.status}
                    </div>
                    <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-[9px] uppercase font-bold tracking-widest text-white/60">
                      ETA {project.completion}
                    </div>
                 </div>
              </div>

              <div className="flex-1 space-y-10">
                 <div className="space-y-4">
                   <div className="flex items-center gap-4 text-gold-500/50">
                      <Layers size={20} />
                      <span className="text-[10px] uppercase font-bold tracking-[0.3em]">Project {index + 1}</span>
                   </div>
                   <h2 className="text-4xl md:text-5xl font-serif italic group-hover:text-gold-500 transition-colors">{project.title}</h2>
                   <div className="flex items-center gap-3 text-white/40 group-hover:text-white/60 transition-colors">
                      <MapPin size={16} className="text-gold-500" />
                      <span className="text-xs uppercase tracking-widest font-bold">{project.location}</span>
                   </div>
                 </div>

                 <p className="text-white/60 font-light leading-relaxed text-lg">
                   {project.description}
                 </p>

                 <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                    {project.features.map(f => (
                      <div key={f} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                         <span className="text-[10px] uppercase font-bold tracking-widest text-white/40">{f}</span>
                      </div>
                    ))}
                 </div>

                 <div className="flex gap-6">
                    <Link to="/contact">
                      <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-10 h-14 rounded-none h-14">
                        Download Prospectus
                      </Button>
                    </Link>
                    <Link to="/contact">
                      <Button variant="outline" className="border-white/10 hover:border-gold-500 text-white font-bold uppercase tracking-widest text-[10px] px-10 h-14 rounded-none h-14">
                        Private Tour
                      </Button>
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
