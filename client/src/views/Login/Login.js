import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginNow = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email: email,
        password: password,
      }
    );
    if (response.data.success) {
      toast.success(response.data.message);

      localStorage.setItem("currentUser", JSON.stringify(response.data.data));

      toast.loading("Redirecting to dashboard...");

      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } 
    
    else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="background-image">
      <h1 className="auth-heading">User Login</h1>

      <form className="auth-form">
        <input
          type="email"
          placeholder="Enter Email"
          className="auth-input"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="auth-input"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button type="button" className="auth-btn" onClick={loginNow}>
          Login Now
        </button>

        <Link to="/signup" className="auth-link">
          Don't have an Account? Signup
        </Link>
      </form>

      <Toaster />
    </div>
  );
}

export default Login;
