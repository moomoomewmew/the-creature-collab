import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from '../services/api'
import { DeleteUser } from "../services/Auth";





export default function DeleteAccount(props) {
    const navigate = useNavigate()



    const deleteAccount = async () => {
        const response = await axios.delete(`${BASE_URL}/users/${props.userId}`);

    };



    const confirmDeletion = (e) => {
        e.preventDefault();
        const confirmDeletion = window.confirm(`Are you sure you want to delete ${props.user.characterName}?`)
        if (confirmDeletion) {
          deleteAccount()
        }
      }

    const handleSubmit = async (e) => {
        e.preventDefault()
        confirmDeletion()
        navigate(`/`)

    }


    return (

        <div>

                <button  onClick={handleSubmit}>
                    Delete Account
                </button>
        </div>

    )





}