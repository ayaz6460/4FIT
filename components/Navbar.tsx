import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['Classes', 'Schedule', 'A.I. Trainer', 'Pricing', 'Contact'];

  return (
    <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-black italic tracking-tighter text-white cursor-pointer" onClick={() => scrollTo('hero')}>
          4<span className="text-red-600">FIT</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace('.', '').replace(' ', '-'))}
              className="text-sm font-semibold text-gray-300 hover:text-red-500 uppercase tracking-widest transition-colors"
            >
              {item}
            </button>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className={`w-8 h-8 transition-transform duration-300 ${mobileMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Animated */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-zinc-900 border-t border-zinc-800 shadow-2xl overflow-hidden transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="p-6 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <button 
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace('.', '').replace(' ', '-'))}
              style={{ transitionDelay: `${mobileMenuOpen ? index * 75 : 0}ms` }}
              className={`text-left text-lg font-bold text-gray-300 hover:text-red-500 transform transition-all duration-500 ${
                mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;