import React from "react";
import "../css/signup.css";
import LoginBackground from "../assets/LoginBackground.jpg";


const Signup = () => {
    return (
        <div className="signup">
          <div className="container">
          <div className="text-wrapper">
                    <h1>CrossConnect</h1>
          </div>
          <div className="input-session">

              <input type="text" className="input" id="fullname" placeholder="First name - Last name" autoComplete="FName Lname" />
              
              <input type="text" className="input" id="username" placeholder="Create Username" />

              <input type="email" className="input" id="email" placeholder="Enter your email" />

              <input type="password" className="input" id="password1" placeholder="Create your password" />

              <input type="password" className="input" id="password2" placeholder="Re-enter your password" />

              <button className="sign-up">Sign up</button>
            </div>
          </div>
        </div>
    );
};

export default Signup;


