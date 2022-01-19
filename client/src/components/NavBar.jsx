import React from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const user = props.user
    const authenticated = props.authenticated

    if (user && authenticated) {
        return (
            <nav >
                <Link className="nav" to="/">Creature Collab</Link>
                <div className="login_and_CA">
                    <Link className="create-account-button" to="/newaccount">Create Account</Link>
                    <Link className="login-button" to="/login">Login</Link>
                    <Link className="profile-button" to='/profiles'>Members</Link>

                </div>
            </nav>
        )
    } else {
        return (
            <nav >
                <Link className="nav" to="/">Creature Collab</Link>
                <div className="login_and_CA">
                    <Link className="create-account-button" to="/newaccount">Create Account</Link>
                    <Link className="login-button" to="/login">Login</Link>
                    <Link className="profile-button" to='/profiles'>Members</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar