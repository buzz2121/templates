/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Phone } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Listings from '@/pages/Listings';
import PropertyDetails from '@/pages/PropertyDetails';
import Saved from '@/pages/Saved';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Agents from '@/pages/Agents';
import About from '@/pages/About';
import Blog from '@/pages/Blog';
import Compare from '@/pages/Compare';
import Projects from '@/pages/Projects';
import Calculator from '@/pages/Calculator';
import ScrollToTop from '@/components/ScrollToTop';

import { TooltipProvider } from "@/components/ui/tooltip";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/listings" element={<PageWrapper><Listings /></PageWrapper>} />
        <Route path="/listings/:id" element={<PageWrapper><PropertyDetails /></PageWrapper>} />
        <Route path="/property/:id" element={<PageWrapper><PropertyDetails /></PageWrapper>} />
        <Route path="/saved" element={<PageWrapper><Saved /></PageWrapper>} />
        <Route path="/agents" element={<PageWrapper><Agents /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/compare" element={<PageWrapper><Compare /></PageWrapper>} />
        <Route path="/calculator" element={<PageWrapper><Calculator /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/audit" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/market" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/legacy" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/liaison" element={<PageWrapper><Services /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <TooltipProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen cinematic-bg font-sans selection:bg-gold-500 selection:text-black relative">
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          <Footer />

          {/* Global Floating Call Button (Mobile Only) */}
          <div className="md:hidden fixed bottom-8 right-8 z-[100]">
            <motion.a 
              href="tel:+442079460123"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-gold-500 text-black rounded-full flex items-center justify-center shadow-[0_15px_30px_rgba(212,175,55,0.4)] border-2 border-black/10"
            >
              <Phone fill="currentColor" />
            </motion.a>
          </div>
        </div>
      </Router>
    </TooltipProvider>
  );
}
