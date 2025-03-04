// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signup } from "../../features/auth/authSlice";
// import logo from "../../assets/Signup/singup_logo.png";
// import "./Signup.css";
// import { Link } from "react-router-dom";


// const Signup = () => {
//     const dispatch = useDispatch();
//     const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

//     const [formData, setFormData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const [errors, setErrors] = useState({});

//     const validate = () => {
//         let newErrors = {};
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

//         if (!formData.firstName.trim()) newErrors.firstName = "First name required*";
//         if (!formData.lastName.trim()) newErrors.lastName = "Error message";
//         if (!formData.email.trim()) newErrors.email = "Invalid Email*";
//         else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid Email*";

//         if (!formData.password.trim()) newErrors.password = "Please enter your password*";
//         else if (formData.password.length < 8) newErrors.password = "The password must be at least 8 characters long*";
//         else if (!passwordRegex.test(formData.password)) newErrors.password = "Please choose a strong password that includes at least 1 lowercase and uppercase letter, a number, as well as a special character (!@#$%^&*)";

//         if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Password did not match*";
//         else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "The password you entered does not match*";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (validate()) {
//             dispatch(signup({
//                 firstName: formData.firstName,
//                 lastName: formData.lastName,
//                 email: formData.email,
//                 password: formData.password,
//             }));
//         }
//     };

//     return (
//         <>
//             <div className="signup-main-container">
//                 <div className="signup-left">
//                     <div>
//                         <img src={logo} alt="logo" />
//                     </div>
//                     <div><h2>SPARK</h2></div>
//                 </div>

//                 <div className="signup-middle-section">
//                     <div className="signup-text">
//                         <h2 className="signup-heading">Sign up to your Spark</h2>
//                     </div>
//                     <div className="form-content">
//                         <div className="create-account">
//                             <h3 className="create-account-heading">Create an account</h3>
//                             <Link to="/signin"><div className="signin-instead">Sign in instead</div></Link>
//                         </div>

//                         <form className="signup-form" onSubmit={handleSubmit}>
//                             <div className="form-group">
//                                 <label>First Name</label>
//                                 <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
//                                 {errors.firstName && <p className="error-message">{errors.firstName}</p>}
//                             </div>
//                             <div className="form-group">
//                                 <label>Last Name</label>
//                                 <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
//                                 {errors.lastName && <p className="error-message">{errors.lastName}</p>}
//                             </div>
//                             <div className="form-group">
//                                 <label>Email</label>
//                                 <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
//                                 {errors.email && <p className="error-message">{errors.email}</p>}
//                             </div>
//                             <div className="form-group">
//                                 <label>Password</label>
//                                 <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
//                                 {errors.password && <p className="error-message">{errors.password}</p>}
//                             </div>
//                             <div className="form-group">
//                                 <label>Confirm Password</label>
//                                 <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input" />
//                                 {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
//                             </div>
//                             <div className="check-group">
//                                 <input type="checkbox" id="termsCheckbox" className="checkbox-input" required />
//                                 <label htmlFor="termsCheckbox" className="checkbox-label">
//                                     By creating an account, I agree to our <span className="terms">Terms of Use and Privacy Policy</span>
//                                 </label>
//                             </div>
//                             <button className="signup-btn" type="submit" disabled={isLoading}>{isLoading ? "Creating..." : "Create an account"}</button>
//                             {isError && <p className="error-message">{message}</p>}
//                             {isSuccess && <p className="success-message">Signup successful!</p>}
//                         </form>
//                     </div>
//                 </div>

//                 <div className="signup-right">
//                     {/* Optional: Add an image or design */}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Signup;


import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../features/auth/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/Signup/singup_logo.png";
import "./Signup.css";
import { resetAuthState } from "../../features/auth/authSlice"; 

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

   
useEffect(() => {
    if (isSuccess) {
        toast.success("Account created successfully! Redirecting to sign in...", { autoClose: 3000 });

        setTimeout(() => {
            dispatch(resetAuthState()); // Reset auth state before navigating
            navigate("/signin");
        }, 3000);
    }

    if (isError) {
        toast.error(message || "Signup failed! Please try again.");
    }
}, [isSuccess, isError, message, navigate, dispatch]);

    const validate = () => {
        let newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

        if (!formData.firstName.trim()) newErrors.firstName = "First name required*";
        if (!formData.lastName.trim()) newErrors.lastName = "Last name required*";
        if (!formData.email.trim()) newErrors.email = "Invalid Email*";
        else if (!emailRegex.test(formData.email)) newErrors.email = "Invalid Email*";

        if (!formData.password.trim()) newErrors.password = "Please enter your password*";
        else if (!passwordRegex.test(formData.password)) newErrors.password = "Password must be at least 8 characters long, include 1 uppercase, 1 lowercase, 1 number, and 1 special character (!@#$%^&*)";

        if (!formData.confirmPassword.trim()) newErrors.confirmPassword = "Password did not match*";
        else if (formData.confirmPassword !== formData.password) newErrors.confirmPassword = "Passwords do not match*";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            dispatch(signup({
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                password: formData.password,
            }));
        }
    };

    return (
        <>
            <div className="signup-main-container">
                <div className="signup-left">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                    <div><h2>SPARK</h2></div>
                </div>

                <div className="signup-middle-section">
                    <div className="signup-text">
                        <h2 className="signup-heading">Sign up to your Spark</h2>
                    </div>
                    <div className="form-content">
                        <div className="create-account">
                            <h3 className="create-account-heading">Create an account</h3>
                            <Link to="/signin"><div className="signin-instead">Sign in instead</div></Link>
                        </div>

                        <form className="signup-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-input" />
                                {errors.firstName && <p className="error-message">{errors.firstName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-input" />
                                {errors.lastName && <p className="error-message">{errors.lastName}</p>}
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-input" />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-input" />
                                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
                            </div>
                            <div className="check-group">
                                <input type="checkbox" id="termsCheckbox" className="checkbox-input" required />
                                <label htmlFor="termsCheckbox" className="checkbox-label">
                                    By creating an account, I agree to our <span className="terms">Terms of Use and Privacy Policy</span>
                                </label>
                            </div>
                            <button className="signup-btn" type="submit" disabled={isLoading}>{isLoading ? "Creating..." : "Create an account"}</button>
                        </form>
                    </div>
                </div>

                <div className="signup-right"></div>
            </div>
        </>
    );
};

export default Signup;
