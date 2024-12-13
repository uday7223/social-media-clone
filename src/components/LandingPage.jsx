import React from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'

const LandingPage = () => {
    const navigate = useNavigate();

    const handleRegister=(e)=>{
        // e.preventdefault(); 
        navigate('/register');
        }
  return (
    <>
        <button onClick={handleRegister} >click here to Register</button>
    </>
)
}

export default LandingPage