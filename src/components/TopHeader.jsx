import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import LogoutModal from './modals/LogoutModal';
import ProfilePage from './profile/ProfilePage';
import img6 from '../assets/profileImages/img6.svg'

const TopHeader = () => {

    const [showProfileModal, SetshowProfileModal]=useState(false)
    const user = JSON.parse(localStorage.getItem('currentUser'));


   
    
  
    return (
        <>
        <div className="topHeader">
            <div className="topHeader-con">
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 ">
                    <div className="container-fluid ">
                        <Link className="navbar-brand logo" to="#">POST IT!</Link>
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
                                        // style={{ pointerEvents: user ? 'auto' : 'none', opacity: user ? 1 : 0.5 }}

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
                         
                                <li className="nav-item profileIcon">
                                <NavLink
                                        onClick={() => SetshowProfileModal((prev)=>!prev)}> <img src={img6} alt="" className='me-4'/>
                                        
                           </NavLink>
                                   
                           
                          
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                </nav>
            </div>
          
        </div>
        <ProfilePage
                                   showProfileModal={showProfileModal} SetshowProfileModal={SetshowProfileModal}
                           />
            
        </>

        
    






    )
}

export default TopHeader