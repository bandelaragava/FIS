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
      {/* Page Hero */}
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container">
          <span className="sub-heading">About Us</span>
          <h1>Empowering Innovation <br/>Through <span className="gradient-text">Human Expertise</span></h1>
          <p>We are a syndicate of designers, engineers, and strategists dedicated to co-creating the digital future with precision and passion.</p>
        </div>
      </section>

      {/* Narrative Bento */}
      <section className="section-padding">
        <div className="container">
          <div className="about-bento-grid">
            <div className="about-bento-card reveal">
              <div className="about-icon-wrapper"><Rocket size={32}/></div>
              <h3>Our Mission</h3>
              <p>To redefine the global digital architecture by delivering high-concurrency, scalable solutions that solve complex enterprise challenges.</p>
            </div>
            <div className="about-bento-card reveal">
              <div className="about-icon-wrapper" style={{background: 'rgba(var(--accent-purple-rgb), 0.1)', color: 'var(--accent-purple)'}}><Award size={32}/></div>
              <h3>Why Us</h3>
              <p>Relentless focus on performance, 99.9% project success rate, and a 24/7 world-class support ecosystem.</p>
            </div>
            <div className="about-bento-card wide reveal">
              <div className="about-icon-wrapper" style={{background: 'rgba(var(--accent-cyan-rgb), 0.15)'}}><Eye size={32}/></div>
              <h3>Our Vision</h3>
              <p>To become the leading catalyst for global digital transformation, setting new standards for technical excellence and human-centric design by 2030. We envision a world where technology seamlessly empowers every human endeavor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Journey - Vertical Timeline */}
      <section className="section-padding services-section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Our Evolution</span>
            <h2>The Future-Invo <span className="gradient-text">Journey</span></h2>
          </div>
          <div className="journey-timeline reveal">
            <div className="milestone-item">
              <span className="milestone-year">2026</span>
              <h3>Global Expansion</h3>
              <p className="text-secondary" style={{maxWidth: '500px'}}>Established strategic hubs in Silicon Valley and London to serve international enterprise partners.</p>
            </div>
            <div className="milestone-item">
              <span className="milestone-year">2024</span>
              <h3>AI Center of Excellence</h3>
              <p className="text-secondary" style={{maxWidth: '500px'}}>Launched our specialized AI & Machine Learning wing, delivering custom LLM solutions for Fintech.</p>
            </div>
            <div className="milestone-item">
              <span className="milestone-year">2022</span>
              <h3>Origins</h3>
              <p className="text-secondary" style={{maxWidth: '500px'}}>Founded with a core team of senior engineers focused on cloud-native application modernization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Updated Stats Banner */}
      <section className="section-padding stats-section">
        <div className="container">
          <div className="glass-card center reveal stats-banner-card">
            <div className="stats-banner-grid">
              <div>
                <span className="stat-number-giant">200+</span>
                <span className="stat-label-large">Projects Delivered</span>
              </div>
              <div>
                <span className="stat-number-giant">50+</span>
                <span className="stat-label-large">Expert Engineers</span>
              </div>
              <div>
                <span className="stat-number-giant">30+</span>
                <span className="stat-label-large">Global Hubs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team - Portal Layout */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Elite Talent</span>
            <h2>Leadership & <span className="gradient-text">Experts</span></h2>
          </div>
          <div className="team-grid mt-4">
            {[
              { name: 'Alice Wong', role: 'Senior Tech Architect', img: 'https://i.pravatar.cc/300?u=12' },
              { name: 'David Miller', role: 'Lead AI Developer', img: 'https://i.pravatar.cc/300?u=24' },
              { name: 'Elena Petrova', role: 'Design Principal', img: 'https://i.pravatar.cc/300?u=36' },
            ].map((m, i) => (
              <div className="glass-card team-card reveal" key={i}>
                <div className="member-img-frame">
                  <img src={m.img} alt={m.name} />
                </div>
                <h3>{m.name}</h3>
                <p className="text-secondary mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding center">
        <div className="container glass-card cta-banner-card reveal">
          <div className="cta-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
          <div className="cta-content-wrap">
            <h2>Let's build the <span className="gradient-text">Future</span> together</h2>
            <p className="mb-4 font-normal text-secondary" style={{ maxWidth: '600px', margin: '0 auto' }}>Collaborate with our elite engineering team to transform your visionary ideas into scalable reality.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Initiate Partnership &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
