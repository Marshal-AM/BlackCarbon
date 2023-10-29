import React from 'react';
import './Home.css'; // Make sure to import the CSS file

function Home() {
  // Sample data for demonstration
  const userCarbonCredits = 100;
  const latestListings = [
    { user: 'User 1', carbonAmount: 50, price: '5 CRED' },
    { user: 'User 2', carbonAmount: 30, price: '3 CRED' },
  ];

  const userYourListings = [
    { user: 'Grape', carbonAmount: 40, price: '4 CRED' },
    // Add more listings here
  ];

  return (
    <div className="home-container">
      <div className="latest-listings">
        <h2>Latest Listings</h2>
        {latestListings.map((listing, index) => (
          <div key={index}>
            <p>User: {listing.user}</p>
            <p>Carbon Amount: {listing.carbonAmount} credits</p>
            <p>Price: {listing.price}</p>
          </div>
        ))}
      </div>
      <div className="right-panel">
        <div className="your-carbon-credits">
          <h2>Your Carbon Credits:</h2>
          <p>{userCarbonCredits} credits</p>
        </div>
        <div className="your-listings">
          <h2>Your Listings:</h2>
          {userYourListings.map((listing, index) => (
            <div key={index}>
              <p>User: {listing.user}</p>
              <p>Carbon Amount: {listing.carbonAmount} credits</p>
              <p>Price: {listing.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
