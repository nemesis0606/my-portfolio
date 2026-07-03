"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "@/hooks/useFollowPointer";

export default function CustomCursor() {
  const { x, y, rawX, rawY } = useFollowPointer();
  const [hovered, setHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Identify interactive elements
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select") ||
        target.getAttribute("data-hover") === "true";

      if (isInteractive) {
        setHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      const relatedTarget = e.relatedTarget as HTMLElement;
      if (relatedTarget) {
        const isInteractive = 
          relatedTarget.tagName === "A" ||
          relatedTarget.tagName === "BUTTON" ||
          relatedTarget.closest("a") ||
          relatedTarget.closest("button") ||
          relatedTarget.closest('[role="button"]') ||
          relatedTarget.closest("input") ||
          relatedTarget.closest("textarea") ||
          relatedTarget.closest("select") ||
          relatedTarget.getAttribute("data-hover") === "true";

        if (!isInteractive) {
          setHovered(false);
        }
      } else {
        setHovered(false);
      }
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.document.addEventListener("mouseover", handleMouseOver);
    window.document.addEventListener("mouseout", handleMouseOut);
    window.document.addEventListener("mouseenter", handleMouseEnter);
    window.document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.document.removeEventListener("mouseover", handleMouseOver);
      window.document.removeEventListener("mouseout", handleMouseOut);
      window.document.removeEventListener("mouseenter", handleMouseEnter);
      window.document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 1.6 : 1,
          opacity: isVisible ? 1 : 0, // Toggle visibility using opacity instead of unmounting
          backgroundColor: hovered ? "hsla(var(--primary), 0.08)" : "rgba(0, 0, 0, 0)",
          borderColor: hovered ? "hsl(var(--primary))" : "hsla(var(--foreground), 0.35)",
          borderWidth: hovered ? "1.5px" : "1px",
          boxShadow: hovered ? "0 0 20px 2px hsla(var(--primary), 0.25)" : "0 0 0px 0px rgba(0,0,0,0)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 28, mass: 0.15 }}
        className="fixed top-0 left-0 w-9 h-9 rounded-full border pointer-events-none z-[9999] hidden md:block"
      />
      {/* Inner Pin Dot */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: hovered ? 0.4 : 1,
          opacity: isVisible ? 1 : 0, // Toggle visibility using opacity instead of unmounting
          backgroundColor: hovered ? "hsl(var(--primary))" : "hsl(var(--foreground))",
        }}
        transition={{ type: "tween", duration: 0.15 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] hidden md:block"
      />
    </>
  );
}
