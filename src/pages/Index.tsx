
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Sparkles, ArrowRight } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import FloatingElement from "@/components/animations/FloatingElement";
import MovingObject from "@/components/animations/MovingObject";
import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 overflow-hidden relative"
    >
      {/* Dynamic interactive background gradient that follows mouse */}
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), rgba(147, 51, 234, 0.05) 40%, transparent 70%)`
        }}
      >
        <div className="absolute w-[80vw] h-[80vw] rounded-full bg-gradient-to-r from-blue-300/20 via-purple-300/10 to-pink-300/20 blur-3xl top-[10%] left-[10%] animate-[spin-slow_30s_linear_infinite]"></div>
        <div className="absolute w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-green-300/10 via-blue-300/15 to-indigo-300/10 blur-3xl bottom-[5%] right-[5%] animate-[spin-slow_20s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Magical sparkle effects */}
      {isLoaded && (
        <>
          {Array.from({ length: 20 }).map((_, i) => {
            const size = Math.random() * 8 + 2;
            const opacity = Math.random() * 0.5 + 0.1;
            return (
              <FloatingElement 
                key={i}
                className={`absolute`}
                delay={`${Math.random() * 10}s`}
                speed={["slow", "medium", "fast"][Math.floor(Math.random() * 3)] as "slow" | "medium" | "fast"}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  opacity: opacity,
                  borderRadius: '50%',
                  background: 'white',
                  boxShadow: `0 0 ${size * 2}px ${size}px rgba(255, 255, 255, 0.${Math.floor(opacity * 10)})`
                }}
              >
                <div className="sparkle-effect"></div>
              </FloatingElement>
            );
          })}
        </>
      )}
      
      {/* Glowing orbs */}
      <FloatingElement 
        className="absolute top-[20%] left-[15%] opacity-60 blur-sm"
        speed="slow"
        style={{ filter: 'blur(4px)' }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-400/40 via-purple-400/30 to-pink-400/40 animate-pulse-slow"></div>
      </FloatingElement>
      
      <MovingObject 
        className="absolute bottom-[25%] right-[10%] opacity-60"
        speed="slow" 
        direction="horizontal"
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-indigo-400/30 via-blue-400/20 to-cyan-400/30 animate-pulse-slow" style={{ filter: 'blur(4px)' }}></div>
      </MovingObject>
      
      <FloatingElement 
        className="absolute top-[60%] right-[25%] opacity-50"
        delay="2s" 
        speed="medium"
        style={{ filter: 'blur(3px)' }}
      >
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-400/30 via-pink-400/20 to-red-400/30 animate-pulse-slow"></div>
      </FloatingElement>
      
      {/* Floating geometric shapes */}
      <FloatingElement 
        className="absolute top-[30%] right-[30%] opacity-40"
        delay="1s"
        speed="medium"
      >
        <div className="w-16 h-16 rotate-45 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 backdrop-blur-sm border border-white/10"></div>
      </FloatingElement>
      
      <FloatingElement 
        className="absolute bottom-[30%] left-[20%] opacity-40"
        delay="1.5s"
        speed="slow"
      >
        <div className="w-20 h-20 rotate-12 rounded-lg bg-gradient-to-r from-green-400/20 to-teal-400/20 backdrop-blur-sm border border-white/10"></div>
      </FloatingElement>
      
      {/* Animated content container */}
      <div className="text-center max-w-2xl mx-auto p-6 z-10 relative backdrop-blur-sm bg-white/5 rounded-2xl border border-white/10 shadow-xl">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-blue-500 dark:text-blue-200 text-sm font-medium mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards] shadow-lg"
        >
          <Sparkles className="h-4 w-4 animate-pulse-slow" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Product Manager & ServiceNow Specialist
          </span>
        </div>
        
        <div className="overflow-hidden mb-8 relative">
          <h1 className="text-5xl md:text-7xl font-bold transform translate-y-full opacity-0 animate-[fade-in_1s_ease-out_0.4s_forwards]">
            <AnimatedGradientText 
              fromColor="from-blue-600" 
              viaColor="via-purple-600" 
              toColor="to-pink-600"
              animationDuration="8s"
              className="tracking-tight"
            >
              Welcome to My Portfolio
            </AnimatedGradientText>
          </h1>
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-40 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full animate-pulse-slow"></div>
        </div>
        
        <p className="text-xl md:text-2xl text-blue-700/90 dark:text-blue-200/90 mb-10 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards] relative">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 dark:from-blue-300 to-purple-600 dark:to-purple-400">
            Crafting digital experiences that matter
          </span>
          <FloatingElement 
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 w-full"
            speed="slow"
          >
            <div className="w-full h-10 bg-gradient-to-r from-blue-400/0 via-purple-400/20 to-blue-400/0 blur-xl rounded-full"></div>
          </FloatingElement>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
          <Button asChild className="group relative gap-2 px-8 py-6 text-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 transform hover:scale-105 shadow-xl shadow-blue-500/20 overflow-hidden rounded-full" style={{ backdropFilter: 'blur(10px)' }}>
            <Link to="/portfolio">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-white/40 to-blue-400/0 -translate-x-full group-hover:animate-[move-light_1s_ease]"></span>
              <span className="flex items-center gap-2">
                <User className="h-5 w-5 transition-transform group-hover:rotate-12" />
                <span>View Portfolio</span>
                <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
