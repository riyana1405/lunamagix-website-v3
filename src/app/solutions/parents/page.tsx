'use client';

import { motion } from 'framer-motion';
import { 
  Home, Heart, BarChart, Brain, Shield, 
  Smartphone, Users, BookOpen, Sparkles, Star,
  ArrowRight, Check, MessageSquare
} from 'lucide-react';
import Link from 'next/link';

const products = [
  {
    name: 'LunaLearn',
    description: 'Track your child\'s learning progress with real-time insights and personalized recommendations',
    href: '/products/education/lunalearn',
    color: 'from-[var(--luna-purple)] to-[var(--luna-pink)]',
    parentFeatures: ['Progress dashboards', 'Learning style insights', 'Goal setting', 'Communication with teachers'],
  },
  {
    name: 'Lumina Screen',
    description: 'Privacy-first early identification to understand your child\'s learning profile',
    href: '/assessment',
    color: 'from-amber-500 to-orange-500',
    parentFeatures: ['No diagnostic labels', 'Actionable insights', 'Support recommendations', 'Share with educators'],
  },
  {
    name: 'LunaSense',
    description: 'Create calming sensory spaces at home for regulation and focus',
    href: '/products/education/lunasense',
    color: 'from-[var(--azure-blue)] to-cyan-500',
    parentFeatures: ['Home sensory room setup', 'Bedtime routines', 'Calm-down tools', 'Consistent with therapy'],
  },
];

const benefits = [
  {
    icon: BarChart,
    title: 'Real-Time Progress',
    description: 'See exactly how your child is doing in each subject, not just report card grades.',
  },
  {
    icon: Brain,
    title: 'Understand Learning Styles',
    description: 'Discover whether your child learns best visually, auditorily, or through hands-on activities.',
  },
  {
    icon: MessageSquare,
    title: 'Teacher Communication',
    description: 'Direct messaging with teachers and instant notifications about assignments and progress.',
  },
  {
    icon: Shield,
    title: 'Safe & Private',
    description: 'Your child\'s data is protected with enterprise-grade security and strict privacy controls.',
  },
  {
    icon: Heart,
    title: 'Emotional Wellbeing',
    description: 'Track engagement and emotional indicators to support your child\'s overall wellbeing.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App',
    description: 'Stay connected on the go with the LunaLearn parent app for iOS and Android.',
  },
];

const testimonials = [
  {
    quote: "Finally, I can see what my daughter is learning and where she needs help—before parent-teacher conferences.",
    author: "Jennifer L.",
    role: "Parent of 3rd Grader",
  },
  {
    quote: "The sensory room equipment helped us create a calm corner at home that matches what his therapist uses.",
    author: "David & Amy T.",
    role: "Parents of Child with Autism",
  },
  {
    quote: "Lumina Screen helped us understand why our son was struggling. Now his teachers know how to support him.",
    author: "Sarah M.",
    role: "Parent of 6th Grader with ADHD",
  },
];

const faqs = [
  {
    question: 'How do I access the parent dashboard?',
    answer: 'When your child\'s school uses LunaLearn, you\'ll receive an invitation email to set up your parent account. You can access the dashboard via web browser or our mobile app.',
  },
  {
    question: 'Is Lumina Screen a diagnosis?',
    answer: 'No, Lumina Screen is an early identification tool, not a diagnostic assessment. It provides insights about your child\'s learning profile and recommends next steps, which may include professional evaluation if indicated.',
  },
  {
    question: 'Can I use these tools at home without school involvement?',
    answer: 'Yes! LunaSense home kits and Lumina Screen are available directly to families. LunaLearn is primarily school-based but includes a robust parent portal.',
  },
  {
    question: 'How is my child\'s privacy protected?',
    answer: 'We follow FERPA, COPPA, and GDPR regulations strictly. You control data sharing permissions, and we never sell personal information.',
  },
];

export default function ParentsPage() {
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
              <Home className="h-4 w-4" />
              <span className="text-sm font-medium">For Parents & Families</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-[var(--text-primary)]">Support Your Child's </span>
              <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Learning Journey</span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8 leading-relaxed">
              Stay connected to your child's education with real-time insights, understand their unique learning style, and create supportive environments at home.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 shadow-[var(--shadow-card)]"
              >
                Try Lumina Screen
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/products/education/lunalearn"
                className="inline-flex items-center gap-2 bg-[var(--bg-primary)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] transition-all duration-300 border border-[var(--border-default)]"
              >
                Explore LunaLearn
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Products for Parents */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Tools for Engaged Parents
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
                className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <div className={`w-12 h-12 rounded-[var(--radius-lg)] bg-gradient-to-br ${product.color} flex items-center justify-center mb-4`}>
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{product.name}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{product.description}</p>
                <ul className="space-y-2 mb-4">
                  {product.parentFeatures.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Check className="h-4 w-4 text-[var(--luna-purple)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={product.href}
                  className="text-[var(--luna-purple)] hover:opacity-80 text-sm font-medium inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
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
              Why Parents Love Lunamagix
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
      
      {/* Testimonials */}
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Parent Stories
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-xl)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <Star className="h-6 w-6 text-[var(--luna-purple)] mb-4" />
                <p className="text-[var(--text-secondary)] italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[var(--text-primary)] font-semibold">{testimonial.author}</p>
                  <p className="text-[var(--text-tertiary)] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Common Questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-[var(--radius-lg)] p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
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
              Take the First Step
            </h2>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Understand your child's unique learning profile with Lumina Screen—free and completely private.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/assessment"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-gray-100 transition-all duration-300"
              >
                Start Lumina Screen
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-[var(--radius-xl)] hover:bg-white/10 transition-all duration-300"
              >
                Ask a Question
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
