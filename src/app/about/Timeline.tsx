"use client";

import { motion } from "framer-motion";
import { Sparkles, Lightbulb, Building2, Code, Rocket } from "lucide-react";

const milestones = [
  {
    year: "2024",
    title: "The Idea",
    description:
      "Founders identify the gap in technology solutions for neurodiverse learners during VR research at special schools.",
    icon: Lightbulb,
    color: "from-amber-500 to-orange-500",
  },
  {
    year: "2025",
    title: "Company Founded",
    description:
      "Lunamagix Futuretech Private Limited is incorporated with a mission to democratize inclusive education technology.",
    icon: Building2,
    color: "from-purple-500 to-indigo-500",
  },
  {
    year: "2025",
    title: "Product Development",
    description:
      "Development begins on LunaLearn platform and LunaViz 3D presentation system.",
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2026",
    title: "Launch",
    description:
      "Public launch of our education technology suite and free assessment tool.",
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
];

export function Timeline() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--azure-blue-lighter)] px-4 py-2 text-sm font-semibold text-[var(--azure-blue)]">
            <Sparkles className="h-4 w-4" />
            Our Journey
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            From Idea to Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            The milestones that define us.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 h-full w-0.5 bg-gradient-to-b from-[var(--luna-purple)] to-[var(--azure-blue)] sm:left-1/2 sm:-translate-x-1/2" />

            {/* Milestones */}
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative mb-12 flex ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className="ml-20 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div
                    className={`group rounded-2xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-1 transition-all ${
                      index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-3 py-1 text-sm font-semibold text-[var(--luna-purple)]">
                      {milestone.year}
                    </span>
                    <h3 className="mt-3 text-xl font-bold text-[var(--text-primary)]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-[var(--text-secondary)]">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute left-4 top-4 sm:left-1/2 sm:-translate-x-1/2">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${milestone.color} shadow-[var(--shadow-md)]`}>
                    <milestone.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
