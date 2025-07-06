
import React, { useState } from 'react';
import './sheet.css';

interface SheetProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

interface SheetContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  children: React.ReactNode;
}

export const Sheet: React.FC<SheetProps> = ({ 
  open = false, 
  onOpenChange,
  children 
}) => {
  return (
    <div className={`sheet ${open ? 'sheet-open' : ''}`}>
      {children}
    </div>
  );
};

export const SheetContent: React.FC<SheetContentProps> = ({ 
  side = 'right',
  className = '',
  children,
  ...props 
}) => {
  return (
    <div 
      className={`sheet-content sheet-content-${side} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
