import React from "react";
import "./Login.css";
import LoginAvatar from '../Images/Picture/Login.png';
import NavBar from "../NavBar/NavBar";



const Login = () => {
  return (
    <div className="Login__Form">
      {" "}
      {/* Get Started page for Registration category selection */}
      {/* Nav Bar Section */}
      <NavBar/>
      {/* Registration Selection */}
      <div className="Login__Form-content">
        <div className="Login__Form-header">
          <h1>Login</h1>
          <div className="Login__Form-fill">
                <form className="Login-form" action="">
                <span>User ID</span> <input type="text" placeholder="Doc250"  required/>
                    <span>Password</span> <input type="password" placeholder="123456" required/>
                    <button type="Submit">Login</button>
                </form>
          </div>
          </div>
        <div className="Login__Form-Avatar-Background">
          <img id="Login__Form-Avatar" src={LoginAvatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;