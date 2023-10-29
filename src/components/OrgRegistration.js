import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './OrgRegistration.css';

function OrgRegistration() {
  const location = useLocation();

  // State variables to capture form input
  const [orgName, setOrgName] = useState('');
  const [orgImage, setOrgImage] = useState('');
  const [orgDescription, setOrgDescription] = useState('');
  const [carbonCreditsNeeded, setCarbonCreditsNeeded] = useState('');

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // You'll need to implement the logic for interacting with your smart contract here
    // Call a function to register the organization with the provided data

    // Reset form fields
    setOrgName('');
    setOrgImage('');
    setOrgDescription('');
    setCarbonCreditsNeeded('');
  };

  return (
    <div>
      <div className="org-registration-content">
        <h2>Organization Registration</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Organization Name:</label>
            <input
              type="text"
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Organization Image URL:</label>
            <input
              type="text"
              value={orgImage}
              onChange={(e) => setOrgImage(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Organization Description:</label>
            <textarea
              value={orgDescription}
              onChange={(e) => setOrgDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Carbon Credits Needed:</label>
            <input
              type="number"
              value={carbonCreditsNeeded}
              onChange={(e) => setCarbonCreditsNeeded(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register Organization</button>
        </form>
      </div>
    </div>
  );
}

export default OrgRegistration;
