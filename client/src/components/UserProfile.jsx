
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import { BASE_URL } from "../globals/index";




const ProfileView = (props) => {
    let detailsArray = [];
    const [userDetails, setUserDetails] = useState(detailsArray);

const getDetails = async (user) => {
    const response = await axios.get(`${BASE_URL}/${window.location.pathname}`);
        setUserDetails(response.data);
  };


  useEffect(() => {
    getDetails();
  }, []);
  
 

return (
<div className="profile-layout-grid">
    <div className="name-and-pic">
        <h1 className="name"> {userDetails.userName} </h1>
        <img className = "profilePicture" src = {userDetails.profilePic} alt={userDetails.name}/>
    </div>
    <div className= "details">
        <h3>pronouns: {userDetails.pronouns}</h3>
        <h3> alias: {userDetails.characterName}</h3>
        <h3>location: {userDetails.city}</h3>
        <h3>bio: {userDetails.bio}</h3>
        <h3>moaral allignment: {userDetails.moralAllignment}</h3>
    </div>   
    <div className="user-events">
        <h3>Event Host: {userDetails.events}</h3>
        <h3>Attending: {userDetails.events}</h3>
    </div>
</div>
)
}

export default ProfileView