'use client';

import { motion } from 'framer-motion';
import { 
  Glasses, Heart, Brain, Smile, Wind, Waves,
  TreePine, Sun, Moon, Mountain, Headphones,
  ArrowRight, Check, Sparkles, Shield, Clock, CheckCircle, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

function VRTherapyDemo() {
  const [environment, setEnvironment] = useState('forest');
  const [therapyMode, setTherapyMode] = useState('relaxation');
  const [heartRate, setHeartRate] = useState(78);
  const [stressLevel, setStressLevel] = useState(45);
  
  const environments = [
    { id: 'forest', name: 'Forest', icon: TreePine, color: 'from-green-500 to-emerald-600' },
    { id: 'beach', name: 'Beach', icon: Sun, color: 'from-amber-500 to-orange-600' },
    { id: 'night', name: 'Night Sky', icon: Moon, color: 'from-indigo-500 to-purple-600' },
    { id: 'mountain', name: 'Mountain', icon: Mountain, color: 'from-blue-500 to-cyan-600' },
  ];
  
  useEffect(() => {
    // Simulate biofeedback changes
    const interval = setInterval(() => {
      if (therapyMode === 'relaxation') {
        setHeartRate(prev => Math.max(65, prev - 1 + Math.random() * 2));
        setStressLevel(prev => Math.max(20, prev - 2 + Math.random() * 1));
      } else if (therapyMode === 'exposure') {
        setHeartRate(prev => Math.min(95, prev + Math.random() * 3 - 1));
        setStressLevel(prev => Math.min(70, prev + Math.random() * 3 - 1));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [therapyMode]);
  
  const currentEnv = environments.find(e => e.id === environment)!;
  
  return (
    <div className="bg-[var(--bg-primary)] shadow-[var(--shadow-card)] rounded-2xl p-6 border border-[var(--border-default)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Glasses className="h-5 w-5 text-[var(--luna-purple)]" />
          VR Therapy Session
        </h3>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-green-400">Active Session</span>
        </div>
      </div>
      
      {/* Environment Preview */}
      <div className={`relative h-40 rounded-xl overflow-hidden mb-4 bg-gradient-to-br ${currentEnv.color}`}>
        {/* Animated environment elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {environment === 'forest' && (
            <div className="flex items-end gap-2">
              {[...Array(7)].map((_, i) => (
                <motion.div
                  key={i}
                  className="bg-green-700/60"
                  style={{ 
                    width: 12 + Math.random() * 8,
                    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)'
                  }}
                  initial={{ height: 40 + Math.random() * 40 }}
                  animate={{ height: [40 + Math.random() * 40, 45 + Math.random() * 45, 40 + Math.random() * 40] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                />
              ))}
            </div>
          )}
          {environment === 'beach' && (
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 w-full h-1/3 bg-amber-200/30" />
              <motion.div
                className="absolute bottom-1/3 w-full h-4 bg-cyan-300/50"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          )}
          {environment === 'night' && (
            <div className="relative w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: Math.random() * 2 }}
                />
              ))}
            </div>
          )}
          {environment === 'mountain' && (
            <svg viewBox="0 0 200 100" className="w-full h-full opacity-50">
              <polygon points="0,100 50,30 100,100" fill="rgba(255,255,255,0.3)" />
              <polygon points="60,100 120,20 180,100" fill="rgba(255,255,255,0.4)" />
              <polygon points="120,100 170,40 200,100" fill="rgba(255,255,255,0.2)" />
            </svg>
          )}
        </div>
        
        {/* Current environment label */}
        <div className="absolute bottom-3 left-3 bg-black/50 px-3 py-1 rounded-full">
          <span className="text-xs text-white">{currentEnv.name} Environment</span>
        </div>
        
        {/* Audio indicator */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
          <Headphones className="h-3 w-3 text-white" />
          <div className="flex gap-0.5">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 bg-white rounded-full"
                animate={{ height: [4, 10, 4] }}
                transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Environment Selection */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {environments.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setEnvironment(id)}
            className={`p-2 rounded-lg transition-all duration-300 flex flex-col items-center ${
              environment === id 
                ? 'bg-[var(--luna-purple)]/10 border border-[var(--luna-purple)]/50' 
                : 'bg-[var(--bg-secondary)] border border-transparent hover:bg-[var(--bg-tertiary)]'
            }`}
          >
            <Icon className={`h-4 w-4 mb-1 ${environment === id ? 'text-[var(--luna-purple)]' : 'text-[var(--text-secondary)]'}`} />
            <span className={`text-xs ${environment === id ? 'text-[var(--luna-purple)]' : 'text-[var(--text-secondary)]'}`}>{name}</span>
          </button>
        ))}
      </div>
      
      {/* Therapy Mode */}
      <div className="flex gap-2 mb-4">
        {['relaxation', 'exposure', 'meditation'].map((mode) => (
          <button
            key={mode}
            onClick={() => setTherapyMode(mode)}
            className={`flex-1 py-2 px-3 rounded-lg text-xs capitalize transition-all duration-300 ${
              therapyMode === mode 
                ? 'bg-[var(--luna-purple)] text-white' 
                : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
      
      {/* Biofeedback */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[var(--bg-secondary)] rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
              <Heart className="h-3 w-3" /> Heart Rate
            </span>
            <span className="text-sm font-bold text-pink-400">{Math.round(heartRate)} bpm</span>
          </div>
          <div className="h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-pink-500"
              animate={{ width: `${(heartRate / 120) * 100}%` }}
            />
          </div>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-[var(--text-secondary)] flex items-center gap-1">
              <Brain className="h-3 w-3" /> Stress Level
            </span>
            <span className={`text-sm font-bold ${stressLevel < 40 ? 'text-green-400' : stressLevel < 60 ? 'text-yellow-400' : 'text-red-400'}`}>
              {Math.round(stressLevel)}%
            </span>
          </div>
          <div className="h-1 bg-[var(--bg-tertiary)] rounded-full overflow-hidden">
            <motion.div 
              className={`h-full ${stressLevel < 40 ? 'bg-green-500' : stressLevel < 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
              animate={{ width: `${stressLevel}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Glasses,
    title: 'Immersive VR Environments',
    description: 'Therapeutic virtual worlds from calming nature scenes to controlled exposure environments for anxiety and phobia treatment.',
  },
  {
    icon: Heart,
    title: 'Biofeedback Integration',
    description: 'Real-time heart rate, galvanic skin response, and EEG monitoring adapts the experience based on physiological stress indicators.',
  },
  {
    icon: Brain,
    title: 'AI-Guided Sessions',
    description: 'Intelligent therapy guidance responds to user state, pacing exposure therapy and adjusting relaxation intensity dynamically.',
  },
  {
    icon: Smile,
    title: 'Pain Distraction',
    description: 'Clinically validated VR experiences for pain management during procedures, chronic pain, and physical therapy.',
  },
  {
    icon: Wind,
    title: 'Breathing Exercises',
    description: 'Visual breath guides synchronized with environment changes create powerful relaxation and mindfulness experiences.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'Session data encrypted and stored securely. Therapist dashboards provide insights while protecting patient privacy.',
  },
];

const applications = [
  {
    title: 'Anxiety & Phobia Treatment',
    description: 'Graduated exposure therapy in controlled VR environments for fears of heights, flying, public speaking, and social situations.',
    outcomes: ['Up to 90% improvement in phobia symptoms', 'Reduced therapy sessions needed', 'At-home practice capability'],
  },
  {
    title: 'PTSD Therapy',
    description: 'Prolonged exposure and EMDR-enhanced protocols in safe, controlled virtual environments with therapist oversight.',
    outcomes: ['Evidence-based trauma processing', 'Controlled exposure pacing', 'Real-time safety monitoring'],
  },
  {
    title: 'Pain Management',
    description: 'Distraction-based pain reduction for procedures, burn care, physical therapy, and chronic pain conditions.',
    outcomes: ['30-50% reduction in pain perception', 'Reduced medication needs', 'Improved therapy engagement'],
  },
  {
    title: 'Stress & Mindfulness',
    description: 'Guided meditation, breathing exercises, and relaxation training in beautiful immersive environments.',
    outcomes: ['Lower cortisol levels', 'Improved sleep quality', 'Daily wellness practice'],
  },
];

const stats = [
  { value: '75%', label: 'Anxiety Reduction' },
  { value: '50+', label: 'Therapy Protocols' },
  { value: '40%', label: 'Pain Decrease' },
  { value: 'HIPAA', label: 'Compliant' },
];

const faqs = [
  {
    question: 'What conditions can LunaCare help treat?',
    answer: 'LunaCare has evidence-based protocols for anxiety disorders, specific phobias, PTSD, chronic pain, acute procedural pain, stress management, and rehabilitation motivation. It\'s used as an adjunct to traditional therapy, not a replacement.',
  },
  {
    question: 'Do therapists need special training?',
    answer: 'LunaCare includes comprehensive training for clinicians, including protocol implementation, patient monitoring, and outcome tracking. Most therapists complete certification in 4-6 hours and can integrate VR into existing practice.',
  },
  {
    question: 'Is VR therapy safe?',
    answer: 'VR therapy is well-researched and FDA-cleared for several applications. LunaCare includes motion sickness prevention features, session time limits, and immediate exit options. All sessions can be supervised by trained clinicians.',
  },
  {
    question: 'Can patients use LunaCare at home?',
    answer: 'Yes, therapists can prescribe home-use protocols for practice between sessions. The system tracks usage and outcomes, sharing data with the care team. Certain therapeutic protocols require in-office supervision.',
  },
];

export default function LunaCarePage() {
  return (
    <div className="min-h-screen bg-white">
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
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
                <Sparkles className="h-4 w-4" />
                Healthcare Technology
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-[var(--text-primary)]">LunaCare: </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">VR Therapy Platform</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                Immersive VR therapy platform with biofeedback—delivering evidence-based treatments for anxiety, PTSD, chronic pain, and stress.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                <Button 
                  size="lg" 
                  asChild 
                  className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
                >
                  <Link href="/contact">
                    Request Clinical Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="/products">View All Products</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-[var(--border-light)]">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>FDA Cleared</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Clinical Validated</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Main Display Container */}
              <div className="relative rounded-2xl overflow-hidden border border-[var(--border-default)] bg-white shadow-[var(--shadow-xl)]">
                <VRTherapyDemo />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">73%</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Anxiety Reduction</div>
                </div>
              </motion.div>
              
              {/* Floating Stats Card - Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -right-4 bottom-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--success)]">15+</div>
                  <div className="text-xs text-[var(--text-tertiary)]">VR Environments</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
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
      
      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-4">
              <Zap className="h-4 w-4" />
              Key Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Clinical-Grade VR Therapy
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Evidence-based protocols with real-time biofeedback adaptation
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colorStyles = [
                { bg: 'bg-[var(--luna-purple-lighter)]', text: 'text-[var(--luna-purple)]' },
                { bg: 'bg-[var(--azure-blue-lighter)]', text: 'text-[var(--azure-blue)]' },
                { bg: 'bg-[var(--accent-teal-lighter)]', text: 'text-[var(--accent-teal)]' },
              ];
              const colorStyle = colorStyles[index % colorStyles.length];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-[var(--border-default)] hover:border-[var(--luna-purple)]/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] shadow-[var(--shadow-card)]"
                >
                  <div className={`w-12 h-12 rounded-xl ${colorStyle.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${colorStyle.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Therapeutic Applications
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <motion.div
                key={app.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-2xl p-8 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{app.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[var(--luna-purple)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text-secondary)] text-sm">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
                transition={{ delay: index * 0.1 }}
                className="bg-[var(--bg-primary)] rounded-xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section - Light Background Style */}
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
              Transform Your Clinical{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Practice
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Join leading healthcare providers using LunaCare to deliver better patient outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild 
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
                  Request Clinical Demo
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
                  <span>EHR Integration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
