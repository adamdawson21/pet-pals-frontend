import React, { useEffect, useState } from 'react';
import { getDogs } from '../../services/dogs';
import { PetPreview } from '../../components/PetPreview/PetPreview';
import DogHero from '../../components/DogHero/DogHero';
import './AllDogs.css';

const AllDogs = () => {
  const [dogBreeds, setDogBreeds] = useState([]);
  const [selectedGender, setSelectedGender] = useState('all');
  const [selectedAge, setSelectedAge] = useState('all');

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

  const filterDogs = (breed) => {
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
      <DogHero />
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
        {dogBreeds.map((breed) => (
          filterDogs(breed) && <PetPreview key={breed.id} breed={breed} />
        ))}
      </div>
    </div>
  );
};

export default AllDogs;







{/* import React, { useEffect, useState } from 'react';
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

export default AllDogs; */}
