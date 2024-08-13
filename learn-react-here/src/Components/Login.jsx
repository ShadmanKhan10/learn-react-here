import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Login.css";

export default function Login() {
  const [show, setShow] = useState(true);
  const [exit, setExit] = useState(false);
  const handleShow = () => {
    setShow(false);
    setExit(true);
  };
  return (
    // <div>
    //   <div className={show ? "login-container-parent" : ""}></div>{" "}
    //   {show && (
    //     <div className="login-container">
    //       <h1 className="login-label">Login Here</h1>
    //       <div className="input-container">
    //         <input
    //           type="text"
    //           className="login-input"
    //           placeholder="Enter your name"
    //         />
    //         <input
    //           type="password"
    //           className="login-password"
    //           placeholder="Enter your password"
    //         />
    //       </div>
    //       <div className="btn-container">
    //         <button className="submit-btn">Login</button>
    //         <a className="register-link" href="#">
    //           New user? Register Here
    //         </a>
    //       </div>
    //       <div onClick={handleShow} className="close">
    //         X
    //       </div>
    //     </div>
    //   )}
    //   {!show && <div></div>}
    // </div>

    <div>
      <div className={show ? "login-container-parent" : ""}></div>{" "}
      <AnimatePresence>
        {show && (
          <motion.div
            transition={{ duration: 1 }}
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            exit={{ rotate: 0, scale: 0 }}
          >
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
              <div
                exit={{ rotate: 0, scale: 0 }}
                onClick={handleShow}
                className="close"
              >
                X
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {!show && <div></div>}
    </div>
  );
}
