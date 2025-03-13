
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Sparkles } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import FloatingElement from "@/components/animations/FloatingElement";
import MovingObject from "@/components/animations/MovingObject";
import { useEffect, useState } from "react";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-3xl -top-20 -left-20 animate-spin-slow"></div>
        <div className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-green-300/20 to-blue-300/20 blur-3xl -bottom-20 -right-20 animate-[spin-slow_15s_linear_infinite_reverse]"></div>
      </div>
      
      {/* Floating particles */}
      {isLoaded && (
        <>
          {Array.from({ length: 10 }).map((_, i) => (
            <FloatingElement 
              key={i}
              className={`absolute opacity-${Math.floor(Math.random() * 3) + 2}0`}
              style={{
                top: `${Math.random() * 90}%`,
                left: `${Math.random() * 90}%`,
                transform: `scale(${0.5 + Math.random() * 0.5})`
              }}
              delay={`${Math.random() * 5}s`}
              speed={["slow", "medium", "fast"][Math.floor(Math.random() * 3)] as "slow" | "medium" | "fast"}
            >
              <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-blue-400/10 backdrop-blur-sm border border-blue-300/30"></div>
            </FloatingElement>
          ))}
        </>
      )}
      
      {/* Decorative accent elements */}
      <FloatingElement className="absolute top-[15%] left-[10%] opacity-30" speed="slow">
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-300/30 to-purple-400/30 backdrop-blur-sm"></div>
      </FloatingElement>
      
      <MovingObject className="absolute bottom-[20%] right-[15%] opacity-30" speed="slow" direction="horizontal">
        <div className="w-24 h-24 rounded-lg rotate-45 bg-gradient-to-r from-blue-400/20 to-green-400/20 backdrop-blur-sm"></div>
      </MovingObject>
      
      <FloatingElement className="absolute top-[40%] right-[20%] opacity-30" delay="0.5s" speed="medium">
        <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm"></div>
      </FloatingElement>
      
      {/* Content container with staggered animation */}
      <div className="text-center max-w-2xl mx-auto p-6 z-10 relative">
        <div 
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm font-medium mb-6 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]"
        >
          <Sparkles className="h-4 w-4" />
          Product Manager & ServiceNow Specialist
        </div>
        
        <div className="overflow-hidden mb-6">
          <h1 className="text-4xl md:text-6xl font-bold transform translate-y-full opacity-0 animate-[fade-in_0.8s_ease-out_0.4s_forwards]">
            <AnimatedGradientText 
              fromColor="from-blue-600" 
              viaColor="via-purple-600" 
              toColor="to-blue-600"
              animationDuration="10s"
            >
              Welcome to My Portfolio
            </AnimatedGradientText>
          </h1>
        </div>
        
        <p className="text-xl text-blue-700/80 dark:text-blue-300/80 mb-8 opacity-0 animate-[fade-in_0.8s_ease-out_0.6s_forwards]">
          Crafting digital experiences that matter
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
          <Button asChild className="group gap-2 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-md relative overflow-hidden">
            <Link to="/portfolio">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400/0 via-white/30 to-blue-400/0 -translate-x-full group-hover:animate-[move-light_1s_ease]"></span>
              <User className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span>View Portfolio</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
