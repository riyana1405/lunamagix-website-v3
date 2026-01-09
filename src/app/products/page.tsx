"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Accessibility,
  Stethoscope,
  ArrowRight,
  Monitor,
  Shield,
  Activity,
  BookOpen,
  Sparkles,
  Navigation,
  Armchair,
  Ear,
  Heart,
  ScanLine,
  FileText,
  CheckCircle,
  Play,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    id: "education",
    title: "Education Technology",
    description: "Immersive learning and smart campus solutions",
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-500",
    products: [
      {
        name: "LunaViz 3D",
        tagline: "Learning Leaps Off the Screen",
        description: "Immersive 3D presentations without VR headsets",
        icon: Monitor,
        href: "/products/education/lunaviz",
      },
      {
        name: "LunaWatch",
        tagline: "360° Intelligent Campus Protection",
        description: "AI-powered scene understanding for campus safety",
        icon: Shield,
        href: "/products/education/lunawatch",
      },
      {
        name: "LunaFit",
        tagline: "Your Personal AI Coach",
        description: "Vision-based coaching for sports and wellness",
        icon: Activity,
        href: "/products/education/lunafit",
      },
      {
        name: "LunaLearn",
        tagline: "The Operating System for Modern Education",
        description: "Complete education management platform",
        icon: BookOpen,
        href: "/products/education/lunalearn",
      },
      {
        name: "LunaSense",
        tagline: "Every Sense, Every Learner",
        description: "Multi-sensory engagement suite",
        icon: Sparkles,
        href: "/products/education/lunasense",
      },
    ],
  },
  {
    id: "assistive",
    title: "Assistive Technology",
    description: "AI-powered solutions for independent living",
    icon: Accessibility,
    gradient: "from-teal-500 to-cyan-500",
    products: [
      {
        name: "LunaGuide",
        tagline: "Your Loyal AI Companion",
        description: "AI pathfinding robot for visually impaired",
        icon: Navigation,
        href: "/products/assistive/lunaguide",
      },
      {
        name: "LunaMove",
        tagline: "Freedom to Move",
        description: "Adaptive autonomous wheelchair",
        icon: Armchair,
        href: "/products/assistive/lunamove",
      },
      {
        name: "LunaSound",
        tagline: "Hear the World, Your Way",
        description: "AI-enhanced hearing solutions",
        icon: Ear,
        href: "/products/assistive/lunasound",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "AI assistance for medical professionals",
    icon: Stethoscope,
    gradient: "from-amber-500 to-orange-500",
    products: [
      {
        name: "LunaCare",
        tagline: "Healing Through Immersion",
        description: "Therapeutic immersive experiences",
        icon: Heart,
        href: "/products/healthcare/lunacare",
      },
      {
        name: "LunaScan",
        tagline: "AI That Never Misses a Detail",
        description: "SAM3-powered diagnostic assistance",
        icon: ScanLine,
        href: "/products/healthcare/lunascan",
      },
      {
        name: "LunaScribe",
        tagline: "Listen, Understand, Document",
        description: "AI clinical documentation",
        icon: FileText,
        href: "/products/healthcare/lunascribe",
      },
    ],
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    gradient: "from-purple-500 to-indigo-500",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    gradient: "from-blue-500 to-cyan-500",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    gradient: "from-teal-500 to-cyan-500",
  },
  orange: {
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    gradient: "from-amber-500 to-orange-500",
  },
};

export default function ProductsPage() {
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
                  <Sparkles className="h-4 w-4" />
                  Our Products
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                AI-Powered{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Solutions designed with compassion, built for impact. Explore our suite of products for education, assistive technology, and healthcare.
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
                    Request a Demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="/assessment" className="flex items-center">
                    <Play className="mr-2 h-4 w-4 text-[var(--luna-purple)]" />
                    Free Assessment Tool
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
                    <span>11+ Products</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>3 Categories</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>100% VR-Free</span>
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
                  <GraduationCap className="h-8 w-8 text-[var(--luna-purple)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Education</div>
                  <div className="text-sm text-[var(--text-tertiary)]">5 Products</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <Accessibility className="h-8 w-8 text-[var(--accent-teal)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Assistive</div>
                  <div className="text-sm text-[var(--text-tertiary)]">3 Products</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)] col-span-2"
                >
                  <Stethoscope className="h-8 w-8 text-amber-500 mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Healthcare</div>
                  <div className="text-sm text-[var(--text-tertiary)]">3 Products</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-[1400px] px-6">
          {productCategories.map((category, categoryIndex) => {
            const styleKey = category.id === "education" ? "purple" : 
                             category.id === "assistive" ? "teal" : "orange";
            const styles = colorStyles[styleKey as keyof typeof colorStyles];
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={categoryIndex > 0 ? "mt-20" : ""}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} shadow-[var(--shadow-md)]`}
                  >
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                      {category.title}
                    </h2>
                    <p className="text-[var(--text-secondary)]">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.products.map((product, productIndex) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: productIndex * 0.1 }}
                    >
                      <Link href={product.href}>
                        <Card className="group h-full cursor-pointer border-[var(--border-default)] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                          <CardHeader>
                            <div className="flex items-center gap-3">
                              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg} group-hover:scale-110 transition-transform`}>
                                <product.icon className={`h-6 w-6 ${styles.iconColor}`} />
                              </div>
                              <div>
                                <CardTitle className="flex items-center gap-2 text-lg text-[var(--text-primary)]">
                                  {product.name}
                                  <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 text-[var(--luna-purple)]" />
                                </CardTitle>
                              </div>
                            </div>
                            <p className={`mt-3 text-sm font-semibold ${styles.iconColor}`}>
                              {product.tagline}
                            </p>
                            <CardDescription className="mt-2 text-[var(--text-secondary)]">
                              {product.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 sm:py-28 bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Free Demo Available
            </span>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Not sure which product is right for you?
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Our team can help you find the perfect solution for your needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                size="lg"
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact?demo=true">
                  Request a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
              >
                <Link href="/contact">
                  Contact Sales
                </Link>
              </Button>
            </div>
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
