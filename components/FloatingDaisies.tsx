
import React from 'react';
import { Daisy } from './Daisy';

export const FloatingDaisies: React.FC = () => {
  // Fixed set of random positions to prevent hydration mismatch
  const daisies = [
    { top: '5%', left: '10%', size: 40, rotate: 15, delay: '0s' },
    { top: '15%', left: '85%', size: 60, rotate: -10, delay: '1s' },
    { top: '40%', left: '5%', size: 30, rotate: 45, delay: '0.5s' },
    { top: '60%', left: '90%', size: 50, rotate: 20, delay: '1.5s' },
    { top: '85%', left: '15%', size: 45, rotate: -30, delay: '2s' },
    { top: '25%', left: '50%', size: 25, rotate: 180, delay: '0.2s', opacity: 0.1 },
    { top: '75%', left: '45%', size: 35, rotate: 90, delay: '1.2s', opacity: 0.15 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {daisies.map((d, i) => (
        <div 
          key={i}
          className={`absolute animate-sway opacity-[0.4]`}
          style={{ 
            top: d.top, 
            left: d.left, 
            animationDelay: d.delay,
          }}
        >
          <Daisy size={d.size} rotation={d.rotate} />
        </div>
      ))}
    </div>
  );
};
