"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HolographicDisplay } from "@/components/mockups/HolographicDisplay";
import {
  Sparkles,
  Hand,
  Mic,
  Camera,
  Layers,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  Eye,
  Play,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "True 3D Holographic Display",
    description:
      "Light-field technology projects volumetric images viewable from multiple angles without any headset or glasses. Students can gather around and explore 3D content collaboratively.",
  },
  {
    icon: Hand,
    title: "Gesture Control Interface",
    description:
      "Advanced hand tracking sensors detect natural gestures - rotate, zoom, and interact with 3D objects using intuitive hand movements. No controllers needed.",
  },
  {
    icon: Mic,
    title: "Voice-Activated Content",
    description:
      "AI understands natural language commands. Say 'show me the heart' or 'zoom into the mitochondria' and watch content respond instantly.",
  },
  {
    icon: Camera,
    title: "Real Object Scanning",
    description:
      "Transform physical objects into 3D models in seconds. Students can scan specimens, artifacts, or creations and explore them in holographic form.",
  },
  {
    icon: Sparkles,
    title: "AI Content Studio",
    description:
      "Rapidly create stunning 3D presentations from text descriptions. Type 'solar system with orbital paths' and AI generates interactive 3D content.",
  },
  {
    icon: Eye,
    title: "Sensory Customization",
    description:
      "Adjust brightness, animation speed, and audio levels for sensory-sensitive learners. VR-free means no motion sickness or age restrictions.",
  },
];

const useCases = [
  {
    title: "K-12 Science Education",
    description: "Explore DNA structures, planetary systems, chemical reactions, and human anatomy in true 3D.",
    image: "🔬",
  },
  {
    title: "Special Education",
    description: "Sensory-friendly immersive learning without VR headset discomfort. Safe for all ages.",
    image: "💡",
  },
  {
    title: "NEET/Medical Prep",
    description: "Detailed anatomical models for medical entrance exam preparation with 360° exploration.",
    image: "🩺",
  },
  {
    title: "Architecture & Design",
    description: "Walk through building designs and engineering models before they're built.",
    image: "🏗️",
  },
];

const faqs = [
  {
    question: "How is this different from VR headsets?",
    answer:
      "Unlike VR headsets, LunaViz 3D uses light-field display technology that projects true holographic images in open space. Multiple people can view and interact simultaneously without any headwear. This eliminates motion sickness, allows for natural eye contact, and is safe for children of all ages without the restrictions that VR headsets have.",
  },
  {
    question: "What subjects work best with 3D visualization?",
    answer:
      "Sciences (biology, chemistry, physics), mathematics (geometry, graphs), geography, history (3D historical reconstructions), art, engineering, and medicine. Any subject with spatial concepts benefits enormously from 3D visualization.",
  },
  {
    question: "Can teachers create their own 3D content?",
    answer:
      "Yes! Our AI Content Studio allows teachers to generate 3D content from text descriptions or import existing 3D models. We also provide a library of thousands of pre-built educational 3D assets.",
  },
  {
    question: "What hardware is required?",
    answer:
      "LunaViz 3D is a complete hardware-software solution. The display unit includes integrated gesture sensors and processing. It connects to standard electrical outlets and requires no special infrastructure.",
  },
  {
    question: "Is it suitable for neurodiverse learners?",
    answer:
      "Absolutely. The system was designed with neurodiverse learners in mind. Sensory levels are fully customizable, there's no restrictive headwear, and multi-sensory engagement helps various learning styles. The shared viewing experience also supports social learning.",
  },
];

