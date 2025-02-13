import React, {useState} from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './Components/pages/loginsignup/AuthContext.jsx'



import "./Components/pages/loginsignup/Login.css"


import Aboutus from './Components/pages/Aboutus'
import Bikes from './Components/pages/Bikes'
import Bus from './Components/pages/Bus'
import Cars from './Components/pages/Cars'
import Contact from './Components/pages/Contact'
import Home from './Components/pages/Home'
import Login from './Components/pages/loginsignup/Login.jsx'
import Vehicles from './Components/pages/Vehicles'
import Booking from './Components/pages/Booking';
import Signup from './Components/pages/loginsignup/Signup.jsx';
import Verify from './Components/pages/Verify.jsx';
import PaymentMethods from './Components/pages/PaymentMethods.jsx';
import MyProfile from './Components/pages/MyProfile.jsx';
import MyOrders from './Components/pages/MyOrders.jsx';

const App=()=> {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthProvider>
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/vehicles" element={<Vehicles/> } />
        <Route path="/about-us" element={<Aboutus />} />
        <Route path="/contact-us" element={<Contact/>} />
        <Route path="/log-in" element={<Login setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/bikes" element={<Bikes/>} />
        <Route path="/bus" element={<Bus/>} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/sign-up" element={<Signup/>} />
        <Route path="/verify" element={<Verify/>} />
        <Route path="/paymentmethods" element={<PaymentMethods/>} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-orders" element={<MyOrders />} />

      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App;
