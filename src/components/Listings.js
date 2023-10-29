import React from 'react';
import './Listings.css'; // Import your CSS file

function Listings() {
  const listings = [
    { user: 'User 1', carbonAmount: 50, price: '5  CRED' },
    { user: 'User 2', carbonAmount: 30, price: '3 CRED' },
    // Add more listings here
  ];

  return (
    <div className="listings-container">
      {listings.map((listing, index) => (
        <div key={index} className="listing-card">
          <p>User: {listing.user}</p>
          <p>Carbon Amount: {listing.carbonAmount} credits</p>
          <p>Price: {listing.price}</p>
          <button className="buy-button">Buy</button> {/* Add a Buy button */}
        </div>
      ))}
    </div>
  );
}

export default Listings;
