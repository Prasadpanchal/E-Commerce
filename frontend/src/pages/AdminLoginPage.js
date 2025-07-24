import React, { useState } from 'react';
// Import icons from lucide-react
import { User, Lock, Eye, EyeOff } from 'lucide-react';
import './AdminLoginPage.css'; 
import loginBg from '../assets/login_bg.png';

// Assuming the background image is in the assets folder
// For this example, we'll use a placeholder URL.
//const loginBg = "https://placehold.co/1440x981/E0E0E0/000000?text=Background"; // Placeholder image URL


const AdminLoginPage = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Admin ID:', adminId);
    console.log('Password:', password);
    // Implement login logic here
  };

  return (
    <div className="admin-login-container">
      {/* Background Image */}
      <img className="admin-login-background" src={loginBg} alt="Login Background" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/1440x981/E0E0E0/000000?text=Background"; }} />

      {/* Login Card */}
      <div className="login-card">
        {/* Admin Login Title */}
        <div className="login-title font-ADLaM_Display">Admin Login</div>

        {/* Admin ID Input */}
        <div className="input-field-wrapper">
          {/* Using User icon from lucide-react */}
          <User className="input-icon" size={28} />
          <input
            type="text"
            className="login-input"
            placeholder="Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="input-field-wrapper">
          {/* Using Lock icon from lucide-react */}
          <Lock className="input-icon" size={28} />
          <input
            type={showPassword ? "text" : "password"}
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Toggle password visibility using Eye/EyeOff icons */}
          {showPassword ? (
            <EyeOff
              className="toggle-password-icon"
              size={28}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Eye
              className="toggle-password-icon"
              size={28}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>

        {/* Login Button */}
        <button className="login-button" onClick={handleLogin}>
          <div className="login-button-text font-Amiko">Login</div>
        </button>

        {/* Forgot Password */}
        <div className="forgot-password-text font-Amiko">Forgot Password</div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
