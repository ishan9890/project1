import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cars.css';

const Cars = () => {
  const navigate = useNavigate();

  const handleBooking = () => {
    navigate('/booking');
  };

  return (
    <div className="car-rental">
      <h1>Available Cars</h1>
      <div className="car-list">
        <div className="car-item">
          <div className="car-image car1"></div>
          <p>Car-1</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="car-item">
          <div className="car-image car2"></div>
          <p>Car-2</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
        <div className="car-item">
          <div className="car-image car3"></div>
          <p>Car-3</p>
          <button className="book-btn" onClick={handleBooking}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
