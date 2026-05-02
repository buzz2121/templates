/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import TourDetails from './pages/TourDetails';
import CartPage from './pages/CartPage';
import ExplorePage from './pages/ExplorePage';
import CategoryPage from './pages/CategoryPage';
import HelpPage from './pages/HelpPage';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/tour/:id" element={<TourDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
        <Header />
        
        <AnimatedRoutes />

        <Footer />
      </div>
    </Router>
  );
}
