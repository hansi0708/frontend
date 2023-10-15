// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import your CSS file for styling
import Navigation from "../Navigation/Navigation.js";

const Home = () => {
  return (
    <div className="homepage">
      <Navigation />
      <div className="hero-section">
        <h1>Welcome to Your Astrology App</h1>
        <p>
          Get personalized astrology readings, book appointments, and explore
          our store.
        </p>
        <Link to="/product" className="btn">
          Explore Kundli
        </Link>
        <Link to="/booking" className="btn">
          Book an Appointment
        </Link>
      </div>

      <div className="features">
        <div className="feature">
          <h2>Personalized Kundli</h2>
          <p>Get detailed kundli readings based on your birth details.</p>
        </div>
        <div className="feature">
          <h2>Expert Astrologers</h2>
          <p>Book appointments with experienced astrologers and pandits.</p>
        </div>
        <div className="feature">
          <h2>Explore Our Store</h2>
          <p>Find gemstones, malas, and more for a balanced life.</p>
        </div>
        <div className="feature">
          <h2>Daily Horoscopes</h2>
          <p>Read your daily, weekly, and monthly horoscopes.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
