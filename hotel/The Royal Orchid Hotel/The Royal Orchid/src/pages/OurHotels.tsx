import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { MapPin, Star, Wifi, Utensils, Droplets, Dumbbell } from 'lucide-react';
import { Link } from 'react-router-dom';

const hotels = [
  {
    id: 1,
    name: 'The Royal Orchid, Mumbai',
    description: 'Our flagship property offering panoramic views of the Arabian Sea and unparalleled luxury in the heart of the city. Experience the iconic Marine Drive skyline from your suite.',
    image: '/images/hero.png',
    features: ['Sea View Rooms', 'Award-winning Rooftop Bar', 'Spa & Wellness Center', 'Infinity Pool']
  },
  {
    id: 2,
    name: 'The Royal Orchid Palace, Jaipur',
    description: 'Experience the grandeur of Rajasthan in our heritage palace hotel, blending regal traditions with modern comforts. Walk through courtyards that whisper tales of royalty.',
    image: '/images/about_suite.png',
    features: ['Heritage Suites', 'Royal Dining Experience', 'Palace Gardens', 'Cultural Events']
  },
  {
    id: 3,
    name: 'The Royal Orchid Resort, Goa',
    description: 'A serene beachfront escape offering luxurious villas, world-class dining, and rejuvenating spa experiences nestled amidst lush tropical gardens.',
    image: '/images/room_villa.png',
    features: ['Private Villas', 'Beach Access', 'Seafood Restaurant', 'Water Sports']
  },
  {
    id: 4,
    name: 'The Royal Orchid Estate, Shimla',
    description: 'Retreat to the mountains in our colonial-style estate. Surrounded by pine forests, it offers a tranquil haven with breathtaking valley views and crisp mountain air.',
    image: '/images/about_interior.png',
    features: ['Mountain Views', 'Heated Indoor Pool', 'Library Bar', 'Trekking Trails']
  }
];

export default function OurHotels() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Destinations</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Our <span className="italic text-royal-gold">Hotels</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light">
            Discover our collection of exquisite properties across India, each offering a unique expression of The Royal Orchid's legendary hospitality, tailored to its distinctive locale.
          </p>
        </motion.div>

        {/* Global Amenities Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 grid grid-cols-2 md:grid-cols-5 gap-8 border-y border-royal-white/10 py-12"
        >
          <div className="flex flex-col items-center text-center gap-3 text-royal-white/60 hover:text-royal-gold transition-colors">
            <Star size={24} />
            <span className="text-xs uppercase tracking-wider">5-Star Service</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 text-royal-white/60 hover:text-royal-gold transition-colors">
            <Wifi size={24} />
            <span className="text-xs uppercase tracking-wider">High-Speed Wi-Fi</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 text-royal-white/60 hover:text-royal-gold transition-colors">
            <Utensils size={24} />
            <span className="text-xs uppercase tracking-wider">Fine Dining</span>
          </div>
          <div className="flex flex-col items-center text-center gap-3 text-royal-white/60 hover:text-royal-gold transition-colors">
            <Droplets size={24} />
            <span className="text-xs uppercase tracking-wider">Luxury Spa</span>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center text-center gap-3 text-royal-white/60 hover:text-royal-gold transition-colors">
            <Dumbbell size={24} />
            <span className="text-xs uppercase tracking-wider">Fitness Center</span>
          </div>
        </motion.div>

        <div className="space-y-32">
          {hotels.map((hotel, index) => (
            <motion.div 
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] overflow-hidden group">
                  <img 
                    src={hotel.image} 
                    alt={hotel.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-royal-gold z-[-1] transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2 hidden md:block"></div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-2 text-royal-gold mb-4">
                  <MapPin size={16} />
                  <span className="text-xs uppercase tracking-widest">{hotel.name.split(',')[1]?.trim() || 'Location'}</span>
                </div>
                <h2 className="font-serif-cormorant text-4xl font-light mb-6">{hotel.name}</h2>
                <p className="text-royal-white/70 font-light mb-8 leading-relaxed text-lg">
                  {hotel.description}
                </p>
                
                <div className="mb-8 grid grid-cols-2 gap-y-3 gap-x-6">
                  {hotel.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-royal-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-royal-gold"></div>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-6">
                  <Link to="/rooms" className="border border-royal-white/30 text-royal-white hover:bg-royal-white hover:text-royal-dark px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300">
                    Explore Hotel
                  </Link>
                  <Link to="/book" className="bg-royal-gold text-royal-dark hover:bg-royal-white px-8 py-3 text-xs uppercase tracking-widest transition-all duration-300">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
