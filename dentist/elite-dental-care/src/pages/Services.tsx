import { services } from './Home';
import { ChevronRight, Cpu, Microscope, Zap, Clock, UserCheck, CalendarDays, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-32 bg-slate-50 text-left border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="mb-20 text-center max-w-2xl mx-auto">
            <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Our Services</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight mb-8">Comprehensive <span className="font-serif italic text-brand">Oral Healthcare</span> Solutions.</h2>
            <p className="text-slate-500 leading-relaxed">From preventative care to advanced cosmetic procedures, we offer a full range of dental services tailored to your needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -12 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all border border-slate-100 group"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{service.category}</span>
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 tracking-tight">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-10">
                  {service.desc}
                </p>
                <a href="#" className="text-slate-900 font-bold flex items-center gap-2 group-hover:gap-4 transition-all text-[10px] uppercase tracking-[0.2em]">
                  View Details <ChevronRight size={14} className="text-accent" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Packages */}
      <section className="py-32 text-left">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">Elite Packages</span>
              <h2 className="text-4xl text-slate-900 tracking-tight">Curated <span className="font-serif italic text-accent">Experiences</span> for Your Smile.</h2>
            </div>
            <p className="text-slate-500 max-w-sm">Combining essential treatments into comprehensive premium packages for a holistic dental transformation.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "The Signature Glow",
                desc: "Our most popular aesthetic package focusing on immediate brightening and dental hygiene.",
                includes: ["Deep Scaling & Polish", "Philips Zoom! Whitening", "Air-Flow Stain Removal", "Fluoride Treatment"],
                price: "AED 1,499"
              },
              {
                title: "Precision Restorative",
                desc: "A comprehensive health-focused package designed to restore foundation and function.",
                includes: ["3D Digital Scan", "Root Foundation Check", "Biocompatible Fillings", "Night Guard Consultation"],
                price: "AED 2,850"
              }
            ].map((pkg, i) => (
              <div key={i} className="bg-slate-50 rounded-[3rem] p-16 flex flex-col justify-between border border-slate-100">
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{pkg.title}</h3>
                  <p className="text-slate-500 mb-10 text-lg leading-relaxed">{pkg.desc}</p>
                  <ul className="space-y-4 mb-12">
                    {pkg.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                        <Sparkles size={16} className="text-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center pt-8 border-t border-slate-200">
                  <span className="text-3xl font-bold text-brand">{pkg.price}</span>
                  <button className="bg-brand text-white px-8 py-4 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-slate-900 transition-all">Select Package</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-12 relative z-10">
          <div className="text-center mb-24">
            <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block">Innovation</span>
            <h2 className="text-5xl tracking-tight leading-tight text-white">Digital <span className="font-serif italic font-normal">Transformation</span> Hub.</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Cpu />, name: "AI Diagnostics", desc: "Machine learning algorithms that detect microscopic decay patterns." },
              { icon: <Microscope />, name: "Micro-Dentistry", desc: "Using Zeiss microscopes for 20x magnification during procedures." },
              { icon: <Zap />, name: "Cold Laser", desc: "Non-invasive laser therapy for pain-free gum treatments." },
              { icon: <Clock />, name: "Same-Day Crowns", desc: "CEREC technology to mill your porcelain crown in under 1 hour." }
            ].map((tech, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:border-brand transition-all">
                <div className="text-brand mb-8">{tech.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-white">{tech.name}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand/5 blur-3xl" />
      </section>

      {/* Patient Journey */}
      <section className="py-32 bg-white text-left">
        <div className="max-w-7xl mx-auto px-12">
          <div className="max-w-2xl mb-24">
            <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">The Process</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight">A Journey Tailored <br/><span className="font-serif italic text-accent">For You.</span></h2>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-24">
              {[
                { step: "01", title: "Concierge Welcome", desc: "Personal coordinator ensures your comfort before meeting the specialist.", icon: <UserCheck /> },
                { step: "02", title: "Holistic Diagnosis", desc: "Beyond teeth—we evaluate facial symmetry and bone structure digitally.", icon: <Sparkles /> },
                { step: "03", title: "Collaborative Planning", desc: "You preview your final results in 3D before we even start.", icon: <CalendarDays /> },
                { step: "04", title: "Painless Execution", desc: "Treatment in our sanctuary-like suites with premium sedation.", icon: <Zap /> }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-12 items-center ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-5/12 text-left md:text-right">
                    <div className={`${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <h3 className="text-3xl font-bold text-slate-900 mb-4">{step.title}</h3>
                      <p className="text-slate-500 text-lg leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-20 h-20 bg-brand rounded-full flex items-center justify-center text-white shrink-0 border-8 border-white shadow-xl">
                    <span className="font-black text-xl">{step.step}</span>
                  </div>
                  <div className="md:w-5/12">
                    <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100 flex items-center justify-center">
                       <div className="text-brand w-12 h-12">
                         {step.icon}
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
