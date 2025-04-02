import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/styles.scss';

const EditProfileModal = ({ user, onClose, onUpdate }) => {
  const [username, setUsername] = useState(user.username);
  const [bio, setBio] = useState(user.bio);
  const [profilePicture, setProfilePicture] = useState(user.profile_picture);

  const handleSubmit = async (e) => {
    console.log("id reached" + user.user_id);

    e.preventDefault();
    const res = await axios.put(`http://localhost:5000/profile/${user.user_id}`, {
      username,
      bio,
      profile_picture: profilePicture
    });
    if (res.status === 200) {
      onUpdate({ ...user, username, bio, profile_picture: profilePicture });
      onClose();
    }
  };

  return (
    <div className="modal fade" id="editProfileModal" tabIndex="-1" aria-labelledby="editProfileModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4">
          <div className="modal-header">
            <h5 className="modal-title" id="editProfileModalLabel">Edit Profile</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Bio</label>
                <textarea
                  className="form-control"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label>Profile Picture URL</label>
                <input
                  type="text"
                  className="form-control"
                  value={profilePicture}
                  onChange={(e) => setProfilePicture(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="submit" className="btn btn-success" form="editProfileForm">Save Changes</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;