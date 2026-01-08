"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "The Idea",
    description:
      "Founders identify the gap in technology solutions for neurodiverse learners during VR research at special schools.",
  },
  {
    year: "2025",
    title: "Company Founded",
    description:
      "Lunamagix Futuretech Private Limited is incorporated with a mission to democratize inclusive education technology.",
  },
  {
    year: "2025",
    title: "Product Development",
    description:
      "Development begins on LunaLearn platform and LunaViz 3D presentation system.",
  },
  {
    year: "2026",
    title: "Launch",
    description:
      "Public launch of our education technology suite and free assessment tool.",
  },
];

export function Timeline() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Our Journey
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            From idea to impact — the milestones that define us.
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[var(--luna-purple-lighter)] sm:left-1/2 sm:-translate-x-1/2" />

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
                <div className="ml-12 sm:ml-0 sm:w-1/2 sm:px-8">
                  <div
                    className={`rounded-[var(--radius-xl)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] ${
                      index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                    }`}
                  >
                    <span className="text-sm font-semibold text-[var(--luna-purple)]">
                      {milestone.year}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-[var(--text-primary)]">
                      {milestone.title}
                    </h3>
                    <p className="mt-2 text-[var(--text-secondary)]">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 top-6 h-3 w-3 rounded-[var(--radius-full)] bg-[var(--luna-purple)] sm:left-1/2 sm:-translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
