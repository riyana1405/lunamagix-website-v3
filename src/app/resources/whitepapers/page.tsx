'use client';

import { motion } from 'framer-motion';
import { 
  FileText, Download, BookOpen, BarChart, 
  Brain, Heart, Shield, Users, ArrowRight, Sparkles, CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const whitepapers = [
  {
    id: 1,
    title: 'The State of AI in K-12 Education: 2025 Report',
    description: 'A comprehensive analysis of how artificial intelligence is being adopted in primary and secondary education, including best practices, challenges, and future trends.',
    category: 'Education',
    pages: 42,
    icon: BookOpen,
    color: 'purple',
  },
  {
    id: 2,
    title: 'Personalized Learning at Scale: Implementation Guide',
    description: 'Practical strategies for implementing adaptive learning technology across schools and districts, with case studies from successful deployments.',
    category: 'Education',
    pages: 36,
    icon: Brain,
    color: 'blue',
  },
  {
    id: 3,
    title: 'Neurodiversity in the Classroom: Technology Solutions',
    description: 'How educational technology can be designed and deployed to support students with autism, ADHD, dyslexia, and other learning differences.',
    category: 'Accessibility',
    pages: 28,
    icon: Heart,
    color: 'teal',
  },
  {
    id: 4,
    title: 'Privacy-First AI: Ethical Frameworks for EdTech',
    description: 'A guide to implementing AI in education while prioritizing student privacy, data security, and ethical considerations.',
    category: 'Policy',
    pages: 24,
    icon: Shield,
    color: 'purple',
  },
  {
    id: 5,
    title: 'VR Therapy: Clinical Evidence & Implementation',
    description: 'A review of clinical research on virtual reality therapy for anxiety, PTSD, and pain management, with implementation guidelines for healthcare providers.',
    category: 'Healthcare',
    pages: 38,
    icon: BarChart,
    color: 'blue',
  },
  {
    id: 6,
    title: 'AI in Medical Imaging: A Radiology Primer',
    description: 'Introduction to AI-assisted diagnostics for radiologists, covering current capabilities, integration workflows, and clinical considerations.',
    category: 'Healthcare',
    pages: 32,
    icon: Brain,
    color: 'teal',
  },
  {
    id: 7,
    title: 'Assistive Technology ROI: Business Case for Accessibility',
    description: 'Economic analysis of assistive technology investments for healthcare facilities, including patient outcomes, operational efficiency, and compliance benefits.',
    category: 'Accessibility',
    pages: 22,
    icon: BarChart,
    color: 'purple',
  },
  {
    id: 8,
    title: 'Sports Performance AI: Coach\'s Implementation Guide',
    description: 'How to integrate AI biomechanics and performance analytics into athletic training programs, from youth sports to professional teams.',
    category: 'Sports',
    pages: 26,
    icon: Users,
    color: 'blue',
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    categoryBg: "bg-[var(--luna-purple-lighter)]",
    categoryColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    categoryBg: "bg-[var(--azure-blue-lighter)]",
    categoryColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500",
    categoryBg: "bg-[var(--accent-teal-lighter)]",
    categoryColor: "text-[var(--accent-teal)]",
  },
};

const heroStats = [
  { icon: FileText, value: "8+", label: "Whitepapers" },
  { icon: BookOpen, value: "250+", label: "Pages" },
  { icon: Users, value: "5K+", label: "Downloads" },
  { icon: Brain, value: "5", label: "Topics" },
];

const categories = ['All', 'Education', 'Healthcare', 'Accessibility', 'Policy', 'Sports'];

export default function WhitepapersPage() {
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
                  Research & Resources
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Whitepapers &{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Guides
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                In-depth research and practical guides on AI technology in education, healthcare, and accessibility.
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
                  <Link href="#whitepapers">
                    Browse Library
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
                    <span>Research-Backed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Free Download</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Expert Authors</span>
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
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                  >
                    <stat.icon className="h-8 w-8 text-[var(--luna-purple)] mb-2" />
                    <div className="text-2xl font-bold text-[var(--luna-purple)]">{stat.value}</div>
                    <div className="text-sm text-[var(--text-tertiary)]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Whitepapers Grid */}
      <section id="whitepapers" className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <FileText className="h-4 w-4" />
              Resource Library
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Download Our Research
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {whitepapers.map((paper, index) => {
              const Icon = paper.icon;
              const styles = colorStyles[paper.color as keyof typeof colorStyles];
              return (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple-light)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${styles.iconBg} flex items-center justify-center flex-shrink-0 shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs ${styles.categoryBg} ${styles.categoryColor} px-2 py-1 rounded-full font-medium`}>
                          {paper.category}
                        </span>
                        <span className="text-xs text-[var(--text-tertiary)]">{paper.pages} pages</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--luna-purple)] transition-colors">{paper.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm mb-4">{paper.description}</p>
                      <button className="inline-flex items-center gap-2 text-[var(--luna-purple)] hover:text-[var(--luna-purple-dark)] text-sm font-medium transition-colors group/btn">
                        <Download className="h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                        Download PDF
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Custom Research CTA */}
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
              Custom Research
            </span>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Need Custom Research?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Our research team can provide custom analysis for your organization&apos;s specific needs in AI education, healthcare, or accessibility.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all">
                <Link href="/contact">
                  Contact Research Team
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]">
                <Link href="/partner">
                  Become a Partner
                </Link>
              </Button>
            </div>
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Custom analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Expert researchers</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Industry insights</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
