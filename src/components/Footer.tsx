import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <h4>Sunny Side Bakery</h4>
          <address>
            123 Dough Lane<br />
            Bakersville, BK 12345
          </address>
          <div>Phone: (555) 123-4567</div>
          <div>Email: hello@sunnyside.example</div>
        </div>
        <div>
          <small>© {new Date().getFullYear()} Sunny Side Bakery. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
