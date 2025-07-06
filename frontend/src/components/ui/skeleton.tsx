
import React from 'react';
import './skeleton.css';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ 
  className = '', 
  ...props 
}) => {
  return (
    <div 
      className={`skeleton ${className}`}
      {...props}
    />
  );
};
