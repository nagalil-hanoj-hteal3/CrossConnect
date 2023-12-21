import React from "react";
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';
import SignupBackground from "../assets/SignUp.jpg";

const SignUp = () => {
    const navigate = useNavigate();

    // Function to handle navigation to the signup page
    const navigateToLogin = () => {
        navigate('/'); // Use navigate to go to the signup page
    };

    return (
        <div className="signup">
            <div className="overlap">
                <p className="text-wrapper" onClick={navigateToLogin}>Already have an account? Log in</p>

                    <button className="sign-up"  onClick={navigateToLogin}>
                        <div className="button-container">Sign Up</div>
                    </button>
               
                <div className="input-session">
                    <div className="confirm-password">
                        <div className="overlap-group">
                            <input className="text-wrapper-2" type="password" name="confirmPassword" id="confirmPassword" placeholder="Retype your password"/>
                        </div>
                        <div className="text-wrapper-3">Confirm Password</div>
                    </div>

                    <div className="password">
                        <div className="overlap-group">
                            <input className="text-wrapper-2" type="password" name="password" id="password" placeholder="Enter your password"/>
                        </div>
                            <div className="text-wrapper-3">Password</div>
                    </div>

                    <div className="email">
                        <div className="overlap-group">
                            <input className="text-wrapper-4" type="email" name="email" id="email" placeholder="Enter your email address"/>
                        </div>
                            <div className="text-wrapper-3">Email Address</div>
                    </div>

                    <div className="user-name">
                        <div className="overlap-group">
                            <input className="text-wrapper-4" type="text" name="username" id="username" placeholder="Enter Username"/>
                        </div>
                            <div className="text-wrapper-3">Username</div>
                    </div>

                    <div className="full-name">
                        <div className="overlap-group">
                            <input className="text-wrapper-4" type="text" name="username" id="username" placeholder="Enter Full Name"/>
                        </div>
                            <div className="text-wrapper-3">Full Name</div>
                        </div>
                    </div>

                    <div className="text-wrapper-5">CrossConnect</div>
                </div>
            <img className="img" alt="Signup" src={SignupBackground} />
        </div>
    );
};

export default SignUp;