'use client';

import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, BarChart, Target, Brain, 
  Calendar, Sparkles, Trophy, BookOpen, Star,
  ArrowRight, Check
} from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'LunaLearn',
    description: 'Personalized tutoring platform with adaptive practice and progress tracking',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--luna-pink)]',
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

export default function CoachingPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--luna-purple)] via-[var(--luna-purple-dark)] to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
              <GraduationCap className="h-4 w-4" />
              <span className="text-sm font-medium">Coaching & Tutoring Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">Supercharge Your </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">Coaching Center</span>
            </h1>
            
            <p className="text-xl text-purple-100/90 mb-8 leading-relaxed">
              AI-powered learning platforms that help coaching centers deliver personalized education at scale—improving results while reducing operational overhead.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-white/20"
              >
                Explore Products
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
      
      {/* Products */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Top Coaching Centers Choose Us
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
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Coaching Business?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join leading coaching centers that are achieving better results with Lunamagix AI.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-white/10 transition-all duration-300"
              >
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
