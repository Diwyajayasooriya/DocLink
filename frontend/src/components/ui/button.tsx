
import React from 'react';
import './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'destructive';
  size?: 'default' | 'sm' | 'lg';
  children: React.ReactNode;
}

export const buttonVariants = (props?: { variant?: string; size?: string }) => {
  const variant = props?.variant || 'default';
  const size = props?.size || 'default';
  return `btn btn-${variant} btn-${size}`;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  variant = 'default', 
  size = 'default', 
  className = '', 
  children, 
  ...props 
}, ref) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  
  return (
    <button 
      ref={ref}
      className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
