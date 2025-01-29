import React from "react";
import email from "../../../images/mail.png";
import pass from "../../../images/pw.png";
import { Link } from "react-router-dom";
import './Login.css';



const Login=()=> {
    return (
        <div>
        <div className="main">
        <div className="container">
            <div className="boxes">
            <div className="box1">
                <div className="userForm">
                    <div className="show">
                        <h1 className="txt-login">Login</h1>
                        <p className="sub">Login to your account!</p>
                    </div>
                    <div className="userData">
                        <form>
                            <div className="email">
                                <img src={email} alt="" height= '20px' width = '20px' />
                                <input type="email" placeholder="Email"/>
                            </div>
                            <div className="password">
                                    <img src={pass} alt="" height= '20px' width = '20px'/>
                                    <input type="password" placeholder="Password"/>
                            </div>
                        <div className="button1">
                            <button className="btn-text">Login</button>
                        </div>
                        </form>
                    </div>
                    <div className="signup">
                        <p>don't have an account?  <a href ="/sign-up">Signup</a></p>
                    </div>
            
                </div>    
            </div>
            <div className="box2">
                
            </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default Login;