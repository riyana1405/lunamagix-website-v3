'use client';

import { motion } from 'framer-motion';
import { 
  Armchair, Mic, Navigation, Battery, Wifi, 
  Shield, Heart, Smartphone, MapPin, Gauge,
  ArrowRight, Check, Zap, Settings, AlertTriangle, Sparkles, CheckCircle
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

function WheelchairDemo() {
  const [mode, setMode] = useState<'manual' | 'voice' | 'auto'>('voice');
  const [speed, setSpeed] = useState(50);
  const [command, setCommand] = useState('');
  const [status, setStatus] = useState('Ready');
  
  const processCommand = (cmd: string) => {
    setCommand(cmd);
    setStatus('Processing...');
    setTimeout(() => {
      if (cmd.toLowerCase().includes('coffee')) {
        setStatus('Navigating to Coffee Shop');
      } else if (cmd.toLowerCase().includes('stop')) {
        setStatus('Stopped');
      } else if (cmd.toLowerCase().includes('home')) {
        setStatus('Navigating Home');
      } else {
        setStatus('Command recognized');
      }
    }, 1000);
    setTimeout(() => setCommand(''), 2000);
  };
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Armchair className="h-5 w-5 text-[var(--luna-purple)]" />
          LunaMove Control Center
        </h3>
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-green-500" />
          <span className="text-xs text-green-500">85%</span>
          <Wifi className="h-4 w-4 text-[var(--accent-teal)] ml-2" />
        </div>
      </div>
      
      {/* Mode Selection */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { id: 'manual', label: 'Manual', icon: Settings },
          { id: 'voice', label: 'Voice', icon: Mic },
          { id: 'auto', label: 'Auto-Nav', icon: Navigation },
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setMode(id as typeof mode)}
            className={`p-3 rounded-xl transition-all duration-300 flex flex-col items-center ${
              mode === id 
                ? 'bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] text-white' 
                : 'bg-gray-50 text-[var(--text-secondary)] hover:bg-gray-100 border border-gray-200'
            }`}
          >
            <Icon className="h-5 w-5 mb-1" />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
      
      {/* Visualization */}
      <div className="relative h-40 bg-gray-50 rounded-xl overflow-hidden mb-4 border border-gray-200">
        {/* Wheelchair visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="relative"
            animate={status.includes('Navigating') ? { x: [0, 10, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-20 h-20 bg-gradient-to-br from-[var(--luna-purple)]/20 to-[var(--accent-teal)]/20 rounded-full flex items-center justify-center">
              <Armchair className="h-10 w-10 text-[var(--luna-purple)]" />
            </div>
            {/* Sensor rings */}
            {mode !== 'manual' && (
              <>
                <motion.div
                  className="absolute inset-0 border-2 border-[var(--luna-purple)]/30 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 border-2 border-[var(--luna-purple)]/20 rounded-full"
                  animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
              </>
            )}
          </motion.div>
        </div>
        
        {/* Status overlay */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
          <div className="bg-white/90 px-3 py-1 rounded-lg border border-gray-200">
            <p className="text-xs text-[var(--luna-purple)]">{status}</p>
          </div>
          <div className="bg-white/90 px-3 py-1 rounded-lg border border-gray-200 flex items-center gap-2">
            <Gauge className="h-3 w-3 text-[var(--text-secondary)]" />
            <span className="text-xs text-[var(--text-primary)]">{speed}%</span>
          </div>
        </div>
        
        {/* Voice command indicator */}
        {command && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-3 left-1/2 -translate-x-1/2 bg-[var(--luna-purple)]/10 border border-[var(--luna-purple)]/30 px-4 py-2 rounded-full"
          >
            <p className="text-sm text-[var(--luna-purple)] flex items-center gap-2">
              <Mic className="h-4 w-4" />
              "{command}"
            </p>
          </motion.div>
        )}
      </div>
      
      {/* Voice Commands */}
      {mode === 'voice' && (
        <div className="space-y-2 mb-4">
          <p className="text-xs text-[var(--text-secondary)] mb-2">Try a voice command:</p>
          <div className="grid grid-cols-3 gap-2">
            {['Go to coffee shop', 'Take me home', 'Stop'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => processCommand(cmd)}
                className="px-3 py-2 bg-gray-50 hover:bg-[var(--luna-purple)]/10 rounded-lg text-xs text-[var(--text-secondary)] hover:text-[var(--luna-purple)] transition-colors border border-gray-200 hover:border-[var(--luna-purple)]/30"
              >
                "{cmd}"
              </button>
            ))}
          </div>
        </div>
      )}
      
      {/* Speed Control */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-[var(--text-secondary)]">Speed Limit</span>
          <span className="text-sm text-[var(--luna-purple)]">{speed}%</span>
        </div>
        <input
          type="range"
          min="10"
          max="100"
          value={speed}
          onChange={(e) => setSpeed(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[var(--luna-purple)]"
        />
        <div className="flex justify-between text-xs text-[var(--text-secondary)] mt-1">
          <span>Safe</span>
          <span>Moderate</span>
          <span>Fast</span>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Mic,
    title: 'Voice-First Control',
    description: 'Natural language commands like "take me to the kitchen" or "go to my favorite coffee shop" for hands-free operation.',
  },
  {
    icon: Navigation,
    title: 'Autonomous Navigation',
    description: 'AI pathfinding with obstacle avoidance navigates complex environments—homes, offices, malls—without constant user input.',
  },
  {
    icon: Shield,
    title: 'Collision Prevention',
    description: '360° sensors detect obstacles, drop-offs, and moving hazards with automatic stopping and re-routing.',
  },
  {
    icon: Smartphone,
    title: 'Caregiver App',
    description: 'Family and caregivers can monitor location, battery status, set geofences, and provide remote assistance.',
  },
  {
    icon: Zap,
    title: 'Smart Home Integration',
    description: 'Connects with elevators, automatic doors, and smart home devices for truly seamless indoor mobility.',
  },
  {
    icon: Heart,
    title: 'Health Monitoring',
    description: 'Optional seat sensors track posture, pressure points, and sitting duration with repositioning reminders.',
  },
];

const specs = [
  { label: 'Max Speed', value: '6 mph' },
  { label: 'Range', value: '25 miles' },
  { label: 'Weight Capacity', value: '300 lbs' },
  { label: 'Turning Radius', value: '24 in' },
  { label: 'Charge Time', value: '4 hours' },
  { label: 'Obstacle Detection', value: '360°' },
];

const useCases = [
  {
    title: 'Home Independence',
    description: 'Navigate multi-room homes, avoid furniture and pets, and dock at charging stations automatically.',
    outcomes: ['Room-to-room voice navigation', 'Pet and child detection', 'Auto-docking charging'],
  },
  {
    title: 'Workplace Accessibility',
    description: 'Map office layouts, navigate to meeting rooms, and integrate with building access systems.',
    outcomes: ['Meeting room navigation', 'Elevator integration', 'Desk-height adjustments'],
  },
  {
    title: 'Community Mobility',
    description: 'Navigate outdoor pathways, shopping centers, and public spaces with GPS and beacon support.',
    outcomes: ['Store-to-store navigation', 'Crosswalk detection', 'Curb cut identification'],
  },
];

const faqs = [
  {
    question: 'How does voice control work?',
    answer: 'LunaMove uses advanced speech recognition that works offline for privacy. You can give natural commands like "go to the bedroom" or "turn around." It learns your voice, home layout, and frequently visited locations over time.',
  },
  {
    question: 'Is LunaMove safe for users with cognitive impairments?',
    answer: 'Yes, LunaMove includes safety features like geofencing, automatic stopping, caregiver alerts, and simplified control modes. It prevents navigation to dangerous areas and can require caregiver approval for certain destinations.',
  },
  {
    question: 'Can LunaMove handle outdoor terrain?',
    answer: 'LunaMove handles most outdoor surfaces including sidewalks, grass, and light gravel. The all-terrain variant includes enhanced suspension and larger wheels for rougher conditions. It detects curbs and slopes, alerting users to potential hazards.',
  },
  {
    question: 'How does smart home integration work?',
    answer: 'LunaMove connects via WiFi to compatible smart home systems. It can call elevators, open automatic doors, adjust lights, and communicate with other IoT devices. Setup includes mapping your home and connecting supported devices.',
  },
];

export default function LunaMovePage() {
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
                <span className="text-[var(--text-primary)]">LunaMove: </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Voice-Controlled Freedom</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                Voice-controlled autonomous wheelchair with AI navigation—empowering independence through intuitive, hands-free mobility.
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
                    <span>25 Mile Range</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Voice Control</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>360° Safety</span>
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
                <WheelchairDemo />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">6mph</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Max Speed</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">300lb</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Capacity</div>
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
              Intelligent Mobility Features
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              AI-powered navigation and safety for complete independence
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
      
      {/* Use Cases */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Where LunaMove Excels
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3">{useCase.title}</h3>
                <p className="text-[var(--text-secondary)] mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.outcomes.map((outcome) => (
                    <li key={outcome} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-[var(--accent-teal)] flex-shrink-0 mt-0.5" />
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
              Experience Hands-Free{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Mobility
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Schedule a demo to see how LunaMove can restore independence and freedom.
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
                  <span>Voice & Gesture Control</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Brain-Computer Interface</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Personalized Calibration</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
