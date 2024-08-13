import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked((prev) => {
      return prev === true ? false : true;
    });
  };
  return (
    <div>
      <div className="nav-container">
        <div className="logo-container">
          <img
            src="https://cdn.vectorstock.com/i/1000x1000/33/68/joystick-vector-36433368.webp"
            className="logo"
            alt="logo"
          />
          <h1 className="logo-name">Spoter</h1>
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
      <div>
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          className="menu-icon"
          alt="menu"
          onClick={handleMenuClick}
        />
      </div>
      {clicked ? (
        <div className="ham-menu-list">
          <div className="ham-menu">Home</div>
          <div className="ham-menu">AboutUs</div>
          <div className="ham-menu">Services</div>
          <div className="ham-menu">Items</div>
          <div className="ham-menu">Login</div>
          <span className="span-ham-menu">Join</span>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}
