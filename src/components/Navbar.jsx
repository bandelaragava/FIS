import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Facebook, Linkedin, Instagram, Twitter, Youtube, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo-new.png';

const serviceList = [
  'IT Consulting', 'Web Engineering', 'UX/UI Architecture', 'Mobile Ecosystems',
  'Performance Marketing', 'Synthetic Intelligence', 'Enterprise Software',
  'Cloud Orchestration', 'Cybersecurity Guard', 'Data Intelligence', 'Emerging Frontiers',
  'Full stack web & saas development', 'Machine learning & deep learning'
];

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services', hasDropdown: true },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="glass-header">
        <div className="container container-nav">
          <Link to="/" className="logo" onClick={closeMobile} style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingLeft: '5px' }}>
            <img src={logoImg} alt="Future Invo Solutions Logo" style={{ height: '45px', objectFit: 'contain' }} />
            <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2px', lineHeight: '1', marginTop: '4px' }}>
              <span className="logo-accent" style={{ fontSize: '0.9em', fontWeight: '800' }}>Future Invo</span>
              <span style={{ fontSize: '0.45em', letterSpacing: '3px', opacity: 0.7, fontWeight: '600', paddingLeft: '2px' }}>SOLUTIONS</span>
            </span>
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li
                key={item.path}
                className={item.hasDropdown ? 'nav-item-dropdown' : ''}
                onMouseEnter={() => item.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setDropdownOpen(false)}
              >
                <div className="nav-link-wrapper">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={closeMobile}
                  >
                    {item.label}
                  </NavLink>
                  {item.hasDropdown && <ChevronDown size={14} className={`dropdown-icon ${dropdownOpen ? 'open' : ''}`} />}
                </div>

                {item.hasDropdown && (
                  <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                    {serviceList.map((service) => (
                      <li key={service}>
                        <Link
                          to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                          onClick={closeMobile}
                        >
                          {service}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary btn-nav" style={{ display: mobileOpen ? 'none' : 'inline-block' }}>
            Get Started
          </button>

          <button
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <React.Fragment key={item.path}>
            <div className="mobile-nav-item">
              <NavLink
                to={item.path}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMobile}
              >
                {item.label}
              </NavLink>
              {item.hasDropdown && (
                <button
                  className="mobile-dropdown-toggle"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <ChevronDown size={20} className={dropdownOpen ? 'open' : ''} />
                </button>
              )}
            </div>
            {item.hasDropdown && dropdownOpen && (
              <div className="mobile-dropdown-list">
                {serviceList.map((service) => (
                  <Link
                    key={service}
                    to={`/services/${service.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`}
                    onClick={closeMobile}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
        <button onClick={() => { closeMobile(); setIsModalOpen(true); }} className="btn btn-primary" style={{ marginTop: '1rem' }}>
          Get Started
        </button>
      </div>

      {/* Get Started Modal */}
      <div className={`get-started-modal-overlay ${isModalOpen ? 'open' : ''}`}>
        <div className="get-started-modal">
          <div className="modal-header">
            <img src={logoImg} alt="Future Invo Solutions Logo" />
            <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
              <X size={28} />
            </button>
          </div>
          <div className="modal-body">
            <p className="modal-desc">
              For inquiries and assistance, please fill out the contact form below. Our team is here to help and we look forward to hearing from you
            </p>
            <form onSubmit={(e) => { e.preventDefault(); alert("Form submitted successfully!"); setIsModalOpen(false); }}>
              <div className="modal-form-grid">
                <div className="modal-form-group">
                  <label>Name<span>*</span>:</label>
                  <input type="text" required />
                </div>
                <div className="modal-form-group">
                  <label>Mobile No<span>*</span>:</label>
                  <input type="tel" required />
                </div>
                <div className="modal-form-group">
                  <label>E-Mail<span>*</span>:</label>
                  <input type="email" required />
                </div>
                <div className="modal-form-group">
                  <label>City<span>*</span>:</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="modal-form-group" style={{ marginBottom: '1rem' }}>
                <label>Message<span>*</span></label>
                <textarea rows="3" required></textarea>
              </div>
              <button type="submit" className="modal-submit-btn">Submit</button>
            </form>
          </div>
          <div className="modal-footer-contact">
            <div className="contact-block">
              <Mail size={16} /> <span>info@futureinvo.com</span>
            </div>
            <div className="contact-block">
              <Phone size={16} /> <span>+91 73868 79818</span>
            </div>
          </div>
          <div className="modal-social">
            <span>Follow Us:</span>
            <div className="icons">
              <a href="https://www.facebook.com/share/18HE7JNhW6/" target="_blank" rel="noopener noreferrer"><Facebook size={18} /></a>
              <a href="https://www.linkedin.com/company/future-invo-solutions/" target="_blank" rel="noopener noreferrer"><Linkedin size={18} /></a>
              <a href="https://www.instagram.com/futureinvosolutions?igsh=czRkMGw0NHd3eXl3" target="_blank" rel="noopener noreferrer"><Instagram size={18} /></a>
              <a href="https://x.com/FutureInvo2025" target="_blank" rel="noopener noreferrer"><Twitter size={18} /></a>
              <a href="https://youtube.com/@futureinvosolutions?si=UMdsKa0i_axjx0Jv" target="_blank" rel="noopener noreferrer"><Youtube size={18} /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
