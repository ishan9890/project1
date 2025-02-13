import React, { useState } from "react";
import "./MyOrders.css";

function MyOrders() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      vehicle: "Car",
      price: 5000,
      date: "2025-02-15",
      quantity: 2,
      
    },
    
    {
      id: 2,
      vehicle: "Bike",
      price: 1500,
      date: "2025-02-25",
      quantity: 3,
      
    },
  ]);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      setOrders(orders.filter((order) => order.id !== id));
    }
  };

  return (
    <div className="orders-container">
      <h2>My Orders</h2>
      <p>Here are your booked vehicles:</p>

      {orders.length === 0 ? (
        <p>No orders available.</p>
      ) : (
        <table className="orders-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Vehicle</th>
              <th>Price</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>
                  <img src={order.image} alt={order.vehicle} className="vehicle-img" />
                </td>
                <td>{order.vehicle}</td>
                <td>Rs. {order.price}</td>
                <td>{order.date}</td>
                <td>{order.quantity}</td>
                <td>
                  <button className="cancel-btn" onClick={() => handleCancel(order.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default MyOrders;
