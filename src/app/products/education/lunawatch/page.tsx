import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SecurityDashboard } from "@/components/mockups/SecurityDashboard";
import {
  Shield,
  Camera,
  Brain,
  Bell,
  MapPin,
  Users,
  Lock,
  Eye,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LunaWatch - AI-Powered Campus Security",
  description:
    "360° intelligent campus protection with AI scene understanding, prognostic threat detection, and real-time behavioral analysis for schools and institutions.",
};

const features = [
  {
    icon: Brain,
    title: "AI Scene Understanding",
    description:
      "Advanced computer vision analyzes live feeds in real-time, understanding context and detecting anomalies that human operators might miss.",
  },
  {
    icon: AlertTriangle,
    title: "Prognostic Threat Detection",
    description:
      "Identifies concerning behavioral patterns before incidents occur. The system learns normal campus activity and flags deviations proactively.",
  },
  {
    icon: Users,
    title: "Behavioral Analysis",
    description:
      "Detects loitering, crowd formations, restricted area breaches, and bullying patterns without requiring facial recognition for privacy.",
  },
  {
    icon: Bell,
    title: "Instant Alerts",
    description:
      "Automated notifications to security staff, administrators, and emergency services within seconds of detecting threats.",
  },
  {
    icon: MapPin,
    title: "Zone Management",
    description:
      "Define security zones with custom rules. Different sensitivity levels for playgrounds, entry points, restricted areas, and parking lots.",
  },
  {
    icon: Lock,
    title: "Privacy-First Design",
    description:
      "Behavioral analysis without mandatory facial recognition. Faces can be blurred for non-security analytics while maintaining safety.",
  },
];

const capabilities = [
  "Real-time weapon detection",
  "Crowd density monitoring",
  "Perimeter breach alerts",
  "Vehicle license plate recognition",
  "Visitor management integration",
  "Emergency lockdown automation",
  "School bus arrival tracking",
  "Drone patrol integration",
  "Gunshot detection (audio)",
  "After-hours monitoring",
  "Automated safety audits",
  "Compliance reporting",
];

const faqs = [
  {
    question: "How does AI threat detection work?",
    answer:
      "LunaWatch uses deep learning models trained on millions of scenarios to understand normal vs. abnormal behavior. It analyzes movement patterns, body language, object detection (like weapons), crowd dynamics, and contextual factors. When something deviates from learned 'normal' patterns, it flags for human review or triggers automated responses based on severity.",
  },
  {
    question: "What about student privacy?",
    answer:
      "Privacy is fundamental to our design. LunaWatch can perform behavioral analysis without facial recognition — using clothing, movement patterns, and contextual cues instead. Administrators control what data is captured and retained. We comply with FERPA, GDPR, and local privacy regulations. Parents can be informed through transparent policies.",
  },
  {
    question: "Can it integrate with existing camera systems?",
    answer:
      "Yes. LunaWatch is designed to work with existing IP camera infrastructure. Our AI processing layer can connect to most modern CCTV systems, adding intelligence without requiring complete hardware replacement.",
  },
  {
    question: "How quickly can it detect threats?",
    answer:
      "Detection happens in real-time — typically within 1-3 seconds of a concerning behavior appearing on camera. Alert distribution to relevant personnel occurs within 5 seconds. For critical threats like weapon detection, emergency services can be automatically notified.",
  },
  {
    question: "Is this suitable for small schools?",
    answer:
      "Absolutely. LunaWatch scales from single-building schools to multi-campus universities. We offer tiered solutions that match your institution's size and budget, with the same AI capabilities at every level.",
  },
];

export default function LunaWatchPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
        {/* Subtle blur circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[var(--luna-purple)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[var(--azure-blue)]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-4 py-2 rounded-full text-sm font-semibold border border-[var(--luna-purple)]/10">
                <Shield className="h-4 w-4" />
                AI-Powered Security
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">LunaWatch</span>
              </h1>
              <p className="mt-2 text-xl font-medium text-[var(--text-primary)]">
                360° Intelligent Campus Protection
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                AI-powered security that sees what humans miss. Prognostic threat detection 
                identifies concerning patterns before incidents occur — shifting from reactive 
                response to proactive protection.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?demo=true&product=lunawatch">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-[var(--border-default)] text-[var(--text-primary)] bg-white hover:bg-[var(--bg-secondary)]">
                  <Link href="#features">View Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <SecurityDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "<3 sec", label: "Threat Detection Time" },
              { value: "99.2%", label: "Detection Accuracy" },
              { value: "50%", label: "Reduction in Security Costs" },
              { value: "24/7", label: "Continuous Monitoring" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-[var(--luna-purple)]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Advanced Security Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              State-of-the-art AI capabilities designed specifically for educational environments.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-secondary)]">
                  <feature.icon className="h-6 w-6 text-[var(--luna-purple)]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Complete Security Capabilities
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-center gap-3 rounded-[var(--radius-lg)] bg-[var(--bg-primary)] p-4 shadow-[var(--shadow-card)]"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-[var(--luna-purple)]" />
                <span className="text-[var(--text-secondary)]">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond Campus */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Beyond Campus Security
              </h2>
              <p className="mt-6 text-lg text-[var(--text-secondary)]">
                The same AI that protects campuses can be adapted for home and care settings.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Home Child Monitoring",
                  description: "Keep watch while working from home. AI alerts you to safety concerns.",
                  icon: "👶",
                },
                {
                  title: "Elderly Care",
                  description: "Fall detection and activity monitoring for aging family members.",
                  icon: "👴",
                },
                {
                  title: "Pet Supervision",
                  description: "Monitor pets while away. Alerts for unusual behavior or distress.",
                  icon: "🐕",
                },
                {
                  title: "Small Business",
                  description: "Affordable AI security for shops, offices, and small facilities.",
                  icon: "🏪",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-4 shadow-[var(--shadow-card)]"
                >
                  <div className="text-2xl">{item.icon}</div>
                  <h3 className="mt-3 font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-12">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[var(--text-secondary)]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-[var(--bg-primary)]">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Protect What Matters Most
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
            Give your community the security they deserve with AI-powered protection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              
              asChild
            >
              <Link href="/contact?demo=true&product=lunawatch">
                Schedule a Demo
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
