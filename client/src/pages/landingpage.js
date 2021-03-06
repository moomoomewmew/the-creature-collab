import React from 'react'
import '../styles/landingpage.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Landingpage() {

    const navigate = useNavigate()

    return (
        <div className='welcome'>
            <div className='welcome-description'>
                <h1>An online platform for your RPG character to connect and interact with other characters. </h1>
                <p>Login as your character and find video game, board game, LARP, cosplay, and other fun events near you! You can also host an event and get connected to the perfect characters to join your campaign. </p>
                <Link to = '/newaccount'>Get Started</Link>
            </div>
            <div>
                <img className='pub-pic' src='https://img.search.brave.com/8QLfDeGXo2RFzU6FcMuUqRVHPqC_vyvFeusCuTLT8S8/fit/1200/1079/ce/1/aHR0cDovL2RuZHNw/ZWFrLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wMy8x/OTIweDEwNzktNDUx/NTE4NC1wb2ludGVk/LWVhcnMtZmFudGFz/eS1hcnQtdGF2ZXJu/LWNhbmRsZXMuanBn'></img>
            </div>
        </div >

    )
}




