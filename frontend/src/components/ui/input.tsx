
import React from 'react';
import './input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input 
        ref={ref}
        className={`input ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
