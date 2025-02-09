import React from 'react'
import email from "../../../images/mail.png";
import pass from "../../../images/pw.png";
import name from "../../../images/username.png";

const Signup = () => {
  return (
    <>
        <div className="mainn">
                <div className="container">
                    <div className="boxes">
                    <div className="box2">
                         
                    </div>
                    <div className="box1">
                    <div className="userForm">
                            <div className="show">
                                <h1 className='txt-login'>Signup</h1>
                                <p className='sub'>Sign Up to your account!</p>
                            </div>
                            <div className="userData">
                                <form>
                                <div className="email">
                                        <img src={name} alt="" height= '20px' width = '20px' />
                                        <input type="text" placeholder="Username"/>
                                    </div>
                                    <div className="email">
                                        <img src={email} alt="" height= '20px' width = '20px' />
                                        <input type="email" placeholder="Email"/>
                                    </div>
                                    <div className="password">
                                            <img src={pass} alt=" " height= '20px' width = '20px'/>
                                            <input type="password" placeholder="Set Password"/>
                                    </div>
                                <div className="button1">
                                    <button className='btn-text'>Sign up</button>
                                </div>
                                </form>
                            </div>
                            <div className="signup">
                                <p>already have an account?  <a href ="/log-in">Log In</a></p>
                            </div>
                    
                        </div>   
                    </div>
                    </div>
                </div>
                </div>
    </>    
    

  )
}

export default Signup;