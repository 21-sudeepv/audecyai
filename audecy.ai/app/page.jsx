'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);

  const [waPos, setWaPos] = useState(() => {
    if (typeof window === 'undefined') return { bottom: 40, right: 40 };
    const saved = localStorage.getItem('waPos');
    return saved ? JSON.parse(saved) : { bottom: 40, right: 40 };
  });
  const waBtnRef = useRef(null);
  const dragInfo = useRef({ isDragging: false, startX: 0, startY: 0, startBottom: 0, startRight: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      requestAnimationFrame(animateRing);
    };

    const handleMouseEnter = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.6)';
        ringRef.current.style.borderColor = 'rgba(184,151,90,0.9)';
      }
    };

    const handleMouseLeave = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)';
        ringRef.current.style.borderColor = 'rgba(184,151,90,0.4)';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    const isMobileDevice = window.innerWidth <= 1024;
    let animationId;
    if (!isMobileDevice) animationId = requestAnimationFrame(animateRing);

    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const handleDragStart = (e) => {
      if (e.target.closest('.whatsapp-float')) {
        dragInfo.current.isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        dragInfo.current.startX = clientX;
        dragInfo.current.startY = clientY;
        dragInfo.current.startBottom = waPos.bottom;
        dragInfo.current.startRight = waPos.right;
        if (e.type === 'mousedown') e.preventDefault();
      }
    };

    const handleDragMove = (e) => {
      if (!dragInfo.current.isDragging) return;
      const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
      const diffX = clientX - dragInfo.current.startX;
      const diffY = clientY - dragInfo.current.startY;
      const newBottom = Math.max(20, Math.min(window.innerHeight - 80, dragInfo.current.startBottom - diffY));
      const newRight = Math.max(20, Math.min(window.innerWidth - 80, dragInfo.current.startRight - diffX));
      setWaPos({ bottom: newBottom, right: newRight });
    };

    const handleDragEnd = () => {
      if (dragInfo.current.isDragging) {
        dragInfo.current.isDragging = false;
        localStorage.setItem('waPos', JSON.stringify(waPos));
      }
    };

    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleDragEnd);
    window.addEventListener('touchmove', handleDragMove, { passive: false });
    window.addEventListener('touchend', handleDragEnd);
    window.addEventListener('mousedown', handleDragStart);
    window.addEventListener('touchstart', handleDragStart, { passive: true });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else if (entry.target.id !== 'hero') {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -15% 0px' });

    document.querySelectorAll('.reveal, .section-reveal').forEach(el => observer.observe(el));

    const modalTimer = setTimeout(() => setIsModalOpen(true), 60000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      window.removeEventListener('touchmove', handleDragMove);
      window.removeEventListener('touchend', handleDragEnd);
      window.removeEventListener('mousedown', handleDragStart);
      window.removeEventListener('touchstart', handleDragStart);
      cancelAnimationFrame(animationId);
      clearTimeout(modalTimer);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="cursor" id="cursor" ref={cursorRef}></div>
      <div className="cursor-ring" id="cursorRing" ref={ringRef}></div>



      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>
        <div className="hero-ticker">Intelligence, Engineered for Outcomes</div>
        <h1 className="hero-headline">We build <em>AI</em><br />that actually<br />works.</h1>
        <p className="hero-sub">
          Audecy AI is an elite consulting and product development agency. We partner with startups and enterprises to design, build, and deploy AI and automation solutions that create lasting competitive advantage.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Begin Your Project</a>
          <a href="#services" className="btn-ghost">Explore Our Work <span>→</span></a>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section reveal">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">Predictive Maintenance</div>
              <div className="marquee-item">AI Product Development</div>
              <div className="marquee-item">Machine Learning</div>
              <div className="marquee-item">Process Automation</div>
              <div className="marquee-item">Web &amp; App Development</div>
              <div className="marquee-item">Business Consulting</div>
              <div className="marquee-item">Computer Vision</div>
              <div className="marquee-item">NLP Solutions</div>
            </React.Fragment>
          ))}
        </div>
      </div>



      {/* SERVICES */}
      <section id="services" className="section-reveal">
        <div className="services-header reveal">
          <div><div className="section-label">What We Do</div><h2 className="section-title">Our <em>Services</em></h2></div>
          <p className="services-header-right">Every engagement is bespoke. We listen first, then architect a solution precisely right for your challenge — not a template, not an off-the-shelf product.</p>
        </div>
        <div className="services-grid">
          {[
            { num: "01", icon: "⬡", name: "AI & Machine Learning", desc: "Custom models, pipelines, and intelligent systems designed for your exact use case. From predictive analytics to generative AI, we turn data into decisions.", tags: ["Predictive Models", "NLP", "Computer Vision", "LLM Integration"] },
            { num: "02", icon: "◈", name: "Automation & Process Intelligence", desc: "Eliminate inefficiency. We audit, redesign, and automate your operational workflows using AI-powered systems that scale with your business and never sleep.", tags: ["RPA", "Workflow AI", "Anomaly Detection", "IoT Integration"] },
            { num: "03", icon: "◎", name: "Web & App Development", desc: "Precision-engineered digital products built for performance and scale. Web platforms, mobile apps, and full-stack systems crafted to the highest standard.", tags: ["React / Next.js", "React Native", "Flutter", "Node.js"] },
            { num: "04", icon: "◇", name: "AI Product Development", desc: "From idea to market. We partner with startups to shape, build, and launch AI-native products — handling strategy, architecture, and engineering end-to-end.", tags: ["MVP Development", "AI Integration", "Product Strategy", "GTM Support"] },
            { num: "05", icon: "△", name: "Data Engineering & Analytics", desc: "Your data is only as valuable as what you extract from it. We build infrastructure, models, and dashboards that turn raw data into strategic intelligence.", tags: ["Data Pipelines", "BI Dashboards", "Forecasting", "MLOps"] },
            { num: "06", icon: "○", name: "AI Business Consulting", desc: "Not sure where AI fits into your business? We assess your operations, identify high-impact opportunities, and give you a clear, actionable roadmap to transformation.", tags: ["AI Readiness Audit", "Opportunity Mapping", "Tech Strategy", "Implementation Planning"] }
          ].map((s, idx) => (
            <div className="service-card reveal" key={idx}>
              <div className="service-num">{s.num}</div>
              <span className="service-icon">{s.icon}</span>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">{s.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES */}
      <section id="case-studies" className="section-reveal">
        <div className="section-label reveal">Case Studies</div>
        <h2 className="section-title reveal">How we solve <em>real issues.</em></h2>
        
        <div className="case-studies-container reveal">
          <div className="case-studies-list">
            {[
              {
                id: 0,
                company: "Schindler Lifts",
                title: "Intelligent Fault Prediction Engine",
                summary: "Predicting elevator failures before they happen."
              },
              {
                id: 1,
                company: "Change Pay",
                title: "Business Strategy & Growth Consulting",
                summary: "End-to-end consulting for market positioning."
              },
              {
                id: 2,
                company: "MedTech Startup",
                title: "Clinical Decision Support Model",
                summary: "AI model analyzing patient data for early risk signals."
              }
            ].map((cs) => (
              <div 
                key={cs.id}
                className={`case-study-card ${activeCaseStudy === cs.id ? 'active' : ''}`}
                onClick={() => setActiveCaseStudy(cs.id)}
              >
                {cs.id === 0 ? (
                  <img src="/schindler.png" alt="Schindler Lifts" className="cs-card-logo" />
                ) : cs.id === 1 ? (
                  <img src="/changepay.png" alt="Change Pay" className="cs-card-logo" />
                ) : (
                  <div className="cs-card-company">{cs.company}</div>
                )}
                <div className="cs-card-title">{cs.title}</div>
                <p className="cs-card-summary">{cs.summary}</p>
              </div>
            ))}
          </div>
          
          <div className="case-studies-detail">
            {activeCaseStudy === 0 && (
              <div className="cs-detail-content animate-fade-in">
                <img src="/schindler.png" alt="Schindler Lifts" className="cs-detail-logo" />
                <h3 className="cs-detail-title">Intelligent Fault Prediction Engine</h3>
                <div className="cs-detail-block">
                  <h4>The Challenge</h4>
                  <p>Unplanned elevator downtime was costing significant capital in emergency maintenance and damaging client trust.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>Our Solution</h4>
                  <p>We built a real-time ML system that ingests IoT sensor data from lifts to predict failures before they happen, dispatching maintenance teams preemptively.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>The Outcome</h4>
                  <p>Reduced downtime by over 40% in the first quarter and shifted the maintenance model from reactive to predictive.</p>
                </div>
              </div>
            )}
            
            {activeCaseStudy === 1 && (
              <div className="cs-detail-content animate-fade-in">
                <img src="/changepay.png" alt="Change Pay" className="cs-detail-logo" />
                <h3 className="cs-detail-title">Business Strategy & Growth Consulting</h3>
                <div className="cs-detail-block">
                  <h4>The Challenge</h4>
                  <p>Struggling to scale and articulate a clear value proposition in a crowded market.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>Our Solution</h4>
                  <p>Delivered an end-to-end business consulting framework, restructuring their market positioning, and designing a scalable revenue strategy.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>The Outcome</h4>
                  <p>Unlocked a new revenue channel within weeks and provided the strategic clarity needed to confidently pursue Series A funding.</p>
                </div>
              </div>
            )}
            
            {activeCaseStudy === 2 && (
              <div className="cs-detail-content animate-fade-in">
                <div className="cs-detail-company">MedTech Startup</div>
                <h3 className="cs-detail-title">Clinical Decision Support Model</h3>
                <div className="cs-detail-block">
                  <h4>The Challenge</h4>
                  <p>Clinicians were overwhelmed by raw patient data, leading to delayed diagnoses of critical conditions.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>Our Solution</h4>
                  <p>Developed an AI decision support tool that analyzes real-time vitals and historical data to surface early risk signals on a unified dashboard.</p>
                </div>
                <div className="cs-detail-block">
                  <h4>The Outcome</h4>
                  <p>Reduced diagnostic delay by 25% and seamlessly integrated into the clinicians' daily workflows without adding friction.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="section-reveal">
        <div className="section-label reveal">How We Work</div>
        <h2 className="section-title reveal">A process built for <em>precision.</em></h2>
        <div className="process-steps">
          {[
            { num: "I", title: "Discover", desc: "We open with deep listening. Understanding your business, your constraints, and the real problem beneath the surface — before writing a single line of code." },
            { num: "II", title: "Architect", desc: "We design the right solution — technically sound, scalable, and aligned to your goals. No bloat, no guesswork. A clear blueprint before we build." },
            { num: "III", title: "Build", desc: "Agile, iterative, and transparent. You see progress at every stage. Our engineers deliver with speed and rigour — keeping you in the loop throughout." },
            { num: "IV", title: "Deploy & Scale", desc: "We don't hand over and disappear. We deploy, monitor, and stay with you as your solution grows — ensuring it performs in production, not just in demos." }
          ].map((step, idx) => (
            <div className="process-step reveal" key={idx}>
              <div className="step-num-wrap"><span className="step-num">{step.num}</span></div>
              <div className="step-title">{step.title}</div>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="section-reveal">
        <div className="why-left reveal">
          <div className="section-label">Why Audecy AI</div>
          <h2 className="section-title">The <em>edge</em><br />you've been<br />looking for.</h2>
          <p style={{ color: 'var(--smoke)', fontSize: '1.1rem', lineHeight: '1.8', marginTop: '32px', fontWeight: '300' }}>
            We built Audecy AI on a simple belief — that intelligent technology, applied with precision, can change the trajectory of a business. We don't just consult. We build, ship, and stand behind everything we deliver.
          </p>
        </div>
        <div className="why-right">
          {[
            { num: "01", title: "Specialists, Not Generalists", text: "We live in AI and automation. It's not a service we bolted on — it's the only thing we do, and we do it at an elite level." },
            { num: "02", title: "End-to-End Ownership", text: "From strategy to production deployment, we handle the full lifecycle. One team, total accountability, zero handoff gaps." },
            { num: "03", title: "Built for Real Results", text: "We measure success by outcomes, not deliverables. Our solutions are designed to work under real conditions — not just pass a demo." }
          ].map((item, idx) => (
            <div className="why-item reveal" key={idx}>
              <div className="why-item-num">{item.num}</div>
              <div><div className="why-item-title">{item.title}</div><p className="why-item-text">{item.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="section-reveal">
        <div className="section-label reveal">Industries We Serve</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto' }}>No sector is <em>off limits.</em></h2>
        <div className="industries-grid reveal">
          {["Manufacturing & Industrial","EdTech","Healthcare","Fintech","Logistics & Supply Chain","Real Estate","Retail & E-Commerce","SaaS Startups","Legal & Compliance","Energy & Utilities","HR & Talent","Media & Content"].map(industry => (
            <div className="industry-pill" key={industry}>{industry}</div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-reveal">
        <div className="section-label reveal" style={{ justifyContent: 'center' }}>What Clients Say</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto 0' }}>Trusted by those who <em>demand results.</em></h2>
        <div className="client-logos-marquee">
          <div className="client-logos-track">
            {[...Array(2)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="client-logo"><img src="/schindler.png" alt="Schindler" className="client-logo-img" /></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><img src="/changepay.png" alt="ChangePay" className="client-logo-img" /></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>Genki<em>Sports</em></span></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>MedTech<em>AI</em></span></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>FinSuite</span></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>DataCore</span></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>NovaSaaS</span></div>
                <div className="client-logo-divider">✦</div>
                <div className="client-logo"><span>Nexus<em>Labs</em></span></div>
                <div className="client-logo-divider">✦</div>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="testimonials-grid">
          {[
            { quote: "Audecy AI completely transformed our maintenance operations. The predictive model they built reduced our downtime by over 40% within the first quarter. Genuinely impressive work.", name: "Head of Engineering", role: "Schindler India", initials: "HE" },
            { quote: "They didn't just deliver a product — they became true partners in our vision. The AI decision support tool they built is now central to how our clinical team operates every day.", name: "Dr. Priya Nair", role: "Co-founder, MedTech Startup", initials: "PN" },
            { quote: "Working with Audecy AI gave us the strategic clarity we were missing. Their consulting framework helped us reposition our product and unlock a new revenue channel within weeks.", name: "Agam Gayatriay", role: "Founder, Gradefied", initials: "AG" },
            { quote: "The Badminton Hub platform exceeded everything we hoped for. Fast, beautiful, and built exactly to spec. The team was communicative and delivered ahead of schedule.", name: "Sunil", role: "Founder, Genki Sports", initials: "S" },
            { quote: "Audecy AI's technical depth is rare. They understood our operational bottlenecks instantly and built an automation solution that improves our efficiency effortlessly.", name: "Plant Manager", role: "Water Treatment Plant", initials: "PM" },
            { quote: "From the first call to final deployment, the experience was seamless. They bring the speed of a startup with the rigour of an enterprise team. Highly recommended.", name: "VP of Engineering", role: "Enterprise SaaS Company", initials: "VP" }
          ].map((t, idx) => (
            <div className="testimonial-card reveal" key={idx}>
              <div className="testimonial-quote-mark">❝</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.initials}</div>
                <div><div className="testimonial-name">{t.name}</div><div className="testimonial-role">{t.role}</div></div>
              </div>
            </div>
          ))}
        </div>
      </section>



      {/* CONTACT */}
      <section 
        id="contact" 
        className="section-reveal" 
        style={{ background: 'var(--gold)', color: 'var(--ink)', borderTop: '1px solid rgba(184, 151, 90, 0.1)', textAlign: 'center', padding: '120px 24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        onMouseEnter={() => {
          if (cursorRef.current) cursorRef.current.style.background = 'var(--ink)';
          if (ringRef.current) ringRef.current.style.borderColor = 'rgba(8, 8, 8, 0.4)';
        }}
        onMouseLeave={() => {
          if (cursorRef.current) cursorRef.current.style.background = 'var(--gold)';
          if (ringRef.current) ringRef.current.style.borderColor = 'rgba(184, 151, 90, 0.4)';
        }}
      >
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div className="modal-icon" style={{ color: 'var(--ink)' }}>✦</div>
          <h2 className="modal-title" style={{ margin: '0 auto 24px', color: 'var(--ink)' }}>Get your company an <em style={{ color: 'var(--ink)' }}>AI audit</em></h2>
          <p className="modal-text" style={{ fontSize: '1.1rem', marginBottom: '40px', color: 'rgba(10, 10, 10, 0.75)' }}>
            Discover where AI can drive the highest ROI for your business. Let's map out your operations and identify high-impact automation opportunities.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', flexDirection: 'row' }}>
            <a href="https://calendly.com/business-audecyai/new-meeting-1" className="btn-dark" target="_blank" rel="noopener noreferrer">Book a Call</a>
            <a href="https://wa.me/919133865537?text=Hello" className="btn-ghost" style={{ color: 'var(--ink)', borderColor: 'var(--ink)' }} target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="reveal">
        <div className="footer-top">
          <a href="#" className="footer-logo" aria-label="Audecy AI Home">
            <img src="/logo.png" alt="Audecy AI" className="footer-logo-img" />
          </a>
          <p className="footer-tagline">Intelligence, Engineered for Outcomes.</p>
        </div>
        <div className="footer-mid">
          <div className="footer-address">
            <p className="footer-address-name">NITK Science &amp; Technology Entrepreneurs&apos; Park (NITK-STEP)</p>
            <p className="footer-address-line">NITK Campus, Srinivasnagar, Surthkal</p>
            <p className="footer-address-line">Mangaluru – 575025, Karnataka, India</p>
          </div>
          <div className="footer-know-more">
            <span className="footer-socials-label">Got a question? Check these out</span>
            <div className="footer-know-links">
              <Link href="/faq" className="footer-know-link">
                <span className="footer-know-icon">❓</span>
                <div><div className="footer-know-title">FAQ</div><div className="footer-know-desc">Common questions answered</div></div>
              </Link>
              <Link href="/blogs" className="footer-know-link">
                <span className="footer-know-icon">✦</span>
                <div><div className="footer-know-title">Blogs</div><div className="footer-know-desc">AI insights &amp; deep dives</div></div>
              </Link>
            </div>
          </div>
          <div className="footer-socials">
            <span className="footer-socials-label">Follow Us</span>
            <div className="footer-socials-icons">
              <a href="https://www.linkedin.com/in/sudeep-v-1352b6268/" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="https://www.instagram.com/audecyai" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://calendly.com/business-audecyai/new-meeting-1" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Book a call on Calendly">
                <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.89 2 3 2.9 3 4v16a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-1zm0 17H5V9h14v11zM5 7V4h2v1h2V4h6v1h2V4h2v3H5zm2 5h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm-8 4h2v2H7v-2zm4 0h2v2h-2v-2z"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <p className="footer-copy">© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
          <div className="footer-legal-links" style={{ display: 'flex', gap: '24px' }}>
            <Link href="/privacy-policy" style={{ color: 'var(--smoke)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.14em', textDecoration: 'none', opacity: 0.6, fontFamily: 'var(--mono)' }}>Privacy Policy</Link>
            <Link href="/terms-and-conditions" style={{ color: 'var(--smoke)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.14em', textDecoration: 'none', opacity: 0.6, fontFamily: 'var(--mono)' }}>Terms &amp; Conditions</Link>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/919133865537?text=Hello" className="whatsapp-float" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp" ref={waBtnRef}
        style={{ bottom: `${waPos.bottom}px`, right: `${waPos.right}px`, cursor: dragInfo.current.isDragging ? 'grabbing' : 'grab' }}
        onClick={(e) => { if (Math.abs(waPos.right - dragInfo.current.startRight) > 5) e.preventDefault(); }}>
        <div className="wa-icon-wrapper">
          <svg viewBox="0 0 448 512" width="24" height="24">
            <path fill="white" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.5 3.6 35.2 2.2 10.8-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </div>
        <span className="whatsapp-float-label">Let&apos;s Chat</span>
      </a>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setIsModalOpen(false)} aria-label="Close Modal">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            </button>
            <div className="modal-icon">✦</div>
            <h2 className="modal-title">Get your company an <em>AI audit</em></h2>
            <p className="modal-text">Discover where AI can drive the highest ROI for your business. Let&apos;s map out your operations and identify high-impact automation opportunities.</p>
            <div className="modal-actions">
              <a href="https://calendly.com/business-audecyai/new-meeting-1" className="btn-modal-primary" target="_blank" rel="noopener noreferrer">Book a Call</a>
              <a href="https://wa.me/919133865537?text=Hello" className="btn-modal-ghost" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
