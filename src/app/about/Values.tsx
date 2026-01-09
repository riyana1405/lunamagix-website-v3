"use client";

import { motion } from "framer-motion";
import { Heart, Lightbulb, Users, BookOpen, Leaf, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Technology serves humanity, not the reverse.",
    color: "purple",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Lightbulb,
    title: "Inclusive Innovation",
    description: "Design for the edges, benefit everyone.",
    color: "gold",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Users,
    title: "Transparent Partnership",
    description: "We grow with our community.",
    color: "blue",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: BookOpen,
    title: "Research-Driven",
    description: "Evidence-based approach to everything.",
    color: "purple",
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description: "Building for generations, not quarters.",
    color: "green",
    gradient: "from-green-500 to-emerald-500",
  },
];

export function Values() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
            <Sparkles className="h-4 w-4" />
            Our Values
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            The Principles That Guide Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            The principles that guide every decision we make.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center p-6 rounded-2xl bg-white border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform`}
              >
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-6 text-lg font-bold text-[var(--text-primary)]">
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
