import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Zap, Lock, Headphones, Maximize, Code, Smartphone,
  Cloud, Brain, Briefcase, ArrowRight, Search, PenTool,
  Monitor, Play, Activity, MapPin, Mail, Phone, ChevronDown, Check, CheckCircle, GraduationCap, ShoppingCart, Crosshair, BarChart, Layout, Mouse, Shield
} from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function useCountUp() {
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const hasPlus = el.textContent.includes('+');
          const hasPercent = el.textContent.includes('%');
          const target = parseInt(el.textContent.replace(/\D/g, ''), 10);
          if (isNaN(target)) return;
          let count = 0;
          const speed = target / (2000 / 16);
          const update = () => {
            if (count < target) {
              count += speed;
              el.textContent = Math.ceil(count) + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
              requestAnimationFrame(update);
            }
            else {
              el.textContent = target + (hasPlus ? '+' : '') + (hasPercent ? '%' : '');
            }
          };
          update();
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    stats.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);
}

function ScrollHero() {
  const containerRef = React.useRef(null);
  const cursorRef = React.useRef(null);
  const [progress, setProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 992);
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      if (cursorRef.current && window.scrollY < 50) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY + 40}px) translate(-50%, -50%)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;
          const rect = containerRef.current.getBoundingClientRect();
          const scrollDistance = rect.height - window.innerHeight;
          let p = -rect.top / scrollDistance;
          p = Math.min(Math.max(p, 0), 1);
          setProgress(p);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Calculate the "pull away" layout factor
  let tShape = 0;
  if (progress > 0.10 && progress <= 0.25) {
    tShape = (progress - 0.10) / 0.15;
    tShape = 1 - Math.pow(1 - tShape, 3); // Ease out cubic
  } else if (progress > 0.25) {
    tShape = 1;
  }

  // Calculate text slide opacities
  const s1 = progress >= 0.20 && progress < 0.45 ? Math.min(1, (progress - 0.20) * 10, (0.45 - progress) * 10) : 0;
  const s2 = progress >= 0.45 && progress < 0.70 ? Math.min(1, (progress - 0.45) * 10, (0.70 - progress) * 10) : 0;
  const s3 = progress >= 0.70 ? Math.min(1, (progress - 0.70) * 10) : 0;

  // Render elements safely
  const pTop = `${tShape * (isMobile ? 1 : 2)}rem`;
  const pRight = `${tShape * (isMobile ? 1 : 2)}rem`;
  const pBottom = isMobile ? `calc(${tShape * 1}rem + ${tShape * 45}vh)` : `${tShape * 2}rem`;
  const pLeft = isMobile ? `${tShape * 1}rem` : `calc(${tShape * 2}rem + ${tShape * 45}vw)`;
  const bRadius = `${tShape * 24}px`;

  return (
    <div ref={containerRef} className="scroll-hero-container" style={{ cursor: progress < 0.05 && !isMobile ? 'none' : 'default' }}>
      <div className="scroll-hero-sticky">

        <div ref={cursorRef} className="scroll-indicator-cursor" style={{ opacity: progress < 0.05 && !isMobile ? 1 : 0 }}>
          <div className="scroll-cursor-text">
            <span className="shimmer-text" style={{ opacity: Math.max(0, 1 - progress * 100) }}>SCROLL</span>
            <span className="shimmer-text" style={{ opacity: Math.max(0, 1 - Math.max(0, progress - 0.01) * 100) }}>TO</span>
            <span className="shimmer-text" style={{ opacity: Math.max(0, 1 - Math.max(0, progress - 0.02) * 100) }}>EXPLORE</span>
          </div>
          <div style={{ opacity: Math.max(0, 1 - Math.max(0, progress - 0.03) * 100), animation: 'float 2s infinite ease-in-out', display: 'flex', justifyContent: 'center' }}>
            <span style={{ fontSize: '10px', color: '#fff', transform: 'scaleX(1.5)' }}>▼</span>
          </div>
        </div>

        {/* LEFT / BOTTOM TEXT AREA (Reveals as panel pulls away) */}
        <div className="hero-panel-left" style={{
          width: isMobile ? '100%' : '50%',
          height: isMobile ? '50%' : '100%',
          bottom: isMobile ? 0 : 'auto',
          top: isMobile ? 'auto' : 0,
          padding: isMobile ? '2rem' : '4% 4rem',
          opacity: tShape
        }}>
          <div className="hero-slide-container">
            {/* Slide 1 */}
            <div className="hero-text-slide" style={{ opacity: s1, transform: `translateY(${(1 - s1) * 20}px)`, pointerEvents: s1 > 0.5 ? 'auto' : 'none' }}>
              <span className="sub-heading">01 &nbsp;// &nbsp;Physical to Digital</span>
              <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem' }}>Transforming <span className="gradient-text">Operations</span></h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>We turn complex business challenges and legacy architectures into elegant, high-performing digital products.</p>
              <div className="hero-stats" style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                <div className="stat-item"><span className="stat-number" style={{ fontSize: '1.8rem' }}>10+</span><span className="stat-label">Years Exp</span></div>
                <div className="stat-item"><span className="stat-number" style={{ fontSize: '1.8rem' }}>200+</span><span className="stat-label">Projects</span></div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="hero-text-slide" style={{ opacity: s2, transform: `translateY(${(1 - s2) * 20}px)`, pointerEvents: s2 > 0.5 ? 'auto' : 'none' }}>
              <span className="sub-heading" style={{ color: 'var(--accent-purple)' }}>02 &nbsp;// &nbsp;Scale & Availability</span>
              <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem' }}>Architecting the <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #00f2ff 0%, #ff00ff 100%)' }}>Next Gen</span></h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>Cloud-native infrastructure and resilient microservices. Future-proof your applications from day one and securely scale to millions of active users.</p>
              <a href="#services" className="btn btn-primary">Discover Cloud</a>
            </div>

            {/* Slide 3 */}
            <div className="hero-text-slide" style={{ opacity: s3, transform: `translateY(${(1 - s3) * 20}px)`, pointerEvents: s3 > 0.5 ? 'auto' : 'none' }}>
              <span className="sub-heading" style={{ color: '#ff00ff' }}>03 &nbsp;// &nbsp;Artificial Intelligence</span>
              <h1 style={{ fontSize: isMobile ? '2.2rem' : '3.5rem' }}>Deliver Value at <span className="gradient-text" style={{ backgroundImage: 'linear-gradient(135deg, #ff00ff 0%, #7000ff 100%)' }}>Lightning Speed</span></h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>Automated pipelines powered by AI algorithms eliminate technical debt and significantly accelerate development cycles without compromising quality.</p>
              <a href="#contact" className="btn btn-primary">Partner With Us</a>
            </div>
          </div>
        </div>

        {/* RIGHT / MAIN VISUAL AREA (Pulls away natively synced to scroll) */}
        <div className="main-visual-overlay" style={{
          top: pTop, right: pRight, bottom: pBottom, left: pLeft,
          borderRadius: bRadius,
          border: tShape > 0.5 ? '1px solid var(--border-glass)' : 'none'
        }}>

          {/* Intro Text Overlay */}
          <div className="intro-overlay" style={{ opacity: Math.max(0, 1 - Math.max(0, progress - 0.08) * 20) }}>
            <h1 className="intro-title" style={{ fontSize: isMobile ? '2.4rem' : '4.2rem', transform: 'translateY(15vh)', lineHeight: 1.2 }}>
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.00) * 50)), transform: `translateY(${Math.max(0, 20 - progress * 50 * 20)}px)` }}>Build </span>&nbsp;
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.015) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.015) * 50 * 20)}px)` }}>The </span><br />
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.03) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.03) * 50 * 20)}px)` }}>Future </span>&nbsp;
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.045) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.045) * 50 * 20)}px)` }}>of </span>&nbsp;
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.06) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.06) * 50 * 20)}px)` }}>IT </span><br/>
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.075) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.075) * 50 * 20)}px)`, fontSize: '0.85em', color: 'var(--text-secondary)' }}>with </span>&nbsp;
              <span className="animated-word" style={{ opacity: Math.min(1, Math.max(0, (progress - 0.09) * 50)), transform: `translateY(${Math.max(0, 20 - Math.max(0, progress - 0.09) * 50 * 20)}px)`, fontSize: '0.85em', background: 'linear-gradient(135deg, #00f2ff 0%, #7000ff 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Future-Invo</span>
            </h1>
          </div>

          <video
            src="/FISHeroVideo.mp4"
            autoPlay loop muted playsInline
            style={{
              position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',
              opacity: Math.max(0, 1 - progress * 2),
              filter: `blur(${progress * 20}px) grayscale(${progress * 100}%)`,
              transform: `scale(${1 + progress * 0.5})`
            }}
          />

          <div className="digital-grid" style={{
            backgroundPosition: `center ${progress * 200}px`,
            opacity: progress > 0.15 ? Math.min(1, (progress - 0.15) * 4) : 0,
            transform: `perspective(1000px) rotateX(${60 - progress * 30}deg)`
          }} />

          {/* Phase 2 Schematic */}
          <div className="schematic-layer" style={{
            opacity: progress > 0.3 && progress < 0.8 ? Math.min(1, (progress - 0.3) * 5, (0.8 - progress) * 5) : 0,
            transform: `scale(${0.5 + Math.abs(progress - 0.5) * 2}) translateZ(${(0.5 - Math.abs(progress - 0.5)) * 100}px)`
          }}>
            <Cloud size={isMobile ? 120 : 200} color="var(--accent-purple)" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 40px rgba(112, 0, 255, 0.5))' }} />
            <div style={{ width: '1px', height: '100px', background: 'linear-gradient(to bottom, var(--accent-purple), transparent)', margin: '10px 0' }}></div>
            <Monitor size={40} color="var(--text-muted)" strokeWidth={1} />
          </div>

          {/* Phase 3 Brain */}
          <div className="schematic-layer" style={{
            opacity: progress > 0.65 ? Math.min(1, (progress - 0.65) * 5) : 0,
            transform: `rotateZ(${(1 - progress) * -90}deg) scale(${0.8 + Math.max(0, progress - 0.65) * 1})`
          }}>
            <Brain size={isMobile ? 150 : 250} color="#ff00ff" strokeWidth={1} style={{ filter: 'drop-shadow(0 0 60px rgba(255, 0, 255, 0.6))' }} />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '300px', height: '300px', border: '1px solid rgba(255,0,255,0.2)', borderRadius: '50%', animation: 'spin 10s linear infinite' }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '400px', height: '400px', border: '1px dashed rgba(255,0,255,0.1)', borderRadius: '50%', animation: 'spin 15s linear infinite reverse' }}></div>
          </div>

        </div>
      </div>
    </div>
  );
}

function InteractiveBridgingGap() {
  const [activeItem, setActiveItem] = useState(null);

  const items = [
    {
      id: "01",
      icon1: <Activity size={28} />,
      icon2: <Zap size={28} />,
      problem: "Legacy Monoliths",
      pDesc: "Outdated, rigid systems slowing down agile responses and blocking critical growth.",
      solution: "Modern Cloud-Native",
      sDesc: "Microservices architectures designed for instant scaling and zero downtime.",
      color1: "#ff4b4b",
      color2: "#00f2ff"
    },
    {
      id: "02",
      icon1: <Smartphone size={28} />,
      icon2: <Brain size={28} />,
      problem: "Friction-Heavy UX",
      pDesc: "Confusing navigation and slow loading times resulting in lost user conversions.",
      solution: "AI-Powered Intuition",
      sDesc: "Smart, hyper-responsive interfaces that predict and satisfy user intent seamlessly.",
      color1: "#ff00ff",
      color2: "#7000ff"
    },
    {
      id: "03",
      icon1: <Lock size={28} />,
      icon2: <Cloud size={28} />,
      problem: "Security Vulnerabilities",
      pDesc: "Exposed endpoints and outdated compliance exposing you to disastrous data breaches.",
      solution: "Zero-Trust Security",
      sDesc: "Military-grade encryption and automated threat detection built-in from day one.",
      color1: "#ffa500",
      color2: "#00ff88"
    }
  ];

  return (
    <section className="bridging-section">
      {/* Dynamic Ambient Background Blurs */}
      <div className="bridging-bg-layer">
        <div className="bridging-glow" style={{ left: '15%', background: items[activeItem || 0].color1 }} />
        <div className="bridging-glow" style={{ bottom: '10%', right: '15%', background: items[activeItem || 0].color2 }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header center reveal compact">
          <span className="sub-heading">We Understand Your Needs</span>
          <h2>
            Bridging the <br />
            <span style={{
              backgroundImage: `linear-gradient(90deg, ${items[activeItem || 0].color1}, ${items[activeItem || 0].color2})`,
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text', color: 'transparent'
            }}>Digital Gap</span>
          </h2>
        </div>

        <div className="bridging-grid">
          {items.map((item, idx) => {
            const isActive = activeItem === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setActiveItem(idx)}
                onMouseLeave={() => setActiveItem(null)}
                className={`bridging-card ${isActive ? 'active' : ''}`}
                style={{
                  '--card-color-1': item.color1,
                  '--card-color-2': item.color2,
                  // Simple hack to get RGB without a library
                  '--card-color-1-rgb': item.color1 === '#ff4b4b' ? '255, 75, 75' : item.color1 === '#ff00ff' ? '255, 0, 255' : '255, 165, 0',
                  '--card-color-2-rgb': item.color2 === '#00f2ff' ? '0, 242, 255' : item.color2 === '#7000ff' ? '112, 0, 255' : '0, 255, 136'
                }}
              >
                {/* Decorative Background lines inside the card */}
                <div className="card-layer-bg" />

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                    <span className="card-number-bg">{item.id}</span>
                    <div className={`card-icon-container problem-icon`}>
                      {item.icon1}
                    </div>
                  </div>
                  <h3 className="mb-2" style={{ color: isActive ? '#fff' : 'var(--text-muted)' }}>{item.problem}</h3>
                  <p className="text-secondary font-normal">{item.pDesc}</p>
                </div>

                {/* Animated Bridge Line */}
                <div className="bridge-line-wrap">
                  <div className="bridge-line-path" />
                  {isActive && (
                    <div className="bridge-line-pulse" style={{
                      background: `linear-gradient(90deg, ${item.color1}, ${item.color2})`,
                      boxShadow: `0 0 20px ${item.color2}88`
                    }}>
                      <div className="bridge-dot" />
                    </div>
                  )}
                </div>

                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '1rem' }}>
                    <div style={{ flex: 1, paddingRight: '1rem' }}>
                      <h3 className="mb-2 text-white">{item.solution}</h3>
                      <div className="reveal-desc-box">
                        <p className="text-white font-normal">{item.sDesc}</p>
                      </div>
                    </div>
                    <div className={`card-icon-container solution-icon`}>
                      {item.icon2}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function HolographicCaseHub() {
  const [activeIdx, setActiveIdx] = useState(0);

  const cases = [
    {
      image: "/images/fintech_case_study.png",
      tag: "Fintech // 2024",
      id: "PRJ-882",
      status: "STABLE",
      title: "GlobalPay Next-Gen",
      desc: "Re-engineering global payment rails with 99.99% AWS serverless resilience.",
      tech: ["AWS", "Node.js", "GraphQL"],
      stats: [{ val: "400%", label: "Reliability" }, { val: "70ms", label: "Latency" }]
    },
    {
      image: "/images/healthcare_case_study.png",
      tag: "HealthTech // AI",
      id: "PRJ-412",
      status: "ACTIVE",
      title: "MedConnect AI",
      desc: "Predictive neural diagnostics for real-time intensive patient care.",
      tech: ["Python", "TensorFlow", "React"],
      stats: [{ val: "500k+", label: "Users" }, { val: "4.8/5", label: "Rating" }]
    },
    {
      image: "/images/cyber_case_study.png",
      tag: "Cyber // Security",
      id: "PRJ-991",
      status: "ENCRYPTED",
      title: "Sentinel Shield",
      desc: "Zero-trust military encryption for multi-continent enterprise data.",
      tech: ["Rust", "Kubernetes", "Shield-X"],
      stats: [{ val: "Zero", label: "Breaches" }, { val: "AES-256", label: "Security" }]
    },
    {
      image: "/images/cloud_case_study.png",
      tag: "Cloud // Infra",
      id: "PRJ-663",
      status: "OPTIMIZED",
      title: "Cloud Nexus",
      desc: "Automated multi-cloud migration and CI/CD pipelines at global scale.",
      tech: ["Terraform", "Docker", "GCP"],
      stats: [{ val: "40%", label: "Cost Save" }, { val: "10x", label: "Speed" }]
    }
  ];

  const active = cases[activeIdx];

  return (
    <section className="case-hub-section">
      <div className="case-hub-bg" />
      
      <div className="container">
        <div className="section-header center reveal">
          <span className="sub-heading">Innovation Hub</span>
          <h2 className="font-giant">Premium <span className="gradient-text">Success Stories</span></h2>
          <p className="text-secondary mt-3" style={{ maxWidth: '800px', margin: '0 auto' }}>
            A glimpse into the high-stake digital transformations we've architected for industry leaders.
          </p>
        </div>

        <div className="case-hub-container reveal">
          {/* Main Focal Portal With HUD */}
          <div className="case-featured-portal">
            <div className="scanning-beam" />
            
            {/* Holographic HUD Layer — decorative brackets + labels ONLY */}
            <div className="case-portal-hud">
              <div className="hud-top-row">
                <div className="corner-bracket top-left" />
                <div style={{ display: 'flex', gap: '30px' }}>
                  <div style={{ color: 'rgba(var(--accent-cyan-rgb), 0.7)', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 800 }}>ID: {active.id}</div>
                  <div style={{ color: 'rgba(var(--accent-purple-rgb), 0.7)', fontSize: '0.65rem', letterSpacing: '2px', fontWeight: 800 }}>STATUS: {active.status}</div>
                </div>
                <div className="corner-bracket top-right" />
              </div>
              
              {/* Bottom corners only — NO content here to avoid overlap */}
              <div className="hud-bottom-row">
                <div className="corner-bracket bottom-left" />
                <div className="corner-bracket bottom-right" />
              </div>
            </div>

            <img src={active.image} alt={active.title} className="case-portal-img" key={activeIdx} />
            <div className="case-portal-overlay" />
            
            <div className="case-portal-content">
              <span className="case-study-tag">{active.tag}</span>
              <h1 style={{ fontSize: '2.2rem', marginBottom: '0.6rem', fontWeight: 900, lineHeight: 1.1 }}>{active.title}</h1>
              <p className="text-secondary" style={{ fontSize: '1rem', maxWidth: '540px', marginBottom: '1.2rem', lineHeight: 1.6 }}>
                {active.desc}
              </p>
              
              <div className="focus-stats">
                {active.stats.map((s, si) => (
                  <div className="focus-stat-item" key={si}>
                    <span className="focus-stat-val">{s.val}</span>
                    <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* Tech Badges — in content flow, no overlap */}
              <div style={{ display: 'flex', gap: '8px', marginTop: '1.4rem', flexWrap: 'wrap' }}>
                {active.tech.map((t, ti) => (
                  <span key={ti} style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.65)', fontSize: '0.65rem', padding: '4px 12px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)', letterSpacing: '1px', fontWeight: 700 }}>{t}</span>
                ))}
              </div>

              {/* Progress bar */}
              <div style={{ marginTop: '1.4rem', maxWidth: '360px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '2px', fontWeight: 700 }}>SYSTEM_SYNC_ACTIVE</span>
                  <span style={{ fontSize: '0.6rem', color: 'var(--accent-cyan)', fontWeight: 800 }}>98.2%</span>
                </div>
                <div style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '98.2%', background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))', boxShadow: '0 0 10px rgba(var(--accent-cyan-rgb),0.4)' }} />
                </div>
              </div>

              <Link to="/portfolio" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '14px 32px', marginTop: '1.6rem', pointerEvents: 'auto' }}>
                Analysis Insights <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          {/* Side Nav Stack */}
          <div className="case-side-stack">
            {cases.map((c, i) => (
              <div 
                key={i}
                className={`case-stack-item ${activeIdx === i ? 'active' : ''}`}
                onClick={() => setActiveIdx(i)}
              >
                <div className="active-pulse-ring" />
                <img src={c.image} alt={c.title} className="stack-item-img" />
                <div className="stack-item-content">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', color: activeIdx === i ? 'var(--accent-cyan)' : 'var(--accent-purple)', fontWeight: 800, letterSpacing: '2px' }}>PROJECT 0{i+1}</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{c.status}</span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '0.4rem' }}>{c.title}</h3>
                  <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '1.5px' }}>{c.tag}</span>
                    <span style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 900 }}>{c.stats[0].val}</span>
                    <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>{c.stats[0].label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedPortfolio() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const projects = [
    {
      id: '001',
      category: 'Web App',
      title: 'NexaCommerce Pro',
      subtitle: 'Enterprise E-Commerce Ecosystem',
      desc: 'A hyper-scalable B2B commerce platform with real-time inventory AI, multi-region CDN, and predictive demand analytics processing 2M+ daily transactions.',
      tech: ['React', 'Node.js', 'GraphQL'],
      metrics: [{ val: '2M+', label: 'Daily Txns' }, { val: '99.97%', label: 'Uptime' }],
      accentColor: '#7000ff',
      accentColor2: '#00f2ff',
      gradient: 'linear-gradient(135deg, rgba(112,0,255,0.4) 0%, rgba(0,242,255,0.2) 100%)',
      pattern: 'grid',
    },
    {
      id: '002',
      category: 'Mobile',
      title: 'FinPulse Platform',
      subtitle: 'Real-Time Investment',
      desc: 'Cross-platform fintech app with live market feeds, AI portfolio manager, and biometric security enabling 150k+ active traders.',
      tech: ['React Native', 'Python', 'WebSocket'],
      metrics: [{ val: '150k+', label: 'Traders' }, { val: '0.8ms', label: 'Latency' }],
      accentColor: '#ff6b35',
      accentColor2: '#ffd700',
      gradient: 'linear-gradient(135deg, rgba(255,107,53,0.4) 0%, rgba(255,215,0,0.2) 100%)',
      pattern: 'dots',
    },
    {
      id: '003',
      category: 'AI/ML',
      title: 'VisionMed AI',
      subtitle: 'Neural Diagnostic Engine',
      desc: 'Deep learning diagnostic platform for radiology with 98.4% accuracy, reducing scan analysis time by 10x for 300+ hospitals globally.',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      metrics: [{ val: '98.4%', label: 'Accuracy' }, { val: '10x', label: 'Faster' }],
      accentColor: '#00ff88',
      accentColor2: '#00ccff',
      gradient: 'linear-gradient(135deg, rgba(0,255,136,0.3) 0%, rgba(0,204,255,0.2) 100%)',
      pattern: 'circuit',
    },
    {
      id: '004',
      category: 'Cloud',
      title: 'CloudNexus Core',
      subtitle: 'Multi-Cloud Orchestration',
      desc: 'Enterprise infrastructure management across AWS, GCP, and Azure — automated CI/CD, cost governance, and zero-downtime microservices.',
      tech: ['Terraform', 'Kubernetes', 'Go'],
      metrics: [{ val: '40%', label: 'Cost Cut' }, { val: '300+', label: 'Deploys/Day' }],
      accentColor: '#ff00ff',
      accentColor2: '#7000ff',
      gradient: 'linear-gradient(135deg, rgba(255,0,255,0.3) 0%, rgba(112,0,255,0.2) 100%)',
      pattern: 'wave',
    },
  ];

  return (
    <section className="ep-section section-padding">
      <div className="ep-ambient" />
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        <div className="section-header center reveal">
          <span className="sub-heading">Featured Excellence</span>
          <h2 style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-2px' }}>
            Our <span className="gradient-text">Masterpieces</span>
          </h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.2rem' }}>
            Explore an interactive showcase of the hyper-scalable digital products we've engineered. 
            Hover to expand and reveal the architecture behind the success.
          </p>
        </div>

        {/* The Extreme Premium Hover Accordion */}
        <div className="ep-accordion-container reveal" style={{ marginTop: '5rem' }}>
          {projects.map((p, i) => {
            const isActive = activeAccordion === i;
            return (
              <div 
                key={p.id} 
                className={`ep-acc-card ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveAccordion(i)}
                onClick={() => setActiveAccordion(i)}
              >
                {/* Background visual layering */}
                <div className="ep-acc-bg" style={{ background: p.gradient }}>
                  <div className={`ep-pattern fp-pattern-${p.pattern}`} />
                  {/* Dynamic pulsing glowing orbs */}
                  <div className="ep-glow-orb orb-top" style={{ background: p.accentColor }} />
                  <div className="ep-glow-orb orb-bot" style={{ background: p.accentColor2 }} />
                </div>

                {/* Collapsed State Content (Vertical Bar) */}
                <div className="ep-acc-collapsed">
                   <div className="ep-collapsed-number">#{p.id}</div>
                   <div className="ep-collapsed-title-wrap">
                      <span className="ep-collapsed-title">{p.title}</span>
                   </div>
                   <div className="ep-collapsed-dot" style={{ background: isActive ? '#fff' : p.accentColor, boxShadow: `0 0 15px ${p.accentColor}` }} />
                </div>

                {/* Expanded State Content */}
                <div className="ep-acc-expanded">
                   <div className="ep-exp-header">
                      <span className="ep-category-pill" style={{ borderColor: `${p.accentColor}55`, color: p.accentColor }}>
                        {p.category}
                      </span>
                      <span className="ep-project-id" style={{ color: p.accentColor2 }}>PROJECT {p.id}</span>
                   </div>

                   <div className="ep-exp-body">
                      <h4 className="ep-subtitle" style={{ color: p.accentColor }}>{p.subtitle}</h4>
                      <h3 className="ep-title">{p.title}</h3>
                      <p className="ep-desc">{p.desc}</p>

                      <div className="ep-metrics-grid">
                        {p.metrics.map((m, idx) => (
                           <div className="ep-metric" key={idx}>
                              <span className="ep-metric-v" style={{ background: `linear-gradient(90deg, ${p.accentColor}, ${p.accentColor2})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {m.val}
                              </span>
                              <span className="ep-metric-l">{m.label}</span>
                           </div>
                        ))}
                      </div>

                      <div className="ep-tech-stack">
                        {p.tech.map((t, idx) => (
                          <span key={idx} className="ep-tech">{t}</span>
                        ))}
                      </div>

                      <Link to="/portfolio" className="ep-cta-btn" style={{ background: `linear-gradient(135deg, ${p.accentColor}, ${p.accentColor2})` }}>
                        <span>Explore Architecture</span> <ArrowRight size={18} />
                      </Link>
                   </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="center reveal" style={{ marginTop: '4rem' }}>
          <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '16px 40px', fontSize: '1.1rem', letterSpacing: '1px' }}>
            View Full Tech Gallery <ArrowRight size={20} style={{ marginLeft: '10px' }} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  useCountUp();
  const [openFaq, setOpenFaq] = useState(null);

  const techItems = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB'];

  const faqs = [
    { q: "What is your typical project timeline?", a: "Project timelines vary depending on complexity, but most projects range from 4 to 12 weeks from kickoff to launch." },
    { q: "What technologies do you use?", a: "We specialize in modern web and mobile stacks, including React, Node.js, Python, AWS, Docker, and MongoDB among others." },
    { q: "Is ongoing support included?", a: "Yes, we offer various support and maintenance packages post-launch to ensure your product remains secure, updated, and highly performant." }
  ];

  return (
    <div className="page-wrapper pt-0">
      {/* 3.1 Scroll-Based Hero Section */}
      <ScrollHero />

      {/* 3.2 Trusted By Section */}
      <section className="tech-stack-marquee">
        <div className="container center mb-4">
          <p className="marquee-subtext">Trusted By Global Brands</p>
        </div>
        <div className="tech-marquee p-0">
          <div className="marquee-content" style={{ animationDuration: '40s' }}>
            {['Acme Corp', 'GlobalTech', 'InnovateInc', 'NextGen Solutions', 'Apex Systems', 'Acme Corp', 'GlobalTech', 'InnovateInc', 'NextGen Solutions', 'Apex Systems'].map((t, i) => (
              <div className="tech-tag" key={i} style={{ fontSize: '1.5rem', WebkitTextStroke: '0', color: 'rgba(255,255,255,0.4)' }}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.3 Problem -> Solution Section */}
      <InteractiveBridgingGap />

      {/* 3.4 Services — Premier Service Nexus Redesign */}
      <section id="services" className="section-padding services-nexus">
        <div className="container">
          <div className="section-header reveal">
            <div className="flex-header">
              <div className="header-left">
                <span className="sub-heading">Expertise Portfolio</span>
                <h2 className="font-giant">Our <span className="gradient-text">Service Nexus</span></h2>
              </div>
              <div className="header-right">
                <p className="text-secondary" style={{ maxWidth: '400px' }}>
                  We engineer high-stake technical solutions that bridge the gap between 
                  ambitious vision and digital reality.
                </p>
              </div>
            </div>
          </div>
          
          <div className="nexus-grid">
            {[
              { 
                num: '01', 
                status: 'HIGH PERFORMANCE', 
                icon: <Code />, 
                title: 'Web Engineering', 
                slug: 'web-engineering',
                desc: 'Hyper-responsive web platforms built with React and cutting-edge backends for sub-second latency.', 
                color: '#7000ff' 
              },
              { 
                num: '02', 
                status: 'CROSS PLATFORM', 
                icon: <Smartphone />, 
                title: 'Mobile Ecosystems', 
                slug: 'mobile-ecosystems',
                desc: 'Native-feel iOS and Android applications engineered for maximum user retention and engagement.', 
                color: '#00f2ff' 
              },
              { 
                num: '03', 
                status: 'CLOUD NATIVE', 
                icon: <Cloud />, 
                title: 'Infra Automation',
                slug: 'cloud-orchestration', 
                desc: 'Scalable, self-healing cloud architectures powered by AWS and automated CI/CD pipelines.', 
                color: '#00ff88' 
              },
              { 
                num: '04', 
                status: 'NEURAL LOGIC', 
                icon: <Brain />, 
                title: 'AI Architectures',
                slug: 'synthetic-intelligence', 
                desc: 'Deploying custom LLMs and predictive models to automate complex decision-making processes.', 
                color: '#ff00ff' 
              },
              { 
                num: '05', 
                status: 'STRATEGIC SYNC', 
                icon: <Briefcase />, 
                title: 'Digital Strategy',
                slug: 'it-consulting', 
                desc: 'Expert-led consulting to roadmap your global digital transformation and market expansion.', 
                color: '#ffa500' 
              },
            ].map((s, i) => (
              <div className="nexus-card reveal" key={i} style={{ '--nexus-color': s.color }}>
                <div className="nexus-card-inner">
                  <div className="nexus-header">
                    <span className="nexus-num">{s.num}</span>
                    <div className="nexus-status-pill">
                       <span className="pulse-dot" />
                       {s.status}
                    </div>
                  </div>
                  
                  <div className="nexus-icon-box">
                    <div className="nexus-icon-glow" />
                    <div className="nexus-icon-svg">{s.icon}</div>
                  </div>

                  <h3 className="nexus-title">{s.title}</h3>
                  <p className="nexus-desc">{s.desc}</p>
                  
                  <Link to={`/services/${s.slug}`} className="nexus-link">
                    <span>Analyze Scope</span>
                    <ArrowRight size={18} />
                  </Link>

                  {/* Decorative background glass shard */}
                  <div className="nexus-shard" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Process Section — Digital Journey Redesign */}
      <section className="section-padding process-section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">How We Work</span>
            <h2>Our High-Octane <span className="gradient-text">Process</span></h2>
            <p className="text-secondary mt-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
              From initial blueprint to final launch, our workflow is engineered for precision,
              scalability, and unbreakable quality.
            </p>
          </div>
          
          <div className="process-container-alt">
            {[
              { step: '01', title: 'Discovery', icon: <Search />, desc: 'Market Research & Scoping' },
              { step: '02', title: 'Visuals', icon: <PenTool />, desc: 'UI/UX & Prototyping' },
              { step: '03', title: 'Build', icon: <Monitor />, desc: 'Full-Stack Development' },
              { step: '04', title: 'Logic', icon: <Activity />, desc: 'QA & Stress Testing' },
              { step: '05', title: 'Launch', icon: <Play />, desc: 'CI/CD & Deployment' },
            ].map((p, i) => (
              <div className="process-step-premium reveal" key={i}>
                <div className="step-accent-line" />
                <div className="process-icon-box">
                   <div className="icon-inner">{p.icon}</div>
                   <div className="step-glow" />
                </div>
                <div className="step-content">
                  <span className="step-number-alt">{p.step}</span>
                  <h4>{p.title}</h4>
                  <p className="small-desc">{p.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Dynamic flow line connector */}
            <div className="dynamic-path-connector" />
          </div>
        </div>
      </section>

      {/* 3.6 Case Studies Section */}
      <HolographicCaseHub />

      {/* 3.7 Portfolio Section — Premium Redesign */}
      <FeaturedPortfolio />

      {/* 3.8 Technologies Section — Tech Orion Redesign */}
      <section className="tech-orion section-padding">
        <div className="container center reveal">
          <span className="sub-heading">Infinite Stack</span>
          <h2>The <span className="gradient-text">Tech Orion</span></h2>
          <p className="text-secondary mt-3 mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            We leverage a hand-picked ecosystem of high-performance technologies to engineer 
            solutions that outperform and outscale.
          </p>
          
          <div className="orion-nebula">
            {[
              { name: 'React', level: 'Core', color: '#00f2ff' },
              { name: 'Next.js', level: 'Edge', color: '#fff' },
              { name: 'TypeScript', level: 'Logic', color: '#0070ff' },
              { name: 'Node.js', level: 'Runtime', color: '#00ff88' },
              { name: 'Python', level: 'A.I.', color: '#ffa500' },
              { name: 'Docker', level: 'Infra', color: '#00f2ff' },
              { name: 'AWS', level: 'Cloud', color: '#ffa500' },
              { name: 'PostgreSQL', level: 'Data', color: '#7000ff' },
              { name: 'Figma', level: 'UX/UI', color: '#ff00ff' },
              { name: 'Kubernetes', level: 'Orch.', color: '#0070ff' },
            ].map((tech, i) => (
              <div 
                className="orion-node reveal" 
                key={i} 
                style={{ 
                  '--node-color': tech.color, 
                  '--node-delay': `${i * 0.15}s`,
                  animationDuration: `${3 + i}s`
                }}
              >
                <div className="node-content">
                  <span className="node-level">{tech.level}</span>
                  <div className="node-dot" />
                  <span className="node-name">{tech.name}</span>
                </div>
                <div className="node-connector" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.9 Industries — Strategic Domain Cluster Redesign */}
      <section className="section-padding industries-premium">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Strategic Domains</span>
            <h2>Industries We <span className="gradient-text">Elevate</span></h2>
            <p className="text-secondary mt-3" style={{ maxWidth: '600px', margin: '0 auto' }}>
              We deploy specialized engineering squads tailored to the unique complexities of 
              your specific industry landscape.
            </p>
          </div>
          
          <div className="domain-cluster-grid">
            {[
              { icon: <Crosshair size={32}/>, title: 'Healthcare', metric: 'HIPAA Sync', color: '#ff4b4b' },
              { icon: <BarChart size={32}/>, title: 'Fintech', metric: '99.9% Uptime', color: '#00f2ff' },
              { icon: <ShoppingCart size={32}/>, title: 'E-commerce', metric: '2M+ Daily Tx', color: '#ff00ff' },
              { icon: <GraduationCap size={32}/>, title: 'EdTech', metric: 'Global Scale', color: '#ffa500' },
            ].map((domain, i) => (
              <div 
                className="domain-card-premium reveal" 
                key={i}
                style={{ '--domain-color': domain.color, '--reveal-delay': `${i * 0.1}s` }}
              >
                <div className="domain-card-inner">
                  <div className="domain-icon-aura">
                    {domain.icon}
                  </div>
                  <h3>{domain.title}</h3>
                  <div className="domain-metric-badge">
                     <div className="pulse-dot" />
                     <span>{domain.metric}</span>
                  </div>
                  
                  {/* Decorative 3D elements */}
                  <div className="domain-card-glass-layer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.10 Why Choose Us — Reverted to Features Grid Styling */}
      <section className="features-premium section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">The FIS Advantage</span>
            <h2 className="font-giant">Built for <span className="gradient-text">Excellence</span></h2>
            <p className="text-secondary mt-3" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We don't just deliver projects; we engineer digital legacies. Our approach combines 
              artistic precision with technical mastery to solve your most complex challenges.
            </p>
          </div>

          <div className="features-premium-grid">
            {[
              { 
                icon: <Users size={32} />, 
                title: 'Elite Engineering', 
                desc: 'A hand-picked team of senior architects and full-stack wizards dedicated to your vision.',
                color: 'var(--accent-purple)',
                delay: '0.1s'
              },
              { 
                icon: <Zap size={32} />, 
                title: 'Velocity First', 
                desc: 'Agile methodologies that prioritize speed without ever sacrificing code integrity.',
                color: 'var(--accent-cyan)',
                delay: '0.2s'
              },
              { 
                icon: <Shield size={32} />, 
                title: 'Fortress Security', 
                desc: 'Enterprise-grade encryption and zero-trust protocols baked into the core architecture.',
                color: '#ff00ff',
                delay: '0.3s'
              },
              { 
                icon: <Headphones size={32} />, 
                title: 'Sync Support', 
                desc: 'Global assistance that speaks your language and operates in your timezone, 24/7.',
                color: '#ffa500',
                delay: '0.4s'
              },
              { 
                icon: <Activity size={32} />, 
                title: 'Performance DNA', 
                desc: 'Optimization is not an afterthought. We build for sub-second latency and infinite scale.',
                color: '#00ff88',
                delay: '0.5s'
              },
            ].map((f, i) => (
              <div 
                className="feature-card-premium reveal" 
                key={i}
                style={{ '--f-color': f.color, '--reveal-delay': f.delay }}
              >
                <div className="feature-icon-wrapper">
                  <div className="feature-icon-glow" />
                  {f.icon}
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="feature-card-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.11 Results — Live Meta-Stats Hub Redesign */}
      <section className="section-padding stats-premium">
        <div className="container">
          <div className="stats-meta-hub reveal">
            {[
              { val: '240+', label: 'Digital Products', sub: 'Engineered & Launched' },
              { val: '180+', label: 'Global Clients', sub: 'Inc. 40 Fortune 500s' },
              { val: '99.8%', label: 'Infrastructure uptime', sub: 'AWS & Azure cloud sync' },
            ].map((stat, i) => (
              <div className="meta-stat-block" key={i}>
                <div className="meta-stat-v-wrap">
                  <span className="meta-stat-value count-up">{stat.val}</span>
                  <div className="meta-stat-progress">
                    <div className="progress-fill" style={{ width: '100%', animationDelay: `${i * 0.2}s` }} />
                  </div>
                </div>
                <div className="meta-stat-content">
                  <h4>{stat.label}</h4>
                  <p>{stat.sub}</p>
                </div>
              </div>
            ))}
            
            {/* Visual background sync wave */}
            <div className="stats-wave-overlay" />
          </div>
        </div>
      </section>

      {/* 3.12 Testimonials — Global Voices Redesign */}
      <section className="section-padding testimonials-premium">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Global Impact</span>
            <h2>Client <span className="gradient-text">Voices</span></h2>
          </div>
          
          <div className="testimonials-stack">
            {[
              {
                quote: "The team delivered an outstanding platform that exceeded all our expectations. Their technical depth in cloud-native scaling is truly world-class.",
                name: "Sarah Jenkins",
                role: "CTO, TechCorp",
                avatar: "SJ",
                color: "var(--accent-purple)"
              },
              {
                quote: "Execution was flawless. They understood our complex requirements and handled the HIPAA-compliance for our mobile ecosystem perfectly.",
                name: "Michael Chang",
                role: "Founder, MedConnect",
                avatar: "MC",
                color: "var(--accent-cyan)"
              },
              {
                quote: "A transformative partnership. Their AI-driven approach reduced our operational overhead by 40% within the first quarter.",
                name: "Elena Rodriguez",
                role: "VP Eng, InnovateInc",
                avatar: "ER",
                color: "#ff00ff"
              }
            ].map((t, i) => (
              <div 
                className="testimonial-portal reveal" 
                key={i}
                style={{ '--accent-color': t.color, '--reveal-delay': `${i * 0.1}s` }}
              >
                <div className="portal-quote-mark">"</div>
                <p className="testimonial-text">{t.quote}</p>
                <div className="portal-client-footer">
                  <div className="portal-avatar" style={{ background: t.color }}>{t.avatar}</div>
                  <div className="portal-client-meta">
                    <div className="portal-client-name">{t.name}</div>
                    <div className="portal-client-role">{t.role}</div>
                  </div>
                </div>
                <div className="portal-glow-light" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.13 Pricing — Investment Architecture Redesign */}
      <section className="section-padding pricing-premium">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Transparent Investment</span>
            <h2>Select Your <span className="gradient-text">Success Tier</span></h2>
          </div>
          
          <div className="pricing-premium-grid">
            {[
              { 
                name: 'Essential', 
                price: '$1,999', 
                per: '/start', 
                features: ['UI/UX Blueprint', 'Core Web Platform', 'Standard Security', '30 Days Support'],
                featured: false,
                color: 'var(--text-muted)'
              },
              { 
                name: 'Professional', 
                price: '$4,999', 
                per: '/start', 
                features: ['Premium Custom Design', 'Full-Stack Ecosystem', 'API & Third-Party Sync', '180 Days Priority Support'],
                featured: true,
                color: 'var(--accent-cyan)'
              },
              { 
                name: 'Enterprise', 
                price: 'Custom', 
                per: '/quote', 
                features: ['Complex Architectures', 'Cloud Native & DevOps', 'Specialized AI Models', '24/7 Dedicated Squad'],
                featured: false,
                color: 'var(--accent-purple)'
              },
            ].map((plan, i) => (
              <div className={`tier-card-premium reveal ${plan.featured ? 'featured' : ''}`} key={i}>
                {plan.featured && <div className="tier-popular-tag">Most Optimized</div>}
                
                <div className="tier-header">
                  <h3>{plan.name}</h3>
                  <div className="tier-price-box">
                    <span className="tier-currency">$</span>
                    <span className="tier-amount">{plan.price.replace('$', '')}</span>
                    <span className="tier-per">{plan.per}</span>
                  </div>
                </div>

                <ul className="tier-features-list">
                  {plan.features.map(f => (
                    <li key={f}>
                      <div className="tier-check"><Check size={14} /></div>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <button className={`tier-cta-btn ${plan.featured ? 'primary' : 'secondary'}`}>
                  {plan.name === 'Enterprise' ? 'Initiate Consultation' : 'Select This Tier'}
                </button>
                
                <div className="tier-card-bg-gradient" style={{ background: plan.featured ? 'radial-gradient(circle at 100% 0%, rgba(0, 242, 255, 0.15), transparent 70%)' : '' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.14 FAQ Section — Knowledge Grid Redesign */}
      <section className="section-padding faq-premium">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Intelligence Hub</span>
            <h2>System <span className="gradient-text">F.A.Q.</span></h2>
          </div>
          <div className="faq-knowledge-grid reveal" style={{ marginTop: '5rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-tile ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="faq-tile-header">
                  <h3>{faq.q}</h3>
                  <div className="faq-status-indicator">
                     <span className="status-label">{openFaq === i ? 'DECRYPTED' : 'LOCKED'}</span>
                     <ChevronDown size={18} className="faq-icon" />
                  </div>
                </div>
                <div className="faq-tile-content">
                  <div className="content-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.17 Contact — The Mission Launchpad Redesign */}
      <section id="contact" className="section-padding contact-premium">
        <div className="container">
          <div className="contact-portal-grid">
            <div className="contact-info-portal reveal">
              <span className="sub-heading">Protocol 01</span>
              <h2 className="font-giant">Initiate <br/><span className="gradient-text">Discovery</span></h2>
              <p className="text-secondary mt-3 mb-5" style={{ maxWidth: '450px' }}>
                Secure a high-bandwidth consultation with our lead architects to map your project's 
                technical trajectory.
              </p>
              
              <div className="portal-info-list">
                <div className="p-info-item">
                  <div className="p-info-icon"><Mail size={20} /></div>
                  <div>
                    <label>Transmission</label>
                    <p>hello@futureinvo.com</p>
                  </div>
                </div>
                <div className="p-info-item">
                  <div className="p-info-icon"><Phone size={20} /></div>
                  <div>
                    <label>Direct Sync</label>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="p-info-item">
                  <div className="p-info-icon"><MapPin size={20} /></div>
                  <div>
                    <label>HQ Coordinates</label>
                    <p>Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-portal reveal">
              <div className="form-glow-box">
                <form className="mission-form">
                  <div className="form-row">
                    <div className="input-group-premium">
                      <label>Commander Name</label>
                      <input type="text" placeholder="John Wick" required />
                      <div className="input-focus-line" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-group-premium">
                      <label>Secure Email</label>
                      <input type="email" placeholder="john@continental.com" required />
                      <div className="input-focus-line" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="input-group-premium">
                      <label>Mission Objectives</label>
                      <textarea rows="4" placeholder="Brief us on your objectives..." required></textarea>
                      <div className="input-focus-line" />
                    </div>
                  </div>
                  <button type="submit" className="mission-launch-btn">
                     <span>Launch Discovery</span>
                     <ArrowRight size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.18 CTA Section */}
      <section className="section-padding center">
        <div className="container glass-card cta-banner-card reveal">
          <div className="cta-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
          <div className="cta-content-wrap">
            <h2>Ready to build your <span className="gradient-text">project?</span></h2>
            <p className="mb-4 font-normal text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>Let's turn your vision into a high-performance digital reality with our expert engineering team.</p>
            <Link to="/contact" className="btn btn-primary btn-large highlight-btn">Start Discovery Journey &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

