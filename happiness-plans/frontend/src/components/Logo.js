import React from 'react';
import logo from '../assets/logo/happiness-logo.svg';

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logo} alt="Happiness Plans Logo" className="happiness-logo" />
    </div>
  );
};

export default Logo;