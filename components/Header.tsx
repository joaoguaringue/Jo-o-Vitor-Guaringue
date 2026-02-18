import React, { useState, useEffect } from 'react';
    import { Menu, X } from 'lucide-react';
    import { NAV_ITEMS } from '../constants';
    import Button from './Button';
    
    const Header: React.FC = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    
      return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              
              {/* Logo Placeholder */}
              <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                <span className="font-sans font-semibold text-2xl text-brand-dark tracking-tight">
                  ikatec
                </span>
              </div>
    
              {/* Desktop Nav */}
              <nav className="hidden md:flex space-x-8 items-center">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-brand-blue font-semibold transition-colors text-sm uppercase tracking-wide"
                  >
                    {item.label}
                  </a>
                ))}
                <Button variant="primary" className="py-2 px-6 text-sm">
                  Fale Conosco
                </Button>
              </nav>
    
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-brand-dark hover:text-brand-blue focus:outline-none"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
    
          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-brand-blue hover:bg-gray-50"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="pt-4 px-3">
                  <Button variant="primary" className="w-full">
                    Fale Conosco
                  </Button>
                </div>
              </div>
            </div>
          )}
        </header>
      );
    };
    
    export default Header;