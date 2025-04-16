import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider, signInWithPopup } from "../firebaseConfig"; // Import Firebase
import "./LoginPage.css"; // Import CSS

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle Email/Password Login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("username", data.username); // Store the username from backend
        console.log("Saving username to localStorage:", data.username);
        alert("Logged in successfully!");
        navigate("/HomePage");
      } else {
        setError(data.error || "Invalid login credentials");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  // Handle Google Signup/Login
  const handleGoogleSignup = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      localStorage.setItem("username", user.displayName); // Store username
      console.log("Saving Google username to localStorage:", user.displayName);

      alert(`Welcome ${user.displayName}!`);
      navigate("/HomePage");
    } catch (err) {
      setError("Google Sign-In failed. Try again.");
    }
  };

  return (
    <div className="loginpage-container">
      <div className="loginpage-card">
        <h1 className="loginpage-title">Login</h1>

        <form onSubmit={handleSubmit} className="loginpage-form">
          <input
            type="email"
            name="email"
            className="loginpage-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            className="loginpage-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="loginpage-error">{error}</p>}

          <button type="submit" className="loginpage-submit-btn">
            Login
          </button>
        </form>

        <div className="loginpage-divider">OR</div>

        <div className="loginpage-social">
          <button className="loginpage-google-btn" onClick={handleGoogleSignup}>
            Login with Google
          </button>
        </div>

        <p className="loginpage-signup-text">
          <strong>Don't have an account?</strong>
          <span
            className="loginpage-signup-link"
            onClick={() => navigate("/SignupPage")}
          >
            Sign up.
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
