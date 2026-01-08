"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Mail, MapPin, Phone, Linkedin, Twitter, Youtube, Github } from "lucide-react";

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
  company: [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/about#careers" },
    { title: "Partner With Us", href: "/partner" },
    { title: "Contact", href: "/contact" },
  ],
  resources: [
    { title: "Blog", href: "/resources/blog" },
    { title: "Whitepapers", href: "/resources/whitepapers" },
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
    <footer className="border-t border-[var(--border-default)] bg-white">
      <div className="mx-auto max-w-[1400px] px-6 py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              {/* Logo Icon */}
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--luna-purple)] to-[var(--azure-blue)] transition-transform group-hover:scale-105">
                <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-lg font-bold text-[var(--text-primary)]">
                Lunamagix
              </span>
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
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--gray-100)] text-[var(--text-tertiary)] transition-all hover:bg-[var(--luna-purple)] hover:text-white"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Products
            </h3>
            <ul className="mt-4 space-y-3">
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
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
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
            <div className="mt-8">
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
                  className="min-h-[44px] w-full rounded-lg border border-[var(--border-default)] bg-white px-3 text-sm focus:border-[var(--azure-blue)] focus:outline-none focus:ring-2 focus:ring-[var(--azure-blue)]/20 transition-all"
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
    </footer>
  );
}
