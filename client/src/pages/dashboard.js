import React, { useState, useEffect } from 'react'
import axios from 'axios';


export default function Dashboard(props) {
    let userDashboardArray = [];
    const [userDashboard, setUserDashboard] = useState(userDashboardArray);
    const [formValues, setFormValues] = useState({
        characterName: '',
        pronouns: '',
        race: '',
        moralAllignment: '',
        bio: '',
        profilePic: '',

      })
    
    const getUserDashboard = async (user) => {
        const response = await axios.get(`http://localhost:3001/api/users/info/${props.user.id}`);
        console.log(response)
        setUserDashboard(response.data);
      };

      const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
      const handleSubmit = async (e) => {
        e.preventDefault()
        setFormValues({ characterName: '', pronouns:'', race: '', moralAllignment: '', bio:'',profilePic: '' })
      }
    
      useEffect(() => {
        getUserDashboard();
      }, []);

        return (
            <div>

                <h1> {userDashboard.userName}</h1>
                <h1> {userDashboard.email}</h1>
                <h1> {userDashboard.pronouns}</h1>
                {/* <h1> {userDashboard.email}</h1> */}
            <div className="register-form">
            <div className="card-overlay centered">
              <form className="col" onSubmit={handleSubmit}>
              picture:
              <div className="input-wrapper">
                  {/* <label htmlFor="password">Password</label> */}

                  <input
                    onChange={handleChange}
                    type="file"
                    name="profilePic"
                    placeholder='image url'
                    value={formValues.profilePic}
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
                    placeholder="who are you really?"
                    value={formValues.characterName}
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
                    value={formValues.pronouns}
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
                    value={formValues.race}
                    required
                  />
                </div>
                <button>
                  add you info
                </button>
              </form>
            </div>
        </div>
    </div>
        )
       
    }


