import React, { useEffect, useState } from 'react';
import { getCats } from '../../services/cats';
import { PetPreview } from '../../components/PetPreview/PetPreview';
import './AllCats.css';
import CatHero from '../../components/CatHero/CatHero';

const AllCats = () => {
  const [catBreeds, setCatBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');

  useEffect(() => {
    fetchCatBreedsData();
  }, []);

  const fetchCatBreedsData = async () => {
    try {
      const fetchedCatBreeds = await getCats();
      setCatBreeds(fetchedCatBreeds);
    } catch (error) {
      console.error('Error fetching cat breeds:', error);
    }
  };

  const filterCats = (breed) => {
    const selectedGenderValue = selectedGender === 'all' ? '' : selectedGender.toLowerCase();
    const selectedAgeValue = selectedAge === 'all' ? '' : selectedAge;

    if (
      (selectedGenderValue === '' || breed.gender.toLowerCase() === selectedGenderValue) &&
      (selectedAgeValue === '' || (selectedAgeValue === 'older' && breed.age > 2) || (selectedAgeValue === 'under' && breed.age <= 2))
    ) {
      return true;
    }

    return false;
  };

  return (
    <div>
      <CatHero />
      <div className="filter-container">
        <label htmlFor="genderFilter">Gender:</label>
        <select
          id="genderFilter"
          onChange={(e) => setSelectedGender(e.target.value)}
          value={selectedGender}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label htmlFor="ageFilter">Age:</label>
        <select
          id="ageFilter"
          onChange={(e) => setSelectedAge(e.target.value)}
          value={selectedAge}
        >
          <option value="all">All Ages</option>
          <option value="older">Older than 2 Years</option>
          <option value="under">2 Years and Under</option>
        </select>
      </div>

      <div className="card-container">
        {catBreeds.map((breed) => (
          filterCats(breed) && <PetPreview key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default AllCats;










{/* import React, { useEffect, useState } from 'react';
import { getCats } from '../../services/cats';
import { PetPreview } from '../../components/PetPreview/PetPreview';
import './AllCats.css';
import CatHero from '../../components/CatHero/CatHero';

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
      <CatHero />
      <div className="card-container">
        {catBreeds.map((breed) => (
          <PetPreview key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default AllCats; */}
