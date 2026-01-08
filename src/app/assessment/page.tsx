import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Sparkles,
  Clock,
  Shield,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  FileText,
  Users,
  Brain,
  Heart,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Lumina Screen - Free Neurodevelopmental Screening Tool",
  description:
    "Free AI-powered online neurodevelopmental screening tool for early detection. 15-20 minutes, privacy-first, with personalized recommendations.",
};

const howItWorks = [
  {
    step: 1,
    title: "Parent Questionnaire",
    description:
      "Brief, guided questions about your child's development, behavior, and daily activities.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Optional Observation",
    description:
      "Webcam-based behavioral observation with clear consent (completely optional).",
    icon: Users,
  },
  {
    step: 3,
    title: "AI Analysis",
    description:
      "Advanced pattern recognition powered by Nvidia Metropolis identifies areas for attention.",
    icon: Brain,
  },
  {
    step: 4,
    title: "Personalized Report",
    description:
      "Detailed report with observations, recommendations, and suggested next steps.",
    icon: Heart,
  },
];

const features = [
  { icon: Clock, text: "15-20 minutes to complete" },
  { icon: Shield, text: "Privacy-first, GDPR compliant" },
  { icon: Sparkles, text: "AI-powered insights" },
  { icon: CheckCircle, text: "Downloadable PDF report" },
];

export default function AssessmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-teal-800 to-cyan-900 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-teal-200">
                <Sparkles className="h-4 w-4" />
                Free Tool
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Lumina Screen
              </h1>
              <p className="mt-2 text-xl font-medium text-teal-100">
                Free Online Neurodevelopmental Screening Tool
              </p>
              <p className="mt-6 text-lg leading-relaxed text-teal-100/90">
                Early detection enables early intervention. Our AI-powered
                screening tool helps parents and educators identify potential
                developmental differences — the first step toward getting the
                right support.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                {features.map((feature) => (
                  <div
                    key={feature.text}
                    className="flex items-center gap-2 text-teal-100"
                  >
                    <feature.icon className="h-5 w-5 text-teal-300" />
                    {feature.text}
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Button
                  size="lg"
                  asChild
                  className="bg-white text-teal-900 hover:bg-teal-50"
                >
                  <Link href="#start">
                    Start Free Screening
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid gap-4 sm:grid-cols-2">
              {howItWorks.map((item) => (
                <Card
                  key={item.step}
                  className="border-teal-700/50 bg-white/10 backdrop-blur-sm"
                >
                  <CardHeader>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500/20 text-lg font-bold text-teal-300">
                      {item.step}
                    </div>
                    <CardTitle className="text-white">{item.title}</CardTitle>
                    <CardDescription className="text-teal-200">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Disclaimers */}
      <section className="border-b border-amber-200 bg-amber-50 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <AlertTriangle className="h-6 w-6 shrink-0 text-amber-600" />
            <div>
              <h2 className="font-semibold text-amber-900">
                Important Disclaimer
              </h2>
              <ul className="mt-2 space-y-1 text-sm text-amber-800">
                <li>
                  • This is a preliminary screening tool, not a medical
                  diagnosis.
                </li>
                <li>
                  • Results should be discussed with qualified healthcare
                  professionals.
                </li>
                <li>
                  • Early detection enables early intervention — that&apos;s why this
                  tool exists.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Start Assessment Section */}
      <section id="start" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Begin Your Free Screening
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              The screening takes 15-20 minutes and can be saved and resumed at
              any time.
            </p>
          </div>

          <div className="mt-12 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)]">
            {/* Placeholder for assessment tool */}
            <div className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-teal-100">
                <Sparkles className="h-12 w-12 text-teal-600" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--text-primary)]">
                Assessment Tool Coming Soon
              </h3>
              <p className="mt-2 text-[var(--text-secondary)]">
                We&apos;re putting the finishing touches on our screening tool.
                Sign up to be notified when it launches.
              </p>
              <div className="mt-8">
                <form className="mx-auto flex max-w-md gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 rounded-lg border border-[var(--border-default)] px-4 py-3 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                  <Button type="submit">Notify Me</Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4">
            <Shield className="h-8 w-8 shrink-0 text-teal-600" />
            <div>
              <h2 className="text-2xl font-bold text-[var(--text-primary)]">
                Your Privacy Matters
              </h2>
              <div className="mt-6 space-y-4 text-[var(--text-secondary)]">
                <p>
                  We take data privacy extremely seriously, especially when it
                  comes to children&apos;s information.
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>All data is encrypted in transit and at rest</li>
                  <li>We comply with GDPR and local data protection laws</li>
                  <li>
                    You can request complete deletion of your data at any time
                  </li>
                  <li>We never sell or share your data with third parties</li>
                  <li>
                    Session data can be deleted immediately after receiving your
                    report
                  </li>
                </ul>
                <p>
                  <Link
                    href="/privacy"
                    className="text-teal-600 hover:underline"
                  >
                    Read our full Privacy Policy →
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">
            Helpful Resources
          </h2>
          <p className="mt-2 text-[var(--text-secondary)]">
            Learn more about neurodevelopmental conditions and early
            intervention.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Understanding Developmental Milestones",
                description:
                  "Learn what to expect at different ages and when variations might warrant attention.",
                href: "#",
              },
              {
                title: "The Importance of Early Intervention",
                description:
                  "Research shows that early support leads to better outcomes. Here's what the science says.",
                href: "#",
              },
              {
                title: "Finding Professional Support",
                description:
                  "A guide to finding qualified specialists and navigating the evaluation process.",
                href: "#",
              },
            ].map((resource) => (
              <Link key={resource.title} href={resource.href}>
                <Card className="h-full transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Message */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Heart className="mx-auto h-12 w-12 text-[var(--luna-purple)]" />
          <h2 className="mt-6 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            You&apos;re Not Alone
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            Whatever the results of this screening, remember that seeking
            information is an act of love. Millions of families are on similar
            journeys, and support is available. Every child has unique
            strengths, and early understanding helps us nurture them.
          </p>
        </div>
      </section>
    </>
  );
}
