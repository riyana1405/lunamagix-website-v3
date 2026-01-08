"use client";

import { motion } from "framer-motion";

export function OurStory() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-lg prose-purple mx-auto"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Why We Started Lunamagix
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            We started Lunamagix with a simple observation: the children who
            need the most support often have access to the least technology.
            Special education, despite serving millions of families, remains
            underserved by the AI revolution sweeping through mainstream
            education.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            This isn&apos;t because the technology can&apos;t help — it&apos;s because building
            for diverse needs is harder, and the market is smaller. Most
            companies don&apos;t see the return on investment.
          </p>

          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            We see something different. We see children who light up when they
            interact with immersive experiences designed for their sensory
            needs. We see parents who finally understand their child&apos;s progress
            through AI that speaks their language. We see therapists who can now
            track what was once invisible.
          </p>

          <blockquote className="mt-8 border-l-4 border-[var(--luna-purple)] pl-6 italic text-[var(--text-secondary)]">
            &quot;Is this the most profitable path we could have chosen? Probably
            not. But it&apos;s the most meaningful one.&quot;
          </blockquote>

          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            We&apos;ve structured our business to make it sustainable — serving
            premium schools and coaching centers funds our mission work in
            special education. Because every child who learns to brush their
            teeth through our self-care simulation, every parent who catches a
            developmental delay early through our screening tool, every
            therapist who finally has the data they need — that&apos;s why we exist.
          </p>

          <h3 className="mt-12 text-2xl font-bold text-[var(--text-primary)]">
            Our Mission
          </h3>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            To democratize access to cutting-edge AI and immersive technology
            for education and quality of life enhancement, with unwavering
            commitment to neurodiverse communities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
