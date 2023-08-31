import React from "react";
import "./PetBio.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useParams } from 'react-router-dom';
// import { getCat } from '../../services/cats';

export default function PetBio({ pet }) {
  // const [pet, setPet] = useState([]);
  // const { id } = useParams();

  // useEffect(() => {
  //   const fetchPet = async () => {
  //     const pet = await getCat(id);
  //     setPet(pet);
  //   }
  //   fetchPet();
  // }, [id]);

  return (
    <div className="pet-bio-container">
      <div className="pet-bio-header">
        {pet.animal_type === "Dog" ? (
          <Link to={"/allDogs"}>
            <button>Back</button>
          </Link>
        ) : (
          <Link to={"/allCats"}>
            <button>Back</button>
          </Link>
        )}
      </div>
      <div className="pet-bio-image>">
        <img src={pet.image} alt={pet.breed} />
      </div>

      <div className="pet-info-column">
        <h1 className="name-header">Name:</h1> {pet.name}
        <p>Status:</p> {pet.status}
        <p>Breed:</p> {pet.breed}
        <p>Approximate Age:</p> {pet.age}
        <p>Gender:</p> {pet.gender}
        <h1 className="name-footer">About {pet.name}</h1> {pet.description}
      </div>

      <div className="buttons">
        <button>Favorite</button>
        <button>I'm interested!</button>
      </div>
    </div>
  );
}
