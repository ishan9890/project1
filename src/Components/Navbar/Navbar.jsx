import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Button from './Button';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const handleMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Urban Rides
      </Link>
      <ul className="nav-menu">
        
        <li className="nav-item">
          <Link to="/" className="nav-links">
            Home
          </Link>
        </li>
        <li
          className="nav-item"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link to="/vehicles" className="nav-links">
            Vehicles <i className="fas fa-caret-down"></i>
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="/about-us" className="nav-links">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-links">
            Contact Us
          </Link>
        </li>
        {/* Login Link */}
        <li className="nav-item">
          <Link to="/log-in" className="nav-links-mobile">
            Login
          </Link>
        </li>
      </ul>
      <Button />
    </nav>
  );
}

export default Navbar;
