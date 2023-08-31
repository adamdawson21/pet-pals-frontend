import React from 'react';
import "./DogHero.css";

function DogHero() {
  return (
    <div className="hero-container">
      <img
        className="dog-image"
        src="https://i.imgur.com/JbtJ9C5.jpg"
        alt="dog image"
      />
      <div className="overlay">
        <h1 className="overlay-text">Adoptable Dogs</h1>
        <p className="overlay-sm-text">This page is updated in real-time based on every dog’s current status.</p>
      </div>
    </div>
  );
}

export default DogHero;
