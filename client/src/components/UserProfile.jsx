
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";




const ProfileView = () => {
    let detailsArray = [];
    const [userDetails, setUserDetails] = useState(detailsArray);

const getDetails = async (profile) => {
    const response = await axios.get(`http://localhost:3001/api/users/1`);
    console.log(response)
        setUserDetails(response.data);
  };


  useEffect(() => {
    getDetails();
  }, []);
  
 

return (
<div >
    <h1> {userDetails.userName} </h1>
    <div className= "details">
        <h3> Name: {userDetails.range}</h3>
        < img className = "profilePicture" src = {userDetails.image} alt={userDetails.name}/>
    </div>   
</div>
)
}

export default ProfileView