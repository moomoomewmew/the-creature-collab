import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import ProfileCard from '../components/ProfileCard';
import { BASE_URL } from "../globals/index";
import '../styles/profiles.css';


const ProfileDisplay = (props) => {
  const navigate = useNavigate()
  let userProfilesArray = [];
  const [userProfiles, setUserProfiles] = useState(userProfilesArray);




  const getUserProfiles = async (user) => {
    const response = await axios.get(`${BASE_URL}/users`);
    setUserProfiles(response.data);
  };
//   userProfiles.sort((a, b) => a.name.localeCompare(b.name))

  
  useEffect(() => {
    getUserProfiles();
  }, []);


  return (
    <div className="thumbnail-grid">
        {userProfiles.map((user) => (
        <ProfileCard
          key={user.id}
          {...user}
          name = {user.userName}
          image={user.profilePic}
          id = {user._id}
          onClick= {()=> navigate(`/users/info/${user.id}`)
        }
        />
      ))} 
      
     
    

    </div>
  );
  
} 

export default ProfileDisplay