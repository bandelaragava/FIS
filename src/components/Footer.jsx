import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Activity, Globe, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer-premium">
      <div className="container footer-portal-grid">
        <div className="footer-v-section brand-hub">
          <Link to="/" className="footer-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '-30px' }}>
            <img src={logoImg} alt="Future-Invo Logo" style={{ height: '50px', objectFit: 'contain' }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="logo-pulse" />
              <span className="logo-txt">Future-Invo <span className="gradient-text">IT</span></span>
            </span>
          </Link>
          <p className="brand-mission">
            Architecting the digital frontier through high-bandwidth engineering
            and precision design.
          </p>
          <div className="system-vital">
            <Activity size={14} className="vital-pulse" />
            <span>SYSTEM STATUS: OPERATIONAL</span>
          </div>
        </div>

        <div className="footer-v-section">
          <h4 className="v-label">Navigation</h4>
          <ul className="v-links">
            <li><Link to="/about">Organization</Link></li>
            <li><Link to="/services">Ecosystem</Link></li>
            <li><Link to="/portfolio">Benchmarks</Link></li>
            <li><Link to="/contact">Protocol</Link></li>
          </ul>
        </div>

        <div className="footer-v-section">
          <h4 className="v-label">Solutions</h4>
          <ul className="v-links">
            <li><Link to="/services">Web Engineering</Link></li>
            <li><Link to="/services">Neural Logic</Link></li>
            <li><Link to="/services">Cloud Native</Link></li>
            <li><Link to="/services">Cyber Defense</Link></li>
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
          <p className="copyright-txt">&copy; 2026 Future-Invo. Secured by <span className="shield-txt"><ShieldCheck size={12} /> Quantum Guard</span></p>
          <div className="terminal-meta">
            <span>LOCAL: 127.0.0.1</span>
            <span>BUILD: v4.2.0-STABLE</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
