import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Signup() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    dob: "",
  });

  const signup = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup`,
      {
        fullName: user.fullName,
        email: user.email,
        password: user.password,
        dob: user.dob,
      }
    );

    if (response.data.success) {
      toast.success(response.data.message);
      setUser({
        fullName: "",
        email: "",
        password: "",
        dob: "",
      });
    } else {
      toast.error(response.data.message);
    }
  };

  return (<>

  <Navbar/>
    <div className="background-image">
      <h1 className="auth-heading"> User Registration</h1>

      <form className="auth-form">
        <input
          type="text"
          placeholder="Fullname"
          className="auth-input"
          onChange={(e) => setUser({ ...user, fullName: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          className="auth-input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />

        <input
          type="date"
          placeholder="Date of Birth"
          className="auth-input"
          onChange={(e) => setUser({ ...user, dob: e.target.value })}
        />

        <button type="button" className="auth-btn" onClick={signup}>
          Register
        </button>

        <Link to="/login" className="auth-link">
          Already have an Account? Login
        </Link>
      </form>

      <Toaster />
    </div>
    <Footer/>
    </>);
}

export default Signup;
