import React, { useState } from "react";
import "./MyProfile.css";

function MyProfile() {
  const [formData, setFormData] = useState({
    gender: "Male",
    contact: "",
    email: "",
    password: "",
    address: "",
    city: "",
    province: "Province 1",
  });

  const [showPassword, setShowPassword] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUpdate = () => {
    alert("Profile updated successfully!");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      alert("Account deleted!");
    }
  };

  return (
    <div className="profile-container">
      <h2>Your Details</h2>
      <p>Please fill out these fields</p>

      <div className="form-grid">
        <div className="form-group">
          <label>Gender</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Contact Number</label>
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group password-field">
          <label>Password</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              {showPassword ? "👁️" : "🙈"}
            </span>
          </div>
        </div>

        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
          />
        </div>

        <div className="form-group">
          <label>City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="Enter your city"
          />
        </div>

        <div className="form-group">
          <label>Province/State</label>
          <select name="province" value={formData.province} onChange={handleChange}>
            <option>Province 1</option>
            <option>Province 2</option>
            <option>Bagmati</option>
            <option>Gandaki</option>
            <option>Lumbini</option>
            <option>Karnali</option>
            <option>Sudurpashchim</option>
          </select>
        </div>
      </div>

      <div className="button-group">
        <button className="update-btn" onClick={handleUpdate}>Update</button>
        <button className="delete-btn" onClick={handleDelete}>Delete Your Account</button>
      </div>
    </div>
  );
}

export default MyProfile;
