import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Activity, Globe, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo-new.png';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="container footer-portal-grid">
        <div className="footer-v-section brand-hub">
          <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '-30px' }}>
            <img src={logoImg} alt="Future Invo Solutions Logo" style={{ height: '80px', objectFit: 'contain' }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="logo-pulse" />
              <span className="logo-txt" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '4px', lineHeight: '1' }}>
                <span style={{ fontSize: '0.9em', fontWeight: '900' }}>Future Invo</span>
                <span className="gradient-text" style={{ fontSize: '0.45em', letterSpacing: '6px', textTransform: 'uppercase', paddingLeft: '3px', fontWeight: '800' }}>Solutions</span>
              </span>
            </span>
          </Link>
          <p className="brand-mission">
            Architecting the digital frontier through high-bandwidth engineering
            and precision design.
          </p>

        </div>

        <div className="footer-v-section">
          <h4 className="v-label">Quick Links</h4>
          <ul className="v-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-v-section">
          <h4 className="v-label">Top Services</h4>
          <ul className="v-links">
            <li><Link to="/services/it-consulting">IT Consulting</Link></li>
            <li><Link to="/services/web-engineering">Web Engineering</Link></li>
            <li><Link to="/services/mobile-ecosystems">Mobile Ecosystems</Link></li>
            <li><Link to="/services/cybersecurity-guard">Cybersecurity Guard</Link></li>
          </ul>
        </div>

        <div className="footer-v-section social-matrix">
          <h4 className="v-label">Global Nodes</h4>
          <div className="social-node-list">
            <a href="#" className="social-node-item" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-node-item" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="#" className="social-node-item" aria-label="GitHub">
              <Github size={20} />
            </a>
          </div>
          <div className="region-badge">
            <Globe size={14} />
            <span>GLOBAL PRESENCE</span>
          </div>
        </div>
      </div>

      <div className="footer-terminal-bottom">
        <div className="container flex-between">
          <p className="copyright-txt">&copy; 2026 Future Invo Solutions. Secured by <span className="shield-txt"><ShieldCheck size={12} /> Quantum Guard</span></p>
          <div className="terminal-meta">
            <span>LOCAL: 127.0.0.1</span>
            <span>BUILD: v4.2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
