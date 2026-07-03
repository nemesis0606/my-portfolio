"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Mail, FileText, ChevronDown, Sparkles, Database } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function HeroSection({ isLoaded = true }: { isLoaded?: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Card 3D Tilt Effect
  const xVal = useMotionValue(0);
  const yVal = useMotionValue(0);
  
  const springX = useSpring(xVal, { damping: 20, stiffness: 150 });
  const springY = useSpring(yVal, { damping: 20, stiffness: 150 });
  
  const rotateX = useTransform(springY, [-300, 300], [15, -15]);
  const rotateY = useTransform(springX, [-300, 300], [-15, 15]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    xVal.set(mouseX);
    yVal.set(mouseY);
  };

  const handleMouseLeave = () => {
    xVal.set(0);
    yVal.set(0);
  };

  // Stagger Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Side: Staggered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
        >
          {/* Tag */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-1.5 self-center lg:self-start px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/5 text-accent-purple text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Available for Opportunities
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 text-foreground"
          >
            Engineering Scalable{" "}
            <span className="text-gradient-purple-blue">Pipelines</span> & Crafting{" "}
            <span className="text-gradient-pink-peach">Visual Web</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-foreground/60 max-w-xl mb-8 leading-relaxed font-medium mx-auto lg:mx-0"
          >
            Hi, I&apos;m <span className="text-foreground font-semibold">{personalInfo.name}</span>. {personalInfo.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
          >
            {/* Primary Action Button */}
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-95 transition-opacity duration-300 shadow-lg shadow-foreground/10"
            >
              Get In Touch
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Resume Button */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-button inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-foreground/80 hover:text-foreground"
            >
              <FileText className="w-4 h-4 text-accent-pink" />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center lg:justify-start gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-foreground/30">Connect:</span>
            <div className="flex gap-3">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Side: Interactive 3D Mockup Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
          animate={isLoaded ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ type: "spring", stiffness: 80, damping: 20, delay: 0.5 }}
          className="lg:col-span-5 flex justify-center perspective-[1000px]"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            style={{ rotateX, rotateY }}
            className="w-full max-w-[380px] h-[400px] rounded-[32px] glass-card p-6 flex flex-col justify-between border border-foreground/5 relative overflow-hidden select-none"
          >
            {/* Soft decorative background glows inside the card */}
            <div className="absolute -top-10 -right-10 w-36 h-36 bg-accent-purple/15 dark:bg-accent-purple/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-accent-pink/15 dark:bg-accent-pink/10 rounded-full blur-2xl" />

            {/* Header: OS style top bar */}
            <div className="flex items-center justify-between border-b border-foreground/5 pb-4">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <div className="text-[10px] font-semibold text-foreground/30 uppercase tracking-widest flex items-center gap-1">
                <Database className="w-3 h-3 text-accent-blue" /> delta-spark.sh
              </div>
            </div>

            {/* Mid Section: Visual Code / Pipeline mockup */}
            <div className="flex-1 flex flex-col justify-center gap-3.5 my-4">
              <div className="space-y-1">
                <span className="text-[10px] text-accent-purple font-semibold uppercase tracking-wider block">Ingest Engine</span>
                <div className="h-6 rounded-lg bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 px-2.5 flex items-center justify-between">
                  <span className="text-[10px] font-mono text-foreground/50">events_stream.readStream()</span>
                  <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-accent-blue font-semibold uppercase tracking-wider block">Transform Nodes</span>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-8 rounded-lg bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 p-2 flex flex-col justify-center">
                    <span className="text-[8px] font-mono text-foreground/30">Schema:</span>
                    <span className="text-[8px] font-mono font-semibold text-foreground/60">JSON Flatten</span>
                  </div>
                  <div className="h-8 rounded-lg bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 p-2 flex flex-col justify-center">
                    <span className="text-[8px] font-mono text-foreground/30">Optimize:</span>
                    <span className="text-[8px] font-mono font-semibold text-foreground/60">Z-Order By Timestamp</span>
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] text-accent-pink font-semibold uppercase tracking-wider block">Interactive View</span>
                <div className="h-16 rounded-xl bg-foreground/[0.04] dark:bg-white/[0.03] border border-foreground/5 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-center text-[10px] font-semibold text-foreground/60">
                    <span>Performance Matrix</span>
                    <span className="text-[9px] text-accent-pink font-bold">99.8%</span>
                  </div>
                  {/* Waveform graphic using small divs */}
                  <div className="flex items-end gap-1.5 h-6">
                    <div className="w-full h-1.5 rounded-full bg-accent-purple/20"><div className="h-full w-2/3 rounded-full bg-accent-purple" /></div>
                    <div className="w-full h-1.5 rounded-full bg-accent-blue/20"><div className="h-full w-4/5 rounded-full bg-accent-blue" /></div>
                    <div className="w-full h-1.5 rounded-full bg-accent-pink/20"><div className="h-full w-1/2 rounded-full bg-accent-pink" /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer: User Identity metadata */}
            <div className="border-t border-foreground/5 pt-4 flex items-center gap-3">
              {/* Silhouette Avatar placeholder */}
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent-purple/20 to-accent-pink/20 border border-foreground/5 flex items-center justify-center font-bold text-xs text-foreground/60">
                {personalInfo.name.split(" ").map(n => n.charAt(0)).join("")}
              </div>
              <div>
                <p className="text-[11px] font-bold text-foreground/75 leading-none">{personalInfo.name}</p>
                <p className="text-[9px] text-foreground/45 mt-1 font-semibold flex items-center gap-1">
                  <Database className="w-3 h-3 text-accent-purple" /> Databricks Data Engineer
                </p>
              </div>
            </div>

          </motion.div>
        </motion.div>

      </div>

      {/* Floating Scroll Guide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none select-none z-10">
        <span className="text-[10px] font-bold tracking-widest text-foreground/25 uppercase">Explore Portfolio</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-4 h-4 text-foreground/35" />
        </motion.div>
      </div>

    </section>
  );
}
