
import React from 'react';
import './card.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ className = '', children }) => {
  return <div className={`card ${className}`}>{children}</div>;
};

export const CardHeader: React.FC<CardHeaderProps> = ({ className = '', children }) => {
  return <div className={`card-header ${className}`}>{children}</div>;
};

export const CardTitle: React.FC<CardTitleProps> = ({ className = '', children }) => {
  return <h3 className={`card-title ${className}`}>{children}</h3>;
};

export const CardContent: React.FC<CardContentProps> = ({ className = '', children }) => {
  return <div className={`card-content ${className}`}>{children}</div>;
};
