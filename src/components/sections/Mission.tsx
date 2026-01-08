"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Mission() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--luna-purple)]">
              Why We Do What We Do
            </h2>
            <h3 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Technology that serves humanity, not the reverse.
            </h3>
            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
              We started Lunamagix with a simple observation: the children who
              need the most support often have access to the least technology.
              Special education, despite serving millions of families, remains
              underserved by the AI revolution.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              Is this the most profitable path we could have chosen? Probably
              not. But it&apos;s the most meaningful one. And we&apos;ve structured our
              business to make it sustainable — serving premium schools and
              coaching centers funds our mission work in special education.
            </p>

            {/* Values */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Compassion First",
                "Inclusive Innovation",
                "Transparent Partnership",
                "Research-Driven",
              ].map((value) => (
                <div
                  key={value}
                  className="flex items-center gap-2 text-[var(--text-secondary)]"
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]" />
                  {value}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Founder Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="rounded-2xl bg-gradient-to-br from-[var(--luna-purple-lighter)] to-[var(--azure-blue-lighter)] p-8 lg:p-12 border border-[var(--border-default)]">
              <Quote className="h-10 w-10 text-[var(--luna-purple-light)]" />
              <blockquote className="mt-6 text-xl font-medium leading-relaxed text-[var(--text-primary)] lg:text-2xl">
                &quot;Every child who learns to brush their teeth through our
                self-care simulation, every parent who catches a developmental
                delay early through our screening tool, every therapist who
                finally has the data they need — that&apos;s why we exist.&quot;
              </blockquote>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)]" />
                <div>
                  <div className="font-semibold text-[var(--text-primary)]">
                    {siteConfig.founders[0].name}
                  </div>
                  <div className="text-sm text-[var(--text-tertiary)]">
                    {siteConfig.founders[0].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
