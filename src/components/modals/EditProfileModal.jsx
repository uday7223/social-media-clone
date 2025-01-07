import React, { useState } from 'react';
import axios from 'axios';

const EditProfileModal = ({ user, onClose, onUpdate }) => {
    const [username, setUsername] = useState(user.username);
    const [bio, setBio] = useState(user.bio);
    const [profilePicture, setProfilePicture] = useState(user.profile_picture);

    const handleSubmit = async (e) => {
        console.log("id reached"+user.user_id);
        
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
        <div className="modal-backdrop">
            <div className="modal-content p-4">
                <h3>Edit Profile</h3>
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
                    <button type="submit" className="btn btn-success">Save Changes</button>
                    <button type="button" className="btn btn-secondary ms-2" onClick={onClose}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default EditProfileModal;
