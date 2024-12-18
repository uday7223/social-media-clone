import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:5000/login", {
                username,
                password,
            });

            if (response.status === 200) {
                const user = response.data.user; // Updated to match backend
                localStorage.setItem('currentUser', JSON.stringify({ id: "uday", name: user.username })); // Save current user

                navigate('/postlist');
            }
        } catch (err) {
            if (err.response && err.response.status === 401) {
                setError('Invalid username or password.');
            } else {
                setError('Failed to log in. Please try again later.');
            }
        }
    };

    return (
        <div className="login-con w-25 container border rounded p-5 my-5">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="btn btn-primary" type="submit">
                    Login
                </button>
                <button
                    type="button"
                    className="btn border ms-4 px-4 py-2"
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
                {error && <p className="text-danger mt-3">{error}</p>} {/* Styled error message */}
            </form>
        </div>
    );
};

export default Login;
