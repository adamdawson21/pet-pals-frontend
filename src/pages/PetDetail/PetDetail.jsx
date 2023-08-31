import React from "react";
import PetBio from "../../components/PetBio/PetBio";
import CommentSection from "../../components/CommentSection/CommentSection";
import { useParams } from "react-router-dom";
import { getCat } from "../../services/cats";
import { useState, useEffect } from "react";

export default function PetDetail() {
  const [pet, setPet] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchPet = async () => {
      const pet = await getCat(id);
      console.log("pet: ", pet);
      setPet(pet);
    };
    fetchPet();
  }, [id]);

  return (
    <div>
      <PetBio pet={pet} />
      <CommentSection comments={pet.comments} />
    </div>
  );
}
