import React from 'react';
import './PrivacyPolicy.css'; // Make sure this CSS file is in the same directory
import storyImg3 from '../assets/storyImg3.png'; 


const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page-container">
      {/* Privacy Policy Card */}
      <div className="privacy-policy-card">
        <div className="card-header">
          <img className="card-logo" src={storyImg3} />
          <h1 className="policy-title font-Inter">Privacy Policy</h1>
        </div>
        <div className="policy-content font-Inter">
          <p>At Husn Hira, your privacy is our priority. We ensure that your personal information is kept safe, secure, and used only for essential purposes.</p>
          
          <h2 className="content-heading font-Inter">Information We Collect:</h2>
          <ul>
            <li>Your name, contact number, email, and delivery address</li>
            <li>Payment details (handled securely via trusted payment gateways)</li>
          </ul>
          
          <h2 className="content-heading font-Inter">How We Use It:</h2>
          <ul>
            <li>To confirm, process, and ship your orders</li>
            <li>To provide customer support and updates about your purchase</li>
            <li>To occasionally inform you about offers (only if you choose to receive them)</li>
          </ul>
          
          <h2 className="content-heading font-Inter">We Promise:</h2>
          <ul>
            <li>We never sell, rent, or share your personal data with anyone</li>
            <li>We don’t store your card or UPI details on our servers</li>
          </ul>
          
          <h2 className="content-heading font-Inter">Data Protection:</h2>
          <p>We use secure servers and encrypted connections to protect your information. Payments are processed through reliable platforms like Razorpay, UPI, etc.</p>
          
          <p className="contact-info">Need help or have questions?<br />
          dingraimanish57@gmail.com<br />
          91+ 98342 47144 (WhatsApp support)</p>
        </div>
      </div>
      {/* Footer copyright - This would typically be part of a global Footer component */}
      {/* <div className="footer-copyright">© 2024 Husn Hira. All rights reserved.</div> */}
    </div>
  );
};

export default PrivacyPolicy;
