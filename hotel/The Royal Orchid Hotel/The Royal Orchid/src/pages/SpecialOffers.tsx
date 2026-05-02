import React from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const offers = [
  {
    id: 1,
    title: 'The Royal Weekend Escape',
    description: 'Immerse yourself in luxury with a complimentary room upgrade to the next category, guaranteed late check-out till 4:00 PM, and a bespoke 3-course dinner for two at The Orchid Room.',
    image: '/images/about_suite.png',
    includes: ['Room Upgrade', 'Late Check-out', 'Dinner for Two']
  },
  {
    id: 2,
    title: 'Spa & Wellness Retreat',
    description: 'Rejuvenate your senses with daily 60-minute signature spa treatments per person, healthy gourmet breakfasts, and exclusive access to the vitality pool and guided morning yoga sessions.',
    image: '/images/room_villa.png',
    includes: ['Daily Spa Treatments', 'Wellness Breakfast', 'Yoga Sessions']
  },
  {
    id: 3,
    title: 'Advance Purchase Prestige',
    description: 'Plan your royal getaway up to 30 days in advance and enjoy up to 25% off our Best Available Rate, along with complimentary high-speed Wi-Fi and airport lounge access passes.',
    image: '/images/room_club.png',
    includes: ['Up to 25% Off', 'Airport Lounge Access', 'Flexible Rescheduling']
  },
  {
    id: 4,
    title: 'Family Majestic Holiday',
    description: 'Create unforgettable memories. Book a suite and get 50% off a connecting room for children. Includes complimentary kids dining, curated city tours, and an in-room movie night setup.',
    image: '/images/room_villa.png',
    includes: ['50% Off 2nd Room', 'Free Kids Meals', 'City Concierge Tour']
  }
];

export default function SpecialOffers() {
  return (
    <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Exclusive</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl font-light mb-6">
            Special <span className="italic text-royal-gold">Offers</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light text-lg">
             Elevate your stay with our curated packages and seasonal promotions designed to make your experience truly unforgettable with unmatched value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {offers.map((offer, index) => (
             <motion.div 
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col group border border-royal-white/10 hover:border-royal-gold/50 transition-colors bg-[#0a0a0a]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img 
                  src={offer.image} 
                  alt={offer.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500"></div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h3 className="font-serif-cormorant text-3xl font-light mb-4 text-royal-white">{offer.title}</h3>
                <p className="text-royal-white/70 font-light mb-6 flex-1 text-sm md:text-base leading-relaxed">{offer.description}</p>
                
                <div className="border-t border-royal-white/10 pt-6 mb-8">
                  <h4 className="text-[10px] uppercase tracking-widest text-royal-gold mb-3">Package Includes:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {offer.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-royal-white/60">
                        <div className="w-1 h-1 bg-royal-gold rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <Link to="/book" className="flex-1 text-center bg-royal-white text-royal-dark hover:bg-royal-gold px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300 font-semibold">
                    Redeem Offer
                  </Link>
                  <button className="flex-1 text-center border border-royal-white/30 text-royal-white hover:text-royal-gold hover:border-royal-gold px-6 py-3 text-xs uppercase tracking-widest transition-all duration-300">
                    Term & Conditions
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
