import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { HolographicDisplay } from "@/components/mockups/HolographicDisplay";
import {
  Monitor,
  Sparkles,
  Hand,
  Mic,
  Camera,
  Layers,
  Users,
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Zap,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LunaViz 3D - Immersive 3D Presentations Without VR",
  description:
    "Revolutionary 3D holographic presentation system with gesture control. Learning leaps off the screen without VR headsets - perfect for all ages including children.",
};

const features = [
  {
    icon: Layers,
    title: "True 3D Holographic Display",
    description:
      "Light-field technology projects volumetric images viewable from multiple angles without any headset or glasses. Students can gather around and explore 3D content collaboratively.",
  },
  {
    icon: Hand,
    title: "Gesture Control Interface",
    description:
      "Advanced hand tracking sensors detect natural gestures - rotate, zoom, and interact with 3D objects using intuitive hand movements. No controllers needed.",
  },
  {
    icon: Mic,
    title: "Voice-Activated Content",
    description:
      "AI understands natural language commands. Say 'show me the heart' or 'zoom into the mitochondria' and watch content respond instantly.",
  },
  {
    icon: Camera,
    title: "Real Object Scanning",
    description:
      "Transform physical objects into 3D models in seconds. Students can scan specimens, artifacts, or creations and explore them in holographic form.",
  },
  {
    icon: Sparkles,
    title: "AI Content Studio",
    description:
      "Rapidly create stunning 3D presentations from text descriptions. Type 'solar system with orbital paths' and AI generates interactive 3D content.",
  },
  {
    icon: Eye,
    title: "Sensory Customization",
    description:
      "Adjust brightness, animation speed, and audio levels for sensory-sensitive learners. VR-free means no motion sickness or age restrictions.",
  },
];

const useCases = [
  {
    title: "K-12 Science Education",
    description: "Explore DNA structures, planetary systems, chemical reactions, and human anatomy in true 3D.",
    image: "🔬",
  },
  {
    title: "Special Education",
    description: "Sensory-friendly immersive learning without VR headset discomfort. Safe for all ages.",
    image: "💡",
  },
  {
    title: "NEET/Medical Prep",
    description: "Detailed anatomical models for medical entrance exam preparation with 360° exploration.",
    image: "🩺",
  },
  {
    title: "Architecture & Design",
    description: "Walk through building designs and engineering models before they're built.",
    image: "🏗️",
  },
];

const faqs = [
  {
    question: "How is this different from VR headsets?",
    answer:
      "Unlike VR headsets, LunaViz 3D uses light-field display technology that projects true holographic images in open space. Multiple people can view and interact simultaneously without any headwear. This eliminates motion sickness, allows for natural eye contact, and is safe for children of all ages without the restrictions that VR headsets have.",
  },
  {
    question: "What subjects work best with 3D visualization?",
    answer:
      "Sciences (biology, chemistry, physics), mathematics (geometry, graphs), geography, history (3D historical reconstructions), art, engineering, and medicine. Any subject with spatial concepts benefits enormously from 3D visualization.",
  },
  {
    question: "Can teachers create their own 3D content?",
    answer:
      "Yes! Our AI Content Studio allows teachers to generate 3D content from text descriptions or import existing 3D models. We also provide a library of thousands of pre-built educational 3D assets.",
  },
  {
    question: "What hardware is required?",
    answer:
      "LunaViz 3D is a complete hardware-software solution. The display unit includes integrated gesture sensors and processing. It connects to standard electrical outlets and requires no special infrastructure.",
  },
  {
    question: "Is it suitable for neurodiverse learners?",
    answer:
      "Absolutely. The system was designed with neurodiverse learners in mind. Sensory levels are fully customizable, there's no restrictive headwear, and multi-sensory engagement helps various learning styles. The shared viewing experience also supports social learning.",
  },
];

export default function LunaVizPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
                <Monitor className="h-7 w-7 text-white" />
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                LunaViz 3D
              </h1>
              <p className="mt-2 text-xl font-medium text-[var(--luna-purple)]">
                Learning Leaps Off the Screen
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                Revolutionary 3D holographic presentation technology that brings complex concepts to life. 
                No VR headsets required — perfect for classrooms where everyone can see, interact, and learn together.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?demo=true&product=lunaviz">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HolographicDisplay />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Zap,
                title: "No VR Headsets",
                description: "Safe for all ages, no motion sickness, natural social interaction",
              },
              {
                icon: Users,
                title: "Collaborative Learning",
                description: "Entire class views and interacts with 3D content simultaneously",
              },
              {
                icon: GraduationCap,
                title: "Any Subject",
                description: "From biology to history — AI generates content instantly",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 text-center shadow-[var(--shadow-card)]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-[var(--radius-lg)] bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)]">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Cutting-Edge Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Powered by the latest advances in holographic displays, gesture recognition, and AI content generation.
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

      {/* Use Cases */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Perfect For
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)]"
              >
                <div className="text-4xl">{useCase.image}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neurodiverse Benefits */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Designed for Inclusive Learning
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              LunaViz 3D was created with neurodiverse learners as a primary consideration.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              "VR-free experience eliminates discomfort for sensory-sensitive children",
              "No age restrictions — safe for early childhood education",
              "Customizable brightness, speed, and audio levels",
              "Multi-sensory engagement supports various learning styles",
              "Shared viewing promotes natural social interaction",
              "Gesture control builds motor skill coordination",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-[var(--radius-lg)] bg-[var(--bg-primary)] p-4 shadow-[var(--shadow-card)]"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                <span className="text-[var(--text-secondary)]">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
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
      <section className="bg-[var(--gradient-cta)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Classroom?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Experience the future of education with LunaViz 3D.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="white"
              asChild
            >
              <Link href="/contact?demo=true&product=lunaviz">
                Schedule a Demo
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
