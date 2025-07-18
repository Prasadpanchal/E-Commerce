import React, { useState } from 'react';
import { TbUserCircle, TbMenu2, TbX } from "react-icons/tb"; // Import menu and close icons
import './Navigation.css';

// Navbar Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#product" onClick={() => setIsMenuOpen(false)}>Product</a></li>
          <li><a href="#about-us" onClick={() => setIsMenuOpen(false)}>About us</a></li>
        </ul>

        {/* Separator line (optional, hidden on mobile) */}
         {/* Renamed from navbar-line for clarity */}
        
        {/* User icon button */}
        <button className="navbar-icon" aria-label="User Profile">
          <TbUserCircle />
        </button>
      </nav>
    </header>
  );
};

export default Navigation;
