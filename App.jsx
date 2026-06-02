import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './components/AboutUs';

// ===== NAVBAR =====
function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">🌿 Paradise Nursery</Link>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/plants">Plants</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li>
          <Link to="/cart" className="cart-icon-wrapper">
            🛒
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

// ===== LANDING PAGE =====
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>🌿 Paradise Nursery</h1>
        <p>
          Bring nature indoors. Discover our handpicked collection of lush,
          vibrant houseplants — lovingly grown and ready to transform your space.
        </p>
        <button
          className="get-started-btn"
          onClick={() => navigate('/plants')}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

// ===== APP WITH ROUTING =====
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page has no navbar */}
        <Route path="/" element={<LandingPage />} />

        {/* All other pages get navbar */}
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/plants" element={<ProductList />} />
                <Route path="/cart" element={<CartItem />} />
                <Route path="/about" element={<AboutUs />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
