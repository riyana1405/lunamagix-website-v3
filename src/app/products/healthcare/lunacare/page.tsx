'use client';

import { motion } from 'framer-motion';
import { 
  Glasses, Heart, Brain, Smile, Wind, Waves,
  TreePine, Sun, Moon, Mountain, Headphones,
  ArrowRight, Check, Sparkles, Shield, Clock
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <div className="bg-gradient-to-br from-gray-900 via-pink-900/30 to-gray-900 rounded-2xl p-6 border border-pink-500/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Glasses className="h-5 w-5 text-pink-400" />
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
                ? 'bg-pink-500/30 border border-pink-500/50' 
                : 'bg-gray-800/50 border border-transparent hover:bg-gray-700/50'
            }`}
          >
            <Icon className={`h-4 w-4 mb-1 ${environment === id ? 'text-pink-400' : 'text-gray-400'}`} />
            <span className={`text-xs ${environment === id ? 'text-pink-300' : 'text-gray-400'}`}>{name}</span>
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
                ? 'bg-pink-500 text-white' 
                : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'
            }`}
          >
            {mode}
          </button>
        ))}
      </div>
      
      {/* Biofeedback */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Heart className="h-3 w-3" /> Heart Rate
            </span>
            <span className="text-sm font-bold text-pink-400">{Math.round(heartRate)} bpm</span>
          </div>
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-pink-500"
              animate={{ width: `${(heartRate / 120) * 100}%` }}
            />
          </div>
        </div>
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Brain className="h-3 w-3" /> Stress Level
            </span>
            <span className={`text-sm font-bold ${stressLevel < 40 ? 'text-green-400' : stressLevel < 60 ? 'text-yellow-400' : 'text-red-400'}`}>
              {Math.round(stressLevel)}%
            </span>
          </div>
          <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
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
    <div className="min-h-screen bg-[var(--gradient-hero)]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  HEALTHCARE
                </span>
                <span className="text-[var(--luna-purple)] text-sm">Therapeutic VR</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">Luna</span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Care</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                Immersive VR therapy platform with biofeedback—delivering evidence-based treatments for anxiety, PTSD, chronic pain, and stress through adaptive virtual experiences.
              </p>
              
              <p className="text-[var(--text-secondary)] mb-8">
                LunaCare combines therapeutic VR environments with real-time physiological monitoring to create personalized, effective mental health and pain management interventions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-500 hover:to-rose-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-pink-500/25"
                >
                  Request Clinical Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-white/20"
                >
                  View All Products
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <VRTherapyDemo />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 border-y border-pink-500/20 bg-pink-950/20">
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Clinical-Grade VR Therapy
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Evidence-based protocols with real-time biofeedback adaptation
            </p>
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
                  className="bg-gradient-to-br from-gray-900 to-pink-900/20 rounded-2xl p-6 border border-pink-500/20 hover:border-pink-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-rose-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Applications */}
      <section className="py-20 bg-pink-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{app.title}</h3>
                <p className="text-gray-400 mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{outcome}</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                className="bg-gray-900/50 rounded-xl p-6 border border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-[var(--gradient-cta)]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transform Your Clinical Practice
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join leading healthcare providers using LunaCare to deliver better patient outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Request Clinical Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
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
