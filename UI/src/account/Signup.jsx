import { Link } from "react-router-dom"

import background from "../assets/img/a-background.png";

function Signup() {
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
              placeholder="First Name"
            />

            <input
              className="signup-login-input"
              type="text"
              placeholder="Last Name"
            />
            </div>

            <input
              className="signup-login-input"
              type="text"
              placeholder="Username"
            />

            <input
              className="signup-login-input"
              type="email"
              placeholder="Email"
            />

            <input
              className="signup-login-input"
              type="password"
              placeholder="Password"
            />

            <input
              className="signup-login-input"
              type="password"
              placeholder="Confirm Password"
            />

            <button className="signup-login-button">Sign Up</button>
          </form>
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </div>
      </div>
    </>
  );
}

export default Signup;
