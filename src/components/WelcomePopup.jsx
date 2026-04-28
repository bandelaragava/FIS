import React, { useState, useEffect } from 'react';
import { X, Rocket, Sparkles } from 'lucide-react';
import logoImg from '../assets/logo-new.png';
import './WelcomePopup.css';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Show content after 1 second delay
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    // Auto-close after 10 seconds
    const autoCloseTimer = setTimeout(() => {
      handleClose();
    }, 10000);

    // Lock body scroll when popup is visible
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      clearTimeout(contentTimer);
      clearTimeout(autoCloseTimer);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  const handleClose = () => {
    setIsExiting(true);
    document.body.style.overflow = 'unset';
    setTimeout(() => {
      setIsVisible(false);
    }, 800); // Match fade-out duration
  };

  if (!isVisible) return null;

  return (
    <div className={`premium-popup-overlay ${isExiting ? 'exit' : ''}`}>
      <div className="premium-popup-container">
        {/* Background Decorative Elements */}
        <div className="premium-glass-mesh"></div>
        <div className="premium-glow-ring"></div>
        
        {/* Close Button */}
        <button className="premium-close-btn" onClick={handleClose} aria-label="Close">
          <X size={20} />
        </button>

        <div className="premium-popup-content">
          <div className={`stagger-content ${showContent ? 'visible' : ''}`}>
            <div className="premium-icon-wrap">
              <div className="icon-glow"></div>
              <img src={logoImg} alt="Future Invo Solutions Logo" className="premium-main-logo" />
            </div>

            <div className="premium-badge">
              <Sparkles size={14} className="badge-sparkle" />
              <span>Industry Leader</span>
            </div>

            <h2 className="premium-title">
              <span className="text-white">Future Invo</span>
              <span className="gradient-text-premium">Solutions</span>
            </h2>

            <div className="premium-divider">
              <div className="divider-dot"></div>
            </div>

            <p className="premium-description">
              <span className="highlight-text">3+ Years</span> of architecting digital excellence.
              Empowering global brands with next-gen technical solutions.
            </p>

            <div className="premium-footer">
              <div className="status-indicator">
                <span className="status-dot pulse"></span>
                <span className="status-text">System Sync Active</span>
              </div>
              <button className="premium-cta-btn" onClick={handleClose}>
                Explore Now <Rocket size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
