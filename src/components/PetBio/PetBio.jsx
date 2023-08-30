import React from 'react'
import './PetBio.css'

export default function PetBio() {
  return (
    <div className="pet-bio-container">
      <div className="pet-bio-img"><img src="cutedog.com" /></div>
      <h1>Pet Name</h1>
      <p>Status:</p>
      <p>Approximate Age:</p>
      <p>Bio</p>

      <div className="buttons">
        <button>Favorite</button>
        <button>I'm interested!</button>
      </div>

      <div className="comment-section">

      </div>
      
    </div>
  )
}
