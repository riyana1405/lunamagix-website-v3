"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  BookOpen,
  Users,
  GraduationCap,
  Brain,
  CheckCircle,
  ArrowRight,
  UserCheck,
  ClipboardList,
  BarChart3,
  Presentation,
  FileSearch,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: UserCheck,
    title: "Smart Attendance",
    description:
      "Facial recognition with detailed entry/exit timestamps, analytics dashboard, and parent notifications.",
    color: "purple",
  },
  {
    icon: BarChart3,
    title: "Engagement Analytics",
    description:
      "Vision-based emotion and attention tracking during lectures with participation metrics.",
    color: "blue",
  },
  {
    icon: Presentation,
    title: "Intelligent Presentation System",
    description:
      "AI listens to teacher's narration and generates real-time visual aids and illustrations.",
    color: "teal",
  },
  {
    icon: Brain,
    title: "IEP Engine",
    description:
      "AI-driven content delivery matching learning styles with therapist-integrated goals for neurodiverse students.",
    color: "purple",
  },
  {
    icon: FileSearch,
    title: "Smart Assessment",
    description:
      "AI manuscript analysis with gap identification and visual tools for efficient evaluation.",
    color: "blue",
  },
  {
    icon: ClipboardList,
    title: "Role-Based Access",
    description:
      "Parents, teachers, therapists, and admins each see what they need with ML-powered insights.",
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

const useCases = [
  {
    title: "K-12 Schools",
    description:
      "Complete campus management from attendance to assessment, with AI-powered insights for teachers and administrators.",
  },
  {
    title: "Special Education Centers",
    description:
      "IEP tracking, therapist collaboration, and sensory-friendly interfaces designed for neurodiverse learners.",
  },
  {
    title: "Coaching Institutes",
    description:
      "Scalable platform for NEET, UPSC, and Banking exam prep with engagement tracking and personalized learning paths.",
  },
  {
    title: "Tuition Centers",
    description:
      "Simple yet powerful tools for individual tutors to track student progress and communicate with parents.",
  },
];

const faqs = [
  {
    question: "How does the Pay What You Like model work?",
    answer:
      "For our core platform, you decide what the software is worth to you. Whether that's a nominal amount or the full market rate, you'll receive the same complete system, support, and updates. Premium features and hardware products support our mission work.",
  },
  {
    question: "Is LunaLearn compliant with data protection regulations?",
    answer:
      "Yes, LunaLearn is designed with FERPA, GDPR, and local Indian data protection laws in mind. Student data is siloed with role-based access, and we never sell or share data with third parties.",
  },
  {
    question: "Can therapists and parents collaborate on the platform?",
    answer:
      "Absolutely. Our RBAC system enables therapists to set goals, teachers to plan aligned activities, and parents to log home observations. AI integrates insights from all stakeholders.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "LunaLearn is fully responsive and touch-optimized, working seamlessly on smartphones, tablets, and desktop computers.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Basic setup can be completed within a week. Full implementation including staff training typically takes 2-4 weeks depending on institution size.",
  },
];

export function LunaLearnContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Background Blur Effects */}
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
                  EDUCATION PLATFORM
                </span>
              </motion.div>

              {/* Icon */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] shadow-[var(--shadow-md)]"
              >
                <BookOpen className="h-7 w-7 text-white" />
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-4 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                LunaLearn
              </motion.h1>

              {/* Tagline with gradient */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-2 text-xl font-medium bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent"
              >
                The Operating System for Modern Education
              </motion.p>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                A single platform where every stakeholder — parents, teachers,
                therapists, and administrators — sees what they need,
                contributes what they know, and trusts that nothing falls
                through the cracks.
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
                  <Link href="/contact?demo=true&product=lunalearn">
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
                  <Link href="#features">Learn More</Link>
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
                    <span>GDPR Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Role-Based Access</span>
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
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-white shadow-[var(--shadow-xl)]">
                <div
                  className="w-full aspect-video"
                  style={{
                    backgroundImage: 'url(/images/products/lunalearn-mockup.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>

              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">500+</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Schools Onboarded</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">95%</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Parent Satisfaction</div>
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
                  <span className="text-sm font-semibold text-[var(--success)]">AI-Powered</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
              <Sparkles className="h-4 w-4" />
              The Challenge
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Why Modern Education Needs{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              A Better Solution
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            Special education works best when everyone&apos;s on the same page —
            parents, teachers, therapists, and administrators all moving
            together toward one child&apos;s success.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            But &quot;the same page&quot; has always been a figure of speech. In reality,
            information lives in fragmented notebooks, separate apps, periodic
            meetings, and the occasional email chain.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            No more &quot;How was this month?&quot; replaced by hoping the answer
            captures everything. Now you can ask, &quot;What activities most helped
            improve social interaction this month?&quot; and get an answer grounded
            in actual data from every environment your child learns in.
          </motion.p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
                <Sparkles className="h-4 w-4" />
                Platform Features
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Everything You Need in{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                One Place
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              Complete tools to manage modern education effectively.
            </motion.p>
          </div>

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
                  className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] ${styles.iconBg} shadow-[var(--shadow-sm)]`}
                  >
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

      {/* Stakeholder Views */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
                <Sparkles className="h-4 w-4" />
                Role-Based Access
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Designed for{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Every Stakeholder
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
            >
              Each user sees exactly what they need, when they need it.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <Tabs defaultValue="parent" className="w-full">
              <TabsList className="mx-auto mb-8 flex h-auto w-full max-w-2xl flex-wrap justify-center gap-2 bg-transparent">
                <TabsTrigger
                  value="parent"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--luna-purple)] data-[state=active]:to-[var(--azure-blue)] data-[state=active]:text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Parent View
                </TabsTrigger>
                <TabsTrigger
                  value="teacher"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--luna-purple)] data-[state=active]:to-[var(--azure-blue)] data-[state=active]:text-white"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Teacher View
                </TabsTrigger>
                <TabsTrigger
                  value="therapist"
                  className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-[var(--luna-purple)] data-[state=active]:to-[var(--azure-blue)] data-[state=active]:text-white"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Therapist View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="parent">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Parent Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Child's progress dashboard with visual timeline",
                      "AI chat: 'How did my child do this month?'",
                      "Home activity recommendations from therapist",
                      "Journal entry interface for logging observations",
                      "Moment gallery from classroom captures",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Parent Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="teacher">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Teacher Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Student roster with quick status indicators",
                      "AI-assisted activity planning interface",
                      "Integration of therapist goals and parent feedback",
                      "Classroom activity logging",
                      "Progress reporting tools",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Teacher Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="therapist">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Therapist Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Goal setting interface with IEP integration",
                      "Cross-stakeholder data dashboard",
                      "ML-powered intervention recommendations",
                      "Progress tracking against therapy milestones",
                      "Parent and teacher feedback aggregation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--success)]" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Therapist Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
              <Sparkles className="h-4 w-4" />
              Use Cases
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Built for{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              Every Institution
            </span>
          </motion.h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
              <Sparkles className="h-4 w-4" />
              Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Pay What{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              You Like
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            We believe access to effective special education tools shouldn&apos;t
            depend on a school&apos;s budget. For our core platform, you decide what
            the software is worth to you.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]"
          >
            Schools and parents who can pay more help subsidize those who
            can&apos;t. It&apos;s not traditional business — but then, neither is our
            mission.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <Button
              size="lg"
              asChild
              className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all"
            >
              <Link href="/contact?demo=true&product=lunalearn">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 uppercase">
              <Sparkles className="h-4 w-4" />
              FAQ
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
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
                  className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] px-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] data-[state=open]:border-[var(--luna-purple-light)]"
                >
                  <AccordionTrigger className="text-left text-lg py-5 hover:no-underline">
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
        {/* Background Blur Effects */}
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
              Education Experience?
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Join the schools and education centers already using LunaLearn.
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
              <Link href="/contact?demo=true&product=lunalearn">
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
                <span>Adaptive Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>IEP Tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                <span>Progress Analytics</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
