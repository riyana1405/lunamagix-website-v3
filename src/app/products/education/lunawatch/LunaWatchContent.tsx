"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SecurityDashboard } from "@/components/mockups/SecurityDashboard";
import {
  Shield,
  Brain,
  Bell,
  MapPin,
  Users,
  Lock,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Scene Understanding",
    description:
      "Advanced computer vision analyzes live feeds in real-time, understanding context and detecting anomalies that human operators might miss.",
    color: "purple",
  },
  {
    icon: AlertTriangle,
    title: "Prognostic Threat Detection",
    description:
      "Identifies concerning behavioral patterns before incidents occur. The system learns normal campus activity and flags deviations proactively.",
    color: "blue",
  },
  {
    icon: Users,
    title: "Behavioral Analysis",
    description:
      "Detects loitering, crowd formations, restricted area breaches, and bullying patterns without requiring facial recognition for privacy.",
    color: "teal",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Automated notifications to security staff, administrators, and emergency services within seconds of detecting threats.",
    color: "purple",
  },
  {
    icon: MapPin,
    title: "Zone Management",
    description:
      "Define security zones with custom rules. Different sensitivity levels for playgrounds, entry points, restricted areas, and parking lots.",
    color: "blue",
  },
  {
    icon: Lock,
    title: "Privacy-First Design",
    description:
      "Behavioral analysis without mandatory facial recognition. Faces can be blurred for non-security analytics while maintaining safety.",
    color: "teal",
  },
];

const capabilities = [
  "Real-time weapon detection",
  "Crowd density monitoring",
  "Perimeter breach alerts",
  "Vehicle license plate recognition",
  "Visitor management integration",
  "Emergency lockdown automation",
  "School bus arrival tracking",
  "Drone patrol integration",
  "Gunshot detection (audio)",
  "After-hours monitoring",
  "Automated safety audits",
  "Compliance reporting",
];

const faqs = [
  {
    question: "How does AI threat detection work?",
    answer:
      "LunaWatch uses deep learning models trained on millions of scenarios to understand normal vs. abnormal behavior. It analyzes movement patterns, body language, object detection (like weapons), crowd dynamics, and contextual factors. When something deviates from learned 'normal' patterns, it flags for human review or triggers automated responses based on severity.",
  },
  {
    question: "What about student privacy?",
    answer:
      "Privacy is fundamental to our design. LunaWatch can perform behavioral analysis without facial recognition — using clothing, movement patterns, and contextual cues instead. Administrators control what data is captured and retained. We comply with FERPA, GDPR, and local privacy regulations. Parents can be informed through transparent policies.",
  },
  {
    question: "Can it integrate with existing camera systems?",
    answer:
      "Yes. LunaWatch is designed to work with existing IP camera infrastructure. Our AI processing layer can connect to most modern CCTV systems, adding intelligence without requiring complete hardware replacement.",
  },
  {
    question: "How quickly can it detect threats?",
    answer:
      "Detection happens in real-time — typically within 1-3 seconds of a concerning behavior appearing on camera. Alert distribution to relevant personnel occurs within 5 seconds. For critical threats like weapon detection, emergency services can be automatically notified.",
  },
  {
    question: "Is this suitable for small schools?",
    answer:
      "Absolutely. LunaWatch scales from single-building schools to multi-campus universities. We offer tiered solutions that match your institution's size and budget, with the same AI capabilities at every level.",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
  },
};

export function LunaWatchContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                  <Sparkles className="h-4 w-4" />
                  AI-POWERED SECURITY
                </span>
              </motion.div>

              {/* Product Icon & Name */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] shadow-[var(--shadow-md)]">
                  <Shield className="h-7 w-7 text-white" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                LunaWatch
              </motion.h1>

              {/* Tagline with gradient */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-xl font-semibold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent"
              >
                360° Intelligent Campus Protection
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                AI-powered security that sees what humans miss. Prognostic threat
                detection identifies concerning patterns before incidents occur —
                shifting from reactive response to proactive protection.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button
                  size="lg"
                  asChild
                  className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
                >
                  <Link href="/contact?demo=true&product=lunawatch">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="#features">View Features</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-[var(--border-light)]"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>FERPA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Privacy-First Design</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>24/7 Monitoring</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative flex items-center justify-center"
            >
              {/* Main Dashboard */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-white shadow-[var(--shadow-xl)]">
                <SecurityDashboard />
              </div>

              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">
                    &lt;3 sec
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    Threat Detection
                  </div>
                </div>
              </motion.div>

              {/* Floating Stats Card - Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-4 bottom-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--success)]">
                    99.2%
                  </div>
                  <div className="text-xs text-[var(--text-tertiary)]">
                    Detection Accuracy
                  </div>
                </div>
              </motion.div>

              {/* Floating Badge - Top */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="absolute -top-3 right-8 hidden lg:block"
              >
                <div className="rounded-full bg-[var(--success-bg)] border border-[var(--success)]/20 px-4 py-2 shadow-[var(--shadow-md)]">
                  <span className="text-sm font-semibold text-[var(--success)]">
                    AI-Powered
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)] py-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "<3 sec", label: "Threat Detection Time" },
              { value: "99.2%", label: "Detection Accuracy" },
              { value: "50%", label: "Reduction in Security Costs" },
              { value: "24/7", label: "Continuous Monitoring" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              FEATURES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Advanced Security Features
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              State-of-the-art AI capabilities designed specifically for
              educational environments.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const styles =
                colorStyles[feature.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
                  >
                    <feature.icon className={`h-6 w-6 ${styles.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <div className="text-center lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              CAPABILITIES
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Complete Security Capabilities
            </motion.h2>
          </div>

          {/* Capability Cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 rounded-xl bg-[var(--bg-primary)] p-4 shadow-[var(--shadow-card)] border border-[var(--border-default)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-[var(--luna-purple)]" />
                <span className="text-[var(--text-secondary)]">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Campus */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
              >
                <Sparkles className="h-4 w-4" />
                BEYOND CAMPUS
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
              >
                Beyond Campus Security
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-lg text-[var(--text-secondary)]"
              >
                The same AI that protects campuses can be adapted for home and
                care settings.
              </motion.p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Home Child Monitoring",
                  description:
                    "Keep watch while working from home. AI alerts you to safety concerns.",
                  icon: "👶",
                  color: "purple",
                },
                {
                  title: "Elderly Care",
                  description:
                    "Fall detection and activity monitoring for aging family members.",
                  icon: "👴",
                  color: "blue",
                },
                {
                  title: "Pet Supervision",
                  description:
                    "Monitor pets while away. Alerts for unusual behavior or distress.",
                  icon: "🐕",
                  color: "teal",
                },
                {
                  title: "Small Business",
                  description:
                    "Affordable AI security for shops, offices, and small facilities.",
                  icon: "🏪",
                  color: "purple",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="mt-3 font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          {/* Section Header */}
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12"
          >
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="rounded-xl border border-[var(--border-default)] bg-white px-6 shadow-[var(--shadow-card)] data-[state=open]:shadow-[var(--shadow-card-hover)]"
                >
                  <AccordionTrigger className="text-left text-lg font-medium text-[var(--text-primary)] hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--text-secondary)] pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA - Light Background Style */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-24">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold text-[var(--text-primary)] sm:text-4xl lg:text-5xl"
          >
            Protect What{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              Matters Most
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Give your community the security they deserve with AI-powered
            protection.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
            >
              <Link href="/contact?demo=true&product=lunawatch">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
            >
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 pt-8 border-t border-[var(--border-light)]"
          >
            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>AI-Powered Detection</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>24/7 Monitoring</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Privacy-First</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
