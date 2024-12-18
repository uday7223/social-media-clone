import React from 'react'
import { useNavigate } from 'react-router-dom'

const TopHeader = () => {

    const navigate = useNavigate();

    const handleClick=()=>{
        navigate('/login');

    }
    return (
        <>
            <div className="topHeader border pe-5 align-items-center  " >
                <div className="topHeader-con d-flex align-items-center justify-content-center">
                <div className="logo">
                    <p>POST IT!</p>
                </div>
                <div className="header-fields d-flex  justify-content-end">
                    <ul className='d-flex gap-5 '>
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