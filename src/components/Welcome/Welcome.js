import React from "react";
import "./Welcome.css";
import Navigation from "../Navigation/Navigation";

const Welcome = () => {
  return (
    <div className="body">
      <Navigation />

      <div className="main">
        <div className="container">
          <div className="image" />
          <div className="left-container">
            <h1>Welcome to Bhagyaditya</h1>
            <div className="buttons">
              <a href="/authenticate" className="btn-primary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="featured-astrologers">
        <div className="container">
          <h2>Featured Astrologers and Priests</h2>
        </div>
      </section>

      <section className="quick-access">
        <div className="container">
          <h2>Quick Access to Essential Features</h2>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
