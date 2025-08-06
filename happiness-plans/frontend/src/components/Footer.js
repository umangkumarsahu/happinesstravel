import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Happiness Plans. All rights reserved.</p>
        <p>
          <strong>📞 Phone:</strong> 9109135533, 9109135530
        </p>
        <p>
          <strong>📧 Email:</strong> contact@happinessplans.in
        </p>
      </div>
    </footer>
  );
};

export default Footer;