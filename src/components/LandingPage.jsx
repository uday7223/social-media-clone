import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('currentUser'));



    return (
        <>
            <div className="landing-page">
                <div className="container con p-5">
                    <h2 className=' '>hey there <span>{user?.name } </span>, Welcome to POST IT !</h2> <br />
                    <p>"Where Every Post Tells a Story – Connect with <span>Friends</span>, Share Your <span>Moments</span>, and Join <span>Conversations</span> That Matter!"
                    </p>

                </div>
            </div>

        </>
    )
}

export default LandingPage