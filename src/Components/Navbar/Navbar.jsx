import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';
import Button from './Button';
import { useAuth } from '../pages/loginsignup/AuthContext';
import userIcon from '../../images/user3.png';

function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [dropdown, setDropdown] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  
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

  
  const toggleUserMenu = () => setShowUserMenu(!showUserMenu);

  
  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Urban Rides
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/" className="nav-links">Home</Link>
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
          <Link to="/about-us" className="nav-links">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact-us" className="nav-links">Contact Us</Link>
        </li>

      
        {isAuthenticated ? (
          <li className="nav-item user-icon-container">
            <img
              src={userIcon}
              alt="User"
              className="user-icon"
              onClick={toggleUserMenu}
            />
            {showUserMenu && (
              <div className="user-dropdown">
                <Link to="/my-orders">My Orders</Link>
                <Link to="/my-profile">My Profile</Link>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </div>
            )}
          </li>
        ) : (
          <li className="nav-item">
            <Link to="/log-in">
              <button className="nav-button">Login</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
