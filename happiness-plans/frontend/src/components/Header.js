import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/destinations">Destinations</Link></li>
          <li><Link to="/planner">Plan Your Trip</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;