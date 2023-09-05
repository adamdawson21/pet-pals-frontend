import React from "react";
import { Link } from "react-router-dom";
import "./DogSection.css";

export default function DogSection() {
  return (
    <div className="dog-parent">
      <div className="dog-column">
        <img className="img" src="https://i.imgur.com/hnZXESV.jpg" alt="Dog" />
      </div>
      <div className="dog-column">
        <h2 className="Text">
          Adopting a dog not only brings joy to your life but also saves lives. Each year, millions of dogs end up in shelters, waiting for a loving home. Choosing to adopt gives these dogs a second chance at happiness and creates a strong bond of companionship that can last a lifetime.
        </h2>
        <Link to="/alldogs">
          <button className="button">See All Dogs</button>
        </Link>
      </div>
    </div>
  );
}
