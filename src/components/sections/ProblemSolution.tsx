"use client";

import { motion } from "framer-motion";
import { Heart, Brain, Shield, Lightbulb, TrendingUp, Users, School } from "lucide-react";

const stats = [
  { value: "1 in 6", label: "children have developmental differences", icon: Users },
  { value: "70%", label: "of special schools lack modern EdTech", icon: School },
  { value: "15M+", label: "neurodiverse learners in India alone", icon: TrendingUp },
];

const solutions = [
  {
    icon: Brain,
    title: "AI That Understands",
    description:
      "Personalized learning paths that adapt to each child's unique needs",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "GDPR-compliant data handling with full transparency",
  },
  {
    icon: Heart,
    title: "Compassion Driven",
    description:
      "Technology that amplifies human connection, not replaces it",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProblemSolution() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Problem */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--error-bg)] px-4 py-2 text-sm font-semibold text-[var(--error)]">
              <Heart className="h-4 w-4" />
              The Challenge
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              The children who need the most support often have access to the
              least technology.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              Special education, despite serving millions of families, remains
              underserved by the AI revolution sweeping through mainstream
              education. This isn&apos;t because the technology can&apos;t help — it&apos;s
              because building for diverse needs is harder, and the market is
              smaller. Most companies don&apos;t see the return on investment.
            </p>
            
            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group rounded-xl bg-[var(--gray-50)] p-4 sm:p-5 text-center border border-[var(--border-default)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] transition-all"
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--luna-purple-lighter)] group-hover:scale-110 transition-transform">
                    <stat.icon className="h-5 w-5 text-[var(--luna-purple)]" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--luna-purple)]">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-[var(--text-tertiary)] leading-tight">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-teal-lighter)] px-4 py-2 text-sm font-semibold text-[var(--accent-teal)]">
              <Lightbulb className="h-4 w-4" />
              Our Approach
            </div>
            <h2 className="mt-6 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
              We see something different. We see possibility in every learner.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--text-secondary)]">
              We see children who light up when they interact with immersive
              experiences designed for their sensory needs. Parents who finally
              understand their child&apos;s progress through AI that speaks their
              language. Therapists who can now track what was once invisible.
            </p>
            
            {/* Solutions List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-8 space-y-4"
            >
              {solutions.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex gap-4 rounded-xl bg-[var(--gray-50)] p-4 border border-[var(--border-default)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] transition-all"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] shadow-[var(--shadow-md)] group-hover:scale-105 transition-transform">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
