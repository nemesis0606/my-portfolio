"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import CertificationsSection from "@/components/sections/CertificationsSection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

export default function Home() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Cinematic Intro Sequence */}
      <IntroLoader onComplete={() => setHasLoaded(true)} />

      {/* Floating Glass Navigation */}
      <Navbar isLoaded={hasLoaded} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <HeroSection isLoaded={hasLoaded} />
        <AboutSection />
        <HobbiesSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <AchievementsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

