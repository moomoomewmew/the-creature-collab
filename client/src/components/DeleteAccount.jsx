import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from '../services/api'
import { DeleteUser } from "../services/Auth";





export default function DeleteAccount(props) {
    const navigate = useNavigate()

    const [formValues, setFormValues] = useState({ email: '', password: '' })


    const deleteAccount = async () => {
        const response = await axios.delete(`${BASE_URL}/auth/delete/${props.userId}`);
    };

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const payload = await DeleteUser(formValues)
        setFormValues({ email: '', password: '' })
        //   props.setUser(payload)
        //   props.toggleAuthenticated(true)
        navigate(`/`)
        // deleteAccount()
    }


    return (

        <div>
            <form className="col" onSubmit={handleSubmit}>
                Email:
                <div className="input-wrapper">
                    <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        placeholder="example@example.com"
                        value={formValues.email}
                        required
                    />
                </div>
                Password:
                <div className="input-wrapper">
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        placeholder='Password'
                        value={formValues.password}
                        required
                    />
                </div>
                <button disabled={!formValues.email || !formValues.password} onClick={handleSubmit}>
                    Delete Account
                </button>
            </form>
        </div>

    )





}