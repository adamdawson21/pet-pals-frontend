import React from 'react'
import './PetBio.css'

export default function PetBio() {
  return (
    <div className="pet-bio-container">
      <div className="pet-bio-img"><img src="cutedog.com" /></div>
      <h1>Name:</h1>
      <p>Status:</p>
      <p>Breed:</p>
      <p>Approximate Age:</p>
      <p>Gender:</p>
      <p>Description:</p>

      <div className="buttons">
        <button>Favorite</button>
        <button>I'm interested!</button>
      </div>


      </div>
  )
}
