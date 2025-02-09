import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bikes.css';

const Bikes = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="Bike-rental">
      <h1>Available Bikes</h1>
      <div className="Bike-list">
        <div className="Bike-item">
          <div className="Bike-image Bike1"></div>
          <p>Bike-1</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="Bike-item">
          <div className="Bike-image Bike2"></div>
          <p>Bike-2</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="Bike-item">
          <div className="Bike-image Bike3"></div>
          <p>Bike-3</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Bikes;
