
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Components/Home/home';
import Cake from './Components/Cake/cake';
import SearchBar from './Components/Search/search';
import LoginSignup from './Components/LoginSignup/loginSignup';
import Register from './Components/Register/register';
import AboutUs from './Components/AboutUs/aboutUs';
import Category from './Components/Category/category';

import './Navbar.css';

const MainPage = () => <div>Main Page</div>;
const CakeShop = () => <div>CakeShop Page</div>;


function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (searchTerm) => {
    // Perform your search logic here (e.g., fetch data from an API)
    // For this example, we'll just log the search term.
    console.log('Searching for:', searchTerm);
  };



  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" bg="primary" data-bs-theme="dark">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/aboutUs">About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cake" element={<Cake />} />
          <Route path="/loginSignup" element={<LoginSignup />} />
          <Route path="/register" element={<Register />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/category" element={<Category />} />
        </Routes>

        <SearchBar onSearch={handleSearch} />
      </div>
    </Router>
  );
}

export default App;

