import React from "react";
import "./PaymentMethods.css";

const PaymentMethods = () => {
  return (
    <div className="background">
      <div className="payment-container">
        <h2 className="payment-title">Payment Methods</h2>
        <div className="payment-options">
          <div className="payment-item">
            <div className="payment-image khalti"></div>
            <button className="payment-button">Pay with Khalti</button>
          </div>
          <div className="payment-item">
            <div className="payment-image esewa"></div>
            <button className="payment-button">Pay with Esewa</button>
          </div>
          <div className="payment-item">
            <div className="payment-image imepay"></div>
            <button className="payment-button">Pay with IME Pay</button>
          </div>
          <div className="payment-item">
            <div className="payment-image hamropay"></div>
            <button className="payment-button">Pay with Hamro Pay</button>
          </div>
          <div className="payment-item">
            <div className="payment-image bank"></div>
            <button className="payment-button">Bank Transfer</button>
          </div>
        </div>
        <p className="or-text">OR</p>
        <button className="cash-button">Cash Payment</button>
      </div>
    </div>
  );
};

export default PaymentMethods;
