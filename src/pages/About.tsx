import React from 'react';

const About: React.FC = () => {
  return (
    <section className="about container">
      <h2>About Sunny Side Bakery</h2>
      <p>
        Founded by a family of bakers, Sunny Side focuses on traditional techniques
        and seasonal ingredients. We source locally and bake with care.
      </p>
      <h3>Our Mission</h3>
      <p>Bring joy through honest baking and community connection.</p>

      <h3>Team</h3>
      <div className="team">
        <div className="team-member">
          <img src="/placeholder.jpg" alt="Baker" />
          <strong>Jamie Baker</strong>
          <div>Head Baker</div>
        </div>
        <div className="team-member">
          <img src="/placeholder.jpg" alt="Manager" />
          <strong>Avery Crust</strong>
          <div>Manager</div>
        </div>
      </div>
    </section>
  );
};

export default About;
