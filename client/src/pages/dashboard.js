import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { CheckSession } from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from "../globals/index";



export default function Dashboard(props) {
   const navigate = useNavigate()
    const userId = props.user.id
    let userDetailsArray = [];
    const [userDetails, setUserDetails] = useState(userDetailsArray);
    // const [returnId, setReturnId] = useState(props.user.id);
    const [updatedUser, setUpdatedUser] = useState({
        characterName: '',
        pronouns: '',
        race: '',
        moralAllignment: '',
        bio: '',
        profilePic: '',
        city: ''

      })
    
    const getUserDetails = async (user) => {
        const response = await axios.get(`${BASE_URL}/users/info/${userId}`);
        setUserDetails(response.data);
      };
      const updateUser = () =>{
        // e.preventDefault();
        const newUser = {
          ...updatedUser
        }; 
         axios
        .put(`${BASE_URL}/users/${userDetails.id}`, newUser )
        .then(() => {
        getUserDetails()   
        setUpdatedUser({
            characterName: '',
            pronouns: '',
            race: '',
            moralAllignment: '',
            bio: '',
            profilePic: '',
            city: ''
        })
    })
    
      };

      const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
      }
      const handleSubmit = async () => {
        updateUser()
        console.log(updatedUser)
        props.setUser(userDetails.user)
        navigate (`/users/${userDetails.id}`)
        
      }
    
      useEffect(() => {
        CheckSession()
        getUserDetails();
        props.setUser(props.user)
      }, []);

        return (
            <div>

                <h1> {userDetails.userName}</h1>
                <h1> {userDetails.email}</h1>
                <h1> {userDetails.pronouns}</h1>
                {/* <h1> {userDashboard.email}</h1> */}
            <div className="register-form">
            <div className="card-overlay centered">
              <form className="col" onSubmit={handleSubmit}>
              picture:
              <div className="input-wrapper">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    onChange={handleChange}
                    type="text"
                    name="profilePic"
                    placeholder='image url'
                    value={updatedUser.profilePic}
                    required
                  />
                </div>
                Character:
                <div className="input-wrapper">
                  {/* <label htmlFor="Username">username</label> */}
                  <input
                    onChange={handleChange}
                    name="characterName"
                    type="text"
                    placeholder={userDetails.characterName}
                    value={updatedUser.characterName}
                    required
                  />
                </div>
                pronouns:
                <div className="input-wrapper">
                  {/* <label htmlFor="email">Email</label> */}
                  <input
                    onChange={handleChange}
                    name="pronouns"
                    type="text"
                    placeholder="she/he/they/"
                    value={updatedUser.pronouns}
                    required
                  />
                </div>
                Bio:
                <div className="input-wrapper">
                  {/* <label htmlFor="password">Password</label> */}
                  <input
                    onChange={handleChange}
                    type="text"
                    name="race"
                    placeholder='what type of creature are you'
                    value={updatedUser.race}
                    required
                  />
                </div>
                {/* location
                <div className="input-wrapper">
                  {/* <label htmlFor="password">Password</label> */}
                  {/* <input
                    onChange={handleChange}
                    type="text"
                    name="location"
                    placeholder='where are you?'
                    value={updatedUser.city}
                    required
                  /> */} 
                {/* </div> */}
                <button>
                  add you info
                </button>
              </form>
            </div>
        </div>
    </div>
        )
       
    }


