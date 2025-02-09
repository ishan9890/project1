import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import email from "../../../images/mail.png";
import pass from "../../../images/pw.png";
import './Login.css';
import {useAuth} from './AuthContext';


const Login = () => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); 
  const {isAuthenticated,login} = useAuth();

  const handleLogin = (e) => {
    e.preventDefault(); 

    
    if (emailInput === "ishan@gmail.com" && passwordInput === "pass123") {
      
      login();
      
      navigate("/");
    } else {
      
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      <div className="mainn">
        <div className="container">
          <div className="boxes">
            <div className="box1">
              <div className="userForm">
                <div className="show">
                  <h1 className="txt-login">Login</h1>
                  <p className="sub">Login to your account!</p>
                </div>
                <div className="userData">
                  <form onSubmit={handleLogin}>
                    <div className="email">
                      <img src={email} alt="" height="20px" width="20px" />
                      <input
                        type="email"
                        placeholder="Email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        required
                      />
                    </div>
                    <div className="password">
                      <img src={pass} alt="" height="20px" width="20px" />
                      <input
                        type="password"
                        placeholder="Password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        required
                      />
                    </div>
                    {error && <p className="error-message">{error}</p>} 
                    <div className="button1">
                      <button type="submit" className="btn-text">
                        Login
                      </button>
                    </div>
                  </form>
                </div>
                <div className="signup">
                  <p>
                    don't have an account? <a href="/sign-up">Signup</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="box2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
