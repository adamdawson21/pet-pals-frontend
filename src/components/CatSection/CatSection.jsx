import React from "react";
import { Link } from "react-router-dom";
import "./CatSection.css";

export default function CatSection() {
  return (
    <div className="cat-parent">
      <div className="cat-column">
        <h2 className="Text">
          Adopting a cat is a compassionate choice that brings immeasurable rewards. Cats are known for their independent and affectionate nature, making them wonderful companions. By adopting a cat from a shelter, you're not only providing a loving home but also giving a deserving feline friend a chance for a better life.
        </h2>
        <Link to="/allcats">
          <button className="button">See All Cats</button>
        </Link>
      </div>
      <div className="cat-column">
        <img className="img" src="https://i.imgur.com/T2sxjnJ.jpg" alt="Cat" />
      </div>
    </div>
  );
}
