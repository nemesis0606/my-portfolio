"use client";

import React from "react";
import { Mail, ArrowUp } from "lucide-react";
import { Github, Linkedin } from "@/components/icons/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-foreground/5 py-12 md:py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-sm text-foreground/50 font-medium">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-foreground/35 mt-1">
            Handcrafted using Next.js, Framer Motion, and Tailwind CSS.
          </p>
        </div>

        {/* Right Side: Social links + Scroll to top */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
            >
              <Github className="w-4.5 h-4.5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
            >
              <Linkedin className="w-4.5 h-4.5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email"
              className="p-2 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
            >
              <Mail className="w-4.5 h-4.5" />
            </a>
          </div>

          <div className="h-6 w-[1px] bg-foreground/10" />

          {/* Scroll to Top button */}
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll back to top"
            className="group flex items-center justify-center p-2.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity duration-200 shadow-sm"
          >
            <ArrowUp className="w-4.5 h-4.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
}
