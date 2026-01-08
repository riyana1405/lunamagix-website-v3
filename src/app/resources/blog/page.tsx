'use client';

import { motion } from 'framer-motion';
import { 
  BookOpen, Calendar, Clock, User, ArrowRight,
  Tag, Search, Filter
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

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
  },
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
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-[var(--gradient-hero)]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[var(--luna-purple)]/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-4 py-2 rounded-full mb-6">
              <BookOpen className="h-4 w-4" />
              <span className="text-sm font-medium">Lunamagix Blog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Insights & Updates
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] mb-8">
              Explore the latest in AI education, accessibility technology, and healthcare innovation.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-8">Featured Articles</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-[var(--border-default)] group shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all"
              >
                <div className="h-48 bg-gradient-to-br from-[var(--luna-purple-lighter)] to-[var(--accent-pink-lighter)] flex items-center justify-center">
                  <BookOpen className="h-16 w-16 text-[var(--luna-purple)]/50" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)] mb-3">
                    <span className="bg-[var(--luna-purple-lighter)] text-[var(--luna-purple)] px-2 py-1 rounded-full text-xs">
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
                  <div className="flex items-center justify-between">
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
            ))}
          </div>
        </div>
      </section>
      
      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-tertiary)]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-[var(--border-default)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--luna-purple)]"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[var(--luna-purple)] text-white'
                      : 'bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl overflow-hidden border border-[var(--border-default)] group hover:border-[var(--luna-purple-light)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300"
              >
                <div className="h-40 bg-[var(--bg-secondary)] flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-[var(--text-tertiary)]" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] mb-3">
                    <span className="bg-[var(--bg-secondary)] text-[var(--text-secondary)] px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--luna-purple)] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--text-tertiary)]">{post.author}</span>
                    <span className="text-[var(--text-tertiary)]">{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-[var(--text-secondary)]">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter CTA */}
      <section className="py-20 bg-[var(--bg-secondary)]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[var(--luna-purple)] to-[var(--accent-pink)] rounded-3xl p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-white/90 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter for the latest insights on AI in education, accessibility, and healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-white/50"
              />
              <button className="px-6 py-3 bg-white text-[var(--luna-purple)] font-semibold rounded-xl hover:bg-white/90 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
