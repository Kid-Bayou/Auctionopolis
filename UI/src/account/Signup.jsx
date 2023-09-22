import { useState } from "react";
import { Link } from "react-router-dom";

import background from "../assets/img/a-background.png";

function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

    if (!userData.firstName) {
      newErrors.firstName = "First Name is required";
      valid = false;
    }

    if (!userData.lastName) {
      newErrors.lastName = "Last Name is required";
      valid = false;
    }
    
    if (!userData.userName) {
      newErrors.userName = "User Name is required";
      valid = false;
    }

    if (!userData.email) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = "Email is invalid";
      valid = false;
    }

    if (!userData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (userData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (!userData.confirmPassword) {
      newErrors.confirmPassword = "Confirm Password is required";
      valid = false;
    } else if (userData.confirmPassword !== userData.password) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
    } catch (error) {}
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="signup-login-container">
        <img src={background} className="signup-background" />
        <div className="signup-login-form">
          <h1>Sign Up</h1>
          <form className="form">
            <div className="signup-login-name-input">
              <input
                className="signup-login-input"
                type="text"
                name="firstName"
                onChange={handleChange}
                value={userData.firstName}
                required
                placeholder="First Name"
              />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}

              <input
                className="signup-login-input"
                type="text"
                name="lastName"
                onChange={handleChange}
                value={userData.lastName}
                required
                placeholder="Last Name"
              />
              {errors.lastName && (
                <span className="error">{errors.lastName}</span>
              )}
            </div>

            <input
              className="signup-login-input"
              type="text"
              name="userName"
              onChange={handleChange}
              value={userData.userName}
              required
              placeholder="Username"
            />
            {errors.userName && (
              <span className="error">{errors.userName}</span>
            )}

            <input
              className="signup-login-input"
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
              required
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <input
              className="signup-login-input"
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
              required
              placeholder="Password"
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <input
              className="signup-login-input"
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={userData.confirmPassword}
              required
              placeholder="Confirm Password"
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}

            <button className="signup-login-button" onClick={handleSignup}>Sign Up</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Signup;
