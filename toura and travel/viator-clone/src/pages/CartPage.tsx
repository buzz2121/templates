import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_TOURS } from '../data/mockData';
import { ShoppingBag, Trash2, ChevronLeft, CreditCard, ShieldCheck, Truck } from 'lucide-react';

import { PageWrapper } from '../components/PageWrapper';

export default function CartPage() {
  const navigate = useNavigate();
  // Simple representation of cart items using mock data
  const cartItems = [MOCK_TOURS[0], MOCK_TOURS[2]];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <PageWrapper>
      <div className="pt-24 min-h-screen bg-slate-50 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center gap-2 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-white rounded-full transition-colors text-slate-400 hover:text-slate-900"
          >
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-3xl font-black tracking-tighter">Your Shopping Cart</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartItems.length > 0 ? (
              cartItems.map((item, idx) => (
                <div key={idx} className="bg-white rounded-[2rem] p-6 border border-slate-100 flex gap-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden shrink-0">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="font-extrabold text-slate-900 text-lg leading-tight hover:text-yellow-500 cursor-pointer transition-colors" onClick={() => navigate(`/tour/${item.id}`)}>
                          {item.title}
                        </h3>
                        <button className="text-slate-300 hover:text-red-500 transition-colors p-1">
                          <Trash2 size={18} />
                        </button>
                      </div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mt-1 italic">{item.location}</p>
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1 rounded-lg border border-slate-100">
                           <span className="text-[10px] font-black text-slate-400 uppercase">Quantity:</span>
                           <span className="text-sm font-bold text-slate-900">1</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xl font-black text-slate-900">${item.price}</p>
                      <p className="text-[10px] font-black text-[#00af87] uppercase tracking-widest bg-[#00af87]/5 px-2 py-1 rounded-md">Free Cancellation</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-[2.5rem] p-20 text-center border border-slate-100 shadow-sm border-dashed">
                <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ShoppingBag className="text-slate-300" size={32} />
                </div>
                <p className="text-slate-400 font-bold uppercase tracking-widest text-sm mb-6">Your cart is currently empty</p>
                <button 
                  onClick={() => navigate('/')}
                  className="bg-yellow-400 text-slate-900 px-10 py-3 rounded-full font-black uppercase text-xs tracking-widest hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/20"
                >
                  Start Exploring
                </button>
              </div>
            )}
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full blur-[60px] -mr-16 -mt-16" />
                <h2 className="text-xl font-black italic tracking-tight mb-8">Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span className="text-white">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <span>Tax (10%)</span>
                    <span className="text-white">${tax.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-white/10 my-4" />
                  <div className="flex justify-between items-end">
                    <span className="text-sm font-black uppercase tracking-[0.2em] text-yellow-400">Total</span>
                    <span className="text-3xl font-black text-white tracking-tighter">${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full py-5 bg-yellow-400 text-slate-900 font-black uppercase text-xs tracking-widest rounded-2xl hover:bg-yellow-500 transition-all shadow-xl shadow-yellow-400/30 flex items-center justify-center gap-3 active:scale-[0.98]">
                  <CreditCard size={18} />
                  Proceed to Checkout
                </button>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#00af87]/10 p-2 rounded-lg"><ShieldCheck size={20} className="text-[#00af87]" /></div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-widest leading-tight">Secure Payment Guaranteed</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg"><Truck size={20} className="text-slate-900" /></div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-widest leading-tight">Instant Confirmation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
