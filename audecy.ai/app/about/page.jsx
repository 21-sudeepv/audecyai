'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

export default function About() {
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <div className="page-hero-label">Company</div>
        <h1 className="page-hero-title">About <em>Us</em></h1>
        <p className="page-hero-sub">Where expertise meets execution.</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <section id="about" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '60px', padding: 0 }}>
          <div className="about-left reveal visible">
            <p className="about-desc">We are not a generic technology firm. Audecy AI is a focused team of AI engineers, full-stack developers, and business strategists who operate at the intersection of cutting-edge research and real-world deployment.</p>
            <p className="about-desc">From identifying the right problem to delivering a production-ready solution, we take full ownership of the entire journey — so you can focus on what you do best.</p>
            <div className="about-stats" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <div>
                <Link href="/case-studies" style={{ textDecoration: 'none' }}>
                  <div className="stat-num" style={{ fontSize: '1.25rem', lineHeight: '1.5', fontFamily: 'var(--sans)', fontWeight: '400', letterSpacing: '0' }}>We have delivered successfully to clients like Schindler</div>
                  <div className="stat-label" style={{ marginTop: '12px' }}>View Case Studies →</div>
                </Link>
              </div>
              <div><div className="stat-num">100%</div><div className="stat-label">Custom-Built Solutions</div></div>
              <div><div className="stat-num">AI</div><div className="stat-label">First Approach to Every Brief</div></div>
              <div><div className="stat-num">∞</div><div className="stat-label">Problems We Can Solve</div></div>
            </div>
          </div>
          <div className="about-right reveal visible">
            <div className="about-card">
              <div className="about-card-title">Current Live Projects</div>
              <div className="about-card-text">A snapshot of what we're building right now — enterprise-grade solutions across industries, each one stretching the limits of what AI can deliver in the real world.</div>
              <div className="project-accordion">
                {[
                  { title: "Intelligent Fault Prediction Engine", client: "Schindler Lifts", desc: "Real-time ML system that predicts elevator failures before they happen — reducing downtime and maintenance costs at scale." },
                  { title: "Clinical Decision Support Model", client: "MedTech Startup", desc: "An AI model that analyses patient data to surface early risk signals — putting smarter decisions in the hands of clinicians." },
                  { title: "Business Strategy & Growth Consulting", client: "Change Pay", desc: "End-to-end business consulting — from market positioning to revenue strategy — helping Change Pay scale with clarity and conviction." },
                  { title: "Badminton Hub — Court Booking Platform", client: "Genki Sports", desc: "A full-stack sports platform for discovering, booking, and managing badminton courts — built for players, club owners, and communities." },
                  { title: "Smart Finance & Investment Suite", client: "Startup Client", desc: "An intelligent accounting and portfolio tracker that gives users a clear, automated view of their money and investments." }
                ].map((p, idx) => (
                  <div className={`project-item ${expandedProject === idx ? 'expanded' : ''}`} key={idx} onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}>
                    <div className="project-pill">
                      <div className="project-pill-dot"></div>
                      <div className="project-pill-text">{p.title}</div>
                      <div className="project-pill-client">{p.client}</div>
                      <div className="project-pill-arrow">{expandedProject === idx ? '−' : '+'}</div>
                    </div>
                    <div className="project-description"><div className="description-inner">{p.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="page-footer">
        <p>© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        <div className="page-footer-links">
          <Link href="/">← Back to Home</Link>
        </div>
      </footer>
    </>
  );
}
