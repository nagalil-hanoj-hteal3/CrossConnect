import React from "react";
import { useNavigate } from 'react-router-dom';
import "../css/login.css";
import LoginBackground from "../assets/LoginBackground.jpg";

const Login = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the signup page
  const navigateToSignUp = () => {
    navigate('/Signup'); // Use navigate to go to the signup page
  };
  return (
    
    <div className="login">
      <img className="loginbackground" alt="Loginbackground" src={LoginBackground} />
      
      <button className="sign-up" onClick={navigateToSignUp}>
        <div className="overlap-group">
          <div className="text-wrapper">
            Sign Up
          </div>
        </div>
      </button>

      <button className="login-button">
        <div className="overlap-group2">
          <div className="div">Login</div>
        </div>
      </button>

      <div className="text-wrapper-2">Forgot Password</div>
      
      <div className="remember">
        <input type="checkbox" className="rectangle" />
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

      {/* <div className="text-wrapper-7">Good to see you</div> */}
      <div className="text-wrapper-8">CrossConnect</div>
    </div>
  );
};

export default Login;