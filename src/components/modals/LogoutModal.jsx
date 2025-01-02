import React from 'react'
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ showModal, handleClose, handleLogout }) => {
    if (!showModal) return null;

  return (
<>
        <div className="logout">
            <div className="logout-con">

            <div className="modal-backdrop">
            <div className="modal-content">
                <h4>Confirm Logout</h4>
                <p>Are you sure you want to logout?</p>
                <div className="modal-actions">
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    <button className="btn btn-secondary" onClick={handleClose}>Cancel</button>
                </div>
            </div>
        </div>
                {/* <p>are you sure ?</p>
                <div>
                    <button className='btn' onClick={handleLogout}>Yes</button>
                    <button className='btn'> No</button>
                </div> */}
            </div>
        </div>


</>  )
}

export default LogoutModal