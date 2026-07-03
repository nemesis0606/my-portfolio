"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Hobbies", href: "#hobbies" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ isLoaded = true }: { isLoaded?: boolean }) {
  const { theme, toggleTheme, isMounted } = useTheme();
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll Progress Indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Track scroll depth to add border intensity on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section Observer for Active Highlights
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const offset = 100; // Offset for sticky navbar height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-purple via-accent-blue to-accent-pink z-[100] origin-left"
        style={{ scaleX }}
      />

      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={isLoaded ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring" as const, stiffness: 100, damping: 15, delay: 0.1 }}
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50 transition-all duration-300 ${
          scrolled ? "top-3" : "top-5"
        }`}
      >
        <div className="glass-panel rounded-full px-4 md:px-6 py-2.5 flex items-center justify-between transition-all duration-300">
          {/* Logo Name */}
          <a
            href="#hero"
            onClick={(e) => handleScrollTo(e, "#hero")}
            className="flex items-center gap-1.5 font-bold tracking-tight text-lg pl-2 group"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-tr from-accent-purple to-accent-pink group-hover:scale-125 transition-transform duration-300" />
            <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
              {personalInfo.name.split(" ")[0]}
            </span>
            <span className="text-accent-purple font-light">
              .{personalInfo.name.split(" ")[1].charAt(0)}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full ${
                    isActive
                      ? "text-primary dark:text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground"
                  }`}
                >
                  {/* Sliding Bubble Background for Active Tab */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavBubble"
                      className="absolute inset-0 bg-accent-purple/10 dark:bg-accent-purple/90 -z-10 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="flex items-center gap-2 pr-1">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full border border-foreground/5 hover:bg-foreground/5 transition-colors duration-200"
            >
              {isMounted && theme === "dark" ? (
                <Sun className="w-4 h-4 text-accent-peach" />
              ) : (
                <Moon className="w-4 h-4 text-accent-purple" />
              )}
            </button>

            {/* Resume Call-to-action button (Desktop) */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity duration-200"
            >
              Resume <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 rounded-full border border-foreground/5 hover:bg-foreground/5 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 glass-panel rounded-3xl p-6 flex flex-col gap-4 border border-foreground/5 md:hidden shadow-xl"
            >
              <div className="flex flex-col gap-2.5">
                {NAV_ITEMS.map((item) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleScrollTo(e, item.href)}
                      className={`px-4 py-2.5 rounded-xl text-base font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-accent-purple/10 text-accent-purple"
                          : "hover:bg-foreground/5 text-foreground/75"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple" />
                      )}
                    </a>
                  );
                })}
              </div>

              <div className="h-[1px] bg-foreground/5 my-1" />

              <a
                href={personalInfo.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-95 transition-opacity"
              >
                Download Resume <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
