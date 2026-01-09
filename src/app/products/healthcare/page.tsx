import { Metadata } from "next";
import Link from "next/link";
import { Stethoscope, ArrowRight, Heart, ScanLine, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Healthcare Products | Lunamagix",
  description: "Discover Lunamagix healthcare products including LunaCare, LunaScan, and LunaScribe for therapeutic and diagnostic applications.",
};

const products = [
  {
    id: "lunacare",
    name: "LunaCare",
    tagline: "Therapeutic Immersion Platform",
    description: "VR-based therapeutic experiences for mental health treatment, pain management, and rehabilitation that complement traditional care approaches.",
    icon: Heart,
    features: ["VR Therapy", "Pain Management", "Anxiety Treatment", "Progress Tracking"],
    color: "from-pink-500 to-rose-600",
    href: "/products/healthcare/lunacare"
  },
  {
    id: "lunascan",
    name: "LunaScan",
    tagline: "SAM3-Powered Diagnostic AI",
    description: "Advanced medical imaging analysis powered by the Segment Anything Model, assisting radiologists and clinicians in faster, more accurate diagnoses.",
    icon: ScanLine,
    features: ["Medical Imaging", "AI Analysis", "SAM3 Integration", "Clinical Decision Support"],
    color: "from-green-500 to-emerald-600",
    href: "/products/healthcare/lunascan"
  },
  {
    id: "lunascribe",
    name: "LunaScribe",
    tagline: "AI Clinical Documentation",
    description: "Automated clinical documentation that listens to patient-provider conversations and generates accurate, compliant medical records.",
    icon: FileText,
    features: ["Voice-to-Text", "EHR Integration", "HIPAA Compliant", "Multi-language"],
    color: "from-blue-500 to-indigo-600",
    href: "/products/healthcare/lunascribe"
  }
];

export default function HealthcareProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-[var(--luna-purple)]/10 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-[var(--luna-purple-light)]/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--luna-purple-lighter)]">
              <Stethoscope className="h-6 w-6 text-[var(--luna-purple)]" />
            </div>
            <span className="text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider">
              Healthcare Solutions
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            AI-Assisted Medical Care
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Therapeutic immersion, diagnostic AI assistance, and clinical documentation automation for hospitals, clinics, and healthcare professionals.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50" asChild>
              <Link href="/contact?demo=true">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[var(--luna-purple)]/30 text-[var(--luna-purple)] hover:bg-[var(--luna-purple)]/10" asChild>
              <Link href="/resources/whitepapers">
                Read Research
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
              Our Healthcare Products
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
              Each product is developed with input from healthcare professionals and designed to meet clinical standards.
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

      {/* Compliance Section */}
      <section className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Built for Healthcare Standards
            </h2>
            <p className="mt-4 text-lg text-[var(--text-secondary)]">
              Our healthcare products are designed with compliance and security at their core.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-2xl font-bold text-[var(--luna-purple)]">HIPAA</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Compliant data handling</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-2xl font-bold text-[var(--luna-purple)]">GDPR</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Privacy by design</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-2xl font-bold text-[var(--luna-purple)]">ISO 27001</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Information security</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white shadow-sm">
              <p className="text-2xl font-bold text-[var(--luna-purple)]">CE Mark</p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">Medical device standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Ready to Enhance Your Healthcare Practice?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Schedule a consultation to discuss how our healthcare solutions can integrate with your existing systems.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?demo=true">
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/partner">
                Research Partnership
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
