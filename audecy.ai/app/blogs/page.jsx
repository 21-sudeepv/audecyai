'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

const posts = [
  {
    slug: "ai-predictive-maintenance",
    category: "Machine Learning",
    date: "May 2026",
    readTime: "7 min read",
    title: "How Predictive AI is Eliminating Unplanned Downtime in Industrial Operations",
    excerpt: "Unplanned equipment failures cost manufacturers billions annually. We break down how modern ML pipelines are turning sensor data into proactive maintenance — before the fault ever occurs.",
    tags: ["Predictive Maintenance", "IoT", "ML Ops"]
  },
  {
    slug: "llm-enterprise",
    category: "LLM Engineering",
    date: "May 2026",
    readTime: "9 min read",
    title: "Beyond the Chatbot: Building Production-Grade LLM Systems for Enterprise",
    excerpt: "Most LLM deployments fail not because of the model — but because of everything around it. Here's what it actually takes to ship reliable, scalable, and safe LLM applications in production.",
    tags: ["LLMs", "RAG", "Enterprise AI"]
  },
  {
    slug: "ai-product-strategy",
    category: "Strategy",
    date: "April 2026",
    readTime: "6 min read",
    title: "The AI Readiness Audit: How to Know If Your Business is Ready for AI",
    excerpt: "AI is not a plug-and-play solution. Before building, you need the right data infrastructure, problem framing, and organisational alignment. We share our internal audit framework.",
    tags: ["Strategy", "Consulting", "AI Readiness"]
  },
  {
    slug: "computer-vision-retail",
    category: "Computer Vision",
    date: "April 2026",
    readTime: "8 min read",
    title: "Computer Vision in Retail: From Shelf Analytics to Real-Time Loss Prevention",
    excerpt: "Retail is undergoing a silent transformation. We explore the practical applications of CV — from automated inventory tracking to customer behaviour analysis — that are delivering measurable ROI today.",
    tags: ["Computer Vision", "Retail", "Real-time AI"]
  },
  {
    slug: "ai-healthcare-diagnostics",
    category: "Healthcare AI",
    date: "March 2026",
    readTime: "10 min read",
    title: "AI-Assisted Diagnostics: Promise, Peril, and the Path to Clinical Adoption",
    excerpt: "AI can outperform specialists on specific diagnostic tasks. But trust, regulation, and workflow integration remain the true challenges. Here's what the evidence says about deploying AI in clinical settings.",
    tags: ["Healthcare", "Clinical AI", "Ethics"]
  },
  {
    slug: "data-pipeline-architecture",
    category: "Data Engineering",
    date: "March 2026",
    readTime: "11 min read",
    title: "Building Data Pipelines That Actually Scale: Architecture Patterns for 2026",
    excerpt: "Most data pipelines work fine at 10k events/day. They collapse at 10 million. We walk through the architectural decisions — from streaming vs. batch to schema evolution — that determine whether your pipeline grows with you.",
    tags: ["Data Engineering", "MLOps", "Scalability"]
  }
];

export default function Blogs() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(posts.map(p => p.category))];
  const filtered = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-hero">
        <div className="page-hero-label">Insights & Thinking</div>
        <h1 className="page-hero-title">The Audecy <em>Blog</em></h1>
        <p className="page-hero-sub">Deep dives into AI, automation, and the future of intelligent systems — from the team building them.</p>
      </div>

      <div className="blogs-container">
        {/* Category Filter */}
        <div className="blog-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`blog-filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        {activeCategory === 'All' && (
          <div className="blog-featured">
            <div className="blog-featured-meta">
              <span className="blog-category">{posts[0].category}</span>
              <span className="blog-date">{posts[0].date}</span>
              <span className="blog-read-time">{posts[0].readTime}</span>
            </div>
            <h2 className="blog-featured-title">{posts[0].title}</h2>
            <p className="blog-featured-excerpt">{posts[0].excerpt}</p>
            <div className="blog-tags">
              {posts[0].tags.map(tag => <span className="blog-tag" key={tag}>{tag}</span>)}
            </div>
            <a href="#" className="btn-primary" style={{ display: 'inline-block', marginTop: '32px' }}>Read Article →</a>
          </div>
        )}

        {/* Grid */}
        <div className="blog-grid">
          {(activeCategory === 'All' ? filtered.slice(1) : filtered).map((post, idx) => (
            <div className="blog-card" key={idx}>
              <div className="blog-card-meta">
                <span className="blog-category">{post.category}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-tags">
                {post.tags.map(tag => <span className="blog-tag" key={tag}>{tag}</span>)}
              </div>
              <a href="#" className="blog-read-more">Read More →</a>
            </div>
          ))}
        </div>
      </div>

      <div className="page-cta-band">
        <h2>Want us to write about a specific topic?</h2>
        <p>We love hearing from our readers. Send us your questions and we might write about it next.</p>
        <a href="mailto:business@audecyai.com" className="btn-primary">Suggest a Topic</a>
      </div>

      <footer className="page-footer">
        <p>© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        <div className="page-footer-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/faq">FAQ</Link>
        </div>
      </footer>
    </>
  );
}
