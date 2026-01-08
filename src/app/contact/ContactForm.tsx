"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, CheckCircle } from "lucide-react";

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "demo", label: "Request a Demo" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Technical Support" },
  { value: "careers", label: "Careers" },
];

const userTypes = [
  { value: "school", label: "School Administrator" },
  { value: "parent", label: "Parent" },
  { value: "therapist", label: "Therapist / Educator" },
  { value: "investor", label: "Investor" },
  { value: "other", label: "Other" },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-[var(--radius-xl)] bg-green-50 p-12 text-center">
        <CheckCircle className="h-16 w-16 text-green-500" />
        <h3 className="mt-6 text-2xl font-bold text-[var(--text-primary)]">
          Thank You!
        </h3>
        <p className="mt-2 text-[var(--text-secondary)]">
          We&apos;ve received your message and will get back to you within 24-48
          hours.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-[var(--text-primary)]">
        Send us a Message
      </h2>
      <p className="mt-2 text-[var(--text-secondary)]">
        Fill out the form below and we&apos;ll be in touch.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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
              placeholder="Your name"
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
              placeholder="you@example.com"
              className="mt-2"
            />
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="userType"
              className="block text-sm font-medium text-[var(--text-secondary)]"
            >
              I am a... <span className="text-red-500">*</span>
            </label>
            <select
              id="userType"
              name="userType"
              required
              className="mt-2 flex h-11 w-full rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2 text-sm focus:border-[var(--luna-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--luna-purple)]"
            >
              <option value="">Select one</option>
              {userTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="inquiryType"
              className="block text-sm font-medium text-[var(--text-secondary)]"
            >
              Inquiry Type <span className="text-red-500">*</span>
            </label>
            <select
              id="inquiryType"
              name="inquiryType"
              required
              className="mt-2 flex h-11 w-full rounded-[var(--radius-lg)] border border-[var(--border-default)] bg-[var(--bg-primary)] px-4 py-2 text-sm focus:border-[var(--luna-purple)] focus:outline-none focus:ring-1 focus:ring-[var(--luna-purple)]"
            >
              <option value="">Select one</option>
              {inquiryTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-[var(--text-secondary)]"
          >
            Phone Number (Optional)
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+91 XXXXX XXXXX"
            className="mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[var(--text-secondary)]"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Tell us how we can help..."
            className="mt-2"
            rows={5}
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-[var(--border-default)] text-[var(--luna-purple)] focus:ring-[var(--luna-purple)]"
          />
          <label
            htmlFor="consent"
            className="text-sm text-[var(--text-secondary)]"
          >
            I agree to the processing of my personal data in accordance with the{" "}
            <a
              href="/privacy"
              className="text-[var(--luna-purple)] hover:underline"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        <Button type="submit" size="lg" disabled={loading} className="w-full">
          {loading ? (
            "Sending..."
          ) : (
            <>
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
