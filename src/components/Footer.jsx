import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo">
            <span className="logo-accent">Future</span>-Invo
          </Link>
          <p>Transforming complex ideas into digital realities with cutting-edge IT solutions.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Web Dev</Link></li>
            <li><Link to="/services">Mobile Apps</Link></li>
            <li><Link to="/services">Cloud</Link></li>
            <li><Link to="/services">AI Solutions</Link></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="Twitter"><Twitter /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin /></a>
            <a href="#" aria-label="GitHub"><Github /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; 2026 Future-Invo IT Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
