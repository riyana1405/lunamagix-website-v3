'use client';

import { motion } from 'framer-motion';
import { 
  FileText, Download, BookOpen, BarChart, 
  Brain, Heart, Shield, Users, ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const whitepapers = [
  {
    id: 1,
    title: 'The State of AI in K-12 Education: 2025 Report',
    description: 'A comprehensive analysis of how artificial intelligence is being adopted in primary and secondary education, including best practices, challenges, and future trends.',
    category: 'Education',
    pages: 42,
    icon: BookOpen,
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Personalized Learning at Scale: Implementation Guide',
    description: 'Practical strategies for implementing adaptive learning technology across schools and districts, with case studies from successful deployments.',
    category: 'Education',
    pages: 36,
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Neurodiversity in the Classroom: Technology Solutions',
    description: 'How educational technology can be designed and deployed to support students with autism, ADHD, dyslexia, and other learning differences.',
    category: 'Accessibility',
    pages: 28,
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 4,
    title: 'Privacy-First AI: Ethical Frameworks for EdTech',
    description: 'A guide to implementing AI in education while prioritizing student privacy, data security, and ethical considerations.',
    category: 'Policy',
    pages: 24,
    icon: Shield,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 5,
    title: 'VR Therapy: Clinical Evidence & Implementation',
    description: 'A review of clinical research on virtual reality therapy for anxiety, PTSD, and pain management, with implementation guidelines for healthcare providers.',
    category: 'Healthcare',
    pages: 38,
    icon: BarChart,
    color: 'from-cyan-500 to-blue-500',
  },
  {
    id: 6,
    title: 'AI in Medical Imaging: A Radiology Primer',
    description: 'Introduction to AI-assisted diagnostics for radiologists, covering current capabilities, integration workflows, and clinical considerations.',
    category: 'Healthcare',
    pages: 32,
    icon: Brain,
    color: 'from-violet-500 to-purple-500',
  },
  {
    id: 7,
    title: 'Assistive Technology ROI: Business Case for Accessibility',
    description: 'Economic analysis of assistive technology investments for healthcare facilities, including patient outcomes, operational efficiency, and compliance benefits.',
    category: 'Accessibility',
    pages: 22,
    icon: BarChart,
    color: 'from-amber-500 to-orange-500',
  },
  {
    id: 8,
    title: 'Sports Performance AI: Coach\'s Implementation Guide',
    description: 'How to integrate AI biomechanics and performance analytics into athletic training programs, from youth sports to professional teams.',
    category: 'Sports',
    pages: 26,
    icon: Users,
    color: 'from-green-500 to-teal-500',
  },
];

const categories = ['All', 'Education', 'Healthcare', 'Accessibility', 'Policy', 'Sports'];

export default function WhitepapersPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--luna-purple)]/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-4 py-2 rounded-full mb-6">
              <FileText className="h-4 w-4" />
              <span className="text-sm font-medium">Research & Resources</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Whitepapers & Guides
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              In-depth research and practical guides on AI technology in education, healthcare, and accessibility.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Whitepapers Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {whitepapers.map((paper, index) => {
              const Icon = paper.icon;
              return (
                <motion.div
                  key={paper.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple-light)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${paper.color} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-[var(--bg-secondary)] text-[var(--text-secondary)] px-2 py-1 rounded-full">
                          {paper.category}
                        </span>
                        <span className="text-xs text-[var(--text-tertiary)]">{paper.pages} pages</span>
                      </div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{paper.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm mb-4">{paper.description}</p>
                      <button className="inline-flex items-center gap-2 text-[var(--luna-purple)] hover:text-[var(--luna-purple-dark)] text-sm font-medium transition-colors">
                        <Download className="h-4 w-4" />
                        Download PDF
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
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--accent-pink)] rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Custom Research?
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Our research team can provide custom analysis for your organization's specific needs in AI education, healthcare, or accessibility.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all duration-300"
            >
              Contact Research Team
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
