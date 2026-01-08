import { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowRight, Navigation, Armchair, Ear } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Assistive Technology Products | Lunamagix",
  description: "Discover Lunamagix assistive technology products including LunaGuide, LunaMove, and LunaSound for independence and accessibility.",
};

const products = [
  {
    id: "lunaguide",
    name: "LunaGuide",
    tagline: "PathPal Rover - AI Pathfinding Companion",
    description: "An intelligent robotic companion that helps visually impaired individuals navigate complex environments with confidence and independence.",
    icon: Navigation,
    features: ["AI Navigation", "Obstacle Detection", "Voice Guidance", "Indoor/Outdoor"],
    color: "from-teal-500 to-cyan-600",
    href: "/products/assistive/lunaguide"
  },
  {
    id: "lunamove",
    name: "LunaMove",
    tagline: "Adaptive Autonomous Wheelchair",
    description: "A smart wheelchair that adapts to the user's needs, featuring autonomous navigation, voice control, and seamless integration with smart environments.",
    icon: Armchair,
    features: ["Autonomous Mode", "Voice Control", "Terrain Adaptation", "Smart Home Integration"],
    color: "from-blue-500 to-indigo-600",
    href: "/products/assistive/lunamove"
  },
  {
    id: "lunasound",
    name: "LunaSound",
    tagline: "AI-Enhanced Hearing Solution",
    description: "Advanced hearing enhancement technology that uses AI to filter noise, amplify speech, and provide real-time transcription for the hearing impaired.",
    icon: Ear,
    features: ["Noise Cancellation", "Speech Enhancement", "Real-time Transcription", "Customizable Profiles"],
    color: "from-purple-500 to-pink-600",
    href: "/products/assistive/lunasound"
  }
];

export default function AssistiveProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-cyan-700 to-blue-800 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20">
              <Accessibility className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-teal-200 uppercase tracking-wider">
              Assistive Technology
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Independence Through Innovation
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-teal-100/90">
            AI-powered mobility aids, hearing enhancement, and independence-enabling devices that help people with disabilities live fuller, more autonomous lives.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-teal-700 hover:bg-teal-50" asChild>
              <Link href="/contact?demo=true">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link href="/partner">
                Partner With Us
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
              Our Assistive Products
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each product is designed with input from the disability community to ensure real-world usability and impact.
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

      {/* Impact Section */}
      <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Making a Difference
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Our assistive technology is designed to create real impact in people's lives.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-4xl font-bold text-[var(--luna-purple)]">2.2B</p>
              <p className="mt-2 text-[var(--text-secondary)]">People globally with vision impairment</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-4xl font-bold text-[var(--luna-purple)]">75M</p>
              <p className="mt-2 text-[var(--text-secondary)]">People who need wheelchairs daily</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-4xl font-bold text-[var(--luna-purple)]">466M</p>
              <p className="mt-2 text-[var(--text-secondary)]">People with disabling hearing loss</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Interested in Our Assistive Technology?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Whether you're an individual, caregiver, or organization, we'd love to discuss how our products can help.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
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
