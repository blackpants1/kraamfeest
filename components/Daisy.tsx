
import React from 'react';

interface DaisyProps {
  size?: number;
  rotation?: number;
  className?: string;
}

export const Daisy: React.FC<DaisyProps> = ({ size = 100, rotation = 0, className = "" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      width={size} 
      height={size} 
      className={`inline-block ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      {/* Petals */}
      <g fill="#ffffff">
        <path d="M50 15 C55 0, 45 0, 50 15 Z" transform="rotate(0, 50, 50)" />
        {Array.from({ length: 9 }).map((_, i) => (
          <ellipse 
            key={i}
            cx="50" 
            cy="25" 
            rx="8" 
            ry="20" 
            transform={`rotate(${(i * 40)}, 50, 50)`} 
          />
        ))}
      </g>
      {/* Heart */}
      <circle cx="50" cy="50" r="12" fill="#f4c430" />
    </svg>
  );
};

export const DaisyPetal: React.FC<{ size: number }> = ({ size }) => {
  return (
    <svg viewBox="0 0 40 60" width={size} height={size * 1.5}>
       <path d="M20 0 C35 20, 35 40, 20 60 C5 40, 5 20, 20 0 Z" fill="#ffffff" />
    </svg>
  );
};
