"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FitnessCoach } from "@/components/mockups/FitnessCoach";
import {
  Activity,
  Target,
  Trophy,
  Heart,
  Camera,
  Brain,
  Users,
  Timer,
  ArrowRight,
  CheckCircle,
  Zap,
  Gamepad2,
  Sparkles,
  Play,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "Vision Transformer Pose Estimation",
    description:
      "State-of-the-art SAM3-based AI accurately tracks 33 body landmarks in real-time, understanding posture with unprecedented precision.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "Real-Time Corrective Feedback",
    description:
      "Instant audio and visual cues guide proper form. 'Straighten your back' or 'Deeper squat' — like having a personal trainer watching every rep.",
    color: "blue",
  },
  {
    icon: Gamepad2,
    title: "Gamified Progress Tracking",
    description:
      "Earn points, unlock achievements, and compete with friends. Fitness becomes fun with leaderboards, challenges, and personalized goals.",
    color: "teal",
  },
  {
    icon: Brain,
    title: "AI Personal Training Plans",
    description:
      "Machine learning analyzes your progress, adapts difficulty, and creates personalized workout plans that evolve with you.",
    color: "purple",
  },
  {
    icon: Trophy,
    title: "AI Umpiring & Judging",
    description:
      "Fair, consistent sports officiating for school competitions. Objective scoring for gymnastics, martial arts, and more.",
    color: "blue",
  },
  {
    icon: Heart,
    title: "Wearable Integration",
    description:
      "Sync with fitness trackers for comprehensive health metrics. Heart rate, calories, sleep — all in one dashboard.",
    color: "teal",
  },
];

const applications = [
  {
    title: "School Physical Education",
    description: "Transform PE classes with AI coaching that provides personalized feedback to every student simultaneously.",
    icon: "🏫",
    color: "purple",
  },
  {
    title: "Sports Academies",
    description: "Professional-grade motion analysis for athletes training in cricket, tennis, swimming, and more.",
    icon: "⚽",
    color: "blue",
  },
  {
    title: "Yoga Studios",
    description: "Perfect your asanas with real-time alignment correction and breath guidance.",
    icon: "🧘",
    color: "teal",
  },
  {
    title: "Rehabilitation Centers",
    description: "Guide physiotherapy exercises with precise form tracking and compliance monitoring.",
    icon: "🏥",
    color: "purple",
  },
  {
    title: "Home Fitness",
    description: "Bring the gym home with AI coaching that works with just your phone camera.",
    icon: "🏠",
    color: "blue",
  },
  {
    title: "Corporate Wellness",
    description: "Employee wellness programs with guided group workouts and healthy competition.",
    icon: "🏢",
    color: "teal",
  },
];

const therapeuticBenefits = [
  "Gross motor training for developmental delays",
  "Gamified physical activity for neurodiverse engagement",
  "Physiotherapy exercise guidance and compliance tracking",
  "Occupational therapy movement support",
  "Sensory integration through structured movement",
  "Social skills through team activities",
];

const faqs = [
  {
    question: "How accurate is the pose estimation?",
    answer:
      "LunaFit uses SAM3-based Vision Transformers achieving >95% accuracy on standard pose estimation benchmarks. The system detects 33 body landmarks including fine finger movements, enabling precise form analysis for complex exercises.",
  },
  {
    question: "What equipment is needed?",
    answer:
      "Just a device with a camera — smartphone, tablet, laptop, or webcam. For larger spaces like gyms, we offer multi-camera setups for full coverage. No wearables required, though integration with fitness trackers enhances the experience.",
  },
  {
    question: "Can it work with groups?",
    answer:
      "Yes! LunaFit can track multiple people simultaneously, providing individual feedback to each person. This makes it perfect for PE classes, group fitness, and team training.",
  },
  {
    question: "How does therapeutic application work?",
    answer:
      "Therapists can set specific movement goals within the platform. LunaFit tracks the child's performance against these goals, provides engaging gamification, and reports progress to the therapy team. The interface is designed to be sensory-friendly and motivating.",
  },
  {
    question: "Is it suitable for all fitness levels?",
    answer:
      "Absolutely. The AI adapts to your current fitness level, providing appropriate challenges whether you're a beginner or advanced athlete. It learns from your progress and adjusts difficulty accordingly.",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)]",
    iconColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-[var(--azure-blue)] to-[var(--accent-teal)]",
    iconColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-gradient-to-br from-[var(--accent-teal)] to-[var(--luna-purple)]",
    iconColor: "text-[var(--accent-teal)]",
  },
};

