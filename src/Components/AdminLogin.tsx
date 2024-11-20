import React, { useState } from 'react';
import './AdminLogin.css'; // Import external CSS

function AdminLogin() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = () => {
    if (username === 'mafaz' && password === 'Mafaz2006@') {
      window.location.href = 'AdminDashboard.html'; // Redirect to AdminDashboard.html
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-form">
        <img src="./src/assets/Nav-Logo.svg" alt="Admin Logo" className="admin-login-logo" />
        <input
          type="text"
          placeholder="Username"
          className="admin-login-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div className="admin-login-password-container">
          <input
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            className="admin-login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="password-toggle-btn" onClick={togglePasswordVisibility}>
            {passwordVisible ? '👁️' : '🙈'}
          </button>
        </div>
        <button className="admin-login-button" onClick={handleLogin}>
          Login
        </button>
        <p className="admin-login-text">If You’re facing issues? Contact +91 94888 87095</p>
      </div>
    </div>
  );
}

export default AdminLogin;
