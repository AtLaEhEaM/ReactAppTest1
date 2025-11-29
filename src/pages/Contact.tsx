import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted', { name, email, message });
    alert('Thanks! Message sent (demo only).');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact container">
      <h2>Location & Contact</h2>
      <div className="contact-grid">
        <div className="contact-left">
          <h3>Find us</h3>
          <p>123 Dough Lane, Bakersville — open daily 7am–3pm</p>
          <div className="map-placeholder">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18"
              style={{ border: 0, width: '100%', height: 250 }}
              loading="lazy"
            />
          </div>
        </div>

        <div className="contact-right">
          <h3>Contact Us</h3>
          <form onSubmit={submit} className="contact-form">
            <label>
              Name
              <input value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label>
              Email
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
              Message
              <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
            </label>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
