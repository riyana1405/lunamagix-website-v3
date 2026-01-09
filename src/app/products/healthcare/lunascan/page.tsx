'use client';

import { motion } from 'framer-motion';
import { 
  Scan, Brain, Target, Layers, Zap, Shield,
  Eye, FileImage, Activity, CheckCircle, AlertCircle,
  ArrowRight, Check, Clock, Server
} from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';

function MedicalImagingDemo() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{ type: string; confidence: number; location: string }[]>([]);
  const [selectedLayer, setSelectedLayer] = useState('original');
  
  const startAnalysis = () => {
    setIsAnalyzing(true);
    setProgress(0);
    setResults([]);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setResults([
            { type: 'Nodule', confidence: 94, location: 'Right lower lobe' },
            { type: 'Ground glass opacity', confidence: 87, location: 'Left upper lobe' },
          ]);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };
  
  const layers = [
    { id: 'original', name: 'Original' },
    { id: 'enhanced', name: 'Enhanced' },
    { id: 'segmented', name: 'Segmented' },
    { id: 'annotated', name: 'AI Annotated' },
  ];
  
  return (
    <div className="bg-gradient-to-br from-gray-900 via-cyan-900/30 to-gray-900 rounded-2xl p-6 border border-cyan-500/20">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Scan className="h-5 w-5 text-cyan-400" />
          LunaScan Analysis Engine
        </h3>
        <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">SAM3 AI</span>
      </div>
      
      {/* Image Display */}
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden mb-4">
        {/* Simulated CT scan visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-40 h-40">
            {/* Base scan circle */}
            <div className="absolute inset-0 rounded-full bg-gray-700/50 border border-gray-600">
              {/* Lung-like shapes */}
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <ellipse cx="35" cy="50" rx="18" ry="25" fill="rgba(0,0,0,0.4)" />
                <ellipse cx="65" cy="50" rx="18" ry="25" fill="rgba(0,0,0,0.4)" />
              </svg>
            </div>
            
            {/* AI detection overlays */}
            {(selectedLayer === 'annotated' || results.length > 0) && (
              <>
                <motion.div
                  className="absolute w-6 h-6 border-2 border-red-500 rounded-full"
                  style={{ top: '55%', left: '55%' }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute w-4 h-4 border-2 border-yellow-500 rounded-full"
                  style={{ top: '35%', left: '28%' }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                />
              </>
            )}
            
            {/* Segmentation overlay */}
            {selectedLayer === 'segmented' && (
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                <ellipse cx="35" cy="50" rx="18" ry="25" fill="none" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="2" strokeDasharray="4" />
                <ellipse cx="65" cy="50" rx="18" ry="25" fill="none" stroke="rgba(34, 211, 238, 0.5)" strokeWidth="2" strokeDasharray="4" />
              </svg>
            )}
            
            {/* Enhancement overlay */}
            {selectedLayer === 'enhanced' && (
              <div className="absolute inset-0 bg-cyan-500/10 rounded-full" />
            )}
            
            {/* Scanning animation */}
            {isAnalyzing && (
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                animate={{ y: [0, 160, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </div>
        </div>
        
        {/* Progress indicator */}
        {isAnalyzing && (
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center justify-between text-xs text-cyan-400 mb-1">
              <span>Analyzing with SAM3...</span>
              <span>{progress}%</span>
            </div>
            <div className="h-1 bg-gray-700 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-cyan-500"
                animate={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Layer Selection */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {layers.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => setSelectedLayer(id)}
            className={`py-2 px-1 rounded-lg text-xs transition-all duration-300 ${
              selectedLayer === id 
                ? 'bg-cyan-500/30 text-cyan-300 border border-cyan-500/50' 
                : 'bg-gray-800/50 text-gray-400 border border-transparent hover:bg-gray-700/50'
            }`}
          >
            {name}
          </button>
        ))}
      </div>
      
      {/* Analysis Button or Results */}
      {results.length === 0 ? (
        <button
          onClick={startAnalysis}
          disabled={isAnalyzing}
          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-xl hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2"
        >
          {isAnalyzing ? (
            <>
              <motion.div
                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              />
              Analyzing...
            </>
          ) : (
            <>
              <Brain className="h-5 w-5" />
              Run AI Analysis
            </>
          )}
        </button>
      ) : (
        <div className="space-y-2">
          <p className="text-xs text-gray-400 mb-2">AI Findings:</p>
          {results.map((result, i) => (
            <div key={i} className="flex items-center justify-between bg-gray-800/50 rounded-lg p-3">
              <div className="flex items-center gap-2">
                <AlertCircle className={`h-4 w-4 ${result.confidence > 90 ? 'text-red-400' : 'text-yellow-400'}`} />
                <div>
                  <p className="text-sm text-white">{result.type}</p>
                  <p className="text-xs text-gray-400">{result.location}</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${result.confidence > 90 ? 'text-red-400' : 'text-yellow-400'}`}>
                {result.confidence}%
              </span>
            </div>
          ))}
          <button
            onClick={() => { setResults([]); setProgress(0); }}
            className="w-full py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            Reset Demo
          </button>
        </div>
      )}
    </div>
  );
}

const features = [
  {
    icon: Brain,
    title: 'SAM3 Foundation Model',
    description: 'Built on the Segment Anything Model, fine-tuned on millions of medical images for precise anatomical segmentation and anomaly detection.',
  },
  {
    icon: Target,
    title: 'Multi-Modality Support',
    description: 'Analyzes CT, MRI, X-ray, ultrasound, and pathology slides with modality-specific processing pipelines.',
  },
  {
    icon: Zap,
    title: 'Real-Time Analysis',
    description: 'Sub-second inference on edge devices enables immediate feedback during image acquisition and procedures.',
  },
  {
    icon: Layers,
    title: 'Automated Segmentation',
    description: 'Precise organ, tumor, and lesion segmentation for treatment planning, volumetric analysis, and surgical guidance.',
  },
  {
    icon: Shield,
    title: 'FDA & CE Certified',
    description: 'Cleared for clinical use with extensive validation studies. HIPAA compliant with on-premise and cloud deployment options.',
  },
  {
    icon: Eye,
    title: 'Radiologist Assistance',
    description: 'Highlights regions of interest, prioritizes worklists by urgency, and provides structured reporting assistance.',
  },
];

const applications = [
  {
    modality: 'CT Imaging',
    uses: ['Lung nodule detection', 'Liver lesion characterization', 'Coronary calcium scoring', 'Trauma assessment'],
    accuracy: '96%',
  },
  {
    modality: 'MRI Analysis',
    uses: ['Brain tumor segmentation', 'Cardiac function analysis', 'MSK injury assessment', 'Prostate lesion detection'],
    accuracy: '94%',
  },
  {
    modality: 'X-Ray',
    uses: ['Chest pathology screening', 'Bone fracture detection', 'Pneumonia identification', 'Foreign body detection'],
    accuracy: '92%',
  },
  {
    modality: 'Pathology',
    uses: ['Cell counting & classification', 'Tumor grade assessment', 'Biomarker quantification', 'Quality control'],
    accuracy: '97%',
  },
];

const stats = [
  { value: '95%', label: 'Detection Accuracy' },
  { value: '<1s', label: 'Analysis Time' },
  { value: '15M+', label: 'Training Images' },
  { value: 'FDA', label: 'Cleared' },
];

const faqs = [
  {
    question: 'How does LunaScan integrate with existing PACS systems?',
    answer: 'LunaScan integrates via DICOM, HL7, and FHIR standards with all major PACS vendors. Studies can be automatically routed for AI analysis or triggered manually. Results appear directly in your viewing software with structured reports.',
  },
  {
    question: 'What validation has LunaScan undergone?',
    answer: 'LunaScan algorithms are validated on large, diverse datasets with peer-reviewed publications. FDA 510(k) clearance includes multi-site clinical trials demonstrating safety and efficacy. We provide continuous performance monitoring and updates.',
  },
  {
    question: 'Can LunaScan be deployed on-premise?',
    answer: 'Yes, LunaScan offers both cloud and on-premise deployment. On-premise installations keep all patient data within your infrastructure, meeting the strictest data residency requirements. GPU servers or edge devices are available.',
  },
  {
    question: 'How does AI assist radiologists without replacing them?',
    answer: 'LunaScan is designed as a "second reader" that highlights findings for radiologist review. It prioritizes urgent cases, provides quantitative measurements, and drafts structured reports—but all clinical decisions remain with the physician.',
  },
];

export default function LunaScanPage() {
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
                <span className="text-[var(--luna-purple)] text-sm">Medical Imaging AI</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="text-[var(--text-primary)]">Luna</span>
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">Scan</span>
              </h1>
              
              <p className="text-xl text-[var(--text-secondary)] mb-6 leading-relaxed">
                SAM3-powered medical imaging AI that detects, segments, and quantifies pathology across CT, MRI, X-ray, and pathology with radiologist-level accuracy.
              </p>
              
              <p className="text-[var(--text-secondary)] mb-8">
                LunaScan augments radiologist capabilities with real-time AI analysis, automated segmentation, and intelligent prioritization—improving diagnostic speed and accuracy.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/25"
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
              <MedicalImagingDemo />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-12 border-y border-cyan-500/20 bg-cyan-950/20">
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
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
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
              Enterprise Medical AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Foundation model technology adapted for clinical diagnostic workflows
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
                  className="bg-gradient-to-br from-gray-900 to-cyan-900/20 rounded-2xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-cyan-400" />
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
      <section className="py-20 bg-cyan-950/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Imaging Modalities
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.modality}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">{app.modality}</h3>
                  <span className="text-cyan-400 font-bold">{app.accuracy}</span>
                </div>
                <ul className="space-y-2">
                  {app.uses.map((use) => (
                    <li key={use} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm">{use}</span>
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
              Enhance Your Radiology Workflow
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              See how LunaScan can improve diagnostic accuracy and efficiency at your institution.
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
