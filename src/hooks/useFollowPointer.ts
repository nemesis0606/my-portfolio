"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useFollowPointer() {
  // Motion values avoid triggering React component re-renders on every pixel moved
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Tighter, faster spring config for highly responsive tracking
  const springConfig = { damping: 25, stiffness: 350, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };

    // Initialize cursor at window center to avoid starting at top-left
    if (typeof window !== "undefined") {
      x.set(window.innerWidth / 2);
      y.set(window.innerHeight / 2);
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [x, y]);

  return { x: springX, y: springY, rawX: x, rawY: y };
}
