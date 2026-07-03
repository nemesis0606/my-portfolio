/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, ShieldCheck, Cpu } from "lucide-react";
import { Github } from "@/components/icons/BrandIcons";
import { projects, Project } from "@/data/portfolioData";

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { damping: 30, stiffness: 250 });
  const springY = useSpring(y, { damping: 30, stiffness: 250 });

  // Map coordinate adjustments to degrees of rotation
  const rotateX = useTransform(springY, [-180, 180], [7, -7]);
  const rotateY = useTransform(springX, [-180, 180], [-7, 7]);

  // Map mouse position relative to card boundaries
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Define glow border color mapping based on project config
  let glowColor = "rgba(139, 92, 246, 0.12)"; // purple default
  let borderHover = "group-hover:border-accent-purple/30";
  let linkColor = "text-accent-purple hover:bg-accent-purple/5";
  if (project.accentColor === "blue") {
    glowColor = "rgba(59, 130, 246, 0.12)";
    borderHover = "group-hover:border-accent-blue/30";
    linkColor = "text-accent-blue hover:bg-accent-blue/5";
  } else if (project.accentColor === "pink") {
    glowColor = "rgba(236, 72, 153, 0.12)";
    borderHover = "group-hover:border-accent-pink/30";
    linkColor = "text-accent-pink hover:bg-accent-pink/5";
  }

  // Render a custom CSS-drawn visual representation in place of missing static assets
  const renderCardGraphic = () => {
    if (project.image) {
      return (
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover rounded-xl border border-foreground/5 group-hover:scale-105 transition-transform duration-500"
        />
      );
    }
    if (project.id === "aurora-dashboard") {
      return (
        <div className="relative w-full h-full bg-slate-900/10 dark:bg-slate-900/40 rounded-xl overflow-hidden flex flex-col justify-between p-4 border border-foreground/5 font-mono select-none">
          <div className="flex justify-between items-center text-[8px] text-foreground/45 border-b border-foreground/5 pb-2">
            <span>AZURE_EVENT_HUBS</span>
            <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-accent-mint animate-pulse" /> LIVE STREAM</span>
          </div>
          <div className="flex-1 flex items-end gap-1 my-3 h-12">
            <div className="w-full h-1/2 bg-accent-purple/30 rounded-sm" />
            <div className="w-full h-3/4 bg-accent-blue/40 rounded-sm" />
            <div className="w-full h-full bg-accent-purple/50 rounded-sm" />
            <div className="w-full h-2/3 bg-accent-blue/30 rounded-sm" />
            <div className="w-full h-5/6 bg-accent-pink/40 rounded-sm" />
          </div>
          <div className="flex justify-between text-[8px] text-accent-purple font-bold">
            <span>DELTA_LAKE_HOUSE</span>
            <span>v1.0.3</span>
          </div>
        </div>
      );
    }
    if (project.id === "neom-commerce") {
      return (
        <div className="relative w-full h-full bg-slate-900/10 dark:bg-slate-900/40 rounded-xl overflow-hidden flex items-center justify-center p-4 border border-foreground/5 font-mono select-none">
          {/* Mock E-commerce Card Graphic */}
          <div className="w-[85%] h-[80%] rounded-xl glass-panel border border-white/20 p-3 flex flex-col justify-between shadow-lg">
            <div className="flex justify-between items-start">
              <span className="text-[9px] font-bold text-foreground/60">NEOM PREMIUM</span>
              <Cpu className="w-3.5 h-3.5 text-accent-blue" />
            </div>
            <div className="space-y-1">
              <span className="text-[7px] text-foreground/40 block">PRODUCT IDENTIFICATION</span>
              <span className="text-[9px] font-bold text-foreground/75 tracking-wider block">CHIP-SET A509</span>
            </div>
            <div className="flex justify-between items-center text-[9px] font-bold text-accent-blue">
              <span>$299.00</span>
              <span className="text-[7px] bg-accent-blue/10 px-1.5 py-0.5 rounded-full">IN CART</span>
            </div>
          </div>
        </div>
      );
    }
    if (project.id === "spark-flow") {
      return (
        <div className="relative w-full h-full bg-slate-900/10 dark:bg-slate-900/40 rounded-xl overflow-hidden flex flex-col justify-between p-4 border border-foreground/5 font-mono select-none">
          <div className="text-[8px] text-foreground/40 border-b border-foreground/5 pb-2">SPARKFLOW_PIPELINE_DAG</div>
          {/* Node flows visual */}
          <div className="flex-1 flex items-center justify-around my-2 relative">
            <div className="w-8 h-8 rounded-lg bg-accent-purple/10 border border-accent-purple/35 flex items-center justify-center text-[8px] font-bold text-accent-purple">CSV</div>
            <div className="w-4 h-[1px] bg-foreground/10" />
            <div className="w-10 h-8 rounded-lg bg-accent-blue/10 border border-accent-blue/35 flex items-center justify-center text-[7px] font-bold text-accent-blue text-center leading-none">SPARK<br/>JOIN</div>
            <div className="w-4 h-[1px] bg-foreground/10" />
            <div className="w-8 h-8 rounded-lg bg-accent-pink/10 border border-accent-pink/35 flex items-center justify-center text-[8px] font-bold text-accent-pink">PARQUET</div>
          </div>
          <div className="text-[7px] text-foreground/30 text-right">Job execution time: 14.8s</div>
        </div>
      );
    }
    return <div className="w-full h-full bg-foreground/[0.02] border border-foreground/5 rounded-xl" />;
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`group glass-card rounded-[32px] p-6 border border-foreground/5 relative flex flex-col justify-between hover:shadow-2xl transition-shadow ${borderHover}`}
    >
      {/* Glow shadow inside element */}
      <div 
        className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-[40px] -z-10"
        style={{
          boxShadow: `0 0 40px 10px ${glowColor}`,
        }}
      />

      <div>
        {/* Project Thumbnail Visual */}
        <div className="w-full h-44 mb-6 rounded-2xl overflow-hidden relative" style={{ transform: "translateZ(30px)" }}>
          {renderCardGraphic()}
        </div>

        {/* Project Meta Info */}
        <span className="text-[10px] uppercase font-bold text-accent-purple tracking-widest block mb-1">
          {project.role}
        </span>

        {/* Title */}
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-foreground/60 leading-relaxed font-medium mb-4">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-foreground/[0.03] dark:bg-white/[0.02] border border-foreground/5 text-foreground/65"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Features Checklist */}
        <div className="border-t border-foreground/5 pt-4 mb-6 space-y-2">
          {project.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-foreground/75 font-semibold">
              <ShieldCheck className="w-4 h-4 text-accent-mint shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer: Links */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex items-center gap-3 border-t border-foreground/5 pt-4 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-foreground/5 transition-all duration-200 ${linkColor}`}
            >
              <Github className="w-3.5 h-3.5" /> Code Repo
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full border border-foreground/5 transition-all duration-200 ${linkColor}`}
            >
              Live Demo <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-pink uppercase block mb-3">03 / Works</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Featured Projects
          </h2>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
