'use client';

import { motion } from 'framer-motion';
import { 
  Hospital, Heart, Shield, Brain, FileText, 
  Stethoscope, Scan, Users, Clock, Sparkles,
  ArrowRight, Check
} from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'LunaCare',
    description: 'Therapeutic VR for pain management, mental health, and rehabilitation',
    href: '/products/healthcare/lunacare',
    color: 'from-[var(--luna-pink)] to-rose-500',
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

const benefits = [
  {
    icon: Clock,
    title: 'Physician Time Savings',
    description: 'Reduce documentation burden by 2+ hours daily, letting providers focus on patient care.',
  },
  {
    icon: Brain,
    title: 'Diagnostic Support',
    description: 'AI-assisted analysis catches findings that might be missed, reducing diagnostic errors.',
  },
  {
    icon: Heart,
    title: 'Better Patient Outcomes',
    description: 'VR therapy and advanced diagnostics lead to measurably improved treatment results.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Enterprise-grade security with full compliance for healthcare data protection.',
  },
  {
    icon: Users,
    title: 'Patient Accessibility',
    description: 'Assistive technologies ensure all patients can navigate and engage with care.',
  },
  {
    icon: Stethoscope,
    title: 'EHR Integration',
    description: 'Seamless integration with Epic, Cerner, and other major EHR systems.',
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

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--luna-purple)] via-[var(--luna-purple-dark)] to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
              <Hospital className="h-4 w-4" />
              <span className="text-sm font-medium">Healthcare Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">AI-Powered </span>
              <span className="bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">Healthcare Innovation</span>
            </h1>
            
            <p className="text-xl text-purple-100/90 mb-8 leading-relaxed">
              From diagnostic AI to therapeutic VR, our healthcare solutions help providers deliver better care while reducing burnout and improving patient outcomes.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                Request Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-white/20"
              >
                View All Products
              </Link>
            </div>
          </motion.div>
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
                  className="block bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple)] transition-all duration-300 h-full shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Healthcare Leaders Choose Lunamagix
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
                >
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[var(--luna-purple)]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)]">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Patient Care
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              See how Lunamagix healthcare solutions can improve outcomes at your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-gray-100 transition-all duration-300"
              >
                Request Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-white/10 transition-all duration-300"
              >
                Healthcare Partnership
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
