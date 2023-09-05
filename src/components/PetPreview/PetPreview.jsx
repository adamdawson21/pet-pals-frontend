import React from 'react';
import { Link } from 'react-router-dom';
import './PetPreview.css';

export function PetPreview({ breed }) {
  const ageLabel = breed.age === 1 ? 'YEAR' : 'YEARS';

  return (
      <div className="custom-card">
        <Link to={`/alldogs/${breed.id}`}>
          <img
            src={breed.image}
            alt={breed.name}
            className="card-img"
          />
          <div className="card-content">
          <div className="card-text">
            <h6 className="bold">{breed.name}</h6>
            <p>{breed.age} {ageLabel}</p>
          </div>
          <button className='preview-button'>See More</button>
        </div>
      </Link>
    </div>
  );
}
