import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="site-header glass">
      <div className="container nav-inner">
        <a href="#hero" className="brand">Sunny Side Bakery</a>
        <nav>
          <a href="#hero">Home</a>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Location</a>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
