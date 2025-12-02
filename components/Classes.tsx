import React from 'react';
import { ClassItem } from '../types';
import Reveal from './Reveal';

const classesData: ClassItem[] = [
  {
    id: 1,
    title: "Bollywood HIIT",
    description: "High-intensity cardio fused with Bollywood beats to torch calories and keep you moving.",
    schedule: "Mon/Wed/Fri - 6:00 AM",
    image: "https://images.unsplash.com/photo-1607962837359-92e5e5f52519?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Ashtanga Power Yoga",
    description: "Traditional strength-based mobility work to improve recovery, balance, and core strength.",
    schedule: "Tue/Thu - 7:00 PM",
    image: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "MMA Conditioning",
    description: "Technical striking drills mixed with extreme conditioning work for the ultimate fighter physique.",
    schedule: "Sat - 10:00 AM",
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=1000&auto=format&fit=crop"
  }
];

const Classes: React.FC = () => {
  return (
    <section id="classes" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">PREMIUM CLASSES</h2>
              <div className="h-1 w-24 bg-red-600 rounded-full"></div>
            </div>
            <p className="text-gray-400 max-w-md mt-4 md:mt-0 text-right">
              Led by India's top certified experts, our classes are designed to push you further than you thought possible.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {classesData.map((cls, index) => (
            <Reveal key={cls.id} delay={index * 200}>
              <div className="group relative rounded-2xl overflow-hidden h-96 cursor-pointer">
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{cls.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {cls.description}
                  </p>
                  <div className="flex items-center text-red-500 font-mono text-sm">
                    <span className="bg-red-600/20 px-2 py-1 rounded border border-red-600/30">
                      {cls.schedule}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;