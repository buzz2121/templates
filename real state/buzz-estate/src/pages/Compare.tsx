import { useState } from 'react';
import { Check, X, Maximize, BedDouble, Bath, MapPin, Building2, ShieldCheck } from 'lucide-react';
import { ESTATES } from '../data';
import SectionTitle from '../components/SectionTitle';

export default function Compare() {
  // Compare the first 3 estates by default for this demo
  const compareEstates = ESTATES.slice(0, 3);

  const features = [
    { label: 'Asset Type', key: 'type', icon: <Building2 className="w-4 h-4" /> },
    { label: 'Market Value', key: 'price', icon: <span className="text-sm font-bold">$</span> },
    { label: 'Location', key: 'location', icon: <MapPin className="w-4 h-4" /> },
    { label: 'Living Area', key: 'area', icon: <Maximize className="w-4 h-4" /> },
    { label: 'Bedrooms', key: 'bedrooms', icon: <BedDouble className="w-4 h-4" /> },
    { label: 'Bathrooms', key: 'bathrooms', icon: <Bath className="w-4 h-4" /> },
  ];

  const amenities = [
    'Private Cinema',
    'Infinity Pool',
    'Smart Security',
    'Wine Cellar',
    '8-Car Garage',
    'Helipad',
    'Geothermal Spa'
  ];

  return (
    <div className="pt-20 pb-32">
      {/* Hero Section */}
      <section className="relative py-40 overflow-hidden mb-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Luxury Interiors"
          />
          <div className="absolute inset-0 bg-brand-dark/50" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-white">
          <div className="max-w-4xl space-y-8">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">Side-by-Side</span>
            <h1 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter leading-none">Luxury <br/> <span className="italic text-brand-gold text-white">Comparison</span></h1>
            <p className="text-xl font-light text-white/80 max-w-2xl leading-relaxed">
              Evaluate world-class features across our elite portfolio to find the legacy that fits your vision.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6">

        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Headers */}
            <div className="grid grid-cols-[300px_repeat(3,1fr)] items-end">
              <div className="p-8 pb-12 border-b border-white/5">
                <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Comparison Matrix</span>
              </div>
              {compareEstates.map((estate) => (
                <div key={estate.id} className="p-8 border-b border-white/5 space-y-6 text-center">
                  <div className="aspect-video overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 mx-auto w-full group">
                    <img src={estate.images[0]} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                  </div>
                  <h3 className="text-xl font-serif text-center uppercase tracking-widest">{estate.name}</h3>
                </div>
              ))}
            </div>

            {/* Core Features */}
            {features.map((feature) => (
              <div key={feature.key} className="grid grid-cols-[300px_repeat(3,1fr)] group hover:bg-white/5 transition-colors">
                <div className="p-8 border-b border-white/5 flex items-center gap-4">
                  <div className="text-brand-gold">{feature.icon}</div>
                  <span className="uppercase tracking-widest text-[11px] font-medium text-brand-muted">{feature.label}</span>
                </div>
                {compareEstates.map((estate: any) => (
                  <div key={estate.id} className="p-8 border-b border-white/5 text-center font-serif text-lg">
                    {estate[feature.key]}
                  </div>
                ))}
              </div>
            ))}

            {/* Amenities Checkbox */}
            <div className="grid grid-cols-1 pt-12">
              <div className="px-8 mb-8">
                <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-gold">Global Amenities</h4>
              </div>
              {amenities.map((amenity) => (
                <div key={amenity} className="grid grid-cols-[300px_repeat(3,1fr)] group hover:bg-white/5 transition-colors">
                  <div className="p-8 border-b border-white/5 flex items-center gap-4">
                    <ShieldCheck className="w-4 h-4 text-brand-gold" />
                    <span className="uppercase tracking-widest text-[11px] font-medium text-brand-muted">{amenity}</span>
                  </div>
                  {compareEstates.map((estate) => (
                    <div key={estate.id} className="p-8 border-b border-white/5 text-center">
                      {estate.features.includes(amenity) ? (
                        <div className="mx-auto w-6 h-6 border border-brand-gold flex items-center justify-center">
                          <Check className="w-4 h-4 text-brand-gold" />
                        </div>
                      ) : (
                        <div className="mx-auto w-6 h-6 border border-white/10 flex items-center justify-center opacity-30">
                          <X className="w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