export function LunaFitContent() {
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
                  AI-POWERED FITNESS COACHING
                </span>
              </motion.div>

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 flex justify-center lg:justify-start"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] shadow-[var(--shadow-md)]">
                  <Activity className="h-7 w-7 text-white" />
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                LunaFit
              </motion.h1>

              {/* Tagline with gradient */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-xl font-medium bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent"
              >
                Your Personal AI Coach, Always Watching, Always Guiding
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Advanced pose estimation AI provides real-time corrective feedback for perfect form. 
                Whether you&apos;re doing yoga, sports training, or physical therapy — 
                LunaFit ensures every movement counts.
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
                  <Link href="/contact?demo=true&product=lunafit">
                    Try Free Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="#features" className="flex items-center">
                    <Play className="mr-2 h-4 w-4 text-[var(--luna-purple)]" />
                    See Features
                  </Link>
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
                    <span>95%+ Pose Accuracy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>60 FPS Real-Time</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>100+ Exercises</span>
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
              {/* Main Content */}
              <div className="relative">
                <FitnessCoach />
              </div>

              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">33</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Body Landmarks</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">60 FPS</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Real-Time Processing</div>
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
                  <span className="text-sm font-semibold text-[var(--success)]">SAM3 Vision AI</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)] py-12">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "33", label: "Body Landmarks Tracked" },
              { value: "60 FPS", label: "Real-Time Processing" },
              { value: "95%+", label: "Pose Accuracy" },
              { value: "100+", label: "Supported Exercises" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl font-bold text-[var(--luna-purple)]">
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
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                <Sparkles className="h-3 w-3" />
                CORE FEATURES
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              AI-Powered Fitness Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              Cutting-edge computer vision meets personalized coaching.
            </motion.p>
          </div>

          {/* Feature Cards */}
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const styles = colorStyles[feature.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg} shadow-[var(--shadow-sm)]`}>
                    <feature.icon className="h-6 w-6 text-white" />
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

      {/* Applications */}
      <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                <Sparkles className="h-3 w-3" />
                USE CASES
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Applications
            </motion.h2>
          </div>

          {/* Application Cards */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app, index) => {
              const styles = colorStyles[app.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className="text-4xl">{app.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {app.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    {app.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Therapeutic Benefits */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                  <Sparkles className="h-3 w-3" />
                  THERAPEUTIC USE
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
              >
                Therapeutic Applications
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mt-4 text-lg text-[var(--text-secondary)]"
              >
                LunaFit brings the same powerful technology to therapy settings, 
                making movement exercises engaging and trackable.
              </motion.p>
              <div className="mt-8 space-y-4">
                {therapeuticBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 shrink-0 text-[var(--success)]" />
                    <span className="text-[var(--text-secondary)]">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                <div className="text-center">
                  <div className="text-6xl">🎮</div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                    Gamified Therapy
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    Turn therapeutic exercises into fun games that children want to play.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Section Header */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                <Sparkles className="h-3 w-3" />
                FAQ
              </span>
            </motion.div>
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
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-primary)] px-6 shadow-[var(--shadow-sm)] transition-all duration-200 hover:shadow-[var(--shadow-card)] data-[state=open]:shadow-[var(--shadow-card)]"
                >
                  <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-5">
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
            Start Your Fitness{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              Journey Today
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Experience AI coaching that adapts to you.
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
              <Link href="/contact?demo=true&product=lunafit">
                Try Free Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
            >
              <Link href="/contact">Contact Sales</Link>
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
                <span>AI Biomechanics</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Real-Time Feedback</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Performance Tracking</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
