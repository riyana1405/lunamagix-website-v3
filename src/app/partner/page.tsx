import { Metadata } from "next";
import Link from "next/link";
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
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us",
  description:
    "Join Lunamagix's mission to democratize inclusive education technology. Advisory panel, affiliate program, research collaboration, and investor relations.",
};

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

export default function PartnerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[var(--gradient-hero)] py-20 sm:py-28">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Partner With Us
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-[var(--text-secondary)]">
              Join our mission to democratize access to cutting-edge AI and
              immersive technology for education and quality of life
              enhancement.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Types */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {partnerTypes.map((type) => (
              <Card key={type.id} id={type.id} className="scroll-mt-24">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--bg-secondary)]">
                      <type.icon className="h-7 w-7 text-[var(--luna-purple)]" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <CardDescription className="text-base">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <h4 className="font-semibold text-[var(--text-primary)]">
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
                      <h4 className="font-semibold text-[var(--text-primary)]">
                        Who We&apos;re Looking For
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {type.whoWeSeek.map((who) => (
                          <li
                            key={who}
                            className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                            {who}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              Apply to Partner
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Tell us about yourself and how you&apos;d like to collaborate.
            </p>
          </div>

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

            <Button type="submit" size="lg" className="w-full">
              Submit Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Stats/Impact */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              The Opportunity
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Be part of transforming education and accessibility.
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "15M+", label: "Neurodiverse learners in India" },
              { value: "70%", label: "Schools lacking modern EdTech" },
              { value: "$3B+", label: "Indian EdTech market size" },
              { value: "∞", label: "Lives to impact" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-[var(--luna-purple)]">
                  {stat.value}
                </div>
                <div className="mt-2 text-[var(--text-secondary)]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
