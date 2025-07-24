import React from 'react';
import { Link } from 'react-router-dom'; // Link कंपोनेंट इम्पोर्ट करा
import './LoginDropdown.css'; // CSS फाइल इम्पोर्ट करा

const LoginDropdown = ({ onClose }) => {
  return (
    <div className="login-dropdown-container">
      <div className="login-option-wrapper">
        <Link to="/my-profile" className="login-option" onClick={onClose}> {/* Link to user profile page */}
          <span className="login-text font-ABeeZee">My Profile</span>
        </Link>
      </div>
      <div className="login-option-wrapper">
        <Link to="/user-login" className="login-option" onClick={onClose}> {/* Link to user login page */}
          <span className="login-text font-ABeeZee">Login</span>
        </Link>
      </div>
      <div className="login-option-wrapper admin-login-wrapper">
        <Link to="/admin-login" className="login-option admin-login-option" onClick={onClose}> {/* Link to admin login page */}
          <span className="admin-login-text font-ABeeZee">Admin Login</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginDropdown;
