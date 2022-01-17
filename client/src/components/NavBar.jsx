import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <nav >
            <Link className="nav" to="/">Creature Collab</Link>
            <div className="login_and_CA">
                <Link className="nav" to="/newaccount">Create Account</Link>
                <Link className="nav" to="/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar