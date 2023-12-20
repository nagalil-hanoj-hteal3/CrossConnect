import React from "react";
import "../css/signup.css";
import LoginBackground from "../assets/LoginBackground.jpg";


const Signup = () => {
    return (
        <div className="signup">
          <div className="container">
            <div className="input-session">
                <div className="text-wrapper">
                    <h1>CrossConnect</h1>
                </div>
                <input type="text" name="fullname" id="fullname" placeholder="First name - Last name" />
                <input type="text" name="username" id="username" placeholder="Create Username" />
                <input type="email" name="email" id="email" placeholder="Enter your email" />
                <input type="password" name="password" id="password" placeholder="Create your password" />
                <input type="password" name="password" id="password" placeholder="Re-enter your password" />

                <button className="sign-up">Sign up</button>
            </div>
          </div>
        </div>
    );
};

export default Signup;
