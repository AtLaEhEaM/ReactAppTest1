import React from 'react';

const DealCard: React.FC = () => {
  return (
    <section id="deals" className="deals-section container">
      <h2 className="section-heading">Deals</h2>
      <div className="deal-card single">
        <div className="deal-body">
          <h3>10% off all cakes</h3>
          <p className="muted">1st of every month — enjoy 10% off on all cakes.</p>
        </div>
      </div>
    </section>
  );
};

export default DealCard;
