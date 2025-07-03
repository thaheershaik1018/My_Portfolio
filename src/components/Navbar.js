import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`menu-icon__line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon__line ${isOpen ? 'open' : ''}`}></div>
        <div className={`menu-icon__line ${isOpen ? 'open' : ''}`}></div>
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#professional-summary" onClick={closeMenu}>Summary</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#employment-history" onClick={closeMenu}>Experience</a></li>
        <li><a href="#education" onClick={closeMenu}>Education</a></li>
        <li><a href="#certifications" onClick={closeMenu}>Certifications</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;