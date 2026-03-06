import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

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

    // 2. Scroll Logic for Nav
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);

    // 3. Intersection Observer (Reveal)
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

      <nav id="mainNav" className={isScrolled ? 'scrolled' : ''}>
        <a href="#" className="nav-logo">Audecy<span>.</span>AI</a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#why">Why Us</a></li>
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

        <div className="hero-scroll">
          <div className="scroll-line"></div>
          <p>Scroll</p>
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
            {[
              { text: "Predictive Maintenance AI System", client: "Schindler Lifts" },
              { text: "Mobile App Development", client: "Startup Client" },
              { text: "Cross-Platform App Development", client: "Startup Client" },
              { text: "AI Answer Paper Evaluation Model", client: "EdTech" }
            ].map((p, idx) => (
              <div className="project-pill" key={idx}>
                <div className="project-pill-dot"></div>
                <div className="project-pill-text">{p.text}</div>
                <div className="project-pill-client">{p.client}</div>
              </div>
            ))}
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
          <p style={{ color: 'var(--smoke)', fontSize: '0.95rem', lineHeight: '1.9', marginTop: '24px' }}>
            There are many agencies that claim AI expertise. Very few can demonstrate it. We let our work speak — and we believe that the right partnership changes everything.
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
        <h2 className="section-title">Let's build<br /><em>something</em> great.</h2>
        <p className="contact-sub">
          Tell us what you're trying to solve. We'll tell you exactly how we'd approach it — no fluff, no sales pitch. Just a real conversation about what's possible.
        </p>
        <div className="contact-actions">
          <a href="mailto:hello@audecy.ai" className="btn-dark">hello@audecy.ai</a>
          <a href="mailto:hello@audecy.ai" className="contact-email">Or just drop us a line →</a>
        </div>
      </section>

      <footer>
        <div className="footer-logo">Audecy AI</div>
        <p className="footer-copy">© 2025 Audecy AI. All Rights Reserved.</p>
        <ul className="footer-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </footer>
    </>
  );
}

export default App;
