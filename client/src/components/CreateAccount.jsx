import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RegisterUser } from '../services/Auth'

const iState = {
  userName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

export default function Register(props) {
  const navigate = useNavigate()
  const [formValues, setFormValues] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      userName: formValues.userName,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues(iState)
    navigate('/login')
  }

  return (
    <div className="register-form">
      <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
          <div className="input-wrapper">
            {/* <label htmlFor="Username">username</label> */}
            <input
              onChange={handleChange}
              name="userName"
              type="text"
              placeholder="Username"
              value={formValues.userName}
              required
            />
          </div>
          <div className="input-wrapper">
            {/* <label htmlFor="email">Email</label> */}
            <input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Hpotter@hogwarts.edu"
              value={formValues.email}
              required
            />
          </div>

          <div className="input-wrapper">
            {/* <label htmlFor="password">Password</label> */}
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder='Password'
              value={formValues.password}
              required
            />
          </div>
          <div className="input-wrapper">
            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
            <input
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder='Confirm Passward'
              value={formValues.confirmPassword}
              required
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
            }
          >
            Register
          </button>
        </form>
      </div>
    </div>
  )
}
