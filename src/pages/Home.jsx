import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Zap, Lock, Headphones, Maximize, Code, Smartphone,
  Cloud, Brain, Briefcase, ArrowRight, Search, PenTool,
  Monitor, Play, Activity, MapPin, Mail, Phone, ChevronDown, Check, CheckCircle, GraduationCap, ShoppingCart, Crosshair, BarChart, Layout, Mouse
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

      {/* 3.4 Services Section */}
      <section id="services" className="section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">What We Do</span>
            <h2>Our Core <span className="gradient-text">Services</span></h2>
          </div>
          <div className="services-grid">
            {[
              { num: '01', badge: 'Popular', icon: <Code />, title: 'Web Development', desc: 'Custom, high-performance web applications built with modern frameworks and robust backend architectures.', color: 'purple' },
              { num: '02', badge: 'Enterprise', icon: <Smartphone />, title: 'Mobile Apps', desc: 'Native and cross-platform mobile experiences that offer seamless performance across all devices.', color: 'blue' },
              { num: '03', badge: 'Secure', icon: <Cloud />, title: 'Cloud Solutions', desc: 'Scalable cloud infrastructure, advanced migrations, and state-of-the-art DevOps automation for reliability.', color: 'cyan' },
              { num: '04', badge: 'Smart', icon: <Brain />, title: 'AI Solutions', desc: 'Harness the power of intelligent algorithms and neural networks to drive business automation and insight.', color: 'magenta' },
              { num: '05', badge: 'Strategy', icon: <Briefcase />, title: 'IT Consulting', desc: 'Expert technology advisory services to map out your long-term digital transformation and growth strategy.', color: 'orange' },
            ].map((s, i) => (
              <div className="glass-card reveal" key={i}>
                <span className="service-card-num">{s.num}</span>
                <div>
                  <div className="service-badge">{s.badge}</div>
                  <div className={`service-icon ${s.color}`}>{s.icon}</div>
                  <h3 className="mb-2 font-large">{s.title}</h3>
                  <p className="text-secondary mb-3 font-normal">{s.desc}</p>
                </div>
                <Link to="/services" className="details-link">
                  Explore Now <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.5 Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">How We Work</span>
            <h2>Our Proven <span className="gradient-text">Process</span></h2>
          </div>
          <div className="process-container">
            {/* Connecting line */}
            <div className="process-connector"></div>
            {[
              { step: 'PROJECT SCOPE', title: 'Requirement Analysis', icon: <Search /> },
              { step: 'VISUAL DESIGN', title: 'Design & UI/UX', icon: <PenTool /> },
              { step: 'AGILE BUILD', title: 'Development', icon: <Monitor /> },
              { step: 'QA & AUDIT', title: 'Testing', icon: <Activity /> },
              { step: 'LIVE LAUNCH', title: 'Deployment', icon: <Play /> },
            ].map((p, i) => (
              <div className="process-step-item reveal" key={i}>
                <span className="process-step-num">{p.step}</span>
                <div className="process-icon-outer">
                  {p.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{p.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.6 Case Studies Section */}
      <HolographicCaseHub />

      {/* 3.7 Portfolio Section — Premium Redesign */}
      <FeaturedPortfolio />

      {/* 3.8 Technologies Section */}
      <section className="tech-stack section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Technology</span>
            <h2>Our <span className="gradient-text">Modern Tech Stack</span></h2>
          </div>
        </div>
        <div className="tech-marquee py-2" style={{ padding: '2rem 0' }}>
          <div className="marquee-content">
            {[...techItems, ...techItems, ...techItems].map((t, i) => (
              <div className="tech-tag" key={i}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.9 Industries Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Where We Excel</span>
            <h2>Industries We <span className="gradient-text">Serve</span></h2>
          </div>
          <div className="ind-grid">
            {[
              { icon: <Crosshair />, title: 'Healthcare' },
              { icon: <BarChart />, title: 'Fintech' },
              { icon: <ShoppingCart />, title: 'E-commerce' },
              { icon: <GraduationCap />, title: 'EdTech' },
            ].map((ind, i) => (
              <div className="glass-card center reveal py-large" key={i}>
                <div className="ind-card-icon">
                  {React.cloneElement(ind.icon, { size: 32 })}
                </div>
                <h3>{ind.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.10 Why Choose Us */}
      <section className="features section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Why Choose Us</span>
            <h2>Built for <span className="gradient-text">Excellence</span></h2>
          </div>
          <div className="features-grid" style={{ marginTop: '4rem' }}>
            {[
              { icon: <Users size={40} />, title: 'Expert Team', desc: 'Highly skilled professionals with years of industry experience.' },
              { icon: <Zap size={40} />, title: 'Fast Delivery', desc: 'Efficient workflows ensuring timely project completion.' },
              { icon: <Lock size={40} />, title: 'Secure Systems', desc: 'Robust security protocols to protect your digital assets.' },
              { icon: <Headphones size={40} />, title: '24/7 Support', desc: 'Dedicated assistance whenever you need it most.' },
            ].map((f, i) => (
              <div className="feature-item glass-card reveal" key={i}>
                <div className="feature-icon">{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.11 Results / Achievements */}
      <section className="section-padding">
        <div className="container">
          <div className="glass-card center reveal stats-banner-card">
            <div className="stats-banner-grid">
              <div>
                <span className="stat-number-giant">200+</span>
                <span className="stat-label-large">Projects Delivered</span>
              </div>
              <div>
                <span className="stat-number-giant">150+</span>
                <span className="stat-label-large">Global Clients</span>
              </div>
              <div>
                <span className="stat-number-giant">99%</span>
                <span className="stat-label-large">SLA Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.12 Testimonials */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Client Feedback</span>
            <h2>What They <span className="gradient-text">Say</span></h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card glass-card reveal">
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p>"The team delivered an outstanding platform that exceeded all our expectations. Their technical depth in cloud-native scaling is truly world-class."</p>
              <div className="client-info">
                <div className="client-avatar">SJ</div>
                <div>
                  <div className="client-name">Sarah Jenkins</div>
                  <div className="client-role">CTO, TechCorp</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card glass-card reveal">
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p>"Execution was flawless. They understood our complex requirements and handled the HIPAA-compliance for our mobile ecosystem perfectly."</p>
              <div className="client-info">
                <div className="client-avatar">MC</div>
                <div>
                  <div className="client-name">Michael Chang</div>
                  <div className="client-role">Founder, MedConnect</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3.13 Pricing Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Transparent Cost</span>
            <h2>Flexible <span className="gradient-text">Pricing Plans</span></h2>
          </div>
          <div className="pricing-grid" style={{ marginTop: '4rem' }}>
            <div className="plan-card glass-card reveal">
              <div className="plan-header">
                <h3>Basic</h3>
                <div className="price">$999<span>/project start</span></div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle size={18} /> Basic UI/UX Design</li>
                <li><CheckCircle size={18} /> Simple Web App</li>
                <li><CheckCircle size={18} /> 1 Month Support</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Choose Plan</button>
            </div>
            <div className="plan-card glass-card featured reveal">
              <div className="popular-badge">Most Popular</div>
              <div className="plan-header">
                <h3>Professional</h3>
                <div className="price">$3,499<span>/project start</span></div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle size={18} /> Premium Custom Design</li>
                <li><CheckCircle size={18} /> Full-Stack Development</li>
                <li><CheckCircle size={18} /> API Integrations</li>
                <li><CheckCircle size={18} /> 6 Months Support</li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }}>Choose Plan</button>
            </div>
            <div className="plan-card glass-card reveal">
              <div className="plan-header">
                <h3>Enterprise</h3>
                <div className="price">Custom<span>Pricing</span></div>
              </div>
              <ul className="plan-features">
                <li><CheckCircle size={18} /> Complex Architectures</li>
                <li><CheckCircle size={18} /> Cloud Native & DevOps</li>
                <li><CheckCircle size={18} /> AI/ML Solutions</li>
                <li><CheckCircle size={18} /> 24/7 Dedicated Support</li>
              </ul>
              <button className="btn btn-secondary" style={{ width: '100%' }}>Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* 3.14 FAQ Section */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Got Questions?</span>
            <h2>Frequently Asked <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="faq-accordion reveal" style={{ marginTop: '4rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ marginBottom: '1rem' }}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <ChevronDown />
                </div>
                <div className="faq-answer">
                  <p style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3.15 Blog Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Latest Insights</span>
            <h2>Our <span className="gradient-text">Blog & News</span></h2>
          </div>
          <div className="blog-grid" style={{ marginTop: '4rem' }}>
            <div className="glass-card reveal">
              <div className="blog-date">March 15, 2026</div>
              <h3 className="font-medium mb-2">The Future of AI in Enterprise Tech</h3>
              <p className="text-secondary">Discover how artificial intelligence is shaping the landscape of modern enterprise software architecture...</p>
              <Link to="/blog" className="detail-link-accent">Read Article &rarr;</Link>
            </div>
            <div className="glass-card reveal">
              <div className="blog-date">March 10, 2026</div>
              <h3 className="font-medium mb-2">Why Migrate to Next.js Now?</h3>
              <p className="text-secondary">Performance, SEO, and developer experience. Learn why top companies are rewriting their frontends...</p>
              <Link to="/blog" className="detail-link-accent">Read Article &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3.16 Lead Magnet Section */}
      <section className="section-padding services-section">
        <div className="container center glass-card reveal audit-card">
          <h2 className="mb-2" style={{ fontSize: '2.5rem' }}>Get Your <span className="gradient-text">Free Tech Audit</span></h2>
          <p className="text-secondary font-normal mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Unsure if your infrastructure is scalable? Let our experts analyze your architecture and provide a free, comprehensive report.
          </p>
          <div className="audit-form">
            <input type="email" placeholder="Enter your business email" className="input-pill-dark" />
            <button className="btn btn-primary">Claim Audit</button>
          </div>
        </div>
      </section>

      {/* 3.17 Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Get In Touch</span>
            <h2>Let's Discuss <span className="gradient-text">Your Project</span></h2>
          </div>
          <div className="mt-4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div className="reveal">
              <h3 className="font-large mb-4">Contact Information</h3>
              <div className="contact-info-list">
                <div className="contact-info-block">
                  <div style={{ color: 'var(--accent-cyan)' }}><Mail size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>Email</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>hello@futureinvo.com</p>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div style={{ color: 'var(--accent-cyan)' }}><Phone size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>Phone</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-info-block">
                  <div style={{ color: 'var(--accent-cyan)' }}><MapPin size={24} /></div>
                  <div>
                    <h4 style={{ marginBottom: '0.3rem' }}>Address</h4>
                    <p style={{ color: 'var(--text-secondary)' }}>123 Tech Boulevard<br />Silicon Valley, CA 94025</p>
                  </div>
                </div>
              </div>
              <div className="map-view-box">
                {/* Map Placeholder */}
                <span className="text-muted">Interactive Map View</span>
              </div>
            </div>
            <div className="glass-card reveal">
              <form className="contact-form-dark">
                <div className="form-field-wrap">
                  <label>Full Name</label>
                  <input type="text" className="input-dark-rounded" placeholder="John Doe" />
                </div>
                <div className="form-field-wrap">
                  <label>Email</label>
                  <input type="email" className="input-dark-rounded" placeholder="john@company.com" />
                </div>
                <div className="form-field-wrap">
                  <label>Message</label>
                  <textarea rows="5" className="input-dark-rounded no-resize" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-2">Send Message</button>
              </form>
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

