'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Trophy, Activity, Users, BarChart, Target, 
  Video, Zap, Heart, Timer, Sparkles,
  ArrowRight, Check, Star, CheckCircle, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'LunaFit',
    description: 'AI pose estimation and biomechanics analysis for athletic training',
    href: '/products/education/lunafit',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'LunaLearn',
    description: 'Athlete education, team communication, and performance tracking',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--azure-blue)]',
  },
  {
    name: 'LunaWatch',
    description: 'Smart facility management and event security',
    href: '/products/education/lunawatch',
    color: 'from-red-500 to-orange-500',
  },
];

const colorStyles = [
  { bg: 'bg-gradient-to-br from-[var(--luna-purple)] to-[var(--luna-purple-dark)]', text: 'text-white' },
  { bg: 'bg-gradient-to-br from-[var(--azure-blue)] to-[var(--azure-blue-dark)]', text: 'text-white' },
  { bg: 'bg-gradient-to-br from-teal-500 to-teal-600', text: 'text-white' },
];

const features = [
  {
    icon: Activity,
    title: 'Biomechanics Analysis',
    description: 'AI analyzes movement patterns, identifying inefficiencies and injury risks in real-time.',
  },
  {
    icon: Video,
    title: 'Video Feedback',
    description: 'Instant replay with AI annotations showing proper form, angles, and improvement areas.',
  },
  {
    icon: BarChart,
    title: 'Performance Metrics',
    description: 'Track speed, power, endurance, and sport-specific KPIs over time.',
  },
  {
    icon: Heart,
    title: 'Load Management',
    description: 'Monitor training loads and recovery to prevent overtraining and injury.',
  },
  {
    icon: Users,
    title: 'Team Analytics',
    description: 'Compare performance across roster, identify strengths, and optimize team composition.',
  },
  {
    icon: Target,
    title: 'Goal Setting',
    description: 'Set measurable performance targets and track progress with automated reporting.',
  },
];

const heroStats = [
  { value: '200+', label: 'Athletes Trained', icon: Users },
  { value: '35%', label: 'Performance Gain', icon: BarChart },
  { value: '50%', label: 'Injury Reduction', icon: Heart },
];

const sports = [
  'Soccer', 'Basketball', 'Cricket', 'Tennis', 'Swimming',
  'Track & Field', 'Volleyball', 'Badminton', 'Golf', 'Gymnastics',
];

const caseStudy = {
  org: 'National Sports Academy',
  sport: 'Multi-Sport Training Facility',
  results: [
    { metric: '23%', description: 'Reduction in training injuries' },
    { metric: '18%', description: 'Improvement in athlete performance' },
    { metric: '40%', description: 'More efficient coach time usage' },
    { metric: '92%', description: 'Athlete satisfaction rate' },
  ],
};

const testimonial = {
  quote: "LunaFit's pose estimation technology has revolutionized how we train our swimmers. We can now see and correct micro-adjustments that were impossible to catch with the naked eye.",
  author: "Coach Ramesh Kumar",
  role: "Head Swimming Coach, National Academy",
};

const faqs = [
  {
    question: 'What sports does LunaFit support?',
    answer: 'LunaFit supports a wide range of sports including cricket, football, tennis, badminton, athletics, swimming, and more. Our AI adapts to sport-specific biomechanics.',
  },
  {
    question: 'What equipment is needed?',
    answer: 'Basic setup requires just a smartphone or tablet with our app. Advanced features use additional sensors for detailed biomechanics analysis.',
  },
  {
    question: 'Can coaches customize training programs?',
    answer: 'Absolutely! Coaches can create custom drills, set individual goals, and modify AI recommendations based on their expertise.',
  },
  {
    question: 'How does injury prevention work?',
    answer: 'Our AI analyzes movement patterns to identify risk factors. It alerts coaches to potential issues before they become injuries and suggests corrective exercises.',
  },
];

export default function SportsPage() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
                <Trophy className="h-4 w-4" />
                Sports & Athletics
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">AI-Powered </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Athletic Excellence</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Transform sports training with AI biomechanics, real-time performance analytics, and smart coaching tools that help athletes reach their full potential.
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
                  href="/products/education/lunafit"
                  className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
                >
                  Explore LunaFit
                </Link>
              </div>
            </motion.div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="space-y-4">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className={`bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 ${index === 1 ? 'ml-8' : index === 2 ? 'ml-4' : ''}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-[var(--radius-lg)] ${colorStyles[index % colorStyles.length].bg} flex items-center justify-center`}>
                          <Icon className={`h-6 w-6 ${colorStyles[index % colorStyles.length].text}`} />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-[var(--text-primary)]">{stat.value}</div>
                          <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
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
              Complete Sports Technology Stack
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
        </div>
      </section>
      
      {/* Sports Supported */}
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
              Supported Sports
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Sports-Specific Training
            </h2>
            <p className="text-[var(--text-secondary)]">AI models trained for sport-specific movement patterns</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {sports.map((sport, index) => (
              <motion.div
                key={sport}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-[var(--luna-purple)]/10 to-[var(--azure-blue)]/10 border border-[var(--luna-purple)]/30 rounded-full px-4 py-2 text-[var(--luna-purple)]"
              >
                {sport}
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
              Training Intelligence Features
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const style = colorStyles[index % colorStyles.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] ${style.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${style.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Case Study */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--luna-purple)]/10 to-[var(--azure-blue)]/10 rounded-[var(--radius-xl)] p-8 md:p-12 border border-[var(--border-default)]"
          >
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-[var(--luna-purple)]" />
              <span className="text-[var(--luna-purple)] font-medium">Case Study</span>
            </div>
            
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{caseStudy.org}</h3>
            <p className="text-[var(--text-secondary)] mb-8">{caseStudy.sport}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {caseStudy.results.map((result) => (
                <div key={result.description} className="bg-[var(--bg-primary)] rounded-[var(--radius-lg)] p-4 text-center shadow-[var(--shadow-card)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)] mb-1">{result.metric}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{result.description}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-[var(--bg-primary)]">
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
              FAQs
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
                    <ChevronDown className="h-5 w-5 text-[var(--luna-purple)]" />
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
              Elevate Athletic{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              See how AI-powered training can transform your sports program.
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
                <Link href="/partner">Become a Partner</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>AI Biomechanics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Real-Time Analysis</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
