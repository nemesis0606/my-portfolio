"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, FileCode, FileJson, Database, Globe, Layers, Atom, Palette, 
  Sparkles, Cpu, Server, Box, Zap, Webhook, Cloud, Container, 
  GitBranch, Terminal, Laptop, Send, BrainCircuit, 
  Lightbulb, Users, Calendar, HelpCircle 
} from "lucide-react";
import { Github, Figma } from "@/components/icons/BrandIcons";
import { skills } from "@/data/portfolioData";
import { SkillCategory } from "@/types";

// Icon mapping to prevent bundle bloat and ensure static-export compatibility
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code2, FileCode, FileJson, Database, Globe, Layers, Atom, Palette, 
  Sparkles, Cpu, Server, Box, Zap, Webhook, Cloud, Container, 
  GitBranch, Terminal, Github, Figma, Laptop, Send, BrainCircuit, 
  Lightbulb, Users, Calendar
};

const CATEGORIES: SkillCategory[] = [
  "Languages",
  "Backend & Data",
  "Cloud & DevOps",
  "Tools",
  "Soft Skills",
];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Languages");

  const filteredSkills = skills.filter((skill) => skill.category === selectedCategory);

  // Animation variants
  const gridVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring" as const, stiffness: 120, damping: 15 } 
    },
    exit: { opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.15 } }
  };

  return (
    <section id="skills" className="relative py-24 scroll-mt-12 bg-foreground/[0.01]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase block mb-3">02 / Toolkit</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground animate-reveal">
            Skills & Technologies
          </h2>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex justify-center md:justify-start mb-12">
          <div className="glass-panel p-1.5 rounded-full flex flex-wrap items-center justify-center gap-1 max-w-full overflow-x-auto hide-scrollbar">
            {CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`relative px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                    isSelected
                      ? "text-primary dark:text-primary-foreground"
                      : "text-foreground/50 hover:text-foreground hover:bg-foreground/[0.02]"
                  }`}
                >
                  {/* Sliding Tab Highlight bubble */}
                  {isSelected && (
                    <motion.span
                      layoutId="activeSkillTabBubble"
                      className="absolute inset-0 bg-accent-blue/15 dark:bg-accent-blue/90 -z-10 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="min-h-[250px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              variants={gridVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {filteredSkills.map((skill) => {
                // Resolve the Lucide icon dynamically
                const IconComponent = iconMap[skill.iconName] || HelpCircle;

                // Map styling classes dynamically for premium glows
                let glowClass = "card-glow-blue";
                let textGlow = "group-hover:text-accent-blue";
                let borderGlow = "group-hover:border-accent-blue/30";
                
                if (skill.colorClass === "accent-purple") {
                  glowClass = "card-glow-purple";
                  textGlow = "group-hover:text-accent-purple";
                  borderGlow = "group-hover:border-accent-purple/30";
                } else if (skill.colorClass === "accent-pink") {
                  glowClass = "card-glow-pink";
                  textGlow = "group-hover:text-accent-pink";
                  borderGlow = "group-hover:border-accent-pink/30";
                } else if (skill.colorClass === "accent-peach") {
                  glowClass = "card-glow-pink"; // fall back or define peach glows if needed
                  textGlow = "group-hover:text-accent-peach";
                  borderGlow = "group-hover:border-accent-peach/30";
                } else if (skill.colorClass === "accent-mint") {
                  glowClass = "card-glow-blue";
                  textGlow = "group-hover:text-accent-mint";
                  borderGlow = "group-hover:border-accent-mint/30";
                }

                return (
                  <motion.div
                    key={skill.name}
                    variants={cardVariants}
                    className={`group glass-card rounded-2xl p-4 border border-foreground/5 flex items-center gap-3.5 hover:-translate-y-1 ${glowClass} ${borderGlow}`}
                  >
                    {/* Icon wrapper with subtle glow background */}
                    <div className="w-10 h-10 rounded-xl bg-foreground/[0.02] dark:bg-white/[0.01] border border-foreground/5 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className={`w-5 h-5 text-foreground/75 transition-colors duration-300 ${textGlow}`} />
                    </div>
                    
                    {/* Name */}
                    <div>
                      <p className="text-sm font-semibold text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                        {skill.name}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
