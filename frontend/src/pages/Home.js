import React from 'react';
import './Home.css';

// REMOVE or COMMENT OUT these image imports entirely
// import heroImage from './assets/hero-bg.jpg';
// import navbarIcon from './assets/user-icon.png';
// import storyImg1 from './assets/story-img-1.jpg';
// import storyImg2 from './assets/story-img-2.jpg';
// import storyImg3 from './assets/story-img-3.jpg';
// import storyImg4 from './assets/story-img-4.jpg';


function Home() {
  return (
    <div className="home-container">
      <header className="navbar-section">
        <nav className="navbar-content">
          <div className="navbar-logo">Husn Hira</div>
          <ul className="navbar-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#product">Product</a></li>
            <li><a href="#about-us">About us</a></li>
          </ul>
          <div className="navbar-line"></div>
          {/* This div will have its background image set via CSS */}
          <div className="navbar-icon" role="img" aria-label="User Icon"></div>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          {/* This div will hold the background image via CSS */}
          <div className="hero-image-placeholder"></div>
          <div className="hero-text-content">
            <h1 className="headline">Radiant Skin, Naturally</h1>
            <p className="subheadline">Transform your skin with Husn Hira's premium skincare collection. Experience the magic of nature's finest ingredients.</p>
            <button className="shop-btn">
              <span className="shop-text">Shop Now</span>
            </button>
          </div>
        </section>

        <section className="testimonial-section">
          <h2 className="testimonial-heading">Hear From Our Happy Customers</h2>
          <div className="testimonial-box">
            <div className="testimonial-content">
              <p className="quote">“Visible results in just a week!”</p>
              <p className="review">I was honestly surprised at how fast this serum worked. Within 7 days, my skin looked brighter, smoother, and more even-toned. It feels so lightweight and natural – no stickiness at all. Highly recommended for anyone looking to boost their glow naturally!</p>
              <p className="author">– Ritika S., Pune</p>
            </div>
          </div>
          <div className="circle-left">&lt;</div>
          <div className="circle-right">&gt;</div>
          <div className="dots">_ _ _ _</div>
        </section>

        <section className="benefits-section">
          <div className="benefits-text">
            <span>Glowing</span>
            <span>Hydrated</span>
            <span>Radiant</span>
            <span>Nourished</span>
            <span>Even-toned</span>
            <span>Youthful</span>
            <span>Smooth</span>
          </div>
        </section>

        <section className="story-section">
          <div className="story-item story-item-1">
            {/* Placeholder for story image 1 */}
            <div className="story-img story-img-placeholder-1"></div>
            <p className="story-text">EVERY SKIN TELLS A STORY...</p>
          </div>
          <div className="story-item story-item-2">
            {/* Placeholder for story image 2 */}
            <div className="story-img story-img-placeholder-2"></div>
            <p className="story-text">...LET YOURS GLOW WITH HUSN HIRA.</p>
          </div>
          <div className="story-item story-item-3">
            {/* Placeholder for story image 4 (from original figma design mapping) */}
            <div className="story-img story-img-placeholder-4"></div>
            <p className="story-text">NATURE'S SECRET, IN A JAR.</p>
          </div>
          {/* Placeholder for story image 3 (large one) */}
          <div className="story-img-large story-img-placeholder-3"></div>
        </section>
      </main>

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
              <li>📞 +91 98765 43210</li>
              <li>✉️ info@husnhira.com</li>
              <li>📍 Mumbai, Maharashtra</li>
            </ul>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-copyright">© 2024 Husn Hira. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default Home;