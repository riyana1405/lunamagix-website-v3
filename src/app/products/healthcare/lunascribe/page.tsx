'use client';

import { motion } from 'framer-motion';
import { 
  FileText, Mic, Brain, Shield, Clock, 
  Stethoscope, ClipboardList, CheckCircle, User,
  ArrowRight, Check, Zap, MessageSquare, FileCheck, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

function DocumentationDemo() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [structuredNote, setStructuredNote] = useState<{
    chiefComplaint?: string;
    history?: string;
    assessment?: string;
    plan?: string;
  }>({});
  
  const sampleConversation = [
    { delay: 0, text: "Good morning, Mrs. Johnson. What brings you in today?" },
    { delay: 1500, text: "I've been having persistent headaches for about two weeks now." },
    { delay: 3000, text: "Can you describe the pain? Where is it located?" },
    { delay: 4500, text: "It's mostly on the right side, throbbing pain. Gets worse in the afternoon." },
    { delay: 6000, text: "Any associated symptoms? Nausea, vision changes?" },
    { delay: 7500, text: "Some light sensitivity, but no nausea." },
  ];
  
  const startDemo = () => {
    setIsListening(true);
    setTranscript('');
    setStructuredNote({});
    
    sampleConversation.forEach(({ delay, text }) => {
      setTimeout(() => {
        setTranscript(prev => prev + (prev ? '\n' : '') + text);
      }, delay);
    });
    
    // Generate structured note
    setTimeout(() => {
      setStructuredNote({
        chiefComplaint: 'Persistent headaches x 2 weeks',
        history: 'Right-sided throbbing pain, worse in afternoon. Associated photophobia. Denies nausea, vision changes.',
        assessment: 'Probable migraine headache without aura',
        plan: '1. Trial of sumatriptan PRN\n2. Headache diary\n3. Follow up in 2 weeks',
      });
      setIsListening(false);
    }, 9000);
  };
  
  return (
    <div className="bg-[var(--bg-primary)] shadow-[var(--shadow-card)] rounded-2xl p-6 border border-[var(--border-default)]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-[var(--text-primary)] flex items-center gap-2">
          <Mic className="h-5 w-5 text-[var(--luna-purple)]" />
          Ambient Documentation
        </h3>
        {isListening && (
          <div className="flex items-center gap-2">
            <motion.div
              className="w-2 h-2 bg-red-500 rounded-full"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span className="text-xs text-red-400">Recording</span>
          </div>
        )}
      </div>
      
      {/* Conversation Panel */}
      <div className="relative h-32 bg-[var(--bg-secondary)] rounded-xl p-4 mb-4 overflow-hidden border border-[var(--border-default)]">
        {transcript ? (
          <div className="text-sm text-[var(--text-secondary)] space-y-1 overflow-y-auto h-full">
            {transcript.split('\n').map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i % 2 === 0 ? 'text-[var(--luna-purple)]' : 'text-[var(--text-secondary)]'}
              >
                {i % 2 === 0 ? '👨‍⚕️ ' : '👤 '}{line}
              </motion.p>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-[var(--text-secondary)] text-sm">
            {isListening ? (
              <div className="flex items-center gap-2">
                <motion.div
                  className="flex gap-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-violet-400 rounded-full"
                      animate={{ height: [8, 20, 8] }}
                      transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.1 }}
                    />
                  ))}
                </motion.div>
                <span>Listening to conversation...</span>
              </div>
            ) : (
              'Click "Start Demo" to see ambient documentation in action'
            )}
          </div>
        )}
      </div>
      
      {/* Structured Note */}
      {Object.keys(structuredNote).length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[var(--bg-secondary)] border border-[var(--border-default)] rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <FileCheck className="h-4 w-4 text-[var(--luna-purple)]" />
            <span className="text-sm font-medium text-[var(--luna-purple)]">Generated Clinical Note</span>
          </div>
          <div className="space-y-2 text-sm">
            {structuredNote.chiefComplaint && (
              <div>
                <span className="text-[var(--text-secondary)]">CC: </span>
                <span className="text-[var(--text-primary)]">{structuredNote.chiefComplaint}</span>
              </div>
            )}
            {structuredNote.history && (
              <div>
                <span className="text-[var(--text-secondary)]">HPI: </span>
                <span className="text-[var(--text-primary)]">{structuredNote.history}</span>
              </div>
            )}
            {structuredNote.assessment && (
              <div>
                <span className="text-[var(--text-secondary)]">Assessment: </span>
                <span className="text-[var(--text-primary)]">{structuredNote.assessment}</span>
              </div>
            )}
            {structuredNote.plan && (
              <div>
                <span className="text-[var(--text-secondary)]">Plan: </span>
                <span className="text-[var(--text-primary)] whitespace-pre-line">{structuredNote.plan}</span>
              </div>
            )}
          </div>
        </motion.div>
      )}
      
      {/* Action Button */}
      <button
        onClick={startDemo}
        disabled={isListening}
        className="w-full py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-medium rounded-xl hover:from-violet-400 hover:to-purple-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
      >
        {isListening ? (
          <>
            <motion.div
              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            />
            Processing...
          </>
        ) : Object.keys(structuredNote).length > 0 ? (
          <>
            <Check className="h-5 w-5" />
            Demo Complete - Run Again
          </>
        ) : (
          <>
            <Mic className="h-5 w-5" />
            Start Demo
          </>
        )}
      </button>
      
      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-3 text-center">
        <div className="bg-[var(--bg-secondary)] rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-[var(--text-primary)]">2hrs</p>
          <p className="text-xs text-[var(--text-secondary)]">Saved Daily</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-[var(--luna-purple)]">98%</p>
          <p className="text-xs text-[var(--text-secondary)]">Accuracy</p>
        </div>
        <div className="bg-[var(--bg-secondary)] rounded-lg py-2 border border-[var(--border-default)]">
          <p className="text-lg font-bold text-green-500">HIPAA</p>
          <p className="text-xs text-[var(--text-secondary)]">Compliant</p>
        </div>
      </div>
    </div>
  );
}

