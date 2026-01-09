'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Hospital, Heart, Shield, Brain, FileText, 
  Stethoscope, Scan, Users, Clock, Sparkles,
  ArrowRight, Check, Zap, CheckCircle, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'LunaCare',
    description: 'Therapeutic VR for pain management, mental health, and rehabilitation',
    href: '/products/healthcare/lunacare',
    color: 'from-[var(--luna-purple)] to-[var(--azure-blue)]',
  },
  {
    name: 'LunaScan',
    description: 'AI-powered medical imaging analysis for radiology',
    href: '/products/healthcare/lunascan',
    color: 'from-cyan-500 to-[var(--azure-blue)]',
  },
  {
    name: 'LunaScribe',
    description: 'Ambient clinical documentation for physician efficiency',
    href: '/products/healthcare/lunascribe',
    color: 'from-violet-500 to-[var(--luna-purple)]',
  },
];

const assistiveProducts = [
  {
    name: 'LunaGuide',
    description: 'AI robot guide for visually impaired patients',
    href: '/products/assistive/lunaguide',
  },
  {
    name: 'LunaMove',
    description: 'Autonomous wheelchair technology',
    href: '/products/assistive/lunamove',
  },
  {
    name: 'LunaSound',
    description: 'AI hearing enhancement devices',
    href: '/products/assistive/lunasound',
  },
];

const colorStyles = [
  { bg: 'bg-gradient-to-br from-[var(--luna-purple)] to-violet-600', shadow: 'shadow-purple-500/20' },
  { bg: 'bg-gradient-to-br from-[var(--azure-blue)] to-blue-600', shadow: 'shadow-blue-500/20' },
  { bg: 'bg-gradient-to-br from-teal-500 to-cyan-600', shadow: 'shadow-teal-500/20' },
];

const benefits = [
  {
    icon: Clock,
    title: 'Physician Time Savings',
    description: 'Reduce documentation burden by 2+ hours daily, letting providers focus on patient care.',
    colorIndex: 0,
  },
  {
    icon: Brain,
    title: 'Diagnostic Support',
    description: 'AI-assisted analysis catches findings that might be missed, reducing diagnostic errors.',
    colorIndex: 1,
  },
  {
    icon: Heart,
    title: 'Better Patient Outcomes',
    description: 'VR therapy and advanced diagnostics lead to measurably improved treatment results.',
    colorIndex: 2,
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full compliance for healthcare data protection.',
    colorIndex: 0,
  },
  {
    icon: Users,
    title: 'Patient Accessibility',
    description: 'Assistive technologies ensure all patients can navigate and engage with care.',
    colorIndex: 1,
  },
  {
    icon: Stethoscope,
    title: 'EHR Integration',
    description: 'Seamless integration with Epic, Cerner, and other major EHR systems.',
    colorIndex: 2,
  },
];

const useCases = [
  {
    title: 'Radiology Departments',
    description: 'AI-assisted reading for CT, MRI, X-ray with automated prioritization and structured reporting.',
    products: ['LunaScan'],
  },
  {
    title: 'Mental Health Clinics',
    description: 'VR-based exposure therapy, relaxation training, and biofeedback-guided treatment.',
    products: ['LunaCare'],
  },
  {
    title: 'Pain Management',
    description: 'Non-pharmacological pain reduction through immersive VR distraction therapy.',
    products: ['LunaCare'],
  },
  {
    title: 'Primary Care',
    description: 'Ambient documentation captures visits automatically, reducing after-hours charting.',
    products: ['LunaScribe'],
  },
];

const stats = [
  { value: '95%', label: 'Diagnostic Accuracy' },
  { value: '2hrs', label: 'Daily Time Saved' },
  { value: '40%', label: 'Pain Reduction' },
  { value: 'FDA', label: 'Cleared Solutions' },
];

const faqs = [
  {
    question: 'Is Lunamagix HIPAA compliant?',
    answer: 'Yes, all our healthcare solutions are designed with HIPAA compliance as a foundation. We maintain strict data security protocols and can sign BAAs.',
  },
  {
    question: 'How does LunaScan integrate with existing PACS systems?',
    answer: 'LunaScan supports DICOM standards and integrates seamlessly with most PACS systems. Our team handles the technical integration during deployment.',
  },
  {
    question: 'What training do radiologists need?',
    answer: 'Minimal training is required as our interface is intuitive. We provide orientation sessions and ongoing support to ensure smooth adoption.',
  },
  {
    question: 'Can the AI replace radiologist review?',
    answer: 'No, our AI serves as a decision support tool to assist radiologists, not replace them. All findings require professional review and confirmation.',
  },
];

export default function HealthcarePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--gradient-hero)]">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
                <Hospital className="h-4 w-4" />
                Healthcare Solutions
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">AI-Powered </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Healthcare Innovation</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                From diagnostic AI to therapeutic VR, our healthcare solutions help providers deliver better care while reducing burnout and improving patient outcomes.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>

            {/* Right - Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/80 dark:bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border-default)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">50+</div>
                  <div className="text-[var(--text-secondary)] text-sm mt-1">Partner Hospitals</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/80 dark:bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border-default)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mt-8"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">30%</div>
                  <div className="text-[var(--text-secondary)] text-sm mt-1">Efficiency Boost</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/80 dark:bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border-default)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">99.9%</div>
                  <div className="text-[var(--text-secondary)] text-sm mt-1">System Uptime</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/80 dark:bg-[var(--bg-primary)]/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[var(--border-default)] hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 mt-8"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">24/7</div>
                  <div className="text-[var(--text-secondary)] text-sm mt-1">Expert Support</div>
                </motion.div>
              </div>
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
      
      {/* Healthcare Products */}
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
              Healthcare Solutions
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
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
                  className="block bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple-light)] transition-all duration-300 h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{product.name}</h3>
                  <p className="text-[var(--text-secondary)]">{product.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
          
          {/* Assistive Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">Assistive Technology for Healthcare Settings</h3>
            <p className="text-[var(--text-secondary)]">Improving patient accessibility and independence</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4">
            {assistiveProducts.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={product.href}
                  className="block bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] p-4 border border-[var(--border-default)] hover:border-[var(--luna-purple)]/30 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold text-[var(--text-primary)] mb-1">{product.name}</h4>
                  <p className="text-[var(--text-secondary)] text-sm">{product.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Sparkles className="h-4 w-4" />
              Use Cases
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Clinical Applications
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{useCase.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{useCase.description}</p>
                <div className="flex gap-2">
                  {useCase.products.map((p) => (
                    <span key={p} className="bg-[var(--luna-purple)]/10 text-[var(--luna-purple)] text-xs px-2 py-1 rounded-full">
                      {p}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
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
              Why Healthcare Leaders Choose Lunamagix
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colorStyle = colorStyles[benefit.colorIndex];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] ${colorStyle.bg} flex items-center justify-center mb-4 shadow-lg ${colorStyle.shadow}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Sparkles className="h-4 w-4" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
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
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] border border-[var(--border-default)] shadow-[var(--shadow-card)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-[var(--text-primary)]">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-[var(--text-secondary)]" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-[var(--text-secondary)]">
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
              Transform{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Patient Care
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              See how Lunamagix healthcare solutions can improve outcomes at your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
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
                <Link href="/partner">Healthcare Partnership</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>FDA Registered</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
