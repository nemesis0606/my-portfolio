"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { certifications } from "@/data/portfolioData";

export default function CertificationsSection() {
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
    <section id="certifications" className="relative py-24 scroll-mt-12 bg-foreground/[0.005]">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-blue uppercase block mb-3">05 / Credentials</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Certifications
          </h2>
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={scrollRevealVariants}
              className="group glass-card rounded-[24px] p-5 border border-foreground/5 relative flex flex-col justify-between hover:-translate-y-1 hover:border-accent-blue/20 card-glow-blue"
            >
              <div>
                {/* Visual Badge representation */}
                <div className="w-12 h-12 mb-5 rounded-2xl bg-accent-blue/5 border border-accent-blue/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-accent-blue" />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-sm font-semibold text-foreground/60 mb-4">
                  {cert.issuer}
                </p>
              </div>

              {/* Footer: Date & Link */}
              <div className="border-t border-foreground/5 pt-4 mt-6 flex items-center justify-between">
                <span className="flex items-center gap-1 text-xs text-foreground/45 font-semibold">
                  <Calendar className="w-3.5 h-3.5" /> Issued {cert.date}
                </span>

                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue hover:underline"
                >
                  Verify <ExternalLink className="w-3 h-3" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
