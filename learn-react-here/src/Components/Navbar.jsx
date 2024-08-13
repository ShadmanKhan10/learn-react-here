import React, { useState } from "react";
import "./Navbar.css";
import Login from "./Login";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [opacity, setOpacity] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleMenuClick = () => {
    setClicked((prev) => {
      return prev === true ? false : true;
    });
  };

  const onLoginClick = () => {
    setOpacity(true);
    setShowLogin(true);
    console.log("Opacity Status", opacity);
    console.log("Login Status", showLogin);
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
          <div onClick={onLoginClick} className="menu">
            Login
          </div>
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
          <div onClick={onLoginClick} className="ham-menu">
            Login
          </div>
          <span className="span-ham-menu">Join</span>
        </div>
      ) : (
        <h1></h1>
      )}
      {showLogin && <Login />}
    </div>
  );
}
