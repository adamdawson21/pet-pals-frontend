import React from 'react';
import "./AboutHero.css";

export default function AboutHero() {
  return (
    <div className="container">
      <img
        className="aboutus-image"
        src="https://images.unsplash.com/photo-1514147397633-2882c06ea2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2769&q=80"
        alt="Australian Shepherd being pet by volunteers"
      />
      <div className="overlay">
        <h1 className="overlay-text">About Us</h1>
      </div>
    </div>
  );
}

