import React, { useState } from 'react';
import './Profile.css'; // You'll need to create a CSS file for styling

const UserProfile = () => {
  const [favorites, setFavorites] = useState([
    'path/to/dog-image.jpg',
    'path/to/another-dog-image.jpg',
  ]);

  const handleDeleteFavorite = (index) => {
    const updatedFavorites = favorites.filter((_, i) => i !== index);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="user-profile">
      <h1>Welcome, User!</h1>
      <div className="user-info">
      <div className="user-avatar">
        <img src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-3.jpg" alt="Profile" />
      </div>
        <div className="user-details">
        <p> Username: FirstNameLastName</p>
        <p> Member since: August 2023</p>
      </div>
    </div>
      <div className="user-favorites">
        <h1>Favorite Pals</h1>
        <div className="favorite-images">
          {favorites.map((imagePath, index) => (
            <div className="favorite-image" key={index}>
              <img src="https://media-be.chewy.com/wp-content/uploads/2022/09/27095535/cute-dogs-pembroke-welsh-corgi.jpg" alt="Favorite Dog" />
              <div className="image-info">
              <p> <b> Name:</b> Duke</p>
              <p> <b> Age:</b> 1yo </p>
                <p> <b>Description:</b> a bundle of joy wrapped in fur! With a wagging tail and soulful eyes, Max is your go-to cuddler and adventure pal. His caramel-colored fur is a soft invitation for pets, and his heart radiates pure, unwavering love. Whether he's chasing his tail or dozing in the sun, Max embodies the essence of a loyal, lovable companion</p>
                </div>
              <button onClick={() => handleDeleteFavorite(index)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  
};

export default UserProfile;
