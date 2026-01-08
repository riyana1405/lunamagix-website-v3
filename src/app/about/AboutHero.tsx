"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[var(--luna-purple-dark)] via-[var(--luna-purple)] to-[var(--azure-blue-dark)] py-20 sm:py-28">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-[var(--radius-full)] bg-[var(--luna-purple)]/20 blur-3xl" />
        <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-[var(--radius-full)] bg-[var(--luna-pink)]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[var(--luna-purple-lighter)]">
            Where cutting-edge AI meets compassionate innovation — empowering
            every learner, supporting every life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
