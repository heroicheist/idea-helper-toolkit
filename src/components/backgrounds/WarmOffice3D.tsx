
import React, { useEffect, useState } from "react";
import { FloatingElement } from "../animations/FloatingElement";
import { MovingObject } from "../animations/MovingObject";

interface WarmOffice3DProps {
  scroll?: number;
  className?: string;
}


const WarmOffice3D: React.FC<WarmOffice3DProps> = ({ scroll = 0, className = "" }) => {
  const [perspective, setPerspective] = useState(1000);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientY / window.innerHeight - 0.5) * 5;
      const y = (e.clientX / window.innerWidth - 0.5) * 5;
      setRotation({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    setPerspective(1000 + scroll * 500);
  }, [scroll]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="absolute inset-0 warm-gradient opacity-30"
        style={{
          background: `linear-gradient(135deg, hsl(var(--warm-orange)), hsl(var(--warm-peach)), hsl(var(--warm-yellow)))`,
          backgroundSize: "200% 200%",
          animation: "gradient 15s ease infinite",
        }}
      />
      
      {/* 3D Office Environment */}
      <div 
        className="absolute inset-0 flex items-center justify-center"
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Central room */}
        <div 
          className="relative w-[80%] h-[80%]"
          style={{
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Floor */}
          <div 
            className="absolute w-full h-full origin-bottom"
            style={{
              transform: "rotateX(90deg) translateZ(200px) translateY(200px)",
              backgroundImage: "radial-gradient(circle at center, hsl(var(--warm-peach)), hsl(var(--warm-orange)))",
              borderRadius: "50%",
              opacity: 0.7,
              boxShadow: "0 0 50px rgba(255, 154, 85, 0.5) inset",
            }}
          />
          
          {/* Ceiling with rings */}
          <div 
            className="absolute w-full h-full origin-top"
            style={{
              transform: "rotateX(-90deg) translateZ(200px) translateY(-200px)",
              backgroundColor: "rgba(255, 220, 180, 0.2)",
              borderRadius: "50%",
            }}
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={`ring-${i}`}
                className="absolute rounded-full border-4 border-orange-200/30 animate-pulse-slow"
                style={{
                  width: `${200 - i * 50}px`,
                  height: `${200 - i * 50}px`,
                  left: `calc(50% - ${(200 - i * 50) / 2}px)`,
                  top: `calc(50% - ${(200 - i * 50) / 2}px)`,
                  boxShadow: "0 0 30px rgba(255, 154, 85, 0.7)",
                  animationDelay: `${i * 0.5}s`,
                  transform: `translateZ(${20 * i}px)`,
                }}
              />
            ))}
          </div>
          
          {/* Walls */}
          {/* Back wall */}
          <div 
            className="absolute w-full h-full origin-center rounded-3xl"
            style={{
              transform: "translateZ(-200px)",
              background: `linear-gradient(to right, hsl(var(--warm-orange)), hsl(var(--warm-red)))`,
              boxShadow: "0 0 30px rgba(255, 154, 85, 0.4) inset",
            }}
          >
            {/* Window */}
            <div 
              className="absolute left-[10%] top-[15%] w-[40%] h-[60%] border-4 border-orange-200/40 rounded-lg grid grid-cols-3 grid-rows-3 overflow-hidden"
              style={{
                boxShadow: "0 0 20px rgba(255, 154, 85, 0.5)",
                background: "linear-gradient(135deg, rgba(255, 200, 150, 0.3), rgba(255, 100, 50, 0.2))",
              }}
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <div 
                  key={`pane-${i}`} 
                  className="border border-orange-200/30"
                  style={{
                    backgroundImage: "linear-gradient(135deg, rgba(255, 200, 150, 0.2), rgba(255, 100, 50, 0.1))",
                  }}
                />
              ))}
            </div>
            
            {/* Letters on wall */}
            <div className="absolute right-[15%] top-[25%] text-white/80 text-left">
              <h3 className="text-2xl font-bold mb-2 warm-glow">Hello</h3>
              <h2 className="text-4xl font-bold warm-glow">World!</h2>
            </div>
          </div>
          
          {/* Right wall */}
          <div 
            className="absolute top-0 right-0 w-full h-full origin-right"
            style={{
              transform: "rotateY(-90deg) translateZ(200px)",
              background: "linear-gradient(to bottom, hsl(var(--warm-peach)), hsl(var(--warm-orange)))",
              opacity: 0.7,
            }}
          />
          
          {/* Left wall */}
          <div 
            className="absolute top-0 left-0 w-full h-full origin-left"
            style={{
              transform: "rotateY(90deg) translateZ(200px)",
              background: "linear-gradient(to bottom, hsl(var(--warm-peach)), hsl(var(--warm-orange)))",
              opacity: 0.7,
            }}
          />
          
          {/* Furniture */}
          {/* Desk */}
          <div 
            className="absolute left-[50%] bottom-0 w-[200px] h-[80px] rounded-lg animate-float"
            style={{
              transform: "translateX(-50%) translateZ(100px) translateY(-100px)",
              background: "linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(255, 220, 200, 0.8))",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              animationDelay: "0.5s",
            }}
          >
            {/* Computer */}
            <div 
              className="absolute left-1/2 top-0 w-[80px] h-[60px] rounded"
              style={{
                transform: "translateX(-50%) translateY(-60px)",
                background: "linear-gradient(to bottom, #333, #111)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div 
                className="absolute inset-[2px] rounded"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--warm-orange)), hsl(var(--warm-red)))",
                  opacity: 0.9,
                }}
              />
            </div>
          </div>
          
          {/* Couch */}
          <div 
            className="absolute left-[20%] bottom-0 w-[250px] h-[100px] rounded-t-xl animate-float"
            style={{
              transform: "translateZ(50px) translateY(-50px)",
              background: "linear-gradient(to right, hsl(var(--warm-yellow)), hsl(var(--warm-orange)))",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
              animationDelay: "0.7s",
            }}
          >
            {/* Back of couch */}
            <div 
              className="absolute left-0 bottom-0 w-full h-[80px] rounded-t-xl"
              style={{
                transform: "translateY(-100px)",
                background: "linear-gradient(to right, hsl(var(--warm-yellow)), hsl(var(--warm-orange)))",
                boxShadow: "0 -5px 20px rgba(0, 0, 0, 0.1) inset",
              }}
            />
            
            {/* Couch cushions */}
            {Array.from({ length: 3 }).map((_, i) => (
              <div 
                key={`cushion-${i}`}
                className="absolute bottom-0 h-[30px] rounded-lg"
                style={{
                  width: "70px",
                  left: `${10 + i * 80}px`,
                  transform: "translateY(-10px)",
                  background: "linear-gradient(to bottom, hsl(var(--warm-peach)), hsl(var(--warm-yellow)))",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
                }}
              />
            ))}
          </div>
          
          {/* Coffee table */}
          <div 
            className="absolute left-[25%] bottom-0 w-[120px] h-[40px] rounded-md animate-float"
            style={{
              transform: "translateZ(150px) translateY(-40px)",
              background: "linear-gradient(to right, hsl(var(--warm-red)), hsl(var(--warm-orange)))",
              boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
              animationDelay: "0.3s",
            }}
          >
            {/* Table legs */}
            <div 
              className="absolute left-[10px] bottom-0 w-[10px] h-[30px]"
              style={{
                transform: "translateY(0)",
                background: "linear-gradient(to bottom, hsl(var(--warm-red)), hsl(var(--warm-orange)))",
              }}
            />
            <div 
              className="absolute right-[10px] bottom-0 w-[10px] h-[30px]"
              style={{
                transform: "translateY(0)",
                background: "linear-gradient(to bottom, hsl(var(--warm-red)), hsl(var(--warm-orange)))",
              }}
            />
            
            {/* Decorative items */}
            <div 
              className="absolute left-1/4 top-0 w-[20px] h-[10px] animate-glow"
              style={{
                transform: "translateY(-10px)",
                background: "linear-gradient(to right, hsl(var(--warm-yellow)), hsl(var(--warm-peach)))",
                borderRadius: "3px",
              }}
            />
            <div 
              className="absolute right-1/4 top-0 w-[10px] h-[15px] animate-glow"
              style={{
                transform: "translateY(-15px)",
                background: "linear-gradient(to right, hsl(var(--warm-yellow)), hsl(var(--warm-peach)))",
                borderRadius: "3px",
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Lighting effects */}
      <div className="circle-light top-[20%] left-[30%] animate-pulse-slow" style={{ animationDelay: "0s" }} />
      <div className="circle-light top-[40%] right-[20%] animate-pulse-slow" style={{ animationDelay: "0.5s" }} />
      <div className="circle-light bottom-[30%] left-[15%] animate-pulse-slow" style={{ animationDelay: "1s" }} />
      
      <div className="ring-light top-[15%] right-[25%] w-[100px] h-[100px] animate-float" style={{ animationDelay: "0.7s" }} />
      <div className="ring-light bottom-[20%] left-[35%] w-[150px] h-[150px] animate-float" style={{ animationDelay: "1.3s" }} />
      
      {/* Floating elements */}
      <FloatingElement className="absolute top-[20%] right-[40%] opacity-40" speed="slow">
        <div className="w-16 h-16 rounded-full warm-gradient animate-glow" />
      </FloatingElement>
      
      <MovingObject direction="horizontal" className="absolute top-[60%] left-[20%] opacity-40" speed="slow">
        <div className="w-20 h-10 rounded-lg peach-gradient animate-glow" />
      </MovingObject>
      
      <MovingObject direction="vertical" className="absolute top-[30%] right-[10%] opacity-40" speed="medium">
        <div className="w-12 h-12 rounded-full warm-gradient animate-glow" />
      </MovingObject>
    </div>
  );
};

export default WarmOffice3D;
