"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">
        Contact Information
      </h2>
      <p className="mt-2 text-[var(--text-secondary)]">
        Reach out through any of these channels.
      </p>

      <div className="mt-8 space-y-6">
        {/* Email */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10">
            <Mail className="h-6 w-6 text-[var(--luna-purple)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              Email
            </h3>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 text-[var(--luna-purple)] hover:underline"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10">
            <Phone className="h-6 w-6 text-[var(--luna-purple)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              Phone
            </h3>
            <a
              href={`tel:${siteConfig.phone?.replace(/\s/g, '')}`}
              className="mt-1 text-[var(--luna-purple)] hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>

        {/* Address */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10">
            <MapPin className="h-6 w-6 text-[var(--luna-purple)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              Office Address
            </h3>
            <address className="mt-1 not-italic text-[var(--text-secondary)]">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.city} - {siteConfig.address.postalCode}
              <br />
              {siteConfig.address.state}, {siteConfig.address.country}
            </address>
          </div>
        </div>

        {/* Response Time */}
        <div className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--luna-purple)]/10">
            <Clock className="h-6 w-6 text-[var(--luna-purple)]" />
          </div>
          <div>
            <h3 className="font-semibold text-[var(--text-primary)]">
              Response Time
            </h3>
            <p className="mt-1 text-[var(--text-secondary)]">
              We typically respond within 24-48 hours during business days.
            </p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="mt-10">
        <div className="aspect-video overflow-hidden rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
          <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
            <MapPin className="mr-2 h-5 w-5" />
            Map - Madurai, Tamil Nadu
          </div>
        </div>
      </div>

      {/* Quick Contact Options */}
      <div className="mt-10 rounded-[var(--radius-xl)] bg-[var(--luna-purple)]/5 p-6">
        <h3 className="flex items-center gap-2 font-semibold text-[var(--text-primary)]">
          <MessageCircle className="h-5 w-5 text-[var(--luna-purple)]" />
          Quick Contact
        </h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">
          For urgent inquiries, you can also reach us through:
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--azure-blue)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            Twitter/X
          </a>
        </div>
      </div>
    </motion.div>
  );
}
