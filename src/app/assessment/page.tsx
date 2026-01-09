"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Sparkles,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileText,
  Users,
  Brain,
  Heart,
} from "lucide-react";

const howItWorks = [
  {
    step: 1,
    title: "Parent Questionnaire",
    description:
      "Brief, guided questions about your child's development, behavior, and daily activities.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Optional Observation",
    description:
      "Webcam-based behavioral observation with clear consent (completely optional).",
    icon: Users,
  },
  {
    step: 3,
    title: "AI Analysis",
    description:
      "Advanced pattern recognition powered by Nvidia Metropolis identifies areas for attention.",
    icon: Brain,
  },
  {
    step: 4,
    title: "Personalized Report",
    description:
      "Detailed report with observations, recommendations, and suggested next steps.",
    icon: Heart,
  },
];

const features = [
  { icon: Clock, text: "15-20 minutes to complete" },
  { icon: Shield, text: "Privacy-first, GDPR compliant" },
  { icon: Sparkles, text: "AI-powered insights" },
  { icon: CheckCircle, text: "Downloadable PDF report" },
];

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="flex flex-col justify-center text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] px-4 py-2 text-sm font-medium text-white">
                  <Sparkles className="h-4 w-4" />
                  Free Tool
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Lumina{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Screen
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-2 text-xl font-medium text-[var(--luna-purple)]"
              >
                Free Online Neurodevelopmental Screening Tool
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Early detection enables early intervention. Our AI-powered
                screening tool helps parents and educators identify potential
                developmental differences — the first step toward getting the
                right support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start"
              >
                {features.map((feature, index) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-[var(--text-secondary)]"
                  >
                    <feature.icon className="h-5 w-5 text-[var(--luna-purple)]" />
                    {feature.text}
                  </div>
                ))}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button
                  size="lg"
                  asChild
                  className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
                >
                  <Link href="#start">
                    Start Free Screening
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Info Cards */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {howItWorks.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="group border-[var(--border-default)] bg-white shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-1 transition-all">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] text-lg font-bold text-white group-hover:scale-110 transition-transform">
                        {item.step}
                      </div>
                      <CardTitle className="text-[var(--text-primary)]">{item.title}</CardTitle>
                      <CardDescription className="text-[var(--text-secondary)]">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="border-b border-amber-200 bg-amber-50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h2 className="font-semibold text-amber-900">
                Important Disclaimer
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-amber-800">
                <li>
                  • This is a preliminary screening tool, not a medical
                  diagnosis.
                </li>
                <li>
                  • Results should be discussed with qualified healthcare
                  professionals.
                </li>
                <li>
                  • Early detection enables early intervention — that&apos;s why this
                  tool exists.
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Start Assessment Section */}
      <section id="start" className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-teal-lighter)] px-4 py-2 text-sm font-semibold text-[var(--accent-teal)]">
              <Sparkles className="h-4 w-4" />
              Get Started
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Begin Your Free Screening
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              The screening takes 15-20 minutes and can be saved and resumed at
              any time.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 rounded-2xl border border-[var(--border-default)] bg-[var(--gray-50)] p-8 shadow-[var(--shadow-lg)]"
          >
            {/* Placeholder for assessment tool */}
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[var(--accent-teal)] to-[var(--azure-blue)]">
                <Sparkles className="h-12 w-12 text-white" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">
                Assessment Tool Coming Soon
              </h3>
              <p className="mt-2 text-[var(--text-secondary)]">
                We&apos;re putting the finishing touches on our screening tool.
                Sign up to be notified when it launches.
              </p>
              <div className="mt-8">
                <form className="mx-auto flex max-w-md gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-[var(--border-default)] px-4 py-3 focus:border-[var(--luna-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--luna-purple)]/20"
                  />
                  <Button type="submit" className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white">Notify Me</Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div className="flex gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--accent-teal)] to-[var(--azure-blue)] shadow-[var(--shadow-md)]">
                <Shield className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                  Your Privacy Matters
                </h2>
                <div className="mt-6 space-y-4 text-[var(--text-secondary)]">
                  <p>
                    We take data privacy extremely seriously, especially when it
                    comes to children&apos;s information.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "All data is encrypted in transit and at rest",
                      "We comply with GDPR and local data protection laws",
                      "You can request complete deletion of your data at any time",
                      "We never sell or share your data with third parties",
                      "Session data can be deleted immediately after receiving your report",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[var(--accent-teal)] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="pt-2">
                    <Link
                      href="/privacy"
                      className="inline-flex items-center text-[var(--luna-purple)] hover:underline font-medium"
                    >
                      Read our full Privacy Policy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Trust Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-card)] text-center"
              >
                <div className="text-3xl font-bold text-[var(--luna-purple)]">GDPR</div>
                <div className="text-sm text-[var(--text-tertiary)]">Compliant</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-card)] text-center"
              >
                <div className="text-3xl font-bold text-[var(--accent-teal)]">256-bit</div>
                <div className="text-sm text-[var(--text-tertiary)]">Encryption</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-card)] text-center col-span-2"
              >
                <div className="text-3xl font-bold text-[var(--azure-blue)]">Zero</div>
                <div className="text-sm text-[var(--text-tertiary)]">Third-Party Data Sharing</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <FileText className="h-4 w-4" />
              Resources
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Helpful Resources
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Learn more about neurodevelopmental conditions and early
              intervention.
            </p>
          </motion.div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understanding Developmental Milestones",
                description:
                  "Learn what to expect at different ages and when variations might warrant attention.",
                href: "#",
                icon: Brain,
                color: "purple",
              },
              {
                title: "The Importance of Early Intervention",
                description:
                  "Research shows that early support leads to better outcomes. Here's what the science says.",
                href: "#",
                icon: Heart,
                color: "blue",
              },
              {
                title: "Finding Professional Support",
                description:
                  "A guide to finding qualified specialists and navigating the evaluation process.",
                href: "#",
                icon: Users,
                color: "teal",
              },
            ].map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={resource.href}>
                  <Card className="group h-full border-[var(--border-default)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2 transition-all duration-300">
                    <CardHeader>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                        resource.color === "purple" ? "bg-[var(--luna-purple-lighter)]" :
                        resource.color === "blue" ? "bg-[var(--azure-blue-lighter)]" : "bg-[var(--accent-teal-lighter)]"
                      } group-hover:scale-110 transition-transform`}>
                        <resource.icon className={`h-6 w-6 ${
                          resource.color === "purple" ? "text-[var(--luna-purple)]" :
                          resource.color === "blue" ? "text-[var(--azure-blue)]" : "text-[var(--accent-teal)]"
                        }`} />
                      </div>
                      <CardTitle className="text-lg text-[var(--text-primary)] flex items-center gap-2">
                        {resource.title}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-[var(--luna-purple)]" />
                      </CardTitle>
                      <CardDescription className="text-[var(--text-secondary)]">{resource.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--luna-purple)]/10">
              <Heart className="h-8 w-8 text-[var(--luna-purple)]" />
            </div>
            <h2 className="mt-6 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
              You&apos;re Not Alone
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Whatever the results of this screening, remember that seeking
              information is an act of love. Millions of families are on similar
              journeys, and support is available. Every child has unique
              strengths, and early understanding helps us nurture them.
            </p>
            <div className="mt-8">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
                  Get Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Expert guidance
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
