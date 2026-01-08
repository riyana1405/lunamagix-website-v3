import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, GraduationCap, Heart, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Case Studies | Lunamagix",
  description: "Explore how Lunamagix solutions are transforming education and healthcare across institutions.",
};

const caseStudies = [
  {
    id: 1,
    title: "Transforming Special Education at Chennai Public School",
    category: "Education",
    icon: GraduationCap,
    description: "How LunaLearn helped a school of 500+ students improve IEP tracking efficiency by 60% and increase parent engagement by 85%.",
    metrics: [
      { label: "IEP Efficiency", value: "+60%" },
      { label: "Parent Engagement", value: "+85%" },
      { label: "Students Impacted", value: "500+" },
    ],
    color: "purple",
  },
  {
    id: 2,
    title: "AI-Powered Campus Security at Thiagarajar College",
    category: "Security",
    icon: Building2,
    description: "LunaWatch implementation reduced security incidents by 40% and improved emergency response time by 70%.",
    metrics: [
      { label: "Incidents Reduced", value: "-40%" },
      { label: "Response Time", value: "-70%" },
      { label: "Coverage Area", value: "100%" },
    ],
    color: "blue",
  },
  {
    id: 3,
    title: "Inclusive Learning at Madurai Special Needs Center",
    category: "Special Education",
    icon: Heart,
    description: "LunaSense multi-sensory suite enabled 95% of neurodiverse students to engage with curriculum content effectively.",
    metrics: [
      { label: "Student Engagement", value: "95%" },
      { label: "Learning Outcomes", value: "+45%" },
      { label: "Teacher Satisfaction", value: "98%" },
    ],
    color: "teal",
  },
  {
    id: 4,
    title: "Sports Excellence Program at Tamil Nadu Sports Academy",
    category: "Sports & Fitness",
    icon: Users,
    description: "LunaFit AI coaching improved athlete performance metrics by 35% and reduced training injuries by 50%.",
    metrics: [
      { label: "Performance", value: "+35%" },
      { label: "Injuries Reduced", value: "-50%" },
      { label: "Athletes Trained", value: "200+" },
    ],
    color: "purple",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    metricColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    metricColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    metricColor: "text-[var(--accent-teal)]",
  },
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero Section */}
      <section className="bg-[var(--gradient-hero)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              Success Stories
            </span>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Case Studies
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">
              Discover how institutions are transforming education and healthcare with Lunamagix solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => {
              const styles = colorStyles[study.color as keyof typeof colorStyles];
              return (
                <div
                  key={study.id}
                  className="group rounded-xl border border-[var(--border-default)] bg-white p-6 shadow-[var(--shadow-card)] transition-all hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.iconBg}`}>
                      <study.icon className={`h-6 w-6 ${styles.iconColor}`} />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                        {study.category}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)] transition-colors">
                        {study.title}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-4 text-[var(--text-secondary)] leading-relaxed">
                    {study.description}
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 border-t border-[var(--border-light)] pt-6">
                    {study.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className={`text-xl font-bold ${styles.metricColor}`}>
                          {metric.value}
                        </div>
                        <div className="text-xs text-[var(--text-tertiary)]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors"
                    >
                      Read Full Case Study
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--bg-secondary)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-6 text-center">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
            Ready to Transform Your Institution?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
            Join hundreds of institutions already using Lunamagix to improve outcomes.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white">
              <Link href="/contact?demo=true">
                Request a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild className="border-[var(--border-default)] text-[var(--text-primary)] hover:bg-[var(--gray-50)]">
              <Link href="/contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
