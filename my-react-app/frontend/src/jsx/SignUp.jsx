import React, {useState} from "react";
import "../css/signup.css";
import { useNavigate } from 'react-router-dom';
import SignupBackground from "../assets/SignUp.jpg";
import eye from "../assets/eye.png";
import closedEye from "../assets/eye-close.png";

const SignUp = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Function to handle navigation to the signup page
    const navigateToLogin = () => {
        navigate('/'); // Use navigate to go to the signup page
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
      
        try {
          const response = await fetch('/signup', {
            method: 'POST',
            body: formData,
          });
      
          if (response.ok) {
            // Handle successful signup (redirect or show a success message)
            navigate('/');
          } else {
            // Handle failed signup (show an error message)
            console.error('Signup failed');
          }
        } catch (error) {
          console.error('Error during signup:', error);
        }
      };      

    return (
        <div className="signup">
            <div className="overlap">
                <p className="text-wrapper" onClick={navigateToLogin}>Already have an account? Log in</p>
                    <form action="/signup" method="post" onClick={handleSignup}>
                        <button className="sign-up" type="submit">
                            <div className="button-container">Sign Up</div>
                        </button>
                
                        <div className="input-session">
                            <div className="confirm-password">
                                <div className="overlap-group">
                                    <input className="text-wrapper-2" type={showConfirmPassword ? "text" : "password"} name="confirmPassword" id="confirmPassword" placeholder="Retype your password"/>
                                    <div className="eye-icon" onClick={toggleConfirmPasswordVisibility}>
                                        <img
                                            src={showConfirmPassword ? eye : closedEye}
                                            alt={showConfirmPassword ? "EyeIcon" : "ClosedEyeIcon"}
                                            className="eye-img"
                                        />
                                    </div>
                                </div>
                                <div className="text-wrapper-3">Confirm Password</div>
                            </div>

                            <div className="password">
                                <div className="overlap-group">
                                    <input className="text-wrapper-2" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Enter your password"/>
                                    <div className="eye-icon" onClick={togglePasswordVisibility}>
                                        <img
                                            src={showPassword ? eye : closedEye}
                                            alt={showPassword ? "EyeIcon" : "ClosedEyeIcon"}
                                            className="eye-img"
                                        />
                                    </div>
                                </div>
                                    <div className="text-wrapper-3">Password</div>
                            </div>

                            <div className="phone">
                                <div className="overlap-group">
                                    <input className="text-wrapper-2" type="text" name="phone" id="phone" placeholder="Enter phone number"/>
                                </div>
                                    <div className="text-wrapper-3">Phone Number</div>
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
                                    <input className="text-wrapper-4" type="text" name="fullName" id="fullName" placeholder="Enter Full Name"/>
                                </div>
                                    <div className="text-wrapper-3">Full Name</div>
                                </div>
                        </div>
                    </form>
                    <div className="text-wrapper-5">CrossConnect</div>
            </div>
                <img className="img" alt="Signup" src={SignupBackground} />
        </div>
    );
};

export default SignUp;