const features = [
  {
    icon: Mic,
    title: 'Ambient Listening',
    description: 'Passively captures physician-patient conversations without disrupting natural clinical workflow or requiring voice commands.',
  },
  {
    icon: Brain,
    title: 'Medical NLP',
    description: 'Purpose-built language model understands medical terminology, differential diagnosis, and clinical reasoning patterns.',
  },
  {
    icon: ClipboardList,
    title: 'Structured Output',
    description: 'Automatically formats documentation into standard clinical note sections: CC, HPI, ROS, PE, Assessment, and Plan.',
  },
  {
    icon: Stethoscope,
    title: 'EHR Integration',
    description: 'Direct integration with Epic, Cerner, and other major EHR systems. Notes appear in patient charts ready for review.',
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant',
    description: 'End-to-end encryption, HIPAA-compliant cloud processing, with optional on-premise deployment for sensitive environments.',
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Physicians report saving 2+ hours daily on documentation, reducing burnout and increasing time with patients.',
  },
];

const workflow = [
  {
    step: 1,
    title: 'Conversation',
    description: 'Physician conducts visit naturally. LunaScribe listens via room microphone or mobile app.',
  },
  {
    step: 2,
    title: 'Processing',
    description: 'AI transcribes and identifies clinical content, distinguishing medical discussion from small talk.',
  },
  {
    step: 3,
    title: 'Structuring',
    description: 'Content is organized into standard note format with appropriate medical terminology and abbreviations.',
  },
  {
    step: 4,
    title: 'Review',
    description: 'Physician reviews generated note, makes any edits, and signs off. Integrates directly to EHR.',
  },
];

const stats = [
  { value: '2hrs', label: 'Daily Time Saved' },
  { value: '98%', label: 'Transcription Accuracy' },
  { value: '30s', label: 'Note Generation' },
  { value: '500+', label: 'Clinical Sites' },
];

const testimonials = [
  {
    quote: "LunaScribe has transformed my practice. I'm finally home for dinner with my family instead of finishing notes at midnight.",
    author: "Dr. Sarah Chen",
    role: "Family Medicine Physician",
  },
  {
    quote: "The accuracy is remarkable. It captures clinical nuances I would have missed typing notes hours later from memory.",
    author: "Dr. Michael Torres",
    role: "Internal Medicine",
  },
];

const faqs = [
  {
    question: 'How accurate is the transcription?',
    answer: 'LunaScribe achieves 98%+ accuracy on medical transcription, trained on millions of clinical encounters. It continuously learns and improves with use. All notes are reviewed by physicians before signing, ensuring complete accuracy.',
  },
  {
    question: 'Is patient consent required?',
    answer: 'Yes, we provide consent workflows including signage, verbal consent capture, and EHR documentation. Most patients appreciate that their physician can focus on them rather than a computer screen.',
  },
  {
    question: 'How does LunaScribe handle multiple speakers?',
    answer: 'Advanced speaker diarization distinguishes between physician, patient, and family members. The AI understands clinical context to correctly attribute symptoms to patients and instructions to physicians.',
  },
  {
    question: 'Can LunaScribe work offline?',
    answer: 'LunaScribe offers an offline mode for environments with limited connectivity. Audio is securely stored and processed when connection is restored. On-premise deployment is available for organizations requiring no cloud processing.',
  },
];

export default function LunaScribePage() {
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
                <span className="text-[var(--text-primary)]">LunaScribe: </span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">AI Documentation</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed max-w-xl lg:mx-0 mx-auto">
                Ambient AI documentation that listens to patient visits and automatically generates accurate, structured clinical notes.
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
                    <span>HIPAA Compliant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>EHR Integrated</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>99% Accuracy</span>
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
                <DocumentationDemo />
              </div>
              
              {/* Floating Stats Card - Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -left-4 top-1/4 hidden lg:block"
              >
                <div className="rounded-xl bg-white border border-[var(--border-default)] p-4 shadow-[var(--shadow-lg)]">
                  <div className="text-2xl font-bold text-[var(--luna-purple)]">2hrs</div>
                  <div className="text-xs text-[var(--text-tertiary)]">Saved Daily</div>
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
                  <div className="text-2xl font-bold text-[var(--success)]">50+</div>
                  <div className="text-xs text-[var(--text-tertiary)]">EHR Systems</div>
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
              AI-Powered Documentation
            </h2>
            <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
              Medical-grade speech recognition with clinical understanding
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
      
      {/* Workflow */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              How It Works
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {workflow.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[var(--bg-primary)] rounded-2xl p-6 border border-[var(--border-default)] shadow-[var(--shadow-card)] h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[var(--luna-purple)]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-4">
              Physician Feedback
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
                className="bg-[var(--bg-primary)] rounded-2xl p-8 border border-[var(--border-default)] shadow-[var(--shadow-card)]"
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
      <section className="py-20 bg-[var(--bg-secondary)]">
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
              Reclaim Your{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Time
              </span>
            </h2>
            <p className="text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto text-lg">
              Join hundreds of physicians who have eliminated documentation burden with LunaScribe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
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
                  <span>EHR Integration</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>99% Accuracy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
