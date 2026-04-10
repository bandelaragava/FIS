import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Layout, Smartphone, Cloud, BrainCircuit, ShieldCheck, Database, ArrowRight,
  PenTool, Megaphone, Terminal, Lock, LineChart, Cpu, Activity, Zap, Shield, CheckCircle
} from 'lucide-react';

const servicesContent = {
  'it-consulting': {
    title: 'IT Consulting', level: 'L3 STRATEGIC', color: '#ffa500',
    icon: <ShieldCheck size={48} />,
    desc: 'Alignment of technical infrastructure with high-level business objectives to eliminate bottlenecks and optimize throughput.',
    fullText: 'We don\'t just advise; we re-architect. Our IT Consulting practice dives deep into your existing digital nervous system. We map out data flows, system dependencies, and operational friction points to deliver a comprehensive transformation blueprint. From legacy monolith deprecation to cutting-edge microservices adoption, we ensure your tech stack is not just a cost center, but an accelerator for exponential growth.',
    features: ['Comprehensive Ecosystem Audit', 'Strategic Digital Roadmap', 'Enterprise Risk Mitigation', 'Legacy System Modernization'],
    benefits: ['Unlock up to 40% reduction in IT operational costs', 'Achieve 99.99% system reliability', 'Align engineering output with board-level KPIs']
  },
  'web-engineering': {
    title: 'Web Engineering', level: 'HIGH PERFORMANCE', color: '#7000ff',
    icon: <Layout size={48} />,
    desc: 'Engineering web platforms that define modern interactions, focusing on millisecond-level responsiveness and massive scale.',
    fullText: 'Our Web Engineering squad builds the backbone of the modern internet. Utilizing React, Next.js, and edge computing paradigms, we construct web applications that feel instantaneous. We obsess over cumulative layout shift, time-to-first-byte, and render blocking to deliver fluid, app-like experiences directly in the browser, capable of handling millions of concurrent connections without breaking a sweat.',
    features: ['React Architecture', 'Next.js 14 SSR/SSG', 'Edge Computing Integration', 'Micro-frontends Ecosystem'],
    benefits: ['Sub-second page loads globally', 'Infinite horizontal scalability', 'Flawless multi-device synchronization']
  },
  'ux-ui-architecture': {
    title: 'UX/UI Architecture', level: 'PRECISION DESIGN', color: '#ff00ff',
    icon: <PenTool size={48} />,
    desc: 'Crafting digital experiences that bridge the gap between human intuition and technical logic.',
    fullText: 'Design is not just what it looks like; it\'s how it works. Our UX/UI Architecture team blends behavioral psychology, spatial mapping, and fluid motion design to create interfaces that feel alive. We build robust, token-driven design systems that ensure consistency across complex enterprise portals, consumer applications, and holographic data visualizations, creating an undeniable aura of premium quality.',
    features: ['Aesthetic Brilliance', 'Behavioral UX Mapping', 'Scalable Design Systems', '60fps Motion Logic'],
    benefits: ['Dramatically increased user retention', 'Minimized friction in critical funnels', 'A brand presence that commands authority']
  },
  'mobile-ecosystems': {
    title: 'Mobile Ecosystems', level: 'CROSS PLATFORM', color: '#0070ff',
    icon: <Smartphone size={48} />,
    desc: 'Developing high-fidelity iOS and Android solutions that offer native performance with unified codebases.',
    fullText: 'The mobile device is the primary interface for human-digital interaction. We engineer native iOS and Android experiences using cutting-edge cross-platform logic like React Native and Flutter, or pure native Swift/Kotlin when maximum hardware access is required. Our architectures guarantee offline synchronization, minimal battery drain, and tactile feedback that feels deeply integrated with the OS.',
    features: ['SwiftUI & Kotlin DSL', 'React Native Frameworks', 'Flutter Logic Generation', 'Complex Offline Synchronization'],
    benefits: ['Deploy to both stores with unified logic', 'Native-level 120hz scroll performance', 'Deep OS and hardware integration']
  },
  'performance-marketing': {
    title: 'Performance Marketing', level: 'DATA DRIVEN', color: '#00f2ff',
    icon: <Megaphone size={48} />,
    desc: 'Algorithm-optimized campaigns designed to maximize ROI through deep technical SEO and behavioral analytics.',
    fullText: 'We approach marketing as a data science discipline. By leveraging algorithmic bidding, multidimensional cohort analysis, and highly engineered funnel structures, our performance marketing ensures optimal capital allocation. We don\'t guess; we run split-tests at huge scale to discover the exact combination of copy, creative, and targeting that maximizes Lifetime Value.',
    features: ['Search Engine Sync', 'Social Engineering Paths', 'LTV & CAC Analysis', 'Conversion Logic Testing'],
    benefits: ['Mathematically verifiable ROI', 'Hyper-targeted audience acquisition', 'Automated campaign scaling']
  },
  'synthetic-intelligence': {
    title: 'Synthetic Intelligence', level: 'NEURAL LOGIC', color: '#ff00ff',
    icon: <BrainCircuit size={48} />,
    desc: 'Integrating advanced LLMs and predictive neural networks into existing workflows to automate complex decision-making.',
    fullText: 'Artificial Intelligence isn\'t the future; it\'s the baseline. Our Synthetic Intelligence team fine-tunes specialized Large Language Models and deploys machine vision systems custom-trained on your proprietary data. We integrate these neural nodes into your existing software infrastructure, enabling your organization to automate intricate, cognitive-heavy processes previously requiring immense human capital.',
    features: ['Custom LLM Fine-Tuning', 'NLU/NLP Systems Workflow', 'Predictive Modeling', 'Vision Logic Processing'],
    benefits: ['100x speedup on data processing', 'Autonomous operations management', 'New AI-driven revenue streams']
  },
  'enterprise-software': {
    title: 'Enterprise Software', level: 'L5 OPERATIONS', color: '#7000ff',
    icon: <Terminal size={48} />,
    desc: 'Bespoke internal tools and automated ecosystems designed to solve specific, high-scale operational challenges.',
    fullText: 'Off-the-shelf software compromises at scale. We architect tailored enterprise resource planning systems, custom CRMs, and deeply integrated operational dashboards. Built for massive transactional throughput and stringent access controls, our enterprise software eliminates internal fragmentation, creating a single source of truth for global operations.',
    features: ['Custom ERP/CRM Architecture', 'Workflow Automation Engines', 'SaaS Licensing Mechanics', 'Infrastructure Synchronization'],
    benefits: ['Complete operational visibility', 'Elimination of platform vendor lock-in', 'Custom logic exactly matching business logic']
  },
  'cloud-orchestration': {
    title: 'Cloud Orchestration', level: 'CLOUD NATIVE', color: '#00f2ff',
    icon: <Cloud size={48} />,
    desc: 'Design and deployment of self-healing, auto-scaling cloud infrastructures on AWS, Azure, and Google Cloud.',
    fullText: 'Modern solutions demand resilient foundations. We transition organizations from rigid servers to fluid, cloud-native architectures. Using Kubernetes, Terraform, and advanced CI/CD pipelines, we orchestrate infrastructure-as-code environments that scale seamlessly during traffic spikes and self-heal during critical instance failures, providing unparalleled uptime and latency advantages.',
    features: ['Serverless Synchronization', 'K8s Cluster Orchestration', 'DevOps Pipeline Automation', 'Site Reliability Engineering (SRE)'],
    benefits: ['Zero-downtime architecture', 'Pay-for-what-you-use efficiency', 'Geographically distributed endpoints']
  },
  'cybersecurity-guard': {
    title: 'Cybersecurity Guard', level: 'ZERO TRUST', color: '#ffa500',
    icon: <Lock size={48} />,
    desc: 'Deploying advanced defensive perimeters and zero-trust identity management to safeguard digital assets.',
    fullText: 'In a hostile digital landscape, security cannot be an afterthought. We implement multi-layered, Zero Trust defense systems that assume breach by default. From intelligent endpoint detection to comprehensive smart-contract audits and quantum-resistant encryption protocols, our cybersecurity division hardens your ecosystem against both known vectors and zero-day anomalies.',
    features: ['Intensive Pen-Testing', 'Dynamic Threat Modeling', 'IAM Engineering', 'Military-Grade Data Encryption'],
    benefits: ['Immunization against modern ransomware', 'Regulatory data compliance guarantee', 'Protection of intellectual property']
  },
  'data-intelligence': {
    title: 'Data Intelligence', level: 'BIG DATA L3', color: '#00ff88',
    icon: <LineChart size={48} />,
    desc: 'Processing massive datasets through high-speed pipelines to uncover actionable business intelligence.',
    fullText: 'Data without analysis is simply storage overhead. We design high-throughput data lakes and warehouses using Snowflake, Databricks, and Kafka streams. By unifying disparate enterprise data, transforming it in real-time, and presenting it through highly interactive geospatial and predictive dashboards, we give executive stakeholders terminal velocity in decision-making.',
    features: ['Real-time Pipeline Design', 'Spark & Databricks Architecture', 'Predictive Business Intelligence', 'Stream Processing Systems'],
    benefits: ['Real-time operational awareness', 'Discovery of hidden profit centers', 'Democratization of data access']
  },
  'emerging-frontiers': {
    title: 'Emerging Frontiers', level: 'R&D LABS', color: '#0070ff',
    icon: <Cpu size={48} />,
    desc: 'Investigating the intersection of Blockchain, IoT, and high-performance computing to future-proof operations.',
    fullText: 'Staying ahead requires venturing into the unknown. Our R&D division explores Web3 protocols, decentralized infrastructures, hardware-accelerated edge intelligence, and post-quantum cryptography. We take the most promising experimental technologies out of the lab and forge them into practical, enterprise-ready solutions that disrupt traditional moats.',
    features: ['Web3 Protocol Engineering', 'IoT Sensor Ecosystems', 'Edge Intelligence Deployment', 'Post-Quantum Strategy'],
    benefits: ['First-mover advantage in new tech domains', 'Disruptive intellectual property generation', 'Extreme resilience to paradigm shifts']
  },
  'full-stack-web-saas-development': {
    title: 'Full Stack Web & SaaS', level: 'L5 ARCHITECTURE', color: '#00ff88',
    icon: <Database size={48} />,
    desc: 'Building scalable, multi-tenant SaaS platforms with complex backend logic and seamless frontend interactions.',
    fullText: 'We engineer end-to-end SaaS platforms from initial schema design to global CDN deployment. Utilizing a robust microservices architecture, sophisticated multi-tenant caching mechanics, and GraphQL/REST APIs, we deliver robust software-as-a-service applications that provide fluid UX, secure data segregation, and rapid feature iteration.',
    features: ['Multi-tenant Data Hubs', 'Complex SaaS Licensing', 'Microservices Federation', 'Real-time Stateful Sync'],
    benefits: ['Accelerated time-to-market for SaaS products', 'Bank-grade multi-tenancy isolation', 'Infinitely API-extensible core']
  },
  'machine-learning-deep-learning': {
    title: 'Machine Learning & Deep Learning', level: 'NEURAL FORGE', color: '#7000ff',
    icon: <Activity size={48} />,
    desc: 'Developing sophisticated computer vision and NLP models that transform raw data into predictive intelligence.',
    fullText: 'Beyond basic regressions, we create multi-modal neural architectures capable of complex pattern recognition. Whether its real-time anomaly detection in manufacturing, deep natural language understanding for customer triage, or generative agent systems, our models convert overwhelming chaos into structured, actionable, and hyper-accurate intelligence.',
    features: ['Custom Neural Training', 'Computer Vision Matrices', 'Complex NLP Pipelines', 'Predictive Analytics Labs'],
    benefits: ['Process automation previously deemed impossible', 'Hyper-personalized customer experiences', 'Continuous model self-improvement']
  }
};

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

