import React from 'react';

const AboutBlock: React.FC = () => {
  return (
    <section id="about" className="about-section container">
      <h2 className="section-heading">About</h2>
      <p>
        Sunny Side Bakery is a small-batch bakery focused on traditional techniques and community.
        We bake fresh bread, pastries, and cakes daily with seasonal and local ingredients.
      </p>
      <p className="muted">Our mission: bring joy through honest baking.</p>
    </section>
  );
};

export default AboutBlock;
