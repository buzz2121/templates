import { motion } from 'motion/react';
import { 
  Activity, 
  Smile, 
  Stethoscope, 
  ShieldCheck, 
  Trash2, 
  Layers,
  ArrowRight,
  Clock
} from 'lucide-react';

const services = [
  {
    title: 'Dental Implants',
    description: 'Permanent solution for missing teeth with lifetime warranty and robotic accuracy.',
    icon: Stethoscope,
    color: 'bg-primary-100 text-primary-600'
  },
  {
    title: 'Orthodontics',
    description: 'Invisalign and advanced braces for a perfectly aligned, confident smile.',
    icon: Activity,
    color: 'bg-primary-100 text-primary-600'
  },
  {
    title: 'Root Canal (RCT)',
    description: 'Single-visit painless RCT using the latest robotic endodontic technology.',
    icon: ShieldCheck,
    color: 'bg-primary-100 text-primary-600'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your look with advanced smile design and whitening procedures.',
    icon: Smile,
    color: 'bg-primary-100 text-primary-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-pill mb-4 mx-auto">Our Expertise</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Elite Dental Solutions for a <span className="text-primary-600">Perfect Smile</span>
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto">We use high-precision tools and modern methods to ensure your dental treatments are accurate and completely painless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-slate-100 rounded-[2.5rem] hover:border-primary-200 transition-all bg-slate-50/50 hover:bg-white hover:shadow-2xl hover:shadow-primary-100/50"
            >
              <div className={`w-12 h-12 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Emergency Care Highlight */}
        <div className="h-56 bg-slate-900 rounded-[3rem] p-12 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
          <div className="space-y-2">
            <div className="text-primary-400 font-bold text-sm tracking-widest uppercase">Emergency Care</div>
            <h3 className="text-3xl font-bold">Experiencing dental pain?</h3>
            <p className="text-slate-400 text-sm">Our emergency team is available 24/7 for urgent consultations.</p>
          </div>
          <div className="text-right">
            <div className="text-primary-400 font-bold text-3xl mb-1">+91 911 388 3333</div>
            <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">24/7 Helpline Number</div>
          </div>
        </div>
      </div>
    </section>
  );
}
