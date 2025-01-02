import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LogoutModal from './modals/LogoutModal';

const TopHeader = () => {

    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        // Simulate logout logic
        // localStorage.removeItem('userToken');
        localStorage.clear(); // Clears all items in localStorage
        navigate('/login');  // Redirect to login page after logout
        setShowModal(false)
    };

  
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
                                <li className="nav-item">
                                    <NavLink
                                        className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} onClick={() => setShowModal(true)}> logout
                                                              
                           </NavLink>
                            <LogoutModal
                                            showModal={showModal}
                                            handleClose={() => setShowModal(false)}
                                            handleLogout={handleLogout}
                                        />  
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