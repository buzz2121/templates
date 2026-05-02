import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, ChevronDown, LayoutGrid, List, MapPin } from 'lucide-react';
import { ESTATES } from '../data';
import PropertyCard from '../components/PropertyCard';
import { Button } from '../components/ui/button';
import { cn } from '../lib/utils';

const CATEGORIES = ['All Projects', 'Residential', 'Mansion', 'Penthouse'];
const LOCATIONS = ['All Locations', 'Dubai', 'Makkah'];
const STATUS = ['All Status', 'Off-Plan', 'Ready'];

export default function Estates() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [activeLocation, setActiveLocation] = useState('All Locations');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredEstates = useMemo(() => {
    return ESTATES.filter((estate) => {
      const matchesCategory = activeCategory === 'All Projects' || estate.type === activeCategory;
      const matchesLocation = activeLocation === 'All Locations' || estate.location.includes(activeLocation);
      const matchesSearch = estate.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          estate.location.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesLocation && matchesSearch;
    });
  }, [activeCategory, activeLocation, searchQuery]);

  return (
    <div className="pt-32 pb-32">
      {/* Header */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80" 
            className="w-full h-full object-cover"
            alt="Luxury Buildings"
          />
          <div className="absolute inset-0 bg-brand-dark/40" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-6 text-white">
            <span className="text-xs uppercase tracking-[0.5em] text-brand-gold font-bold">A World of Possibilities</span>
            <h1 className="text-5xl lg:text-7xl font-serif uppercase tracking-tighter leading-none">Global <br/> <span className="italic text-brand-gold text-white">Portfolio</span></h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              Explore our diverse collection of high-couture residences, iconic hotel apartments, and commercial projects across the Middle East and internationally.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[80px] z-30 bg-white border-b border-brand-line py-6 shadow-sm">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="relative group">
              <select 
                className="appearance-none bg-brand-surface border border-brand-line px-8 py-3 pr-12 text-[10px] uppercase font-bold tracking-widest focus:ring-1 focus:ring-brand-gold outline-none rounded-none cursor-pointer"
                value={activeLocation}
                onChange={(e) => setActiveLocation(e.target.value)}
              >
                {LOCATIONS.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold" size={14} />
            </div>

            <div className="relative group">
              <select 
                className="appearance-none bg-brand-surface border border-brand-line px-8 py-3 pr-12 text-[10px] uppercase font-bold tracking-widest focus:ring-1 focus:ring-brand-gold outline-none rounded-none cursor-pointer"
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
              >
                {CATEGORIES.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold" size={14} />
            </div>

            <div className="relative group hidden md:block">
              <select 
                className="appearance-none bg-brand-surface border border-brand-line px-8 py-3 pr-12 text-[10px] uppercase font-bold tracking-widest focus:ring-1 focus:ring-brand-gold outline-none rounded-none cursor-pointer"
              >
                {STATUS.map(status => <option key={status} value={status}>{status}</option>)}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-gold" size={14} />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-grow lg:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold" size={16} />
              <input 
                type="text" 
                placeholder="Search projects..." 
                className="w-full bg-brand-surface border border-brand-line pl-12 pr-4 py-3 text-[10px] uppercase font-bold tracking-widest focus:ring-1 focus:ring-brand-gold outline-none rounded-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline" className="rounded-none border-brand-line h-12 px-6 hover:bg-brand-gold hover:text-white transition-all">
               <Filter size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20 bg-brand-surface min-h-[60vh]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-10">
             <p className="text-[10px] uppercase tracking-widest font-black text-brand-gray">
               Displaying {filteredEstates.length} Projects
             </p>
             <div className="flex gap-2">
                <button className="p-2 border border-brand-gold text-brand-gold bg-white"><LayoutGrid size={18} /></button>
                <button className="p-2 border border-brand-line text-brand-gray bg-white opacity-50"><List size={18} /></button>
             </div>
          </div>

          <AnimatePresence mode="popLayout">
            {filteredEstates.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
              >
                {filteredEstates.map((estate) => (
                  <PropertyCard key={estate.id} estate={estate} />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-40"
              >
                <Search size={48} className="mx-auto text-brand-gold mb-6 opacity-20" />
                <h3 className="text-3xl font-serif">No projects found</h3>
                <p className="text-brand-gray mt-4">Try adjusting your filters or search criteria.</p>
                <Button 
                  variant="link" 
                  className="mt-6 text-brand-gold uppercase tracking-[0.2em] text-xs font-bold"
                  onClick={() => {
                    setActiveCategory('All Projects');
                    setActiveLocation('All Locations');
                    setSearchQuery('');
                  }}
                >
                  Clear all filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-white border-t border-brand-line">
         <div className="container mx-auto px-6 text-center max-w-3xl space-y-8">
            <h2 className="text-4xl font-serif">Interested in our developments?</h2>
            <p className="text-brand-gray leading-relaxed">
              Sign up to receive the latest updates, event invitations, and exclusive project offers from Buzz Estate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
               <input type="text" placeholder="Full Name" className="flex-1 bg-brand-surface border border-brand-line px-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" />
               <input type="email" placeholder="Email Address" className="flex-1 bg-brand-surface border border-brand-line px-6 py-4 text-sm focus:ring-1 focus:ring-brand-gold outline-none" />
               <Button className="bg-brand-gold text-white rounded-none px-8 py-4 uppercase font-bold tracking-widest text-[10px]">Join</Button>
            </div>
         </div>
      </section>
    </div>
  );
}
