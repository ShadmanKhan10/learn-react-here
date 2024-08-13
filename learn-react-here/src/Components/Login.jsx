import React, { useState } from "react";
import "./Login.css";

export default function Login() {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(false);
  };
  return (
    <div>
      <div className="login-container-parent"></div>{" "}
      {show && (
        <div className="login-container">
          <h1 className="login-label">Login Here</h1>
          <div className="input-container">
            <input
              type="text"
              className="login-input"
              placeholder="Enter your name"
            />
            <input
              type="password"
              className="login-password"
              placeholder="Enter your password"
            />
          </div>
          <div className="btn-container">
            <button className="submit-btn">Login</button>
            <a className="register-link" href="#">
              New user? Register Here
            </a>
          </div>
          <div onClick={handleShow} className="close">
            X
          </div>
        </div>
      )}
      {!show && <div></div>}
    </div>
  );
}
