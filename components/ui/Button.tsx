import React from 'react';
import { REGISTRATION_LINK } from '../../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  href = REGISTRATION_LINK, 
  className = '',
  onClick,
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 py-3 px-6 rounded-md shadow-lg";
  
  const variants = {
    primary: "bg-brand-neon text-brand-dark hover:bg-white hover:text-brand-purple",
    secondary: "bg-brand-purple text-white hover:bg-brand-purpleDark",
    outline: "border-2 border-white text-white hover:bg-white hover:text-brand-dark"
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={combinedClasses}>
        {children} <ArrowRight className="ml-2 w-5 h-5" />
      </button>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={combinedClasses}>
      {children} <ArrowRight className="ml-2 w-5 h-5" />
    </a>
  );
};