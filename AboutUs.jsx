import React from 'react';

function AboutUs() {
  return (
    <div className="about-us">
      <div className="about-container">
        <h2>About Paradise Nursery</h2>
        <p>
          Welcome to <strong>Paradise Nursery</strong> — your premier destination for
          beautiful, healthy houseplants delivered straight to your door. Founded with
          a passion for greenery and a love for nature, we believe that every home
          deserves a touch of paradise.
        </p>
        <p>
          Our team of expert horticulturists carefully selects and nurtures every plant
          in our collection, ensuring that you receive only the finest quality specimens.
          Whether you're a seasoned plant parent or just starting your green journey,
          we have the perfect plant for you.
        </p>
        <div className="about-values">
          <div className="value-card">
            <span className="value-icon">🌱</span>
            <h3>Sustainably Grown</h3>
            <p>All our plants are grown using eco-friendly practices.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">🚚</span>
            <h3>Fast Delivery</h3>
            <p>Carefully packaged and shipped to your doorstep.</p>
          </div>
          <div className="value-card">
            <span className="value-icon">💚</span>
            <h3>Expert Support</h3>
            <p>Our plant experts are always here to help you thrive.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
