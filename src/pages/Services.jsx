import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Smartphone, Cloud, BrainCircuit, ShieldCheck, Database, ArrowRight } from 'lucide-react';

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
    icon: <Layout size={28}/>, color: 'purple',
    title: 'Web Development',
    desc: 'High-performant, responsive web applications built with the latest technologies like React, Next.js, and Node.js.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
  },
  {
    icon: <Smartphone size={28}/>, color: 'blue',
    title: 'Mobile App Development',
    desc: 'Native mobile solutions for iOS and Android that provide seamless user experiences and robust scalability.',
    tags: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
  },
  {
    icon: <Cloud size={28}/>, color: 'cyan',
    title: 'Cloud Solutions',
    desc: 'Expert cloud migration, architecture, and serverless implementation on AWS, Azure, and Google Cloud.',
    tags: ['AWS', 'Azure', 'GCP', 'Kubernetes'],
  },
  {
    icon: <BrainCircuit size={28}/>, color: 'magenta',
    title: 'AI & ML Solutions',
    desc: 'Custom AI and Machine Learning models to automate complex processes and derive deep insights from your data.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'LLMs'],
  },
  {
    icon: <ShieldCheck size={28}/>, color: 'orange',
    title: 'IT Consulting',
    desc: 'Strategic technology consulting to align your infrastructure with your business goals, reducing cost and risk.',
    tags: ['Strategy', 'DevSecOps', 'Audit', 'Architecture'],
  },
  {
    icon: <Database size={28}/>, color: 'green',
    title: 'Data Engineering',
    desc: 'End-to-end data pipelines, warehousing, and analytics to turn raw data into actionable business intelligence.',
    tags: ['Spark', 'Kafka', 'dbt', 'BigQuery'],
  },
];

export default function Services() {
  useReveal();

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container">
          <span className="sub-heading">Our Expertise</span>
          <h1>Future-Ready <span className="gradient-text">Services</span></h1>
          <p>Comprehensive technology solutions tailored to your unique business challenges and goals.</p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card glass-card reveal" key={i}>
                <div className={`service-icon ${s.color}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: '1rem 0' }}>{s.desc}</p>
                <div className="tags" style={{ marginBottom: 0 }}>
                  {s.tags.map(t => <span key={t}>{t}</span>)}
                </div>
                <Link to="/contact" className="details-link">
                  Get Started <ArrowRight size={16}/>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Pricing</span>
            <h2>Flexible <span className="gradient-text">Plans for Everyone</span></h2>
          </div>
          <div className="pricing-grid" style={{ marginTop: '3rem' }}>
            {[
              { name: 'Basic', price: '$1,999', per: '/project start', features: ['Core Web Development', 'Responsive Design', 'SEO Optimization', '1 Month Support'], featured: false },
              { name: 'Professional', price: '$4,999', per: '/project start', features: ['Web & Mobile Dev', 'Custom AI Integration', 'Cloud Setup & Deploy', '6 Months Support'], featured: true },
              { name: 'Enterprise', price: 'Custom', per: 'Contact us', features: ['Custom Infrastructure', 'Dedicated Microservices', 'DevSecOps Implementation', '24/7 Priority Support'], featured: false },
            ].map((plan, i) => (
              <div className={`plan-card glass-card reveal ${plan.featured ? 'featured' : ''}`} key={i}>
                {plan.featured && <div className="popular-badge">Popular</div>}
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="price">{plan.price}<span>{plan.per}</span></div>
                </div>
                <ul className="plan-features">
                  {plan.features.map(f => (
                    <li key={f}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'}`}>
                  {plan.name === 'Enterprise' ? 'Get Quote' : 'Select Plan'}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
