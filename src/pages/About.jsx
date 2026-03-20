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
          <h1>Empowering Innovation Through <span className="gradient-text">Expertise</span></h1>
          <p>We are a team of passionate technologists dedicated to building the digital future — one project at a time.</p>
        </div>
      </section>

      {/* Mission / Vision / Why Us */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="about-grid">
            {[
              { icon: <Rocket size={40}/>, title: 'Our Mission', desc: 'To redefine the digital landscape by delivering scalable and impactful IT solutions that exceed client expectations.' },
              { icon: <Eye size={40}/>, title: 'Our Vision', desc: 'To be the leading architect of digital transformation across the global tech ecosystem by 2030.' },
              { icon: <Award size={40}/>, title: 'Why Choose Us', desc: 'Relentless focus on client success, cutting-edge technology, and unparalleled 24/7 support.' },
            ].map((c, i) => (
              <div className="about-card glass-card reveal" key={i}>
                <div style={{ color: 'var(--accent-cyan)', display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>{c.icon}</div>
                <h3>{c.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Our Impact</span>
            <h2>Numbers That <span className="gradient-text">Speak</span></h2>
          </div>
          <div className="about-grid" style={{ marginTop: '3rem' }}>
            {[
              { icon: <Trophy size={40}/>, stat: '200+', label: 'Projects Delivered' },
              { icon: <Users size={40}/>, stat: '50+', label: 'Expert Engineers' },
              { icon: <Globe size={40}/>, stat: '30+', label: 'Countries Served' },
            ].map((s, i) => (
              <div className="about-card glass-card reveal" key={i}>
                <div style={{ color: 'var(--accent-purple)', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>{s.icon}</div>
                <div style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--accent-cyan)', fontFamily: 'Outfit' }}>{s.stat}</div>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Our Team</span>
            <h2>Meet the <span className="gradient-text">Experts</span></h2>
          </div>
          <div className="team-grid" style={{ marginTop: '3rem', maxWidth: '700px', margin: '3rem auto 0' }}>
            {[
              { name: 'Alice Wong', role: 'Senior Tech Architect', img: '/team_1.png' },
              { name: 'David Miller', role: 'Lead AI Developer', img: 'https://i.pravatar.cc/300?u=2' },
            ].map((m, i) => (
              <div className="glass-card team-card reveal" key={i} style={{ textAlign: 'center' }}>
                <div className="member-img" style={{ margin: '0 auto 1.5rem' }}>
                  <img src={m.img} alt={m.name} />
                </div>
                <h3>{m.name}</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding center" style={{ paddingTop: 0 }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>Ready to work with our world-class team?</p>
          <Link to="/contact" className="btn btn-primary btn-large">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
}
