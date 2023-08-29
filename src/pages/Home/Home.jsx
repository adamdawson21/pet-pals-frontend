import HeroCarousel from "../../components/HeroCarousel/HeroCarousel";
import "./Home.css"

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <div className="parent">
        <div clasName="CatImg">
          <img className="img"
            src="https://i.imgur.com/T2sxjnJ.jpg"
          />
        </div>
        <div className="CatText">
          <h2 className="Text">
            Adopting a cat offers companionship and a purr-fectly rewarding experience. Providing a loving home to a shelter cat helps reduce overpopulation and brings feline warmth into your life.
          </h2>
        </div>
        <div className="DogImg">
          <img className="img"
            src="https://i.imgur.com/hnZXESV.jpg"
          />
        </div>
        <div class="DogText">
          <h2 className="Text">
            Adopting a dog saves lives and brings immeasurable joy. It's a compassionate choice that fills your home with love while giving a deserving dog a forever family.
          </h2>
        </div>
      </div>
    </>
  );
}
