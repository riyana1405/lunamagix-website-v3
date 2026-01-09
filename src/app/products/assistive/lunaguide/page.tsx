'use client';

import { motion } from 'framer-motion';
import { 
  Dog, MapPin, Navigation, Volume2, AlertTriangle, 
  Smartphone, Battery, Wifi, Shield, Heart,
  ArrowRight, Check, Compass, Eye, Zap
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function RobotGuideDemo() {
  const [isNavigating, setIsNavigating] = useState(false);
  const [obstacle, setObstacle] = useState<string | null>(null);
  const [position, setPosition] = useState({ x: 20, y: 70 });
  const [voiceAlert, setVoiceAlert] = useState('');
  
  const obstacles = [
    { x: 35, y: 60, type: 'Pedestrian', icon: '🚶' },
    { x: 55, y: 50, type: 'Bicycle', icon: '🚲' },
    { x: 75, y: 65, type: 'Stairs', icon: '🪜' },
  ];
  
  useEffect(() => {
    if (isNavigating) {
      const interval = setInterval(() => {
        setPosition(prev => {
          const newX = prev.x + 2;
          // Check for obstacles
          const nearObstacle = obstacles.find(
            o => Math.abs(o.x - newX) < 10 && Math.abs(o.y - prev.y) < 15
          );
          
          if (nearObstacle) {
            setObstacle(nearObstacle.type);
            setVoiceAlert(`${nearObstacle.type} detected ahead. Adjusting route.`);
            setTimeout(() => {
              setObstacle(null);
              setVoiceAlert('');
            }, 2000);
          }
          
          if (newX > 85) {
            setIsNavigating(false);
            setVoiceAlert('Destination reached: Coffee Shop');
            return { x: 20, y: 70 };
          }
          return { ...prev, x: newX };
        });
      }, 300);
      return () => clearInterval(interval);
    }
  }, [isNavigating]);
  
  return (
    <div className="bg-[var(--bg-primary)] rounded-2xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Dog className="h-5 w-5 text-[var(--luna-purple)]" />
          LunaGuide Navigation Demo
        </h3>
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-green-500" />
          <span className="text-xs text-green-600">92%</span>
          <Wifi className="h-4 w-4 text-[var(--luna-purple)] ml-2" />
        </div>
      </div>
      
      {/* Navigation Map */}
      <div className="relative h-48 bg-[var(--bg-secondary)] rounded-xl overflow-hidden mb-4">
        {/* Path line */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 20 120 Q 40 100, 60 90 Q 80 80, 100 85 Q 130 90, 150 100 Q 170 110, 200 115"
            fill="none"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 20 120 Q 40 100, 60 90 Q 80 80, 100 85 Q 130 90, 150 100 Q 170 110, 200 115"
            fill="none"
            stroke="rgba(59, 130, 246, 0.8)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="5,5"
          />
        </svg>
        
        {/* Obstacles */}
        {obstacles.map((obs, i) => (
          <motion.div
            key={i}
            className={`absolute text-xl ${obstacle === obs.type ? 'ring-2 ring-red-500 rounded-full' : ''}`}
            style={{ left: `${obs.x}%`, top: `${obs.y}%` }}
            animate={obstacle === obs.type ? { scale: [1, 1.2, 1] } : {}}
          >
            {obs.icon}
          </motion.div>
        ))}
        
        {/* Robot Guide */}
        <motion.div
          className="absolute"
          style={{ left: `${position.x}%`, top: `${position.y}%` }}
          animate={isNavigating ? { y: [0, -3, 0] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
              <Dog className="h-5 w-5 text-white" />
            </div>
            {/* Sensor cone */}
            <motion.div 
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-400/30"
              style={{ borderBottomWidth: '24px' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        {/* Destination */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
            <MapPin className="h-4 w-4 text-green-600" />
            <span className="text-xs text-green-700 font-medium">☕ Coffee Shop</span>
          </div>
        </div>
        
        {/* User position */}
        <div className="absolute left-4 bottom-4">
          <div className="flex items-center gap-2 bg-[var(--luna-purple)]/10 px-3 py-1 rounded-full border border-[var(--luna-purple)]/20">
            <div className="w-2 h-2 bg-[var(--luna-purple)] rounded-full animate-pulse" />
            <span className="text-xs text-[var(--luna-purple)] font-medium">Current Location</span>
          </div>
        </div>
      </div>
      
      {/* Voice Alert */}
      {voiceAlert && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--luna-purple)]/10 border border-[var(--luna-purple)]/20 rounded-lg p-3 mb-4 flex items-center gap-3"
        >
          <Volume2 className="h-5 w-5 text-[var(--luna-purple)]" />
          <span className="text-sm text-[var(--text-primary)]">{voiceAlert}</span>
        </motion.div>
      )}
      
      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={() => setIsNavigating(!isNavigating)}
          className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            isNavigating 
              ? 'bg-red-50 text-red-600 border border-red-200' 
              : 'bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white hover:opacity-90'
          }`}
        >
          {isNavigating ? (
            <>
              <AlertTriangle className="h-5 w-5" />
              Stop Navigation
            </>
          ) : (
            <>
              <Navigation className="h-5 w-5" />
              Start Navigation
            </>
          )}
        </button>
        <button className="px-4 py-3 bg-[var(--bg-secondary)] rounded-xl text-[var(--text-secondary)] hover:bg-gray-200 transition-colors border border-[var(--border-default)]">
          <Volume2 className="h-5 w-5" />
        </button>
      </div>
      
      {/* Status */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-white rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-[var(--text-primary)]">0.3 mi</p>
          <p className="text-xs text-[var(--text-secondary)]">Distance</p>
        </div>
        <div className="bg-white rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-[var(--text-primary)]">5 min</p>
          <p className="text-xs text-[var(--text-secondary)]">ETA</p>
        </div>
        <div className="bg-white rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-green-600">Clear</p>
          <p className="text-xs text-[var(--text-secondary)]">Path Status</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Eye,
    title: 'Computer Vision Navigation',
    description: '360° LIDAR and camera array detects obstacles, pedestrians, vehicles, and terrain changes up to 30 feet ahead in any lighting condition.',
  },
  {
    icon: Volume2,
    title: 'Spatial Audio Guidance',
    description: 'Bone conduction audio provides directional cues and environmental descriptions without blocking ambient sounds for safety awareness.',
  },
  {
    icon: Navigation,
    title: 'Indoor & Outdoor Mapping',
    description: 'GPS, WiFi, and Bluetooth beacons enable seamless navigation between outdoor streets and indoor spaces like malls and airports.',
  },
  {
    icon: Shield,
    title: 'Hazard Detection',
    description: 'AI identifies curbs, stairs, wet floors, overhanging obstacles, and moving hazards with immediate haptic and audio warnings.',
  },
  {
    icon: Smartphone,
    title: 'Companion App',
    description: 'Family members can share locations, set geofences, receive arrival notifications, and communicate through the robot guide.',
  },
  {
    icon: Heart,
    title: 'Emotional Support Design',
    description: 'Friendly robot companion form factor reduces stigma, with optional social features like greetings and conversation starters.',
  },
];

const specs = [
  { label: 'Range', value: '15+ miles' },
  { label: 'Obstacle Detection', value: '30 ft / 360°' },
  { label: 'Battery Life', value: '8-10 hours' },
  { label: 'Weight', value: '12 lbs' },
  { label: 'Water Resistance', value: 'IP65' },
  { label: 'Connectivity', value: '5G/LTE/WiFi' },
];

const testimonials = [
  {
    quote: "LunaGuide has given me the confidence to explore new places independently. It's like having a trusted companion who never gets lost.",
    author: "Sarah M.",
    role: "Software Engineer, Vision Impaired Since Birth",
  },
  {
    quote: "The indoor navigation is incredible. I can navigate shopping malls and airports without assistance for the first time.",
    author: "James K.",
    role: "Retired Teacher",
  },
];

const faqs = [
  {
    question: 'How does LunaGuide differ from a traditional guide dog?',
    answer: 'LunaGuide complements or provides an alternative to guide dogs. It offers precise GPS navigation, indoor mapping, real-time obstacle detection in all conditions, and never needs rest or training. It\'s ideal for those who cannot care for animals, have allergies, or want technology-enhanced mobility.',
  },
  {
    question: 'What environments can LunaGuide navigate?',
    answer: 'LunaGuide handles sidewalks, crosswalks, public transit, indoor spaces (with beacon support), rough terrain, and stairs. It works in rain, snow, darkness, and crowded environments using multi-sensor fusion.',
  },
  {
    question: 'How do users interact with LunaGuide?',
    answer: 'Primary interaction is through voice commands and bone conduction audio. A comfortable harness handle provides haptic feedback for turns and stops. The companion app allows family check-ins and remote assistance.',
  },
  {
    question: 'Is training required?',
    answer: 'LunaGuide includes a personalized onboarding program with remote support. Most users are comfortable within 2-3 sessions covering basic commands, safety features, and navigation settings.',
  },
];

export default function LunaGuidePage() {
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
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-4 py-2 rounded-full text-sm font-semibold border border-[var(--luna-purple)]/10">
                  Assistive Technology
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[var(--text-primary)]">
                Navigate with{' '}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Confidence
                </span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                AI-powered robot guide companion for the visually impaired—providing safe, confident navigation through any environment with real-time obstacle detection and spatial audio.
              </p>
              
              <p className="text-[var(--text-secondary)] mb-8">
                Inspired by guide dogs but enhanced with technology, LunaGuide offers independence through computer vision, LIDAR mapping, and intuitive voice interaction.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:opacity-90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/25"
                >
                  Request Demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] font-semibold px-8 py-4 rounded-xl transition-all duration-300 border border-[var(--border-default)]"
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
              <RobotGuideDemo />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Specs Bar */}
      <section className="py-8 border-y border-[var(--border-default)] bg-[var(--bg-secondary)]">
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
      <section className="py-20 bg-[var(--bg-primary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Advanced Mobility Technology
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Sensor fusion and AI navigation for complete environmental awareness
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
                  className="bg-white rounded-2xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)]">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              User Experiences
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <p className="text-[var(--text-secondary)] text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[var(--text-primary)] font-semibold">{testimonial.author}</p>
                  <p className="text-[var(--text-secondary)] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-[var(--bg-primary)]">
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
                className="bg-white rounded-xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{faq.question}</h3>
                <p className="text-[var(--text-secondary)]">{faq.answer}</p>
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
              Experience Independent Mobility
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo to see how LunaGuide can transform daily navigation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Schedule Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/partner"
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                Partner With Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
