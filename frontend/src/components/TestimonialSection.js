import React, { useState, useEffect } from 'react';
// import './TestimonialSection.css'; // तुमच्या CSS फाइलचे नाव

const testimonials = [
  {
    quote: "“Visible results in just a week!”",
    review: "I was honestly surprised at how fast this serum worked. Within 7 days, my skin looked brighter, smoother, and more even-toned. It feels so lightweight and natural – no stickiness at all. Highly recommended for anyone looking to boost their glow naturally!",
    author: "– Ritika S., Pune",
  },
  {
    quote: "“My skin has never felt so hydrated!”",
    review: "As someone with dry skin, finding a product that truly hydrates without feeling greasy is a challenge. Husn Hira's cream is a game-changer! My skin feels plump and moisturized all day. Absolutely love it!",
    author: "– Priya K., Mumbai",
  },
  {
    quote: "“Radiant glow, naturally achieved.”",
    review: "I've been using this product for a month now, and the compliments haven't stopped! My complexion looks so much more radiant and healthy. It's gentle, effective, and smells amazing. A must-have in my skincare routine.",
    author: "– Anjali D., Bengaluru",
  },
  {
    quote: "“Even-toned skin, finally!”",
    review: "Struggled with uneven skin tone for years. This serum has significantly reduced my dark spots and redness. My skin looks so much more balanced and clear. Thank you, Husn Hira!",
    author: "– Sneha R., Delhi",
  },
];

const TestimonialSection = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) =>
        (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Change review every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Manual navigation (optional, if you want arrows back)
  const goToNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      (prevIndex + 1) % testimonials.length
    );
  };

  const goToPrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Render dots for navigation
  const renderDots = () => {
    return testimonials.map((_, index) => (
      <span
        key={index}
        className={`dot ${index === currentReviewIndex ? 'active' : ''}`}
        onClick={() => setCurrentReviewIndex(index)}
      >
        &#9679; {/* Unicode character for a solid circle dot */}
      </span>
    ));
  };

  const currentReview = testimonials[currentReviewIndex];

  return (
    <section className="testimonial-section">
      <h2 className="testimonial-heading">Hear From Our Happy Customers</h2>
      <div className="testimonial-box">
        <div className="testimonial-content">
          <p className="quote">{currentReview.quote}</p>
          <p className="review">{currentReview.review}</p>
          <p className="author">{currentReview.author}</p>
        </div>
      </div>
      <div className="dots-container"> {/* Container for dots */}
        {renderDots()}
      </div>
      {/* If you want to re-add navigation arrows for manual control */}
      {/* <div className="circle-left" onClick={goToPrevReview}>&lt;</div> */}
      {/* <div className="circle-right" onClick={goToNextReview}>&gt;</div> */}
    </section>
  );
};

export default TestimonialSection;
