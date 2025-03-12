
import React from 'react';

interface MovingObjectProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  children: React.ReactNode;
  delay?: string;
  speed?: 'slow' | 'medium' | 'fast';
}

const MovingObject: React.FC<MovingObjectProps> = ({ 
  direction = 'horizontal', 
  className = "",
  children,
  delay = "0s",
  speed = "medium"
}) => {
  const animation = direction === 'horizontal' ? 'bounce-horizontal' : 'bounce-vertical';
  const speedMap = {
    slow: "5s",
    medium: "3s",
    fast: "2s"
  };
  
  return (
    <div 
      className={`inline-block ${className}`} 
      style={{ 
        animation: `${animation} ${speedMap[speed]} ease-in-out infinite`,
        animationDelay: delay
      }}
    >
      {children}
    </div>
  );
};

export default MovingObject;
