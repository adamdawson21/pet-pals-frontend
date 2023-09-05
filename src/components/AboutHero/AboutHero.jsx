import React from "react";
import "./AboutHero.css";

function AboutHero() {
  return (
    <div className="hero-container">
      <img
        className="aboutus-image"
        src="https://imgur.com/1GM1mzR.jpg"
        alt="about us"
      />
      <div className="overlay">
        <h1 className="overlay-text">About Us</h1>
      </div>
    </div>
  );
}

export default AboutHero;
