"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { experience } from "@/data/portfolioData";

export default function ExperienceSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll tracking to draw the timeline connector path dynamically
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="relative py-24 scroll-mt-12">
      <div className="max-w-5xl mx-auto px-6 w-full" ref={containerRef}>
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-20">
          <span className="text-xs font-bold tracking-widest text-accent-purple uppercase block mb-3">04 / Journey</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Work Experience
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Base Timeline Line (Grey/Muted) */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-foreground/5 -translate-x-1/2 rounded-full" />

          {/* Scrolling Active Glow Line */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-purple via-accent-blue to-accent-pink -translate-x-1/2 rounded-full origin-top z-10"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {experience.map((item, idx) => {
              const isEven = idx % 2 === 0;
              
              return (
                <div 
                  key={item.id} 
                  className={`flex flex-col md:flex-row items-stretch relative ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Glowing Node on Timeline */}
                  <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-background border-2 border-accent-purple -translate-x-1/2 z-20 shadow-sm" />

                  {/* Left Spacer (Desktop only) */}
                  <div className="hidden md:block w-1/2 px-8" />

                  {/* Right Card / Content Block */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ type: "spring", stiffness: 70, damping: 15 }}
                    className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8"
                  >
                    <div className="glass-card rounded-[28px] p-6 border border-foreground/5 hover:border-accent-purple/20 transition-colors duration-300">
                      
                      {/* Timeline Header Metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <div className="inline-flex items-center gap-1 text-[11px] font-bold text-accent-purple uppercase tracking-wider bg-accent-purple/5 border border-accent-purple/10 px-2.5 py-0.5 rounded-md">
                          <Briefcase className="w-3 h-3" /> {item.position}
                        </div>
                        <div className="flex items-center gap-3.5 text-xs text-foreground/45 font-semibold">
                          <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {item.duration}</span>
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {item.location}</span>
                        </div>
                      </div>

                      {/* Company name */}
                      <h3 className="text-lg font-bold text-foreground mb-2">
                        {item.company}
                      </h3>

                      {/* Brief description */}
                      <p className="text-sm text-foreground/60 leading-relaxed font-medium mb-5">
                        {item.description}
                      </p>

                      {/* Achievements Bullets */}
                      <div className="space-y-2.5">
                        {item.bulletPoints.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5 text-xs text-foreground/75 font-semibold leading-normal">
                            <CheckCircle2 className="w-4 h-4 text-accent-purple shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
