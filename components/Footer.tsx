import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-black italic tracking-tighter text-white mb-6">
              4<span className="text-red-600">FIT</span>
            </div>
            <p className="text-gray-500 max-w-sm">
              Forging elite bodies through technology and iron. Join India's fastest growing fitness revolution today.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-red-600 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Classes</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Trainers</li>
              <li className="hover:text-red-600 cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-500">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-red-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Level 4, Phoenix Palladium,<br/>Lower Parel, Mumbai,<br/>Maharashtra 400013</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                +91 99887 76655
              </li>
              <li className="flex items-center">
                 <svg className="w-5 h-5 mr-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                namaste@4fitgym.in
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">© 2024 4Fit Gym India. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             {/* Social Icons placeholders */}
             <div className="w-6 h-6 bg-zinc-800 rounded-full hover:bg-red-600 cursor-pointer transition-colors"></div>
             <div className="w-6 h-6 bg-zinc-800 rounded-full hover:bg-red-600 cursor-pointer transition-colors"></div>
             <div className="w-6 h-6 bg-zinc-800 rounded-full hover:bg-red-600 cursor-pointer transition-colors"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;