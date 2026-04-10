import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, Github } from 'lucide-react';

// Import local premium assets
import fintechImg from '../images/portfolio/fintech_nexus.png';
import healthcareImg from '../images/portfolio/bioneural_diagnostic.png';
import cloudImg from '../images/portfolio/nexus_cloud.png';
import walletImg from '../images/portfolio/quantum_wallet.png';
import securityImg from '../images/portfolio/zero_trust.png';
import syntheticImg from '../images/portfolio/synthetic_hub.png';

import '../styles/Portfolio.css';

/**
 * Custom hook for intersection observer animations
 */
function useReveal(dependency) {
  useEffect(() => {
    // Add a small timeout to ensure DOM is ready and React has finished rendering children
    const timer = setTimeout(() => {
      const els = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { 
          if (e.isIntersecting) { 
            e.target.classList.add('visible'); 
            observer.unobserve(e.target); 
          }
        });
      }, { threshold: 0.05, rootMargin: '0px 0px -50px 0px' });
      
      els.forEach(el => observer.observe(el));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [dependency]);
}

const projects = [
  {
    id: "001",
    img: fintechImg, 
    category: 'WEB',
    tags: ['React', 'D3.js', 'Node.js'],
    title: 'FinTech Smart Nexus',
    desc: 'An advanced analytical terminal for enterprise liquidity management. Built for sub-second precision and massive data throughput.',
    stats: [{ val: '99.99%', label: 'Uptime' }, { val: '< 50ms', label: 'Latency' }],
    link: '#',
    github: '#'
  },
  {
    id: "002",
    img: healthcareImg, 
    category: 'AI',
    tags: ['Python', 'TensorFlow', 'FastAPI'],
    title: 'BioNeural Diagnostic',
    desc: 'Real-time medical imaging analysis system using neural networks to identify anomalies in radiological scans with 98% accuracy.',
    stats: [{ val: '98%', label: 'Accuracy' }, { val: '10x', label: 'Speedup' }],
    link: '#',
    github: '#'
  },
  {
    id: "003",
    img: cloudImg, 
    category: 'CLOUD',
    tags: ['Go', 'Kubernetes', 'AWS'],
    title: 'Nexus Cloud Orchestrator',
    desc: 'Self-healing infrastructure management platform that orchestrates global microservices across multi-region edge nodes.',
    stats: [{ val: '2M+', label: 'Deploys' }, { val: '40%', label: 'Cost Save' }],
    link: '#',
    github: '#'
  },
  {
    id: "004",
    img: walletImg, 
    category: 'MOBILE',
    tags: ['SwiftUI', 'Kotlin', 'Firebase'],
    title: 'Quantum Wallet',
    desc: 'Next-generation biometric digital wallet for institutional assets, featuring quantum-resistant encryption and offline signing.',
    stats: [{ val: 'Institutional', label: 'Grade' }, { val: '0.0s', label: 'Lag' }],
    link: '#',
    github: '#'
  },
  {
    id: "005",
    img: securityImg, 
    category: 'CLOUD',
    tags: ['Rust', 'OAuth 2.0', 'K8s'],
    title: 'Zero-Trust Sentinel',
    desc: 'Automated threat detection perimeter that leverages behavioral analytics to prevent zero-day vulnerabilities in real-time.',
    stats: [{ val: 'Real-time', label: 'Monitoring' }, { val: 'L5', label: 'Defense' }],
    link: '#',
    github: '#'
  },
  {
    id: "006",
    img: syntheticImg, 
    category: 'AI',
    tags: ['PyTorch', 'Next.js 14', 'PostgreSQL'],
    title: 'Synthetic Intelligence Hub',
    desc: 'Bespoke LLM integration platform allowing enterprises to train specialized agents on proprietary internal data loops.',
    stats: [{ val: '100+', label: 'Agents' }, { val: 'Custom', label: 'Training' }],
    link: '#',
    github: '#'
  }
];

