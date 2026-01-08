"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Users, Handshake } from "lucide-react";

const ctas = [
  {
    title: "For Schools",
    description:
      "Transform your campus with AI-powered learning and safety solutions.",
    icon: Building,
    href: "/solutions/schools",
    cta: "Explore Solutions",
    color: "purple",
  },
  {
    title: "For Parents",
    description:
      "Support your child's unique learning journey with personalized tools.",
    icon: Users,
    href: "/solutions/parents",
    cta: "Learn More",
    color: "blue",
  },
  {
    title: "For Partners",
    description:
      "Join our mission to democratize inclusive education technology.",
    icon: Handshake,
    href: "/partner",
    cta: "Partner With Us",
    color: "teal",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)]",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-[var(--azure-blue)] to-[var(--accent-teal)]",
  },
  teal: {
    iconBg: "bg-gradient-to-br from-[var(--accent-teal)] to-[var(--luna-purple)]",
  },
};

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Whether you&apos;re an institution, a parent, or a professional —
            there&apos;s a place for you in our mission.
          </motion.p>
        </div>

        {/* CTA Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {ctas.map((item, index) => {
            const styles = colorStyles[item.color as keyof typeof colorStyles];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-[var(--border-default)] bg-white p-8 transition-all hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-1"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconBg} shadow-[var(--shadow-md)]`}
                >
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {item.description}
                </p>
                <div className="mt-6">
                  <Button variant="outline" asChild className="group/btn">
                    <Link href={item.href}>
                      {item.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-[var(--text-secondary)]">
            Have questions? We&apos;d love to hear from you.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" asChild className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white">
              <Link href="/contact?demo=true">Schedule a Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
