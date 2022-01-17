import React from 'react'

const ProfileCard = (props) => {
  
  return (
      
    <div className="profile-card" onClick={props.onClick}>
        <img className = 'thumbnail-img' src={props.image} alt="profile picture"/> 
      <div className="info-wrapper flex-row space">
        <h3>{props.name}</h3>
      </div>
    </div>
    
  )
}

export default ProfileCard