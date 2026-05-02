import Services from '../components/Services';
import Technology from '../components/Technology';
import { motion } from 'motion/react';
import { Microscope, Activity, ShieldCheck, Sparkles, Smile, HeartPulse } from 'lucide-react';

const categories = [
  {
    title: 'Preventive Care',
    desc: 'Stop problems before they start with regular checkups and professional cleaning.',
    icon: ShieldCheck,
    items: ['Regular Exams', 'Deep Cleaning', 'Fluoride Treatment', 'Dental Sealants']
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Achieve your dream smile with our aesthetic specialists.',
    icon: Sparkles,
    items: ['Teeth Whitening', 'Porcelain Veneers', 'Invisalign Aligners', 'Smile Makeovers']
  },
  {
    title: 'Restorative Care',
    desc: 'Restore function and beauty to your teeth.',
    icon: HeartPulse,
    items: ['Natural Crowns', 'Bridgework', 'Dental Fillings', 'Inlays & Onlays']
  }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-32 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">World-Class Services</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto font-medium">Precision-driven treatments designed for your ultimate comfort and long-term oral health.</p>
        </div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary-800/30 -skew-x-12 -translate-x-10" />
      </div>

      <div className="py-24 bg-white">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 flex flex-col"
              >
                <div className="w-16 h-16 bg-white shadow-xl rounded-2xl flex items-center justify-center text-primary-600 mb-8">
                  <cat.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{cat.title}</h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed font-medium">{cat.desc}</p>
                <ul className="space-y-3 mt-auto">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-700 text-sm font-bold">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Technology />
      <Services />

      <section className="section-padding bg-primary-950 text-white overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="bg-primary-900 rounded-[4rem] p-12 lg:p-20 relative overflow-hidden text-center md:text-left">
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-xl">
                <h2 className="text-4xl font-extrabold mb-6">Ready to Experience <span className="text-primary-400">Biological Dentistry?</span></h2>
                <p className="text-primary-100 text-lg font-medium leading-relaxed mb-8">
                  Book a consultation to learn how our holistic approach can transform your health beyond just your smile.
                </p>
                <button className="bg-white text-primary-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-primary-400 hover:text-white transition-all shadow-xl">
                  Analyze My Smile Now
                </button>
              </div>
              <div className="text-primary-800 hidden lg:block opacity-20">
                <Microscope size={240} />
              </div>
            </div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-800 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
          </div>
        </div>
      </section>
    </div>
  );
}
