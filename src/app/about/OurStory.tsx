"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, ArrowRight, Quote } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function OurStory() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--error-bg)] px-4 py-2 text-sm font-semibold text-[var(--error)]">
              <Heart className="h-4 w-4" />
              The Challenge
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Why We Started Lunamagix
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
              We started Lunamagix with a simple observation: the children who
              need the most support often have access to the least technology.
              Special education, despite serving millions of families, remains
              underserved by the AI revolution sweeping through mainstream
              education.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              This isn&apos;t because the technology can&apos;t help — it&apos;s because building
              for diverse needs is harder, and the market is smaller. Most
              companies don&apos;t see the return on investment.
            </p>

            <div className="mt-8 rounded-xl bg-[var(--gray-50)] border border-[var(--border-default)] p-6">
              <Quote className="h-8 w-8 text-[var(--luna-purple)] mb-4" />
              <blockquote className="text-lg italic text-[var(--text-secondary)]">
                &quot;Is this the most profitable path we could have chosen? Probably
                not. But it&apos;s the most meaningful one.&quot;
              </blockquote>
            </div>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-teal-lighter)] px-4 py-2 text-sm font-semibold text-[var(--accent-teal)]">
              <Sparkles className="h-4 w-4" />
              Our Approach
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              We See Possibility in Every Learner
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
              We see children who light up when they interact with immersive
              experiences designed for their sensory needs. Parents who finally
              understand their child&apos;s progress through AI that speaks their
              language. Therapists who can now track what was once invisible.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
              We&apos;ve structured our business to make it sustainable — serving
              premium schools and coaching centers funds our mission work in
              special education. Because every child who learns to brush their
              teeth through our self-care simulation, every parent who catches a
              developmental delay early through our screening tool, every
              therapist who finally has the data they need — that&apos;s why we exist.
            </p>

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)]">
              <h3 className="text-xl font-bold text-white">Our Mission</h3>
              <p className="mt-2 text-white/90">
                To democratize access to cutting-edge AI and immersive technology
                for education and quality of life enhancement, with unwavering
                commitment to neurodiverse communities.
              </p>
            </div>

            <div className="mt-8">
              <Button 
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white"
              >
                <Link href="/products">
                  Explore Our Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
