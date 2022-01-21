import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CheckSession } from '../services/Auth';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from "../globals/index";
import DeleteAccount from '../components/DeleteAccount';
import '../styles/profiles.css';


export default function Dashboard({ authUser, ...props }) {
    const navigate = useNavigate()
    let userId = authUser.id
    let userDetailsArray = [];
    const [userDetails, setUserDetails] = useState(userDetailsArray);
    const [updatedUser, setUpdatedUser] = useState({
        characterName: '',
        userName: '',
        pronouns: '',
        race: '',
        moralAllignment: '',
        bio: '',
        profilePic: '',
        city: ''

    })
    const getUserDetails = async (user) => {
        const response = await axios.get(`${BASE_URL}/users/info/${authUser.id}`);
        setUserDetails(response.data);

    };
    const updateUser = () => {
        const newUser = {
            ...updatedUser
        };
        axios
            .put(`${BASE_URL}/users/${userId}`, newUser)
            .then = () => {
        setUpdatedUser({
            characterName: '',
            userName: '',
            pronouns: '',
            race: '',
            moralAllignment: '',
            bio: '',
            profilePic: '',
            city: ''
        })
    }

        getUserDetails()
    };

    const handleChange = (e) => {
        setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value })
    }
    const handleSubmit = async (e) => {
        updateUser()
        navigate(`/users/info/${userId}`)

    }

    useEffect(() => {
        CheckSession()
        getUserDetails();
    }, []);


    return (
        <div className='dashboard'>
            <div className='dash-pic'>
                <img className='dashboardPicture' src={userDetails.profilePic} alt='profile picture' />
                <h1 className='user-name'> {userDetails.characterName}</h1>
            </div>
            <div className='basic-info'>


                <h1> your email: <br /> {userDetails.email}</h1>
                <h1> your pronouns: <br />{userDetails.pronouns}</h1>
                <h1> your about me:<br /> {userDetails.bio}</h1>
                <h1>your location: <br/> {userDetails.bio}</h1>
            </div>
            {/* <Link className='event-link' to='/events'>Add Event</Link> */}
            <div className="info-form">
                <h1>We are always changing, update your information here! </h1>
                <div className="card-overlay centered">
                    <form className="col" onSubmit={handleSubmit}>
                        Picture:
                        <div className="input-wrapper">
                            <input
                                onChange={handleChange}
                                type="text"
                                name="profilePic"
                                placeholder='image url'
                                value={updatedUser.profilePic}
                                required
                            />
                        </div>
                        What should we call you?
                        <div className="input-wrapper">
                            <input
                                onChange={handleChange}
                                name="characterName"
                                type="text"
                                placeholder={userDetails.characterName}
                                value={updatedUser.characterName}
                                required
                               
                            />
                        </div>
                        Pronouns:
                        <div className="input-wrapper">
                            <input
                                onChange={handleChange}
                                name="pronouns"
                                type="text"
                                placeholder="she/he/they/"
                                value={updatedUser.pronouns}
                                required
                                
                            />
                        </div>
                        Tell your story:
                        <div className="input-wrapper">
                            <textarea
                                onChange={handleChange}
                                type="text"
                                name="bio"
                                placeholder={userDetails.bio}
                                value={updatedUser.bio}
                                required

                            />
                        </div>
                        Location:
                        <div className="input-wrapper">
                            <input
                                onChange={handleChange}
                                type="text"
                                name="city"
                                placeholder='where are you?'
                                value={updatedUser.city}
                                required

                            />
                        </div>
                        <button>
                            update your character
                        </button>
                    </form>
                    <DeleteAccount userId={userId} />
                </div>
                <div>
                </div>
            </div>
        </div>
    )

}



