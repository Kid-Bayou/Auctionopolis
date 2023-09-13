import { Link } from "react-router-dom"

import background from "../assets/img/a-background.png";

function Login() {
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
              placeholder="Email"
            />

            <input
              className="signup-login-input"
              type="password"
              placeholder="Password"
            />

            <button className="signup-login-button">Login</button>
          </form>
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </>
  );
}

export default Login;