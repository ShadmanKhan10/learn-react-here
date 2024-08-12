import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://cdn-icons-png.flaticon.com/512/60/60736.png"
            className="logo"
            alt="logo"
          />
          <h1 className="logo-name">LogoName</h1>
        </div>
        <div className="menu-lists">
          <div className="menu">Home</div>
          <div className="menu">AboutUs</div>
          <div className="menu">Items</div>
          <div className="menu">Services</div>
          <div className="menu">Login</div>
          <span className="join-span">Join</span>
        </div>
      </div>
    </div>
  );
}
