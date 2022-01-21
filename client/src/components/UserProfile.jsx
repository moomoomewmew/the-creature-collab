
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals/index";
import EventForm from "./EventForm";
import '../styles/profiles.css';




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
                <h1 className="name"> {userDetails.characterName} </h1>
                <img className="profilePicture" src={userDetails.profilePic} alt={userDetails.name} />
            </div>
            <div className="details">
                Pronouns: 
                <h2>{userDetails.pronouns}</h2>
                Alias:
                <h2> {userDetails.characterName}</h2>
                Location: 
                <h2>{userDetails.city}</h2>
            </div>
            <div className="user-bio">
                <label>My Story:</label>
                <h2> {userDetails.bio}</h2>
            </div>
        </div>
    )
}

export default ProfileView