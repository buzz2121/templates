import React from 'react';
import Hero from '../components/Hero';
import BookingWidget from '../components/BookingWidget';
import About from '../components/About';
import Rooms from '../components/Rooms';
import Dining from '../components/Dining';
import Experiences from '../components/Experiences';
import PageTransition from '../components/PageTransition';

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <BookingWidget />
      <About />
      <Rooms />
      <Dining />
      <Experiences />
    </PageTransition>
  );
}
