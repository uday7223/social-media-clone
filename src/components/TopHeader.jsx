import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import ProfilePage from "./profile/ProfilePage";
import img6 from "../assets/profileImages/img6.svg";

const TopHeader = () => {
  const [showProfileModal, SetshowProfileModal] = useState(false);
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <div className="topHeader">
        <div className="topHeader-con">
          <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container-fluid">
              <Link className="navbar-brand logo" to="#">
                POST IT!
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse header-fields" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/landingpage">
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/dashboard"
                      style={{ pointerEvents: user ? "auto" : "none", opacity: user ? 1 : 0.5 }}
                    >
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/about">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item profileIcon">
                    <button
                      className="btn"
                      onClick={() => SetshowProfileModal((prev) => !prev)}
                      style={{ background: "none", border: "none" }}
                    >
                      <img src={img6} alt="Profile" className="me-4" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {showProfileModal && (
        <ProfilePage
          showProfileModal={showProfileModal}
          SetshowProfileModal={SetshowProfileModal}
        />
      )}
    </>
  );
};

export default TopHeader;