export default function ServiceDetail() {
  useReveal();
  const { id } = useParams();
  
  // Find the exact key handling possible url encoding/slashes, etc
  const serviceKey = Object.keys(servicesContent).find(key => key === id);
  const data = servicesContent[serviceKey];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="page-wrapper service-detail-page">
      {/* Hero Section */}
      <section className="page-hero" style={{ '--hero-color': data.color }}>
        <div className="hero-grid-bg" />
        <div className="hero-glow-orb" style={{ background: data.color }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div className="portal-icon-wrap reveal" style={{ 
            width: '100px', height: '100px', 
            background: `rgba(255,255,255,0.03)`,
            border: `1px solid ${data.color}40`,
            boxShadow: `0 0 30px ${data.color}30`,
            marginBottom: '2rem' 
          }}>
            <div className="portal-icon-main" style={{ color: data.color, transform: 'scale(1.2)' }}>
              {data.icon}
            </div>
          </div>
          
          <div className="portal-level-badge reveal" style={{ marginBottom: '1.5rem', borderColor: `${data.color}60`, color: '#fff' }}>
            {data.level} STATUS
          </div>
          
          <h1 className="reveal font-giant" style={{ marginBottom: '1.5rem', textTransform: 'uppercase' }}>
            <span style={{ color: data.color }}>{data.title.split(' ')[0]}</span>{' '}
            {data.title.split(' ').slice(1).join(' ')}
          </h1>
          
          <p className="reveal text-secondary" style={{ maxWidth: '800px', fontSize: '1.2rem', lineHeight: '1.6' }}>
            {data.desc}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container">
          <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            
            {/* Overview Card */}
            <div className="bento-card reveal" style={{ gridColumn: '1 / -1' }}>
              <div className="card-glare" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Activity color={data.color} />
                <h3 className="bento-title">Executive Summary</h3>
              </div>
              <p style={{ color: '#aaa', lineHeight: '1.8', fontSize: '1.1rem' }}>
                {data.fullText}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="bento-card reveal">
              <div className="card-glare" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Zap color={data.color} />
                <h3 className="bento-title">Core Architecture</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {data.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', color: '#e2e8f0' }}>
                    <CheckCircle color={data.color} size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '1.05rem' }}>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Enterprise Benefits */}
            <div className="bento-card reveal">
              <div className="card-glare" />
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <Shield color={data.color} />
                <h3 className="bento-title">Enterprise Edge</h3>
              </div>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {data.benefits.map((benefit, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1rem', color: '#e2e8f0' }}>
                    <ShieldCheck color={data.color} size={20} style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                    <span style={{ fontSize: '1.05rem' }}>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding reveal">
         <div className="container">
           <div className="bento-card" style={{ 
             textAlign: 'center', 
             background: `linear-gradient(135deg, rgba(255,255,255,0.03) 0%, ${data.color}15 100%)`,
             borderColor: `${data.color}40`,
             padding: '4rem 2rem'
           }}>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Initialize <span style={{ color: data.color }}>Deployment</span></h2>
             <p style={{ color: '#aaa', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem' }}>
               Partner with our elite squads to integrate <strong>{data.title}</strong> directly into your operational stack. Begin the technical discovery phase today.
             </p>
             <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2.5rem', fontSize: '1.1rem', background: data.color, borderColor: data.color }}>
               <span>Request Architectural Review</span>
               <ArrowRight size={20} />
             </Link>
           </div>
         </div>
      </section>

    </div>
  );
}
