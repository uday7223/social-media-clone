import React from 'react'
import bgImag from "../assets/about-bg.png"


const About = () => {
    return (
        <>
            <div className="about">


                    <div className="container mt-2">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 text-center">
                                <h1 className="logo">About POST IT!</h1>
                                <p className="lead mt-3">
                                    Welcome to <strong>POST IT</strong>, the ultimate platform for sharing your thoughts and connecting with friends.
                                </p>
                                <p>
                                    Our mission is to create a space where users can freely express themselves by uploading new posts, interacting with others, and growing their online presence.
                                </p>
                                <div className="mt-4">
                                    <img
                                        src={bgImag}
                                        alt="Social Media Concept"
                                        className="img-fluid"
                                    />
                                </div>
                                <h3 className="mt-5">Why Choose Us?</h3>
                                <p>
                                    - User-friendly interface 🌐
                                    - Real-time post sharing 🚀
                                    - Secure and engaging platform 🔒
                                </p>
                                <a href="/" className="btn btn-primary mt-4">
                                    Go Back to Home
                                </a>
                            </div>
                        </div>
                    </div>
                





            </div>











        </>
    )
}

export default About