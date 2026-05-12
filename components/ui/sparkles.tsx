"use client";
import React, { useId, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  className?: string;
  particleCount?: number;
  particleColor?: string;
  minSize?: number;
  maxSize?: number;
}

export const SparklesCore = ({
  className,
  particleCount = 30,
  particleColor = "#6366f1",
  minSize = 1,
  maxSize = 3,
}: SparklesProps) => {
  const id = useId();
  const [particles, setParticles] = useState<
    { id: string; x: number; y: number; size: number; duration: number; delay: number }[]
  >([]);

  // Generate particles only on client to avoid hydration mismatch
  useEffect(() => {
    setParticles(
      Array.from({ length: particleCount }, (_, i) => ({
        id: `${id}-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 3,
      }))
    );
  }, [id, particleCount, minSize, maxSize]);

  if (particles.length === 0) return <div className={cn("relative w-full h-full overflow-hidden", className)} />;

  return (
    <div className={cn("relative w-full h-full overflow-hidden", className)}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particleColor,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
