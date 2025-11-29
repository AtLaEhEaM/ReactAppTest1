import React from 'react';

const Hero: React.FC<{ onContact?: () => void }> = ({ onContact }) => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" />
      <div className="hero-inner">
        <div className="hero-content">
          <div className="container">
            <h1 className="hero-title">Sunny Side Bakery</h1>
            <p className="hero-tag">Freshly baked goods made with love every morning.</p>
            <div className="hero-ctas">
              <a href="#contact" className="btn primary" onClick={() => { if (onContact) onContact(); }}>
                Contact Us
              </a>
              <a href="#menu" className="btn ghost">View Menu</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
