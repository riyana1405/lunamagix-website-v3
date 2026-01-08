"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, BookOpen, Leaf } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Technology serves humanity, not the reverse.",
    color: "text-[var(--luna-pink)]",
    bg: "bg-[var(--luna-pink)]/10",
  },
  {
    icon: Lightbulb,
    title: "Inclusive Innovation",
    description: "Design for the edges, benefit everyone.",
    color: "text-[var(--luna-gold)]",
    bg: "bg-[var(--luna-gold)]/10",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description: "We grow with our community.",
    color: "text-[var(--azure-blue)]",
    bg: "bg-[var(--azure-blue)]/10",
  },
  {
    icon: BookOpen,
    title: "Research-Driven",
    description: "Evidence-based approach to everything.",
    color: "text-[var(--luna-purple)]",
    bg: "bg-[var(--luna-purple)]/10",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Building for generations, not quarters.",
    color: "text-[var(--luna-green)]",
    bg: "bg-[var(--luna-green)]/10",
  },
];

export function Values() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Our Values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            The principles that guide every decision we make.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-[var(--radius-xl)] ${value.bg}`}
              >
                <value.icon className={`h-8 w-8 ${value.color}`} />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-[var(--text-primary)]">
                {value.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