export default function Portfolio() {
  const [filter, setFilter] = useState('ALL');
  // Pass filter as dependency so we re-scan for .reveal elements when list changes
  useReveal(filter);
  
  const filteredProjects = projects.filter(p => filter === 'ALL' || p.category === filter);

  const categories = [
    { id: 'ALL', label: 'ALL DEPLOYMENTS' },
    { id: 'WEB', label: 'WEB ENGINEERING' },
    { id: 'MOBILE', label: 'MOBILE SYSTEMS' },
    { id: 'AI', label: 'NEURAL LOGIC' },
    { id: 'CLOUD', label: 'CLOUD NATIVE' }
  ];

  return (
    <div className="page-wrapper portfolio-page">
      {/* 3D Immersive Hero */}
      <section className="portfolio-hero">
        <div className="container">
          <div className="reveal">
            <span className="sub-heading">Case Archives</span>
            <h1>Pioneering <span className="gradient-text">Masterpieces</span></h1>
            <p>
              A curated showcase of high-bandwidth engineering, architectural brilliance, 
              and transformative digital products that define the next generation of industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Matrix */}
      <section className="container">
        <div className="portfolio-filters reveal">
          {categories.map(cat => (
            <button 
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Main Grid */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="portfolio-grid-premium">
            {filteredProjects.map((p, i) => (
              <div 
                className="project-card-v2 reveal" 
                key={`${filter}-${p.id}`} 
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="project-visual">
                  <div className="project-tech-float">
                    {p.tags.map(t => <span key={t} className="tech-tag-v2">{t}</span>)}
                  </div>
                  <div className="project-overlay" />
                  <img src={p.img} alt={p.title} />
                </div>
                
                <div className="project-content-v2">
                  <div className="project-meta-v2">
                    <span className="project-id-v2">NODE_REF / {p.id}</span>
                    <span className="ep-category-pill" style={{ fontSize: '0.65rem', padding: '4px 12px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'var(--accent-cyan)' }}>{p.category}</span>
                  </div>
                  
                  <div>
                    <h3 className="project-title-v2">{p.title}</h3>
                    <p className="project-desc-v2">{p.desc}</p>
                  </div>
                  
                  <div className="project-stats-v2">
                    {p.stats.map((s, idx) => (
                      <div className="stat-item-v2" key={idx}>
                        <span>{s.val}</span>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="project-actions-v2">
                    <a href={p.link} className="view-case-btn">
                      <span>Case Protocol</span>
                      <ArrowRight size={18} />
                    </a>
                    <a href={p.github} className="external-icon-btn" aria-label="Github Repo">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="center text-secondary" style={{ padding: '5rem 0' }}>
               No deployments found in this sector.
            </div>
          )}
        </div>
      </section>

      {/* Extreme Premium CTA */}
      <section className="portfolio-cta">
        <div className="container">
          <div className="portfolio-cta-card reveal">
            <span className="sub-heading">Initialization Protocol</span>
            <h2>Ready to Architect Your <span className="gradient-text">Future?</span></h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 3rem', color: 'var(--text-secondary)' }}>
              Partner with our elite squads to transform your ambitious visions into 
              bulletproof, high-performing digital realities. 
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
                Start Development Nexus
              </Link>
              <Link to="/services" className="btn btn-secondary" style={{ padding: '18px 45px', fontSize: '1.1rem' }}>
                Analyze Stack
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Status Bar Floating (Decorative) */}
      <div className="system-status-indicator" style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 100,
        background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-glass)', borderRadius: '50px',
        padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '10px',
        fontSize: '0.7rem', fontWeight: 900, letterSpacing: '2px', color: 'var(--accent-cyan)'
      }}>
        <div style={{ width: '8px', height: '8px', background: 'var(--accent-cyan)', borderRadius: '50%', animation: 'pulse 2s infinite' }} />
        DEEP_TECH_PORTFOLIO_SYNCED
      </div>
    </div>
  );
}
