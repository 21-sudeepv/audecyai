'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "What exactly does Audecy AI do?",
        a: "Audecy AI is an elite AI consulting and product development agency. We design, build, and deploy custom AI systems, automation solutions, and digital products for startups and enterprises. We handle everything — from strategy and architecture to engineering and production deployment."
      },
      {
        q: "Who do you typically work with?",
        a: "We work with ambitious founders, CTOs, and business leaders across sectors including manufacturing, healthcare, fintech, logistics, edtech, and SaaS. Whether you're a seed-stage startup or a mid-market enterprise, we tailor our approach to your scale and ambition."
      },
      {
        q: "Are you a product company or a services company?",
        a: "Both. We build bespoke solutions as an agency, and we also develop our own AI-native products. This means you get the creative energy of a product team with the execution discipline of a top-tier consultancy."
      }
    ]
  },
  {
    category: "Engagements",
    items: [
      {
        q: "How do I start a project with Audecy AI?",
        a: "Simply reach out via email or book a call through our Calendly link. We'll schedule a discovery call to understand your challenge, then propose a tailored approach. No fluff — just a real conversation about what's possible."
      },
      {
        q: "What does a typical engagement look like?",
        a: "Every engagement follows our four-phase process: Discover → Architect → Build → Deploy & Scale. Timelines range from 4–6 weeks for MVPs to 4–6 months for enterprise-grade systems. We provide regular updates throughout."
      },
      {
        q: "Do you work on a project or retainer basis?",
        a: "Both models are available. Project-based engagements are ideal for defined scopes with clear deliverables. Retainer arrangements work well for ongoing AI development, monitoring, and scaling needs."
      },
      {
        q: "Can you work with our existing team?",
        a: "Absolutely. We frequently embed alongside in-house engineering teams, acting as AI specialists and delivery accelerators. We're collaborative by design and adapt to your existing workflows and tooling."
      }
    ]
  },
  {
    category: "Technology",
    items: [
      {
        q: "What tech stack do you work with?",
        a: "We're stack-agnostic and choose tools based on what's right for your problem. For AI/ML: Python, PyTorch, TensorFlow, scikit-learn, Hugging Face. For apps: React, Next.js, Node.js, Flutter. For infrastructure: AWS, GCP, Azure, Docker, Kubernetes."
      },
      {
        q: "Can you integrate AI into our existing software?",
        a: "Yes, this is one of our specialties. We assess your current systems, identify the highest-impact integration points, and build AI layers that enhance your existing product without requiring a complete rebuild."
      },
      {
        q: "Do you build with LLMs like GPT or Claude?",
        a: "Yes. We have deep experience with large language model integration — including fine-tuning, RAG (retrieval-augmented generation), prompt engineering, and building production-grade LLM pipelines tailored to enterprise use cases."
      }
    ]
  },
  {
    category: "Pricing & IP",
    items: [
      {
        q: "How is pricing structured?",
        a: "Pricing is scoped per engagement based on complexity, timeline, and team size required. We provide transparent fixed-price proposals for defined projects, and monthly rates for retainer arrangements. Book a call to get a tailored quote."
      },
      {
        q: "Who owns the IP of what you build?",
        a: "You do. All intellectual property created during your engagement belongs entirely to you. We use clear contractual agreements to protect your ownership from day one."
      },
      {
        q: "Do you sign NDAs?",
        a: "Yes, without hesitation. We treat all client information with the highest level of confidentiality. NDAs are standard practice at Audecy AI before any technical discussions begin."
      }
    ]
  }
];

export default function FAQ() {
  const [open, setOpen] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = (catIdx, itemIdx) => {
    const key = `${catIdx}-${itemIdx}`;
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <Cursor />
      <div className="page-hero">
        <div className="page-hero-label">Got Questions?</div>
        <h1 className="page-hero-title">Frequently Asked <em>Questions</em></h1>
        <p className="page-hero-sub">Everything you need to know before we start building together.</p>
      </div>

      <div className="faq-container">
        {faqs.map((cat, catIdx) => (
          <div className="faq-category" key={catIdx}>
            <div className="faq-category-label">{cat.category}</div>
            {cat.items.map((item, itemIdx) => {
              const key = `${catIdx}-${itemIdx}`;
              const isOpen = !!open[key];
              return (
                <div
                  className={`faq-item ${isOpen ? 'faq-open' : ''}`}
                  key={itemIdx}
                  onClick={() => toggle(catIdx, itemIdx)}
                >
                  <div className="faq-question">
                    <span>{item.q}</span>
                    <div className="faq-icon">{isOpen ? '−' : '+'}</div>
                  </div>
                  <div className="faq-answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="page-cta-band">
        <h2>Still have questions?</h2>
        <p>Our team is happy to walk you through anything. Let's talk.</p>
        <a href="mailto:business@audecyai.com" className="btn-primary">Email Us Directly</a>
      </div>

      <footer className="page-footer">
        <p>© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        <div className="page-footer-links">
          <Link href="/">← Back to Home</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
      </footer>
    </>
  );
}
