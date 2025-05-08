
import React from 'react';

interface BrandNameProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
}

export default function BrandName({ className = '', size = 'md' }: BrandNameProps) {
  const sizeClass = size ? `text-${size}` : '';
  
  return (
    <span className={`brand-name format-brand-name ${sizeClass} ${className}`}>
      <span className="fod">FOD</span>
      <span className="ai">AI</span>
    </span>
  );
}
