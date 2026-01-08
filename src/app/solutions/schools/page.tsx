'use client';

import { motion } from 'framer-motion';
import { 
  School, BookOpen, Users, Brain, BarChart, 
  Shield, Clock, Heart, Sparkles, Monitor,
  ArrowRight, Check, GraduationCap
} from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'LunaLearn',
    description: 'Adaptive learning platform with personalized curricula for every student',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--luna-pink)]',
  },
  {
    name: 'LunaViz',
    description: '3D holographic displays for immersive STEM education',
    href: '/products/education/lunaviz',
    color: 'from-[var(--azure-blue)] to-cyan-500',
  },
  {
    name: 'LunaWatch',
    description: 'AI-powered campus security and smart attendance',
    href: '/products/education/lunawatch',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'LunaFit',
    description: 'AI sports coaching and physical education analytics',
    href: '/products/education/lunafit',
    color: 'from-green-500 to-emerald-500',
  },
];

const benefits = [
  {
    icon: Brain,
    title: 'Personalized Learning',
    description: 'AI adapts content difficulty, pace, and teaching style to each student\'s unique learning profile.',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Real-time analytics help teachers identify struggling students and intervention opportunities.',
  },
  {
    icon: Shield,
    title: 'Campus Safety',
    description: 'Smart security systems protect students while respecting privacy with ethical AI practices.',
  },
  {
    icon: Clock,
    title: 'Administrative Efficiency',
    description: 'Automate attendance, grading assistance, and parent communication to save staff time.',
  },
  {
    icon: Monitor,
    title: 'Engaging Content',
    description: '3D visualizations and interactive content make complex subjects accessible and exciting.',
  },
  {
    icon: Heart,
    title: 'Wellbeing Focus',
    description: 'Track student engagement and wellness indicators to support whole-child development.',
  },
];

const caseStudy = {
  school: 'Riverside Academy',
  location: 'Chennai, India',
  students: '1,200',
  results: [
    { metric: '32%', description: 'Improvement in math scores' },
    { metric: '45%', description: 'Reduction in administrative time' },
    { metric: '94%', description: 'Teacher satisfaction rate' },
    { metric: '28%', description: 'Increase in student engagement' },
  ],
  quote: "Lunamagix has transformed how we approach education. Our teachers spend less time on paperwork and more time actually teaching.",
  author: "Dr. Priya Sharma",
  role: "Principal, Riverside Academy",
};

const implementation = [
  { step: 1, title: 'Assessment', description: 'We evaluate your current infrastructure, goals, and student population needs.' },
  { step: 2, title: 'Customization', description: 'Solutions are configured for your curriculum, policies, and integration requirements.' },
  { step: 3, title: 'Training', description: 'Comprehensive training for administrators, teachers, and support staff.' },
  { step: 4, title: 'Launch', description: 'Phased rollout with dedicated support ensures smooth adoption.' },
  { step: 5, title: 'Optimization', description: 'Ongoing analytics and support to maximize educational outcomes.' },
];

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-[var(--luna-purple)] via-[var(--luna-purple-dark)] to-indigo-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full mb-6">
              <School className="h-4 w-4" />
              <span className="text-sm font-medium">Solutions for K-12 & Higher Education</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-white">AI-Powered Education for </span>
              <span className="bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">Modern Schools</span>
            </h1>
            
            <p className="text-xl text-purple-100/90 mb-8 leading-relaxed">
              Transform your institution with intelligent learning platforms, immersive classrooms, and smart campus solutions designed for 21st-century education.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--luna-pink)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                Schedule Consultation
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
      
      {/* Products for Schools */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Integrated Solutions for Schools
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              A comprehensive technology ecosystem designed for educational excellence
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  <p className="text-[var(--text-secondary)] text-sm">{product.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Schools Choose Lunamagix
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
      
      {/* Case Study */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[var(--luna-purple)]/10 to-[var(--luna-pink)]/10 rounded-[var(--radius-xl)] p-8 md:p-12 border border-[var(--border-default)]"
          >
            <div className="flex items-center gap-2 mb-6">
              <GraduationCap className="h-5 w-5 text-[var(--luna-purple)]" />
              <span className="text-[var(--luna-purple)] font-medium">Case Study</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">{caseStudy.school}</h3>
                <p className="text-[var(--text-secondary)] mb-6">{caseStudy.location} • {caseStudy.students} Students</p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {caseStudy.results.map((result) => (
                    <div key={result.description} className="bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] p-4">
                      <div className="text-2xl font-bold text-[var(--luna-purple)] mb-1">{result.metric}</div>
                      <div className="text-sm text-[var(--text-secondary)]">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col justify-center">
                <blockquote className="text-xl text-[var(--text-secondary)] italic mb-6">
                  "{caseStudy.quote}"
                </blockquote>
                <div>
                  <p className="text-[var(--text-primary)] font-semibold">{caseStudy.author}</p>
                  <p className="text-[var(--text-tertiary)]">{caseStudy.role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Implementation */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Implementation Process
            </h2>
            <p className="text-[var(--text-secondary)]">Seamless deployment with ongoing support</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {implementation.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-default)] w-full md:w-56 shadow-[var(--shadow-card)]"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--luna-pink)] flex items-center justify-center text-white font-bold mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
              </motion.div>
            ))}
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
              Ready to Transform Your School?
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Join innovative schools worldwide that are preparing students for the future with Lunamagix.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Consultation
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
