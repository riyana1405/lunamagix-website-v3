'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, User, ArrowRight,
  Tag, Search, Filter, Sparkles, CheckCircle, TrendingUp, Users, FileText
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from "@/components/ui/button";

const categories = [
  'All',
  'AI in Education',
  'Accessibility',
  'Healthcare AI',
  'Product Updates',
  'Research',
];

const posts = [
  {
    id: 1,
    title: 'The Future of Personalized Learning: How AI Adapts to Every Student',
    excerpt: 'Explore how artificial intelligence is revolutionizing education by creating truly personalized learning experiences that adapt to each student\'s unique needs, pace, and learning style.',
    category: 'AI in Education',
    author: 'Dr. Ananya Sharma',
    date: 'January 5, 2025',
    readTime: '8 min read',
    image: '/blog/personalized-learning.jpg',
    featured: true,
    color: 'purple',
  },
  {
    id: 2,
    title: 'Supporting Neurodiverse Learners: Technology That Celebrates Differences',
    excerpt: 'Learn how modern educational technology is being designed with neurodiversity in mind, creating inclusive learning environments for students with autism, ADHD, dyslexia, and other learning differences.',
    category: 'Accessibility',
    author: 'Vikram Desai',
    date: 'December 28, 2024',
    readTime: '6 min read',
    image: '/blog/neurodiverse-learning.jpg',
    featured: true,
    color: 'blue',
  },
  {
    id: 3,
    title: 'The Science Behind Sensory Rooms: Creating Therapeutic Environments',
    excerpt: 'A deep dive into the research supporting multi-sensory environments for learning and regulation, and how technology is making these spaces more accessible and effective.',
    category: 'Research',
    author: 'Dr. Priya Nair',
    date: 'December 20, 2024',
    readTime: '10 min read',
    image: '/blog/sensory-rooms.jpg',
    featured: false,
    color: 'teal',
  },
  {
    id: 4,
    title: 'VR Therapy: Evidence-Based Applications in Mental Health',
    excerpt: 'Virtual reality is transforming mental health treatment. We explore the clinical evidence for VR-based interventions in anxiety, PTSD, and phobia treatment.',
    category: 'Healthcare AI',
    author: 'Dr. Rahul Mehta',
    date: 'December 15, 2024',
    readTime: '7 min read',
    image: '/blog/vr-therapy.jpg',
    featured: false,
    color: 'purple',
  },
  {
    id: 5,
    title: 'Introducing LunaFit: AI-Powered Sports Coaching for Every Athlete',
    excerpt: 'We\'re excited to announce LunaFit, our new AI coaching platform that brings professional-grade biomechanics analysis to schools, academies, and sports organizations.',
    category: 'Product Updates',
    author: 'Lunamagix Team',
    date: 'December 10, 2024',
    readTime: '4 min read',
    image: '/blog/lunafit-launch.jpg',
    featured: false,
    color: 'blue',
  },
  {
    id: 6,
    title: 'Privacy-First AI: Building Educational Technology That Respects Students',
    excerpt: 'How we approach data privacy, consent, and ethical AI in education—and why these principles are foundational to everything we build at Lunamagix.',
    category: 'AI in Education',
    author: 'Dr. Ananya Sharma',
    date: 'December 5, 2024',
    readTime: '6 min read',
    image: '/blog/privacy-first.jpg',
    featured: false,
    color: 'teal',
  },
  {
    id: 7,
    title: 'Medical Imaging AI: SAM3 and the Future of Diagnostics',
    excerpt: 'The Segment Anything Model has transformed computer vision. Learn how SAM3 is being adapted for medical imaging to assist radiologists and improve diagnostic accuracy.',
    category: 'Healthcare AI',
    author: 'Dr. Kavita Singh',
    date: 'November 28, 2024',
    readTime: '9 min read',
    image: '/blog/medical-imaging.jpg',
    featured: false,
    color: 'purple',
  },
  {
    id: 8,
    title: 'Assistive Technology Revolution: Independence Through Innovation',
    excerpt: 'From AI guide robots to voice-controlled wheelchairs, assistive technology is giving people with disabilities unprecedented independence. Here\'s what\'s possible today.',
    category: 'Accessibility',
    author: 'Vikram Desai',
    date: 'November 20, 2024',
    readTime: '7 min read',
    image: '/blog/assistive-tech.jpg',
    featured: false,
    color: 'blue',
  },
];

const colorStyles = {
  purple: {
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
    categoryBg: "bg-[var(--luna-purple-lighter)]",
    categoryColor: "text-[var(--luna-purple)]",
  },
  blue: {
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
    categoryBg: "bg-[var(--azure-blue-lighter)]",
    categoryColor: "text-[var(--azure-blue)]",
  },
  teal: {
    iconBg: "bg-gradient-to-br from-teal-500 to-cyan-500",
    categoryBg: "bg-[var(--accent-teal-lighter)]",
    categoryColor: "text-[var(--accent-teal)]",
  },
};

