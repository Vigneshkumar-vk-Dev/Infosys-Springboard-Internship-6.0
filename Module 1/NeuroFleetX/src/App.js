import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [theme, setTheme] = useState("light");
  const [page, setPage] = useState("login");
  const [passwordVisibility, setPasswordVisibility] = useState({});

  // Toggle password visibility for input fields
  const togglePassword = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleLogin = () => {
    alert("Login Successful! Welcome User");
  };

  const handleAdminLogin = () => {
    alert("Welcome Admin!");
  };

  const handleRegister = () => {
    alert("Registered Successfully!");
  };

  const handleForgot = () => {
    alert("Password Reset Successfully!");
  };

  return (
    <div className={`app ${theme}`}>
      {/* Top Navigation Bar */}
      <div className="top-bar">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
        <button onClick={() => setPage("admin")}>Admin Login</button>
      </div>

      <main>
        <header>
          <h1>NeuroFleetX</h1>
          <p>AI-Driven Urban Mobility Optimization</p>
        </header>

        {/* Login Page */}
        {page === "login" && (
          <div className="box active">
            <h2>User Login</h2>
            <input type="text" placeholder="Username" />
            <div className="password-container">
              <input
                type={passwordVisibility.login ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("login")}
              >
                {passwordVisibility.login ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <button onClick={handleLogin}>Login</button>

            {/* Links */}
            <p className="link-text">
              Don't have an account?{" "}
              <span className="link" onClick={() => setPage("register")}>
                Register
              </span>
            </p>
            <p className="link-text">
              <span className="link" onClick={() => setPage("forgot")}>
                Forgot Password?
              </span>
            </p>
          </div>
        )}

        {/* Register Page */}
        {page === "register" && (
          <div className="box active">
            <h2>Register</h2>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email ID" />
            <div className="password-container">
              <input
                type={passwordVisibility.reg ? "text" : "password"}
                placeholder="Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("reg")}
              >
                {passwordVisibility.reg ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <div className="password-container">
              <input
                type={passwordVisibility.regConfirm ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("regConfirm")}
              >
                {passwordVisibility.regConfirm ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <button onClick={handleRegister}>Submit</button>
            <p className="link-text">
              <span className="link" onClick={() => setPage("login")}>
                Back to Login
              </span>
            </p>
          </div>
        )}

        {/* Forgot Password Page */}
        {page === "forgot" && (
          <div className="box active">
            <h2>Reset Password</h2>
            <input type="email" placeholder="Email ID" />
            <div className="password-container">
              <input
                type={passwordVisibility.forgot ? "text" : "password"}
                placeholder="New Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("forgot")}
              >
                {passwordVisibility.forgot ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <div className="password-container">
              <input
                type={passwordVisibility.forgotConfirm ? "text" : "password"}
                placeholder="Confirm New Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("forgotConfirm")}
              >
                {passwordVisibility.forgotConfirm ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <button onClick={handleForgot}>Submit</button>
            <p className="link-text">
              <span className="link" onClick={() => setPage("login")}>
                Back to Login
              </span>
            </p>
          </div>
        )}

        {/* Admin Login Page */}
        {page === "admin" && (
          <div className="box active">
            <h2>Admin Login</h2>
            {/* Added Username Field */}
            <input type="text" placeholder="Admin Username" />
            <div className="password-container">
              <input
                type={passwordVisibility.admin ? "text" : "password"}
                placeholder="Admin Password"
              />
              <span
                className="toggle-eye"
                onClick={() => togglePassword("admin")}
              >
                {passwordVisibility.admin ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            <button onClick={handleAdminLogin}>Login</button>
            <p className="link-text">
              <span className="link" onClick={() => setPage("login")}>
                Back to Login
              </span>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
