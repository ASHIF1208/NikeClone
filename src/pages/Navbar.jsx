import React, { useState } from "react";
import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/images/hamburger.svg";
import { navLinks } from "../constants";
import '../styles/Navbar.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev); // Correctly toggles the state
  };

  return (
    <header className="navbar-header">
      <nav className="navbar">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src={headerLogo} alt="Logo" />
        </a>

        {/* Hamburger Icon */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          <img src={hamburger} alt="Menu" />
        </div>

        {/* Navigation Links */}
        <ul className={`navbar-links ${menuOpen ? "navbar-links-active" : ""}`}>
          {navLinks.map((item) => (
            <li key={item.label} className="navbar-item">
              <a href={item.href} className="navbar-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
