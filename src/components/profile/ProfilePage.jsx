import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EditProfileModal from '../modals/EditProfileModal';
import img2 from '../../assets/profileImages/img3.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import LogoutModal from '../modals/LogoutModal';

const ProfilePage = ({ showProfileModal,SetshowProfileModal  }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const userData = JSON.parse(localStorage.getItem('currentUser'));
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/profile/${userData.id}`);
                setUser(res.data);
            } catch (error) {
                console.error("Error fetching profile:", error);
                setUser({});
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [userData, navigate]);

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
        setShowModal(false);
        SetshowProfileModal(false)
    };

    // const handleProfileClick = () => {
    //     if (user) {
    //         SetshowProfileModal((prev) => !prev);
    //     } else {
    //         alert('Please log in first.');
    //     }

    if (!showProfileModal) return null;

    // if (loading) {
    //     return<><div className="loader-con d-flex">
    //          <div className="text-center mt-5 loader" ></div> <p> Please login to proceed !</p></div></>;
    // }

    if (!user) {
        return <div className="text-center mt-5">Please login to proceed !</div>;
    }

    return (
        <div className="container profile-page mt-5">
            <div className="card p-4 text-center">
                <img src={user.profile_picture || img2} alt="Profile" className="rounded-circle" width="150" />
                <h2 style={{ color: "black" }}>{user.username || 'Guest'}</h2>
                <p>{user.bio || "No bio available"}</p>
                <button className="btn btn-primary" onClick={() => setShowModalEdit(true)}>
                    Edit Profile
                </button>
                <button
                    className="btn btn-dark mt-2"

                    onClick={() => setShowModal(true)}
                >
                    Logout
                </button>
            </div>
            <LogoutModal
                showModal={showModal}
                handleClose={() => setShowModal(false)}
                handleLogout={handleLogout}
            />
            {showModalEdit &&
                <EditProfileModal
                    user={user}
                    onClose={() => setShowModalEdit(false)}
                    onUpdate={(updatedUser) => setUser(updatedUser)}
                />
            }
        </div>
    );
};

export default ProfilePage;
