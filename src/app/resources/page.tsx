import { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resources | Lunamagix",
  description: "Explore Lunamagix resources including blog articles, whitepapers, and case studies on AI education and assistive technology.",
};

const resources = [
  {
    id: "blog",
    title: "Blog",
    description: "Insights and updates on AI in education, accessibility technology, and healthcare innovation. Stay informed with our latest articles.",
    icon: BookOpen,
    color: "from-purple-500 to-pink-600",
    href: "/resources/blog",
    cta: "Read Articles"
  },
  {
    id: "whitepapers",
    title: "Whitepapers",
    description: "In-depth research papers and technical documentation on our products, methodologies, and the science behind our solutions.",
    icon: FileText,
    color: "from-blue-500 to-indigo-600",
    href: "/resources/whitepapers",
    cta: "Download Whitepapers"
  },
  {
    id: "case-studies",
    title: "Case Studies",
    description: "Real-world success stories from schools, healthcare institutions, and organizations that have implemented our solutions.",
    icon: Building2,
    color: "from-green-500 to-emerald-600",
    href: "/resources/case-studies",
    cta: "View Case Studies"
  }
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-20 sm:py-28">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider mb-4">
            Resources
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Knowledge & Insights
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)]">
            Explore our collection of articles, research papers, and success stories to learn more about AI-powered education and assistive technology.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {resources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.href}
                className="group relative rounded-2xl border border-[var(--border-default)] bg-white p-8 shadow-sm transition-all hover:shadow-lg hover:border-[var(--luna-purple)]"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${resource.color} mb-6`}>
                  <resource.icon className="h-7 w-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)]">
                  {resource.title}
                </h2>
                <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                  {resource.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-[var(--luna-purple)]">
                  {resource.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 sm:py-28 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Stay Updated
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Subscribe to our newsletter for the latest insights on AI in education, accessibility, and healthcare.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-lg border border-[var(--border-default)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--luna-purple)]"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Have Questions?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Our team is here to help you understand how our solutions can work for your specific needs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/assessment">
                Try Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
