import React from 'react';
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <div className="container">
      <img
        className="aboutus-image"
        src="https://imgur.com/1GM1mzR.jpg"
        alt="Dogs at a shelter with people in the background"
        text="About Us"
      />
        <div className="overlay">
          <h1 className="overlay-text">About Us</h1>
        </div>
    </div>
  );
}

