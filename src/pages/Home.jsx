import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Users, Zap, Lock, Headphones, Maximize } from 'lucide-react';

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

function useCountUp() {
  useEffect(() => {
    const stats = document.querySelectorAll('.stat-number');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const hasPlus = el.textContent.includes('+');
          const target = parseInt(el.textContent);
          let count = 0;
          const speed = target / (2000 / 16);
          const update = () => {
            if (count < target) { count += speed; el.textContent = Math.ceil(count) + (hasPlus ? '+' : ''); requestAnimationFrame(update); }
            else { el.textContent = target + (hasPlus ? '+' : ''); }
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

export default function Home() {
  useReveal();
  useCountUp();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const blobs = document.querySelectorAll('.hero .blob');
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobs.forEach((blob, i) => {
        const speed = (i + 1) * 30;
        blob.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const techItems = ['React', 'Node.js', 'Python', 'AWS', 'Docker', 'MongoDB', 'Go', 'TypeScript', 'Kubernetes', 'Swift', 'Kotlin'];

  return (
    <div className="page-wrapper" style={{ paddingTop: 0 }}>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <h1>Transforming Ideas into <span className="gradient-text">Digital Reality</span></h1>
            <p className="hero-desc">We deliver cutting-edge technology solutions that drive innovation and scale your business for the future.</p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
              <Link to="/about" className="btn btn-secondary">Learn About Us</Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item"><span className="stat-number">10+</span><span className="stat-label">Years Exp</span></div>
              <div className="stat-item"><span className="stat-number">200+</span><span className="stat-label">Projects</span></div>
              <div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">Experts</span></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-overlay glass-card">
              <img src="/hero_illustration.png" alt="Digital Reality Illustration" className="floating main-hero-img" />
              <div className="blob blob-1"></div>
              <div className="blob blob-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="features section-padding">
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Why Choose Us</span>
            <h2>Built for <span className="gradient-text">Excellence</span></h2>
          </div>
          <div className="features-grid" style={{ marginTop: '4rem' }}>
            {[
              { icon: <Users size={40}/>, title: 'Expert Team', desc: 'Highly skilled professionals with years of industry experience.' },
              { icon: <Zap size={40}/>, title: 'Fast Delivery', desc: 'Efficient workflows ensuring timely project completion.' },
              { icon: <Lock size={40}/>, title: 'Secure Systems', desc: 'Robust security protocols to protect your digital assets.' },
              { icon: <Headphones size={40}/>, title: '24/7 Support', desc: 'Dedicated assistance whenever you need it most.' },
              { icon: <Maximize size={40}/>, title: 'Scalable Solutions', desc: 'Architectures that grow seamlessly with your business.' },
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

      {/* Tech Marquee */}
      <section className="tech-stack section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Technology</span>
            <h2>Our <span className="gradient-text">Modern Tech Stack</span></h2>
          </div>
        </div>
        <div className="tech-marquee">
          <div className="marquee-content">
            {[...techItems, ...techItems].map((t, i) => (
              <div className="tech-tag" key={i}>{t}</div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding center">
        <div className="container glass-card cta-banner reveal">
          <div className="cta-content">
            <h2>Ready to Build Your <span className="gradient-text">Future?</span></h2>
            <p>Join hundreds of successful companies who have transformed their digital presence with us.</p>
            <Link to="/contact" className="btn btn-primary btn-large">Start Your Project Today</Link>
          </div>
          <div className="cta-blobs">
            <div className="blob blob-1"></div>
            <div className="blob blob-2"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
