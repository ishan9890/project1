import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Bikes.css';

const bikes = [
  { id: 1, name: "Bike-1", image: "bike1" },
  { id: 2, name: "Bike-2", image: "bike2" },
  { id: 3, name: "Bike-3", image: "bike3" },
];

const Bikes = () => {
  const navigate = useNavigate();

  const handleBooking = (bikeName) => {
    navigate(`/booking?bike=${bikeName}`);
  };

  return (
    <div className="bike-rental">
      <h1>Available Bikes</h1>
      <div className="bike-list">
        {bikes.map((bike) => (
          <div key={bike.id} className="bike-item">
            <div className={`bike-image ${bike.image}`} role="img" aria-label={bike.name}></div>
            <p>{bike.name}</p>
            <button className="book-btn" onClick={() => handleBooking(bike.name)}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bikes;
