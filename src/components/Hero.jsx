import React from "react";

function HeroSection() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1> YOUR FEET DESERVES THE BEST </h1>
        <p>
          Be sweet to your feet. They support you and keep you moving and
          grooving, whether on the job, for fun, or when you’re rocking your
          favorite activity or sport. So, treat them right with the best shoes.
        </p>
        <div className="hero-button">
          <button> Shop Now </button>
          <button className="secondory-btn"> Category </button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>

          <div className="brand-icons">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="hero" />
      </div>
    </main>
  );
}

export default HeroSection;
