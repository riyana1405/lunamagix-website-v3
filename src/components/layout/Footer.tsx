"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github, ArrowRight, CheckCircle, Sparkles, Heart, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  products: [
    { title: "LunaViz 3D", href: "/products/education/lunaviz" },
    { title: "LunaWatch", href: "/products/education/lunawatch" },
    { title: "LunaFit", href: "/products/education/lunafit" },
    { title: "LunaLearn", href: "/products/education/lunalearn" },
    { title: "LunaSense", href: "/products/education/lunasense" },
    { title: "LunaGuide", href: "/products/assistive/lunaguide" },
  ],
  solutions: [
    { title: "For Schools", href: "/solutions/schools" },
    { title: "For Special Education", href: "/solutions/special-education" },
    { title: "For Coaching", href: "/solutions/coaching" },
    { title: "For Healthcare", href: "/solutions/healthcare" },
    { title: "For Parents", href: "/solutions/parents" },
    { title: "For Sports", href: "/solutions/sports" },
  ],
  company: [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/about#careers" },
    { title: "Partner With Us", href: "/partner" },
    { title: "Contact", href: "/contact" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Whitepapers", href: "/resources/whitepapers" },
    { title: "Case Studies", href: "/resources/case-studies" },
  ],
  legal: [
    { title: "Privacy Policy", href: "/privacy" },
    { title: "Terms of Service", href: "/terms" },
    { title: "Accessibility", href: "/accessibility" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: siteConfig.links.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: siteConfig.links.twitter, label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--gradient-hero)]">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-1/4 top-0 h-[800px] w-[800px] rounded-full bg-[var(--luna-purple)]/5 blur-[150px]" />
        <div className="absolute -right-1/4 bottom-0 h-[800px] w-[800px] rounded-full bg-[var(--azure-blue)]/5 blur-[150px]" />
      </div>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-24">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Get Started Today
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--text-primary)] mb-4">
              Ready to Transform{" "}
              <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                Learning?
              </span>
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Join thousands of educators and institutions already using Lunamagix to create inclusive, engaging learning experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                asChild
                className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-8"
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
                className="group border-[var(--border-default)] bg-white text-[var(--text-primary)] hover:bg-[var(--gray-50)] hover:border-[var(--luna-purple)]/30"
              >
                <Link href="/assessment">
                  Try Free Assessment
                </Link>
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-8">
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
                  <span>Setup in minutes</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="relative border-t border-[var(--border-light)]">
        <div className="mx-auto max-w-[1400px] px-6 py-16 lg:py-20">
          {/* Top Section - Logo & Newsletter */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 pb-12 border-b border-[var(--border-light)]">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <Image 
                  src="/logo-dark.png" 
                  alt="Lunamagix Logo" 
                  width={56} 
                  height={56}
                  className="h-14 w-auto object-contain"
                  unoptimized
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent tracking-wide">
                  LUNAMAGIX
                </span>
              </Link>
              <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--text-secondary)]">
                Where cutting-edge AI meets compassionate innovation — empowering
                every learner, supporting every life.
              </p>
              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-[var(--border-default)] text-[var(--text-tertiary)] shadow-[var(--shadow-xs)] transition-all duration-300 hover:text-white hover:bg-gradient-to-r hover:from-[var(--luna-purple)] hover:to-[var(--azure-blue)] hover:border-transparent hover:shadow-[var(--shadow-md)] hover:scale-105"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="lg:text-right">
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                Stay Updated
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Get monthly insights on inclusive education technology.
              </p>
              <form className="mt-4 flex flex-col sm:flex-row gap-3 lg:justify-end">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-h-[48px] w-full sm:w-72 rounded-xl border border-[var(--border-default)] bg-white px-4 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--luna-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--luna-purple)]/20 transition-all shadow-[var(--shadow-xs)]"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="min-h-[48px] inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] px-6 text-sm font-semibold text-white transition-all hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] hover:shadow-[var(--shadow-button-hover)]"
                >
                  Subscribe
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:grid-cols-5">
            {/* Products */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                Products
              </h3>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--luna-purple)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                Solutions
              </h3>
              <ul className="space-y-3">
                {footerLinks.solutions.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--luna-purple)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                Company
              </h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--luna-purple)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5 mt-8">
                Resources
              </h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--luna-purple)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                Legal
              </h3>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--luna-purple)]"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)] mb-5">
                Contact Us
              </h3>
              <ul className="space-y-4">
                <li>
                  <a 
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--luna-purple)] transition-colors group"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] group-hover:bg-[var(--luna-purple)] group-hover:text-white transition-colors">
                      <Mail className="h-4 w-4" />
                    </span>
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${siteConfig.phone?.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-[var(--text-secondary)] hover:text-[var(--luna-purple)] transition-colors group"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--azure-blue-lighter)] text-[var(--azure-blue)] group-hover:bg-[var(--azure-blue)] group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </span>
                    {siteConfig.phone}
                  </a>
                </li>
                <li>
                  <div className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--accent-teal-lighter)] text-[var(--accent-teal)] shrink-0">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <address className="not-italic leading-relaxed">
                      {siteConfig.address.city}, {siteConfig.address.state}<br />
                      {siteConfig.address.country}
                    </address>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border-light)] pt-8 md:flex-row">
            <p className="text-sm text-[var(--text-tertiary)]">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-[var(--text-tertiary)] flex items-center gap-2">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> in India for the World
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
