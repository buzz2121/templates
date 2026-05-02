import { motion } from 'motion/react';
import { Zap, Cpu, Scan, Activity } from 'lucide-react';

const techs = [
  {
    title: 'WaterLase iPlus',
    desc: 'The most advanced dental laser for virtually painless procedures without drills or needles.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop'
  },
  {
    title: 'iTero Element 5D',
    desc: 'Cutting-edge digital scanning that eliminates messy impressions and shows your future smile in 3D.',
    icon: Scan,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffce47267a5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Planmeca CBCT',
    desc: 'High-definition 3D X-Rays with 90% less radiation than traditional dental X-Rays.',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=2071&auto=format&fit=crop'
  }
];

export default function Technology() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="badge-pill mb-4 text-primary-700">Futuristic Care</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Technology that Defines <span className="text-primary-600">Precision</span>
            </h2>
          </div>
          <p className="text-slate-500 lg:max-w-sm font-medium">
            We invest in the latest global dental equipment to ensure your treatments are faster, safer, and 100% comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {techs.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-[3rem] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 group"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={tech.image} 
                  alt={tech.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-lg">
                  <tech.icon size={24} />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">
                  {tech.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
