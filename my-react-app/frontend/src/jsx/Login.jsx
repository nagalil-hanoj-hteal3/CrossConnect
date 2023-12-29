import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/login.css";
import LoginBackground from "../assets/LoginBackground.jpg";
// import leftBackground from "../assets/loginbackground2.jpg";
import eye from "../assets/eye.png";
import closedEye from "../assets/eye-close.png";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // Function to handle navigation to the signup page
  const navigateToSignUp = () => {
    navigate('/signup'); // Use navigate to go to the signup page
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  return (
    <div className="login">
      <img className="loginbackground" alt="Loginbackground" src={LoginBackground} />
      <div className="overlap">
        
        <button className="sign-up" onClick={navigateToSignUp}>
          <div className="overlap-group">
            <div className="text-wrapper">Sign Up</div>
          </div>
        </button>

        <button className="login-button">
          <div className="overlap-group">
            <div className="div">Login</div>
          </div>
        </button>

        <div className="text-wrapper-2">Forgot Password</div>
        
        <div className="remember">
          <input type="checkbox" className="rectangle" />
          <div className="text-wrapper-3">Remember Me</div>
        </div>

        <div className="password">
          <div className="div-wrapper2">
            <input className="text-wrapper-4" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password"/>
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              <img
                src={showPassword ? eye : closedEye}
                alt={showPassword ? "EyeIcon" : "ClosedEyeIcon"}
                className="eye-img"
              />
            </div>
          </div>
          <div className="text-wrapper-5">Password</div>
        </div>

        <div className="email-address">
          <div className="div-wrapper">
            <input className="text-wrapper-6" type="email" name="email" id="email" placeholder="Enter your email"/>
          </div>
          <div className="text-wrapper-5">Email Address</div>
        </div>

        <div className="headers">
          <div className="text-wrapper-7">Good to see you</div>
          <div className="text-wrapper-8">CrossConnect</div>
        </div>

      </div>
    </div>
  );
};

export default Login;