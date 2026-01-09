'use client';

import { motion } from 'framer-motion';
import { 
  Ear, Volume2, VolumeX, Settings, Mic, 
  Users, Music, Phone, Brain, Waves,
  ArrowRight, Check, Zap, Smartphone, Heart, Sparkles, CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

function HearingDemo() {
  const [noiseReduction, setNoiseReduction] = useState(70);
  const [speechEnhancement, setSpeechEnhancement] = useState(80);
  const [activeScene, setActiveScene] = useState('conversation');
  
  const scenes = [
    { id: 'conversation', name: 'Conversation', icon: Users },
    { id: 'music', name: 'Music', icon: Music },
    { id: 'phone', name: 'Phone Call', icon: Phone },
    { id: 'outdoor', name: 'Outdoor', icon: Waves },
  ];
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Ear className="h-5 w-5 text-[var(--luna-purple)]" />
          LunaSound Audio Processing
        </h3>
        <span className="text-xs text-[var(--luna-purple)] bg-purple-100 px-2 py-1 rounded">AI Enhanced</span>
      </div>
      
      {/* Scene Selection */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {scenes.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveScene(id)}
            className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center ${
              activeScene === id 
                ? 'bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] text-white' 
                : 'bg-gray-50 text-[var(--text-secondary)] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{name}</span>
          </button>
        ))}
      </div>
      
      {/* Audio Visualization */}
      <div className="relative h-32 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden mb-4">
        <div className="absolute inset-0 flex items-center justify-center gap-1 px-4">
          {/* Background noise (reduced) */}
          <div className="flex items-end gap-0.5 opacity-30">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`noise-${i}`}
                className="w-1 bg-gray-500 rounded-full"
                animate={{ height: [5, 8 + Math.random() * 10, 5] }}
                transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
          
          {/* Enhanced speech (prominent) */}
          <div className="flex items-end gap-1 mx-4">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={`speech-${i}`}
                className="w-2 bg-gradient-to-t from-[var(--luna-purple)] to-[var(--accent-teal)] rounded-full"
                animate={{ 
                  height: [10, 20 + Math.random() * (speechEnhancement * 0.5), 10],
                }}
                transition={{ duration: 0.2 + Math.random() * 0.3, repeat: Infinity, delay: i * 0.03 }}
              />
            ))}
          </div>
          
          {/* Background noise (reduced) */}
          <div className="flex items-end gap-0.5 opacity-30">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`noise2-${i}`}
                className="w-1 bg-gray-500 rounded-full"
                animate={{ height: [5, 8 + Math.random() * 10, 5] }}
                transition={{ duration: 0.3, repeat: Infinity, delay: i * 0.05 }}
              />
            ))}
          </div>
        </div>
        
        {/* Labels */}
        <div className="absolute bottom-2 left-3 text-xs text-[var(--text-secondary)]">Background (Reduced)</div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-[var(--luna-purple)]">Speech (Enhanced)</div>
        <div className="absolute bottom-2 right-3 text-xs text-[var(--text-secondary)]">Background (Reduced)</div>
      </div>
      
      {/* Controls */}
      <div className="space-y-4">
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
              <VolumeX className="h-4 w-4 text-[var(--text-secondary)]" />
              Noise Reduction
            </span>
            <span className="text-sm text-[var(--luna-purple)]">{noiseReduction}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={noiseReduction}
            onChange={(e) => setNoiseReduction(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--luna-purple)]"
          />
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-[var(--text-secondary)] flex items-center gap-2">
              <Mic className="h-4 w-4 text-[var(--text-secondary)]" />
              Speech Enhancement
            </span>
            <span className="text-sm text-[var(--luna-purple)]">{speechEnhancement}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={speechEnhancement}
            onChange={(e) => setSpeechEnhancement(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--luna-purple)]"
          />
        </div>
      </div>
      
      {/* Status */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-50 border border-gray-200 rounded-lg py-2">
          <p className="text-lg font-bold text-[var(--text-primary)]">-24dB</p>
          <p className="text-xs text-[var(--text-secondary)]">Noise Floor</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg py-2">
          <p className="text-lg font-bold text-[var(--luna-purple)]">+12dB</p>
          <p className="text-xs text-[var(--text-secondary)]">Speech Clarity</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg py-2">
          <p className="text-lg font-bold text-[var(--accent-teal)]">Auto</p>
          <p className="text-xs text-[var(--text-secondary)]">Scene Mode</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: 'AI Sound Processing',
    description: 'Neural networks trained on millions of audio samples distinguish speech from noise in real-time, even in challenging acoustic environments.',
  },
  {
    icon: Users,
    title: 'Speech Isolation',
    description: 'Beamforming technology focuses on the speaker you\'re facing while suppressing competing voices and background noise.',
  },
  {
    icon: Settings,
    title: 'Auto Scene Detection',
    description: 'Automatically adjusts settings for conversations, music, phone calls, and outdoor activities without manual switching.',
  },
  {
    icon: Smartphone,
    title: 'Smartphone Integration',
    description: 'Stream calls and media directly. Control settings via app. Real-time speech-to-text transcription for noisy environments.',
  },
  {
    icon: Music,
    title: 'Music Optimization',
    description: 'Separate music processing mode preserves dynamic range and frequency response that speech optimization would otherwise compress.',
  },
  {
    icon: Heart,
    title: 'Tinnitus Relief',
    description: 'Optional sound therapy features including white noise, notched music therapy, and customizable relief sounds.',
  },
];

