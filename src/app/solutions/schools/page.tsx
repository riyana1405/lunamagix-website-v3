'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  School, BookOpen, Users, Brain, BarChart, 
  Shield, Clock, Heart, Sparkles, Monitor,
  ArrowRight, Check, GraduationCap, Zap, CheckCircle, ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

const products = [
  {
    name: 'LunaLearn',
    description: 'Adaptive learning platform with personalized curricula for every student',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--azure-blue)]',
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
    color: 'purple',
  },
  {
    icon: BarChart,
    title: 'Data-Driven Insights',
    description: 'Real-time analytics help teachers identify struggling students and intervention opportunities.',
    color: 'blue',
  },
  {
    icon: Shield,
    title: 'Campus Safety',
    description: 'Smart security systems protect students while respecting privacy with ethical AI practices.',
    color: 'teal',
  },
  {
    icon: Clock,
    title: 'Administrative Efficiency',
    description: 'Automate attendance, grading assistance, and parent communication to save staff time.',
    color: 'purple',
  },
  {
    icon: Monitor,
    title: 'Engaging Content',
    description: '3D visualizations and interactive content make complex subjects accessible and exciting.',
    color: 'blue',
  },
  {
    icon: Heart,
    title: 'Wellbeing Focus',
    description: 'Track student engagement and wellness indicators to support whole-child development.',
    color: 'teal',
  },
];

const colorVariants = {
  purple: {
    bg: 'bg-[var(--luna-purple)]/10',
    text: 'text-[var(--luna-purple)]',
  },
  blue: {
    bg: 'bg-[var(--azure-blue)]/10',
    text: 'text-[var(--azure-blue)]',
  },
  teal: {
    bg: 'bg-teal-500/10',
    text: 'text-teal-500',
  },
};

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

const faqs = [
  {
    question: 'How long does implementation typically take?',
    answer: 'Implementation timeline varies based on school size and complexity. Most schools are fully operational within 4-8 weeks, with training and support throughout.',
  },
  {
    question: 'What training is provided for teachers?',
    answer: 'We provide comprehensive onboarding, including hands-on workshops, video tutorials, and ongoing support. Teachers typically become proficient within 2-3 training sessions.',
  },
  {
    question: 'How does pricing work for schools?',
    answer: 'We offer flexible pricing based on student count and selected products. Contact us for a customized quote that fits your budget.',
  },
  {
    question: 'Is technical support included?',
    answer: 'Yes, all plans include dedicated technical support via email, phone, and chat. Premium plans include on-site support options.',
  },
];

export default function SchoolsPage() {
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
                <School className="h-4 w-4" />
                Solutions for K-12 & Higher Education
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">AI-Powered Education for </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Modern Schools</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
                Transform your institution with intelligent learning platforms, immersive classrooms, and smart campus solutions designed for 21st-century education.
              </p>
              
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
                >
                  Schedule Consultation
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
                >
                  Explore Products
                </Link>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>FERPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Easy Integration</span>
                </div>
              </div>
            </motion.div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block relative"
            >
              <div className="relative h-[400px]">
                {/* Stat Card 1 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-0 left-0 bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent mb-1">1000+</div>
                  <div className="text-[var(--text-secondary)] font-medium">Schools Worldwide</div>
                </motion.div>
                
                {/* Stat Card 2 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-8 right-0 bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[var(--azure-blue)] to-cyan-500 bg-clip-text text-transparent mb-1">95%</div>
                  <div className="text-[var(--text-secondary)] font-medium">Satisfaction Rate</div>
                </motion.div>
                
                {/* Stat Card 3 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute bottom-20 left-12 bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-teal-500 to-emerald-500 bg-clip-text text-transparent mb-1">50%</div>
                  <div className="text-[var(--text-secondary)] font-medium">Time Saved</div>
                </motion.div>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 right-12 w-32 h-32 rounded-full bg-gradient-to-br from-[var(--luna-purple)]/20 to-[var(--azure-blue)]/20 blur-2xl" />
              </div>
            </motion.div>
          </div>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Sparkles className="h-4 w-4" />
              Our Solutions
            </span>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Zap className="h-4 w-4" />
              Key Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Why Schools Choose Lunamagix
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const colors = colorVariants[benefit.color as keyof typeof colorVariants];
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className={`w-12 h-12 rounded-[var(--radius-lg)] ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${colors.text}`} />
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
            className="bg-gradient-to-br from-[var(--luna-purple)]/10 to-[var(--azure-blue)]/10 rounded-[var(--radius-xl)] p-8 md:p-12 border border-[var(--border-default)]"
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
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Zap className="h-4 w-4" />
              How It Works
            </span>
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
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] flex items-center justify-center text-white font-bold mb-3">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
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
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-[var(--bg-secondary)] rounded-xl border border-[var(--border-default)] shadow-[var(--shadow-card)] overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[var(--gray-50)] transition-colors"
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
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                School?
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Join innovative schools worldwide that are preparing students for the future with Lunamagix.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
                  Schedule Consultation
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
                  <span>FERPA Compliant</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Easy Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Dedicated Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
