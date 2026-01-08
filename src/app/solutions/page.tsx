import { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, 
  Heart, 
  Accessibility, 
  Stethoscope,
  ArrowRight,
  CheckCircle,
  Building2,
  Users,
  School,
  Hospital
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Solutions | Lunamagix",
  description: "Discover Lunamagix solutions for education, special education, assistive technology, and healthcare. AI-powered technology designed for every need.",
};

const solutions = [
  {
    id: "education",
    title: "Education Technology",
    subtitle: "Transform Learning Experiences",
    description: "Comprehensive AI-powered solutions for modern schools, coaching centers, and educational institutions. From smart attendance to engagement analytics.",
    icon: GraduationCap,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    products: ["LunaLearn", "LunaViz 3D", "LunaWatch", "LunaFit"],
    benefits: [
      "Smart attendance with facial recognition",
      "AI-powered engagement analytics",
      "Intelligent presentation system",
      "Comprehensive assessment tools"
    ],
    audiences: [
      { icon: School, label: "K-12 Schools" },
      { icon: Building2, label: "Coaching Centers" },
      { icon: Users, label: "Universities" }
    ],
    link: "/products"
  },
  {
    id: "special-education",
    title: "Special Education",
    subtitle: "Inclusive Learning for All",
    description: "Personalized IEP tracking, therapeutic experiences, and collaborative tools designed specifically for neurodiverse learners and special education centers.",
    icon: Heart,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    products: ["LunaLearn IEP", "LunaSense", "LunaCare"],
    benefits: [
      "Individualized Education Program (IEP) engine",
      "Multi-sensory engagement suite",
      "Therapist-parent collaboration tools",
      "Progress tracking and analytics"
    ],
    audiences: [
      { icon: School, label: "Special Schools" },
      { icon: Users, label: "Therapy Centers" },
      { icon: Heart, label: "Parents" }
    ],
    link: "/products"
  },
  {
    id: "assistive",
    title: "Assistive Technology",
    subtitle: "Independence Through Innovation",
    description: "AI-powered mobility aids, hearing enhancement, and independence-enabling devices that help people with disabilities live fuller, more autonomous lives.",
    icon: Accessibility,
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    products: ["LunaGuide", "LunaMove", "LunaSound"],
    benefits: [
      "AI pathfinding for visually impaired",
      "Adaptive autonomous wheelchairs",
      "AI-enhanced hearing solutions",
      "Voice-controlled interfaces"
    ],
    audiences: [
      { icon: Users, label: "Individuals" },
      { icon: Hospital, label: "Rehabilitation Centers" },
      { icon: Building2, label: "NGOs" }
    ],
    link: "/products"
  },
  {
    id: "healthcare",
    title: "Healthcare Solutions",
    subtitle: "AI-Assisted Medical Care",
    description: "Therapeutic immersion, diagnostic AI assistance, and clinical documentation automation for hospitals, clinics, and healthcare professionals.",
    icon: Stethoscope,
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    products: ["LunaCare", "LunaScan", "LunaScribe"],
    benefits: [
      "VR-based therapeutic experiences",
      "SAM3-powered diagnostic assistance",
      "AI clinical documentation",
      "Patient progress tracking"
    ],
    audiences: [
      { icon: Hospital, label: "Hospitals" },
      { icon: Building2, label: "Clinics" },
      { icon: Users, label: "Therapists" }
    ],
    link: "/products"
  }
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[var(--luna-purple)] via-[var(--luna-purple-dark)] to-indigo-900 py-20 sm:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-purple-200 uppercase tracking-wider mb-4">
            Our Solutions
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Solutions for Every Need
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-purple-100/90">
            From mainstream education to specialized care, our AI-powered products adapt to serve diverse communities with compassion and innovation.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <div 
                key={solution.id}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${solution.bgColor}`}>
                    <solution.icon className={`h-7 w-7 ${solution.iconColor}`} />
                  </div>
                  <h2 className="mt-6 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                    {solution.title}
                  </h2>
                  <p className="mt-2 text-xl font-medium text-[var(--luna-purple)]">
                    {solution.subtitle}
                  </p>
                  <p className="mt-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                    {solution.description}
                  </p>
                  
                  {/* Benefits */}
                  <ul className="mt-6 space-y-3">
                    {solution.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-[var(--text-secondary)]">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Products */}
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-wider mb-3">
                      Featured Products
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {solution.products.map((product) => (
                        <span 
                          key={product}
                          className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[var(--gray-100)] text-[var(--text-secondary)]"
                        >
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button asChild>
                      <Link href={solution.link}>
                        Explore {solution.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Visual Card */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`relative rounded-2xl bg-gradient-to-br ${solution.color} p-8 shadow-xl`}>
                    <div className="absolute inset-0 rounded-2xl bg-white/10 backdrop-blur-sm" />
                    <div className="relative">
                      {/* Audiences */}
                      <p className="text-sm font-semibold text-white/80 uppercase tracking-wider mb-4">
                        Designed For
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {solution.audiences.map((audience, i) => (
                          <div key={i} className="text-center">
                            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 mb-2">
                              <audience.icon className="h-6 w-6 text-white" />
                            </div>
                            <p className="text-sm text-white font-medium">{audience.label}</p>
                          </div>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="mt-8 pt-6 border-t border-white/20">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-3xl font-bold text-white">98%</p>
                            <p className="text-sm text-white/80">Satisfaction Rate</p>
                          </div>
                          <div>
                            <p className="text-3xl font-bold text-white">500+</p>
                            <p className="text-sm text-white/80">Institutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-28 bg-[var(--gray-50)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Not Sure Which Solution Fits Your Needs?
          </h2>
          <p className="mt-4 text-lg text-[var(--text-secondary)]">
            Our team is here to help you find the perfect solution for your institution or organization.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/contact?demo=true">
                Schedule a Consultation
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
