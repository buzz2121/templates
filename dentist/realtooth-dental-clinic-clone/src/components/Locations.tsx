import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

const locations = [
  {
    name: 'Gomti Nagar Clinic',
    address: 'C-2/13, Vikas Khand, Near Mithai Wala Chauraha, Gomti Nagar, Lucknow',
    phone: '+91 911 388 3333',
    hours: '10:00 AM - 08:30 PM',
    mapUrl: 'https://maps.google.com'
  },
  {
    name: 'Aliganj Clinic',
    address: 'Sector B, Near Engineering College Chauraha, Aliganj, Lucknow',
    phone: '+91 911 388 4444',
    hours: '10:00 AM - 08:30 PM',
    mapUrl: 'https://maps.google.com'
  },
  {
    name: 'Mahanagar Clinic',
    address: 'Mahanagar Extension, Near Gole Market, Lucknow',
    phone: '+91 911 388 5555',
    hours: '10:00 AM - 08:30 PM',
    mapUrl: 'https://maps.google.com'
  }
];

export default function Locations() {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="badge-pill mb-4 mx-auto text-primary-700">Find Us</div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Our <span className="text-primary-600">Centers</span> in Lucknow</h2>
          <p className="text-slate-600 font-medium">World-class dental care is now around the corner. Visit any of our state-of-the-art clinics.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <motion.div
              key={loc.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-primary-100/50 transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-primary-600 shadow-sm mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{loc.name}</h3>
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 text-sm text-slate-500 font-medium">
                  <MapPin size={18} className="text-primary-600 shrink-0" />
                  <p>{loc.address}</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-500 font-medium">
                  <Phone size={18} className="text-primary-600 shrink-0" />
                  <p>{loc.phone}</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-500 font-medium">
                  <Clock size={18} className="text-primary-600 shrink-0" />
                  <p>{loc.hours}</p>
                </div>
              </div>
              <a 
                href={loc.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-700 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all text-sm"
              >
                Get Directions <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
