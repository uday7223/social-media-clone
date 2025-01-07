import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/register", {
        username,
        password
      });

      if (response.status === 201) {
        setMessage("User registered successfully!");
        setUsername("");
        setPassword("");
        navigate('/login');

      }
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="container border rounded p-5 my-5 w-25">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <button
  type="button"
  className="btn border ms-4 px-4 py-2"
  onClick={(e) => {
    e.preventDefault();
    navigate("/login");
  }}
>
  Login
</button>
      </form>
      {message && <div className="mt-3" style={{color:"red"}}>{message}</div>}
    </div>
  );
}
