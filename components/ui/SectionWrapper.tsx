"use client";

import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("section-padding relative overflow-hidden", className)}
    >
      <div className={cn("max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", innerClassName)}>
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", centered && "text-center")}>
      {eyebrow && (
        <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

// ─── About Section ────────────────────────────────────────────────────────────
import { motion } from "framer-motion";
import { MapPin, Download, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, staggerItem } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { personalInfo } from "@/lib/data";

export function About() {
  return (
    <SectionWrapper id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <SectionHeading
        eyebrow="About Me"
        title="Passionate about crafting digital experiences"
        description="Here's a bit about who I am and what drives me."
      />
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="left">
          <div className="relative">
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-3xl blur-lg opacity-30" />
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-700">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-indigo-700 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="text-center">
                    <div className="text-8xl font-black text-white/20 select-none">
                      {personalInfo.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div className="text-white/60 text-sm mt-2 font-medium">{personalInfo.title}</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{personalInfo.name}</h3>
                  <div className="flex items-center justify-center gap-1.5 mt-1 text-slate-500 dark:text-slate-400 text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {personalInfo.location}
                  </div>
                </div>
                {personalInfo.availableForWork && (
                  <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-700 dark:text-emerald-400 text-sm font-medium">Open to opportunities</span>
                  </div>
                )}
              </div>
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 top-8 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 hidden sm:block"
            >
              <div className="text-2xl font-black gradient-text">5+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Years Exp.</div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -left-4 bottom-12 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700 hidden sm:block"
            >
              <div className="text-2xl font-black gradient-text">40+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">Projects</div>
            </motion.div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="right">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 text-indigo-500 dark:text-indigo-400 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              My Story
            </div>
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">{personalInfo.bio}</p>
            <StaggerContainer className="grid grid-cols-2 gap-4 mt-8">
              {personalInfo.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={staggerItem}
                  className="bg-white dark:bg-slate-800/60 rounded-2xl p-5 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 transition-colors group"
                >
                  <div className="text-3xl font-black gradient-text group-hover:scale-110 transition-transform inline-block">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </StaggerContainer>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Let&apos;s Work Together
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4" />
                Download CV
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </SectionWrapper>
  );
}
