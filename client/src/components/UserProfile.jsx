
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
        <img className = "profilePicture" src = {userDetails.profilePic} alt={userDetails.name}/>
        <h1> {userDetails.userName} </h1>
    </div>
    <div className= "details">
        <h3>pronouns: {userDetails.pronouns}</h3>
        <h3> alias: {userDetails.characterName}</h3>
        <h3>city: {userDetails.city}</h3>
        <h3>creature: {userDetails.race}</h3>
    </div>   
</div>
)
}

export default ProfileView