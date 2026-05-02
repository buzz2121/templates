/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import OurHotels from './pages/OurHotels';
import RoomsSuites from './pages/RoomsSuites';
import DiningPage from './pages/DiningPage';
import SpecialOffers from './pages/SpecialOffers';
import EventsPage from './pages/EventsPage';
import BookNow from './pages/BookNow';
import RequestProposal from './pages/RequestProposal';
import FloorPlans from './pages/FloorPlans';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore - React 19 types issue with key on component */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/hotels" element={<OurHotels />} />
        <Route path="/rooms" element={<RoomsSuites />} />
        <Route path="/dining" element={<DiningPage />} />
        <Route path="/offers" element={<SpecialOffers />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/request-proposal" element={<RequestProposal />} />
        <Route path="/floor-plans" element={<FloorPlans />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="bg-royal-dark min-h-screen text-royal-white font-sans selection:bg-royal-gold selection:text-royal-dark overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
