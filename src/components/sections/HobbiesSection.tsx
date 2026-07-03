"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flame, Gamepad2, Film, Compass, HelpCircle } from "lucide-react";
import { hobbies } from "@/data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Gamepad2,
  Film,
  Compass,
};

export default function HobbiesSection() {
  const cardRevealVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
        delay: index * 0.1,
      },
    }),
  };

  return (
    <section id="hobbies" className="relative py-24 scroll-mt-12 bg-foreground/[0.005]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-pink uppercase block mb-3">08 / Personal</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground animate-reveal">
            Beyond the Code
          </h2>
          <p className="text-xs md:text-sm text-foreground/45 mt-2 font-semibold">
            What makes me human, outside of engineering and databases.
          </p>
        </div>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby, idx) => {
            const IconComponent = iconMap[hobby.iconName] || HelpCircle;

            // Accent class and neon shadow configurations based on color mappings
            let glowShadow = "rgba(236, 72, 153, 0.12)"; // default pink
            let borderGlow = "group-hover:border-accent-pink/30";
            let accentText = "text-accent-pink";
            let accentBg = "bg-accent-pink/5 border-accent-pink/10";
            
            if (hobby.colorClass === "accent-blue") {
              glowShadow = "rgba(59, 130, 246, 0.12)";
              borderGlow = "group-hover:border-accent-blue/30";
              accentText = "text-accent-blue";
              accentBg = "bg-accent-blue/5 border-accent-blue/10";
            } else if (hobby.colorClass === "accent-purple") {
              glowShadow = "rgba(139, 92, 246, 0.12)";
              borderGlow = "group-hover:border-accent-purple/30";
              accentText = "text-accent-purple";
              accentBg = "bg-accent-purple/5 border-accent-purple/10";
            } else if (hobby.colorClass === "accent-mint") {
              glowShadow = "rgba(16, 185, 129, 0.12)";
              borderGlow = "group-hover:border-accent-mint/30";
              accentText = "text-accent-mint";
              accentBg = "bg-accent-mint/5 border-accent-mint/10";
            }

            return (
              <motion.div
                key={hobby.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={cardRevealVariants}
                className={`group glass-card rounded-[32px] p-6 border border-foreground/5 relative flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ${borderGlow}`}
              >
                {/* Glow container */}
                <div 
                  className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[40px] -z-10"
                  style={{
                    boxShadow: `0 0 40px 10px ${glowShadow}`,
                  }}
                />

                <div>
                  {/* Header row */}
                  <div className="flex items-center gap-4 mb-5">
                    <div className={`w-12 h-12 rounded-2xl ${accentBg} border flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${accentText}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {hobby.name}
                      </h3>
                      <p className="text-xs text-foreground/45 font-semibold">
                        {hobby.description}
                      </p>
                    </div>
                  </div>

                  {/* Bullet specifics */}
                  <ul className="space-y-3 pl-2">
                    {hobby.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5 text-xs font-semibold text-foreground/70">
                        <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${accentText} bg-current`} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer hint */}
                <div className="mt-8 pt-4 border-t border-foreground/5 text-[9px] uppercase font-bold tracking-widest text-foreground/30 text-right">
                  Personal Profile
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
