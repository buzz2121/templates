import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

const accommodations = [
  {
    id: 1,
    title: 'Presidential Suite',
    description: 'The epitome of luxury with panoramic city views, a private dining room, dedicated butler pantry, and exclusive Club Lounge access. Meticulously designed for heads of state and discernable travelers.',
    size: '120 sqm',
    occupancy: 'Up to 3 Adults',
    bed: '1 King Bed',
    image: '/images/room_presidential.png',
    gallery: [
      '/images/room_presidential.png',
      '/images/about_suite.png',
      '/images/hero.png',
      '/images/about_interior.png'
    ],
    features: ['Panoramic Views', 'Private Dining', 'Club Access', '24/7 Butler Service', 'Powder Room', 'Jacuzzi']
  },
  {
    id: 2,
    title: 'Royal Club Room',
    description: 'Elegant decor meets modern comfort. Located on our higher floors for breathtaking sunset views. Guests enjoy complimentary breakfast and evening cocktails in the Royal Club Lounge.',
    size: '65 sqm',
    occupancy: 'Up to 2 Adults',
    bed: '1 King or 2 Twin Beds',
    image: '/images/room_club.png',
    gallery: [
      '/images/room_club.png',
      '/images/about_suite.png',
      '/images/about_interior.png',
      '/images/hero.png'
    ],
    features: ['High Floor', 'Club Access', 'Marble Bathtub', 'Evening Canapés', 'Nespresso Machine']
  },
  {
    id: 3,
    title: 'Deluxe Heritage',
    description: 'A cozy retreat designed with a perfect blend of heritage and contemporary style. Features hand-crafted wooden furniture, rich fabrics, and local artwork.',
    size: '45 sqm',
    occupancy: 'Up to 2 Adults',
    bed: '1 King or 2 Twin Beds',
    image: '/images/room_heritage.png',
    gallery: [
      '/images/room_heritage.png',
      '/images/about_interior.png',
      '/images/about_suite.png'
    ],
    features: ['City View', 'Ergonomic Work Desk', 'Rain Shower', 'Premium Toiletries']
  },
  {
    id: 4,
    title: 'Signature Villa',
    description: 'Private villa with a temperature-controlled plunge pool, offering profound privacy and unmatched extravagance. Surrounded by private walled gardens.',
    size: '180 sqm',
    occupancy: 'Up to 4 Adults',
    bed: '2 King Beds',
    image: '/images/room_villa.png',
    gallery: [
      '/images/room_villa.png',
      '/images/hero.png',
      '/images/about_suite.png',
      '/images/about_interior.png'
    ],
    features: ['Private Pool', 'Garden Terrace', 'Butler Service', 'In-Villa Spa Room', 'Outdoor Shower']
  },
  {
    id: 5,
    title: 'Executive Suite',
    description: 'Spacious corner suite offering a separate living and sleeping area. Ideal for extended business trips or families requiring extra space.',
    size: '85 sqm',
    occupancy: 'Up to 3 Adults',
    bed: '1 King Bed',
    image: '/images/room_club.png',
    gallery: [
      '/images/room_club.png',
      '/images/about_interior.png',
      '/images/about_suite.png'
    ],
    features: ['Separate Living Area', 'Dual Vanities', 'Club Access', 'Walk-in Closet']
  }
];

