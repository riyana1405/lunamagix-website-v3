import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FitnessCoach } from "@/components/mockups/FitnessCoach";
import {
  Activity,
  Target,
  Trophy,
  Heart,
  Camera,
  Brain,
  Users,
  Timer,
  ArrowRight,
  CheckCircle,
  Zap,
  Gamepad2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LunaFit - AI Sports & Wellness Coach",
  description:
    "Vision-based AI coaching for sports, yoga, and fitness. Real-time pose estimation and corrective feedback using SAM3 Vision Transformer technology.",
};

const features = [
  {
    icon: Camera,
    title: "Vision Transformer Pose Estimation",
    description:
      "State-of-the-art SAM3-based AI accurately tracks 33 body landmarks in real-time, understanding posture with unprecedented precision.",
  },
  {
    icon: Zap,
    title: "Real-Time Corrective Feedback",
    description:
      "Instant audio and visual cues guide proper form. 'Straighten your back' or 'Deeper squat' — like having a personal trainer watching every rep.",
  },
  {
    icon: Gamepad2,
    title: "Gamified Progress Tracking",
    description:
      "Earn points, unlock achievements, and compete with friends. Fitness becomes fun with leaderboards, challenges, and personalized goals.",
  },
  {
    icon: Brain,
    title: "AI Personal Training Plans",
    description:
      "Machine learning analyzes your progress, adapts difficulty, and creates personalized workout plans that evolve with you.",
  },
  {
    icon: Trophy,
    title: "AI Umpiring & Judging",
    description:
      "Fair, consistent sports officiating for school competitions. Objective scoring for gymnastics, martial arts, and more.",
  },
  {
    icon: Heart,
    title: "Wearable Integration",
    description:
      "Sync with fitness trackers for comprehensive health metrics. Heart rate, calories, sleep — all in one dashboard.",
  },
];

const applications = [
  {
    title: "School Physical Education",
    description: "Transform PE classes with AI coaching that provides personalized feedback to every student simultaneously.",
    icon: "🏫",
  },
  {
    title: "Sports Academies",
    description: "Professional-grade motion analysis for athletes training in cricket, tennis, swimming, and more.",
    icon: "⚽",
  },
  {
    title: "Yoga Studios",
    description: "Perfect your asanas with real-time alignment correction and breath guidance.",
    icon: "🧘",
  },
  {
    title: "Rehabilitation Centers",
    description: "Guide physiotherapy exercises with precise form tracking and compliance monitoring.",
    icon: "🏥",
  },
  {
    title: "Home Fitness",
    description: "Bring the gym home with AI coaching that works with just your phone camera.",
    icon: "🏠",
  },
  {
    title: "Corporate Wellness",
    description: "Employee wellness programs with guided group workouts and healthy competition.",
    icon: "🏢",
  },
];

const therapeuticBenefits = [
  "Gross motor training for developmental delays",
  "Gamified physical activity for neurodiverse engagement",
  "Physiotherapy exercise guidance and compliance tracking",
  "Occupational therapy movement support",
  "Sensory integration through structured movement",
  "Social skills through team activities",
];

const faqs = [
  {
    question: "How accurate is the pose estimation?",
    answer:
      "LunaFit uses SAM3-based Vision Transformers achieving >95% accuracy on standard pose estimation benchmarks. The system detects 33 body landmarks including fine finger movements, enabling precise form analysis for complex exercises.",
  },
  {
    question: "What equipment is needed?",
    answer:
      "Just a device with a camera — smartphone, tablet, laptop, or webcam. For larger spaces like gyms, we offer multi-camera setups for full coverage. No wearables required, though integration with fitness trackers enhances the experience.",
  },
  {
    question: "Can it work with groups?",
    answer:
      "Yes! LunaFit can track multiple people simultaneously, providing individual feedback to each person. This makes it perfect for PE classes, group fitness, and team training.",
  },
  {
    question: "How does therapeutic application work?",
    answer:
      "Therapists can set specific movement goals within the platform. LunaFit tracks the child's performance against these goals, provides engaging gamification, and reports progress to the therapy team. The interface is designed to be sensory-friendly and motivating.",
  },
  {
    question: "Is it suitable for all fitness levels?",
    answer:
      "Absolutely. The AI adapts to your current fitness level, providing appropriate challenges whether you're a beginner or advanced athlete. It learns from your progress and adjusts difficulty accordingly.",
  },
];

export default function LunaFitPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
        {/* Subtle blur circles */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[var(--luna-purple)]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-[var(--azure-blue)]/5 blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <span className="inline-flex w-fit items-center gap-2 bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-4 py-2 rounded-full text-sm font-semibold border border-[var(--luna-purple)]/10">
                <Activity className="h-4 w-4" />
                AI Sports & Wellness Coach
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">LunaFit</span>
              </h1>
              <p className="mt-2 text-xl font-medium text-[var(--text-primary)]">
                Your Personal AI Coach, Always Watching, Always Guiding
              </p>
              <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                Advanced pose estimation AI provides real-time corrective feedback for perfect form. 
                Whether you&apos;re doing yoga, sports training, or physical therapy — 
                LunaFit ensures every movement counts.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?demo=true&product=lunafit">
                    Try Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" asChild className="border-[var(--border-default)] text-[var(--text-primary)] bg-white hover:bg-[var(--bg-secondary)]">
                  <Link href="#features">See Features</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <FitnessCoach />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-[var(--border-default)] bg-[var(--bg-primary)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-4">
            {[
              { value: "33", label: "Body Landmarks Tracked" },
              { value: "60 FPS", label: "Real-Time Processing" },
              { value: "95%+", label: "Pose Accuracy" },
              { value: "100+", label: "Supported Exercises" },
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
              AI-Powered Fitness Technology
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Cutting-edge computer vision meets personalized coaching.
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

      {/* Applications */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Applications
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)]"
              >
                <div className="text-4xl">{app.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                  {app.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Benefits */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Therapeutic Applications
              </h2>
              <p className="mt-4 text-lg text-[var(--text-secondary)]">
                LunaFit brings the same powerful technology to therapy settings, 
                making movement exercises engaging and trackable.
              </p>
              <div className="mt-8 space-y-4">
                {therapeuticBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 shrink-0 text-green-500" />
                    <span className="text-[var(--text-secondary)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="rounded-[var(--radius-xl)] bg-[var(--bg-secondary)] p-8">
                <div className="text-center">
                  <div className="text-6xl">🎮</div>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                    Gamified Therapy
                  </h3>
                  <p className="mt-2 text-[var(--text-secondary)]">
                    Turn therapeutic exercises into fun games that children want to play.
                  </p>
                </div>
              </div>
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
      <section className="bg-[var(--gradient-cta)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Start Your Fitness Journey Today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Experience AI coaching that adapts to you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="white"
              asChild
            >
              <Link href="/contact?demo=true&product=lunafit">
                Try Free Demo
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
