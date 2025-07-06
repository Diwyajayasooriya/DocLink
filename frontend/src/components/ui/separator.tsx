
import React from 'react';
import './separator.css';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  decorative?: boolean;
}

export const Separator = React.forwardRef<HTMLDivElement, SeparatorProps>(({ 
  className = '', 
  orientation = 'horizontal',
  decorative = true,
  ...props 
}, ref) => {
  return (
    <div 
      ref={ref}
      className={`separator separator-${orientation} ${className}`}
      role={decorative ? "none" : "separator"}
      aria-orientation={orientation}
      {...props}
    />
  );
});

Separator.displayName = 'Separator';
