import React from 'react';
import './Product.css'; // Make sure this CSS file is in the same directory
import FacePackImage from '../assets/Face_pack.png'; 
import result1 from '../assets/result1.jpg'; 
import result2 from '../assets/result2.jpg'; 
import result3 from '../assets/result3.jpg'; 
import result4 from '../assets/result4.jpg'; 
import result5 from '../assets/result5.jpg'; 
import result6 from '../assets/result6.jpg'; 




const Product = () => {
  return (
    <div className="product-page-container">

      {/* Hero Section */}
      <section className="product-hero-section">
        <div className="product-hero-content-wrapper">
          <img className="product-image" src={FacePackImage} /> {/* Image on left */}
          <div className="product-details">
            <h1 className="product-title font-Inria_Serif">Korean Glass Face Pack</h1>
            <p className="product-description font-Inria_Serif">
              Multani Mitti – Deep cleansing & oil control<br />
              Chandan (Sandalwood) – Skin brightening & cooling effect<br />
              Rose Powder – Softness & fragrance<br />
              Vitamin C – Glow boost & pigmentation fade<br />
              Aloe Vera – Hydration & healing<br />
              Gold Dust (Free Add-on) – Premium glow touch           
            </p>
            <div className="price-and-discount">
              <span className="current-price font-Inria_Serif">₹249</span>
              
            </div>
            <button className="prebook-button">
              <span className="prebook-text font-Abyssinica_SIL">Order Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* Decorative Blurs - Positioned relative to the page flow */}
      <div className="blur-circle blur-blue-1"></div>
      <div className="blur-circle blur-blue-2"></div>
      <div className="blur-circle blur-fuchsia"></div>

      {/* Feature Cards Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-content font-ABeeZee">
              <h3 className="feature-title">Instant visible glow in 15–20 minutes</h3>
              <p className="feature-description">
                Enhances your skin’s radiance with nourishing natural ingredients.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-content font-ABeeZee">
              <h3 className="feature-title">Removes dirt, tan & dullness</h3>
              <p className="feature-description">
                Visibly smoothens skin texture and reduces signs of aging.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-content font-ABeeZee">
              <h3 className="feature-title">Makes skin soft, smooth & camera-ready</h3>
              <p className="feature-description">
                Clinically tested for safety and effectiveness on all skin types.
              </p>
            </div>
          </div>
          <div className="feature-card">
            <div className="feature-content font-ABeeZee">
              <h3 className="feature-title">Suitable for men & women both</h3>
              <p className="feature-description">
                Gentle, non-irritating formula that works for dry, oily, and sensitive skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Results Section */}
      <section className="results-section">
        <h2 className="results-title font-ABeeZee">Real Results, Real Stories</h2>
        <div className="results-grid">
          <div className="result-card">
            <img className="result-image" src={result1} />
          </div>
          <div className="result-card">
            <img className="result-image" src={result2} />
          </div>
          <div className="result-card">
            <img className="result-image" src={result3} />
          </div>
          <div className="result-card">
            <img className="result-image" src={result4} />
          </div>
          <div className="result-card">
            <img className="result-image" src={result5} />
          </div>
          <div className="result-card">
            <img className="result-image" src={result6} />
          </div>
        </div>
      </section>

    </div>
  );
};

export default Product;
