import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const restaurants = [
  {
    id: 1,
    name: 'The Orchid Room',
    type: 'Fine Dining & Wine',
    description: 'Experience classic European cuisine in an opulent setting. Our masterful chefs utilize seasonal ingredients to craft unforgettable multi-course tasting menus. Sommelier-paired wines elevate the experience.',
    hours: 'Dinner: 7:00 PM - 11:30 PM',
    dressCode: 'Formal or Smart Casual',
    image: '/images/dining_fine.png',
  },
  {
    id: 2,
    name: 'Saffron Sky',
    type: 'Rooftop Lounge',
    description: 'Craft cocktails, Pan-Asian tapas, and a panoramic city view. The perfect venue to unwind as the sun sets and the city lights spark to life. Features live jazz on weekends.',
    hours: 'Sundowner: 5:00 PM - 1:00 AM',
    dressCode: 'Smart Casual',
    image: '/images/dining_dish.png',
  },
  {
    id: 3,
    name: 'The Heritage Cafe',
    type: 'All-Day Dining',
    description: 'A bright, airy space offering lavish breakfast buffets and an à la carte menu featuring global classics and beloved local specialties. Ideal for a relaxed lunch or an informal meeting.',
    hours: '24 Hours',
    dressCode: 'Casual',
    image: '/images/dining_fine.png',
  },
  {
    id: 4,
    name: 'The Golden Lotus',
    type: 'Authentic Oriental',
    description: 'Journey through the culinary landscapes of the Far East. The Golden Lotus specializes in Cantonese and Sichuan delicacies, featuring a live dim sum station and private dining pavilions.',
    hours: 'Lunch: 12:30 PM - 3:30 PM | Dinner: 7:00 PM - 11:30 PM',
    dressCode: 'Smart Casual',
    image: '/images/dining_dish.png',
  }
];

export default function DiningPage() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Gastronomy</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Culinary <span className="italic text-royal-gold">Journeys</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light leading-relaxed">
             Embark on a voyage of flavors crafted by award-winning chefs. Our signature dining venues offer an array of exquisite tastes in beautifully designed settings, matched only by our legendary service.
          </p>
        </motion.div>

        <div className="space-y-24 mb-24">
          {restaurants.map((restaurant, index) => (
            <motion.div 
              key={restaurant.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`relative aspect-[4/3] overflow-hidden ${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <img 
                  src={restaurant.image} 
                  alt={restaurant.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
              </div>
              <div className={`flex flex-col justify-center ${index % 2 !== 0 ? 'lg:order-1 lg:pr-12' : 'lg:pl-12'}`}>
                <span className="text-[10px] uppercase tracking-widest text-royal-gold mb-4">{restaurant.type}</span>
                <h2 className="font-serif-cormorant text-3xl md:text-4xl lg:text-5xl font-light mb-6">{restaurant.name}</h2>
                <p className="text-royal-white/70 font-light leading-relaxed mb-6 text-lg">
                  {restaurant.description}
                </p>
                
                <div className="border-l-2 border-royal-gold/50 pl-4 mb-8">
                  <p className="text-xs text-royal-white/60 mb-2"><strong className="text-royal-white font-medium uppercase tracking-wider text-[10px]">Hours:</strong> {restaurant.hours}</p>
                  <p className="text-xs text-royal-white/60"><strong className="text-royal-white font-medium uppercase tracking-wider text-[10px]">Dress Code:</strong> {restaurant.dressCode}</p>
                </div>

                <div className="flex flex-wrap gap-4 lg:gap-6">
                  <Link to="/book" className="border border-royal-white/30 text-royal-white hover:bg-royal-white hover:text-royal-dark px-8 py-3.5 text-xs uppercase tracking-widest transition-all duration-300">
                    Reserve a Table
                  </Link>
                  <button className="text-xs uppercase tracking-widest text-royal-gold hover:text-royal-white transition-colors pb-1 border-b-transparent border-b hover:border-royal-white">
                    View Menu
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Private Dining Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-royal-white text-royal-dark p-8 md:p-16 flex flex-col items-center text-center max-w-4xl mx-auto border-t border-royal-gold"
        >
          <span className="text-[10px] uppercase tracking-widest text-royal-gold mb-4 font-semibold">Bespoke Experiences</span>
          <h2 className="font-serif-cormorant text-4xl mb-6">Private Dining</h2>
          <p className="mb-8 font-light max-w-xl text-royal-dark/80">
            For intimate celebrations and confidential business dinners, The Royal Orchid offers exclusive private dining rooms accompanied by customized menus curated by our Executive Chef.
          </p>
          <button className="bg-royal-dark text-royal-gold px-8 py-3 text-xs uppercase tracking-widest hover:bg-royal-gold hover:text-royal-dark transition-all duration-300">
            Inquire Now
          </button>
        </motion.div>
      </div>
    </PageTransition>
  );
}
