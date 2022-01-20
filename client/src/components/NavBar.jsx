import React from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const authenticated = props.authenticated

    if (authenticated) {
        return (
            <div>
                <nav >
                    <Link className="nav" to="/">Creature Collab</Link>
                    <div className="login_and_CA">
                        <Link className="create-account-button" to="/dashboard">Dashboard</Link>
                        <Link className="login-button" onClick={props.handleLogOut} to="/">Logout</Link>
                        <Link className="profile-button" to='/profiles'>Members</Link>

                    </div>
                </nav>
                <nav>
                    <div>
                    <Link classname="about-safety" to="/safety">Community Guidelines</Link>
                    <Link classname="about-safety" to="/about">About CC</Link>
                    </div>
                </nav>
            </div>
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