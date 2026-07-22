"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends HTMLMotionProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
}

export default function MagneticButton({ 
  children, 
  className, 
  variant = "primary",
  ...props 
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = buttonRef.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.1, y: middleY * 0.1 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary: "bg-gradient-to-r from-mauve-rose to-plum-deep text-white hover:shadow-lg border-transparent",
    outline: "bg-transparent border-2 border-plum-deep text-plum-deep hover:bg-plum-deep/5",
    ghost: "bg-transparent text-plum-deep hover:bg-plum-deep/5 border-transparent"
  };

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative rounded-2xl px-6 py-3 font-medium transition-all duration-300 active:scale-95 flex items-center justify-center border",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
