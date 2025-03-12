
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
  fromColor?: string;
  viaColor?: string;
  toColor?: string;
  animationDuration?: string;
}

export function AnimatedGradientText({
  children,
  className,
  fromColor = "from-blue-600",
  viaColor = "via-blue-400",
  toColor = "to-blue-600",
  animationDuration = "8s",
}: AnimatedGradientTextProps) {
  return (
    <span
      className={cn(
        "inline-block bg-gradient-to-r",
        fromColor,
        viaColor,
        toColor,
        "bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
      style={{ 
        animation: `gradient ${animationDuration} linear infinite`,
        textShadow: "0 2px 10px rgba(255, 170, 100, 0.3)"
      }}
    >
      {children}
    </span>
  );
}
