import React, { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  ChevronDown, CheckCircle, ArrowRight,
  Star, Zap, Users, Clock, Globe, Shield
} from 'lucide-react';
import servicesData from '../data/servicesData';

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

const whyChooseUs = [
  {
    icon: <Star size={28} />,
    title: 'Extensive IT Expertise',
    desc: 'Access to a team of skilled and certified professionals across technologies like Node.js, React.js, AWS, Azure, and more.'
  },
  {
    icon: <Zap size={28} />,
    title: 'Flexible Engagement Models',
    desc: 'Contract, hire on contract, contract-to-hire, full-time, or offshore/on-site as per your project needs.'
  },
  {
    icon: <Clock size={28} />,
    title: 'Quick Turnaround',
    desc: 'Fast onboarding and rapid project delivery to keep your business ahead of the competition.'
  },
  {
    icon: <Globe size={28} />,
    title: 'Cross-Industry Experience',
    desc: 'Proven success across IT consulting, cloud services, digital marketing, and enterprise solutions.'
  },
  {
    icon: <Shield size={28} />,
    title: 'SLA-Driven Delivery',
    desc: 'Dedicated account management, transparent processes, and efficient digital solutions guaranteed by SLA.'
  },
];

export default function ServiceDetail() {
  useReveal();
  const { id } = useParams();
  const [openFaq, setOpenFaq] = useState(null);

  const serviceKey = Object.keys(servicesData).find(key => key === id);
  const data = servicesData[serviceKey];

  if (!data) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="page-wrapper service-detail-page">

      {/* ── HERO ── */}
      <section className="sd-hero" style={{ '--sd-color': data.color }}>
        <div className="sd-hero-glow" />
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <p className="sd-breadcrumb reveal">
            <Link to="/services" style={{ color: data.color }}>Services</Link>
            <span style={{ color: 'rgba(255,255,255,0.4)', margin: '0 0.5rem' }}>›</span>
            <span style={{ color: '#fff' }}>{data.subtitle}</span>
          </p>
          <h1 className="sd-hero-title reveal">
            <span style={{ color: data.color }}>{data.subtitle.split(' ')[0]}</span>{' '}
            {data.subtitle.split(' ').slice(1).join(' ')}
          </h1>
          <p className="sd-hero-desc reveal">{data.desc}</p>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-padding">
        <div className="container sd-intro-grid">
          <div className="sd-intro-text reveal">
            <span className="sub-heading">{data.subtitle}</span>
            <h2 style={{ marginBottom: '2rem' }}>
              At <span style={{ color: data.color }}>Future Invo</span> Solutions
            </h2>
            {data.introParagraphs.map((para, i) => (
              <p key={i} style={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '1rem' }}>
                {para}
              </p>
            ))}
          </div>
          <div className="sd-intro-image reveal">
            <div className="sd-image-frame" style={{ borderColor: `${data.color}40` }}>
              <img src={data.image} alt={`${data.subtitle} illustration`} />
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Benefits With Our {data.subtitle}</span>
            <h2>Why Our <span className="gradient-text">{data.subtitle.split(' ')[0]}</span> Drives Results</h2>
          </div>
          <div className="sd-benefits-grid">
            {data.benefits.map((benefit, i) => (
              <div className="sd-benefit-card reveal" key={i} style={{ '--b-color': data.color, '--b-delay': `${i * 0.08}s` }}>
                <div className="sd-benefit-icon" style={{ background: `${data.color}20`, color: data.color }}>
                  <CheckCircle size={22} />
                </div>
                <div>
                  <h4 className="sd-benefit-title">{benefit.title}</h4>
                  <p className="sd-benefit-desc">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ── */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container sd-expertise-wrapper reveal">
          <div className="sd-expertise-header" style={{ borderLeftColor: data.color }}>
            <span className="sub-heading">Our Expertise in {data.subtitle}</span>
            <h2>Deep <span className="gradient-text">Technical</span> Domains</h2>
          </div>
          <div className="sd-expertise-list">
            {data.expertiseList.map((item, i) => (
              <div className="sd-expertise-item" key={i} style={{ '--e-color': data.color }}>
                <ArrowRight size={16} style={{ color: data.color, flexShrink: 0 }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Why Choose Us?</span>
            <h2>Your trusted partner for <span className="gradient-text">cutting-edge {data.subtitle}</span></h2>
          </div>
          <div className="sd-why-grid">
            {whyChooseUs.map((item, i) => (
              <div className="sd-why-card reveal" key={i} style={{ '--w-delay': `${i * 0.1}s` }}>
                <div className="sd-why-icon" style={{ color: data.color, background: `${data.color}18` }}>
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">Frequently Asked Questions</span>
            <h2><span className="gradient-text">Common</span> Questions</h2>
          </div>
          <div className="sd-faq-list">
            {data.faqs.map((faq, i) => (
              <div
                key={i}
                className={`sd-faq-item reveal ${openFaq === i ? 'open' : ''}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{ '--faq-color': data.color }}
              >
                <div className="sd-faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className="sd-faq-chevron" />
                </div>
                <div className="sd-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section-padding reveal" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sd-cta-card" style={{ '--cta-color': data.color, background: `linear-gradient(135deg, rgba(255,255,255,0.02) 0%, ${data.color}18 100%)`, borderColor: `${data.color}40` }}>
            <h2>Ready to Get <span style={{ color: data.color }}>Started?</span></h2>
            <p>Partner with Future Invo Solutions to transform your business with <strong>{data.subtitle}</strong>. Begin your discovery call today.</p>
            <Link to="/contact" className="btn btn-primary" style={{ background: data.color, display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem' }}>
              Request a Free Consultation <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
