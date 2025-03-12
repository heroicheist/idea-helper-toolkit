
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Sparkles } from "lucide-react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import FloatingElement from "@/components/animations/FloatingElement";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-950 overflow-hidden relative">
      {/* Decorative elements */}
      <FloatingElement className="absolute top-[15%] left-[10%] text-blue-300 opacity-40" speed="slow">
        <div className="w-32 h-32 rounded-full bg-blue-300/20 backdrop-blur-sm"></div>
      </FloatingElement>
      <FloatingElement className="absolute bottom-[15%] right-[10%] text-blue-300 opacity-40" delay="1s" speed="medium">
        <div className="w-20 h-20 rounded-full bg-blue-400/20 backdrop-blur-sm"></div>
      </FloatingElement>
      <FloatingElement className="absolute top-[40%] right-[20%] text-blue-300 opacity-30" delay="0.5s" speed="fast">
        <div className="w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm"></div>
      </FloatingElement>
      
      <div className="text-center max-w-2xl mx-auto p-6 z-10 opacity-0 animate-[fade-in_0.8s_ease-out_0.2s_forwards]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-200 text-sm font-medium mb-6">
          <Sparkles className="h-4 w-4" />
          Product Manager & ServiceNow Specialist
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <AnimatedGradientText>Welcome to My Portfolio</AnimatedGradientText>
        </h1>
        <p className="text-xl text-blue-700/80 dark:text-blue-300/80 mb-8">
          Crafting digital experiences that matter
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="gap-2 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-md">
            <Link to="/portfolio">
              <User className="h-5 w-5" />
              View Portfolio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
