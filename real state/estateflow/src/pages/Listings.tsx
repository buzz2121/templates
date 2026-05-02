import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, SlidersHorizontal, Grid, List, MapPin, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import PropertyCard from '@/components/properties/PropertyCard';
import propertiesData from '@/data/properties.json';

export default function Listings() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [budgetRange, setBudgetRange] = useState([0, 10000000]);
  const [sortBy, setSortBy] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filteredProperties = useMemo(() => {
    return propertiesData
      .filter(p => {
        const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            p.location.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = selectedType === 'all' || p.type.toLowerCase() === selectedType.toLowerCase();
        const matchesBudget = p.price >= budgetRange[0] && p.price <= budgetRange[1];
        return matchesSearch && matchesType && matchesBudget;
      })
      .sort((a, b) => {
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'price-low') return a.price - b.price;
        return 0; // Default newest (based on original order)
      });
  }, [searchQuery, selectedType, budgetRange, sortBy]);

  return (
    <div className="pt-32 pb-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gold-500 font-bold uppercase tracking-[0.4em] text-[10px]"
          >
            Curated Portfolio
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-6xl font-serif italic"
          >
            Exceptional <span className="gold-text">Estates</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-24 h-px bg-gold-500/30"
          />
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row gap-6 mb-12">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30 group-focus-within:text-gold-500 transition-colors" size={20} />
            <Input 
              placeholder="Search by location, title or advisor..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-14 pl-12 bg-white/5 border-white/10 rounded-xl focus-visible:ring-gold-500/30 font-light italic"
            />
          </div>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`h-14 px-8 border-white/10 hover:bg-white/5 rounded-xl flex gap-3 ${isFilterOpen ? 'text-gold-500 border-gold-500/50' : ''}`}
            >
              <SlidersHorizontal size={20} />
              <span className="text-[10px] uppercase font-bold tracking-widest">Filters</span>
            </Button>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="h-14 w-48 bg-white/5 border-white/10 rounded-xl focus:ring-0">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-900 border-white/10 text-white font-serif">
                <SelectItem value="newest">Featured First</SelectItem>
                <SelectItem value="price-high">Highest Price</SelectItem>
                <SelectItem value="price-low">Lowest Price</SelectItem>
              </SelectContent>
            </Select>

            <div className="hidden sm:flex bg-white/5 border border-white/10 rounded-xl p-1 gap-1">
              <Button 
                variant="ghost" 
                onClick={() => setViewMode('grid')}
                className={`h-full px-3 rounded-lg ${viewMode === 'grid' ? 'bg-gold-500/10 text-gold-500' : 'text-white/40'}`}
              >
                <Grid size={18} />
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => setViewMode('list')}
                className={`h-full px-3 rounded-lg ${viewMode === 'list' ? 'bg-gold-500/10 text-gold-500' : 'text-white/40'}`}
              >
                <List size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Extended Filters */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mb-12"
            >
              <div className="p-10 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-xl space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                  <div className="space-y-6">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/50">Property Classification</label>
                    <div className="flex flex-wrap gap-3">
                      {['all', 'Villa', 'Penthouse', 'Loft', 'Manor', 'Studio', 'Island'].map((type) => (
                        <button
                          key={type}
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-full text-[10px] uppercase font-bold tracking-widest border transition-all ${
                            selectedType === type 
                            ? 'bg-gold-500 border-gold-500 text-black' 
                            : 'bg-white/5 border-white/10 text-white/60 hover:border-white/30'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-white/50">Capital Allocation (Budget)</label>
                      <span className="text-xl font-serif text-gold-500">Up to £{(budgetRange[1] / 1000000).toFixed(1)}M</span>
                    </div>
                    <Slider 
                      value={[budgetRange[1]]} 
                      onValueChange={(val) => setBudgetRange([0, val[0]])}
                      max={10000000} 
                      step={500000}
                    />
                  </div>

                  <div className="flex items-end justify-end">
                    <Button 
                      variant="ghost" 
                      onClick={() => {
                        setSelectedType('all');
                        setBudgetRange([0, 10000000]);
                        setSearchQuery('');
                      }}
                      className="text-white/40 hover:text-white uppercase tracking-widest text-[9px] font-bold"
                    >
                      Clear all parameters <X size={14} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Grid */}
        <div className={`grid gap-10 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          <AnimatePresence mode="popLayout">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, idx) => (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={viewMode === 'list' ? 'flex flex-col md:flex-row gap-10 h-auto md:h-80' : ''}
                >
                  <PropertyCard property={property} />
                  {viewMode === 'list' && (
                    <div className="flex-1 py-4 flex flex-col justify-between">
                       <div className="space-y-4">
                          <Badge className="bg-gold-500/10 text-gold-500 border-gold-500/20">{property.type}</Badge>
                          <h3 className="text-3xl font-serif">{property.title}</h3>
                          <p className="flex items-center gap-2 text-white/40 italic">
                            <MapPin size={16} /> {property.location}
                          </p>
                          <p className="text-white/60 line-clamp-2 font-light">{property.description}</p>
                       </div>
                       <div className="flex justify-between items-center pt-8 border-t border-white/5">
                          <span className="text-3xl font-serif gold-text">£{(property.price / 1000000).toFixed(1)}M</span>
                          <Link to={`/listings/${property.id}`}>
                            <Button className="bg-white/5 hover:bg-white/10 uppercase tracking-widest text-[10px] px-8 h-12 rounded-xl">View Details</Button>
                          </Link>
                       </div>
                    </div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-32 text-center">
                <p className="text-white/40 font-serif italic text-2xl mb-4">No estates match your criteria</p>
                <Button variant="link" className="text-gold-500" onClick={() => {
                   setSearchQuery('');
                   setSelectedType('all');
                   setBudgetRange([0, 10000000]);
                }}>Reset all filters</Button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
