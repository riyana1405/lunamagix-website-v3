'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, Users, BarChart, Target, Brain, 
  Calendar, Sparkles, Trophy, BookOpen, Star,
  ArrowRight, Check, Zap, CheckCircle, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'LunaLearn',
    description: 'Personalized tutoring platform with adaptive practice and progress tracking',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--azure-blue)]',
  },
  {
    name: 'LunaViz',
    description: '3D visualization for complex concepts in science and mathematics',
    href: '/products/education/lunaviz',
    color: 'from-[var(--azure-blue)] to-cyan-500',
  },
  {
    name: 'LunaFit',
    description: 'AI coaching for sports academies and physical training centers',
    href: '/products/education/lunafit',
    color: 'from-green-500 to-emerald-500',
  },
];

const benefits = [
  {
    icon: Target,
    title: 'Competitive Exam Prep',
    description: 'AI-driven practice for JEE, NEET, SAT, GRE, and other competitive examinations with predictive scoring.',
  },
  {
    icon: BarChart,
    title: 'Student Analytics',
    description: 'Deep insights into each student\'s strengths, weaknesses, and learning patterns for targeted coaching.',
  },
  {
    icon: Brain,
    title: 'Adaptive Difficulty',
    description: 'Questions and content automatically adjust to challenge students at their optimal learning zone.',
  },
  {
    icon: Calendar,
    title: 'Batch Management',
    description: 'Organize students by batches, subjects, and schedules with automated attendance and communication.',
  },
  {
    icon: Users,
    title: 'Parent Portal',
    description: 'Keep parents informed with progress reports, attendance alerts, and fee management.',
  },
  {
    icon: Trophy,
    title: 'Performance Leaderboards',
    description: 'Gamified competition motivates students while providing benchmark comparisons.',
  },
];

const examSupport = [
  'JEE Main & Advanced',
  'NEET UG',
  'UPSC/IAS',
  'SAT/ACT',
  'GRE/GMAT',
  'State Board Exams',
  'CBSE/ICSE',
  'Olympiads',
];

const testimonial = {
  quote: "Our JEE results improved by 40% after implementing LunaLearn. The AI identifies exactly where each student needs help and provides targeted practice.",
  author: "Rajesh Kumar",
  role: "Director, Elite IIT Coaching, Kota",
};

const stats = [
  { value: '40%', label: 'Better Exam Results' },
  { value: '3x', label: 'More Practice Problems' },
  { value: '85%', label: 'Student Retention' },
  { value: '50%', label: 'Less Admin Work' },
];

const heroStats = [
  { value: '500+', label: 'Coaching Institutes' },
  { value: '40%', label: 'Avg. Result Growth' },
  { value: '24/7', label: 'Support Available' },
];

const colorStyles = [
  { bg: 'from-[var(--luna-purple)] to-[var(--azure-blue)]', text: 'text-white' },
  { bg: 'from-[var(--azure-blue)] to-cyan-500', text: 'text-white' },
  { bg: 'from-teal-500 to-emerald-500', text: 'text-white' },
];

const faqs = [
  {
    question: 'Can LunaLearn integrate with our existing curriculum?',
    answer: 'Yes, LunaLearn is designed to complement your existing teaching methods. It can be customized to align with your curriculum and teaching style.',
  },
  {
    question: 'How does performance tracking work for competitive exams?',
    answer: 'Our platform tracks performance across topics, identifies weak areas, and provides targeted practice. Analytics show predicted scores and areas needing focus.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer dedicated account management, technical support, teacher training, and regular check-ins to ensure optimal outcomes.',
  },
  {
    question: 'Can we white-label the platform?',
    answer: 'Yes, premium partners can customize branding, including logos, colors, and domain names to match your institute identity.',
  },
];

export default function CoachingPage() {
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
                <GraduationCap className="h-4 w-4" />
                Coaching & Tutoring Solutions
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">Supercharge Your </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Coaching Center</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                AI-powered learning platforms that help coaching centers deliver personalized education at scale—improving results while reducing operational overhead.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
                >
                  Schedule Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
                >
                  Explore Products
                </Link>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px]">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.15 }}
                    className={`absolute bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 shadow-[var(--shadow-card-hover)] border border-[var(--border-default)] ${
                      index === 0 ? 'top-0 right-0' : index === 1 ? 'top-1/3 left-0' : 'bottom-0 right-1/4'
                    }`}
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[var(--text-secondary)] text-sm font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              <style jsx>{`
                @keyframes float {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-10px); }
                }
              `}</style>
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
              Tools for Coaching Excellence
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
      
      {/* Exam Support */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <BookOpen className="h-4 w-4" />
              Exam Support
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Comprehensive Exam Coverage
            </h2>
            <p className="text-[var(--text-secondary)]">AI-powered preparation for all major competitive exams</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {examSupport.map((exam, index) => (
              <motion.div
                key={exam}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-[var(--luna-purple)]/10 to-[var(--azure-blue)]/10 border border-[var(--luna-purple)]/30 rounded-full px-4 py-2 text-[var(--luna-purple)]"
              >
                {exam}
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
              Why Top Coaching Centers Choose Us
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colorStyle = colorStyles[index % colorStyles.length];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br ${colorStyle.bg} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className={`h-6 w-6 ${colorStyle.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{benefit.title}</h3>
                  <p className="text-[var(--text-secondary)]">{benefit.description}</p>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Star className="h-4 w-4" />
              Success Story
            </span>
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
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <BookOpen className="h-4 w-4" />
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
                className="bg-[var(--bg-secondary)] rounded-[var(--radius-xl)] border border-[var(--border-default)] overflow-hidden"
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
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Coaching Business?
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Join leading coaching centers that are achieving better results with Lunamagix AI.
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
                <Link href="/partner">Become a Partner</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>AI-Powered Insights</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Personalized Learning</span>
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
