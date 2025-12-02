import React from 'react';
import { PricingTier } from '../types';
import Button from './Button';
import Reveal from './Reveal';

const pricingData: PricingTier[] = [
  {
    name: "Day Pass",
    price: "₹499",
    features: ["Access to gym floor", "Locker room access", "1 Free Group Class"],
    recommended: false
  },
  {
    name: "Pro Member",
    price: "₹2,499",
    features: ["24/7 Gym Access", "Unlimited Classes", "Steam & Sauna", "1 Free AI Plan/Month"],
    recommended: true
  },
  {
    name: "Elite",
    price: "₹4,999",
    features: ["All Pro Benefits", "Unlimited AI Training", "Dedicated Locker", "Valet Parking", "Nutrition Consultation"],
    recommended: false
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">MEMBERSHIPS</h2>
            <p className="text-gray-400">Transparent pricing. No joining fees. Prices inclusive of GST.</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {pricingData.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 200}>
              <div 
                className={`relative p-8 rounded-3xl border ${
                  tier.recommended 
                  ? 'bg-zinc-900 border-red-600 shadow-[0_0_30px_rgba(220,38,38,0.15)] scale-105 z-10' 
                  : 'bg-zinc-900/50 border-zinc-800 hover:border-zinc-700'
                } transition-all duration-300`}
              >
                {tier.recommended && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider">
                    Bestseller
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-300 mb-2">{tier.name}</h3>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                  <span className="text-gray-500 ml-1 mb-1">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <svg className="w-5 h-5 text-red-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.recommended ? 'primary' : 'outline'} 
                  fullWidth
                >
                  Choose {tier.name}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;