"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site";

// Map founders to their actual photos
const founderImages: Record<string, string> = {
  "Ms. Sai Naveena Sri": "/images/team/naveena-sri.jpg",
  "Mr. S. Vaidyanathan": "/images/team/vaidyanathan.jpg",
};

const advisorImages: Record<string, string> = {
  "Dr. D. Tamilselvi": "/images/team/tamilselvi.jpg",
};

export function Founders() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Meet the Founders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            The passionate people behind Lunamagix.
          </p>
        </motion.div>

        {/* Founders */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {siteConfig.founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left bg-[var(--gray-50)] rounded-xl p-6 border border-[var(--border-default)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] transition-all"
            >
              <div 
                className="relative h-32 w-32 shrink-0 rounded-xl overflow-hidden shadow-[var(--shadow-md)] transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage: `url(${founderImages[founder.name] || "/images/team/placeholder.jpg"})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center top',
                }}
              />
              <div className="mt-6 sm:ml-6 sm:mt-0">
                <h3 className="text-xl font-bold text-[var(--text-primary)]">
                  {founder.name}
                </h3>
                <p className="mt-1 text-[var(--luna-purple)] font-semibold">
                  {founder.role}
                </p>
                <p className="mt-1 text-sm text-[var(--text-tertiary)]">
                  {founder.credentials}
                </p>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  {founder.description}
                </p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  Connect on LinkedIn
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Advisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center text-2xl font-bold text-[var(--text-primary)]">
            Advisory Board
          </h3>
          <div className="mt-12 flex flex-wrap justify-center gap-12">
            {siteConfig.advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col items-center text-center"
              >
                <div 
                  className="relative h-28 w-28 rounded-full overflow-hidden shadow-[var(--shadow-lg)] ring-4 ring-[var(--luna-purple-lighter)] group-hover:ring-[var(--luna-purple-light)] transition-all"
                  style={{
                    backgroundImage: `url(${advisorImages[advisor.name] || "/images/team/placeholder.jpg"})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center top',
                  }}
                />
                <h4 className="mt-4 font-semibold text-[var(--text-primary)]">
                  {advisor.name}
                </h4>
                <p className="mt-1 text-sm text-[var(--luna-purple)] font-medium">
                  {advisor.role}
                </p>
                <p className="mt-1 text-xs text-[var(--text-tertiary)] max-w-xs">
                  {advisor.credentials}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Join Advisory CTA */}
          <div className="mt-12 text-center">
            <p className="text-[var(--text-secondary)]">
              Interested in shaping the future of inclusive education technology?
            </p>
            <Link
              href="/partner#advisory"
              className="mt-2 inline-flex text-sm font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors"
            >
              Join our Advisory Panel →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
