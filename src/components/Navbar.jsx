import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const serviceList = [
  'IT Consulting', 'Web Development', 'Web Design', 'Mobile Applications',
  'Digital Marketing', 'Artificial Intelligence', 'Business Tools Development',
  'Cloud Services', 'Cybersecurity solutions', 'Data science & big data', 'Emerging tech'
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

  const closeMobile = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
  };

  return (
    <>
      <nav className="glass-header">
        <div className="container container-nav">
          <Link to="/" className="logo" onClick={closeMobile}>
            <span className="logo-accent">Future</span>-Invo
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
                          to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`} 
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

          <Link to="/contact" className="btn btn-primary btn-nav" style={{ display: mobileOpen ? 'none' : 'inline-block' }}>
            Get Started
          </Link>

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
                    to={`/services#${service.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={closeMobile}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={closeMobile} style={{ marginTop: '1rem' }}>
          Get Started
        </Link>
      </div>
    </>
  );
}
