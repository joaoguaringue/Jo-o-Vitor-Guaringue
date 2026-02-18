import React from 'react';
import { HERO_CONTENT } from '../constants';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-brand-dark pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-brand-blue blur-[100px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-brand-neon blur-[100px] opacity-10"></div>
      
      {/* Grid overlay for tech feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight">
          {HERO_CONTENT.title}
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 font-light mb-10">
          {HERO_CONTENT.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" onClick={() => document.getElementById('solucoes')?.scrollIntoView()}>
            Conheça as Soluções
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('contato')?.scrollIntoView()}>
            Entre em Contato
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;