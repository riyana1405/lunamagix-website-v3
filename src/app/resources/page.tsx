"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, FileText, Building2, ArrowRight, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    id: "blog",
    title: "Blog",
    description: "Insights and updates on AI in education, accessibility technology, and healthcare innovation. Stay informed with our latest articles.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-600",
    href: "/resources/blog",
    cta: "Read Articles"
  },
  {
    id: "whitepapers",
    title: "Whitepapers",
    description: "In-depth research papers and technical documentation on our products, methodologies, and the science behind our solutions.",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    href: "/resources/whitepapers",
    cta: "Download Whitepapers"
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Real-world success stories from schools, healthcare institutions, and organizations that have implemented our solutions.",
    icon: Building2,
    color: "from-green-500 to-emerald-600",
    href: "/resources/case-studies",
    cta: "View Case Studies"
  }
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    gradient: "from-purple-500 to-pink-600",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    gradient: "from-blue-500 to-indigo-600",
  },
  green: {
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    gradient: "from-green-500 to-emerald-600",
  },
};

export default function ResourcesPage() {
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
                  Resources
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Knowledge &{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Insights
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Explore our collection of articles, research papers, and success stories to learn more about AI-powered education and assistive technology.
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
                  <Link href="/resources/blog">
                    Explore Blog
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  asChild 
                  className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--border-strong)]"
                >
                  <Link href="/resources/whitepapers">
                    <FileText className="mr-2 h-4 w-4 text-[var(--luna-purple)]" />
                    Whitepapers
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
                    <span>Research-Backed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Free to Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Regular Updates</span>
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
                  <BookOpen className="h-8 w-8 text-[var(--luna-purple)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Blog</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Latest Articles</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                >
                  <FileText className="h-8 w-8 text-[var(--azure-blue)] mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Whitepapers</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Deep Research</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)] col-span-2"
                >
                  <Building2 className="h-8 w-8 text-green-600 mb-2" />
                  <div className="text-lg font-bold text-[var(--text-primary)]">Case Studies</div>
                  <div className="text-sm text-[var(--text-tertiary)]">Real Success Stories</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
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
              Explore
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Resource Categories
            </h2>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {resources.map((resource, index) => {
              const styleKey = resource.id === "blog" ? "purple" : 
                               resource.id === "whitepapers" ? "blue" : "green";
              const styles = colorStyles[styleKey as keyof typeof colorStyles];
              
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={resource.href}
                    className="group block h-full relative rounded-2xl border border-[var(--border-default)] bg-white p-8 shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2"
                  >
                    <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${resource.color} shadow-[var(--shadow-md)] group-hover:scale-110 transition-transform mb-6`}>
                      <resource.icon className="h-7 w-7 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)] transition-colors">
                      {resource.title}
                    </h2>
                    <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                      {resource.description}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-semibold text-[var(--luna-purple)]">
                      {resource.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-28 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid gap-12 lg:grid-cols-2 items-center"
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--azure-blue-lighter)] px-4 py-2 text-sm font-semibold text-[var(--azure-blue)]">
                <Sparkles className="h-4 w-4" />
                Newsletter
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Stay Updated
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                Subscribe to our newsletter for the latest insights on AI in education, accessibility, and healthcare.
              </p>
              <ul className="mt-6 space-y-3">
                {["Weekly insights and articles", "Product updates and releases", "Industry news and trends"].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--azure-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-[var(--border-default)] shadow-[var(--shadow-lg)]">
              <h3 className="text-xl font-bold text-[var(--text-primary)]">Subscribe Now</h3>
              <p className="mt-2 text-[var(--text-secondary)]">Join thousands of educators and innovators.</p>
              <form className="mt-6 space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-[var(--border-default)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--luna-purple)] focus:border-[var(--luna-purple)]"
                />
                <Button className="w-full bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Have Questions?
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Our team is here to help you understand how our solutions can work for your specific needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
              >
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
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
