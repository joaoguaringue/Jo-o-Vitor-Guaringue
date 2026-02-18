import React from 'react';
import SectionWrapper from './SectionWrapper';

const Clients: React.FC = () => {
  // Creating a list of dummy clients for the carousel
  const clients = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <SectionWrapper className="border-t border-gray-100 overflow-hidden bg-slate-50">
      <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wide mb-12">
        Empresas que confiam na Ikatec
      </p>
      
      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden group">
        {/* Moving Track - pauses on hover */}
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {/* First set of logos */}
          {clients.map((i) => (
            <div key={`original-${i}`} className="mx-8 w-48 flex-shrink-0">
               <div className="h-24 w-full bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold text-lg hover:border-brand-blue/30 hover:shadow-lg hover:text-brand-blue transition-all duration-300 cursor-default">
                  CLIENTE {i}
               </div>
            </div>
          ))}
          {/* Duplicate set of logos for seamless looping */}
          {clients.map((i) => (
            <div key={`duplicate-${i}`} className="mx-8 w-48 flex-shrink-0">
               <div className="h-24 w-full bg-white border border-gray-100 rounded-lg flex items-center justify-center text-gray-300 font-bold text-lg hover:border-brand-blue/30 hover:shadow-lg hover:text-brand-blue transition-all duration-300 cursor-default">
                  CLIENTE {i}
               </div>
            </div>
          ))}
        </div>
        
        {/* Gradient fade on edges for smooth look */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
      </div>
    </SectionWrapper>
  );
};

export default Clients;