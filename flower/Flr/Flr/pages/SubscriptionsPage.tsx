
import React from 'react';
import { SubscriptionPlans } from '../components/sections/SubscriptionPlans';
import { DeliveryTracking } from '../components/sections/DeliveryTracking';

export const SubscriptionsPage: React.FC = () => {
  return (
    <div className="pt-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h1 className="text-5xl md:text-7xl font-serif font-bold italic text-pink-950 mb-4">Bloom Subscriptions</h1>
        <p className="text-pink-900/60 max-w-2xl">Elevate your space with regular deliveries of our finest seasonal arrangements.</p>
      </div>

      <SubscriptionPlans />
      <DeliveryTracking />
    </div>
  );
};
