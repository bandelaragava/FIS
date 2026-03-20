import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';

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

const projects = [
  {
    img: '/portfolio_1.png',
    tags: ['React', 'Tailwind', 'Node.js'],
    title: 'FinTech Smart Dashboard',
    desc: 'An advanced analytical dashboard for managing enterprise finances in real-time with live chart updates.',
  },
  {
    img: '/portfolio_2.png',
    tags: ['Python', 'TensorFlow', 'Next.js'],
    title: 'HealthCare AI Assistant',
    desc: 'Next-generation healthcare monitoring app powered by deep learning algorithms for predictive diagnostics.',
  },
  {
    img: '/hero_illustration.png',
    tags: ['AWS', 'Kubernetes', 'Go'],
    title: 'Cloud Logistics Platform',
    desc: 'Scalable microservices platform handling millions of shipment events per day across 30+ countries.',
  },
  {
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop',
    tags: ['PyTorch', 'FastAPI', 'React'],
    title: 'AI Content Generator',
    desc: 'GPT-powered SaaS platform for automated content creation, SEO optimization, and brand voice management.',
  },
];

export default function Portfolio() {
  useReveal();

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container">
          <span className="sub-heading">Our Work</span>
          <h1>Pioneering <span className="gradient-text">Projects</span></h1>
          <p>A showcase of impactful digital solutions we've built for clients around the globe.</p>
        </div>
      </section>

      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="portfolio-grid">
            {projects.map((p, i) => (
              <div className="project-card glass-card reveal" key={i}>
                <div className="project-img">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="project-info">
                  <div className="tags">
                    {p.tags.map(t => <span key={t}>{t}</span>)}
                  </div>
                  <h3>{p.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', marginTop: '0.8rem' }}>{p.desc}</p>
                  <a href="#" className="details-link" style={{ marginTop: '1.5rem', display: 'inline-flex' }}>
                    View Case Study <ExternalLink size={16}/>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Testimonials</span>
            <h2>Trusted by <span className="gradient-text">Clients Worldwide</span></h2>
          </div>
          <div className="testimonials-grid" style={{ marginTop: '3rem' }}>
            {[
              { quote: '"Future-Invo transformed our legacy system into a high-speed cloud architecture. Their support is unparalleled!"', name: 'John Smith', role: 'CEO, TechStream' },
              { quote: '"Expertise and delivery within timelines. The mobile app they built has seen tremendous user satisfaction."', name: 'Sarah Jenkins', role: 'CTO, Innovate Inc' },
            ].map((t, i) => (
              <div className="testimonial-card glass-card reveal" key={i}>
                <div className="quote-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M11.3 6C9.6 6 8.3 7.3 8.3 9c0 1.7 1.3 3 3 3-0.4 1.3-1.5 2.4-2.8 3l0.9 1.5C12.5 14.8 14.3 12 14.3 9c0-1.7-1.3-3-3-3zm-7 0C2.6 6 1.3 7.3 1.3 9c0 1.7 1.3 3 3 3-0.4 1.3-1.5 2.4-2.8 3l0.9 1.5C5.5 14.8 7.3 12 7.3 9c0-1.7-1.3-3-3-3z"/></svg>
                </div>
                <p>{t.quote}</p>
                <div className="client-info">
                  <div className="client-name">{t.name}</div>
                  <div className="client-role">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding center" style={{ paddingTop: 0 }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>Have a project in mind? Let's bring it to life.</p>
          <Link to="/contact" className="btn btn-primary btn-large">Start a Project</Link>
        </div>
      </section>
    </div>
  );
}
