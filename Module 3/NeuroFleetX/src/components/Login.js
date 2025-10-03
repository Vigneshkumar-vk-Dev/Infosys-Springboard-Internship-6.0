import React, { useState } from 'react';

const Login = ({ onLogin, toggleTheme, theme }) => {
  const [mode, setMode] = useState('login'); // login | register | forgot | admin
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (mode === 'login' || mode === 'admin') {
      onLogin(); // later replace with backend validation
    } else if (mode === 'register') {
      // Replaced alert with console.log for better practice in React apps
      console.log(`Registered: ${form.email}`);
      setMode('login');
    } else if (mode === 'forgot') {
      console.log(`Password reset link sent to: ${form.email}`);
      setMode('login');
    }
  };

  return (
    <div className="auth-container">
      <div className="top-bar">
        <button onClick={toggleTheme} style={{ padding: '8px 14px', fontSize: '1.2rem' }}>
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <button onClick={() => setMode('admin')}>Admin Login</button>
      </div>
      <main>
        <header>
          <h1>NeuroFleetX</h1>
          <p>AI-Driven Urban Mobility Optimization</p>
        </header>
        <div className="box">
          {mode === 'login' && (
            <>
              <h2>User Login</h2>
              <input type="text" name="username" placeholder="Username" onChange={handleChange} />
              <div className="password-container">
                <input type="password" name="password" placeholder="Password" onChange={handleChange} />
                <span className="toggle-eye">👁️</span>
              </div>
              <button onClick={handleSubmit}>Login</button>
              <p className="link-text">
                Don't have an account? <span className="link" onClick={() => setMode('register')}>Register</span>
              </p>
              <p className="link-text">
                <span className="link" onClick={() => setMode('forgot')}>Forgot Password?</span>
              </p>
            </>
          )}

          {mode === 'register' && (
            <>
              <h2>Register</h2>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} />
              <input type="password" name="password" placeholder="Password" onChange={handleChange} />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
              <button onClick={handleSubmit}>Register</button>
              <p className="link-text">
                Already have an account? <span className="link" onClick={() => setMode('login')}>Back to Login</span>
              </p>
            </>
          )}

          {mode === 'forgot' && (
            <>
              <h2>Forgot Password</h2>
              <input type="email" name="email" placeholder="Email" onChange={handleChange} />
              <input type="password" name="newPassword" placeholder="New Password" onChange={handleChange} />
              <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} />
              <button onClick={handleSubmit}>Reset Password</button>
              <p className="link-text">
                <span className="link" onClick={() => setMode('login')}>Back to Login</span>
              </p>
            </>
          )}

          {mode === 'admin' && (
            <>
              <h2>Admin Login</h2>
              <input type="text" name="adminUser" placeholder="Admin Username" onChange={handleChange} />
              <input type="password" name="adminPass" placeholder="Admin Password" onChange={handleChange} />
              <button onClick={handleSubmit}>Login as Admin</button>
              <p className="link-text">
                <span className="link" onClick={() => setMode('login')}>Back to User Login</span>
              </p>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Login;
