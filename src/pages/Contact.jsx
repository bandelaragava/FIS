import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, ChevronDown } from 'lucide-react';

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

const faqs = [
  { q: 'How long does development take?', a: 'Project duration varies based on complexity. A standard web project typically takes 4–8 weeks, while complex enterprise solutions can vary from 3 to 6 months.' },
  { q: 'What technologies do you use?', a: 'We specialize in MERN stack, Python/Django, Next.js, and cloud platforms like AWS and Azure. We always choose the best tool for your specific use case.' },
  { q: 'Do you provide post-launch support?', a: 'Yes, we offer various support plans ranging from basic maintenance to 24/7 priority enterprise support tailored to your needs.' },
  { q: 'Can you work with our existing codebase?', a: 'Absolutely. We have extensive experience in codebase audits, refactoring, and extending existing systems without disrupting your current operations.' },
];

export default function Contact() {
  useReveal();
  const [openFaq, setOpenFaq] = useState(0);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [btnText, setBtnText] = useState('Start Your Project');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText('Sending...');
    setBtnDisabled(true);
    setTimeout(() => {
      setBtnText('Successfully Sent! ✓');
      setTimeout(() => {
        setBtnText('Start Your Project');
        setBtnDisabled(false);
        setFormState({ name: '', email: '', message: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <div className="page-wrapper">
      <section className="page-hero">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="container">
          <span className="sub-heading">Contact Us</span>
          <h1>Ready to Build Your <span className="gradient-text">Project?</span></h1>
          <p>Tell us about your idea and let's make it a digital reality together.</p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-padding" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="contact-grid glass-card">
            <div className="contact-form-area">
              <h2 style={{ marginBottom: '0.5rem' }}>Send Us a <span className="gradient-text">Message</span></h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Fill in the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text" placeholder="Full Name" required
                    value={formState.name}
                    onChange={e => setFormState({...formState, name: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email" placeholder="Email Address" required
                    value={formState.email}
                    onChange={e => setFormState({...formState, email: e.target.value})}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    placeholder="Describe your project..." rows="5" required
                    value={formState.message}
                    onChange={e => setFormState({...formState, message: e.target.value})}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={btnDisabled}
                  style={{ width: '100%', background: btnText.includes('✓') ? 'linear-gradient(135deg,#00c864,#00f2a0)' : undefined }}
                >
                  {btnText}
                </button>
              </form>
            </div>

            <div className="contact-info-area">
              {[
                { icon: <Mail size={24}/>, title: 'Email Us', value: 'info@futureinvo.com' },
                { icon: <Phone size={24}/>, title: 'Call Us', value: '+91 73868 79818' },
                { icon: <MapPin size={24}/>, title: 'Visit Us', value: 'Pathrika Nagar, Street No:1, HITEC City, Hyderabad – 500081' },
              ].map((item, i) => (
                <div className="info-item" key={i}>
                  {item.icon}
                  <div>
                    <h4>{item.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.3rem' }}>{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="map-placeholder glass-card" style={{ padding: 0, overflow: 'hidden' }}>
                <iframe 
                  src="https://maps.google.com/maps?q=17.458629,78.374968&t=m&z=15&output=embed&iwloc=near"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: '100%' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Future Invo Solutions Headquarters"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header center reveal">
            <span className="sub-heading">FAQ</span>
            <h2>Common <span className="gradient-text">Questions</span></h2>
          </div>
          <div className="faq-accordion" style={{ marginTop: '3rem' }}>
            {faqs.map((faq, i) => (
              <div
                className={`faq-item glass-card ${openFaq === i ? 'open' : ''}`}
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <ChevronDown size={20} />
                </div>
                <div className="faq-answer">
                  <p style={{ color: 'var(--text-secondary)' }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
