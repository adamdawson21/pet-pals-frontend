import React, { useState, useEffect } from 'react';
import './Profile.css'; 
import { getUsers } from '../../services/users';
import { deleteLikedPost } from '../../services/dogs'
import { getPosts } from '../../services/cats';

const UserProfile = ({ user }) => {
  const [favorites, setFavorites] = useState([]);
  const [likes, setLikes] = useState([]);
  const [users, setUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState([])

  console.log("Like:", likes)
  console.log("LoggedUser:", loggedUser)
  console.log("Favorites:", favorites[0])
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    // After users state is updated, get the logged user
    if (users.length > 0) {
      getLoggedUser(user?.id);
    }
  }, [users, user ]);

  const fetchUsers = async () => {
    const usersFetched = await getUsers();
    setUsers(usersFetched);
  };


  const getLoggedUser = (id) => {
    const loggedUser = users.filter((userObj) => userObj.id == id);
    setLoggedUser(loggedUser);
    // Update the favorites state with the loggedUser
    setLikes(loggedUser[0].likes);
  };

  useEffect(() => {
    // Fetch all liked posts and store them in favorites
    const fetchLikedPosts = async () => {
      const likedPosts = [];
      for (const like of likes) {
        const post = await fetchPetById(like.post);
        likedPosts.push(post);
      }
      setFavorites(likedPosts);
    };

    if (likes.length > 0) {
      fetchLikedPosts();
    }
  }, [likes]);

  const fetchPetById = async (id) => {
    const pet = await getPosts(id);
    return pet;
  };

  const handleDelete = async (id) => {
    try {
      const likeToDelete = likes.find((like) => like.post === id);
  
      if (likeToDelete) {
        // Delete the liked post on the server using its id
        await deleteLikedPost(likeToDelete.id);
  
        // Remove the liked post from the likes state
        const updatedLikes = likes.filter((like) => like.id !== likeToDelete.id);
        setLikes(updatedLikes);
      }
    } catch (error) {
      console.error("Error deleting liked post:", error);
      // Handle the error here, e.g., display an error message to the user
    }
  };

  return (
    <div className="user-profile">
      <h1>Welcome, {user?.username}!</h1>
      <div className="user-info">
      <div className="user-avatar">
        <img src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-3.jpg" alt="Profile" />
      </div>
        <div className="user-details">
          <p> Name:{users.first_name}</p>
      </div>
    </div>
      <div className="user-favorites">
        <h1>Favorite Pals</h1>
        <div className="favorite-images">
            {favorites?.map((favorite, index) => (
              <div className="favorite-image" key={index}>
                <img src={favorite.image} alt={favorite.name} />
                <div className="image-info">
                  <p><b>Name:</b> {favorite.name}</p>
                  <p><b>Age:</b> {favorite.age}</p>
                  <p><b>Description:</b> {favorite.description}</p>
                </div>
                <button onClick={() => handleDelete(favorite.id)}> Remove </button>
              </div>
            ))}
          </div>
      </div>
    </div>
  );
};

export default UserProfile;
