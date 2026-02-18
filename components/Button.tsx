import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-300";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-blue hover:bg-cyan-500 focus:ring-brand-blue shadow-lg shadow-brand-blue/20",
    outline: "border-brand-neon text-brand-neon bg-transparent hover:bg-brand-neon/10 focus:ring-brand-neon",
    white: "border-transparent text-brand-dark bg-white hover:bg-gray-100 focus:ring-white",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;