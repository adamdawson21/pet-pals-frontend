import React from 'react';
import "./CatHero.css";

function CatHero() {
  return (
    <div className="hero-container">
      <img
        className="cat-image"
        src="https://i.imgur.com/aie3plZ.jpg"
        alt="cat image"
      />
      <div className="overlay">
        <h1 className="overlay-text">Adoptable Cats</h1>
        <p className="overlay-sm-text">This page is updated in real-time based on every cat’s current status.</p>
      </div>
    </div>
  );
}

export default CatHero;