export default function RoomsSuites() {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGallery = (images: string[]) => {
    setActiveGallery(images);
    setCurrentImageIndex(0);
    // document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setActiveGallery(null);
    // document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev + 1) % activeGallery.length);
    }
  };

  const prevImage = () => {
    if (activeGallery) {
      setCurrentImageIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
    }
  };
  return (
    <>
      <PageTransition>
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-12 bg-royal-gold"></div>
            <span className="text-[10px] uppercase tracking-widest text-royal-gold">Accommodations</span>
            <div className="h-[1px] w-12 bg-royal-gold"></div>
          </div>
          <h1 className="font-serif-cormorant text-5xl md:text-6xl lg:text-7xl font-light mb-6">
            Rooms & <span className="italic text-royal-gold">Suites</span>
          </h1>
          <p className="text-royal-white/70 max-w-2xl mx-auto font-light text-lg">
             Sanctuaries of peace and sophistication, designed to provide rest and rejuvenation amidst the highest levels of comfort.
          </p>
        </motion.div>

        <div className="space-y-24">
          {accommodations.map((room, index) => (
            <motion.div 
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center group`}
            >
              <div className="w-full lg:w-[55%]">
                <div 
                  className="relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden bg-black/20 cursor-pointer group/img"
                  onClick={() => openGallery(room.gallery)}
                >
                  <img 
                    src={room.image} 
                    alt={room.title} 
                    className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 transition-opacity group-hover/img:opacity-40"></div>
                  
                  {/* Hover indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                    <div className="bg-royal-dark/80 backdrop-blur-md px-6 py-3 border border-royal-white/20 text-xs uppercase tracking-[0.2em] text-royal-gold">
                      View Gallery
                    </div>
                  </div>
                  
                  {/* Floating info badge */}
                  <div className="absolute bottom-6 right-6 bg-royal-dark/90 backdrop-blur-md p-4 border border-royal-white/10 hidden md:flex items-center gap-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-royal-white/50 mb-1">Size</p>
                      <p className="font-serif-cormorant text-xl text-royal-gold">{room.size}</p>
                    </div>
                    <div className="w-[1px] h-8 bg-royal-white/10"></div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-royal-white/50 mb-1">Occupancy</p>
                      <p className="font-serif-cormorant text-xl text-royal-gold">{room.occupancy}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-[45%] flex flex-col justify-center">
                <div className="flex md:hidden gap-4 mb-4 text-[10px] uppercase tracking-widest text-royal-gold">
                  <span>{room.size}</span>
                  <span>•</span>
                  <span>{room.occupancy}</span>
                </div>
                
                <h3 className="font-serif-cormorant text-4xl lg:text-5xl font-light mb-4">{room.title}</h3>
                <p className="text-royal-white/70 font-light mb-8 leading-relaxed text-lg">{room.description}</p>
                
                <div className="grid grid-cols-2 gap-y-4 gap-x-2 mb-10">
                  {room.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-royal-white/80">
                      <Check size={16} className="text-royal-gold shrink-0" />
                      <span className="font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-6 items-center">
                  <Link to="/book" className="bg-royal-gold text-royal-dark hover:bg-royal-white px-8 py-3.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300">
                    Reserve Now
                  </Link>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      openGallery(room.gallery);
                    }}
                    className="text-xs uppercase tracking-widest text-royal-white hover:text-royal-gold transition-all pb-1 border-b border-royal-white/30 hover:border-royal-gold bg-transparent border-none cursor-pointer outline-none px-2 py-1"
                  >
                    View Gallery
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>

      {/* Gallery Modal */}
      {activeGallery && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, touchAction: 'none' }}
          onClick={(e) => {
            e.stopPropagation();
            closeGallery();
          }}
        >
          {/* Close button at top right */}
          <button 
            onClick={(e) => { e.stopPropagation(); closeGallery(); }}
            className="absolute top-6 right-6 md:top-10 md:right-10 text-white z-[10001] p-4 bg-white/10 rounded-full hover:bg-white/20 transition-colors cursor-pointer border-none outline-none"
          >
            <X size={32} />
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Left navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 md:left-10 z-[10001] text-white p-4 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer border-none outline-none"
            >
              <ChevronLeft size={48} />
            </button>
            
            {/* Main Image */}
            <div className="relative max-w-[90%] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
              <img
                src={activeGallery[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-full object-contain shadow-2xl select-none"
                loading="eager"
              />
            </div>

            {/* Right navigation */}
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 md:right-10 z-[10001] text-white p-4 bg-black/20 hover:bg-black/40 rounded-full cursor-pointer border-none outline-none"
            >
              <ChevronRight size={48} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 text-sm tracking-widest font-light bg-black/40 px-4 py-2 rounded-full">
              {currentImageIndex + 1} / {activeGallery.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
