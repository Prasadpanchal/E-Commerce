import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
      <footer className="footer-bg">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Husn Hira</span>
            <span className="footer-desc">Premium skincare products for radiant, healthy skin.</span>
          </div>
          <div className="footer-links">
            <span className="footer-title">Quick Links</span>
            <ul>
              <li>Home</li>
              <li>Product</li>
              <li>About</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="footer-support">
            <span className="footer-title">Support</span>
            <ul>
              <li>Contact</li>
              <li>FAQ</li>
              <li>Shipping Info</li>
              <li>Returns</li>
            </ul>
          </div>
          <div className="footer-contact">
            <span className="footer-title">Contact Info</span>
            <ul>
              <li>📞 +91 98342 47144</li>
              <li>✉️ husnhiraofficial@gmail.com</li>
              <li>📍 MIDC jalgaon, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">© 2025 CodeAura Solutions. All rights reserved.</div>
      </footer>
  );
};

export default Footer;
