import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'
import ProfileCard from '../components/ProfileCard';


const ProfileDisplay = (props) => {
  const navigate = useNavigate()
  let userProfilesArray = [];
  const [userProfiles, setUserProfiles] = useState(userProfilesArray);
  const showUserProfiles = (userProfiles) => {};



  const getUserProfiles = async () => {
    const response = await axios.get('http://localhost:3001/api/users');
    console.log(response.data)
    setUserProfiles(response.data);
  };
//   userProfiles.sort((a, b) => a.name.localeCompare(b.name))

  
  useEffect(() => {
    getUserProfiles();
  }, []);

console.log('banana')

  return (
    <div className="">
        {userProfiles.map((user) => (
        <ProfileCard
          key={user.id}
          {...user}
          name = {user.userName}
          image={user.image}
          id = {user._id}
          onClick= {()=> navigate(`/user/${user._id}`)
        }
        />
      ))} 
      
     
    

    </div>
  );
  
} 

export default ProfileDisplay