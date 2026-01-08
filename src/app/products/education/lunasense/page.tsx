'use client';

import { motion } from 'framer-motion';
import { 
  Hand, Eye, Ear, Brain, Sparkles, Music, 
  Palette, Waves, Lightbulb, Users, Heart,
  Accessibility, Volume2, Zap, MonitorPlay,
  ArrowRight, Check, Star
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const senses = [
  { id: 'visual', name: 'Visual', icon: Eye, color: 'from-purple-500 to-violet-600', description: 'Dynamic visuals, color therapy, light patterns' },
  { id: 'auditory', name: 'Auditory', icon: Ear, color: 'from-blue-500 to-cyan-600', description: 'Spatial audio, music therapy, voice cues' },
  { id: 'tactile', name: 'Tactile', icon: Hand, color: 'from-green-500 to-emerald-600', description: 'Haptic feedback, texture experiences' },
  { id: 'vestibular', name: 'Movement', icon: Waves, color: 'from-orange-500 to-amber-600', description: 'Balance, motion, spatial awareness' },
];

function SensoryExperience() {
  const [activeSense, setActiveSense] = useState('visual');
  const [intensity, setIntensity] = useState(50);
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900/30 to-gray-900 rounded-2xl p-6 border border-purple-500/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-purple-400" />
          Multi-Sensory Environment
        </h3>
        <span className="text-xs text-purple-400 bg-purple-500/20 px-2 py-1 rounded">Interactive Demo</span>
      </div>
      
      {/* Sense Selection */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {senses.map((sense) => {
          const Icon = sense.icon;
          const isActive = activeSense === sense.id;
          return (
            <button
              key={sense.id}
              onClick={() => setActiveSense(sense.id)}
              className={`p-3 rounded-xl transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-br ${sense.color} shadow-lg shadow-purple-500/25` 
                  : 'bg-gray-800/50 hover:bg-gray-700/50'
              }`}
            >
              <Icon className={`h-6 w-6 mx-auto mb-1 ${isActive ? 'text-white' : 'text-gray-400'}`} />
              <span className={`text-xs ${isActive ? 'text-white' : 'text-gray-400'}`}>{sense.name}</span>
            </button>
          );
        })}
      </div>
      
      {/* Sensory Visualization */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden mb-4">
        {activeSense === 'visual' && (
          <motion.div 
            className="absolute inset-0"
            animate={{ 
              background: [
                'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.4), transparent 50%)',
                'radial-gradient(circle at 70% 50%, rgba(219, 39, 119, 0.4), transparent 50%)',
                'radial-gradient(circle at 50% 30%, rgba(217, 119, 6, 0.4), transparent 50%)',
                'radial-gradient(circle at 30% 50%, rgba(147, 51, 234, 0.4), transparent 50%)',
              ]
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          />
        )}
        
        {activeSense === 'auditory' && (
          <div className="absolute inset-0 flex items-center justify-center gap-1">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-500 to-cyan-400 rounded-full"
                animate={{ 
                  height: [10, 30 + Math.random() * 60, 10],
                }}
                transition={{ 
                  duration: 0.5 + Math.random() * 0.5, 
                  repeat: Infinity, 
                  delay: i * 0.05 
                }}
              />
            ))}
          </div>
        )}
        
        {activeSense === 'tactile' && (
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-4 gap-1 p-4">
            {[...Array(32)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded"
                animate={{ 
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  delay: Math.random() * 2 
                }}
              />
            ))}
          </div>
        )}
        
        {activeSense === 'vestibular' && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          >
            <div className="relative w-32 h-32">
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <motion.div
                  key={angle}
                  className="absolute w-2 h-12 bg-gradient-to-t from-orange-500 to-amber-400 rounded-full origin-bottom"
                  style={{ 
                    left: '50%', 
                    bottom: '50%',
                    transform: `translateX(-50%) rotate(${angle}deg)`,
                  }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: angle / 360 }}
                />
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Learner Avatar */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-xs">🧒</span>
          </div>
          <div>
            <p className="text-xs text-white font-medium">Learner Mode</p>
            <p className="text-xs text-gray-400">{senses.find(s => s.id === activeSense)?.description}</p>
          </div>
        </div>
      </div>
      
      {/* Intensity Control */}
      <div className="bg-gray-800/50 rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-300">Sensory Intensity</span>
          <span className="text-sm text-purple-400">{intensity}%</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>Calming</span>
          <span>Moderate</span>
          <span>Stimulating</span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: MonitorPlay,
    title: 'Immersive Environments',
    description: 'AI-curated sensory rooms with dynamic lighting, spatial audio, and responsive visuals that adapt to each learner\'s sensory profile.',
  },
  {
    icon: Brain,
    title: 'Sensory Processing AI',
    description: 'Advanced algorithms detect sensory overload or under-stimulation, automatically adjusting environmental inputs for optimal engagement.',
  },
  {
    icon: Music,
    title: 'Therapeutic Soundscapes',
    description: 'Evidence-based audio environments from calming nature sounds to rhythmic patterns supporting focus and self-regulation.',
  },
  {
    icon: Palette,
    title: 'Color & Light Therapy',
    description: 'Dynamic chromotherapy with adjustable color temperatures, patterns, and intensities based on therapeutic goals.',
  },
  {
    icon: Accessibility,
    title: 'Universal Design',
    description: 'Accessible to learners with diverse abilities including visual, auditory, and motor differences with customizable inputs.',
  },
  {
    icon: Heart,
    title: 'Emotional Regulation',
    description: 'Biofeedback integration monitors stress indicators, automatically transitioning to calming modes when needed.',
  },
];

const useCases = [
  {
    title: 'Sensory Integration Therapy',
    description: 'Occupational therapists use LunaSense to create controlled sensory experiences that help children process and respond to sensory input more effectively.',
    outcomes: ['40% improvement in sensory processing', 'Reduced therapy session anxiety', 'Measurable progress tracking'],
  },
  {
    title: 'Classroom Sensory Breaks',
    description: 'Schools implement LunaSense stations for scheduled sensory breaks, helping students self-regulate and return to learning refreshed.',
    outcomes: ['Fewer classroom disruptions', 'Increased time-on-task', 'Student self-advocacy skills'],
  },
  {
    title: 'Home Sensory Rooms',
    description: 'Families create therapeutic sensory spaces at home with LunaSense, providing consistent support between professional sessions.',
    outcomes: ['Bedtime routine support', 'Meltdown prevention', 'Family-friendly controls'],
  },
];

const stats = [
  { value: '8+', label: 'Sensory Modalities' },
  { value: '200+', label: 'Pre-built Environments' },
  { value: '45%', label: 'Better Self-Regulation' },
  { value: 'ASD', label: 'Research-Backed' },
];

const faqs = [
  {
    question: 'What sensory modalities does LunaSense support?',
    answer: 'LunaSense supports visual (lighting, projections, screens), auditory (spatial audio, music, white noise), tactile (haptic devices, texture panels), vestibular (motion platforms, balance equipment), and proprioceptive inputs through integrated equipment.',
  },
  {
    question: 'Is LunaSense suitable for children with sensory sensitivities?',
    answer: 'Absolutely! LunaSense is specifically designed for sensory sensitivities. It starts with gentle, controllable inputs and includes "emergency calm" modes that immediately transition to low-stimulation settings. All intensity levels are fully customizable.',
  },
  {
    question: 'Can therapists create custom sensory programs?',
    answer: 'Yes, therapists can create, save, and share custom sensory sequences. Programs can be tailored to specific therapeutic goals, with options to schedule progressive exposure or create calming routines.',
  },
  {
    question: 'What equipment is required?',
    answer: 'LunaSense works with a range of equipment from basic (smart lights, speakers) to comprehensive (LED panels, projection systems, haptic devices). We offer starter kits and can integrate with existing sensory room equipment.',
  },
];

export default function LunaSensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-purple-950/20 to-gray-950">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  EDUCATION
                </span>
                <span className="text-gray-400 text-sm">Multi-Sensory Learning</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-white">Luna</span>
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">Sense</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                AI-powered multi-sensory environments that adapt to each learner's unique sensory profile—supporting focus, regulation, and engagement through therapeutic experiences.
              </p>
              
              <p className="text-gray-400 mb-8">
                Designed for neurodiverse learners, LunaSense creates personalized sensory experiences that transform classrooms, therapy rooms, and homes into responsive, healing spaces.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Request Demo
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
              <SensoryExperience />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 border-y border-purple-500/20 bg-purple-950/20">
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
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
              Therapeutic Technology
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Evidence-based sensory experiences powered by AI that adapts to each learner
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
                  className="bg-gradient-to-br from-gray-900 to-purple-900/20 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Use Cases */}
      <section className="py-20 bg-purple-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Applications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              How educators, therapists, and families use LunaSense
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <h3 className="text-xl font-semibold text-white mb-3">{useCase.title}</h3>
                <p className="text-gray-400 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
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
      <section className="py-20 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Create Therapeutic Sensory Spaces
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Transform any space into an adaptive sensory environment that supports learning and regulation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-purple-900 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Consultation
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
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
