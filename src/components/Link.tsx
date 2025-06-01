import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Link = ({ 
  href, 
  children, 
  onClick,
  className = ''
}: LinkProps) => {
  return (
    <a 
      href={href} 
      onClick={onClick}
      className={`text-white hover:text-purple-400 transition-colors duration-300 font-medium ${className}`}
    >
      {children}
    </a>
  );
};