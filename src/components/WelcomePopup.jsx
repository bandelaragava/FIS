import React, { useState, useEffect } from 'react';
import './WelcomePopup.css';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fading out at 5.5s so it fully transitions by 6s
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 5500);

    // Completely remove from DOM at 6s
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
    }, 6000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`welcome-popup-overlay ${isFading ? 'fade-out' : ''}`}>
      {/* Decorative Floating Glowing Orbs */}
      <div className="popup-orb orb-1"></div>
      <div className="popup-orb orb-2"></div>
      
      <div className="welcome-popup-content">
        <div className="popup-grid-bg"></div>
        <div className="welcome-popup-inner">
          <div className="popup-badge">Celebrating a Milestone</div>
          <h2 className="welcome-popup-title">
            <span className="gradient-text-1">Future</span> Innovation
          </h2>
          <p className="welcome-popup-text">
            <strong>3+ Years of Successful Journey</strong>
            with many satisfied clients.
          </p>
          
          {/* Creative Progress Bar */}
          <div className="popup-creative-line">
             <div className="popup-creative-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePopup;