const heroStats = [
  { icon: FileText, value: "50+", label: "Articles" },
  { icon: Users, value: "10K+", label: "Readers" },
  { icon: TrendingUp, value: "Weekly", label: "Updates" },
  { icon: BookOpen, value: "6", label: "Topics" },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const featuredPosts = posts.filter(p => p.featured);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] py-16 sm:py-20 lg:py-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-[1400px] px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10">
                  <Sparkles className="h-4 w-4" />
                  Lunamagix Blog
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl leading-[1.1]"
              >
                Insights &{" "}
                <span className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] bg-clip-text text-transparent">
                  Updates
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--text-secondary)] lg:mx-0 mx-auto"
              >
                Explore the latest in AI education, accessibility technology, and healthcare innovation.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Button 
                  size="lg" 
                  asChild 
                  className="group bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-button-hover)] transition-all px-6"
                >
                  <Link href="#articles">
                    Browse Articles
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </motion.div>
              
              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-10 pt-8 border-t border-[var(--border-light)]"
              >
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Expert Authors</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Research-Backed</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                    <span>Weekly Updates</span>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {heroStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="rounded-xl bg-white border border-[var(--border-default)] p-6 shadow-[var(--shadow-lg)]"
                  >
                    <stat.icon className="h-8 w-8 text-[var(--luna-purple)] mb-2" />
                    <div className="text-2xl font-bold text-[var(--luna-purple)]">{stat.value}</div>
                    <div className="text-sm text-[var(--text-tertiary)]">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1400px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <Sparkles className="h-4 w-4" />
              Featured Articles
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Editor&apos;s Picks
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => {
              const styles = colorStyles[post.color as keyof typeof colorStyles];
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden border border-[var(--border-default)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:border-[var(--luna-purple-light)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`h-48 ${styles.iconBg} flex items-center justify-center`}>
                    <BookOpen className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)] mb-3">
                      <span className={`${styles.categoryBg} ${styles.categoryColor} px-3 py-1 rounded-full text-xs font-medium`}>
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--luna-purple)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[var(--border-light)]">
                      <div className="flex items-center gap-2 text-sm text-[var(--text-tertiary)]">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <span className="text-sm text-[var(--text-tertiary)] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section id="articles" className="py-20 sm:py-28 bg-[var(--bg-secondary)]">
        <div className="mx-auto max-w-[1400px] px-6">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)]">
              <BookOpen className="h-4 w-4" />
              All Articles
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              Browse Our Library
            </h2>
          </motion.div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--luna-purple)] shadow-[var(--shadow-sm)] transition-all"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] text-white shadow-[var(--shadow-md)]'
                      : 'bg-white text-[var(--text-secondary)] hover:bg-[var(--luna-purple-lighter)] hover:text-[var(--luna-purple)] border border-[var(--border-default)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => {
              const styles = colorStyles[post.color as keyof typeof colorStyles];
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group bg-white rounded-xl overflow-hidden border border-[var(--border-default)] hover:border-[var(--luna-purple-light)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`h-40 ${styles.iconBg} flex items-center justify-center`}>
                    <BookOpen className="h-12 w-12 text-white/80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] mb-3">
                      <span className={`${styles.categoryBg} ${styles.categoryColor} px-2 py-1 rounded-full font-medium`}>
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--luna-purple)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm pt-4 border-t border-[var(--border-light)]">
                      <span className="text-[var(--text-tertiary)] flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="text-[var(--text-tertiary)] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
          
          {filteredPosts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12 bg-white rounded-xl border border-[var(--border-default)]"
            >
              <Search className="h-12 w-12 text-[var(--text-tertiary)] mx-auto mb-4" />
              <p className="text-[var(--text-secondary)]">No articles found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="relative py-20 sm:py-28 overflow-hidden bg-[var(--gradient-hero)]">
        {/* Background blur effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-[var(--luna-purple)]/5 blur-[120px]" />
          <div className="absolute -bottom-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-[var(--azure-blue)]/5 blur-[120px]" />
        </div>
        
        <div className="relative mx-auto max-w-4xl px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-[var(--luna-purple-lighter)] px-4 py-2 text-sm font-semibold text-[var(--luna-purple)] border border-[var(--luna-purple)]/10 mb-6">
              <Sparkles className="h-4 w-4" />
              Stay Informed
            </span>
            <h2 className="text-3xl font-bold text-[var(--text-primary)] sm:text-4xl">
              Subscribe to Our Newsletter
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--text-secondary)]">
              Get the latest insights on AI in education, accessibility, and healthcare delivered to your inbox.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--luna-purple)] shadow-[var(--shadow-sm)]"
              />
              <Button className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--azure-blue)] hover:from-[var(--luna-purple-dark)] hover:to-[var(--azure-blue-dark)] text-white shadow-[var(--shadow-md)] px-6">
                Subscribe
              </Button>
            </div>
            <div className="mt-10 pt-8 border-t border-[var(--border-light)]">
              <div className="flex flex-wrap items-center justify-center gap-6">
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Weekly updates</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>No spam</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <CheckCircle className="h-5 w-5 text-[var(--success)]" />
                  <span>Unsubscribe anytime</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
