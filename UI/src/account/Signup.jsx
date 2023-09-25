import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { auth, db, storage, googleProvider } from "../config/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { collection, getDocs, addDoc, where, query  } from "firebase/firestore";

import background from "../assets/img/a-background.png";

function Signup() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    role: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    role: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const usersCollectionRef = collection(db, "user");

  const [user, setUser] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const logout = async () => {
    await signOut(auth);
  };

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

    if (!userData.role) {
      newErrors.role = "Role is required";
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
      const user = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      handleUser();

      console.log("User created");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };

  const handleUser = async () => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      firstName: userData.firstName,
      lastName: userData.lastName,
      userName: userData.userName,
      email: userData.email,
      role: userData.role
    }));
  
    const userExists = await checkUserExists(userData.email);
  
    if (!userExists) {
      createUser();
    } else {
      console.log("User with this email already exists.");
    }
  };
  
  const checkUserExists = async (email) => {
    const q = query(collection(db, "user"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };
  

  useEffect(() => {
    console.log("Updated userInfo: ", userInfo);

    if (
      userInfo.firstName &&
      userInfo.lastName &&
      userInfo.userName &&
      userInfo.email &&
      userInfo.role
    ) {
      createUser();
      handleNavigate();
    }
  }, [userInfo]);

  const createUser = async () => {
    if (Object.keys(userInfo).length !== 0) {
      await addDoc(usersCollectionRef, userInfo);
    }
  };

  const handleNavigate = async () => {
    console.log("Navigating based on role:", userInfo.role);
    if (userInfo.role === "Seller") {
      navigate("/seller");
    } else {
      navigate("/buyer");
    }
  }

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

            

            <select
            className="signup-login-input"
              name="role"
              onChange={handleChange}
              value={userData.role}
              required
            >
              <option value="">Select a role</option>
              <option value="Seller">Seller</option>
              <option value="Buyer">Buyer</option>
            </select>
            {errors.role && (
              <span className="error">{errors.role}</span>
            )}

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

            <button className="signup-login-button" onClick={handleSignup}>
              Sign Up
            </button>
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
