import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import OrgRegistration from './components/OrgRegistration';
import Listings from './components/Listings';
import './components/Home.css';
import './components/OrgRegistration.css';
import './components/Listings.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/org-registration">Org Registration</Link>
            </li>
            <li>
              <Link to="/listings">Listings</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/org-registration" element={<OrgRegistration />} />
          <Route path="/listings" element={<Listings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
