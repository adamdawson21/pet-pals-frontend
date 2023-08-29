import { Carousel } from "@material-tailwind/react";
import "./HeroCarousel.css";

export default function HeroCarousel() {
  return (
    <div className="Carousel">
      <Carousel
        transition={{ duration: 2 }}
        loop={true}
        autoplay={true}
        autoplayDelay={8000}
      >
        <div className="Slide">
          <img
            src="https://i.imgur.com/Yf5oP2j.jpg"
            alt="image 1"
            className="Image"
          />
        </div>
        <div className="Slide">
          <img
            src="https://i.imgur.com/qeaT7sM.jpg"
            alt="image 2"
            className="Image"
          />
        </div>
        <div className="Slide">
          <img
            src="https://i.imgur.com/A2nU5MN.jpg"
            alt="image 3"
            className="Image"
          />
        </div>
      </Carousel>
    </div>
  );
}
