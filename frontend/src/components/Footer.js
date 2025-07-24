import React from 'react';
import { Link } from 'react-router-dom'; // Link कंपोनेंट इम्पोर्ट करा
import './Footer.css'; // Make sure this CSS file is in the same directory

const Footer = () => {
  return (
    <footer className="footer-bg">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-logo">Husn Hira</span>
          <span className="footer-desc">Premium skincare products for radiant, healthy skin.</span>
        </div>
        <div className="footer-links">
          <span className="footer-title">QUICK LINKS</span>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Home page link */}
            <li><Link to="/product">Product</Link></li> {/* Product page link */}
            <li><Link to="/about-us">About us</Link></li> {/* About us page link */}
            <li><Link to="/contact">Contact</Link></li> {/* Contact page link */}
          </ul>
        </div>
        <div className="footer-support">
          <span className="footer-title">CUSTOMER POLICIES</span> {/* Typo corrected here */}
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li> {/* Privacy Policy page link */}
            <li><Link to="/terms-condition">T&C</Link></li> {/* Terms & Conditions page link */}
          </ul>
        </div>
        <div className="footer-contact">
          <span className="footer-title">CONTACT INFO</span>
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
