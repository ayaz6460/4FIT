import React from 'react';
import Button from './Button';
import Reveal from './Reveal';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16 flex flex-col items-center">
        <Reveal>
          <div className="inline-block mb-4 px-4 py-1 border border-red-600/50 rounded-full bg-red-600/10 backdrop-blur-sm mx-auto">
            <span className="text-red-500 font-bold tracking-widest text-xs uppercase">India's #1 Modern Fitness Hub</span>
          </div>
        </Reveal>
        
        <Reveal delay={200}>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter leading-tight">
            FORGE YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 text-glow">ULTIMATE FORM</span>
          </h1>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Experience state-of-the-art equipment, celebrity trainers, and our exclusive AI-powered workout plans right here in the heart of the city.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => document.getElementById('ai-trainer')?.scrollIntoView({ behavior: 'smooth'})}>
              Try AI Trainer
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('schedule')?.scrollIntoView({ behavior: 'smooth'})}>
              View Schedule
            </Button>
          </div>
        </Reveal>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;