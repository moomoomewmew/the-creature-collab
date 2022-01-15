import React from "react";
import { Link } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = (props) => {

    return (
        <nav >
            <Link className="nav" to="/">Home</Link>
            <Link className="nav" to="/newaccount">Create Account</Link>
            <Link className="nav" to="/login">Login</Link>
        </nav>
    )
}

export default Navbar