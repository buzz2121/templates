import About from '../components/About';
import Stats from '../components/Stats';
import { Target, Heart, Eye } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary-900 py-32 text-white text-center relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Legacy & Mission</h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto font-medium">A journey of excellence that began two decades ago, built on the foundation of trust and advanced clinical care.</p>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-20" />
      </div>

      <Stats />
      
      <About />

      <section className="section-padding bg-white">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Our Mission',
                desc: 'To provide world-class, painless dental solutions using biological and technological innovations, ensuring lifelong oral health for our community.',
                icon: Target,
                color: 'bg-blue-50 text-blue-600'
              },
              {
                title: 'Our Vision',
                desc: 'To be the global benchmark for holistic dental care, where every patient experiences the perfect blend of medical science and human compassion.',
                icon: Eye,
                color: 'bg-purple-50 text-purple-600'
              },
              {
                title: 'Our Core Values',
                desc: 'Integrity in treatment, excellence in execution, and empathy in every patient interaction are the pillars we stand upon.',
                icon: Heart,
                color: 'bg-rose-50 text-rose-600'
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[3rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all group">
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white overflow-hidden">
        <div className="container mx-auto px-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold mb-8">The Realtooth <span className="text-primary-400">Difference</span></h2>
              <div className="space-y-6">
                {[
                  'Biological Dentistry Approach',
                  'Strict 7-Layer Sterilization Protocol',
                  'In-house Digital Lab for Quick Delivery',
                  'Holistic Patient Wellness Focus',
                  'Continuous Clinical Research & Training'
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary-500" />
                    <p className="text-lg font-medium text-slate-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="relative z-10 rounded-[3rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop" alt="Clinic Interior" className="w-full" />
               </div>
               <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-600/20 rounded-full blur-3xl" />
               <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
