import React, { useState } from 'react';
import { TbUserCircle, TbMenu2, TbX } from "react-icons/tb";
import { Link } from 'react-router-dom';
import './Navigation.css';
import LoginDropdown from './LoginDropdown'; // <--- LoginDropdown इम्पोर्ट करा

// Navbar Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // <--- ड्रॉपडाउनसाठी नवीन स्टेट

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsDropdownOpen(false); // मेनू उघडल्यावर ड्रॉपडाउन बंद करा
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsMenuOpen(false); // ड्रॉपडाउन उघडल्यावर मेनू बंद करा
  };

  return (
    <header className="navbar-section">
      <nav className="navbar-content">
        <div className="navbar-logo">Husn Hira</div>

        {/* Hamburger menu button for mobile */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <TbX /> : <TbMenu2 />}
        </button>

        {/* Navigation links - will be hidden/shown based on isMenuOpen state on mobile */}
        <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
          </li>
          <li>
            <Link to="/about-us" onClick={() => setIsMenuOpen(false)}>About us</Link>
          </li>
          {/* Add other navigation links here if needed */}
        </ul>

        {/* User icon button */}
        <button className="navbar-icon" aria-label="User Profile" onClick={toggleDropdown}> {/* <--- onClick हँडलर जोडला */}
          <TbUserCircle />
        </button>

        {/* Login Dropdown - isDropdownOpen state वर आधारित दिसेल */}
        {isDropdownOpen && <LoginDropdown onClose={() => setIsDropdownOpen(false)} />} {/* <--- ड्रॉपडाउन रेंडर करा */}
      </nav>
    </header>
  );
};

export default Navigation;
