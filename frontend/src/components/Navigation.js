import React, { useState } from 'react';
import { TbUserCircle, TbMenu2, TbX } from "react-icons/tb";
import { Link } from 'react-router-dom'; // <--- Import Link
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
          <li>
            {/* Use Link component for internal navigation */}
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>
          <li>
            {/* Use Link component for internal navigation */}
            <Link to="/product" onClick={() => setIsMenuOpen(false)}>Product</Link>
          </li>
          <li>
            {/* If "About us" is a separate page, use <Link to="/about-us">.
                If it's an anchor within the homepage, keep <a> or make a decision based on future design.
                For now, assuming it might be an anchor or a future page. */}
            <a href="#about-us" onClick={() => setIsMenuOpen(false)}>About us</a>
          </li>
        </ul>

        {/* User icon button */}
        <button className="navbar-icon" aria-label="User Profile">
          <TbUserCircle />
        </button>
      </nav>
    </header>
  );
};

export default Navigation;