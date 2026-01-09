"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const footerLinks = {
  products: [
    { title: "LunaViz 3D", href: "/products/education/lunaviz" },
    { title: "LunaWatch", href: "/products/education/lunawatch" },
    { title: "LunaFit", href: "/products/education/lunafit" },
    { title: "LunaLearn", href: "/products/education/lunalearn" },
    { title: "LunaSense", href: "/products/education/lunasense" },
    { title: "LunaGuide", href: "/products/assistive/lunaguide" },
    { title: "LunaMove", href: "/products/assistive/lunamove" },
    { title: "LunaSound", href: "/products/assistive/lunasound" },
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
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Github, href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--gradient-hero)]">
      {/* CTA Section */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
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
              className="group border-[var(--border-default)] text-[var(--text-primary)] hover:bg-white hover:border-[var(--border-strong)]"
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
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="border-t border-[var(--border-light)] bg-white">
        <div className="mx-auto max-w-[1400px] px-6 py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-6">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image 
                  src="/logo-dark.png" 
                  alt="Lunamagix" 
                  width={160} 
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
                Where cutting-edge AI meets compassionate innovation — empowering
                every learner, supporting every life.
              </p>
              
              {/* Contact Info */}
              <div className="mt-6 space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--luna-purple)] shrink-0 mt-0.5" />
                  <address className="text-sm not-italic text-[var(--text-secondary)]">
                    {siteConfig.address.street}, {siteConfig.address.city} - {siteConfig.address.postalCode}
                    <br />
                    {siteConfig.address.state}, {siteConfig.address.country}
                  </address>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--luna-purple)] shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--luna-purple)] transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--luna-purple)] shrink-0" />
                  <a
                    href="tel:+911234567890"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--luna-purple)] transition-colors"
                  >
                    +91 123 456 7890
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gray-100)] text-[var(--text-tertiary)] transition-all hover:bg-gradient-to-r hover:from-[var(--luna-purple)] hover:to-[var(--azure-blue)] hover:text-white"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Products
              </h3>
              <ul className="mt-4 space-y-3">
                {footerLinks.products.slice(0, 6).map((link) => (
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

            {/* Solutions Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Solutions
              </h3>
              <ul className="mt-4 space-y-3">
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

            {/* Company & Resources Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Company
              </h3>
              <ul className="mt-4 space-y-3">
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
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Resources
              </h3>
              <ul className="mt-4 space-y-3">
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

            {/* Legal & Newsletter Column */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                Legal
              </h3>
              <ul className="mt-4 space-y-3">
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

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
                  Stay Updated
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  Monthly insights on inclusive education technology.
                </p>
                <form className="mt-4 flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="min-h-[44px] w-full rounded-lg border border-[var(--border-default)] bg-white px-3 text-sm focus:border-[var(--luna-purple)] focus:outline-none focus:ring-2 focus:ring-[var(--luna-purple)]/20 transition-all"
                    aria-label="Email for newsletter"
                  />
                  <button
                    type="submit"
                    className="min-h-[44px] rounded-lg bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] px-4 text-sm font-medium text-white transition-all hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] hover:shadow-[var(--shadow-button-hover)]"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-default)] pt-8 sm:flex-row">
            <p className="text-sm text-[var(--text-tertiary)]">
              © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
              Made with <span className="text-red-500">❤️</span> in India for the World
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
