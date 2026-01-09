"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Building2, GraduationCap, Heart, Users, Sparkles, CheckCircle, ChevronDown, School, Stethoscope, Trophy, Accessibility } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "Transforming Special Education at Chennai Public School",
    category: "Education",
    icon: GraduationCap,
    description: "How LunaLearn helped a school of 500+ students improve IEP tracking efficiency by 60% and increase parent engagement by 85%.",
    metrics: [
      { label: "IEP Efficiency", value: "+60%" },
      { label: "Parent Engagement", value: "+85%" },
      { label: "Students Impacted", value: "500+" },
    ],
    color: "purple",
  },
  {
    id: 2,
    title: "AI-Powered Campus Security at Thiagarajar College",
    category: "Security",
    icon: Building2,
    description: "LunaWatch implementation reduced security incidents by 40% and improved emergency response time by 70%.",
    metrics: [
      { label: "Incidents Reduced", value: "-40%" },
      { label: "Response Time", value: "-70%" },
      { label: "Coverage Area", value: "100%" },
    ],
    color: "blue",
  },
  {
    id: 3,
    title: "Inclusive Learning at Madurai Special Needs Center",
    category: "Special Education",
    icon: Heart,
    description: "LunaSense multi-sensory suite enabled 95% of neurodiverse students to engage with curriculum content effectively.",
    metrics: [
      { label: "Student Engagement", value: "95%" },
      { label: "Learning Outcomes", value: "+45%" },
      { label: "Teacher Satisfaction", value: "98%" },
    ],
    color: "teal",
  },
  {
    id: 4,
    title: "Sports Excellence Program at Tamil Nadu Sports Academy",
    category: "Sports & Fitness",
    icon: Users,
    description: "LunaFit AI coaching improved athlete performance metrics by 35% and reduced training injuries by 50%.",
    metrics: [
      { label: "Performance", value: "+35%" },
      { label: "Injuries Reduced", value: "-50%" },
      { label: "Athletes Trained", value: "200+" },
    ],
    color: "purple",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    metricColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    metricColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    metricColor: "text-[var(--accent-teal)]",
  },
};

const useCases = [
  {
    icon: School,
    title: "K-12 Schools",
    description: "Transform special education with AI-powered IEP tracking and personalized learning paths.",
    color: "purple",
  },
  {
    icon: GraduationCap,
    title: "Higher Education",
    description: "Enhance campus safety and student accessibility with intelligent monitoring systems.",
    color: "blue",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Facilities",
    description: "Improve patient care with assistive technology and AI-powered diagnostics.",
    color: "teal",
  },
  {
    icon: Trophy,
    title: "Sports Academies",
    description: "Elevate athlete performance with biomechanics analysis and AI coaching.",
    color: "purple",
  },
];

const faqs = [
  {
    question: "How long does a typical implementation take?",
    answer: "Implementation timelines vary by solution complexity. LunaLearn can be deployed in 2-4 weeks, while comprehensive LunaWatch installations typically take 6-8 weeks. Our team works closely with your institution to minimize disruption.",
  },
  {
    question: "What kind of support do you provide after deployment?",
    answer: "We provide 24/7 technical support, dedicated account managers, regular training sessions, and quarterly business reviews. Our success team monitors system health and proactively addresses any issues.",
  },
  {
    question: "How do you measure success and ROI?",
    answer: "We establish baseline metrics before deployment and track key performance indicators specific to your goals. Monthly reports show progress in areas like student engagement, response times, safety incidents, and operational efficiency.",
  },
  {
    question: "Can your solutions integrate with existing systems?",
    answer: "Yes, our solutions are designed for seamless integration. We support common APIs, LMS platforms, student information systems, and security infrastructure. Our team handles all integration work.",
  },
  {
    question: "What training is provided for staff?",
    answer: "We offer comprehensive onboarding training, role-specific modules, and ongoing refresher courses. Training can be delivered in-person, virtually, or through our self-paced learning portal.",
  },
];

export default function CaseStudiesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                  <Sparkles className="h-4 w-4" />
                  Success Stories
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Case{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Studies
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Discover how institutions are transforming education and healthcare with Lunamagix solutions.
              </motion.p>
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
                  <Link href="/contact?demo=true">
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
                    <span>Real Results</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Verified Metrics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Diverse Institutions</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {caseStudies.slice(0, 4).map((study, index) => {
                  const styles = colorStyles[study.color as keyof typeof colorStyles];
                  return (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                    >
                      <study.icon className={`h-8 w-8 ${styles.iconColor} mb-2`} />
                      <div className={`text-2xl font-bold ${styles.metricColor}`}>{study.metrics[0].value}</div>
                      <div className="text-sm text-[var(--text-tertiary)]">{study.metrics[0].label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <Sparkles className="h-4 w-4" />
              Featured Stories
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Proven Results
            </h2>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => {
              const styles = colorStyles[study.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={study.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group rounded-xl border border-[var(--border-default)] bg-white p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${
                      study.color === "purple" ? "from-purple-500 to-pink-500" :
                      study.color === "blue" ? "from-blue-500 to-cyan-500" : "from-teal-500 to-cyan-500"
                    } shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform`}>
                      <study.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                        {study.category}
                      </span>
                      <h3 className="mt-1 text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)] transition-colors">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--border-light)] pt-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className={`text-xl font-bold ${styles.metricColor}`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-[var(--text-tertiary)]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--luna-purple)] hover:text-[var(--luna-purple-dark)] transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <Accessibility className="h-4 w-4" />
              Use Cases
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Solutions for Every Institution
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-[var(--text-secondary)]">
              See how different organizations leverage Lunamagix technology to achieve their goals.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => {
              const styles = colorStyles[useCase.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={useCase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                    useCase.color === "purple" ? "from-purple-500 to-pink-500" :
                    useCase.color === "blue" ? "from-blue-500 to-cyan-500" : "from-teal-500 to-cyan-500"
                  } flex items-center justify-center mb-4 shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform`}>
                    <useCase.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--luna-purple)] transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {useCase.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <Sparkles className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl border border-[var(--border-default)] shadow-[var(--shadow-card)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--bg-secondary)] transition-colors"
                >
                  <span className="font-semibold text-[var(--text-primary)] pr-4">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-[var(--luna-purple)] flex-shrink-0 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[var(--text-secondary)] border-t border-[var(--border-light)] pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[var(--gradient-hero)]">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Get Started Today
            </span>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Ready to Transform Your Institution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Join hundreds of institutions already using Lunamagix to improve outcomes.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all">
                <Link href="/contact?demo=true">
                  Request a Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]">
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Custom demo</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>No commitment</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
