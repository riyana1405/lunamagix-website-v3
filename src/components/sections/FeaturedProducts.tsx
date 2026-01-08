"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ArrowRight, Monitor, Shield, Activity, BookOpen, Sparkles, CheckCircle } from "lucide-react";

const products = [
  {
    id: "lunalearn",
    name: "LunaLearn",
    tagline: "The Operating System for Modern Education",
    description:
      "A single platform where every stakeholder — parents, teachers, therapists, and administrators — sees what they need, contributes what they know, and trusts that nothing falls through the cracks.",
    icon: BookOpen,
    image: "/images/products/lunalearn-mockup.png",
    features: [
      "Smart Attendance with facial recognition",
      "AI-powered engagement analytics",
      "Intelligent presentation system",
      "Individualized Education Program (IEP) engine",
      "Smart assessment with manuscript analysis",
    ],
    href: "/products/education/lunalearn",
    color: "purple",
  },
  {
    id: "lunaviz",
    name: "LunaViz 3D",
    tagline: "Learning Leaps Off the Screen",
    description:
      "Immersive 3D presentation technology that brings complex concepts to life without requiring VR headsets — perfect for children who can't use traditional immersive devices.",
    icon: Monitor,
    image: "/images/products/lunaviz-mockup.png",
    features: [
      "Spin display with gesture sensors",
      "AI-powered 3D content creation",
      "Multimodal inputs: voice, gesture, touch",
      "Real-time 3D annotations",
      "Customizable sensory levels",
    ],
    href: "/products/education/lunaviz",
    color: "blue",
  },
  {
    id: "lunawatch",
    name: "LunaWatch",
    tagline: "360° Intelligent Campus Protection",
    description:
      "AI-powered scene understanding cameras with prognostic threat detection — identifying concerning patterns before incidents occur.",
    icon: Shield,
    image: "/images/products/lunawatch-mockup.png",
    features: [
      "Real-time AI analysis",
      "Behavioral anomaly detection",
      "Crowd density monitoring",
      "Drone patrol integration",
      "Privacy-preserving analytics",
    ],
    href: "/products/education/lunawatch",
    color: "teal",
  },
  {
    id: "lunafit",
    name: "LunaFit",
    tagline: "Your Personal AI Coach",
    description:
      "Vision-based AI coaching for sports, yoga, and physical therapy — providing real-time corrective feedback and gamified progress tracking.",
    icon: Activity,
    image: "/images/products/lunafit-mockup.png",
    features: [
      "SAM3-based pose estimation",
      "Real-time corrective feedback",
      "Gamified progress tracking",
      "AI umpiring systems",
      "Gross motor training for therapy",
    ],
    href: "/products/education/lunafit",
    color: "purple",
  },
  {
    id: "lunasense",
    name: "LunaSense",
    tagline: "Every Sense, Every Learner",
    description:
      "A complete multi-sensory engagement suite designed for neurodiverse learners — from mixed reality experiences to intelligent wearables.",
    icon: Sparkles,
    image: "/images/products/lunasense-mockup.png",
    features: [
      "Mixed reality spatial experiences",
      "Virtual touch surfaces",
      "Intelligent haptic wearables",
      "Acoustic rhythm training",
      "Sensory conditioning environments",
    ],
    href: "/products/education/lunasense",
    color: "blue",
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-[var(--luna-purple-lighter)]",
    iconColor: "text-[var(--luna-purple)]",
    tabActive: "data-[state=active]:bg-[var(--luna-purple)] data-[state=active]:text-white",
    tabHover: "hover:bg-[var(--luna-purple-lighter)]",
    checkColor: "text-[var(--luna-purple)]",
    tagline: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-[var(--azure-blue-lighter)]",
    iconColor: "text-[var(--azure-blue)]",
    tabActive: "data-[state=active]:bg-[var(--azure-blue)] data-[state=active]:text-white",
    tabHover: "hover:bg-[var(--azure-blue-lighter)]",
    checkColor: "text-[var(--azure-blue)]",
    tagline: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-[var(--accent-teal-lighter)]",
    iconColor: "text-[var(--accent-teal)]",
    tabActive: "data-[state=active]:bg-[var(--accent-teal)] data-[state=active]:text-white",
    tabHover: "hover:bg-[var(--accent-teal-lighter)]",
    checkColor: "text-[var(--accent-teal)]",
    tagline: "text-[var(--accent-teal)]",
  },
};

export function FeaturedProducts() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]"
          >
            <Sparkles className="h-4 w-4" />
            Our Products
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]"
          >
            Explore our flagship education technology solutions designed to transform learning experiences.
          </motion.p>
        </div>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <Tabs defaultValue="lunalearn" className="w-full">
            <TabsList className="mx-auto mb-10 flex h-auto w-full max-w-4xl flex-wrap justify-center gap-2 bg-transparent p-1">
              {products.map((product) => {
                const styles = colorStyles[product.color as keyof typeof colorStyles];
                return (
                  <TabsTrigger
                    key={product.id}
                    value={product.id}
                    className={`rounded-full px-4 py-2.5 text-sm font-medium text-[var(--text-secondary)] border border-transparent transition-all duration-200 ${styles.tabActive} ${styles.tabHover}`}
                  >
                    <product.icon className="mr-2 h-4 w-4" />
                    {product.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {products.map((product) => {
              const styles = colorStyles[product.color as keyof typeof colorStyles];
              return (
                <TabsContent key={product.id} value={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center bg-[var(--gray-50)] rounded-2xl p-6 lg:p-10 border border-[var(--border-default)]"
                  >
                    {/* Product Info */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
                      >
                        <product.icon className={`h-6 w-6 ${styles.iconColor}`} />
                      </div>
                      <h3 className="mt-5 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                        {product.name}
                      </h3>
                      <p className={`mt-1 text-base font-semibold ${styles.tagline}`}>
                        {product.tagline}
                      </p>
                      <p className="mt-4 text-base leading-relaxed text-[var(--text-secondary)]">
                        {product.description}
                      </p>
                      <ul className="mt-6 space-y-3">
                        {product.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-3 text-sm text-[var(--text-secondary)]"
                          >
                            <CheckCircle className={`h-5 w-5 flex-shrink-0 ${styles.checkColor}`} />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <Button 
                          asChild 
                          className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white"
                        >
                          <Link href={product.href}>
                            Learn More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </Button>
                      </div>
                    </div>

                    {/* Product Preview - Using background-image for reliable display */}
                    <div className="flex items-center justify-center order-1 lg:order-2">
                      <div className="relative w-full overflow-hidden rounded-xl bg-white border border-[var(--border-default)] shadow-[var(--shadow-lg)]">
                        <div 
                          className="w-full aspect-[16/9]"
                          style={{
                            backgroundImage: `url(${product.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                </TabsContent>
              );
            })}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
