import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedProject, setExpandedProject] = useState(null);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // WhatsApp Drag State
  const [waPos, setWaPos] = useState(() => {
    const saved = localStorage.getItem('waPos');
    return saved ? JSON.parse(saved) : { bottom: 40, right: 40 };
  });
  const waBtnRef = useRef(null);
  const dragInfo = useRef({ isDragging: false, startX: 0, startY: 0, startBottom: 0, startRight: 0 });

  useEffect(() => {
    // 1. Cursor Logic
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

    const animationId = requestAnimationFrame(animateRing);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    // 3. WhatsApp Drag Logic (Manual to avoid event issues)
    const handleDragStart = (e) => {
      if (e.target.closest('.whatsapp-float')) {
        dragInfo.current.isDragging = true;
        const clientX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        const clientY = e.type.includes('touch') ? e.touches[0].clientY : e.clientY;
        dragInfo.current.startX = clientX;
        dragInfo.current.startY = clientY;
        dragInfo.current.startBottom = waPos.bottom;
        dragInfo.current.startRight = waPos.right;

        // Prevent default only if mouse to avoid click issues vs drag issues
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

    // 4. Intersection Observer (Reveal)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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

      <nav id="mainNav" className={`${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
        <a href="#" className="nav-logo">Audecy<span>AI</span></a>

        <button
          className="nav-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="hamburger">
            <span></span>
            <span></span>
          </div>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a></li>
          <li><a href="#process" onClick={() => setIsMenuOpen(false)}>Process</a></li>
          <li><a href="#why" onClick={() => setIsMenuOpen(false)}>Why Us</a></li>
          <li><a href="#contact" className="nav-cta-mobile" onClick={() => setIsMenuOpen(false)}>Start a Project</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Start a Project</a>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg"></div>
        <div className="hero-grid"></div>

        <div className="hero-ticker">Intelligence, Engineered for Outcomes</div>

        <h1 className="hero-headline">
          We build <em>AI</em><br />that actually<br />works.
        </h1>

        <p className="hero-sub">
          Audecy AI is an elite consulting and product development agency. We partner with startups and enterprises to design, build, and deploy AI and automation solutions that create lasting competitive advantage.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Begin Your Project</a>
          <a href="#services" className="btn-ghost">Explore Our Work <span>→</span></a>
        </div>

      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <React.Fragment key={i}>
              <div className="marquee-item">Predictive Maintenance</div>
              <div className="marquee-item">AI Product Development</div>
              <div className="marquee-item">Machine Learning</div>
              <div className="marquee-item">Process Automation</div>
              <div className="marquee-item">Web & App Development</div>
              <div className="marquee-item">Business Consulting</div>
              <div className="marquee-item">Computer Vision</div>
              <div className="marquee-item">NLP Solutions</div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="about-left reveal">
          <div className="section-label">About Audecy AI</div>
          <h2 className="section-title">Where <em>expertise</em><br />meets execution.</h2>
          <p className="about-desc">
            We are not a generic technology firm. Audecy AI is a focused team of AI engineers, full-stack developers, and business strategists who operate at the intersection of cutting-edge research and real-world deployment.
          </p>
          <p className="about-desc">
            From identifying the right problem to delivering a production-ready solution, we take full ownership of the entire journey — so you can focus on what you do best.
          </p>
          <div className="about-stats">
            <div>
              <div className="stat-num">4+</div>
              <div className="stat-label">Active Enterprise Projects</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-label">Custom-Built Solutions</div>
            </div>
            <div>
              <div className="stat-num">AI</div>
              <div className="stat-label">First Approach to Every Brief</div>
            </div>
            <div>
              <div className="stat-num">∞</div>
              <div className="stat-label">Problems We Can Solve</div>
            </div>
          </div>
        </div>

        <div className="about-right reveal">
          <div className="about-card">
            <div className="about-card-title">Current Live Projects</div>
            <div className="about-card-text">
              A snapshot of what we're building right now — enterprise-grade solutions across industries, each one stretching the limits of what AI can deliver in the real world.
            </div>
            <div className="project-accordion">
              {[
                {
                  title: "Intelligent Fault Prediction Engine",
                  client: "Schindler Lifts",
                  desc: "Real-time ML system that predicts elevator failures before they happen — reducing downtime and maintenance costs at scale."
                },
                {
                  title: "Clinical Decision Support Model",
                  client: "MedTech Startup",
                  desc: "An AI model that analyses patient data to surface early risk signals — putting smarter decisions in the hands of clinicians."
                },
                {
                  title: "Business Strategy & Growth Consulting",
                  client: "Change Pay",
                  desc: "End-to-end business consulting — from market positioning to revenue strategy — helping Change Pay scale with clarity and conviction."
                },
                {
                  title: "Badminton Hub — Court Booking Platform",
                  client: "Genki Sports",
                  desc: "A full-stack sports platform for discovering, booking, and managing badminton courts — built for players, club owners, and communities. Think Playo, purpose-built for badminton."
                },
                {
                  title: "Smart Finance & Investment Suite",
                  client: "Startup Client",
                  desc: "An intelligent accounting and portfolio tracker that gives users a clear, automated view of their money and investments."
                }
              ].map((p, idx) => (
                <div
                  className={`project-item ${expandedProject === idx ? 'expanded' : ''}`}
                  key={idx}
                  onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
                >
                  <div className="project-pill">
                    <div className="project-pill-dot"></div>
                    <div className="project-pill-text">{p.title}</div>
                    <div className="project-pill-client">{p.client}</div>
                    <div className="project-pill-arrow">
                      {expandedProject === idx ? '−' : '+'}
                    </div>
                  </div>
                  <div className="project-description">
                    <div className="description-inner">
                      {p.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="services-header reveal">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Our <em>Services</em></h2>
          </div>
          <p className="services-header-right">
            Every engagement is bespoke. We listen first, then architect a solution precisely right for your challenge — not a template, not an off-the-shelf product.
          </p>
        </div>

        <div className="services-grid">
          {[
            {
              num: "01", icon: "⬡", name: "AI & Machine Learning",
              desc: "Custom models, pipelines, and intelligent systems designed for your exact use case. From predictive analytics to generative AI, we turn data into decisions.",
              tags: ["Predictive Models", "NLP", "Computer Vision", "LLM Integration"]
            },
            {
              num: "02", icon: "◈", name: "Automation & Process Intelligence",
              desc: "Eliminate inefficiency. We audit, redesign, and automate your operational workflows using AI-powered systems that scale with your business and never sleep.",
              tags: ["RPA", "Workflow AI", "Anomaly Detection", "IoT Integration"]
            },
            {
              num: "03", icon: "◎", name: "Web & App Development",
              desc: "Precision-engineered digital products built for performance and scale. Web platforms, mobile apps, and full-stack systems crafted to the highest standard.",
              tags: ["React / Next.js", "React Native", "Flutter", "Node.js"]
            },
            {
              num: "04", icon: "◇", name: "AI Product Development",
              desc: "From idea to market. We partner with startups to shape, build, and launch AI-native products — handling strategy, architecture, and engineering end-to-end.",
              tags: ["MVP Development", "AI Integration", "Product Strategy", "GTM Support"]
            },
            {
              num: "05", icon: "△", name: "Data Engineering & Analytics",
              desc: "Your data is only as valuable as what you extract from it. We build infrastructure, models, and dashboards that turn raw data into strategic intelligence.",
              tags: ["Data Pipelines", "BI Dashboards", "Forecasting", "MLOps"]
            },
            {
              num: "06", icon: "○", name: "AI Business Consulting",
              desc: "Not sure where AI fits into your business? We assess your operations, identify high-impact opportunities, and give you a clear, actionable roadmap to transformation.",
              tags: ["AI Readiness Audit", "Opportunity Mapping", "Tech Strategy", "Implementation Planning"]
            }
          ].map((s, idx) => (
            <div className="service-card reveal" key={idx}>
              <div className="service-num">{s.num}</div>
              <span className="service-icon">{s.icon}</span>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process">
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
      <section id="why">
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
            { num: "03", title: "Built for Real Results", text: "We measure success by outcomes, not deliverables. Our solutions are designed to work under real conditions — not just pass a demo." },
            { num: "04", title: "Radical Transparency", text: "You'll always know where your project stands. Clear communication, regular updates, and no surprises — from kickoff to launch and beyond." },
            { num: "05", title: "Startup Speed, Enterprise Rigour", text: "We move fast without compromising quality. Whether you're seed-stage or mid-market, we match our pace to your ambition." }
          ].map((item, idx) => (
            <div className="why-item reveal" key={idx}>
              <div className="why-item-num">{item.num}</div>
              <div>
                <div className="why-item-title">{item.title}</div>
                <p className="why-item-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries">
        <div className="section-label reveal">Industries We Serve</div>
        <h2 className="section-title reveal" style={{ textAlign: 'center', margin: '0 auto' }}>No sector is <em>off limits.</em></h2>
        <div className="industries-grid reveal">
          {[
            "Manufacturing & Industrial", "EdTech", "Healthcare", "Fintech", "Logistics & Supply Chain",
            "Real Estate", "Retail & E-Commerce", "SaaS Startups", "Legal & Compliance",
            "Energy & Utilities", "HR & Talent", "Media & Content"
          ].map(industry => (
            <div className="industry-pill" key={industry}>{industry}</div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="section-label">Get In Touch</div>
        <h2 className="section-title">Let's build<br />something great.</h2>
        <p className="contact-sub">
          Tell us what you're trying to solve. Our team will map out exactly how we'd approach it — no fluff, no sales pitch. Just a real conversation about what's possible.
        </p>
        <div className="contact-actions">
          <a href="mailto:business@audecyai.com" className="btn-dark">business@audecyai.com</a>
        </div>
      </section>

      <footer className="reveal">
        <div className="footer-top">
          <a href="#" className="footer-logo">Audecy<span>AI</span></a>
          <ul className="footer-links">
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#process">Process</a></li>
            <li><a href="#why">Why Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 AUDECY AI. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>

      <a
        href="https://wa.me/919133865537?text=Hello"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        ref={waBtnRef}
        style={{
          bottom: `${waPos.bottom}px`,
          right: `${waPos.right}px`,
          cursor: dragInfo.current.isDragging ? 'grabbing' : 'grab'
        }}
        onClick={(e) => {
          if (Math.abs(waPos.right - dragInfo.current.startRight) > 5) {
            e.preventDefault();
          }
        }}
      >
        <div className="wa-icon-wrapper">
          <svg viewBox="0 0 448 512" width="24" height="24">
            <path fill="white" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.5-6.5 8.3-9.8 2.8-3.2 3.7-5.5 5.5-9.2 1.9-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.3 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.5 3.6 35.2 2.2 10.8-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
        </div>
        <span className="whatsapp-float-label">Let's Chat</span>
      </a>

    </>
  );
}

export default App;
