import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from '../services/Auth';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../globals/index';
import EventForm from '../components/EventForm';

export default function Dashboard(props) {
  const navigate = useNavigate();
  let userId = props.user.id;
  let userDetailsArray = [];
  const [userDetails, setUserDetails] = useState(userDetailsArray);
  const [returnId, setReturnId] = useState(props.user.id);
  const [updatedUser, setUpdatedUser] = useState({
    characterName: '',
    userName: '',
    pronouns: '',
    race: '',
    moralAllignment: '',
    bio: '',
    profilePic: '',
    city: ''
  });

  const getUserDetails = async (user) => {
    const response = await axios.get(`${BASE_URL}/users/info/${userId}`);
    setUserDetails(response.data);
  };

  const updateUser = () => {
    // e.preventDefault();
    const newUser = {
      ...updatedUser
    };
    axios.put(`${BASE_URL}/users/${userId}`, newUser);
    // .then((response) => setReturnId(response.data))
    setUpdatedUser({
      characterName: '',
      userName: '',
      pronouns: '',
      race: '',
      moralAllignment: '',
      bio: '',
      profilePic: '',
      city: ''
    });
  };

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    updateUser();
    // console.log(updatedUser)
    // props.setUser(userDetails)
    // navigate (`/users/${userId}`)
    // getUserDetails()
  };

  useEffect(() => {
    CheckSession();
    getUserDetails();
    props.setUser(props.user);
  }, []);

  return (
    <div className="dashboard">
      <div className="basic-info">
        <img
          className="profilePicture"
          src={userDetails.profilePic}
          alt="profile picture"
        />
        <h1> {userDetails.userName}</h1>
        <h1>
          {' '}
          user email: <br /> {userDetails.email}
        </h1>
        <h1>
          {' '}
          pronouns: <br />
          {userDetails.pronouns}
        </h1>
        <h1>
          Bio:
          <br /> {userDetails.bio}
        </h1>
      </div>
      <div className="info-form">
        {' '}
        Update Character
        <div className="card-overlay centered">
          <form className="col" onSubmit={handleSubmit}>
            picture:
            <div className="input-wrapper">
              {/* <label htmlFor="password">Password</label> */}
              <input
                onChange={handleChange}
                type="text"
                name="profilePic"
                placeholder="image url"
                value={updatedUser.profilePic}
                required
              />
            </div>
            Username:
            <div className="input-wrapper">
              {/* <label htmlFor="password">Password</label> */}
              <input
                onChange={handleChange}
                type="text"
                name="userName"
                placeholder={userDetails.userName}
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
              <textarea
                onChange={handleChange}
                type="text"
                name="bio"
                placeholder={userDetails.bio}
                value={updatedUser.bio}
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
            <button>update your character</button>
          </form>
        </div>
      </div>
      <div className="event-form">
        <EventForm user={props.user} />
      </div>
    </div>
  );
}
