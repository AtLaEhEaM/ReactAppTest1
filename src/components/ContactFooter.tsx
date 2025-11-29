import React, { useState } from 'react';

const ContactFooter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('contact:', { name, email, message });
    alert('Thanks — message received (demo).');
    setName(''); setEmail(''); setMessage('');
  };

  return (
    <footer id="contact" className="contact-footer">
      <div className="container contact-inner">
        <div className="contact-left">
          <h3>Location</h3>
          <address>
            123 Dough Lane<br />
            Bakersville, BK 12345
          </address>
          <div className="map-placeholder">
            <img src="/maps.jpg.png" alt="Map placeholder" style={{width:'100%', borderRadius:8}} />
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
            <button className="btn primary" type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="site-foot-note">© {new Date().getFullYear()} Sunny Side Bakery</div>
    </footer>
  );
};

export default ContactFooter;
