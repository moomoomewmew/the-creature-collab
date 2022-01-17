
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";




const ProfileView = (props) => {
    let detailsArray = [];
    const [userDetails, setUserDetails] = useState(detailsArray);

const getDetails = async (user) => {
    const response = await axios.get(`http://localhost:3001/api/${window.location.pathname}`);
        setUserDetails(response.data);
  };


  useEffect(() => {
    getDetails();
  }, []);
  
 

return (
<div className="profile-layout-grid">
    < img className = "profilePicture" src = {userDetails.profilePic} alt={userDetails.name}/>
    <h1> {userDetails.userName} </h1>
    <div className= "details">
        <h3> alias: {userDetails.characterName}</h3>
    </div>   
</div>
)
}

export default ProfileView