import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layout, Smartphone, Cloud, BrainCircuit, ShieldCheck, Database, ArrowRight,
  PenTool, Megaphone, Terminal, Lock, LineChart, Cpu, Check, Activity, Zap, Shield
} from 'lucide-react';

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

const services = [
  {
    icon: <ShieldCheck />, color: '#ffa500', accent: 'orange',
    title: 'IT Consulting',
    level: 'L3 STRATEGIC',
    desc: 'Alignment of technical infrastructure with high-level business objectives to eliminate bottlenecks and optimize throughput.',
    tags: ['Ecosystem Audit', 'Strategic Roadmap', 'Risk Mitigation', 'Legacy Sync'],
  },
  {
    icon: <Layout />, color: '#7000ff', accent: 'purple',
    title: 'Web Engineering',
    level: 'HIGH PERFORMANCE',
    desc: 'Engineering web platforms that define modern interactions, focusing on millisecond-level responsiveness and massive scale.',
    tags: ['React Architecture', 'Next.js 14', 'Edge Computing', 'Micro-frontends'],
  },
  {
    icon: <PenTool />, color: '#ff00ff', accent: 'magenta',
    title: 'UX/UI Architecture',
    level: 'PRECISION DESIGN',
    desc: 'Crafting digital experiences that bridge the gap between human intuition and technical logic.',
    tags: ['Aesthetic Brilliance', 'Behavioral UX', 'Design Systems', 'Motion Logic'],
  },
  {
    icon: <Smartphone />, color: '#0070ff', accent: 'blue',
    title: 'Mobile Ecosystems',
    level: 'CROSS PLATFORM',
    desc: 'Developing high-fidelity iOS and Android solutions that offer native performance with unified codebases.',
    tags: ['SwiftUI / Kotlin', 'React Native', 'Flutter Logic', 'Offline Sync'],
  },
  {
    icon: <Megaphone />, color: '#00f2ff', accent: 'cyan',
    title: 'Performance Marketing',
    level: 'DATA DRIVEN',
    desc: 'Algorithm-optimized campaigns designed to maximize ROI through deep technical SEO and behavioral analytics.',
    tags: ['Search Engine Sync', 'Social Engineering', 'LTV Analysis', 'Conversion Logic'],
  },
  {
    icon: <BrainCircuit />, color: '#ff00ff', accent: 'magenta',
    title: 'Synthetic Intelligence',
    level: 'NEURAL LOGIC',
    desc: 'Integrating advanced LLMs and predictive neural networks into existing workflows to automate complex decision-making.',
    tags: ['Custom LLM Tuning', 'NLU/NLP Systems', 'Predictive Modeling', 'Vision Logic'],
  },
  {
    icon: <Terminal />, color: '#7000ff', accent: 'purple',
    title: 'Enterprise Software',
    level: 'L5 OPERATIONS',
    desc: 'Bespoke internal tools and automated ecosystems designed to solve specific, high-scale operational challenges.',
    tags: ['Custom ERP/CRM', 'Workflow Automation', 'SaaS Engines', 'Infrastructure Sync'],
  },
  {
    icon: <Cloud />, color: '#00f2ff', accent: 'cyan',
    title: 'Cloud Orchestration',
    level: 'CLOUD NATIVE',
    desc: 'Design and deployment of self-healing, auto-scaling cloud infrastructures on AWS, Azure, and Google Cloud.',
    tags: ['Serverless Sync', 'K8s Orchestration', 'DevOps Pipeline', 'Site Reliability'],
  },
  {
    icon: <Lock />, color: '#ffa500', accent: 'orange',
    title: 'Cybersecurity Guard',
    level: 'ZERO TRUST',
    desc: 'Deploying advanced defensive perimeters and zero-trust identity management to safeguard digital assets.',
    tags: ['Pen-Testing', 'Threat Modeling', 'IAM Engineering', 'Data Encryption'],
  },
  {
    icon: <LineChart />, color: '#00ff88', accent: 'green',
    title: 'Data Intelligence',
    level: 'BIG DATA L3',
    desc: 'Processing massive datasets through high-speed pipelines to uncover actionable business intelligence.',
    tags: ['Pipeline Design', 'Spark/Databricks', 'Predictive BI', 'Stream Processing'],
  },
  {
    icon: <Cpu />, color: '#0070ff', accent: 'blue',
    title: 'Emerging Frontiers',
    level: 'R&D LABS',
    desc: 'Investigating the intersection of Blockchain, IoT, and high-performance computing to future-proof operations.',
    tags: ['Web3 Protocol', 'IoT Ecosystem', 'Edge Intelligence', 'Post-Quantum'],
  },
  {
    icon: <Database />, color: '#00ff88', accent: 'green',
    title: 'Full stack web & saas development',
    level: 'L5 ARCHITECTURE',
    desc: 'Building scalable, multi-tenant SaaS platforms with complex backend logic and seamless frontend interactions.',
    tags: ['Multi-tenant Hub', 'SaaS Licensing', 'Microservices', 'Real-time Sync'],
  },
  {
    icon: <Activity />, color: '#7000ff', accent: 'purple',
    title: 'Machine learning & deep learning',
    level: 'NEURAL FORGE',
    desc: 'Developing sophisticated computer vision and NLP models that transform raw data into predictive intelligence.',
    tags: ['Neural Training', 'Computer Vision', 'NLP Pipelines', 'Predictive Labs'],
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="page-wrapper services-ecosystem">
      {/* Dynamic Hero Section */}
      <section className="page-hero ecosystem-hero">
        <div className="hero-grid-bg" />
        <div className="container center">
          <span className="sub-heading reveal">The Intelligence Portfolio</span>
          <h1 className="reveal font-giant">Our <span className="gradient-text">Service Ecosystem</span></h1>
          <p className="reveal text-secondary" style={{ maxWidth: '700px', margin: '1.5rem auto' }}>
            We deploy multi-disciplinary squads to architect, engineer, and scale high-bandwidth 
            digital solutions that bridge the gap from concept to market dominance.
          </p>
          <div className="hero-tech-status reveal">
            <div className="status-item"><Activity size={16} /> <span>13 DEPLOYED CATEGORIES</span></div>
            <div className="status-item"><Zap size={16} /> <span>SUB-SECOND SYSTEM LATENCY</span></div>
            <div className="status-item"><Shield size={16} /> <span>ENTERPRISE GRADE SECURITY</span></div>
          </div>
        </div>
      </section>

      {/* Main Service Grid */}
      <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="service-portal-grid">
            {services.map((s, i) => (
              <div 
                key={i} 
                id={s.title.toLowerCase().replace(/\s+/g, '-')}
                className="portal-card reveal" 
                style={{ '--portal-color': s.color, '--reveal-delay': `${i * 0.05}s` }}
              >
                <div className="card-scanner-beam" />
                <div className="portal-card-header">
                  <span className="portal-num">{(i + 1).toString().padStart(2, '0')}</span>
                  <div className="portal-level-badge">{s.level}</div>
                </div>

                <div className="portal-icon-wrap">
                  <div className="portal-icon-glow" />
                  <div className="portal-icon-main">{s.icon}</div>
                </div>

                <h3 className="portal-title">{s.title}</h3>
                <p className="portal-desc">{s.desc}</p>

                <div className="portal-capability-hub">
                  <label>Core Capabilities</label>
                  <div className="portal-tags">
                    {s.tags.map(tag => (
                      <span key={tag} className="portal-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="portal-footer">
                  <Link to="/contact" className="portal-action-btn">
                     <span>Initiate Protocol</span>
                     <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section — Synchronized with Home */}
      <section className="section-padding pricing-section-alt">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Global Tiers</span>
            <h2>Investment <span className="gradient-text">Architecture</span></h2>
          </div>
          
          <div className="pricing-premium-grid">
            {[
              { 
                name: 'Essential', 
                price: '$1,999', 
                per: '/start', 
                features: ['UI/UX Blueprint', 'Core Web Platform', 'Standard Security', '30 Days Support'],
                featured: false
              },
              { 
                name: 'Professional', 
                price: '$4,999', 
                per: '/start', 
                features: ['Premium Custom Design', 'Full-Stack Ecosystem', 'API & Third-Party Sync', '180 Days Priority Support'],
                featured: true
              },
              { 
                name: 'Enterprise', 
                price: 'Custom', 
                per: '/quote', 
                features: ['Complex Architectures', 'Cloud Native & DevOps', 'Specialized AI Models', '24/7 Dedicated Squad'],
                featured: false
              },
            ].map((plan, i) => (
              <div className={`tier-card-premium reveal ${plan.featured ? 'featured' : ''}`} key={i}>
                {plan.featured && <div className="tier-popular-tag">Optimized Choice</div>}
                
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

                <Link to="/contact" className={`tier-cta-btn ${plan.featured ? 'primary' : 'secondary'}`} style={{ textDecoration: 'none', textAlign: 'center', display: 'block' }}>
                  {plan.name === 'Enterprise' ? 'Initiate Consultation' : 'Deploy This Plan'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
