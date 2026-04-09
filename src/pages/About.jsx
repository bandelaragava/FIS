import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Eye, Award, Users, Globe, Trophy } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); }});
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function About() {
  useReveal();

  return (
    <div className="page-wrapper">
      {/* Cinematic Hero — About Section */}
      <section className="about-hero-ep">
        <div className="hero-cyber-grid" />
        <div className="hero-blobs">
           <div className="blob b-1" />
           <div className="blob b-2" />
        </div>
        <div className="container">
          <div className="hero-content reveal">
            <span className="sub-heading">Establishing the Benchmark</span>
            <h1>Engineering the <br/><span className="gradient-text">Digital Syndicate</span></h1>
            <p>We are a global collective of elite architects, designers, and neural engineers dedicated to the pursuit of technical perfection and human-centric logic.</p>
            <div className="hero-meta-nodes">
               <div className="meta-node"><span>EST.</span> 2022</div>
               <div className="meta-node"><span>OPS.</span> GLOBAL</div>
               <div className="meta-node"><span>TECH.</span> L5 CORE</div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Strategic Infrastructure - Mission & Vision */}
      <section className="section-padding premium-strategic-section">
        <div className="container">
          <div className="premium-bento-grid">
            {/* Mission Card */}
            <div className="bento-card bento-mission reveal">
              <div className="bento-glow bento-glow-purple" />
              <div className="bento-glass-layer" />
              <div className="bento-content">
                <div className="bento-header">
                  <div className="icon-portal premium-icon purple-icon"><Rocket size={24}/></div>
                  <span className="bento-tag">PROTOCOL 01</span>
                </div>
                <h3>Our <span className="gradient-text">Mission</span></h3>
                <p>Architecting the digital frontier. We engineer unbreakable, high-complexity systems that elevate the world's most ambitious enterprises.</p>
                <div className="bento-footer">
                  <div className="system-status">
                    <span className="pulse-dot"></span>
                    ACTIVE SYSTEMS
                  </div>
                  <div className="scan-line"></div>
                </div>
              </div>
            </div>

            {/* Technical DNA Card */}
            <div className="bento-card bento-dna reveal" style={{ "--reveal-delay": "0.15s" }}>
              <div className="bento-glow bento-glow-cyan" />
              <div className="bento-glass-layer" />
              <div className="bento-content">
                <div className="bento-header">
                  <div className="icon-portal premium-icon cyan-icon"><Award size={24}/></div>
                  <span className="bento-tag">CORE LOGIC</span>
                </div>
                <h3>Technical <span className="gradient-text">DNA</span></h3>
                <p>Relentless focus on performance metrics, 99.9% project success rate, and architectures built for infinite organic scale.</p>
                <div className="dna-visualizer">
                  {[...Array(6)].map((_, i) => (
                    <div className="dna-node" style={{"--i": i}} key={i}></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card - Spans full width at bottom or 2 columns */}
            <div className="bento-card bento-vision reveal" style={{ "--reveal-delay": "0.3s" }}>
              <div className="bento-glow bento-glow-mixed" />
              <div className="bento-glass-layer" />
              <div className="bento-content">
                <div className="bento-header">
                  <div className="icon-portal premium-icon mixed-icon"><Eye size={24}/></div>
                  <span className="bento-tag">FUTURE HORIZON</span>
                </div>
                <div className="vision-body-split">
                  <div className="vision-text">
                    <h3>The <span className="gradient-text">2030 Vision</span></h3>
                    <p>Establishing the ultimate standard for global digital transformation. We envision an ecosystem where planetary-scale technology seamlessly empowers human endeavor.</p>
                  </div>
                  <div className="vision-metrics">
                    <div className="metric">
                      <span className="m-value">100%</span>
                      <span className="m-label">SYNC</span>
                    </div>
                    <div className="metric">
                      <span className="m-value">360°</span>
                      <span className="m-label">DEPLOYMENT</span>
                    </div>
                    <div className="metric">
                      <span className="m-value">∞</span>
                      <span className="m-label">SCALE</span>
                    </div>
                  </div>
                  <div className="radar-scanner">
                    <div className="radar-sweep"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Temporal Backbone - Evolution Section */}
      <section className="section-padding premium-temporal">
        <div className="container">
          <div className="premium-section-header center reveal">
            <span className="premium-sub-heading">Operational History</span>
            <h2>The <span className="gradient-text">Temporal Backbone</span></h2>
          </div>
          
          <div className="premium-timeline-container reveal">
            <div className="timeline-glow-line"></div>
            {[
              { year: '2026', title: 'Global Node Deployment', desc: 'Activated strategic operation hubs in Silicon Valley and London, bridging the transatlantic digital divide.', status: 'DEPLOYED', icon: <Globe size={20}/> },
              { year: '2024', title: 'Neural Core Alpha', desc: 'Launched specialized Synthetic Intelligence wing, deploying custom LLM architectures for high-frequency fintech.', status: 'OPERATIONAL', icon: <Rocket size={20}/> },
              { year: '2022', title: 'System Initialized', desc: 'Future-Invo protocol established by a syndicate of senior architects focused on cloud-native dominance.', status: 'INITIALIZED', icon: <Trophy size={20}/> },
            ].map((m, i) => (
              <div className={`timeline-node ${i % 2 === 0 ? 'node-left' : 'node-right'}`} key={i}>
                <div className="node-hologram">
                   <div className="holo-ring"></div>
                   <div className="holo-core">{m.icon}</div>
                </div>
                <div className="node-glass-panel">
                  <div className="panel-glare-wrapper">
                    <div className="panel-glare"></div>
                  </div>
                  <div className="node-year-badge">{m.year}</div>
                  <div className="node-meta">
                     <h3>{m.title}</h3>
                     <span className={`status-badge status-${m.status.toLowerCase()}`}>{m.status}</span>
                  </div>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Talent Nodes - Team Section */}
      <section className="section-padding team-neural">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Expert Syndicate</span>
            <h2>Neural <span className="gradient-text">Talent Nodes</span></h2>
          </div>
          
          <div className="neural-grid mt-5">
            {[
              { name: 'Alice Wong', role: 'Chief Architect', spec: 'L5 SYSTEMS', img: 'https://i.pravatar.cc/300?u=12', color: 'var(--accent-cyan)' },
              { name: 'David Miller', role: 'Neural Lead', spec: 'DEEP LEARNING', img: 'https://i.pravatar.cc/300?u=24', color: 'var(--accent-purple)' },
              { name: 'Elena Petrova', role: 'UX Principal', spec: 'COGNITIVE DESIGN', img: 'https://i.pravatar.cc/300?u=36', color: '#ff00ff' },
            ].map((m, i) => (
              <div className="neural-node reveal" key={i} style={{ '--node-accent': m.color }}>
                <div className="node-scanner" />
                <div className="node-visual">
                  <div className="member-frame">
                    <img src={m.img} alt={m.name} />
                  </div>
                  <div className="node-badge">{m.spec}</div>
                </div>
                <div className="node-info">
                  <h3>{m.name}</h3>
                  <label>{m.role}</label>
                </div>
                <div className="node-footer">
                   <div className="node-status-dot" />
                   <span>ACTIVE ON PROJECT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Launchpad — CTA Redesign */}
      <section className="section-padding center">
        <div className="container glass-card cta-mission-box reveal">
          <div className="cta-grid-bg" />
          <div className="cta-content-inner">
            <span className="sub-heading">Next Phase</span>
            <h2>Let's build the <span className="gradient-text">Future</span> together</h2>
            <p className="mb-4 text-secondary" style={{ maxWidth: '600px', margin: '1.5rem auto' }}>
              Connect with our elite engineering syndicate to transform your technical vision into planetary scale reality.
            </p>
            <Link to="/contact" className="launch-btn-premium">
               <span>Initiate Protocol</span>
               <div className="btn-glow" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
