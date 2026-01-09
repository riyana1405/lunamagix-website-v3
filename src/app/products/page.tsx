import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  Accessibility,
  Stethoscope,
  ArrowRight,
  Monitor,
  Shield,
  Activity,
  BookOpen,
  Sparkles,
  Navigation,
  Armchair,
  Ear,
  Heart,
  ScanLine,
  FileText,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Lunamagix's AI-powered solutions for education, assistive technology, and healthcare.",
};

const productCategories = [
  {
    id: "education",
    title: "Education Technology",
    description: "Immersive learning and smart campus solutions",
    icon: GraduationCap,
    gradient: "from-purple-500 to-indigo-500",
    products: [
      {
        name: "LunaViz 3D",
        tagline: "Learning Leaps Off the Screen",
        description: "Immersive 3D presentations without VR headsets",
        icon: Monitor,
        href: "/products/education/lunaviz",
      },
      {
        name: "LunaWatch",
        tagline: "360° Intelligent Campus Protection",
        description: "AI-powered scene understanding for campus safety",
        icon: Shield,
        href: "/products/education/lunawatch",
      },
      {
        name: "LunaFit",
        tagline: "Your Personal AI Coach",
        description: "Vision-based coaching for sports and wellness",
        icon: Activity,
        href: "/products/education/lunafit",
      },
      {
        name: "LunaLearn",
        tagline: "The Operating System for Modern Education",
        description: "Complete education management platform",
        icon: BookOpen,
        href: "/products/education/lunalearn",
      },
      {
        name: "LunaSense",
        tagline: "Every Sense, Every Learner",
        description: "Multi-sensory engagement suite",
        icon: Sparkles,
        href: "/products/education/lunasense",
      },
    ],
  },
  {
    id: "assistive",
    title: "Assistive Technology",
    description: "AI-powered solutions for independent living",
    icon: Accessibility,
    gradient: "from-teal-500 to-cyan-500",
    products: [
      {
        name: "LunaGuide",
        tagline: "Your Loyal AI Companion",
        description: "AI pathfinding robot for visually impaired",
        icon: Navigation,
        href: "/products/assistive/lunaguide",
      },
      {
        name: "LunaMove",
        tagline: "Freedom to Move",
        description: "Adaptive autonomous wheelchair",
        icon: Armchair,
        href: "/products/assistive/lunamove",
      },
      {
        name: "LunaSound",
        tagline: "Hear the World, Your Way",
        description: "AI-enhanced hearing solutions",
        icon: Ear,
        href: "/products/assistive/lunasound",
      },
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    description: "AI assistance for medical professionals",
    icon: Stethoscope,
    gradient: "from-amber-500 to-orange-500",
    products: [
      {
        name: "LunaCare",
        tagline: "Healing Through Immersion",
        description: "Therapeutic immersive experiences",
        icon: Heart,
        href: "/products/healthcare/lunacare",
      },
      {
        name: "LunaScan",
        tagline: "AI That Never Misses a Detail",
        description: "SAM3-powered diagnostic assistance",
        icon: ScanLine,
        href: "/products/healthcare/lunascan",
      },
      {
        name: "LunaScribe",
        tagline: "Listen, Understand, Document",
        description: "AI clinical documentation",
        icon: FileText,
        href: "/products/healthcare/lunascribe",
      },
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[var(--gradient-hero)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Our Products
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              AI-powered solutions designed with compassion, built for impact.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {productCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className={categoryIndex > 0 ? "mt-20" : ""}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient}`}
                >
                  <category.icon className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                    {category.title}
                  </h2>
                  <p className="text-[var(--text-secondary)]">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.products.map((product) => (
                  <Link key={product.name} href={product.href}>
                    <Card className="group h-full cursor-pointer transition-all hover:-translate-y-1 hover:shadow-xl">
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--bg-secondary)]">
                            <product.icon className="h-5 w-5 text-[var(--luna-purple)]" />
                          </div>
                          <div>
                            <CardTitle className="flex items-center gap-2 text-lg">
                              {product.name}
                              <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                            </CardTitle>
                          </div>
                        </div>
                        <p className="mt-2 text-sm font-medium text-[var(--luna-purple)]">
                          {product.tagline}
                        </p>
                        <CardDescription className="mt-2">
                          {product.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[var(--text-primary)]">
            Not sure which product is right for you?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Our team can help you find the perfect solution for your needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact?demo=true"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-lg)] bg-[var(--luna-purple)] px-6 font-medium text-white transition-colors hover:opacity-90"
            >
              Request a Demo
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center rounded-[var(--radius-lg)] border-2 border-[var(--luna-purple)] px-6 font-medium text-[var(--luna-purple)] transition-colors hover:bg-[var(--bg-secondary)]"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
