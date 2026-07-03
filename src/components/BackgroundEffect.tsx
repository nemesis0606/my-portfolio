"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BackgroundEffect() {
  const { scrollYProgress } = useScroll();

  // Create parallax scrolling transforms for each gradient blob
  const yBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const xBlob1 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const yBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const xBlob2 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  const yBlob3 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const xBlob3 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const yBlob4 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const xBlob4 = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <div className="fixed inset-0 -z-50 w-full h-full overflow-hidden pointer-events-none bg-background transition-colors duration-1000">
      {/* Glowing Ambient Mesh Gradients */}
      <div className="absolute inset-0 opacity-60 dark:opacity-30 blur-[130px] md:blur-[180px] transition-all duration-1000">
        {/* Blob 1: Purple - Top Left */}
        <motion.div
          style={{ y: yBlob1, x: xBlob1 }}
          className="absolute -top-[10%] -left-[10%] w-[55vw] h-[55vh] rounded-full bg-accent-purple/20 dark:bg-accent-purple/15 animate-float-slow"
        />

        {/* Blob 2: Blue - Mid Right */}
        <motion.div
          style={{ y: yBlob2, x: xBlob2 }}
          className="absolute top-[30%] -right-[10%] w-[50vw] h-[50vh] rounded-full bg-accent-blue/20 dark:bg-accent-blue/15 animate-float"
        />

        {/* Blob 3: Pink - Bottom Left */}
        <motion.div
          style={{ y: yBlob3, x: xBlob3 }}
          className="absolute bottom-[10%] -left-[5%] w-[45vw] h-[45vh] rounded-full bg-accent-pink/15 dark:bg-accent-pink/10 animate-float-slow"
        />

        {/* Blob 4: Peach/Mint - Mid Left/Bottom Right */}
        <motion.div
          style={{ y: yBlob4, x: xBlob4 }}
          className="absolute bottom-[20%] right-[15%] w-[40vw] h-[40vh] rounded-full bg-accent-peach/15 dark:bg-accent-mint/10 animate-spin-slow"
        />
      </div>

      {/* Subtle radial shading for vignette depth */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 20%, color-mix(in srgb, var(--background) 15%, transparent) 100%)"
        }}
      />
    </div>
  );
}
