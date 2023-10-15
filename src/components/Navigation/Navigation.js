import React from "react";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav-bar">
      <a className="nav-list" href="/">
        Bhagyaditya
      </a>
      <div className="nav-dropdown">
        <a className="nav-list" href="/">
          Astrology
        </a>
        <div className="dropdown-content">
          <a href="/num_cal">Numerology</a>
          <a href="/nak_cal">Love Astrology</a>
          <a href="/nak_cal">Vedic Astrology</a>
          <a href="/nak_cal">Natal Astrology</a>
          <a href="/nak_cal">Horary Astrology</a>{" "}
          {/* Add more calculator links as needed */}
        </div>
      </div>
      <a className="nav-list" href="/">
        Pooja
      </a>
      <div className="nav-dropdown">
        <a className="nav-list" href="/">
          Calculator
        </a>
        <div className="dropdown-content">
          <a href="/num_cal">Numerology Calculator</a>
          <a href="/nak_cal">Nakshatra Calculator</a>
          {/* Add more calculator links as needed */}
        </div>
      </div>
      <a className="nav-list" href="/">
        Calender
      </a>
      <a className="nav-list" href="/pandit">
        Pandit
      </a>
      <a className="nav-list" href="/chat">
        Shop
      </a>
      <a className="nav-list" href="/">
        Articles
      </a>
      <a className="nav-list" href="/auth">
        Get Started
      </a>
    </nav>
  );
};

export default Navigation;
