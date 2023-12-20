import React from "react";
import "../css/signup.css";

const SignUp = () => {
  return (
    <div className="signup">
      <img className="loginbackground" alt="Loginbackground" src="loginbackground-2-1.png" />
      <div className="sign-up">
        <div className="text-wrapper">Sign Up</div>
      </div>
      <div className="input-session">
        <div className="password">
          <div className="overlap-group">
            <div className="div">Enter your password</div>
          </div>
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="confirm-password">
          <div className="overlap-group">
            <div className="div">Re Enter your password</div>
          </div>
          <div className="text-wrapper-2">Password</div>
        </div>
        <div className="email">
          <div className="overlap-group">
            <div className="text-wrapper-3">Enter your Email Address</div>
          </div>
          <div className="text-wrapper-2">Email Address</div>
        </div>
        <div className="user-name">
          <div className="overlap-group">
            <div className="text-wrapper-3">Create Username</div>
          </div>
          <div className="text-wrapper-2">Username</div>
        </div>
        <div className="full-name">
          <div className="text-wrapper-4">Full Name</div>
          <div className="frame">
            <p className="p">First name - Last name</p>
          </div>
        </div>
      </div>
      <div className="text-wrapper-5">CrossConnect</div>
    </div>
  );
};

export default SignUp;