import { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, ArrowRight, Monitor, Eye, Activity, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Education Technology Products | Lunamagix",
  description: "Discover Lunamagix education technology products including LunaLearn, LunaViz 3D, LunaWatch, LunaFit, and LunaSense.",
};

const products = [
  {
    id: "lunalearn",
    name: "LunaLearn",
    tagline: "The Operating System for Modern Education",
    description: "A single platform where every stakeholder — parents, teachers, therapists, and administrators — sees what they need, contributes what they know, and trusts that nothing falls through the cracks.",
    icon: BookOpen,
    features: ["Smart Attendance", "Engagement Analytics", "IEP Engine", "Assessment Tools"],
    color: "from-blue-500 to-indigo-600",
    href: "/products/education/lunalearn"
  },
  {
    id: "lunaviz",
    name: "LunaViz 3D",
    tagline: "Immersive 3D Presentation Tool",
    description: "Transform traditional teaching with stunning 3D visualizations that make complex concepts tangible and memorable for every learner.",
    icon: Monitor,
    features: ["3D Models", "Interactive Content", "VR Compatible", "Curriculum Aligned"],
    color: "from-purple-500 to-pink-600",
    href: "/products/education/lunaviz"
  },
  {
    id: "lunawatch",
    name: "LunaWatch",
    tagline: "Smart Campus Security",
    description: "AI-powered campus security and monitoring system that keeps students safe while respecting privacy and enabling smart attendance.",
    icon: Eye,
    features: ["Facial Recognition", "Visitor Management", "Emergency Alerts", "Attendance Automation"],
    color: "from-teal-500 to-cyan-600",
    href: "/products/education/lunawatch"
  },
  {
    id: "lunafit",
    name: "LunaFit",
    tagline: "Sports & Wellness AI",
    description: "Professional-grade biomechanics analysis and coaching for schools, academies, and sports organizations.",
    icon: Activity,
    features: ["Motion Analysis", "Performance Tracking", "Injury Prevention", "Personalized Training"],
    color: "from-green-500 to-emerald-600",
    href: "/products/education/lunafit"
  },
  {
    id: "lunasense",
    name: "LunaSense",
    tagline: "Multi-Sensory Engagement Suite",
    description: "Immersive sensory experiences designed for neurodiverse learners and special education environments.",
    icon: Sparkles,
    features: ["Sensory Rooms", "Therapeutic VR", "Calming Environments", "Engagement Tracking"],
    color: "from-orange-500 to-red-600",
    href: "/products/education/lunasense"
  }
];

export default function EducationProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-200 uppercase tracking-wider">
              Education Technology
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transform Learning Experiences
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-blue-100/90">
            Comprehensive AI-powered solutions for modern schools, coaching centers, and educational institutions. From smart attendance to engagement analytics.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-indigo-700 hover:bg-blue-50" asChild>
              <Link href="/contact?demo=true">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/assessment">
                Try Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Our Education Products
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each product is designed to address specific challenges in modern education while working seamlessly together.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group relative rounded-2xl border border-[var(--border-default)] bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-[var(--luna-purple)]"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${product.color} mb-4`}>
                  <product.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)]">
                  {product.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--luna-purple)]">
                  {product.tagline}
                </p>
                <p className="mt-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-medium text-[var(--luna-purple)]">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Ready to Transform Your Institution?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Schedule a personalized demo to see how our education technology can work for your specific needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?demo=true">
                Schedule a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/partner">
                Become a Partner
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
