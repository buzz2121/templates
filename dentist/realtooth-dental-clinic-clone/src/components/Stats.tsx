import { motion } from 'motion/react';
import { Users, Smile, Award, Heart } from 'lucide-react';

const stats = [
  { label: 'Happy Patients', value: '15k+', icon: Users, desc: 'Smiles transformed across Uttar Pradesh' },
  { label: 'Success Rate', value: '99%', icon: Smile, desc: 'High precision treatments with laser tech' },
  { label: 'Expert Doctors', value: '25+', icon: Heart, desc: 'Specialized MDS doctors at your service' },
  { label: 'Awards Win', value: '12+', icon: Award, desc: 'Recognized for excellence in dentistry' },
];

export default function Stats() {
  return (
    <section className="py-20 bg-primary-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
      </div>
      
      <div className="container mx-auto px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-500 group-hover:scale-110 transition-all">
                <stat.icon size={32} className="text-primary-400 group-hover:text-white" />
              </div>
              <div className="text-4xl font-extrabold mb-2">{stat.value}</div>
              <div className="text-lg font-bold text-primary-200 mb-2">{stat.label}</div>
              <p className="text-xs text-primary-300 font-medium leading-relaxed">{stat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
