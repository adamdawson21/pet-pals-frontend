import React from "react";
import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import CatSection from "../../components/CatSection/CatSection";
import DogSection from "../../components/DogSection/DogSection";
import "./Home.css";

export default function Home() {
  return (
    <div className="parent">
      <div className="div1">
        <HeroCarousel />
      </div>
      <div className="div2">
        <CatSection />
      </div>
      <div className="div3">
        <DogSection />
      </div>
    </div>
  );
}
