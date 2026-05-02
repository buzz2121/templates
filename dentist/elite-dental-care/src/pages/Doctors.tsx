import { motion } from 'motion/react';
import { Instagram, Twitter, Award, GraduationCap, Microscope, Star, Quote } from 'lucide-react';

const detailedDoctors = [
  {
    name: "Dr. Vikram Thawani",
    role: "Medical Director & Specialist Implantologist",
    bio: "With over 20 years of experience, Dr. Vikram is a pioneer in immediate loading implants and complex full-mouth rehabilitations. He has successfully placed over 5,000 implants and is a frequent speaker at international dental congresses.",
    education: "DDS (Switzerland), MDS Implantology (Germany)",
    specialties: ["Dental Implants", "Full Mouth Rehab", "Bone Grafting"],
    img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
    awards: "Top Implantologist 2024 - UAE Health Awards"
  },
  {
    name: "Dr. Aditi Loomba",
    role: "Senior Cosmetic Dentist",
    bio: "Dr. Aditi is known as the 'Smile Architect' of Dubai. Her expertise lies in facial-aesthetic-driven smile design, creating custom veneers that match the unique facial symmetry of every patient.",
    education: "BDS (India), Master of Aesthetic Dentistry (London)",
    specialties: ["Porcelain Veneers", "Digital Smile Design", "Teeth Whitening"],
    img: "https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=600",
    awards: "Excellence in Cosmetic Dentistry - 2023"
  },
  {
    name: "Dr. Sarah Chen",
    role: "Specialist Orthodontist",
    bio: "A certified Diamond Invisalign provider, Dr. Sarah specializes in both traditional orthodontics and clear aligner therapy for adults and children. She focuses on airway-focused orthodontics and functional occlusion.",
    education: "BDS (Singapore), MSD Orthodontics (USA)",
    specialties: ["Invisalign Diamond", "Clear Braces", "Pediatric Ortho"],
    img: "https://images.unsplash.com/photo-1594824813573-c6bc5244f76d?auto=format&fit=crop&q=80&w=600",
    awards: "Invisalign Top Provider - 5 Consecutive Years"
  }
];

export default function Doctors() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="py-32 bg-slate-50 text-left border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
            <div className="max-w-2xl">
              <span className="text-accent font-bold tracking-[0.3em] text-[10px] uppercase mb-6 block font-sans">Our Elite Team</span>
              <h1 className="text-5xl md:text-7xl text-slate-900 tracking-tight leading-[1.1] mb-8 font-bold">
                The Hands That <span className="font-serif italic text-brand font-normal">Shape</span> Your Confidence.
              </h1>
              <p className="text-xl text-slate-500 leading-relaxed font-normal">
                An international collective of specialists dedicated to precision, artistry, and ethical clinical excellence.
              </p>
            </div>
            <div className="flex gap-4 pb-4">
              <div className="bg-white px-8 py-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                 <span className="block text-3xl font-bold text-brand">65+</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years Combined Exp</span>
              </div>
              <div className="bg-white px-8 py-6 rounded-3xl shadow-sm border border-slate-100 text-center">
                 <span className="block text-3xl font-bold text-brand">12</span>
                 <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Global Certs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Doctors List */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-12">
          <div className="space-y-32">
            {detailedDoctors.map((doc, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                key={i} 
                className={`flex flex-col lg:flex-row gap-20 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="lg:w-1/2 relative group">
                  <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 transition-transform duration-700 group-hover:scale-[1.02]">
                    <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute bottom-8 left-8 right-8 flex gap-4 opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-all cursor-pointer">
                        <Instagram size={20} />
                      </div>
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand transition-all cursor-pointer">
                        <Twitter size={20} />
                      </div>
                    </div>
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -top-10 -${i % 2 === 0 ? 'right' : 'left'}-10 w-64 h-64 bg-slate-50 rounded-full -z-0`} />
                </div>

                {/* Content Side */}
                <div className="lg:w-1/2 text-left">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="h-px w-12 bg-accent" />
                    <span className="text-accent font-bold uppercase tracking-widest text-xs">{doc.role}</span>
                  </div>
                  <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">{doc.name}</h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-normal">
                    {doc.bio}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-12">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand">
                        <GraduationCap size={18} />
                        <span className="font-bold uppercase tracking-widest text-[10px]">Education</span>
                      </div>
                      <p className="text-sm font-semibold text-slate-900 leading-relaxed">{doc.education}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 text-brand">
                        <Microscope size={18} />
                        <span className="font-bold uppercase tracking-widest text-[10px]">Primary Focus</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {doc.specialties.map((s, idx) => (
                          <span key={idx} className="bg-slate-50 border border-slate-100 px-3 py-1 rounded-full text-[10px] text-slate-500 font-bold uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-brand/5 border border-brand/10 p-8 rounded-3xl flex items-start gap-4 italic text-brand font-medium">
                    <Award size={24} className="shrink-0 mt-1" />
                    <p className="text-sm">"{doc.awards}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-12">
          <div className="text-center mb-24">
            <span className="text-brand font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block font-sans">The Backbone</span>
            <h2 className="text-5xl text-slate-900 tracking-tight leading-tight font-bold">Elite <span className="font-serif italic text-accent font-normal">Nursing</span> & Support.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Clinical Nurses", count: "12", desc: "Specialized in surgical assistance and patient sterilization protocols." },
              { name: "Lab Technicians", count: "06", desc: "Our in-house master ceramists hailing from Switzerland and Italy." },
              { name: "Patient Concierge", count: "04", desc: "Managing your luxury journey from arrival to post-care follow-up." },
              { name: "Sanitation Squad", count: "05", desc: "Ensuring our hospital-grade sterilization meets global ISO standards." }
            ].map((team, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 text-left hover:bg-brand group transition-all duration-500">
                <span className="block text-4xl font-bold text-brand group-hover:text-white mb-4 transition-colors">{team.count}</span>
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-white mb-4 transition-colors">{team.name}</h4>
                <p className="text-xs text-slate-500 group-hover:text-white/70 leading-relaxed transition-colors">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
