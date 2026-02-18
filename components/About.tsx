import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ABOUT_CONTENT } from '../constants';

const About: React.FC = () => {
  return (
    <SectionWrapper id="sobre">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
             <img 
               src="https://picsum.photos/800/600" 
               alt="Equipe Ikatec trabalhando em inovação" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/90 p-6 backdrop-blur-sm">
                <p className="text-brand-neon font-semibold text-lg">Inovando desde 2010</p>
             </div>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold text-sm mb-2 border border-brand-blue/20">
            Sobre a Ikatec
          </div>
          <h2 className="text-3xl font-semibold text-brand-dark sm:text-4xl">
            {ABOUT_CONTENT.title}
          </h2>
          <div className="space-y-4 text-gray-600 text-lg font-light leading-relaxed">
            {ABOUT_CONTENT.paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="border-l-4 border-brand-blue pl-4">
              <span className="block text-3xl font-semibold text-brand-dark">26+</span>
              <span className="text-sm text-gray-500 font-light">Estados Atendidos</span>
            </div>
            <div className="border-l-4 border-brand-neon pl-4">
              <span className="block text-3xl font-semibold text-brand-dark">Multi</span>
              <span className="text-sm text-gray-500 font-light">Ecossistema SaaS</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;