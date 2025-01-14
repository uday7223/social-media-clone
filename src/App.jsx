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
import About from './components/About';
import ContactUs from './components/ContactUs';
import ProfilePage from './components/profile/ProfilePage';



function App() {
  const [count, setCount] = useState(0)
  

  return (

    <>
            <BrowserRouter>
            <TopHeader/>

    <div className="appGlobal">
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
       
        {/* <Route path="/create-post" element={<CreatePost />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/about' element={<About/>}/>
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />


      </Routes>
    </div>
  </BrowserRouter>

    </>
 
  )
}

export default App
