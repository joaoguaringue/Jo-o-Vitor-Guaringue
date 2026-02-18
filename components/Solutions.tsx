import React from 'react';
import SectionWrapper from './SectionWrapper';
import { SOLUTIONS_DATA } from '../constants';

const Solutions: React.FC = () => {
  return (
    <SectionWrapper id="solucoes" bg="gray">
      <div className="text-center mb-16">
        <span className="text-brand-blue font-semibold tracking-wide uppercase text-sm">O que oferecemos</span>
        <h2 className="mt-2 text-3xl leading-8 font-semibold tracking-tight text-brand-dark sm:text-4xl">
          Soluções para suprir as necessidades do seu negócio
        </h2>
        <p className="mt-4 max-w-2xl text-xl text-gray-500 font-light mx-auto">
          Um ecossistema completo para marketing, atendimento, processos, jurídico e mais.
        </p>
      </div>

      <div className="space-y-16">
        {SOLUTIONS_DATA.map((category) => (
          <div key={category.id} className="relative">
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-brand-dark rounded-lg text-brand-neon shadow-lg">
                <category.icon size={28} />
              </div>
              <h3 className="text-2xl font-semibold text-brand-dark">{category.title}</h3>
              <div className="h-px bg-gray-200 flex-grow ml-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product) => (
                <div 
                  key={product.name} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group hover:border-brand-blue/30"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                       <div className="flex items-center gap-4">
                          {/* Logo Placeholder */}
                          <div className="h-12 w-12 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                             <div className="w-6 h-6 bg-slate-200 rounded-sm opacity-50"></div>
                          </div>
                          <h4 className="text-xl font-semibold text-brand-dark group-hover:text-brand-blue transition-colors">
                            {product.name}
                          </h4>
                       </div>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-blue text-sm font-semibold whitespace-nowrap ml-2 pt-2">
                        Saiba mais &rarr;
                      </span>
                    </div>
                    <p className="text-gray-600 font-light">
                      {product.description}
                    </p>
                  </div>
                  <div className="bg-slate-50 px-6 py-3 border-t border-gray-100">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {category.title.split('/')[0]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Solutions;