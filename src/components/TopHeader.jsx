import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopHeader = () => {

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/login');

    }
    return (
        <>
            <div className="topHeader">
                <div className="topHeader-con pt-1">
                <div className="logo"></div>
                <div className="header-fields">
                    <ul className='d-flex gap-5 justify-content-end me-5'>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li onClick={handleClick}>Logout</li>
                    </ul>
                </div>
                </div>
            </div>

        </>
    )
}

export default TopHeader