
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, Sparkles, Wand2 } from 'lucide-react';
import { CartItem } from '../../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemove 
}) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onClose}
            className="fixed inset-0 bg-stone-900/60 backdrop-blur-md z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-neutral-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-pink-500" />
                <h2 className="text-xl font-serif font-bold">Your Garden Cart</h2>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-neutral-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
                  <ShoppingBag className="w-16 h-16 mb-4 stroke-1" />
                  <p className="text-lg font-serif">Your cart is as empty as a winter field.</p>
                  <button 
                    onClick={onClose}
                    className="mt-6 text-pink-500 font-bold uppercase tracking-widest text-sm"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden bg-neutral-100 shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1">
                        <h4 className="font-serif font-bold text-neutral-800">{item.name}</h4>
                        <span className="font-bold text-neutral-900">${item.price * item.quantity}</span>
                      </div>
                      <p className="text-xs text-neutral-400 mb-2 uppercase tracking-widest">{item.category}</p>
                      
                      {/* AI Personal Message */}
                      {item.personalMessage && (
                        <div className="mb-3 px-3 py-2 bg-primary/5 rounded-xl border border-primary/10 relative overflow-hidden">
                          <Wand2 className="absolute top-1 right-1 text-primary/20" size={14} />
                          <div className="text-[10px] font-bold text-primary uppercase tracking-tight mb-0.5">Personal Message</div>
                          <div className="text-[11px] text-stone-600 italic line-clamp-2 leading-snug">"{item.personalMessage.text}"</div>
                        </div>
                      )}

                      {/* Custom Bouquet Summary */}
                      {item.customBouquet && (
                        <div className="mb-3 px-3 py-2 bg-stone-50 rounded-xl border border-stone-100">
                          <div className="text-[10px] font-bold text-stone-400 uppercase tracking-tight mb-1">Arrangement: {item.customBouquet.arrangement}</div>
                          <div className="flex flex-wrap gap-1">
                            {item.customBouquet.flowers.slice(0, 3).map(f => (
                              <span key={f.component.id} className="text-[9px] bg-white px-1.5 py-0.5 rounded border border-stone-100 text-stone-500">
                                {f.count}x {f.component.name}
                              </span>
                            ))}
                            {item.customBouquet.flowers.length > 3 && <span className="text-[9px] text-stone-400">+{item.customBouquet.flowers.length - 3} more</span>}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-3 bg-neutral-50 px-3 py-1 rounded-full border border-neutral-100">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="p-1 hover:text-pink-500 transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="p-1 hover:text-pink-500 transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="p-2 text-neutral-300 hover:text-red-400 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-8 border-t border-neutral-100 bg-neutral-50">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-neutral-500 text-sm">
                    <span>Subtotal</span>
                    <span>${total}</span>
                  </div>
                  <div className="flex justify-between text-neutral-500 text-sm">
                    <span>Eco-friendly Shipping</span>
                    <span>$12</span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-neutral-200">
                    <span className="text-lg font-serif font-bold">Total</span>
                    <span className="text-2xl font-bold text-pink-600">${total + 12}</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <button className="py-4 bg-stone-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 group hover:bg-stone-800 transition-all text-[11px] uppercase tracking-widest">
                    Checkout
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="py-4 bg-white border border-stone-200 text-stone-900 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-stone-50 transition-all text-[11px] uppercase tracking-widest">
                    Guest Pay
                  </button>
                </div>
                <div className="flex items-center justify-center gap-2 text-[10px] text-stone-400 font-medium">
                  <Sparkles size={12} className="text-primary" />
                  Free emotional poetry included
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
