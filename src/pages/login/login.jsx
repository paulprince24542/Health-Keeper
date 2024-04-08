import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-6 section-wrapper">
          <div className="section-content">
            <h2>Health Keeper</h2>
            <p>Empowering Health, Enriching Lives.</p>
          </div>
        </div>
        <div className="col-xl-6 login-wrapper">
          <div className="">
            <div className="login-content">
              <div>
                <span style={{color:'green'}}>User   </span> <span>Sign in</span>
              </div>
              <label htmlFor="">Username or Email</label>
              <input type="text" name="" id="" />
              <label htmlFor="">Password</label>
              <input type="password" name="" id="" />
              <div
                className="d-flex justify-content-end"
                style={{ color: "green" }}
              >
                <u>Forgot Password?</u>
              </div>
              <button>Sign In</button>
              <div className="d-flex justify-content-center align-items-start or">
                <hr />
                <p>Or</p>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
