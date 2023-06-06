import React from 'react';
import '../components/Navbar.css';
const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-logo">
      YourChallenge
    </div>
    <ul className="navbar-links">
      <li className="navbar-link">
        <a href="#">Product</a>
      </li>
      <li className="navbar-link">
        <a href="#">Download</a>
      </li>
      <li className="navbar-link">
        <a href="#">Pricing</a>
      </li>
    </ul>
  </nav>
  )
}

export default Navbar