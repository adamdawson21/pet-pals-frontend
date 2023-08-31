import React, { useEffect, useState } from 'react';
import { getDogs } from '../../services/dogs';
import { PetPreview } from '../../components/PetPreview/PetPreview';
import DogHero from '../../components/DogHero/DogHero';
import './AllDogs.css';

const AllDogs = () => {
  const [dogBreeds, setDogBreeds] = useState([]);

  useEffect(() => {
    fetchDogBreedsData();
  }, []);

  const fetchDogBreedsData = async () => {
    try {
      const fetchedDogBreeds = await getDogs();
      setDogBreeds(fetchedDogBreeds);
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
    }
  };

  return (
    <div>
      <DogHero />
      <div className="card-container">
        {dogBreeds.map((breed) => (
          <PetPreview key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default AllDogs;

