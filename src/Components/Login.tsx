import React, { useState } from "react";
import "./Login.css";

function SignUp() {
  const [role, setRole] = useState("");

  const handleRoleChange = (e: any) => {
    setRole(e.target.value);
  };

  return (
    <div className="signup">
      <img src="./src/assets/new-login.svg" className="login-img" alt="Login" />
      <div className="regi-left">
        <img src="./src/assets/Nav-Logo.svg" alt="Logo" className="form-logo" />
        <h2>Welcome Back!</h2>
        <p>Please Sign In to your Account</p>
        <form>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />

          <div className="login-bottom">
            <div className="accept-tc">
              <input type="checkbox" required />
              <label>Remember Me</label>
            </div>
            <a>Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>
        <div className="calltoregi">
          <p>
            Don't Have an Account <a>Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
