"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Heart, 
  Accessibility, 
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  School,
  Hospital,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    id: "education",
    title: "Education Technology",
    subtitle: "Transform Learning Experiences",
    description: "Comprehensive AI-powered solutions for modern schools, coaching centers, and educational institutions. From smart attendance to engagement analytics.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    products: ["LunaLearn", "LunaViz 3D", "LunaWatch", "LunaFit"],
    benefits: [
      "Smart attendance with facial recognition",
      "AI-powered engagement analytics",
      "Intelligent presentation system",
      "Comprehensive assessment tools"
    ],
    audiences: [
      { icon: School, label: "K-12 Schools" },
      { icon: Building2, label: "Coaching Centers" },
      { icon: Users, label: "Universities" }
    ],
    link: "/products"
  },
  {
    id: "special-education",
    title: "Special Education",
    subtitle: "Inclusive Learning for All",
    description: "Personalized IEP tracking, therapeutic experiences, and collaborative tools designed specifically for neurodiverse learners and special education centers.",
    icon: Heart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    products: ["LunaLearn IEP", "LunaSense", "LunaCare"],
    benefits: [
      "Individualized Education Program (IEP) engine",
      "Multi-sensory engagement suite",
      "Therapist-parent collaboration tools",
      "Progress tracking and analytics"
    ],
    audiences: [
      { icon: School, label: "Special Schools" },
      { icon: Users, label: "Therapy Centers" },
      { icon: Heart, label: "Parents" }
    ],
    link: "/products"
  },
  {
    id: "assistive",
    title: "Assistive Technology",
    subtitle: "Independence Through Innovation",
    description: "AI-powered mobility aids, hearing enhancement, and independence-enabling devices that help people with disabilities live fuller, more autonomous lives.",
    icon: Accessibility,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    products: ["LunaGuide", "LunaMove", "LunaSound"],
    benefits: [
      "AI pathfinding for visually impaired",
      "Adaptive autonomous wheelchairs",
      "AI-enhanced hearing solutions",
      "Voice-controlled interfaces"
    ],
    audiences: [
      { icon: Users, label: "Individuals" },
      { icon: Hospital, label: "Rehabilitation Centers" },
      { icon: Building2, label: "NGOs" }
    ],
    link: "/products"
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    subtitle: "AI-Assisted Medical Care",
    description: "Therapeutic immersion, diagnostic AI assistance, and clinical documentation automation for hospitals, clinics, and healthcare professionals.",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    products: ["LunaCare", "LunaScan", "LunaScribe"],
    benefits: [
      "VR-based therapeutic experiences",
      "SAM3-powered diagnostic assistance",
      "AI clinical documentation",
      "Patient progress tracking"
    ],
    audiences: [
      { icon: Hospital, label: "Hospitals" },
      { icon: Building2, label: "Clinics" },
      { icon: Users, label: "Therapists" }
    ],
    link: "/products"
  }
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    checkColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    checkColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    checkColor: "text-[var(--accent-teal)]",
  },
  green: {
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    checkColor: "text-green-600",
  },
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
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
                  <Sparkles className="h-4 w-4" />
                  Our Solutions
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Solutions for{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Every Need
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                From mainstream education to specialized care, our AI-powered products adapt to serve diverse communities with compassion and innovation.
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
                  <Link href="/contact?demo=true">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="/products">
                    View All Products
                  </Link>
                </Button>
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
                  <div className="text-3xl font-bold text-[var(--luna-purple)]">4</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Industry Verticals</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <div className="text-3xl font-bold text-[var(--azure-blue)]">11+</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Products</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <div className="text-3xl font-bold text-[var(--accent-teal)]">100%</div>
                  <div className="text-sm text-[var(--text-tertiary)]">VR-Free Options</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <div className="text-3xl font-bold text-[var(--success)]">360°</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Immersive Learning</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="space-y-20">
            {solutions.map((solution, index) => {
              const styleKey = solution.id === "education" ? "blue" : 
                               solution.id === "special-education" ? "purple" : 
                               solution.id === "assistive" ? "teal" : "green";
              const styles = colorStyles[styleKey as keyof typeof colorStyles];
              
              return (
                <motion.div 
                  key={solution.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center`}
                >
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${styles.iconBg}`}>
                      <solution.icon className={`h-7 w-7 ${styles.iconColor}`} />
                    </div>
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                      {solution.title}
                    </h2>
                    <p className={`mt-2 text-xl font-medium ${styles.iconColor}`}>
                      {solution.subtitle}
                    </p>
                    <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {/* Benefits */}
                    <ul className="mt-6 space-y-3">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className={`h-5 w-5 ${styles.checkColor} shrink-0 mt-0.5`} />
                          <span className="text-[var(--text-secondary)]">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Products */}
                    <div className="mt-6">
                      <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                        Featured Products
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {solution.products.map((product) => (
                          <span 
                            key={product}
                            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles.iconBg} ${styles.iconColor}`}
                          >
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <Button 
                        asChild
                        className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white"
                      >
                        <Link href={solution.link}>
                          Explore {solution.title}
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  {/* Visual Card */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className={`relative rounded-2xl bg-white p-8 shadow-[var(--shadow-lg)] border border-[var(--border-light)] hover:shadow-[var(--shadow-xl)] transition-all`}
                    >
                      {/* Accent gradient bar at top */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r ${solution.color}`} />
                      <div className="relative">
                        {/* Audiences */}
                        <p className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4">
                          Designed For
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                          {solution.audiences.map((audience, i) => (
                            <motion.div 
                              key={i} 
                              className="text-center group"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 300 }}
                            >
                              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${solution.bgColor} mb-2 group-hover:scale-110 transition-transform`}>
                                <audience.icon className={`h-6 w-6 ${solution.iconColor}`} />
                              </div>
                              <p className="text-sm text-[var(--text-primary)] font-medium">{audience.label}</p>
                            </motion.div>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="mt-8 pt-6 border-t border-[var(--border-light)]">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-3xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">98%</p>
                              <p className="text-sm text-[var(--text-secondary)]">Satisfaction Rate</p>
                            </div>
                            <div>
                              <p className="text-3xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">500+</p>
                              <p className="text-sm text-[var(--text-secondary)]">Institutions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
              Not Sure Which{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Solution Fits?
              </span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your institution or organization.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact?demo=true">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                asChild
                className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
              >
                <Link href="/assessment">
                  Try Free Assessment
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Expert guidance</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
