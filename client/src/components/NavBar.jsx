import React from "react";
import { Link } from 'react-router-dom'

const Navbar = (props) => {

    const authenticated = props.authenticated

    if (authenticated) {
        return (
            <div>
                <nav >
                    <Link className="upper-left transform" to="/">Creature Collab</Link>
                    <div className="login_and_CA">
                        <Link className="create-account-button" to="/dashboard">Dashboard</Link>
                        <Link className="login-button" onClick={props.handleLogOut} to="/">Logout</Link>
                    </div>
                </nav>
                <nav className='lower-nav'>

                    <div className="lower-left">
                        <Link className="transform CG" to="/safety">Community Guidelines</Link>
                        <Link className="about-button" to="/about">About CC</Link>
                    </div>
                    <div className="lower-right">
                        <Link className="transform events-button" to="/events">Events</Link>
                    <Link className="transform members-button" to='/profiles'>Members</Link>
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
                </div>
            </nav>
        )
    }
}

export default Navbar