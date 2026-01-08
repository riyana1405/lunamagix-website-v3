"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Accessibility,
  Stethoscope,
  Brain,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Education Technology",
    description:
      "Immersive learning tools, AI-powered assessment, and smart campus solutions for modern schools.",
    icon: GraduationCap,
    image: "/images/products/lunalearn-mockup.png",
    href: "/products",
    color: "purple",
    products: ["LunaViz 3D", "LunaWatch", "LunaFit", "LunaLearn", "LunaSense"],
  },
  {
    title: "Special Education",
    description:
      "Personalized IEP tracking, therapeutic experiences, and collaborative tools for neurodiverse learners.",
    icon: Brain,
    image: "/images/products/lunasense-mockup.png",
    href: "/solutions/special-education",
    color: "blue",
    products: ["IEP Engine", "Multi-Sensory Suite", "Engagement Analytics"],
  },
  {
    title: "Assistive Technology",
    description:
      "AI-powered mobility aids, hearing enhancement, and independence-enabling devices.",
    icon: Accessibility,
    image: "/images/products/lunaguide-mockup.png",
    href: "/products",
    color: "teal",
    products: ["LunaGuide", "LunaMove", "LunaSound"],
  },
  {
    title: "Healthcare Solutions",
    description:
      "Therapeutic immersion, diagnostic AI assistance, and clinical documentation automation.",
    icon: Stethoscope,
    image: "/images/products/lunascan-mockup.png",
    href: "/products",
    color: "purple",
    products: ["LunaCare", "LunaScan", "LunaScribe"],
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    badge: "bg-[var(--luna-purple)] text-white",
    hoverBorder: "hover:border-[var(--luna-purple-light)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    badge: "bg-[var(--azure-blue)] text-white",
    hoverBorder: "hover:border-[var(--azure-blue-light)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    badge: "bg-[var(--accent-teal)] text-white",
    hoverBorder: "hover:border-[var(--accent-teal-light)]",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function ProductCategories() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider"
          >
            Product Categories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Solutions for Every Need
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            From mainstream education to specialized care, our AI-powered
            products adapt to serve diverse communities.
          </motion.p>
        </div>

        {/* Category Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const styles = colorStyles[category.color as keyof typeof colorStyles];
            return (
              <motion.div key={category.title} variants={item}>
                <Link href={category.href}>
                  <div className={`group h-full cursor-pointer overflow-hidden rounded-xl bg-white border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${styles.hoverBorder}`}>
                    {/* Image Section */}
                    <div 
                      className="relative h-40 overflow-hidden"
                      style={{
                        backgroundImage: `url(${category.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${styles.iconBg} shadow-sm`}>
                          <category.icon className={`h-5 w-5 ${styles.iconColor}`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-5">
                      <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--text-primary)]">
                        {category.title}
                        <ArrowRight className="h-4 w-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100 text-[var(--text-link)]" />
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                        {category.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {category.products.slice(0, 3).map((product) => (
                          <span
                            key={product}
                            className={`rounded-full ${styles.badge} px-2.5 py-0.5 text-xs font-medium`}
                          >
                            {product}
                          </span>
                        ))}
                        {category.products.length > 3 && (
                          <span className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs font-medium text-[var(--text-tertiary)]">
                            +{category.products.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
