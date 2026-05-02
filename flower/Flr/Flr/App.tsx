import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/layout/CartDrawer';
import { SearchModal } from './components/ui/SearchModal';
import { AccountModal } from './components/ui/AccountModal';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { ExitIntentPopup } from './components/ui/ExitIntentPopup';
import { ScrollToTop } from './components/ui/ScrollToTop';
import { Product, CartItem } from './types';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { OccasionsPage } from './pages/OccasionsPage';
import { SubscriptionsPage } from './pages/SubscriptionsPage';
import { AboutPage } from './pages/AboutPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { FAQPage } from './pages/FAQPage';
import { StudioPage } from './pages/StudioPage';
import { CustomBouquet } from './types';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id && !item.customBouquet);
      if (existing) {
        return prev.map(item =>
          (item.id === product.id && !item.customBouquet) ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const addCustomBouquetToCart = (bouquet: CustomBouquet, personalMessage?: any) => {
    const customItem: CartItem = {
      id: `custom-${Date.now()}`,
      name: `Artisan Custom ${bouquet.arrangement} Bouquet`,
      price: bouquet.totalPrice,
      category: 'Custom',
      image: 'https://images.unsplash.com/photo-1548079596-39bcce88a61a?auto=format&fit=crop&w=800&q=80',
      description: `Bespoke arrangement featuring ${bouquet.flowers.length} different varieties.`,
      rating: 5,
      quantity: 1,
      customBouquet: bouquet,
      personalMessage
    };

    setCart(prev => [...prev, customItem]);
    setIsCartOpen(true);
  };

  const quickBuy = (product: Product) => {
    addToCart(product);
    // In a real app, this would redirect straight to checkout
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeCartItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-stone-900 leading-relaxed">
        <ScrollToTop />
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]" 
          style={{ scaleX }} 
        />

        <Navbar 
          onCartOpen={() => setIsCartOpen(true)} 
          onSearchOpen={() => setIsSearchOpen(true)}
          onAccountOpen={() => setIsAccountOpen(true)}
          cartCount={cart.length} 
        />
        
        <main>
          <Routes>
            <Route path="/" element={<HomePage onAddToCart={addToCart} onQuickBuy={quickBuy} />} />
            <Route path="/shop" element={<ShopPage onAddToCart={addToCart} />} />
            <Route path="/studio" element={<StudioPage onAddCustomBouquet={addCustomBouquetToCart} />} />
            <Route path="/occasions" element={<OccasionsPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/track-order" element={<TrackOrderPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>

        <Footer />

        <CartDrawer 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeCartItem}
        />

        <SearchModal 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onAddToCart={addToCart}
        />

        <AccountModal 
          isOpen={isAccountOpen}
          onClose={() => setIsAccountOpen(false)}
        />
        
        <WhatsAppButton />
        <ExitIntentPopup />
      </div>
    </Router>
  );
}
