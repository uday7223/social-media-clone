import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const TopHeader = () => {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear(); // Clears all items in localStorage
        navigate('/login');

    }
    return (


        <div className="topHeader">
            <div className="topHeader-con">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand logo" to="/">POST IT!</Link>
                        <div className="collapse navbar-collapse header-fields">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        to="/landingpage"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        to="/dashboard"
                                    >
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        to="/about"
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li className="nav-item" onClick={handleLogout}>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                                        to="/logout"
                                    >
                                        Logout
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>







    )
}

export default TopHeader