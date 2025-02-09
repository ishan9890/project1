import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../pages/loginsignup/AuthContext'; // Import AuthContext

const Button = () => {
  const { isAuthenticated } = useAuth(); // Get authentication state

  // Hide login button if the user is authenticated
  if (isAuthenticated) {
    return null;
  }

  return (
    <Link to="/log-in">
      <button className="btn">Login</button>
    </Link>
  );
}

export default Button;
