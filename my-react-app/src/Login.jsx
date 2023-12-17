import React from "react";
import "./login.css";
import LoginBackground from "./assets/LoginBackground.jpg";

const Login = () => {
  return (
    
    <div className="login">
      <img className="loginbackground" alt="Loginbackground" src={LoginBackground} />
      
      <div className="sign-up">
        <div className="overlap-group">
          <div className="text-wrapper">Sign Up</div>
        </div>
      </div>

      <button className="login-button">
        <div className="overlap-group">
          <div className="div">Login</div>
        </div>
      </button>

      <div className="text-wrapper-2">Forgot Password</div>
      
      <div className="remember">
        <div className="rectangle" />
        <div className="text-wrapper-3">Remember Me</div>
      </div>

      <div className="password">
        <div className="overlap">
          <div className="text-wrapper-4">
            <input type="password" name="password" id="password" placeholder="Enter your password"></input>
          </div>
        </div>
        <div className="text-wrapper-5">Password</div>
      </div>

      <div className="email-address">
        <div className="overlap">
          <div className="text-wrapper-6">
            <input type="email" name="email" id="email" placeholder="Enter your email"></input>
          </div>
        </div>
        <div className="text-wrapper-5">Email Address</div>
      </div>

      <div className="text-wrapper-7">Good to see you</div>
      <div className="text-wrapper-8">CrossConnect</div>
    </div>
  );
};

export default Login;