"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Shield, Sparkles, ArrowRight, Brain, ClipboardCheck, BarChart3, FileText, Users } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Parent Questionnaire",
    description: "Brief, guided questions about your child's development and daily behaviors.",
  },
  {
    icon: BarChart3,
    title: "AI Analysis",
    description: "Advanced pattern recognition identifies areas that may benefit from professional evaluation.",
  },
  {
    icon: FileText,
    title: "Personalized Report",
    description: "Receive a detailed report with observations and recommended next steps.",
  },
  {
    icon: Users,
    title: "Professional Guidance",
    description: "Connect with qualified specialists for comprehensive evaluation if needed.",
  },
];

export function AssessmentTeaser() {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--luna-purple)] via-[var(--luna-purple-dark)] to-[var(--azure-blue)]" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-[500px] w-[500px] rounded-full bg-[var(--accent-teal)]/10 blur-[120px]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Main Content Grid */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm border border-white/20">
                <Brain className="h-4 w-4" />
                Free Developmental Screening
              </span>

              {/* Title */}
              <h2 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                NeuroPath Screening Tool
              </h2>
              <p className="mt-3 text-xl font-medium text-[var(--accent-teal-light)]">
                AI-Powered Developmental Assessment
              </p>

              {/* Description */}
              <p className="mt-6 text-lg leading-relaxed text-white/80 max-w-xl lg:max-w-none">
                Early detection enables early intervention. Our AI-powered screening tool 
                helps parents and educators identify potential developmental differences — 
                the first step toward getting the right support.
              </p>

              {/* Features Row */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6">
                {[
                  { icon: Clock, text: "15-20 minutes" },
                  { icon: Shield, text: "Privacy-first" },
                  { icon: Sparkles, text: "AI-powered insights" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                      <item.icon className="h-4 w-4 text-[var(--accent-teal-light)]" />
                    </div>
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  asChild 
                  className="bg-white text-[var(--luna-purple)] hover:bg-white/90 shadow-xl hover:shadow-2xl group font-semibold"
                >
                  <Link href="/assessment">
                    Start Free Screening
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  asChild 
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
                >
                  <Link href="/assessment">
                    Learn How It Works
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Right: Visual Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              {/* Stats Card */}
              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 sm:p-10">
                <div className="grid grid-cols-2 gap-6">
                  {/* Stat 1 */}
                  <div className="text-center p-6 rounded-2xl bg-white/10">
                    <div className="text-4xl sm:text-5xl font-bold text-white">50K+</div>
                    <div className="mt-2 text-sm text-white/70">Screenings Completed</div>
                  </div>
                  {/* Stat 2 */}
                  <div className="text-center p-6 rounded-2xl bg-white/10">
                    <div className="text-4xl sm:text-5xl font-bold text-[var(--accent-teal-light)]">98%</div>
                    <div className="mt-2 text-sm text-white/70">Accuracy Rate</div>
                  </div>
                  {/* Stat 3 */}
                  <div className="text-center p-6 rounded-2xl bg-white/10">
                    <div className="text-4xl sm:text-5xl font-bold text-white">15min</div>
                    <div className="mt-2 text-sm text-white/70">Average Duration</div>
                  </div>
                  {/* Stat 4 */}
                  <div className="text-center p-6 rounded-2xl bg-white/10">
                    <div className="text-4xl sm:text-5xl font-bold text-[var(--accent-teal-light)]">500+</div>
                    <div className="mt-2 text-sm text-white/70">Partner Schools</div>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mt-8 flex items-center justify-center gap-3 pt-6 border-t border-white/10">
                  <Shield className="h-5 w-5 text-[var(--accent-teal-light)]" />
                  <span className="text-sm text-white/80">HIPAA Compliant • Secure & Private</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Process Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20"
          >
            <h3 className="text-center text-xl font-semibold text-white mb-10">
              How It Works
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group rounded-2xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                >
                  {/* Step Number & Icon */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <step.icon className="h-6 w-6 text-[var(--luna-purple)]" />
                  </div>
                  
                  {/* Content */}
                  <h4 className="font-semibold text-[var(--text-primary)] text-lg">
                    {step.title}
                  </h4>
                  <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Disclaimer */}
          <p className="mt-12 text-center text-sm text-white/50">
            This is a preliminary screening tool, not a medical diagnosis. Results
            should be discussed with qualified healthcare professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
