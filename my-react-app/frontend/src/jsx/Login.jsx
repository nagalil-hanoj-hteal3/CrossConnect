import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/login.css";
import LoginBackground from "../assets/LoginBackground.jpg";
import Validation from "./loginValidation";


const Login = () => {
  const navigate = useNavigate();

  // Function to handle navigation to the signup page
  const navigateToSignUp = () => {
    navigate('/Signup'); // Use navigate to go to the signup page
  };
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.values]}))
  }

  const handleSubmit=(event) =>{
    event.preventDefault();
    setErrors(Validation(values));
  }


  return (
    
    <div className="login">
      <img className="loginbackground" alt="Loginbackground" src={LoginBackground} />
      
      <button type='submit' className="sign-up" onClick={navigateToSignUp}>
        <div className="overlap-group">
          <div className="text-wrapper">
            Sign Up
          </div>
        </div>
      </button>


      <div className="text-wrapper-2">Forgot Password</div>
      
      <div className="remember">
        <input type="checkbox" className="rectangle" />
        <div className="text-wrapper-3">Remember Me</div>
      </div>

      <form action="" onSubmit={handleSubmit}>
        <div className="password">
          <div className="overlap">
            <div className="text-wrapper-4">
              <input type="password" name="password" id="password" placeholder="Enter your password" onChange={handleInput}></input>
              <br></br>
              <br></br>
              {errors.password && <span className="text-danger"> {errors.password} </span>}
            </div>
          </div>
          <div className="text-wrapper-5">Password</div>
        </div>

        <div className="email-address">
          <div className="overlap">
            <div className="text-wrapper-6">
              <input type="email" name="email" id="email" placeholder="Enter your email" onChange={handleInput}></input>
              <br></br>
              <br></br>
              {errors.email && <span className="text-danger"> {errors.email} </span>}
            </div>
          </div>
          <div className="text-wrapper-5">Email Address</div>
        </div>

        <button type="submit" className="login-button">
          <div className="overlap-group2">
            <div className="div">Login</div>
          </div>
        </button>

        </form>
      {/* <div className="text-wrapper-7">Good to see you</div> */}
      <div className="text-wrapper-8">CrossConnect</div>
    </div>
  );
};

export default Login;
