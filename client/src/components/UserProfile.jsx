
import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";




const ProfileView = (props) => {
    let detailsArray = [];
    const [userDetails, setUserDetails] = useState(detailsArray);

const getDetails = async (user) => {
    const response = await axios.get(`http://localhost:3001/api/${window.location.pathname}`);
    console.log(response.data)
        setUserDetails(response.data);
  };


  useEffect(() => {
    getDetails();
  }, []);
  
 

return (
<div >
    <h1> {userDetails.userName} </h1>
    <div className= "details">
        <h3> Name: {userDetails.userName}</h3>
        < img className = "profilePicture" src = {userDetails.image} alt={userDetails.name}/>
    </div>   
</div>
)
}

export default ProfileView