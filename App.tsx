import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Classes from './components/Classes';
import AITrainer from './components/AITrainer';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black selection:bg-green-500 selection:text-black relative">
      {/* Demo Banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-yellow-500 flex items-center justify-center px-4">
        <p className="text-black text-[10px] md:text-xs font-black uppercase tracking-widest text-center">
          ⚠️ THIS IS A DEMO WEBSITE. SOME INFORMATION OR IMAGES MAY BE INACCURATE. ⚠️
        </p>
      </div>

      <Navbar />

      {/* Watermark Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[9999] flex items-center justify-center overflow-hidden">
        <div className="text-white opacity-[0.04] text-[15vw] font-black -rotate-45 whitespace-nowrap select-none">
          DEMO WEBSITE
        </div>
      </div>
      
      {/* Corner Watermark */}
      <div className="fixed bottom-4 right-4 z-[9999] pointer-events-none opacity-30 mix-blend-difference">
         <div className="border border-white/50 text-white/50 text-[10px] font-bold px-2 py-1 rounded">
           DEMO MODE
         </div>
      </div>

      <main>
        <Hero />
        <Classes />
        <AITrainer />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
};

export default App;