"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

interface IntroLoaderProps {
  onComplete: () => void;
}



const TAGLINES = [
  "Building Data Platforms",
  "Engineering Scalable Pipelines",
  "Databricks & Cloud Architect",
  "Cloud & AI Enthusiast",
  "Creating Digital Experiences",
];

interface Particle {
  id: number;
  x: number;
  y: number;
  delay: number;
  size: number;
  duration: number;
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [phase, setPhase] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [taglineIdx, setTaglineIdx] = useState(0);

  const [isVisible, setIsVisible] = useState(true);
  const [particleData, setParticleData] = useState<Particle[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [skipIntro, setSkipIntro] = useState(false);



  // Main timeline drivers and mount side-effects
  useEffect(() => {
    const seen = typeof window !== "undefined" && sessionStorage.getItem("rohan_portfolio_intro_seen") === "true";

    // Defer state setting to prevent cascading render warnings in React 19 / Next.js
    const timerMount = setTimeout(() => {
      setIsMounted(true);
      if (seen) {
        setSkipIntro(true);
      }
    }, 0);

    // Generate particle positions asynchronously to keep mounting pure and side-effect safe
    const timerParticles = setTimeout(() => {
      const generated = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4,
        size: Math.random() * 2 + 1,
        duration: 6 + Math.random() * 4,
      }));
      setParticleData(generated);
    }, 0);

    if (seen) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 300);
      return () => {
        clearTimeout(timer);
        clearTimeout(timerMount);
        clearTimeout(timerParticles);
      };
    }

    // Set storage seen token so future revisits are skipped
    if (typeof window !== "undefined") {
      sessionStorage.setItem("rohan_portfolio_intro_seen", "true");
    }

    // Phase 1: 0 - 0.5s (ambient glow, background particles)
    const t1 = setTimeout(() => setPhase(2), 500);

    // Phase 2: 0.5s - 1.3s (Monogram Card)
    const t2 = setTimeout(() => setPhase(3), 1300);

    // Phase 3: 1.3s - 2.5s (Name Reveal & Taglines)
    const t3 = setTimeout(() => setPhase(4), 2500);

    // Phase 4: 2.5s - 4.5s (Pipeline Animation load finishes)
    const t4 = setTimeout(() => {
      setPhase(5);
      setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 800);
    }, 4500);

    return () => {
      clearTimeout(timerMount);
      clearTimeout(timerParticles);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [onComplete]);



  // Tagline cycle driver
  useEffect(() => {
    if (phase < 3 || phase > 4) return;
    const interval = setInterval(() => {
      setTaglineIdx((prev) => (prev + 1) % TAGLINES.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [phase]);

  // Server-side rendering safety fallback
  if (!isMounted) {
    return (
      <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden pointer-events-none" />
    );
  }

  if (!isVisible) return null;

  if (skipIntro) {
    return (
      <motion.div 
        className="fixed inset-0 bg-background z-[9999] pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden select-none font-sans"
      >
        {/* Phase 1+: Ambient Glow Blobs */}
        <div className="absolute inset-0 pointer-events-none opacity-40 blur-[150px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-[40vw] h-[40vh] rounded-full bg-accent-purple/20 animate-float"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1.1 }}
            transition={{ duration: 3.5, ease: "easeOut", delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-[45vw] h-[45vh] rounded-full bg-accent-pink/15 animate-float-slow"
          />
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particleData.map((p) => (
            <motion.div
              key={p.id}
              className="absolute bg-white/25 rounded-full"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: `${p.size}px`,
                height: `${p.size}px`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.1, 0.6, 0.1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            />
          ))}
        </div>



        {/* Phase 2+: Frosted Glass Dashboard Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={phase >= 2 ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-[90%] max-w-lg rounded-[36px] glass-panel border border-white/10 bg-white/[0.02] p-8 md:p-12 relative flex flex-col items-center justify-between text-center min-h-[380px] shadow-2xl"
          style={{
            boxShadow: phase >= 2 ? "0 0 50px 1px rgba(139, 92, 246, 0.05)" : "none",
          }}
        >
          {/* Inner Glow effect */}
          <div className="absolute inset-0 rounded-[36px] bg-gradient-to-tr from-accent-purple/5 to-accent-pink/5 opacity-50 pointer-events-none" />

          {/* Top Row: Animated Monogram Logo */}
          <div className="relative mb-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={phase >= 2 ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-accent-purple/10 to-accent-pink/10 border border-white/10 flex items-center justify-center font-black text-xl text-white tracking-tighter relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-pink opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <span className="bg-gradient-to-r from-white via-white/80 to-white/90 bg-clip-text text-transparent">
                RB
              </span>
            </motion.div>
          </div>

          {/* Middle Row: Name Reveal & Taglines */}
          <div className="flex-1 flex flex-col justify-center my-6 space-y-4">
            <div className="overflow-hidden">
              <AnimatePresence>
                {phase >= 3 && (
                  <motion.h1
                    initial={{ y: 30, opacity: 0, filter: "blur(6px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl md:text-3xl font-extrabold tracking-widest text-white uppercase select-none"
                  >
                    ROHAN BHATTACHARJEE
                  </motion.h1>
                )}
              </AnimatePresence>
            </div>

            <div className="h-8 overflow-hidden relative flex justify-center">
              <AnimatePresence mode="wait">
                {phase >= 3 && (
                  <motion.p
                    key={taglineIdx}
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.7 }}
                    exit={{ y: -15, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="text-xs md:text-sm font-semibold tracking-wider text-accent-pink bg-clip-text"
                  >
                    {TAGLINES[taglineIdx]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bottom Row: Data Engineering Node Loading Pipeline */}
          <div className="w-full h-12 flex flex-col items-center justify-end relative">
            <AnimatePresence>
              {phase >= 4 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6 }}
                  className="w-[80%] max-w-[280px]"
                >
                  {/* Three nodes data pipeline visual */}
                  <div className="flex items-center justify-between relative px-2">
                    {/* Node 1: Source */}
                    <div className="w-5 h-5 rounded-lg bg-accent-purple/10 border border-accent-purple/40 flex items-center justify-center relative z-10">
                      <Cpu className="w-2.5 h-2.5 text-accent-purple" />
                    </div>

                    {/* Channel 1-2 */}
                    <div className="flex-1 h-[2px] bg-white/5 mx-2 relative overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent-purple to-transparent"
                      />
                    </div>

                    {/* Node 2: Processing (Databricks) */}
                    <div className="w-6 h-6 rounded-lg bg-accent-pink/15 border border-accent-pink/50 flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(236,72,153,0.15)] animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-accent-pink" />
                    </div>

                    {/* Channel 2-3 */}
                    <div className="flex-1 h-[2px] bg-white/5 mx-2 relative overflow-hidden">
                      <motion.div 
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "linear", delay: 0.6 }}
                        className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent-pink to-transparent"
                      />
                    </div>

                    {/* Node 3: Target Lakehouse */}
                    <div className="w-5 h-5 rounded-lg bg-accent-blue/10 border border-accent-blue/40 flex items-center justify-center relative z-10">
                      <span className="w-1.5 h-1.5 rounded-sm bg-accent-blue" />
                    </div>
                  </div>

                  <span className="text-[9px] uppercase tracking-widest font-bold text-white/20 block mt-2.5">
                    Orchestrating Lakehouse Pipelines...
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Phase 5 Transition Overlay (Exploding panel dissolve, expand aurora) */}
        {phase === 5 && (
          <motion.div 
            className="absolute inset-0 bg-transparent pointer-events-none z-50 border border-white/5"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        )}
      </motion.div>
    </AnimatePresence>
  );
}
