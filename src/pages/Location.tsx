import React from 'react';

const Location: React.FC = () => {
  return (
    <section className="location container">
      <h2 className="section-heading animate-heading">Location</h2>
      <p>We are located at 123 Dough Lane, Bakersville. Open daily 7am–3pm.</p>
      <div className="map-large">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18"
          style={{ border: 0, width: '100%', height: 400 }}
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Location;
