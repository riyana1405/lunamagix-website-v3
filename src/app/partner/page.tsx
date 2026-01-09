"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users,
  Award,
  BookOpen,
  TrendingUp,
  Handshake,
  GraduationCap,
  Stethoscope,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const partnerTypes = [
  {
    id: "advisory",
    title: "Advisory Panel",
    description: "Shape the future of inclusive education technology",
    icon: Award,
    benefits: [
      "Lifetime access to products at cost price",
      "Direct influence on product development",
      "Co-authorship on research publications",
      "Speaking opportunities at events",
      "Early access to new features",
    ],
    whoWeSeek: [
      "Educators from elite institutions",
      "Special education professionals",
      "Clinical therapists and psychiatrists",
      "Medical professionals",
      "Technology experts in AI/ML",
    ],
  },
  {
    id: "affiliate",
    title: "Affiliate Program",
    description: "Earn while helping families access our solutions",
    icon: TrendingUp,
    benefits: [
      "Competitive revenue sharing",
      "Marketing materials provided",
      "Training and certification",
      "Dedicated partner support",
      "Performance bonuses",
    ],
    whoWeSeek: [
      "Therapists and counselors",
      "Educators and tutors",
      "Coaches and trainers",
      "Parent communities",
      "NGOs in education/disability",
    ],
  },
  {
    id: "research",
    title: "Research Collaboration",
    description: "Partner with us on groundbreaking research",
    icon: BookOpen,
    benefits: [
      "Access to anonymized datasets",
      "IRB-compliant research partnerships",
      "Joint publication opportunities",
      "Grant collaboration support",
      "Technology access for studies",
    ],
    whoWeSeek: [
      "Universities and research institutions",
      "Graduate researchers",
      "Clinical research organizations",
      "Government research bodies",
      "EdTech research groups",
    ],
  },
  {
    id: "investor",
    title: "Investor Relations",
    description: "Invest in the future of inclusive technology",
    icon: Handshake,
    benefits: [
      "Growing market opportunity",
      "Strong social impact metrics",
      "Experienced founding team",
      "Startup India recognized",
      "Clear path to sustainability",
    ],
    whoWeSeek: [
      "Impact investors",
      "EdTech-focused VCs",
      "Angel investors",
      "Family offices",
      "Corporate strategic investors",
    ],
  },
];

const colorStyles = {
  advisory: {
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  affiliate: {
    gradient: "from-green-500 to-emerald-500",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  research: {
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
  },
  investor: {
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
  },
};

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                  <Handshake className="h-4 w-4" />
                  Partner With Us
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Join Our{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Mission
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Join our mission to democratize access to cutting-edge AI and
                immersive technology for education and quality of life
                enhancement.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button 
                  size="lg" 
                  asChild 
                  className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
                >
                  <Link href="#apply">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="/about">
                    Learn About Us
                  </Link>
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-[var(--border-light)]"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>4 Partnership Types</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Startup India Recognized</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <Award className="h-8 w-8 text-amber-500 mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Advisory</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Shape our products</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <TrendingUp className="h-8 w-8 text-green-500 mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Affiliate</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Earn while helping</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <BookOpen className="h-8 w-8 text-[var(--azure-blue)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Research</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Collaborate with us</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <Handshake className="h-8 w-8 text-[var(--luna-purple)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Invest</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Impact investment</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <Sparkles className="h-4 w-4" />
              Partnership Types
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              How You Can Partner
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Choose the partnership type that best fits your expertise and goals.
            </p>
          </motion.div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {partnerTypes.map((type, index) => {
              const styles = colorStyles[type.id as keyof typeof colorStyles];
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card id={type.id} className="scroll-mt-24 group border-[var(--border-default)] hover:border-[var(--luna-purple-light)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${styles.gradient} shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform`}>
                          <type.icon className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl text-[var(--text-primary)]">{type.title}</CardTitle>
                          <CardDescription className="text-base text-[var(--text-secondary)]">
                            {type.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-[var(--success)]" />
                            Benefits
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {type.benefits.map((benefit) => (
                              <li
                                key={benefit}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--luna-purple)]" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-[var(--text-primary)] flex items-center gap-2">
                            <Users className="h-4 w-4 text-[var(--accent-teal)]" />
                            Who We&apos;re Looking For
                          </h4>
                          <ul className="mt-3 space-y-2">
                            {type.whoWeSeek.map((who) => (
                              <li
                                key={who}
                                className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                              >
                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-teal)]" />
                                {who}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="bg-[var(--bg-secondary)] py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-teal-lighter)] px-4 py-2 text-sm font-semibold text-[var(--accent-teal)]">
              <Sparkles className="h-4 w-4" />
              Apply Now
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Apply to Partner
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Tell us about yourself and how you&apos;d like to collaborate.
            </p>
          </motion.div>

          <form className="mt-12 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Organization/Institution
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  className="mt-2"
                />
              </div>
              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-[var(--text-secondary)]"
                >
                  Your Role/Title
                </label>
                <Input id="role" name="role" type="text" className="mt-2" />
              </div>
            </div>

            <div>
              <label
                htmlFor="partnerType"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                Partnership Type <span className="text-red-500">*</span>
              </label>
              <select
                id="partnerType"
                name="partnerType"
                required
                className="mt-2 flex h-11 w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2 text-sm focus:border-[var(--luna-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--luna-purple)]"
              >
                <option value="">Select partnership type</option>
                <option value="advisory">Advisory Panel</option>
                <option value="affiliate">Affiliate Program</option>
                <option value="research">Research Collaboration</option>
                <option value="investor">Investor Relations</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="expertise"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                Area of Expertise <span className="text-red-500">*</span>
              </label>
              <select
                id="expertise"
                name="expertise"
                required
                className="mt-2 flex h-11 w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2 text-sm focus:border-[var(--luna-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--luna-purple)]"
              >
                <option value="">Select your expertise</option>
                <option value="education">Education</option>
                <option value="special-education">Special Education</option>
                <option value="therapy">Therapy / Clinical</option>
                <option value="medical">Medical</option>
                <option value="technology">Technology / AI</option>
                <option value="business">Business / Investment</option>
                <option value="research">Research / Academia</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                LinkedIn Profile URL
              </label>
              <Input
                id="linkedin"
                name="linkedin"
                type="url"
                placeholder="https://linkedin.com/in/..."
                className="mt-2"
              />
            </div>

            <div>
              <label
                htmlFor="motivation"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                Why do you want to partner with us?{" "}
                <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="motivation"
                name="motivation"
                required
                placeholder="Tell us about your motivation and what you hope to achieve..."
                className="mt-2"
                rows={4}
              />
            </div>

            <div>
              <label
                htmlFor="contribution"
                className="block text-sm font-medium text-[var(--text-secondary)]"
              >
                What can you contribute? <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="contribution"
                name="contribution"
                required
                placeholder="Describe your expertise, network, or resources you can bring..."
                className="mt-2"
                rows={4}
              />
            </div>

            <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)]">
              Submit Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              The Opportunity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Be part of transforming education and accessibility.
            </p>
          </motion.div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "15M+", label: "Neurodiverse learners in India" },
              { value: "70%", label: "Schools lacking modern EdTech" },
              { value: "$3B+", label: "Indian EdTech market size" },
              { value: "∞", label: "Lives to impact" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-[var(--border-default)] shadow-sm"
              >
                <div className="text-4xl font-bold text-[var(--luna-purple)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Button 
              size="lg" 
              asChild
              className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
            >
              <Link href="#apply">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Free consultation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="h-4 w-4 text-green-500" />
                Expert guidance
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
