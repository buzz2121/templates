import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import properties from '@/data/properties.json';
import { X, Check, Landmark, BedDouble, Bath, Square, MapPin, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function Compare() {
  const [comparedIds, setComparedIds] = useState<string[]>([]);
  const [compareList, setCompareList] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('compareProperties') || '[]');
    setComparedIds(saved);
  }, []);

  useEffect(() => {
    setCompareList(properties.filter(p => comparedIds.includes(p.id)));
  }, [comparedIds]);

  const removeProperty = (id: string) => {
    const newList = comparedIds.filter(item => item !== id);
    setComparedIds(newList);
    localStorage.setItem('compareProperties', JSON.stringify(newList));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto text-white bg-black">
      <div className="mb-20 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold-500 font-bold uppercase tracking-[0.3em] text-[10px] mb-4"
        >
          Strategic Audit
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-serif mb-6"
        >
          Portfolio Comparison
        </motion.h1>
      </div>

      {compareList.length === 0 ? (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32 text-center border border-dashed border-white/10"
        >
          <Landmark size={48} className="mx-auto mb-6 text-white/20" />
          <h2 className="text-2xl font-serif mb-4">No assets selected for comparison</h2>
          <p className="text-white/40 mb-10 max-w-md mx-auto">Explore our portfolio and select up to 3 properties to begin your strategic audit.</p>
          <Link to="/listings">
            <Button className="bg-gold-500 hover:bg-gold-600 text-black font-bold uppercase tracking-widest text-[10px] px-8 h-12 rounded-none">
              Browse Portfolio
            </Button>
          </Link>
        </motion.div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left w-1/4 border-b border-white/10">
                  <p className="text-[10px] uppercase font-bold tracking-widest text-gold-500">Asset Comparison</p>
                  <p className="text-white/40 font-light text-xs">Side-by-side audit</p>
                </th>
                {compareList.map(item => (
                  <th key={item.id} className="p-6 text-left border-b border-white/10 relative group">
                    <button 
                      onClick={() => removeProperty(item.id)}
                      className="absolute top-2 right-2 p-1 text-white/40 hover:text-white transition-colors"
                    >
                      <X size={14} />
                    </button>
                    <div className="aspect-video overflow-hidden mb-4 rounded-xl border border-white/5">
                      <img 
                        src={item.image} 
                        className="w-full h-full object-cover" 
                        alt={item.title} 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600";
                        }}
                      />
                    </div>
                    <Link to={`/property/${item.id}`} className="block">
                      <h3 className="text-lg font-serif mb-1 hover:text-gold-500 transition-colors">{item.title}</h3>
                      <p className="text-gold-500 font-serif text-xl">{item.price}</p>
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Features to compare */}
              {[
                { label: 'Location', key: 'location', icon: <MapPin size={14} /> },
                { label: 'Bedrooms', key: 'beds', icon: <BedDouble size={14} /> },
                { label: 'Bathrooms', key: 'baths', icon: <Bath size={14} /> },
                { label: 'Total Area', key: 'sqft', icon: <Square size={14} /> },
                { label: 'Property Type', key: 'type', icon: <Landmark size={14} /> },
              ].map((row, i) => (
                <tr key={row.key} className={i % 2 === 0 ? 'bg-white/5' : ''}>
                  <td className="p-6 font-bold uppercase tracking-widest text-[10px] text-white/50">
                    <div className="flex items-center gap-3">
                      <span className="text-gold-500/60">{row.icon}</span>
                      {row.label}
                    </div>
                  </td>
                  {compareList.map(item => (
                    <td key={`${item.id}-${row.key}`} className="p-6 text-sm font-light">
                      {item[row.key]}
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="p-6 font-bold uppercase tracking-widest text-[10px] text-white/50">Amenities</td>
                {compareList.map(item => (
                  <td key={`${item.id}-amenities`} className="p-6">
                    <div className="flex flex-wrap gap-2">
                       {/* This assumes a sample of features to compare */}
                       {['Smart Home', 'Security', 'Private Entrance'].map(feat => (
                         <div key={feat} className="flex items-center gap-2 text-[9px] uppercase tracking-wider text-white/40">
                           <Check size={10} className="text-gold-500" /> {feat}
                         </div>
                       ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-6 border-t border-white/10" />
                {compareList.map(item => (
                  <td key={`${item.id}-cta`} className="p-6 border-t border-white/10">
                    <Link to="/contact">
                      <Button className="w-full bg-transparent border border-white/20 hover:border-gold-500 hover:text-gold-500 rounded-none h-12 uppercase tracking-widest text-[9px] font-bold">
                        Enquire
                      </Button>
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
