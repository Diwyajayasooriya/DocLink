
import React, { useState } from 'react';
import './tooltip.css';

interface TooltipProviderProps {
  delayDuration?: number;
  children: React.ReactNode;
}

interface TooltipProps {
  children: React.ReactNode;
}

interface TooltipTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

interface TooltipContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  hidden?: boolean;
  children: React.ReactNode;
}

export const TooltipProvider: React.FC<TooltipProviderProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const Tooltip: React.FC<TooltipProps> = ({ children }) => {
  return <div className="tooltip-wrapper">{children}</div>;
};

export const TooltipTrigger: React.FC<TooltipTriggerProps> = ({ children }) => {
  return <div className="tooltip-trigger">{children}</div>;
};

export const TooltipContent: React.FC<TooltipContentProps> = ({ 
  side = 'top',
  align = 'center',
  hidden = false,
  className = '',
  children,
  ...props 
}) => {
  if (hidden) return null;
  
  return (
    <div 
      className={`tooltip-content tooltip-${side} tooltip-${align} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
