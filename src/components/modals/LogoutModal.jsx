import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutModal = ({ showModal, handleClose, handleLogout }) => {
  if (!showModal) return null;

  return (
    <>
      <div className="modal fade" id="logoutModal" tabIndex="-1" aria-labelledby="logoutModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="logoutModalLabel">Confirm Logout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to logout?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" onClick={handleLogout}>Logout</button>
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModal;