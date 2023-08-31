import './PetBio.css'
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getCat } from '../../services/cats';
import { Button } from '@material-tailwind/react';
import { likePost } from "../../services/users";

export default function PetBio({ user }) {
  const [pet, setPet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getCat(id);
      setPet(pet);
    }
    fetchPet();
  }, [id]);

  const emailButton = () => {
    const recipient = "info@petpals.netlify.com";
    const subject = "Adoption Request";
    const body = "Hello, I am interested in adopting!";
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}
                        ?subject=${encodeURIComponent(subject)}
                        &body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  }

  const handleLikeToFav = async () => {
    await likePost({
      user: user.id,
      post: id
    });
  }

  return (
    <div className="pet-bio-container" >
      <div className="pet-bio-image>">
        <img
          src={pet.image}
          alt={pet.breed}
        />
      </div>

      <div className="pet-info-column">
        <h1 className="pet-name">About {pet.name}</h1>
        <p><span>Status:</span> Available</p> 
        <p><span>Breed:</span> {pet.breed}</p> 
        <p><span>Age:</span> {pet.age}</p> 
        <p><span>Gender:</span> {pet.gender}</p> 
        <br />
        {pet.description}
        <br />

      <div className="buttons">
        {pet.animal_type === "Dog" ? <Link to={"/allDogs"} ><button>Go Back</button></Link> : <Link to={"/allCats"} ><button>Back</button></Link>}
        <button onClick={handleLikeToFav}>Add to Favorites</button>
        <button onClick={emailButton}>Adopt Me!</button>
        </div>
      </div>
    </div>
  )
}
