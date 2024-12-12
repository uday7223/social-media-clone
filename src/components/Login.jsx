// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);

//       if (response.data.length > 0) {
//         setMessage("Login successful!");
//         navigate("/postlist")
//       } else {
//         setMessage("Invalid credentials. Please try again.");
//       }
//     } catch (error) {
//       console.error("Error logging in:", error);
//       setMessage("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input
//             type="text"
//             className="form-control"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input
//             type="password"
//             className="form-control"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//       {message && <div className="mt-3">{message}</div>}
//     </div>
//   );
// }


import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(`http://localhost:5000/users?username=${username}&password=${password}`);
            
            if (response.data.length > 0) {
                const user = response.data[0];
                localStorage.setItem('user', JSON.stringify({ id: user.id, name: user.name }));

                // Redirect to dashboard
                window.location.href = '/postlist';
            } else {
                setError('Invalid username or password.');
            }
        } catch (err) {
            setError('Failed to log in. Try again later.');
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            {error && <p>{error}</p>}
        </form>
    );
};

export default Login;
