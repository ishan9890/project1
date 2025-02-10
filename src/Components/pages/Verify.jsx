import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Verify.css";

const Verification = () => {
  const [licenseFile, setLicenseFile] = useState(null);
  const [citizenshipFile, setCitizenshipFile] = useState(null);

  const navigate = useNavigate(); 

  const handleFileChange = (event, setFile) => {
    const file = event.target.files[0];
    if (file) {
      setFile(file.name);
    }
  };

  const handleNext = () => {
    
    navigate("/paymentmethods");
  };

  return (
    <div className="container-3">
      <div className="verification-box">
        <h1 className="title">Verification</h1>

        <h2 className="section-title">Driving License</h2>
        <div className="upload-box">
          <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange(e, setLicenseFile)}
            />
            Choose File
          </label>
          <p className="file-name">{licenseFile || "or drag and drop them here"}</p>
        </div>

        <h2 className="section-title">Citizenship</h2>
        <div className="upload-box">
          <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*,.pdf"
              onChange={(e) => handleFileChange(e, setCitizenshipFile)}
            />
            Choose File
          </label>
          <p className="file-name">{citizenshipFile || "or drag and drop them here"}</p>
        </div>

        <p className="verification-text">It may take time to verify</p>

        {/* Add the onClick handler to the Next button */}
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Verification;
