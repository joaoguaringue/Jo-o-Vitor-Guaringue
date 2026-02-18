import React from 'react';

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: 'white' | 'gray' | 'dark';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, className = '', children, bg = 'white' }) => {
  const bgColors = {
    white: 'bg-white',
    gray: 'bg-slate-50',
    dark: 'bg-brand-dark text-white' // Updated to #0E1928
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgColors[bg]} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;