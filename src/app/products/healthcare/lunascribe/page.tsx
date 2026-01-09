'use client';

import { motion } from 'framer-motion';
import { 
  FileText, Mic, Brain, Shield, Clock, 
  Stethoscope, ClipboardList, CheckCircle, User,
  ArrowRight, Check, Zap, MessageSquare, FileCheck
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

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
    <div className="bg-gradient-to-br from-gray-900 via-violet-900/30 to-gray-900 rounded-2xl p-6 border border-violet-500/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Mic className="h-5 w-5 text-violet-400" />
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
      <div className="relative h-32 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-4 mb-4 overflow-hidden">
        {transcript ? (
          <div className="text-sm text-gray-300 space-y-1 overflow-y-auto h-full">
            {transcript.split('\n').map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={i % 2 === 0 ? 'text-violet-300' : 'text-gray-400'}
              >
                {i % 2 === 0 ? '👨‍⚕️ ' : '👤 '}{line}
              </motion.p>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500 text-sm">
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
          className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-4 mb-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <FileCheck className="h-4 w-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Generated Clinical Note</span>
          </div>
          <div className="space-y-2 text-sm">
            {structuredNote.chiefComplaint && (
              <div>
                <span className="text-gray-400">CC: </span>
                <span className="text-white">{structuredNote.chiefComplaint}</span>
              </div>
            )}
            {structuredNote.history && (
              <div>
                <span className="text-gray-400">HPI: </span>
                <span className="text-white">{structuredNote.history}</span>
              </div>
            )}
            {structuredNote.assessment && (
              <div>
                <span className="text-gray-400">Assessment: </span>
                <span className="text-white">{structuredNote.assessment}</span>
              </div>
            )}
            {structuredNote.plan && (
              <div>
                <span className="text-gray-400">Plan: </span>
                <span className="text-white whitespace-pre-line">{structuredNote.plan}</span>
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
        <div className="bg-gray-800/50 rounded-lg py-2">
          <p className="text-lg font-bold text-white">2hrs</p>
          <p className="text-xs text-gray-400">Saved Daily</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg py-2">
          <p className="text-lg font-bold text-violet-400">98%</p>
          <p className="text-xs text-gray-400">Accuracy</p>
        </div>
        <div className="bg-gray-800/50 rounded-lg py-2">
          <p className="text-lg font-bold text-green-400">HIPAA</p>
          <p className="text-xs text-gray-400">Compliant</p>
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
                <span className="text-[var(--luna-purple)] text-sm">Clinical Documentation</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">Luna</span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Scribe</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                Ambient AI documentation that listens to patient visits and automatically generates accurate, structured clinical notes—giving physicians their time back.
              </p>
              
              <p className="text-[var(--text-secondary)] mb-8">
                LunaScribe understands medical conversations, creates EHR-ready documentation, and integrates seamlessly into clinical workflows without disrupting the physician-patient relationship.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-violet-500/25"
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
              <DocumentationDemo />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 border-y border-violet-500/20 bg-violet-950/20">
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
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
              AI-Powered Documentation
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Medical-grade speech recognition with clinical understanding
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
                  className="bg-gradient-to-br from-gray-900 to-violet-900/20 rounded-2xl p-6 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-violet-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Workflow */}
      <section className="py-20 bg-violet-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 h-full">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-violet-500/30" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
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
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700"
              >
                <p className="text-gray-300 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 bg-violet-950/10">
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
              Reclaim Your Time
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join hundreds of physicians who have eliminated documentation burden with LunaScribe.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-[var(--luna-purple)] font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Request Demo
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
