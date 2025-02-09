import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('auth') === 'true'; // ✅ Check localStorage on load
  });

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('auth', 'true'); // ✅ Persist login state
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('auth'); // ✅ Remove login state
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
