
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, db } from "../config/firebase";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { collection, getDocs, addDoc, where } from "firebase/firestore";

import background from "../assets/img/a-background.png";

function Login() {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    let valid = true;

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

    setErrors(newErrors);
    return valid;
  };

  const handleLogin = async (event) => {
    event.preventDefault();
  
    if (!validateForm()) {
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
  
      const user = userCredential.user;
  
      const userQuerySnapshot = await getDocs(
        collection(db, "user"),
        where("email", "==", userData.email)
      );
  
      if (!userQuerySnapshot.empty) {
        // Find the correct user based on the email
        const userInfo = userQuerySnapshot.docs.find(
          (doc) => doc.data().email === userData.email
        );
  
        if (userInfo) {
          console.log("User role:", userInfo.data().role);
          console.log("User role:", userInfo.data());
  
          if (userInfo.data().role === "Seller") {
            navigate("/seller");
          } else if (userInfo.data().role === "Buyer") {
            navigate("/buyer");
          } else {
            console.error("Unknown user role");
          }
        } else {
          console.error("User not found in database");
        }
      } else {
        console.error("User not found in database");
      }
    } catch (error) {
      console.error("Error Logging In:", error.message);
    }
  };
  
  

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <>
      <div className="signup-login-container">
        <img src={background} className="login-background" />
        <div className="signup-login-form">
          <h1>Login</h1>
          <form className="form">
            
            <input
              className="signup-login-input"
              type="email"
              name="email"
              onChange={handleChange}
              value={userData.email}
              placeholder="Email"
            />
            {errors.userName && (
              <span className="error">{errors.userName}</span>
            )}


            <input
              className="signup-login-input"
              type="password"
              name="password"
              onChange={handleChange}
              value={userData.password}
              placeholder="Password"
            />
            {errors.userName && (
              <span className="error">{errors.userName}</span>
            )}

            <button className="signup-login-button" onClick={handleLogin}>Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;
