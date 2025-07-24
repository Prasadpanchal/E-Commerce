import React from 'react';
import './AboutUs.css'; // Make sure this CSS file is in the same directory
import storyImg3 from '../assets/storyImg3.png'; // Your image import

const AboutUs = () => {
  return (
    <div className="about-us-page-container">

      {/* Welcome Section */}
      <section className="about-welcome-section">
        <h1 className="welcome-title font-Arimo_Hebrew_Subset_Italic">Welcome to Husn Hira – The Glow You Deserve.</h1>
        <div className="welcome-content-wrapper">
          <p className="welcome-description font-Inria_Serif">
            At Husn Hira, we believe skincare isn’t just about beauty – it’s about confidence, self-care, and showing the world your natural glow. Inspired by ancient ingredients and perfected with modern formulas, our mission is simple: to give you clear, glass-like skin without filters.
          </p>
          <div className="content-line"></div> {/* Horizontal line */}
          <p className="welcome-description font-Inria_Serif">
            Founded with love in India, Husn Hira is more than just a brand – it’s a movement towards real, visible results using natural, effective ingredients. From Multani Mitti to Rose Powder, from Aloe Vera to Chandan – each product is carefully crafted to nourish your skin from deep within.
          </p>
          <div className="content-line"></div> {/* Horizontal line */}
          <p className="welcome-description font-Inria_Serif">
            We started with one product – the Korean Glass Face Pack – and within weeks, it won hearts with its glow-boosting magic. Today, we’re growing fast, thanks to the trust and love of thousands of customers who saw real results in just a few uses.
          </p>
        </div>
      </section>

      {/* Quote Section */}
      <section className="about-quote-section">
        <p className="quote-text font-Arimo_Hebrew_Subset_Italic">
          Whether you’re getting ready for your first date or fighting stubborn dark spots, Husn Hira is your skin’s best friend.
        </p>
      </section>

      {/* Our Promise Section */}
      <section className="about-promise-section">
        <h2 className="promise-title font-Arimo_Hebrew_Subset_Italic">Our Promise:</h2>
        <div className="promise-content-wrapper">
          <img className="promise-image" src={storyImg3} alt="Our Promise" />
          <ul className="promise-list font-Arimo_Hebrew_Subset_Italic">
            <li>100% natural ingredients</li>
            <li>No harsh chemicals</li>
            <li>Visible results in just a few uses</li>
            <li>Affordable skincare that works</li>
          </ul>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="about-cta-section">
        <p className="cta-text font-Arimo_Hebrew_Subset_Italic">
          Join the Husn Hira family and let your skin shine like a diamond – just like you.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
