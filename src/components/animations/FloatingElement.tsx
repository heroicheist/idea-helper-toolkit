
import React from 'react';

interface FloatingElementProps {
  className?: string;
  children: React.ReactNode;
  delay?: string;
  speed?: 'slow' | 'medium' | 'fast';
  style?: React.CSSProperties;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = "", 
  children, 
  delay = "0s",
  speed = "medium",
  style = {}
}) => {
  const speedMap = {
    slow: "5s",
    medium: "3s",
    fast: "2s"
  };
  
  return (
    <div 
      className={`inline-block ${className}`} 
      style={{ 
        animation: `float ${speedMap[speed]} ease-in-out infinite`,
        animationDelay: delay,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default FloatingElement;
