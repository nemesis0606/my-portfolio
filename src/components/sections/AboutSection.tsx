"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Compass, Database, Cpu, BookOpen, ExternalLink } from "lucide-react";
import { personalInfo, publications } from "@/data/portfolioData";

export default function AboutSection() {
  const scrollRevealVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  return (
    <section id="about" className="relative py-24 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-purple uppercase block mb-3">01 / Profile</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            About Me
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Bento Card 1 (Span 8): Detailed Story */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={scrollRevealVariants}
            className="md:col-span-8 glass-card rounded-[32px] p-6 md:p-8 flex flex-col justify-between border border-foreground/5"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Compass className="w-5 h-5 text-accent-purple" />
                <h3 className="text-lg font-bold text-foreground">My Professional Journey</h3>
              </div>
              <p className="text-foreground/70 leading-relaxed font-medium mb-6">
                {personalInfo.detailedBio}
              </p>
              <p className="text-foreground/60 leading-relaxed text-sm">
                I believe that code shouldn&apos;t just compute—it should captivate. Whether I am tuning Delta tables for high-throughput PySpark jobs or choreographing microinteractions in Tailwind and React, I focus on performance, clarity, and visual aesthetics.
              </p>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-purple/5 border border-accent-purple/10 text-accent-purple">Creative Design</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-blue/5 border border-accent-blue/10 text-accent-blue">Data Engineering</span>
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-accent-pink/5 border border-accent-pink/10 text-accent-pink">Cloud Architecture</span>
            </div>
          </motion.div>

          {/* Bento Card 2 (Span 4): Location & Focus */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={scrollRevealVariants}
            className="md:col-span-4 glass-card rounded-[32px] p-6 flex flex-col justify-between border border-foreground/5"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-5 h-5 text-accent-pink" />
                <h3 className="text-lg font-bold text-foreground">Current Setup</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-foreground/45">Based In</span>
                  <p className="text-sm font-semibold text-foreground">{personalInfo.location}</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-foreground/45">Core Focus</span>
                  <p className="text-sm font-semibold text-foreground">Next.js 15 & Delta Pipelines</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-foreground/45">Working Mode</span>
                  <p className="text-sm font-semibold text-foreground">Full-Time Remote / Hybrid</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-foreground/5 flex items-center justify-between text-xs font-bold text-foreground/40 uppercase tracking-wider">
              <span>Status</span>
              <span className="flex items-center gap-1.5 text-accent-mint font-semibold">
                <span className="w-2 h-2 rounded-full bg-accent-mint animate-pulse" /> Active
              </span>
            </div>
          </motion.div>

          {/* Bento Card 3 (Span 4): Tech Philosophy */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={scrollRevealVariants}
            className="md:col-span-4 glass-card rounded-[32px] p-6 flex flex-col justify-between border border-foreground/5"
          >
            <div className="flex items-center gap-2 mb-6">
              <Cpu className="w-5 h-5 text-accent-blue" />
              <h3 className="text-lg font-bold text-foreground">Core Philosophy</h3>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                  <strong className="text-foreground font-bold">Lighthouse 100:</strong> Never compromise page responsiveness, asset sizes, or accessibility benchmarks.
                </p>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-blue mt-1.5 shrink-0" />
                <p className="text-xs text-foreground/75 leading-relaxed font-semibold">
                  <strong className="text-foreground font-bold">Data Fidelity:</strong> Pipelines must be deterministic, automated, self-healing, and fully tested.
                </p>
              </div>
            </div>

            <div className="mt-8 text-[10px] font-bold text-foreground/30 uppercase tracking-widest text-right">
              Performance First
            </div>
          </motion.div>

          {/* Bento Card 4 (Span 8): Publications */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={scrollRevealVariants}
            className="md:col-span-8 glass-card rounded-[32px] p-6 md:p-8 flex flex-col justify-between border border-foreground/5"
          >
            <div>
              <div className="flex items-center gap-2 mb-6">
                <BookOpen className="w-5 h-5 text-accent-purple" />
                <h3 className="text-lg font-bold text-foreground">Research & Publications</h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {publications.map((pub) => (
                  <div key={pub.id} className="p-4 rounded-2xl bg-foreground/[0.02] dark:bg-white/[0.01] border border-foreground/5 flex flex-col justify-between hover:border-accent-purple/20 transition-all duration-300">
                    <div>
                      <span className="text-[9px] uppercase font-bold text-accent-purple tracking-widest block mb-1">Journal Paper • {pub.year}</span>
                      <h4 className="text-xs font-bold text-foreground mb-2 leading-snug line-clamp-2">
                        {pub.title}
                      </h4>
                      <p className="text-[10px] text-foreground/50 font-semibold leading-normal line-clamp-2">
                        {pub.journal}
                      </p>
                    </div>
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-bold text-accent-purple hover:underline mt-4 self-start"
                    >
                      Read Publication <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 border-t border-foreground/5 pt-4 text-xs font-semibold text-foreground/45 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-accent-purple" /> Bridging Big Data pipelines with Academic Research.
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
