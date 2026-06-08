'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import Cursor from '../../components/Cursor';
import '../pages.css';

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Cursor />
      <div className="page-hero" style={{ minHeight: '30vh' }}>
        <div className="page-hero-label">Company</div>
        <h1 className="page-hero-title">Our <em>Team</em></h1>
        <p className="page-hero-sub">The minds behind the machine.</p>
      </div>

      <div className="faq-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <section id="teams" style={{ background: 'var(--paper)', color: 'var(--ink)', padding: '80px 40px', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.02)' }}>
          <div className="team-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '40px' }}>
            {[
              { name: "Sudeep V", role: "CEO & Founder", link: "https://www.linkedin.com/in/sudeep-v-1352b6268/", photo: "/sudeep.png" },
            ].map((member, idx) => (
              <div className="team-card reveal visible" key={idx} style={{ background: '#ffffff', borderRadius: '16px', border: '1px solid rgba(184, 151, 90, 0.1)', padding: '48px 32px', textAlign: 'center', transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', position: 'relative', overflow: 'hidden' }} onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = '0 24px 48px rgba(184, 151, 90, 0.12)'; e.currentTarget.style.borderColor = 'rgba(184, 151, 90, 0.4)'; }} onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)'; e.currentTarget.style.borderColor = 'rgba(184, 151, 90, 0.1)'; }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', opacity: 0.5 }}></div>
                <div className="team-photo" style={{ width: '130px', height: '130px', margin: '0 auto 28px', background: 'linear-gradient(135deg, rgba(184, 151, 90, 0.05) 0%, rgba(184, 151, 90, 0.15) 100%)', border: '2px solid rgba(184, 151, 90, 0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', color: 'var(--gold)', boxShadow: 'inset 0 4px 10px rgba(0,0,0,0.02)', overflow: 'hidden' }}>
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ transform: 'translateY(10px)', opacity: 0.8 }}>👤</span>
                  )}
                </div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', marginBottom: '8px', fontWeight: '500', color: 'var(--ink)' }}>{member.name}</h3>
                <div style={{ width: '32px', height: '2px', background: 'var(--gold)', margin: '0 auto 16px', opacity: 0.4 }}></div>
                <p style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '32px', fontWeight: '600', opacity: 0.7 }}>{member.role}</p>
                <a href={member.link} className="team-social-link" style={{ color: 'var(--gold)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', border: '1px solid rgba(184, 151, 90, 0.4)', borderRadius: '50%', transition: 'all 0.3s ease', background: '#fff' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'scale(1.1)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = 'var(--gold)'; e.currentTarget.style.transform = 'scale(1)'; }} aria-label={`${member.name} LinkedIn`}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            ))}
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
