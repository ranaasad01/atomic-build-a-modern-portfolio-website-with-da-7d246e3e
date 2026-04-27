"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

const directionVariants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  none: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={directionVariants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}

interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

// ─── Skills Section ──────────────────────────────────────────────────────────
import { skills } from "@/lib/data";

const categoryConfig = {
  frontend: { label: "Frontend", color: "from-blue-500 to-indigo-500" },
  backend: { label: "Backend", color: "from-emerald-500 to-teal-500" },
  tools: { label: "DevOps & Tools", color: "from-orange-500 to-amber-500" },
  design: { label: "Design", color: "from-pink-500 to-rose-500" },
};

export function Skills() {
  const categories = Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>;
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16 text-center">
          <p className="text-indigo-400 font-semibold text-sm uppercase tracking-widest mb-3">Tech Stack</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Skills &amp; Technologies</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">A curated collection of tools and technologies I use to bring ideas to life.</p>
        </div>
        <div className="space-y-12">
          {categories.map((cat, catIdx) => {
            const catSkills = skills.filter((s) => s.category === cat);
            const config = categoryConfig[cat];
            return (
              <ScrollReveal key={cat} delay={catIdx * 0.1}>
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={"w-3 h-3 rounded-full bg-gradient-to-r " + config.color} />
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">{config.label}</h3>
                    <div className="flex-1 h-px bg-slate-200 dark:bg-slate-800" />
                  </div>
                  <StaggerContainer className="flex flex-wrap gap-3">
                    {catSkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        variants={staggerItem}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="group flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 dark:bg-slate-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-500/40 rounded-xl transition-all duration-200 cursor-default"
                      >
                        <span className="text-lg leading-none">{skill.icon}</span>
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{skill.name}</span>
                      </motion.div>
                    ))}
                  </StaggerContainer>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-center">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Always learning — currently exploring{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold">AI/ML integration</span>,{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold">Rust</span>, and{" "}
              <span className="text-indigo-500 dark:text-indigo-400 font-semibold">WebAssembly</span>.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
