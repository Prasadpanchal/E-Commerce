import React from 'react';
import './Home.css';
import TestimonialSection from '../components/TestimonialSection'; // Assuming TestimonialSection.js is in src/components


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

         {/* Review section - now using the dynamic TestimonialSection component */}
        <TestimonialSection />

        {/* Scrolling section */}
        <section className="benefits-section">
          <div className="marquee">
              <div className="benefits-track">
                <div className="benefits-text">
                  <span>Glowing</span>
                  <span>Hydrated</span>
                  <span>Radiant</span>
                  <span>Nourished</span>
                  <span>Even-toned</span>
                  <span>Youthful</span>
                  <span>Smooth</span>
                </div>
                <div className="benefits-text">
                  <span>Glowing</span>
                  <span>Hydrated</span>
                  <span>Radiant</span>
                  <span>Nourished</span>
                  <span>Even-toned</span>
                  <span>Youthful</span>
                  <span>Smooth</span>
                </div>
                <div className="benefits-text">
                  <span>Glowing</span>
                  <span>Hydrated</span>
                  <span>Radiant</span>
                  <span>Nourished</span>
                  <span>Even-toned</span>
                  <span>Youthful</span>
                  <span>Smooth</span>
                </div>
              </div>
            </div>
        </section>


        {/* story-section */}
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
            <p className="story-text">100% NATURAL</p>
          </div>
          {/* Placeholder for story image 3 (large one) */}
          <div className="story-img-large story-img-placeholder-3"></div>
        </section>
      </main>

      
    </div>
  );
}

export default Home;