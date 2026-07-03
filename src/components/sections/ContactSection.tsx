"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Copy, Check, Send, FileText } from "lucide-react";
import { Github, Linkedin, Discord } from "@/components/icons/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ==========================================
    // TODO: Configure message submission.
    // Statically exported sites can integrate services like:
    // - Formspree (https://formspree.io)
    // - EmailJS (https://www.emailjs.com)
    // - Web3Forms (https://web3forms.com)
    // ==========================================
    
    // Simulate API request delay for polished UI feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 4500);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 scroll-mt-12">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <span className="text-xs font-bold tracking-widest text-accent-purple uppercase block mb-3">07 / Contact</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
            Get In Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact info cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Intro text */}
            <div className="glass-card rounded-[28px] p-6 border border-foreground/5">
              <h3 className="text-lg font-bold text-foreground mb-3">Let&apos;s build something together</h3>
              <p className="text-sm text-foreground/60 leading-relaxed font-semibold">
                Have an interesting project, role open, or open-source idea? Drop a line in the form, or reach out directly via email or LinkedIn. I am always happy to discuss system designs, frontend performance, or big data engineering!
              </p>
            </div>

            {/* Quick copy email card */}
            <button
              onClick={handleCopyEmail}
              className="group glass-card rounded-[28px] p-6 border border-foreground/5 text-left flex items-center justify-between hover:border-accent-purple/20 transition-all duration-300 card-glow-purple"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-purple/5 border border-accent-purple/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-foreground/45">Email Address</span>
                  <p className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </div>
              
              <div className="p-2 rounded-lg border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.01]">
                <AnimatePresence mode="wait" initial={false}>
                  {copied ? (
                    <motion.div
                      key="check"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Check className="w-4 h-4 text-accent-mint" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="copy"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Copy className="w-4 h-4 text-foreground/50 group-hover:text-foreground transition-colors" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>

            {/* Discord Contact Card */}
            {personalInfo.discord && (
              <div className="group glass-card rounded-[28px] p-6 border border-foreground/5 flex items-center justify-between w-full hover:border-accent-blue/20 transition-all duration-300 card-glow-blue">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent-blue/5 border border-accent-blue/10 flex items-center justify-center">
                    <Discord className="w-5 h-5 text-accent-blue" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-foreground/45">Discord Contact</span>
                    <p className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors select-all">
                      {personalInfo.discord}
                    </p>
                  </div>
                </div>
                <span className="text-[9px] font-bold text-accent-blue uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent-blue/5 border border-accent-blue/10">
                  Active
                </span>
              </div>
            )}

            {/* Resume CV card */}
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="group glass-card rounded-[28px] p-6 border border-foreground/5 flex items-center justify-between hover:border-accent-pink/20 transition-all duration-300 card-glow-pink"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-accent-pink/5 border border-accent-pink/10 flex items-center justify-center">
                  <FileText className="w-5 h-5 text-accent-pink" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-foreground/45">Curriculum Vitae</span>
                  <p className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                    Download Resume (PDF)
                  </p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-foreground text-background group-hover:opacity-90 transition-opacity">
                Download
              </span>
            </a>

            {/* Socials Connection Row */}
            <div className="glass-card rounded-[28px] p-6 border border-foreground/5 flex items-center justify-between">
              <span className="text-xs font-bold text-foreground/40 uppercase tracking-wider">Social Channels</span>
              <div className="flex gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
                  aria-label="GitHub"
                >
                  <Github className="w-4.5 h-4.5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-foreground/5 hover:border-foreground/15 hover:bg-foreground/5 text-foreground/50 hover:text-foreground transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Glass Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[32px] p-6 md:p-8 border border-foreground/5 h-full flex flex-col justify-between">
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-foreground mb-4">Send a Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-[10px] uppercase font-bold text-foreground/45">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.01] text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple/30 transition-all font-semibold"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="email" className="text-[10px] uppercase font-bold text-foreground/45">Email Address</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.01] text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple/30 transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="subject" className="text-[10px] uppercase font-bold text-foreground/45">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project Inquiry / Job opening"
                    className="w-full px-4 py-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.01] text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple/30 transition-all font-semibold"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="message" className="text-[10px] uppercase font-bold text-foreground/45">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Hi Alex, I'd love to chat about..."
                    className="w-full px-4 py-3 rounded-xl border border-foreground/5 bg-foreground/[0.02] dark:bg-white/[0.01] text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-accent-purple focus:border-accent-purple/30 transition-all font-semibold resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group flex items-center justify-center gap-2 py-3 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-95 transition-opacity disabled:opacity-50 shadow-md"
                >
                  {isSubmitting ? (
                    <span className="w-4 h-4 rounded-full border-2 border-background border-t-transparent animate-spin" />
                  ) : (
                    <>
                      Send Message 
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </>
                  )}
                </button>
              </form>

              {/* Status Banner */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-xl bg-accent-mint/10 border border-accent-mint/20 text-accent-mint text-xs font-semibold text-center"
                  >
                    Thank you! Your message has been sent successfully (Simulated).
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