export function LunaVizContent() {
  return (
    <>
      {/* Hero - Matching Home Page Design */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Subtle Background Pattern */}
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
                  Immersive 3D Learning
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                LunaViz 3D:{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Learning Leaps Off the Screen
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Revolutionary 3D holographic presentation technology that brings complex concepts to life. 
                No VR headsets required — perfect for classrooms where everyone can see, interact, and learn together.
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
                  <Link href="/contact?demo=true&product=lunaviz">
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
                  <Link href="#features" className="flex items-center">
                    <Play className="mr-2 h-4 w-4 text-[var(--luna-purple)]" />
                    Explore Features
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
                    <span>No VR Headsets Needed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Safe for All Ages</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>AI-Powered Content</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Main Display Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-white shadow-[var(--shadow-xl)] p-6">
                <HolographicDisplay />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">360°</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Holographic View</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">100%</div>
                  <div className="text-xs text-[var(--text-tertiary)]">VR-Free Experience</div>
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
                  <span className="text-sm font-semibold text-[var(--success)]">Gesture Control</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Benefits - Matching Home Page Card Style */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-3"
          >
            {[
              {
                icon: Zap,
                title: "No VR Headsets",
                description: "Safe for all ages, no motion sickness, natural social interaction",
                color: "purple",
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                description: "Entire class views and interacts with 3D content simultaneously",
                color: "blue",
              },
              {
                icon: GraduationCap,
                title: "Any Subject",
                description: "From biology to history — AI generates content instantly",
                color: "teal",
              },
            ].map((benefit, index) => {
              const colorStyles = {
                purple: { iconBg: "bg-[var(--luna-purple-lighter)]", iconColor: "text-[var(--luna-purple)]", hoverBorder: "hover:border-[var(--luna-purple-light)]" },
                blue: { iconBg: "bg-[var(--azure-blue-lighter)]", iconColor: "text-[var(--azure-blue)]", hoverBorder: "hover:border-[var(--azure-blue-light)]" },
                teal: { iconBg: "bg-[var(--accent-teal-lighter)]", iconColor: "text-[var(--accent-teal)]", hoverBorder: "hover:border-[var(--accent-teal-light)]" },
              };
              const styles = colorStyles[benefit.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-xl border border-[var(--border-default)] bg-white p-6 text-center shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${styles.hoverBorder}`}
                >
                  <div className={`mx-auto flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconBg}`}>
                    <benefit.icon className={`h-7 w-7 ${styles.iconColor}`} />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Features - Matching Home Page Section Style */}
      <section id="features" className="bg-[var(--bg-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              Technology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Cutting-Edge Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              Powered by the latest advances in holographic displays, gesture recognition, and AI content generation.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => {
              const colors = ["purple", "blue", "teal", "purple", "blue", "teal"];
              const colorStyles = {
                purple: { iconBg: "bg-[var(--luna-purple-lighter)]", iconColor: "text-[var(--luna-purple)]", hoverBorder: "hover:border-[var(--luna-purple-light)]" },
                blue: { iconBg: "bg-[var(--azure-blue-lighter)]", iconColor: "text-[var(--azure-blue)]", hoverBorder: "hover:border-[var(--azure-blue-light)]" },
                teal: { iconBg: "bg-[var(--accent-teal-lighter)]", iconColor: "text-[var(--accent-teal)]", hoverBorder: "hover:border-[var(--accent-teal-light)]" },
              };
              const styles = colorStyles[colors[index] as keyof typeof colorStyles];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-xl border border-[var(--border-default)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${styles.hoverBorder}`}
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}>
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
          </motion.div>
        </div>
      </section>

      {/* Use Cases - Matching Home Page Card Style */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider"
            >
              Use Cases
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Perfect For
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {useCases.map((useCase, index) => {
              const colors = ["purple", "blue", "teal", "purple"];
              const colorStyles = {
                purple: { hoverBorder: "hover:border-[var(--luna-purple-light)]" },
                blue: { hoverBorder: "hover:border-[var(--azure-blue-light)]" },
                teal: { hoverBorder: "hover:border-[var(--accent-teal-light)]" },
              };
              const styles = colorStyles[colors[index] as keyof typeof colorStyles];
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group rounded-xl border border-[var(--border-default)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${styles.hoverBorder}`}
                >
                  <div className="text-4xl">{useCase.image}</div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                    {useCase.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Neurodiverse Benefits - Matching Home Page Style */}
      <section className="bg-[var(--bg-secondary)] py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              Inclusive Design
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Designed for Inclusive Learning
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              LunaViz 3D was created with neurodiverse learners as a primary consideration.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 grid gap-4 sm:grid-cols-2"
          >
            {[
              "VR-free experience eliminates discomfort for sensory-sensitive children",
              "No age restrictions — safe for early childhood education",
              "Customizable brightness, speed, and audio levels",
              "Multi-sensory engagement supports various learning styles",
              "Shared viewing promotes natural social interaction",
              "Gesture control builds motor skill coordination",
            ].map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)]"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                <span className="text-[var(--text-secondary)]">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ - Matching Home Page Style */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
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
                  className="rounded-xl border border-[var(--border-default)] bg-white px-6 shadow-[var(--shadow-card)]"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-[var(--text-primary)] hover:text-[var(--luna-purple)] py-5">
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

      {/* CTA - Matching Home Page Style with Light Background */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-24">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center">
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
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              Classroom?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Experience the future of education with LunaViz 3D. No VR headsets required.
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
              <Link href="/contact?demo=true&product=lunaviz">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              asChild
              className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
            >
              <Link href="/contact" className="flex items-center">
                <Play className="mr-2 h-4 w-4 text-[var(--luna-purple)]" />
                Free Product Demo
              </Link>
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
                <span>No VR Headset Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Safe for All Ages</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Easy Installation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
