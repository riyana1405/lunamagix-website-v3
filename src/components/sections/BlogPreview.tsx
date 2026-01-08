"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    title: "AI in Special Education: Beyond the Hype",
    description:
      "A practical look at how artificial intelligence is genuinely helping neurodiverse learners, and where it still falls short.",
    category: "AI & Education",
    date: "2026-01-05",
    author: "Dr. Priya Sharma",
    readTime: "8 min read",
    image: "/images/blog/ai-education-blog.png",
    href: "/resources/blog",
  },
  {
    title: "Early Detection: A Parent's Guide",
    description:
      "Understanding developmental milestones and when to seek professional evaluation for your child.",
    category: "Parent Resources",
    date: "2026-01-02",
    author: "Rajesh Kumar",
    readTime: "6 min read",
    image: "/images/blog/early-detection-blog.png",
    href: "/resources/blog",
  },
  {
    title: "The Future of Inclusive Classrooms",
    description:
      "How immersive technology is creating learning environments that work for every student.",
    category: "EdTech",
    date: "2025-12-28",
    author: "Anita Desai",
    readTime: "7 min read",
    image: "/images/blog/inclusive-classroom-blog.png",
    href: "/resources/blog",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function BlogPreview() {
  return (
    <section className="bg-[var(--bg-secondary)] py-20 sm:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-semibold text-[var(--luna-purple)] uppercase tracking-wider"
            >
              From Our Blog
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-3 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl"
            >
              Latest Insights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-2 text-lg text-[var(--text-secondary)]"
            >
              Research, stories, and practical guidance from our team.
            </motion.p>
          </div>
          <Link
            href="/resources/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-link)] hover:text-[var(--text-link-hover)] transition-colors"
          >
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Blog Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.div key={post.title} variants={itemVariants}>
              <Link href={post.href}>
                <div className="group h-full cursor-pointer overflow-hidden rounded-xl bg-white border border-[var(--border-default)] shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)]">
                  {/* Featured Image using background-image */}
                  <div 
                    className="relative h-48 overflow-hidden"
                    style={{
                      backgroundImage: `url(${post.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent transition-opacity group-hover:opacity-70" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-[var(--luna-purple)] px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="line-clamp-2 text-lg font-semibold text-[var(--text-primary)] group-hover:text-[var(--luna-purple)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="line-clamp-3 text-sm text-[var(--text-secondary)] mt-2 leading-relaxed">
                      {post.description}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-[var(--text-tertiary)]">
                      <span className="flex items-center gap-1">
                        <User className="h-3.5 w-3.5" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
