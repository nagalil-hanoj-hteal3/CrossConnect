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

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    // Function to handle navigation to the signup page
    const navigateToLogin = (event) => {
        event.preventDefault();
        navigate('/'); // Use navigate to go to the signup page
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };   

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Collect user input from the form fields
        // const formData = {
        //     username: event.target.username.value,
        //     full_name: event.target.fullName.value,
        //     email: event.target.email.value,
        //     phone_number: event.target.phone.value,
        //     password: event.target.password.value,
        // };
    
        try {
            // Make a POST request to your backend
            const response = await fetch('http://localhost:5173/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(username, fullName, phone, password, email),
            });
    
            if (response.ok) {
                console.log('User signed up successfully');
                // Redirect or perform any other actions after successful signup
            } else {
                console.error('Error during signup:', response.statusText);
            }
        } catch (error) {
            console.error('Error during signup:', error);
        }
    };

    return (
        <div className="signup">
            <div className="overlap">
                <p className="text-wrapper" onClick={navigateToLogin}>Already have an account? Log in</p>
                    
                    {/* <form onSubmit={handleSubmit}> */}
                        
                        <button className="sign-up" type="submit" onClick={handleSubmit}>
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
                                    <input className="text-wrapper-2" type={showPassword ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password"/>
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
                                    <input className="text-wrapper-2" type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number"/>
                                </div>
                                    <div className="text-wrapper-3">Phone Number</div>
                            </div>

                            <div className="email">
                                <div className="overlap-group">
                                    <input className="text-wrapper-4" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email address"/>
                                </div>
                                    <div className="text-wrapper-3">Email Address</div>
                            </div>

                            <div className="user-name">
                                <div className="overlap-group">
                                    <input className="text-wrapper-4" type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter Username"/>
                                </div>
                                    <div className="text-wrapper-3">Username</div>
                            </div>

                            <div className="full-name">
                                <div className="overlap-group">
                                    <input className="text-wrapper-4" type="text" name="fullName" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Full Name"/>
                                </div>
                                    <div className="text-wrapper-3">Full Name</div>
                                </div>
                        </div>
                    {/* </form> */}
                    <div className="text-wrapper-5">CrossConnect</div>
            </div>
                <img className="img" alt="Signup" src={SignupBackground} />
        </div>
    );
};

export default SignUp;