'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Accessibility, Brain, Heart, Users, Sparkles, 
  Target, BookOpen, Shield, BarChart, Puzzle,
  ArrowRight, Check, Star, Zap, CheckCircle, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'LunaLearn',
    description: 'Adaptive learning with IEP tracking and multi-modal content delivery',
    href: '/products/education/lunalearn',
    highlight: 'Flagship for Special Education',
    color: 'from-[var(--luna-purple)] to-[var(--azure-blue)]',
  },
  {
    name: 'LunaSense',
    description: 'Multi-sensory environments for sensory processing support',
    href: '/products/education/lunasense',
    color: 'from-[var(--azure-blue)] to-cyan-500',
  },
  {
    name: 'Lumina Screen',
    description: 'Privacy-first early identification of learning differences',
    href: '/assessment',
    color: 'from-amber-500 to-orange-500',
  },
];

const learningDifferences = [
  { name: 'Autism Spectrum', description: 'Visual schedules, sensory-friendly interfaces, social stories' },
  { name: 'ADHD', description: 'Focus tools, movement breaks, gamified engagement' },
  { name: 'Dyslexia', description: 'Text-to-speech, dyslexia-friendly fonts, audio content' },
  { name: 'Dyscalculia', description: 'Visual math representations, manipulatives, step-by-step' },
  { name: 'Sensory Processing', description: 'Adjustable stimuli, calming modes, sensory breaks' },
  { name: 'Intellectual Disabilities', description: 'Simplified UI, repetition, life skills focus' },
];

const colorStyles = {
  purple: {
    bg: 'bg-gradient-to-br from-[var(--luna-purple)]/10 to-[var(--luna-purple)]/5',
    icon: 'text-[var(--luna-purple)]',
  },
  blue: {
    bg: 'bg-gradient-to-br from-[var(--azure-blue)]/10 to-[var(--azure-blue)]/5',
    icon: 'text-[var(--azure-blue)]',
  },
  teal: {
    bg: 'bg-gradient-to-br from-teal-500/10 to-teal-500/5',
    icon: 'text-teal-500',
  },
};

const features = [
  {
    icon: Target,
    title: 'IEP Goal Tracking',
    description: 'Automatically track progress toward Individualized Education Program goals with data-driven insights for IEP meetings.',
    color: 'purple' as keyof typeof colorStyles,
  },
  {
    icon: Puzzle,
    title: 'Multi-Modal Learning',
    description: 'Content delivered through visual, auditory, kinesthetic, and tactile modalities to match each learner\'s strengths.',
    color: 'blue' as keyof typeof colorStyles,
  },
  {
    icon: BarChart,
    title: 'Progress Monitoring',
    description: 'Real-time data collection and analysis helps educators make informed decisions about interventions.',
    color: 'teal' as keyof typeof colorStyles,
  },
  {
    icon: Shield,
    title: 'FERPA & Privacy',
    description: 'Strict compliance with educational privacy regulations and ethical data practices.',
    color: 'purple' as keyof typeof colorStyles,
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Unified platform for teachers, therapists, parents, and administrators to coordinate support.',
    color: 'blue' as keyof typeof colorStyles,
  },
  {
    icon: Heart,
    title: 'Emotional Regulation',
    description: 'Built-in tools for self-regulation, break requests, and emotional check-ins.',
    color: 'teal' as keyof typeof colorStyles,
  },
];

const heroStats = [
  { value: '15M+', label: 'Learners Supported' },
  { value: '100%', label: 'Inclusive Design' },
  { value: '11+', label: 'Specialized Products' },
];

const testimonial = {
  quote: "For the first time, I have a complete picture of each student's progress across all their goals. The data helps me advocate for my students in IEP meetings with confidence.",
  author: "Maria Santos",
  role: "Special Education Teacher, 15 years experience",
};

const faqs = [
  {
    question: 'Is Lunamagix suitable for all types of learning differences?',
    answer: 'Yes, our platform is designed with flexibility to support autism, ADHD, dyslexia, dyscalculia, sensory processing differences, and intellectual disabilities. Each tool can be customized to individual needs.',
  },
  {
    question: 'How does the IEP tracking work?',
    answer: 'Our system automatically tracks progress toward IEP goals through daily interactions. Data is compiled into clear reports for IEP meetings, showing trends and growth areas.',
  },
  {
    question: 'Can parents access their child\'s progress?',
    answer: 'Absolutely! Parents have their own dashboard to view progress, communicate with teachers, and receive insights about their child\'s learning journey.',
  },
  {
    question: 'What training do special education teachers receive?',
    answer: 'We provide specialized training focused on assistive technology best practices, IEP integration, and maximizing outcomes for neurodiverse learners.',
  },
];

const stats = [
  { value: '89%', label: 'IEP Goal Achievement' },
  { value: '65%', label: 'More Time Teaching' },
  { value: '4.8/5', label: 'Parent Satisfaction' },
  { value: '40%', label: 'Less Documentation Time' },
];

export default function SpecialEducationPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--gradient-hero)]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 bg-[var(--luna-purple)]/10 text-[var(--luna-purple)] px-4 py-2 rounded-full mb-6">
                <Accessibility className="h-4 w-4" />
                <span className="text-sm font-medium">Special Education Solutions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">Technology That Sees </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Every Learner</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                AI-powered tools designed specifically for neurodiverse learners—supporting IEP goals, enabling multi-modal learning, and celebrating every student's unique path to success.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/assessment"
                  className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
                >
                  Learn About Lumina Screen
                </Link>
              </div>
            </motion.div>

            {/* Right: Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:grid grid-cols-1 gap-4"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-12 border-y border-[var(--border-default)] bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Sparkles className="h-4 w-4" />
              Our Products
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Solutions for Special Education
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="block bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple)] transition-all duration-300 h-full relative overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                >
                  {product.highlight && (
                    <div className="absolute top-4 right-4 bg-[var(--luna-purple)]/10 text-[var(--luna-purple)] text-xs px-2 py-1 rounded-full">
                      {product.highlight}
                    </div>
                  )}
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{product.name}</h3>
                  <p className="text-[var(--text-secondary)]">{product.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Learning Differences Support */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Brain className="h-4 w-4" />
              Neurodiverse Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Supporting All Learning Differences
            </h2>
            <p className="text-[var(--text-secondary)]">Specialized features for diverse needs</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {learningDifferences.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-lg)] p-4 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{item.name}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Zap className="h-4 w-4" />
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Built for Special Education
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const styles = colorStyles[feature.color];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] ${styles.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${styles.icon}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Star className="h-8 w-8 text-[var(--luna-purple)] mx-auto mb-6" />
            <blockquote className="text-2xl text-[var(--text-secondary)] italic mb-6">
              "{testimonial.quote}"
            </blockquote>
            <div>
              <p className="text-[var(--text-primary)] font-semibold">{testimonial.author}</p>
              <p className="text-[var(--text-tertiary)]">{testimonial.role}</p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Sparkles className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
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
                className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-default)] shadow-[var(--shadow-card)] overflow-hidden"
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

      {/* CTA - Light Background Style */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-24">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-primary)] mb-4">
              Every Learner Deserves to{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Shine
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              See how Lunamagix can support your special education program and help every student reach their potential.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
              >
                <Link href="/products/education/lunalearn">Explore LunaLearn</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>IEP Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Personalized Learning</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Multi-Sensory Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
