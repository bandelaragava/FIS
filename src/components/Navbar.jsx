import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav className="glass-header">
        <div className="container container-nav">
          <Link to="/" className="logo" onClick={closeMobile}>
            <span className="logo-accent">Future</span>-Invo
          </Link>

          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  {item.label}
                </NavLink>
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
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => isActive ? 'active' : ''}
            onClick={closeMobile}
          >
            {item.label}
          </NavLink>
        ))}
        <Link to="/contact" className="btn btn-primary" onClick={closeMobile}>
          Get Started
        </Link>
      </div>
    </>
  );
}
