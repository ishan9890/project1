import React from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";


const Booking = () => {
  const navigate = useNavigate();

  const handleBooking=()=>{
    navigate('/verify')
  }
  return (
    <div className="booking-container">
      <h2 className="booking-title">Booking</h2>
      <p className="booking-subtitle">*Indicates required field</p>

      <div className="booking-form">
        <label className="booking-label">Pick-up Location*</label>
        <input type="text" className="booking-input" placeholder="Enter location" />

        <div className="booking-row">
          <div>
            <p className="booking-text">Pick-up Date</p>
            <input type="date" className="booking-input" />
          </div>
          <div>
            <p className="booking-text">Pick-up Time</p>
            <input type="time" className="booking-input" />
          </div>
        </div>

        <label className="booking-label">Return Location*</label>
        <input type="text" className="booking-input" placeholder="Enter location" />
        <div className="booking-row">
          <div>
            <p className="booking-text">Return Date</p>
            <input type="date" className="booking-input" />
          </div>
          <div>
            <p className="booking-text">Return Time</p>
            <input type="time" className="booking-input" />
          </div>
        </div>

        <div className="booking-row">

          <button className="booking-button" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
