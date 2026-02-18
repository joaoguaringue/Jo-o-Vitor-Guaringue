import React from 'react';
import SectionWrapper from './SectionWrapper';
import { CONTACT_INFO } from '../constants';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import Button from './Button';

const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contato" bg="dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl mb-6">
            Vamos transformar o seu negócio?
          </h2>
          <p className="text-lg text-gray-300 font-light mb-8">
            {CONTACT_INFO.cta}
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-white">Telefone</p>
                <p className="mt-1 text-gray-300 font-light">{CONTACT_INFO.phone}</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-brand-blue" />
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-white">E-mail</p>
                <p className="mt-1 text-gray-300 font-light">{CONTACT_INFO.email}</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MessageSquare className="h-6 w-6 text-brand-neon" />
              </div>
              <div className="ml-4">
                <p className="text-base font-semibold text-white">WhatsApp</p>
                <p className="mt-1 text-gray-300 font-light">Disponível para chat comercial</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-xl p-8">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Nome Completo</label>
              <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue bg-gray-50 p-3 font-light" placeholder="Seu nome" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">E-mail Corporativo</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue bg-gray-50 p-3 font-light" placeholder="seu@email.com" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Mensagem</label>
              <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-blue focus:ring-brand-blue bg-gray-50 p-3 font-light" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;