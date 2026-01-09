"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
        <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">
            Where cutting-edge AI meets compassionate innovation — empowering
            every learner, supporting every life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