const specs = [
  { label: 'Processing Delay', value: '<8ms' },
  { label: 'Noise Reduction', value: 'Up to 35dB' },
  { label: 'Battery Life', value: '24 hours' },
  { label: 'Bluetooth', value: '5.3 LE' },
  { label: 'Water Resistance', value: 'IP68' },
  { label: 'Channels', value: '64' },
];

const benefits = [
  {
    title: 'Restaurant Conversations',
    description: 'Follow conversations in noisy restaurants by isolating the voices of people at your table.',
    stat: '85%',
    statLabel: 'Speech clarity improvement',
  },
  {
    title: 'Crowded Events',
    description: 'Focus on one-on-one conversations at parties, conferences, and family gatherings.',
    stat: '90%',
    statLabel: 'Background noise reduction',
  },
  {
    title: 'Professional Settings',
    description: 'Excel in meetings, presentations, and phone calls with crystal-clear audio.',
    stat: '95%',
    statLabel: 'Call clarity rating',
  },
];

const faqs = [
  {
    question: 'How is LunaSound different from traditional hearing aids?',
    answer: 'LunaSound uses deep learning AI that continuously improves sound processing, not just static amplification. It separates speech from noise at the neural network level, provides real-time transcription, and integrates with your smartphone for a connected experience.',
  },
  {
    question: 'Does LunaSound require a hearing test to purchase?',
    answer: 'LunaSound works for both hearing enhancement and diagnosed hearing loss. The app includes an in-home hearing assessment that calibrates the device to your specific hearing profile. For significant hearing loss, we recommend professional audiogram calibration.',
  },
  {
    question: 'How long does the battery last?',
    answer: 'The rechargeable battery lasts up to 24 hours of continuous use with AI processing enabled. The charging case provides an additional 72 hours of charge. A 15-minute quick charge provides 6 hours of use.',
  },
  {
    question: 'Can I use LunaSound for phone calls and streaming?',
    answer: 'Yes, LunaSound connects via Bluetooth 5.3 LE to smartphones, tablets, and computers. Calls stream directly to both ears in stereo, and you can stream music, podcasts, and any audio media.',
  },
];

export default function LunaSoundPage() {
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
                Assistive Technology
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-[var(--text-primary)]">LunaSound: </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">AI-Powered Hearing</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                AI-powered hearing enhancement that uses deep learning to separate speech from noise—restoring clarity in the most challenging listening environments.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
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
                    <span>24hr Battery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>35dB Reduction</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>IP68 Rated</span>
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
                <HearingDemo />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">&lt;8ms</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Latency</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">64</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Channels</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Specs Bar */}
      <section className="py-8 border-y border-gray-200 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {specs.map((spec) => (
              <div key={spec.label} className="text-center">
                <div className="text-lg md:text-xl font-bold text-[var(--text-primary)]">{spec.value}</div>
                <div className="text-xs text-[var(--text-secondary)]">{spec.label}</div>
              </div>
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
              Neural Audio Technology
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Deep learning that continuously improves your hearing experience
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
      
      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Real-World Performance
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 text-center shadow-sm"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--accent-teal)] bg-clip-text text-transparent mb-2">
                  {benefit.stat}
                </div>
                <p className="text-[var(--text-secondary)] text-sm mb-4">{benefit.statLabel}</p>
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{benefit.title}</h3>
                <p className="text-[var(--text-secondary)]">{benefit.description}</p>
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
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
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
              Rediscover{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Conversations
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Experience crystal-clear hearing in any environment with AI-powered audio processing.
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
                <Link href="/partner">Partner With Us</Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>AI Noise Cancellation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Real-Time Processing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Personalized Settings</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
