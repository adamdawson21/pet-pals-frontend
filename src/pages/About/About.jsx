import "./About.css";
import AboutHero from "../../components/AboutHero/AboutHero";

export default function About() {
  return (
    
    <div className="about">
      <AboutHero />
      <div className="about-text">

        <h1 className="h1">Our Mission</h1>

        <p>
        At PetPals, our mission is to provide a compassionate and innovative platform that bridges the  gap between furry companions in need and the loving families they deserve.
        <br /><br />

        We connect potential adopters with a diverse range of adoptable pets, each with their own unique story and charm. Our comprehensive profiles empower families to make informed decisions and find a perfect match that suits their lifestyle.
        <br /><br />

        Join us in shaping a brighter future, one adoption story at a time.
        </p>
        <br /><br />

        <hr />
        <br /><br />

        <h1 className="h1">Get Involved</h1>

        <p>
        There are many ways to get involved with PetPals. Whether you are looking to adopt, volunteer, or donate, we are always happy to welcome new members to our community.
        <br /><br />

        As a volunteer, you'll enjoy the rewards of seeing animals transform under your care, the joy of matching pets with loving families, and the satisfaction of knowing you're making a tangible difference in the lives of vulnerable animals.
        <br /><br />

        Ready to make a difference? Contact us today to learn more about our volunteer opportunities and how you can become part of our dedicated team.
        </p>
      </div>
    </div>
  );
}
