'use client';

import { motion } from 'framer-motion';
import { 
  Trophy, Activity, Users, BarChart, Target, 
  Video, Zap, Heart, Timer, Sparkles,
  ArrowRight, Check, Star
} from 'lucide-react';
import Link from 'next/link';

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
    color: 'from-[var(--luna-purple)] to-[var(--luna-pink)]',
  },
  {
    name: 'LunaWatch',
    description: 'Smart facility management and event security',
    href: '/products/education/lunawatch',
    color: 'from-red-500 to-orange-500',
  },
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

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[var(--gradient-hero)]">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--luna-purple)]/10 text-[var(--luna-purple)] px-4 py-2 rounded-full mb-6">
              <Trophy className="h-4 w-4" />
              <span className="text-sm font-medium">Sports & Athletics</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">AI-Powered </span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Athletic Excellence</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              Transform sports training with AI biomechanics, real-time performance analytics, and smart coaching tools that help athletes reach their full potential.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
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
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Training Intelligence Features
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
                >
                  <div className="w-12 h-12 rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-[var(--luna-purple)]" />
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
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elevate Athletic Performance
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              See how AI-powered training can transform your sports program.
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
                Become a Partner
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
