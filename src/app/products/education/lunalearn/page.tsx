import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import {
  BookOpen,
  Users,
  GraduationCap,
  Brain,
  CheckCircle,
  ArrowRight,
  UserCheck,
  ClipboardList,
  BarChart3,
  Presentation,
  FileSearch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "LunaLearn - The Operating System for Modern Education",
  description:
    "A complete education management platform with smart attendance, engagement analytics, AI presentations, IEP engine, and smart assessment for schools and special education centers.",
};

const features = [
  {
    icon: UserCheck,
    title: "Smart Attendance",
    description:
      "Facial recognition with detailed entry/exit timestamps, analytics dashboard, and parent notifications.",
  },
  {
    icon: BarChart3,
    title: "Engagement Analytics",
    description:
      "Vision-based emotion and attention tracking during lectures with participation metrics.",
  },
  {
    icon: Presentation,
    title: "Intelligent Presentation System",
    description:
      "AI listens to teacher's narration and generates real-time visual aids and illustrations.",
  },
  {
    icon: Brain,
    title: "IEP Engine",
    description:
      "AI-driven content delivery matching learning styles with therapist-integrated goals for neurodiverse students.",
  },
  {
    icon: FileSearch,
    title: "Smart Assessment",
    description:
      "AI manuscript analysis with gap identification and visual tools for efficient evaluation.",
  },
  {
    icon: ClipboardList,
    title: "Role-Based Access",
    description:
      "Parents, teachers, therapists, and admins each see what they need with ML-powered insights.",
  },
];

const useCases = [
  {
    title: "K-12 Schools",
    description:
      "Complete campus management from attendance to assessment, with AI-powered insights for teachers and administrators.",
  },
  {
    title: "Special Education Centers",
    description:
      "IEP tracking, therapist collaboration, and sensory-friendly interfaces designed for neurodiverse learners.",
  },
  {
    title: "Coaching Institutes",
    description:
      "Scalable platform for NEET, UPSC, and Banking exam prep with engagement tracking and personalized learning paths.",
  },
  {
    title: "Tuition Centers",
    description:
      "Simple yet powerful tools for individual tutors to track student progress and communicate with parents.",
  },
];

const faqs = [
  {
    question: "How does the Pay What You Like model work?",
    answer:
      "For our core platform, you decide what the software is worth to you. Whether that's a nominal amount or the full market rate, you'll receive the same complete system, support, and updates. Premium features and hardware products support our mission work.",
  },
  {
    question: "Is LunaLearn compliant with data protection regulations?",
    answer:
      "Yes, LunaLearn is designed with FERPA, GDPR, and local Indian data protection laws in mind. Student data is siloed with role-based access, and we never sell or share data with third parties.",
  },
  {
    question: "Can therapists and parents collaborate on the platform?",
    answer:
      "Absolutely. Our RBAC system enables therapists to set goals, teachers to plan aligned activities, and parents to log home observations. AI integrates insights from all stakeholders.",
  },
  {
    question: "Does it work on mobile devices?",
    answer:
      "LunaLearn is fully responsive and touch-optimized, working seamlessly on smartphones, tablets, and desktop computers.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Basic setup can be completed within a week. Full implementation including staff training typically takes 2-4 weeks depending on institution size.",
  },
];

export default function LunaLearnPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                LunaLearn
              </h1>
              <p className="mt-2 text-xl font-medium text-purple-200">
                The Operating System for Modern Education
              </p>
              <p className="mt-6 text-lg leading-relaxed text-purple-100/90">
                A single platform where every stakeholder — parents, teachers,
                therapists, and administrators — sees what they need,
                contributes what they know, and trusts that nothing falls
                through the cracks.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact?demo=true&product=lunalearn">
                    Request Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="aspect-video w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: 'url(/images/products/lunalearn-mockup.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            The Challenge
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
            Special education works best when everyone&apos;s on the same page —
            parents, teachers, therapists, and administrators all moving
            together toward one child&apos;s success.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            But &quot;the same page&quot; has always been a figure of speech. In reality,
            information lives in fragmented notebooks, separate apps, periodic
            meetings, and the occasional email chain.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            No more &quot;How was this month?&quot; replaced by hoping the answer
            captures everything. Now you can ask, &quot;What activities most helped
            improve social interaction this month?&quot; and get an answer grounded
            in actual data from every environment your child learns in.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Platform Features
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Everything you need to manage modern education, in one place.
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

      {/* Stakeholder Views */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Designed for Every Stakeholder
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Each user sees exactly what they need, when they need it.
            </p>
          </div>

          <div className="mt-12">
            <Tabs defaultValue="parent" className="w-full">
              <TabsList className="mx-auto mb-8 flex h-auto w-full max-w-2xl flex-wrap justify-center gap-2 bg-transparent">
                <TabsTrigger
                  value="parent"
                  className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <Users className="mr-2 h-4 w-4" />
                  Parent View
                </TabsTrigger>
                <TabsTrigger
                  value="teacher"
                  className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Teacher View
                </TabsTrigger>
                <TabsTrigger
                  value="therapist"
                  className="rounded-full data-[state=active]:bg-purple-600 data-[state=active]:text-white"
                >
                  <Brain className="mr-2 h-4 w-4" />
                  Therapist View
                </TabsTrigger>
              </TabsList>

              <TabsContent value="parent">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Parent Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Child's progress dashboard with visual timeline",
                      "AI chat: 'How did my child do this month?'",
                      "Home activity recommendations from therapist",
                      "Journal entry interface for logging observations",
                      "Moment gallery from classroom captures",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Parent Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="teacher">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Teacher Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Student roster with quick status indicators",
                      "AI-assisted activity planning interface",
                      "Integration of therapist goals and parent feedback",
                      "Classroom activity logging",
                      "Progress reporting tools",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Teacher Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="therapist">
                <div className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-8 shadow-[var(--shadow-card)]">
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    Therapist Dashboard
                  </h3>
                  <ul className="mt-6 space-y-4">
                    {[
                      "Goal setting interface with IEP integration",
                      "Cross-stakeholder data dashboard",
                      "ML-powered intervention recommendations",
                      "Progress tracking against therapy milestones",
                      "Parent and teacher feedback aggregation",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-500" />
                        <span className="text-[var(--text-secondary)]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 aspect-video rounded-[var(--radius-xl)] bg-[var(--bg-secondary)]">
                    <div className="flex h-full items-center justify-center text-[var(--text-tertiary)]">
                      Therapist Dashboard Preview
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Use Cases
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {useCases.map((useCase) => (
              <div
                key={useCase.title}
                className="rounded-[var(--radius-xl)] border border-[var(--border-default)] bg-[var(--bg-primary)] p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  {useCase.title}
                </h3>
                <p className="mt-2 text-[var(--text-secondary)]">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Pay What You Like
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)]">
            We believe access to effective special education tools shouldn&apos;t
            depend on a school&apos;s budget. For our core platform, you decide what
            the software is worth to you.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-[var(--text-secondary)]">
            Schools and parents who can pay more help subsidize those who
            can&apos;t. It&apos;s not traditional business — but then, neither is our
            mission.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contact?demo=true&product=lunalearn">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
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
      <section className="bg-gradient-to-br from-purple-900 to-indigo-900 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Transform Your Education Experience?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-purple-100/90">
            Join the schools and education centers already using LunaLearn.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-white text-purple-900 hover:bg-purple-50"
            >
              <Link href="/contact?demo=true&product=lunalearn">
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
