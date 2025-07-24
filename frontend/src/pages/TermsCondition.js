import React from 'react';
import './TermsCondition.css'; // Make sure this CSS file is in the same directory
import storyImg3 from '../assets/storyImg3.png'; 


const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page-container">
      {/* Privacy Policy Card */}
      <div className="privacy-policy-card">
        <div className="card-header">
          <img className="card-logo" src={storyImg3} />
          <h1 className="policy-title font-Inter">Terms & Condition</h1>
        </div>
        <div className="policy-content font-Inter">
          <p>All products are made from natural ingredients, but results may vary. Always do a patch test before use.</p>
          
          <ul>
            <li>Once an order is placed, it cannot be canceled or modified.</li>
            <li>We don’t accept returns due to hygiene reasons. Refunds are only applicable for damaged or wrong products (reported within 48 hours).</li>
          </ul>
          
          <ul>
            <li>Delivery may take 4–7 days depending on location. We are not responsible for courier delays.</li>
            <li>All content (logo, text, images) is property of Husn Hira and cannot be copied.</li>
            <li>We value your privacy and never share your data.</li>
          </ul>
                    
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
