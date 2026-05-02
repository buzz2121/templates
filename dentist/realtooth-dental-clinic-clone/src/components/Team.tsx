import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail, ArrowRight } from 'lucide-react';

const doctors = [
  {
    name: 'Dr. Amit Anand',
    role: 'Chief Dental Surgeon',
    specialty: 'Implants & Cosmetic Dentistry',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop',
    bio: 'With over 20 years of experience, Dr. Amit has pioneered digital dentistry in North India.'
  },
  {
    name: 'Dr. Arpita Anand',
    role: 'Senior Dental Consultant',
    specialty: 'Endodontics & Orthodontics',
    image: 'https://images.unsplash.com/photo-1559839734-2b71f1536780?q=80&w=2070&auto=format&fit=crop',
    bio: 'Dr. Arpita specializes in painless root canals and invisalign procedures for all age groups.'
  },
  {
    name: 'Dr. Sameer Khan',
    role: 'Periodontist',
    specialty: 'Gum Care & Surgery',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    bio: 'Focused on ensuring long-term oral health through precise gum treatments.'
  },
  {
    name: 'Dr. Neha Sharma',
    role: 'Pediatric Dentist',
    specialty: 'Children Dental Care',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    bio: 'Making dental visits fun and fear-free for our little champions.'
  }
];

export default function Team() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="badge-pill mb-4 mx-auto">Expert Team</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Dedicated Specialist <span className="text-primary-600">Doctors</span></h2>
          <p className="text-slate-600">Our multidisciplinary team of specialists ensures you receive the best care under one roof, using the latest tools and techniques.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50/50 p-6 rounded-[2.5rem] border border-slate-100 hover:border-primary-200 hover:bg-white hover:shadow-2xl hover:shadow-primary-100/50 transition-all"
            >
              <div className="relative mb-6 overflow-hidden rounded-[2rem] aspect-square shadow-md border-4 border-white">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-slate-800">{doctor.name}</h3>
                <p className="text-primary-600 text-[10px] font-bold uppercase tracking-widest">{doctor.role}</p>
                <p className="text-xs text-slate-500 font-medium">{doctor.specialty}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
