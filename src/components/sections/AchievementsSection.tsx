"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Rocket, Zap, Award, Star, HelpCircle } from "lucide-react";
import { achievements } from "@/data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Zap,
  Award,
  Star,
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const start = 0;
    const end = value;
    if (start === end) {
      return;
    }

    const duration = 1.5; // animation length in seconds
    const totalFrames = Math.round(60 * duration);
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      // Ease out quadratic progress formula
      const easeProgress = progress * (2 - progress);
      const currentCount = Math.floor(easeProgress * end);
      
      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(end);
        clearInterval(counter);
      }
    }, 1000 / 60); // 60 FPS updates

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  const scrollRevealVariants = {
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
    <section id="achievements" className="relative py-24 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-pink uppercase block mb-3">06 / Milestones</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Achievements
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, idx) => {
            // Resolve the Lucide icon dynamically
            const IconComponent = iconMap[ach.iconName] || HelpCircle;

            // Accent color highlights based on indexing
            let accentText = "text-accent-purple";
            let accentBg = "bg-accent-purple/5 border-accent-purple/10";
            if (idx === 1) {
              accentText = "text-accent-blue";
              accentBg = "bg-accent-blue/5 border-accent-blue/10";
            } else if (idx === 2) {
              accentText = "text-accent-pink";
              accentBg = "bg-accent-pink/5 border-accent-pink/10";
            } else if (idx === 3) {
              accentText = "text-accent-peach";
              accentBg = "bg-accent-peach/5 border-accent-peach/10";
            }

            return (
              <motion.div
                key={ach.id}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={scrollRevealVariants}
                className="glass-card rounded-[28px] p-6 border border-foreground/5 flex flex-col justify-between"
              >
                <div>
                  {/* Icon wrap */}
                  <div className={`w-10 h-10 rounded-xl ${accentBg} border flex items-center justify-center mb-5`}>
                    <IconComponent className={`w-5 h-5 ${accentText}`} />
                  </div>

                  {/* Stat Counter */}
                  <h3 className={`text-4xl font-extrabold tracking-tight mb-2 ${accentText}`}>
                    <Counter value={ach.number} suffix={ach.suffix} />
                  </h3>

                  {/* Label */}
                  <h4 className="text-sm font-bold text-foreground mb-2">
                    {ach.label}
                  </h4>
                </div>

                {/* Description */}
                <p className="text-xs text-foreground/50 leading-relaxed font-semibold mt-2">
                  {ach.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
