import "./PetBio.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getCat } from "../../services/cats";
import { Button } from "@material-tailwind/react";
import { likePost } from "../../services/users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PetBio({ user }) {
  const [pet, setPet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getCat(id);
      setPet(pet);
    };
    fetchPet();
  }, [id]);

  const emailButton = () => {
    const recipient = "inquiries@petpals.netlify.app";
    const subject = `Adoption Request - ${pet.name}`;
    const body = `Hello, I am interested in adopting ${pet.name}!`;
    const mailtoLink = `mailto:${encodeURIComponent(recipient)}
                        ?subject=${encodeURIComponent(subject)}
                        &body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  const handleLikeToFav = async () => {
    await likePost({
      user: user.id,
      post: id,
    });

    toast.success(`${pet.name} added to favorites!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      closeButton: false,
    });
  };

  return (
    <div className="pet-bio-container">
      <div className="pet-bio-image>">
        <img className="pet-bio-div-img" src={pet.image} alt={pet.breed} />
      </div>

      <div className="pet-info-column">
        <h1 className="pet-name">About {pet.name}</h1>
        <p>
          <span>Status:</span> Available
        </p>
        <p>
          <span>Breed:</span> {pet.breed}
        </p>
        <p>
          <span>Age:</span> {pet.age}
        </p>
        <p>
          <span>Gender:</span> {pet.gender}
        </p>
        <br />
        {pet.description}
        <br />

        <div className="buttons">
          {pet.animal_type === "Dog" ? (
            <Link to={"/allDogs"}>
              <Button>Go Back</Button>
            </Link>
          ) : (
            <Link to={"/allCats"}>
              <Button>Back</Button>
            </Link>
          )}
          <Button onClick={handleLikeToFav}>Add to Favorites</Button>
          <Button onClick={emailButton}>Adopt Me!</Button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
