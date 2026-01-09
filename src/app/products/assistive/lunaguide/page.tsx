'use client';

import { motion } from 'framer-motion';
import { 
  Dog, MapPin, Navigation, Volume2, AlertTriangle, 
  Smartphone, Battery, Wifi, Shield, Heart,
  ArrowRight, Check, Compass, Eye, Zap, Sparkles, CheckCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
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
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Dog className="h-5 w-5 text-[var(--luna-purple)]" />
          LunaGuide Navigation Demo
        </h3>
        <div className="flex items-center gap-2">
          <Battery className="h-4 w-4 text-green-600" />
          <span className="text-xs text-green-600">92%</span>
          <Wifi className="h-4 w-4 text-[var(--azure-blue)] ml-2" />
        </div>
      </div>
      
      {/* Navigation Map */}
      <div className="relative h-48 bg-gradient-to-br from-[var(--luna-purple-lighter)] to-[var(--azure-blue-lighter)] rounded-xl overflow-hidden mb-4">
        {/* Path line */}
        <svg className="absolute inset-0 w-full h-full">
          <path
            d="M 20 120 Q 40 100, 60 90 Q 80 80, 100 85 Q 130 90, 150 100 Q 170 110, 200 115"
            fill="none"
            stroke="rgba(92, 45, 145, 0.3)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M 20 120 Q 40 100, 60 90 Q 80 80, 100 85 Q 130 90, 150 100 Q 170 110, 200 115"
            fill="none"
            stroke="rgba(92, 45, 145, 0.8)"
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
            <div className="w-10 h-10 bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
              <Dog className="h-5 w-5 text-white" />
            </div>
            {/* Sensor cone */}
            <motion.div 
              className="absolute -top-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-[var(--luna-purple)]/30"
              style={{ borderBottomWidth: '24px' }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </div>
        </motion.div>
        
        {/* Destination */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
            <MapPin className="h-4 w-4 text-green-600" />
            <span className="text-xs text-green-700">☕ Coffee Shop</span>
          </div>
        </div>
        
        {/* User position */}
        <div className="absolute left-4 bottom-4">
          <div className="flex items-center gap-2 bg-[var(--luna-purple-lighter)] px-3 py-1 rounded-full">
            <div className="w-2 h-2 bg-[var(--luna-purple)] rounded-full animate-pulse" />
            <span className="text-xs text-[var(--luna-purple)]">Current Location</span>
          </div>
        </div>
      </div>
      
      {/* Voice Alert */}
      {voiceAlert && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--azure-blue-lighter)] border border-[var(--azure-blue)]/30 rounded-lg p-3 mb-4 flex items-center gap-3"
        >
          <Volume2 className="h-5 w-5 text-[var(--azure-blue)]" />
          <span className="text-sm text-[var(--azure-blue-dark)]">{voiceAlert}</span>
        </motion.div>
      )}
      
      {/* Controls */}
      <div className="flex gap-3">
        <button
          onClick={() => setIsNavigating(!isNavigating)}
          className={`flex-1 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
            isNavigating 
              ? 'bg-red-100 text-red-600 border border-red-200' 
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
        <button className="px-4 py-3 bg-gray-100 rounded-xl text-[var(--text-secondary)] hover:bg-gray-200 transition-colors">
          <Volume2 className="h-5 w-5" />
        </button>
      </div>
      
      {/* Status */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-gray-50 rounded-lg py-2 border border-gray-100">
          <p className="text-lg font-bold text-[var(--text-primary)]">0.3 mi</p>
          <p className="text-xs text-[var(--text-secondary)]">Distance</p>
        </div>
        <div className="bg-gray-50 rounded-lg py-2 border border-gray-100">
          <p className="text-lg font-bold text-[var(--text-primary)]">5 min</p>
          <p className="text-xs text-[var(--text-secondary)]">ETA</p>
        </div>
        <div className="bg-gray-50 rounded-lg py-2 border border-gray-100">
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
                <span className="text-[var(--text-primary)]">LunaGuide: </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Your AI Navigation Companion</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                AI-powered robot guide companion for the visually impaired—providing safe, confident navigation through any environment with real-time obstacle detection and spatial audio.
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
                  <Link href="/products">
                    View All Products
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-[var(--border-light)]">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>15+ Mile Range</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>360° Detection</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>IP65 Waterproof</span>
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
                <RobotGuideDemo />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">30ft</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Obstacle Detection</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">8-10h</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Battery Life</div>
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
                <div className="text-lg md:text-xl font-bold text-[var(--luna-purple)]">{spec.value}</div>
                <div className="text-xs text-[var(--text-secondary)]">{spec.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 sm:py-24 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
            >
              <Sparkles className="h-4 w-4" />
              Technology
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-3xl md:text-4xl font-bold text-[var(--text-primary)]"
            >
              Advanced Mobility Technology
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-4"
            >
              Sensor fusion and AI navigation for complete environmental awareness
            </motion.p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = ["purple", "blue", "teal", "purple", "blue", "teal"];
              const colorStyles = {
                purple: { iconBg: "bg-[var(--luna-purple-lighter)]", iconColor: "text-[var(--luna-purple)]", hoverBorder: "hover:border-[var(--luna-purple-light)]" },
                blue: { iconBg: "bg-[var(--azure-blue-lighter)]", iconColor: "text-[var(--azure-blue)]", hoverBorder: "hover:border-[var(--azure-blue-light)]" },
                teal: { iconBg: "bg-[var(--accent-teal-lighter)]", iconColor: "text-[var(--accent-teal)]", hoverBorder: "hover:border-[var(--accent-teal-light)]" },
              };
              const styles = colorStyles[colors[index] as keyof typeof colorStyles];
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-white rounded-xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${styles.hoverBorder}`}
                >
                  <div className={`w-12 h-12 rounded-xl ${styles.iconBg} flex items-center justify-center mb-4`}>
                    <Icon className={`h-6 w-6 ${styles.iconColor}`} />
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
      <section className="py-20 bg-gray-50">
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
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
              >
                <p className="text-[var(--text-secondary)] text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-[var(--text-primary)] font-semibold">{testimonial.author}</p>
                  <p className="text-[var(--text-tertiary)] text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-white">
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
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
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
              Experience Independent{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Mobility
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Schedule a personalized demo to see how LunaGuide can transform daily navigation.
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
                  <span>AI-Powered Navigation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Real-Time Assistance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Easy Setup</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
