// import { useState } from "react";
// import logo from "../../assets/Signup/singup_logo.png"
// import signup_bcg from "../../assets/Signup/signup-bcg.png"
// import "./Signin.css"

// const Signin = () => {



//     return (
//         <>
//             <div className="signup-main-container">
//                 <div className="signup-left">
//                     <div>
//                         <img src={logo} alt="logo" />
//                     </div>
//                     <div><h2>SPARK</h2></div>
//                 </div>
//                 <div className="signup-middle">
//                     <div className="signup-text">
//                         <h2 className="singup-heading">Sign in to your Spark</h2>
//                     </div>
//                     <div className="form-content" >



//                         <form className="signup-form">
//                             <div className="forms-fields">
//                                 <div className="form-group">

//                                     <input
//                                         type="text"
//                                         name="name"
//                                         placeholder="Spark/ Username"
//                                         className="form-input"
//                                         required
//                                     />
//                                 </div>

//                                 <div className="form-group">

//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Username"
//                                         className="form-input"
//                                         required
//                                     />
//                                 </div>

//                             </div>

//                             <div>
//                                 <button className="login-btn">
//                                     Log in
//                                 </button>
//                             </div>
//                         </form>
//                         <div className="forgot">
//                             <div className="forgot-password">
//                                 <p>Forgot password?</p>
//                             </div>
//                             <div className="dont-have">
//                                 <p>Don't have an account?</p> <span className="signup-redirect">Sign up</span>
//                             </div>
//                         </div>

//                         <div className="captcha">
//                             <p>This site is protected by reCAPTCHA and the </p> <span> Google Privacy Policy</span> <p>and</p> <span>Terms of Service </span> <p>apply</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="signup-right">
//                     {/* <div>
//                         <img src={signup_bcg} alt="signup-img" />
//                     </div> */}
//                 </div>
//             </div>


//         </>
//     )
// }

// export default Signin;


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, resetAuthState } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Signup/singup_logo.png";
import "./Signin.css";
import { Link } from "react-router-dom";

const Signin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    // Get the authentication state
    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", email, password); // Debug
        dispatch(login({ email, password }));
    };

    // Handle success and redirection
    useEffect(() => {
        console.log("Auth state changed:", { user, isSuccess, isError, message });
    
        if (isSuccess && user) {
            console.log("✅ Success detected! Navigating to /links...");
            toast.success("Login successful! Redirecting...");
    
            setTimeout(() => {
                navigate("/links", { replace: true });
            }, 1000);
    
            // Delay reset to ensure state is not cleared before redirection
            setTimeout(() => {
                dispatch(resetAuthState());
            }, 2000);
        }
    
        if (isError) {
            console.error("❌ Login failed:", message);
            toast.error(message);
        }
    }, [isSuccess, isError, user, message, navigate, dispatch]);
    

    return (
        <div className="signup-main-container">
            <div className="signup-left">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <div><h2>SPARK</h2></div>
            </div>
            <div className="signup-middle">
                <div className="signup-text">
                    <h2 className="signup-heading">Sign in to your Spark</h2>
                </div>
                <div className="form-content">
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="forms-fields">
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="form-input"
                                    value={email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-input"
                                    value={password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <button className="login-btn" type="submit" disabled={isLoading}>
                                {isLoading ? "Logging in..." : "Log in"}
                            </button>
                        </div>
                    </form>
                    <div className="forgot">
                        <div className="forgot-password">
                            <p>Forgot password?</p>
                        </div>
                        <div className="dont-have">
                            <p>Don't have an account?</p> 
                            <Link to="/signup"><span className="signup-redirect">Sign up free</span></Link>
                        </div>
                    </div>
                    <div className="captcha">
                        <p>This site is protected by reCAPTCHA and the </p> <span> Google Privacy Policy</span> <p>and</p> <span>Terms of Service </span> <p>apply</p>
                    </div>
                </div>
            </div>
            <div className="signup-right"></div>
        </div>
    );
};

export default Signin;
