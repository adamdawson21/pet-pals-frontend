import React, { useEffect, useState } from 'react';
import { getCats } from '../../services/cats';
import { PetPreview } from '../../components/PetPreview/PetPreview';
import './AllCats.css';

const AllCats = () => {
  const [catBreeds, setCatBreeds] = useState([]);

  useEffect(() => {
    fetchCatBreedsData();
  }, []);

  const fetchCatBreedsData = async () => {
    try {
      const fetchedCatBreeds = await getCats();
      setCatBreeds(fetchedCatBreeds);
    } catch (error) {
      console.error('Error fetching dog breeds:', error);
    }
  };

  return (
    <div>
      {/* <h1>All Cats</h1> */}
      <div className='card-container'>
        {catBreeds.map((breed) => (
          <PetPreview key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default AllCats;
