import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import TopHeader from './components/TopHeader';
import CreatePost from './components/posts/CreatePost';
import Dashboard from './components/Dashboard';



function App() {
  const [count, setCount] = useState(0)
  

  return (

    <>
            <BrowserRouter>
            <TopHeader/>

    <div className="appGlobal">
      <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/create-post" element={<CreatePost />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>
    </div>
  </BrowserRouter>

    </>
 
  )
}

export default App
