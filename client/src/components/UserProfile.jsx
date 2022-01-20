
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL } from "../globals/index";
import EventForm from "./EventForm";




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
                <img className="profilePicture" src={userDetails.profilePic} alt={userDetails.name} />
            </div>
            <div className="details">
                <h3>Pronouns: {userDetails.pronouns}</h3>
                <h3> Alias: {userDetails.characterName}</h3>
                <h3>Location: {userDetails.city}</h3>
                <h3>Bio: {userDetails.bio}</h3>
                <h3>Moral alignment: {userDetails.moralAlignment}</h3>
            </div>
            <div className="user-events">
                <h3>Event Host: {userDetails.events}</h3>
                <h3>Attending: {userDetails.events}</h3>
            </div>
        </div>
    )
}

export default ProfileView